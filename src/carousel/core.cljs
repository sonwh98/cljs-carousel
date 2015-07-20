(ns ^:figwheel-always carousel.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [com.famous.Famous]
            [carousel.util :as util :refer [events->chan attach-famous-node-to-scene-graph get-node-by-id render-scene-graph]]
            [cljs.core.async :refer [>! <! put! chan alts!]]))

(enable-console-print!)

(defonce famous js/famous)
(defonce Size (.. famous -components -Size))
(defonce physics (.. famous -physics))
(defonce math (.. famous -math))
(defonce FamousBox (.. physics -Box))
(defonce Spring (.. physics -Spring))
(defonce RotationalSpring (.. physics -RotationalSpring))
(defonce Quaternion (.. math -Quaternion))
(defonce Vec3 (.. math -Vec3))

(defonce ABSOLUTE (.. Size -ABSOLUTE))

(def image-names ["01_-_Autorretrato._Francisco_Goya_y_Lucientes2C_pintor_thumb.jpg"
                  "02_-_El_si_pronuncian_y_la_mano_alargan_al_primero_que_llega_thumb.jpg"
                  "03_-_Que_viene_el_Coco_thumb.jpg"
                  "04_-_El_de_la_rollona_thumb.jpg"
                  "05_-_Tal_para_qual_thumb.jpg"
                  "06_-_Nadie_se_conoce_thumb.jpg"
                  "07_-_Ni_asi_la_distingue_thumb.jpg"
                  "09_-_Tantalo_thumb.jpg"
                  "10_-_El_amor_y_la_muerte_thumb.jpg"
                  "11_-_Muchachos_al_avC3ADo_thumb.jpg"
                  "12_-_A_caza_de_dientes_thumb.jpg"
                  "13_-_Estan_calientes_thumb.jpg"])

(def scene-graph [{:node/id       "root"
                   :node/children [{:node/id            "back"
                                    :node/size-mode     [ABSOLUTE ABSOLUTE]
                                    :node/absolute-size [40 40]
                                    :node/position      [40 0 0]
                                    :node/align         [0 0.5 0]
                                    :node/mount-point   [0 0.5 0]
                                    :node/components    [{:component/type :DOMElement
                                                          :color          "white"
                                                          :fontSize       "40px"
                                                          :lineHeight     "40px"
                                                          :cursor         "pointer"
                                                          :textHighlight  "none"
                                                          :zIndex         "2"
                                                          :content        "<"}]}
                                   {:node/id            "next"
                                    :node/size-mode     [ABSOLUTE ABSOLUTE]
                                    :node/absolute-size [40 40]
                                    :node/position      [-40 0 0]
                                    :node/align         [1 0.5 0]
                                    :node/mount-point   [1 0.5 0]
                                    :node/components    [{:component/type :DOMElement
                                                          :color          "white"
                                                          :fontSize       "40px"
                                                          :lineHeight     "40px"
                                                          :cursor         "pointer"
                                                          :textHighlight  "none"
                                                          :zIndex         "2"
                                                          :content        ">"}]}
                                   {:node/id          "pager"
                                    :node/align       [0.5 0.5 0]
                                    :node/mount-point [0.5 0.5 0]
                                    :node/children    (for [image-name image-names
                                                            :let [url-base "http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._"
                                                                  image-url (str url-base image-name)
                                                                  url (str "url('" image-url "')")
                                                                  box (FamousBox. (clj->js {:mass 100 :size [100 100 100]}))
                                                                  anchor (Vec3. 1 0 0)
                                                                  quaternion (.. (Quaternion.) (fromEuler 0 (/ (.. js/Math -PI) -2) 0))]]
                                                        {:node/id            (str "page" (rand-int 100))
                                                         :node/size-mode     [ABSOLUTE ABSOLUTE ABSOLUTE]
                                                         :node/absolute-size [500 500 0]
                                                         :node/align         [0.5 0.5]
                                                         :node/mount-point   [0.5 0.5]
                                                         :node/origin        [0.5 0.5]
                                                         :node/components    [{:component/type    :DOMElement
                                                                               :backgroundImage   url
                                                                               :background-repeat "no-repeat"
                                                                               :background-size   "cover"}]
                                                         :node/physics       {:box               box
                                                                              :anchor            anchor
                                                                              :spring            (Spring. nil box (clj->js {:period 0.5 :dampingRatio 0.5 :anchor anchor}))
                                                                              :quaternion        quaternion
                                                                              :rotational-spring (RotationalSpring. nil box (clj->js {:period 1 :dampingRatio 0.2 :anchor quaternion}))}

                                                         })}
                                   {:node/id            "dots"
                                    :node/size-mode     [ABSOLUTE ABSOLUTE]
                                    :node/absolute-size [20 20]
                                    :node/position      [0 -50 0]
                                    :node/align         [0.5 1 0]
                                    :node/mount-point   [0.5 1 0]
                                    :node/components    [{:onSizeChange (fn [^Float32Array size]
                                                                          "NOTE: this call back is called only once because root-dot setSizeMode is ABSOLUTE (value of 1)"
                                                                          (let [dots (get-node-by-id "dots")
                                                                                dot-nodes (:node/children dots)
                                                                                size (IndexedSeq. size 0)
                                                                                dotWidth 10
                                                                                numPages 5
                                                                                spacing 5
                                                                                totalDotSize (+ (* numPages dotWidth)
                                                                                                (* spacing (dec numPages)))
                                                                                start-x (/ (- (nth size 0) totalDotSize)
                                                                                           2)]
                                                                            (doseq [n (-> image-names count range)
                                                                                    :let [dot-node (:node/famous-node (nth dot-nodes n))]]
                                                                              (.. dot-node (setPosition (+ start-x
                                                                                                           (* n
                                                                                                              (+ dotWidth spacing)))
                                                                                                        0
                                                                                                        0)))))}]
                                    :node/children      (for [i (-> image-names count range)]
                                                          {:node/id            (str "dot" (rand-int 100))
                                                           :node/size-mode     [ABSOLUTE ABSOLUTE]
                                                           :node/absolute-size [10 10]
                                                           :node/components    [{:component/type  :DOMElement
                                                                                 :borderRadius    "15px"
                                                                                 :border          "2px solid white"
                                                                                 :backgroundColor (if (= i 0)
                                                                                                    "white"
                                                                                                    "transparent")
                                                                                 :boxSizing       "border-box"}]})}]}])

