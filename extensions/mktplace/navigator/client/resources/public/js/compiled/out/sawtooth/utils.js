// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.utils');
goog.require('cljs.core');
sawtooth.utils.index_of = (function sawtooth$utils$index_of(pred,coll){
var f = (((cljs.core.fn_QMARK_.call(null,pred)) || (cljs.core.ifn_QMARK_.call(null,pred)))?pred:(function (p1__25419_SHARP_){
return cljs.core._EQ_.call(null,pred,p1__25419_SHARP_);
}));
return cljs.core.some.call(null,((function (f){
return (function (p__25422){
var vec__25423 = p__25422;
var idx = cljs.core.nth.call(null,vec__25423,(0),null);
var item = cljs.core.nth.call(null,vec__25423,(1),null);
if(cljs.core.truth_(f.call(null,item))){
return idx;
} else {
return null;
}
});})(f))
,cljs.core.map_indexed.call(null,cljs.core.vector,coll));
});
sawtooth.utils.first_by = (function sawtooth$utils$first_by(coll,k,v){
if(cljs.core.truth_(v)){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__25424_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,p1__25424_SHARP_,k),v);
}),coll));
} else {
return null;
}
});
sawtooth.utils.firstk = (function sawtooth$utils$firstk(var_args){
var args25425 = [];
var len__7157__auto___25428 = arguments.length;
var i__7158__auto___25429 = (0);
while(true){
if((i__7158__auto___25429 < len__7157__auto___25428)){
args25425.push((arguments[i__7158__auto___25429]));

var G__25430 = (i__7158__auto___25429 + (1));
i__7158__auto___25429 = G__25430;
continue;
} else {
}
break;
}

var G__25427 = args25425.length;
switch (G__25427) {
case 3:
return sawtooth.utils.firstk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.utils.firstk.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25425.length)].join('')));

}
});

sawtooth.utils.firstk.cljs$core$IFn$_invoke$arity$3 = (function (coll,id,k){
return sawtooth.utils.firstk.call(null,coll,new cljs.core.Keyword(null,"id","id",-1388402092),id,k);
});

sawtooth.utils.firstk.cljs$core$IFn$_invoke$arity$4 = (function (coll,idk,id,k){
return cljs.core.get.call(null,sawtooth.utils.first_by.call(null,coll,idk,id),k);
});

sawtooth.utils.firstk.cljs$lang$maxFixedArity = 4;
/**
 * Returns a map with all of the nil values removed.
 */
sawtooth.utils.without_nil = (function sawtooth$utils$without_nil(m){
if(cljs.core.truth_(m)){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.map_QMARK_.call(null,v)){
return cljs.core.assoc.call(null,m__$1,k,sawtooth$utils$without_nil.call(null,v));
} else {
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;

}
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});
/**
 * A basic console log, in order to take advantage of devtools
 *   console formatting
 */
sawtooth.utils.log = (function sawtooth$utils$log(var_args){
var args__7164__auto__ = [];
var len__7157__auto___25433 = arguments.length;
var i__7158__auto___25434 = (0);
while(true){
if((i__7158__auto___25434 < len__7157__auto___25433)){
args__7164__auto__.push((arguments[i__7158__auto___25434]));

var G__25435 = (i__7158__auto___25434 + (1));
i__7158__auto___25434 = G__25435;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return sawtooth.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});

sawtooth.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(!(cljs.core.empty_QMARK_.call(null,xs))){
return console.log.apply(console,cljs.core.apply.call(null,cljs.core.array,xs));
} else {
return console.log();
}
});

sawtooth.utils.log.cljs$lang$maxFixedArity = (0);

sawtooth.utils.log.cljs$lang$applyTo = (function (seq25432){
return sawtooth.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25432));
});
sawtooth.utils.browser = cljs.core.memoize.call(null,(function (){
var user_agent = navigator.userAgent;
var agent_contains = ((function (user_agent){
return (function (p1__25436_SHARP_){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,p1__25436_SHARP_),user_agent);
});})(user_agent))
;
if(cljs.core.truth_(agent_contains.call(null,"Firefox"))){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(agent_contains.call(null,"OPR"))){
return new cljs.core.Keyword(null,"opera","opera",658572996);
} else {
if(cljs.core.truth_((function (){var or__6087__auto__ = agent_contains.call(null,"MSIE");
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return agent_contains.call(null,"Trident");
}
})())){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
if(cljs.core.truth_(agent_contains.call(null,"Edge"))){
return new cljs.core.Keyword(null,"edge","edge",919909153);
} else {
if(cljs.core.truth_(agent_contains.call(null,"Chrome"))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(agent_contains.call(null,"Safari"))){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
return null;

}
}
}
}
}
}
}));
