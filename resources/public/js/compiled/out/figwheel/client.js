// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26716__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26717__i = 0, G__26717__a = new Array(arguments.length -  0);
while (G__26717__i < G__26717__a.length) {G__26717__a[G__26717__i] = arguments[G__26717__i + 0]; ++G__26717__i;}
  args = new cljs.core.IndexedSeq(G__26717__a,0);
} 
return G__26716__delegate.call(this,args);};
G__26716.cljs$lang$maxFixedArity = 0;
G__26716.cljs$lang$applyTo = (function (arglist__26718){
var args = cljs.core.seq(arglist__26718);
return G__26716__delegate(args);
});
G__26716.cljs$core$IFn$_invoke$arity$variadic = G__26716__delegate;
return G__26716;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26719){
var map__26721 = p__26719;
var map__26721__$1 = ((cljs.core.seq_QMARK_.call(null,map__26721))?cljs.core.apply.call(null,cljs.core.hash_map,map__26721):map__26721);
var message = cljs.core.get.call(null,map__26721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26721__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18087__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18075__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18075__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18075__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20075__auto___26850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___26850,ch){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___26850,ch){
return (function (state_26824){
var state_val_26825 = (state_26824[(1)]);
if((state_val_26825 === (7))){
var inst_26820 = (state_26824[(2)]);
var state_26824__$1 = state_26824;
var statearr_26826_26851 = state_26824__$1;
(statearr_26826_26851[(2)] = inst_26820);

(statearr_26826_26851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (1))){
var state_26824__$1 = state_26824;
var statearr_26827_26852 = state_26824__$1;
(statearr_26827_26852[(2)] = null);

(statearr_26827_26852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (4))){
var inst_26788 = (state_26824[(7)]);
var inst_26788__$1 = (state_26824[(2)]);
var state_26824__$1 = (function (){var statearr_26828 = state_26824;
(statearr_26828[(7)] = inst_26788__$1);

return statearr_26828;
})();
if(cljs.core.truth_(inst_26788__$1)){
var statearr_26829_26853 = state_26824__$1;
(statearr_26829_26853[(1)] = (5));

} else {
var statearr_26830_26854 = state_26824__$1;
(statearr_26830_26854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (13))){
var state_26824__$1 = state_26824;
var statearr_26831_26855 = state_26824__$1;
(statearr_26831_26855[(2)] = null);

(statearr_26831_26855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (6))){
var state_26824__$1 = state_26824;
var statearr_26832_26856 = state_26824__$1;
(statearr_26832_26856[(2)] = null);

(statearr_26832_26856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (3))){
var inst_26822 = (state_26824[(2)]);
var state_26824__$1 = state_26824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26824__$1,inst_26822);
} else {
if((state_val_26825 === (12))){
var inst_26795 = (state_26824[(8)]);
var inst_26808 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26795);
var inst_26809 = cljs.core.first.call(null,inst_26808);
var inst_26810 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26809);
var inst_26811 = console.warn("Figwheel: Not loading code with warnings - ",inst_26810);
var state_26824__$1 = state_26824;
var statearr_26833_26857 = state_26824__$1;
(statearr_26833_26857[(2)] = inst_26811);

(statearr_26833_26857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (2))){
var state_26824__$1 = state_26824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26824__$1,(4),ch);
} else {
if((state_val_26825 === (11))){
var inst_26804 = (state_26824[(2)]);
var state_26824__$1 = state_26824;
var statearr_26834_26858 = state_26824__$1;
(statearr_26834_26858[(2)] = inst_26804);

(statearr_26834_26858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (9))){
var inst_26794 = (state_26824[(9)]);
var inst_26806 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26794,opts);
var state_26824__$1 = state_26824;
if(cljs.core.truth_(inst_26806)){
var statearr_26835_26859 = state_26824__$1;
(statearr_26835_26859[(1)] = (12));

} else {
var statearr_26836_26860 = state_26824__$1;
(statearr_26836_26860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (5))){
var inst_26788 = (state_26824[(7)]);
var inst_26794 = (state_26824[(9)]);
var inst_26790 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26791 = (new cljs.core.PersistentArrayMap(null,2,inst_26790,null));
var inst_26792 = (new cljs.core.PersistentHashSet(null,inst_26791,null));
var inst_26793 = figwheel.client.focus_msgs.call(null,inst_26792,inst_26788);
var inst_26794__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26793);
var inst_26795 = cljs.core.first.call(null,inst_26793);
var inst_26796 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26794__$1,opts);
var state_26824__$1 = (function (){var statearr_26837 = state_26824;
(statearr_26837[(8)] = inst_26795);

(statearr_26837[(9)] = inst_26794__$1);

return statearr_26837;
})();
if(cljs.core.truth_(inst_26796)){
var statearr_26838_26861 = state_26824__$1;
(statearr_26838_26861[(1)] = (8));

} else {
var statearr_26839_26862 = state_26824__$1;
(statearr_26839_26862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (14))){
var inst_26814 = (state_26824[(2)]);
var state_26824__$1 = state_26824;
var statearr_26840_26863 = state_26824__$1;
(statearr_26840_26863[(2)] = inst_26814);

(statearr_26840_26863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (10))){
var inst_26816 = (state_26824[(2)]);
var state_26824__$1 = (function (){var statearr_26841 = state_26824;
(statearr_26841[(10)] = inst_26816);

return statearr_26841;
})();
var statearr_26842_26864 = state_26824__$1;
(statearr_26842_26864[(2)] = null);

(statearr_26842_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26825 === (8))){
var inst_26795 = (state_26824[(8)]);
var inst_26798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26799 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26795);
var inst_26800 = cljs.core.async.timeout.call(null,(1000));
var inst_26801 = [inst_26799,inst_26800];
var inst_26802 = (new cljs.core.PersistentVector(null,2,(5),inst_26798,inst_26801,null));
var state_26824__$1 = state_26824;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26824__$1,(11),inst_26802);
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
}
});})(c__20075__auto___26850,ch))
;
return ((function (switch__20054__auto__,c__20075__auto___26850,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20055__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20055__auto____0 = (function (){
var statearr_26846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26846[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20055__auto__);

(statearr_26846[(1)] = (1));

return statearr_26846;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20055__auto____1 = (function (state_26824){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_26824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e26847){if((e26847 instanceof Object)){
var ex__20058__auto__ = e26847;
var statearr_26848_26865 = state_26824;
(statearr_26848_26865[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26866 = state_26824;
state_26824 = G__26866;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20055__auto__ = function(state_26824){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20055__auto____1.call(this,state_26824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20055__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20055__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___26850,ch))
})();
var state__20077__auto__ = (function (){var statearr_26849 = f__20076__auto__.call(null);
(statearr_26849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___26850);

return statearr_26849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___26850,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26867_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26867_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26874 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26874){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26872 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26873 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26872,_STAR_print_newline_STAR_26873,base_path_26874){
return (function() { 
var G__26875__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26876__i = 0, G__26876__a = new Array(arguments.length -  0);
while (G__26876__i < G__26876__a.length) {G__26876__a[G__26876__i] = arguments[G__26876__i + 0]; ++G__26876__i;}
  args = new cljs.core.IndexedSeq(G__26876__a,0);
} 
return G__26875__delegate.call(this,args);};
G__26875.cljs$lang$maxFixedArity = 0;
G__26875.cljs$lang$applyTo = (function (arglist__26877){
var args = cljs.core.seq(arglist__26877);
return G__26875__delegate(args);
});
G__26875.cljs$core$IFn$_invoke$arity$variadic = G__26875__delegate;
return G__26875;
})()
;})(_STAR_print_fn_STAR_26872,_STAR_print_newline_STAR_26873,base_path_26874))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26873;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26872;
}}catch (e26871){if((e26871 instanceof Error)){
var e = e26871;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26874], null));
} else {
var e = e26871;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26874))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26878){
var map__26883 = p__26878;
var map__26883__$1 = ((cljs.core.seq_QMARK_.call(null,map__26883))?cljs.core.apply.call(null,cljs.core.hash_map,map__26883):map__26883);
var opts = map__26883__$1;
var build_id = cljs.core.get.call(null,map__26883__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26883,map__26883__$1,opts,build_id){
return (function (p__26884){
var vec__26885 = p__26884;
var map__26886 = cljs.core.nth.call(null,vec__26885,(0),null);
var map__26886__$1 = ((cljs.core.seq_QMARK_.call(null,map__26886))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);
var msg = map__26886__$1;
var msg_name = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26885,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26885,map__26886,map__26886__$1,msg,msg_name,_,map__26883,map__26883__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26885,map__26886,map__26886__$1,msg,msg_name,_,map__26883,map__26883__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26883,map__26883__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26890){
var vec__26891 = p__26890;
var map__26892 = cljs.core.nth.call(null,vec__26891,(0),null);
var map__26892__$1 = ((cljs.core.seq_QMARK_.call(null,map__26892))?cljs.core.apply.call(null,cljs.core.hash_map,map__26892):map__26892);
var msg = map__26892__$1;
var msg_name = cljs.core.get.call(null,map__26892__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26891,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26893){
var map__26901 = p__26893;
var map__26901__$1 = ((cljs.core.seq_QMARK_.call(null,map__26901))?cljs.core.apply.call(null,cljs.core.hash_map,map__26901):map__26901);
var on_compile_warning = cljs.core.get.call(null,map__26901__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26901__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26901,map__26901__$1,on_compile_warning,on_compile_fail){
return (function (p__26902){
var vec__26903 = p__26902;
var map__26904 = cljs.core.nth.call(null,vec__26903,(0),null);
var map__26904__$1 = ((cljs.core.seq_QMARK_.call(null,map__26904))?cljs.core.apply.call(null,cljs.core.hash_map,map__26904):map__26904);
var msg = map__26904__$1;
var msg_name = cljs.core.get.call(null,map__26904__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26903,(1));
var pred__26905 = cljs.core._EQ_;
var expr__26906 = msg_name;
if(cljs.core.truth_(pred__26905.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26906))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26905.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26906))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26901,map__26901__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__,msg_hist,msg_names,msg){
return (function (state_27107){
var state_val_27108 = (state_27107[(1)]);
if((state_val_27108 === (7))){
var inst_27041 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27109_27150 = state_27107__$1;
(statearr_27109_27150[(2)] = inst_27041);

(statearr_27109_27150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (20))){
var inst_27069 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27069)){
var statearr_27110_27151 = state_27107__$1;
(statearr_27110_27151[(1)] = (22));

} else {
var statearr_27111_27152 = state_27107__$1;
(statearr_27111_27152[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (27))){
var inst_27081 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27082 = figwheel.client.heads_up.display_warning.call(null,inst_27081);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(30),inst_27082);
} else {
if((state_val_27108 === (1))){
var inst_27029 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27029)){
var statearr_27112_27153 = state_27107__$1;
(statearr_27112_27153[(1)] = (2));

} else {
var statearr_27113_27154 = state_27107__$1;
(statearr_27113_27154[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (24))){
var inst_27097 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27114_27155 = state_27107__$1;
(statearr_27114_27155[(2)] = inst_27097);

(statearr_27114_27155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (4))){
var inst_27105 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27107__$1,inst_27105);
} else {
if((state_val_27108 === (15))){
var inst_27057 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27058 = figwheel.client.format_messages.call(null,inst_27057);
var inst_27059 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27060 = figwheel.client.heads_up.display_error.call(null,inst_27058,inst_27059);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(18),inst_27060);
} else {
if((state_val_27108 === (21))){
var inst_27099 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27115_27156 = state_27107__$1;
(statearr_27115_27156[(2)] = inst_27099);

(statearr_27115_27156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (31))){
var inst_27088 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(34),inst_27088);
} else {
if((state_val_27108 === (32))){
var state_27107__$1 = state_27107;
var statearr_27116_27157 = state_27107__$1;
(statearr_27116_27157[(2)] = null);

(statearr_27116_27157[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (33))){
var inst_27093 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27117_27158 = state_27107__$1;
(statearr_27117_27158[(2)] = inst_27093);

(statearr_27117_27158[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (13))){
var inst_27047 = (state_27107[(2)]);
var inst_27048 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27049 = figwheel.client.format_messages.call(null,inst_27048);
var inst_27050 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27051 = figwheel.client.heads_up.display_error.call(null,inst_27049,inst_27050);
var state_27107__$1 = (function (){var statearr_27118 = state_27107;
(statearr_27118[(7)] = inst_27047);

return statearr_27118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(14),inst_27051);
} else {
if((state_val_27108 === (22))){
var inst_27071 = figwheel.client.heads_up.clear.call(null);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(25),inst_27071);
} else {
if((state_val_27108 === (29))){
var inst_27095 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27119_27159 = state_27107__$1;
(statearr_27119_27159[(2)] = inst_27095);

(statearr_27119_27159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (6))){
var inst_27037 = figwheel.client.heads_up.clear.call(null);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(9),inst_27037);
} else {
if((state_val_27108 === (28))){
var inst_27086 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27086)){
var statearr_27120_27160 = state_27107__$1;
(statearr_27120_27160[(1)] = (31));

} else {
var statearr_27121_27161 = state_27107__$1;
(statearr_27121_27161[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (25))){
var inst_27073 = (state_27107[(2)]);
var inst_27074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27075 = figwheel.client.heads_up.display_warning.call(null,inst_27074);
var state_27107__$1 = (function (){var statearr_27122 = state_27107;
(statearr_27122[(8)] = inst_27073);

return statearr_27122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(26),inst_27075);
} else {
if((state_val_27108 === (34))){
var inst_27090 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27123_27162 = state_27107__$1;
(statearr_27123_27162[(2)] = inst_27090);

(statearr_27123_27162[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (17))){
var inst_27101 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27124_27163 = state_27107__$1;
(statearr_27124_27163[(2)] = inst_27101);

(statearr_27124_27163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (3))){
var inst_27043 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27043)){
var statearr_27125_27164 = state_27107__$1;
(statearr_27125_27164[(1)] = (10));

} else {
var statearr_27126_27165 = state_27107__$1;
(statearr_27126_27165[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (12))){
var inst_27103 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27127_27166 = state_27107__$1;
(statearr_27127_27166[(2)] = inst_27103);

(statearr_27127_27166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (2))){
var inst_27031 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27031)){
var statearr_27128_27167 = state_27107__$1;
(statearr_27128_27167[(1)] = (5));

} else {
var statearr_27129_27168 = state_27107__$1;
(statearr_27129_27168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (23))){
var inst_27079 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27079)){
var statearr_27130_27169 = state_27107__$1;
(statearr_27130_27169[(1)] = (27));

} else {
var statearr_27131_27170 = state_27107__$1;
(statearr_27131_27170[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (19))){
var inst_27066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27067 = figwheel.client.heads_up.append_message.call(null,inst_27066);
var state_27107__$1 = state_27107;
var statearr_27132_27171 = state_27107__$1;
(statearr_27132_27171[(2)] = inst_27067);

(statearr_27132_27171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (11))){
var inst_27055 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27055)){
var statearr_27133_27172 = state_27107__$1;
(statearr_27133_27172[(1)] = (15));

} else {
var statearr_27134_27173 = state_27107__$1;
(statearr_27134_27173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (9))){
var inst_27039 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27135_27174 = state_27107__$1;
(statearr_27135_27174[(2)] = inst_27039);

(statearr_27135_27174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (5))){
var inst_27033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(8),inst_27033);
} else {
if((state_val_27108 === (14))){
var inst_27053 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27136_27175 = state_27107__$1;
(statearr_27136_27175[(2)] = inst_27053);

(statearr_27136_27175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (26))){
var inst_27077 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27137_27176 = state_27107__$1;
(statearr_27137_27176[(2)] = inst_27077);

(statearr_27137_27176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (16))){
var inst_27064 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27107__$1 = state_27107;
if(cljs.core.truth_(inst_27064)){
var statearr_27138_27177 = state_27107__$1;
(statearr_27138_27177[(1)] = (19));

} else {
var statearr_27139_27178 = state_27107__$1;
(statearr_27139_27178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (30))){
var inst_27084 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27140_27179 = state_27107__$1;
(statearr_27140_27179[(2)] = inst_27084);

(statearr_27140_27179[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (10))){
var inst_27045 = figwheel.client.heads_up.clear.call(null);
var state_27107__$1 = state_27107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27107__$1,(13),inst_27045);
} else {
if((state_val_27108 === (18))){
var inst_27062 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27141_27180 = state_27107__$1;
(statearr_27141_27180[(2)] = inst_27062);

(statearr_27141_27180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27108 === (8))){
var inst_27035 = (state_27107[(2)]);
var state_27107__$1 = state_27107;
var statearr_27142_27181 = state_27107__$1;
(statearr_27142_27181[(2)] = inst_27035);

(statearr_27142_27181[(1)] = (7));


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
}
}
}
}
}
}
}
}
});})(c__20075__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20054__auto__,c__20075__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto____0 = (function (){
var statearr_27146 = [null,null,null,null,null,null,null,null,null];
(statearr_27146[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto__);

(statearr_27146[(1)] = (1));

return statearr_27146;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto____1 = (function (state_27107){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_27107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e27147){if((e27147 instanceof Object)){
var ex__20058__auto__ = e27147;
var statearr_27148_27182 = state_27107;
(statearr_27148_27182[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27183 = state_27107;
state_27107 = G__27183;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto__ = function(state_27107){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto____1.call(this,state_27107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__,msg_hist,msg_names,msg))
})();
var state__20077__auto__ = (function (){var statearr_27149 = f__20076__auto__.call(null);
(statearr_27149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_27149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__,msg_hist,msg_names,msg))
);

return c__20075__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20075__auto___27246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___27246,ch){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___27246,ch){
return (function (state_27229){
var state_val_27230 = (state_27229[(1)]);
if((state_val_27230 === (1))){
var state_27229__$1 = state_27229;
var statearr_27231_27247 = state_27229__$1;
(statearr_27231_27247[(2)] = null);

(statearr_27231_27247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27230 === (2))){
var state_27229__$1 = state_27229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27229__$1,(4),ch);
} else {
if((state_val_27230 === (3))){
var inst_27227 = (state_27229[(2)]);
var state_27229__$1 = state_27229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27229__$1,inst_27227);
} else {
if((state_val_27230 === (4))){
var inst_27217 = (state_27229[(7)]);
var inst_27217__$1 = (state_27229[(2)]);
var state_27229__$1 = (function (){var statearr_27232 = state_27229;
(statearr_27232[(7)] = inst_27217__$1);

return statearr_27232;
})();
if(cljs.core.truth_(inst_27217__$1)){
var statearr_27233_27248 = state_27229__$1;
(statearr_27233_27248[(1)] = (5));

} else {
var statearr_27234_27249 = state_27229__$1;
(statearr_27234_27249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27230 === (5))){
var inst_27217 = (state_27229[(7)]);
var inst_27219 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27217);
var state_27229__$1 = state_27229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27229__$1,(8),inst_27219);
} else {
if((state_val_27230 === (6))){
var state_27229__$1 = state_27229;
var statearr_27235_27250 = state_27229__$1;
(statearr_27235_27250[(2)] = null);

(statearr_27235_27250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27230 === (7))){
var inst_27225 = (state_27229[(2)]);
var state_27229__$1 = state_27229;
var statearr_27236_27251 = state_27229__$1;
(statearr_27236_27251[(2)] = inst_27225);

(statearr_27236_27251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27230 === (8))){
var inst_27221 = (state_27229[(2)]);
var state_27229__$1 = (function (){var statearr_27237 = state_27229;
(statearr_27237[(8)] = inst_27221);

return statearr_27237;
})();
var statearr_27238_27252 = state_27229__$1;
(statearr_27238_27252[(2)] = null);

(statearr_27238_27252[(1)] = (2));


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
});})(c__20075__auto___27246,ch))
;
return ((function (switch__20054__auto__,c__20075__auto___27246,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20055__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20055__auto____0 = (function (){
var statearr_27242 = [null,null,null,null,null,null,null,null,null];
(statearr_27242[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20055__auto__);

(statearr_27242[(1)] = (1));

return statearr_27242;
});
var figwheel$client$heads_up_plugin_$_state_machine__20055__auto____1 = (function (state_27229){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_27229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e27243){if((e27243 instanceof Object)){
var ex__20058__auto__ = e27243;
var statearr_27244_27253 = state_27229;
(statearr_27244_27253[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27254 = state_27229;
state_27229 = G__27254;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20055__auto__ = function(state_27229){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20055__auto____1.call(this,state_27229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20055__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20055__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___27246,ch))
})();
var state__20077__auto__ = (function (){var statearr_27245 = f__20076__auto__.call(null);
(statearr_27245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___27246);

return statearr_27245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___27246,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__){
return (function (state_27275){
var state_val_27276 = (state_27275[(1)]);
if((state_val_27276 === (1))){
var inst_27270 = cljs.core.async.timeout.call(null,(3000));
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27275__$1,(2),inst_27270);
} else {
if((state_val_27276 === (2))){
var inst_27272 = (state_27275[(2)]);
var inst_27273 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27275__$1 = (function (){var statearr_27277 = state_27275;
(statearr_27277[(7)] = inst_27272);

return statearr_27277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27275__$1,inst_27273);
} else {
return null;
}
}
});})(c__20075__auto__))
;
return ((function (switch__20054__auto__,c__20075__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20055__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20055__auto____0 = (function (){
var statearr_27281 = [null,null,null,null,null,null,null,null];
(statearr_27281[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20055__auto__);

(statearr_27281[(1)] = (1));

return statearr_27281;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20055__auto____1 = (function (state_27275){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_27275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e27282){if((e27282 instanceof Object)){
var ex__20058__auto__ = e27282;
var statearr_27283_27285 = state_27275;
(statearr_27283_27285[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27286 = state_27275;
state_27275 = G__27286;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20055__auto__ = function(state_27275){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20055__auto____1.call(this,state_27275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20055__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20055__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__))
})();
var state__20077__auto__ = (function (){var statearr_27284 = f__20076__auto__.call(null);
(statearr_27284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_27284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__))
);

return c__20075__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27287){
var map__27293 = p__27287;
var map__27293__$1 = ((cljs.core.seq_QMARK_.call(null,map__27293))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293):map__27293);
var ed = map__27293__$1;
var formatted_exception = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27294_27298 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27295_27299 = null;
var count__27296_27300 = (0);
var i__27297_27301 = (0);
while(true){
if((i__27297_27301 < count__27296_27300)){
var msg_27302 = cljs.core._nth.call(null,chunk__27295_27299,i__27297_27301);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27302);

var G__27303 = seq__27294_27298;
var G__27304 = chunk__27295_27299;
var G__27305 = count__27296_27300;
var G__27306 = (i__27297_27301 + (1));
seq__27294_27298 = G__27303;
chunk__27295_27299 = G__27304;
count__27296_27300 = G__27305;
i__27297_27301 = G__27306;
continue;
} else {
var temp__4423__auto___27307 = cljs.core.seq.call(null,seq__27294_27298);
if(temp__4423__auto___27307){
var seq__27294_27308__$1 = temp__4423__auto___27307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27294_27308__$1)){
var c__18872__auto___27309 = cljs.core.chunk_first.call(null,seq__27294_27308__$1);
var G__27310 = cljs.core.chunk_rest.call(null,seq__27294_27308__$1);
var G__27311 = c__18872__auto___27309;
var G__27312 = cljs.core.count.call(null,c__18872__auto___27309);
var G__27313 = (0);
seq__27294_27298 = G__27310;
chunk__27295_27299 = G__27311;
count__27296_27300 = G__27312;
i__27297_27301 = G__27313;
continue;
} else {
var msg_27314 = cljs.core.first.call(null,seq__27294_27308__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27314);

var G__27315 = cljs.core.next.call(null,seq__27294_27308__$1);
var G__27316 = null;
var G__27317 = (0);
var G__27318 = (0);
seq__27294_27298 = G__27315;
chunk__27295_27299 = G__27316;
count__27296_27300 = G__27317;
i__27297_27301 = G__27318;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27319){
var map__27321 = p__27319;
var map__27321__$1 = ((cljs.core.seq_QMARK_.call(null,map__27321))?cljs.core.apply.call(null,cljs.core.hash_map,map__27321):map__27321);
var w = map__27321__$1;
var message = cljs.core.get.call(null,map__27321__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18075__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18075__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18075__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27328 = cljs.core.seq.call(null,plugins);
var chunk__27329 = null;
var count__27330 = (0);
var i__27331 = (0);
while(true){
if((i__27331 < count__27330)){
var vec__27332 = cljs.core._nth.call(null,chunk__27329,i__27331);
var k = cljs.core.nth.call(null,vec__27332,(0),null);
var plugin = cljs.core.nth.call(null,vec__27332,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27334 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27328,chunk__27329,count__27330,i__27331,pl_27334,vec__27332,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27334.call(null,msg_hist);
});})(seq__27328,chunk__27329,count__27330,i__27331,pl_27334,vec__27332,k,plugin))
);
} else {
}

var G__27335 = seq__27328;
var G__27336 = chunk__27329;
var G__27337 = count__27330;
var G__27338 = (i__27331 + (1));
seq__27328 = G__27335;
chunk__27329 = G__27336;
count__27330 = G__27337;
i__27331 = G__27338;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27328);
if(temp__4423__auto__){
var seq__27328__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27328__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__27328__$1);
var G__27339 = cljs.core.chunk_rest.call(null,seq__27328__$1);
var G__27340 = c__18872__auto__;
var G__27341 = cljs.core.count.call(null,c__18872__auto__);
var G__27342 = (0);
seq__27328 = G__27339;
chunk__27329 = G__27340;
count__27330 = G__27341;
i__27331 = G__27342;
continue;
} else {
var vec__27333 = cljs.core.first.call(null,seq__27328__$1);
var k = cljs.core.nth.call(null,vec__27333,(0),null);
var plugin = cljs.core.nth.call(null,vec__27333,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27343 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27328,chunk__27329,count__27330,i__27331,pl_27343,vec__27333,k,plugin,seq__27328__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27343.call(null,msg_hist);
});})(seq__27328,chunk__27329,count__27330,i__27331,pl_27343,vec__27333,k,plugin,seq__27328__$1,temp__4423__auto__))
);
} else {
}

var G__27344 = cljs.core.next.call(null,seq__27328__$1);
var G__27345 = null;
var G__27346 = (0);
var G__27347 = (0);
seq__27328 = G__27344;
chunk__27329 = G__27345;
count__27330 = G__27346;
i__27331 = G__27347;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__27349 = arguments.length;
switch (G__27349) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19127__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19127__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27352){
var map__27353 = p__27352;
var map__27353__$1 = ((cljs.core.seq_QMARK_.call(null,map__27353))?cljs.core.apply.call(null,cljs.core.hash_map,map__27353):map__27353);
var opts = map__27353__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27351){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27351));
});

//# sourceMappingURL=client.js.map?rel=1436658172571