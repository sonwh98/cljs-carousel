// Compiled by ClojureScript 0.0-3308 {}
goog.provide('carousel.core');
goog.require('cljs.core');
goog.require('com.famous.Famous');
goog.require('carousel.util');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof carousel.core.famous !== 'undefined'){
} else {
carousel.core.famous = famous;
}
if(typeof carousel.core.DOMElement !== 'undefined'){
} else {
carousel.core.DOMElement = carousel.core.famous.domRenderables.DOMElement;
}
if(typeof carousel.core.FamousEngine !== 'undefined'){
} else {
carousel.core.FamousEngine = carousel.core.famous.core.FamousEngine;
}
if(typeof carousel.core.Node !== 'undefined'){
} else {
carousel.core.Node = carousel.core.famous.core.Node;
}
if(typeof carousel.core.GestureHandler !== 'undefined'){
} else {
carousel.core.GestureHandler = carousel.core.famous.components.GestureHandler;
}
if(typeof carousel.core.Size !== 'undefined'){
} else {
carousel.core.Size = carousel.core.famous.components.Size;
}
if(typeof carousel.core.PhysicsEngine !== 'undefined'){
} else {
carousel.core.PhysicsEngine = carousel.core.famous.physics.PhysicsEngine;
}
if(typeof carousel.core.physics !== 'undefined'){
} else {
carousel.core.physics = carousel.core.famous.physics;
}
if(typeof carousel.core.math !== 'undefined'){
} else {
carousel.core.math = carousel.core.famous.math;
}
if(typeof carousel.core.FamousBox !== 'undefined'){
} else {
carousel.core.FamousBox = carousel.core.physics.Box;
}
if(typeof carousel.core.Spring !== 'undefined'){
} else {
carousel.core.Spring = carousel.core.physics.Spring;
}
if(typeof carousel.core.RotationalSpring !== 'undefined'){
} else {
carousel.core.RotationalSpring = carousel.core.physics.RotationalSpring;
}
if(typeof carousel.core.RotationalDrag !== 'undefined'){
} else {
carousel.core.RotationalDrag = carousel.core.physics.RotationalDrag;
}
if(typeof carousel.core.Quaternion !== 'undefined'){
} else {
carousel.core.Quaternion = carousel.core.math.Quaternion;
}
if(typeof carousel.core.Vec3 !== 'undefined'){
} else {
carousel.core.Vec3 = carousel.core.math.Vec3;
}
if(typeof carousel.core.ABSOLUTE !== 'undefined'){
} else {
carousel.core.ABSOLUTE = carousel.core.Size.ABSOLUTE;
}
carousel.core.make_tree = (function carousel$core$make_tree(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"root"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"back",new cljs.core.Keyword(null,"size-mode","size-mode",1618921678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carousel.core.ABSOLUTE,carousel.core.ABSOLUTE], null),new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(0),(0)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(0)], null),new cljs.core.Keyword(null,"mount-point","mount-point",-266612240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(0)], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DOMElement","DOMElement",203120853),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"40px",new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"40px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"textHighlight","textHighlight",462010200),"none",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),"2",new cljs.core.Keyword(null,"content","content",15833224),"<"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"next",new cljs.core.Keyword(null,"size-mode","size-mode",1618921678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carousel.core.ABSOLUTE,carousel.core.ABSOLUTE], null),new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-40),(0),(0)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.5,(0)], null),new cljs.core.Keyword(null,"mount-point","mount-point",-266612240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.5,(0)], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DOMElement","DOMElement",203120853),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"40px",new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"40px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"textHighlight","textHighlight",462010200),"none",new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),"2",new cljs.core.Keyword(null,"content","content",15833224),">"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"pager",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5,(0)], null),new cljs.core.Keyword(null,"mount-point","mount-point",-266612240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5,(0)], null)], null),(function (){var url_base = "http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._";
var image_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["01_-_Autorretrato._Francisco_Goya_y_Lucientes2C_pintor_thumb.jpg","02_-_El_si_pronuncian_y_la_mano_alargan_al_primero_que_llega_thumb.jpg","03_-_Que_viene_el_Coco_thumb.jpg","04_-_El_de_la_rollona_thumb.jpg","05_-_Tal_para_qual_thumb.jpg","06_-_Nadie_se_conoce_thumb.jpg","07_-_Ni_asi_la_distingue_thumb.jpg","09_-_Tantalo_thumb.jpg","10_-_El_amor_y_la_muerte_thumb.jpg","11_-_Muchachos_al_avC3ADo_thumb.jpg","12_-_A_caza_de_dientes_thumb.jpg","13_-_Estan_calientes_thumb.jpg"], null);
var iter__18841__auto__ = ((function (url_base,image_names){
return (function carousel$core$make_tree_$_iter__30459(s__30460){
return (new cljs.core.LazySeq(null,((function (url_base,image_names){
return (function (){
var s__30460__$1 = s__30460;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__30460__$1);
if(temp__4423__auto__){
var s__30460__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30460__$2)){
var c__18839__auto__ = cljs.core.chunk_first.call(null,s__30460__$2);
var size__18840__auto__ = cljs.core.count.call(null,c__18839__auto__);
var b__30462 = cljs.core.chunk_buffer.call(null,size__18840__auto__);
if((function (){var i__30461 = (0);
while(true){
if((i__30461 < size__18840__auto__)){
var image_name = cljs.core._nth.call(null,c__18839__auto__,i__30461);
var url_base__$1 = "http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._";
var image_url = [cljs.core.str(url_base__$1),cljs.core.str(image_name)].join('');
var url = [cljs.core.str("url('"),cljs.core.str(image_url),cljs.core.str("')")].join('');
cljs.core.chunk_append.call(null,b__30462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size-mode","size-mode",1618921678),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [carousel.core.ABSOLUTE,carousel.core.ABSOLUTE,carousel.core.ABSOLUTE], null),new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500),(0)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"mount-point","mount-point",-266612240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DOMElement","DOMElement",203120853),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965),url,new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),"no-repeat",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null)], null));

var G__30467 = (i__30461 + (1));
i__30461 = G__30467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30462),carousel$core$make_tree_$_iter__30459.call(null,cljs.core.chunk_rest.call(null,s__30460__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30462),null);
}
} else {
var image_name = cljs.core.first.call(null,s__30460__$2);
var url_base__$1 = "http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._";
var image_url = [cljs.core.str(url_base__$1),cljs.core.str(image_name)].join('');
var url = [cljs.core.str("url('"),cljs.core.str(image_url),cljs.core.str("')")].join('');
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size-mode","size-mode",1618921678),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [carousel.core.ABSOLUTE,carousel.core.ABSOLUTE,carousel.core.ABSOLUTE], null),new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500),(0)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"mount-point","mount-point",-266612240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DOMElement","DOMElement",203120853),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965),url,new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),"no-repeat",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null)], null),carousel$core$make_tree_$_iter__30459.call(null,cljs.core.rest.call(null,s__30460__$2)));
}
} else {
return null;
}
break;
}
});})(url_base,image_names))
,null,null));
});})(url_base,image_names))
;
return iter__18841__auto__.call(null,image_names);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"dots",new cljs.core.Keyword(null,"size-mode","size-mode",1618921678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carousel.core.ABSOLUTE,carousel.core.ABSOLUTE], null),new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-50),(0)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(1),(0)], null),new cljs.core.Keyword(null,"mount-point","mount-point",-266612240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(1),(0)], null)], null),(function (){var iter__18841__auto__ = (function carousel$core$make_tree_$_iter__30463(s__30464){
return (new cljs.core.LazySeq(null,(function (){
var s__30464__$1 = s__30464;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__30464__$1);
if(temp__4423__auto__){
var s__30464__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30464__$2)){
var c__18839__auto__ = cljs.core.chunk_first.call(null,s__30464__$2);
var size__18840__auto__ = cljs.core.count.call(null,c__18839__auto__);
var b__30466 = cljs.core.chunk_buffer.call(null,size__18840__auto__);
if((function (){var i__30465 = (0);
while(true){
if((i__30465 < size__18840__auto__)){
var i = cljs.core._nth.call(null,c__18839__auto__,i__30465);
cljs.core.chunk_append.call(null,b__30466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size-mode","size-mode",1618921678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carousel.core.ABSOLUTE,carousel.core.ABSOLUTE], null),new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DOMElement","DOMElement",203120853),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"5px",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid white",new cljs.core.Keyword(null,"boxSizing","boxSizing",63717755),"border-box"], null)], null)], null)], null)], null));

var G__30468 = (i__30465 + (1));
i__30465 = G__30468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30466),carousel$core$make_tree_$_iter__30463.call(null,cljs.core.chunk_rest.call(null,s__30464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30466),null);
}
} else {
var i = cljs.core.first.call(null,s__30464__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size-mode","size-mode",1618921678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carousel.core.ABSOLUTE,carousel.core.ABSOLUTE], null),new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DOMElement","DOMElement",203120853),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"5px",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid white",new cljs.core.Keyword(null,"boxSizing","boxSizing",63717755),"border-box"], null)], null)], null)], null)], null),carousel$core$make_tree_$_iter__30463.call(null,cljs.core.rest.call(null,s__30464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18841__auto__.call(null,cljs.core.range.call(null,(13)));
})()], null)], null)], null);
});
carousel.core.make_nodes = (function carousel$core$make_nodes(node_as_vec){
var attributes = cljs.core.nth.call(null,node_as_vec,(1));
var node = (new carousel.core.Node());
var size_mode = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"size-mode","size-mode",1618921678).cljs$core$IFn$_invoke$arity$1(attributes));
var absolute_size = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"absolute-size","absolute-size",-1410205589).cljs$core$IFn$_invoke$arity$1(attributes));
var align = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"align","align",1964212802).cljs$core$IFn$_invoke$arity$1(attributes));
var position = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(attributes));
var components = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(attributes);
var mount_point = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"mount-point","mount-point",-266612240).cljs$core$IFn$_invoke$arity$1(attributes));
var origin = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(attributes));
var children = carousel.util.get_children.call(null,node_as_vec);
node.setSizeMode.apply(node,size_mode);

