// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.service.offer');
goog.require('cljs.core');
goog.require('sawtooth.state');
goog.require('goog.string');
goog.require('sawtooth.service.common');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('mktplace.transactions');
goog.require('sawtooth.utils');
mktplace.service.offer.PAGE_SIZE = (100);
mktplace.service.offer.ACTIONABLE_OFFERS_ENDPOINT_TEMPLATE = "/api/mktplace/participants/%s/actionable_offers";
mktplace.service.offer.OWNED_OFFERS_ENDPOINT_TEMPLATE = "/api/mktplace/participants/%s/offers";
mktplace.service.offer.fetch_offers = (function mktplace$service$offer$fetch_offers(endpoint_template,participant_id,query){
return sawtooth.service.common.fetch_json_BANG_.call(null,goog.string.format(endpoint_template,participant_id),query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offers","offers",796187776)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unable to Load Offers",new cljs.core.Keyword(null,"message","message",-406056002),"An unknown error occured\n                         while loading offers."], null)], null));
});
mktplace.service.offer.owned_offers = (function mktplace$service$offer$owned_offers(p__29990,query){
var map__29993 = p__29990;
var map__29993__$1 = ((((!((map__29993 == null)))?((((map__29993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29993):map__29993);
var participant_id = cljs.core.get.call(null,map__29993__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return mktplace.service.offer.fetch_offers.call(null,mktplace.service.offer.OWNED_OFFERS_ENDPOINT_TEMPLATE,participant_id,query);
});
mktplace.service.offer.available_offers = (function mktplace$service$offer$available_offers(p__29995,query){
var map__29998 = p__29995;
var map__29998__$1 = ((((!((map__29998 == null)))?((((map__29998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29998):map__29998);
var participant_id = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return mktplace.service.offer.fetch_offers.call(null,mktplace.service.offer.ACTIONABLE_OFFERS_ENDPOINT_TEMPLATE,participant_id,query);
});
mktplace.service.offer.submit_offer = (function mktplace$service$offer$submit_offer(wallet_id,participant,sell_offer){
return mktplace.transactions.register_sell_offer.call(null,wallet_id,participant,sell_offer);
});
mktplace.service.offer.update_offer = (function mktplace$service$offer$update_offer(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30004 = arguments.length;
var i__7158__auto___30005 = (0);
while(true){
if((i__7158__auto___30005 < len__7157__auto___30004)){
args__7164__auto__.push((arguments[i__7158__auto___30005]));

var G__30006 = (i__7158__auto___30005 + (1));
i__7158__auto___30005 = G__30006;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((2) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((2)),(0),null)):null);
return mktplace.service.offer.update_offer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7165__auto__);
});

mktplace.service.offer.update_offer.cljs$core$IFn$_invoke$arity$variadic = (function (offer,f,args){
var temp__4657__auto__ = sawtooth.utils.index_of.call(null,(function (p1__30000_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(offer),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30000_SHARP_));
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,sawtooth.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.Keyword(null,"data","data",-232669377)], null)));
if(cljs.core.truth_(temp__4657__auto__)){
var i = temp__4657__auto__;
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.Keyword(null,"data","data",-232669377),i], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.apply.call(null,f,offer,args)], null));
} else {
return null;
}
});

mktplace.service.offer.update_offer.cljs$lang$maxFixedArity = (2);

mktplace.service.offer.update_offer.cljs$lang$applyTo = (function (seq30001){
var G__30002 = cljs.core.first.call(null,seq30001);
var seq30001__$1 = cljs.core.next.call(null,seq30001);
var G__30003 = cljs.core.first.call(null,seq30001__$1);
var seq30001__$2 = cljs.core.next.call(null,seq30001__$1);
return mktplace.service.offer.update_offer.cljs$core$IFn$_invoke$arity$variadic(G__30002,G__30003,seq30001__$2);
});
mktplace.service.offer.revoke = (function mktplace$service$offer$revoke(wallet_id,participant,offer){
mktplace.transactions.unregister_sell_offer.call(null,wallet_id,participant,offer);

return mktplace.service.offer.update_offer.call(null,offer,cljs.core.assoc,new cljs.core.Keyword(null,"revoked","revoked",-1126520531),true);
});
/**
 * Given a participant and a query (of any one of nput, output, limit and page)
 *   it will place the results on the app state at [:exchange :insert :offers]
 */
mktplace.service.offer.exchange_offers_with = (function mktplace$service$offer$exchange_offers_with(p__30007,p__30008){
var map__30014 = p__30007;
var map__30014__$1 = ((((!((map__30014 == null)))?((((map__30014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30014):map__30014);
var participant_id = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__30015 = p__30008;
var map__30015__$1 = ((((!((map__30015 == null)))?((((map__30015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);
var input = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var limit = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var page = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"page","page",849072397));
var query = (function (){var G__30018 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"participantId","participantId",-1804266017),[cljs.core.str("!"),cljs.core.str(participant_id)].join(''),new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
var G__30018__$1 = (cljs.core.truth_(input)?cljs.core.assoc.call(null,G__30018,new cljs.core.Keyword(null,"inputAssetId","inputAssetId",150968286),input):G__30018);
var G__30018__$2 = (cljs.core.truth_(output)?cljs.core.assoc.call(null,G__30018__$1,new cljs.core.Keyword(null,"outputAssetId","outputAssetId",1917141629),output):G__30018__$1);
var G__30018__$3 = (cljs.core.truth_(page)?cljs.core.assoc.call(null,G__30018__$2,new cljs.core.Keyword(null,"page","page",849072397),page):G__30018__$2);
if(cljs.core.truth_(limit)){
return cljs.core.assoc.call(null,G__30018__$3,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit);
} else {
return G__30018__$3;
}
})();
return sawtooth.service.common.fetch_json_BANG_.call(null,goog.string.format(mktplace.service.offer.ACTIONABLE_OFFERS_ENDPOINT_TEMPLATE,participant_id),query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"offers","offers",796187776)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unable to Load Offers",new cljs.core.Keyword(null,"message","message",-406056002),"An unknown error occured\n                           while loading offers"], null)], null));
});
/**
 * Clears the results of exchange-offers-with from the app state.
 */
mktplace.service.offer.clear_exchange_offers_with = (function mktplace$service$offer$clear_exchange_offers_with(){
return sawtooth.service.common.clear_path_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"insert","insert",1286475395)], null));
});
/**
 * Loads the offer with the given id into the app-state in a vector at
 *   [:exchange :offers].
 */
mktplace.service.offer.exchange_offer = (function mktplace$service$offer$exchange_offer(p__30020,offer_id){
var map__30023 = p__30020;
var map__30023__$1 = ((((!((map__30023 == null)))?((((map__30023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30023):map__30023);
var participant_id = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return sawtooth.service.common.fetch_json_BANG_.call(null,goog.string.format([cljs.core.str(mktplace.service.offer.OWNED_OFFERS_ENDPOINT_TEMPLATE),cljs.core.str("/"),cljs.core.str(offer_id)].join(''),participant_id),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xform","xform",-1725711008),((function (map__30023,map__30023__$1,participant_id){
return (function (offer){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__30023,map__30023__$1,participant_id){
return (function (p1__30019_SHARP_){
return cljs.core.conj.call(null,p1__30019_SHARP_,offer);
});})(map__30023,map__30023__$1,participant_id))
], null);
});})(map__30023,map__30023__$1,participant_id))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unable to Load Offer",new cljs.core.Keyword(null,"message","message",-406056002),"An unknown error occured\n                         while loading the selected offer"], null)], null));
});
/**
 * Inserts the given offer into the vector of offers in the app-state at
 *   [:exchange :offers].  If flag before is truthy, the offer is inserted at
 *   the beginning of the vector
 */
mktplace.service.offer.insert_exchange_offer = (function mktplace$service$offer$insert_exchange_offer(offer,before_QMARK_){
var action_fn = (cljs.core.truth_(before_QMARK_)?(function (p1__30025_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [offer], null),p1__30025_SHARP_));
}):(function (p1__30026_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,p1__30026_SHARP_),offer);
}));
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null),new cljs.core.Keyword(null,"action","action",-811238024),action_fn], null));
});
/**
 * Removes the offer with the given id from the vector of offers in the
 *   app-state at [:exchange :offers].
 */
mktplace.service.offer.release_exchange_offer = (function mktplace$service$offer$release_exchange_offer(offer_id){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null),new cljs.core.Keyword(null,"action","action",-811238024),(function (offers){
return cljs.core.remove.call(null,(function (p1__30027_SHARP_){
return cljs.core._EQ_.call(null,offer_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30027_SHARP_));
}),offers);
})], null));
});
/**
 * Removes the app-state of an on-going exchange
 */
mktplace.service.offer.clear_exchange_offers = (function mktplace$service$offer$clear_exchange_offers(){
return sawtooth.service.common.clear_path_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210)], null));
});
