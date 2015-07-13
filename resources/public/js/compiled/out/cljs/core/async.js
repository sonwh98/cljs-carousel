// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24087 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24087 = (function (fn_handler,f,meta24088){
this.fn_handler = fn_handler;
this.f = f;
this.meta24088 = meta24088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24089,meta24088__$1){
var self__ = this;
var _24089__$1 = this;
return (new cljs.core.async.t24087(self__.fn_handler,self__.f,meta24088__$1));
});

cljs.core.async.t24087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24089){
var self__ = this;
var _24089__$1 = this;
return self__.meta24088;
});

cljs.core.async.t24087.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24088","meta24088",-730358078,null)], null);
});

cljs.core.async.t24087.cljs$lang$type = true;

cljs.core.async.t24087.cljs$lang$ctorStr = "cljs.core.async/t24087";

cljs.core.async.t24087.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t24087");
});

cljs.core.async.__GT_t24087 = (function cljs$core$async$fn_handler_$___GT_t24087(fn_handler__$1,f__$1,meta24088){
return (new cljs.core.async.t24087(fn_handler__$1,f__$1,meta24088));
});

}

return (new cljs.core.async.t24087(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24091 = buff;
if(G__24091){
var bit__18761__auto__ = null;
if(cljs.core.truth_((function (){var or__18087__auto__ = bit__18761__auto__;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return G__24091.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24091.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24091);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24091);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__24093 = arguments.length;
switch (G__24093) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__24096 = arguments.length;
switch (G__24096) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24098 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24098);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24098,ret){
return (function (){
return fn1.call(null,val_24098);
});})(val_24098,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__24100 = arguments.length;
switch (G__24100) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18972__auto___24102 = n;
var x_24103 = (0);
while(true){
if((x_24103 < n__18972__auto___24102)){
(a[x_24103] = (0));

var G__24104 = (x_24103 + (1));
x_24103 = G__24104;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24105 = (i + (1));
i = G__24105;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24109 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24109 = (function (alt_flag,flag,meta24110){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24110 = meta24110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24111,meta24110__$1){
var self__ = this;
var _24111__$1 = this;
return (new cljs.core.async.t24109(self__.alt_flag,self__.flag,meta24110__$1));
});})(flag))
;

cljs.core.async.t24109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24111){
var self__ = this;
var _24111__$1 = this;
return self__.meta24110;
});})(flag))
;

cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24109.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24110","meta24110",-1542279405,null)], null);
});})(flag))
;

cljs.core.async.t24109.cljs$lang$type = true;

cljs.core.async.t24109.cljs$lang$ctorStr = "cljs.core.async/t24109";

cljs.core.async.t24109.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t24109");
});})(flag))
;

cljs.core.async.__GT_t24109 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24109(alt_flag__$1,flag__$1,meta24110){
return (new cljs.core.async.t24109(alt_flag__$1,flag__$1,meta24110));
});})(flag))
;

}

return (new cljs.core.async.t24109(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24115 = (function (alt_handler,flag,cb,meta24116){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24116 = meta24116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24117,meta24116__$1){
var self__ = this;
var _24117__$1 = this;
return (new cljs.core.async.t24115(self__.alt_handler,self__.flag,self__.cb,meta24116__$1));
});

cljs.core.async.t24115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24117){
var self__ = this;
var _24117__$1 = this;
return self__.meta24116;
});

cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24116","meta24116",-129899139,null)], null);
});

cljs.core.async.t24115.cljs$lang$type = true;

cljs.core.async.t24115.cljs$lang$ctorStr = "cljs.core.async/t24115";

cljs.core.async.t24115.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t24115");
});

cljs.core.async.__GT_t24115 = (function cljs$core$async$alt_handler_$___GT_t24115(alt_handler__$1,flag__$1,cb__$1,meta24116){
return (new cljs.core.async.t24115(alt_handler__$1,flag__$1,cb__$1,meta24116));
});

}

