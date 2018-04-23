// Compiled by ClojureScript 1.8.51 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27332__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27331 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__27331,(0),null);
var body = cljs.core.nthnext.call(null,vec__27331,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27333__i = 0, G__27333__a = new Array(arguments.length -  0);
while (G__27333__i < G__27333__a.length) {G__27333__a[G__27333__i] = arguments[G__27333__i + 0]; ++G__27333__i;}
  args = new cljs.core.IndexedSeq(G__27333__a,0);
} 
return G__27332__delegate.call(this,args);};
G__27332.cljs$lang$maxFixedArity = 0;
G__27332.cljs$lang$applyTo = (function (arglist__27334){
var args = cljs.core.seq(arglist__27334);
return G__27332__delegate(args);
});
G__27332.cljs$core$IFn$_invoke$arity$variadic = G__27332__delegate;
return G__27332;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__6867__auto__ = (function sablono$core$update_arglists_$_iter__27339(s__27340){
return (new cljs.core.LazySeq(null,(function (){
var s__27340__$1 = s__27340;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27340__$1);
if(temp__4657__auto__){
var s__27340__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27340__$2)){
var c__6865__auto__ = cljs.core.chunk_first.call(null,s__27340__$2);
var size__6866__auto__ = cljs.core.count.call(null,c__6865__auto__);
var b__27342 = cljs.core.chunk_buffer.call(null,size__6866__auto__);
if((function (){var i__27341 = (0);
while(true){
if((i__27341 < size__6866__auto__)){
var args = cljs.core._nth.call(null,c__6865__auto__,i__27341);
cljs.core.chunk_append.call(null,b__27342,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27343 = (i__27341 + (1));
i__27341 = G__27343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27342),sablono$core$update_arglists_$_iter__27339.call(null,cljs.core.chunk_rest.call(null,s__27340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27342),null);
}
} else {
var args = cljs.core.first.call(null,s__27340__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27339.call(null,cljs.core.rest.call(null,s__27340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6867__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7164__auto__ = [];
var len__7157__auto___27349 = arguments.length;
var i__7158__auto___27350 = (0);
while(true){
if((i__7158__auto___27350 < len__7157__auto___27349)){
args__7164__auto__.push((arguments[i__7158__auto___27350]));

var G__27351 = (i__7158__auto___27350 + (1));
i__7158__auto___27350 = G__27351;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__6867__auto__ = (function sablono$core$iter__27345(s__27346){
return (new cljs.core.LazySeq(null,(function (){
var s__27346__$1 = s__27346;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27346__$1);
if(temp__4657__auto__){
var s__27346__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27346__$2)){
var c__6865__auto__ = cljs.core.chunk_first.call(null,s__27346__$2);
var size__6866__auto__ = cljs.core.count.call(null,c__6865__auto__);
var b__27348 = cljs.core.chunk_buffer.call(null,size__6866__auto__);
if((function (){var i__27347 = (0);
while(true){
if((i__27347 < size__6866__auto__)){
var style = cljs.core._nth.call(null,c__6865__auto__,i__27347);
cljs.core.chunk_append.call(null,b__27348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27352 = (i__27347 + (1));
i__27347 = G__27352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27348),sablono$core$iter__27345.call(null,cljs.core.chunk_rest.call(null,s__27346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27348),null);
}
} else {
var style = cljs.core.first.call(null,s__27346__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27345.call(null,cljs.core.rest.call(null,s__27346__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6867__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27344){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27344));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27353 = (function sablono$core$link_to27353(var_args){
var args__7164__auto__ = [];
var len__7157__auto___27356 = arguments.length;
var i__7158__auto___27357 = (0);
while(true){
if((i__7158__auto___27357 < len__7157__auto___27356)){
args__7164__auto__.push((arguments[i__7158__auto___27357]));

var G__27358 = (i__7158__auto___27357 + (1));
i__7158__auto___27357 = G__27358;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to27353.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

sablono.core.link_to27353.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27353.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27353.cljs$lang$applyTo = (function (seq27354){
var G__27355 = cljs.core.first.call(null,seq27354);
var seq27354__$1 = cljs.core.next.call(null,seq27354);
return sablono.core.link_to27353.cljs$core$IFn$_invoke$arity$variadic(G__27355,seq27354__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27353);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27359 = (function sablono$core$mail_to27359(var_args){
var args__7164__auto__ = [];
var len__7157__auto___27364 = arguments.length;
var i__7158__auto___27365 = (0);
while(true){
if((i__7158__auto___27365 < len__7157__auto___27364)){
args__7164__auto__.push((arguments[i__7158__auto___27365]));

var G__27366 = (i__7158__auto___27365 + (1));
i__7158__auto___27365 = G__27366;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to27359.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

sablono.core.mail_to27359.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27362){
var vec__27363 = p__27362;
var content = cljs.core.nth.call(null,vec__27363,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6087__auto__ = content;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27359.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27359.cljs$lang$applyTo = (function (seq27360){
var G__27361 = cljs.core.first.call(null,seq27360);
var seq27360__$1 = cljs.core.next.call(null,seq27360);
return sablono.core.mail_to27359.cljs$core$IFn$_invoke$arity$variadic(G__27361,seq27360__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27359);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27367 = (function sablono$core$unordered_list27367(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__6867__auto__ = (function sablono$core$unordered_list27367_$_iter__27372(s__27373){
return (new cljs.core.LazySeq(null,(function (){
var s__27373__$1 = s__27373;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27373__$1);
if(temp__4657__auto__){
var s__27373__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27373__$2)){
var c__6865__auto__ = cljs.core.chunk_first.call(null,s__27373__$2);
var size__6866__auto__ = cljs.core.count.call(null,c__6865__auto__);
var b__27375 = cljs.core.chunk_buffer.call(null,size__6866__auto__);
if((function (){var i__27374 = (0);
while(true){
if((i__27374 < size__6866__auto__)){
var x = cljs.core._nth.call(null,c__6865__auto__,i__27374);
cljs.core.chunk_append.call(null,b__27375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27376 = (i__27374 + (1));
i__27374 = G__27376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27375),sablono$core$unordered_list27367_$_iter__27372.call(null,cljs.core.chunk_rest.call(null,s__27373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27375),null);
}
} else {
var x = cljs.core.first.call(null,s__27373__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27367_$_iter__27372.call(null,cljs.core.rest.call(null,s__27373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6867__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27367);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27377 = (function sablono$core$ordered_list27377(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__6867__auto__ = (function sablono$core$ordered_list27377_$_iter__27382(s__27383){
return (new cljs.core.LazySeq(null,(function (){
var s__27383__$1 = s__27383;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27383__$1);
if(temp__4657__auto__){
var s__27383__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27383__$2)){
var c__6865__auto__ = cljs.core.chunk_first.call(null,s__27383__$2);
var size__6866__auto__ = cljs.core.count.call(null,c__6865__auto__);
var b__27385 = cljs.core.chunk_buffer.call(null,size__6866__auto__);
if((function (){var i__27384 = (0);
while(true){
if((i__27384 < size__6866__auto__)){
var x = cljs.core._nth.call(null,c__6865__auto__,i__27384);
cljs.core.chunk_append.call(null,b__27385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27386 = (i__27384 + (1));
i__27384 = G__27386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27385),sablono$core$ordered_list27377_$_iter__27382.call(null,cljs.core.chunk_rest.call(null,s__27383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27385),null);
}
} else {
var x = cljs.core.first.call(null,s__27383__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27377_$_iter__27382.call(null,cljs.core.rest.call(null,s__27383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6867__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27377);
/**
 * Create an image element.
 */
sablono.core.image27387 = (function sablono$core$image27387(var_args){
var args27388 = [];
var len__7157__auto___27391 = arguments.length;
var i__7158__auto___27392 = (0);
while(true){
if((i__7158__auto___27392 < len__7157__auto___27391)){
args27388.push((arguments[i__7158__auto___27392]));

var G__27393 = (i__7158__auto___27392 + (1));
i__7158__auto___27392 = G__27393;
continue;
} else {
}
break;
}

var G__27390 = args27388.length;
switch (G__27390) {
case 1:
return sablono.core.image27387.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27388.length)].join('')));

}
});

sablono.core.image27387.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27387.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27387.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27387);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27395_SHARP_,p2__27396_SHARP_){
return [cljs.core.str(p1__27395_SHARP_),cljs.core.str("["),cljs.core.str(p2__27396_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27397_SHARP_,p2__27398_SHARP_){
return [cljs.core.str(p1__27397_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27398_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field27399 = (function sablono$core$color_field27399(var_args){
var args27400 = [];
var len__7157__auto___27467 = arguments.length;
var i__7158__auto___27468 = (0);
while(true){
if((i__7158__auto___27468 < len__7157__auto___27467)){
args27400.push((arguments[i__7158__auto___27468]));

var G__27469 = (i__7158__auto___27468 + (1));
i__7158__auto___27468 = G__27469;
continue;
} else {
}
break;
}

var G__27402 = args27400.length;
switch (G__27402) {
case 1:
return sablono.core.color_field27399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27400.length)].join('')));

}
});

sablono.core.color_field27399.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.color_field27399.call(null,name__27320__auto__,null);
});

sablono.core.color_field27399.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.color_field27399.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27399);

/**
 * Creates a date input field.
 */
sablono.core.date_field27403 = (function sablono$core$date_field27403(var_args){
var args27404 = [];
var len__7157__auto___27471 = arguments.length;
var i__7158__auto___27472 = (0);
while(true){
if((i__7158__auto___27472 < len__7157__auto___27471)){
args27404.push((arguments[i__7158__auto___27472]));

var G__27473 = (i__7158__auto___27472 + (1));
i__7158__auto___27472 = G__27473;
continue;
} else {
}
break;
}

var G__27406 = args27404.length;
switch (G__27406) {
case 1:
return sablono.core.date_field27403.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27403.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27404.length)].join('')));

}
});

sablono.core.date_field27403.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.date_field27403.call(null,name__27320__auto__,null);
});

sablono.core.date_field27403.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.date_field27403.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27403);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27407 = (function sablono$core$datetime_field27407(var_args){
var args27408 = [];
var len__7157__auto___27475 = arguments.length;
var i__7158__auto___27476 = (0);
while(true){
if((i__7158__auto___27476 < len__7157__auto___27475)){
args27408.push((arguments[i__7158__auto___27476]));

var G__27477 = (i__7158__auto___27476 + (1));
i__7158__auto___27476 = G__27477;
continue;
} else {
}
break;
}

var G__27410 = args27408.length;
switch (G__27410) {
case 1:
return sablono.core.datetime_field27407.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27408.length)].join('')));

}
});

sablono.core.datetime_field27407.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.datetime_field27407.call(null,name__27320__auto__,null);
});

sablono.core.datetime_field27407.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.datetime_field27407.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27407);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27411 = (function sablono$core$datetime_local_field27411(var_args){
var args27412 = [];
var len__7157__auto___27479 = arguments.length;
var i__7158__auto___27480 = (0);
while(true){
if((i__7158__auto___27480 < len__7157__auto___27479)){
args27412.push((arguments[i__7158__auto___27480]));

var G__27481 = (i__7158__auto___27480 + (1));
i__7158__auto___27480 = G__27481;
continue;
} else {
}
break;
}

var G__27414 = args27412.length;
switch (G__27414) {
case 1:
return sablono.core.datetime_local_field27411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27412.length)].join('')));

}
});

sablono.core.datetime_local_field27411.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.datetime_local_field27411.call(null,name__27320__auto__,null);
});

sablono.core.datetime_local_field27411.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.datetime_local_field27411.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27411);

/**
 * Creates a email input field.
 */
sablono.core.email_field27415 = (function sablono$core$email_field27415(var_args){
var args27416 = [];
var len__7157__auto___27483 = arguments.length;
var i__7158__auto___27484 = (0);
while(true){
if((i__7158__auto___27484 < len__7157__auto___27483)){
args27416.push((arguments[i__7158__auto___27484]));

var G__27485 = (i__7158__auto___27484 + (1));
i__7158__auto___27484 = G__27485;
continue;
} else {
}
break;
}

var G__27418 = args27416.length;
switch (G__27418) {
case 1:
return sablono.core.email_field27415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27416.length)].join('')));

}
});

sablono.core.email_field27415.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.email_field27415.call(null,name__27320__auto__,null);
});

sablono.core.email_field27415.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.email_field27415.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27415);

/**
 * Creates a file input field.
 */
sablono.core.file_field27419 = (function sablono$core$file_field27419(var_args){
var args27420 = [];
var len__7157__auto___27487 = arguments.length;
var i__7158__auto___27488 = (0);
while(true){
if((i__7158__auto___27488 < len__7157__auto___27487)){
args27420.push((arguments[i__7158__auto___27488]));

var G__27489 = (i__7158__auto___27488 + (1));
i__7158__auto___27488 = G__27489;
continue;
} else {
}
break;
}

var G__27422 = args27420.length;
switch (G__27422) {
case 1:
return sablono.core.file_field27419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27420.length)].join('')));

}
});

sablono.core.file_field27419.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.file_field27419.call(null,name__27320__auto__,null);
});

sablono.core.file_field27419.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.file_field27419.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27419);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27423 = (function sablono$core$hidden_field27423(var_args){
var args27424 = [];
var len__7157__auto___27491 = arguments.length;
var i__7158__auto___27492 = (0);
while(true){
if((i__7158__auto___27492 < len__7157__auto___27491)){
args27424.push((arguments[i__7158__auto___27492]));

var G__27493 = (i__7158__auto___27492 + (1));
i__7158__auto___27492 = G__27493;
continue;
} else {
}
break;
}

var G__27426 = args27424.length;
switch (G__27426) {
case 1:
return sablono.core.hidden_field27423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27424.length)].join('')));

}
});

sablono.core.hidden_field27423.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.hidden_field27423.call(null,name__27320__auto__,null);
});

sablono.core.hidden_field27423.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.hidden_field27423.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27423);

/**
 * Creates a month input field.
 */
sablono.core.month_field27427 = (function sablono$core$month_field27427(var_args){
var args27428 = [];
var len__7157__auto___27495 = arguments.length;
var i__7158__auto___27496 = (0);
while(true){
if((i__7158__auto___27496 < len__7157__auto___27495)){
args27428.push((arguments[i__7158__auto___27496]));

var G__27497 = (i__7158__auto___27496 + (1));
i__7158__auto___27496 = G__27497;
continue;
} else {
}
break;
}

var G__27430 = args27428.length;
switch (G__27430) {
case 1:
return sablono.core.month_field27427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27428.length)].join('')));

}
});

sablono.core.month_field27427.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.month_field27427.call(null,name__27320__auto__,null);
});

sablono.core.month_field27427.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.month_field27427.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27427);

/**
 * Creates a number input field.
 */
sablono.core.number_field27431 = (function sablono$core$number_field27431(var_args){
var args27432 = [];
var len__7157__auto___27499 = arguments.length;
var i__7158__auto___27500 = (0);
while(true){
if((i__7158__auto___27500 < len__7157__auto___27499)){
args27432.push((arguments[i__7158__auto___27500]));

var G__27501 = (i__7158__auto___27500 + (1));
i__7158__auto___27500 = G__27501;
continue;
} else {
}
break;
}

var G__27434 = args27432.length;
switch (G__27434) {
case 1:
return sablono.core.number_field27431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27432.length)].join('')));

}
});

sablono.core.number_field27431.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.number_field27431.call(null,name__27320__auto__,null);
});