node.setAbsoluteSize.apply(node,absolute_size);

node.setAlign.apply(node,align);

node.setPosition.apply(node,position);

node.setMountPoint.apply(node,mount_point);

node.setOrigin.apply(node,origin);

if(!(cljs.core.empty_QMARK_.call(null,components))){
var seq__30493_30517 = cljs.core.seq.call(null,components);
var chunk__30495_30518 = null;
var count__30496_30519 = (0);
var i__30497_30520 = (0);
while(true){
if((i__30497_30520 < count__30496_30519)){
var component_30521 = cljs.core._nth.call(null,chunk__30495_30518,i__30497_30520);
var dom_element_30522 = (new carousel.core.DOMElement(node));
var properties_30523 = cljs.core.nth.call(null,component_30521,(1));
var seq__30499_30524 = cljs.core.seq.call(null,properties_30523);
var chunk__30501_30525 = null;
var count__30502_30526 = (0);
var i__30503_30527 = (0);
while(true){
if((i__30503_30527 < count__30502_30526)){
var p_30528 = cljs.core._nth.call(null,chunk__30501_30525,i__30503_30527);
var name_30529 = cljs.core.name.call(null,cljs.core.first.call(null,p_30528));
var value_30530 = cljs.core.second.call(null,p_30528);
if(cljs.core._EQ_.call(null,name_30529,"content")){
dom_element_30522.setContent(value_30530);
} else {
dom_element_30522.setProperty(name_30529,value_30530);
}

var G__30531 = seq__30499_30524;
var G__30532 = chunk__30501_30525;
var G__30533 = count__30502_30526;
var G__30534 = (i__30503_30527 + (1));
seq__30499_30524 = G__30531;
chunk__30501_30525 = G__30532;
count__30502_30526 = G__30533;
i__30503_30527 = G__30534;
continue;
} else {
var temp__4423__auto___30535 = cljs.core.seq.call(null,seq__30499_30524);
if(temp__4423__auto___30535){
var seq__30499_30536__$1 = temp__4423__auto___30535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30499_30536__$1)){
var c__18872__auto___30537 = cljs.core.chunk_first.call(null,seq__30499_30536__$1);
var G__30538 = cljs.core.chunk_rest.call(null,seq__30499_30536__$1);
var G__30539 = c__18872__auto___30537;
var G__30540 = cljs.core.count.call(null,c__18872__auto___30537);
var G__30541 = (0);
seq__30499_30524 = G__30538;
chunk__30501_30525 = G__30539;
count__30502_30526 = G__30540;
i__30503_30527 = G__30541;
continue;
} else {
var p_30542 = cljs.core.first.call(null,seq__30499_30536__$1);
var name_30543 = cljs.core.name.call(null,cljs.core.first.call(null,p_30542));
var value_30544 = cljs.core.second.call(null,p_30542);
if(cljs.core._EQ_.call(null,name_30543,"content")){
dom_element_30522.setContent(value_30544);
} else {
dom_element_30522.setProperty(name_30543,value_30544);
}

var G__30545 = cljs.core.next.call(null,seq__30499_30536__$1);
var G__30546 = null;
var G__30547 = (0);
var G__30548 = (0);
seq__30499_30524 = G__30545;
chunk__30501_30525 = G__30546;
count__30502_30526 = G__30547;
i__30503_30527 = G__30548;
continue;
}
} else {
}
}
break;
}

var G__30549 = seq__30493_30517;
var G__30550 = chunk__30495_30518;
var G__30551 = count__30496_30519;
var G__30552 = (i__30497_30520 + (1));
seq__30493_30517 = G__30549;
chunk__30495_30518 = G__30550;
count__30496_30519 = G__30551;
i__30497_30520 = G__30552;
continue;
} else {
var temp__4423__auto___30553 = cljs.core.seq.call(null,seq__30493_30517);
if(temp__4423__auto___30553){
var seq__30493_30554__$1 = temp__4423__auto___30553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30493_30554__$1)){
var c__18872__auto___30555 = cljs.core.chunk_first.call(null,seq__30493_30554__$1);
var G__30556 = cljs.core.chunk_rest.call(null,seq__30493_30554__$1);
var G__30557 = c__18872__auto___30555;
var G__30558 = cljs.core.count.call(null,c__18872__auto___30555);
var G__30559 = (0);
seq__30493_30517 = G__30556;
chunk__30495_30518 = G__30557;
count__30496_30519 = G__30558;
i__30497_30520 = G__30559;
continue;
} else {
var component_30560 = cljs.core.first.call(null,seq__30493_30554__$1);
var dom_element_30561 = (new carousel.core.DOMElement(node));
var properties_30562 = cljs.core.nth.call(null,component_30560,(1));
var seq__30505_30563 = cljs.core.seq.call(null,properties_30562);
var chunk__30507_30564 = null;
var count__30508_30565 = (0);
var i__30509_30566 = (0);
while(true){
if((i__30509_30566 < count__30508_30565)){
var p_30567 = cljs.core._nth.call(null,chunk__30507_30564,i__30509_30566);
var name_30568 = cljs.core.name.call(null,cljs.core.first.call(null,p_30567));
var value_30569 = cljs.core.second.call(null,p_30567);
if(cljs.core._EQ_.call(null,name_30568,"content")){
dom_element_30561.setContent(value_30569);
} else {
dom_element_30561.setProperty(name_30568,value_30569);
}

var G__30570 = seq__30505_30563;
var G__30571 = chunk__30507_30564;
var G__30572 = count__30508_30565;
var G__30573 = (i__30509_30566 + (1));
seq__30505_30563 = G__30570;
chunk__30507_30564 = G__30571;
count__30508_30565 = G__30572;
i__30509_30566 = G__30573;
continue;
} else {
var temp__4423__auto___30574__$1 = cljs.core.seq.call(null,seq__30505_30563);
if(temp__4423__auto___30574__$1){
var seq__30505_30575__$1 = temp__4423__auto___30574__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30505_30575__$1)){
var c__18872__auto___30576 = cljs.core.chunk_first.call(null,seq__30505_30575__$1);
var G__30577 = cljs.core.chunk_rest.call(null,seq__30505_30575__$1);
var G__30578 = c__18872__auto___30576;
var G__30579 = cljs.core.count.call(null,c__18872__auto___30576);
var G__30580 = (0);
seq__30505_30563 = G__30577;
chunk__30507_30564 = G__30578;
count__30508_30565 = G__30579;
i__30509_30566 = G__30580;
continue;
} else {
var p_30581 = cljs.core.first.call(null,seq__30505_30575__$1);
var name_30582 = cljs.core.name.call(null,cljs.core.first.call(null,p_30581));
var value_30583 = cljs.core.second.call(null,p_30581);
if(cljs.core._EQ_.call(null,name_30582,"content")){
dom_element_30561.setContent(value_30583);
} else {
dom_element_30561.setProperty(name_30582,value_30583);
}

var G__30584 = cljs.core.next.call(null,seq__30505_30575__$1);
var G__30585 = null;
var G__30586 = (0);
var G__30587 = (0);
seq__30505_30563 = G__30584;
chunk__30507_30564 = G__30585;
count__30508_30565 = G__30586;
i__30509_30566 = G__30587;
continue;
}
} else {
}
}
break;
}

