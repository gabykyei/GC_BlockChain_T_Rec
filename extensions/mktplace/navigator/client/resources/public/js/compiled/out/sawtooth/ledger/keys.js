// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.ledger.keys');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sawtooth.ledger.message');
goog.require('module$lib$deps_library');
goog.require('sawtooth.store');
sawtooth.ledger.keys.direct_sign = (function sawtooth$ledger$keys$direct_sign(ec_pair,m,field){
var signable_obj = cljs.core.dissoc.call(null,sawtooth.ledger.message.__GT_signable.call(null,m),field);
var signature = module$lib$deps_library.bitcoin.sign(ec_pair,cljs.core.clj__GT_js.call(null,signable_obj));
return sawtooth.ledger.message.signable__GT_map.call(null,cljs.core.assoc.call(null,signable_obj,field,signature));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {sawtooth.ledger.message.Signee}
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
sawtooth.ledger.keys.KeyPair = (function (ec_pair,__meta,__extmap,__hash){
this.ec_pair = ec_pair;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
sawtooth.ledger.keys.KeyPair.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6709__auto__,k__6710__auto__){
var self__ = this;
var this__6709__auto____$1 = this;
return cljs.core._lookup.call(null,this__6709__auto____$1,k__6710__auto__,null);
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6711__auto__,k25541,else__6712__auto__){
var self__ = this;
var this__6711__auto____$1 = this;
var G__25543 = (((k25541 instanceof cljs.core.Keyword))?k25541.fqn:null);
switch (G__25543) {
case "ec-pair":
return self__.ec_pair;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25541,else__6712__auto__);

}
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6723__auto__,writer__6724__auto__,opts__6725__auto__){
var self__ = this;
var this__6723__auto____$1 = this;
var pr_pair__6726__auto__ = ((function (this__6723__auto____$1){
return (function (keyval__6727__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6724__auto__,cljs.core.pr_writer,""," ","",opts__6725__auto__,keyval__6727__auto__);
});})(this__6723__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6724__auto__,pr_pair__6726__auto__,"#sawtooth.ledger.keys.KeyPair{",", ","}",opts__6725__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483),self__.ec_pair],null))], null),self__.__extmap));
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IIterable$ = true;

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25540){
var self__ = this;
var G__25540__$1 = this;
return (new cljs.core.RecordIter((0),G__25540__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6707__auto__){
var self__ = this;
var this__6707__auto____$1 = this;
return self__.__meta;
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6703__auto__){
var self__ = this;
var this__6703__auto____$1 = this;
return (new sawtooth.ledger.keys.KeyPair(self__.ec_pair,self__.__meta,self__.__extmap,self__.__hash));
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6713__auto__){
var self__ = this;
var this__6713__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6704__auto__){
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

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6705__auto__,other__6706__auto__){
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

sawtooth.ledger.keys.KeyPair.prototype.sawtooth$ledger$message$Signee$ = true;

sawtooth.ledger.keys.KeyPair.prototype.sawtooth$ledger$message$Signee$do_sign$arity$3 = (function (_,m,field){
var self__ = this;
var ___$1 = this;
return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sawtooth.ledger.keys.direct_sign.call(null,self__.ec_pair,m,field)], null));
});

sawtooth.ledger.keys.KeyPair.prototype.sawtooth$ledger$message$Signee$public_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return module$lib$deps_library.bitcoin.publicKeyHex(self__.ec_pair);
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6718__auto__,k__6719__auto__){
var self__ = this;
var this__6718__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483),null], null), null),k__6719__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6718__auto____$1),self__.__meta),k__6719__auto__);
} else {
return (new sawtooth.ledger.keys.KeyPair(self__.ec_pair,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6719__auto__)),null));
}
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6716__auto__,k__6717__auto__,G__25540){
var self__ = this;
var this__6716__auto____$1 = this;
var pred__25544 = cljs.core.keyword_identical_QMARK_;
var expr__25545 = k__6717__auto__;
if(cljs.core.truth_(pred__25544.call(null,new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483),expr__25545))){
return (new sawtooth.ledger.keys.KeyPair(G__25540,self__.__meta,self__.__extmap,null));
} else {
return (new sawtooth.ledger.keys.KeyPair(self__.ec_pair,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6717__auto__,G__25540),null));
}
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6721__auto__){
var self__ = this;
var this__6721__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483),self__.ec_pair],null))], null),self__.__extmap));
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6708__auto__,G__25540){
var self__ = this;
var this__6708__auto____$1 = this;
return (new sawtooth.ledger.keys.KeyPair(self__.ec_pair,G__25540,self__.__extmap,self__.__hash));
});