sablono.core.number_field27431.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.number_field27431.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27431);

/**
 * Creates a password input field.
 */
sablono.core.password_field27435 = (function sablono$core$password_field27435(var_args){
var args27436 = [];
var len__7157__auto___27503 = arguments.length;
var i__7158__auto___27504 = (0);
while(true){
if((i__7158__auto___27504 < len__7157__auto___27503)){
args27436.push((arguments[i__7158__auto___27504]));

var G__27505 = (i__7158__auto___27504 + (1));
i__7158__auto___27504 = G__27505;
continue;
} else {
}
break;
}

var G__27438 = args27436.length;
switch (G__27438) {
case 1:
return sablono.core.password_field27435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27436.length)].join('')));

}
});

sablono.core.password_field27435.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.password_field27435.call(null,name__27320__auto__,null);
});

sablono.core.password_field27435.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.password_field27435.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27435);

/**
 * Creates a range input field.
 */
sablono.core.range_field27439 = (function sablono$core$range_field27439(var_args){
var args27440 = [];
var len__7157__auto___27507 = arguments.length;
var i__7158__auto___27508 = (0);
while(true){
if((i__7158__auto___27508 < len__7157__auto___27507)){
args27440.push((arguments[i__7158__auto___27508]));

var G__27509 = (i__7158__auto___27508 + (1));
i__7158__auto___27508 = G__27509;
continue;
} else {
}
break;
}

var G__27442 = args27440.length;
switch (G__27442) {
case 1:
return sablono.core.range_field27439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27440.length)].join('')));

}
});

