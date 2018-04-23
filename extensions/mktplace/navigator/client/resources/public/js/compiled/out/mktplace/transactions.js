// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.transactions');
goog.require('cljs.core');
goog.require('sawtooth.ledger.message');
goog.require('sawtooth.ledger.transaction');
if(typeof mktplace.transactions.mktplace_txn_family !== 'undefined'){
} else {
mktplace.transactions.mktplace_txn_family = "/MarketPlaceTransaction";
}
if(typeof mktplace.transactions.mktplace_msg_type !== 'undefined'){
} else {
mktplace.transactions.mktplace_msg_type = "/mktplace.transactions.MarketPlace/Transaction";
}
mktplace.transactions.find_dependencies = (function mktplace$transactions$find_dependencies(txn_update){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p__25668){
var vec__25669 = p__25668;
var k = cljs.core.nth.call(null,vec__25669,(0),null);
var v = cljs.core.nth.call(null,vec__25669,(1),null);
return v;
}),cljs.core.filter.call(null,(function (p__25670){
var vec__25671 = p__25670;
var k = cljs.core.nth.call(null,vec__25671,(0),null);
var v = cljs.core.nth.call(null,vec__25671,(1),null);
return cljs.core.re_find.call(null,/.*Id.*/,cljs.core.name.call(null,k));
}),txn_update))))));
});
mktplace.transactions.make_mktplace_txn = (function mktplace$transactions$make_mktplace_txn(mktplace_update){
return sawtooth.ledger.message.make_transaction.call(null,mktplace.transactions.mktplace_txn_family,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace_update], null),mktplace.transactions.find_dependencies.call(null,mktplace_update));
});
mktplace.transactions.holding_id_for_asset = (function mktplace$transactions$holding_id_for_asset(participant,p__25673){
var map__25676 = p__25673;
var map__25676__$1 = ((((!((map__25676 == null)))?((((map__25676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25676):map__25676);
var asset_id = cljs.core.get.call(null,map__25676__$1,new cljs.core.Keyword(null,"asset","asset",-280274466));
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__25676,map__25676__$1,asset_id){
return (function (p1__25672_SHARP_){
return cljs.core._EQ_.call(null,asset_id,new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(p1__25672_SHARP_));
});})(map__25676,map__25676__$1,asset_id))
,new cljs.core.Keyword(null,"holdings","holdings",195829975).cljs$core$IFn$_invoke$arity$1(participant))));
});
mktplace.transactions.holding_update_register = (function mktplace$transactions$holding_update_register(participant,holding){
var participant_id = cljs.core.get.call(null,participant,new cljs.core.Keyword(null,"id","id",-1388402092));
var account_id = cljs.core.get_in.call(null,participant,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var map__25680 = holding;
var map__25680__$1 = ((((!((map__25680 == null)))?((((map__25680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25680):map__25680);
var holding_name = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var asset = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"asset","asset",-280274466));
var holding_count = cljs.core.get.call(null,map__25680__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var asset_id = ((cljs.core.map_QMARK_.call(null,asset))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(asset):asset);
return mktplace.transactions.make_mktplace_txn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),"RegisterHolding",new cljs.core.Keyword(null,"CreatorId","CreatorId",1327189603),participant_id,new cljs.core.Keyword(null,"Name","Name",-131211369),(function (){var or__6087__auto__ = holding_name;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"Description","Description",-679315496),(function (){var or__6087__auto__ = description;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"AccountId","AccountId",-1753106969),account_id,new cljs.core.Keyword(null,"AssetId","AssetId",18786913),asset_id,new cljs.core.Keyword(null,"Count","Count",1517058299),(function (){var or__6087__auto__ = holding_count;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (0);
}
})()], null));
});
/**
 * Executes an exchange for a participant on the given offer.
 */
mktplace.transactions.exchange = (function mktplace$transactions$exchange(var_args){
var args25682 = [];
var len__7157__auto___25986 = arguments.length;
var i__7158__auto___25987 = (0);
while(true){
if((i__7158__auto___25987 < len__7157__auto___25986)){
args25682.push((arguments[i__7158__auto___25987]));

var G__25988 = (i__7158__auto___25987 + (1));
i__7158__auto___25987 = G__25988;
continue;
} else {
}
break;
}

var G__25684 = args25682.length;
switch (G__25684) {
case 6:
return mktplace.transactions.exchange.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return mktplace.transactions.exchange.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25682.length)].join('')));

}
});

mktplace.transactions.exchange.cljs$core$IFn$_invoke$arity$6 = (function (signing_identity,participant,initial_liability,final_liability,offers,initial_count){
return mktplace.transactions.exchange.call(null,signing_identity,participant,initial_liability,final_liability,offers,initial_count,null);
});

