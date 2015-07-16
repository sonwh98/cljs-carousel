(ns ^:figwheel-always carousel.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [com.famous.Famous]
              [carousel.util :refer [events->chan get-children]]
              [cljs.core.async :refer [>! <! put! chan alts!]]))

(enable-console-print!)

(defonce famous js/famous)
(defonce DOMElement (.. famous -domRenderables -DOMElement))
(defonce FamousEngine (.. famous -core -FamousEngine))
(defonce Node (.. famous -core -Node))
(defonce GestureHandler (.. famous -components -GestureHandler))
(defonce Size (.. famous -components -Size))

(defonce PhysicsEngine (.. famous -physics -PhysicsEngine))
(defonce physics (.. famous -physics))
(defonce math (.. famous -math))
(defonce FamousBox (.. physics -Box))
(defonce Spring (.. physics -Spring))
(defonce RotationalSpring (.. physics -RotationalSpring))
(defonce RotationalDrag (.. physics -RotationalDrag))
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

(def scene-graph [:node {:id "root"}
                  [[:node {:id            "back"
                           :size-mode     [ABSOLUTE ABSOLUTE]
                           :absolute-size [40 40]
                           :position      [40 0 0]
                           :align         [0 0.5 0]
                           :mount-point   [0 0.5 0]
                           :components    [[:DOMElement {:color         "white"
                                                         :fontSize      "40px"
                                                         :lineHeight    "40px"
                                                         :cursor        "pointer"
                                                         :textHighlight "none"
                                                         :zIndex        "2"
                                                         :content       "<"}]]}]
                   [:node {:id            "next"
                           :size-mode     [ABSOLUTE ABSOLUTE]
                           :absolute-size [40 40]
                           :position      [-40 0 0]
                           :align         [1 0.5 0]
                           :mount-point   [1 0.5 0]
                           :components    [[:DOMElement {:color         "white"
                                                         :fontSize      "40px"
                                                         :lineHeight    "40px"
                                                         :cursor        "pointer"
                                                         :textHighlight "none"
                                                         :zIndex        "2"
                                                         :content       ">"}]]}]

                   [:node {:id "pager"
                           :align [0.5 0.5 0]
                           :mount-point [0.5 0.5 0]}
                    (for [image-name image-names
                               :let [url-base "http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._"
                                     image-url (str url-base image-name)
                                     url (str "url('" image-url "')")
                                     box (FamousBox. (clj->js {:mass 100 :size [100 100 100]}))
                                     anchor (Vec3. 1 0 0)
                                     quaternion (.. (Quaternion.) (fromEuler 0 (/ (.. js/Math -PI) -2) 0))]]
                           [:node {:size-mode     [ABSOLUTE ABSOLUTE ABSOLUTE]
                                   :absolute-size [500 500 0]
                                   :align         [0.5 0.5]
                                   :mount-point   [0.5 0.5]
                                   :origin        [0.5 0.5]
                                   :components    [[:DOMElement {:backgroundImage   url
                                                                 :background-repeat "no-repeat"
                                                                 :background-size   "cover"}]]
                                   :physics {:box box
                                             :anchor anchor
                                             :spring (Spring. nil box (clj->js {:period 0.5 :dampingRatio 0.5 :anchor anchor}))
                                             :quaternion quaternion
                                        :rotational-spring (RotationalSpring. nil box (clj->js {:period 1 :dampingRatio 0.2 :anchor quaternion}))}}])]
                   [:node {:id            "dots"
                           :size-mode     [ABSOLUTE ABSOLUTE]
                           :absolute-size [20 20]
                           :position      [0 -50 0]
                           :align         [0.5 1 0]
                           :mount-point   [0.5 1 0]}
                    (for [i (-> image-names count range)]
                      [:node {:size-mode     [ABSOLUTE ABSOLUTE]
                              :absolute-size [10 10]
                              :components    [[:DOMElement {:borderRadius "15px"
                                                            :border       "2px solid white"
                                                            :backgroundColor (if (= i 0)
                                                                               "white"
                                                                               "transparent")
                                                            :boxSizing    "border-box"}]]}])]]])

(defn attach-famous-node-to-scene-graph [node-as-vec]
  (let [attributes (nth node-as-vec 1)
        node (Node.)
        size-mode (clj->js (:size-mode attributes))
        absolute-size (clj->js (:absolute-size attributes))
        align (clj->js (:align attributes))
        position (clj->js (:position attributes))
        components (:components attributes)
        mount-point (clj->js (:mount-point attributes))
        origin (clj->js (:origin attributes))]
    (.apply (.-setSizeMode node) node size-mode)
    (.apply (.-setAbsoluteSize node) node absolute-size)
    (.apply (.-setAlign node) node align)
    (.apply (.-setPosition node) node position)
    (.apply (.-setMountPoint node) node mount-point)
    (.apply (.-setOrigin node) node origin)

    (if-not (empty? components)
      (doseq [component components
              :let [dom-element (DOMElement. node)
                    properties (nth component 1)]]
        (doseq [p properties
                :let [name (name (first p))
                      value (second p)]]
          (if (= name "content")
            (.. dom-element (setContent value))
            (.. dom-element (setProperty name value))))))

    (-> node-as-vec
        (update-in [2] (fn [children]
                         (vec (for [c children
                                    :let [child-node (attach-famous-node-to-scene-graph c)
                                          a-child-node (-> child-node meta :node)]]
                                (do
                                  (.. node (addChild a-child-node))
                                  child-node)))))
        (with-meta {:node node}))))

