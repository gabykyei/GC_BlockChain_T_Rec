// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.service.participant');
goog.require('cljs.core');
goog.require('sawtooth.state');
goog.require('goog.string');
goog.require('sawtooth.http');
goog.require('sawtooth.service.common');
goog.require('cljs.core.async');
goog.require('sawtooth.router');
goog.require('mktplace.routes');
goog.require('sawtooth.ledger.keys');
goog.require('mktplace.transactions');
goog.require('sawtooth.store');
goog.require('sawtooth.config');
mktplace.service.participant.PARTICIPANT_ENDPOINT_TEMPLATE = [cljs.core.str(sawtooth.config.base_url),cljs.core.str("/api/mktplace/participants/%s")].join('');
mktplace.service.participant.PARTICIPANTS_ENDPOINT = "/api/mktplace/participants";
/**
 * The id of the currently logged-in participant
 */
mktplace.service.participant.current_participant_id = (function mktplace$service$participant$current_participant_id(){
return sawtooth.store.get_data.call(null,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
});
/**
 * Sets the current participant
 */
mktplace.service.participant.set_current_participant_BANG_ = (function mktplace$service$participant$set_current_participant_BANG_(participant){
return sawtooth.store.save_data_BANG_.call(null,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(participant));
});
/**
 * Signs out the current user
 */
mktplace.service.participant.sign_out = (function mktplace$service$participant$sign_out(){
sawtooth.store.remove_data_BANG_.call(null,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));

sawtooth.ledger.keys.clear_wif_BANG_.call(null);

sawtooth.state.reset_state_BANG_.call(null);

return sawtooth.router.push.call(null,mktplace.routes.intro_path.call(null));
});
/**
 * Sets the state value of the key to nil and notifies the user of a failure
 */
mktplace.service.participant.handle_failure = (function mktplace$service$participant$handle_failure(k,msg){
cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),new cljs.core.Keyword(null,"value","value",305978217),null], null));

return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,sawtooth.state.notification_action.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"An Error Occurred",new cljs.core.Keyword(null,"message","message",-406056002),msg], null)));
});
/**
 * registers a participant with the given name and description, associated with a
 *   signing-identity and an address
 */
mktplace.service.participant.register = (function mktplace$service$participant$register(signing_identity,address,name,desc){
return mktplace.transactions.register_participant.call(null,signing_identity,address,name,desc,(function (){
return sawtooth.router.push.call(null,mktplace.routes.home_path.call(null));
}));
});
mktplace.service.participant.handle_incoming_participant = (function mktplace$service$participant$handle_incoming_participant(signing_identity,party){
mktplace.service.participant.set_current_participant_BANG_.call(null,party);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(party))){
mktplace.transactions.register_account.call(null,signing_identity,party);
} else {
}

return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029)], null),new cljs.core.Keyword(null,"value","value",305978217),party], null));
});
/**
 * Loads the participant for the given id into the app-state
 *   at the path [:participant]
 */
mktplace.service.participant.participant = (function mktplace$service$participant$participant(id){
var res_ch = cljs.core.async.chan.call(null,(1));
var url = goog.string.format(mktplace.service.participant.PARTICIPANT_ENDPOINT_TEMPLATE,id);
sawtooth.http.json_xhr.call(null,new cljs.core.Keyword(null,"get","get",1683182755),url,null,res_ch);

return cljs.core.async.take_BANG_.call(null,res_ch,((function (res_ch,url){
return (function (p__30179){
var map__30180 = p__30179;
var map__30180__$1 = ((((!((map__30180 == null)))?((((map__30180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30180):map__30180);
var status = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.call(null,(200),status)){
return mktplace.service.participant.handle_incoming_participant.call(null,sawtooth.ledger.keys.get_key_pair.call(null),body);
} else {
return mktplace.service.participant.handle_failure.call(null,new cljs.core.Keyword(null,"participant","participant",1962214029),"Unable to load participant!");
}
});})(res_ch,url))
);
});
mktplace.service.participant.load_participant_into = (function mktplace$service$participant$load_participant_into(id,path,msg_type){
return sawtooth.service.common.fetch_json_BANG_.call(null,[cljs.core.str(mktplace.service.participant.PARTICIPANTS_ENDPOINT),cljs.core.str("/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),goog.string.format("Unable to load %s participant.",msg_type),new cljs.core.Keyword(null,"title","title",636505583),"An Error Occurred"], null)], null));
});
/**
 * Loads a view participant into the app-state at the path [:view-participant].
 *   This participant is used to alter the read-only views of the system.
 */
mktplace.service.participant.as_participant = (function mktplace$service$participant$as_participant(id){
return mktplace.service.participant.load_participant_into.call(null,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-participant","view-participant",-1183789579)], null),"view");
});
/**
 * Returns the view to the authenticated user.
 */
mktplace.service.participant.as_self = (function mktplace$service$participant$as_self(){
return sawtooth.service.common.clear_path_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-participant","view-participant",-1183789579)], null));
});
/**
 * Loads a target participant for the given id into the app-state at
 *   the path [:transfer :target-participant].
 */
mktplace.service.participant.transfer_target_participant = (function mktplace$service$participant$transfer_target_participant(id){
return mktplace.service.participant.load_participant_into.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transfer","transfer",327423400),new cljs.core.Keyword(null,"target-participant","target-participant",-571095342)], null),"target");
});
/**
 * Clears the target participan in the app-state at [:transfer :target-participant].
 */
mktplace.service.participant.clear_transfer_target_participant = (function mktplace$service$participant$clear_transfer_target_participant(){
return sawtooth.service.common.clear_path_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transfer","transfer",327423400),new cljs.core.Keyword(null,"target-participant","target-participant",-571095342)], null));
});
mktplace.service.participant.handle_incoming_wallet_participant = (function mktplace$service$participant$handle_incoming_wallet_participant(address,party){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(party))){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029)], null),new cljs.core.Keyword(null,"value","value",305978217),party], null));
} else {
if(cljs.core.truth_((function (){var and__6075__auto__ = party;
if(cljs.core.truth_(and__6075__auto__)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(party);
} else {
return and__6075__auto__;
}
})())){
return mktplace.service.participant.participant.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(party));
} else {
return sawtooth.router.push.call(null,mktplace.routes.create_participant_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),address], null)));

}
}
});
/**
 * Loads the participant associated with an existing wallet into the app-state
 */