mktplace.transactions.exchange.cljs$core$IFn$_invoke$arity$7 = (function (signing_identity,participant,initial_liability,final_liability,offers,initial_count,on_done_fn){
var annotations = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"creator","creator",-1069241724),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(participant)], null);
var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__,annotations){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__,annotations){
return (function (state_25867){
var state_val_25868 = (state_25867[(1)]);
if((state_val_25868 === (1))){
var inst_25851 = cljs.core.async.chan.call(null,(1));
var inst_25852 = (function (){var c__12583__auto____$1 = inst_25851;
return ((function (c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations){
return (function (state_25849){
var state_val_25850 = (state_25849[(1)]);
if((state_val_25850 === (65))){
var inst_25797 = (state_25849[(7)]);
var inst_25841 = sawtooth.ledger.transaction.unwrap_vec.call(null,inst_25797);
var state_25849__$1 = state_25849;
var statearr_25869_25990 = state_25849__$1;
(statearr_25869_25990[(2)] = inst_25841);

(statearr_25869_25990[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (62))){
var inst_25831 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25870_25991 = state_25849__$1;
(statearr_25870_25991[(2)] = inst_25831);

(statearr_25870_25991[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (7))){
var inst_25716 = (state_25849[(8)]);
var inst_25716__$1 = (state_25849[(2)]);
var inst_25717 = cljs.core.list_QMARK_.call(null,inst_25716__$1);
var inst_25718 = cljs.core.empty_QMARK_.call(null,inst_25716__$1);
var inst_25719 = !(inst_25718);
var inst_25720 = (inst_25717) && (inst_25719);
var state_25849__$1 = (function (){var statearr_25871 = state_25849;
(statearr_25871[(8)] = inst_25716__$1);

return statearr_25871;
})();
if(cljs.core.truth_(inst_25720)){
var statearr_25872_25992 = state_25849__$1;
(statearr_25872_25992[(1)] = (14));

} else {
var statearr_25873_25993 = state_25849__$1;
(statearr_25873_25993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (59))){
var inst_25833 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25874_25994 = state_25849__$1;
(statearr_25874_25994[(2)] = inst_25833);

(statearr_25874_25994[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (20))){
var inst_25725 = (state_25849[(9)]);
var inst_25735 = cljs.core.reverse.call(null,inst_25725);
var state_25849__$1 = state_25849;
var statearr_25875_25995 = state_25849__$1;
(statearr_25875_25995[(2)] = inst_25735);

(statearr_25875_25995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (58))){
var state_25849__$1 = state_25849;
var statearr_25876_25996 = state_25849__$1;
(statearr_25876_25996[(1)] = (60));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (60))){
var inst_25797 = (state_25849[(7)]);
var inst_25692 = (state_25849[(10)]);
var inst_25826 = inst_25692.call(null,inst_25797);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25849__$1,(63),inst_25826);
} else {
if((state_val_25850 === (27))){
var state_25849__$1 = state_25849;
var statearr_25878_25997 = state_25849__$1;
(statearr_25878_25997[(2)] = null);

(statearr_25878_25997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (1))){
var inst_25693 = (state_25849[(11)]);
var inst_25691 = (function (){return ((function (inst_25693,state_val_25850,c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations){
return (function (p__25690){
var vec__25879 = p__25690;
var txn__25645__auto__ = cljs.core.nth.call(null,vec__25879,(0),null);
var annotations__25646__auto__ = cljs.core.nth.call(null,vec__25879,(1),null);
return sawtooth.ledger.transaction.send.call(null,signing_identity,mktplace.transactions.mktplace_msg_type,txn__25645__auto__,annotations__25646__auto__);
});
;})(inst_25693,state_val_25850,c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations))
})();
var inst_25692 = cljs.core.comp.call(null,inst_25691,sawtooth.ledger.transaction.vectorize);
var inst_25693__$1 = cljs.core.map_QMARK_.call(null,final_liability);
var state_25849__$1 = (function (){var statearr_25880 = state_25849;
(statearr_25880[(11)] = inst_25693__$1);

(statearr_25880[(10)] = inst_25692);

return statearr_25880;
})();
if(inst_25693__$1){
var statearr_25881_25998 = state_25849__$1;
(statearr_25881_25998[(1)] = (2));

} else {
var statearr_25882_25999 = state_25849__$1;
(statearr_25882_25999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (24))){
var state_25849__$1 = state_25849;
var statearr_25883_26000 = state_25849__$1;
(statearr_25883_26000[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (55))){
var inst_25818 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25885_26001 = state_25849__$1;
(statearr_25885_26001[(2)] = inst_25818);

(statearr_25885_26001[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (39))){
var inst_25716 = (state_25849[(8)]);
var inst_25773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25774 = cljs.core.list_QMARK_.call(null,inst_25716);
var state_25849__$1 = (function (){var statearr_25886 = state_25849;
(statearr_25886[(12)] = inst_25773);

return statearr_25886;
})();
if(inst_25774){
var statearr_25887_26002 = state_25849__$1;
(statearr_25887_26002[(1)] = (42));

} else {
var statearr_25888_26003 = state_25849__$1;
(statearr_25888_26003[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (46))){
var state_25849__$1 = state_25849;
var statearr_25889_26004 = state_25849__$1;
(statearr_25889_26004[(2)] = initial_liability);

(statearr_25889_26004[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (4))){
var inst_25698 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25698)){
var statearr_25890_26005 = state_25849__$1;
(statearr_25890_26005[(1)] = (5));

} else {
var statearr_25891_26006 = state_25849__$1;
(statearr_25891_26006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (54))){
var inst_25806 = (state_25849[(13)]);
var inst_25816 = cljs.core.reverse.call(null,inst_25806);
var state_25849__$1 = state_25849;
var statearr_25892_26007 = state_25849__$1;
(statearr_25892_26007[(2)] = inst_25816);

(statearr_25892_26007[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (15))){
var inst_25716 = (state_25849[(8)]);
var inst_25741 = typeof inst_25716 === 'string';
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25741)){
var statearr_25893_26008 = state_25849__$1;
(statearr_25893_26008[(1)] = (23));

} else {
var statearr_25894_26009 = state_25849__$1;
(statearr_25894_26009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (48))){
var inst_25797 = (state_25849[(7)]);
var inst_25692 = (state_25849[(10)]);
var inst_25803 = cljs.core.map.call(null,inst_25692,inst_25797);
var inst_25804 = null;
var inst_25805 = inst_25803;
var inst_25806 = inst_25804;
var state_25849__$1 = (function (){var statearr_25895 = state_25849;
(statearr_25895[(14)] = inst_25805);

(statearr_25895[(13)] = inst_25806);

return statearr_25895;
})();
var statearr_25896_26010 = state_25849__$1;
(statearr_25896_26010[(2)] = null);

(statearr_25896_26010[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (50))){
var inst_25797 = (state_25849[(7)]);
var inst_25835 = (state_25849[(2)]);
var inst_25836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25837 = cljs.core.list_QMARK_.call(null,inst_25797);
var state_25849__$1 = (function (){var statearr_25897 = state_25849;
(statearr_25897[(15)] = inst_25836);

(statearr_25897[(16)] = inst_25835);

return statearr_25897;
})();
if(inst_25837){
var statearr_25898_26011 = state_25849__$1;
(statearr_25898_26011[(1)] = (64));

} else {
var statearr_25899_26012 = state_25849__$1;
(statearr_25899_26012[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (21))){
var inst_25737 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25900_26013 = state_25849__$1;
(statearr_25900_26013[(2)] = inst_25737);

(statearr_25900_26013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (31))){
var inst_25755 = (state_25849[(17)]);
var state_25849__$1 = state_25849;
var statearr_25901_26014 = state_25849__$1;
(statearr_25901_26014[(2)] = inst_25755);

(statearr_25901_26014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (32))){
var inst_25760 = (state_25849[(18)]);
var inst_25760__$1 = (state_25849[(2)]);
var state_25849__$1 = (function (){var statearr_25902 = state_25849;
(statearr_25902[(18)] = inst_25760__$1);

return statearr_25902;
})();
if(cljs.core.truth_(inst_25760__$1)){
var statearr_25903_26015 = state_25849__$1;
(statearr_25903_26015[(1)] = (33));

} else {
var statearr_25904_26016 = state_25849__$1;
(statearr_25904_26016[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (40))){
var inst_25784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25785 = [new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),new cljs.core.Keyword(null,"FinalLiabilityId","FinalLiabilityId",1851343684),new cljs.core.Keyword(null,"InitialLiabilityId","InitialLiabilityId",-2129501437),new cljs.core.Keyword(null,"OfferIdList","OfferIdList",-1251759488),new cljs.core.Keyword(null,"InitialCount","InitialCount",686034327)];
var inst_25786 = cljs.core.map_QMARK_.call(null,initial_liability);
var state_25849__$1 = (function (){var statearr_25905 = state_25849;
(statearr_25905[(19)] = inst_25784);

(statearr_25905[(20)] = inst_25785);

return statearr_25905;
})();
if(inst_25786){
var statearr_25906_26017 = state_25849__$1;
(statearr_25906_26017[(1)] = (45));

} else {
var statearr_25907_26018 = state_25849__$1;
(statearr_25907_26018[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (56))){
var inst_25805 = (state_25849[(14)]);
var inst_25806 = (state_25849[(13)]);
var inst_25811 = (state_25849[(2)]);
var inst_25812 = cljs.core.rest.call(null,inst_25805);
var inst_25813 = cljs.core.conj.call(null,inst_25806,inst_25811);
var inst_25805__$1 = inst_25812;
var inst_25806__$1 = inst_25813;
var state_25849__$1 = (function (){var statearr_25908 = state_25849;
(statearr_25908[(14)] = inst_25805__$1);

(statearr_25908[(13)] = inst_25806__$1);

return statearr_25908;
})();
var statearr_25909_26019 = state_25849__$1;
(statearr_25909_26019[(2)] = null);

(statearr_25909_26019[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (33))){
var inst_25760 = (state_25849[(18)]);
var state_25849__$1 = state_25849;
var statearr_25910_26020 = state_25849__$1;
(statearr_25910_26020[(2)] = inst_25760);

(statearr_25910_26020[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (13))){
var inst_25712 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25911_26021 = state_25849__$1;
(statearr_25911_26021[(2)] = inst_25712);

(statearr_25911_26021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (22))){
var inst_25724 = (state_25849[(21)]);
var inst_25725 = (state_25849[(9)]);
var inst_25730 = (state_25849[(2)]);
var inst_25731 = cljs.core.rest.call(null,inst_25724);
var inst_25732 = cljs.core.conj.call(null,inst_25725,inst_25730);
var inst_25724__$1 = inst_25731;
var inst_25725__$1 = inst_25732;
var state_25849__$1 = (function (){var statearr_25912 = state_25849;
(statearr_25912[(21)] = inst_25724__$1);

(statearr_25912[(9)] = inst_25725__$1);

return statearr_25912;
})();
var statearr_25913_26022 = state_25849__$1;
(statearr_25913_26022[(2)] = null);

(statearr_25913_26022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (36))){
var inst_25692 = (state_25849[(10)]);
var inst_25754 = (state_25849[(22)]);
var inst_25716 = (state_25849[(8)]);
var inst_25760 = (state_25849[(18)]);
var inst_25763 = (state_25849[(23)]);
var inst_25765 = (function (){var do_send25685 = inst_25692;
var txn25688 = inst_25716;
var final_liability_id = inst_25754;
var or__6087__auto__ = inst_25760;
var and__6075__auto__ = inst_25763;
return ((function (do_send25685,txn25688,final_liability_id,or__6087__auto__,and__6075__auto__,inst_25692,inst_25754,inst_25716,inst_25760,inst_25763,state_val_25850,c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations){
return (function (p1__25634__25636__auto__,p2__25635__25637__auto__){
var or__6087__auto____$1 = p1__25634__25636__auto__;
if(cljs.core.truth_(or__6087__auto____$1)){
return or__6087__auto____$1;
} else {
return new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(p2__25635__25637__auto__);
}
});
;})(do_send25685,txn25688,final_liability_id,or__6087__auto__,and__6075__auto__,inst_25692,inst_25754,inst_25716,inst_25760,inst_25763,state_val_25850,c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations))
})();
var inst_25766 = cljs.core.reduce.call(null,inst_25765,false,inst_25754);
var state_25849__$1 = state_25849;
var statearr_25914_26023 = state_25849__$1;
(statearr_25914_26023[(2)] = inst_25766);

(statearr_25914_26023[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (41))){
var inst_25847 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25849__$1,inst_25847);
} else {
if((state_val_25850 === (43))){
var inst_25716 = (state_25849[(8)]);
var inst_25778 = sawtooth.ledger.transaction.unwrap_vec.call(null,inst_25716);
var state_25849__$1 = state_25849;
var statearr_25915_26024 = state_25849__$1;
(statearr_25915_26024[(2)] = inst_25778);

(statearr_25915_26024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (61))){
var state_25849__$1 = state_25849;
var statearr_25916_26025 = state_25849__$1;
(statearr_25916_26025[(2)] = null);

(statearr_25916_26025[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (29))){
var inst_25747 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25917_26026 = state_25849__$1;
(statearr_25917_26026[(2)] = inst_25747);

(statearr_25917_26026[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (44))){
var inst_25754 = (state_25849[(22)]);
var inst_25773 = (state_25849[(12)]);
var inst_25780 = (state_25849[(2)]);
var inst_25781 = [inst_25754,inst_25780];
var inst_25782 = (new cljs.core.PersistentVector(null,2,(5),inst_25773,inst_25781,null));
var state_25849__$1 = state_25849;
var statearr_25918_26027 = state_25849__$1;
(statearr_25918_26027[(2)] = inst_25782);

(statearr_25918_26027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (6))){
var inst_25702 = cljs.core.map_QMARK_.call(null,final_liability);
var state_25849__$1 = state_25849;
if(inst_25702){
var statearr_25919_26028 = state_25849__$1;
(statearr_25919_26028[(1)] = (8));

} else {
var statearr_25920_26029 = state_25849__$1;
(statearr_25920_26029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (28))){
var inst_25750 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25921_26030 = state_25849__$1;
(statearr_25921_26030[(2)] = inst_25750);

(statearr_25921_26030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (64))){
var inst_25797 = (state_25849[(7)]);
var inst_25839 = cljs.core.map.call(null,sawtooth.ledger.transaction.unwrap_vec,inst_25797);
var state_25849__$1 = state_25849;
var statearr_25922_26031 = state_25849__$1;
(statearr_25922_26031[(2)] = inst_25839);

(statearr_25922_26031[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (51))){
var inst_25805 = (state_25849[(14)]);
var inst_25808 = (state_25849[(24)]);
var inst_25808__$1 = cljs.core.first.call(null,inst_25805);
var state_25849__$1 = (function (){var statearr_25923 = state_25849;
(statearr_25923[(24)] = inst_25808__$1);

return statearr_25923;
})();
if(cljs.core.truth_(inst_25808__$1)){
var statearr_25924_26032 = state_25849__$1;
(statearr_25924_26032[(1)] = (53));

} else {
var statearr_25925_26033 = state_25849__$1;
(statearr_25925_26033[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (25))){
var inst_25752 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25926_26034 = state_25849__$1;
(statearr_25926_26034[(2)] = inst_25752);

(statearr_25926_26034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (34))){
var inst_25754 = (state_25849[(22)]);
var inst_25763 = (state_25849[(23)]);
var inst_25763__$1 = cljs.core.list_QMARK_.call(null,inst_25754);
var state_25849__$1 = (function (){var statearr_25927 = state_25849;
(statearr_25927[(23)] = inst_25763__$1);

return statearr_25927;
})();
if(inst_25763__$1){
var statearr_25928_26035 = state_25849__$1;
(statearr_25928_26035[(1)] = (36));

} else {
var statearr_25929_26036 = state_25849__$1;
(statearr_25929_26036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (17))){
var inst_25724 = (state_25849[(21)]);
var inst_25727 = (state_25849[(25)]);
var inst_25727__$1 = cljs.core.first.call(null,inst_25724);
var state_25849__$1 = (function (){var statearr_25930 = state_25849;
(statearr_25930[(25)] = inst_25727__$1);

return statearr_25930;
})();
if(cljs.core.truth_(inst_25727__$1)){
var statearr_25931_26037 = state_25849__$1;
(statearr_25931_26037[(1)] = (19));

} else {
var statearr_25932_26038 = state_25849__$1;
(statearr_25932_26038[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (3))){
var inst_25693 = (state_25849[(11)]);
var state_25849__$1 = state_25849;
var statearr_25933_26039 = state_25849__$1;
(statearr_25933_26039[(2)] = inst_25693);

(statearr_25933_26039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (12))){
var state_25849__$1 = state_25849;
var statearr_25934_26040 = state_25849__$1;
(statearr_25934_26040[(2)] = null);

(statearr_25934_26040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (2))){
var inst_25695 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(final_liability);
var state_25849__$1 = state_25849;
var statearr_25935_26041 = state_25849__$1;
(statearr_25935_26041[(2)] = inst_25695);

(statearr_25935_26041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (66))){
var inst_25836 = (state_25849[(15)]);
var inst_25835 = (state_25849[(16)]);
var inst_25843 = (state_25849[(2)]);
var inst_25844 = [inst_25835,inst_25843];
var inst_25845 = (new cljs.core.PersistentVector(null,2,(5),inst_25836,inst_25844,null));
var state_25849__$1 = state_25849;
var statearr_25936_26042 = state_25849__$1;
(statearr_25936_26042[(2)] = inst_25845);

(statearr_25936_26042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (23))){
var inst_25716 = (state_25849[(8)]);
var state_25849__$1 = state_25849;
var statearr_25937_26043 = state_25849__$1;
(statearr_25937_26043[(2)] = inst_25716);

(statearr_25937_26043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (47))){
var inst_25797 = (state_25849[(7)]);
var inst_25784 = (state_25849[(19)]);
var inst_25754 = (state_25849[(22)]);
var inst_25785 = (state_25849[(20)]);
var inst_25791 = (state_25849[(2)]);
var inst_25792 = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),offers);
var inst_25793 = ["Exchange",inst_25754,inst_25791,inst_25792,initial_count];
var inst_25794 = cljs.core.PersistentHashMap.fromArrays(inst_25785,inst_25793);
var inst_25795 = mktplace.transactions.make_mktplace_txn.call(null,inst_25794);
var inst_25796 = [inst_25795,annotations];
var inst_25797__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_25784,inst_25796,null));
var inst_25798 = cljs.core.list_QMARK_.call(null,inst_25797__$1);
var inst_25799 = cljs.core.empty_QMARK_.call(null,inst_25797__$1);
var inst_25800 = !(inst_25799);
var inst_25801 = (inst_25798) && (inst_25800);
var state_25849__$1 = (function (){var statearr_25938 = state_25849;
(statearr_25938[(7)] = inst_25797__$1);

return statearr_25938;
})();
if(cljs.core.truth_(inst_25801)){
var statearr_25939_26044 = state_25849__$1;
(statearr_25939_26044[(1)] = (48));

} else {
var statearr_25940_26045 = state_25849__$1;
(statearr_25940_26045[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (35))){
var inst_25771 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25771)){
var statearr_25941_26046 = state_25849__$1;
(statearr_25941_26046[(1)] = (39));

} else {
var statearr_25942_26047 = state_25849__$1;
(statearr_25942_26047[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (19))){
var inst_25727 = (state_25849[(25)]);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25849__$1,(22),inst_25727);
} else {
if((state_val_25850 === (57))){
var inst_25797 = (state_25849[(7)]);
var state_25849__$1 = state_25849;
var statearr_25943_26048 = state_25849__$1;
(statearr_25943_26048[(2)] = inst_25797);

(statearr_25943_26048[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (11))){
var state_25849__$1 = state_25849;
var statearr_25944_26049 = state_25849__$1;
(statearr_25944_26049[(2)] = final_liability);

(statearr_25944_26049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (9))){
var state_25849__$1 = state_25849;
var statearr_25945_26050 = state_25849__$1;
(statearr_25945_26050[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (5))){
var inst_25700 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(final_liability);
var state_25849__$1 = state_25849;
var statearr_25947_26051 = state_25849__$1;
(statearr_25947_26051[(2)] = inst_25700);

(statearr_25947_26051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (14))){
var inst_25692 = (state_25849[(10)]);
var inst_25716 = (state_25849[(8)]);
var inst_25722 = cljs.core.map.call(null,inst_25692,inst_25716);
var inst_25723 = null;
var inst_25724 = inst_25722;
var inst_25725 = inst_25723;
var state_25849__$1 = (function (){var statearr_25948 = state_25849;
(statearr_25948[(21)] = inst_25724);

(statearr_25948[(9)] = inst_25725);

return statearr_25948;
})();
var statearr_25949_26052 = state_25849__$1;
(statearr_25949_26052[(2)] = null);

(statearr_25949_26052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (45))){
var inst_25788 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(initial_liability);
var state_25849__$1 = state_25849;
var statearr_25950_26053 = state_25849__$1;
(statearr_25950_26053[(2)] = inst_25788);

(statearr_25950_26053[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (53))){
var inst_25808 = (state_25849[(24)]);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25849__$1,(56),inst_25808);
} else {
if((state_val_25850 === (26))){
var inst_25692 = (state_25849[(10)]);
var inst_25716 = (state_25849[(8)]);
var inst_25745 = inst_25692.call(null,inst_25716);
var state_25849__$1 = state_25849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25849__$1,(29),inst_25745);
} else {
if((state_val_25850 === (16))){
var inst_25755 = (state_25849[(17)]);
var inst_25754 = (state_25849[(22)]);
var inst_25754__$1 = (state_25849[(2)]);
var inst_25755__$1 = cljs.core.map_QMARK_.call(null,inst_25754__$1);
var state_25849__$1 = (function (){var statearr_25951 = state_25849;
(statearr_25951[(17)] = inst_25755__$1);

(statearr_25951[(22)] = inst_25754__$1);

return statearr_25951;
})();
if(inst_25755__$1){
var statearr_25952_26054 = state_25849__$1;
(statearr_25952_26054[(1)] = (30));

} else {
var statearr_25953_26055 = state_25849__$1;
(statearr_25953_26055[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (38))){
var inst_25769 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25954_26056 = state_25849__$1;
(statearr_25954_26056[(2)] = inst_25769);

(statearr_25954_26056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (30))){
var inst_25754 = (state_25849[(22)]);
var inst_25757 = new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(inst_25754);
var state_25849__$1 = state_25849;
var statearr_25955_26057 = state_25849__$1;
(statearr_25955_26057[(2)] = inst_25757);

(statearr_25955_26057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (10))){
var inst_25714 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25956_26058 = state_25849__$1;
(statearr_25956_26058[(2)] = inst_25714);

(statearr_25956_26058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (18))){
var inst_25739 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25957_26059 = state_25849__$1;
(statearr_25957_26059[(2)] = inst_25739);

(statearr_25957_26059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (52))){
var inst_25820 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25958_26060 = state_25849__$1;
(statearr_25958_26060[(2)] = inst_25820);

(statearr_25958_26060[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (42))){
var inst_25716 = (state_25849[(8)]);
var inst_25776 = cljs.core.map.call(null,sawtooth.ledger.transaction.unwrap_vec,inst_25716);
var state_25849__$1 = state_25849;
var statearr_25959_26061 = state_25849__$1;
(statearr_25959_26061[(2)] = inst_25776);

(statearr_25959_26061[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (37))){
var inst_25763 = (state_25849[(23)]);
var state_25849__$1 = state_25849;
var statearr_25960_26062 = state_25849__$1;
(statearr_25960_26062[(2)] = inst_25763);

(statearr_25960_26062[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (63))){
var inst_25828 = (state_25849[(2)]);
var state_25849__$1 = state_25849;
var statearr_25961_26063 = state_25849__$1;
(statearr_25961_26063[(2)] = inst_25828);

(statearr_25961_26063[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (8))){
var inst_25704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25705 = mktplace.transactions.holding_update_register.call(null,participant,final_liability);
var inst_25706 = [inst_25705,annotations];
var inst_25707 = (new cljs.core.PersistentVector(null,2,(5),inst_25704,inst_25706,null));
var state_25849__$1 = state_25849;
var statearr_25962_26064 = state_25849__$1;
(statearr_25962_26064[(2)] = inst_25707);

(statearr_25962_26064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25850 === (49))){
var inst_25797 = (state_25849[(7)]);
var inst_25822 = typeof inst_25797 === 'string';
var state_25849__$1 = state_25849;
if(cljs.core.truth_(inst_25822)){
var statearr_25963_26065 = state_25849__$1;
(statearr_25963_26065[(1)] = (57));

} else {
var statearr_25964_26066 = state_25849__$1;
(statearr_25964_26066[(1)] = (58));

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
});})(c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations))
;
return ((function (switch__12471__auto__,c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations){
return (function() {
var mktplace$transactions$state_machine__12472__auto__ = null;
var mktplace$transactions$state_machine__12472__auto____0 = (function (){
var statearr_25968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25968[(0)] = mktplace$transactions$state_machine__12472__auto__);

(statearr_25968[(1)] = (1));

return statearr_25968;
});
var mktplace$transactions$state_machine__12472__auto____1 = (function (state_25849){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_25849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e25969){if((e25969 instanceof Object)){
var ex__12475__auto__ = e25969;
var statearr_25970_26067 = state_25849;
(statearr_25970_26067[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26068 = state_25849;
state_25849 = G__26068;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
mktplace$transactions$state_machine__12472__auto__ = function(state_25849){
switch(arguments.length){
case 0:
return mktplace$transactions$state_machine__12472__auto____0.call(this);
case 1:
return mktplace$transactions$state_machine__12472__auto____1.call(this,state_25849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mktplace$transactions$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = mktplace$transactions$state_machine__12472__auto____0;
mktplace$transactions$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = mktplace$transactions$state_machine__12472__auto____1;
return mktplace$transactions$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations))
})();
var state__12585__auto__ = (function (){var statearr_25971 = f__12584__auto__.call(null);
(statearr_25971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto____$1);

return statearr_25971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});
;})(c__12583__auto____$1,inst_25851,state_val_25868,c__12583__auto__,annotations))
})();
var inst_25853 = cljs.core.async.impl.dispatch.run.call(null,inst_25852);
var state_25867__$1 = (function (){var statearr_25972 = state_25867;
(statearr_25972[(7)] = inst_25853);

return statearr_25972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25867__$1,(2),inst_25851);
} else {
if((state_val_25868 === (2))){
var inst_25856 = (state_25867[(8)]);
var inst_25855 = (state_25867[(2)]);
var inst_25856__$1 = cljs.core.nth.call(null,inst_25855,(0),null);
var inst_25857 = cljs.core.nth.call(null,inst_25855,(1),null);
var inst_25858 = new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(inst_25856__$1);
var inst_25859 = cljs.core.not.call(null,inst_25858);
var state_25867__$1 = (function (){var statearr_25973 = state_25867;
(statearr_25973[(9)] = inst_25857);

(statearr_25973[(8)] = inst_25856__$1);

return statearr_25973;
})();
if(inst_25859){
var statearr_25974_26069 = state_25867__$1;
(statearr_25974_26069[(1)] = (3));

} else {
var statearr_25975_26070 = state_25867__$1;
(statearr_25975_26070[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (3))){
var inst_25857 = (state_25867[(9)]);
var inst_25861 = sawtooth.ledger.transaction.on_transaction_success.call(null,inst_25857,on_done_fn);
var state_25867__$1 = state_25867;
var statearr_25976_26071 = state_25867__$1;
(statearr_25976_26071[(2)] = inst_25861);

(statearr_25976_26071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (4))){
var inst_25857 = (state_25867[(9)]);
var inst_25856 = (state_25867[(8)]);
var inst_25863 = sawtooth.ledger.transaction.on_transaction_failure.call(null,inst_25857,inst_25856);
var state_25867__$1 = state_25867;
var statearr_25977_26072 = state_25867__$1;
(statearr_25977_26072[(2)] = inst_25863);

(statearr_25977_26072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25868 === (5))){
var inst_25856 = (state_25867[(8)]);
var inst_25865 = (state_25867[(2)]);
var state_25867__$1 = (function (){var statearr_25978 = state_25867;
(statearr_25978[(10)] = inst_25865);

return statearr_25978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25867__$1,inst_25856);
} else {
return null;
}
}
}
}
}
});})(c__12583__auto__,annotations))
;
return ((function (switch__12471__auto__,c__12583__auto__,annotations){
return (function() {
var mktplace$transactions$state_machine__12472__auto__ = null;
var mktplace$transactions$state_machine__12472__auto____0 = (function (){
var statearr_25982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25982[(0)] = mktplace$transactions$state_machine__12472__auto__);

(statearr_25982[(1)] = (1));

return statearr_25982;
});
var mktplace$transactions$state_machine__12472__auto____1 = (function (state_25867){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_25867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e25983){if((e25983 instanceof Object)){
var ex__12475__auto__ = e25983;
var statearr_25984_26073 = state_25867;
(statearr_25984_26073[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26074 = state_25867;
state_25867 = G__26074;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
mktplace$transactions$state_machine__12472__auto__ = function(state_25867){
switch(arguments.length){
case 0:
return mktplace$transactions$state_machine__12472__auto____0.call(this);
case 1:
return mktplace$transactions$state_machine__12472__auto____1.call(this,state_25867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mktplace$transactions$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = mktplace$transactions$state_machine__12472__auto____0;
mktplace$transactions$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = mktplace$transactions$state_machine__12472__auto____1;
return mktplace$transactions$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__,annotations))
})();
var state__12585__auto__ = (function (){var statearr_25985 = f__12584__auto__.call(null);
(statearr_25985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_25985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__,annotations))
);

return c__12583__auto__;
});

mktplace.transactions.exchange.cljs$lang$maxFixedArity = 7;
mktplace.transactions.register_asset_type = (function mktplace$transactions$register_asset_type(participant_id,p__26075){
var map__26078 = p__26075;
var map__26078__$1 = ((((!((map__26078 == null)))?((((map__26078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26078):map__26078);
var name = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var restricted = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"restricted","restricted",2138314034));
return mktplace.transactions.make_mktplace_txn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),"RegisterAssetType",new cljs.core.Keyword(null,"CreatorId","CreatorId",1327189603),participant_id,new cljs.core.Keyword(null,"Name","Name",-131211369),(function (){var or__6087__auto__ = name;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"Description","Description",-679315496),(function (){var or__6087__auto__ = description;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"Restricted","Restricted",-1645380429),((!((restricted == null)))?restricted:true)], null));
});
mktplace.transactions.register_asset = (function mktplace$transactions$register_asset(signing_identity,participant,asset_type_id_or_map,asset){
var participant_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(participant);
var map__26395 = asset;
var map__26395__$1 = ((((!((map__26395 == null)))?((((map__26395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26395):map__26395);
var name = cljs.core.get.call(null,map__26395__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__26395__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var restricted = cljs.core.get.call(null,map__26395__$1,new cljs.core.Keyword(null,"restricted","restricted",2138314034));
var consumable = cljs.core.get.call(null,map__26395__$1,new cljs.core.Keyword(null,"consumable","consumable",-1094669117));
var divisible = cljs.core.get.call(null,map__26395__$1,new cljs.core.Keyword(null,"divisible","divisible",-221365488));
var c__12583__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function (state_26583){
var state_val_26584 = (state_26583[(1)]);
if((state_val_26584 === (1))){
var inst_26567 = cljs.core.async.chan.call(null,(1));
var inst_26568 = (function (){var c__12583__auto____$1 = inst_26567;
return ((function (c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function (state_26565){
var state_val_26566 = (state_26565[(1)]);
if((state_val_26566 === (65))){
var inst_26547 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26585_26710 = state_26565__$1;
(statearr_26585_26710[(2)] = inst_26547);

(statearr_26585_26710[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (62))){
var inst_26549 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26586_26711 = state_26565__$1;
(statearr_26586_26711[(2)] = inst_26549);

(statearr_26586_26711[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (7))){
var inst_26454 = (state_26565[(7)]);
var inst_26455 = (state_26565[(8)]);
var inst_26454__$1 = (state_26565[(2)]);
var inst_26455__$1 = cljs.core.map_QMARK_.call(null,inst_26454__$1);
var state_26565__$1 = (function (){var statearr_26587 = state_26565;
(statearr_26587[(7)] = inst_26454__$1);

(statearr_26587[(8)] = inst_26455__$1);

return statearr_26587;
})();
if(inst_26455__$1){
var statearr_26588_26712 = state_26565__$1;
(statearr_26588_26712[(1)] = (21));

} else {
var statearr_26589_26713 = state_26565__$1;
(statearr_26589_26713[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (59))){
var inst_26521 = (state_26565[(9)]);
var inst_26522 = (state_26565[(10)]);
var inst_26527 = (state_26565[(2)]);
var inst_26528 = cljs.core.rest.call(null,inst_26521);
var inst_26529 = cljs.core.conj.call(null,inst_26522,inst_26527);
var inst_26521__$1 = inst_26528;
var inst_26522__$1 = inst_26529;
var state_26565__$1 = (function (){var statearr_26590 = state_26565;
(statearr_26590[(9)] = inst_26521__$1);

(statearr_26590[(10)] = inst_26522__$1);

return statearr_26590;
})();
var statearr_26591_26714 = state_26565__$1;
(statearr_26591_26714[(2)] = null);

(statearr_26591_26714[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (20))){
var inst_26447 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26592_26715 = state_26565__$1;
(statearr_26592_26715[(2)] = inst_26447);

(statearr_26592_26715[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (58))){
var inst_26534 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26593_26716 = state_26565__$1;
(statearr_26593_26716[(2)] = inst_26534);

(statearr_26593_26716[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (60))){
var inst_26513 = (state_26565[(11)]);
var state_26565__$1 = state_26565;
var statearr_26594_26717 = state_26565__$1;
(statearr_26594_26717[(2)] = inst_26513);

(statearr_26594_26717[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (27))){
var inst_26460 = (state_26565[(12)]);
var inst_26454 = (state_26565[(7)]);
var inst_26463 = (state_26565[(13)]);
var inst_26416 = (state_26565[(14)]);
var inst_26404 = (state_26565[(15)]);
var inst_26465 = (function (){var do_send26397 = inst_26404;
var txn26400 = inst_26416;
var asset_type_id = inst_26454;
var or__6087__auto__ = inst_26460;
var and__6075__auto__ = inst_26463;
return ((function (do_send26397,txn26400,asset_type_id,or__6087__auto__,and__6075__auto__,inst_26460,inst_26454,inst_26463,inst_26416,inst_26404,state_val_26566,c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function (p1__25634__25636__auto__,p2__25635__25637__auto__){
var or__6087__auto____$1 = p1__25634__25636__auto__;
if(cljs.core.truth_(or__6087__auto____$1)){
return or__6087__auto____$1;
} else {
return new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(p2__25635__25637__auto__);
}
});
;})(do_send26397,txn26400,asset_type_id,or__6087__auto__,and__6075__auto__,inst_26460,inst_26454,inst_26463,inst_26416,inst_26404,state_val_26566,c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
})();
var inst_26466 = cljs.core.reduce.call(null,inst_26465,false,inst_26454);
var state_26565__$1 = state_26565;
var statearr_26595_26718 = state_26565__$1;
(statearr_26595_26718[(2)] = inst_26466);

(statearr_26595_26718[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (1))){
var inst_26403 = (function (){return ((function (state_val_26566,c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function (p__26402){
var vec__26596 = p__26402;
var txn__25645__auto__ = cljs.core.nth.call(null,vec__26596,(0),null);
var annotations__25646__auto__ = cljs.core.nth.call(null,vec__26596,(1),null);
return sawtooth.ledger.transaction.send.call(null,signing_identity,mktplace.transactions.mktplace_msg_type,txn__25645__auto__,annotations__25646__auto__);
});
;})(state_val_26566,c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
})();
var inst_26404 = cljs.core.comp.call(null,inst_26403,sawtooth.ledger.transaction.vectorize);
var inst_26405 = cljs.core.map_QMARK_.call(null,asset_type_id_or_map);
var state_26565__$1 = (function (){var statearr_26597 = state_26565;
(statearr_26597[(15)] = inst_26404);

return statearr_26597;
})();
if(inst_26405){
var statearr_26598_26719 = state_26565__$1;
(statearr_26598_26719[(1)] = (2));

} else {
var statearr_26599_26720 = state_26565__$1;
(statearr_26599_26720[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (69))){
var inst_26551 = (state_26565[(16)]);
var inst_26552 = (state_26565[(17)]);
var inst_26559 = (state_26565[(2)]);
var inst_26560 = [inst_26551,inst_26559];
var inst_26561 = (new cljs.core.PersistentVector(null,2,(5),inst_26552,inst_26560,null));
var state_26565__$1 = state_26565;
var statearr_26600_26721 = state_26565__$1;
(statearr_26600_26721[(2)] = inst_26561);

(statearr_26600_26721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (24))){
var inst_26460 = (state_26565[(12)]);
var state_26565__$1 = state_26565;
var statearr_26601_26722 = state_26565__$1;
(statearr_26601_26722[(2)] = inst_26460);

(statearr_26601_26722[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (55))){
var inst_26536 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26602_26723 = state_26565__$1;
(statearr_26602_26723[(2)] = inst_26536);

(statearr_26602_26723[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (39))){
var state_26565__$1 = state_26565;
var statearr_26603_26724 = state_26565__$1;
(statearr_26603_26724[(2)] = consumable);

(statearr_26603_26724[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (46))){
var state_26565__$1 = state_26565;
var statearr_26604_26725 = state_26565__$1;
(statearr_26604_26725[(2)] = "");

(statearr_26604_26725[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (4))){
var inst_26416 = (state_26565[(14)]);
var inst_26416__$1 = (state_26565[(2)]);
var inst_26417 = cljs.core.list_QMARK_.call(null,inst_26416__$1);
var inst_26418 = cljs.core.empty_QMARK_.call(null,inst_26416__$1);
var inst_26419 = !(inst_26418);
var inst_26420 = (inst_26417) && (inst_26419);
var state_26565__$1 = (function (){var statearr_26605 = state_26565;
(statearr_26605[(14)] = inst_26416__$1);

return statearr_26605;
})();
if(cljs.core.truth_(inst_26420)){
var statearr_26606_26726 = state_26565__$1;
(statearr_26606_26726[(1)] = (5));

} else {
var statearr_26607_26727 = state_26565__$1;
(statearr_26607_26727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (54))){
var inst_26521 = (state_26565[(9)]);
var inst_26524 = (state_26565[(18)]);
var inst_26524__$1 = cljs.core.first.call(null,inst_26521);
var state_26565__$1 = (function (){var statearr_26608 = state_26565;
(statearr_26608[(18)] = inst_26524__$1);

return statearr_26608;
})();
if(cljs.core.truth_(inst_26524__$1)){
var statearr_26609_26728 = state_26565__$1;
(statearr_26609_26728[(1)] = (56));

} else {
var statearr_26610_26729 = state_26565__$1;
(statearr_26610_26729[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (15))){
var state_26565__$1 = state_26565;
var statearr_26611_26730 = state_26565__$1;
(statearr_26611_26730[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (48))){
var state_26565__$1 = state_26565;
var statearr_26613_26731 = state_26565__$1;
(statearr_26613_26731[(2)] = description);

(statearr_26613_26731[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (50))){
var inst_26496 = (state_26565[(19)]);
var inst_26454 = (state_26565[(7)]);
var inst_26506 = (state_26565[(20)]);
var inst_26484 = (state_26565[(21)]);
var inst_26490 = (state_26565[(22)]);
var inst_26502 = (state_26565[(23)]);
var inst_26513 = (state_26565[(11)]);
var inst_26510 = (state_26565[(2)]);
var inst_26511 = ["RegisterAsset",participant_id,inst_26490,inst_26496,inst_26502,inst_26506,inst_26510,inst_26454];
var inst_26512 = cljs.core.PersistentHashMap.fromArrays(inst_26484,inst_26511);
var inst_26513__$1 = mktplace.transactions.make_mktplace_txn.call(null,inst_26512);
var inst_26514 = cljs.core.list_QMARK_.call(null,inst_26513__$1);
var inst_26515 = cljs.core.empty_QMARK_.call(null,inst_26513__$1);
var inst_26516 = !(inst_26515);
var inst_26517 = (inst_26514) && (inst_26516);
var state_26565__$1 = (function (){var statearr_26614 = state_26565;
(statearr_26614[(11)] = inst_26513__$1);

return statearr_26614;
})();
if(cljs.core.truth_(inst_26517)){
var statearr_26615_26732 = state_26565__$1;
(statearr_26615_26732[(1)] = (51));

} else {
var statearr_26616_26733 = state_26565__$1;
(statearr_26616_26733[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (21))){
var inst_26454 = (state_26565[(7)]);
var inst_26457 = new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(inst_26454);
var state_26565__$1 = state_26565;
var statearr_26617_26734 = state_26565__$1;
(statearr_26617_26734[(2)] = inst_26457);

(statearr_26617_26734[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (31))){
var inst_26484 = [new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),new cljs.core.Keyword(null,"CreatorId","CreatorId",1327189603),new cljs.core.Keyword(null,"Restricted","Restricted",-1645380429),new cljs.core.Keyword(null,"Consumable","Consumable",911576934),new cljs.core.Keyword(null,"Divisible","Divisible",-664837801),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Description","Description",-679315496),new cljs.core.Keyword(null,"AssetTypeId","AssetTypeId",449475750)];
var inst_26485 = (restricted == null);
var inst_26486 = cljs.core.not.call(null,inst_26485);
var state_26565__$1 = (function (){var statearr_26618 = state_26565;
(statearr_26618[(21)] = inst_26484);

return statearr_26618;
})();
if(inst_26486){
var statearr_26619_26735 = state_26565__$1;
(statearr_26619_26735[(1)] = (36));

} else {
var statearr_26620_26736 = state_26565__$1;
(statearr_26620_26736[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (32))){
var inst_26563 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26565__$1,inst_26563);
} else {
if((state_val_26566 === (40))){
var state_26565__$1 = state_26565;
var statearr_26621_26737 = state_26565__$1;
(statearr_26621_26737[(2)] = true);

(statearr_26621_26737[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (56))){
var inst_26524 = (state_26565[(18)]);
var state_26565__$1 = state_26565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26565__$1,(59),inst_26524);
} else {
if((state_val_26566 === (33))){
var inst_26416 = (state_26565[(14)]);
var inst_26476 = cljs.core.map.call(null,sawtooth.ledger.transaction.unwrap_vec,inst_26416);
var state_26565__$1 = state_26565;
var statearr_26622_26738 = state_26565__$1;
(statearr_26622_26738[(2)] = inst_26476);

(statearr_26622_26738[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (13))){
var inst_26424 = (state_26565[(24)]);
var inst_26425 = (state_26565[(25)]);
var inst_26430 = (state_26565[(2)]);
var inst_26431 = cljs.core.rest.call(null,inst_26424);
var inst_26432 = cljs.core.conj.call(null,inst_26425,inst_26430);
var inst_26424__$1 = inst_26431;
var inst_26425__$1 = inst_26432;
var state_26565__$1 = (function (){var statearr_26623 = state_26565;
(statearr_26623[(24)] = inst_26424__$1);

(statearr_26623[(25)] = inst_26425__$1);

return statearr_26623;
})();
var statearr_26624_26739 = state_26565__$1;
(statearr_26624_26739[(2)] = null);

(statearr_26624_26739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (22))){
var inst_26455 = (state_26565[(8)]);
var state_26565__$1 = state_26565;
var statearr_26625_26740 = state_26565__$1;
(statearr_26625_26740[(2)] = inst_26455);

(statearr_26625_26740[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (36))){
var state_26565__$1 = state_26565;
var statearr_26626_26741 = state_26565__$1;
(statearr_26626_26741[(2)] = restricted);

(statearr_26626_26741[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (41))){
var inst_26496 = (state_26565[(2)]);
var inst_26497 = (divisible == null);
var inst_26498 = cljs.core.not.call(null,inst_26497);
var state_26565__$1 = (function (){var statearr_26627 = state_26565;
(statearr_26627[(19)] = inst_26496);

return statearr_26627;
})();
if(inst_26498){
var statearr_26628_26742 = state_26565__$1;
(statearr_26628_26742[(1)] = (42));

} else {
var statearr_26629_26743 = state_26565__$1;
(statearr_26629_26743[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (43))){
var state_26565__$1 = state_26565;
var statearr_26630_26744 = state_26565__$1;
(statearr_26630_26744[(2)] = false);

(statearr_26630_26744[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (61))){
var state_26565__$1 = state_26565;
var statearr_26631_26745 = state_26565__$1;
(statearr_26631_26745[(1)] = (63));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (29))){
var inst_26469 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26633_26746 = state_26565__$1;
(statearr_26633_26746[(2)] = inst_26469);

(statearr_26633_26746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (44))){
var inst_26502 = (state_26565[(2)]);
var state_26565__$1 = (function (){var statearr_26634 = state_26565;
(statearr_26634[(23)] = inst_26502);

return statearr_26634;
})();
if(cljs.core.truth_(name)){
var statearr_26635_26747 = state_26565__$1;
(statearr_26635_26747[(1)] = (45));

} else {
var statearr_26636_26748 = state_26565__$1;
(statearr_26636_26748[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (6))){
var inst_26416 = (state_26565[(14)]);
var inst_26441 = typeof inst_26416 === 'string';
var state_26565__$1 = state_26565;
if(cljs.core.truth_(inst_26441)){
var statearr_26637_26749 = state_26565__$1;
(statearr_26637_26749[(1)] = (14));

} else {
var statearr_26638_26750 = state_26565__$1;
(statearr_26638_26750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (28))){
var inst_26463 = (state_26565[(13)]);
var state_26565__$1 = state_26565;
var statearr_26639_26751 = state_26565__$1;
(statearr_26639_26751[(2)] = inst_26463);

(statearr_26639_26751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (64))){
var state_26565__$1 = state_26565;
var statearr_26640_26752 = state_26565__$1;
(statearr_26640_26752[(2)] = null);

(statearr_26640_26752[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (51))){
var inst_26404 = (state_26565[(15)]);
var inst_26513 = (state_26565[(11)]);
var inst_26519 = cljs.core.map.call(null,inst_26404,inst_26513);
var inst_26520 = null;
var inst_26521 = inst_26519;
var inst_26522 = inst_26520;
var state_26565__$1 = (function (){var statearr_26641 = state_26565;
(statearr_26641[(9)] = inst_26521);

(statearr_26641[(10)] = inst_26522);

return statearr_26641;
})();
var statearr_26642_26753 = state_26565__$1;
(statearr_26642_26753[(2)] = null);

(statearr_26642_26753[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (25))){
var inst_26454 = (state_26565[(7)]);
var inst_26463 = (state_26565[(13)]);
var inst_26463__$1 = cljs.core.list_QMARK_.call(null,inst_26454);
var state_26565__$1 = (function (){var statearr_26643 = state_26565;
(statearr_26643[(13)] = inst_26463__$1);

return statearr_26643;
})();
if(inst_26463__$1){
var statearr_26644_26754 = state_26565__$1;
(statearr_26644_26754[(1)] = (27));

} else {
var statearr_26645_26755 = state_26565__$1;
(statearr_26645_26755[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (34))){
var inst_26416 = (state_26565[(14)]);
var inst_26478 = sawtooth.ledger.transaction.unwrap_vec.call(null,inst_26416);
var state_26565__$1 = state_26565;
var statearr_26646_26756 = state_26565__$1;
(statearr_26646_26756[(2)] = inst_26478);

(statearr_26646_26756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (17))){
var inst_26416 = (state_26565[(14)]);
var inst_26404 = (state_26565[(15)]);
var inst_26445 = inst_26404.call(null,inst_26416);
var state_26565__$1 = state_26565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26565__$1,(20),inst_26445);
} else {
if((state_val_26566 === (3))){
var state_26565__$1 = state_26565;
var statearr_26647_26757 = state_26565__$1;
(statearr_26647_26757[(2)] = asset_type_id_or_map);

(statearr_26647_26757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (12))){
var inst_26437 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26648_26758 = state_26565__$1;
(statearr_26648_26758[(2)] = inst_26437);

(statearr_26648_26758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (2))){
var inst_26407 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26408 = mktplace.transactions.register_asset_type.call(null,participant_id,asset_type_id_or_map);
var inst_26409 = [new cljs.core.Keyword(null,"creator","creator",-1069241724)];
var inst_26410 = [participant_id];
var inst_26411 = cljs.core.PersistentHashMap.fromArrays(inst_26409,inst_26410);
var inst_26412 = [inst_26408,inst_26411];
var inst_26413 = (new cljs.core.PersistentVector(null,2,(5),inst_26407,inst_26412,null));
var state_26565__$1 = state_26565;
var statearr_26649_26759 = state_26565__$1;
(statearr_26649_26759[(2)] = inst_26413);

(statearr_26649_26759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (66))){
var inst_26544 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26650_26760 = state_26565__$1;
(statearr_26650_26760[(2)] = inst_26544);

(statearr_26650_26760[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (23))){
var inst_26460 = (state_26565[(12)]);
var inst_26460__$1 = (state_26565[(2)]);
var state_26565__$1 = (function (){var statearr_26651 = state_26565;
(statearr_26651[(12)] = inst_26460__$1);

return statearr_26651;
})();
if(cljs.core.truth_(inst_26460__$1)){
var statearr_26652_26761 = state_26565__$1;
(statearr_26652_26761[(1)] = (24));

} else {
var statearr_26653_26762 = state_26565__$1;
(statearr_26653_26762[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (47))){
var inst_26506 = (state_26565[(2)]);
var state_26565__$1 = (function (){var statearr_26654 = state_26565;
(statearr_26654[(20)] = inst_26506);

return statearr_26654;
})();
if(cljs.core.truth_(description)){
var statearr_26655_26763 = state_26565__$1;
(statearr_26655_26763[(1)] = (48));

} else {
var statearr_26656_26764 = state_26565__$1;
(statearr_26656_26764[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (35))){
var inst_26473 = (state_26565[(26)]);
var inst_26454 = (state_26565[(7)]);
var inst_26480 = (state_26565[(2)]);
var inst_26481 = [inst_26454,inst_26480];
var inst_26482 = (new cljs.core.PersistentVector(null,2,(5),inst_26473,inst_26481,null));
var state_26565__$1 = state_26565;
var statearr_26657_26765 = state_26565__$1;
(statearr_26657_26765[(2)] = inst_26482);

(statearr_26657_26765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (19))){
var inst_26450 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26658_26766 = state_26565__$1;
(statearr_26658_26766[(2)] = inst_26450);

(statearr_26658_26766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (57))){
var inst_26522 = (state_26565[(10)]);
var inst_26532 = cljs.core.reverse.call(null,inst_26522);
var state_26565__$1 = state_26565;
var statearr_26659_26767 = state_26565__$1;
(statearr_26659_26767[(2)] = inst_26532);

(statearr_26659_26767[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (68))){
var inst_26513 = (state_26565[(11)]);
var inst_26557 = sawtooth.ledger.transaction.unwrap_vec.call(null,inst_26513);
var state_26565__$1 = state_26565;
var statearr_26660_26768 = state_26565__$1;
(statearr_26660_26768[(2)] = inst_26557);

(statearr_26660_26768[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (11))){
var inst_26425 = (state_26565[(25)]);
var inst_26435 = cljs.core.reverse.call(null,inst_26425);
var state_26565__$1 = state_26565;
var statearr_26661_26769 = state_26565__$1;
(statearr_26661_26769[(2)] = inst_26435);

(statearr_26661_26769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (9))){
var inst_26439 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26662_26770 = state_26565__$1;
(statearr_26662_26770[(2)] = inst_26439);

(statearr_26662_26770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (5))){
var inst_26416 = (state_26565[(14)]);
var inst_26404 = (state_26565[(15)]);
var inst_26422 = cljs.core.map.call(null,inst_26404,inst_26416);
var inst_26423 = null;
var inst_26424 = inst_26422;
var inst_26425 = inst_26423;
var state_26565__$1 = (function (){var statearr_26663 = state_26565;
(statearr_26663[(24)] = inst_26424);

(statearr_26663[(25)] = inst_26425);

return statearr_26663;
})();
var statearr_26664_26771 = state_26565__$1;
(statearr_26664_26771[(2)] = null);

(statearr_26664_26771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (14))){
var inst_26416 = (state_26565[(14)]);
var state_26565__$1 = state_26565;
var statearr_26665_26772 = state_26565__$1;
(statearr_26665_26772[(2)] = inst_26416);

(statearr_26665_26772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (45))){
var state_26565__$1 = state_26565;
var statearr_26666_26773 = state_26565__$1;
(statearr_26666_26773[(2)] = name);

(statearr_26666_26773[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (53))){
var inst_26513 = (state_26565[(11)]);
var inst_26551 = (state_26565[(2)]);
var inst_26552 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26553 = cljs.core.list_QMARK_.call(null,inst_26513);
var state_26565__$1 = (function (){var statearr_26667 = state_26565;
(statearr_26667[(16)] = inst_26551);

(statearr_26667[(17)] = inst_26552);

return statearr_26667;
})();
if(inst_26553){
var statearr_26668_26774 = state_26565__$1;
(statearr_26668_26774[(1)] = (67));

} else {
var statearr_26669_26775 = state_26565__$1;
(statearr_26669_26775[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (26))){
var inst_26471 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
if(cljs.core.truth_(inst_26471)){
var statearr_26670_26776 = state_26565__$1;
(statearr_26670_26776[(1)] = (30));

} else {
var statearr_26671_26777 = state_26565__$1;
(statearr_26671_26777[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (16))){
var inst_26452 = (state_26565[(2)]);
var state_26565__$1 = state_26565;
var statearr_26672_26778 = state_26565__$1;
(statearr_26672_26778[(2)] = inst_26452);

(statearr_26672_26778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (38))){
var inst_26490 = (state_26565[(2)]);
var inst_26491 = (consumable == null);
var inst_26492 = cljs.core.not.call(null,inst_26491);
var state_26565__$1 = (function (){var statearr_26673 = state_26565;
(statearr_26673[(22)] = inst_26490);

return statearr_26673;
})();
if(inst_26492){
var statearr_26674_26779 = state_26565__$1;
(statearr_26674_26779[(1)] = (39));

} else {
var statearr_26675_26780 = state_26565__$1;
(statearr_26675_26780[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (30))){
var inst_26416 = (state_26565[(14)]);
var inst_26473 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26474 = cljs.core.list_QMARK_.call(null,inst_26416);
var state_26565__$1 = (function (){var statearr_26676 = state_26565;
(statearr_26676[(26)] = inst_26473);

return statearr_26676;
})();
if(inst_26474){
var statearr_26677_26781 = state_26565__$1;
(statearr_26677_26781[(1)] = (33));

} else {
var statearr_26678_26782 = state_26565__$1;
(statearr_26678_26782[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (10))){
var inst_26427 = (state_26565[(27)]);
var state_26565__$1 = state_26565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26565__$1,(13),inst_26427);
} else {
if((state_val_26566 === (18))){
var state_26565__$1 = state_26565;
var statearr_26679_26783 = state_26565__$1;
(statearr_26679_26783[(2)] = null);

(statearr_26679_26783[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (52))){
var inst_26513 = (state_26565[(11)]);
var inst_26538 = typeof inst_26513 === 'string';
var state_26565__$1 = state_26565;
if(cljs.core.truth_(inst_26538)){
var statearr_26680_26784 = state_26565__$1;
(statearr_26680_26784[(1)] = (60));

} else {
var statearr_26681_26785 = state_26565__$1;
(statearr_26681_26785[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (67))){
var inst_26513 = (state_26565[(11)]);
var inst_26555 = cljs.core.map.call(null,sawtooth.ledger.transaction.unwrap_vec,inst_26513);
var state_26565__$1 = state_26565;
var statearr_26682_26786 = state_26565__$1;
(statearr_26682_26786[(2)] = inst_26555);

(statearr_26682_26786[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (42))){
var state_26565__$1 = state_26565;
var statearr_26683_26787 = state_26565__$1;
(statearr_26683_26787[(2)] = divisible);

(statearr_26683_26787[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (37))){
var state_26565__$1 = state_26565;
var statearr_26684_26788 = state_26565__$1;
(statearr_26684_26788[(2)] = true);

(statearr_26684_26788[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (63))){
var inst_26404 = (state_26565[(15)]);
var inst_26513 = (state_26565[(11)]);
var inst_26542 = inst_26404.call(null,inst_26513);
var state_26565__$1 = state_26565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26565__$1,(66),inst_26542);
} else {
if((state_val_26566 === (8))){
var inst_26424 = (state_26565[(24)]);
var inst_26427 = (state_26565[(27)]);
var inst_26427__$1 = cljs.core.first.call(null,inst_26424);
var state_26565__$1 = (function (){var statearr_26685 = state_26565;
(statearr_26685[(27)] = inst_26427__$1);

return statearr_26685;
})();
if(cljs.core.truth_(inst_26427__$1)){
var statearr_26686_26789 = state_26565__$1;
(statearr_26686_26789[(1)] = (10));

} else {
var statearr_26687_26790 = state_26565__$1;
(statearr_26687_26790[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26566 === (49))){
var state_26565__$1 = state_26565;
var statearr_26688_26791 = state_26565__$1;
(statearr_26688_26791[(2)] = "");

(statearr_26688_26791[(1)] = (50));


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
});})(c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
;
return ((function (switch__12471__auto__,c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function() {
var mktplace$transactions$register_asset_$_state_machine__12472__auto__ = null;
var mktplace$transactions$register_asset_$_state_machine__12472__auto____0 = (function (){
var statearr_26692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26692[(0)] = mktplace$transactions$register_asset_$_state_machine__12472__auto__);

(statearr_26692[(1)] = (1));

return statearr_26692;
});
var mktplace$transactions$register_asset_$_state_machine__12472__auto____1 = (function (state_26565){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_26565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e26693){if((e26693 instanceof Object)){
var ex__12475__auto__ = e26693;
var statearr_26694_26792 = state_26565;
(statearr_26694_26792[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26565;
state_26565 = G__26793;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
mktplace$transactions$register_asset_$_state_machine__12472__auto__ = function(state_26565){
switch(arguments.length){
case 0:
return mktplace$transactions$register_asset_$_state_machine__12472__auto____0.call(this);
case 1:
return mktplace$transactions$register_asset_$_state_machine__12472__auto____1.call(this,state_26565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mktplace$transactions$register_asset_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = mktplace$transactions$register_asset_$_state_machine__12472__auto____0;
mktplace$transactions$register_asset_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = mktplace$transactions$register_asset_$_state_machine__12472__auto____1;
return mktplace$transactions$register_asset_$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
})();
var state__12585__auto__ = (function (){var statearr_26695 = f__12584__auto__.call(null);
(statearr_26695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto____$1);

return statearr_26695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});
;})(c__12583__auto____$1,inst_26567,state_val_26584,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
})();
var inst_26569 = cljs.core.async.impl.dispatch.run.call(null,inst_26568);
var state_26583__$1 = (function (){var statearr_26696 = state_26583;
(statearr_26696[(7)] = inst_26569);

return statearr_26696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26583__$1,(2),inst_26567);
} else {
if((state_val_26584 === (2))){
var inst_26572 = (state_26583[(8)]);
var inst_26571 = (state_26583[(2)]);
var inst_26572__$1 = cljs.core.nth.call(null,inst_26571,(0),null);
var inst_26573 = cljs.core.nth.call(null,inst_26571,(1),null);
var inst_26574 = new cljs.core.Keyword(null,"error?","error?",-460689159).cljs$core$IFn$_invoke$arity$1(inst_26572__$1);
var inst_26575 = cljs.core.not.call(null,inst_26574);
var state_26583__$1 = (function (){var statearr_26697 = state_26583;
(statearr_26697[(9)] = inst_26573);

(statearr_26697[(8)] = inst_26572__$1);

return statearr_26697;
})();
if(inst_26575){
var statearr_26698_26794 = state_26583__$1;
(statearr_26698_26794[(1)] = (3));

} else {
var statearr_26699_26795 = state_26583__$1;
(statearr_26699_26795[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (3))){
var inst_26573 = (state_26583[(9)]);
var inst_26577 = sawtooth.ledger.transaction.on_transaction_success.call(null,inst_26573,null);
var state_26583__$1 = state_26583;
var statearr_26700_26796 = state_26583__$1;
(statearr_26700_26796[(2)] = inst_26577);

(statearr_26700_26796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (4))){
var inst_26573 = (state_26583[(9)]);
var inst_26572 = (state_26583[(8)]);
var inst_26579 = sawtooth.ledger.transaction.on_transaction_failure.call(null,inst_26573,inst_26572);
var state_26583__$1 = state_26583;
var statearr_26701_26797 = state_26583__$1;
(statearr_26701_26797[(2)] = inst_26579);

(statearr_26701_26797[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (5))){
var inst_26572 = (state_26583[(8)]);
var inst_26581 = (state_26583[(2)]);
var state_26583__$1 = (function (){var statearr_26702 = state_26583;
(statearr_26702[(10)] = inst_26581);

return statearr_26702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26583__$1,inst_26572);
} else {
return null;
}
}
}
}
}
});})(c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
;
return ((function (switch__12471__auto__,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible){
return (function() {
var mktplace$transactions$register_asset_$_state_machine__12472__auto__ = null;
var mktplace$transactions$register_asset_$_state_machine__12472__auto____0 = (function (){
var statearr_26706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26706[(0)] = mktplace$transactions$register_asset_$_state_machine__12472__auto__);

(statearr_26706[(1)] = (1));

return statearr_26706;
});
var mktplace$transactions$register_asset_$_state_machine__12472__auto____1 = (function (state_26583){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_26583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e26707){if((e26707 instanceof Object)){
var ex__12475__auto__ = e26707;
var statearr_26708_26798 = state_26583;
(statearr_26708_26798[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26799 = state_26583;
state_26583 = G__26799;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
mktplace$transactions$register_asset_$_state_machine__12472__auto__ = function(state_26583){
switch(arguments.length){
case 0:
return mktplace$transactions$register_asset_$_state_machine__12472__auto____0.call(this);
case 1:
return mktplace$transactions$register_asset_$_state_machine__12472__auto____1.call(this,state_26583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mktplace$transactions$register_asset_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = mktplace$transactions$register_asset_$_state_machine__12472__auto____0;
mktplace$transactions$register_asset_$_state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = mktplace$transactions$register_asset_$_state_machine__12472__auto____1;
return mktplace$transactions$register_asset_$_state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
})();
var state__12585__auto__ = (function (){var statearr_26709 = f__12584__auto__.call(null);
(statearr_26709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto__);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto__,participant_id,map__26395,map__26395__$1,name,description,restricted,consumable,divisible))
);

return c__12583__auto__;
});
/**
 * Registers a holding for a participant.
 * 
 *   Params:
 *   - signing-identity - the wallet used for signing.
 *   - participant - the participant registering the holding
 *   - holding - a map of :name, :description :asset and :count
 */
mktplace.transactions.register_holding = (function mktplace$transactions$register_holding(signing_identity,participant,holding){
return sawtooth.ledger.transaction.send_transaction.call(null,signing_identity,mktplace.transactions.mktplace_msg_type,mktplace.transactions.holding_update_register.call(null,participant,holding),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"creator","creator",-1069241724),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(participant)], null));
});
/**
 * registers a participant with the given name and description, associated with a
 *   signing-identity and an andress
 */
mktplace.transactions.register_participant = (function mktplace$transactions$register_participant(signing_identity,address,name,desc,on_done_fn){
return sawtooth.ledger.transaction.send_transaction.call(null,signing_identity,mktplace.transactions.mktplace_msg_type,mktplace.transactions.make_mktplace_txn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),"RegisterParticipant",new cljs.core.Keyword(null,"Name","Name",-131211369),(function (){var or__6087__auto__ = name;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"Description","Description",-679315496),(function (){var or__6087__auto__ = desc;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})()], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),address], null),on_done_fn);
});
mktplace.transactions.register_account = (function mktplace$transactions$register_account(signing_identity,participant){
var map__26802 = participant;
var map__26802__$1 = ((((!((map__26802 == null)))?((((map__26802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26802):map__26802);
var participant_id = cljs.core.get.call(null,map__26802__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__26802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return sawtooth.ledger.transaction.send_transaction.call(null,signing_identity,mktplace.transactions.mktplace_msg_type,mktplace.transactions.make_mktplace_txn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),"RegisterAccount",new cljs.core.Keyword(null,"CreatorId","CreatorId",1327189603),participant_id,new cljs.core.Keyword(null,"Name","Name",-131211369),[cljs.core.str("/account/"),cljs.core.str(name)].join(''),new cljs.core.Keyword(null,"Description","Description",-679315496),""], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"creator","creator",-1069241724),participant_id], null));
});
/**
 * Registers a sell offer
 */
mktplace.transactions.register_sell_offer = (function mktplace$transactions$register_sell_offer(var_args){
var args26804 = [];
var len__7157__auto___26812 = arguments.length;
var i__7158__auto___26813 = (0);
while(true){
if((i__7158__auto___26813 < len__7157__auto___26812)){
args26804.push((arguments[i__7158__auto___26813]));

var G__26814 = (i__7158__auto___26813 + (1));
i__7158__auto___26813 = G__26814;
continue;
} else {
}
break;
}

var G__26806 = args26804.length;
switch (G__26806) {
case 3:
return mktplace.transactions.register_sell_offer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return mktplace.transactions.register_sell_offer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26804.length)].join('')));

}
});

mktplace.transactions.register_sell_offer.cljs$core$IFn$_invoke$arity$3 = (function (signing_identity,participant,offer){
return mktplace.transactions.register_sell_offer.call(null,signing_identity,participant,offer,cljs.core.identity);
});

mktplace.transactions.register_sell_offer.cljs$core$IFn$_invoke$arity$4 = (function (signing_identity,p__26807,offer,on_done_fn){
var map__26808 = p__26807;
var map__26808__$1 = ((((!((map__26808 == null)))?((((map__26808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26808):map__26808);
var participant_id = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__26810 = offer;
var map__26810__$1 = ((((!((map__26810 == null)))?((((map__26810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26810):map__26810);
var name = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var input = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"input","input",556931961));
var input_count = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"input-count","input-count",1906960590));
var output = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var output_count = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"output-count","output-count",1108610852));
var minimum = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var execution = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"execution","execution",253283524));
if(cljs.core.integer_QMARK_.call(null,input_count)){
} else {
throw (new Error("Assert failed: (integer? input-count)"));
}

if(cljs.core.integer_QMARK_.call(null,output_count)){
} else {
throw (new Error("Assert failed: (integer? output-count)"));
}

if(typeof input === 'string'){
} else {
throw (new Error("Assert failed: (string? input)"));
}

if(typeof output === 'string'){
} else {
throw (new Error("Assert failed: (string? output)"));
}

return sawtooth.ledger.transaction.send_transaction.call(null,signing_identity,mktplace.transactions.mktplace_msg_type,mktplace.transactions.make_mktplace_txn.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),new cljs.core.Keyword(null,"CreatorId","CreatorId",1327189603),new cljs.core.Keyword(null,"InputId","InputId",645522253),new cljs.core.Keyword(null,"Execution","Execution",-873855504),new cljs.core.Keyword(null,"Ratio","Ratio",991013586),new cljs.core.Keyword(null,"OutputId","OutputId",-1440685098),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Description","Description",-679315496),new cljs.core.Keyword(null,"Maximum","Maximum",-1392891686),new cljs.core.Keyword(null,"Minimum","Minimum",624049852)],["RegisterSellOffer",participant_id,input,execution,(output_count / input_count),output,(function (){var or__6087__auto__ = name;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})(),(function (){var or__6087__auto__ = description;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})(),maximum,minimum])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"creator","creator",-1069241724),participant_id], null),on_done_fn);
});

mktplace.transactions.register_sell_offer.cljs$lang$maxFixedArity = 4;
/**
 * Unregisters a sell offer
 */
mktplace.transactions.unregister_sell_offer = (function mktplace$transactions$unregister_sell_offer(var_args){
var args26816 = [];
var len__7157__auto___26825 = arguments.length;
var i__7158__auto___26826 = (0);
while(true){
if((i__7158__auto___26826 < len__7157__auto___26825)){
args26816.push((arguments[i__7158__auto___26826]));

var G__26827 = (i__7158__auto___26826 + (1));
i__7158__auto___26826 = G__26827;
continue;
} else {
}
break;
}

var G__26818 = args26816.length;
switch (G__26818) {
case 3:
return mktplace.transactions.unregister_sell_offer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return mktplace.transactions.unregister_sell_offer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26816.length)].join('')));

}
});

mktplace.transactions.unregister_sell_offer.cljs$core$IFn$_invoke$arity$3 = (function (signing_identity,participant,offer){
return mktplace.transactions.unregister_sell_offer.call(null,signing_identity,participant,offer,cljs.core.identity);
});

mktplace.transactions.unregister_sell_offer.cljs$core$IFn$_invoke$arity$4 = (function (signing_identity,p__26819,p__26820,on_done_fn){
var map__26821 = p__26819;
var map__26821__$1 = ((((!((map__26821 == null)))?((((map__26821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26821):map__26821);
var participant_id = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__26822 = p__26820;
var map__26822__$1 = ((((!((map__26822 == null)))?((((map__26822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26822):map__26822);
var offer_id = cljs.core.get.call(null,map__26822__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return sawtooth.ledger.transaction.send_transaction.call(null,signing_identity,mktplace.transactions.mktplace_msg_type,mktplace.transactions.make_mktplace_txn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616),"UnregisterSellOffer",new cljs.core.Keyword(null,"ObjectId","ObjectId",1386349233),offer_id,new cljs.core.Keyword(null,"CreatorId","CreatorId",1327189603),participant_id], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"creator","creator",-1069241724),participant_id], null),on_done_fn);
});

mktplace.transactions.unregister_sell_offer.cljs$lang$maxFixedArity = 4;