(util/save scene-graph)

(defn start []
  (let [scene-graph (get-node-by-id "root")
        scene-graph (attach-famous-node-to-scene-graph scene-graph)

        back-node (get-node-by-id "back")
        back-clicks (events->chan back-node "tap")

        next-node (get-node-by-id "next")
        next-clicks (events->chan next-node "tap")

        pager-node (get-node-by-id "pager")
        pages (:node/children pager-node)
        current-index (atom 0)]
    (render-scene-graph scene-graph)
    (add-watch current-index :watcher (fn [key atom old-index new-index]
                                        (let [dot-nodes (:node/children (get-node-by-id "dots"))
                                              old-page-node (nth pages old-index)
                                              old-page-physics (:node/physics old-page-node)

                                              new-page-node (nth pages new-index)
                                              new-page-physics (:node/physics new-page-node)
                                              get-dom-element (fn [node]
                                                                (first (filter (fn [component]
                                                                                 (= "DOMElement" (.. component -constructor -name)))
                                                                               (.. node getComponents))))
                                              old-dot-node (nth dot-nodes old-index)
                                              old-dot-dom (get-dom-element (:node/famous-node old-dot-node))

                                              new-dot-node (nth dot-nodes new-index)
                                              new-dot-dom (get-dom-element (:node/famous-node new-dot-node))]
                                          (.. old-dot-dom (setProperty "backgroundColor" "transparent"))
                                          (.. new-dot-dom (setProperty "backgroundColor" "white"))

                                          (if (< old-index new-index)
                                            (do
                                              (.. (:anchor old-page-physics) (set -1 0 0))
                                              (.. (:quaternion old-page-physics) (fromEuler 0 (/ (.. js/Math -PI) 2) 0))
                                              (.. (:anchor new-page-physics) (set 0 0 0))
                                              (.. (:quaternion new-page-physics) (set 1 0 0 0)))
                                            (do
                                              (.. (:anchor old-page-physics) (set 1 0 0))
                                              (.. (:quaternion old-page-physics) (fromEuler 0 (/ (.. js/Math -PI) -2) 0))
                                              (.. (:anchor new-page-physics) (set 0 0 0))
                                              (.. (:quaternion new-page-physics) (set 1 0 0 0))))))
               )
    (go
      (while true
        (let [[v channel] (alts! [back-clicks next-clicks])]
          (cond
            (= channel back-clicks) (swap! current-index (fn [index]
                                                           (println index)
                                                           (let [new-index (dec index)]
                                                             (if (neg? new-index)
                                                               (-> (count image-names) dec)
                                                               new-index))))
            (= channel next-clicks) (swap! current-index (fn [index]
                                                           (println index)
                                                           (let [new-index (inc index)]
                                                             (if (>= new-index (- (count image-names) 1))
                                                               0
                                                               new-index))))))))))

(start)

