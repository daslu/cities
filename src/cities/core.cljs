(ns cities.core 
  (:require  [reagent.core :as reagent :refer [atom]]
             [reagent-forms.core :refer [bind-fields init-field value-of]]
             [figwheel.client :as fw]
             ;; [json-html.core :refer [edn->html]]
             [ajax.core :refer [POST]]
             [markdown.core :as md]
             [cljs.core.async :as async :refer [<! chan close! put!]])
  (:require-macros
    [cljs.core.async.macros :refer [go alt!]]))


(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:left {:code 70}
                          :right {:code 2800}
                          :comparison {}}))
(def doc (atom {:char "מוצא"
                :val "אפריקה"
                :period-type "היגרו לישוב בתקופה מסוימת"
                :chosen-period "1948-1954"}))

(def ordered-values
  {:religion ["יהודי"
              "נוצרי"
              "מוסלמי"
              "דרוזי"
              "אחר / לא ידוע / ללא סיווג דת"]
   :origin ["ישראל"
            "אסיה"
            "אירופה"
            "אמריקה-אוקיאניה"
            "אפריקה"
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
   "בני 0-14"
   "הכל"])

(def periods-entered
  ["עד 1947"
   "1948-1954"
   "1955-1964"
   "1965-1974"
   "1975-1984"
   "1985-1989"
   "1990-1994"
   "1995-1999"
   "2000-2004"
   "2005 ויותר"])


(defn draw-chart [{:keys [colors data-series div bounds x-axis y-axis plot]}]
  (let [{:keys [id width height]} div
        Chart        (.-chart js/dimple)
        svg          (.newSvg js/dimple (str "#" id) width height)
        dimple-chart (.setBounds (Chart. svg)
                                 (:x bounds) (:y bounds)
                                 (:width bounds) (:height bounds))
        x            (.addCategoryAxis dimple-chart "x" x-axis)
        y            (.addMeasureAxis dimple-chart "y" y-axis)]
    (doseq [[name data] data-series]
      (do ;;(println [name data])
          (let [s (.addSeries dimple-chart
                              name
                              plot
                              (clj->js [x y]))]
            (.addOrderRule x "x")
            (aset s "data" (clj->js data))
            (if-let [color (colors name)]
              (.assignColor dimple-chart name color)))))
    (.addLegend dimple-chart "60%" "10%" "40%" "40%" "left")
    (.draw dimple-chart)))

(defn get-chart-spec-with-id [id spec]
  (assoc-in spec
            [:div :id] id))


(defn chart-component [id side chart-spec]
  (do
    (let [setup (fn [] (do
                        [:div {:style {:position "relative"
                                       :direction "ltr"}
                               :react-key id ;; ensure React knows this is non-reusable
                               :ref id ;; label it so we can retrieve it via get-node
                               :id id}]))
          do-render! (fn [] (do
                             (let [n (.getElementById js/document id)
                                   spec (-> @app-state side :chart-spec)]
                               (while (.hasChildNodes n)
                                 (.removeChild n (.-lastChild n)))
                               (if spec
                                 (draw-chart (get-chart-spec-with-id
                                              id spec))))))]
      (reagent/create-class
       {:render setup
        :component-did-mount do-render!
        :component-did-update do-render!}))))

;; (def tile-url "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
;; (def attribution "&copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>")

(def tile-url "//{s}.tiles.mapbox.com/v3/jcheng.map-5ebohr46/{z}/{x}/{y}.png"),
(def attribution "Maps by <a href=\"http://www.mapbox.com/\">Mapbox</a>")

(defn create-map [{:keys [id latlng zoom]}]
  (let [m (-> js/L
              (.map id)
              (.setView (array (:lat latlng) (:lng latlng)) zoom))
        tiles (-> js/L (.tileLayer
                        tile-url
                        {:maxZoom 16
                         :attribution attribution}))]
    (.addTo tiles m)
    (swap! app-state #(assoc % :map m))
    m))

(defn drop-circle [map1 place color]
  (let [circle (-> (.addTo (.circle js/L
                                    (clj->js (vec (vals (:latlng place))))
                                    (* 10 (Math/sqrt (:size place)))
                                    #js {:color (or color
                                                    "#333333")
                                         :weight 2})
                           map1))]
    (.on circle "click" (fn [e] (swap! app-state
                                      assoc-in [:left :code] (:code place))))
    (.on circle "contextmenu" (fn [e] (swap! app-state
                                            assoc-in [:right :code] (:code place))))
    (swap! app-state
           #(update-in % [:circles] (partial cons circle)))))

(defn remove-circle [map1 circle]
  (.removeLayer map1 circle))

(defn map-component [id]
  (let [colors (:colors @app-state)
        setup (fn [] [:div {:style {:height 1200
                                   :width 400
                                   :position "relative"
                                   :display "inline-block"
                                   :padding "5px"}
                           :react-key id ;; ensure React knows this is non-reusable
                           :ref id ;; label it so we can retrieve it via get-node
                           :id id}])
        do-render! (fn [] (let [m (create-map {:id id
                                              :latlng {:lat 32 :lng 35}
                                              :zoom 9})]))]

    (reagent/create-class
     {:render setup
      :component-did-mount do-render!
      :component-did-update do-render!})))

(def cache (atom {}))
(def already-sent (atom {}))

(def eval-chans (atom {}))
(def eval-cache (atom {}))

(defn req-eval [path form transf]
  (let [code-string (pr-str form)
        update-state (fn [result]
                       (swap! app-state assoc-in
                              path (transf result)))
        update-cache-and-state (fn [result]
                                 (do (swap! eval-cache assoc
                                            code-string result)
                                     (update-state result)))]
    (if-let [result (@eval-cache code-string)]
      (update-state result)
      ;; else
      (if (not (@eval-chans code-string))
        (let [ch (chan 1)]
          ;; (println ["eval" code-string])
          (POST "/eval" {:params code-string
                         :handler (fn [response]
                                    (put! ch response)
                                    (close! ch))})
          (swap! eval-chans assoc
                 code-string ch)
          (go (-> ch
                  <!
                  :result
                  update-cache-and-state)))))))

(def char-to-key
  {"דת" :religion
   "מוצא" :origin})


(defn city-component [side]
  (or (if-let [cities-map (-> @app-state :cities-map)]
        (let [city (-> @app-state side :code cities-map :name)]
          [:h3 city]
          [:div {:style {:display "inline-block"
                         :padding "5px"
                         :width "30%"}}
           [:h3 city]
           [:div
            (let [chart-spec (-> @app-state
                                 side
                                 :chart-spec)]
              [chart-component
               (str "chart_" (name side))
               side
               chart-spec])]]))
      [:h3 "..."]))

(defn comparison-component []
  (if-let [cities-map (-> @app-state :cities-map)]
    (let [two-cities (for [side [:left :right]]
                       (-> @app-state side :code cities-map :name))]
      [:div {:style {:display "inline-block"
                     :padding "5px"}}
       [:h3 "השוואה"]
       [:div
        [chart-component
         (str "chart_comparison")]]])))


(defn render-cities! [themap colors]
  (if-let [cities (->> @app-state
                       :cities-map
                       vals
                       (filter :freq))]
    (do (if-let [circles (:circles @app-state)]
          (do (doseq [circle circles]
                (remove-circle themap circle))
              (swap! app-state
                     #(assoc-in % [:circles] []))))
        (doseq [city cities]
          (if-let [size (:freq city)]
            (let [place {:latlng {:lat (:y city)
                                  :lng (:x city)}
                         :name (:name city)
                         :size size
                         :code (:code city)}]
              (drop-circle themap place (colors (:code city)))))))))

(defn help-button [show-help?]
  [:h4 [:input {:type "button"
                :style {:background-color "#99dd99"}
                :value (if @show-help?
                         "להסתיר מבוא?"
                         "להציג מבוא?")
                :on-click #(swap! show-help? not)}]])


(def help
  [:div {:style {:background-color "#dddddd"}}
   [:h2 "מבוא"]
   [:h4 "שלום."
    ;; "
    ;; רקע על המאגר

    ;;  "
    ]
   ])


(def help-component
  (let [show-help? (atom false)]
    (fn []
      [:div
       [help-button show-help?]
       (if @show-help? help)
       (if @show-help?
         [help-button show-help?])])))

(defn req-chart [path city-code type char val period]
  (case type
    :freq (req-eval path
              (list 'cities.data/get-freqs city-code (char-to-key char) period)
              (fn [freqs]
                {:colors {"כל השאר"
                          "#9999ff"
                          "ערך נבחר"
                          "#ff9999"}
                 :div {:width "90%" :height 400}
                 :bounds {:x "5%" :y "15%" :width "80%" :height "50%"}
                 :x-axis "x" ;;char
                 :y-axis "y" ;;"שכיחות"
                 :plot js/dimple.plot.bar
                 :data-series {"כל השאר" (filter #(not= (:x %) val)
                                           freqs)
                               "ערך נבחר" (filter #(= (:x %) val)
                                                  freqs)}}))))

(defn req-comparison-chart [path city-names-by-code type char val period]
  (case type
    :freq (req-eval path
                    (into {} (for [[city-code city-name] city-names-by-code]
                               {city-name (list 'cities.data/get-freqs city-code (char-to-key char) period)}))
                    (fn [freqs-by-city-name]
                      (do
                        (println (for [[city-name freqs] freqs-by-city-name]
                                   {(str city-name ": כל השאר")
                                    (->> freqs
                                         (filter #(not= (:x %) val))
                                         (map (fn [xy]
                                                (update-in xy [:x] #(str " " city-name))))
                                         vec)
                                    (str city-name ": ערך נבחר")
                                    (->> freqs
                                         (filter #(= (:x %) val))
                                         (map (fn [xy]
                                                (update-in xy [:x] #(str " " city-name))))
                                         vec)}))
                        {:colors {(first (keys freqs-by-city-name)) "#339933"
                                  (second (keys freqs-by-city-name)) "#663366"}
                         :div {:width "60%" :height 400}
                         :bounds {:x "15%" :y "15%" :width "80%" :height "50%"}
                         :x-axis "x" ;;char
                         :y-axis "y" ;;"שכיחות"
                         :plot js/dimple.plot.bar
                         :data-series (apply conj
                                             (for [[city-name freqs] freqs-by-city-name]
                                               {(str city-name)
                                                (->> freqs
                                                     (map (fn [xy]
                                                            (update-in xy [:x] #(str % " " city-name)))))}))
                         ;; (apply conj
                         ;;        (for [[city-name freqs] freqs-by-city-name]
                         ;;          {(str city-name ": כל השאר")
                         ;;           (->> freqs
                         ;;                (filter #(not= (:x %) val))
                         ;;                (map (fn [xy]
                         ;;                       (update-in xy [:x] #(str % " " city-name)))))
                         ;;           (str city-name ": ערך נבחר")
                         ;;           (->> freqs
                         ;;                (filter #(= (:x %) val))
                         ;;                (map (fn [xy]
                         ;;                       (update-in xy [:x] #(str % " " city-name)))))}))
                         })))))

(defn req-charts [char val period]
  (do (doseq [side [:left :right]]
        (do
          (if-let [city-code (-> @app-state side :code)]
            (req-chart [side :chart-spec]
                       city-code
                       :freq
                       char
                       val
                       period))))
      (if-let [cities-map (:cities-map @app-state)]
        (do
          (let [city-codes (map (comp :code @app-state)
                                [:left :right])]
            (if (every? identity city-codes)
              (let [city-names-by-code (into {}
                                             (for [city-code city-codes]
                                               {city-code (-> city-code cities-map :name)}))]
                (req-comparison-chart [:comparison :chart-spec]
                                      city-names-by-code
                                      :freq
                                      char val period))))))))

(defn req-colors [char val period]
  (req-eval [:colors]
            (list 'cities.data/get-colors (char-to-key char) val period)
            identity))

(defn chooser-component [path values title]
  (let [option (fn [val]
                        [:input {:style {:display "inline-block"
                                         :padding "5px"
                                         :background (if (= (get-in @doc path)
                                                            val)
                                                       "#ff9999"
                                                       "#9999ff")}
                                 :type "button" :value val
                                 :on-click (fn []
                                             (swap! doc assoc-in path val))}])]
    [:div
     [:h4 {:style {:display "inline-block"
                         :padding "5px"}}
      (str title ":")]
     (for [val values]
       [option val])]))


(defn slider-component [path values title]
  (let [values (vec values)]
    [:div {:style {:width 1500}}
     [chooser-component path values title]
     [:h4 {:style {:display "inline-block"
                   :padding "5px"
                   :color "#aaaaaa"}}
      (str title ":")]
     [:input {:style {:display "inline-block"
                      :padding "5px"
                      :width "800px"}
              :type "range" :min 0 :max (dec (count values))
              :on-keypress #(js/alert "A")
              :on-change #(do
                            (swap! doc assoc-in
                                   path (values (-> % .-target .-value))))}]
     ]))

(req-eval [:cities-map]
          '(cities.data/cities-map)
          identity)

(req-eval [:possible-values]
          '(cities.data/possible-values)
          identity)

(defn get-period []
  (or (if-let [period-type (:period-type @doc)]
        (if (= period-type "היגרו לישוב בתקופה מסוימת")
          (if-let [chosen-period (:chosen-period @doc)]
            chosen-period)))
      "הכל"))

(defn app []
  (fn []
    [:div {:style {:width "100%" 
                   :direction "rtl"
                   :background-color "#aaaaaa"}}
     [:h1 {:style {:background-color "#dddddd"
                   :padding "5px"}}
      "ויזואליזציה של תנועות אוכלוסיה ליישובים שונים לאורך השנים"]
     [help-component]
     [:p (if-let [themap (:map @app-state)]
           (let [colors (or (:colors @app-state) {})]
             (do
               (println ["rendering cities" (get-period)])
               (render-cities! themap colors))
             "."))]
     [:div {:style {:float "right"}}
      [map-component "map"]]
     [:div
      [chooser-component
       [:char]
       ["דת" "מוצא"]
       "מאפיין לניתוח"]
      (if-let [possible-values (@app-state :possible-values)]
        [chooser-component
         [:val]
         (-> @doc :char char-to-key possible-values vec)
         "ערך נבחר"])
      [chooser-component
       [:period-type]
       ["כל האוכלוסיה"
        "היגרו לישוב בתקופה מסוימת"]
       "אוכלוסיה"]
      (if (= "היגרו לישוב בתקופה מסוימת" (@doc :period-type))
        [:div
         [slider-component
          [:chosen-period]
          periods-entered
          "תקופה"]])
      [:div [:p (do (if-let [char (@doc :char)]
                      (if-let [val (@doc :val)]
                        (do (req-charts char val (get-period))
                            (req-colors char val (get-period)))))
                    "")]]
      [city-component :right]
      [city-component :left]
      (if-let [chart-spec (-> @app-state :comparison :chart-spec)]
        [:div 
         [:h3 {:style {:display "inline-block"
                       :padding "5px"}}
          "השוואה"]
         [chart-component
          "comparison"
          :comparison
          chart-spec]
         ;; [:h4 {:style {:direction "ltr"}} (pr-str (dissoc chart-spec :plot))]
         ])]
     ;; [:h4 (pr-str (keys @app-state))]
     ;; [:h4 {:style {:direction "ltr"}}
     ;;  (pr-str
     ;;   (or (if-let [cities-map (-> @app-state :cities-map)]
     ;;         (-> @app-state :left :code (->) cities-map :name
     ;;             ))
     ;;       nil))
     ;;  ]
     ]))

;;start the app

;; (fw/watch-and-reload
;;  :jsload-callback (fn []
;;                     (reagent/render-component [app]
;;                                               (.getElementById js/document "main-area"))))

(reagent/render-component [app]
                          (.getElementById js/document "main-area"))
