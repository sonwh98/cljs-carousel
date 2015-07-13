// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19127__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19127__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27506_27514 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27507_27515 = null;
var count__27508_27516 = (0);
var i__27509_27517 = (0);
while(true){
if((i__27509_27517 < count__27508_27516)){
var k_27518 = cljs.core._nth.call(null,chunk__27507_27515,i__27509_27517);
e.setAttribute(cljs.core.name.call(null,k_27518),cljs.core.get.call(null,attrs,k_27518));

var G__27519 = seq__27506_27514;
var G__27520 = chunk__27507_27515;
var G__27521 = count__27508_27516;
var G__27522 = (i__27509_27517 + (1));
seq__27506_27514 = G__27519;
chunk__27507_27515 = G__27520;
count__27508_27516 = G__27521;
i__27509_27517 = G__27522;
continue;
} else {
var temp__4423__auto___27523 = cljs.core.seq.call(null,seq__27506_27514);
if(temp__4423__auto___27523){
var seq__27506_27524__$1 = temp__4423__auto___27523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27506_27524__$1)){
var c__18872__auto___27525 = cljs.core.chunk_first.call(null,seq__27506_27524__$1);
var G__27526 = cljs.core.chunk_rest.call(null,seq__27506_27524__$1);
var G__27527 = c__18872__auto___27525;
var G__27528 = cljs.core.count.call(null,c__18872__auto___27525);
var G__27529 = (0);
seq__27506_27514 = G__27526;
chunk__27507_27515 = G__27527;
count__27508_27516 = G__27528;
i__27509_27517 = G__27529;
continue;
} else {
var k_27530 = cljs.core.first.call(null,seq__27506_27524__$1);
e.setAttribute(cljs.core.name.call(null,k_27530),cljs.core.get.call(null,attrs,k_27530));

var G__27531 = cljs.core.next.call(null,seq__27506_27524__$1);
var G__27532 = null;
var G__27533 = (0);
var G__27534 = (0);
seq__27506_27514 = G__27531;
chunk__27507_27515 = G__27532;
count__27508_27516 = G__27533;
i__27509_27517 = G__27534;
continue;
}
} else {
}
}
break;
}

