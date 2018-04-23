// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12628 = [];
var len__7157__auto___12634 = arguments.length;
var i__7158__auto___12635 = (0);
while(true){
if((i__7158__auto___12635 < len__7157__auto___12634)){
args12628.push((arguments[i__7158__auto___12635]));

var G__12636 = (i__7158__auto___12635 + (1));
i__7158__auto___12635 = G__12636;
continue;
} else {
}
break;
}

var G__12630 = args12628.length;
switch (G__12630) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12628.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12631 = (function (f,blockable,meta12632){
this.f = f;
this.blockable = blockable;
this.meta12632 = meta12632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12633,meta12632__$1){
var self__ = this;
var _12633__$1 = this;
return (new cljs.core.async.t_cljs$core$async12631(self__.f,self__.blockable,meta12632__$1));
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12633){
var self__ = this;
var _12633__$1 = this;
return self__.meta12632;
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12632","meta12632",1874867183,null)], null);
});

cljs.core.async.t_cljs$core$async12631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12631";

cljs.core.async.t_cljs$core$async12631.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async12631");
});

cljs.core.async.__GT_t_cljs$core$async12631 = (function cljs$core$async$__GT_t_cljs$core$async12631(f__$1,blockable__$1,meta12632){
return (new cljs.core.async.t_cljs$core$async12631(f__$1,blockable__$1,meta12632));
});

}

return (new cljs.core.async.t_cljs$core$async12631(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12640 = [];
var len__7157__auto___12643 = arguments.length;
var i__7158__auto___12644 = (0);
while(true){
if((i__7158__auto___12644 < len__7157__auto___12643)){
args12640.push((arguments[i__7158__auto___12644]));

var G__12645 = (i__7158__auto___12644 + (1));
i__7158__auto___12644 = G__12645;
continue;
} else {
}
break;
}

var G__12642 = args12640.length;
switch (G__12642) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12640.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12647 = [];
var len__7157__auto___12650 = arguments.length;
var i__7158__auto___12651 = (0);
while(true){
if((i__7158__auto___12651 < len__7157__auto___12650)){
args12647.push((arguments[i__7158__auto___12651]));

var G__12652 = (i__7158__auto___12651 + (1));
i__7158__auto___12651 = G__12652;
continue;
} else {
}
break;
}

var G__12649 = args12647.length;
switch (G__12649) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12647.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12654 = [];
var len__7157__auto___12657 = arguments.length;
var i__7158__auto___12658 = (0);
while(true){
if((i__7158__auto___12658 < len__7157__auto___12657)){
args12654.push((arguments[i__7158__auto___12658]));

var G__12659 = (i__7158__auto___12658 + (1));
i__7158__auto___12658 = G__12659;
continue;
} else {
}
break;
}

var G__12656 = args12654.length;
switch (G__12656) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12654.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12661 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12661);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12661,ret){
return (function (){
return fn1.call(null,val_12661);
});})(val_12661,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12662 = [];
var len__7157__auto___12665 = arguments.length;
var i__7158__auto___12666 = (0);
while(true){
if((i__7158__auto___12666 < len__7157__auto___12665)){
args12662.push((arguments[i__7158__auto___12666]));

var G__12667 = (i__7158__auto___12666 + (1));
i__7158__auto___12666 = G__12667;
continue;
} else {
}
break;
}

var G__12664 = args12662.length;
switch (G__12664) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12662.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__7002__auto___12669 = n;
var x_12670 = (0);
while(true){
if((x_12670 < n__7002__auto___12669)){
(a[x_12670] = (0));

var G__12671 = (x_12670 + (1));
x_12670 = G__12671;
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

var G__12672 = (i + (1));
i = G__12672;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12676 = (function (alt_flag,flag,meta12677){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12677 = meta12677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12678,meta12677__$1){
var self__ = this;
var _12678__$1 = this;
return (new cljs.core.async.t_cljs$core$async12676(self__.alt_flag,self__.flag,meta12677__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12678){
var self__ = this;
var _12678__$1 = this;
return self__.meta12677;
});})(flag))
;

cljs.core.async.t_cljs$core$async12676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12676.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12677","meta12677",-1519991466,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12676";

cljs.core.async.t_cljs$core$async12676.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async12676");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12676 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12676(alt_flag__$1,flag__$1,meta12677){
return (new cljs.core.async.t_cljs$core$async12676(alt_flag__$1,flag__$1,meta12677));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12676(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12682 = (function (alt_handler,flag,cb,meta12683){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12683 = meta12683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12684,meta12683__$1){
var self__ = this;
var _12684__$1 = this;
return (new cljs.core.async.t_cljs$core$async12682(self__.alt_handler,self__.flag,self__.cb,meta12683__$1));
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12684){
var self__ = this;
var _12684__$1 = this;
return self__.meta12683;
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12683","meta12683",797368031,null)], null);
});

cljs.core.async.t_cljs$core$async12682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12682";

cljs.core.async.t_cljs$core$async12682.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async12682");
});

cljs.core.async.__GT_t_cljs$core$async12682 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12682(alt_handler__$1,flag__$1,cb__$1,meta12683){
return (new cljs.core.async.t_cljs$core$async12682(alt_handler__$1,flag__$1,cb__$1,meta12683));
});

}