var G__30588 = cljs.core.next.call(null,seq__30493_30554__$1);
var G__30589 = null;
var G__30590 = (0);
var G__30591 = (0);
seq__30493_30517 = G__30588;
chunk__30495_30518 = G__30589;
count__30496_30519 = G__30590;
i__30497_30520 = G__30591;
continue;
}
} else {
}
}
break;
}
} else {
}

if(!(cljs.core.empty_QMARK_.call(null,children))){
var seq__30511_30592 = cljs.core.seq.call(null,cljs.core.nth.call(null,node_as_vec,(2)));
var chunk__30513_30593 = null;
var count__30514_30594 = (0);
var i__30515_30595 = (0);
while(true){
if((i__30515_30595 < count__30514_30594)){
var n_30596 = cljs.core._nth.call(null,chunk__30513_30593,i__30515_30595);
var a_child_node_30597 = carousel$core$make_nodes.call(null,n_30596);
node.addChild(a_child_node_30597);

var G__30598 = seq__30511_30592;
var G__30599 = chunk__30513_30593;
var G__30600 = count__30514_30594;
var G__30601 = (i__30515_30595 + (1));
seq__30511_30592 = G__30598;
chunk__30513_30593 = G__30599;
count__30514_30594 = G__30600;
i__30515_30595 = G__30601;
continue;
} else {
var temp__4423__auto___30602 = cljs.core.seq.call(null,seq__30511_30592);
if(temp__4423__auto___30602){
var seq__30511_30603__$1 = temp__4423__auto___30602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30511_30603__$1)){
var c__18872__auto___30604 = cljs.core.chunk_first.call(null,seq__30511_30603__$1);
var G__30605 = cljs.core.chunk_rest.call(null,seq__30511_30603__$1);
var G__30606 = c__18872__auto___30604;
var G__30607 = cljs.core.count.call(null,c__18872__auto___30604);
var G__30608 = (0);
seq__30511_30592 = G__30605;
chunk__30513_30593 = G__30606;
count__30514_30594 = G__30607;
i__30515_30595 = G__30608;
continue;
} else {
var n_30609 = cljs.core.first.call(null,seq__30511_30603__$1);
var a_child_node_30610 = carousel$core$make_nodes.call(null,n_30609);
node.addChild(a_child_node_30610);

var G__30611 = cljs.core.next.call(null,seq__30511_30603__$1);
var G__30612 = null;
var G__30613 = (0);
var G__30614 = (0);
seq__30511_30592 = G__30611;
chunk__30513_30593 = G__30612;
count__30514_30594 = G__30613;
i__30515_30595 = G__30614;
continue;
}
} else {
}
}
break;
}
} else {
}