var seq__27510_27535 = cljs.core.seq.call(null,children);
var chunk__27511_27536 = null;
var count__27512_27537 = (0);
var i__27513_27538 = (0);
while(true){
if((i__27513_27538 < count__27512_27537)){
var ch_27539 = cljs.core._nth.call(null,chunk__27511_27536,i__27513_27538);
e.appendChild(ch_27539);

var G__27540 = seq__27510_27535;
var G__27541 = chunk__27511_27536;
var G__27542 = count__27512_27537;
var G__27543 = (i__27513_27538 + (1));
seq__27510_27535 = G__27540;
chunk__27511_27536 = G__27541;
count__27512_27537 = G__27542;
i__27513_27538 = G__27543;
continue;
} else {
var temp__4423__auto___27544 = cljs.core.seq.call(null,seq__27510_27535);
if(temp__4423__auto___27544){
var seq__27510_27545__$1 = temp__4423__auto___27544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27510_27545__$1)){
var c__18872__auto___27546 = cljs.core.chunk_first.call(null,seq__27510_27545__$1);
var G__27547 = cljs.core.chunk_rest.call(null,seq__27510_27545__$1);
var G__27548 = c__18872__auto___27546;
var G__27549 = cljs.core.count.call(null,c__18872__auto___27546);
var G__27550 = (0);
seq__27510_27535 = G__27547;
chunk__27511_27536 = G__27548;
count__27512_27537 = G__27549;
i__27513_27538 = G__27550;
continue;
} else {
var ch_27551 = cljs.core.first.call(null,seq__27510_27545__$1);
e.appendChild(ch_27551);

var G__27552 = cljs.core.next.call(null,seq__27510_27545__$1);
var G__27553 = null;
var G__27554 = (0);
var G__27555 = (0);
seq__27510_27535 = G__27552;
chunk__27511_27536 = G__27553;
count__27512_27537 = G__27554;
i__27513_27538 = G__27555;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27503){
var G__27504 = cljs.core.first.call(null,seq27503);
var seq27503__$1 = cljs.core.next.call(null,seq27503);
var G__27505 = cljs.core.first.call(null,seq27503__$1);
var seq27503__$2 = cljs.core.next.call(null,seq27503__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27504,G__27505,seq27503__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27556 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27556.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27556.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_27556.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27556);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27557,st_map){
var map__27561 = p__27557;
var map__27561__$1 = ((cljs.core.seq_QMARK_.call(null,map__27561))?cljs.core.apply.call(null,cljs.core.hash_map,map__27561):map__27561);
var container_el = cljs.core.get.call(null,map__27561__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27561,map__27561__$1,container_el){
return (function (p__27562){
var vec__27563 = p__27562;
var k = cljs.core.nth.call(null,vec__27563,(0),null);
var v = cljs.core.nth.call(null,vec__27563,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27561,map__27561__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27564,dom_str){
var map__27566 = p__27564;
var map__27566__$1 = ((cljs.core.seq_QMARK_.call(null,map__27566))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566):map__27566);
var c = map__27566__$1;
var content_area_el = cljs.core.get.call(null,map__27566__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27567){
var map__27569 = p__27567;
var map__27569__$1 = ((cljs.core.seq_QMARK_.call(null,map__27569))?cljs.core.apply.call(null,cljs.core.hash_map,map__27569):map__27569);
var content_area_el = cljs.core.get.call(null,map__27569__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__){
return (function (state_27611){
var state_val_27612 = (state_27611[(1)]);
if((state_val_27612 === (1))){
var inst_27596 = (state_27611[(7)]);
var inst_27596__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27597 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27598 = ["10px","10px","100%","68px","1.0"];
var inst_27599 = cljs.core.PersistentHashMap.fromArrays(inst_27597,inst_27598);
var inst_27600 = cljs.core.merge.call(null,inst_27599,style);
var inst_27601 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27596__$1,inst_27600);
var inst_27602 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27596__$1,msg);
var inst_27603 = cljs.core.async.timeout.call(null,(300));
var state_27611__$1 = (function (){var statearr_27613 = state_27611;
(statearr_27613[(8)] = inst_27601);

(statearr_27613[(9)] = inst_27602);

(statearr_27613[(7)] = inst_27596__$1);

return statearr_27613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27611__$1,(2),inst_27603);
} else {
if((state_val_27612 === (2))){
var inst_27596 = (state_27611[(7)]);
var inst_27605 = (state_27611[(2)]);
var inst_27606 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27607 = ["auto"];
var inst_27608 = cljs.core.PersistentHashMap.fromArrays(inst_27606,inst_27607);
var inst_27609 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27596,inst_27608);
var state_27611__$1 = (function (){var statearr_27614 = state_27611;
(statearr_27614[(10)] = inst_27605);

return statearr_27614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27611__$1,inst_27609);
} else {
return null;
}
}
});})(c__20075__auto__))
;
return ((function (switch__20054__auto__,c__20075__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto____0 = (function (){
var statearr_27618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27618[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto__);

(statearr_27618[(1)] = (1));

return statearr_27618;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto____1 = (function (state_27611){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_27611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e27619){if((e27619 instanceof Object)){
var ex__20058__auto__ = e27619;
var statearr_27620_27622 = state_27611;
(statearr_27620_27622[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27623 = state_27611;
state_27611 = G__27623;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto__ = function(state_27611){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto____1.call(this,state_27611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__))
})();
var state__20077__auto__ = (function (){var statearr_27621 = f__20076__auto__.call(null);
(statearr_27621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_27621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__))
);

return c__20075__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__27625 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__27625,(0),null);
var ln = cljs.core.nth.call(null,vec__27625,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27628 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27628,(0),null);
var file_line = cljs.core.nth.call(null,vec__27628,(1),null);
var file_column = cljs.core.nth.call(null,vec__27628,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27628,file_name,file_line,file_column){
return (function (p1__27626_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__27626_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__27628,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18087__auto__ = file_line;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
var and__18075__auto__ = cause;
if(cljs.core.truth_(and__18075__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18075__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27630 = figwheel.client.heads_up.ensure_container.call(null);
var map__27630__$1 = ((cljs.core.seq_QMARK_.call(null,map__27630))?cljs.core.apply.call(null,cljs.core.hash_map,map__27630):map__27630);
var content_area_el = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__){
return (function (state_27677){
var state_val_27678 = (state_27677[(1)]);
if((state_val_27678 === (1))){
var inst_27660 = (state_27677[(7)]);
var inst_27660__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27661 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27662 = ["0.0"];
var inst_27663 = cljs.core.PersistentHashMap.fromArrays(inst_27661,inst_27662);
var inst_27664 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27660__$1,inst_27663);
var inst_27665 = cljs.core.async.timeout.call(null,(300));
var state_27677__$1 = (function (){var statearr_27679 = state_27677;
(statearr_27679[(8)] = inst_27664);

(statearr_27679[(7)] = inst_27660__$1);

return statearr_27679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27677__$1,(2),inst_27665);
} else {
if((state_val_27678 === (2))){
var inst_27660 = (state_27677[(7)]);
var inst_27667 = (state_27677[(2)]);
var inst_27668 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27669 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27670 = cljs.core.PersistentHashMap.fromArrays(inst_27668,inst_27669);
var inst_27671 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27660,inst_27670);
var inst_27672 = cljs.core.async.timeout.call(null,(200));
var state_27677__$1 = (function (){var statearr_27680 = state_27677;
(statearr_27680[(9)] = inst_27667);

(statearr_27680[(10)] = inst_27671);

return statearr_27680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27677__$1,(3),inst_27672);
} else {
if((state_val_27678 === (3))){
var inst_27660 = (state_27677[(7)]);
var inst_27674 = (state_27677[(2)]);
var inst_27675 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27660,"");
var state_27677__$1 = (function (){var statearr_27681 = state_27677;
(statearr_27681[(11)] = inst_27674);

return statearr_27681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27677__$1,inst_27675);
} else {
return null;
}
}
}
});})(c__20075__auto__))
;
return ((function (switch__20054__auto__,c__20075__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20055__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20055__auto____0 = (function (){
var statearr_27685 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27685[(0)] = figwheel$client$heads_up$clear_$_state_machine__20055__auto__);

(statearr_27685[(1)] = (1));

return statearr_27685;
});
var figwheel$client$heads_up$clear_$_state_machine__20055__auto____1 = (function (state_27677){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_27677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e27686){if((e27686 instanceof Object)){
var ex__20058__auto__ = e27686;
var statearr_27687_27689 = state_27677;
(statearr_27687_27689[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27690 = state_27677;
state_27677 = G__27690;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20055__auto__ = function(state_27677){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20055__auto____1.call(this,state_27677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20055__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20055__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__))
})();
var state__20077__auto__ = (function (){var statearr_27688 = f__20076__auto__.call(null);
(statearr_27688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_27688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__))
);

return c__20075__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__){
return (function (state_27722){
var state_val_27723 = (state_27722[(1)]);
if((state_val_27723 === (1))){
var inst_27712 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27722__$1 = state_27722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27722__$1,(2),inst_27712);
} else {
if((state_val_27723 === (2))){
var inst_27714 = (state_27722[(2)]);
var inst_27715 = cljs.core.async.timeout.call(null,(400));
var state_27722__$1 = (function (){var statearr_27724 = state_27722;
(statearr_27724[(7)] = inst_27714);

return statearr_27724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27722__$1,(3),inst_27715);
} else {
if((state_val_27723 === (3))){
var inst_27717 = (state_27722[(2)]);
var inst_27718 = figwheel.client.heads_up.clear.call(null);
var state_27722__$1 = (function (){var statearr_27725 = state_27722;
(statearr_27725[(8)] = inst_27717);

return statearr_27725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27722__$1,(4),inst_27718);
} else {
if((state_val_27723 === (4))){
var inst_27720 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27722__$1,inst_27720);
} else {
return null;
}
}
}
}
});})(c__20075__auto__))
;
return ((function (switch__20054__auto__,c__20075__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto____0 = (function (){
var statearr_27729 = [null,null,null,null,null,null,null,null,null];
(statearr_27729[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto__);

(statearr_27729[(1)] = (1));

return statearr_27729;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto____1 = (function (state_27722){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_27722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e27730){if((e27730 instanceof Object)){
var ex__20058__auto__ = e27730;
var statearr_27731_27733 = state_27722;
(statearr_27731_27733[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27734 = state_27722;
state_27722 = G__27734;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto__ = function(state_27722){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto____1.call(this,state_27722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__))
})();
var state__20077__auto__ = (function (){var statearr_27732 = f__20076__auto__.call(null);
(statearr_27732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_27732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__))
);

return c__20075__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436658173057