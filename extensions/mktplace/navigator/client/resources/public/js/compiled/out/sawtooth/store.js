// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.store');
goog.require('cljs.core');
if(typeof sawtooth.store.cache !== 'undefined'){
} else {
sawtooth.store.cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Gets string data that has been stored in localStorage.
 */
sawtooth.store.get_data = (function sawtooth$store$get_data(var_args){
var args25456 = [];
var len__7157__auto___25459 = arguments.length;
var i__7158__auto___25460 = (0);
while(true){
if((i__7158__auto___25460 < len__7157__auto___25459)){
args25456.push((arguments[i__7158__auto___25460]));

var G__25461 = (i__7158__auto___25460 + (1));
i__7158__auto___25460 = G__25461;
continue;
} else {
}
break;
}

var G__25458 = args25456.length;
switch (G__25458) {
case 1:
return sawtooth.store.get_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.store.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25456.length)].join('')));

}
});

sawtooth.store.get_data.cljs$core$IFn$_invoke$arity$1 = (function (k){
return sawtooth.store.get_data.call(null,k,null);
});

sawtooth.store.get_data.cljs$core$IFn$_invoke$arity$2 = (function (k,default_value){
var temp__4655__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,sawtooth.store.cache),k);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return v;
} else {
var temp__4655__auto____$1 = (window.localStorage[cljs.core.name.call(null,k)]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var v = temp__4655__auto____$1;
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,sawtooth.store.cache,cljs.core.assoc,k,v),k);
} else {
return default_value;
}
}
});

sawtooth.store.get_data.cljs$lang$maxFixedArity = 2;
/**
 * Saves string data into localStorage.
 */
sawtooth.store.save_data_BANG_ = (function sawtooth$store$save_data_BANG_(k,v){
if(typeof v === 'string'){
} else {
throw (new Error("Assert failed: (string? v)"));
}

cljs.core.swap_BANG_.call(null,sawtooth.store.cache,cljs.core.assoc,k,v);

return window.localStorage.setItem(cljs.core.name.call(null,k),v);
});
/**
 * Removes data from localStorage.
 */
sawtooth.store.remove_data_BANG_ = (function sawtooth$store$remove_data_BANG_(k){
cljs.core.swap_BANG_.call(null,sawtooth.store.cache,cljs.core.dissoc,k);

return window.localStorage.removeItem(cljs.core.name.call(null,k));
});