sablono.core.range_field27439.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.range_field27439.call(null,name__27320__auto__,null);
});

sablono.core.range_field27439.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.range_field27439.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27439);

/**
 * Creates a search input field.
 */
sablono.core.search_field27443 = (function sablono$core$search_field27443(var_args){
var args27444 = [];
var len__7157__auto___27511 = arguments.length;
var i__7158__auto___27512 = (0);
while(true){
if((i__7158__auto___27512 < len__7157__auto___27511)){
args27444.push((arguments[i__7158__auto___27512]));

var G__27513 = (i__7158__auto___27512 + (1));
i__7158__auto___27512 = G__27513;
continue;
} else {
}
break;
}

var G__27446 = args27444.length;
switch (G__27446) {
case 1:
return sablono.core.search_field27443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27444.length)].join('')));

}
});

sablono.core.search_field27443.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.search_field27443.call(null,name__27320__auto__,null);
});

sablono.core.search_field27443.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.search_field27443.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27443);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27447 = (function sablono$core$tel_field27447(var_args){
var args27448 = [];
var len__7157__auto___27515 = arguments.length;
var i__7158__auto___27516 = (0);
while(true){
if((i__7158__auto___27516 < len__7157__auto___27515)){
args27448.push((arguments[i__7158__auto___27516]));

var G__27517 = (i__7158__auto___27516 + (1));
i__7158__auto___27516 = G__27517;
continue;
} else {
}
break;
}

var G__27450 = args27448.length;
switch (G__27450) {
case 1:
return sablono.core.tel_field27447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27448.length)].join('')));

}
});

