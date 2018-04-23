// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.service.exchange');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('sawtooth.math');
goog.require('sawtooth.service.common');
mktplace.service.exchange.EXCHANGES_ENDPOINT = "/api/mktplace/exchanges";
mktplace.service.exchange.PARTICIPANT_EXCHANGES_ENDPOINT_TEMPLATE = "/api/mktplace/participants/%s/exchanges";
mktplace.service.exchange.exchanges = (function mktplace$service$exchange$exchanges(var_args){
var args30030 = [];
var len__7157__auto___30033 = arguments.length;
var i__7158__auto___30034 = (0);
while(true){
if((i__7158__auto___30034 < len__7157__auto___30033)){
args30030.push((arguments[i__7158__auto___30034]));

var G__30035 = (i__7158__auto___30034 + (1));
i__7158__auto___30034 = G__30035;
continue;
} else {
}
break;
}

var G__30032 = args30030.length;
switch (G__30032) {
case 1:
return mktplace.service.exchange.exchanges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mktplace.service.exchange.exchanges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30030.length)].join('')));

}
});

mktplace.service.exchange.exchanges.cljs$core$IFn$_invoke$arity$1 = (function (query){
return mktplace.service.exchange.exchanges.call(null,null,query);
});

mktplace.service.exchange.exchanges.cljs$core$IFn$_invoke$arity$2 = (function (participant,query){
var endpoint = (cljs.core.truth_(participant)?goog.string.format(mktplace.service.exchange.PARTICIPANT_EXCHANGES_ENDPOINT_TEMPLATE,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(participant)):mktplace.service.exchange.EXCHANGES_ENDPOINT);
return sawtooth.service.common.fetch_json_BANG_.call(null,endpoint,query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unable to Load Exchanges",new cljs.core.Keyword(null,"message","message",-406056002),"An unknown error occurred\n                            while loading Exchanges"], null)], null));
});

mktplace.service.exchange.exchanges.cljs$lang$maxFixedArity = 2;
mktplace.service.exchange.clear_exchanges = (function mktplace$service$exchange$clear_exchanges(){
return sawtooth.service.common.clear_path_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
});
/**
 * Computes the predicted holding values based on the given set of offers
 *   with the input quantity
 */
mktplace.service.exchange.compute_model_holdings = (function mktplace$service$exchange$compute_model_holdings(offers,selected_initial_holding,final_holding,initial_quantity){
var model_change = (function mktplace$service$exchange$compute_model_holdings_$_model_change(holding,delta){
if(cljs.core.truth_(holding)){
if(cljs.core.truth_(cljs.core.get_in.call(null,holding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset-settings","asset-settings",-206232494),new cljs.core.Keyword(null,"consumable","consumable",-1094669117)], null),true))){
return cljs.core.update_in.call(null,holding,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.partial.call(null,cljs.core._PLUS_,delta));
} else {
return holding;
}
} else {
return null;
}
});
if(!(cljs.core.empty_QMARK_.call(null,offers))){
var initial_holding = selected_initial_holding;
var offers__$1 = offers;
var quantity = initial_quantity;
var pairs = cljs.core.PersistentVector.EMPTY;
while(true){
var offer = cljs.core.first.call(null,offers__$1);
var ratio = cljs.core.get.call(null,offer,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
var input_delta = (cljs.core.truth_(initial_holding)?(- quantity):null);
var output_delta = (cljs.core.truth_(final_holding)?sawtooth.math.floor.call(null,(quantity * ratio)):(0));
var left_input = model_change.call(null,initial_holding,input_delta);
var right_input = model_change.call(null,cljs.core.get.call(null,offer,new cljs.core.Keyword(null,"input","input",556931961)),(- input_delta));
if(((1) < cljs.core.count.call(null,offers__$1))){
var remaining_offers = cljs.core.rest.call(null,offers__$1);
var next_ratio = cljs.core.get.call(null,cljs.core.first.call(null,remaining_offers),new cljs.core.Keyword(null,"ratio","ratio",-926560044),(1));
var G__30037 = cljs.core.get.call(null,offer,new cljs.core.Keyword(null,"output","output",-1105869043));
var G__30038 = cljs.core.rest.call(null,offers__$1);
var G__30039 = output_delta;
var G__30040 = cljs.core.conj.call(null,pairs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left_input,new cljs.core.Keyword(null,"right","right",-452581833),right_input], null));
initial_holding = G__30037;
offers__$1 = G__30038;
quantity = G__30039;
pairs = G__30040;
continue;
} else {
return cljs.core.conj.call(null,pairs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left_input,new cljs.core.Keyword(null,"right","right",-452581833),right_input], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),model_change.call(null,cljs.core.get.call(null,offer,new cljs.core.Keyword(null,"output","output",-1105869043)),(- output_delta)),new cljs.core.Keyword(null,"right","right",-452581833),model_change.call(null,final_holding,output_delta)], null));
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),model_change.call(null,selected_initial_holding,(- initial_quantity)),new cljs.core.Keyword(null,"right","right",-452581833),model_change.call(null,final_holding,initial_quantity)], null)], null);
}
});