return node;
});
carousel.core.Carousel = (function carousel$core$Carousel(){
var simulation = (new carousel.core.PhysicsEngine());
var context = carousel.core.FamousEngine.createScene("body");
var tree = carousel.core.make_tree.call(null);
var root_node = carousel.core.make_nodes.call(null,tree);
var _ = context.addChild(root_node);
var children = root_node.getChildren();
var back_node = cljs.core.nth.call(null,children,(0));
var back_clicks = carousel.util.events__GT_chan.call(null,back_node,"tap");
var next_node = cljs.core.nth.call(null,children,(1));
var next_clicks = carousel.util.events__GT_chan.call(null,next_node,"tap");
var pager_node = cljs.core.nth.call(null,children,(2));
var pages = pager_node.getChildren();
var node_to_physics = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18841__auto__ = ((function (simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages){
return (function carousel$core$Carousel_$_iter__30691(s__30692){
return (new cljs.core.LazySeq(null,((function (simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages){
return (function (){
var s__30692__$1 = s__30692;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__30692__$1);
if(temp__4423__auto__){
var s__30692__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30692__$2)){
var c__18839__auto__ = cljs.core.chunk_first.call(null,s__30692__$2);
var size__18840__auto__ = cljs.core.count.call(null,c__18839__auto__);
var b__30694 = cljs.core.chunk_buffer.call(null,size__18840__auto__);
if((function (){var i__30693 = (0);
while(true){
if((i__30693 < size__18840__auto__)){
var page_node = cljs.core._nth.call(null,c__18839__auto__,i__30693);
var box = (new carousel.core.FamousBox(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(100),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null)], null))));
var anchor = (new carousel.core.Vec3((1),(0),(0)));
var spring = (new carousel.core.Spring(null,box,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"period","period",-352129191),0.5,new cljs.core.Keyword(null,"dampingRatio","dampingRatio",1595891381),0.5,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor], null))));
var quaternion = (new carousel.core.Quaternion()).fromEuler((0),(Math.PI / (-2)),(0));
var rotational_spring = (new carousel.core.RotationalSpring(null,box,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"period","period",-352129191),(1),new cljs.core.Keyword(null,"dampingRatio","dampingRatio",1595891381),0.2,new cljs.core.Keyword(null,"anchor","anchor",1549638489),quaternion], null))));
var ___$1 = simulation.add(box,spring,rotational_spring);
cljs.core.chunk_append.call(null,b__30694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"box","box",1530920394),box,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"spring","spring",787848305),spring,new cljs.core.Keyword(null,"quaternion","quaternion",1845825618),quaternion,new cljs.core.Keyword(null,"rotational-spring","rotational-spring",-1893986925),rotational_spring], null)], null));

