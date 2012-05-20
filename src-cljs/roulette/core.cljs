(ns roulette.core
  (:require-macros [hiccups.core :as hiccups])
  (:require [clojure.string :as string]
  	    [jayq.core :as jq]
            [hiccups.runtime :as hiccupsrt]))

;; Handling hiding and showing elements

(def input-area (jq/$ :#input-area))
(def mirrored-text (jq/$ :#mirrored-text))
(def configuration-view (jq/$ :#configuration-view))
(def current-item (jq/$ :#current-item))
(def roulette-view (jq/$ :#roulette-view))
(def stop-button-view (jq/$ :#stop-button-view))
(def redo-button-view (jq/$ :#redo-button-view))

(defn hide-all []
  (jq/hide configuration-view)
  (jq/hide roulette-view)
  (jq/hide stop-button-view)
  (jq/hide redo-button-view))
  
(defn show-configuration []
  (hide-all)
  (jq/show configuration-view))

(defn show-roulette []
  (hide-all)
  (jq/show roulette-view)
  (jq/show stop-button-view))

(defn show-redo []
  (hide-all)
  (jq/show roulette-view)
  (jq/show redo-button-view))

;; Handling items

(defn extract-href [s]
  (let [tokens (string/split s " ")]
    (if (= 0 (.indexOf (last tokens) "http"))
      {:text (.substring s 0 (- (.-length s) (.-length (last tokens)))) :href (last tokens)}
      {:text s})))

(defn decorate-item [item]
  (let [{text :text href :href} (extract-href item)]
    (if href [:a {:href href} text] text)))

(defn extract-items [s]
  (map decorate-item (string/split s "\n")))

(defn current-items []
  (extract-items (jq/val input-area)))

(hiccups/defhtml list-items [items]
  [:ul
    (for [item items]
      [:li item])])

(defn mirror-text []
  (jq/inner mirrored-text (list-items (current-items))))

;; Initialise

(defn ^:export init []
  (show-configuration)
  (mirror-text)
  (jq/bind input-area :input mirror-text))

;; Running the roulette

(def items (atom nil))

(defn reset-roulette! []
  (reset! items (cycle (current-items))))

(defn change-to-next! []
  (swap! items rest))

(defn ^:export show-next! []
  (jq/inner current-item (hiccups/html (first (change-to-next!)))))

;; Timer

(def worker (atom nil))

(defn ^:export start []
  (show-roulette)
  (reset-roulette!)
  (swap! worker
	 (fn [worker-val]
	   (when worker-val
	     (.clearTimeout js/window worker-val))
	   (.setInterval js/window show-next! 100))))

(defn ^:export stop []
  (show-redo)
  (swap! worker
	 (fn [worker-val]
	   (when worker-val
	     (.clearTimeout js/window worker-val)
	     nil))))

(defn ^:export change []
  (show-configuration))