return (new cljs.core.async.t_cljs$core$async12682(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12685_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12685_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12686_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12686_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6087__auto__ = wport;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12687 = (i + (1));
i = G__12687;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6087__auto__ = ret;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6075__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6075__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7164__auto__ = [];
var len__7157__auto___12693 = arguments.length;
var i__7158__auto___12694 = (0);
while(true){
if((i__7158__auto___12694 < len__7157__auto___12693)){
args__7164__auto__.push((arguments[i__7158__auto___12694]));

var G__12695 = (i__7158__auto___12694 + (1));
i__7158__auto___12694 = G__12695;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12690){
var map__12691 = p__12690;
var map__12691__$1 = ((((!((map__12691 == null)))?((((map__12691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12691):map__12691);
var opts = map__12691__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12688){
var G__12689 = cljs.core.first.call(null,seq12688);
var seq12688__$1 = cljs.core.next.call(null,seq12688);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12689,seq12688__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12696 = [];
var len__7157__auto___12746 = arguments.length;
var i__7158__auto___12747 = (0);
while(true){
if((i__7158__auto___12747 < len__7157__auto___12746)){
args12696.push((arguments[i__7158__auto___12747]));

var G__12748 = (i__7158__auto___12747 + (1));
i__7158__auto___12747 = G__12748;
continue;
} else {
}
break;
}

var G__12698 = args12696.length;
switch (G__12698) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12696.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12583__auto___12750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___12750){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___12750){
return (function (state_12722){
var state_val_12723 = (state_12722[(1)]);
if((state_val_12723 === (7))){
var inst_12718 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
var statearr_12724_12751 = state_12722__$1;
(statearr_12724_12751[(2)] = inst_12718);

(statearr_12724_12751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (1))){
var state_12722__$1 = state_12722;
var statearr_12725_12752 = state_12722__$1;
(statearr_12725_12752[(2)] = null);

(statearr_12725_12752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (4))){
var inst_12701 = (state_12722[(7)]);
var inst_12701__$1 = (state_12722[(2)]);
var inst_12702 = (inst_12701__$1 == null);
var state_12722__$1 = (function (){var statearr_12726 = state_12722;
(statearr_12726[(7)] = inst_12701__$1);

return statearr_12726;
})();
if(cljs.core.truth_(inst_12702)){
var statearr_12727_12753 = state_12722__$1;
(statearr_12727_12753[(1)] = (5));

} else {
var statearr_12728_12754 = state_12722__$1;
(statearr_12728_12754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (13))){
var state_12722__$1 = state_12722;
var statearr_12729_12755 = state_12722__$1;
(statearr_12729_12755[(2)] = null);

(statearr_12729_12755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (6))){
var inst_12701 = (state_12722[(7)]);
var state_12722__$1 = state_12722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12722__$1,(11),to,inst_12701);
} else {
if((state_val_12723 === (3))){
var inst_12720 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12722__$1,inst_12720);
} else {
if((state_val_12723 === (12))){
var state_12722__$1 = state_12722;
var statearr_12730_12756 = state_12722__$1;
(statearr_12730_12756[(2)] = null);

(statearr_12730_12756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (2))){
var state_12722__$1 = state_12722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12722__$1,(4),from);
} else {
if((state_val_12723 === (11))){
var inst_12711 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
if(cljs.core.truth_(inst_12711)){
var statearr_12731_12757 = state_12722__$1;
(statearr_12731_12757[(1)] = (12));

} else {
var statearr_12732_12758 = state_12722__$1;
(statearr_12732_12758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (9))){
var state_12722__$1 = state_12722;
var statearr_12733_12759 = state_12722__$1;
(statearr_12733_12759[(2)] = null);

(statearr_12733_12759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (5))){
var state_12722__$1 = state_12722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12734_12760 = state_12722__$1;
(statearr_12734_12760[(1)] = (8));

} else {
var statearr_12735_12761 = state_12722__$1;
(statearr_12735_12761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (14))){
var inst_12716 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
var statearr_12736_12762 = state_12722__$1;
(statearr_12736_12762[(2)] = inst_12716);

(statearr_12736_12762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (10))){
var inst_12708 = (state_12722[(2)]);
var state_12722__$1 = state_12722;
var statearr_12737_12763 = state_12722__$1;
(statearr_12737_12763[(2)] = inst_12708);

(statearr_12737_12763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12723 === (8))){
var inst_12705 = cljs.core.async.close_BANG_.call(null,to);
var state_12722__$1 = state_12722;
var statearr_12738_12764 = state_12722__$1;
(statearr_12738_12764[(2)] = inst_12705);

(statearr_12738_12764[(1)] = (10));


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
});})(c__12583__auto___12750))
;
return ((function (switch__12471__auto__,c__12583__auto___12750){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_12742 = [null,null,null,null,null,null,null,null];
(statearr_12742[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_12742[(1)] = (1));

return statearr_12742;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_12722){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_12722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e12743){if((e12743 instanceof Object)){
var ex__12475__auto__ = e12743;
var statearr_12744_12765 = state_12722;
(statearr_12744_12765[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12766 = state_12722;
state_12722 = G__12766;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_12722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_12722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___12750))
})();
var state__12585__auto__ = (function (){var statearr_12745 = f__12584__auto__.call(null);
(statearr_12745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___12750);

return statearr_12745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___12750))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12950){
var vec__12951 = p__12950;
var v = cljs.core.nth.call(null,vec__12951,(0),null);
var p = cljs.core.nth.call(null,vec__12951,(1),null);
var job = vec__12951;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12583__auto___13133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___13133,res,vec__12951,v,p,job,jobs,results){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___13133,res,vec__12951,v,p,job,jobs,results){
return (function (state_12956){
var state_val_12957 = (state_12956[(1)]);
if((state_val_12957 === (1))){
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12956__$1,(2),res,v);
} else {
if((state_val_12957 === (2))){
var inst_12953 = (state_12956[(2)]);
var inst_12954 = cljs.core.async.close_BANG_.call(null,res);
var state_12956__$1 = (function (){var statearr_12958 = state_12956;
(statearr_12958[(7)] = inst_12953);

return statearr_12958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12956__$1,inst_12954);
} else {
return null;
}
}
});})(c__12583__auto___13133,res,vec__12951,v,p,job,jobs,results))
;
return ((function (switch__12471__auto__,c__12583__auto___13133,res,vec__12951,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0 = (function (){
var statearr_12962 = [null,null,null,null,null,null,null,null];
(statearr_12962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__);

(statearr_12962[(1)] = (1));

return statearr_12962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1 = (function (state_12956){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_12956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e12963){if((e12963 instanceof Object)){
var ex__12475__auto__ = e12963;
var statearr_12964_13134 = state_12956;
(statearr_12964_13134[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13135 = state_12956;
state_12956 = G__13135;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = function(state_12956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1.call(this,state_12956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___13133,res,vec__12951,v,p,job,jobs,results))
})();
var state__12585__auto__ = (function (){var statearr_12965 = f__12584__auto__.call(null);
(statearr_12965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___13133);

return statearr_12965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___13133,res,vec__12951,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12966){
var vec__12967 = p__12966;
var v = cljs.core.nth.call(null,vec__12967,(0),null);
var p = cljs.core.nth.call(null,vec__12967,(1),null);
var job = vec__12967;
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
var n__7002__auto___13136 = n;
var __13137 = (0);
while(true){
if((__13137 < n__7002__auto___13136)){
var G__12968_13138 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12968_13138) {
case "compute":
var c__12583__auto___13140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13137,c__12583__auto___13140,G__12968_13138,n__7002__auto___13136,jobs,results,process,async){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (__13137,c__12583__auto___13140,G__12968_13138,n__7002__auto___13136,jobs,results,process,async){
return (function (state_12981){
var state_val_12982 = (state_12981[(1)]);
if((state_val_12982 === (1))){
var state_12981__$1 = state_12981;
var statearr_12983_13141 = state_12981__$1;
(statearr_12983_13141[(2)] = null);

(statearr_12983_13141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (2))){
var state_12981__$1 = state_12981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12981__$1,(4),jobs);
} else {
if((state_val_12982 === (3))){
var inst_12979 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12981__$1,inst_12979);
} else {
if((state_val_12982 === (4))){
var inst_12971 = (state_12981[(2)]);
var inst_12972 = process.call(null,inst_12971);
var state_12981__$1 = state_12981;
if(cljs.core.truth_(inst_12972)){
var statearr_12984_13142 = state_12981__$1;
(statearr_12984_13142[(1)] = (5));

} else {
var statearr_12985_13143 = state_12981__$1;
(statearr_12985_13143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (5))){
var state_12981__$1 = state_12981;
var statearr_12986_13144 = state_12981__$1;
(statearr_12986_13144[(2)] = null);

(statearr_12986_13144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (6))){
var state_12981__$1 = state_12981;
var statearr_12987_13145 = state_12981__$1;
(statearr_12987_13145[(2)] = null);

(statearr_12987_13145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12982 === (7))){
var inst_12977 = (state_12981[(2)]);
var state_12981__$1 = state_12981;
var statearr_12988_13146 = state_12981__$1;
(statearr_12988_13146[(2)] = inst_12977);

(statearr_12988_13146[(1)] = (3));


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
});})(__13137,c__12583__auto___13140,G__12968_13138,n__7002__auto___13136,jobs,results,process,async))
;
return ((function (__13137,switch__12471__auto__,c__12583__auto___13140,G__12968_13138,n__7002__auto___13136,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0 = (function (){
var statearr_12992 = [null,null,null,null,null,null,null];
(statearr_12992[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__);

(statearr_12992[(1)] = (1));

return statearr_12992;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1 = (function (state_12981){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_12981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e12993){if((e12993 instanceof Object)){
var ex__12475__auto__ = e12993;
var statearr_12994_13147 = state_12981;
(statearr_12994_13147[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13148 = state_12981;
state_12981 = G__13148;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = function(state_12981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1.call(this,state_12981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__;
})()
;})(__13137,switch__12471__auto__,c__12583__auto___13140,G__12968_13138,n__7002__auto___13136,jobs,results,process,async))
})();
var state__12585__auto__ = (function (){var statearr_12995 = f__12584__auto__.call(null);
(statearr_12995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___13140);

return statearr_12995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(__13137,c__12583__auto___13140,G__12968_13138,n__7002__auto___13136,jobs,results,process,async))
);


break;
case "async":
var c__12583__auto___13149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13137,c__12583__auto___13149,G__12968_13138,n__7002__auto___13136,jobs,results,process,async){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (__13137,c__12583__auto___13149,G__12968_13138,n__7002__auto___13136,jobs,results,process,async){
return (function (state_13008){
var state_val_13009 = (state_13008[(1)]);
if((state_val_13009 === (1))){
var state_13008__$1 = state_13008;
var statearr_13010_13150 = state_13008__$1;
(statearr_13010_13150[(2)] = null);

(statearr_13010_13150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13009 === (2))){
var state_13008__$1 = state_13008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13008__$1,(4),jobs);
} else {
if((state_val_13009 === (3))){
var inst_13006 = (state_13008[(2)]);
var state_13008__$1 = state_13008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13008__$1,inst_13006);
} else {
if((state_val_13009 === (4))){
var inst_12998 = (state_13008[(2)]);
var inst_12999 = async.call(null,inst_12998);
var state_13008__$1 = state_13008;
if(cljs.core.truth_(inst_12999)){
var statearr_13011_13151 = state_13008__$1;
(statearr_13011_13151[(1)] = (5));

} else {
var statearr_13012_13152 = state_13008__$1;
(statearr_13012_13152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13009 === (5))){
var state_13008__$1 = state_13008;
var statearr_13013_13153 = state_13008__$1;
(statearr_13013_13153[(2)] = null);

(statearr_13013_13153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13009 === (6))){
var state_13008__$1 = state_13008;
var statearr_13014_13154 = state_13008__$1;
(statearr_13014_13154[(2)] = null);

(statearr_13014_13154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13009 === (7))){
var inst_13004 = (state_13008[(2)]);
var state_13008__$1 = state_13008;
var statearr_13015_13155 = state_13008__$1;
(statearr_13015_13155[(2)] = inst_13004);

(statearr_13015_13155[(1)] = (3));


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
});})(__13137,c__12583__auto___13149,G__12968_13138,n__7002__auto___13136,jobs,results,process,async))
;
return ((function (__13137,switch__12471__auto__,c__12583__auto___13149,G__12968_13138,n__7002__auto___13136,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0 = (function (){
var statearr_13019 = [null,null,null,null,null,null,null];
(statearr_13019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__);

(statearr_13019[(1)] = (1));

return statearr_13019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1 = (function (state_13008){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_13008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e13020){if((e13020 instanceof Object)){
var ex__12475__auto__ = e13020;
var statearr_13021_13156 = state_13008;
(statearr_13021_13156[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_13008;
state_13008 = G__13157;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = function(state_13008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1.call(this,state_13008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__;
})()
;})(__13137,switch__12471__auto__,c__12583__auto___13149,G__12968_13138,n__7002__auto___13136,jobs,results,process,async))
})();
var state__12585__auto__ = (function (){var statearr_13022 = f__12584__auto__.call(null);
(statearr_13022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___13149);

return statearr_13022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(__13137,c__12583__auto___13149,G__12968_13138,n__7002__auto___13136,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13158 = (__13137 + (1));
__13137 = G__13158;
continue;
} else {
}
break;
}

var c__12583__auto___13159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___13159,jobs,results,process,async){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___13159,jobs,results,process,async){
return (function (state_13044){
var state_val_13045 = (state_13044[(1)]);
if((state_val_13045 === (1))){
var state_13044__$1 = state_13044;
var statearr_13046_13160 = state_13044__$1;
(statearr_13046_13160[(2)] = null);

(statearr_13046_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (2))){
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13044__$1,(4),from);
} else {
if((state_val_13045 === (3))){
var inst_13042 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13044__$1,inst_13042);
} else {
if((state_val_13045 === (4))){
var inst_13025 = (state_13044[(7)]);
var inst_13025__$1 = (state_13044[(2)]);
var inst_13026 = (inst_13025__$1 == null);
var state_13044__$1 = (function (){var statearr_13047 = state_13044;
(statearr_13047[(7)] = inst_13025__$1);

return statearr_13047;
})();
if(cljs.core.truth_(inst_13026)){
var statearr_13048_13161 = state_13044__$1;
(statearr_13048_13161[(1)] = (5));

} else {
var statearr_13049_13162 = state_13044__$1;
(statearr_13049_13162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (5))){
var inst_13028 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13044__$1 = state_13044;
var statearr_13050_13163 = state_13044__$1;
(statearr_13050_13163[(2)] = inst_13028);

(statearr_13050_13163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (6))){
var inst_13025 = (state_13044[(7)]);
var inst_13030 = (state_13044[(8)]);
var inst_13030__$1 = cljs.core.async.chan.call(null,(1));
var inst_13031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13032 = [inst_13025,inst_13030__$1];
var inst_13033 = (new cljs.core.PersistentVector(null,2,(5),inst_13031,inst_13032,null));
var state_13044__$1 = (function (){var statearr_13051 = state_13044;
(statearr_13051[(8)] = inst_13030__$1);

return statearr_13051;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13044__$1,(8),jobs,inst_13033);
} else {
if((state_val_13045 === (7))){
var inst_13040 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13052_13164 = state_13044__$1;
(statearr_13052_13164[(2)] = inst_13040);

(statearr_13052_13164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (8))){
var inst_13030 = (state_13044[(8)]);
var inst_13035 = (state_13044[(2)]);
var state_13044__$1 = (function (){var statearr_13053 = state_13044;
(statearr_13053[(9)] = inst_13035);

return statearr_13053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13044__$1,(9),results,inst_13030);
} else {
if((state_val_13045 === (9))){
var inst_13037 = (state_13044[(2)]);
var state_13044__$1 = (function (){var statearr_13054 = state_13044;
(statearr_13054[(10)] = inst_13037);

return statearr_13054;
})();
var statearr_13055_13165 = state_13044__$1;
(statearr_13055_13165[(2)] = null);

(statearr_13055_13165[(1)] = (2));


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
});})(c__12583__auto___13159,jobs,results,process,async))
;
return ((function (switch__12471__auto__,c__12583__auto___13159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0 = (function (){
var statearr_13059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__);

(statearr_13059[(1)] = (1));

return statearr_13059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1 = (function (state_13044){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_13044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e13060){if((e13060 instanceof Object)){
var ex__12475__auto__ = e13060;
var statearr_13061_13166 = state_13044;
(statearr_13061_13166[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13167 = state_13044;
state_13044 = G__13167;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = function(state_13044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1.call(this,state_13044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___13159,jobs,results,process,async))
})();
var state__12585__auto__ = (function (){var statearr_13062 = f__12584__auto__.call(null);
(statearr_13062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___13159);

return statearr_13062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___13159,jobs,results,process,async))
);


var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__,jobs,results,process,async){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__,jobs,results,process,async){
return (function (state_13100){
var state_val_13101 = (state_13100[(1)]);
if((state_val_13101 === (7))){
var inst_13096 = (state_13100[(2)]);
var state_13100__$1 = state_13100;
var statearr_13102_13168 = state_13100__$1;
(statearr_13102_13168[(2)] = inst_13096);

(statearr_13102_13168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (20))){
var state_13100__$1 = state_13100;
var statearr_13103_13169 = state_13100__$1;
(statearr_13103_13169[(2)] = null);

(statearr_13103_13169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (1))){
var state_13100__$1 = state_13100;
var statearr_13104_13170 = state_13100__$1;
(statearr_13104_13170[(2)] = null);

(statearr_13104_13170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (4))){
var inst_13065 = (state_13100[(7)]);
var inst_13065__$1 = (state_13100[(2)]);
var inst_13066 = (inst_13065__$1 == null);
var state_13100__$1 = (function (){var statearr_13105 = state_13100;
(statearr_13105[(7)] = inst_13065__$1);

return statearr_13105;
})();
if(cljs.core.truth_(inst_13066)){
var statearr_13106_13171 = state_13100__$1;
(statearr_13106_13171[(1)] = (5));

} else {
var statearr_13107_13172 = state_13100__$1;
(statearr_13107_13172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (15))){
var inst_13078 = (state_13100[(8)]);
var state_13100__$1 = state_13100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13100__$1,(18),to,inst_13078);
} else {
if((state_val_13101 === (21))){
var inst_13091 = (state_13100[(2)]);
var state_13100__$1 = state_13100;
var statearr_13108_13173 = state_13100__$1;
(statearr_13108_13173[(2)] = inst_13091);

(statearr_13108_13173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (13))){
var inst_13093 = (state_13100[(2)]);
var state_13100__$1 = (function (){var statearr_13109 = state_13100;
(statearr_13109[(9)] = inst_13093);

return statearr_13109;
})();
var statearr_13110_13174 = state_13100__$1;
(statearr_13110_13174[(2)] = null);

(statearr_13110_13174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (6))){
var inst_13065 = (state_13100[(7)]);
var state_13100__$1 = state_13100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13100__$1,(11),inst_13065);
} else {
if((state_val_13101 === (17))){
var inst_13086 = (state_13100[(2)]);
var state_13100__$1 = state_13100;
if(cljs.core.truth_(inst_13086)){
var statearr_13111_13175 = state_13100__$1;
(statearr_13111_13175[(1)] = (19));

} else {
var statearr_13112_13176 = state_13100__$1;
(statearr_13112_13176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (3))){
var inst_13098 = (state_13100[(2)]);
var state_13100__$1 = state_13100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13100__$1,inst_13098);
} else {
if((state_val_13101 === (12))){
var inst_13075 = (state_13100[(10)]);
var state_13100__$1 = state_13100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13100__$1,(14),inst_13075);
} else {
if((state_val_13101 === (2))){
var state_13100__$1 = state_13100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13100__$1,(4),results);
} else {
if((state_val_13101 === (19))){
var state_13100__$1 = state_13100;
var statearr_13113_13177 = state_13100__$1;
(statearr_13113_13177[(2)] = null);

(statearr_13113_13177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (11))){
var inst_13075 = (state_13100[(2)]);
var state_13100__$1 = (function (){var statearr_13114 = state_13100;
(statearr_13114[(10)] = inst_13075);

return statearr_13114;
})();
var statearr_13115_13178 = state_13100__$1;
(statearr_13115_13178[(2)] = null);

(statearr_13115_13178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (9))){
var state_13100__$1 = state_13100;
var statearr_13116_13179 = state_13100__$1;
(statearr_13116_13179[(2)] = null);

(statearr_13116_13179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (5))){
var state_13100__$1 = state_13100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13117_13180 = state_13100__$1;
(statearr_13117_13180[(1)] = (8));

} else {
var statearr_13118_13181 = state_13100__$1;
(statearr_13118_13181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (14))){
var inst_13078 = (state_13100[(8)]);
var inst_13080 = (state_13100[(11)]);
var inst_13078__$1 = (state_13100[(2)]);
var inst_13079 = (inst_13078__$1 == null);
var inst_13080__$1 = cljs.core.not.call(null,inst_13079);
var state_13100__$1 = (function (){var statearr_13119 = state_13100;
(statearr_13119[(8)] = inst_13078__$1);

(statearr_13119[(11)] = inst_13080__$1);

return statearr_13119;
})();
if(inst_13080__$1){
var statearr_13120_13182 = state_13100__$1;
(statearr_13120_13182[(1)] = (15));

} else {
var statearr_13121_13183 = state_13100__$1;
(statearr_13121_13183[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (16))){
var inst_13080 = (state_13100[(11)]);
var state_13100__$1 = state_13100;
var statearr_13122_13184 = state_13100__$1;
(statearr_13122_13184[(2)] = inst_13080);

(statearr_13122_13184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (10))){
var inst_13072 = (state_13100[(2)]);
var state_13100__$1 = state_13100;
var statearr_13123_13185 = state_13100__$1;
(statearr_13123_13185[(2)] = inst_13072);

(statearr_13123_13185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (18))){
var inst_13083 = (state_13100[(2)]);
var state_13100__$1 = state_13100;
var statearr_13124_13186 = state_13100__$1;
(statearr_13124_13186[(2)] = inst_13083);

(statearr_13124_13186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13101 === (8))){
var inst_13069 = cljs.core.async.close_BANG_.call(null,to);
var state_13100__$1 = state_13100;
var statearr_13125_13187 = state_13100__$1;
(statearr_13125_13187[(2)] = inst_13069);

(statearr_13125_13187[(1)] = (10));


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
});})(c__12583__auto__,jobs,results,process,async))
;
return ((function (switch__12471__auto__,c__12583__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0 = (function (){
var statearr_13129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__);

(statearr_13129[(1)] = (1));

return statearr_13129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1 = (function (state_13100){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_13100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e13130){if((e13130 instanceof Object)){
var ex__12475__auto__ = e13130;
var statearr_13131_13188 = state_13100;
(statearr_13131_13188[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13189 = state_13100;
state_13100 = G__13189;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__ = function(state_13100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1.call(this,state_13100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__,jobs,results,process,async))
})();
var state__12585__auto__ = (function (){var statearr_13132 = f__12584__auto__.call(null);
(statearr_13132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_13132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__,jobs,results,process,async))
);

return c__12583__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13190 = [];
var len__7157__auto___13193 = arguments.length;
var i__7158__auto___13194 = (0);
while(true){
if((i__7158__auto___13194 < len__7157__auto___13193)){
args13190.push((arguments[i__7158__auto___13194]));

var G__13195 = (i__7158__auto___13194 + (1));
i__7158__auto___13194 = G__13195;
continue;
} else {
}
break;
}

var G__13192 = args13190.length;
switch (G__13192) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13190.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13197 = [];
var len__7157__auto___13200 = arguments.length;
var i__7158__auto___13201 = (0);
while(true){
if((i__7158__auto___13201 < len__7157__auto___13200)){
args13197.push((arguments[i__7158__auto___13201]));

var G__13202 = (i__7158__auto___13201 + (1));
i__7158__auto___13201 = G__13202;
continue;
} else {
}
break;
}

var G__13199 = args13197.length;
switch (G__13199) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13197.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13204 = [];
var len__7157__auto___13257 = arguments.length;
var i__7158__auto___13258 = (0);
while(true){
if((i__7158__auto___13258 < len__7157__auto___13257)){
args13204.push((arguments[i__7158__auto___13258]));

var G__13259 = (i__7158__auto___13258 + (1));
i__7158__auto___13258 = G__13259;
continue;
} else {
}
break;
}

var G__13206 = args13204.length;
switch (G__13206) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13204.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12583__auto___13261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___13261,tc,fc){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___13261,tc,fc){
return (function (state_13232){
var state_val_13233 = (state_13232[(1)]);
if((state_val_13233 === (7))){
var inst_13228 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
var statearr_13234_13262 = state_13232__$1;
(statearr_13234_13262[(2)] = inst_13228);

(statearr_13234_13262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (1))){
var state_13232__$1 = state_13232;
var statearr_13235_13263 = state_13232__$1;
(statearr_13235_13263[(2)] = null);

(statearr_13235_13263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (4))){
var inst_13209 = (state_13232[(7)]);
var inst_13209__$1 = (state_13232[(2)]);
var inst_13210 = (inst_13209__$1 == null);
var state_13232__$1 = (function (){var statearr_13236 = state_13232;
(statearr_13236[(7)] = inst_13209__$1);

return statearr_13236;
})();
if(cljs.core.truth_(inst_13210)){
var statearr_13237_13264 = state_13232__$1;
(statearr_13237_13264[(1)] = (5));

} else {
var statearr_13238_13265 = state_13232__$1;
(statearr_13238_13265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (13))){
var state_13232__$1 = state_13232;
var statearr_13239_13266 = state_13232__$1;
(statearr_13239_13266[(2)] = null);

(statearr_13239_13266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (6))){
var inst_13209 = (state_13232[(7)]);
var inst_13215 = p.call(null,inst_13209);
var state_13232__$1 = state_13232;
if(cljs.core.truth_(inst_13215)){
var statearr_13240_13267 = state_13232__$1;
(statearr_13240_13267[(1)] = (9));

} else {
var statearr_13241_13268 = state_13232__$1;
(statearr_13241_13268[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (3))){
var inst_13230 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13232__$1,inst_13230);
} else {
if((state_val_13233 === (12))){
var state_13232__$1 = state_13232;
var statearr_13242_13269 = state_13232__$1;
(statearr_13242_13269[(2)] = null);

(statearr_13242_13269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (2))){
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13232__$1,(4),ch);
} else {
if((state_val_13233 === (11))){
var inst_13209 = (state_13232[(7)]);
var inst_13219 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13232__$1,(8),inst_13219,inst_13209);
} else {
if((state_val_13233 === (9))){
var state_13232__$1 = state_13232;
var statearr_13243_13270 = state_13232__$1;
(statearr_13243_13270[(2)] = tc);

(statearr_13243_13270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (5))){
var inst_13212 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13213 = cljs.core.async.close_BANG_.call(null,fc);
var state_13232__$1 = (function (){var statearr_13244 = state_13232;
(statearr_13244[(8)] = inst_13212);

return statearr_13244;
})();
var statearr_13245_13271 = state_13232__$1;
(statearr_13245_13271[(2)] = inst_13213);

(statearr_13245_13271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (14))){
var inst_13226 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
var statearr_13246_13272 = state_13232__$1;
(statearr_13246_13272[(2)] = inst_13226);

(statearr_13246_13272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (10))){
var state_13232__$1 = state_13232;
var statearr_13247_13273 = state_13232__$1;
(statearr_13247_13273[(2)] = fc);

(statearr_13247_13273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (8))){
var inst_13221 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
if(cljs.core.truth_(inst_13221)){
var statearr_13248_13274 = state_13232__$1;
(statearr_13248_13274[(1)] = (12));

} else {
var statearr_13249_13275 = state_13232__$1;
(statearr_13249_13275[(1)] = (13));

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
});})(c__12583__auto___13261,tc,fc))
;
return ((function (switch__12471__auto__,c__12583__auto___13261,tc,fc){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_13253 = [null,null,null,null,null,null,null,null,null];
(statearr_13253[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_13253[(1)] = (1));

return statearr_13253;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_13232){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_13232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e13254){if((e13254 instanceof Object)){
var ex__12475__auto__ = e13254;
var statearr_13255_13276 = state_13232;
(statearr_13255_13276[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13277 = state_13232;
state_13232 = G__13277;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_13232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_13232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___13261,tc,fc))
})();
var state__12585__auto__ = (function (){var statearr_13256 = f__12584__auto__.call(null);
(statearr_13256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___13261);

return statearr_13256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___13261,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__){
return (function (state_13341){
var state_val_13342 = (state_13341[(1)]);
if((state_val_13342 === (7))){
var inst_13337 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13343_13364 = state_13341__$1;
(statearr_13343_13364[(2)] = inst_13337);

(statearr_13343_13364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (1))){
var inst_13321 = init;
var state_13341__$1 = (function (){var statearr_13344 = state_13341;
(statearr_13344[(7)] = inst_13321);

return statearr_13344;
})();
var statearr_13345_13365 = state_13341__$1;
(statearr_13345_13365[(2)] = null);

(statearr_13345_13365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (4))){
var inst_13324 = (state_13341[(8)]);
var inst_13324__$1 = (state_13341[(2)]);
var inst_13325 = (inst_13324__$1 == null);
var state_13341__$1 = (function (){var statearr_13346 = state_13341;
(statearr_13346[(8)] = inst_13324__$1);

return statearr_13346;
})();
if(cljs.core.truth_(inst_13325)){
var statearr_13347_13366 = state_13341__$1;
(statearr_13347_13366[(1)] = (5));

} else {
var statearr_13348_13367 = state_13341__$1;
(statearr_13348_13367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (6))){
var inst_13328 = (state_13341[(9)]);
var inst_13321 = (state_13341[(7)]);
var inst_13324 = (state_13341[(8)]);
var inst_13328__$1 = f.call(null,inst_13321,inst_13324);
var inst_13329 = cljs.core.reduced_QMARK_.call(null,inst_13328__$1);
var state_13341__$1 = (function (){var statearr_13349 = state_13341;
(statearr_13349[(9)] = inst_13328__$1);

return statearr_13349;
})();
if(inst_13329){
var statearr_13350_13368 = state_13341__$1;
(statearr_13350_13368[(1)] = (8));

} else {
var statearr_13351_13369 = state_13341__$1;
(statearr_13351_13369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (3))){
var inst_13339 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13341__$1,inst_13339);
} else {
if((state_val_13342 === (2))){
var state_13341__$1 = state_13341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13341__$1,(4),ch);
} else {
if((state_val_13342 === (9))){
var inst_13328 = (state_13341[(9)]);
var inst_13321 = inst_13328;
var state_13341__$1 = (function (){var statearr_13352 = state_13341;
(statearr_13352[(7)] = inst_13321);

return statearr_13352;
})();
var statearr_13353_13370 = state_13341__$1;
(statearr_13353_13370[(2)] = null);

(statearr_13353_13370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (5))){
var inst_13321 = (state_13341[(7)]);
var state_13341__$1 = state_13341;
var statearr_13354_13371 = state_13341__$1;
(statearr_13354_13371[(2)] = inst_13321);

(statearr_13354_13371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (10))){
var inst_13335 = (state_13341[(2)]);
var state_13341__$1 = state_13341;
var statearr_13355_13372 = state_13341__$1;
(statearr_13355_13372[(2)] = inst_13335);

(statearr_13355_13372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13342 === (8))){
var inst_13328 = (state_13341[(9)]);
var inst_13331 = cljs.core.deref.call(null,inst_13328);
var state_13341__$1 = state_13341;
var statearr_13356_13373 = state_13341__$1;
(statearr_13356_13373[(2)] = inst_13331);

(statearr_13356_13373[(1)] = (10));


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
});})(c__12583__auto__))
;
return ((function (switch__12471__auto__,c__12583__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12472__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12472__auto____0 = (function (){
var statearr_13360 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13360[(0)] = cljs$core$async$reduce_$_state_machine__12472__auto__);

(statearr_13360[(1)] = (1));

return statearr_13360;
});
var cljs$core$async$reduce_$_state_machine__12472__auto____1 = (function (state_13341){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_13341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e13361){if((e13361 instanceof Object)){
var ex__12475__auto__ = e13361;
var statearr_13362_13374 = state_13341;
(statearr_13362_13374[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13375 = state_13341;
state_13341 = G__13375;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12472__auto__ = function(state_13341){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12472__auto____1.call(this,state_13341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12472__auto____0;
cljs$core$async$reduce_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12472__auto____1;
return cljs$core$async$reduce_$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__))
})();
var state__12585__auto__ = (function (){var statearr_13363 = f__12584__auto__.call(null);
(statearr_13363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_13363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__))
);

return c__12583__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13376 = [];
var len__7157__auto___13428 = arguments.length;
var i__7158__auto___13429 = (0);
while(true){
if((i__7158__auto___13429 < len__7157__auto___13428)){
args13376.push((arguments[i__7158__auto___13429]));

var G__13430 = (i__7158__auto___13429 + (1));
i__7158__auto___13429 = G__13430;
continue;
} else {
}
break;
}

var G__13378 = args13376.length;
switch (G__13378) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13376.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__){
return (function (state_13403){
var state_val_13404 = (state_13403[(1)]);
if((state_val_13404 === (7))){
var inst_13385 = (state_13403[(2)]);
var state_13403__$1 = state_13403;
var statearr_13405_13432 = state_13403__$1;
(statearr_13405_13432[(2)] = inst_13385);

(statearr_13405_13432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (1))){
var inst_13379 = cljs.core.seq.call(null,coll);
var inst_13380 = inst_13379;
var state_13403__$1 = (function (){var statearr_13406 = state_13403;
(statearr_13406[(7)] = inst_13380);

return statearr_13406;
})();
var statearr_13407_13433 = state_13403__$1;
(statearr_13407_13433[(2)] = null);

(statearr_13407_13433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (4))){
var inst_13380 = (state_13403[(7)]);
var inst_13383 = cljs.core.first.call(null,inst_13380);
var state_13403__$1 = state_13403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13403__$1,(7),ch,inst_13383);
} else {
if((state_val_13404 === (13))){
var inst_13397 = (state_13403[(2)]);
var state_13403__$1 = state_13403;
var statearr_13408_13434 = state_13403__$1;
(statearr_13408_13434[(2)] = inst_13397);

(statearr_13408_13434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (6))){
var inst_13388 = (state_13403[(2)]);
var state_13403__$1 = state_13403;
if(cljs.core.truth_(inst_13388)){
var statearr_13409_13435 = state_13403__$1;
(statearr_13409_13435[(1)] = (8));

} else {
var statearr_13410_13436 = state_13403__$1;
(statearr_13410_13436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (3))){
var inst_13401 = (state_13403[(2)]);
var state_13403__$1 = state_13403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13403__$1,inst_13401);
} else {
if((state_val_13404 === (12))){
var state_13403__$1 = state_13403;
var statearr_13411_13437 = state_13403__$1;
(statearr_13411_13437[(2)] = null);

(statearr_13411_13437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (2))){
var inst_13380 = (state_13403[(7)]);
var state_13403__$1 = state_13403;
if(cljs.core.truth_(inst_13380)){
var statearr_13412_13438 = state_13403__$1;
(statearr_13412_13438[(1)] = (4));

} else {
var statearr_13413_13439 = state_13403__$1;
(statearr_13413_13439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (11))){
var inst_13394 = cljs.core.async.close_BANG_.call(null,ch);
var state_13403__$1 = state_13403;
var statearr_13414_13440 = state_13403__$1;
(statearr_13414_13440[(2)] = inst_13394);

(statearr_13414_13440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (9))){
var state_13403__$1 = state_13403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13415_13441 = state_13403__$1;
(statearr_13415_13441[(1)] = (11));

} else {
var statearr_13416_13442 = state_13403__$1;
(statearr_13416_13442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (5))){
var inst_13380 = (state_13403[(7)]);
var state_13403__$1 = state_13403;
var statearr_13417_13443 = state_13403__$1;
(statearr_13417_13443[(2)] = inst_13380);

(statearr_13417_13443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (10))){
var inst_13399 = (state_13403[(2)]);
var state_13403__$1 = state_13403;
var statearr_13418_13444 = state_13403__$1;
(statearr_13418_13444[(2)] = inst_13399);

(statearr_13418_13444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (8))){
var inst_13380 = (state_13403[(7)]);
var inst_13390 = cljs.core.next.call(null,inst_13380);
var inst_13380__$1 = inst_13390;
var state_13403__$1 = (function (){var statearr_13419 = state_13403;
(statearr_13419[(7)] = inst_13380__$1);

return statearr_13419;
})();
var statearr_13420_13445 = state_13403__$1;
(statearr_13420_13445[(2)] = null);

(statearr_13420_13445[(1)] = (2));


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
});})(c__12583__auto__))
;
return ((function (switch__12471__auto__,c__12583__auto__){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_13424 = [null,null,null,null,null,null,null,null];
(statearr_13424[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_13424[(1)] = (1));

return statearr_13424;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_13403){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_13403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e13425){if((e13425 instanceof Object)){
var ex__12475__auto__ = e13425;
var statearr_13426_13446 = state_13403;
(statearr_13426_13446[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13447 = state_13403;
state_13403 = G__13447;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_13403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_13403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__))
})();
var state__12585__auto__ = (function (){var statearr_13427 = f__12584__auto__.call(null);
(statearr_13427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_13427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__))
);

return c__12583__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6750__auto__ = (((_ == null))?null:_);
var m__6751__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,_);
} else {
var m__6751__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6751__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m,ch);
} else {
var m__6751__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m);
} else {
var m__6751__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13669 = (function (mult,ch,cs,meta13670){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13670 = meta13670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13671,meta13670__$1){
var self__ = this;
var _13671__$1 = this;
return (new cljs.core.async.t_cljs$core$async13669(self__.mult,self__.ch,self__.cs,meta13670__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13671){
var self__ = this;
var _13671__$1 = this;
return self__.meta13670;
});})(cs))
;

cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13669.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13669.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13670","meta13670",-1536060911,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13669";

cljs.core.async.t_cljs$core$async13669.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async13669");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13669 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13669(mult__$1,ch__$1,cs__$1,meta13670){
return (new cljs.core.async.t_cljs$core$async13669(mult__$1,ch__$1,cs__$1,meta13670));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13669(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12583__auto___13890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___13890,cs,m,dchan,dctr,done){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___13890,cs,m,dchan,dctr,done){
return (function (state_13802){
var state_val_13803 = (state_13802[(1)]);
if((state_val_13803 === (7))){
var inst_13798 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13804_13891 = state_13802__$1;
(statearr_13804_13891[(2)] = inst_13798);

(statearr_13804_13891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (20))){
var inst_13703 = (state_13802[(7)]);
var inst_13713 = cljs.core.first.call(null,inst_13703);
var inst_13714 = cljs.core.nth.call(null,inst_13713,(0),null);
var inst_13715 = cljs.core.nth.call(null,inst_13713,(1),null);
var state_13802__$1 = (function (){var statearr_13805 = state_13802;
(statearr_13805[(8)] = inst_13714);

return statearr_13805;
})();
if(cljs.core.truth_(inst_13715)){
var statearr_13806_13892 = state_13802__$1;
(statearr_13806_13892[(1)] = (22));

} else {
var statearr_13807_13893 = state_13802__$1;
(statearr_13807_13893[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (27))){
var inst_13674 = (state_13802[(9)]);
var inst_13745 = (state_13802[(10)]);
var inst_13750 = (state_13802[(11)]);
var inst_13743 = (state_13802[(12)]);
var inst_13750__$1 = cljs.core._nth.call(null,inst_13743,inst_13745);
var inst_13751 = cljs.core.async.put_BANG_.call(null,inst_13750__$1,inst_13674,done);
var state_13802__$1 = (function (){var statearr_13808 = state_13802;
(statearr_13808[(11)] = inst_13750__$1);

return statearr_13808;
})();
if(cljs.core.truth_(inst_13751)){
var statearr_13809_13894 = state_13802__$1;
(statearr_13809_13894[(1)] = (30));

} else {
var statearr_13810_13895 = state_13802__$1;
(statearr_13810_13895[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (1))){
var state_13802__$1 = state_13802;
var statearr_13811_13896 = state_13802__$1;
(statearr_13811_13896[(2)] = null);

(statearr_13811_13896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (24))){
var inst_13703 = (state_13802[(7)]);
var inst_13720 = (state_13802[(2)]);
var inst_13721 = cljs.core.next.call(null,inst_13703);
var inst_13683 = inst_13721;
var inst_13684 = null;
var inst_13685 = (0);
var inst_13686 = (0);
var state_13802__$1 = (function (){var statearr_13812 = state_13802;
(statearr_13812[(13)] = inst_13684);

(statearr_13812[(14)] = inst_13720);

(statearr_13812[(15)] = inst_13686);

(statearr_13812[(16)] = inst_13683);

(statearr_13812[(17)] = inst_13685);

return statearr_13812;
})();
var statearr_13813_13897 = state_13802__$1;
(statearr_13813_13897[(2)] = null);

(statearr_13813_13897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (39))){
var state_13802__$1 = state_13802;
var statearr_13817_13898 = state_13802__$1;
(statearr_13817_13898[(2)] = null);

(statearr_13817_13898[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (4))){
var inst_13674 = (state_13802[(9)]);
var inst_13674__$1 = (state_13802[(2)]);
var inst_13675 = (inst_13674__$1 == null);
var state_13802__$1 = (function (){var statearr_13818 = state_13802;
(statearr_13818[(9)] = inst_13674__$1);

return statearr_13818;
})();
if(cljs.core.truth_(inst_13675)){
var statearr_13819_13899 = state_13802__$1;
(statearr_13819_13899[(1)] = (5));

} else {
var statearr_13820_13900 = state_13802__$1;
(statearr_13820_13900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (15))){
var inst_13684 = (state_13802[(13)]);
var inst_13686 = (state_13802[(15)]);
var inst_13683 = (state_13802[(16)]);
var inst_13685 = (state_13802[(17)]);
var inst_13699 = (state_13802[(2)]);
var inst_13700 = (inst_13686 + (1));
var tmp13814 = inst_13684;
var tmp13815 = inst_13683;
var tmp13816 = inst_13685;
var inst_13683__$1 = tmp13815;
var inst_13684__$1 = tmp13814;
var inst_13685__$1 = tmp13816;
var inst_13686__$1 = inst_13700;
var state_13802__$1 = (function (){var statearr_13821 = state_13802;
(statearr_13821[(13)] = inst_13684__$1);

(statearr_13821[(18)] = inst_13699);

(statearr_13821[(15)] = inst_13686__$1);

(statearr_13821[(16)] = inst_13683__$1);

(statearr_13821[(17)] = inst_13685__$1);

return statearr_13821;
})();
var statearr_13822_13901 = state_13802__$1;
(statearr_13822_13901[(2)] = null);

(statearr_13822_13901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (21))){
var inst_13724 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13826_13902 = state_13802__$1;
(statearr_13826_13902[(2)] = inst_13724);

(statearr_13826_13902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (31))){
var inst_13750 = (state_13802[(11)]);
var inst_13754 = done.call(null,null);
var inst_13755 = cljs.core.async.untap_STAR_.call(null,m,inst_13750);
var state_13802__$1 = (function (){var statearr_13827 = state_13802;
(statearr_13827[(19)] = inst_13754);

return statearr_13827;
})();
var statearr_13828_13903 = state_13802__$1;
(statearr_13828_13903[(2)] = inst_13755);

(statearr_13828_13903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (32))){
var inst_13745 = (state_13802[(10)]);
var inst_13744 = (state_13802[(20)]);
var inst_13742 = (state_13802[(21)]);
var inst_13743 = (state_13802[(12)]);
var inst_13757 = (state_13802[(2)]);
var inst_13758 = (inst_13745 + (1));
var tmp13823 = inst_13744;
var tmp13824 = inst_13742;
var tmp13825 = inst_13743;
var inst_13742__$1 = tmp13824;
var inst_13743__$1 = tmp13825;
var inst_13744__$1 = tmp13823;
var inst_13745__$1 = inst_13758;
var state_13802__$1 = (function (){var statearr_13829 = state_13802;
(statearr_13829[(10)] = inst_13745__$1);

(statearr_13829[(20)] = inst_13744__$1);

(statearr_13829[(21)] = inst_13742__$1);

(statearr_13829[(22)] = inst_13757);

(statearr_13829[(12)] = inst_13743__$1);

return statearr_13829;
})();
var statearr_13830_13904 = state_13802__$1;
(statearr_13830_13904[(2)] = null);

(statearr_13830_13904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (40))){
var inst_13770 = (state_13802[(23)]);
var inst_13774 = done.call(null,null);
var inst_13775 = cljs.core.async.untap_STAR_.call(null,m,inst_13770);
var state_13802__$1 = (function (){var statearr_13831 = state_13802;
(statearr_13831[(24)] = inst_13774);

return statearr_13831;
})();
var statearr_13832_13905 = state_13802__$1;
(statearr_13832_13905[(2)] = inst_13775);

(statearr_13832_13905[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (33))){
var inst_13761 = (state_13802[(25)]);
var inst_13763 = cljs.core.chunked_seq_QMARK_.call(null,inst_13761);
var state_13802__$1 = state_13802;
if(inst_13763){
var statearr_13833_13906 = state_13802__$1;
(statearr_13833_13906[(1)] = (36));

} else {
var statearr_13834_13907 = state_13802__$1;
(statearr_13834_13907[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (13))){
var inst_13693 = (state_13802[(26)]);
var inst_13696 = cljs.core.async.close_BANG_.call(null,inst_13693);
var state_13802__$1 = state_13802;
var statearr_13835_13908 = state_13802__$1;
(statearr_13835_13908[(2)] = inst_13696);

(statearr_13835_13908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (22))){
var inst_13714 = (state_13802[(8)]);
var inst_13717 = cljs.core.async.close_BANG_.call(null,inst_13714);
var state_13802__$1 = state_13802;
var statearr_13836_13909 = state_13802__$1;
(statearr_13836_13909[(2)] = inst_13717);

(statearr_13836_13909[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (36))){
var inst_13761 = (state_13802[(25)]);
var inst_13765 = cljs.core.chunk_first.call(null,inst_13761);
var inst_13766 = cljs.core.chunk_rest.call(null,inst_13761);
var inst_13767 = cljs.core.count.call(null,inst_13765);
var inst_13742 = inst_13766;
var inst_13743 = inst_13765;
var inst_13744 = inst_13767;
var inst_13745 = (0);
var state_13802__$1 = (function (){var statearr_13837 = state_13802;
(statearr_13837[(10)] = inst_13745);

(statearr_13837[(20)] = inst_13744);

(statearr_13837[(21)] = inst_13742);

(statearr_13837[(12)] = inst_13743);

return statearr_13837;
})();
var statearr_13838_13910 = state_13802__$1;
(statearr_13838_13910[(2)] = null);

(statearr_13838_13910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (41))){
var inst_13761 = (state_13802[(25)]);
var inst_13777 = (state_13802[(2)]);
var inst_13778 = cljs.core.next.call(null,inst_13761);
var inst_13742 = inst_13778;
var inst_13743 = null;
var inst_13744 = (0);
var inst_13745 = (0);
var state_13802__$1 = (function (){var statearr_13839 = state_13802;
(statearr_13839[(27)] = inst_13777);

(statearr_13839[(10)] = inst_13745);

(statearr_13839[(20)] = inst_13744);

(statearr_13839[(21)] = inst_13742);

(statearr_13839[(12)] = inst_13743);

return statearr_13839;
})();
var statearr_13840_13911 = state_13802__$1;
(statearr_13840_13911[(2)] = null);

(statearr_13840_13911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (43))){
var state_13802__$1 = state_13802;
var statearr_13841_13912 = state_13802__$1;
(statearr_13841_13912[(2)] = null);

(statearr_13841_13912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (29))){
var inst_13786 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13842_13913 = state_13802__$1;
(statearr_13842_13913[(2)] = inst_13786);

(statearr_13842_13913[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (44))){
var inst_13795 = (state_13802[(2)]);
var state_13802__$1 = (function (){var statearr_13843 = state_13802;
(statearr_13843[(28)] = inst_13795);

return statearr_13843;
})();
var statearr_13844_13914 = state_13802__$1;
(statearr_13844_13914[(2)] = null);

(statearr_13844_13914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (6))){
var inst_13734 = (state_13802[(29)]);
var inst_13733 = cljs.core.deref.call(null,cs);
var inst_13734__$1 = cljs.core.keys.call(null,inst_13733);
var inst_13735 = cljs.core.count.call(null,inst_13734__$1);
var inst_13736 = cljs.core.reset_BANG_.call(null,dctr,inst_13735);
var inst_13741 = cljs.core.seq.call(null,inst_13734__$1);
var inst_13742 = inst_13741;
var inst_13743 = null;
var inst_13744 = (0);
var inst_13745 = (0);
var state_13802__$1 = (function (){var statearr_13845 = state_13802;
(statearr_13845[(30)] = inst_13736);

(statearr_13845[(10)] = inst_13745);

(statearr_13845[(20)] = inst_13744);

(statearr_13845[(29)] = inst_13734__$1);

(statearr_13845[(21)] = inst_13742);

(statearr_13845[(12)] = inst_13743);

return statearr_13845;
})();
var statearr_13846_13915 = state_13802__$1;
(statearr_13846_13915[(2)] = null);

(statearr_13846_13915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (28))){
var inst_13761 = (state_13802[(25)]);
var inst_13742 = (state_13802[(21)]);
var inst_13761__$1 = cljs.core.seq.call(null,inst_13742);
var state_13802__$1 = (function (){var statearr_13847 = state_13802;
(statearr_13847[(25)] = inst_13761__$1);

return statearr_13847;
})();
if(inst_13761__$1){
var statearr_13848_13916 = state_13802__$1;
(statearr_13848_13916[(1)] = (33));

} else {
var statearr_13849_13917 = state_13802__$1;
(statearr_13849_13917[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (25))){
var inst_13745 = (state_13802[(10)]);
var inst_13744 = (state_13802[(20)]);
var inst_13747 = (inst_13745 < inst_13744);
var inst_13748 = inst_13747;
var state_13802__$1 = state_13802;
if(cljs.core.truth_(inst_13748)){
var statearr_13850_13918 = state_13802__$1;
(statearr_13850_13918[(1)] = (27));

} else {
var statearr_13851_13919 = state_13802__$1;
(statearr_13851_13919[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (34))){
var state_13802__$1 = state_13802;
var statearr_13852_13920 = state_13802__$1;
(statearr_13852_13920[(2)] = null);

(statearr_13852_13920[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (17))){
var state_13802__$1 = state_13802;
var statearr_13853_13921 = state_13802__$1;
(statearr_13853_13921[(2)] = null);

(statearr_13853_13921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (3))){
var inst_13800 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13802__$1,inst_13800);
} else {
if((state_val_13803 === (12))){
var inst_13729 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13854_13922 = state_13802__$1;
(statearr_13854_13922[(2)] = inst_13729);

(statearr_13854_13922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (2))){
var state_13802__$1 = state_13802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13802__$1,(4),ch);
} else {
if((state_val_13803 === (23))){
var state_13802__$1 = state_13802;
var statearr_13855_13923 = state_13802__$1;
(statearr_13855_13923[(2)] = null);

(statearr_13855_13923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (35))){
var inst_13784 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13856_13924 = state_13802__$1;
(statearr_13856_13924[(2)] = inst_13784);

(statearr_13856_13924[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (19))){
var inst_13703 = (state_13802[(7)]);
var inst_13707 = cljs.core.chunk_first.call(null,inst_13703);
var inst_13708 = cljs.core.chunk_rest.call(null,inst_13703);
var inst_13709 = cljs.core.count.call(null,inst_13707);
var inst_13683 = inst_13708;
var inst_13684 = inst_13707;
var inst_13685 = inst_13709;
var inst_13686 = (0);
var state_13802__$1 = (function (){var statearr_13857 = state_13802;
(statearr_13857[(13)] = inst_13684);

(statearr_13857[(15)] = inst_13686);

(statearr_13857[(16)] = inst_13683);

(statearr_13857[(17)] = inst_13685);

return statearr_13857;
})();
var statearr_13858_13925 = state_13802__$1;
(statearr_13858_13925[(2)] = null);

(statearr_13858_13925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (11))){
var inst_13703 = (state_13802[(7)]);
var inst_13683 = (state_13802[(16)]);
var inst_13703__$1 = cljs.core.seq.call(null,inst_13683);
var state_13802__$1 = (function (){var statearr_13859 = state_13802;
(statearr_13859[(7)] = inst_13703__$1);

return statearr_13859;
})();
if(inst_13703__$1){
var statearr_13860_13926 = state_13802__$1;
(statearr_13860_13926[(1)] = (16));

} else {
var statearr_13861_13927 = state_13802__$1;
(statearr_13861_13927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (9))){
var inst_13731 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13862_13928 = state_13802__$1;
(statearr_13862_13928[(2)] = inst_13731);

(statearr_13862_13928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (5))){
var inst_13681 = cljs.core.deref.call(null,cs);
var inst_13682 = cljs.core.seq.call(null,inst_13681);
var inst_13683 = inst_13682;
var inst_13684 = null;
var inst_13685 = (0);
var inst_13686 = (0);
var state_13802__$1 = (function (){var statearr_13863 = state_13802;
(statearr_13863[(13)] = inst_13684);

(statearr_13863[(15)] = inst_13686);

(statearr_13863[(16)] = inst_13683);

(statearr_13863[(17)] = inst_13685);

return statearr_13863;
})();
var statearr_13864_13929 = state_13802__$1;
(statearr_13864_13929[(2)] = null);

(statearr_13864_13929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (14))){
var state_13802__$1 = state_13802;
var statearr_13865_13930 = state_13802__$1;
(statearr_13865_13930[(2)] = null);

(statearr_13865_13930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (45))){
var inst_13792 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13866_13931 = state_13802__$1;
(statearr_13866_13931[(2)] = inst_13792);

(statearr_13866_13931[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (26))){
var inst_13734 = (state_13802[(29)]);
var inst_13788 = (state_13802[(2)]);
var inst_13789 = cljs.core.seq.call(null,inst_13734);
var state_13802__$1 = (function (){var statearr_13867 = state_13802;
(statearr_13867[(31)] = inst_13788);

return statearr_13867;
})();
if(inst_13789){
var statearr_13868_13932 = state_13802__$1;
(statearr_13868_13932[(1)] = (42));

} else {
var statearr_13869_13933 = state_13802__$1;
(statearr_13869_13933[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (16))){
var inst_13703 = (state_13802[(7)]);
var inst_13705 = cljs.core.chunked_seq_QMARK_.call(null,inst_13703);
var state_13802__$1 = state_13802;
if(inst_13705){
var statearr_13870_13934 = state_13802__$1;
(statearr_13870_13934[(1)] = (19));

} else {
var statearr_13871_13935 = state_13802__$1;
(statearr_13871_13935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (38))){
var inst_13781 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13872_13936 = state_13802__$1;
(statearr_13872_13936[(2)] = inst_13781);

(statearr_13872_13936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (30))){
var state_13802__$1 = state_13802;
var statearr_13873_13937 = state_13802__$1;
(statearr_13873_13937[(2)] = null);

(statearr_13873_13937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (10))){
var inst_13684 = (state_13802[(13)]);
var inst_13686 = (state_13802[(15)]);
var inst_13692 = cljs.core._nth.call(null,inst_13684,inst_13686);
var inst_13693 = cljs.core.nth.call(null,inst_13692,(0),null);
var inst_13694 = cljs.core.nth.call(null,inst_13692,(1),null);
var state_13802__$1 = (function (){var statearr_13874 = state_13802;
(statearr_13874[(26)] = inst_13693);

return statearr_13874;
})();
if(cljs.core.truth_(inst_13694)){
var statearr_13875_13938 = state_13802__$1;
(statearr_13875_13938[(1)] = (13));

} else {
var statearr_13876_13939 = state_13802__$1;
(statearr_13876_13939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (18))){
var inst_13727 = (state_13802[(2)]);
var state_13802__$1 = state_13802;
var statearr_13877_13940 = state_13802__$1;
(statearr_13877_13940[(2)] = inst_13727);

(statearr_13877_13940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (42))){
var state_13802__$1 = state_13802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13802__$1,(45),dchan);
} else {
if((state_val_13803 === (37))){
var inst_13674 = (state_13802[(9)]);
var inst_13761 = (state_13802[(25)]);
var inst_13770 = (state_13802[(23)]);
var inst_13770__$1 = cljs.core.first.call(null,inst_13761);
var inst_13771 = cljs.core.async.put_BANG_.call(null,inst_13770__$1,inst_13674,done);
var state_13802__$1 = (function (){var statearr_13878 = state_13802;
(statearr_13878[(23)] = inst_13770__$1);

return statearr_13878;
})();
if(cljs.core.truth_(inst_13771)){
var statearr_13879_13941 = state_13802__$1;
(statearr_13879_13941[(1)] = (39));

} else {
var statearr_13880_13942 = state_13802__$1;
(statearr_13880_13942[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13803 === (8))){
var inst_13686 = (state_13802[(15)]);
var inst_13685 = (state_13802[(17)]);
var inst_13688 = (inst_13686 < inst_13685);
var inst_13689 = inst_13688;
var state_13802__$1 = state_13802;
if(cljs.core.truth_(inst_13689)){
var statearr_13881_13943 = state_13802__$1;
(statearr_13881_13943[(1)] = (10));

} else {
var statearr_13882_13944 = state_13802__$1;
(statearr_13882_13944[(1)] = (11));

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
});})(c__12583__auto___13890,cs,m,dchan,dctr,done))
;
return ((function (switch__12471__auto__,c__12583__auto___13890,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12472__auto__ = null;
var cljs$core$async$mult_$_state_machine__12472__auto____0 = (function (){
var statearr_13886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13886[(0)] = cljs$core$async$mult_$_state_machine__12472__auto__);

(statearr_13886[(1)] = (1));

return statearr_13886;
});
var cljs$core$async$mult_$_state_machine__12472__auto____1 = (function (state_13802){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_13802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e13887){if((e13887 instanceof Object)){
var ex__12475__auto__ = e13887;
var statearr_13888_13945 = state_13802;
(statearr_13888_13945[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13946 = state_13802;
state_13802 = G__13946;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12472__auto__ = function(state_13802){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12472__auto____1.call(this,state_13802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12472__auto____0;
cljs$core$async$mult_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12472__auto____1;
return cljs$core$async$mult_$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___13890,cs,m,dchan,dctr,done))
})();
var state__12585__auto__ = (function (){var statearr_13889 = f__12584__auto__.call(null);
(statearr_13889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___13890);

return statearr_13889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___13890,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args13947 = [];
var len__7157__auto___13950 = arguments.length;
var i__7158__auto___13951 = (0);
while(true){
if((i__7158__auto___13951 < len__7157__auto___13950)){
args13947.push((arguments[i__7158__auto___13951]));

var G__13952 = (i__7158__auto___13951 + (1));
i__7158__auto___13951 = G__13952;
continue;
} else {
}
break;
}

var G__13949 = args13947.length;
switch (G__13949) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13947.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m,ch);
} else {
var m__6751__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m,ch);
} else {
var m__6751__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m);
} else {
var m__6751__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m,state_map);
} else {
var m__6751__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6750__auto__ = (((m == null))?null:m);
var m__6751__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,m,mode);
} else {
var m__6751__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7164__auto__ = [];
var len__7157__auto___13964 = arguments.length;
var i__7158__auto___13965 = (0);
while(true){
if((i__7158__auto___13965 < len__7157__auto___13964)){
args__7164__auto__.push((arguments[i__7158__auto___13965]));

var G__13966 = (i__7158__auto___13965 + (1));
i__7158__auto___13965 = G__13966;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((3) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7165__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13958){
var map__13959 = p__13958;
var map__13959__$1 = ((((!((map__13959 == null)))?((((map__13959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13959):map__13959);
var opts = map__13959__$1;
var statearr_13961_13967 = state;
(statearr_13961_13967[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13959,map__13959__$1,opts){
return (function (val){
var statearr_13962_13968 = state;
(statearr_13962_13968[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13959,map__13959__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13963_13969 = state;
(statearr_13963_13969[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13954){
var G__13955 = cljs.core.first.call(null,seq13954);
var seq13954__$1 = cljs.core.next.call(null,seq13954);
var G__13956 = cljs.core.first.call(null,seq13954__$1);
var seq13954__$2 = cljs.core.next.call(null,seq13954__$1);
var G__13957 = cljs.core.first.call(null,seq13954__$2);
var seq13954__$3 = cljs.core.next.call(null,seq13954__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13955,G__13956,G__13957,seq13954__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async14133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14133 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14134){
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
this.meta14134 = meta14134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14135,meta14134__$1){
var self__ = this;
var _14135__$1 = this;
return (new cljs.core.async.t_cljs$core$async14133(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14134__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14135){
var self__ = this;
var _14135__$1 = this;
return self__.meta14134;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14134","meta14134",-628767266,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14133";

cljs.core.async.t_cljs$core$async14133.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async14133");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14133 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14133(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14134){
return (new cljs.core.async.t_cljs$core$async14133(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14134));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14133(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12583__auto___14296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___14296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___14296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14233){
var state_val_14234 = (state_14233[(1)]);
if((state_val_14234 === (7))){
var inst_14151 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14235_14297 = state_14233__$1;
(statearr_14235_14297[(2)] = inst_14151);

(statearr_14235_14297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (20))){
var inst_14163 = (state_14233[(7)]);
var state_14233__$1 = state_14233;
var statearr_14236_14298 = state_14233__$1;
(statearr_14236_14298[(2)] = inst_14163);

(statearr_14236_14298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (27))){
var state_14233__$1 = state_14233;
var statearr_14237_14299 = state_14233__$1;
(statearr_14237_14299[(2)] = null);

(statearr_14237_14299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (1))){
var inst_14139 = (state_14233[(8)]);
var inst_14139__$1 = calc_state.call(null);
var inst_14141 = (inst_14139__$1 == null);
var inst_14142 = cljs.core.not.call(null,inst_14141);
var state_14233__$1 = (function (){var statearr_14238 = state_14233;
(statearr_14238[(8)] = inst_14139__$1);

return statearr_14238;
})();
if(inst_14142){
var statearr_14239_14300 = state_14233__$1;
(statearr_14239_14300[(1)] = (2));

} else {
var statearr_14240_14301 = state_14233__$1;
(statearr_14240_14301[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (24))){
var inst_14186 = (state_14233[(9)]);
var inst_14207 = (state_14233[(10)]);
var inst_14193 = (state_14233[(11)]);
var inst_14207__$1 = inst_14186.call(null,inst_14193);
var state_14233__$1 = (function (){var statearr_14241 = state_14233;
(statearr_14241[(10)] = inst_14207__$1);

return statearr_14241;
})();
if(cljs.core.truth_(inst_14207__$1)){
var statearr_14242_14302 = state_14233__$1;
(statearr_14242_14302[(1)] = (29));

} else {
var statearr_14243_14303 = state_14233__$1;
(statearr_14243_14303[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (4))){
var inst_14154 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14154)){
var statearr_14244_14304 = state_14233__$1;
(statearr_14244_14304[(1)] = (8));

} else {
var statearr_14245_14305 = state_14233__$1;
(statearr_14245_14305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (15))){
var inst_14180 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14180)){
var statearr_14246_14306 = state_14233__$1;
(statearr_14246_14306[(1)] = (19));

} else {
var statearr_14247_14307 = state_14233__$1;
(statearr_14247_14307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (21))){
var inst_14185 = (state_14233[(12)]);
var inst_14185__$1 = (state_14233[(2)]);
var inst_14186 = cljs.core.get.call(null,inst_14185__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14187 = cljs.core.get.call(null,inst_14185__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14188 = cljs.core.get.call(null,inst_14185__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14233__$1 = (function (){var statearr_14248 = state_14233;
(statearr_14248[(9)] = inst_14186);

(statearr_14248[(13)] = inst_14187);

(statearr_14248[(12)] = inst_14185__$1);

return statearr_14248;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14233__$1,(22),inst_14188);
} else {
if((state_val_14234 === (31))){
var inst_14215 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14215)){
var statearr_14249_14308 = state_14233__$1;
(statearr_14249_14308[(1)] = (32));

} else {
var statearr_14250_14309 = state_14233__$1;
(statearr_14250_14309[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (32))){
var inst_14192 = (state_14233[(14)]);
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14233__$1,(35),out,inst_14192);
} else {
if((state_val_14234 === (33))){
var inst_14185 = (state_14233[(12)]);
var inst_14163 = inst_14185;
var state_14233__$1 = (function (){var statearr_14251 = state_14233;
(statearr_14251[(7)] = inst_14163);

return statearr_14251;
})();
var statearr_14252_14310 = state_14233__$1;
(statearr_14252_14310[(2)] = null);

(statearr_14252_14310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (13))){
var inst_14163 = (state_14233[(7)]);
var inst_14170 = inst_14163.cljs$lang$protocol_mask$partition0$;
var inst_14171 = (inst_14170 & (64));
var inst_14172 = inst_14163.cljs$core$ISeq$;
var inst_14173 = (inst_14171) || (inst_14172);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14173)){
var statearr_14253_14311 = state_14233__$1;
(statearr_14253_14311[(1)] = (16));

} else {
var statearr_14254_14312 = state_14233__$1;
(statearr_14254_14312[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (22))){
var inst_14193 = (state_14233[(11)]);
var inst_14192 = (state_14233[(14)]);
var inst_14191 = (state_14233[(2)]);
var inst_14192__$1 = cljs.core.nth.call(null,inst_14191,(0),null);
var inst_14193__$1 = cljs.core.nth.call(null,inst_14191,(1),null);
var inst_14194 = (inst_14192__$1 == null);
var inst_14195 = cljs.core._EQ_.call(null,inst_14193__$1,change);
var inst_14196 = (inst_14194) || (inst_14195);
var state_14233__$1 = (function (){var statearr_14255 = state_14233;
(statearr_14255[(11)] = inst_14193__$1);

(statearr_14255[(14)] = inst_14192__$1);

return statearr_14255;
})();
if(cljs.core.truth_(inst_14196)){
var statearr_14256_14313 = state_14233__$1;
(statearr_14256_14313[(1)] = (23));

} else {
var statearr_14257_14314 = state_14233__$1;
(statearr_14257_14314[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (36))){
var inst_14185 = (state_14233[(12)]);
var inst_14163 = inst_14185;
var state_14233__$1 = (function (){var statearr_14258 = state_14233;
(statearr_14258[(7)] = inst_14163);

return statearr_14258;
})();
var statearr_14259_14315 = state_14233__$1;
(statearr_14259_14315[(2)] = null);

(statearr_14259_14315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (29))){
var inst_14207 = (state_14233[(10)]);
var state_14233__$1 = state_14233;
var statearr_14260_14316 = state_14233__$1;
(statearr_14260_14316[(2)] = inst_14207);

(statearr_14260_14316[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (6))){
var state_14233__$1 = state_14233;
var statearr_14261_14317 = state_14233__$1;
(statearr_14261_14317[(2)] = false);

(statearr_14261_14317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (28))){
var inst_14203 = (state_14233[(2)]);
var inst_14204 = calc_state.call(null);
var inst_14163 = inst_14204;
var state_14233__$1 = (function (){var statearr_14262 = state_14233;
(statearr_14262[(7)] = inst_14163);

(statearr_14262[(15)] = inst_14203);

return statearr_14262;
})();
var statearr_14263_14318 = state_14233__$1;
(statearr_14263_14318[(2)] = null);

(statearr_14263_14318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (25))){
var inst_14229 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14264_14319 = state_14233__$1;
(statearr_14264_14319[(2)] = inst_14229);

(statearr_14264_14319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (34))){
var inst_14227 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14265_14320 = state_14233__$1;
(statearr_14265_14320[(2)] = inst_14227);

(statearr_14265_14320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (17))){
var state_14233__$1 = state_14233;
var statearr_14266_14321 = state_14233__$1;
(statearr_14266_14321[(2)] = false);

(statearr_14266_14321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (3))){
var state_14233__$1 = state_14233;
var statearr_14267_14322 = state_14233__$1;
(statearr_14267_14322[(2)] = false);

(statearr_14267_14322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (12))){
var inst_14231 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14233__$1,inst_14231);
} else {
if((state_val_14234 === (2))){
var inst_14139 = (state_14233[(8)]);
var inst_14144 = inst_14139.cljs$lang$protocol_mask$partition0$;
var inst_14145 = (inst_14144 & (64));
var inst_14146 = inst_14139.cljs$core$ISeq$;
var inst_14147 = (inst_14145) || (inst_14146);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14147)){
var statearr_14268_14323 = state_14233__$1;
(statearr_14268_14323[(1)] = (5));

} else {
var statearr_14269_14324 = state_14233__$1;
(statearr_14269_14324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (23))){
var inst_14192 = (state_14233[(14)]);
var inst_14198 = (inst_14192 == null);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14198)){
var statearr_14270_14325 = state_14233__$1;
(statearr_14270_14325[(1)] = (26));

} else {
var statearr_14271_14326 = state_14233__$1;
(statearr_14271_14326[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (35))){
var inst_14218 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14218)){
var statearr_14272_14327 = state_14233__$1;
(statearr_14272_14327[(1)] = (36));

} else {
var statearr_14273_14328 = state_14233__$1;
(statearr_14273_14328[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (19))){
var inst_14163 = (state_14233[(7)]);
var inst_14182 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14163);
var state_14233__$1 = state_14233;
var statearr_14274_14329 = state_14233__$1;
(statearr_14274_14329[(2)] = inst_14182);

(statearr_14274_14329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (11))){
var inst_14163 = (state_14233[(7)]);
var inst_14167 = (inst_14163 == null);
var inst_14168 = cljs.core.not.call(null,inst_14167);
var state_14233__$1 = state_14233;
if(inst_14168){
var statearr_14275_14330 = state_14233__$1;
(statearr_14275_14330[(1)] = (13));

} else {
var statearr_14276_14331 = state_14233__$1;
(statearr_14276_14331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (9))){
var inst_14139 = (state_14233[(8)]);
var state_14233__$1 = state_14233;
var statearr_14277_14332 = state_14233__$1;
(statearr_14277_14332[(2)] = inst_14139);

(statearr_14277_14332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (5))){
var state_14233__$1 = state_14233;
var statearr_14278_14333 = state_14233__$1;
(statearr_14278_14333[(2)] = true);

(statearr_14278_14333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (14))){
var state_14233__$1 = state_14233;
var statearr_14279_14334 = state_14233__$1;
(statearr_14279_14334[(2)] = false);

(statearr_14279_14334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (26))){
var inst_14193 = (state_14233[(11)]);
var inst_14200 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14193);
var state_14233__$1 = state_14233;
var statearr_14280_14335 = state_14233__$1;
(statearr_14280_14335[(2)] = inst_14200);

(statearr_14280_14335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (16))){
var state_14233__$1 = state_14233;
var statearr_14281_14336 = state_14233__$1;
(statearr_14281_14336[(2)] = true);

(statearr_14281_14336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (38))){
var inst_14223 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14282_14337 = state_14233__$1;
(statearr_14282_14337[(2)] = inst_14223);

(statearr_14282_14337[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (30))){
var inst_14186 = (state_14233[(9)]);
var inst_14187 = (state_14233[(13)]);
var inst_14193 = (state_14233[(11)]);
var inst_14210 = cljs.core.empty_QMARK_.call(null,inst_14186);
var inst_14211 = inst_14187.call(null,inst_14193);
var inst_14212 = cljs.core.not.call(null,inst_14211);
var inst_14213 = (inst_14210) && (inst_14212);
var state_14233__$1 = state_14233;
var statearr_14283_14338 = state_14233__$1;
(statearr_14283_14338[(2)] = inst_14213);

(statearr_14283_14338[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (10))){
var inst_14139 = (state_14233[(8)]);
var inst_14159 = (state_14233[(2)]);
var inst_14160 = cljs.core.get.call(null,inst_14159,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14161 = cljs.core.get.call(null,inst_14159,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14162 = cljs.core.get.call(null,inst_14159,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14163 = inst_14139;
var state_14233__$1 = (function (){var statearr_14284 = state_14233;
(statearr_14284[(16)] = inst_14160);

(statearr_14284[(17)] = inst_14161);

(statearr_14284[(7)] = inst_14163);

(statearr_14284[(18)] = inst_14162);

return statearr_14284;
})();
var statearr_14285_14339 = state_14233__$1;
(statearr_14285_14339[(2)] = null);

(statearr_14285_14339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (18))){
var inst_14177 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14286_14340 = state_14233__$1;
(statearr_14286_14340[(2)] = inst_14177);

(statearr_14286_14340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (37))){
var state_14233__$1 = state_14233;
var statearr_14287_14341 = state_14233__$1;
(statearr_14287_14341[(2)] = null);

(statearr_14287_14341[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (8))){
var inst_14139 = (state_14233[(8)]);
var inst_14156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14139);
var state_14233__$1 = state_14233;
var statearr_14288_14342 = state_14233__$1;
(statearr_14288_14342[(2)] = inst_14156);

(statearr_14288_14342[(1)] = (10));


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
});})(c__12583__auto___14296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12471__auto__,c__12583__auto___14296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12472__auto__ = null;
var cljs$core$async$mix_$_state_machine__12472__auto____0 = (function (){
var statearr_14292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14292[(0)] = cljs$core$async$mix_$_state_machine__12472__auto__);

(statearr_14292[(1)] = (1));

return statearr_14292;
});
var cljs$core$async$mix_$_state_machine__12472__auto____1 = (function (state_14233){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_14233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e14293){if((e14293 instanceof Object)){
var ex__12475__auto__ = e14293;
var statearr_14294_14343 = state_14233;
(statearr_14294_14343[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14344 = state_14233;
state_14233 = G__14344;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12472__auto__ = function(state_14233){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12472__auto____1.call(this,state_14233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12472__auto____0;
cljs$core$async$mix_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12472__auto____1;
return cljs$core$async$mix_$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___14296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12585__auto__ = (function (){var statearr_14295 = f__12584__auto__.call(null);
(statearr_14295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___14296);

return statearr_14295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___14296,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6750__auto__ = (((p == null))?null:p);
var m__6751__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6751__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6750__auto__ = (((p == null))?null:p);
var m__6751__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,p,v,ch);
} else {
var m__6751__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14345 = [];
var len__7157__auto___14348 = arguments.length;
var i__7158__auto___14349 = (0);
while(true){
if((i__7158__auto___14349 < len__7157__auto___14348)){
args14345.push((arguments[i__7158__auto___14349]));

var G__14350 = (i__7158__auto___14349 + (1));
i__7158__auto___14349 = G__14350;
continue;
} else {
}
break;
}

var G__14347 = args14345.length;
switch (G__14347) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14345.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6750__auto__ = (((p == null))?null:p);
var m__6751__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,p);
} else {
var m__6751__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6750__auto__ = (((p == null))?null:p);
var m__6751__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,p,v);
} else {
var m__6751__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14353 = [];
var len__7157__auto___14478 = arguments.length;
var i__7158__auto___14479 = (0);
while(true){
if((i__7158__auto___14479 < len__7157__auto___14478)){
args14353.push((arguments[i__7158__auto___14479]));

var G__14480 = (i__7158__auto___14479 + (1));
i__7158__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var G__14355 = args14353.length;
switch (G__14355) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14353.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6087__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6087__auto__,mults){
return (function (p1__14352_SHARP_){
if(cljs.core.truth_(p1__14352_SHARP_.call(null,topic))){
return p1__14352_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14352_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6087__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14356 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14357){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14357 = meta14357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14358,meta14357__$1){
var self__ = this;
var _14358__$1 = this;
return (new cljs.core.async.t_cljs$core$async14356(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14357__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14358){
var self__ = this;
var _14358__$1 = this;
return self__.meta14357;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14357","meta14357",-1585520101,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14356";

cljs.core.async.t_cljs$core$async14356.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async14356");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14356 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14357){
return (new cljs.core.async.t_cljs$core$async14356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14357));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14356(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12583__auto___14482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___14482,mults,ensure_mult,p){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___14482,mults,ensure_mult,p){
return (function (state_14430){
var state_val_14431 = (state_14430[(1)]);
if((state_val_14431 === (7))){
var inst_14426 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14432_14483 = state_14430__$1;
(statearr_14432_14483[(2)] = inst_14426);

(statearr_14432_14483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (20))){
var state_14430__$1 = state_14430;
var statearr_14433_14484 = state_14430__$1;
(statearr_14433_14484[(2)] = null);

(statearr_14433_14484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (1))){
var state_14430__$1 = state_14430;
var statearr_14434_14485 = state_14430__$1;
(statearr_14434_14485[(2)] = null);

(statearr_14434_14485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (24))){
var inst_14409 = (state_14430[(7)]);
var inst_14418 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14409);
var state_14430__$1 = state_14430;
var statearr_14435_14486 = state_14430__$1;
(statearr_14435_14486[(2)] = inst_14418);

(statearr_14435_14486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (4))){
var inst_14361 = (state_14430[(8)]);
var inst_14361__$1 = (state_14430[(2)]);
var inst_14362 = (inst_14361__$1 == null);
var state_14430__$1 = (function (){var statearr_14436 = state_14430;
(statearr_14436[(8)] = inst_14361__$1);

return statearr_14436;
})();
if(cljs.core.truth_(inst_14362)){
var statearr_14437_14487 = state_14430__$1;
(statearr_14437_14487[(1)] = (5));

} else {
var statearr_14438_14488 = state_14430__$1;
(statearr_14438_14488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (15))){
var inst_14403 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14439_14489 = state_14430__$1;
(statearr_14439_14489[(2)] = inst_14403);

(statearr_14439_14489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (21))){
var inst_14423 = (state_14430[(2)]);
var state_14430__$1 = (function (){var statearr_14440 = state_14430;
(statearr_14440[(9)] = inst_14423);

return statearr_14440;
})();
var statearr_14441_14490 = state_14430__$1;
(statearr_14441_14490[(2)] = null);

(statearr_14441_14490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (13))){
var inst_14385 = (state_14430[(10)]);
var inst_14387 = cljs.core.chunked_seq_QMARK_.call(null,inst_14385);
var state_14430__$1 = state_14430;
if(inst_14387){
var statearr_14442_14491 = state_14430__$1;
(statearr_14442_14491[(1)] = (16));

} else {
var statearr_14443_14492 = state_14430__$1;
(statearr_14443_14492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (22))){
var inst_14415 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
if(cljs.core.truth_(inst_14415)){
var statearr_14444_14493 = state_14430__$1;
(statearr_14444_14493[(1)] = (23));

} else {
var statearr_14445_14494 = state_14430__$1;
(statearr_14445_14494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (6))){
var inst_14409 = (state_14430[(7)]);
var inst_14361 = (state_14430[(8)]);
var inst_14411 = (state_14430[(11)]);
var inst_14409__$1 = topic_fn.call(null,inst_14361);
var inst_14410 = cljs.core.deref.call(null,mults);
var inst_14411__$1 = cljs.core.get.call(null,inst_14410,inst_14409__$1);
var state_14430__$1 = (function (){var statearr_14446 = state_14430;
(statearr_14446[(7)] = inst_14409__$1);

(statearr_14446[(11)] = inst_14411__$1);

return statearr_14446;
})();
if(cljs.core.truth_(inst_14411__$1)){
var statearr_14447_14495 = state_14430__$1;
(statearr_14447_14495[(1)] = (19));

} else {
var statearr_14448_14496 = state_14430__$1;
(statearr_14448_14496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (25))){
var inst_14420 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14449_14497 = state_14430__$1;
(statearr_14449_14497[(2)] = inst_14420);

(statearr_14449_14497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (17))){
var inst_14385 = (state_14430[(10)]);
var inst_14394 = cljs.core.first.call(null,inst_14385);
var inst_14395 = cljs.core.async.muxch_STAR_.call(null,inst_14394);
var inst_14396 = cljs.core.async.close_BANG_.call(null,inst_14395);
var inst_14397 = cljs.core.next.call(null,inst_14385);
var inst_14371 = inst_14397;
var inst_14372 = null;
var inst_14373 = (0);
var inst_14374 = (0);
var state_14430__$1 = (function (){var statearr_14450 = state_14430;
(statearr_14450[(12)] = inst_14371);

(statearr_14450[(13)] = inst_14374);

(statearr_14450[(14)] = inst_14373);

(statearr_14450[(15)] = inst_14396);

(statearr_14450[(16)] = inst_14372);

return statearr_14450;
})();
var statearr_14451_14498 = state_14430__$1;
(statearr_14451_14498[(2)] = null);

(statearr_14451_14498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (3))){
var inst_14428 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14430__$1,inst_14428);
} else {
if((state_val_14431 === (12))){
var inst_14405 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14452_14499 = state_14430__$1;
(statearr_14452_14499[(2)] = inst_14405);

(statearr_14452_14499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (2))){
var state_14430__$1 = state_14430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14430__$1,(4),ch);
} else {
if((state_val_14431 === (23))){
var state_14430__$1 = state_14430;
var statearr_14453_14500 = state_14430__$1;
(statearr_14453_14500[(2)] = null);

(statearr_14453_14500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (19))){
var inst_14361 = (state_14430[(8)]);
var inst_14411 = (state_14430[(11)]);
var inst_14413 = cljs.core.async.muxch_STAR_.call(null,inst_14411);
var state_14430__$1 = state_14430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14430__$1,(22),inst_14413,inst_14361);
} else {
if((state_val_14431 === (11))){
var inst_14371 = (state_14430[(12)]);
var inst_14385 = (state_14430[(10)]);
var inst_14385__$1 = cljs.core.seq.call(null,inst_14371);
var state_14430__$1 = (function (){var statearr_14454 = state_14430;
(statearr_14454[(10)] = inst_14385__$1);

return statearr_14454;
})();
if(inst_14385__$1){
var statearr_14455_14501 = state_14430__$1;
(statearr_14455_14501[(1)] = (13));

} else {
var statearr_14456_14502 = state_14430__$1;
(statearr_14456_14502[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (9))){
var inst_14407 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14457_14503 = state_14430__$1;
(statearr_14457_14503[(2)] = inst_14407);

(statearr_14457_14503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (5))){
var inst_14368 = cljs.core.deref.call(null,mults);
var inst_14369 = cljs.core.vals.call(null,inst_14368);
var inst_14370 = cljs.core.seq.call(null,inst_14369);
var inst_14371 = inst_14370;
var inst_14372 = null;
var inst_14373 = (0);
var inst_14374 = (0);
var state_14430__$1 = (function (){var statearr_14458 = state_14430;
(statearr_14458[(12)] = inst_14371);

(statearr_14458[(13)] = inst_14374);

(statearr_14458[(14)] = inst_14373);

(statearr_14458[(16)] = inst_14372);

return statearr_14458;
})();
var statearr_14459_14504 = state_14430__$1;
(statearr_14459_14504[(2)] = null);

(statearr_14459_14504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (14))){
var state_14430__$1 = state_14430;
var statearr_14463_14505 = state_14430__$1;
(statearr_14463_14505[(2)] = null);

(statearr_14463_14505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (16))){
var inst_14385 = (state_14430[(10)]);
var inst_14389 = cljs.core.chunk_first.call(null,inst_14385);
var inst_14390 = cljs.core.chunk_rest.call(null,inst_14385);
var inst_14391 = cljs.core.count.call(null,inst_14389);
var inst_14371 = inst_14390;
var inst_14372 = inst_14389;
var inst_14373 = inst_14391;
var inst_14374 = (0);
var state_14430__$1 = (function (){var statearr_14464 = state_14430;
(statearr_14464[(12)] = inst_14371);

(statearr_14464[(13)] = inst_14374);

(statearr_14464[(14)] = inst_14373);

(statearr_14464[(16)] = inst_14372);

return statearr_14464;
})();
var statearr_14465_14506 = state_14430__$1;
(statearr_14465_14506[(2)] = null);

(statearr_14465_14506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (10))){
var inst_14371 = (state_14430[(12)]);
var inst_14374 = (state_14430[(13)]);
var inst_14373 = (state_14430[(14)]);
var inst_14372 = (state_14430[(16)]);
var inst_14379 = cljs.core._nth.call(null,inst_14372,inst_14374);
var inst_14380 = cljs.core.async.muxch_STAR_.call(null,inst_14379);
var inst_14381 = cljs.core.async.close_BANG_.call(null,inst_14380);
var inst_14382 = (inst_14374 + (1));
var tmp14460 = inst_14371;
var tmp14461 = inst_14373;
var tmp14462 = inst_14372;
var inst_14371__$1 = tmp14460;
var inst_14372__$1 = tmp14462;
var inst_14373__$1 = tmp14461;
var inst_14374__$1 = inst_14382;
var state_14430__$1 = (function (){var statearr_14466 = state_14430;
(statearr_14466[(12)] = inst_14371__$1);

(statearr_14466[(13)] = inst_14374__$1);

(statearr_14466[(14)] = inst_14373__$1);

(statearr_14466[(16)] = inst_14372__$1);

(statearr_14466[(17)] = inst_14381);

return statearr_14466;
})();
var statearr_14467_14507 = state_14430__$1;
(statearr_14467_14507[(2)] = null);

(statearr_14467_14507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (18))){
var inst_14400 = (state_14430[(2)]);
var state_14430__$1 = state_14430;
var statearr_14468_14508 = state_14430__$1;
(statearr_14468_14508[(2)] = inst_14400);

(statearr_14468_14508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14431 === (8))){
var inst_14374 = (state_14430[(13)]);
var inst_14373 = (state_14430[(14)]);
var inst_14376 = (inst_14374 < inst_14373);
var inst_14377 = inst_14376;
var state_14430__$1 = state_14430;
if(cljs.core.truth_(inst_14377)){
var statearr_14469_14509 = state_14430__$1;
(statearr_14469_14509[(1)] = (10));

} else {
var statearr_14470_14510 = state_14430__$1;
(statearr_14470_14510[(1)] = (11));

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
});})(c__12583__auto___14482,mults,ensure_mult,p))
;
return ((function (switch__12471__auto__,c__12583__auto___14482,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_14474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14474[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_14474[(1)] = (1));

return statearr_14474;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_14430){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_14430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e14475){if((e14475 instanceof Object)){
var ex__12475__auto__ = e14475;
var statearr_14476_14511 = state_14430;
(statearr_14476_14511[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14512 = state_14430;
state_14430 = G__14512;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_14430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_14430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___14482,mults,ensure_mult,p))
})();
var state__12585__auto__ = (function (){var statearr_14477 = f__12584__auto__.call(null);
(statearr_14477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___14482);

return statearr_14477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___14482,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14513 = [];
var len__7157__auto___14516 = arguments.length;
var i__7158__auto___14517 = (0);
while(true){
if((i__7158__auto___14517 < len__7157__auto___14516)){
args14513.push((arguments[i__7158__auto___14517]));

var G__14518 = (i__7158__auto___14517 + (1));
i__7158__auto___14517 = G__14518;
continue;
} else {
}
break;
}

var G__14515 = args14513.length;
switch (G__14515) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14513.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14520 = [];
var len__7157__auto___14523 = arguments.length;
var i__7158__auto___14524 = (0);
while(true){
if((i__7158__auto___14524 < len__7157__auto___14523)){
args14520.push((arguments[i__7158__auto___14524]));

var G__14525 = (i__7158__auto___14524 + (1));
i__7158__auto___14524 = G__14525;
continue;
} else {
}
break;
}

var G__14522 = args14520.length;
switch (G__14522) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14520.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14527 = [];
var len__7157__auto___14598 = arguments.length;
var i__7158__auto___14599 = (0);
while(true){
if((i__7158__auto___14599 < len__7157__auto___14598)){
args14527.push((arguments[i__7158__auto___14599]));

var G__14600 = (i__7158__auto___14599 + (1));
i__7158__auto___14599 = G__14600;
continue;
} else {
}
break;
}

var G__14529 = args14527.length;
switch (G__14529) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14527.length)].join('')));

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
var c__12583__auto___14602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___14602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___14602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14568){
var state_val_14569 = (state_14568[(1)]);
if((state_val_14569 === (7))){
var state_14568__$1 = state_14568;
var statearr_14570_14603 = state_14568__$1;
(statearr_14570_14603[(2)] = null);

(statearr_14570_14603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (1))){
var state_14568__$1 = state_14568;
var statearr_14571_14604 = state_14568__$1;
(statearr_14571_14604[(2)] = null);

(statearr_14571_14604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (4))){
var inst_14532 = (state_14568[(7)]);
var inst_14534 = (inst_14532 < cnt);
var state_14568__$1 = state_14568;
if(cljs.core.truth_(inst_14534)){
var statearr_14572_14605 = state_14568__$1;
(statearr_14572_14605[(1)] = (6));

} else {
var statearr_14573_14606 = state_14568__$1;
(statearr_14573_14606[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (15))){
var inst_14564 = (state_14568[(2)]);
var state_14568__$1 = state_14568;
var statearr_14574_14607 = state_14568__$1;
(statearr_14574_14607[(2)] = inst_14564);

(statearr_14574_14607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (13))){
var inst_14557 = cljs.core.async.close_BANG_.call(null,out);
var state_14568__$1 = state_14568;
var statearr_14575_14608 = state_14568__$1;
(statearr_14575_14608[(2)] = inst_14557);

(statearr_14575_14608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (6))){
var state_14568__$1 = state_14568;
var statearr_14576_14609 = state_14568__$1;
(statearr_14576_14609[(2)] = null);

(statearr_14576_14609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (3))){
var inst_14566 = (state_14568[(2)]);
var state_14568__$1 = state_14568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14568__$1,inst_14566);
} else {
if((state_val_14569 === (12))){
var inst_14554 = (state_14568[(8)]);
var inst_14554__$1 = (state_14568[(2)]);
var inst_14555 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14554__$1);
var state_14568__$1 = (function (){var statearr_14577 = state_14568;
(statearr_14577[(8)] = inst_14554__$1);

return statearr_14577;
})();
if(cljs.core.truth_(inst_14555)){
var statearr_14578_14610 = state_14568__$1;
(statearr_14578_14610[(1)] = (13));

} else {
var statearr_14579_14611 = state_14568__$1;
(statearr_14579_14611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (2))){
var inst_14531 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14532 = (0);
var state_14568__$1 = (function (){var statearr_14580 = state_14568;
(statearr_14580[(7)] = inst_14532);

(statearr_14580[(9)] = inst_14531);

return statearr_14580;
})();
var statearr_14581_14612 = state_14568__$1;
(statearr_14581_14612[(2)] = null);

(statearr_14581_14612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (11))){
var inst_14532 = (state_14568[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14568,(10),Object,null,(9));
var inst_14541 = chs__$1.call(null,inst_14532);
var inst_14542 = done.call(null,inst_14532);
var inst_14543 = cljs.core.async.take_BANG_.call(null,inst_14541,inst_14542);
var state_14568__$1 = state_14568;
var statearr_14582_14613 = state_14568__$1;
(statearr_14582_14613[(2)] = inst_14543);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (9))){
var inst_14532 = (state_14568[(7)]);
var inst_14545 = (state_14568[(2)]);
var inst_14546 = (inst_14532 + (1));
var inst_14532__$1 = inst_14546;
var state_14568__$1 = (function (){var statearr_14583 = state_14568;
(statearr_14583[(10)] = inst_14545);

(statearr_14583[(7)] = inst_14532__$1);

return statearr_14583;
})();
var statearr_14584_14614 = state_14568__$1;
(statearr_14584_14614[(2)] = null);

(statearr_14584_14614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (5))){
var inst_14552 = (state_14568[(2)]);
var state_14568__$1 = (function (){var statearr_14585 = state_14568;
(statearr_14585[(11)] = inst_14552);

return statearr_14585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14568__$1,(12),dchan);
} else {
if((state_val_14569 === (14))){
var inst_14554 = (state_14568[(8)]);
var inst_14559 = cljs.core.apply.call(null,f,inst_14554);
var state_14568__$1 = state_14568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14568__$1,(16),out,inst_14559);
} else {
if((state_val_14569 === (16))){
var inst_14561 = (state_14568[(2)]);
var state_14568__$1 = (function (){var statearr_14586 = state_14568;
(statearr_14586[(12)] = inst_14561);

return statearr_14586;
})();
var statearr_14587_14615 = state_14568__$1;
(statearr_14587_14615[(2)] = null);

(statearr_14587_14615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (10))){
var inst_14536 = (state_14568[(2)]);
var inst_14537 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14568__$1 = (function (){var statearr_14588 = state_14568;
(statearr_14588[(13)] = inst_14536);

return statearr_14588;
})();
var statearr_14589_14616 = state_14568__$1;
(statearr_14589_14616[(2)] = inst_14537);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (8))){
var inst_14550 = (state_14568[(2)]);
var state_14568__$1 = state_14568;
var statearr_14590_14617 = state_14568__$1;
(statearr_14590_14617[(2)] = inst_14550);

(statearr_14590_14617[(1)] = (5));


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
});})(c__12583__auto___14602,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12471__auto__,c__12583__auto___14602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_14594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14594[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_14594[(1)] = (1));

return statearr_14594;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_14568){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_14568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e14595){if((e14595 instanceof Object)){
var ex__12475__auto__ = e14595;
var statearr_14596_14618 = state_14568;
(statearr_14596_14618[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14619 = state_14568;
state_14568 = G__14619;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_14568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_14568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___14602,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12585__auto__ = (function (){var statearr_14597 = f__12584__auto__.call(null);
(statearr_14597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___14602);

return statearr_14597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___14602,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14621 = [];
var len__7157__auto___14677 = arguments.length;
var i__7158__auto___14678 = (0);
while(true){
if((i__7158__auto___14678 < len__7157__auto___14677)){
args14621.push((arguments[i__7158__auto___14678]));

var G__14679 = (i__7158__auto___14678 + (1));
i__7158__auto___14678 = G__14679;
continue;
} else {
}
break;
}

var G__14623 = args14621.length;
switch (G__14623) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14621.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12583__auto___14681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___14681,out){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___14681,out){
return (function (state_14653){
var state_val_14654 = (state_14653[(1)]);
if((state_val_14654 === (7))){
var inst_14632 = (state_14653[(7)]);
var inst_14633 = (state_14653[(8)]);
var inst_14632__$1 = (state_14653[(2)]);
var inst_14633__$1 = cljs.core.nth.call(null,inst_14632__$1,(0),null);
var inst_14634 = cljs.core.nth.call(null,inst_14632__$1,(1),null);
var inst_14635 = (inst_14633__$1 == null);
var state_14653__$1 = (function (){var statearr_14655 = state_14653;
(statearr_14655[(7)] = inst_14632__$1);

(statearr_14655[(8)] = inst_14633__$1);

(statearr_14655[(9)] = inst_14634);

return statearr_14655;
})();
if(cljs.core.truth_(inst_14635)){
var statearr_14656_14682 = state_14653__$1;
(statearr_14656_14682[(1)] = (8));

} else {
var statearr_14657_14683 = state_14653__$1;
(statearr_14657_14683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14654 === (1))){
var inst_14624 = cljs.core.vec.call(null,chs);
var inst_14625 = inst_14624;
var state_14653__$1 = (function (){var statearr_14658 = state_14653;
(statearr_14658[(10)] = inst_14625);

return statearr_14658;
})();
var statearr_14659_14684 = state_14653__$1;
(statearr_14659_14684[(2)] = null);

(statearr_14659_14684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14654 === (4))){
var inst_14625 = (state_14653[(10)]);
var state_14653__$1 = state_14653;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14653__$1,(7),inst_14625);
} else {
if((state_val_14654 === (6))){
var inst_14649 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
var statearr_14660_14685 = state_14653__$1;
(statearr_14660_14685[(2)] = inst_14649);

(statearr_14660_14685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14654 === (3))){
var inst_14651 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14653__$1,inst_14651);
} else {
if((state_val_14654 === (2))){
var inst_14625 = (state_14653[(10)]);
var inst_14627 = cljs.core.count.call(null,inst_14625);
var inst_14628 = (inst_14627 > (0));
var state_14653__$1 = state_14653;
if(cljs.core.truth_(inst_14628)){
var statearr_14662_14686 = state_14653__$1;
(statearr_14662_14686[(1)] = (4));

} else {
var statearr_14663_14687 = state_14653__$1;
(statearr_14663_14687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14654 === (11))){
var inst_14625 = (state_14653[(10)]);
var inst_14642 = (state_14653[(2)]);
var tmp14661 = inst_14625;
var inst_14625__$1 = tmp14661;
var state_14653__$1 = (function (){var statearr_14664 = state_14653;
(statearr_14664[(11)] = inst_14642);

(statearr_14664[(10)] = inst_14625__$1);

return statearr_14664;
})();
var statearr_14665_14688 = state_14653__$1;
(statearr_14665_14688[(2)] = null);

(statearr_14665_14688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14654 === (9))){
var inst_14633 = (state_14653[(8)]);
var state_14653__$1 = state_14653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14653__$1,(11),out,inst_14633);
} else {
if((state_val_14654 === (5))){
var inst_14647 = cljs.core.async.close_BANG_.call(null,out);
var state_14653__$1 = state_14653;
var statearr_14666_14689 = state_14653__$1;
(statearr_14666_14689[(2)] = inst_14647);

(statearr_14666_14689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14654 === (10))){
var inst_14645 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
var statearr_14667_14690 = state_14653__$1;
(statearr_14667_14690[(2)] = inst_14645);

(statearr_14667_14690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14654 === (8))){
var inst_14632 = (state_14653[(7)]);
var inst_14633 = (state_14653[(8)]);
var inst_14634 = (state_14653[(9)]);
var inst_14625 = (state_14653[(10)]);
var inst_14637 = (function (){var cs = inst_14625;
var vec__14630 = inst_14632;
var v = inst_14633;
var c = inst_14634;
return ((function (cs,vec__14630,v,c,inst_14632,inst_14633,inst_14634,inst_14625,state_val_14654,c__12583__auto___14681,out){
return (function (p1__14620_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14620_SHARP_);
});
;})(cs,vec__14630,v,c,inst_14632,inst_14633,inst_14634,inst_14625,state_val_14654,c__12583__auto___14681,out))
})();
var inst_14638 = cljs.core.filterv.call(null,inst_14637,inst_14625);
var inst_14625__$1 = inst_14638;
var state_14653__$1 = (function (){var statearr_14668 = state_14653;
(statearr_14668[(10)] = inst_14625__$1);

return statearr_14668;
})();
var statearr_14669_14691 = state_14653__$1;
(statearr_14669_14691[(2)] = null);

(statearr_14669_14691[(1)] = (2));


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
});})(c__12583__auto___14681,out))
;
return ((function (switch__12471__auto__,c__12583__auto___14681,out){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_14673 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14673[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_14673[(1)] = (1));

return statearr_14673;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_14653){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_14653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e14674){if((e14674 instanceof Object)){
var ex__12475__auto__ = e14674;
var statearr_14675_14692 = state_14653;
(statearr_14675_14692[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14693 = state_14653;
state_14653 = G__14693;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_14653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_14653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___14681,out))
})();
var state__12585__auto__ = (function (){var statearr_14676 = f__12584__auto__.call(null);
(statearr_14676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___14681);

return statearr_14676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___14681,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14694 = [];
var len__7157__auto___14743 = arguments.length;
var i__7158__auto___14744 = (0);
while(true){
if((i__7158__auto___14744 < len__7157__auto___14743)){
args14694.push((arguments[i__7158__auto___14744]));

var G__14745 = (i__7158__auto___14744 + (1));
i__7158__auto___14744 = G__14745;
continue;
} else {
}
break;
}

var G__14696 = args14694.length;
switch (G__14696) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14694.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12583__auto___14747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___14747,out){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___14747,out){
return (function (state_14720){
var state_val_14721 = (state_14720[(1)]);
if((state_val_14721 === (7))){
var inst_14702 = (state_14720[(7)]);
var inst_14702__$1 = (state_14720[(2)]);
var inst_14703 = (inst_14702__$1 == null);
var inst_14704 = cljs.core.not.call(null,inst_14703);
var state_14720__$1 = (function (){var statearr_14722 = state_14720;
(statearr_14722[(7)] = inst_14702__$1);

return statearr_14722;
})();
if(inst_14704){
var statearr_14723_14748 = state_14720__$1;
(statearr_14723_14748[(1)] = (8));

} else {
var statearr_14724_14749 = state_14720__$1;
(statearr_14724_14749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (1))){
var inst_14697 = (0);
var state_14720__$1 = (function (){var statearr_14725 = state_14720;
(statearr_14725[(8)] = inst_14697);

return statearr_14725;
})();
var statearr_14726_14750 = state_14720__$1;
(statearr_14726_14750[(2)] = null);

(statearr_14726_14750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (4))){
var state_14720__$1 = state_14720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14720__$1,(7),ch);
} else {
if((state_val_14721 === (6))){
var inst_14715 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
var statearr_14727_14751 = state_14720__$1;
(statearr_14727_14751[(2)] = inst_14715);

(statearr_14727_14751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (3))){
var inst_14717 = (state_14720[(2)]);
var inst_14718 = cljs.core.async.close_BANG_.call(null,out);
var state_14720__$1 = (function (){var statearr_14728 = state_14720;
(statearr_14728[(9)] = inst_14717);

return statearr_14728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14720__$1,inst_14718);
} else {
if((state_val_14721 === (2))){
var inst_14697 = (state_14720[(8)]);
var inst_14699 = (inst_14697 < n);
var state_14720__$1 = state_14720;
if(cljs.core.truth_(inst_14699)){
var statearr_14729_14752 = state_14720__$1;
(statearr_14729_14752[(1)] = (4));

} else {
var statearr_14730_14753 = state_14720__$1;
(statearr_14730_14753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (11))){
var inst_14697 = (state_14720[(8)]);
var inst_14707 = (state_14720[(2)]);
var inst_14708 = (inst_14697 + (1));
var inst_14697__$1 = inst_14708;
var state_14720__$1 = (function (){var statearr_14731 = state_14720;
(statearr_14731[(8)] = inst_14697__$1);

(statearr_14731[(10)] = inst_14707);

return statearr_14731;
})();
var statearr_14732_14754 = state_14720__$1;
(statearr_14732_14754[(2)] = null);

(statearr_14732_14754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (9))){
var state_14720__$1 = state_14720;
var statearr_14733_14755 = state_14720__$1;
(statearr_14733_14755[(2)] = null);

(statearr_14733_14755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (5))){
var state_14720__$1 = state_14720;
var statearr_14734_14756 = state_14720__$1;
(statearr_14734_14756[(2)] = null);

(statearr_14734_14756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (10))){
var inst_14712 = (state_14720[(2)]);
var state_14720__$1 = state_14720;
var statearr_14735_14757 = state_14720__$1;
(statearr_14735_14757[(2)] = inst_14712);

(statearr_14735_14757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14721 === (8))){
var inst_14702 = (state_14720[(7)]);
var state_14720__$1 = state_14720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14720__$1,(11),out,inst_14702);
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
});})(c__12583__auto___14747,out))
;
return ((function (switch__12471__auto__,c__12583__auto___14747,out){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_14739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14739[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_14739[(1)] = (1));

return statearr_14739;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_14720){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_14720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e14740){if((e14740 instanceof Object)){
var ex__12475__auto__ = e14740;
var statearr_14741_14758 = state_14720;
(statearr_14741_14758[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14759 = state_14720;
state_14720 = G__14759;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_14720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_14720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___14747,out))
})();
var state__12585__auto__ = (function (){var statearr_14742 = f__12584__auto__.call(null);
(statearr_14742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___14747);

return statearr_14742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___14747,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14767 = (function (map_LT_,f,ch,meta14768){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14768 = meta14768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14769,meta14768__$1){
var self__ = this;
var _14769__$1 = this;
return (new cljs.core.async.t_cljs$core$async14767(self__.map_LT_,self__.f,self__.ch,meta14768__$1));
});

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14769){
var self__ = this;
var _14769__$1 = this;
return self__.meta14768;
});

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14770 = (function (map_LT_,f,ch,meta14768,_,fn1,meta14771){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14768 = meta14768;
this._ = _;
this.fn1 = fn1;
this.meta14771 = meta14771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14772,meta14771__$1){
var self__ = this;
var _14772__$1 = this;
return (new cljs.core.async.t_cljs$core$async14770(self__.map_LT_,self__.f,self__.ch,self__.meta14768,self__._,self__.fn1,meta14771__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14772){
var self__ = this;
var _14772__$1 = this;
return self__.meta14771;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14760_SHARP_){
return f1.call(null,(((p1__14760_SHARP_ == null))?null:self__.f.call(null,p1__14760_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14770.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14768","meta14768",2032283456,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14767","cljs.core.async/t_cljs$core$async14767",1656895514,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14771","meta14771",1717002327,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14770";

cljs.core.async.t_cljs$core$async14770.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async14770");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14770 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14770(map_LT___$1,f__$1,ch__$1,meta14768__$1,___$2,fn1__$1,meta14771){
return (new cljs.core.async.t_cljs$core$async14770(map_LT___$1,f__$1,ch__$1,meta14768__$1,___$2,fn1__$1,meta14771));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14770(self__.map_LT_,self__.f,self__.ch,self__.meta14768,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6075__auto__ = ret;
if(cljs.core.truth_(and__6075__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6075__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14768","meta14768",2032283456,null)], null);
});

cljs.core.async.t_cljs$core$async14767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14767";

cljs.core.async.t_cljs$core$async14767.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async14767");
});

cljs.core.async.__GT_t_cljs$core$async14767 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14767(map_LT___$1,f__$1,ch__$1,meta14768){
return (new cljs.core.async.t_cljs$core$async14767(map_LT___$1,f__$1,ch__$1,meta14768));
});

}

return (new cljs.core.async.t_cljs$core$async14767(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14776 = (function (map_GT_,f,ch,meta14777){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14777 = meta14777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14778,meta14777__$1){
var self__ = this;
var _14778__$1 = this;
return (new cljs.core.async.t_cljs$core$async14776(self__.map_GT_,self__.f,self__.ch,meta14777__$1));
});

cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14778){
var self__ = this;
var _14778__$1 = this;
return self__.meta14777;
});

cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14777","meta14777",352283811,null)], null);
});

cljs.core.async.t_cljs$core$async14776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14776";

cljs.core.async.t_cljs$core$async14776.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async14776");
});

cljs.core.async.__GT_t_cljs$core$async14776 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14776(map_GT___$1,f__$1,ch__$1,meta14777){
return (new cljs.core.async.t_cljs$core$async14776(map_GT___$1,f__$1,ch__$1,meta14777));
});

}

return (new cljs.core.async.t_cljs$core$async14776(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14782 = (function (filter_GT_,p,ch,meta14783){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14783 = meta14783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14784,meta14783__$1){
var self__ = this;
var _14784__$1 = this;
return (new cljs.core.async.t_cljs$core$async14782(self__.filter_GT_,self__.p,self__.ch,meta14783__$1));
});

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14784){
var self__ = this;
var _14784__$1 = this;
return self__.meta14783;
});

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14783","meta14783",-1289217914,null)], null);
});

cljs.core.async.t_cljs$core$async14782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14782";

cljs.core.async.t_cljs$core$async14782.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"cljs.core.async/t_cljs$core$async14782");
});

cljs.core.async.__GT_t_cljs$core$async14782 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14782(filter_GT___$1,p__$1,ch__$1,meta14783){
return (new cljs.core.async.t_cljs$core$async14782(filter_GT___$1,p__$1,ch__$1,meta14783));
});

}

return (new cljs.core.async.t_cljs$core$async14782(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14785 = [];
var len__7157__auto___14829 = arguments.length;
var i__7158__auto___14830 = (0);
while(true){
if((i__7158__auto___14830 < len__7157__auto___14829)){
args14785.push((arguments[i__7158__auto___14830]));

var G__14831 = (i__7158__auto___14830 + (1));
i__7158__auto___14830 = G__14831;
continue;
} else {
}
break;
}

var G__14787 = args14785.length;
switch (G__14787) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14785.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12583__auto___14833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___14833,out){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___14833,out){
return (function (state_14808){
var state_val_14809 = (state_14808[(1)]);
if((state_val_14809 === (7))){
var inst_14804 = (state_14808[(2)]);
var state_14808__$1 = state_14808;
var statearr_14810_14834 = state_14808__$1;
(statearr_14810_14834[(2)] = inst_14804);

(statearr_14810_14834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (1))){
var state_14808__$1 = state_14808;
var statearr_14811_14835 = state_14808__$1;
(statearr_14811_14835[(2)] = null);

(statearr_14811_14835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (4))){
var inst_14790 = (state_14808[(7)]);
var inst_14790__$1 = (state_14808[(2)]);
var inst_14791 = (inst_14790__$1 == null);
var state_14808__$1 = (function (){var statearr_14812 = state_14808;
(statearr_14812[(7)] = inst_14790__$1);

return statearr_14812;
})();
if(cljs.core.truth_(inst_14791)){
var statearr_14813_14836 = state_14808__$1;
(statearr_14813_14836[(1)] = (5));

} else {
var statearr_14814_14837 = state_14808__$1;
(statearr_14814_14837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (6))){
var inst_14790 = (state_14808[(7)]);
var inst_14795 = p.call(null,inst_14790);
var state_14808__$1 = state_14808;
if(cljs.core.truth_(inst_14795)){
var statearr_14815_14838 = state_14808__$1;
(statearr_14815_14838[(1)] = (8));

} else {
var statearr_14816_14839 = state_14808__$1;
(statearr_14816_14839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (3))){
var inst_14806 = (state_14808[(2)]);
var state_14808__$1 = state_14808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14808__$1,inst_14806);
} else {
if((state_val_14809 === (2))){
var state_14808__$1 = state_14808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14808__$1,(4),ch);
} else {
if((state_val_14809 === (11))){
var inst_14798 = (state_14808[(2)]);
var state_14808__$1 = state_14808;
var statearr_14817_14840 = state_14808__$1;
(statearr_14817_14840[(2)] = inst_14798);

(statearr_14817_14840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (9))){
var state_14808__$1 = state_14808;
var statearr_14818_14841 = state_14808__$1;
(statearr_14818_14841[(2)] = null);

(statearr_14818_14841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (5))){
var inst_14793 = cljs.core.async.close_BANG_.call(null,out);
var state_14808__$1 = state_14808;
var statearr_14819_14842 = state_14808__$1;
(statearr_14819_14842[(2)] = inst_14793);

(statearr_14819_14842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (10))){
var inst_14801 = (state_14808[(2)]);
var state_14808__$1 = (function (){var statearr_14820 = state_14808;
(statearr_14820[(8)] = inst_14801);

return statearr_14820;
})();
var statearr_14821_14843 = state_14808__$1;
(statearr_14821_14843[(2)] = null);

(statearr_14821_14843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14809 === (8))){
var inst_14790 = (state_14808[(7)]);
var state_14808__$1 = state_14808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14808__$1,(11),out,inst_14790);
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
});})(c__12583__auto___14833,out))
;
return ((function (switch__12471__auto__,c__12583__auto___14833,out){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_14825 = [null,null,null,null,null,null,null,null,null];
(statearr_14825[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_14825[(1)] = (1));

return statearr_14825;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_14808){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_14808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e14826){if((e14826 instanceof Object)){
var ex__12475__auto__ = e14826;
var statearr_14827_14844 = state_14808;
(statearr_14827_14844[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14845 = state_14808;
state_14808 = G__14845;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_14808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_14808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___14833,out))
})();
var state__12585__auto__ = (function (){var statearr_14828 = f__12584__auto__.call(null);
(statearr_14828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___14833);

return statearr_14828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___14833,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14846 = [];
var len__7157__auto___14849 = arguments.length;
var i__7158__auto___14850 = (0);
while(true){
if((i__7158__auto___14850 < len__7157__auto___14849)){
args14846.push((arguments[i__7158__auto___14850]));

var G__14851 = (i__7158__auto___14850 + (1));
i__7158__auto___14850 = G__14851;
continue;
} else {
}
break;
}

var G__14848 = args14846.length;
switch (G__14848) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14846.length)].join('')));

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
var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__){
return (function (state_15018){
var state_val_15019 = (state_15018[(1)]);
if((state_val_15019 === (7))){
var inst_15014 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
var statearr_15020_15061 = state_15018__$1;
(statearr_15020_15061[(2)] = inst_15014);

(statearr_15020_15061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (20))){
var inst_14984 = (state_15018[(7)]);
var inst_14995 = (state_15018[(2)]);
var inst_14996 = cljs.core.next.call(null,inst_14984);
var inst_14970 = inst_14996;
var inst_14971 = null;
var inst_14972 = (0);
var inst_14973 = (0);
var state_15018__$1 = (function (){var statearr_15021 = state_15018;
(statearr_15021[(8)] = inst_14973);

(statearr_15021[(9)] = inst_14995);

(statearr_15021[(10)] = inst_14972);

(statearr_15021[(11)] = inst_14970);

(statearr_15021[(12)] = inst_14971);

return statearr_15021;
})();
var statearr_15022_15062 = state_15018__$1;
(statearr_15022_15062[(2)] = null);

(statearr_15022_15062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (1))){
var state_15018__$1 = state_15018;
var statearr_15023_15063 = state_15018__$1;
(statearr_15023_15063[(2)] = null);

(statearr_15023_15063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (4))){
var inst_14959 = (state_15018[(13)]);
var inst_14959__$1 = (state_15018[(2)]);
var inst_14960 = (inst_14959__$1 == null);
var state_15018__$1 = (function (){var statearr_15024 = state_15018;
(statearr_15024[(13)] = inst_14959__$1);

return statearr_15024;
})();
if(cljs.core.truth_(inst_14960)){
var statearr_15025_15064 = state_15018__$1;
(statearr_15025_15064[(1)] = (5));

} else {
var statearr_15026_15065 = state_15018__$1;
(statearr_15026_15065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (15))){
var state_15018__$1 = state_15018;
var statearr_15030_15066 = state_15018__$1;
(statearr_15030_15066[(2)] = null);

(statearr_15030_15066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (21))){
var state_15018__$1 = state_15018;
var statearr_15031_15067 = state_15018__$1;
(statearr_15031_15067[(2)] = null);

(statearr_15031_15067[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (13))){
var inst_14973 = (state_15018[(8)]);
var inst_14972 = (state_15018[(10)]);
var inst_14970 = (state_15018[(11)]);
var inst_14971 = (state_15018[(12)]);
var inst_14980 = (state_15018[(2)]);
var inst_14981 = (inst_14973 + (1));
var tmp15027 = inst_14972;
var tmp15028 = inst_14970;
var tmp15029 = inst_14971;
var inst_14970__$1 = tmp15028;
var inst_14971__$1 = tmp15029;
var inst_14972__$1 = tmp15027;
var inst_14973__$1 = inst_14981;
var state_15018__$1 = (function (){var statearr_15032 = state_15018;
(statearr_15032[(8)] = inst_14973__$1);

(statearr_15032[(10)] = inst_14972__$1);

(statearr_15032[(11)] = inst_14970__$1);

(statearr_15032[(14)] = inst_14980);

(statearr_15032[(12)] = inst_14971__$1);

return statearr_15032;
})();
var statearr_15033_15068 = state_15018__$1;
(statearr_15033_15068[(2)] = null);

(statearr_15033_15068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (22))){
var state_15018__$1 = state_15018;
var statearr_15034_15069 = state_15018__$1;
(statearr_15034_15069[(2)] = null);

(statearr_15034_15069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (6))){
var inst_14959 = (state_15018[(13)]);
var inst_14968 = f.call(null,inst_14959);
var inst_14969 = cljs.core.seq.call(null,inst_14968);
var inst_14970 = inst_14969;
var inst_14971 = null;
var inst_14972 = (0);
var inst_14973 = (0);
var state_15018__$1 = (function (){var statearr_15035 = state_15018;
(statearr_15035[(8)] = inst_14973);

(statearr_15035[(10)] = inst_14972);

(statearr_15035[(11)] = inst_14970);

(statearr_15035[(12)] = inst_14971);

return statearr_15035;
})();
var statearr_15036_15070 = state_15018__$1;
(statearr_15036_15070[(2)] = null);

(statearr_15036_15070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (17))){
var inst_14984 = (state_15018[(7)]);
var inst_14988 = cljs.core.chunk_first.call(null,inst_14984);
var inst_14989 = cljs.core.chunk_rest.call(null,inst_14984);
var inst_14990 = cljs.core.count.call(null,inst_14988);
var inst_14970 = inst_14989;
var inst_14971 = inst_14988;
var inst_14972 = inst_14990;
var inst_14973 = (0);
var state_15018__$1 = (function (){var statearr_15037 = state_15018;
(statearr_15037[(8)] = inst_14973);

(statearr_15037[(10)] = inst_14972);

(statearr_15037[(11)] = inst_14970);

(statearr_15037[(12)] = inst_14971);

return statearr_15037;
})();
var statearr_15038_15071 = state_15018__$1;
(statearr_15038_15071[(2)] = null);

(statearr_15038_15071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (3))){
var inst_15016 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15018__$1,inst_15016);
} else {
if((state_val_15019 === (12))){
var inst_15004 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
var statearr_15039_15072 = state_15018__$1;
(statearr_15039_15072[(2)] = inst_15004);

(statearr_15039_15072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (2))){
var state_15018__$1 = state_15018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15018__$1,(4),in$);
} else {
if((state_val_15019 === (23))){
var inst_15012 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
var statearr_15040_15073 = state_15018__$1;
(statearr_15040_15073[(2)] = inst_15012);

(statearr_15040_15073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (19))){
var inst_14999 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
var statearr_15041_15074 = state_15018__$1;
(statearr_15041_15074[(2)] = inst_14999);

(statearr_15041_15074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (11))){
var inst_14984 = (state_15018[(7)]);
var inst_14970 = (state_15018[(11)]);
var inst_14984__$1 = cljs.core.seq.call(null,inst_14970);
var state_15018__$1 = (function (){var statearr_15042 = state_15018;
(statearr_15042[(7)] = inst_14984__$1);

return statearr_15042;
})();
if(inst_14984__$1){
var statearr_15043_15075 = state_15018__$1;
(statearr_15043_15075[(1)] = (14));

} else {
var statearr_15044_15076 = state_15018__$1;
(statearr_15044_15076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (9))){
var inst_15006 = (state_15018[(2)]);
var inst_15007 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15018__$1 = (function (){var statearr_15045 = state_15018;
(statearr_15045[(15)] = inst_15006);

return statearr_15045;
})();
if(cljs.core.truth_(inst_15007)){
var statearr_15046_15077 = state_15018__$1;
(statearr_15046_15077[(1)] = (21));

} else {
var statearr_15047_15078 = state_15018__$1;
(statearr_15047_15078[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (5))){
var inst_14962 = cljs.core.async.close_BANG_.call(null,out);
var state_15018__$1 = state_15018;
var statearr_15048_15079 = state_15018__$1;
(statearr_15048_15079[(2)] = inst_14962);

(statearr_15048_15079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (14))){
var inst_14984 = (state_15018[(7)]);
var inst_14986 = cljs.core.chunked_seq_QMARK_.call(null,inst_14984);
var state_15018__$1 = state_15018;
if(inst_14986){
var statearr_15049_15080 = state_15018__$1;
(statearr_15049_15080[(1)] = (17));

} else {
var statearr_15050_15081 = state_15018__$1;
(statearr_15050_15081[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (16))){
var inst_15002 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
var statearr_15051_15082 = state_15018__$1;
(statearr_15051_15082[(2)] = inst_15002);

(statearr_15051_15082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (10))){
var inst_14973 = (state_15018[(8)]);
var inst_14971 = (state_15018[(12)]);
var inst_14978 = cljs.core._nth.call(null,inst_14971,inst_14973);
var state_15018__$1 = state_15018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15018__$1,(13),out,inst_14978);
} else {
if((state_val_15019 === (18))){
var inst_14984 = (state_15018[(7)]);
var inst_14993 = cljs.core.first.call(null,inst_14984);
var state_15018__$1 = state_15018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15018__$1,(20),out,inst_14993);
} else {
if((state_val_15019 === (8))){
var inst_14973 = (state_15018[(8)]);
var inst_14972 = (state_15018[(10)]);
var inst_14975 = (inst_14973 < inst_14972);
var inst_14976 = inst_14975;
var state_15018__$1 = state_15018;
if(cljs.core.truth_(inst_14976)){
var statearr_15052_15083 = state_15018__$1;
(statearr_15052_15083[(1)] = (10));

} else {
var statearr_15053_15084 = state_15018__$1;
(statearr_15053_15084[(1)] = (11));

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
});})(c__12583__auto__))
;
return ((function (switch__12471__auto__,c__12583__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12472__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12472__auto____0 = (function (){
var statearr_15057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15057[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12472__auto__);

(statearr_15057[(1)] = (1));

return statearr_15057;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12472__auto____1 = (function (state_15018){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_15018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e15058){if((e15058 instanceof Object)){
var ex__12475__auto__ = e15058;
var statearr_15059_15085 = state_15018;
(statearr_15059_15085[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15086 = state_15018;
state_15018 = G__15086;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12472__auto__ = function(state_15018){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12472__auto____1.call(this,state_15018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12472__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12472__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__))
})();
var state__12585__auto__ = (function (){var statearr_15060 = f__12584__auto__.call(null);
(statearr_15060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_15060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__))
);

return c__12583__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15087 = [];
var len__7157__auto___15090 = arguments.length;
var i__7158__auto___15091 = (0);
while(true){
if((i__7158__auto___15091 < len__7157__auto___15090)){
args15087.push((arguments[i__7158__auto___15091]));

var G__15092 = (i__7158__auto___15091 + (1));
i__7158__auto___15091 = G__15092;
continue;
} else {
}
break;
}

var G__15089 = args15087.length;
switch (G__15089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15087.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15094 = [];
var len__7157__auto___15097 = arguments.length;
var i__7158__auto___15098 = (0);
while(true){
if((i__7158__auto___15098 < len__7157__auto___15097)){
args15094.push((arguments[i__7158__auto___15098]));

var G__15099 = (i__7158__auto___15098 + (1));
i__7158__auto___15098 = G__15099;
continue;
} else {
}
break;
}

var G__15096 = args15094.length;
switch (G__15096) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15094.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15101 = [];
var len__7157__auto___15152 = arguments.length;
var i__7158__auto___15153 = (0);
while(true){
if((i__7158__auto___15153 < len__7157__auto___15152)){
args15101.push((arguments[i__7158__auto___15153]));

var G__15154 = (i__7158__auto___15153 + (1));
i__7158__auto___15153 = G__15154;
continue;
} else {
}
break;
}

var G__15103 = args15101.length;
switch (G__15103) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15101.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12583__auto___15156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___15156,out){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___15156,out){
return (function (state_15127){
var state_val_15128 = (state_15127[(1)]);
if((state_val_15128 === (7))){
var inst_15122 = (state_15127[(2)]);
var state_15127__$1 = state_15127;
var statearr_15129_15157 = state_15127__$1;
(statearr_15129_15157[(2)] = inst_15122);

(statearr_15129_15157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15128 === (1))){
var inst_15104 = null;
var state_15127__$1 = (function (){var statearr_15130 = state_15127;
(statearr_15130[(7)] = inst_15104);

return statearr_15130;
})();
var statearr_15131_15158 = state_15127__$1;
(statearr_15131_15158[(2)] = null);

(statearr_15131_15158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15128 === (4))){
var inst_15107 = (state_15127[(8)]);
var inst_15107__$1 = (state_15127[(2)]);
var inst_15108 = (inst_15107__$1 == null);
var inst_15109 = cljs.core.not.call(null,inst_15108);
var state_15127__$1 = (function (){var statearr_15132 = state_15127;
(statearr_15132[(8)] = inst_15107__$1);

return statearr_15132;
})();
if(inst_15109){
var statearr_15133_15159 = state_15127__$1;
(statearr_15133_15159[(1)] = (5));

} else {
var statearr_15134_15160 = state_15127__$1;
(statearr_15134_15160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15128 === (6))){
var state_15127__$1 = state_15127;
var statearr_15135_15161 = state_15127__$1;
(statearr_15135_15161[(2)] = null);

(statearr_15135_15161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15128 === (3))){
var inst_15124 = (state_15127[(2)]);
var inst_15125 = cljs.core.async.close_BANG_.call(null,out);
var state_15127__$1 = (function (){var statearr_15136 = state_15127;
(statearr_15136[(9)] = inst_15124);

return statearr_15136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15127__$1,inst_15125);
} else {
if((state_val_15128 === (2))){
var state_15127__$1 = state_15127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15127__$1,(4),ch);
} else {
if((state_val_15128 === (11))){
var inst_15107 = (state_15127[(8)]);
var inst_15116 = (state_15127[(2)]);
var inst_15104 = inst_15107;
var state_15127__$1 = (function (){var statearr_15137 = state_15127;
(statearr_15137[(10)] = inst_15116);

(statearr_15137[(7)] = inst_15104);

return statearr_15137;
})();
var statearr_15138_15162 = state_15127__$1;
(statearr_15138_15162[(2)] = null);

(statearr_15138_15162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15128 === (9))){
var inst_15107 = (state_15127[(8)]);
var state_15127__$1 = state_15127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15127__$1,(11),out,inst_15107);
} else {
if((state_val_15128 === (5))){
var inst_15104 = (state_15127[(7)]);
var inst_15107 = (state_15127[(8)]);
var inst_15111 = cljs.core._EQ_.call(null,inst_15107,inst_15104);
var state_15127__$1 = state_15127;
if(inst_15111){
var statearr_15140_15163 = state_15127__$1;
(statearr_15140_15163[(1)] = (8));

} else {
var statearr_15141_15164 = state_15127__$1;
(statearr_15141_15164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15128 === (10))){
var inst_15119 = (state_15127[(2)]);
var state_15127__$1 = state_15127;
var statearr_15142_15165 = state_15127__$1;
(statearr_15142_15165[(2)] = inst_15119);

(statearr_15142_15165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15128 === (8))){
var inst_15104 = (state_15127[(7)]);
var tmp15139 = inst_15104;
var inst_15104__$1 = tmp15139;
var state_15127__$1 = (function (){var statearr_15143 = state_15127;
(statearr_15143[(7)] = inst_15104__$1);

return statearr_15143;
})();
var statearr_15144_15166 = state_15127__$1;
(statearr_15144_15166[(2)] = null);

(statearr_15144_15166[(1)] = (2));


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
});})(c__12583__auto___15156,out))
;
return ((function (switch__12471__auto__,c__12583__auto___15156,out){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_15148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15148[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_15148[(1)] = (1));

return statearr_15148;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_15127){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_15127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e15149){if((e15149 instanceof Object)){
var ex__12475__auto__ = e15149;
var statearr_15150_15167 = state_15127;
(statearr_15150_15167[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15168 = state_15127;
state_15127 = G__15168;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_15127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_15127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___15156,out))
})();
var state__12585__auto__ = (function (){var statearr_15151 = f__12584__auto__.call(null);
(statearr_15151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___15156);

return statearr_15151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___15156,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15169 = [];
var len__7157__auto___15239 = arguments.length;
var i__7158__auto___15240 = (0);
while(true){
if((i__7158__auto___15240 < len__7157__auto___15239)){
args15169.push((arguments[i__7158__auto___15240]));

var G__15241 = (i__7158__auto___15240 + (1));
i__7158__auto___15240 = G__15241;
continue;
} else {
}
break;
}

var G__15171 = args15169.length;
switch (G__15171) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15169.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12583__auto___15243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___15243,out){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___15243,out){
return (function (state_15209){
var state_val_15210 = (state_15209[(1)]);
if((state_val_15210 === (7))){
var inst_15205 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15211_15244 = state_15209__$1;
(statearr_15211_15244[(2)] = inst_15205);

(statearr_15211_15244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (1))){
var inst_15172 = (new Array(n));
var inst_15173 = inst_15172;
var inst_15174 = (0);
var state_15209__$1 = (function (){var statearr_15212 = state_15209;
(statearr_15212[(7)] = inst_15173);

(statearr_15212[(8)] = inst_15174);

return statearr_15212;
})();
var statearr_15213_15245 = state_15209__$1;
(statearr_15213_15245[(2)] = null);

(statearr_15213_15245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (4))){
var inst_15177 = (state_15209[(9)]);
var inst_15177__$1 = (state_15209[(2)]);
var inst_15178 = (inst_15177__$1 == null);
var inst_15179 = cljs.core.not.call(null,inst_15178);
var state_15209__$1 = (function (){var statearr_15214 = state_15209;
(statearr_15214[(9)] = inst_15177__$1);

return statearr_15214;
})();
if(inst_15179){
var statearr_15215_15246 = state_15209__$1;
(statearr_15215_15246[(1)] = (5));

} else {
var statearr_15216_15247 = state_15209__$1;
(statearr_15216_15247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (15))){
var inst_15199 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15217_15248 = state_15209__$1;
(statearr_15217_15248[(2)] = inst_15199);

(statearr_15217_15248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (13))){
var state_15209__$1 = state_15209;
var statearr_15218_15249 = state_15209__$1;
(statearr_15218_15249[(2)] = null);

(statearr_15218_15249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (6))){
var inst_15174 = (state_15209[(8)]);
var inst_15195 = (inst_15174 > (0));
var state_15209__$1 = state_15209;
if(cljs.core.truth_(inst_15195)){
var statearr_15219_15250 = state_15209__$1;
(statearr_15219_15250[(1)] = (12));

} else {
var statearr_15220_15251 = state_15209__$1;
(statearr_15220_15251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (3))){
var inst_15207 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15209__$1,inst_15207);
} else {
if((state_val_15210 === (12))){
var inst_15173 = (state_15209[(7)]);
var inst_15197 = cljs.core.vec.call(null,inst_15173);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15209__$1,(15),out,inst_15197);
} else {
if((state_val_15210 === (2))){
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15209__$1,(4),ch);
} else {
if((state_val_15210 === (11))){
var inst_15189 = (state_15209[(2)]);
var inst_15190 = (new Array(n));
var inst_15173 = inst_15190;
var inst_15174 = (0);
var state_15209__$1 = (function (){var statearr_15221 = state_15209;
(statearr_15221[(7)] = inst_15173);

(statearr_15221[(8)] = inst_15174);

(statearr_15221[(10)] = inst_15189);

return statearr_15221;
})();
var statearr_15222_15252 = state_15209__$1;
(statearr_15222_15252[(2)] = null);

(statearr_15222_15252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (9))){
var inst_15173 = (state_15209[(7)]);
var inst_15187 = cljs.core.vec.call(null,inst_15173);
var state_15209__$1 = state_15209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15209__$1,(11),out,inst_15187);
} else {
if((state_val_15210 === (5))){
var inst_15173 = (state_15209[(7)]);
var inst_15174 = (state_15209[(8)]);
var inst_15182 = (state_15209[(11)]);
var inst_15177 = (state_15209[(9)]);
var inst_15181 = (inst_15173[inst_15174] = inst_15177);
var inst_15182__$1 = (inst_15174 + (1));
var inst_15183 = (inst_15182__$1 < n);
var state_15209__$1 = (function (){var statearr_15223 = state_15209;
(statearr_15223[(12)] = inst_15181);

(statearr_15223[(11)] = inst_15182__$1);

return statearr_15223;
})();
if(cljs.core.truth_(inst_15183)){
var statearr_15224_15253 = state_15209__$1;
(statearr_15224_15253[(1)] = (8));

} else {
var statearr_15225_15254 = state_15209__$1;
(statearr_15225_15254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (14))){
var inst_15202 = (state_15209[(2)]);
var inst_15203 = cljs.core.async.close_BANG_.call(null,out);
var state_15209__$1 = (function (){var statearr_15227 = state_15209;
(statearr_15227[(13)] = inst_15202);

return statearr_15227;
})();
var statearr_15228_15255 = state_15209__$1;
(statearr_15228_15255[(2)] = inst_15203);

(statearr_15228_15255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (10))){
var inst_15193 = (state_15209[(2)]);
var state_15209__$1 = state_15209;
var statearr_15229_15256 = state_15209__$1;
(statearr_15229_15256[(2)] = inst_15193);

(statearr_15229_15256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15210 === (8))){
var inst_15173 = (state_15209[(7)]);
var inst_15182 = (state_15209[(11)]);
var tmp15226 = inst_15173;
var inst_15173__$1 = tmp15226;
var inst_15174 = inst_15182;
var state_15209__$1 = (function (){var statearr_15230 = state_15209;
(statearr_15230[(7)] = inst_15173__$1);

(statearr_15230[(8)] = inst_15174);

return statearr_15230;
})();
var statearr_15231_15257 = state_15209__$1;
(statearr_15231_15257[(2)] = null);

(statearr_15231_15257[(1)] = (2));


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
});})(c__12583__auto___15243,out))
;
return ((function (switch__12471__auto__,c__12583__auto___15243,out){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_15235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15235[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_15235[(1)] = (1));

return statearr_15235;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_15209){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_15209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e15236){if((e15236 instanceof Object)){
var ex__12475__auto__ = e15236;
var statearr_15237_15258 = state_15209;
(statearr_15237_15258[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15259 = state_15209;
state_15209 = G__15259;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_15209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_15209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___15243,out))
})();
var state__12585__auto__ = (function (){var statearr_15238 = f__12584__auto__.call(null);
(statearr_15238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___15243);

return statearr_15238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___15243,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15260 = [];
var len__7157__auto___15334 = arguments.length;
var i__7158__auto___15335 = (0);
while(true){
if((i__7158__auto___15335 < len__7157__auto___15334)){
args15260.push((arguments[i__7158__auto___15335]));

var G__15336 = (i__7158__auto___15335 + (1));
i__7158__auto___15335 = G__15336;
continue;
} else {
}
break;
}

var G__15262 = args15260.length;
switch (G__15262) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15260.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12583__auto___15338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___15338,out){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___15338,out){
return (function (state_15304){
var state_val_15305 = (state_15304[(1)]);
if((state_val_15305 === (7))){
var inst_15300 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
var statearr_15306_15339 = state_15304__$1;
(statearr_15306_15339[(2)] = inst_15300);

(statearr_15306_15339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (1))){
var inst_15263 = [];
var inst_15264 = inst_15263;
var inst_15265 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15304__$1 = (function (){var statearr_15307 = state_15304;
(statearr_15307[(7)] = inst_15265);

(statearr_15307[(8)] = inst_15264);

return statearr_15307;
})();
var statearr_15308_15340 = state_15304__$1;
(statearr_15308_15340[(2)] = null);

(statearr_15308_15340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (4))){
var inst_15268 = (state_15304[(9)]);
var inst_15268__$1 = (state_15304[(2)]);
var inst_15269 = (inst_15268__$1 == null);
var inst_15270 = cljs.core.not.call(null,inst_15269);
var state_15304__$1 = (function (){var statearr_15309 = state_15304;
(statearr_15309[(9)] = inst_15268__$1);

return statearr_15309;
})();
if(inst_15270){
var statearr_15310_15341 = state_15304__$1;
(statearr_15310_15341[(1)] = (5));

} else {
var statearr_15311_15342 = state_15304__$1;
(statearr_15311_15342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (15))){
var inst_15294 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
var statearr_15312_15343 = state_15304__$1;
(statearr_15312_15343[(2)] = inst_15294);

(statearr_15312_15343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (13))){
var state_15304__$1 = state_15304;
var statearr_15313_15344 = state_15304__$1;
(statearr_15313_15344[(2)] = null);

(statearr_15313_15344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (6))){
var inst_15264 = (state_15304[(8)]);
var inst_15289 = inst_15264.length;
var inst_15290 = (inst_15289 > (0));
var state_15304__$1 = state_15304;
if(cljs.core.truth_(inst_15290)){
var statearr_15314_15345 = state_15304__$1;
(statearr_15314_15345[(1)] = (12));

} else {
var statearr_15315_15346 = state_15304__$1;
(statearr_15315_15346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (3))){
var inst_15302 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15304__$1,inst_15302);
} else {
if((state_val_15305 === (12))){
var inst_15264 = (state_15304[(8)]);
var inst_15292 = cljs.core.vec.call(null,inst_15264);
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15304__$1,(15),out,inst_15292);
} else {
if((state_val_15305 === (2))){
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15304__$1,(4),ch);
} else {
if((state_val_15305 === (11))){
var inst_15272 = (state_15304[(10)]);
var inst_15268 = (state_15304[(9)]);
var inst_15282 = (state_15304[(2)]);
var inst_15283 = [];
var inst_15284 = inst_15283.push(inst_15268);
var inst_15264 = inst_15283;
var inst_15265 = inst_15272;
var state_15304__$1 = (function (){var statearr_15316 = state_15304;
(statearr_15316[(11)] = inst_15282);

(statearr_15316[(7)] = inst_15265);

(statearr_15316[(8)] = inst_15264);

(statearr_15316[(12)] = inst_15284);

return statearr_15316;
})();
var statearr_15317_15347 = state_15304__$1;
(statearr_15317_15347[(2)] = null);

(statearr_15317_15347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (9))){
var inst_15264 = (state_15304[(8)]);
var inst_15280 = cljs.core.vec.call(null,inst_15264);
var state_15304__$1 = state_15304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15304__$1,(11),out,inst_15280);
} else {
if((state_val_15305 === (5))){
var inst_15272 = (state_15304[(10)]);
var inst_15265 = (state_15304[(7)]);
var inst_15268 = (state_15304[(9)]);
var inst_15272__$1 = f.call(null,inst_15268);
var inst_15273 = cljs.core._EQ_.call(null,inst_15272__$1,inst_15265);
var inst_15274 = cljs.core.keyword_identical_QMARK_.call(null,inst_15265,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15275 = (inst_15273) || (inst_15274);
var state_15304__$1 = (function (){var statearr_15318 = state_15304;
(statearr_15318[(10)] = inst_15272__$1);

return statearr_15318;
})();
if(cljs.core.truth_(inst_15275)){
var statearr_15319_15348 = state_15304__$1;
(statearr_15319_15348[(1)] = (8));

} else {
var statearr_15320_15349 = state_15304__$1;
(statearr_15320_15349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (14))){
var inst_15297 = (state_15304[(2)]);
var inst_15298 = cljs.core.async.close_BANG_.call(null,out);
var state_15304__$1 = (function (){var statearr_15322 = state_15304;
(statearr_15322[(13)] = inst_15297);

return statearr_15322;
})();
var statearr_15323_15350 = state_15304__$1;
(statearr_15323_15350[(2)] = inst_15298);

(statearr_15323_15350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (10))){
var inst_15287 = (state_15304[(2)]);
var state_15304__$1 = state_15304;
var statearr_15324_15351 = state_15304__$1;
(statearr_15324_15351[(2)] = inst_15287);

(statearr_15324_15351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15305 === (8))){
var inst_15272 = (state_15304[(10)]);
var inst_15264 = (state_15304[(8)]);
var inst_15268 = (state_15304[(9)]);
var inst_15277 = inst_15264.push(inst_15268);
var tmp15321 = inst_15264;
var inst_15264__$1 = tmp15321;
var inst_15265 = inst_15272;
var state_15304__$1 = (function (){var statearr_15325 = state_15304;
(statearr_15325[(14)] = inst_15277);

(statearr_15325[(7)] = inst_15265);

(statearr_15325[(8)] = inst_15264__$1);

return statearr_15325;
})();
var statearr_15326_15352 = state_15304__$1;
(statearr_15326_15352[(2)] = null);

(statearr_15326_15352[(1)] = (2));


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
});})(c__12583__auto___15338,out))
;
return ((function (switch__12471__auto__,c__12583__auto___15338,out){
return (function() {
var cljs$core$async$state_machine__12472__auto__ = null;
var cljs$core$async$state_machine__12472__auto____0 = (function (){
var statearr_15330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15330[(0)] = cljs$core$async$state_machine__12472__auto__);

(statearr_15330[(1)] = (1));

return statearr_15330;
});
var cljs$core$async$state_machine__12472__auto____1 = (function (state_15304){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_15304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e15331){if((e15331 instanceof Object)){
var ex__12475__auto__ = e15331;
var statearr_15332_15353 = state_15304;
(statearr_15332_15353[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15354 = state_15304;
state_15304 = G__15354;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
cljs$core$async$state_machine__12472__auto__ = function(state_15304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12472__auto____1.call(this,state_15304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12472__auto____0;
cljs$core$async$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12472__auto____1;
return cljs$core$async$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___15338,out))
})();
var state__12585__auto__ = (function (){var statearr_15333 = f__12584__auto__.call(null);
(statearr_15333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___15338);

return statearr_15333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___15338,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
