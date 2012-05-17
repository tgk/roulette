(defproject roulette "0.0.1-SNAPSHOT"
  :description "A roulette for picking elements in an entertaining way"
  :dependencies [[org.clojure/clojure "1.3.0"]
		 [jayq "0.1.0-alpha2"]
		 [hiccups "0.1.1"]]
  :dev-dependencies [[lein-cljsbuild "0.1.6"]]
  :cljsbuild {:builds [#_{:source-path "src-cljs"
                        :compiler {:optimizations :simple
                                   :pretty-print true
                                   :output-to "resources/js/roulette.js"}}
                       {:source-path "src-cljs"
                        :compiler {:optimizations :advanced
                                   :externs ["externs/jquery.js"]
                                   :output-to "resources/js/roulette.js"}}]})
