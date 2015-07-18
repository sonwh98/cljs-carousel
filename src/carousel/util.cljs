(ns ^:figwheel-always carousel.util
    (:require [cljs.core.async :refer [put! chan] ]
              [com.famous.Famous]))

(defonce famous js/famous)
(defonce DOMElement (.. famous -domRenderables -DOMElement))
(defonce FamousEngine (.. famous -core -FamousEngine))
(defonce Node (.. famous -core -Node))
(defonce GestureHandler (.. famous -components -GestureHandler))
(defonce PhysicsEngine (.. famous -physics -PhysicsEngine))

(defn events->chan
  "Given a node and event type return a channel of
  observed events. Can supply the channel to receive events as third
  optional argument."
  ([node event] (events->chan node event (chan)))
  ([node event c]
   (let [node (if (= (type node) PersistentVector)
                (-> node meta :famous-node)
                node)]
    (.. (GestureHandler. node) (on event (fn []
                                           (put! c event)))))
   c))

(defn attach-component [component-descriptor famous-node]
  (cond
    (= (type component-descriptor) PersistentVector) (let [component-keyword (first component-descriptor)]
                                                       (cond
                                                         (= component-keyword :DOMElement) (DOMElement. famous-node)))

    (= (type component-descriptor) PersistentArrayMap) (let [component (clj->js component-descriptor)]
                                                         (.. famous-node (addComponent component))
                                                         component)))

(defn- get-node-by-id [node id]
  (if (= (-> (get-in node [1]) :id) id)
    node
    (first (filter #(not (nil? %))
                   (for [child (get-in node [2])]
                     (get-node-by-id child id))))))


(defn attach-famous-node-to-scene-graph [node-as-vec]
  (let [attributes (nth node-as-vec 1)
        famous-node (Node.)
        size-mode (clj->js (:size-mode attributes))
        absolute-size (clj->js (:absolute-size attributes))
        align (clj->js (:align attributes))
        position (clj->js (:position attributes))
        mount-point (clj->js (:mount-point attributes))
        origin (clj->js (:origin attributes))]
    (.apply (.-setSizeMode famous-node) famous-node size-mode)
    (.apply (.-setAbsoluteSize famous-node) famous-node absolute-size)
    (.apply (.-setAlign famous-node) famous-node align)
    (.apply (.-setPosition famous-node) famous-node position)
    (.apply (.-setMountPoint famous-node) famous-node mount-point)
    (.apply (.-setOrigin famous-node) famous-node origin)

    (-> node-as-vec
        (update-in [2] (fn [children]
                         (vec (for [c children
                                    :let [child-node (attach-famous-node-to-scene-graph c)
                                          a-child-node (-> child-node meta :famous-node)]]
                                (do
                                  (.. famous-node (addChild a-child-node))
                                  child-node)))))
        (with-meta {:famous-node famous-node}))))



(defn- find-physics-helper [node]
  (let [attribute (get-in node [1])
        children (get-in node [2])]
    (if (contains? attribute :physics)
      (if (empty? children)
        [node]
        (concat node (->> children (map find-physics-helper) (filter #(not (empty? %))))))
      (if-not (empty? children)
        (->> children (map find-physics-helper) (filter #(not (empty? %)))))))
  )

(defn find-nodes-with-physics [node]
  (let [nodes (find-physics-helper node)]
    (vec (for [o (first nodes)]
           (first o)))))


(defn find-component-helper [node]
  (let [attribute (get-in node [1])
        children (get-in node [2])]
    (if (contains? attribute :components)
      (first (conj (for [c children]
                     (find-component-helper c)) node))
      (for [c children]
        (find-component-helper c)))))

(defn flatten-tree [nodes result]
  (if (empty? nodes)
    result
    (let [element (first nodes)
          the-rest (rest nodes)]
      (if (= (first element) :node)
        (flatten-tree the-rest (conj result element))
        (flatten-tree (first the-rest) (flatten-tree element result))))))

(defn find-nodes-with-components [scene-graph]
  (-> scene-graph find-component-helper (flatten-tree [])))

(defn render-scene-graph [scene-graph]
  (let [simulation (PhysicsEngine.)
        root-node (-> scene-graph meta :famous-node)
        physics-nodes (find-nodes-with-physics scene-graph)
        nodes-with-components (find-nodes-with-components scene-graph)
        context (.. FamousEngine (createScene "body"))]
    (.. context (addChild root-node))

    (doseq [[_ {physics :physics}] physics-nodes]
      (.. simulation (add (:box physics) (:spring physics) (:rotational-spring physics))))

    (doseq [ [_ {components :components} _ :as node] nodes-with-components
             :let [famous-node (-> node meta :famous-node)]]

      (doseq [component-descriptor components
              :let [a-component (attach-component component-descriptor famous-node)
                    properties (nth component-descriptor 1)]]
        (doseq [p properties
                :let [name (name (first p))
                      value (second p)]]
          (if (= name "content")
            (.. a-component (setContent value))
            (.. a-component (setProperty name value)))))
      
      
      ;(attach-component components famous-node)
      )


    
    (.. FamousEngine (requestUpdate (clj->js {:onUpdate (fn [time]
                                                          (.. simulation (update time))
                                                          (doseq [pn physics-nodes
                                                                  :let [page-node (-> pn meta :famous-node)
                                                                        physics (-> pn second :physics)
                                                                        physics-transform (.. simulation (getTransform (:box physics)))
                                                                        p (.. physics-transform -position)
                                                                        r (.. physics-transform -rotation)]]
                                                            (.. page-node
                                                                (setPosition (* 0 1446) 0 0)
                                                                (setRotation (nth r 0) (nth r 1) (nth r 2) (nth r 3))))

                                                          (this-as this
                                                            (.. FamousEngine (requestUpdateOnNextTick this)))
                                                          )})))

    (.. FamousEngine init)))
