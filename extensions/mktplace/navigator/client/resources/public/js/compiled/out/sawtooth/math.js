// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.math');
goog.require('cljs.core');
goog.require('module$lib$deps_library');
if(typeof sawtooth.math.max_int !== 'undefined'){
} else {
sawtooth.math.max_int = (Math.pow((2),(53)) - (1));
goog.exportSymbol('sawtooth.math.max_int', sawtooth.math.max_int);
}
sawtooth.math.ceil = (function sawtooth$math$ceil(n){
return Math.ceil(n);
});
sawtooth.math.floor = (function sawtooth$math$floor(n){
return Math.floor(n);
});
sawtooth.math.abs = (function sawtooth$math$abs(n){
return Math.abs(n);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sawtooth.math.Fraction = (function (numerator,denominator,__meta,__extmap,__hash){
this.numerator = numerator;
this.denominator = denominator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
sawtooth.math.Fraction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6709__auto__,k__6710__auto__){
var self__ = this;
var this__6709__auto____$1 = this;
return cljs.core._lookup.call(null,this__6709__auto____$1,k__6710__auto__,null);
});

sawtooth.math.Fraction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6711__auto__,k25466,else__6712__auto__){
var self__ = this;
var this__6711__auto____$1 = this;
var G__25468 = (((k25466 instanceof cljs.core.Keyword))?k25466.fqn:null);
switch (G__25468) {
case "numerator":
return self__.numerator;

break;
case "denominator":
return self__.denominator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25466,else__6712__auto__);

}
});

sawtooth.math.Fraction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6723__auto__,writer__6724__auto__,opts__6725__auto__){
var self__ = this;
var this__6723__auto____$1 = this;
var pr_pair__6726__auto__ = ((function (this__6723__auto____$1){
return (function (keyval__6727__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6724__auto__,cljs.core.pr_writer,""," ","",opts__6725__auto__,keyval__6727__auto__);
});})(this__6723__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6724__auto__,pr_pair__6726__auto__,"#sawtooth.math.Fraction{",", ","}",opts__6725__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"numerator","numerator",-160761104),self__.numerator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"denominator","denominator",-804365096),self__.denominator],null))], null),self__.__extmap));
});

sawtooth.math.Fraction.prototype.cljs$core$IIterable$ = true;

sawtooth.math.Fraction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25465){
var self__ = this;
var G__25465__$1 = this;
return (new cljs.core.RecordIter((0),G__25465__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"numerator","numerator",-160761104),new cljs.core.Keyword(null,"denominator","denominator",-804365096)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

sawtooth.math.Fraction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6707__auto__){
var self__ = this;
var this__6707__auto____$1 = this;
return self__.__meta;
});

sawtooth.math.Fraction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6703__auto__){
var self__ = this;
var this__6703__auto____$1 = this;
return (new sawtooth.math.Fraction(self__.numerator,self__.denominator,self__.__meta,self__.__extmap,self__.__hash));
});

sawtooth.math.Fraction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6713__auto__){
var self__ = this;
var this__6713__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

sawtooth.math.Fraction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6704__auto__){
var self__ = this;
var this__6704__auto____$1 = this;
var h__6522__auto__ = self__.__hash;
if(!((h__6522__auto__ == null))){
return h__6522__auto__;
} else {
var h__6522__auto____$1 = cljs.core.hash_imap.call(null,this__6704__auto____$1);
self__.__hash = h__6522__auto____$1;

return h__6522__auto____$1;
}
});

sawtooth.math.Fraction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6705__auto__,other__6706__auto__){
var self__ = this;
var this__6705__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6075__auto__ = other__6706__auto__;
if(cljs.core.truth_(and__6075__auto__)){
var and__6075__auto____$1 = (this__6705__auto____$1.constructor === other__6706__auto__.constructor);
if(and__6075__auto____$1){
return cljs.core.equiv_map.call(null,this__6705__auto____$1,other__6706__auto__);
} else {
return and__6075__auto____$1;
}
} else {
return and__6075__auto__;
}
})())){
return true;
} else {
return false;
}
});