mktplace.service.participant.participant_by_address = (function mktplace$service$participant$participant_by_address(address){
var res_ch = cljs.core.async.chan.call(null);
var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__,res_ch){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__,res_ch){
return (function (state_30286){
var state_val_30287 = (state_30286[(1)]);
if((state_val_30287 === (7))){
var state_30286__$1 = state_30286;
var statearr_30288_30314 = state_30286__$1;
(statearr_30288_30314[(2)] = false);

(statearr_30288_30314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (1))){
var inst_30249 = [cljs.core.str(sawtooth.config.base_url),cljs.core.str(mktplace.service.participant.PARTICIPANTS_ENDPOINT)].join('');
var inst_30250 = [new cljs.core.Keyword(null,"address","address",559499426)];
var inst_30251 = [address];
var inst_30252 = cljs.core.PersistentHashMap.fromArrays(inst_30250,inst_30251);
var inst_30253 = sawtooth.http.json_xhr.call(null,new cljs.core.Keyword(null,"post","post",269697687),inst_30249,inst_30252,res_ch);
var state_30286__$1 = (function (){var statearr_30289 = state_30286;
(statearr_30289[(7)] = inst_30253);

return statearr_30289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30286__$1,(2),res_ch);
} else {
if((state_val_30287 === (4))){
var state_30286__$1 = state_30286;
var statearr_30290_30315 = state_30286__$1;
(statearr_30290_30315[(2)] = false);

(statearr_30290_30315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (13))){
var inst_30282 = mktplace.service.participant.handle_failure.call(null,new cljs.core.Keyword(null,"participant","participant",1962214029),"Unable to load participant!");
var state_30286__$1 = state_30286;
var statearr_30291_30316 = state_30286__$1;
(statearr_30291_30316[(2)] = inst_30282);

(statearr_30291_30316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (6))){
var state_30286__$1 = state_30286;
var statearr_30292_30317 = state_30286__$1;
(statearr_30292_30317[(2)] = true);

(statearr_30292_30317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (3))){
var inst_30255 = (state_30286[(8)]);
var inst_30260 = inst_30255.cljs$lang$protocol_mask$partition0$;
var inst_30261 = (inst_30260 & (64));
var inst_30262 = inst_30255.cljs$core$ISeq$;
var inst_30263 = (inst_30261) || (inst_30262);
var state_30286__$1 = state_30286;
if(cljs.core.truth_(inst_30263)){
var statearr_30293_30318 = state_30286__$1;
(statearr_30293_30318[(1)] = (6));

} else {
var statearr_30294_30319 = state_30286__$1;
(statearr_30294_30319[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (12))){
var inst_30277 = (state_30286[(9)]);
var inst_30280 = mktplace.service.participant.handle_incoming_wallet_participant.call(null,address,inst_30277);
var state_30286__$1 = state_30286;
var statearr_30295_30320 = state_30286__$1;
(statearr_30295_30320[(2)] = inst_30280);

(statearr_30295_30320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (2))){
var inst_30255 = (state_30286[(8)]);
var inst_30255__$1 = (state_30286[(2)]);
var inst_30257 = (inst_30255__$1 == null);
var inst_30258 = cljs.core.not.call(null,inst_30257);
var state_30286__$1 = (function (){var statearr_30296 = state_30286;
(statearr_30296[(8)] = inst_30255__$1);

return statearr_30296;
})();
if(inst_30258){
var statearr_30297_30321 = state_30286__$1;
(statearr_30297_30321[(1)] = (3));

} else {
var statearr_30298_30322 = state_30286__$1;
(statearr_30298_30322[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (11))){
var inst_30275 = (state_30286[(2)]);
var inst_30276 = cljs.core.get.call(null,inst_30275,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_30277 = cljs.core.get.call(null,inst_30275,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_30278 = cljs.core._EQ_.call(null,(200),inst_30276);
var state_30286__$1 = (function (){var statearr_30299 = state_30286;
(statearr_30299[(9)] = inst_30277);

return statearr_30299;
})();
if(inst_30278){
var statearr_30300_30323 = state_30286__$1;
(statearr_30300_30323[(1)] = (12));

} else {
var statearr_30301_30324 = state_30286__$1;
(statearr_30301_30324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (9))){
var inst_30255 = (state_30286[(8)]);
var inst_30272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30255);
var state_30286__$1 = state_30286;
var statearr_30302_30325 = state_30286__$1;
(statearr_30302_30325[(2)] = inst_30272);

(statearr_30302_30325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (5))){
var inst_30270 = (state_30286[(2)]);
var state_30286__$1 = state_30286;
if(cljs.core.truth_(inst_30270)){
var statearr_30303_30326 = state_30286__$1;
(statearr_30303_30326[(1)] = (9));

} else {
var statearr_30304_30327 = state_30286__$1;
(statearr_30304_30327[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (14))){
var inst_30284 = (state_30286[(2)]);
var state_30286__$1 = state_30286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30286__$1,inst_30284);
} else {
if((state_val_30287 === (10))){
var inst_30255 = (state_30286[(8)]);
var state_30286__$1 = state_30286;
var statearr_30305_30328 = state_30286__$1;
(statearr_30305_30328[(2)] = inst_30255);

(statearr_30305_30328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30287 === (8))){
var inst_30267 = (state_30286[(2)]);
var state_30286__$1 = state_30286;
var statearr_30306_30329 = state_30286__$1;
(statearr_30306_30329[(2)] = inst_30267);

(statearr_30306_30329[(1)] = (5));


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
});})(c__12583__auto__,res_ch))
;
return ((function (switch__12471__auto__,c__12583__auto__,res_ch){
return (function() {
var mktplace$service$participant$participant_by_address_$_state_machine__12472__auto__ = null;
var mktplace$service$participant$participant_by_address_$_state_machine__12472__auto____0 = (function (){
var statearr_30310 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30310[(0)] = mktplace$service$participant$participant_by_address_$_state_machine__12472__auto__);

(statearr_30310[(1)] = (1));

return statearr_30310;
});
var mktplace$service$participant$participant_by_address_$_state_machine__12472__auto____1 = (function (state_30286){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_30286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e30311){if((e30311 instanceof Object)){
var ex__12475__auto__ = e30311;
var statearr_30312_30330 = state_30286;
(statearr_30312_30330[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30331 = state_30286;
state_30286 = G__30331;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
mktplace$service$participant$participant_by_address_$_state_machine__12472__auto__ = function(state_30286){
switch(arguments.length){
case 0:
return mktplace$service$participant$participant_by_address_$_state_machine__12472__auto____0.call(this);
case 1:
return mktplace$service$participant$participant_by_address_$_state_machine__12472__auto____1.call(this,state_30286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mktplace$service$participant$participant_by_address_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = mktplace$service$participant$participant_by_address_$_state_machine__12472__auto____0;
mktplace$service$participant$participant_by_address_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = mktplace$service$participant$participant_by_address_$_state_machine__12472__auto____1;
return mktplace$service$participant$participant_by_address_$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__,res_ch))
})();
var state__12585__auto__ = (function (){var statearr_30313 = f__12584__auto__.call(null);
(statearr_30313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_30313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__,res_ch))
);

return c__12583__auto__;
});
/**
 * Loads the names and ids of all the participants into the app-state.
 */
mktplace.service.participant.participants = (function mktplace$service$participant$participants(){
return sawtooth.service.common.fetch_json_BANG_.call(null,mktplace.service.participant.PARTICIPANTS_ENDPOINT,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participants","participants",673603367)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Unable to load participants!",new cljs.core.Keyword(null,"title","title",636505583),"An Error Occurred"], null)], null));
});
/**
 * Indicates whether or not a participant is considered fully provisioned.
 */
mktplace.service.participant.is_fully_provisioned_QMARK_ = (function mktplace$service$participant$is_fully_provisioned_QMARK_(participant){
var and__6075__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(participant));
if(and__6075__auto__){
var and__6075__auto____$1 = new cljs.core.Keyword(null,"account","account",718006320).cljs$core$IFn$_invoke$arity$1(participant);
if(cljs.core.truth_(and__6075__auto____$1)){
return cljs.core.not.call(null,cljs.core.get_in.call(null,participant,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"pending","pending",-220036727)], null)));
} else {
return and__6075__auto____$1;
}
} else {
return and__6075__auto__;
}
});