sawtooth.ledger.keys.KeyPair.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6714__auto__,entry__6715__auto__){
var self__ = this;
var this__6714__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6715__auto__)){
return cljs.core._assoc.call(null,this__6714__auto____$1,cljs.core._nth.call(null,entry__6715__auto__,(0)),cljs.core._nth.call(null,entry__6715__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6714__auto____$1,entry__6715__auto__);
}
});

sawtooth.ledger.keys.KeyPair.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ec-pair","ec-pair",-764985286,null)], null);
});

sawtooth.ledger.keys.KeyPair.cljs$lang$type = true;

sawtooth.ledger.keys.KeyPair.cljs$lang$ctorPrSeq = (function (this__6743__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"sawtooth.ledger.keys/KeyPair");
});

sawtooth.ledger.keys.KeyPair.cljs$lang$ctorPrWriter = (function (this__6743__auto__,writer__6744__auto__){
return cljs.core._write.call(null,writer__6744__auto__,"sawtooth.ledger.keys/KeyPair");
});

sawtooth.ledger.keys.__GT_KeyPair = (function sawtooth$ledger$keys$__GT_KeyPair(ec_pair){
return (new sawtooth.ledger.keys.KeyPair(ec_pair,null,null,null));
});

sawtooth.ledger.keys.map__GT_KeyPair = (function sawtooth$ledger$keys$map__GT_KeyPair(G__25542){
return (new sawtooth.ledger.keys.KeyPair(new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483).cljs$core$IFn$_invoke$arity$1(G__25542),null,cljs.core.dissoc.call(null,G__25542,new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483)),null));
});

/**
 * Creates a random key pair.
 */
sawtooth.ledger.keys.random_key_pair = (function sawtooth$ledger$keys$random_key_pair(){
return (new sawtooth.ledger.keys.KeyPair(module$lib$deps_library.bitcoin.ECPair.makeRandom(),null,null,null));
});
/**
 * Takes an encoded WIF key and returns a key pair.
 */
sawtooth.ledger.keys.wif__GT_key_pair = (function sawtooth$ledger$keys$wif__GT_key_pair(wif_str){
return (new sawtooth.ledger.keys.KeyPair(module$lib$deps_library.bitcoin.ECPair.fromWIF(wif_str),null,null,null));
});
/**
 * Takes a key pair and returns a WIF encoded string.
 */
sawtooth.ledger.keys.key_pair__GT_wif = (function sawtooth$ledger$keys$key_pair__GT_wif(key_pair){
return new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483).cljs$core$IFn$_invoke$arity$1(key_pair).toWIF();
});
/**
 * Returns the address associated with the given key pair.
 */
sawtooth.ledger.keys.address = (function sawtooth$ledger$keys$address(key_pair){
if(cljs.core.truth_(key_pair)){
return new cljs.core.Keyword(null,"ec-pair","ec-pair",1889450483).cljs$core$IFn$_invoke$arity$1(key_pair).getAddress();
} else {
return null;
}
});
/**
 * Returns a key-pair from cookie/local storage
 */
sawtooth.ledger.keys.get_key_pair = (function sawtooth$ledger$keys$get_key_pair(){
var temp__4657__auto__ = sawtooth.store.get_data.call(null,new cljs.core.Keyword(null,"wif-key","wif-key",284969873));
if(cljs.core.truth_(temp__4657__auto__)){
var wif = temp__4657__auto__;
return sawtooth.ledger.keys.wif__GT_key_pair.call(null,wif);
} else {
return null;
}
});
/**
 * Saves wif-key to a cookie or local storage
 */
sawtooth.ledger.keys.save_wif_BANG_ = (function sawtooth$ledger$keys$save_wif_BANG_(wif_key){
return sawtooth.store.save_data_BANG_.call(null,new cljs.core.Keyword(null,"wif-key","wif-key",284969873),wif_key);
});
/**
 * Removes the WIF key from storage.
 */
sawtooth.ledger.keys.clear_wif_BANG_ = (function sawtooth$ledger$keys$clear_wif_BANG_(){
return sawtooth.store.remove_data_BANG_.call(null,new cljs.core.Keyword(null,"wif-key","wif-key",284969873));
});