var G__30767 = (i__30693 + (1));
i__30693 = G__30767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30694),carousel$core$Carousel_$_iter__30691.call(null,cljs.core.chunk_rest.call(null,s__30692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30694),null);
}
} else {
var page_node = cljs.core.first.call(null,s__30692__$2);
var box = (new carousel.core.FamousBox(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(100),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null)], null))));
var anchor = (new carousel.core.Vec3((1),(0),(0)));
var spring = (new carousel.core.Spring(null,box,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"period","period",-352129191),0.5,new cljs.core.Keyword(null,"dampingRatio","dampingRatio",1595891381),0.5,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor], null))));
var quaternion = (new carousel.core.Quaternion()).fromEuler((0),(Math.PI / (-2)),(0));
var rotational_spring = (new carousel.core.RotationalSpring(null,box,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"period","period",-352129191),(1),new cljs.core.Keyword(null,"dampingRatio","dampingRatio",1595891381),0.2,new cljs.core.Keyword(null,"anchor","anchor",1549638489),quaternion], null))));
var ___$1 = simulation.add(box,spring,rotational_spring);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"box","box",1530920394),box,new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"spring","spring",787848305),spring,new cljs.core.Keyword(null,"quaternion","quaternion",1845825618),quaternion,new cljs.core.Keyword(null,"rotational-spring","rotational-spring",-1893986925),rotational_spring], null)], null),carousel$core$Carousel_$_iter__30691.call(null,cljs.core.rest.call(null,s__30692__$2)));
}
} else {
return null;
}
break;
}
});})(simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages))
,null,null));
});})(simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages))
;
return iter__18841__auto__.call(null,pages);
})());
var dot_container_node = cljs.core.last.call(null,children);
var dot_nodes = dot_container_node.getChildren();
var resize = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onSizeChange","onSizeChange",-1848932432),((function (simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes){
return (function (size){

var size__$1 = (new cljs.core.IndexedSeq(size,(0)));
var dotWidth = (10);
var numPages = (5);
var spacing = (5);
var totalDotSize = ((numPages * dotWidth) + (spacing * (numPages - (1))));
var start_x = ((cljs.core.nth.call(null,size__$1,(0)) - totalDotSize) / (2));
var seq__30695 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,dot_nodes)));
var chunk__30697 = null;
var count__30698 = (0);
var i__30699 = (0);
while(true){
if((i__30699 < count__30698)){
var n = cljs.core._nth.call(null,chunk__30697,i__30699);
var dot_node_30768 = cljs.core.nth.call(null,dot_nodes,n);
dot_node_30768.setPosition((start_x + (n * (dotWidth + spacing))),(0),(0));

var G__30769 = seq__30695;
var G__30770 = chunk__30697;
var G__30771 = count__30698;
var G__30772 = (i__30699 + (1));
seq__30695 = G__30769;
chunk__30697 = G__30770;
count__30698 = G__30771;
i__30699 = G__30772;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__30695);
if(temp__4423__auto__){
var seq__30695__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30695__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__30695__$1);
var G__30773 = cljs.core.chunk_rest.call(null,seq__30695__$1);
var G__30774 = c__18872__auto__;
var G__30775 = cljs.core.count.call(null,c__18872__auto__);
var G__30776 = (0);
seq__30695 = G__30773;
chunk__30697 = G__30774;
count__30698 = G__30775;
i__30699 = G__30776;
continue;
} else {
var n = cljs.core.first.call(null,seq__30695__$1);
var dot_node_30777 = cljs.core.nth.call(null,dot_nodes,n);
dot_node_30777.setPosition((start_x + (n * (dotWidth + spacing))),(0),(0));

var G__30778 = cljs.core.next.call(null,seq__30695__$1);
var G__30779 = null;
var G__30780 = (0);
var G__30781 = (0);
seq__30695 = G__30778;
chunk__30697 = G__30779;
count__30698 = G__30780;
i__30699 = G__30781;
continue;
}
} else {
return null;
}
}
break;
}
});})(simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes))
], null));
var ___$1 = dot_container_node.addComponent(resize);
var current_index = cljs.core.atom.call(null,(0));
cljs.core.add_watch.call(null,current_index,new cljs.core.Keyword(null,"watcher","watcher",2145165251),((function (simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index){
return (function (key,atom,old_index,new_index){
var old_page_node = cljs.core.nth.call(null,pages,old_index);
var old_page_physics = node_to_physics.call(null,old_page_node);
var new_page_node = cljs.core.nth.call(null,pages,new_index);
var new_page_physics = node_to_physics.call(null,new_page_node);
var get_dom_element = ((function (old_page_node,old_page_physics,new_page_node,new_page_physics,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index){
return (function (node){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (old_page_node,old_page_physics,new_page_node,new_page_physics,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index){
return (function (component){
return cljs.core._EQ_.call(null,"DOMElement",component.constructor.name);
});})(old_page_node,old_page_physics,new_page_node,new_page_physics,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index))
,node.getComponents()));
});})(old_page_node,old_page_physics,new_page_node,new_page_physics,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index))
;
var old_dot_node = cljs.core.nth.call(null,dot_nodes,old_index);
var old_dot_dom = get_dom_element.call(null,old_dot_node);
var new_dot_node = cljs.core.nth.call(null,dot_nodes,new_index);
var new_dot_dom = get_dom_element.call(null,new_dot_node);
old_dot_dom.setProperty("backgroundColor","transparent");

new_dot_dom.setProperty("backgroundColor","white");

if((old_index < new_index)){
new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(old_page_physics).set((-1),(0),(0));

new cljs.core.Keyword(null,"quaternion","quaternion",1845825618).cljs$core$IFn$_invoke$arity$1(old_page_physics).fromEuler((0),(Math.PI / (2)),(0));

new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(new_page_physics).set((0),(0),(0));

return new cljs.core.Keyword(null,"quaternion","quaternion",1845825618).cljs$core$IFn$_invoke$arity$1(new_page_physics).set((1),(0),(0),(0));
} else {
new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(old_page_physics).set((1),(0),(0));

new cljs.core.Keyword(null,"quaternion","quaternion",1845825618).cljs$core$IFn$_invoke$arity$1(old_page_physics).fromEuler((0),(Math.PI / (-2)),(0));

new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(new_page_physics).set((0),(0),(0));

return new cljs.core.Keyword(null,"quaternion","quaternion",1845825618).cljs$core$IFn$_invoke$arity$1(new_page_physics).set((1),(0),(0),(0));
}
});})(simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index))
);

