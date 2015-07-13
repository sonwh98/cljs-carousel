(ns carousel.foo)

[:node {:id "root"}
 [:node {:id "back",
         :size-mode [1 1],
         :absolute-size [40 40],
         :align [0 0.5 0],
         :position [40 0 0],
         :mount-point [0 0.5 0],
         :components [[:DOMElement {:color "white", :fontSize "40px", :lineHeight "40px", :cursor "pointer", :textHighlight "none", :zIndex "2", :content "<"}]]}]
 
 [:node {:id "next",
         :size-mode [1 1],
         :absolute-size [40 40],
         :align [1 0.5 0],
         :position [-40 0 0],
         :mount-point [1 0.5 0],
         :components [[:DOMElement {:color "white", :fontSize "40px", :lineHeight "40px", :cursor "pointer", :textHighlight "none", :zIndex "2", :content ">"}]]}]
 [[:node {:size-mode [1 1 1],
          :absolute-size [500 500 0],
          :align [0.5 0.5],
          :mount-point [0.5 0.5],
          :origin [0.5 0.5],
          :components [[:DOMElement {:backgroundImage "url('http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._01_-_Autorretrato._Francisco_Goya_y_Lucientes2C_pintor_thumb.jpg')", :background-repeat "no-repeat", :background-size "cover"}]]}]

  [:node {:size-mode [1 1 1],
          :absolute-size [500 500 0],
          :align [0.5 0.5],
          :mount-point [0.5 0.5],
          :origin [0.5 0.5],
          :components [[:DOMElement {:backgroundImage "url('http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._02_-_El_si_pronuncian_y_la_mano_alargan_al_primero_que_llega_thumb.jpg')", :background-repeat "no-repeat", :background-size "cover"}]]}]]
 [:node {:id "dots",
         :size-mode [1 1], :absolute-size [20 20],
         :position [0 -50 0],
         :align [0.5 1 0],
         :mount-point [0.5 1 0]}
  [[:node {:size-mode [1 1],
           :absolute-size [5 5],
           :components [[:DOMElement {:borderRadius "5px", :border "2px solid white", :boxSizing "border-box"}]]}]
   [:node {:size-mode [1 1],
           :absolute-size [5 5],
           :components [[:DOMElement {:borderRadius "5px", :border "2px solid white", :boxSizing "border-box"}]]}]
   [:node {:size-mode [1 1],
           :absolute-size [5 5],
           :components [[:DOMElement {:borderRadius "5px", :border "2px solid white", :boxSizing "border-box"}]]}]
   [:node {:size-mode [1 1],
           :absolute-size [5 5],
           :components [[:DOMElement {:borderRadius "5px", :border "2px solid white", :boxSizing "border-box"}]]}]
   [:node {:size-mode [1 1], :absolute-size [5 5], :components [[:DOMElement {:borderRadius "5px", :border "2px solid white", :boxSizing "border-box"}]]}]]]]

