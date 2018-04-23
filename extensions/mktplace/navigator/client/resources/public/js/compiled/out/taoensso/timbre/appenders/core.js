// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__7164__auto__ = [];
var len__7157__auto___24392 = arguments.length;
var i__7158__auto___24393 = (0);
while(true){
if((i__7158__auto___24393 < len__7157__auto___24392)){
args__7164__auto__.push((arguments[i__7158__auto___24393]));

var G__24394 = (i__7158__auto___24393 + (1));
i__7158__auto___24393 = G__24394;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__24388){
var vec__24389 = p__24388;
var _opts = cljs.core.nth.call(null,vec__24389,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__24389,_opts){
return (function (data){
var map__24390 = data;
var map__24390__$1 = ((((!((map__24390 == null)))?((((map__24390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24390):map__24390);
var output_fn = cljs.core.get.call(null,map__24390__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__24389,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq24387){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24387));
});
/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__7164__auto__ = [];
var len__7157__auto___24403 = arguments.length;
var i__7158__auto___24404 = (0);
while(true){
if((i__7158__auto___24404 < len__7157__auto___24403)){
args__7164__auto__.push((arguments[i__7158__auto___24404]));

var G__24405 = (i__7158__auto___24404 + (1));
i__7158__auto___24404 = G__24405;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__24396){
var vec__24397 = p__24396;
var map__24398 = cljs.core.nth.call(null,vec__24397,(0),null);
var map__24398__$1 = ((((!((map__24398 == null)))?((((map__24398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24398):map__24398);
var raw_output_QMARK_ = cljs.core.get.call(null,map__24398__$1,new cljs.core.Keyword(null,"raw-output?","raw-output?",1301869164));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_((function (){var and__6075__auto__ = typeof console !== 'undefined';
if(and__6075__auto__){
return console.log;
} else {
return and__6075__auto__;
}
})())?(function (){var level__GT_logger = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){var or__6087__auto__ = console.trace;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"debug","debug",-1608172596),(function (){var or__6087__auto__ = console.debug;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"info","info",-317069002),(function (){var or__6087__auto__ = console.info;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (){var or__6087__auto__ = console.warn;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__6087__auto__ = console.error;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(function (){var or__6087__auto__ = console.error;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"report","report",1394055010),(function (){var or__6087__auto__ = console.info;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return console.log;
}
})()], null);
return ((function (level__GT_logger,vec__24397,map__24398,map__24398__$1,raw_output_QMARK_){
return (function (data){
var map__24400 = data;
var map__24400__$1 = ((((!((map__24400 == null)))?((((map__24400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24400):map__24400);
var level = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var output_fn = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var vargs_ = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.deref.call(null,vargs_);
var vec__24401 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__24401,(0),null);
var vnext = cljs.core.nth.call(null,vec__24401,(1),null);
var logger = level__GT_logger.call(null,level,console.log);
if(cljs.core.truth_((function (){var or__6087__auto__ = raw_output_QMARK_;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core._EQ_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723));
}
})())){
var output = output_fn.call(null,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay(((function (map__24400,map__24400__$1,level,output_fn,vargs_,vargs,vec__24401,v1,vnext,logger,level__GT_logger,vec__24397,map__24398,map__24398__$1,raw_output_QMARK_){
return (function (){
return "";
});})(map__24400,map__24400__$1,level,output_fn,vargs_,vargs,vec__24401,v1,vnext,logger,level__GT_logger,vec__24397,map__24398,map__24398__$1,raw_output_QMARK_))
,null)),new cljs.core.Keyword(null,"?err_","?err_",789480858),(new cljs.core.Delay(((function (map__24400,map__24400__$1,level,output_fn,vargs_,vargs,vec__24401,v1,vnext,logger,level__GT_logger,vec__24397,map__24398,map__24398__$1,raw_output_QMARK_){
return (function (){
return null;
});})(map__24400,map__24400__$1,level,output_fn,vargs_,vargs,vec__24401,v1,vnext,logger,level__GT_logger,vec__24397,map__24398,map__24398__$1,raw_output_QMARK_))
,null))], null)));
var args = cljs.core.cons.call(null,output,cljs.core.cons.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"?err_","?err_",789480858).cljs$core$IFn$_invoke$arity$1(data)),vnext));
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,output_fn.call(null,data));
}
});
;})(level__GT_logger,vec__24397,map__24398,map__24398__$1,raw_output_QMARK_))
})():((function (vec__24397,map__24398,map__24398__$1,raw_output_QMARK_){
return (function (data){
return null;
});})(vec__24397,map__24398,map__24398__$1,raw_output_QMARK_))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq24395){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24395));
});
/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
