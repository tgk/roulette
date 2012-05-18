(ns roulette.core
  (:require-macros [hiccups.core :as hiccups])
  (:require [clojure.string :as string]
  	    [jayq.core :as jq]
            [hiccups.runtime :as hiccupsrt]))

(defn extract-items [s]
  (string/split s "\n"))

(def input-area (jq/$ :#input-area))

(defn current-items []
  (extract-items (jq/val input-area)))

(hiccups/defhtml list-items [items]
  [:ul
    (for [item items]
      [:li item])])

(def mirrored-text (jq/$ :#mirrored-text))

(defn mirror-text []
  (jq/inner mirrored-text (list-items (current-items))))

(defn ^:export init []
  (.log js/console "Init starting")
  (mirror-text)
  (jq/bind input-area :input mirror-text))

;; Running the roulette

(def current-item (jq/$ :#current-item))

;; Handling current items

(defn example [seq]
  {:head (head seq)
   :next (example (rest seq))})

(def items (atom nil))

(defn reset-roulette! []
  (reset! items (cycle (current-items))))

(defn change-to-next []
  (swap! items rest))

(defn ^:export log-next! []
  (jq/inner current-item (first (change-to-next))))

;; Timer

(def worker (atom nil))

(defn ^:export startroulette []
  (.log js/console "Starting roulette")
  (reset-roulette!)
  (swap! worker
	 (fn [worker-val]
	   (when worker-val
	     (.clearTimeout js/window worker-val))
	   (.setInterval js/window log-next! 50))))

(defn ^:export stoproulette []
  (swap! worker
	 (fn [worker-val]
	   (when worker-val
	     (.clearTimeout js/window worker-val)
	     nil))))