sawtooth.math.Fraction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6718__auto__,k__6719__auto__){
var self__ = this;
var this__6718__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"numerator","numerator",-160761104),null,new cljs.core.Keyword(null,"denominator","denominator",-804365096),null], null), null),k__6719__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6718__auto____$1),self__.__meta),k__6719__auto__);
} else {
return (new sawtooth.math.Fraction(self__.numerator,self__.denominator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6719__auto__)),null));
}
});

sawtooth.math.Fraction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6716__auto__,k__6717__auto__,G__25465){
var self__ = this;
var this__6716__auto____$1 = this;
var pred__25469 = cljs.core.keyword_identical_QMARK_;
var expr__25470 = k__6717__auto__;
if(cljs.core.truth_(pred__25469.call(null,new cljs.core.Keyword(null,"numerator","numerator",-160761104),expr__25470))){
return (new sawtooth.math.Fraction(G__25465,self__.denominator,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25469.call(null,new cljs.core.Keyword(null,"denominator","denominator",-804365096),expr__25470))){
return (new sawtooth.math.Fraction(self__.numerator,G__25465,self__.__meta,self__.__extmap,null));
} else {
return (new sawtooth.math.Fraction(self__.numerator,self__.denominator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6717__auto__,G__25465),null));
}
}
});

sawtooth.math.Fraction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6721__auto__){
var self__ = this;
var this__6721__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"numerator","numerator",-160761104),self__.numerator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"denominator","denominator",-804365096),self__.denominator],null))], null),self__.__extmap));
});

sawtooth.math.Fraction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6708__auto__,G__25465){
var self__ = this;
var this__6708__auto____$1 = this;
return (new sawtooth.math.Fraction(self__.numerator,self__.denominator,G__25465,self__.__extmap,self__.__hash));
});

sawtooth.math.Fraction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6714__auto__,entry__6715__auto__){
var self__ = this;
var this__6714__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6715__auto__)){
return cljs.core._assoc.call(null,this__6714__auto____$1,cljs.core._nth.call(null,entry__6715__auto__,(0)),cljs.core._nth.call(null,entry__6715__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6714__auto____$1,entry__6715__auto__);
}
});

sawtooth.math.Fraction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"numerator","numerator",1479770423,null),new cljs.core.Symbol(null,"denominator","denominator",836166431,null)], null);
});

sawtooth.math.Fraction.cljs$lang$type = true;

sawtooth.math.Fraction.cljs$lang$ctorPrSeq = (function (this__6743__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"sawtooth.math/Fraction");
});

sawtooth.math.Fraction.cljs$lang$ctorPrWriter = (function (this__6743__auto__,writer__6744__auto__){
return cljs.core._write.call(null,writer__6744__auto__,"sawtooth.math/Fraction");
});

sawtooth.math.__GT_Fraction = (function sawtooth$math$__GT_Fraction(numerator,denominator){
return (new sawtooth.math.Fraction(numerator,denominator,null,null,null));
});

sawtooth.math.map__GT_Fraction = (function sawtooth$math$map__GT_Fraction(G__25467){
return (new sawtooth.math.Fraction(new cljs.core.Keyword(null,"numerator","numerator",-160761104).cljs$core$IFn$_invoke$arity$1(G__25467),new cljs.core.Keyword(null,"denominator","denominator",-804365096).cljs$core$IFn$_invoke$arity$1(G__25467),null,cljs.core.dissoc.call(null,G__25467,new cljs.core.Keyword(null,"numerator","numerator",-160761104),new cljs.core.Keyword(null,"denominator","denominator",-804365096)),null));
});

sawtooth.math.ratio__GT_fraction = (function sawtooth$math$ratio__GT_fraction(r){
var f = (new module$lib$deps_library.Fraction(r));
return (new sawtooth.math.Fraction(f.n,f.d,null,null,null));
});
sawtooth.math.numerator = (function sawtooth$math$numerator(f){
return f.numerator;
});
sawtooth.math.denominator = (function sawtooth$math$denominator(f){
return f.denominator;
});
