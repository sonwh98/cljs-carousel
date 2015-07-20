(ns ^:figwheel-always carousel.util
  (:require [cljs.core.async :refer [put! chan]]
            [datascript :as d]
            [com.famous.Famous]))

(defonce famous js/famous)
(defonce DOMElement (.. famous -domRenderables -DOMElement))
(defonce FamousEngine (.. famous -core -FamousEngine))
(defonce Node (.. famous -core -Node))
(defonce GestureHandler (.. famous -components -GestureHandler))
(defonce PhysicsEngine (.. famous -physics -PhysicsEngine))

(defonce physics (.. famous -physics))
(defonce math (.. famous -math))

(defonce FamousBox (.. physics -Box))
(defonce Spring (.. physics -Spring))
(defonce RotationalSpring (.. physics -RotationalSpring))
(defonce Quaternion (.. math -Quaternion))
(defonce Vec3 (.. math -Vec3))


(defonce famous-components {:DOMElement (.. famous -domRenderables -DOMElement)})

(defn famous-compare [x y]
  "Compare famous javascript objects. See https://github.com/tonsky/datascript/issues/69"
  (let [str-x (.. js/JSON (stringify x))
        str-y (.. js/JSON (stringify y))]
    (compare str-x str-y)))

(extend-protocol IComparable
  FamousBox (^number -compare [x y]
              (famous-compare x y))
  Vec3 (^number -compare [x y]
         (famous-compare x y))
  Quaternion (^number -compare [x y]
               (famous-compare x y))
  Spring (^number -compare [x y]
           (famous-compare x y))
  RotationalSpring (^number -compare [x y]
                     (famous-compare x y))
  Node (^number -compare [x y]
         (famous-compare x y))
  )

(def schema {:node/id         {:db/unique :db.unique/identity}
             :node/children   {:db/cardinality :db.cardinality/many
                               :db/isComponent true
                               :db/valueType   :db.type/ref}
             :node/components {:db/cardinality :db.cardinality/many
                               :db/isComponent true
                               :db/valueType   :db.type/ref}
             :node/physics    {:db/cardinality :db.cardinality/one
                               :db/isComponent true
                               :db/valueType   :db.type/ref}})

(def conn (d/create-conn schema))

(defn save [scene-graph]
  (d/transact! conn scene-graph))

(defn events->chan
  "Given a node and event type return a channel of
  observed events. Can supply the channel to receive events as third
  optional argument."
  ([node event] (events->chan node event (chan)))
  ([node event c]
   (let [node (if (map? node)
                (:node/famous-node node)
                node)]
     (.. (GestureHandler. node) (on event (fn []
                                            (put! c event)))))
   c))

(defn create-component [component-descriptor famous-node]
  (let [component-type (:component/type component-descriptor)]
    (if (keyword? component-type)
      (let [component-constructor (famous-components component-type)
            component (component-constructor. famous-node)
            properties (dissoc component-descriptor :component/type)]
        (doseq [p properties
                :let [name (name (first p))
                      value (second p)]]
          (if (= name "content")
            (.. component (setContent value))
            (.. component (setProperty name value))))
        component)
      (let [component (clj->js component-descriptor)]
        (.. famous-node (addComponent component))
        component))))

(defn- get-node-by-id [id]
  (ffirst (d/q '[:find (pull ?node [*]) :in $ ?id :where [?node :node/id ?id]] @conn id)))


(defn attach-famous-node-to-scene-graph [node]
  (let [famous-node (Node.)
        size-mode (clj->js (:node/size-mode node))
        absolute-size (clj->js (:node/absolute-size node))
        align (clj->js (:node/align node))
        position (clj->js (:node/position node))
        mount-point (clj->js (:node/mount-point node))
        origin (clj->js (:node/origin node))]
    (.apply (.-setSizeMode famous-node) famous-node size-mode)
    (.apply (.-setAbsoluteSize famous-node) famous-node absolute-size)
    (.apply (.-setAlign famous-node) famous-node align)
    (.apply (.-setPosition famous-node) famous-node position)
    (.apply (.-setMountPoint famous-node) famous-node mount-point)
    (.apply (.-setOrigin famous-node) famous-node origin)

    (doseq [child-node (:node/children node)
            :let [a-child-node (attach-famous-node-to-scene-graph child-node)
                  a-famous-child-node (:node/famous-node a-child-node)]]
      (.. famous-node (addChild a-famous-child-node)))

    (d/transact! conn [{:db/id            (:db/id node)
                        :node/famous-node famous-node}])

    (update-in node [:node/famous-node] #(identity famous-node))))


(defn find-nodes-with-physics []
  (map #(first %) (d/q '[:find (pull ?node [*]) :where [?node :node/physics _]] @conn)))


(defn find-nodes-with-components []
  (map #(first %) (d/q '[:find (pull ?node [*]) :where [?node :node/components _]] @conn)))

(defn render-scene-graph [scene-graph]
  (let [simulation (PhysicsEngine.)
        root-node (:node/famous-node scene-graph)
        physics-nodes (find-nodes-with-physics)
        nodes-with-components (find-nodes-with-components)
        context (.. FamousEngine (createScene "body"))]
    (.. context (addChild root-node))

    (doseq [{physics :node/physics} physics-nodes]
      (.. simulation (add (:box physics) (:spring physics) (:rotational-spring physics))))

    (doseq [{components :node/components :as node} nodes-with-components
            :let [famous-node (:node/famous-node node)]]
      (doseq [component-descriptor components]
        (create-component component-descriptor famous-node)
        )
      )

    (.. FamousEngine (requestUpdate (clj->js {:onUpdate (fn [time]
                                                          (.. simulation (update time))
                                                          (doseq [pn physics-nodes
                                                                  :let [famous-node (:node/famous-node pn)
                                                                        physics (:node/physics pn)
                                                                        physics-transform (.. simulation (getTransform (:box physics)))
                                                                        p (.. physics-transform -position)
                                                                        r (.. physics-transform -rotation)]]
                                                            (.. famous-node
                                                                (setPosition (* 0 1446) 0 0)
                                                                (setRotation (nth r 0) (nth r 1) (nth r 2) (nth r 3))))

                                                          (this-as this
                                                            (.. FamousEngine (requestUpdateOnNextTick this)))
                                                          )})))

    (.. FamousEngine init)))


;(def pager (-> (d/q '[:find (pull ?n [*]) :where [?n :node/id "pager"]] @conn) ffirst))
;(def n (->> 3 (d/entity @conn) d/touch))
;(def c (:node/components n))
;(def c1 (first c))
;
;(d/q '[:find ?n :where [?n :node/id ?page] [(= (subs ?page 0 4) "page")]] @conn)
;(map #(->> % first (d/entity @conn) (d/touch)) (d/q '[:find ?n :where [?n :node/components _]] @conn))
;
;(d/q '[:find (pull ?n [:node/absolute-size]) :where [?n :node/id "next"]] @conn)
;
;(d/q '[:find (pull ?n [*]) :where [?n :node/physics _]] @conn)
