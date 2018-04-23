// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.ledger.message');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('module$lib$deps_library');
goog.require('sawtooth.math');
sawtooth.ledger.message._STAR_ratios_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Ratio","Ratio",991013586),null], null), null));
sawtooth.ledger.message.set_ratio_fields_BANG_ = (function sawtooth$ledger$message$set_ratio_fields_BANG_(field_set){
return cljs.core.reset_BANG_.call(null,sawtooth.ledger.message._STAR_ratios_STAR_,cljs.core.set.call(null,field_set));
});
sawtooth.ledger.message.reset_ratio_fields_BANG_ = (function sawtooth$ledger$message$reset_ratio_fields_BANG_(){
return cljs.core.reset_BANG_.call(null,sawtooth.ledger.message._STAR_ratios_STAR_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Ratio","Ratio",991013586),null], null), null));
});
sawtooth.ledger.message.seconds_since_epoch = (function sawtooth$ledger$message$seconds_since_epoch(){
return sawtooth.math.floor.call(null,(Date.now() / (1000)));
});
sawtooth.ledger.message.sort_by_keys = (function sawtooth$ledger$message$sort_by_keys(m,xform){
return cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,cljs.core.compare),cljs.core.map.call(null,(function (p__25478){
var vec__25479 = p__25478;
var k = cljs.core.nth.call(null,vec__25479,(0),null);
var v = cljs.core.nth.call(null,vec__25479,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.map_QMARK_.call(null,v))?sawtooth$ledger$message$sort_by_keys.call(null,v,xform):((cljs.core.vector_QMARK_.call(null,v))?cljs.core.mapv.call(null,((function (vec__25479,k,v){
return (function (p1__25475_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__25475_SHARP_)){
return sawtooth$ledger$message$sort_by_keys.call(null,p1__25475_SHARP_,xform);
} else {
return p1__25475_SHARP_;
}
});})(vec__25479,k,v))
,v):xform.call(null,k,v)
))], null);
}),m));
});
sawtooth.ledger.message.__GT_signable = (function sawtooth$ledger$message$__GT_signable(m){
return sawtooth.ledger.message.sort_by_keys.call(null,m,(function (p1__25480_SHARP_,p2__25481_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,sawtooth.ledger.message._STAR_ratios_STAR_).call(null,p1__25480_SHARP_))){
return (new module$lib$deps_library.Ratio(p2__25481_SHARP_));
} else {
return p2__25481_SHARP_;
}
}));
});
sawtooth.ledger.message.signable__GT_map = (function sawtooth$ledger$message$signable__GT_map(signable_obj){
return sawtooth.ledger.message.sort_by_keys.call(null,signable_obj,(function (p1__25483_SHARP_,p2__25482_SHARP_){
if((p2__25482_SHARP_ instanceof module$lib$deps_library.Ratio)){
return p2__25482_SHARP_.n;
} else {
return p2__25482_SHARP_;
}
}));
});

/**
 * @interface
 */
sawtooth.ledger.message.Signee = function(){};

/**
 * Signs the given map and assoc's the resulting signature at the given key.
 *  Returns the signed map on a channel
 */