(defn get-node-by-id [node id]
  (if (= (-> (get-in node [1]) :id) id )
    node
    (first (filter #(not (nil? %))
                   (for [child (get-in node [2])]
                     (get-node-by-id child id))))))
(defn helper [node]
  (let [attribute (get-in node [1])
        children (get-in node [2])]
    (if (contains? attribute :physics)
      (if (empty? children)
        [node]
        (concat node (->> children (map helper) (filter #(not (empty? %))))))
      (if-not (empty? children)
        (->> children (map helper) (filter #(not (empty? %)))))))
  )

(defn find-nodes-with-physics [node]
  (let [nodes (helper node)]
    (vec (for [o (first nodes)]
           (first o)))))

(defn render-scene-graph [scene-graph]
  (let [simulation (PhysicsEngine.)
        root-node (-> scene-graph meta :node)
        physics-nodes (find-nodes-with-physics scene-graph)
        context (.. FamousEngine (createScene "body")) ]
    (.. context (addChild root-node))

    (doseq [page physics-nodes
            :let [physics (-> page second :physics)]]
      (.. simulation (add (:box physics)  (:spring physics) (:rotational-spring physics))))

    (.. FamousEngine (requestUpdate (clj->js {:onUpdate (fn [time]
                                                          (.. simulation (update time))
                                                          (doseq [page physics-nodes
                                                                  :let [page-node (-> page meta :node)
                                                                        physics (-> page second :physics)
                                                                        physics-transform (.. simulation (getTransform (:box physics)))
                                                                        p (.. physics-transform -position)
                                                                        r (.. physics-transform -rotation)]]
                                                            (.. page-node
                                                                (setPosition (* 0 1446) 0 0)
                                                                (setRotation (nth r 0) (nth r 1) (nth r 2) (nth r 3))))

                                                          (this-as this
                                                                   (.. FamousEngine (requestUpdateOnNextTick this)))
                                                          )})))

    ))

(defn Carousel []
  (let [scene-graph (attach-famous-node-to-scene-graph scene-graph)

        back-node (get-node-by-id scene-graph "back")
        back-clicks (events->chan back-node "tap")

        next-node (get-node-by-id scene-graph "next")
        next-clicks (events->chan next-node "tap")

        pager-node (get-node-by-id scene-graph "pager")
        pages (pager-node 2)

        dot-container-node (-> scene-graph (get-in [2 3]) meta :node )
        dot-nodes (.. dot-container-node getChildren)
        resize (clj->js {:onSizeChange (fn [^Float32Array size]
                                         "NOTE: this call back is called only once because root-dot setSizeMode is ABSOLUTE (value of 1)"
                                         (let [size (IndexedSeq. size 0)
                                               dotWidth 10
                                               numPages 5
                                               spacing 5
                                               totalDotSize (+ (* numPages dotWidth)
                                                               (* spacing (dec numPages)))
                                               start-x (/ (- (nth size 0) totalDotSize)
                                                          2)]
                                           (doseq [n (range (count dot-nodes))
                                                   :let [dot-node (nth dot-nodes n)]]
                                             (.. dot-node (setPosition (+ start-x
                                                                          (* n
                                                                             (+ dotWidth spacing)))
                                                                       0
                                                                       0)))))})
        _ (.. dot-container-node (addComponent resize))
        current-index (atom 0)]
    (render-scene-graph scene-graph)
    (add-watch current-index :watcher (fn [key atom old-index new-index]
                                        (let [old-page-node (nth pages old-index)
                                              old-page-physics (-> old-page-node second :physics)

                                              new-page-node (nth pages new-index)
                                              new-page-physics (-> new-page-node second :physics)
                                              get-dom-element (fn [node]
                                                                (first (filter (fn [component]
                                                                                 (= "DOMElement" (.. component -constructor -name)))
                                                                               (.. node getComponents))))

                                              old-dot-node (nth dot-nodes old-index)
                                              old-dot-dom  (get-dom-element old-dot-node)

                                              new-dot-node (nth dot-nodes new-index)
                                              new-dot-dom  (get-dom-element new-dot-node)]
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
            (= channel back-clicks) (do
                                      (swap! current-index dec)
                                      )
            (= channel next-clicks) (do
                                      (swap! current-index inc)
                                      )))))))

(Carousel)
(.. FamousEngine init)