sablono.core.tel_field27447.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.tel_field27447.call(null,name__27320__auto__,null);
});

sablono.core.tel_field27447.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.tel_field27447.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27447);

/**
 * Creates a text input field.
 */
sablono.core.text_field27451 = (function sablono$core$text_field27451(var_args){
var args27452 = [];
var len__7157__auto___27519 = arguments.length;
var i__7158__auto___27520 = (0);
while(true){
if((i__7158__auto___27520 < len__7157__auto___27519)){
args27452.push((arguments[i__7158__auto___27520]));

var G__27521 = (i__7158__auto___27520 + (1));
i__7158__auto___27520 = G__27521;
continue;
} else {
}
break;
}

var G__27454 = args27452.length;
switch (G__27454) {
case 1:
return sablono.core.text_field27451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27452.length)].join('')));

}
});

sablono.core.text_field27451.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.text_field27451.call(null,name__27320__auto__,null);
});

sablono.core.text_field27451.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.text_field27451.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27451);

/**
 * Creates a time input field.
 */
sablono.core.time_field27455 = (function sablono$core$time_field27455(var_args){
var args27456 = [];
var len__7157__auto___27523 = arguments.length;
var i__7158__auto___27524 = (0);
while(true){
if((i__7158__auto___27524 < len__7157__auto___27523)){
args27456.push((arguments[i__7158__auto___27524]));

var G__27525 = (i__7158__auto___27524 + (1));
i__7158__auto___27524 = G__27525;
continue;
} else {
}
break;
}

var G__27458 = args27456.length;
switch (G__27458) {
case 1:
return sablono.core.time_field27455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27456.length)].join('')));

}
});

