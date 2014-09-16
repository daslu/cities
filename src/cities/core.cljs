(ns cities.core 
  (:require  [reagent.core :as reagent :refer [atom]]
             [reagent-forms.core :refer [bind-fields init-field value-of]]
             [figwheel.client :as fw]
             ;; [json-html.core :refer [edn->html]]
             [ajax.core :refer [POST]]
             [markdown.core :as md]
             [cljs.core.async :as async :refer [<! chan close! put!]]
             [markdown.core :refer [md->html]])
  (:require-macros
   [cljs.core.async.macros :refer [go alt!]]))


(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:left {:code 70}
                          :right {:code 2800}
                          :comparison {}}))
(def doc (atom {:char "מוצא"
                :val "אפריקה"
                :period-type "עברו לישוב בתקופה מסוימת"
                :chosen-period "1948-1954"}))

(def ordered-values
  {:religion ["יהודי"
              "נוצרי"
              "מוסלמי"
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


(defn draw-chart [{:keys [colors data-series div bounds x-axis y-axis plot order-rule x-axis-type]}]
  (let [{:keys [id width height]} div
        Chart        (.-chart js/dimple)
        svg          (.newSvg js/dimple (str "#" id) width height)
        dimple-chart (.setBounds (Chart. svg)
                                 (:x bounds) (:y bounds)
                                 (:width bounds) (:height bounds))
        x            (case x-axis-type
                       :category (.addCategoryAxis dimple-chart "x" "x")
                       :measure (.addMeasureAxis dimple-chart "x" "x"))
        y            (.addMeasureAxis dimple-chart "y" "y")]
    (if (= :measure x-axis-type)
      (let [xys (-> data-series vals first vec)]
        (doseq [xy xys]
          (let [aname (:name xy)]
            (let [s (.addSeries dimple-chart
                                aname
                                plot
                                (clj->js [x y]))]
              (aset s "data" (clj->js [xy]))
              (.assignColor dimple-chart
                            aname
                            (:color xy)
                            (:color xy)
                            0.5))))
        (aset y "overrideMin"
              (->> data-series vals first (map :y) (apply min) (+ -0.1))))
      ;; else
      (doseq [[name data] data-series]
        (do (let [s (.addSeries dimple-chart
                                name
                                plot
                                (clj->js [x y]))]
              (aset s "data" (clj->js data))
              (if-let [color (colors name)]
                (.assignColor dimple-chart name color))))))
    (if order-rule
      (.addOrderRule x (clj->js order-rule)))
    (if (not= :measure x-axis-type)
      (.addLegend dimple-chart "60%" "10%" "40%" "40%" "left"))
    (.draw dimple-chart)
    (.text (.-titleShape x) x-axis)
    (.text (.-titleShape y) y-axis)))

(defn get-chart-spec-with-id [id spec]
  (assoc-in spec
            [:div :id] id))


(defn chart-component [id path chart-spec-getter doc]
  (let [setup (fn [] [:div {:style {:position "relative"
                                   :direction "ltr"}
                           :react-key id ;; ensure React knows this is non-reusable
                           :ref id ;; label it so we can retrieve it via get-node
                           :id id}
                     ;; [:p (or (if-let [props (:proportions @app-state)]
                     ;;           (count props))
                     ;;         ".")]
                     ])
        do-render! (fn [] (let [n (.getElementById js/document id)
                               spec (if path
                                      (get-in @app-state path)
                                      (chart-spec-getter doc))]
                           (while (.hasChildNodes n)
                             (.removeChild n (.-lastChild n)))
                           (if (:div spec)
                             (draw-chart (get-chart-spec-with-id
                                          id spec)))))]
    (reagent/create-class
     {:render setup
      :component-did-mount do-render!
      :component-did-update do-render!})))

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
        setup (fn [] [:div {:style {:height 1100
                                   :width 300
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

(def scatter-chart-atom (atom {}))

(defn get-scatter-chart-spec [;; proportions char val
                              doc]
  (if-let [char (@doc :char)]
    (if-let [val (@doc :val)]
      (if-let [cities-map (:cities-map @app-state)]
        (if-let [proportions (:proportions @app-state)]
          (if-let [colors (:colors @app-state)]
            (let [data (vec
                        (for [city (vals cities-map)]
                          (let [code (:code city)]
                            {:x (or (proportions code)
                                    0)
                             :y (:y city)
                             :size (* 10 (Math/sqrt (:freq city)))
                             :color (colors code)
                             :name (:name city)})))]
              {:colors {}
               :div {:width "90%" :height 400}
               :bounds {:x "15%" :y "15%" :width "80%" :height "50%"}
               :x-axis (str "שכיחות יחסית של " char ": " val)
               :y-axis "קו רוחב"
               :plot js/dimple.plot.bubble
               :data-series {"יישובים" data}
               ;;:order-rule "x"
               :x-axis-type :measure})))))))

(defn req-eval [path form transf]
  (let [code-string (pr-str form)
        update-state (fn [result]
                       (do (swap! app-state assoc-in
                                  path (transf result))
                           (if (= path [:proportions])
                             (do
                               (swap! scatter-chart-atom
                                      assoc :chart-spec
                                      (get-scatter-chart-spec doc))))))
        update-cache-and-state (fn [result]
                                 (do (swap! eval-cache assoc
                                            code-string result)
                                     (update-state result)))]
    (if-let [result (@eval-cache code-string)]
      (update-state result)
      ;; else
      (if (not (@eval-chans code-string))
        (let [ch (chan 1)]
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
          [:div {:style {:display "inline-block"
                         :padding "5px"
                         :width "25%"}}
           [:h4 city]
           (case side
             :right [:p "(בחירה במפה על ידי לחיצת עכבר ימנית)"]
             :left [:p "(בחירה במפה על ידי לחיצת עכבר שמאלית)"])
           [:div
            (let [chart-spec (-> @app-state
                                 side
                                 :chart-spec)]
              [chart-component
               (str "chart_" (name side))
               [side :chart-spec]
               nil
               doc])]]))
      [:h4 "..."]))



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
                         "להסתיר הסבר?"
                         "להציג הסבר?")
                :on-click #(swap! show-help? not)}]])


(def help
  [:div {:style {:background-color "#dddddd"}}
   [:h2 "פרויקט סיום בקורס \"ויזואליזציה של נתונים\""]
   [:h3 "בהנחיית פרופ' יואב בנימיני ושי יעקבי"]
   [:h4 "מגישים: רועי גרנות ודניאל סלוצקי, ספטמבר 2014"]
   [:p "~~~"]
   [:p
    "פרויקט זה מציע כמה דרכים להתבונן בתנועה של קבוצות אוכלוסיה אל ערים שונות לאורך השנים.
התצוגה מבוססת על נתונים ממפקד האוכלוסין של 2008."
    ]
   [:h4
    "מוטיבציה"
    ]
   [:p
    "קובץ הנתונים מכיל בין השאר שיוך של הנשאלים למקום יישוב, לדת ולמוצא. הוא מכיל גם תשובה לשאלה הבאה:
באיזו שנה עברת לגור במקום היישוב הנוכחי? (התשובה מקובצת לתקופות של כ־10 שנים).
מידע זה מאפשר לבחון מעין 'שכבות ארכאולוגיות' של האוכלוסיות שהגיעו
ליישוב נתון בתקופות שונות."
    ]
   [:p
    "יש כאן, אם כן, נתונים רב־מימדיים של מאפייני אוכלוסיה, המשתנים על פני
המרחב הגאוגרפי ולאורך זמן."
    ]
   [:p
    "דרך אחת אפשרית להציג תהליכי שינוי בין תקופות היא כמובן תצוגה שגרתית של
    סדרות עתיות, בה אחד הצירים הוא ציר הזמן. הפרויקט הנוכחי מציע דרך
    תצוגה נוספת, בתנועה הנשלטת על ידי המשתמש/ת. דרך זו עשויה להקל במקרים מסוימים על התפישה של תהליכי שינוי רב־מימדיים."
    ]
   [:p
    "כעת נציג את אופן השימוש בעמוד."
    ]
   [:h4
    "אפשרויות בחירה"
    ]
   [:p    
    "בראש העמוד יש אפשרות לבחור כמה בחירות:"
    ]
   [:ul
    [:li
     "א. מהו מאפיין
 האוכלוסיה שננתח? בתצוגה הנוכחית התמקדנו בשני מאפיינים (קטגוריאליים)
 אפשריים: מוצא ודת. אלה מאפיינים קבועים יחסית, שבהם ניתן להניח שתשובת
 הנשאל/ת בעת המפקד מעידה גם על מצבו/ה בעת המעבר לגור ביישוב."
     ]
    [:li
     " ב. באיזה ערך של מאפיין זה נתמקד? יש
 לבחור אחד מהערכים (לדוגמה 'מוסלמי' במקרה של המאפיין הדת). ערך זה יקבל
 התיחסות מיוחדת בייצוג החזותי."
     ]
    [:li
     "ג. איזו אוכלוסיה לנתח? אפשרות אחת היא לנתח שכיחויות של הקטגוריות
    השונות בקרב כל האוכלוסיה.
 האפשרות האחרת היא להצטמצם לאוכלוסיה של מי שנכנסו ליישובים (שבהם גרו
 בעת המפקד) בתקופה מסוימת."
     ]
    [:li
     "ד. במקרה שבחרנו להצטמצם לאוכלוסיה
 של מי שנכנסו בתקופה מסוימת, יש לבחור את התקופה (בלחיצה על התקופה המתאימה או בבחירה על הסרגל (slider))."
     ]
    [:li
     "כמו כן, יש לבחור שני יישובים שבהם נתמקד. יישוב אחד נבחר בלחיצת עכבר ימנית על העיגול המתאים במפה, ואת היישוב השני ־־ בלחיצה שמאלית."
     ]]
   [:p
    "כעת נסביר את התוצר החזותי של הבחירות הללו."
    ]
   [:h4
    "התצוגה"
    ]
   [:p
    " לכל יישוב מתאים צבע, המייצג את השכיחות היחסית של הערך הנבחר באוכלוסיה הנבדקת ביישוב זה.
    ככל שהצבע אדום יותר וכחול פחות, הערך שכיח יותר ביישוב זה, באופן יחסי ליישובים אחרים.
    השתמשנו בסרגל של צבעים מכחול לאדום עם מדה קבועה של כהות, בכוונה לקבל הבחנה חזותית סבירה בין הערכים השונים, מבלי שחלק מהם יבלטו יותר או פחות ביחס לרקע.
    מיפינו את הפרופורציות לצבעים כך שהצבעים יתפלגו באחידות על פני הסרגל (בקרב המקרים שבהם השכיחות אינה אפס). לבחירה זו יש חסרון ־־ המיפוי בין פרופורציות לצבעים תלוי בחתך הנבדק, ואין פרשנות אוניברסלית לצבעים. מצד שני, על פי נסיונותינו, התאמה אבסולוטית היתה יוצרת מיפוי שקשה מאד להבחין בהבדלים שבו, במקרה שבידנו."
    ]
   [:p
    "העיגולים במפה מתאימים כאמור ליישובים. שטחי העיגולים פרופורציונליים
    לגדלי המדגמים מיישובים אלה במפקד. הצבעים מוגדרים כפי שהסברנו
    לעיל (אפור במקרה של נתון חסר). תצוגה זו מאפשרת מבט על הפרישה
    הגאוגרפית של שכיחויות הערך הנבדק."
    ]
   [:p
    "תרשים הפיזור מציג את היישובים באותם צבעים, כאשר ציר ה־y מייצג עדיין את קוי
הרוחב, אבל ציר ה־x הוא השכיחות היחסית של הערך הנבחר בחתך הנבדק בכל יישוב.
ניתן להצביע על כל איבר ולראות את שם היישוב המתאים בבועה המופיעה.
התצוגה הזו משרתת שתי מטרות: א. להמחיש את השיוך בין צבעים לפרופורציות.
ב. לבחון כיצד השכיחויות של הערך הנבחר קשורות בציר גאוגרפי חשוב ־־ השיוך לקוי
רוחב. קוי הרוחב בארץ מעידים במדה רבה על השיוך של יישובים למרכז או
לפריפריה ועל דפוסי ההתישבות של מהגרים בתקופות השונות; אכן ניתן להבחין
בקשר לא לינארי (לדוגמה, בתקופות מסוימות הגיעה ההגירה מאירופה בעיקר למרכז,
ומאפריקה ואסיה ־־ לפריפריה)."
    ]
   [:p
    "תרשימי השכיחויות נותנים מבט מפורט יותר על היישובים שנבחרו. לכל אחד משני היישובים
יש תרשים שכיחויות נפרד, שבו מוצגות הקטגוריות של המאפיין בחתך הנבדק.
הערך הנבחר צבוע באדום, ושאר הערכים, בכחול."
    ]
   [:p
    "בנוסף, יש תרשים שכיחויות המציג את השכיחויות היחסיות בשני היישובים
(הפעם שכיחויות יחסיות ־־ על מנת שתהיה סקאלה משותפת להשוואה).
השתמשנו בו בצבעים שונים (ומובחנים זה מזה), על מנת למנוע בלבול ביחס לתרשימים הקודמים."
    ]
   [:p
    "הקפדנו על עקביות בסדר הקטגוריות בין התרשימים, כך שניתן יהי לתפוס דמיון ושוני
על ידי מבט בצורה הכללית שלהם, ללא צורך בעיון חוזר בשמות על הצירים."
    ]
   [:p
    "השריג של קוי היחוס מוצג בלבן על רקע אפור, כדי שלא להטריד בדיו מיותר את העין המנסה לתפוס את הנתונים המוצגים על פני הרקע."
    ]
   [:p
    "הזזה של הסרגל (slider) מאפשרת מבט בתנועה על השינוי בין תקופות שונות."
    ]
   [:h4
    "שיפורים אפשריים"
    ]
   [:ul
    [:li
     "ייתכן כי מעבר הדרגתי באנימציה היה מאפשר תפיסה ברורה יותר של תהליכי
שינוי. מסיבה טכנית לא מימשנו אנימציה כזו בפרויקט זה."
     ]
    [:li
     "מעניין יהיה לבחון תצוגה בתנועה לצד תצוגה שגרתית של סדרות עתיות, עם קישור ביניהן."
     ]]
   [:h4
    "מימוש"
    ]
   [:p
    "התוכנה נכתבה בשפת clojurescript ועושה שימוש בספרית הגרפים dimple
ובספרית המפות leaflet."
    ]])



(def help-component
  (let [show-help? (atom true)]
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
                       :bounds {:x "15%" :y "15%" :width "80%" :height "50%"}
                       :x-axis char
                       :y-axis "שכיחות"
                       :plot js/dimple.plot.bar
                       :data-series {"כל השאר" (filter #(not= (:x %) val)
                                                       freqs)
                                     "ערך נבחר" (filter #(= (:x %) val)
                                                        freqs)}
                       :order-rule (-> char char-to-key ordered-values reverse vec)
                       :x-axis-type :category}))))

(defn req-comparison-chart [path city-names-by-code type char val period]
  (case type
    :freq (req-eval path
                    (into {} (for [[city-code city-name] city-names-by-code]
                               {city-name (list 'cities.data/get-freqs city-code (char-to-key char) period)}))
                    (fn [freqs-by-city-name]
                      (let [city-names (keys freqs-by-city-name)]
                        {:colors {(first (keys freqs-by-city-name)) "#339933"
                                  (second (keys freqs-by-city-name)) "#663366"}
                         :div {:width "90%" :height 400}
                         :bounds {:x "15%" :y "15%" :width "80%" :height "50%"}
                         :x-axis char
                         :y-axis "שכיחות יחסית"
                         :plot js/dimple.plot.bar
                         :data-series (apply conj
                                             (for [[city-name freqs] freqs-by-city-name]
                                               (let [total (apply + (map :y freqs))]
                                                 {(str city-name)
                                                  (->> freqs
                                                       (map #(-> %
                                                                 (update-in [:x] (fn [x] (str x " -> " city-name)))
                                                                 (update-in [:y] (fn [y] (/ y total))))))})))
                         :order-rule (->> char
                                          char-to-key
                                          ordered-values
                                          (map (fn [x] (for [city-name city-names]
                                                        (str x " -> " city-name))))
                                          (apply concat)
                                          reverse
                                          vec)
                         :x-axis-type :category})))))

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

(defn req-proportions [char val period]
  (req-eval [:proportions]
            (list 'cities.data/get-proportions (char-to-key char) val period)
            identity))




(defn chooser-component [path values title]
  (let [values-set (into #{} values)
        option (fn [val]
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
     (if (not (values-set (get-in @doc path)))
       (swap! doc assoc-in path (first values)))
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
                                   path (values (-> % .-target .-value))))}]]))

(req-eval [:cities-map]
          '(cities.data/cities-map)
          identity)

(req-eval [:possible-values]
          '(cities.data/possible-values)
          identity)

(defn get-period []
  (or (if-let [period-type (:period-type @doc)]
        (if (= period-type "עברו לישוב בתקופה מסוימת")
          (if-let [chosen-period (:chosen-period @doc)]
            chosen-period)))
      "הכל"))

(defn scatter-component [id scatter-chart-atom]
  [:div
   [:p ""]
   (or (if-let [spec (:chart-spec @scatter-chart-atom)]
         [chart-component
          id
          nil
          (fn [] (:chart-spec @scatter-chart-atom))
          doc])
       [:h4 "..."])])


(defn app []
  (fn []
    [:div {:style {:width "100%" 
                   :direction "rtl"
                   :background-color "#aaaaaa"}}
     [:h2 {:style {:background-color "#dddddd"
                   :padding "5px"}}
      "ויזואליזציה של תנועות אוכלוסיה ליישובים שונים לאורך השנים"]
     [help-component]
     [:p (if-let [themap (:map @app-state)]
           (let [colors (or (:colors @app-state) {})]
             (do
               (render-cities! themap colors))
             "."))]
     [:div {:style {:float "right"}}
      [map-component "map"]]
     [:div
      [chooser-component
       [:char]
       ["דת" "מוצא"]
       "מאפיין לניתוח"]
      [chooser-component
       [:val]
       (-> @doc :char char-to-key ordered-values vec)
       "ערך נבחר"]
      [chooser-component
       [:period-type]
       ["כל האוכלוסיה"
        "עברו לישוב בתקופה מסוימת"]
       "אוכלוסיה"]
      (if (= "עברו לישוב בתקופה מסוימת" (@doc :period-type))
        [:div
         [slider-component
          [:chosen-period]
          periods-entered
          "תקופה"]])
      [:div [:p (do (if-let [char (@doc :char)]
                      (if-let [val (@doc :val)]
                        (do (req-charts char val (get-period))
                            (req-colors char val (get-period))
                            (req-proportions char val (get-period)))))
                    "")]]
      [city-component :right]
      [city-component :left]
      [:div {:style {:width "70%"}}
       (if-let [chart-spec (-> @app-state :comparison :chart-spec)]
         [:div {:style {:width "40%"
                        :display "inline-block"
                        :padding "5px"}}
          [:h4 {:style {:display "inline-block"
                        :padding "5px"}}
           "השוואה"]
          [chart-component
           "comparison"
           [:comparison :chart-spec]
           nil
           doc]
          ])
       [:div {:style {:width "30%"
                      :display "inline-block"
                      :padding "5px"}}
        [:h4 {:style {:display "inline-block"
                      :padding "5px"}}
         "כל היישובים"]
        [scatter-component "scatter" scatter-chart-atom]]]
      ]]))

;;start the app

;; (fw/watch-and-reload
;;  :jsload-callback (fn []
;;                     (reagent/render-component [app]
;;                                               (.getElementById js/document "main-area"))))

(reagent/render-component [app]
                          (.getElementById js/document "main-area"))
