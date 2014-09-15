(defproject cities "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [com.facebook/react "0.11.1"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [lib-noir "0.8.4"]
                 [noir-exception "0.2.2"]
                 [ring-server "0.3.1"]
                 [cljs-ajax "0.2.6"]
                 [ring/ring-jetty-adapter "1.2.0"]
                 [reagent "0.4.2"]
                 [reagent-forms "0.1.7"]
                 [environ "0.5.0"]
                 [selmer "0.6.8"]
                 [com.taoensso/timbre "3.2.1"]
                 [com.taoensso/tower "2.0.2"]
                 ;; [json-html "0.2.2"]
                 [incanter/incanter-core "1.9.0-SNAPSHOT"]
                 [incanter/incanter-io "1.9.0-SNAPSHOT"]
                 [incanter/incanter-io "1.9.0-SNAPSHOT"]
                 [daslu/clj-utils "0.1.1-SNAPSHOT"]
                 [markdown-clj "0.9.47"]
                 [org.clojure/algo.generic "0.1.2"]]
  
  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]

  :ring {:handler cities.core/handler
        :init    cities.core/init
        :destroy cities.core/destroy}  
  
  :source-paths ["src"]
  
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/cities.js"
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :none
                         :source-map true}}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "www/cities.min.js"
                         :optimizations :advanced
                         :pretty-print false
                         :preamble ["react/react.min.js"]
                         :externs ["react/externs/react.js"]}}]}
  :figwheel {:http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449 ;; default
             :css-dirs ["resources/public/css"] ;; watch and update CSS
             :ring-handler cities.core/handler})