sablono.core.time_field27455.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.time_field27455.call(null,name__27320__auto__,null);
});

sablono.core.time_field27455.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.time_field27455.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27455);

/**
 * Creates a url input field.
 */
sablono.core.url_field27459 = (function sablono$core$url_field27459(var_args){
var args27460 = [];
var len__7157__auto___27527 = arguments.length;
var i__7158__auto___27528 = (0);
while(true){
if((i__7158__auto___27528 < len__7157__auto___27527)){
args27460.push((arguments[i__7158__auto___27528]));

var G__27529 = (i__7158__auto___27528 + (1));
i__7158__auto___27528 = G__27529;
continue;
} else {
}
break;
}

var G__27462 = args27460.length;
switch (G__27462) {
case 1:
return sablono.core.url_field27459.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27459.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27460.length)].join('')));

}
});

sablono.core.url_field27459.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.url_field27459.call(null,name__27320__auto__,null);
});

sablono.core.url_field27459.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.url_field27459.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27459);

/**
 * Creates a week input field.
 */
sablono.core.week_field27463 = (function sablono$core$week_field27463(var_args){
var args27464 = [];
var len__7157__auto___27531 = arguments.length;
var i__7158__auto___27532 = (0);
while(true){
if((i__7158__auto___27532 < len__7157__auto___27531)){
args27464.push((arguments[i__7158__auto___27532]));

var G__27533 = (i__7158__auto___27532 + (1));
i__7158__auto___27532 = G__27533;
continue;
} else {
}
break;
}

var G__27466 = args27464.length;
switch (G__27466) {
case 1:
return sablono.core.week_field27463.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27463.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27464.length)].join('')));

}
});

