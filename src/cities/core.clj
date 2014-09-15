(ns cities.core
  (:require [cities.middleware :refer [load-middleware]]
            [compojure.core :refer [defroutes GET POST]]
            [noir.response :refer [redirect edn]]
            [noir.util.middleware :refer [app-handler]]
            [compojure.route :as route]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.util.response :as response]
            [environ.core :refer [env]]
            [cities.data :as data]
            [incanter.io :as iio]
            [incanter.core :as i]
            [clojure.core.matrix.dataset :as md]
            [clojure.java.shell :refer [sh]]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.rotor :as rotor]
            [selmer.parser :as parser]))

;; (defn get-places []
;;   [{:lat 32 :lng 35 :size 10 :name "mark1"}
;;    {:lat 32.5 :lng 34 :size 5 :name "mark2"}])

(defn notify [message]
  ;; (sh "notify-send" message)
  (println message))

(defn eval-code [code]
  (do (notify code)
      (let [result (if code
                     (eval (read-string code)))]
        ;; (notify (pr-str [code result]))
        {:status "OK"
         :result result})))

(defroutes app-routes
  ;; (POST "/places" {:keys [body-params]}
  ;;       (edn (get-places)))
  (POST "/eval" {:keys [body-params]}
        (edn (eval-code body-params)))
  (GET "/" []
       (response/resource-response "index.html"
                                   {:root "public"}))
  (route/resources "/")
  (route/not-found "Not Found"))


(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info
     :enabled? true
     :async? false ; should be always false for rotor
     :max-message-per-msecs nil
     :fn rotor/appender-fn})

  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "om_example.log" :max-size (* 512 1024) :backlog 10})

  (if (env :dev) (parser/cache-off!))
  (timbre/info "om-example started successfully"))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (timbre/info "om-example is shutting down..."))


(def handler (app-handler
           ;; add your application routes here
           [app-routes]
           ;; add custom middleware here
           :middleware (load-middleware)
           ;; timeout sessions after 30 minutes
           :session-options {:timeout (* 60 30)
                             :timeout-response (redirect "/")}
           ;; add access rules here
           :access-rules []
           ;; serialize/deserialize the following data formats
           ;; available formats:
           ;; :json :json-kw :yaml :yaml-kw :edn :yaml-in-html
           :formats [:json-kw :edn]))
