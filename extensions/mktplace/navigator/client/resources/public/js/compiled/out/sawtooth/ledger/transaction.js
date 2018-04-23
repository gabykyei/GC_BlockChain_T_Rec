// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.ledger.transaction');
goog.require('cljs.core');
goog.require('sawtooth.state');
goog.require('goog.string');
goog.require('taoensso.timbre');
goog.require('sawtooth.http');
goog.require('cljs.core.async');
goog.require('sawtooth.ledger.message');
goog.require('sawtooth.config');
goog.require('clojure.string');
sawtooth.ledger.transaction.TRANSACTIONS_ENDPOINT = [cljs.core.str(sawtooth.config.base_url),cljs.core.str("/api/ledger/transactions")].join('');
sawtooth.ledger.transaction.update_type = (function sawtooth$ledger$transaction$update_type(txn){
var temp__4655__auto__ = cljs.core.get_in.call(null,txn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Update","Update",905920545),new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var type_str = temp__4655__auto__;
return type_str;
} else {
return clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),cljs.core.get.call(null,txn,new cljs.core.Keyword(null,"Updates","Updates",889267029))));
}
});
sawtooth.ledger.transaction.vectorize = (function sawtooth$ledger$transaction$vectorize(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,null], null);
}
});
sawtooth.ledger.transaction.unwrap_vec = (function sawtooth$ledger$transaction$unwrap_vec(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return v;
}
});
sawtooth.ledger.transaction.on_transaction_success = (function sawtooth$ledger$transaction$on_transaction_success(txn,on_done_fn){
cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,sawtooth.state.notification_action.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"title","title",636505583),"Transaction Submitted",new cljs.core.Keyword(null,"message","message",-406056002),goog.string.format("Your %s transaction has been\n                                    submitted to the validator.",sawtooth.ledger.transaction.update_type.call(null,txn))], null)));

if(cljs.core.truth_(on_done_fn)){
return on_done_fn.call(null);
} else {
return null;
}
});
sawtooth.ledger.transaction.on_transaction_failure = (function sawtooth$ledger$transaction$on_transaction_failure(txn,failure_info){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,sawtooth.state.notification_action.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Unable to Submit Transaction!",new cljs.core.Keyword(null,"message","message",-406056002),goog.string.format("Unable to submit a %s transaction at this time:\n%s",sawtooth.ledger.transaction.update_type.call(null,txn),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(failure_info))], null)));
});
/**
 * Sends a transaction, returning a channel that will contain the
 *   resulting transaction id, or :error if it fails.
 */
sawtooth.ledger.transaction.send = (function sawtooth$ledger$transaction$send(var_args){
var args25588 = [];
var len__7157__auto___25610 = arguments.length;
var i__7158__auto___25611 = (0);
while(true){
if((i__7158__auto___25611 < len__7157__auto___25610)){
args25588.push((arguments[i__7158__auto___25611]));

var G__25612 = (i__7158__auto___25611 + (1));
i__7158__auto___25611 = G__25612;
continue;
} else {
}
break;
}

var G__25590 = args25588.length;
switch (G__25590) {
case 3:
return sawtooth.ledger.transaction.send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.ledger.transaction.send.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25588.length)].join('')));

}
});

sawtooth.ledger.transaction.send.cljs$core$IFn$_invoke$arity$3 = (function (signing_identity,msg_type,txn){
return sawtooth.ledger.transaction.send.call(null,signing_identity,msg_type,txn,null);
});