sablono.core.week_field27463.cljs$core$IFn$_invoke$arity$1 = (function (name__27320__auto__){
return sablono.core.week_field27463.call(null,name__27320__auto__,null);
});

sablono.core.week_field27463.cljs$core$IFn$_invoke$arity$2 = (function (name__27320__auto__,value__27321__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27320__auto__,value__27321__auto__);
});

sablono.core.week_field27463.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27463);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27535 = (function sablono$core$check_box27535(var_args){
var args27536 = [];
var len__7157__auto___27539 = arguments.length;
var i__7158__auto___27540 = (0);
while(true){
if((i__7158__auto___27540 < len__7157__auto___27539)){
args27536.push((arguments[i__7158__auto___27540]));

var G__27541 = (i__7158__auto___27540 + (1));
i__7158__auto___27540 = G__27541;
continue;
} else {
}
break;
}

var G__27538 = args27536.length;
switch (G__27538) {
case 1:
return sablono.core.check_box27535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27535.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27536.length)].join('')));

}
});

sablono.core.check_box27535.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box27535.call(null,name,null);
});

sablono.core.check_box27535.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box27535.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box27535.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27535.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27535);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27543 = (function sablono$core$radio_button27543(var_args){
var args27544 = [];
var len__7157__auto___27547 = arguments.length;
var i__7158__auto___27548 = (0);
while(true){
if((i__7158__auto___27548 < len__7157__auto___27547)){
args27544.push((arguments[i__7158__auto___27548]));

var G__27549 = (i__7158__auto___27548 + (1));
i__7158__auto___27548 = G__27549;
continue;
} else {
}
break;
}

var G__27546 = args27544.length;
switch (G__27546) {
case 1:
return sablono.core.radio_button27543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27543.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27544.length)].join('')));

}
});

sablono.core.radio_button27543.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button27543.call(null,group,null);
});

