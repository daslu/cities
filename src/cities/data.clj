(ns cities.data
  (:require [incanter.io :as iio]
            [incanter.core :as i :refer [$ $where $join $group-by dim]]
            [clojure.core.matrix.dataset :as md :refer [dataset to-map row-maps]]
            [clojure.core.matrix.protocols :as mp]
            [clj-utils.cols-and-rows :as car]
            [clojure.algo.generic.functor :refer [fmap]]))

(defmacro mft [form]
  `(memoize (fn [] (time ~form))))


(def ordered-values
  {:religion ["יהודי"
              "מוסלמי"
              "נוצרי"
              "דרוזי"
              "אחר / לא ידוע / ללא סיווג דת"]
   :origin ["ישראל"
            "אסיה"
            "אפריקה"
            "אירופה"
            "אמריקה-אוקיאניה"
            "NA"]})

(def periods
  ["עד 1947"
   "1948-1954"
   "1955-1964"
   "1965-1974"
   "1975-1984"
   "1985-1989"
   "1990-1994"
   "1995-1999"
   "2000-2004"
   "2005 ויותר"
   "לא ידוע"
   "גר ביישוב מלידה"
   "בני 0-14"])

(defn split-equally [num coll]
  "Split a collection into a vector of (as close as possible) equally sized parts"
  (loop [num num
         parts []
         coll coll
         c (count coll)]
    (if (<= num 0)
      parts
      (let [t (quot (+ c num -1) num)]
        (recur (dec num) (conj parts (take t coll)) (drop t coll) (- c t))))))
(defmacro dopar [thread-count [sym coll] & body]
  `(doall (pmap
           (fn [vals#]
             (doseq [~sym vals#]
               ~@body))
           (split-equally ~thread-count ~coll))))



(def h2008
  (let [f (future
            (->> "data/h2008digest.csv"
                 car/read-cols-and-rows
                 vals
                 (apply md/dataset)))]
    (memoize
     (fn [] @f))))

(def city-code-frequencies
  (let [f (future
            (->> (h2008)
                 md/to-map
                 :cityCode
                 frequencies
                 (map (fn [[code freq]]
                        {:code (Integer/parseInt code)
                         :freq freq}))
                 i/to-dataset))]
    (fn [] @f)))

(def cities-map
  (mft
   (->> (iio/read-dataset "data/yishuv-name-code-fixed.csv" :header true)
        ($join [:code :code]
               (iio/read-dataset "data/city.centers.csv" :header true))
        ($join [:code :code]
               (city-code-frequencies))
        md/row-maps
        (filter (and :x :y))
        (map (fn [row] [(:code row) row]))
        (apply concat)
        (apply hash-map))))


(def h2008-grouped-by-period
  (mft (into {}
             ($group-by :year.entered (h2008)))))

(def h2008-grouped-by-city
  (memoize (fn [period]
             (if (= "הכל" period)
               ($group-by :cityCode (h2008))
               ($group-by :cityCode ((h2008-grouped-by-period) {:year.entered period}))))))

(def possible-values
  (mft
   (into {}
         (for [column-name [:religion :origin]]
           [column-name (->> (h2008)
                             to-map
                             column-name
                             distinct)]))))

(def get-freqs
  (memoize (fn [city-code column-name period]
             (do
               (let [freqs-map (or (if-let [data (->> {:cityCode (str city-code)}
                                                      ((h2008-grouped-by-city period)))]
                                     (->> data
                                          to-map
                                          column-name
                                          frequencies))
                                   {})]
                 (vec (for [val (ordered-values column-name)]
                        {:x val
                         :y (or (freqs-map val)
                                0)}
                        )))))))

;; (defn get-proportion [city-code column-name value]
;;   (->> {:cityCode (str city-code)}
;;        ((h2008-grouped-by-city))
;;        to-map
;;        column-name
;;        (map #(= % value))
;;        frequencies))



(defn probability-to-color
  [prob]
  (let [prob256 (int (* 256 prob))]
    (format "#%06X"
            (+ (- 256 prob256)
               ;;(* 256 255)
               (* 256 256 prob256)))))


#_(defn rgb-to-color
    [r g b]
  (format "#%06X"
          (+ (* 65536 (int (* 256 r)))
             (* 256 (int (* 256 g)))
             (int (* 256 b)))))

(defn proportion [predicate aseq]
  (/ (count (filter predicate aseq))
     (count aseq)))

(def get-proportions
  (memoize (fn [column-name val period]
             (->> (h2008-grouped-by-city period)
                  (map (fn [[city-code sub-dataset]]
                         [(Integer/parseInt (:cityCode city-code))
                          (->> sub-dataset
                               to-map
                               column-name
                               (proportion #(= val %)))]))
                  (into {})))))

(def get-colors
  (memoize (fn [column-name val period]
             (let [props (get-proportions column-name val period)
                   sorted-prop-vals (->> props vals distinct sort)
                   rescaling (->> sorted-prop-vals
                                  (map-indexed (fn [index prop]
                                                 [prop
                                                  (/ index (inc (count sorted-prop-vals)))]))
                                  (into {}))]
               (into {}
                     (for [city-code (keys (cities-map))]
                       [city-code
                        (probability-to-color (or (if-let [prop (props city-code)]
                                                    (rescaling prop))
                                                  1/256))]))))))

(binding [*print-length* 3]
  (do (future (println (cities-map)))
      (future (println (possible-values)))
      (doseq [column-name [:religion :origin]
              val (ordered-values column-name)]
        (dopar 4 [period (cons "הכל" periods)]
               (println [column-name val period (get-colors column-name val period)])))
      (doseq [column-name [:religion :origin]
              period (cons "הכל" periods)]
        (dopar 4 [city-code (keys (cities-map))]
               (println [city-code column-name period (get-freqs city-code column-name period)])))))



(defn get-all []
  (time {:cities-map (cities-map)
         :possible-values (possible-values)
         :freqs (into {} (for [city-code (keys (cities-map))
                               column-name [:religion :origin]
                               period periods]
                           [{:city-code city-code
                             :column-name column-name
                             :period period}
                            (get-freqs city-code
                                       column-name
                                       period)])) 
         :proportions (into {} (for [column-name [:religion :origin]
                                     val (ordered-values column-name)
                                     period periods]
                                 [{:column-name :column-name
                                   :val val
                                   :period period}
                                  (get-proportions column-name
                                                   val
                                                   period)]))
         :colors (into {} (for [column-name [:religion :origin]
                                val (ordered-values column-name)
                                period periods]
                            [{:column-name :column-name
                              :val val
                              :period period}
                             (get-colors column-name
                                         val
                                         period)]))}))
   