sawtooth.ledger.transaction.send.cljs$core$IFn$_invoke$arity$4 = (function (signing_identity,msg_type,txn,annotations){
if(!((signing_identity == null))){
} else {
throw (new Error("Assert failed: (not (nil? signing-identity))"));
}

if(typeof msg_type === 'string'){
} else {
throw (new Error("Assert failed: (string? msg-type)"));
}

if(cljs.core.map_QMARK_.call(null,txn)){
} else {
throw (new Error("Assert failed: (map? txn)"));
}

if(((annotations == null)) || (cljs.core.map_QMARK_.call(null,annotations))){
} else {
throw (new Error("Assert failed: (or (nil? annotations) (map? annotations))"));
}

var res_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,(function (p__25591){
var map__25592 = p__25591;
var map__25592__$1 = ((((!((map__25592 == null)))?((((map__25592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25592):map__25592);
var status = cljs.core.get.call(null,map__25592__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.call(null,map__25592__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if((cljs.core._EQ_.call(null,status,(200))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statusCode","statusCode",-34606052).cljs$core$IFn$_invoke$arity$1(body),(400)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error?","error?",-460689159),true,new cljs.core.Keyword(null,"message","message",-406056002),goog.string.format("%s.\n%s.",new cljs.core.Keyword(null,"errorTypeMessage","errorTypeMessage",-2027332520).cljs$core$IFn$_invoke$arity$1(body),new cljs.core.Keyword(null,"errorMessage","errorMessage",982744869).cljs$core$IFn$_invoke$arity$1(body))], null);
} else {
if(cljs.core._EQ_.call(null,status,(200))){
return body;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error?","error?",-460689159),true,new cljs.core.Keyword(null,"message","message",-406056002),"an unknown server error occurred."], null);

}
}
})));
var signed_txn_ch = sawtooth.ledger.message.sign.call(null,signing_identity,msg_type,txn);
var c__12583__auto___25614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___25614,res_ch,signed_txn_ch){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___25614,res_ch,signed_txn_ch){
return (function (state_25601){
var state_val_25602 = (state_25601[(1)]);
if((state_val_25602 === (1))){
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25601__$1,(2),signed_txn_ch);
} else {
if((state_val_25602 === (2))){
var inst_25595 = (state_25601[(2)]);
var inst_25596 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"annotations","annotations",1640956248)];
var inst_25597 = [inst_25595,annotations];
var inst_25598 = cljs.core.PersistentHashMap.fromArrays(inst_25596,inst_25597);
var inst_25599 = sawtooth.http.json_xhr.call(null,new cljs.core.Keyword(null,"post","post",269697687),sawtooth.ledger.transaction.TRANSACTIONS_ENDPOINT,inst_25598,res_ch);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25601__$1,inst_25599);
} else {
return null;
}
}
});})(c__12583__auto___25614,res_ch,signed_txn_ch))
;
return ((function (switch__12471__auto__,c__12583__auto___25614,res_ch,signed_txn_ch){
return (function() {
var sawtooth$ledger$transaction$state_machine__12472__auto__ = null;
var sawtooth$ledger$transaction$state_machine__12472__auto____0 = (function (){
var statearr_25606 = [null,null,null,null,null,null,null];
(statearr_25606[(0)] = sawtooth$ledger$transaction$state_machine__12472__auto__);

(statearr_25606[(1)] = (1));

return statearr_25606;
});
var sawtooth$ledger$transaction$state_machine__12472__auto____1 = (function (state_25601){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_25601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e25607){if((e25607 instanceof Object)){
var ex__12475__auto__ = e25607;
var statearr_25608_25615 = state_25601;
(statearr_25608_25615[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25616 = state_25601;
state_25601 = G__25616;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
sawtooth$ledger$transaction$state_machine__12472__auto__ = function(state_25601){
switch(arguments.length){
case 0:
return sawtooth$ledger$transaction$state_machine__12472__auto____0.call(this);
case 1:
return sawtooth$ledger$transaction$state_machine__12472__auto____1.call(this,state_25601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sawtooth$ledger$transaction$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = sawtooth$ledger$transaction$state_machine__12472__auto____0;
sawtooth$ledger$transaction$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = sawtooth$ledger$transaction$state_machine__12472__auto____1;
return sawtooth$ledger$transaction$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___25614,res_ch,signed_txn_ch))
})();
var state__12585__auto__ = (function (){var statearr_25609 = f__12584__auto__.call(null);
(statearr_25609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___25614);

return statearr_25609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___25614,res_ch,signed_txn_ch))
);


return res_ch;
});

sawtooth.ledger.transaction.send.cljs$lang$maxFixedArity = 4;
/**
 * Sends a transaction
 */
sawtooth.ledger.transaction.send_transaction = (function sawtooth$ledger$transaction$send_transaction(var_args){
var args25617 = [];
var len__7157__auto___25620 = arguments.length;
var i__7158__auto___25621 = (0);
while(true){
if((i__7158__auto___25621 < len__7157__auto___25620)){
args25617.push((arguments[i__7158__auto___25621]));

var G__25622 = (i__7158__auto___25621 + (1));
i__7158__auto___25621 = G__25622;
continue;
} else {
}
break;
}

var G__25619 = args25617.length;
switch (G__25619) {
case 3:
return sawtooth.ledger.transaction.send_transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.ledger.transaction.send_transaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sawtooth.ledger.transaction.send_transaction.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25617.length)].join('')));

}
});

sawtooth.ledger.transaction.send_transaction.cljs$core$IFn$_invoke$arity$3 = (function (signing_identity,msg_type,txn){
return sawtooth.ledger.transaction.send_transaction.call(null,signing_identity,msg_type,txn,null,null);
});

sawtooth.ledger.transaction.send_transaction.cljs$core$IFn$_invoke$arity$4 = (function (signing_identity,msg_type,txn,annotations_or_on_done_fn){
var annotations = ((!(cljs.core.fn_QMARK_.call(null,annotations_or_on_done_fn)))?annotations_or_on_done_fn:null);
var on_done_fn = ((cljs.core.fn_QMARK_.call(null,annotations_or_on_done_fn))?annotations_or_on_done_fn:null);
return sawtooth.ledger.transaction.send_transaction.call(null,signing_identity,msg_type,txn,annotations,on_done_fn);
});

sawtooth.ledger.transaction.send_transaction.cljs$core$IFn$_invoke$arity$5 = (function (signing_identity,msg_type,txn,annotations,on_done_fn){
if(!((signing_identity == null))){
} else {
throw (new Error("Assert failed: (not (nil? signing-identity))"));
}

if(typeof msg_type === 'string'){
} else {
throw (new Error("Assert failed: (string? msg-type)"));
}

if(cljs.core.map_QMARK_.call(null,txn)){
} else {
throw (new Error("Assert failed: (map? txn)"));
}

if(((annotations == null)) || (cljs.core.map_QMARK_.call(null,annotations))){
} else {
throw (new Error("Assert failed: (or (nil? annotations) (map? annotations))"));
}

if(((on_done_fn == null)) || (cljs.core.fn_QMARK_.call(null,on_done_fn))){
} else {
throw (new Error("Assert failed: (or (nil? on-done-fn) (fn? on-done-fn))"));
}

return cljs.core.async.take_BANG_.call(null,sawtooth.ledger.transaction.send.call(null,signing_identity,msg_type,txn,annotations),(function (result){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(result))){
return sawtooth.ledger.transaction.on_transaction_success.call(null,txn,on_done_fn);
} else {
return sawtooth.ledger.transaction.on_transaction_failure.call(null,txn,result);
}
}));
});

sawtooth.ledger.transaction.send_transaction.cljs$lang$maxFixedArity = 5;
