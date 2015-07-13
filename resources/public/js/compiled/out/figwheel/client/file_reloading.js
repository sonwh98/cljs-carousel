// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__27815_SHARP_,p2__27816_SHARP_){
var and__18075__auto__ = p1__27815_SHARP_;
if(cljs.core.truth_(and__18075__auto__)){
return p2__27816_SHARP_;
} else {
return and__18075__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18087__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18087__auto__){
return or__18087__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18087__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18087__auto__){
return or__18087__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18087__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27817){
var map__27818 = p__27817;
var map__27818__$1 = ((cljs.core.seq_QMARK_.call(null,map__27818))?cljs.core.apply.call(null,cljs.core.hash_map,map__27818):map__27818);
var file = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27819){
var map__27820 = p__27819;
var map__27820__$1 = ((cljs.core.seq_QMARK_.call(null,map__27820))?cljs.core.apply.call(null,cljs.core.hash_map,map__27820):map__27820);
var namespace = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27821){if((e27821 instanceof Error)){
var e = e27821;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27821;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__27823 = arguments.length;
switch (G__27823) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27825,callback){
var map__27827 = p__27825;
var map__27827__$1 = ((cljs.core.seq_QMARK_.call(null,map__27827))?cljs.core.apply.call(null,cljs.core.hash_map,map__27827):map__27827);
var file_msg = map__27827__$1;
var request_url = cljs.core.get.call(null,map__27827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27827,map__27827__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27827,map__27827__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27828){
var map__27830 = p__27828;
var map__27830__$1 = ((cljs.core.seq_QMARK_.call(null,map__27830))?cljs.core.apply.call(null,cljs.core.hash_map,map__27830):map__27830);
var file_msg = map__27830__$1;
var namespace = cljs.core.get.call(null,map__27830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__27830__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18087__auto__ = meta_data;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18075__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18075__auto__){
var or__18087__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto____$1)){
return or__18087__auto____$1;
} else {
var and__18075__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18075__auto____$1){
var or__18087__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18087__auto____$2){
return or__18087__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18075__auto____$1;
}
}
}
} else {
return and__18075__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27831,callback){
var map__27833 = p__27831;
var map__27833__$1 = ((cljs.core.seq_QMARK_.call(null,map__27833))?cljs.core.apply.call(null,cljs.core.hash_map,map__27833):map__27833);
var file_msg = map__27833__$1;
var request_url = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27833__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20075__auto___27920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___27920,out){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___27920,out){
return (function (state_27902){
var state_val_27903 = (state_27902[(1)]);
if((state_val_27903 === (1))){
var inst_27880 = cljs.core.nth.call(null,files,(0),null);
var inst_27881 = cljs.core.nthnext.call(null,files,(1));
var inst_27882 = files;
var state_27902__$1 = (function (){var statearr_27904 = state_27902;
(statearr_27904[(7)] = inst_27882);

(statearr_27904[(8)] = inst_27881);

(statearr_27904[(9)] = inst_27880);

return statearr_27904;
})();
var statearr_27905_27921 = state_27902__$1;
(statearr_27905_27921[(2)] = null);

(statearr_27905_27921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (2))){
var inst_27882 = (state_27902[(7)]);
var inst_27885 = (state_27902[(10)]);
var inst_27885__$1 = cljs.core.nth.call(null,inst_27882,(0),null);
var inst_27886 = cljs.core.nthnext.call(null,inst_27882,(1));
var inst_27887 = (inst_27885__$1 == null);
var inst_27888 = cljs.core.not.call(null,inst_27887);
var state_27902__$1 = (function (){var statearr_27906 = state_27902;
(statearr_27906[(11)] = inst_27886);

(statearr_27906[(10)] = inst_27885__$1);

return statearr_27906;
})();
if(inst_27888){
var statearr_27907_27922 = state_27902__$1;
(statearr_27907_27922[(1)] = (4));

} else {
var statearr_27908_27923 = state_27902__$1;
(statearr_27908_27923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (3))){
var inst_27900 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27902__$1,inst_27900);
} else {
if((state_val_27903 === (4))){
var inst_27885 = (state_27902[(10)]);
var inst_27890 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27885);
var state_27902__$1 = state_27902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27902__$1,(7),inst_27890);
} else {
if((state_val_27903 === (5))){
var inst_27896 = cljs.core.async.close_BANG_.call(null,out);
var state_27902__$1 = state_27902;
var statearr_27909_27924 = state_27902__$1;
(statearr_27909_27924[(2)] = inst_27896);

(statearr_27909_27924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (6))){
var inst_27898 = (state_27902[(2)]);
var state_27902__$1 = state_27902;
var statearr_27910_27925 = state_27902__$1;
(statearr_27910_27925[(2)] = inst_27898);

(statearr_27910_27925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27903 === (7))){
var inst_27886 = (state_27902[(11)]);
var inst_27892 = (state_27902[(2)]);
var inst_27893 = cljs.core.async.put_BANG_.call(null,out,inst_27892);
var inst_27882 = inst_27886;
var state_27902__$1 = (function (){var statearr_27911 = state_27902;
(statearr_27911[(7)] = inst_27882);

(statearr_27911[(12)] = inst_27893);

return statearr_27911;
})();
var statearr_27912_27926 = state_27902__$1;
(statearr_27912_27926[(2)] = null);

(statearr_27912_27926[(1)] = (2));


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
});})(c__20075__auto___27920,out))
;
return ((function (switch__20054__auto__,c__20075__auto___27920,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto____0 = (function (){
var statearr_27916 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27916[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto__);

(statearr_27916[(1)] = (1));

return statearr_27916;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto____1 = (function (state_27902){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_27902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e27917){if((e27917 instanceof Object)){
var ex__20058__auto__ = e27917;
var statearr_27918_27927 = state_27902;
(statearr_27918_27927[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27928 = state_27902;
state_27902 = G__27928;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto__ = function(state_27902){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto____1.call(this,state_27902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___27920,out))
})();
var state__20077__auto__ = (function (){var statearr_27919 = f__20076__auto__.call(null);
(statearr_27919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___27920);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___27920,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27929,p__27930){
var map__27933 = p__27929;
var map__27933__$1 = ((cljs.core.seq_QMARK_.call(null,map__27933))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933):map__27933);
var opts = map__27933__$1;
var url_rewriter = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27934 = p__27930;
var map__27934__$1 = ((cljs.core.seq_QMARK_.call(null,map__27934))?cljs.core.apply.call(null,cljs.core.hash_map,map__27934):map__27934);
var file_msg = map__27934__$1;
var file = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27935){
var map__27938 = p__27935;
var map__27938__$1 = ((cljs.core.seq_QMARK_.call(null,map__27938))?cljs.core.apply.call(null,cljs.core.hash_map,map__27938):map__27938);
var eval_body__$1 = cljs.core.get.call(null,map__27938__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18075__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18075__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18075__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e27939){var e = e27939;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27944,p__27945){
var map__28147 = p__27944;
var map__28147__$1 = ((cljs.core.seq_QMARK_.call(null,map__28147))?cljs.core.apply.call(null,cljs.core.hash_map,map__28147):map__28147);
var opts = map__28147__$1;
var before_jsload = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__28148 = p__27945;
var map__28148__$1 = ((cljs.core.seq_QMARK_.call(null,map__28148))?cljs.core.apply.call(null,cljs.core.hash_map,map__28148):map__28148);
var msg = map__28148__$1;
var files = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (state_28273){
var state_val_28274 = (state_28273[(1)]);
if((state_val_28274 === (7))){
var inst_28163 = (state_28273[(7)]);
var inst_28162 = (state_28273[(8)]);
var inst_28161 = (state_28273[(9)]);
var inst_28160 = (state_28273[(10)]);
var inst_28168 = cljs.core._nth.call(null,inst_28161,inst_28163);
var inst_28169 = figwheel.client.file_reloading.eval_body.call(null,inst_28168);
var inst_28170 = (inst_28163 + (1));
var tmp28275 = inst_28162;
var tmp28276 = inst_28161;
var tmp28277 = inst_28160;
var inst_28160__$1 = tmp28277;
var inst_28161__$1 = tmp28276;
var inst_28162__$1 = tmp28275;
var inst_28163__$1 = inst_28170;
var state_28273__$1 = (function (){var statearr_28278 = state_28273;
(statearr_28278[(7)] = inst_28163__$1);

(statearr_28278[(11)] = inst_28169);

(statearr_28278[(8)] = inst_28162__$1);

(statearr_28278[(9)] = inst_28161__$1);

(statearr_28278[(10)] = inst_28160__$1);

return statearr_28278;
})();
var statearr_28279_28348 = state_28273__$1;
(statearr_28279_28348[(2)] = null);

(statearr_28279_28348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (20))){
var inst_28212 = (state_28273[(12)]);
var inst_28206 = (state_28273[(13)]);
var inst_28209 = (state_28273[(14)]);
var inst_28205 = (state_28273[(15)]);
var inst_28210 = (state_28273[(16)]);
var inst_28215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28217 = (function (){var all_files = inst_28205;
var files_SINGLEQUOTE_ = inst_28206;
var res_SINGLEQUOTE_ = inst_28209;
var res = inst_28210;
var files_not_loaded = inst_28212;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28212,inst_28206,inst_28209,inst_28205,inst_28210,inst_28215,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (p__28216){
var map__28280 = p__28216;
var map__28280__$1 = ((cljs.core.seq_QMARK_.call(null,map__28280))?cljs.core.apply.call(null,cljs.core.hash_map,map__28280):map__28280);
var namespace = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28212,inst_28206,inst_28209,inst_28205,inst_28210,inst_28215,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var inst_28218 = cljs.core.map.call(null,inst_28217,inst_28210);
var inst_28219 = cljs.core.pr_str.call(null,inst_28218);
var inst_28220 = figwheel.client.utils.log.call(null,inst_28219);
var inst_28221 = (function (){var all_files = inst_28205;
var files_SINGLEQUOTE_ = inst_28206;
var res_SINGLEQUOTE_ = inst_28209;
var res = inst_28210;
var files_not_loaded = inst_28212;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28212,inst_28206,inst_28209,inst_28205,inst_28210,inst_28215,inst_28217,inst_28218,inst_28219,inst_28220,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28212,inst_28206,inst_28209,inst_28205,inst_28210,inst_28215,inst_28217,inst_28218,inst_28219,inst_28220,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var inst_28222 = setTimeout(inst_28221,(10));
var state_28273__$1 = (function (){var statearr_28281 = state_28273;
(statearr_28281[(17)] = inst_28220);

(statearr_28281[(18)] = inst_28215);

return statearr_28281;
})();
var statearr_28282_28349 = state_28273__$1;
(statearr_28282_28349[(2)] = inst_28222);

(statearr_28282_28349[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (27))){
var inst_28232 = (state_28273[(19)]);
var state_28273__$1 = state_28273;
var statearr_28283_28350 = state_28273__$1;
(statearr_28283_28350[(2)] = inst_28232);

(statearr_28283_28350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (1))){
var inst_28152 = (state_28273[(20)]);
var inst_28149 = before_jsload.call(null,files);
var inst_28150 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28151 = (function (){return ((function (inst_28152,inst_28149,inst_28150,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (p1__27940_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27940_SHARP_);
});
;})(inst_28152,inst_28149,inst_28150,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var inst_28152__$1 = cljs.core.filter.call(null,inst_28151,files);
var inst_28153 = cljs.core.not_empty.call(null,inst_28152__$1);
var state_28273__$1 = (function (){var statearr_28284 = state_28273;
(statearr_28284[(21)] = inst_28150);

(statearr_28284[(20)] = inst_28152__$1);

(statearr_28284[(22)] = inst_28149);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28153)){
var statearr_28285_28351 = state_28273__$1;
(statearr_28285_28351[(1)] = (2));

} else {
var statearr_28286_28352 = state_28273__$1;
(statearr_28286_28352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (24))){
var state_28273__$1 = state_28273;
var statearr_28287_28353 = state_28273__$1;
(statearr_28287_28353[(2)] = null);

(statearr_28287_28353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (4))){
var inst_28197 = (state_28273[(2)]);
var inst_28198 = (function (){return ((function (inst_28197,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (p1__27941_SHARP_){
var and__18075__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27941_SHARP_);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27941_SHARP_));
} else {
return and__18075__auto__;
}
});
;})(inst_28197,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var inst_28199 = cljs.core.filter.call(null,inst_28198,files);
var state_28273__$1 = (function (){var statearr_28288 = state_28273;
(statearr_28288[(23)] = inst_28199);

(statearr_28288[(24)] = inst_28197);

return statearr_28288;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28289_28354 = state_28273__$1;
(statearr_28289_28354[(1)] = (16));

} else {
var statearr_28290_28355 = state_28273__$1;
(statearr_28290_28355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (15))){
var inst_28187 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28291_28356 = state_28273__$1;
(statearr_28291_28356[(2)] = inst_28187);

(statearr_28291_28356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (21))){
var state_28273__$1 = state_28273;
var statearr_28292_28357 = state_28273__$1;
(statearr_28292_28357[(2)] = null);

(statearr_28292_28357[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (31))){
var inst_28240 = (state_28273[(25)]);
var inst_28250 = (state_28273[(2)]);
var inst_28251 = cljs.core.not_empty.call(null,inst_28240);
var state_28273__$1 = (function (){var statearr_28293 = state_28273;
(statearr_28293[(26)] = inst_28250);

return statearr_28293;
})();
if(cljs.core.truth_(inst_28251)){
var statearr_28294_28358 = state_28273__$1;
(statearr_28294_28358[(1)] = (32));

} else {
var statearr_28295_28359 = state_28273__$1;
(statearr_28295_28359[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (32))){
var inst_28240 = (state_28273[(25)]);
var inst_28253 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28240);
var inst_28254 = cljs.core.pr_str.call(null,inst_28253);
var inst_28255 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28254)].join('');
var inst_28256 = figwheel.client.utils.log.call(null,inst_28255);
var state_28273__$1 = state_28273;
var statearr_28296_28360 = state_28273__$1;
(statearr_28296_28360[(2)] = inst_28256);

(statearr_28296_28360[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (33))){
var state_28273__$1 = state_28273;
var statearr_28297_28361 = state_28273__$1;
(statearr_28297_28361[(2)] = null);

(statearr_28297_28361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (13))){
var inst_28173 = (state_28273[(27)]);
var inst_28177 = cljs.core.chunk_first.call(null,inst_28173);
var inst_28178 = cljs.core.chunk_rest.call(null,inst_28173);
var inst_28179 = cljs.core.count.call(null,inst_28177);
var inst_28160 = inst_28178;
var inst_28161 = inst_28177;
var inst_28162 = inst_28179;
var inst_28163 = (0);
var state_28273__$1 = (function (){var statearr_28298 = state_28273;
(statearr_28298[(7)] = inst_28163);

(statearr_28298[(8)] = inst_28162);

(statearr_28298[(9)] = inst_28161);

(statearr_28298[(10)] = inst_28160);

return statearr_28298;
})();
var statearr_28299_28362 = state_28273__$1;
(statearr_28299_28362[(2)] = null);

(statearr_28299_28362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (22))){
var inst_28212 = (state_28273[(12)]);
var inst_28225 = (state_28273[(2)]);
var inst_28226 = cljs.core.not_empty.call(null,inst_28212);
var state_28273__$1 = (function (){var statearr_28300 = state_28273;
(statearr_28300[(28)] = inst_28225);

return statearr_28300;
})();
if(cljs.core.truth_(inst_28226)){
var statearr_28301_28363 = state_28273__$1;
(statearr_28301_28363[(1)] = (23));

} else {
var statearr_28302_28364 = state_28273__$1;
(statearr_28302_28364[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (36))){
var state_28273__$1 = state_28273;
var statearr_28303_28365 = state_28273__$1;
(statearr_28303_28365[(2)] = null);

(statearr_28303_28365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (29))){
var inst_28239 = (state_28273[(29)]);
var inst_28244 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28239);
var inst_28245 = cljs.core.pr_str.call(null,inst_28244);
var inst_28246 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28245)].join('');
var inst_28247 = figwheel.client.utils.log.call(null,inst_28246);
var state_28273__$1 = state_28273;
var statearr_28304_28366 = state_28273__$1;
(statearr_28304_28366[(2)] = inst_28247);

(statearr_28304_28366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (6))){
var inst_28194 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28305_28367 = state_28273__$1;
(statearr_28305_28367[(2)] = inst_28194);

(statearr_28305_28367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (28))){
var inst_28239 = (state_28273[(29)]);
var inst_28238 = (state_28273[(2)]);
var inst_28239__$1 = cljs.core.get.call(null,inst_28238,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28240 = cljs.core.get.call(null,inst_28238,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28241 = cljs.core.get.call(null,inst_28238,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28242 = cljs.core.not_empty.call(null,inst_28239__$1);
var state_28273__$1 = (function (){var statearr_28306 = state_28273;
(statearr_28306[(29)] = inst_28239__$1);

(statearr_28306[(30)] = inst_28241);

(statearr_28306[(25)] = inst_28240);

return statearr_28306;
})();
if(cljs.core.truth_(inst_28242)){
var statearr_28307_28368 = state_28273__$1;
(statearr_28307_28368[(1)] = (29));

} else {
var statearr_28308_28369 = state_28273__$1;
(statearr_28308_28369[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (25))){
var inst_28271 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28273__$1,inst_28271);
} else {
if((state_val_28274 === (34))){
var inst_28241 = (state_28273[(30)]);
var inst_28259 = (state_28273[(2)]);
var inst_28260 = cljs.core.not_empty.call(null,inst_28241);
var state_28273__$1 = (function (){var statearr_28309 = state_28273;
(statearr_28309[(31)] = inst_28259);

return statearr_28309;
})();
if(cljs.core.truth_(inst_28260)){
var statearr_28310_28370 = state_28273__$1;
(statearr_28310_28370[(1)] = (35));

} else {
var statearr_28311_28371 = state_28273__$1;
(statearr_28311_28371[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (17))){
var inst_28199 = (state_28273[(23)]);
var state_28273__$1 = state_28273;
var statearr_28312_28372 = state_28273__$1;
(statearr_28312_28372[(2)] = inst_28199);

(statearr_28312_28372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (3))){
var state_28273__$1 = state_28273;
var statearr_28313_28373 = state_28273__$1;
(statearr_28313_28373[(2)] = null);

(statearr_28313_28373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (12))){
var inst_28190 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28314_28374 = state_28273__$1;
(statearr_28314_28374[(2)] = inst_28190);

(statearr_28314_28374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (2))){
var inst_28152 = (state_28273[(20)]);
var inst_28159 = cljs.core.seq.call(null,inst_28152);
var inst_28160 = inst_28159;
var inst_28161 = null;
var inst_28162 = (0);
var inst_28163 = (0);
var state_28273__$1 = (function (){var statearr_28315 = state_28273;
(statearr_28315[(7)] = inst_28163);

(statearr_28315[(8)] = inst_28162);

(statearr_28315[(9)] = inst_28161);

(statearr_28315[(10)] = inst_28160);

return statearr_28315;
})();
var statearr_28316_28375 = state_28273__$1;
(statearr_28316_28375[(2)] = null);

(statearr_28316_28375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (23))){
var inst_28212 = (state_28273[(12)]);
var inst_28206 = (state_28273[(13)]);
var inst_28209 = (state_28273[(14)]);
var inst_28205 = (state_28273[(15)]);
var inst_28210 = (state_28273[(16)]);
var inst_28232 = (state_28273[(19)]);
var inst_28228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28231 = (function (){var all_files = inst_28205;
var files_SINGLEQUOTE_ = inst_28206;
var res_SINGLEQUOTE_ = inst_28209;
var res = inst_28210;
var files_not_loaded = inst_28212;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28212,inst_28206,inst_28209,inst_28205,inst_28210,inst_28232,inst_28228,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (p__28230){
var map__28317 = p__28230;
var map__28317__$1 = ((cljs.core.seq_QMARK_.call(null,map__28317))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);
var meta_data = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28212,inst_28206,inst_28209,inst_28205,inst_28210,inst_28232,inst_28228,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var inst_28232__$1 = cljs.core.group_by.call(null,inst_28231,inst_28212);
var inst_28233 = cljs.core.seq_QMARK_.call(null,inst_28232__$1);
var state_28273__$1 = (function (){var statearr_28318 = state_28273;
(statearr_28318[(32)] = inst_28228);

(statearr_28318[(19)] = inst_28232__$1);

return statearr_28318;
})();
if(inst_28233){
var statearr_28319_28376 = state_28273__$1;
(statearr_28319_28376[(1)] = (26));

} else {
var statearr_28320_28377 = state_28273__$1;
(statearr_28320_28377[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (35))){
var inst_28241 = (state_28273[(30)]);
var inst_28262 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28241);
var inst_28263 = cljs.core.pr_str.call(null,inst_28262);
var inst_28264 = [cljs.core.str("not required: "),cljs.core.str(inst_28263)].join('');
var inst_28265 = figwheel.client.utils.log.call(null,inst_28264);
var state_28273__$1 = state_28273;
var statearr_28321_28378 = state_28273__$1;
(statearr_28321_28378[(2)] = inst_28265);

(statearr_28321_28378[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (19))){
var inst_28206 = (state_28273[(13)]);
var inst_28209 = (state_28273[(14)]);
var inst_28205 = (state_28273[(15)]);
var inst_28210 = (state_28273[(16)]);
var inst_28209__$1 = (state_28273[(2)]);
var inst_28210__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28209__$1);
var inst_28211 = (function (){var all_files = inst_28205;
var files_SINGLEQUOTE_ = inst_28206;
var res_SINGLEQUOTE_ = inst_28209__$1;
var res = inst_28210__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28206,inst_28209,inst_28205,inst_28210,inst_28209__$1,inst_28210__$1,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (p1__27943_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27943_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28206,inst_28209,inst_28205,inst_28210,inst_28209__$1,inst_28210__$1,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var inst_28212 = cljs.core.filter.call(null,inst_28211,inst_28209__$1);
var inst_28213 = cljs.core.not_empty.call(null,inst_28210__$1);
var state_28273__$1 = (function (){var statearr_28322 = state_28273;
(statearr_28322[(12)] = inst_28212);

(statearr_28322[(14)] = inst_28209__$1);

(statearr_28322[(16)] = inst_28210__$1);

return statearr_28322;
})();
if(cljs.core.truth_(inst_28213)){
var statearr_28323_28379 = state_28273__$1;
(statearr_28323_28379[(1)] = (20));

} else {
var statearr_28324_28380 = state_28273__$1;
(statearr_28324_28380[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (11))){
var state_28273__$1 = state_28273;
var statearr_28325_28381 = state_28273__$1;
(statearr_28325_28381[(2)] = null);

(statearr_28325_28381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (9))){
var inst_28192 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28326_28382 = state_28273__$1;
(statearr_28326_28382[(2)] = inst_28192);

(statearr_28326_28382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (5))){
var inst_28163 = (state_28273[(7)]);
var inst_28162 = (state_28273[(8)]);
var inst_28165 = (inst_28163 < inst_28162);
var inst_28166 = inst_28165;
var state_28273__$1 = state_28273;
if(cljs.core.truth_(inst_28166)){
var statearr_28327_28383 = state_28273__$1;
(statearr_28327_28383[(1)] = (7));

} else {
var statearr_28328_28384 = state_28273__$1;
(statearr_28328_28384[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (14))){
var inst_28173 = (state_28273[(27)]);
var inst_28182 = cljs.core.first.call(null,inst_28173);
var inst_28183 = figwheel.client.file_reloading.eval_body.call(null,inst_28182);
var inst_28184 = cljs.core.next.call(null,inst_28173);
var inst_28160 = inst_28184;
var inst_28161 = null;
var inst_28162 = (0);
var inst_28163 = (0);
var state_28273__$1 = (function (){var statearr_28329 = state_28273;
(statearr_28329[(7)] = inst_28163);

(statearr_28329[(33)] = inst_28183);

(statearr_28329[(8)] = inst_28162);

(statearr_28329[(9)] = inst_28161);

(statearr_28329[(10)] = inst_28160);

return statearr_28329;
})();
var statearr_28330_28385 = state_28273__$1;
(statearr_28330_28385[(2)] = null);

(statearr_28330_28385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (26))){
var inst_28232 = (state_28273[(19)]);
var inst_28235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28232);
var state_28273__$1 = state_28273;
var statearr_28331_28386 = state_28273__$1;
(statearr_28331_28386[(2)] = inst_28235);

(statearr_28331_28386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (16))){
var inst_28199 = (state_28273[(23)]);
var inst_28201 = (function (){var all_files = inst_28199;
return ((function (all_files,inst_28199,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function (p1__27942_SHARP_){
return cljs.core.update_in.call(null,p1__27942_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28199,state_val_28274,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var inst_28202 = cljs.core.map.call(null,inst_28201,inst_28199);
var state_28273__$1 = state_28273;
var statearr_28332_28387 = state_28273__$1;
(statearr_28332_28387[(2)] = inst_28202);

(statearr_28332_28387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (30))){
var state_28273__$1 = state_28273;
var statearr_28333_28388 = state_28273__$1;
(statearr_28333_28388[(2)] = null);

(statearr_28333_28388[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (10))){
var inst_28173 = (state_28273[(27)]);
var inst_28175 = cljs.core.chunked_seq_QMARK_.call(null,inst_28173);
var state_28273__$1 = state_28273;
if(inst_28175){
var statearr_28334_28389 = state_28273__$1;
(statearr_28334_28389[(1)] = (13));

} else {
var statearr_28335_28390 = state_28273__$1;
(statearr_28335_28390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (18))){
var inst_28206 = (state_28273[(13)]);
var inst_28205 = (state_28273[(15)]);
var inst_28205__$1 = (state_28273[(2)]);
var inst_28206__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28205__$1);
var inst_28207 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28206__$1);
var state_28273__$1 = (function (){var statearr_28336 = state_28273;
(statearr_28336[(13)] = inst_28206__$1);

(statearr_28336[(15)] = inst_28205__$1);

return statearr_28336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28273__$1,(19),inst_28207);
} else {
if((state_val_28274 === (37))){
var inst_28268 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28337_28391 = state_28273__$1;
(statearr_28337_28391[(2)] = inst_28268);

(statearr_28337_28391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (8))){
var inst_28173 = (state_28273[(27)]);
var inst_28160 = (state_28273[(10)]);
var inst_28173__$1 = cljs.core.seq.call(null,inst_28160);
var state_28273__$1 = (function (){var statearr_28338 = state_28273;
(statearr_28338[(27)] = inst_28173__$1);

return statearr_28338;
})();
if(inst_28173__$1){
var statearr_28339_28392 = state_28273__$1;
(statearr_28339_28392[(1)] = (10));

} else {
var statearr_28340_28393 = state_28273__$1;
(statearr_28340_28393[(1)] = (11));

}

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
}
}
}
});})(c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
;
return ((function (switch__20054__auto__,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto____0 = (function (){
var statearr_28344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28344[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto__);

(statearr_28344[(1)] = (1));

return statearr_28344;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto____1 = (function (state_28273){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_28273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e28345){if((e28345 instanceof Object)){
var ex__20058__auto__ = e28345;
var statearr_28346_28394 = state_28273;
(statearr_28346_28394[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28395 = state_28273;
state_28273 = G__28395;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto__ = function(state_28273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto____1.call(this,state_28273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
})();
var state__20077__auto__ = (function (){var statearr_28347 = f__20076__auto__.call(null);
(statearr_28347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_28347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__,map__28147,map__28147__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28148,map__28148__$1,msg,files))
);

return c__20075__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28398,link){
var map__28400 = p__28398;
var map__28400__$1 = ((cljs.core.seq_QMARK_.call(null,map__28400))?cljs.core.apply.call(null,cljs.core.hash_map,map__28400):map__28400);
var file = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__28400,map__28400__$1,file){
return (function (p1__28396_SHARP_,p2__28397_SHARP_){
if(cljs.core._EQ_.call(null,p1__28396_SHARP_,p2__28397_SHARP_)){
return p1__28396_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__28400,map__28400__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28404){
var map__28405 = p__28404;
var map__28405__$1 = ((cljs.core.seq_QMARK_.call(null,map__28405))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);
var match_length = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28401_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28401_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__28407 = arguments.length;
switch (G__28407) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28409){
var map__28411 = p__28409;
var map__28411__$1 = ((cljs.core.seq_QMARK_.call(null,map__28411))?cljs.core.apply.call(null,cljs.core.hash_map,map__28411):map__28411);
var f_data = map__28411__$1;
var file = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18087__auto__ = request_url;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28412,files_msg){
var map__28434 = p__28412;
var map__28434__$1 = ((cljs.core.seq_QMARK_.call(null,map__28434))?cljs.core.apply.call(null,cljs.core.hash_map,map__28434):map__28434);
var opts = map__28434__$1;
var on_cssload = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28435_28455 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28436_28456 = null;
var count__28437_28457 = (0);
var i__28438_28458 = (0);
while(true){
if((i__28438_28458 < count__28437_28457)){
var f_28459 = cljs.core._nth.call(null,chunk__28436_28456,i__28438_28458);
figwheel.client.file_reloading.reload_css_file.call(null,f_28459);

var G__28460 = seq__28435_28455;
var G__28461 = chunk__28436_28456;
var G__28462 = count__28437_28457;
var G__28463 = (i__28438_28458 + (1));
seq__28435_28455 = G__28460;
chunk__28436_28456 = G__28461;
count__28437_28457 = G__28462;
i__28438_28458 = G__28463;
continue;
} else {
var temp__4423__auto___28464 = cljs.core.seq.call(null,seq__28435_28455);
if(temp__4423__auto___28464){
var seq__28435_28465__$1 = temp__4423__auto___28464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28435_28465__$1)){
var c__18872__auto___28466 = cljs.core.chunk_first.call(null,seq__28435_28465__$1);
var G__28467 = cljs.core.chunk_rest.call(null,seq__28435_28465__$1);
var G__28468 = c__18872__auto___28466;
var G__28469 = cljs.core.count.call(null,c__18872__auto___28466);
var G__28470 = (0);
seq__28435_28455 = G__28467;
chunk__28436_28456 = G__28468;
count__28437_28457 = G__28469;
i__28438_28458 = G__28470;
continue;
} else {
var f_28471 = cljs.core.first.call(null,seq__28435_28465__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28471);

var G__28472 = cljs.core.next.call(null,seq__28435_28465__$1);
var G__28473 = null;
var G__28474 = (0);
var G__28475 = (0);
seq__28435_28455 = G__28472;
chunk__28436_28456 = G__28473;
count__28437_28457 = G__28474;
i__28438_28458 = G__28475;
continue;
}
} else {
}
}
break;
}

var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__,map__28434,map__28434__$1,opts,on_cssload){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__,map__28434,map__28434__$1,opts,on_cssload){
return (function (state_28445){
var state_val_28446 = (state_28445[(1)]);
if((state_val_28446 === (1))){
var inst_28439 = cljs.core.async.timeout.call(null,(100));
var state_28445__$1 = state_28445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28445__$1,(2),inst_28439);
} else {
if((state_val_28446 === (2))){
var inst_28441 = (state_28445[(2)]);
var inst_28442 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28443 = on_cssload.call(null,inst_28442);
var state_28445__$1 = (function (){var statearr_28447 = state_28445;
(statearr_28447[(7)] = inst_28441);

return statearr_28447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28445__$1,inst_28443);
} else {
return null;
}
}
});})(c__20075__auto__,map__28434,map__28434__$1,opts,on_cssload))
;
return ((function (switch__20054__auto__,c__20075__auto__,map__28434,map__28434__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto____0 = (function (){
var statearr_28451 = [null,null,null,null,null,null,null,null];
(statearr_28451[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto__);

(statearr_28451[(1)] = (1));

return statearr_28451;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto____1 = (function (state_28445){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_28445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e28452){if((e28452 instanceof Object)){
var ex__20058__auto__ = e28452;
var statearr_28453_28476 = state_28445;
(statearr_28453_28476[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28477 = state_28445;
state_28445 = G__28477;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto__ = function(state_28445){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto____1.call(this,state_28445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__,map__28434,map__28434__$1,opts,on_cssload))
})();
var state__20077__auto__ = (function (){var statearr_28454 = f__20076__auto__.call(null);
(statearr_28454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_28454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__,map__28434,map__28434__$1,opts,on_cssload))
);

return c__20075__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436658173432