var c__20075__auto___30782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___30782,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___30782,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index){
return (function (state_30734){
var state_val_30735 = (state_30734[(1)]);
if((state_val_30735 === (7))){
var inst_30710 = (state_30734[(7)]);
var inst_30708 = (state_30734[(2)]);
var inst_30709 = cljs.core.nth.call(null,inst_30708,(0),null);
var inst_30710__$1 = cljs.core.nth.call(null,inst_30708,(1),null);
var inst_30711 = cljs.core._EQ_.call(null,inst_30710__$1,back_clicks);
var state_30734__$1 = (function (){var statearr_30736 = state_30734;
(statearr_30736[(8)] = inst_30709);

(statearr_30736[(7)] = inst_30710__$1);

return statearr_30736;
})();
if(inst_30711){
var statearr_30737_30783 = state_30734__$1;
(statearr_30737_30783[(1)] = (8));

} else {
var statearr_30738_30784 = state_30734__$1;
(statearr_30738_30784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (1))){
var state_30734__$1 = state_30734;
var statearr_30739_30785 = state_30734__$1;
(statearr_30739_30785[(2)] = null);

(statearr_30739_30785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (4))){
var inst_30704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30705 = [back_clicks,next_clicks];
var inst_30706 = (new cljs.core.PersistentVector(null,2,(5),inst_30704,inst_30705,null));
var state_30734__$1 = state_30734;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30734__$1,(7),inst_30706);
} else {
if((state_val_30735 === (13))){
var inst_30724 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30740_30786 = state_30734__$1;
(statearr_30740_30786[(2)] = inst_30724);

(statearr_30740_30786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (6))){
var inst_30730 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30741_30787 = state_30734__$1;
(statearr_30741_30787[(2)] = inst_30730);

(statearr_30741_30787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (3))){
var inst_30732 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30734__$1,inst_30732);
} else {
if((state_val_30735 === (12))){
var state_30734__$1 = state_30734;
var statearr_30742_30788 = state_30734__$1;
(statearr_30742_30788[(2)] = null);

(statearr_30742_30788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (2))){
var state_30734__$1 = state_30734;
var statearr_30743_30789 = state_30734__$1;
(statearr_30743_30789[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (11))){
var inst_30719 = cljs.core.deref.call(null,current_index);
var inst_30720 = cljs.core.println.call(null,"next",inst_30719);
var inst_30721 = cljs.core.swap_BANG_.call(null,current_index,cljs.core.inc);
var state_30734__$1 = (function (){var statearr_30745 = state_30734;
(statearr_30745[(9)] = inst_30720);

return statearr_30745;
})();
var statearr_30746_30790 = state_30734__$1;
(statearr_30746_30790[(2)] = inst_30721);

(statearr_30746_30790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (9))){
var inst_30710 = (state_30734[(7)]);
var inst_30717 = cljs.core._EQ_.call(null,inst_30710,next_clicks);
var state_30734__$1 = state_30734;
if(inst_30717){
var statearr_30747_30791 = state_30734__$1;
(statearr_30747_30791[(1)] = (11));

} else {
var statearr_30748_30792 = state_30734__$1;
(statearr_30748_30792[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (5))){
var state_30734__$1 = state_30734;
var statearr_30749_30793 = state_30734__$1;
(statearr_30749_30793[(2)] = null);

(statearr_30749_30793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (10))){
var inst_30726 = (state_30734[(2)]);
var state_30734__$1 = (function (){var statearr_30750 = state_30734;
(statearr_30750[(10)] = inst_30726);

return statearr_30750;
})();
var statearr_30751_30794 = state_30734__$1;
(statearr_30751_30794[(2)] = null);

(statearr_30751_30794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (8))){
var inst_30713 = cljs.core.deref.call(null,current_index);
var inst_30714 = cljs.core.println.call(null,"back",inst_30713);
var inst_30715 = cljs.core.swap_BANG_.call(null,current_index,cljs.core.dec);
var state_30734__$1 = (function (){var statearr_30752 = state_30734;
(statearr_30752[(11)] = inst_30714);

return statearr_30752;
})();
var statearr_30753_30795 = state_30734__$1;
(statearr_30753_30795[(2)] = inst_30715);

(statearr_30753_30795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20075__auto___30782,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index))
;
return ((function (switch__20054__auto__,c__20075__auto___30782,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index){
return (function() {
var carousel$core$Carousel_$_state_machine__20055__auto__ = null;
var carousel$core$Carousel_$_state_machine__20055__auto____0 = (function (){
var statearr_30757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30757[(0)] = carousel$core$Carousel_$_state_machine__20055__auto__);

(statearr_30757[(1)] = (1));

return statearr_30757;
});
var carousel$core$Carousel_$_state_machine__20055__auto____1 = (function (state_30734){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_30734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e30758){if((e30758 instanceof Object)){
var ex__20058__auto__ = e30758;
var statearr_30759_30796 = state_30734;
(statearr_30759_30796[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30797 = state_30734;
state_30734 = G__30797;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
carousel$core$Carousel_$_state_machine__20055__auto__ = function(state_30734){
switch(arguments.length){
case 0:
return carousel$core$Carousel_$_state_machine__20055__auto____0.call(this);
case 1:
return carousel$core$Carousel_$_state_machine__20055__auto____1.call(this,state_30734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
carousel$core$Carousel_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = carousel$core$Carousel_$_state_machine__20055__auto____0;
carousel$core$Carousel_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = carousel$core$Carousel_$_state_machine__20055__auto____1;
return carousel$core$Carousel_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___30782,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index))
})();
var state__20077__auto__ = (function (){var statearr_30760 = f__20076__auto__.call(null);
(statearr_30760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___30782);

return statearr_30760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___30782,simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index))
);


return carousel.core.FamousEngine.requestUpdate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),((function (simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index){
return (function (time){
simulation.update(time);

var seq__30761_30798 = cljs.core.seq.call(null,pages);
var chunk__30763_30799 = null;
var count__30764_30800 = (0);
var i__30765_30801 = (0);
while(true){
if((i__30765_30801 < count__30764_30800)){
var page_node_30802 = cljs.core._nth.call(null,chunk__30763_30799,i__30765_30801);
var physics_30803 = node_to_physics.call(null,page_node_30802);
var physics_transform_30804 = simulation.getTransform(new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(physics_30803));
var p_30805 = physics_transform_30804.position;
var r_30806 = physics_transform_30804.rotation;
page_node_30802.setPosition(((0) * (1446)),(0),(0)).setRotation(cljs.core.nth.call(null,r_30806,(0)),cljs.core.nth.call(null,r_30806,(1)),cljs.core.nth.call(null,r_30806,(2)),cljs.core.nth.call(null,r_30806,(3)));

var G__30807 = seq__30761_30798;
var G__30808 = chunk__30763_30799;
var G__30809 = count__30764_30800;
var G__30810 = (i__30765_30801 + (1));
seq__30761_30798 = G__30807;
chunk__30763_30799 = G__30808;
count__30764_30800 = G__30809;
i__30765_30801 = G__30810;
continue;
} else {
var temp__4423__auto___30811 = cljs.core.seq.call(null,seq__30761_30798);
if(temp__4423__auto___30811){
var seq__30761_30812__$1 = temp__4423__auto___30811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30761_30812__$1)){
var c__18872__auto___30813 = cljs.core.chunk_first.call(null,seq__30761_30812__$1);
var G__30814 = cljs.core.chunk_rest.call(null,seq__30761_30812__$1);
var G__30815 = c__18872__auto___30813;
var G__30816 = cljs.core.count.call(null,c__18872__auto___30813);
var G__30817 = (0);
seq__30761_30798 = G__30814;
chunk__30763_30799 = G__30815;
count__30764_30800 = G__30816;
i__30765_30801 = G__30817;
continue;
} else {
var page_node_30818 = cljs.core.first.call(null,seq__30761_30812__$1);
var physics_30819 = node_to_physics.call(null,page_node_30818);
var physics_transform_30820 = simulation.getTransform(new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(physics_30819));
var p_30821 = physics_transform_30820.position;
var r_30822 = physics_transform_30820.rotation;
page_node_30818.setPosition(((0) * (1446)),(0),(0)).setRotation(cljs.core.nth.call(null,r_30822,(0)),cljs.core.nth.call(null,r_30822,(1)),cljs.core.nth.call(null,r_30822,(2)),cljs.core.nth.call(null,r_30822,(3)));

var G__30823 = cljs.core.next.call(null,seq__30761_30812__$1);
var G__30824 = null;
var G__30825 = (0);
var G__30826 = (0);
seq__30761_30798 = G__30823;
chunk__30763_30799 = G__30824;
count__30764_30800 = G__30825;
i__30765_30801 = G__30826;
continue;
}
} else {
}
}
break;
}

var this$ = this;
return carousel.core.FamousEngine.requestUpdateOnNextTick(this$);
});})(simulation,context,tree,root_node,_,children,back_node,back_clicks,next_node,next_clicks,pager_node,pages,node_to_physics,dot_container_node,dot_nodes,resize,___$1,current_index))
], null)));
});
carousel.core.Carousel.call(null);
carousel.core.FamousEngine.init();

//# sourceMappingURL=core.js.map?rel=1436743456859