sawtooth.ledger.message.do_sign = (function sawtooth$ledger$message$do_sign(self,m,k){
if((!((self == null))) && (!((self.sawtooth$ledger$message$Signee$do_sign$arity$3 == null)))){
return self.sawtooth$ledger$message$Signee$do_sign$arity$3(self,m,k);
} else {
var x__6750__auto__ = (((self == null))?null:self);
var m__6751__auto__ = (sawtooth.ledger.message.do_sign[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,self,m,k);
} else {
var m__6751__auto____$1 = (sawtooth.ledger.message.do_sign["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,self,m,k);
} else {
throw cljs.core.missing_protocol.call(null,"Signee.do-sign",self);
}
}
}
});

/**
 * Returns the public key associated with the with the Signee
 */
sawtooth.ledger.message.public_key = (function sawtooth$ledger$message$public_key(self){
if((!((self == null))) && (!((self.sawtooth$ledger$message$Signee$public_key$arity$1 == null)))){
return self.sawtooth$ledger$message$Signee$public_key$arity$1(self);
} else {
var x__6750__auto__ = (((self == null))?null:self);
var m__6751__auto__ = (sawtooth.ledger.message.public_key[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,self);
} else {
var m__6751__auto____$1 = (sawtooth.ledger.message.public_key["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"Signee.public-key",self);
}
}
}
});

sawtooth.ledger.message.sign_transaction = (function sawtooth$ledger$message$sign_transaction(signee,txn){
return sawtooth.ledger.message.do_sign.call(null,signee,txn,new cljs.core.Keyword(null,"Signature","Signature",236533728));
});
sawtooth.ledger.message.sign_message = (function sawtooth$ledger$message$sign_message(signee,msg){
return sawtooth.ledger.message.do_sign.call(null,signee,msg,new cljs.core.Keyword(null,"__SIGNATURE__","__SIGNATURE__",1893404879));
});
sawtooth.ledger.message.sign = (function sawtooth$ledger$message$sign(signee,msg_type,txn){
if(((!((signee == null)))?(((false) || (signee.sawtooth$ledger$message$Signee$))?true:(((!signee.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,sawtooth.ledger.message.Signee,signee):false)):cljs.core.native_satisfies_QMARK_.call(null,sawtooth.ledger.message.Signee,signee))){
} else {
throw (new Error("Assert failed: (satisfies? Signee signee)"));
}

var pub_key = sawtooth.ledger.message.public_key.call(null,signee);
var txn__$1 = (function (){var G__25507 = txn;
var G__25507__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"Nonce","Nonce",526341296).cljs$core$IFn$_invoke$arity$1(txn)))?cljs.core.assoc.call(null,G__25507,new cljs.core.Keyword(null,"Nonce","Nonce",526341296),sawtooth.ledger.message.seconds_since_epoch.call(null)):G__25507);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"PublicKey","PublicKey",1820443825).cljs$core$IFn$_invoke$arity$1(txn))){
return cljs.core.assoc.call(null,G__25507__$1,new cljs.core.Keyword(null,"PublicKey","PublicKey",1820443825),pub_key);
} else {
return G__25507__$1;
}
})();
var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__,pub_key,txn__$1){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__,pub_key,txn__$1){
return (function (state_25519){
var state_val_25520 = (state_25519[(1)]);
if((state_val_25520 === (1))){
var inst_25508 = sawtooth.ledger.message.sign_transaction.call(null,signee,txn__$1);
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25519__$1,(2),inst_25508);
} else {
if((state_val_25520 === (2))){
var inst_25510 = (state_25519[(2)]);
var inst_25511 = [new cljs.core.Keyword(null,"Transaction","Transaction",-393998180),new cljs.core.Keyword(null,"__TYPE__","__TYPE__",451077509),new cljs.core.Keyword(null,"__NONCE__","__NONCE__",935668795)];
var inst_25512 = sawtooth.ledger.message.seconds_since_epoch.call(null);
var inst_25513 = [inst_25510,msg_type,inst_25512];
var inst_25514 = cljs.core.PersistentHashMap.fromArrays(inst_25511,inst_25513);
var inst_25515 = sawtooth.ledger.message.sign_message.call(null,signee,inst_25514);
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25519__$1,(3),inst_25515);
} else {
if((state_val_25520 === (3))){
var inst_25517 = (state_25519[(2)]);
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25519__$1,inst_25517);
} else {
return null;
}
}
}
});})(c__12583__auto__,pub_key,txn__$1))
;
return ((function (switch__12471__auto__,c__12583__auto__,pub_key,txn__$1){
return (function() {
var sawtooth$ledger$message$sign_$_state_machine__12472__auto__ = null;
var sawtooth$ledger$message$sign_$_state_machine__12472__auto____0 = (function (){
var statearr_25524 = [null,null,null,null,null,null,null];
(statearr_25524[(0)] = sawtooth$ledger$message$sign_$_state_machine__12472__auto__);

(statearr_25524[(1)] = (1));

return statearr_25524;
});
var sawtooth$ledger$message$sign_$_state_machine__12472__auto____1 = (function (state_25519){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_25519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e25525){if((e25525 instanceof Object)){
var ex__12475__auto__ = e25525;
var statearr_25526_25528 = state_25519;
(statearr_25526_25528[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25529 = state_25519;
state_25519 = G__25529;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
sawtooth$ledger$message$sign_$_state_machine__12472__auto__ = function(state_25519){
switch(arguments.length){
case 0:
return sawtooth$ledger$message$sign_$_state_machine__12472__auto____0.call(this);
case 1:
return sawtooth$ledger$message$sign_$_state_machine__12472__auto____1.call(this,state_25519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sawtooth$ledger$message$sign_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = sawtooth$ledger$message$sign_$_state_machine__12472__auto____0;
sawtooth$ledger$message$sign_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = sawtooth$ledger$message$sign_$_state_machine__12472__auto____1;
return sawtooth$ledger$message$sign_$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__,pub_key,txn__$1))
})();
var state__12585__auto__ = (function (){var statearr_25527 = f__12584__auto__.call(null);
(statearr_25527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_25527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__,pub_key,txn__$1))
);

return c__12583__auto__;
});
/**
 * Makes a transaction body for the given update.
 */
sawtooth.ledger.message.make_transaction = (function sawtooth$ledger$message$make_transaction(var_args){
var args25530 = [];
var len__7157__auto___25534 = arguments.length;
var i__7158__auto___25535 = (0);
while(true){
if((i__7158__auto___25535 < len__7157__auto___25534)){
args25530.push((arguments[i__7158__auto___25535]));

var G__25536 = (i__7158__auto___25535 + (1));
i__7158__auto___25535 = G__25536;
continue;
} else {
}
break;
}

var G__25532 = args25530.length;
switch (G__25532) {
case 2:
return sawtooth.ledger.message.make_transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.ledger.message.make_transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25530.length)].join('')));

}
});

sawtooth.ledger.message.make_transaction.cljs$core$IFn$_invoke$arity$2 = (function (txn_type,txn_update){
return sawtooth.ledger.message.make_transaction.call(null,txn_type,txn_update,cljs.core.PersistentVector.EMPTY);
});

sawtooth.ledger.message.make_transaction.cljs$core$IFn$_invoke$arity$3 = (function (txn_type,txn_update,dependencies){
if(typeof txn_type === 'string'){
} else {
throw (new Error("Assert failed: (string? txn-type)"));
}

if((cljs.core.vector_QMARK_.call(null,txn_update)) || (cljs.core.map_QMARK_.call(null,txn_update))){
} else {
throw (new Error("Assert failed: (or (vector? txn-update) (map? txn-update))"));
}

if(cljs.core.vector_QMARK_.call(null,dependencies)){
} else {
throw (new Error("Assert failed: (vector? dependencies)"));
}

var G__25533 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"TransactionType","TransactionType",1211886974),txn_type,new cljs.core.Keyword(null,"Nonce","Nonce",526341296),sawtooth.ledger.message.seconds_since_epoch.call(null),new cljs.core.Keyword(null,"Dependencies","Dependencies",1805355173),dependencies], null);
var G__25533__$1 = ((cljs.core.vector_QMARK_.call(null,txn_update))?cljs.core.assoc.call(null,G__25533,new cljs.core.Keyword(null,"Updates","Updates",889267029),txn_update):G__25533);
if(cljs.core.map_QMARK_.call(null,txn_update)){
return cljs.core.assoc.call(null,G__25533__$1,new cljs.core.Keyword(null,"Update","Update",905920545),txn_update);
} else {
return G__25533__$1;
}
});

sawtooth.ledger.message.make_transaction.cljs$lang$maxFixedArity = 3;
