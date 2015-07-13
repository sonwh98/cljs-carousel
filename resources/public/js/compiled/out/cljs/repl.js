// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27749_27761 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27750_27762 = null;
var count__27751_27763 = (0);
var i__27752_27764 = (0);
while(true){
if((i__27752_27764 < count__27751_27763)){
var f_27765 = cljs.core._nth.call(null,chunk__27750_27762,i__27752_27764);
cljs.core.println.call(null,"  ",f_27765);

var G__27766 = seq__27749_27761;
var G__27767 = chunk__27750_27762;
var G__27768 = count__27751_27763;
var G__27769 = (i__27752_27764 + (1));
seq__27749_27761 = G__27766;
chunk__27750_27762 = G__27767;
count__27751_27763 = G__27768;
i__27752_27764 = G__27769;
continue;
} else {
var temp__4423__auto___27770 = cljs.core.seq.call(null,seq__27749_27761);
if(temp__4423__auto___27770){
var seq__27749_27771__$1 = temp__4423__auto___27770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27749_27771__$1)){
var c__18872__auto___27772 = cljs.core.chunk_first.call(null,seq__27749_27771__$1);
var G__27773 = cljs.core.chunk_rest.call(null,seq__27749_27771__$1);
var G__27774 = c__18872__auto___27772;
var G__27775 = cljs.core.count.call(null,c__18872__auto___27772);
var G__27776 = (0);
seq__27749_27761 = G__27773;
chunk__27750_27762 = G__27774;
count__27751_27763 = G__27775;
i__27752_27764 = G__27776;
continue;
} else {
var f_27777 = cljs.core.first.call(null,seq__27749_27771__$1);
cljs.core.println.call(null,"  ",f_27777);

var G__27778 = cljs.core.next.call(null,seq__27749_27771__$1);
var G__27779 = null;
var G__27780 = (0);
var G__27781 = (0);
seq__27749_27761 = G__27778;
chunk__27750_27762 = G__27779;
count__27751_27763 = G__27780;
i__27752_27764 = G__27781;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27782 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27782);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27782)))?cljs.core.second.call(null,arglists_27782):arglists_27782));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27753 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27754 = null;
var count__27755 = (0);
var i__27756 = (0);
while(true){
if((i__27756 < count__27755)){
var vec__27757 = cljs.core._nth.call(null,chunk__27754,i__27756);
var name = cljs.core.nth.call(null,vec__27757,(0),null);
var map__27758 = cljs.core.nth.call(null,vec__27757,(1),null);
var map__27758__$1 = ((cljs.core.seq_QMARK_.call(null,map__27758))?cljs.core.apply.call(null,cljs.core.hash_map,map__27758):map__27758);
var doc = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27783 = seq__27753;
var G__27784 = chunk__27754;
var G__27785 = count__27755;
var G__27786 = (i__27756 + (1));
seq__27753 = G__27783;
chunk__27754 = G__27784;
count__27755 = G__27785;
i__27756 = G__27786;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27753);
if(temp__4423__auto__){
var seq__27753__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27753__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__27753__$1);
var G__27787 = cljs.core.chunk_rest.call(null,seq__27753__$1);
var G__27788 = c__18872__auto__;
var G__27789 = cljs.core.count.call(null,c__18872__auto__);
var G__27790 = (0);
seq__27753 = G__27787;
chunk__27754 = G__27788;
count__27755 = G__27789;
i__27756 = G__27790;
continue;
} else {
var vec__27759 = cljs.core.first.call(null,seq__27753__$1);
var name = cljs.core.nth.call(null,vec__27759,(0),null);
var map__27760 = cljs.core.nth.call(null,vec__27759,(1),null);
var map__27760__$1 = ((cljs.core.seq_QMARK_.call(null,map__27760))?cljs.core.apply.call(null,cljs.core.hash_map,map__27760):map__27760);
var doc = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27760__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27791 = cljs.core.next.call(null,seq__27753__$1);
var G__27792 = null;
var G__27793 = (0);
var G__27794 = (0);
seq__27753 = G__27791;
chunk__27754 = G__27792;
count__27755 = G__27793;
i__27756 = G__27794;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1436658173102