sablono.core.radio_button27543.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button27543.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button27543.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27543.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27543);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27551 = (function sablono$core$select_options27551(coll){
var iter__6867__auto__ = (function sablono$core$select_options27551_$_iter__27560(s__27561){
return (new cljs.core.LazySeq(null,(function (){
var s__27561__$1 = s__27561;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27561__$1);
if(temp__4657__auto__){
var s__27561__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27561__$2)){
var c__6865__auto__ = cljs.core.chunk_first.call(null,s__27561__$2);
var size__6866__auto__ = cljs.core.count.call(null,c__6865__auto__);
var b__27563 = cljs.core.chunk_buffer.call(null,size__6866__auto__);
if((function (){var i__27562 = (0);
while(true){
if((i__27562 < size__6866__auto__)){
var x = cljs.core._nth.call(null,c__6865__auto__,i__27562);
cljs.core.chunk_append.call(null,b__27563,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27566 = x;
var text = cljs.core.nth.call(null,vec__27566,(0),null);
var val = cljs.core.nth.call(null,vec__27566,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27566,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27551.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27568 = (i__27562 + (1));
i__27562 = G__27568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27563),sablono$core$select_options27551_$_iter__27560.call(null,cljs.core.chunk_rest.call(null,s__27561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27563),null);
}
} else {
var x = cljs.core.first.call(null,s__27561__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27567 = x;
var text = cljs.core.nth.call(null,vec__27567,(0),null);
var val = cljs.core.nth.call(null,vec__27567,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27567,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27551.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options27551_$_iter__27560.call(null,cljs.core.rest.call(null,s__27561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6867__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27551);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27569 = (function sablono$core$drop_down27569(var_args){
var args27570 = [];
var len__7157__auto___27573 = arguments.length;
var i__7158__auto___27574 = (0);
while(true){
if((i__7158__auto___27574 < len__7157__auto___27573)){
args27570.push((arguments[i__7158__auto___27574]));

var G__27575 = (i__7158__auto___27574 + (1));
i__7158__auto___27574 = G__27575;
continue;
} else {
}
break;
}

var G__27572 = args27570.length;
switch (G__27572) {
case 2:
return sablono.core.drop_down27569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27569.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27570.length)].join('')));

}
});

sablono.core.drop_down27569.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27569.call(null,name,options,null);
});

sablono.core.drop_down27569.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27569.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27569);
/**
 * Creates a text area element.
 */
sablono.core.text_area27577 = (function sablono$core$text_area27577(var_args){
var args27578 = [];
var len__7157__auto___27581 = arguments.length;
var i__7158__auto___27582 = (0);
while(true){
if((i__7158__auto___27582 < len__7157__auto___27581)){
args27578.push((arguments[i__7158__auto___27582]));

var G__27583 = (i__7158__auto___27582 + (1));
i__7158__auto___27582 = G__27583;
continue;
} else {
}
break;
}

var G__27580 = args27578.length;
switch (G__27580) {
case 1:
return sablono.core.text_area27577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27578.length)].join('')));

}
});

sablono.core.text_area27577.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area27577.call(null,name,null);
});

sablono.core.text_area27577.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area27577.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27577);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27585 = (function sablono$core$label27585(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27585);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27586 = (function sablono$core$submit_button27586(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27586);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27587 = (function sablono$core$reset_button27587(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27587);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27588 = (function sablono$core$form_to27588(var_args){
var args__7164__auto__ = [];
var len__7157__auto___27593 = arguments.length;
var i__7158__auto___27594 = (0);
while(true){
if((i__7158__auto___27594 < len__7157__auto___27593)){
args__7164__auto__.push((arguments[i__7158__auto___27594]));

var G__27595 = (i__7158__auto___27594 + (1));
i__7158__auto___27594 = G__27595;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27588.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

sablono.core.form_to27588.cljs$core$IFn$_invoke$arity$variadic = (function (p__27591,body){
var vec__27592 = p__27591;
var method = cljs.core.nth.call(null,vec__27592,(0),null);
var action = cljs.core.nth.call(null,vec__27592,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27588.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27588.cljs$lang$applyTo = (function (seq27589){
var G__27590 = cljs.core.first.call(null,seq27589);
var seq27589__$1 = cljs.core.next.call(null,seq27589);
return sablono.core.form_to27588.cljs$core$IFn$_invoke$arity$variadic(G__27590,seq27589__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27588);