return (new cljs.core.async.t24115(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24118_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24118_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24119_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24119_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18087__auto__ = wport;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24120 = (i + (1));
i = G__24120;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18087__auto__ = ret;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__18075__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18075__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19127__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19127__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24123){
var map__24124 = p__24123;
var map__24124__$1 = ((cljs.core.seq_QMARK_.call(null,map__24124))?cljs.core.apply.call(null,cljs.core.hash_map,map__24124):map__24124);
var opts = map__24124__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24121){
var G__24122 = cljs.core.first.call(null,seq24121);
var seq24121__$1 = cljs.core.next.call(null,seq24121);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24122,seq24121__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__24126 = arguments.length;
switch (G__24126) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20075__auto___24175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___24175){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___24175){
return (function (state_24150){
var state_val_24151 = (state_24150[(1)]);
if((state_val_24151 === (7))){
var inst_24146 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24152_24176 = state_24150__$1;
(statearr_24152_24176[(2)] = inst_24146);

(statearr_24152_24176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (1))){
var state_24150__$1 = state_24150;
var statearr_24153_24177 = state_24150__$1;
(statearr_24153_24177[(2)] = null);

(statearr_24153_24177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (4))){
var inst_24129 = (state_24150[(7)]);
var inst_24129__$1 = (state_24150[(2)]);
var inst_24130 = (inst_24129__$1 == null);
var state_24150__$1 = (function (){var statearr_24154 = state_24150;
(statearr_24154[(7)] = inst_24129__$1);

return statearr_24154;
})();
if(cljs.core.truth_(inst_24130)){
var statearr_24155_24178 = state_24150__$1;
(statearr_24155_24178[(1)] = (5));

} else {
var statearr_24156_24179 = state_24150__$1;
(statearr_24156_24179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (13))){
var state_24150__$1 = state_24150;
var statearr_24157_24180 = state_24150__$1;
(statearr_24157_24180[(2)] = null);

(statearr_24157_24180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (6))){
var inst_24129 = (state_24150[(7)]);
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24150__$1,(11),to,inst_24129);
} else {
if((state_val_24151 === (3))){
var inst_24148 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24150__$1,inst_24148);
} else {
if((state_val_24151 === (12))){
var state_24150__$1 = state_24150;
var statearr_24158_24181 = state_24150__$1;
(statearr_24158_24181[(2)] = null);

(statearr_24158_24181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (2))){
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24150__$1,(4),from);
} else {
if((state_val_24151 === (11))){
var inst_24139 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
if(cljs.core.truth_(inst_24139)){
var statearr_24159_24182 = state_24150__$1;
(statearr_24159_24182[(1)] = (12));

} else {
var statearr_24160_24183 = state_24150__$1;
(statearr_24160_24183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (9))){
var state_24150__$1 = state_24150;
var statearr_24161_24184 = state_24150__$1;
(statearr_24161_24184[(2)] = null);

(statearr_24161_24184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (5))){
var state_24150__$1 = state_24150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24162_24185 = state_24150__$1;
(statearr_24162_24185[(1)] = (8));

} else {
var statearr_24163_24186 = state_24150__$1;
(statearr_24163_24186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (14))){
var inst_24144 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24164_24187 = state_24150__$1;
(statearr_24164_24187[(2)] = inst_24144);

(statearr_24164_24187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (10))){
var inst_24136 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24165_24188 = state_24150__$1;
(statearr_24165_24188[(2)] = inst_24136);

(statearr_24165_24188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24151 === (8))){
var inst_24133 = cljs.core.async.close_BANG_.call(null,to);
var state_24150__$1 = state_24150;
var statearr_24166_24189 = state_24150__$1;
(statearr_24166_24189[(2)] = inst_24133);

(statearr_24166_24189[(1)] = (10));


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
});})(c__20075__auto___24175))
;
return ((function (switch__20054__auto__,c__20075__auto___24175){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_24170 = [null,null,null,null,null,null,null,null];
(statearr_24170[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_24170[(1)] = (1));

return statearr_24170;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_24150){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24171){if((e24171 instanceof Object)){
var ex__20058__auto__ = e24171;
var statearr_24172_24190 = state_24150;
(statearr_24172_24190[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24191 = state_24150;
state_24150 = G__24191;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_24150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_24150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___24175))
})();
var state__20077__auto__ = (function (){var statearr_24173 = f__20076__auto__.call(null);
(statearr_24173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___24175);

return statearr_24173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___24175))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24375){
var vec__24376 = p__24375;
var v = cljs.core.nth.call(null,vec__24376,(0),null);
var p = cljs.core.nth.call(null,vec__24376,(1),null);
var job = vec__24376;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20075__auto___24558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___24558,res,vec__24376,v,p,job,jobs,results){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___24558,res,vec__24376,v,p,job,jobs,results){
return (function (state_24381){
var state_val_24382 = (state_24381[(1)]);
if((state_val_24382 === (1))){
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24381__$1,(2),res,v);
} else {
if((state_val_24382 === (2))){
var inst_24378 = (state_24381[(2)]);
var inst_24379 = cljs.core.async.close_BANG_.call(null,res);
var state_24381__$1 = (function (){var statearr_24383 = state_24381;
(statearr_24383[(7)] = inst_24378);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24381__$1,inst_24379);
} else {
return null;
}
}
});})(c__20075__auto___24558,res,vec__24376,v,p,job,jobs,results))
;
return ((function (switch__20054__auto__,c__20075__auto___24558,res,vec__24376,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0 = (function (){
var statearr_24387 = [null,null,null,null,null,null,null,null];
(statearr_24387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__);

(statearr_24387[(1)] = (1));

return statearr_24387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1 = (function (state_24381){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24388){if((e24388 instanceof Object)){
var ex__20058__auto__ = e24388;
var statearr_24389_24559 = state_24381;
(statearr_24389_24559[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24560 = state_24381;
state_24381 = G__24560;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = function(state_24381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1.call(this,state_24381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___24558,res,vec__24376,v,p,job,jobs,results))
})();
var state__20077__auto__ = (function (){var statearr_24390 = f__20076__auto__.call(null);
(statearr_24390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___24558);

return statearr_24390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___24558,res,vec__24376,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24391){
var vec__24392 = p__24391;
var v = cljs.core.nth.call(null,vec__24392,(0),null);
var p = cljs.core.nth.call(null,vec__24392,(1),null);
var job = vec__24392;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18972__auto___24561 = n;
var __24562 = (0);
while(true){
if((__24562 < n__18972__auto___24561)){
var G__24393_24563 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24393_24563) {
case "compute":
var c__20075__auto___24565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24562,c__20075__auto___24565,G__24393_24563,n__18972__auto___24561,jobs,results,process,async){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (__24562,c__20075__auto___24565,G__24393_24563,n__18972__auto___24561,jobs,results,process,async){
return (function (state_24406){
var state_val_24407 = (state_24406[(1)]);
if((state_val_24407 === (1))){
var state_24406__$1 = state_24406;
var statearr_24408_24566 = state_24406__$1;
(statearr_24408_24566[(2)] = null);

(statearr_24408_24566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24407 === (2))){
var state_24406__$1 = state_24406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24406__$1,(4),jobs);
} else {
if((state_val_24407 === (3))){
var inst_24404 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24406__$1,inst_24404);
} else {
if((state_val_24407 === (4))){
var inst_24396 = (state_24406[(2)]);
var inst_24397 = process.call(null,inst_24396);
var state_24406__$1 = state_24406;
if(cljs.core.truth_(inst_24397)){
var statearr_24409_24567 = state_24406__$1;
(statearr_24409_24567[(1)] = (5));

} else {
var statearr_24410_24568 = state_24406__$1;
(statearr_24410_24568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24407 === (5))){
var state_24406__$1 = state_24406;
var statearr_24411_24569 = state_24406__$1;
(statearr_24411_24569[(2)] = null);

(statearr_24411_24569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24407 === (6))){
var state_24406__$1 = state_24406;
var statearr_24412_24570 = state_24406__$1;
(statearr_24412_24570[(2)] = null);

(statearr_24412_24570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24407 === (7))){
var inst_24402 = (state_24406[(2)]);
var state_24406__$1 = state_24406;
var statearr_24413_24571 = state_24406__$1;
(statearr_24413_24571[(2)] = inst_24402);

(statearr_24413_24571[(1)] = (3));


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
});})(__24562,c__20075__auto___24565,G__24393_24563,n__18972__auto___24561,jobs,results,process,async))
;
return ((function (__24562,switch__20054__auto__,c__20075__auto___24565,G__24393_24563,n__18972__auto___24561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0 = (function (){
var statearr_24417 = [null,null,null,null,null,null,null];
(statearr_24417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__);

(statearr_24417[(1)] = (1));

return statearr_24417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1 = (function (state_24406){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24418){if((e24418 instanceof Object)){
var ex__20058__auto__ = e24418;
var statearr_24419_24572 = state_24406;
(statearr_24419_24572[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24573 = state_24406;
state_24406 = G__24573;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = function(state_24406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1.call(this,state_24406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__;
})()
;})(__24562,switch__20054__auto__,c__20075__auto___24565,G__24393_24563,n__18972__auto___24561,jobs,results,process,async))
})();
var state__20077__auto__ = (function (){var statearr_24420 = f__20076__auto__.call(null);
(statearr_24420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___24565);

return statearr_24420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(__24562,c__20075__auto___24565,G__24393_24563,n__18972__auto___24561,jobs,results,process,async))
);


break;
case "async":
var c__20075__auto___24574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24562,c__20075__auto___24574,G__24393_24563,n__18972__auto___24561,jobs,results,process,async){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (__24562,c__20075__auto___24574,G__24393_24563,n__18972__auto___24561,jobs,results,process,async){
return (function (state_24433){
var state_val_24434 = (state_24433[(1)]);
if((state_val_24434 === (1))){
var state_24433__$1 = state_24433;
var statearr_24435_24575 = state_24433__$1;
(statearr_24435_24575[(2)] = null);

(statearr_24435_24575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (2))){
var state_24433__$1 = state_24433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24433__$1,(4),jobs);
} else {
if((state_val_24434 === (3))){
var inst_24431 = (state_24433[(2)]);
var state_24433__$1 = state_24433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24433__$1,inst_24431);
} else {
if((state_val_24434 === (4))){
var inst_24423 = (state_24433[(2)]);
var inst_24424 = async.call(null,inst_24423);
var state_24433__$1 = state_24433;
if(cljs.core.truth_(inst_24424)){
var statearr_24436_24576 = state_24433__$1;
(statearr_24436_24576[(1)] = (5));

} else {
var statearr_24437_24577 = state_24433__$1;
(statearr_24437_24577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (5))){
var state_24433__$1 = state_24433;
var statearr_24438_24578 = state_24433__$1;
(statearr_24438_24578[(2)] = null);

(statearr_24438_24578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (6))){
var state_24433__$1 = state_24433;
var statearr_24439_24579 = state_24433__$1;
(statearr_24439_24579[(2)] = null);

(statearr_24439_24579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24434 === (7))){
var inst_24429 = (state_24433[(2)]);
var state_24433__$1 = state_24433;
var statearr_24440_24580 = state_24433__$1;
(statearr_24440_24580[(2)] = inst_24429);

(statearr_24440_24580[(1)] = (3));


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
});})(__24562,c__20075__auto___24574,G__24393_24563,n__18972__auto___24561,jobs,results,process,async))
;
return ((function (__24562,switch__20054__auto__,c__20075__auto___24574,G__24393_24563,n__18972__auto___24561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0 = (function (){
var statearr_24444 = [null,null,null,null,null,null,null];
(statearr_24444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__);

(statearr_24444[(1)] = (1));

return statearr_24444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1 = (function (state_24433){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24445){if((e24445 instanceof Object)){
var ex__20058__auto__ = e24445;
var statearr_24446_24581 = state_24433;
(statearr_24446_24581[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24582 = state_24433;
state_24433 = G__24582;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = function(state_24433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1.call(this,state_24433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__;
})()
;})(__24562,switch__20054__auto__,c__20075__auto___24574,G__24393_24563,n__18972__auto___24561,jobs,results,process,async))
})();
var state__20077__auto__ = (function (){var statearr_24447 = f__20076__auto__.call(null);
(statearr_24447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___24574);

return statearr_24447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(__24562,c__20075__auto___24574,G__24393_24563,n__18972__auto___24561,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24583 = (__24562 + (1));
__24562 = G__24583;
continue;
} else {
}
break;
}

var c__20075__auto___24584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___24584,jobs,results,process,async){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___24584,jobs,results,process,async){
return (function (state_24469){
var state_val_24470 = (state_24469[(1)]);
if((state_val_24470 === (1))){
var state_24469__$1 = state_24469;
var statearr_24471_24585 = state_24469__$1;
(statearr_24471_24585[(2)] = null);

(statearr_24471_24585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (2))){
var state_24469__$1 = state_24469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24469__$1,(4),from);
} else {
if((state_val_24470 === (3))){
var inst_24467 = (state_24469[(2)]);
var state_24469__$1 = state_24469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24469__$1,inst_24467);
} else {
if((state_val_24470 === (4))){
var inst_24450 = (state_24469[(7)]);
var inst_24450__$1 = (state_24469[(2)]);
var inst_24451 = (inst_24450__$1 == null);
var state_24469__$1 = (function (){var statearr_24472 = state_24469;
(statearr_24472[(7)] = inst_24450__$1);

return statearr_24472;
})();
if(cljs.core.truth_(inst_24451)){
var statearr_24473_24586 = state_24469__$1;
(statearr_24473_24586[(1)] = (5));

} else {
var statearr_24474_24587 = state_24469__$1;
(statearr_24474_24587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (5))){
var inst_24453 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24469__$1 = state_24469;
var statearr_24475_24588 = state_24469__$1;
(statearr_24475_24588[(2)] = inst_24453);

(statearr_24475_24588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (6))){
var inst_24455 = (state_24469[(8)]);
var inst_24450 = (state_24469[(7)]);
var inst_24455__$1 = cljs.core.async.chan.call(null,(1));
var inst_24456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24457 = [inst_24450,inst_24455__$1];
var inst_24458 = (new cljs.core.PersistentVector(null,2,(5),inst_24456,inst_24457,null));
var state_24469__$1 = (function (){var statearr_24476 = state_24469;
(statearr_24476[(8)] = inst_24455__$1);

return statearr_24476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24469__$1,(8),jobs,inst_24458);
} else {
if((state_val_24470 === (7))){
var inst_24465 = (state_24469[(2)]);
var state_24469__$1 = state_24469;
var statearr_24477_24589 = state_24469__$1;
(statearr_24477_24589[(2)] = inst_24465);

(statearr_24477_24589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24470 === (8))){
var inst_24455 = (state_24469[(8)]);
var inst_24460 = (state_24469[(2)]);
var state_24469__$1 = (function (){var statearr_24478 = state_24469;
(statearr_24478[(9)] = inst_24460);

return statearr_24478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24469__$1,(9),results,inst_24455);
} else {
if((state_val_24470 === (9))){
var inst_24462 = (state_24469[(2)]);
var state_24469__$1 = (function (){var statearr_24479 = state_24469;
(statearr_24479[(10)] = inst_24462);

return statearr_24479;
})();
var statearr_24480_24590 = state_24469__$1;
(statearr_24480_24590[(2)] = null);

(statearr_24480_24590[(1)] = (2));


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
});})(c__20075__auto___24584,jobs,results,process,async))
;
return ((function (switch__20054__auto__,c__20075__auto___24584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0 = (function (){
var statearr_24484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__);

(statearr_24484[(1)] = (1));

return statearr_24484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1 = (function (state_24469){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24485){if((e24485 instanceof Object)){
var ex__20058__auto__ = e24485;
var statearr_24486_24591 = state_24469;
(statearr_24486_24591[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24592 = state_24469;
state_24469 = G__24592;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = function(state_24469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1.call(this,state_24469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___24584,jobs,results,process,async))
})();
var state__20077__auto__ = (function (){var statearr_24487 = f__20076__auto__.call(null);
(statearr_24487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___24584);

return statearr_24487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___24584,jobs,results,process,async))
);


var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__,jobs,results,process,async){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__,jobs,results,process,async){
return (function (state_24525){
var state_val_24526 = (state_24525[(1)]);
if((state_val_24526 === (7))){
var inst_24521 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
var statearr_24527_24593 = state_24525__$1;
(statearr_24527_24593[(2)] = inst_24521);

(statearr_24527_24593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (20))){
var state_24525__$1 = state_24525;
var statearr_24528_24594 = state_24525__$1;
(statearr_24528_24594[(2)] = null);

(statearr_24528_24594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (1))){
var state_24525__$1 = state_24525;
var statearr_24529_24595 = state_24525__$1;
(statearr_24529_24595[(2)] = null);

(statearr_24529_24595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (4))){
var inst_24490 = (state_24525[(7)]);
var inst_24490__$1 = (state_24525[(2)]);
var inst_24491 = (inst_24490__$1 == null);
var state_24525__$1 = (function (){var statearr_24530 = state_24525;
(statearr_24530[(7)] = inst_24490__$1);

return statearr_24530;
})();
if(cljs.core.truth_(inst_24491)){
var statearr_24531_24596 = state_24525__$1;
(statearr_24531_24596[(1)] = (5));

} else {
var statearr_24532_24597 = state_24525__$1;
(statearr_24532_24597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (15))){
var inst_24503 = (state_24525[(8)]);
var state_24525__$1 = state_24525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24525__$1,(18),to,inst_24503);
} else {
if((state_val_24526 === (21))){
var inst_24516 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
var statearr_24533_24598 = state_24525__$1;
(statearr_24533_24598[(2)] = inst_24516);

(statearr_24533_24598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (13))){
var inst_24518 = (state_24525[(2)]);
var state_24525__$1 = (function (){var statearr_24534 = state_24525;
(statearr_24534[(9)] = inst_24518);

return statearr_24534;
})();
var statearr_24535_24599 = state_24525__$1;
(statearr_24535_24599[(2)] = null);

(statearr_24535_24599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (6))){
var inst_24490 = (state_24525[(7)]);
var state_24525__$1 = state_24525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24525__$1,(11),inst_24490);
} else {
if((state_val_24526 === (17))){
var inst_24511 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
if(cljs.core.truth_(inst_24511)){
var statearr_24536_24600 = state_24525__$1;
(statearr_24536_24600[(1)] = (19));

} else {
var statearr_24537_24601 = state_24525__$1;
(statearr_24537_24601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (3))){
var inst_24523 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24525__$1,inst_24523);
} else {
if((state_val_24526 === (12))){
var inst_24500 = (state_24525[(10)]);
var state_24525__$1 = state_24525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24525__$1,(14),inst_24500);
} else {
if((state_val_24526 === (2))){
var state_24525__$1 = state_24525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24525__$1,(4),results);
} else {
if((state_val_24526 === (19))){
var state_24525__$1 = state_24525;
var statearr_24538_24602 = state_24525__$1;
(statearr_24538_24602[(2)] = null);

(statearr_24538_24602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (11))){
var inst_24500 = (state_24525[(2)]);
var state_24525__$1 = (function (){var statearr_24539 = state_24525;
(statearr_24539[(10)] = inst_24500);

return statearr_24539;
})();
var statearr_24540_24603 = state_24525__$1;
(statearr_24540_24603[(2)] = null);

(statearr_24540_24603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (9))){
var state_24525__$1 = state_24525;
var statearr_24541_24604 = state_24525__$1;
(statearr_24541_24604[(2)] = null);

(statearr_24541_24604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (5))){
var state_24525__$1 = state_24525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24542_24605 = state_24525__$1;
(statearr_24542_24605[(1)] = (8));

} else {
var statearr_24543_24606 = state_24525__$1;
(statearr_24543_24606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (14))){
var inst_24503 = (state_24525[(8)]);
var inst_24505 = (state_24525[(11)]);
var inst_24503__$1 = (state_24525[(2)]);
var inst_24504 = (inst_24503__$1 == null);
var inst_24505__$1 = cljs.core.not.call(null,inst_24504);
var state_24525__$1 = (function (){var statearr_24544 = state_24525;
(statearr_24544[(8)] = inst_24503__$1);

(statearr_24544[(11)] = inst_24505__$1);

return statearr_24544;
})();
if(inst_24505__$1){
var statearr_24545_24607 = state_24525__$1;
(statearr_24545_24607[(1)] = (15));

} else {
var statearr_24546_24608 = state_24525__$1;
(statearr_24546_24608[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (16))){
var inst_24505 = (state_24525[(11)]);
var state_24525__$1 = state_24525;
var statearr_24547_24609 = state_24525__$1;
(statearr_24547_24609[(2)] = inst_24505);

(statearr_24547_24609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (10))){
var inst_24497 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
var statearr_24548_24610 = state_24525__$1;
(statearr_24548_24610[(2)] = inst_24497);

(statearr_24548_24610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (18))){
var inst_24508 = (state_24525[(2)]);
var state_24525__$1 = state_24525;
var statearr_24549_24611 = state_24525__$1;
(statearr_24549_24611[(2)] = inst_24508);

(statearr_24549_24611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24526 === (8))){
var inst_24494 = cljs.core.async.close_BANG_.call(null,to);
var state_24525__$1 = state_24525;
var statearr_24550_24612 = state_24525__$1;
(statearr_24550_24612[(2)] = inst_24494);

(statearr_24550_24612[(1)] = (10));


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
});})(c__20075__auto__,jobs,results,process,async))
;
return ((function (switch__20054__auto__,c__20075__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0 = (function (){
var statearr_24554 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__);

(statearr_24554[(1)] = (1));

return statearr_24554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1 = (function (state_24525){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24555){if((e24555 instanceof Object)){
var ex__20058__auto__ = e24555;
var statearr_24556_24613 = state_24525;
(statearr_24556_24613[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24614 = state_24525;
state_24525 = G__24614;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__ = function(state_24525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1.call(this,state_24525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__,jobs,results,process,async))
})();
var state__20077__auto__ = (function (){var statearr_24557 = f__20076__auto__.call(null);
(statearr_24557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_24557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__,jobs,results,process,async))
);

return c__20075__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__24616 = arguments.length;
switch (G__24616) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__24619 = arguments.length;
switch (G__24619) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__24622 = arguments.length;
switch (G__24622) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20075__auto___24674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___24674,tc,fc){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___24674,tc,fc){
return (function (state_24648){
var state_val_24649 = (state_24648[(1)]);
if((state_val_24649 === (7))){
var inst_24644 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
var statearr_24650_24675 = state_24648__$1;
(statearr_24650_24675[(2)] = inst_24644);

(statearr_24650_24675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (1))){
var state_24648__$1 = state_24648;
var statearr_24651_24676 = state_24648__$1;
(statearr_24651_24676[(2)] = null);

(statearr_24651_24676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (4))){
var inst_24625 = (state_24648[(7)]);
var inst_24625__$1 = (state_24648[(2)]);
var inst_24626 = (inst_24625__$1 == null);
var state_24648__$1 = (function (){var statearr_24652 = state_24648;
(statearr_24652[(7)] = inst_24625__$1);

return statearr_24652;
})();
if(cljs.core.truth_(inst_24626)){
var statearr_24653_24677 = state_24648__$1;
(statearr_24653_24677[(1)] = (5));

} else {
var statearr_24654_24678 = state_24648__$1;
(statearr_24654_24678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (13))){
var state_24648__$1 = state_24648;
var statearr_24655_24679 = state_24648__$1;
(statearr_24655_24679[(2)] = null);

(statearr_24655_24679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (6))){
var inst_24625 = (state_24648[(7)]);
var inst_24631 = p.call(null,inst_24625);
var state_24648__$1 = state_24648;
if(cljs.core.truth_(inst_24631)){
var statearr_24656_24680 = state_24648__$1;
(statearr_24656_24680[(1)] = (9));

} else {
var statearr_24657_24681 = state_24648__$1;
(statearr_24657_24681[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (3))){
var inst_24646 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24648__$1,inst_24646);
} else {
if((state_val_24649 === (12))){
var state_24648__$1 = state_24648;
var statearr_24658_24682 = state_24648__$1;
(statearr_24658_24682[(2)] = null);

(statearr_24658_24682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (2))){
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24648__$1,(4),ch);
} else {
if((state_val_24649 === (11))){
var inst_24625 = (state_24648[(7)]);
var inst_24635 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24648__$1,(8),inst_24635,inst_24625);
} else {
if((state_val_24649 === (9))){
var state_24648__$1 = state_24648;
var statearr_24659_24683 = state_24648__$1;
(statearr_24659_24683[(2)] = tc);

(statearr_24659_24683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (5))){
var inst_24628 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24629 = cljs.core.async.close_BANG_.call(null,fc);
var state_24648__$1 = (function (){var statearr_24660 = state_24648;
(statearr_24660[(8)] = inst_24628);

return statearr_24660;
})();
var statearr_24661_24684 = state_24648__$1;
(statearr_24661_24684[(2)] = inst_24629);

(statearr_24661_24684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (14))){
var inst_24642 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
var statearr_24662_24685 = state_24648__$1;
(statearr_24662_24685[(2)] = inst_24642);

(statearr_24662_24685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (10))){
var state_24648__$1 = state_24648;
var statearr_24663_24686 = state_24648__$1;
(statearr_24663_24686[(2)] = fc);

(statearr_24663_24686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24649 === (8))){
var inst_24637 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
if(cljs.core.truth_(inst_24637)){
var statearr_24664_24687 = state_24648__$1;
(statearr_24664_24687[(1)] = (12));

} else {
var statearr_24665_24688 = state_24648__$1;
(statearr_24665_24688[(1)] = (13));

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
});})(c__20075__auto___24674,tc,fc))
;
return ((function (switch__20054__auto__,c__20075__auto___24674,tc,fc){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_24669 = [null,null,null,null,null,null,null,null,null];
(statearr_24669[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_24669[(1)] = (1));

return statearr_24669;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_24648){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24670){if((e24670 instanceof Object)){
var ex__20058__auto__ = e24670;
var statearr_24671_24689 = state_24648;
(statearr_24671_24689[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24690 = state_24648;
state_24648 = G__24690;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_24648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_24648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___24674,tc,fc))
})();
var state__20077__auto__ = (function (){var statearr_24672 = f__20076__auto__.call(null);
(statearr_24672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___24674);

return statearr_24672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___24674,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__){
return (function (state_24737){
var state_val_24738 = (state_24737[(1)]);
if((state_val_24738 === (1))){
var inst_24723 = init;
var state_24737__$1 = (function (){var statearr_24739 = state_24737;
(statearr_24739[(7)] = inst_24723);

return statearr_24739;
})();
var statearr_24740_24755 = state_24737__$1;
(statearr_24740_24755[(2)] = null);

(statearr_24740_24755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (2))){
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24737__$1,(4),ch);
} else {
if((state_val_24738 === (3))){
var inst_24735 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24737__$1,inst_24735);
} else {
if((state_val_24738 === (4))){
var inst_24726 = (state_24737[(8)]);
var inst_24726__$1 = (state_24737[(2)]);
var inst_24727 = (inst_24726__$1 == null);
var state_24737__$1 = (function (){var statearr_24741 = state_24737;
(statearr_24741[(8)] = inst_24726__$1);

return statearr_24741;
})();
if(cljs.core.truth_(inst_24727)){
var statearr_24742_24756 = state_24737__$1;
(statearr_24742_24756[(1)] = (5));

} else {
var statearr_24743_24757 = state_24737__$1;
(statearr_24743_24757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (5))){
var inst_24723 = (state_24737[(7)]);
var state_24737__$1 = state_24737;
var statearr_24744_24758 = state_24737__$1;
(statearr_24744_24758[(2)] = inst_24723);

(statearr_24744_24758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (6))){
var inst_24726 = (state_24737[(8)]);
var inst_24723 = (state_24737[(7)]);
var inst_24730 = f.call(null,inst_24723,inst_24726);
var inst_24723__$1 = inst_24730;
var state_24737__$1 = (function (){var statearr_24745 = state_24737;
(statearr_24745[(7)] = inst_24723__$1);

return statearr_24745;
})();
var statearr_24746_24759 = state_24737__$1;
(statearr_24746_24759[(2)] = null);

(statearr_24746_24759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (7))){
var inst_24733 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24747_24760 = state_24737__$1;
(statearr_24747_24760[(2)] = inst_24733);

(statearr_24747_24760[(1)] = (3));


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
});})(c__20075__auto__))
;
return ((function (switch__20054__auto__,c__20075__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20055__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20055__auto____0 = (function (){
var statearr_24751 = [null,null,null,null,null,null,null,null,null];
(statearr_24751[(0)] = cljs$core$async$reduce_$_state_machine__20055__auto__);

(statearr_24751[(1)] = (1));

return statearr_24751;
});
var cljs$core$async$reduce_$_state_machine__20055__auto____1 = (function (state_24737){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24752){if((e24752 instanceof Object)){
var ex__20058__auto__ = e24752;
var statearr_24753_24761 = state_24737;
(statearr_24753_24761[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24762 = state_24737;
state_24737 = G__24762;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20055__auto__ = function(state_24737){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20055__auto____1.call(this,state_24737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20055__auto____0;
cljs$core$async$reduce_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20055__auto____1;
return cljs$core$async$reduce_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__))
})();
var state__20077__auto__ = (function (){var statearr_24754 = f__20076__auto__.call(null);
(statearr_24754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_24754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__))
);

return c__20075__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__24764 = arguments.length;
switch (G__24764) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__){
return (function (state_24789){
var state_val_24790 = (state_24789[(1)]);
if((state_val_24790 === (7))){
var inst_24771 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
var statearr_24791_24815 = state_24789__$1;
(statearr_24791_24815[(2)] = inst_24771);

(statearr_24791_24815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (1))){
var inst_24765 = cljs.core.seq.call(null,coll);
var inst_24766 = inst_24765;
var state_24789__$1 = (function (){var statearr_24792 = state_24789;
(statearr_24792[(7)] = inst_24766);

return statearr_24792;
})();
var statearr_24793_24816 = state_24789__$1;
(statearr_24793_24816[(2)] = null);

(statearr_24793_24816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (4))){
var inst_24766 = (state_24789[(7)]);
var inst_24769 = cljs.core.first.call(null,inst_24766);
var state_24789__$1 = state_24789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24789__$1,(7),ch,inst_24769);
} else {
if((state_val_24790 === (13))){
var inst_24783 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
var statearr_24794_24817 = state_24789__$1;
(statearr_24794_24817[(2)] = inst_24783);

(statearr_24794_24817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (6))){
var inst_24774 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
if(cljs.core.truth_(inst_24774)){
var statearr_24795_24818 = state_24789__$1;
(statearr_24795_24818[(1)] = (8));

} else {
var statearr_24796_24819 = state_24789__$1;
(statearr_24796_24819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (3))){
var inst_24787 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24789__$1,inst_24787);
} else {
if((state_val_24790 === (12))){
var state_24789__$1 = state_24789;
var statearr_24797_24820 = state_24789__$1;
(statearr_24797_24820[(2)] = null);

(statearr_24797_24820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (2))){
var inst_24766 = (state_24789[(7)]);
var state_24789__$1 = state_24789;
if(cljs.core.truth_(inst_24766)){
var statearr_24798_24821 = state_24789__$1;
(statearr_24798_24821[(1)] = (4));

} else {
var statearr_24799_24822 = state_24789__$1;
(statearr_24799_24822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (11))){
var inst_24780 = cljs.core.async.close_BANG_.call(null,ch);
var state_24789__$1 = state_24789;
var statearr_24800_24823 = state_24789__$1;
(statearr_24800_24823[(2)] = inst_24780);

(statearr_24800_24823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (9))){
var state_24789__$1 = state_24789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24801_24824 = state_24789__$1;
(statearr_24801_24824[(1)] = (11));

} else {
var statearr_24802_24825 = state_24789__$1;
(statearr_24802_24825[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (5))){
var inst_24766 = (state_24789[(7)]);
var state_24789__$1 = state_24789;
var statearr_24803_24826 = state_24789__$1;
(statearr_24803_24826[(2)] = inst_24766);

(statearr_24803_24826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (10))){
var inst_24785 = (state_24789[(2)]);
var state_24789__$1 = state_24789;
var statearr_24804_24827 = state_24789__$1;
(statearr_24804_24827[(2)] = inst_24785);

(statearr_24804_24827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24790 === (8))){
var inst_24766 = (state_24789[(7)]);
var inst_24776 = cljs.core.next.call(null,inst_24766);
var inst_24766__$1 = inst_24776;
var state_24789__$1 = (function (){var statearr_24805 = state_24789;
(statearr_24805[(7)] = inst_24766__$1);

return statearr_24805;
})();
var statearr_24806_24828 = state_24789__$1;
(statearr_24806_24828[(2)] = null);

(statearr_24806_24828[(1)] = (2));


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
});})(c__20075__auto__))
;
return ((function (switch__20054__auto__,c__20075__auto__){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_24810 = [null,null,null,null,null,null,null,null];
(statearr_24810[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_24810[(1)] = (1));

return statearr_24810;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_24789){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_24789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e24811){if((e24811 instanceof Object)){
var ex__20058__auto__ = e24811;
var statearr_24812_24829 = state_24789;
(statearr_24812_24829[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24830 = state_24789;
state_24789 = G__24830;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_24789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_24789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__))
})();
var state__20077__auto__ = (function (){var statearr_24813 = f__20076__auto__.call(null);
(statearr_24813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_24813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__))
);

return c__20075__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj24832 = {};
return obj24832;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18075__auto__ = _;
if(and__18075__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18723__auto__ = (((_ == null))?null:_);
return (function (){var or__18087__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj24834 = {};
return obj24834;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25056 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25056 = (function (mult,ch,cs,meta25057){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25057 = meta25057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25058,meta25057__$1){
var self__ = this;
var _25058__$1 = this;
return (new cljs.core.async.t25056(self__.mult,self__.ch,self__.cs,meta25057__$1));
});})(cs))
;

cljs.core.async.t25056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25058){
var self__ = this;
var _25058__$1 = this;
return self__.meta25057;
});})(cs))
;

cljs.core.async.t25056.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25056.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25056.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25056.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25056.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25056.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25057","meta25057",-1911107207,null)], null);
});})(cs))
;

cljs.core.async.t25056.cljs$lang$type = true;

cljs.core.async.t25056.cljs$lang$ctorStr = "cljs.core.async/t25056";

cljs.core.async.t25056.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t25056");
});})(cs))
;

cljs.core.async.__GT_t25056 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25056(mult__$1,ch__$1,cs__$1,meta25057){
return (new cljs.core.async.t25056(mult__$1,ch__$1,cs__$1,meta25057));
});})(cs))
;

}

return (new cljs.core.async.t25056(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20075__auto___25277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___25277,cs,m,dchan,dctr,done){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___25277,cs,m,dchan,dctr,done){
return (function (state_25189){
var state_val_25190 = (state_25189[(1)]);
if((state_val_25190 === (7))){
var inst_25185 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25191_25278 = state_25189__$1;
(statearr_25191_25278[(2)] = inst_25185);

(statearr_25191_25278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (20))){
var inst_25090 = (state_25189[(7)]);
var inst_25100 = cljs.core.first.call(null,inst_25090);
var inst_25101 = cljs.core.nth.call(null,inst_25100,(0),null);
var inst_25102 = cljs.core.nth.call(null,inst_25100,(1),null);
var state_25189__$1 = (function (){var statearr_25192 = state_25189;
(statearr_25192[(8)] = inst_25101);

return statearr_25192;
})();
if(cljs.core.truth_(inst_25102)){
var statearr_25193_25279 = state_25189__$1;
(statearr_25193_25279[(1)] = (22));

} else {
var statearr_25194_25280 = state_25189__$1;
(statearr_25194_25280[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (27))){
var inst_25137 = (state_25189[(9)]);
var inst_25130 = (state_25189[(10)]);
var inst_25132 = (state_25189[(11)]);
var inst_25061 = (state_25189[(12)]);
var inst_25137__$1 = cljs.core._nth.call(null,inst_25130,inst_25132);
var inst_25138 = cljs.core.async.put_BANG_.call(null,inst_25137__$1,inst_25061,done);
var state_25189__$1 = (function (){var statearr_25195 = state_25189;
(statearr_25195[(9)] = inst_25137__$1);

return statearr_25195;
})();
if(cljs.core.truth_(inst_25138)){
var statearr_25196_25281 = state_25189__$1;
(statearr_25196_25281[(1)] = (30));

} else {
var statearr_25197_25282 = state_25189__$1;
(statearr_25197_25282[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (1))){
var state_25189__$1 = state_25189;
var statearr_25198_25283 = state_25189__$1;
(statearr_25198_25283[(2)] = null);

(statearr_25198_25283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (24))){
var inst_25090 = (state_25189[(7)]);
var inst_25107 = (state_25189[(2)]);
var inst_25108 = cljs.core.next.call(null,inst_25090);
var inst_25070 = inst_25108;
var inst_25071 = null;
var inst_25072 = (0);
var inst_25073 = (0);
var state_25189__$1 = (function (){var statearr_25199 = state_25189;
(statearr_25199[(13)] = inst_25071);

(statearr_25199[(14)] = inst_25107);

(statearr_25199[(15)] = inst_25072);

(statearr_25199[(16)] = inst_25073);

(statearr_25199[(17)] = inst_25070);

return statearr_25199;
})();
var statearr_25200_25284 = state_25189__$1;
(statearr_25200_25284[(2)] = null);

(statearr_25200_25284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (39))){
var state_25189__$1 = state_25189;
var statearr_25204_25285 = state_25189__$1;
(statearr_25204_25285[(2)] = null);

(statearr_25204_25285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (4))){
var inst_25061 = (state_25189[(12)]);
var inst_25061__$1 = (state_25189[(2)]);
var inst_25062 = (inst_25061__$1 == null);
var state_25189__$1 = (function (){var statearr_25205 = state_25189;
(statearr_25205[(12)] = inst_25061__$1);

return statearr_25205;
})();
if(cljs.core.truth_(inst_25062)){
var statearr_25206_25286 = state_25189__$1;
(statearr_25206_25286[(1)] = (5));

} else {
var statearr_25207_25287 = state_25189__$1;
(statearr_25207_25287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (15))){
var inst_25071 = (state_25189[(13)]);
var inst_25072 = (state_25189[(15)]);
var inst_25073 = (state_25189[(16)]);
var inst_25070 = (state_25189[(17)]);
var inst_25086 = (state_25189[(2)]);
var inst_25087 = (inst_25073 + (1));
var tmp25201 = inst_25071;
var tmp25202 = inst_25072;
var tmp25203 = inst_25070;
var inst_25070__$1 = tmp25203;
var inst_25071__$1 = tmp25201;
var inst_25072__$1 = tmp25202;
var inst_25073__$1 = inst_25087;
var state_25189__$1 = (function (){var statearr_25208 = state_25189;
(statearr_25208[(13)] = inst_25071__$1);

(statearr_25208[(15)] = inst_25072__$1);

(statearr_25208[(18)] = inst_25086);

(statearr_25208[(16)] = inst_25073__$1);

(statearr_25208[(17)] = inst_25070__$1);

return statearr_25208;
})();
var statearr_25209_25288 = state_25189__$1;
(statearr_25209_25288[(2)] = null);

(statearr_25209_25288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (21))){
var inst_25111 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25213_25289 = state_25189__$1;
(statearr_25213_25289[(2)] = inst_25111);

(statearr_25213_25289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (31))){
var inst_25137 = (state_25189[(9)]);
var inst_25141 = done.call(null,null);
var inst_25142 = cljs.core.async.untap_STAR_.call(null,m,inst_25137);
var state_25189__$1 = (function (){var statearr_25214 = state_25189;
(statearr_25214[(19)] = inst_25141);

return statearr_25214;
})();
var statearr_25215_25290 = state_25189__$1;
(statearr_25215_25290[(2)] = inst_25142);

(statearr_25215_25290[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (32))){
var inst_25131 = (state_25189[(20)]);
var inst_25129 = (state_25189[(21)]);
var inst_25130 = (state_25189[(10)]);
var inst_25132 = (state_25189[(11)]);
var inst_25144 = (state_25189[(2)]);
var inst_25145 = (inst_25132 + (1));
var tmp25210 = inst_25131;
var tmp25211 = inst_25129;
var tmp25212 = inst_25130;
var inst_25129__$1 = tmp25211;
var inst_25130__$1 = tmp25212;
var inst_25131__$1 = tmp25210;
var inst_25132__$1 = inst_25145;
var state_25189__$1 = (function (){var statearr_25216 = state_25189;
(statearr_25216[(20)] = inst_25131__$1);

(statearr_25216[(21)] = inst_25129__$1);

(statearr_25216[(10)] = inst_25130__$1);

(statearr_25216[(22)] = inst_25144);

(statearr_25216[(11)] = inst_25132__$1);

return statearr_25216;
})();
var statearr_25217_25291 = state_25189__$1;
(statearr_25217_25291[(2)] = null);

(statearr_25217_25291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (40))){
var inst_25157 = (state_25189[(23)]);
var inst_25161 = done.call(null,null);
var inst_25162 = cljs.core.async.untap_STAR_.call(null,m,inst_25157);
var state_25189__$1 = (function (){var statearr_25218 = state_25189;
(statearr_25218[(24)] = inst_25161);

return statearr_25218;
})();
var statearr_25219_25292 = state_25189__$1;
(statearr_25219_25292[(2)] = inst_25162);

(statearr_25219_25292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (33))){
var inst_25148 = (state_25189[(25)]);
var inst_25150 = cljs.core.chunked_seq_QMARK_.call(null,inst_25148);
var state_25189__$1 = state_25189;
if(inst_25150){
var statearr_25220_25293 = state_25189__$1;
(statearr_25220_25293[(1)] = (36));

} else {
var statearr_25221_25294 = state_25189__$1;
(statearr_25221_25294[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (13))){
var inst_25080 = (state_25189[(26)]);
var inst_25083 = cljs.core.async.close_BANG_.call(null,inst_25080);
var state_25189__$1 = state_25189;
var statearr_25222_25295 = state_25189__$1;
(statearr_25222_25295[(2)] = inst_25083);

(statearr_25222_25295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (22))){
var inst_25101 = (state_25189[(8)]);
var inst_25104 = cljs.core.async.close_BANG_.call(null,inst_25101);
var state_25189__$1 = state_25189;
var statearr_25223_25296 = state_25189__$1;
(statearr_25223_25296[(2)] = inst_25104);

(statearr_25223_25296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (36))){
var inst_25148 = (state_25189[(25)]);
var inst_25152 = cljs.core.chunk_first.call(null,inst_25148);
var inst_25153 = cljs.core.chunk_rest.call(null,inst_25148);
var inst_25154 = cljs.core.count.call(null,inst_25152);
var inst_25129 = inst_25153;
var inst_25130 = inst_25152;
var inst_25131 = inst_25154;
var inst_25132 = (0);
var state_25189__$1 = (function (){var statearr_25224 = state_25189;
(statearr_25224[(20)] = inst_25131);

(statearr_25224[(21)] = inst_25129);

(statearr_25224[(10)] = inst_25130);

(statearr_25224[(11)] = inst_25132);

return statearr_25224;
})();
var statearr_25225_25297 = state_25189__$1;
(statearr_25225_25297[(2)] = null);

(statearr_25225_25297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (41))){
var inst_25148 = (state_25189[(25)]);
var inst_25164 = (state_25189[(2)]);
var inst_25165 = cljs.core.next.call(null,inst_25148);
var inst_25129 = inst_25165;
var inst_25130 = null;
var inst_25131 = (0);
var inst_25132 = (0);
var state_25189__$1 = (function (){var statearr_25226 = state_25189;
(statearr_25226[(20)] = inst_25131);

(statearr_25226[(27)] = inst_25164);

(statearr_25226[(21)] = inst_25129);

(statearr_25226[(10)] = inst_25130);

(statearr_25226[(11)] = inst_25132);

return statearr_25226;
})();
var statearr_25227_25298 = state_25189__$1;
(statearr_25227_25298[(2)] = null);

(statearr_25227_25298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (43))){
var state_25189__$1 = state_25189;
var statearr_25228_25299 = state_25189__$1;
(statearr_25228_25299[(2)] = null);

(statearr_25228_25299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (29))){
var inst_25173 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25229_25300 = state_25189__$1;
(statearr_25229_25300[(2)] = inst_25173);

(statearr_25229_25300[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (44))){
var inst_25182 = (state_25189[(2)]);
var state_25189__$1 = (function (){var statearr_25230 = state_25189;
(statearr_25230[(28)] = inst_25182);

return statearr_25230;
})();
var statearr_25231_25301 = state_25189__$1;
(statearr_25231_25301[(2)] = null);

(statearr_25231_25301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (6))){
var inst_25121 = (state_25189[(29)]);
var inst_25120 = cljs.core.deref.call(null,cs);
var inst_25121__$1 = cljs.core.keys.call(null,inst_25120);
var inst_25122 = cljs.core.count.call(null,inst_25121__$1);
var inst_25123 = cljs.core.reset_BANG_.call(null,dctr,inst_25122);
var inst_25128 = cljs.core.seq.call(null,inst_25121__$1);
var inst_25129 = inst_25128;
var inst_25130 = null;
var inst_25131 = (0);
var inst_25132 = (0);
var state_25189__$1 = (function (){var statearr_25232 = state_25189;
(statearr_25232[(20)] = inst_25131);

(statearr_25232[(29)] = inst_25121__$1);

(statearr_25232[(21)] = inst_25129);

(statearr_25232[(10)] = inst_25130);

(statearr_25232[(30)] = inst_25123);

(statearr_25232[(11)] = inst_25132);

return statearr_25232;
})();
var statearr_25233_25302 = state_25189__$1;
(statearr_25233_25302[(2)] = null);

(statearr_25233_25302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (28))){
var inst_25148 = (state_25189[(25)]);
var inst_25129 = (state_25189[(21)]);
var inst_25148__$1 = cljs.core.seq.call(null,inst_25129);
var state_25189__$1 = (function (){var statearr_25234 = state_25189;
(statearr_25234[(25)] = inst_25148__$1);

return statearr_25234;
})();
if(inst_25148__$1){
var statearr_25235_25303 = state_25189__$1;
(statearr_25235_25303[(1)] = (33));

} else {
var statearr_25236_25304 = state_25189__$1;
(statearr_25236_25304[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (25))){
var inst_25131 = (state_25189[(20)]);
var inst_25132 = (state_25189[(11)]);
var inst_25134 = (inst_25132 < inst_25131);
var inst_25135 = inst_25134;
var state_25189__$1 = state_25189;
if(cljs.core.truth_(inst_25135)){
var statearr_25237_25305 = state_25189__$1;
(statearr_25237_25305[(1)] = (27));

} else {
var statearr_25238_25306 = state_25189__$1;
(statearr_25238_25306[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (34))){
var state_25189__$1 = state_25189;
var statearr_25239_25307 = state_25189__$1;
(statearr_25239_25307[(2)] = null);

(statearr_25239_25307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (17))){
var state_25189__$1 = state_25189;
var statearr_25240_25308 = state_25189__$1;
(statearr_25240_25308[(2)] = null);

(statearr_25240_25308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (3))){
var inst_25187 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25189__$1,inst_25187);
} else {
if((state_val_25190 === (12))){
var inst_25116 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25241_25309 = state_25189__$1;
(statearr_25241_25309[(2)] = inst_25116);

(statearr_25241_25309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (2))){
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25189__$1,(4),ch);
} else {
if((state_val_25190 === (23))){
var state_25189__$1 = state_25189;
var statearr_25242_25310 = state_25189__$1;
(statearr_25242_25310[(2)] = null);

(statearr_25242_25310[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (35))){
var inst_25171 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25243_25311 = state_25189__$1;
(statearr_25243_25311[(2)] = inst_25171);

(statearr_25243_25311[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (19))){
var inst_25090 = (state_25189[(7)]);
var inst_25094 = cljs.core.chunk_first.call(null,inst_25090);
var inst_25095 = cljs.core.chunk_rest.call(null,inst_25090);
var inst_25096 = cljs.core.count.call(null,inst_25094);
var inst_25070 = inst_25095;
var inst_25071 = inst_25094;
var inst_25072 = inst_25096;
var inst_25073 = (0);
var state_25189__$1 = (function (){var statearr_25244 = state_25189;
(statearr_25244[(13)] = inst_25071);

(statearr_25244[(15)] = inst_25072);

(statearr_25244[(16)] = inst_25073);

(statearr_25244[(17)] = inst_25070);

return statearr_25244;
})();
var statearr_25245_25312 = state_25189__$1;
(statearr_25245_25312[(2)] = null);

(statearr_25245_25312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (11))){
var inst_25090 = (state_25189[(7)]);
var inst_25070 = (state_25189[(17)]);
var inst_25090__$1 = cljs.core.seq.call(null,inst_25070);
var state_25189__$1 = (function (){var statearr_25246 = state_25189;
(statearr_25246[(7)] = inst_25090__$1);

return statearr_25246;
})();
if(inst_25090__$1){
var statearr_25247_25313 = state_25189__$1;
(statearr_25247_25313[(1)] = (16));

} else {
var statearr_25248_25314 = state_25189__$1;
(statearr_25248_25314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (9))){
var inst_25118 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25249_25315 = state_25189__$1;
(statearr_25249_25315[(2)] = inst_25118);

(statearr_25249_25315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (5))){
var inst_25068 = cljs.core.deref.call(null,cs);
var inst_25069 = cljs.core.seq.call(null,inst_25068);
var inst_25070 = inst_25069;
var inst_25071 = null;
var inst_25072 = (0);
var inst_25073 = (0);
var state_25189__$1 = (function (){var statearr_25250 = state_25189;
(statearr_25250[(13)] = inst_25071);

(statearr_25250[(15)] = inst_25072);

(statearr_25250[(16)] = inst_25073);

(statearr_25250[(17)] = inst_25070);

return statearr_25250;
})();
var statearr_25251_25316 = state_25189__$1;
(statearr_25251_25316[(2)] = null);

(statearr_25251_25316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (14))){
var state_25189__$1 = state_25189;
var statearr_25252_25317 = state_25189__$1;
(statearr_25252_25317[(2)] = null);

(statearr_25252_25317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (45))){
var inst_25179 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25253_25318 = state_25189__$1;
(statearr_25253_25318[(2)] = inst_25179);

(statearr_25253_25318[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (26))){
var inst_25121 = (state_25189[(29)]);
var inst_25175 = (state_25189[(2)]);
var inst_25176 = cljs.core.seq.call(null,inst_25121);
var state_25189__$1 = (function (){var statearr_25254 = state_25189;
(statearr_25254[(31)] = inst_25175);

return statearr_25254;
})();
if(inst_25176){
var statearr_25255_25319 = state_25189__$1;
(statearr_25255_25319[(1)] = (42));

} else {
var statearr_25256_25320 = state_25189__$1;
(statearr_25256_25320[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (16))){
var inst_25090 = (state_25189[(7)]);
var inst_25092 = cljs.core.chunked_seq_QMARK_.call(null,inst_25090);
var state_25189__$1 = state_25189;
if(inst_25092){
var statearr_25257_25321 = state_25189__$1;
(statearr_25257_25321[(1)] = (19));

} else {
var statearr_25258_25322 = state_25189__$1;
(statearr_25258_25322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (38))){
var inst_25168 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25259_25323 = state_25189__$1;
(statearr_25259_25323[(2)] = inst_25168);

(statearr_25259_25323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (30))){
var state_25189__$1 = state_25189;
var statearr_25260_25324 = state_25189__$1;
(statearr_25260_25324[(2)] = null);

(statearr_25260_25324[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (10))){
var inst_25071 = (state_25189[(13)]);
var inst_25073 = (state_25189[(16)]);
var inst_25079 = cljs.core._nth.call(null,inst_25071,inst_25073);
var inst_25080 = cljs.core.nth.call(null,inst_25079,(0),null);
var inst_25081 = cljs.core.nth.call(null,inst_25079,(1),null);
var state_25189__$1 = (function (){var statearr_25261 = state_25189;
(statearr_25261[(26)] = inst_25080);

return statearr_25261;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25262_25325 = state_25189__$1;
(statearr_25262_25325[(1)] = (13));

} else {
var statearr_25263_25326 = state_25189__$1;
(statearr_25263_25326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (18))){
var inst_25114 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25264_25327 = state_25189__$1;
(statearr_25264_25327[(2)] = inst_25114);

(statearr_25264_25327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (42))){
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25189__$1,(45),dchan);
} else {
if((state_val_25190 === (37))){
var inst_25157 = (state_25189[(23)]);
var inst_25148 = (state_25189[(25)]);
var inst_25061 = (state_25189[(12)]);
var inst_25157__$1 = cljs.core.first.call(null,inst_25148);
var inst_25158 = cljs.core.async.put_BANG_.call(null,inst_25157__$1,inst_25061,done);
var state_25189__$1 = (function (){var statearr_25265 = state_25189;
(statearr_25265[(23)] = inst_25157__$1);

return statearr_25265;
})();
if(cljs.core.truth_(inst_25158)){
var statearr_25266_25328 = state_25189__$1;
(statearr_25266_25328[(1)] = (39));

} else {
var statearr_25267_25329 = state_25189__$1;
(statearr_25267_25329[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (8))){
var inst_25072 = (state_25189[(15)]);
var inst_25073 = (state_25189[(16)]);
var inst_25075 = (inst_25073 < inst_25072);
var inst_25076 = inst_25075;
var state_25189__$1 = state_25189;
if(cljs.core.truth_(inst_25076)){
var statearr_25268_25330 = state_25189__$1;
(statearr_25268_25330[(1)] = (10));

} else {
var statearr_25269_25331 = state_25189__$1;
(statearr_25269_25331[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__20075__auto___25277,cs,m,dchan,dctr,done))
;
return ((function (switch__20054__auto__,c__20075__auto___25277,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20055__auto__ = null;
var cljs$core$async$mult_$_state_machine__20055__auto____0 = (function (){
var statearr_25273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25273[(0)] = cljs$core$async$mult_$_state_machine__20055__auto__);

(statearr_25273[(1)] = (1));

return statearr_25273;
});
var cljs$core$async$mult_$_state_machine__20055__auto____1 = (function (state_25189){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_25189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e25274){if((e25274 instanceof Object)){
var ex__20058__auto__ = e25274;
var statearr_25275_25332 = state_25189;
(statearr_25275_25332[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25333 = state_25189;
state_25189 = G__25333;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20055__auto__ = function(state_25189){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20055__auto____1.call(this,state_25189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20055__auto____0;
cljs$core$async$mult_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20055__auto____1;
return cljs$core$async$mult_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___25277,cs,m,dchan,dctr,done))
})();
var state__20077__auto__ = (function (){var statearr_25276 = f__20076__auto__.call(null);
(statearr_25276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___25277);

return statearr_25276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___25277,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__25335 = arguments.length;
switch (G__25335) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj25338 = {};
return obj25338;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19127__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19127__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25343){
var map__25344 = p__25343;
var map__25344__$1 = ((cljs.core.seq_QMARK_.call(null,map__25344))?cljs.core.apply.call(null,cljs.core.hash_map,map__25344):map__25344);
var opts = map__25344__$1;
var statearr_25345_25348 = state;
(statearr_25345_25348[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__25344,map__25344__$1,opts){
return (function (val){
var statearr_25346_25349 = state;
(statearr_25346_25349[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25344,map__25344__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_25347_25350 = state;
(statearr_25347_25350[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25339){
var G__25340 = cljs.core.first.call(null,seq25339);
var seq25339__$1 = cljs.core.next.call(null,seq25339);
var G__25341 = cljs.core.first.call(null,seq25339__$1);
var seq25339__$2 = cljs.core.next.call(null,seq25339__$1);
var G__25342 = cljs.core.first.call(null,seq25339__$2);
var seq25339__$3 = cljs.core.next.call(null,seq25339__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25340,G__25341,G__25342,seq25339__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25470 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25470 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25471){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25471 = meta25471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25472,meta25471__$1){
var self__ = this;
var _25472__$1 = this;
return (new cljs.core.async.t25470(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25471__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25472){
var self__ = this;
var _25472__$1 = this;
return self__.meta25471;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25470.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25471","meta25471",-1540967246,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25470.cljs$lang$type = true;

cljs.core.async.t25470.cljs$lang$ctorStr = "cljs.core.async/t25470";

cljs.core.async.t25470.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t25470");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25470 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t25470(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25471){
return (new cljs.core.async.t25470(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25471));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25470(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20075__auto___25589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___25589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___25589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25542){
var state_val_25543 = (state_25542[(1)]);
if((state_val_25543 === (7))){
var inst_25486 = (state_25542[(7)]);
var inst_25491 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25486);
var state_25542__$1 = state_25542;
var statearr_25544_25590 = state_25542__$1;
(statearr_25544_25590[(2)] = inst_25491);

(statearr_25544_25590[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (20))){
var inst_25501 = (state_25542[(8)]);
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25542__$1,(23),out,inst_25501);
} else {
if((state_val_25543 === (1))){
var inst_25476 = (state_25542[(9)]);
var inst_25476__$1 = calc_state.call(null);
var inst_25477 = cljs.core.seq_QMARK_.call(null,inst_25476__$1);
var state_25542__$1 = (function (){var statearr_25545 = state_25542;
(statearr_25545[(9)] = inst_25476__$1);

return statearr_25545;
})();
if(inst_25477){
var statearr_25546_25591 = state_25542__$1;
(statearr_25546_25591[(1)] = (2));

} else {
var statearr_25547_25592 = state_25542__$1;
(statearr_25547_25592[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (24))){
var inst_25494 = (state_25542[(10)]);
var inst_25486 = inst_25494;
var state_25542__$1 = (function (){var statearr_25548 = state_25542;
(statearr_25548[(7)] = inst_25486);

return statearr_25548;
})();
var statearr_25549_25593 = state_25542__$1;
(statearr_25549_25593[(2)] = null);

(statearr_25549_25593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (4))){
var inst_25476 = (state_25542[(9)]);
var inst_25482 = (state_25542[(2)]);
var inst_25483 = cljs.core.get.call(null,inst_25482,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25484 = cljs.core.get.call(null,inst_25482,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25485 = cljs.core.get.call(null,inst_25482,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25486 = inst_25476;
var state_25542__$1 = (function (){var statearr_25550 = state_25542;
(statearr_25550[(7)] = inst_25486);

(statearr_25550[(11)] = inst_25485);

(statearr_25550[(12)] = inst_25483);

(statearr_25550[(13)] = inst_25484);

return statearr_25550;
})();
var statearr_25551_25594 = state_25542__$1;
(statearr_25551_25594[(2)] = null);

(statearr_25551_25594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (15))){
var state_25542__$1 = state_25542;
var statearr_25552_25595 = state_25542__$1;
(statearr_25552_25595[(2)] = null);

(statearr_25552_25595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (21))){
var inst_25494 = (state_25542[(10)]);
var inst_25486 = inst_25494;
var state_25542__$1 = (function (){var statearr_25553 = state_25542;
(statearr_25553[(7)] = inst_25486);

return statearr_25553;
})();
var statearr_25554_25596 = state_25542__$1;
(statearr_25554_25596[(2)] = null);

(statearr_25554_25596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (13))){
var inst_25538 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25555_25597 = state_25542__$1;
(statearr_25555_25597[(2)] = inst_25538);

(statearr_25555_25597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (22))){
var inst_25536 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25556_25598 = state_25542__$1;
(statearr_25556_25598[(2)] = inst_25536);

(statearr_25556_25598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (6))){
var inst_25540 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25542__$1,inst_25540);
} else {
if((state_val_25543 === (25))){
var state_25542__$1 = state_25542;
var statearr_25557_25599 = state_25542__$1;
(statearr_25557_25599[(2)] = null);

(statearr_25557_25599[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (17))){
var inst_25516 = (state_25542[(14)]);
var state_25542__$1 = state_25542;
var statearr_25558_25600 = state_25542__$1;
(statearr_25558_25600[(2)] = inst_25516);

(statearr_25558_25600[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (3))){
var inst_25476 = (state_25542[(9)]);
var state_25542__$1 = state_25542;
var statearr_25559_25601 = state_25542__$1;
(statearr_25559_25601[(2)] = inst_25476);

(statearr_25559_25601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (12))){
var inst_25502 = (state_25542[(15)]);
var inst_25516 = (state_25542[(14)]);
var inst_25495 = (state_25542[(16)]);
var inst_25516__$1 = inst_25495.call(null,inst_25502);
var state_25542__$1 = (function (){var statearr_25560 = state_25542;
(statearr_25560[(14)] = inst_25516__$1);

return statearr_25560;
})();
if(cljs.core.truth_(inst_25516__$1)){
var statearr_25561_25602 = state_25542__$1;
(statearr_25561_25602[(1)] = (17));

} else {
var statearr_25562_25603 = state_25542__$1;
(statearr_25562_25603[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (2))){
var inst_25476 = (state_25542[(9)]);
var inst_25479 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25476);
var state_25542__$1 = state_25542;
var statearr_25563_25604 = state_25542__$1;
(statearr_25563_25604[(2)] = inst_25479);

(statearr_25563_25604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (23))){
var inst_25527 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
if(cljs.core.truth_(inst_25527)){
var statearr_25564_25605 = state_25542__$1;
(statearr_25564_25605[(1)] = (24));

} else {
var statearr_25565_25606 = state_25542__$1;
(statearr_25565_25606[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (19))){
var inst_25524 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
if(cljs.core.truth_(inst_25524)){
var statearr_25566_25607 = state_25542__$1;
(statearr_25566_25607[(1)] = (20));

} else {
var statearr_25567_25608 = state_25542__$1;
(statearr_25567_25608[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (11))){
var inst_25501 = (state_25542[(8)]);
var inst_25507 = (inst_25501 == null);
var state_25542__$1 = state_25542;
if(cljs.core.truth_(inst_25507)){
var statearr_25568_25609 = state_25542__$1;
(statearr_25568_25609[(1)] = (14));

} else {
var statearr_25569_25610 = state_25542__$1;
(statearr_25569_25610[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (9))){
var inst_25494 = (state_25542[(10)]);
var inst_25494__$1 = (state_25542[(2)]);
var inst_25495 = cljs.core.get.call(null,inst_25494__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25496 = cljs.core.get.call(null,inst_25494__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25497 = cljs.core.get.call(null,inst_25494__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25542__$1 = (function (){var statearr_25570 = state_25542;
(statearr_25570[(10)] = inst_25494__$1);

(statearr_25570[(16)] = inst_25495);

(statearr_25570[(17)] = inst_25496);

return statearr_25570;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25542__$1,(10),inst_25497);
} else {
if((state_val_25543 === (5))){
var inst_25486 = (state_25542[(7)]);
var inst_25489 = cljs.core.seq_QMARK_.call(null,inst_25486);
var state_25542__$1 = state_25542;
if(inst_25489){
var statearr_25571_25611 = state_25542__$1;
(statearr_25571_25611[(1)] = (7));

} else {
var statearr_25572_25612 = state_25542__$1;
(statearr_25572_25612[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (14))){
var inst_25502 = (state_25542[(15)]);
var inst_25509 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25502);
var state_25542__$1 = state_25542;
var statearr_25573_25613 = state_25542__$1;
(statearr_25573_25613[(2)] = inst_25509);

(statearr_25573_25613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (26))){
var inst_25532 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25574_25614 = state_25542__$1;
(statearr_25574_25614[(2)] = inst_25532);

(statearr_25574_25614[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (16))){
var inst_25512 = (state_25542[(2)]);
var inst_25513 = calc_state.call(null);
var inst_25486 = inst_25513;
var state_25542__$1 = (function (){var statearr_25575 = state_25542;
(statearr_25575[(7)] = inst_25486);

(statearr_25575[(18)] = inst_25512);

return statearr_25575;
})();
var statearr_25576_25615 = state_25542__$1;
(statearr_25576_25615[(2)] = null);

(statearr_25576_25615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (10))){
var inst_25502 = (state_25542[(15)]);
var inst_25501 = (state_25542[(8)]);
var inst_25500 = (state_25542[(2)]);
var inst_25501__$1 = cljs.core.nth.call(null,inst_25500,(0),null);
var inst_25502__$1 = cljs.core.nth.call(null,inst_25500,(1),null);
var inst_25503 = (inst_25501__$1 == null);
var inst_25504 = cljs.core._EQ_.call(null,inst_25502__$1,change);
var inst_25505 = (inst_25503) || (inst_25504);
var state_25542__$1 = (function (){var statearr_25577 = state_25542;
(statearr_25577[(15)] = inst_25502__$1);

(statearr_25577[(8)] = inst_25501__$1);

return statearr_25577;
})();
if(cljs.core.truth_(inst_25505)){
var statearr_25578_25616 = state_25542__$1;
(statearr_25578_25616[(1)] = (11));

} else {
var statearr_25579_25617 = state_25542__$1;
(statearr_25579_25617[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (18))){
var inst_25502 = (state_25542[(15)]);
var inst_25495 = (state_25542[(16)]);
var inst_25496 = (state_25542[(17)]);
var inst_25519 = cljs.core.empty_QMARK_.call(null,inst_25495);
var inst_25520 = inst_25496.call(null,inst_25502);
var inst_25521 = cljs.core.not.call(null,inst_25520);
var inst_25522 = (inst_25519) && (inst_25521);
var state_25542__$1 = state_25542;
var statearr_25580_25618 = state_25542__$1;
(statearr_25580_25618[(2)] = inst_25522);

(statearr_25580_25618[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25543 === (8))){
var inst_25486 = (state_25542[(7)]);
var state_25542__$1 = state_25542;
var statearr_25581_25619 = state_25542__$1;
(statearr_25581_25619[(2)] = inst_25486);

(statearr_25581_25619[(1)] = (9));


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
});})(c__20075__auto___25589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20054__auto__,c__20075__auto___25589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20055__auto__ = null;
var cljs$core$async$mix_$_state_machine__20055__auto____0 = (function (){
var statearr_25585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25585[(0)] = cljs$core$async$mix_$_state_machine__20055__auto__);

(statearr_25585[(1)] = (1));

return statearr_25585;
});
var cljs$core$async$mix_$_state_machine__20055__auto____1 = (function (state_25542){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_25542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e25586){if((e25586 instanceof Object)){
var ex__20058__auto__ = e25586;
var statearr_25587_25620 = state_25542;
(statearr_25587_25620[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25621 = state_25542;
state_25542 = G__25621;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20055__auto__ = function(state_25542){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20055__auto____1.call(this,state_25542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20055__auto____0;
cljs$core$async$mix_$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20055__auto____1;
return cljs$core$async$mix_$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___25589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20077__auto__ = (function (){var statearr_25588 = f__20076__auto__.call(null);
(statearr_25588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___25589);

return statearr_25588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___25589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj25623 = {};
return obj25623;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__25625 = arguments.length;
switch (G__25625) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__25629 = arguments.length;
switch (G__25629) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18087__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18087__auto__,mults){
return (function (p1__25627_SHARP_){
if(cljs.core.truth_(p1__25627_SHARP_.call(null,topic))){
return p1__25627_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25627_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18087__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25630 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25630 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25631){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25631 = meta25631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25632,meta25631__$1){
var self__ = this;
var _25632__$1 = this;
return (new cljs.core.async.t25630(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25631__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25632){
var self__ = this;
var _25632__$1 = this;
return self__.meta25631;
});})(mults,ensure_mult))
;

cljs.core.async.t25630.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25630.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25630.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25630.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25630.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t25630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t25630.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25630.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25631","meta25631",207888085,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t25630.cljs$lang$type = true;

cljs.core.async.t25630.cljs$lang$ctorStr = "cljs.core.async/t25630";

cljs.core.async.t25630.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t25630");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25630 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t25630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25631){
return (new cljs.core.async.t25630(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25631));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25630(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20075__auto___25753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___25753,mults,ensure_mult,p){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___25753,mults,ensure_mult,p){
return (function (state_25704){
var state_val_25705 = (state_25704[(1)]);
if((state_val_25705 === (7))){
var inst_25700 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25706_25754 = state_25704__$1;
(statearr_25706_25754[(2)] = inst_25700);

(statearr_25706_25754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (20))){
var state_25704__$1 = state_25704;
var statearr_25707_25755 = state_25704__$1;
(statearr_25707_25755[(2)] = null);

(statearr_25707_25755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (1))){
var state_25704__$1 = state_25704;
var statearr_25708_25756 = state_25704__$1;
(statearr_25708_25756[(2)] = null);

(statearr_25708_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (24))){
var inst_25683 = (state_25704[(7)]);
var inst_25692 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25683);
var state_25704__$1 = state_25704;
var statearr_25709_25757 = state_25704__$1;
(statearr_25709_25757[(2)] = inst_25692);

(statearr_25709_25757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (4))){
var inst_25635 = (state_25704[(8)]);
var inst_25635__$1 = (state_25704[(2)]);
var inst_25636 = (inst_25635__$1 == null);
var state_25704__$1 = (function (){var statearr_25710 = state_25704;
(statearr_25710[(8)] = inst_25635__$1);

return statearr_25710;
})();
if(cljs.core.truth_(inst_25636)){
var statearr_25711_25758 = state_25704__$1;
(statearr_25711_25758[(1)] = (5));

} else {
var statearr_25712_25759 = state_25704__$1;
(statearr_25712_25759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (15))){
var inst_25677 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25713_25760 = state_25704__$1;
(statearr_25713_25760[(2)] = inst_25677);

(statearr_25713_25760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (21))){
var inst_25697 = (state_25704[(2)]);
var state_25704__$1 = (function (){var statearr_25714 = state_25704;
(statearr_25714[(9)] = inst_25697);

return statearr_25714;
})();
var statearr_25715_25761 = state_25704__$1;
(statearr_25715_25761[(2)] = null);

(statearr_25715_25761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (13))){
var inst_25659 = (state_25704[(10)]);
var inst_25661 = cljs.core.chunked_seq_QMARK_.call(null,inst_25659);
var state_25704__$1 = state_25704;
if(inst_25661){
var statearr_25716_25762 = state_25704__$1;
(statearr_25716_25762[(1)] = (16));

} else {
var statearr_25717_25763 = state_25704__$1;
(statearr_25717_25763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (22))){
var inst_25689 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
if(cljs.core.truth_(inst_25689)){
var statearr_25718_25764 = state_25704__$1;
(statearr_25718_25764[(1)] = (23));

} else {
var statearr_25719_25765 = state_25704__$1;
(statearr_25719_25765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (6))){
var inst_25685 = (state_25704[(11)]);
var inst_25635 = (state_25704[(8)]);
var inst_25683 = (state_25704[(7)]);
var inst_25683__$1 = topic_fn.call(null,inst_25635);
var inst_25684 = cljs.core.deref.call(null,mults);
var inst_25685__$1 = cljs.core.get.call(null,inst_25684,inst_25683__$1);
var state_25704__$1 = (function (){var statearr_25720 = state_25704;
(statearr_25720[(11)] = inst_25685__$1);

(statearr_25720[(7)] = inst_25683__$1);

return statearr_25720;
})();
if(cljs.core.truth_(inst_25685__$1)){
var statearr_25721_25766 = state_25704__$1;
(statearr_25721_25766[(1)] = (19));

} else {
var statearr_25722_25767 = state_25704__$1;
(statearr_25722_25767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (25))){
var inst_25694 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25723_25768 = state_25704__$1;
(statearr_25723_25768[(2)] = inst_25694);

(statearr_25723_25768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (17))){
var inst_25659 = (state_25704[(10)]);
var inst_25668 = cljs.core.first.call(null,inst_25659);
var inst_25669 = cljs.core.async.muxch_STAR_.call(null,inst_25668);
var inst_25670 = cljs.core.async.close_BANG_.call(null,inst_25669);
var inst_25671 = cljs.core.next.call(null,inst_25659);
var inst_25645 = inst_25671;
var inst_25646 = null;
var inst_25647 = (0);
var inst_25648 = (0);
var state_25704__$1 = (function (){var statearr_25724 = state_25704;
(statearr_25724[(12)] = inst_25647);

(statearr_25724[(13)] = inst_25648);

(statearr_25724[(14)] = inst_25646);

(statearr_25724[(15)] = inst_25645);

(statearr_25724[(16)] = inst_25670);

return statearr_25724;
})();
var statearr_25725_25769 = state_25704__$1;
(statearr_25725_25769[(2)] = null);

(statearr_25725_25769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (3))){
var inst_25702 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25704__$1,inst_25702);
} else {
if((state_val_25705 === (12))){
var inst_25679 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25726_25770 = state_25704__$1;
(statearr_25726_25770[(2)] = inst_25679);

(statearr_25726_25770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (2))){
var state_25704__$1 = state_25704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25704__$1,(4),ch);
} else {
if((state_val_25705 === (23))){
var state_25704__$1 = state_25704;
var statearr_25727_25771 = state_25704__$1;
(statearr_25727_25771[(2)] = null);

(statearr_25727_25771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (19))){
var inst_25685 = (state_25704[(11)]);
var inst_25635 = (state_25704[(8)]);
var inst_25687 = cljs.core.async.muxch_STAR_.call(null,inst_25685);
var state_25704__$1 = state_25704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25704__$1,(22),inst_25687,inst_25635);
} else {
if((state_val_25705 === (11))){
var inst_25645 = (state_25704[(15)]);
var inst_25659 = (state_25704[(10)]);
var inst_25659__$1 = cljs.core.seq.call(null,inst_25645);
var state_25704__$1 = (function (){var statearr_25728 = state_25704;
(statearr_25728[(10)] = inst_25659__$1);

return statearr_25728;
})();
if(inst_25659__$1){
var statearr_25729_25772 = state_25704__$1;
(statearr_25729_25772[(1)] = (13));

} else {
var statearr_25730_25773 = state_25704__$1;
(statearr_25730_25773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (9))){
var inst_25681 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25731_25774 = state_25704__$1;
(statearr_25731_25774[(2)] = inst_25681);

(statearr_25731_25774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (5))){
var inst_25642 = cljs.core.deref.call(null,mults);
var inst_25643 = cljs.core.vals.call(null,inst_25642);
var inst_25644 = cljs.core.seq.call(null,inst_25643);
var inst_25645 = inst_25644;
var inst_25646 = null;
var inst_25647 = (0);
var inst_25648 = (0);
var state_25704__$1 = (function (){var statearr_25732 = state_25704;
(statearr_25732[(12)] = inst_25647);

(statearr_25732[(13)] = inst_25648);

(statearr_25732[(14)] = inst_25646);

(statearr_25732[(15)] = inst_25645);

return statearr_25732;
})();
var statearr_25733_25775 = state_25704__$1;
(statearr_25733_25775[(2)] = null);

(statearr_25733_25775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (14))){
var state_25704__$1 = state_25704;
var statearr_25737_25776 = state_25704__$1;
(statearr_25737_25776[(2)] = null);

(statearr_25737_25776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (16))){
var inst_25659 = (state_25704[(10)]);
var inst_25663 = cljs.core.chunk_first.call(null,inst_25659);
var inst_25664 = cljs.core.chunk_rest.call(null,inst_25659);
var inst_25665 = cljs.core.count.call(null,inst_25663);
var inst_25645 = inst_25664;
var inst_25646 = inst_25663;
var inst_25647 = inst_25665;
var inst_25648 = (0);
var state_25704__$1 = (function (){var statearr_25738 = state_25704;
(statearr_25738[(12)] = inst_25647);

(statearr_25738[(13)] = inst_25648);

(statearr_25738[(14)] = inst_25646);

(statearr_25738[(15)] = inst_25645);

return statearr_25738;
})();
var statearr_25739_25777 = state_25704__$1;
(statearr_25739_25777[(2)] = null);

(statearr_25739_25777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (10))){
var inst_25647 = (state_25704[(12)]);
var inst_25648 = (state_25704[(13)]);
var inst_25646 = (state_25704[(14)]);
var inst_25645 = (state_25704[(15)]);
var inst_25653 = cljs.core._nth.call(null,inst_25646,inst_25648);
var inst_25654 = cljs.core.async.muxch_STAR_.call(null,inst_25653);
var inst_25655 = cljs.core.async.close_BANG_.call(null,inst_25654);
var inst_25656 = (inst_25648 + (1));
var tmp25734 = inst_25647;
var tmp25735 = inst_25646;
var tmp25736 = inst_25645;
var inst_25645__$1 = tmp25736;
var inst_25646__$1 = tmp25735;
var inst_25647__$1 = tmp25734;
var inst_25648__$1 = inst_25656;
var state_25704__$1 = (function (){var statearr_25740 = state_25704;
(statearr_25740[(12)] = inst_25647__$1);

(statearr_25740[(13)] = inst_25648__$1);

(statearr_25740[(17)] = inst_25655);

(statearr_25740[(14)] = inst_25646__$1);

(statearr_25740[(15)] = inst_25645__$1);

return statearr_25740;
})();
var statearr_25741_25778 = state_25704__$1;
(statearr_25741_25778[(2)] = null);

(statearr_25741_25778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (18))){
var inst_25674 = (state_25704[(2)]);
var state_25704__$1 = state_25704;
var statearr_25742_25779 = state_25704__$1;
(statearr_25742_25779[(2)] = inst_25674);

(statearr_25742_25779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25705 === (8))){
var inst_25647 = (state_25704[(12)]);
var inst_25648 = (state_25704[(13)]);
var inst_25650 = (inst_25648 < inst_25647);
var inst_25651 = inst_25650;
var state_25704__$1 = state_25704;
if(cljs.core.truth_(inst_25651)){
var statearr_25743_25780 = state_25704__$1;
(statearr_25743_25780[(1)] = (10));

} else {
var statearr_25744_25781 = state_25704__$1;
(statearr_25744_25781[(1)] = (11));

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
});})(c__20075__auto___25753,mults,ensure_mult,p))
;
return ((function (switch__20054__auto__,c__20075__auto___25753,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_25748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25748[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_25748[(1)] = (1));

return statearr_25748;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_25704){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_25704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e25749){if((e25749 instanceof Object)){
var ex__20058__auto__ = e25749;
var statearr_25750_25782 = state_25704;
(statearr_25750_25782[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25783 = state_25704;
state_25704 = G__25783;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_25704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_25704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___25753,mults,ensure_mult,p))
})();
var state__20077__auto__ = (function (){var statearr_25751 = f__20076__auto__.call(null);
(statearr_25751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___25753);

return statearr_25751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___25753,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__25785 = arguments.length;
switch (G__25785) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__25788 = arguments.length;
switch (G__25788) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__25791 = arguments.length;
switch (G__25791) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20075__auto___25861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25830){
var state_val_25831 = (state_25830[(1)]);
if((state_val_25831 === (7))){
var state_25830__$1 = state_25830;
var statearr_25832_25862 = state_25830__$1;
(statearr_25832_25862[(2)] = null);

(statearr_25832_25862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (1))){
var state_25830__$1 = state_25830;
var statearr_25833_25863 = state_25830__$1;
(statearr_25833_25863[(2)] = null);

(statearr_25833_25863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (4))){
var inst_25794 = (state_25830[(7)]);
var inst_25796 = (inst_25794 < cnt);
var state_25830__$1 = state_25830;
if(cljs.core.truth_(inst_25796)){
var statearr_25834_25864 = state_25830__$1;
(statearr_25834_25864[(1)] = (6));

} else {
var statearr_25835_25865 = state_25830__$1;
(statearr_25835_25865[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (15))){
var inst_25826 = (state_25830[(2)]);
var state_25830__$1 = state_25830;
var statearr_25836_25866 = state_25830__$1;
(statearr_25836_25866[(2)] = inst_25826);

(statearr_25836_25866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (13))){
var inst_25819 = cljs.core.async.close_BANG_.call(null,out);
var state_25830__$1 = state_25830;
var statearr_25837_25867 = state_25830__$1;
(statearr_25837_25867[(2)] = inst_25819);

(statearr_25837_25867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (6))){
var state_25830__$1 = state_25830;
var statearr_25838_25868 = state_25830__$1;
(statearr_25838_25868[(2)] = null);

(statearr_25838_25868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (3))){
var inst_25828 = (state_25830[(2)]);
var state_25830__$1 = state_25830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25830__$1,inst_25828);
} else {
if((state_val_25831 === (12))){
var inst_25816 = (state_25830[(8)]);
var inst_25816__$1 = (state_25830[(2)]);
var inst_25817 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25816__$1);
var state_25830__$1 = (function (){var statearr_25839 = state_25830;
(statearr_25839[(8)] = inst_25816__$1);

return statearr_25839;
})();
if(cljs.core.truth_(inst_25817)){
var statearr_25840_25869 = state_25830__$1;
(statearr_25840_25869[(1)] = (13));

} else {
var statearr_25841_25870 = state_25830__$1;
(statearr_25841_25870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (2))){
var inst_25793 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25794 = (0);
var state_25830__$1 = (function (){var statearr_25842 = state_25830;
(statearr_25842[(9)] = inst_25793);

(statearr_25842[(7)] = inst_25794);

return statearr_25842;
})();
var statearr_25843_25871 = state_25830__$1;
(statearr_25843_25871[(2)] = null);

(statearr_25843_25871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (11))){
var inst_25794 = (state_25830[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25830,(10),Object,null,(9));
var inst_25803 = chs__$1.call(null,inst_25794);
var inst_25804 = done.call(null,inst_25794);
var inst_25805 = cljs.core.async.take_BANG_.call(null,inst_25803,inst_25804);
var state_25830__$1 = state_25830;
var statearr_25844_25872 = state_25830__$1;
(statearr_25844_25872[(2)] = inst_25805);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25830__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (9))){
var inst_25794 = (state_25830[(7)]);
var inst_25807 = (state_25830[(2)]);
var inst_25808 = (inst_25794 + (1));
var inst_25794__$1 = inst_25808;
var state_25830__$1 = (function (){var statearr_25845 = state_25830;
(statearr_25845[(10)] = inst_25807);

(statearr_25845[(7)] = inst_25794__$1);

return statearr_25845;
})();
var statearr_25846_25873 = state_25830__$1;
(statearr_25846_25873[(2)] = null);

(statearr_25846_25873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (5))){
var inst_25814 = (state_25830[(2)]);
var state_25830__$1 = (function (){var statearr_25847 = state_25830;
(statearr_25847[(11)] = inst_25814);

return statearr_25847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25830__$1,(12),dchan);
} else {
if((state_val_25831 === (14))){
var inst_25816 = (state_25830[(8)]);
var inst_25821 = cljs.core.apply.call(null,f,inst_25816);
var state_25830__$1 = state_25830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25830__$1,(16),out,inst_25821);
} else {
if((state_val_25831 === (16))){
var inst_25823 = (state_25830[(2)]);
var state_25830__$1 = (function (){var statearr_25848 = state_25830;
(statearr_25848[(12)] = inst_25823);

return statearr_25848;
})();
var statearr_25849_25874 = state_25830__$1;
(statearr_25849_25874[(2)] = null);

(statearr_25849_25874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (10))){
var inst_25798 = (state_25830[(2)]);
var inst_25799 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25830__$1 = (function (){var statearr_25850 = state_25830;
(statearr_25850[(13)] = inst_25798);

return statearr_25850;
})();
var statearr_25851_25875 = state_25830__$1;
(statearr_25851_25875[(2)] = inst_25799);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25830__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25831 === (8))){
var inst_25812 = (state_25830[(2)]);
var state_25830__$1 = state_25830;
var statearr_25852_25876 = state_25830__$1;
(statearr_25852_25876[(2)] = inst_25812);

(statearr_25852_25876[(1)] = (5));


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
});})(c__20075__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20054__auto__,c__20075__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_25856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25856[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_25856[(1)] = (1));

return statearr_25856;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_25830){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_25830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e25857){if((e25857 instanceof Object)){
var ex__20058__auto__ = e25857;
var statearr_25858_25877 = state_25830;
(statearr_25858_25877[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25878 = state_25830;
state_25830 = G__25878;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_25830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_25830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20077__auto__ = (function (){var statearr_25859 = f__20076__auto__.call(null);
(statearr_25859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___25861);

return statearr_25859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___25861,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__25881 = arguments.length;
switch (G__25881) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20075__auto___25936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___25936,out){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___25936,out){
return (function (state_25911){
var state_val_25912 = (state_25911[(1)]);
if((state_val_25912 === (7))){
var inst_25890 = (state_25911[(7)]);
var inst_25891 = (state_25911[(8)]);
var inst_25890__$1 = (state_25911[(2)]);
var inst_25891__$1 = cljs.core.nth.call(null,inst_25890__$1,(0),null);
var inst_25892 = cljs.core.nth.call(null,inst_25890__$1,(1),null);
var inst_25893 = (inst_25891__$1 == null);
var state_25911__$1 = (function (){var statearr_25913 = state_25911;
(statearr_25913[(9)] = inst_25892);

(statearr_25913[(7)] = inst_25890__$1);

(statearr_25913[(8)] = inst_25891__$1);

return statearr_25913;
})();
if(cljs.core.truth_(inst_25893)){
var statearr_25914_25937 = state_25911__$1;
(statearr_25914_25937[(1)] = (8));

} else {
var statearr_25915_25938 = state_25911__$1;
(statearr_25915_25938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (1))){
var inst_25882 = cljs.core.vec.call(null,chs);
var inst_25883 = inst_25882;
var state_25911__$1 = (function (){var statearr_25916 = state_25911;
(statearr_25916[(10)] = inst_25883);

return statearr_25916;
})();
var statearr_25917_25939 = state_25911__$1;
(statearr_25917_25939[(2)] = null);

(statearr_25917_25939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (4))){
var inst_25883 = (state_25911[(10)]);
var state_25911__$1 = state_25911;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25911__$1,(7),inst_25883);
} else {
if((state_val_25912 === (6))){
var inst_25907 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25918_25940 = state_25911__$1;
(statearr_25918_25940[(2)] = inst_25907);

(statearr_25918_25940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (3))){
var inst_25909 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25911__$1,inst_25909);
} else {
if((state_val_25912 === (2))){
var inst_25883 = (state_25911[(10)]);
var inst_25885 = cljs.core.count.call(null,inst_25883);
var inst_25886 = (inst_25885 > (0));
var state_25911__$1 = state_25911;
if(cljs.core.truth_(inst_25886)){
var statearr_25920_25941 = state_25911__$1;
(statearr_25920_25941[(1)] = (4));

} else {
var statearr_25921_25942 = state_25911__$1;
(statearr_25921_25942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (11))){
var inst_25883 = (state_25911[(10)]);
var inst_25900 = (state_25911[(2)]);
var tmp25919 = inst_25883;
var inst_25883__$1 = tmp25919;
var state_25911__$1 = (function (){var statearr_25922 = state_25911;
(statearr_25922[(10)] = inst_25883__$1);

(statearr_25922[(11)] = inst_25900);

return statearr_25922;
})();
var statearr_25923_25943 = state_25911__$1;
(statearr_25923_25943[(2)] = null);

(statearr_25923_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (9))){
var inst_25891 = (state_25911[(8)]);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25911__$1,(11),out,inst_25891);
} else {
if((state_val_25912 === (5))){
var inst_25905 = cljs.core.async.close_BANG_.call(null,out);
var state_25911__$1 = state_25911;
var statearr_25924_25944 = state_25911__$1;
(statearr_25924_25944[(2)] = inst_25905);

(statearr_25924_25944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (10))){
var inst_25903 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25925_25945 = state_25911__$1;
(statearr_25925_25945[(2)] = inst_25903);

(statearr_25925_25945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (8))){
var inst_25892 = (state_25911[(9)]);
var inst_25883 = (state_25911[(10)]);
var inst_25890 = (state_25911[(7)]);
var inst_25891 = (state_25911[(8)]);
var inst_25895 = (function (){var cs = inst_25883;
var vec__25888 = inst_25890;
var v = inst_25891;
var c = inst_25892;
return ((function (cs,vec__25888,v,c,inst_25892,inst_25883,inst_25890,inst_25891,state_val_25912,c__20075__auto___25936,out){
return (function (p1__25879_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25879_SHARP_);
});
;})(cs,vec__25888,v,c,inst_25892,inst_25883,inst_25890,inst_25891,state_val_25912,c__20075__auto___25936,out))
})();
var inst_25896 = cljs.core.filterv.call(null,inst_25895,inst_25883);
var inst_25883__$1 = inst_25896;
var state_25911__$1 = (function (){var statearr_25926 = state_25911;
(statearr_25926[(10)] = inst_25883__$1);

return statearr_25926;
})();
var statearr_25927_25946 = state_25911__$1;
(statearr_25927_25946[(2)] = null);

(statearr_25927_25946[(1)] = (2));


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
});})(c__20075__auto___25936,out))
;
return ((function (switch__20054__auto__,c__20075__auto___25936,out){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_25931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25931[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_25931[(1)] = (1));

return statearr_25931;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_25911){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_25911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e25932){if((e25932 instanceof Object)){
var ex__20058__auto__ = e25932;
var statearr_25933_25947 = state_25911;
(statearr_25933_25947[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25948 = state_25911;
state_25911 = G__25948;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_25911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_25911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___25936,out))
})();
var state__20077__auto__ = (function (){var statearr_25934 = f__20076__auto__.call(null);
(statearr_25934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___25936);

return statearr_25934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___25936,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__25950 = arguments.length;
switch (G__25950) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20075__auto___25998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___25998,out){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___25998,out){
return (function (state_25974){
var state_val_25975 = (state_25974[(1)]);
if((state_val_25975 === (7))){
var inst_25956 = (state_25974[(7)]);
var inst_25956__$1 = (state_25974[(2)]);
var inst_25957 = (inst_25956__$1 == null);
var inst_25958 = cljs.core.not.call(null,inst_25957);
var state_25974__$1 = (function (){var statearr_25976 = state_25974;
(statearr_25976[(7)] = inst_25956__$1);

return statearr_25976;
})();
if(inst_25958){
var statearr_25977_25999 = state_25974__$1;
(statearr_25977_25999[(1)] = (8));

} else {
var statearr_25978_26000 = state_25974__$1;
(statearr_25978_26000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (1))){
var inst_25951 = (0);
var state_25974__$1 = (function (){var statearr_25979 = state_25974;
(statearr_25979[(8)] = inst_25951);

return statearr_25979;
})();
var statearr_25980_26001 = state_25974__$1;
(statearr_25980_26001[(2)] = null);

(statearr_25980_26001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (4))){
var state_25974__$1 = state_25974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25974__$1,(7),ch);
} else {
if((state_val_25975 === (6))){
var inst_25969 = (state_25974[(2)]);
var state_25974__$1 = state_25974;
var statearr_25981_26002 = state_25974__$1;
(statearr_25981_26002[(2)] = inst_25969);

(statearr_25981_26002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (3))){
var inst_25971 = (state_25974[(2)]);
var inst_25972 = cljs.core.async.close_BANG_.call(null,out);
var state_25974__$1 = (function (){var statearr_25982 = state_25974;
(statearr_25982[(9)] = inst_25971);

return statearr_25982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25974__$1,inst_25972);
} else {
if((state_val_25975 === (2))){
var inst_25951 = (state_25974[(8)]);
var inst_25953 = (inst_25951 < n);
var state_25974__$1 = state_25974;
if(cljs.core.truth_(inst_25953)){
var statearr_25983_26003 = state_25974__$1;
(statearr_25983_26003[(1)] = (4));

} else {
var statearr_25984_26004 = state_25974__$1;
(statearr_25984_26004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (11))){
var inst_25951 = (state_25974[(8)]);
var inst_25961 = (state_25974[(2)]);
var inst_25962 = (inst_25951 + (1));
var inst_25951__$1 = inst_25962;
var state_25974__$1 = (function (){var statearr_25985 = state_25974;
(statearr_25985[(10)] = inst_25961);

(statearr_25985[(8)] = inst_25951__$1);

return statearr_25985;
})();
var statearr_25986_26005 = state_25974__$1;
(statearr_25986_26005[(2)] = null);

(statearr_25986_26005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (9))){
var state_25974__$1 = state_25974;
var statearr_25987_26006 = state_25974__$1;
(statearr_25987_26006[(2)] = null);

(statearr_25987_26006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (5))){
var state_25974__$1 = state_25974;
var statearr_25988_26007 = state_25974__$1;
(statearr_25988_26007[(2)] = null);

(statearr_25988_26007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (10))){
var inst_25966 = (state_25974[(2)]);
var state_25974__$1 = state_25974;
var statearr_25989_26008 = state_25974__$1;
(statearr_25989_26008[(2)] = inst_25966);

(statearr_25989_26008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25975 === (8))){
var inst_25956 = (state_25974[(7)]);
var state_25974__$1 = state_25974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25974__$1,(11),out,inst_25956);
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
});})(c__20075__auto___25998,out))
;
return ((function (switch__20054__auto__,c__20075__auto___25998,out){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_25993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25993[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_25993[(1)] = (1));

return statearr_25993;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_25974){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_25974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e25994){if((e25994 instanceof Object)){
var ex__20058__auto__ = e25994;
var statearr_25995_26009 = state_25974;
(statearr_25995_26009[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26010 = state_25974;
state_25974 = G__26010;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_25974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_25974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___25998,out))
})();
var state__20077__auto__ = (function (){var statearr_25996 = f__20076__auto__.call(null);
(statearr_25996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___25998);

return statearr_25996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___25998,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t26018 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26018 = (function (map_LT_,f,ch,meta26019){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26019 = meta26019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26020,meta26019__$1){
var self__ = this;
var _26020__$1 = this;
return (new cljs.core.async.t26018(self__.map_LT_,self__.f,self__.ch,meta26019__$1));
});

cljs.core.async.t26018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26020){
var self__ = this;
var _26020__$1 = this;
return self__.meta26019;
});

cljs.core.async.t26018.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26018.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26018.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26021 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26021 = (function (map_LT_,f,ch,meta26019,_,fn1,meta26022){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26019 = meta26019;
this._ = _;
this.fn1 = fn1;
this.meta26022 = meta26022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26023,meta26022__$1){
var self__ = this;
var _26023__$1 = this;
return (new cljs.core.async.t26021(self__.map_LT_,self__.f,self__.ch,self__.meta26019,self__._,self__.fn1,meta26022__$1));
});})(___$1))
;

cljs.core.async.t26021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26023){
var self__ = this;
var _26023__$1 = this;
return self__.meta26022;
});})(___$1))
;

cljs.core.async.t26021.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26011_SHARP_){
return f1.call(null,(((p1__26011_SHARP_ == null))?null:self__.f.call(null,p1__26011_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26021.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26019","meta26019",-186220655,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26022","meta26022",-280868498,null)], null);
});})(___$1))
;

cljs.core.async.t26021.cljs$lang$type = true;

cljs.core.async.t26021.cljs$lang$ctorStr = "cljs.core.async/t26021";

cljs.core.async.t26021.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t26021");
});})(___$1))
;

cljs.core.async.__GT_t26021 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26021(map_LT___$1,f__$1,ch__$1,meta26019__$1,___$2,fn1__$1,meta26022){
return (new cljs.core.async.t26021(map_LT___$1,f__$1,ch__$1,meta26019__$1,___$2,fn1__$1,meta26022));
});})(___$1))
;

}

return (new cljs.core.async.t26021(self__.map_LT_,self__.f,self__.ch,self__.meta26019,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18075__auto__ = ret;
if(cljs.core.truth_(and__18075__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18075__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26018.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26019","meta26019",-186220655,null)], null);
});

cljs.core.async.t26018.cljs$lang$type = true;

cljs.core.async.t26018.cljs$lang$ctorStr = "cljs.core.async/t26018";

cljs.core.async.t26018.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t26018");
});

cljs.core.async.__GT_t26018 = (function cljs$core$async$map_LT__$___GT_t26018(map_LT___$1,f__$1,ch__$1,meta26019){
return (new cljs.core.async.t26018(map_LT___$1,f__$1,ch__$1,meta26019));
});

}

return (new cljs.core.async.t26018(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t26027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26027 = (function (map_GT_,f,ch,meta26028){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26028 = meta26028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26029,meta26028__$1){
var self__ = this;
var _26029__$1 = this;
return (new cljs.core.async.t26027(self__.map_GT_,self__.f,self__.ch,meta26028__$1));
});

cljs.core.async.t26027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26029){
var self__ = this;
var _26029__$1 = this;
return self__.meta26028;
});

cljs.core.async.t26027.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26027.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26027.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26028","meta26028",487837655,null)], null);
});

cljs.core.async.t26027.cljs$lang$type = true;

cljs.core.async.t26027.cljs$lang$ctorStr = "cljs.core.async/t26027";

cljs.core.async.t26027.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t26027");
});

cljs.core.async.__GT_t26027 = (function cljs$core$async$map_GT__$___GT_t26027(map_GT___$1,f__$1,ch__$1,meta26028){
return (new cljs.core.async.t26027(map_GT___$1,f__$1,ch__$1,meta26028));
});

}

return (new cljs.core.async.t26027(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t26033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26033 = (function (filter_GT_,p,ch,meta26034){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26034 = meta26034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26035,meta26034__$1){
var self__ = this;
var _26035__$1 = this;
return (new cljs.core.async.t26033(self__.filter_GT_,self__.p,self__.ch,meta26034__$1));
});

cljs.core.async.t26033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26035){
var self__ = this;
var _26035__$1 = this;
return self__.meta26034;
});

cljs.core.async.t26033.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26033.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26033.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26034","meta26034",794176983,null)], null);
});

cljs.core.async.t26033.cljs$lang$type = true;

cljs.core.async.t26033.cljs$lang$ctorStr = "cljs.core.async/t26033";

cljs.core.async.t26033.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t26033");
});

cljs.core.async.__GT_t26033 = (function cljs$core$async$filter_GT__$___GT_t26033(filter_GT___$1,p__$1,ch__$1,meta26034){
return (new cljs.core.async.t26033(filter_GT___$1,p__$1,ch__$1,meta26034));
});

}

return (new cljs.core.async.t26033(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__26037 = arguments.length;
switch (G__26037) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20075__auto___26080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___26080,out){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___26080,out){
return (function (state_26058){
var state_val_26059 = (state_26058[(1)]);
if((state_val_26059 === (7))){
var inst_26054 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26060_26081 = state_26058__$1;
(statearr_26060_26081[(2)] = inst_26054);

(statearr_26060_26081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (1))){
var state_26058__$1 = state_26058;
var statearr_26061_26082 = state_26058__$1;
(statearr_26061_26082[(2)] = null);

(statearr_26061_26082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (4))){
var inst_26040 = (state_26058[(7)]);
var inst_26040__$1 = (state_26058[(2)]);
var inst_26041 = (inst_26040__$1 == null);
var state_26058__$1 = (function (){var statearr_26062 = state_26058;
(statearr_26062[(7)] = inst_26040__$1);

return statearr_26062;
})();
if(cljs.core.truth_(inst_26041)){
var statearr_26063_26083 = state_26058__$1;
(statearr_26063_26083[(1)] = (5));

} else {
var statearr_26064_26084 = state_26058__$1;
(statearr_26064_26084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (6))){
var inst_26040 = (state_26058[(7)]);
var inst_26045 = p.call(null,inst_26040);
var state_26058__$1 = state_26058;
if(cljs.core.truth_(inst_26045)){
var statearr_26065_26085 = state_26058__$1;
(statearr_26065_26085[(1)] = (8));

} else {
var statearr_26066_26086 = state_26058__$1;
(statearr_26066_26086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (3))){
var inst_26056 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26058__$1,inst_26056);
} else {
if((state_val_26059 === (2))){
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26058__$1,(4),ch);
} else {
if((state_val_26059 === (11))){
var inst_26048 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26067_26087 = state_26058__$1;
(statearr_26067_26087[(2)] = inst_26048);

(statearr_26067_26087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (9))){
var state_26058__$1 = state_26058;
var statearr_26068_26088 = state_26058__$1;
(statearr_26068_26088[(2)] = null);

(statearr_26068_26088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (5))){
var inst_26043 = cljs.core.async.close_BANG_.call(null,out);
var state_26058__$1 = state_26058;
var statearr_26069_26089 = state_26058__$1;
(statearr_26069_26089[(2)] = inst_26043);

(statearr_26069_26089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (10))){
var inst_26051 = (state_26058[(2)]);
var state_26058__$1 = (function (){var statearr_26070 = state_26058;
(statearr_26070[(8)] = inst_26051);

return statearr_26070;
})();
var statearr_26071_26090 = state_26058__$1;
(statearr_26071_26090[(2)] = null);

(statearr_26071_26090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (8))){
var inst_26040 = (state_26058[(7)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26058__$1,(11),out,inst_26040);
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
});})(c__20075__auto___26080,out))
;
return ((function (switch__20054__auto__,c__20075__auto___26080,out){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_26075 = [null,null,null,null,null,null,null,null,null];
(statearr_26075[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_26075[(1)] = (1));

return statearr_26075;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_26058){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_26058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e26076){if((e26076 instanceof Object)){
var ex__20058__auto__ = e26076;
var statearr_26077_26091 = state_26058;
(statearr_26077_26091[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26092 = state_26058;
state_26058 = G__26092;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_26058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_26058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___26080,out))
})();
var state__20077__auto__ = (function (){var statearr_26078 = f__20076__auto__.call(null);
(statearr_26078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___26080);

return statearr_26078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___26080,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__26094 = arguments.length;
switch (G__26094) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto__){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto__){
return (function (state_26261){
var state_val_26262 = (state_26261[(1)]);
if((state_val_26262 === (7))){
var inst_26257 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
var statearr_26263_26304 = state_26261__$1;
(statearr_26263_26304[(2)] = inst_26257);

(statearr_26263_26304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (20))){
var inst_26227 = (state_26261[(7)]);
var inst_26238 = (state_26261[(2)]);
var inst_26239 = cljs.core.next.call(null,inst_26227);
var inst_26213 = inst_26239;
var inst_26214 = null;
var inst_26215 = (0);
var inst_26216 = (0);
var state_26261__$1 = (function (){var statearr_26264 = state_26261;
(statearr_26264[(8)] = inst_26216);

(statearr_26264[(9)] = inst_26238);

(statearr_26264[(10)] = inst_26215);

(statearr_26264[(11)] = inst_26214);

(statearr_26264[(12)] = inst_26213);

return statearr_26264;
})();
var statearr_26265_26305 = state_26261__$1;
(statearr_26265_26305[(2)] = null);

(statearr_26265_26305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (1))){
var state_26261__$1 = state_26261;
var statearr_26266_26306 = state_26261__$1;
(statearr_26266_26306[(2)] = null);

(statearr_26266_26306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (4))){
var inst_26202 = (state_26261[(13)]);
var inst_26202__$1 = (state_26261[(2)]);
var inst_26203 = (inst_26202__$1 == null);
var state_26261__$1 = (function (){var statearr_26267 = state_26261;
(statearr_26267[(13)] = inst_26202__$1);

return statearr_26267;
})();
if(cljs.core.truth_(inst_26203)){
var statearr_26268_26307 = state_26261__$1;
(statearr_26268_26307[(1)] = (5));

} else {
var statearr_26269_26308 = state_26261__$1;
(statearr_26269_26308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (15))){
var state_26261__$1 = state_26261;
var statearr_26273_26309 = state_26261__$1;
(statearr_26273_26309[(2)] = null);

(statearr_26273_26309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (21))){
var state_26261__$1 = state_26261;
var statearr_26274_26310 = state_26261__$1;
(statearr_26274_26310[(2)] = null);

(statearr_26274_26310[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (13))){
var inst_26216 = (state_26261[(8)]);
var inst_26215 = (state_26261[(10)]);
var inst_26214 = (state_26261[(11)]);
var inst_26213 = (state_26261[(12)]);
var inst_26223 = (state_26261[(2)]);
var inst_26224 = (inst_26216 + (1));
var tmp26270 = inst_26215;
var tmp26271 = inst_26214;
var tmp26272 = inst_26213;
var inst_26213__$1 = tmp26272;
var inst_26214__$1 = tmp26271;
var inst_26215__$1 = tmp26270;
var inst_26216__$1 = inst_26224;
var state_26261__$1 = (function (){var statearr_26275 = state_26261;
(statearr_26275[(8)] = inst_26216__$1);

(statearr_26275[(10)] = inst_26215__$1);

(statearr_26275[(14)] = inst_26223);

(statearr_26275[(11)] = inst_26214__$1);

(statearr_26275[(12)] = inst_26213__$1);

return statearr_26275;
})();
var statearr_26276_26311 = state_26261__$1;
(statearr_26276_26311[(2)] = null);

(statearr_26276_26311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (22))){
var state_26261__$1 = state_26261;
var statearr_26277_26312 = state_26261__$1;
(statearr_26277_26312[(2)] = null);

(statearr_26277_26312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (6))){
var inst_26202 = (state_26261[(13)]);
var inst_26211 = f.call(null,inst_26202);
var inst_26212 = cljs.core.seq.call(null,inst_26211);
var inst_26213 = inst_26212;
var inst_26214 = null;
var inst_26215 = (0);
var inst_26216 = (0);
var state_26261__$1 = (function (){var statearr_26278 = state_26261;
(statearr_26278[(8)] = inst_26216);

(statearr_26278[(10)] = inst_26215);

(statearr_26278[(11)] = inst_26214);

(statearr_26278[(12)] = inst_26213);

return statearr_26278;
})();
var statearr_26279_26313 = state_26261__$1;
(statearr_26279_26313[(2)] = null);

(statearr_26279_26313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (17))){
var inst_26227 = (state_26261[(7)]);
var inst_26231 = cljs.core.chunk_first.call(null,inst_26227);
var inst_26232 = cljs.core.chunk_rest.call(null,inst_26227);
var inst_26233 = cljs.core.count.call(null,inst_26231);
var inst_26213 = inst_26232;
var inst_26214 = inst_26231;
var inst_26215 = inst_26233;
var inst_26216 = (0);
var state_26261__$1 = (function (){var statearr_26280 = state_26261;
(statearr_26280[(8)] = inst_26216);

(statearr_26280[(10)] = inst_26215);

(statearr_26280[(11)] = inst_26214);

(statearr_26280[(12)] = inst_26213);

return statearr_26280;
})();
var statearr_26281_26314 = state_26261__$1;
(statearr_26281_26314[(2)] = null);

(statearr_26281_26314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (3))){
var inst_26259 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26261__$1,inst_26259);
} else {
if((state_val_26262 === (12))){
var inst_26247 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
var statearr_26282_26315 = state_26261__$1;
(statearr_26282_26315[(2)] = inst_26247);

(statearr_26282_26315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (2))){
var state_26261__$1 = state_26261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26261__$1,(4),in$);
} else {
if((state_val_26262 === (23))){
var inst_26255 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
var statearr_26283_26316 = state_26261__$1;
(statearr_26283_26316[(2)] = inst_26255);

(statearr_26283_26316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (19))){
var inst_26242 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
var statearr_26284_26317 = state_26261__$1;
(statearr_26284_26317[(2)] = inst_26242);

(statearr_26284_26317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (11))){
var inst_26227 = (state_26261[(7)]);
var inst_26213 = (state_26261[(12)]);
var inst_26227__$1 = cljs.core.seq.call(null,inst_26213);
var state_26261__$1 = (function (){var statearr_26285 = state_26261;
(statearr_26285[(7)] = inst_26227__$1);

return statearr_26285;
})();
if(inst_26227__$1){
var statearr_26286_26318 = state_26261__$1;
(statearr_26286_26318[(1)] = (14));

} else {
var statearr_26287_26319 = state_26261__$1;
(statearr_26287_26319[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (9))){
var inst_26249 = (state_26261[(2)]);
var inst_26250 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26261__$1 = (function (){var statearr_26288 = state_26261;
(statearr_26288[(15)] = inst_26249);

return statearr_26288;
})();
if(cljs.core.truth_(inst_26250)){
var statearr_26289_26320 = state_26261__$1;
(statearr_26289_26320[(1)] = (21));

} else {
var statearr_26290_26321 = state_26261__$1;
(statearr_26290_26321[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (5))){
var inst_26205 = cljs.core.async.close_BANG_.call(null,out);
var state_26261__$1 = state_26261;
var statearr_26291_26322 = state_26261__$1;
(statearr_26291_26322[(2)] = inst_26205);

(statearr_26291_26322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (14))){
var inst_26227 = (state_26261[(7)]);
var inst_26229 = cljs.core.chunked_seq_QMARK_.call(null,inst_26227);
var state_26261__$1 = state_26261;
if(inst_26229){
var statearr_26292_26323 = state_26261__$1;
(statearr_26292_26323[(1)] = (17));

} else {
var statearr_26293_26324 = state_26261__$1;
(statearr_26293_26324[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (16))){
var inst_26245 = (state_26261[(2)]);
var state_26261__$1 = state_26261;
var statearr_26294_26325 = state_26261__$1;
(statearr_26294_26325[(2)] = inst_26245);

(statearr_26294_26325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26262 === (10))){
var inst_26216 = (state_26261[(8)]);
var inst_26214 = (state_26261[(11)]);
var inst_26221 = cljs.core._nth.call(null,inst_26214,inst_26216);
var state_26261__$1 = state_26261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26261__$1,(13),out,inst_26221);
} else {
if((state_val_26262 === (18))){
var inst_26227 = (state_26261[(7)]);
var inst_26236 = cljs.core.first.call(null,inst_26227);
var state_26261__$1 = state_26261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26261__$1,(20),out,inst_26236);
} else {
if((state_val_26262 === (8))){
var inst_26216 = (state_26261[(8)]);
var inst_26215 = (state_26261[(10)]);
var inst_26218 = (inst_26216 < inst_26215);
var inst_26219 = inst_26218;
var state_26261__$1 = state_26261;
if(cljs.core.truth_(inst_26219)){
var statearr_26295_26326 = state_26261__$1;
(statearr_26295_26326[(1)] = (10));

} else {
var statearr_26296_26327 = state_26261__$1;
(statearr_26296_26327[(1)] = (11));

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
});})(c__20075__auto__))
;
return ((function (switch__20054__auto__,c__20075__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20055__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20055__auto____0 = (function (){
var statearr_26300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26300[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20055__auto__);

(statearr_26300[(1)] = (1));

return statearr_26300;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20055__auto____1 = (function (state_26261){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_26261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e26301){if((e26301 instanceof Object)){
var ex__20058__auto__ = e26301;
var statearr_26302_26328 = state_26261;
(statearr_26302_26328[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26329 = state_26261;
state_26261 = G__26329;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20055__auto__ = function(state_26261){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20055__auto____1.call(this,state_26261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20055__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20055__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto__))
})();
var state__20077__auto__ = (function (){var statearr_26303 = f__20076__auto__.call(null);
(statearr_26303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto__);

return statearr_26303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto__))
);

return c__20075__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__26331 = arguments.length;
switch (G__26331) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__26334 = arguments.length;
switch (G__26334) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__26337 = arguments.length;
switch (G__26337) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20075__auto___26387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___26387,out){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___26387,out){
return (function (state_26361){
var state_val_26362 = (state_26361[(1)]);
if((state_val_26362 === (7))){
var inst_26356 = (state_26361[(2)]);
var state_26361__$1 = state_26361;
var statearr_26363_26388 = state_26361__$1;
(statearr_26363_26388[(2)] = inst_26356);

(statearr_26363_26388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26362 === (1))){
var inst_26338 = null;
var state_26361__$1 = (function (){var statearr_26364 = state_26361;
(statearr_26364[(7)] = inst_26338);

return statearr_26364;
})();
var statearr_26365_26389 = state_26361__$1;
(statearr_26365_26389[(2)] = null);

(statearr_26365_26389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26362 === (4))){
var inst_26341 = (state_26361[(8)]);
var inst_26341__$1 = (state_26361[(2)]);
var inst_26342 = (inst_26341__$1 == null);
var inst_26343 = cljs.core.not.call(null,inst_26342);
var state_26361__$1 = (function (){var statearr_26366 = state_26361;
(statearr_26366[(8)] = inst_26341__$1);

return statearr_26366;
})();
if(inst_26343){
var statearr_26367_26390 = state_26361__$1;
(statearr_26367_26390[(1)] = (5));

} else {
var statearr_26368_26391 = state_26361__$1;
(statearr_26368_26391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26362 === (6))){
var state_26361__$1 = state_26361;
var statearr_26369_26392 = state_26361__$1;
(statearr_26369_26392[(2)] = null);

(statearr_26369_26392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26362 === (3))){
var inst_26358 = (state_26361[(2)]);
var inst_26359 = cljs.core.async.close_BANG_.call(null,out);
var state_26361__$1 = (function (){var statearr_26370 = state_26361;
(statearr_26370[(9)] = inst_26358);

return statearr_26370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26361__$1,inst_26359);
} else {
if((state_val_26362 === (2))){
var state_26361__$1 = state_26361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26361__$1,(4),ch);
} else {
if((state_val_26362 === (11))){
var inst_26341 = (state_26361[(8)]);
var inst_26350 = (state_26361[(2)]);
var inst_26338 = inst_26341;
var state_26361__$1 = (function (){var statearr_26371 = state_26361;
(statearr_26371[(10)] = inst_26350);

(statearr_26371[(7)] = inst_26338);

return statearr_26371;
})();
var statearr_26372_26393 = state_26361__$1;
(statearr_26372_26393[(2)] = null);

(statearr_26372_26393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26362 === (9))){
var inst_26341 = (state_26361[(8)]);
var state_26361__$1 = state_26361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26361__$1,(11),out,inst_26341);
} else {
if((state_val_26362 === (5))){
var inst_26341 = (state_26361[(8)]);
var inst_26338 = (state_26361[(7)]);
var inst_26345 = cljs.core._EQ_.call(null,inst_26341,inst_26338);
var state_26361__$1 = state_26361;
if(inst_26345){
var statearr_26374_26394 = state_26361__$1;
(statearr_26374_26394[(1)] = (8));

} else {
var statearr_26375_26395 = state_26361__$1;
(statearr_26375_26395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26362 === (10))){
var inst_26353 = (state_26361[(2)]);
var state_26361__$1 = state_26361;
var statearr_26376_26396 = state_26361__$1;
(statearr_26376_26396[(2)] = inst_26353);

(statearr_26376_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26362 === (8))){
var inst_26338 = (state_26361[(7)]);
var tmp26373 = inst_26338;
var inst_26338__$1 = tmp26373;
var state_26361__$1 = (function (){var statearr_26377 = state_26361;
(statearr_26377[(7)] = inst_26338__$1);

return statearr_26377;
})();
var statearr_26378_26397 = state_26361__$1;
(statearr_26378_26397[(2)] = null);

(statearr_26378_26397[(1)] = (2));


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
});})(c__20075__auto___26387,out))
;
return ((function (switch__20054__auto__,c__20075__auto___26387,out){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_26382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26382[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_26382[(1)] = (1));

return statearr_26382;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_26361){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_26361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e26383){if((e26383 instanceof Object)){
var ex__20058__auto__ = e26383;
var statearr_26384_26398 = state_26361;
(statearr_26384_26398[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26399 = state_26361;
state_26361 = G__26399;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_26361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_26361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___26387,out))
})();
var state__20077__auto__ = (function (){var statearr_26385 = f__20076__auto__.call(null);
(statearr_26385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___26387);

return statearr_26385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___26387,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__26401 = arguments.length;
switch (G__26401) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20075__auto___26470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___26470,out){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___26470,out){
return (function (state_26439){
var state_val_26440 = (state_26439[(1)]);
if((state_val_26440 === (7))){
var inst_26435 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26441_26471 = state_26439__$1;
(statearr_26441_26471[(2)] = inst_26435);

(statearr_26441_26471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (1))){
var inst_26402 = (new Array(n));
var inst_26403 = inst_26402;
var inst_26404 = (0);
var state_26439__$1 = (function (){var statearr_26442 = state_26439;
(statearr_26442[(7)] = inst_26403);

(statearr_26442[(8)] = inst_26404);

return statearr_26442;
})();
var statearr_26443_26472 = state_26439__$1;
(statearr_26443_26472[(2)] = null);

(statearr_26443_26472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (4))){
var inst_26407 = (state_26439[(9)]);
var inst_26407__$1 = (state_26439[(2)]);
var inst_26408 = (inst_26407__$1 == null);
var inst_26409 = cljs.core.not.call(null,inst_26408);
var state_26439__$1 = (function (){var statearr_26444 = state_26439;
(statearr_26444[(9)] = inst_26407__$1);

return statearr_26444;
})();
if(inst_26409){
var statearr_26445_26473 = state_26439__$1;
(statearr_26445_26473[(1)] = (5));

} else {
var statearr_26446_26474 = state_26439__$1;
(statearr_26446_26474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (15))){
var inst_26429 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26447_26475 = state_26439__$1;
(statearr_26447_26475[(2)] = inst_26429);

(statearr_26447_26475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (13))){
var state_26439__$1 = state_26439;
var statearr_26448_26476 = state_26439__$1;
(statearr_26448_26476[(2)] = null);

(statearr_26448_26476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (6))){
var inst_26404 = (state_26439[(8)]);
var inst_26425 = (inst_26404 > (0));
var state_26439__$1 = state_26439;
if(cljs.core.truth_(inst_26425)){
var statearr_26449_26477 = state_26439__$1;
(statearr_26449_26477[(1)] = (12));

} else {
var statearr_26450_26478 = state_26439__$1;
(statearr_26450_26478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (3))){
var inst_26437 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26439__$1,inst_26437);
} else {
if((state_val_26440 === (12))){
var inst_26403 = (state_26439[(7)]);
var inst_26427 = cljs.core.vec.call(null,inst_26403);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26439__$1,(15),out,inst_26427);
} else {
if((state_val_26440 === (2))){
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26439__$1,(4),ch);
} else {
if((state_val_26440 === (11))){
var inst_26419 = (state_26439[(2)]);
var inst_26420 = (new Array(n));
var inst_26403 = inst_26420;
var inst_26404 = (0);
var state_26439__$1 = (function (){var statearr_26451 = state_26439;
(statearr_26451[(7)] = inst_26403);

(statearr_26451[(8)] = inst_26404);

(statearr_26451[(10)] = inst_26419);

return statearr_26451;
})();
var statearr_26452_26479 = state_26439__$1;
(statearr_26452_26479[(2)] = null);

(statearr_26452_26479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (9))){
var inst_26403 = (state_26439[(7)]);
var inst_26417 = cljs.core.vec.call(null,inst_26403);
var state_26439__$1 = state_26439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26439__$1,(11),out,inst_26417);
} else {
if((state_val_26440 === (5))){
var inst_26412 = (state_26439[(11)]);
var inst_26403 = (state_26439[(7)]);
var inst_26407 = (state_26439[(9)]);
var inst_26404 = (state_26439[(8)]);
var inst_26411 = (inst_26403[inst_26404] = inst_26407);
var inst_26412__$1 = (inst_26404 + (1));
var inst_26413 = (inst_26412__$1 < n);
var state_26439__$1 = (function (){var statearr_26453 = state_26439;
(statearr_26453[(11)] = inst_26412__$1);

(statearr_26453[(12)] = inst_26411);

return statearr_26453;
})();
if(cljs.core.truth_(inst_26413)){
var statearr_26454_26480 = state_26439__$1;
(statearr_26454_26480[(1)] = (8));

} else {
var statearr_26455_26481 = state_26439__$1;
(statearr_26455_26481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (14))){
var inst_26432 = (state_26439[(2)]);
var inst_26433 = cljs.core.async.close_BANG_.call(null,out);
var state_26439__$1 = (function (){var statearr_26457 = state_26439;
(statearr_26457[(13)] = inst_26432);

return statearr_26457;
})();
var statearr_26458_26482 = state_26439__$1;
(statearr_26458_26482[(2)] = inst_26433);

(statearr_26458_26482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (10))){
var inst_26423 = (state_26439[(2)]);
var state_26439__$1 = state_26439;
var statearr_26459_26483 = state_26439__$1;
(statearr_26459_26483[(2)] = inst_26423);

(statearr_26459_26483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26440 === (8))){
var inst_26412 = (state_26439[(11)]);
var inst_26403 = (state_26439[(7)]);
var tmp26456 = inst_26403;
var inst_26403__$1 = tmp26456;
var inst_26404 = inst_26412;
var state_26439__$1 = (function (){var statearr_26460 = state_26439;
(statearr_26460[(7)] = inst_26403__$1);

(statearr_26460[(8)] = inst_26404);

return statearr_26460;
})();
var statearr_26461_26484 = state_26439__$1;
(statearr_26461_26484[(2)] = null);

(statearr_26461_26484[(1)] = (2));


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
});})(c__20075__auto___26470,out))
;
return ((function (switch__20054__auto__,c__20075__auto___26470,out){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_26465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26465[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_26465[(1)] = (1));

return statearr_26465;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_26439){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_26439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e26466){if((e26466 instanceof Object)){
var ex__20058__auto__ = e26466;
var statearr_26467_26485 = state_26439;
(statearr_26467_26485[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26486 = state_26439;
state_26439 = G__26486;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_26439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_26439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___26470,out))
})();
var state__20077__auto__ = (function (){var statearr_26468 = f__20076__auto__.call(null);
(statearr_26468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___26470);

return statearr_26468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___26470,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__26488 = arguments.length;
switch (G__26488) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20075__auto___26561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20075__auto___26561,out){
return (function (){
var f__20076__auto__ = (function (){var switch__20054__auto__ = ((function (c__20075__auto___26561,out){
return (function (state_26530){
var state_val_26531 = (state_26530[(1)]);
if((state_val_26531 === (7))){
var inst_26526 = (state_26530[(2)]);
var state_26530__$1 = state_26530;
var statearr_26532_26562 = state_26530__$1;
(statearr_26532_26562[(2)] = inst_26526);

(statearr_26532_26562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (1))){
var inst_26489 = [];
var inst_26490 = inst_26489;
var inst_26491 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26530__$1 = (function (){var statearr_26533 = state_26530;
(statearr_26533[(7)] = inst_26491);

(statearr_26533[(8)] = inst_26490);

return statearr_26533;
})();
var statearr_26534_26563 = state_26530__$1;
(statearr_26534_26563[(2)] = null);

(statearr_26534_26563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (4))){
var inst_26494 = (state_26530[(9)]);
var inst_26494__$1 = (state_26530[(2)]);
var inst_26495 = (inst_26494__$1 == null);
var inst_26496 = cljs.core.not.call(null,inst_26495);
var state_26530__$1 = (function (){var statearr_26535 = state_26530;
(statearr_26535[(9)] = inst_26494__$1);

return statearr_26535;
})();
if(inst_26496){
var statearr_26536_26564 = state_26530__$1;
(statearr_26536_26564[(1)] = (5));

} else {
var statearr_26537_26565 = state_26530__$1;
(statearr_26537_26565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (15))){
var inst_26520 = (state_26530[(2)]);
var state_26530__$1 = state_26530;
var statearr_26538_26566 = state_26530__$1;
(statearr_26538_26566[(2)] = inst_26520);

(statearr_26538_26566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (13))){
var state_26530__$1 = state_26530;
var statearr_26539_26567 = state_26530__$1;
(statearr_26539_26567[(2)] = null);

(statearr_26539_26567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (6))){
var inst_26490 = (state_26530[(8)]);
var inst_26515 = inst_26490.length;
var inst_26516 = (inst_26515 > (0));
var state_26530__$1 = state_26530;
if(cljs.core.truth_(inst_26516)){
var statearr_26540_26568 = state_26530__$1;
(statearr_26540_26568[(1)] = (12));

} else {
var statearr_26541_26569 = state_26530__$1;
(statearr_26541_26569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (3))){
var inst_26528 = (state_26530[(2)]);
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26530__$1,inst_26528);
} else {
if((state_val_26531 === (12))){
var inst_26490 = (state_26530[(8)]);
var inst_26518 = cljs.core.vec.call(null,inst_26490);
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26530__$1,(15),out,inst_26518);
} else {
if((state_val_26531 === (2))){
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26530__$1,(4),ch);
} else {
if((state_val_26531 === (11))){
var inst_26494 = (state_26530[(9)]);
var inst_26498 = (state_26530[(10)]);
var inst_26508 = (state_26530[(2)]);
var inst_26509 = [];
var inst_26510 = inst_26509.push(inst_26494);
var inst_26490 = inst_26509;
var inst_26491 = inst_26498;
var state_26530__$1 = (function (){var statearr_26542 = state_26530;
(statearr_26542[(11)] = inst_26510);

(statearr_26542[(7)] = inst_26491);

(statearr_26542[(8)] = inst_26490);

(statearr_26542[(12)] = inst_26508);

return statearr_26542;
})();
var statearr_26543_26570 = state_26530__$1;
(statearr_26543_26570[(2)] = null);

(statearr_26543_26570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (9))){
var inst_26490 = (state_26530[(8)]);
var inst_26506 = cljs.core.vec.call(null,inst_26490);
var state_26530__$1 = state_26530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26530__$1,(11),out,inst_26506);
} else {
if((state_val_26531 === (5))){
var inst_26491 = (state_26530[(7)]);
var inst_26494 = (state_26530[(9)]);
var inst_26498 = (state_26530[(10)]);
var inst_26498__$1 = f.call(null,inst_26494);
var inst_26499 = cljs.core._EQ_.call(null,inst_26498__$1,inst_26491);
var inst_26500 = cljs.core.keyword_identical_QMARK_.call(null,inst_26491,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26501 = (inst_26499) || (inst_26500);
var state_26530__$1 = (function (){var statearr_26544 = state_26530;
(statearr_26544[(10)] = inst_26498__$1);

return statearr_26544;
})();
if(cljs.core.truth_(inst_26501)){
var statearr_26545_26571 = state_26530__$1;
(statearr_26545_26571[(1)] = (8));

} else {
var statearr_26546_26572 = state_26530__$1;
(statearr_26546_26572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (14))){
var inst_26523 = (state_26530[(2)]);
var inst_26524 = cljs.core.async.close_BANG_.call(null,out);
var state_26530__$1 = (function (){var statearr_26548 = state_26530;
(statearr_26548[(13)] = inst_26523);

return statearr_26548;
})();
var statearr_26549_26573 = state_26530__$1;
(statearr_26549_26573[(2)] = inst_26524);

(statearr_26549_26573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (10))){
var inst_26513 = (state_26530[(2)]);
var state_26530__$1 = state_26530;
var statearr_26550_26574 = state_26530__$1;
(statearr_26550_26574[(2)] = inst_26513);

(statearr_26550_26574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26531 === (8))){
var inst_26490 = (state_26530[(8)]);
var inst_26494 = (state_26530[(9)]);
var inst_26498 = (state_26530[(10)]);
var inst_26503 = inst_26490.push(inst_26494);
var tmp26547 = inst_26490;
var inst_26490__$1 = tmp26547;
var inst_26491 = inst_26498;
var state_26530__$1 = (function (){var statearr_26551 = state_26530;
(statearr_26551[(14)] = inst_26503);

(statearr_26551[(7)] = inst_26491);

(statearr_26551[(8)] = inst_26490__$1);

return statearr_26551;
})();
var statearr_26552_26575 = state_26530__$1;
(statearr_26552_26575[(2)] = null);

(statearr_26552_26575[(1)] = (2));


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
});})(c__20075__auto___26561,out))
;
return ((function (switch__20054__auto__,c__20075__auto___26561,out){
return (function() {
var cljs$core$async$state_machine__20055__auto__ = null;
var cljs$core$async$state_machine__20055__auto____0 = (function (){
var statearr_26556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26556[(0)] = cljs$core$async$state_machine__20055__auto__);

(statearr_26556[(1)] = (1));

return statearr_26556;
});
var cljs$core$async$state_machine__20055__auto____1 = (function (state_26530){
while(true){
var ret_value__20056__auto__ = (function (){try{while(true){
var result__20057__auto__ = switch__20054__auto__.call(null,state_26530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20057__auto__;
}
break;
}
}catch (e26557){if((e26557 instanceof Object)){
var ex__20058__auto__ = e26557;
var statearr_26558_26576 = state_26530;
(statearr_26558_26576[(5)] = ex__20058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26577 = state_26530;
state_26530 = G__26577;
continue;
} else {
return ret_value__20056__auto__;
}
break;
}
});
cljs$core$async$state_machine__20055__auto__ = function(state_26530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20055__auto____1.call(this,state_26530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20055__auto____0;
cljs$core$async$state_machine__20055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20055__auto____1;
return cljs$core$async$state_machine__20055__auto__;
})()
;})(switch__20054__auto__,c__20075__auto___26561,out))
})();
var state__20077__auto__ = (function (){var statearr_26559 = f__20076__auto__.call(null);
(statearr_26559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20075__auto___26561);

return statearr_26559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20077__auto__);
});})(c__20075__auto___26561,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436658171620