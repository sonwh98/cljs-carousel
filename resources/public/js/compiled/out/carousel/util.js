// Compiled by ClojureScript 0.0-3308 {}
goog.provide('carousel.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.famous.Famous');
if(typeof carousel.util.famous !== 'undefined'){
} else {
carousel.util.famous = famous;
}
if(typeof carousel.util.GestureHandler !== 'undefined'){
} else {
carousel.util.GestureHandler = carousel.util.famous.components.GestureHandler;
}
/**
 * Given a target DOM element and event type return a channel of
 * observed events. Can supply the channel to receive events as third
 * optional argument.
 */
carousel.util.events__GT_chan = (function carousel$util$events__GT_chan(){
var G__23700 = arguments.length;
switch (G__23700) {
case 2:
return carousel.util.events__GT_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carousel.util.events__GT_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

carousel.util.events__GT_chan.cljs$core$IFn$_invoke$arity$2 = (function (node,event){
return carousel.util.events__GT_chan.call(null,node,event,cljs.core.async.chan.call(null));
});

carousel.util.events__GT_chan.cljs$core$IFn$_invoke$arity$3 = (function (node,event,c){
(new carousel.util.GestureHandler(node)).on(event,(function (){
return cljs.core.async.put_BANG_.call(null,c,event);
}));

return c;
});

carousel.util.events__GT_chan.cljs$lang$maxFixedArity = 3;
if(typeof carousel.util.get_children !== 'undefined'){
} else {
carousel.util.get_children = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"carousel.util","get-children"),((function (method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__){
return (function (v){
if((cljs.core._EQ_.call(null,cljs.core.type.call(null,v),cljs.core.PersistentVector)) && ((cljs.core.count.call(null,v) > (2)))){
return cljs.core.type.call(null,v);
} else {
return null;
}
});})(method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,carousel.util.get_children,cljs.core.PersistentVector,(function (params){
return cljs.core.nth.call(null,params,(2));
}));
cljs.core._add_method.call(null,carousel.util.get_children,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));

//# sourceMappingURL=util.js.map?rel=1436658170029