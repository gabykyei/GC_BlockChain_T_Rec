// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.exchanges');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('mktplace.components.holdings');
goog.require('mktplace.service.participant');
goog.require('mktplace.service.offer');
goog.require('sawtooth.math');
goog.require('sablono.core');
goog.require('mktplace.components.participants');
goog.require('mktplace.components.format');
goog.require('sawtooth.router');
goog.require('mktplace.routes');
goog.require('sawtooth.ledger.keys');
goog.require('mktplace.service.exchange');
goog.require('mktplace.transactions');
goog.require('sawtooth.utils');
goog.require('om.core');
goog.require('sawtooth.components.core');
mktplace.components.exchanges.with_participants = (function mktplace$components$exchanges$with_participants(participants){
return (function (exchange){
return cljs.core.assoc.call(null,exchange,new cljs.core.Keyword(null,"payee","payee",666449044),sawtooth.utils.first_by.call(null,participants,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,exchange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"creator","creator",-1069241724)], null))),new cljs.core.Keyword(null,"payer","payer",443929743),sawtooth.utils.first_by.call(null,participants,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,exchange,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sellOffer","sellOffer",-1154526854),new cljs.core.Keyword(null,"creator","creator",-1069241724)], null))));
});
});
mktplace.components.exchanges.with_asset_names = (function mktplace$components$exchanges$with_asset_names(assets){
return (function (exchange){
return cljs.core.assoc.call(null,exchange,new cljs.core.Keyword(null,"input-name","input-name",323608185),mktplace.components.format.asset_name_by_holding.call(null,assets,cljs.core.get.call(null,exchange,new cljs.core.Keyword(null,"input","input",556931961))),new cljs.core.Keyword(null,"output-name","output-name",-1769107767),mktplace.components.format.asset_name_by_holding.call(null,assets,cljs.core.get.call(null,exchange,new cljs.core.Keyword(null,"output","output",-1105869043))));
});
});
mktplace.components.exchanges.exchange_row = (function mktplace$components$exchanges$exchange_row(p__30452){
var map__30467 = p__30452;
var map__30467__$1 = ((((!((map__30467 == null)))?((((map__30467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30467):map__30467);
var txn = map__30467__$1;
var id = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var input_name = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"input-name","input-name",323608185));
var output_name = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var payee = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"payee","payee",666449044));
var payer = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"payer","payer",443929743));
var amount = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var f = sawtooth.math.ratio__GT_fraction.call(null,cljs.core.get_in.call(null,txn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sellOffer","sellOffer",-1154526854),new cljs.core.Keyword(null,"ratio","ratio",-926560044)], null)));
return React.createElement("tr",{"key": id, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sawtooth.components.core.classes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"failed","failed",-1397425762).cljs$core$IFn$_invoke$arity$1(txn),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(txn)], null))], null))},React.createElement("td",null,(function (){var attrs30471 = (amount * sawtooth.math.denominator.call(null,f));
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs30471))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["amount"], null)], null),attrs30471)):{"className": "amount"}),((cljs.core.map_QMARK_.call(null,attrs30471))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30471)], null)));
})()," ",(function (){var attrs30472 = input_name;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs30472))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["type"], null)], null),attrs30472)):{"className": "type"}),((cljs.core.map_QMARK_.call(null,attrs30472))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30472)], null)));
})(),React.createElement("br",null),(function (){var attrs30475 = (cljs.core.truth_(payee)?mktplace.components.participants.participant_link.call(null,payee):"Unknown Participant");
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs30475))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["participant"], null)], null),attrs30475)):{"className": "participant"}),((cljs.core.map_QMARK_.call(null,attrs30475))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30475)], null)));
})()),React.createElement("td",{"className": "text-center for-column"},"for"),React.createElement("td",null,(function (){var attrs30476 = (amount * sawtooth.math.numerator.call(null,f));
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs30476))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["amount"], null)], null),attrs30476)):{"className": "amount"}),((cljs.core.map_QMARK_.call(null,attrs30476))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30476)], null)));
})()," ",(function (){var attrs30477 = output_name;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs30477))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["type"], null)], null),attrs30477)):{"className": "type"}),((cljs.core.map_QMARK_.call(null,attrs30477))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30477)], null)));
})(),React.createElement("br",null),(function (){var attrs30480 = (cljs.core.truth_(payer)?mktplace.components.participants.participant_link.call(null,payer):"Unknown Participant");
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs30480))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["participant"], null)], null),attrs30480)):{"className": "participant"}),((cljs.core.map_QMARK_.call(null,attrs30480))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30480)], null)));
})()));
});
mktplace.components.exchanges.exchange_table = (function mktplace$components$exchanges$exchange_table(p__30481,owner){
var map__30489 = p__30481;
var map__30489__$1 = ((((!((map__30489 == null)))?((((map__30489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30489):map__30489);
var exchanges = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941));
var participants = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"participants","participants",673603367));
var assets = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var title = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"title","title",636505583),"Historic Exchanges");
if(typeof mktplace.components.exchanges.t_mktplace$components$exchanges30491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.exchanges.t_mktplace$components$exchanges30491 = (function (exchange_table,p__30481,owner,map__30489,exchanges,participants,assets,title,meta30492){
this.exchange_table = exchange_table;
this.p__30481 = p__30481;
this.owner = owner;
this.map__30489 = map__30489;
this.exchanges = exchanges;
this.participants = participants;
this.assets = assets;
this.title = title;
this.meta30492 = meta30492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.exchanges.t_mktplace$components$exchanges30491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30489,map__30489__$1,exchanges,participants,assets,title){
return (function (_30493,meta30492__$1){
var self__ = this;
var _30493__$1 = this;
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30491(self__.exchange_table,self__.p__30481,self__.owner,self__.map__30489,self__.exchanges,self__.participants,self__.assets,self__.title,meta30492__$1));
});})(map__30489,map__30489__$1,exchanges,participants,assets,title))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30489,map__30489__$1,exchanges,participants,assets,title){
return (function (_30493){
var self__ = this;
var _30493__$1 = this;
return self__.meta30492;
});})(map__30489,map__30489__$1,exchanges,participants,assets,title))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30491.prototype.om$core$IRender$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30491.prototype.om$core$IRender$render$arity$1 = ((function (map__30489,map__30489__$1,exchanges,participants,assets,title){
return (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
return React.createElement("div",null,(function (){var attrs30494 = self__.title;
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs30494))?sablono.interpreter.attributes.call(null,attrs30494):null),((cljs.core.map_QMARK_.call(null,attrs30494))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30494)], null)));
})(),React.createElement("table",{"className": "table exchange-table"},(function (){var attrs30495 = (((cljs.core.count.call(null,self__.exchanges) > (0)))?cljs.core.map.call(null,cljs.core.comp.call(null,mktplace.components.exchanges.exchange_row,mktplace.components.exchanges.with_asset_names.call(null,self__.assets),mktplace.components.exchanges.with_participants.call(null,self__.participants)),self__.exchanges):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-center","td.text-center",-860992628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(3)], null),"No Exchanges"], null)], null));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs30495))?sablono.interpreter.attributes.call(null,attrs30495):null),((cljs.core.map_QMARK_.call(null,attrs30495))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30495)], null)));
})()));
});})(map__30489,map__30489__$1,exchanges,participants,assets,title))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30491.getBasis = ((function (map__30489,map__30489__$1,exchanges,participants,assets,title){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"exchange-table","exchange-table",-311056024,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exchanges","exchanges",876172586,null),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"title","title",-2017930186,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"title","title",-2017930186,null),"Historic Exchanges"], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__30481","p__30481",-1882341298,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__30489","map__30489",-658073189,null),new cljs.core.Symbol(null,"exchanges","exchanges",876172586,null),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"meta30492","meta30492",-750744378,null)], null);
});})(map__30489,map__30489__$1,exchanges,participants,assets,title))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30491.cljs$lang$type = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30491.cljs$lang$ctorStr = "mktplace.components.exchanges/t_mktplace$components$exchanges30491";

mktplace.components.exchanges.t_mktplace$components$exchanges30491.cljs$lang$ctorPrWriter = ((function (map__30489,map__30489__$1,exchanges,participants,assets,title){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.exchanges/t_mktplace$components$exchanges30491");
});})(map__30489,map__30489__$1,exchanges,participants,assets,title))
;

mktplace.components.exchanges.__GT_t_mktplace$components$exchanges30491 = ((function (map__30489,map__30489__$1,exchanges,participants,assets,title){
return (function mktplace$components$exchanges$exchange_table_$___GT_t_mktplace$components$exchanges30491(exchange_table__$1,p__30481__$1,owner__$1,map__30489__$2,exchanges__$1,participants__$1,assets__$1,title__$1,meta30492){
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30491(exchange_table__$1,p__30481__$1,owner__$1,map__30489__$2,exchanges__$1,participants__$1,assets__$1,title__$1,meta30492));
});})(map__30489,map__30489__$1,exchanges,participants,assets,title))
;

}

return (new mktplace.components.exchanges.t_mktplace$components$exchanges30491(mktplace$components$exchanges$exchange_table,p__30481,owner,map__30489__$1,exchanges,participants,assets,title,null));
});
mktplace.components.exchanges.holding_by_id = (function mktplace$components$exchanges$holding_by_id(holdings,id){
return sawtooth.utils.first_by.call(null,holdings,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
mktplace.components.exchanges.match_holdings_by_asset = (function mktplace$components$exchanges$match_holdings_by_asset(holdings,holding_to_match){
return cljs.core.filter.call(null,(function (p1__30496_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(holding_to_match),new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(p1__30496_SHARP_));
}),holdings);
});
mktplace.components.exchanges.holdings_to_dropdown_items = (function mktplace$components$exchanges$holdings_to_dropdown_items(holdings){
return cljs.core.map.call(null,(function (p__30500){
var map__30501 = p__30500;
var map__30501__$1 = ((((!((map__30501 == null)))?((((map__30501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30501):map__30501);
var holding = map__30501__$1;
var holding_id = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var holding_name = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),holding_id,new cljs.core.Keyword(null,"label","label",1718410804),holding_name,new cljs.core.Keyword(null,"value","value",305978217),holding], null);
}),holdings);
});
mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_ = (function mktplace$components$exchanges$are_modeled_holdings_valid_QMARK_(var_args){
var args30503 = [];
var len__7157__auto___30509 = arguments.length;
var i__7158__auto___30510 = (0);
while(true){
if((i__7158__auto___30510 < len__7157__auto___30509)){
args30503.push((arguments[i__7158__auto___30510]));

var G__30511 = (i__7158__auto___30510 + (1));
i__7158__auto___30510 = G__30511;
continue;
} else {
}
break;
}

var G__30505 = args30503.length;
switch (G__30505) {
case 2:
return mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30503.length)].join('')));

}
});

mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (participant_holdings,state){
return mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.call(null,participant_holdings,null,state);
});

mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (participant_holdings,offers,p__30506){
var map__30507 = p__30506;
var map__30507__$1 = ((((!((map__30507 == null)))?((((map__30507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30507):map__30507);
var initial_liability = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943));
var final_liability = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711));
var quantity = cljs.core.get.call(null,map__30507__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var initial_holding = mktplace.components.exchanges.holding_by_id.call(null,participant_holdings,initial_liability);
var final_holding = mktplace.components.exchanges.holding_by_id.call(null,participant_holdings,final_liability);
var modeled_holdings = mktplace.service.exchange.compute_model_holdings.call(null,offers,initial_holding,final_holding,quantity);
return cljs.core.reduce.call(null,((function (initial_holding,final_holding,modeled_holdings,map__30507,map__30507__$1,initial_liability,final_liability,quantity){
return (function (valid_QMARK_,pair){
var and__6075__auto__ = valid_QMARK_;
if(cljs.core.truth_(and__6075__auto__)){
return (((0) <= cljs.core.get_in.call(null,pair,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"count","count",2139924085)], null)))) && (((0) <= cljs.core.get_in.call(null,pair,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"count","count",2139924085)], null))));
} else {
return and__6075__auto__;
}
});})(initial_holding,final_holding,modeled_holdings,map__30507,map__30507__$1,initial_liability,final_liability,quantity))
,true,modeled_holdings);
});

mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.cljs$lang$maxFixedArity = 3;
mktplace.components.exchanges.is_valid_exchange_QMARK_ = (function mktplace$components$exchanges$is_valid_exchange_QMARK_(app_state,p__30513){
var map__30516 = p__30513;
var map__30516__$1 = ((((!((map__30516 == null)))?((((map__30516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30516):map__30516);
var state = map__30516__$1;
var initial_liability = cljs.core.get.call(null,map__30516__$1,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943));
var final_liability = cljs.core.get.call(null,map__30516__$1,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711));
var quantity = cljs.core.get.call(null,map__30516__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var first_offer = cljs.core.first.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null)));
var and__6075__auto__ = initial_liability;
if(cljs.core.truth_(and__6075__auto__)){
var and__6075__auto____$1 = final_liability;
if(cljs.core.truth_(and__6075__auto____$1)){
var and__6075__auto____$2 = ((cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"minimum","minimum",-1621006059)) <= quantity)) && ((quantity <= cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"maximum","maximum",573880714))));
if(and__6075__auto____$2){
var and__6075__auto____$3 = mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"holdings","holdings",195829975)], null)),cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null)),state);
if(cljs.core.truth_(and__6075__auto____$3)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-holding","new-holding",-145550034),final_liability)){
return mktplace.components.format.valid_object_name_QMARK_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-final-holding","new-final-holding",-424265537),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return true;
}
} else {
return and__6075__auto____$3;
}
} else {
return and__6075__auto____$2;
}
} else {
return and__6075__auto____$1;
}
} else {
return and__6075__auto__;
}
});
mktplace.components.exchanges.direction_label = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output","output",-1105869043),"Input",new cljs.core.Keyword(null,"input","input",556931961),"Output"], null);
mktplace.components.exchanges.input_direction_label = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ouput","ouput",1267005875),"output",new cljs.core.Keyword(null,"input","input",556931961),"input"], null);
mktplace.components.exchanges.add_offer_modal = (function mktplace$components$exchanges$add_offer_modal(p__30518,owner){
var map__30533 = p__30518;
var map__30533__$1 = ((((!((map__30533 == null)))?((((map__30533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30533):map__30533);
var map__30534 = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"offers","offers",796187776));
var map__30534__$1 = ((((!((map__30534 == null)))?((((map__30534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);
var offers = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var offer_count = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var on_close_fn = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"on-close-fn","on-close-fn",-73580697));
var on_select_fn = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"on-select-fn","on-select-fn",-498685964));
var direction = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var asset_id = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"asset-id","asset-id",249736185));
var participant = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var assets = cljs.core.get.call(null,map__30533__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
if(typeof mktplace.components.exchanges.t_mktplace$components$exchanges30537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.exchanges.t_mktplace$components$exchanges30537 = (function (asset_id,map__30534,owner,direction,p__30518,offers,on_close_fn,assets,participant,map__30533,on_select_fn,offer_count,add_offer_modal,meta30538){
this.asset_id = asset_id;
this.map__30534 = map__30534;
this.owner = owner;
this.direction = direction;
this.p__30518 = p__30518;
this.offers = offers;
this.on_close_fn = on_close_fn;
this.assets = assets;
this.participant = participant;
this.map__30533 = map__30533;
this.on_select_fn = on_select_fn;
this.offer_count = offer_count;
this.add_offer_modal = add_offer_modal;
this.meta30538 = meta30538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (_30539,meta30538__$1){
var self__ = this;
var _30539__$1 = this;
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30537(self__.asset_id,self__.map__30534,self__.owner,self__.direction,self__.p__30518,self__.offers,self__.on_close_fn,self__.assets,self__.participant,self__.map__30533,self__.on_select_fn,self__.offer_count,self__.add_offer_modal,meta30538__$1));
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (_30539){
var self__ = this;
var _30539__$1 = this;
return self__.meta30538;
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.om$core$IWillMount$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (_){
var self__ = this;
var ___$1 = this;
return mktplace.service.offer.exchange_offers_with.call(null,self__.participant,cljs.core.PersistentArrayMap.fromArray([self__.direction,self__.asset_id], true, false));
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.om$core$IWillUnmount$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (_){
var self__ = this;
var ___$1 = this;
return mktplace.service.offer.clear_exchange_offers_with.call(null);
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.om$core$IRender$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.prototype.om$core$IRender$render$arity$1 = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (_){
var self__ = this;
var ___$1 = this;
return sawtooth.components.core.modal_scaffold.call(null,self__.on_close_fn,(function (){var attrs30540 = goog.string.format("Insert an %s Offer",mktplace.components.exchanges.direction_label.call(null,self__.direction));
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs30540))?sablono.interpreter.attributes.call(null,attrs30540):null),((cljs.core.map_QMARK_.call(null,attrs30540))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30540)], null)));
})(),React.createElement("div",null,React.createElement("p",null,"Select an offer."),(((!((self__.offers == null))) && (cljs.core.empty_QMARK_.call(null,self__.offers)))?(function (){var attrs30543 = goog.string.format("No offers have %s as %s.",mktplace.components.format.first_name.call(null,self__.assets,self__.asset_id,"unknown"),mktplace.components.exchanges.input_direction_label.call(null,self__.direction).toLowerCase());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30543))?sablono.interpreter.attributes.call(null,attrs30543):null),((cljs.core.map_QMARK_.call(null,attrs30543))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30543)], null)));
})():(function (){var attrs30544 = cljs.core.map.call(null,((function (___$1,map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (___$1,map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

self__.on_select_fn.call(null,o);

return self__.on_close_fn.call(null);
});})(___$1,map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
], null),(function (){var map__30545 = sawtooth.math.ratio__GT_fraction.call(null,cljs.core.get.call(null,o,new cljs.core.Keyword(null,"ratio","ratio",-926560044)));
var map__30545__$1 = ((((!((map__30545 == null)))?((((map__30545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545):map__30545);
var input_amount = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"denominator","denominator",-804365096));
var output_amount = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"numerator","numerator",-160761104));
return goog.string.format("%s %s for %s %s",input_amount,mktplace.components.format.asset_name_by_holding.call(null,self__.assets,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(o)),output_amount,mktplace.components.format.asset_name_by_holding.call(null,self__.assets,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(o)));
})()], null);
});})(___$1,map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
,self__.offers);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30544))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-group"], null)], null),attrs30544)):{"className": "list-group"}),((cljs.core.map_QMARK_.call(null,attrs30544))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30544)], null)));
})())));
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.getBasis = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asset-id","asset-id",1890267712,null),new cljs.core.Symbol(null,"map__30534","map__30534",-612603165,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"p__30518","p__30518",1741409637,null),new cljs.core.Symbol(null,"offers","offers",-1858247993,null),new cljs.core.Symbol(null,"on-close-fn","on-close-fn",1566950830,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Symbol(null,"map__30533","map__30533",-41257062,null),new cljs.core.Symbol(null,"on-select-fn","on-select-fn",1141845563,null),new cljs.core.Symbol(null,"offer-count","offer-count",1189771645,null),cljs.core.with_meta(new cljs.core.Symbol(null,"add-offer-modal","add-offer-modal",-2044906018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-close-fn","on-close-fn",1566950830,null),new cljs.core.Symbol(null,"on-select-fn","on-select-fn",1141845563,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"asset-id","asset-id",1890267712,null),new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"offers","offers",-1858247993,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"offer-count","offer-count",1189771645,null),new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"offers","offers",796187776)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"meta30538","meta30538",1476811510,null)], null);
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.cljs$lang$type = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30537.cljs$lang$ctorStr = "mktplace.components.exchanges/t_mktplace$components$exchanges30537";

mktplace.components.exchanges.t_mktplace$components$exchanges30537.cljs$lang$ctorPrWriter = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.exchanges/t_mktplace$components$exchanges30537");
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

mktplace.components.exchanges.__GT_t_mktplace$components$exchanges30537 = ((function (map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets){
return (function mktplace$components$exchanges$add_offer_modal_$___GT_t_mktplace$components$exchanges30537(asset_id__$1,map__30534__$2,owner__$1,direction__$1,p__30518__$1,offers__$1,on_close_fn__$1,assets__$1,participant__$1,map__30533__$2,on_select_fn__$1,offer_count__$1,add_offer_modal__$1,meta30538){
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30537(asset_id__$1,map__30534__$2,owner__$1,direction__$1,p__30518__$1,offers__$1,on_close_fn__$1,assets__$1,participant__$1,map__30533__$2,on_select_fn__$1,offer_count__$1,add_offer_modal__$1,meta30538));
});})(map__30533,map__30533__$1,map__30534,map__30534__$1,offers,offer_count,on_close_fn,on_select_fn,direction,asset_id,participant,assets))
;

}

return (new mktplace.components.exchanges.t_mktplace$components$exchanges30537(asset_id,map__30534__$1,owner,direction,p__30518,offers,on_close_fn,assets,participant,map__30533__$1,on_select_fn,offer_count,mktplace$components$exchanges$add_offer_modal,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.exchanges.holding_pair_row = (function mktplace$components$exchanges$holding_pair_row(participant,assets,participants,p__30547){
var map__30553 = p__30547;
var map__30553__$1 = ((((!((map__30553 == null)))?((((map__30553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30553):map__30553);
var left = cljs.core.get.call(null,map__30553__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__30553__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var participant_id = cljs.core.get.call(null,participant,new cljs.core.Keyword(null,"id","id",-1388402092));
var left_creator = cljs.core.get.call(null,left,new cljs.core.Keyword(null,"creator","creator",-1069241724));
var right_creator = cljs.core.get.call(null,right,new cljs.core.Keyword(null,"creator","creator",-1069241724));
var left_creator__$1 = ((cljs.core.not_EQ_.call(null,left_creator,participant_id))?mktplace.components.format.participant_display_name.call(null,participants,left_creator):null);
var right_creator__$1 = ((cljs.core.not_EQ_.call(null,right_creator,participant_id))?mktplace.components.format.participant_display_name.call(null,participants,right_creator):null);
return React.createElement("tr",{"key": [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(left)),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(right))].join('')},(function (){var attrs30555 = (cljs.core.truth_(left)?om.core.build.call(null,mktplace.components.holdings.holding_detail,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"participant-name","participant-name",-1813384843),left_creator__$1,new cljs.core.Keyword(null,"holding","holding",1269510599),left], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"No Initial Holding"], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30555))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding"], null)], null),attrs30555)):{"className": "holding"}),((cljs.core.map_QMARK_.call(null,attrs30555))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30555)], null)));
})(),(function (){var attrs30556 = sawtooth.components.core.nbsp;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30556))?sablono.interpreter.attributes.call(null,attrs30556):null),((cljs.core.map_QMARK_.call(null,attrs30556))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30556)], null)));
})(),(function (){var attrs30557 = (cljs.core.truth_(right)?om.core.build.call(null,mktplace.components.holdings.holding_detail,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"participant-name","participant-name",-1813384843),right_creator__$1,new cljs.core.Keyword(null,"holding","holding",1269510599),right], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",350285524),"No Final Holding"], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30557))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding"], null)], null),attrs30557)):{"className": "holding"}),((cljs.core.map_QMARK_.call(null,attrs30557))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30557)], null)));
})());
});
mktplace.components.exchanges.modeled_holding_table = (function mktplace$components$exchanges$modeled_holding_table(p__30558,owner){
var map__30572 = p__30558;
var map__30572__$1 = ((((!((map__30572 == null)))?((((map__30572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30572):map__30572);
var participant = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var assets = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var participants = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"participants","participants",673603367));
var offers = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"offers","offers",796187776));
var initial_holding = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"initial-holding","initial-holding",939786507));
var final_holding = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"final-holding","final-holding",1688782034));
var quantity = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
if(typeof mktplace.components.exchanges.t_mktplace$components$exchanges30574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.exchanges.t_mktplace$components$exchanges30574 = (function (quantity,modeled_holding_table,owner,offers,map__30572,participants,assets,initial_holding,participant,p__30558,final_holding,meta30575){
this.quantity = quantity;
this.modeled_holding_table = modeled_holding_table;
this.owner = owner;
this.offers = offers;
this.map__30572 = map__30572;
this.participants = participants;
this.assets = assets;
this.initial_holding = initial_holding;
this.participant = participant;
this.p__30558 = p__30558;
this.final_holding = final_holding;
this.meta30575 = meta30575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.exchanges.t_mktplace$components$exchanges30574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity){
return (function (_30576,meta30575__$1){
var self__ = this;
var _30576__$1 = this;
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30574(self__.quantity,self__.modeled_holding_table,self__.owner,self__.offers,self__.map__30572,self__.participants,self__.assets,self__.initial_holding,self__.participant,self__.p__30558,self__.final_holding,meta30575__$1));
});})(map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity){
return (function (_30576){
var self__ = this;
var _30576__$1 = this;
return self__.meta30575;
});})(map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30574.prototype.om$core$IRender$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30574.prototype.om$core$IRender$render$arity$1 = ((function (map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity){
return (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
var map__30577 = sawtooth.math.ratio__GT_fraction.call(null,cljs.core.get.call(null,cljs.core.first.call(null,self__.offers),new cljs.core.Keyword(null,"ratio","ratio",-926560044)));
var map__30577__$1 = ((((!((map__30577 == null)))?((((map__30577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30577):map__30577);
var input_amount = cljs.core.get.call(null,map__30577__$1,new cljs.core.Keyword(null,"denominator","denominator",-804365096));
var modeled_holdings = mktplace.service.exchange.compute_model_holdings.call(null,self__.offers,self__.initial_holding,self__.final_holding,(input_amount * self__.quantity));
return React.createElement("table",{"className": "table-basic exchange-model-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Input"),(function (){var attrs30582 = sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"arrow-right","arrow-right",1734868482));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30582))?sablono.interpreter.attributes.call(null,attrs30582):null),((cljs.core.map_QMARK_.call(null,attrs30582))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30582)], null)));
})(),React.createElement("th",{"className": "pull-right"},"Output"))),(function (){var attrs30579 = cljs.core.map.call(null,cljs.core.partial.call(null,mktplace.components.exchanges.holding_pair_row,self__.participant,self__.assets,self__.participants),modeled_holdings);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs30579))?sablono.interpreter.attributes.call(null,attrs30579):null),((cljs.core.map_QMARK_.call(null,attrs30579))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30579)], null)));
})());
});})(map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30574.getBasis = ((function (map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"quantity","quantity",-288519167,null),cljs.core.with_meta(new cljs.core.Symbol(null,"modeled-holding-table","modeled-holding-table",-983624031,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Symbol(null,"offers","offers",-1858247993,null),new cljs.core.Symbol(null,"initial-holding","initial-holding",-1714649262,null),new cljs.core.Symbol(null,"final-holding","final-holding",-965653735,null),new cljs.core.Symbol(null,"quantity","quantity",-288519167,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"offers","offers",-1858247993,null),new cljs.core.Symbol(null,"map__30572","map__30572",-1966856087,null),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"initial-holding","initial-holding",-1714649262,null),new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Symbol(null,"p__30558","p__30558",339249432,null),new cljs.core.Symbol(null,"final-holding","final-holding",-965653735,null),new cljs.core.Symbol(null,"meta30575","meta30575",2091797294,null)], null);
});})(map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30574.cljs$lang$type = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30574.cljs$lang$ctorStr = "mktplace.components.exchanges/t_mktplace$components$exchanges30574";

mktplace.components.exchanges.t_mktplace$components$exchanges30574.cljs$lang$ctorPrWriter = ((function (map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.exchanges/t_mktplace$components$exchanges30574");
});})(map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity))
;

mktplace.components.exchanges.__GT_t_mktplace$components$exchanges30574 = ((function (map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity){
return (function mktplace$components$exchanges$modeled_holding_table_$___GT_t_mktplace$components$exchanges30574(quantity__$1,modeled_holding_table__$1,owner__$1,offers__$1,map__30572__$2,participants__$1,assets__$1,initial_holding__$1,participant__$1,p__30558__$1,final_holding__$1,meta30575){
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30574(quantity__$1,modeled_holding_table__$1,owner__$1,offers__$1,map__30572__$2,participants__$1,assets__$1,initial_holding__$1,participant__$1,p__30558__$1,final_holding__$1,meta30575));
});})(map__30572,map__30572__$1,participant,assets,participants,offers,initial_holding,final_holding,quantity))
;

}

return (new mktplace.components.exchanges.t_mktplace$components$exchanges30574(quantity,mktplace$components$exchanges$modeled_holding_table,owner,offers,map__30572__$1,participants,assets,initial_holding,participant,p__30558,final_holding,null));
});
mktplace.components.exchanges.holding_field = (function mktplace$components$exchanges$holding_field(owner,holding){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(holding))){
return holding;
} else {
if((holding == null)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),sawtooth.components.core.basic_text_field.call(null,owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-final-holding","new-final-holding",-424265537),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Holding Name",new cljs.core.Keyword(null,"class","class",-2030961996),"input-sm new-holding"], null)),new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"creator","creator",-1069241724),new cljs.core.Keyword(null,"creator","creator",-1069241724).cljs$core$IFn$_invoke$arity$1(holding),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(holding)], null);

}
}
});
mktplace.components.exchanges.exchange_form = (function mktplace$components$exchanges$exchange_form(p__30585,owner){
var map__30610 = p__30585;
var map__30610__$1 = ((((!((map__30610 == null)))?((((map__30610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30610):map__30610);
var data = map__30610__$1;
var vec__30611 = cljs.core.get.call(null,map__30610__$1,new cljs.core.Keyword(null,"route","route",329891309));
var _ = cljs.core.nth.call(null,vec__30611,(0),null);
var map__30612 = cljs.core.nth.call(null,vec__30611,(1),null);
var map__30612__$1 = ((((!((map__30612 == null)))?((((map__30612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30612):map__30612);
var offer_id = cljs.core.get.call(null,map__30612__$1,new cljs.core.Keyword(null,"initial-offer-id","initial-offer-id",1383510928));
var assets = cljs.core.get.call(null,map__30610__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var participant = cljs.core.get.call(null,map__30610__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var participants = cljs.core.get.call(null,map__30610__$1,new cljs.core.Keyword(null,"participants","participants",673603367));
if(typeof mktplace.components.exchanges.t_mktplace$components$exchanges30615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.exchanges.t_mktplace$components$exchanges30615 = (function (owner,data,_,participants,assets,map__30610,vec__30611,participant,p__30585,exchange_form,offer_id,map__30612,meta30616){
this.owner = owner;
this.data = data;
this._ = _;
this.participants = participants;
this.assets = assets;
this.map__30610 = map__30610;
this.vec__30611 = vec__30611;
this.participant = participant;
this.p__30585 = p__30585;
this.exchange_form = exchange_form;
this.offer_id = offer_id;
this.map__30612 = map__30612;
this.meta30616 = meta30616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (_30617,meta30616__$1){
var self__ = this;
var _30617__$1 = this;
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30615(self__.owner,self__.data,self__._,self__.participants,self__.assets,self__.map__30610,self__.vec__30611,self__.participant,self__.p__30585,self__.exchange_form,self__.offer_id,self__.map__30612,meta30616__$1));
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (_30617){
var self__ = this;
var _30617__$1 = this;
return self__.meta30616;
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IInitState$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(1)], null);
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IWillMount$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (___$1){
var self__ = this;
var ___$2 = this;
if((cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null)) == null)){
return mktplace.service.offer.exchange_offer.call(null,self__.participant,self__.offer_id);
} else {
return null;
}
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IWillUnmount$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return mktplace.service.offer.clear_exchange_offers.call(null);
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IRenderState$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (___$1,p__30618){
var self__ = this;
var map__30619 = p__30618;
var map__30619__$1 = ((((!((map__30619 == null)))?((((map__30619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30619):map__30619);
var state = map__30619__$1;
var quantity = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var initial_liability = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943));
var final_liability = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711));
var ___$2 = this;
var temp__4657__auto__ = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"exchange","exchange",843073210));
if(cljs.core.truth_(temp__4657__auto__)){
var exchange_state = temp__4657__auto__;
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var first_offer = temp__4655__auto__;
var quantity__$1 = (function (){var or__6087__auto__ = quantity;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (0);
}
})();
var offers = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"offers","offers",796187776)], null));
var last_offer = cljs.core.last.call(null,offers);
var participant_id = cljs.core.get.call(null,self__.participant,new cljs.core.Keyword(null,"id","id",-1388402092));
var participant_holdings = cljs.core.get.call(null,self__.participant,new cljs.core.Keyword(null,"holdings","holdings",195829975));
var offer_input_holding = cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"input","input",556931961));
var offer_output_holding = cljs.core.get.call(null,last_offer,new cljs.core.Keyword(null,"output","output",-1105869043));
var input_holding_options = mktplace.components.exchanges.holdings_to_dropdown_items.call(null,mktplace.components.exchanges.match_holdings_by_asset.call(null,participant_holdings,offer_input_holding));
var initial_holding = mktplace.components.exchanges.holding_by_id.call(null,participant_holdings,initial_liability);
var final_holding = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new-holding","new-holding",-145550034),final_liability))?cljs.core.get.call(null,state,new cljs.core.Keyword(null,"new-final-holding","new-final-holding",-424265537)):mktplace.components.exchanges.holding_by_id.call(null,participant_holdings,final_liability));
var output_holding_options = mktplace.components.exchanges.holdings_to_dropdown_items.call(null,mktplace.components.exchanges.match_holdings_by_asset.call(null,participant_holdings,offer_output_holding));
var insert_offer_fn = ((function (quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (offer){
var insert_offer = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297));
var is_output_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(insert_offer));
om.core.set_state_BANG_.call(null,self__.owner,((is_output_QMARK_)?new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943):new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711)),null);

return mktplace.service.offer.insert_exchange_offer.call(null,offer,is_output_QMARK_);
});})(quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;
var submit_handler = ((function (quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29654__auto__){
var form__29655__auto__ = om.core.get_node.call(null,self__.owner,"exchange-form");
var is_valid_QMARK___29656__auto__ = form__29655__auto__.checkValidity();
if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
e__29654__auto__.preventDefault();

mktplace.transactions.exchange.call(null,sawtooth.ledger.keys.get_key_pair.call(null),self__.participant,initial_liability,final_holding,offers,quantity__$1,((function (form__29655__auto__,is_valid_QMARK___29656__auto__,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (){
return sawtooth.router.push.call(null,mktplace.routes.offers_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null)));
});})(form__29655__auto__,is_valid_QMARK___29656__auto__,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
);
} else {
}

if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
return null;
} else {
return form__29655__auto__.reportValidity();
}
});})(quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;
var reset_handler = ((function (quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.router.push.call(null,mktplace.routes.offers_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null)));
});})(quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;
var attrs30621 = (function (){var temp__4657__auto____$1 = new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4657__auto____$1)){
var insert_offer = temp__4657__auto____$1;
return sawtooth.components.core.modal_container.call(null,insert_offer,mktplace.components.exchanges.add_offer_modal,cljs.core.merge.call(null,insert_offer,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"participant","participant",1962214029),self__.participant,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279)], null)),new cljs.core.Keyword(null,"offers","offers",796187776),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"offers","offers",796187776)], null)),new cljs.core.Keyword(null,"on-select-fn","on-select-fn",-498685964),insert_offer_fn,new cljs.core.Keyword(null,"on-close-fn","on-close-fn",-73580697),((function (insert_offer,temp__4657__auto____$1,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297),null);
});})(insert_offer,temp__4657__auto____$1,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null)));
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30621))?sablono.interpreter.attributes.call(null,attrs30621):null),((cljs.core.map_QMARK_.call(null,attrs30621))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("form",{"role": "form", "ref": "exchange-form", "onSubmit": submit_handler, "className": "exchange-form"},React.createElement("h4",null,"Execute Exchange"),React.createElement("div",{"className": "row"},React.createElement("div",{"role": "group", "className": "btn-group"},sablono.interpreter.interpret.call(null,sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943),"Initial Holding",input_holding_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null))),React.createElement("button",{"type": "button", "onClick": ((function (attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

var asset_id = cljs.core.get.call(null,offer_input_holding,new cljs.core.Keyword(null,"asset","asset",-280274466));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),asset_id], null));
});})(attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
, "className": "btn btn-default"},"+ Offer"),sablono.interpreter.interpret.call(null,((((1) < cljs.core.count.call(null,offers)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943),null);

return mktplace.service.offer.release_exchange_offer.call(null,cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"id","id",-1388402092)));
});})(attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null),"- Offer"], null):null)))),(function (){var attrs30624 = om.core.build.call(null,mktplace.components.exchanges.modeled_holding_table,cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.Keyword(null,"assets","assets",210278279)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offers","offers",796187776),offers,new cljs.core.Keyword(null,"initial-holding","initial-holding",939786507),initial_holding,new cljs.core.Keyword(null,"final-holding","final-holding",1688782034),mktplace.components.exchanges.holding_field.call(null,self__.owner,final_holding),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity__$1], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30624))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30624)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30624))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30624)], null)));
})(),React.createElement("div",{"className": "clearfix"},React.createElement("div",{"className": "row final-holding-ctrls"},(function (){var attrs30626 = ((cljs.core.not_EQ_.call(null,self__.offer_id,cljs.core.get.call(null,cljs.core.last.call(null,offers),new cljs.core.Keyword(null,"id","id",-1388402092))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711),null);

return mktplace.service.offer.release_exchange_offer.call(null,cljs.core.get.call(null,last_offer,new cljs.core.Keyword(null,"id","id",-1388402092)));
});})(attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null),"- Offer"], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30626))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-group"], null)], null),attrs30626)):{"className": "btn-group"}),((cljs.core.map_QMARK_.call(null,attrs30626))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("button",{"onClick": ((function (attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466))], null));
});})(attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
, "className": "btn btn-default"},"+ Offer"),sablono.interpreter.interpret.call(null,sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711),"Final Output Holding",cljs.core.concat.call(null,output_holding_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-holding","new-holding",-145550034),new cljs.core.Keyword(null,"label","label",1718410804),"New Holding",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-final-holding","new-final-holding",-424265537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466)),new cljs.core.Keyword(null,"creator","creator",-1069241724),participant_id], null));
});})(attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30626),React.createElement("button",{"onClick": ((function (attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466))], null));
});})(attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
, "className": "btn btn-default"},"+ Offer"),sablono.interpreter.interpret.call(null,sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711),"Final Output Holding",cljs.core.concat.call(null,output_holding_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-holding","new-holding",-145550034),new cljs.core.Keyword(null,"label","label",1718410804),"New Holding",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-final-holding","new-final-holding",-424265537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466)),new cljs.core.Keyword(null,"creator","creator",-1069241724),participant_id], null));
});})(attrs30626,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null)))], null)));
})()),(function (){var attrs30625 = sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),"Quantity",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"maximum","maximum",573880714)),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int,new cljs.core.Keyword(null,"help-text","help-text",1567653015),[cljs.core.str("Number of executions of "),cljs.core.str((cljs.core.truth_((function (){var and__6075__auto__ = cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(and__6075__auto__)){
return ((0) < cljs.core.count.call(null,cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"name","name",1843675177))));
} else {
return and__6075__auto__;
}
})())?cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"name","name",1843675177)):"Offer"))].join('')], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30625))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30625)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30625))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Accept",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.exchanges.is_valid_exchange_QMARK_.call(null,self__.data,state))], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_handler], null)], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30625),sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Accept",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.exchanges.is_valid_exchange_QMARK_.call(null,self__.data,state))], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_handler], null)], null)))], null)));
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30621),React.createElement("form",{"role": "form", "ref": "exchange-form", "onSubmit": submit_handler, "className": "exchange-form"},React.createElement("h4",null,"Execute Exchange"),React.createElement("div",{"className": "row"},React.createElement("div",{"role": "group", "className": "btn-group"},sablono.interpreter.interpret.call(null,sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943),"Initial Holding",input_holding_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null))),React.createElement("button",{"type": "button", "onClick": ((function (attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

var asset_id = cljs.core.get.call(null,offer_input_holding,new cljs.core.Keyword(null,"asset","asset",-280274466));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),asset_id], null));
});})(attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
, "className": "btn btn-default"},"+ Offer"),sablono.interpreter.interpret.call(null,((((1) < cljs.core.count.call(null,offers)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943),null);

return mktplace.service.offer.release_exchange_offer.call(null,cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"id","id",-1388402092)));
});})(attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null),"- Offer"], null):null)))),(function (){var attrs30629 = om.core.build.call(null,mktplace.components.exchanges.modeled_holding_table,cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.Keyword(null,"assets","assets",210278279)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offers","offers",796187776),offers,new cljs.core.Keyword(null,"initial-holding","initial-holding",939786507),initial_holding,new cljs.core.Keyword(null,"final-holding","final-holding",1688782034),mktplace.components.exchanges.holding_field.call(null,self__.owner,final_holding),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity__$1], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30629))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30629)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30629))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30629)], null)));
})(),React.createElement("div",{"className": "clearfix"},React.createElement("div",{"className": "row final-holding-ctrls"},(function (){var attrs30631 = ((cljs.core.not_EQ_.call(null,self__.offer_id,cljs.core.get.call(null,cljs.core.last.call(null,offers),new cljs.core.Keyword(null,"id","id",-1388402092))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711),null);

return mktplace.service.offer.release_exchange_offer.call(null,cljs.core.get.call(null,last_offer,new cljs.core.Keyword(null,"id","id",-1388402092)));
});})(attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null),"- Offer"], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30631))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-group"], null)], null),attrs30631)):{"className": "btn-group"}),((cljs.core.map_QMARK_.call(null,attrs30631))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("button",{"onClick": ((function (attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466))], null));
});})(attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
, "className": "btn btn-default"},"+ Offer"),sablono.interpreter.interpret.call(null,sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711),"Final Output Holding",cljs.core.concat.call(null,output_holding_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-holding","new-holding",-145550034),new cljs.core.Keyword(null,"label","label",1718410804),"New Holding",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-final-holding","new-final-holding",-424265537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466)),new cljs.core.Keyword(null,"creator","creator",-1069241724),participant_id], null));
});})(attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30631),React.createElement("button",{"onClick": ((function (attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"insert-offer","insert-offer",-499769297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466))], null));
});})(attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
, "className": "btn btn-default"},"+ Offer"),sablono.interpreter.interpret.call(null,sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711),"Final Output Holding",cljs.core.concat.call(null,output_holding_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-holding","new-holding",-145550034),new cljs.core.Keyword(null,"label","label",1718410804),"New Holding",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-final-holding","new-final-holding",-424265537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset","asset",-280274466),cljs.core.get.call(null,offer_output_holding,new cljs.core.Keyword(null,"asset","asset",-280274466)),new cljs.core.Keyword(null,"creator","creator",-1069241724),participant_id], null));
});})(attrs30631,attrs30621,quantity__$1,offers,last_offer,participant_id,participant_holdings,offer_input_holding,offer_output_holding,input_holding_options,initial_holding,final_holding,output_holding_options,insert_offer_fn,submit_handler,reset_handler,first_offer,temp__4655__auto__,exchange_state,temp__4657__auto__,___$2,map__30619,map__30619__$1,state,quantity,initial_liability,final_liability,map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn-group",new cljs.core.Keyword(null,"role","role",-736691072),"group"], null)))], null)));
})()),(function (){var attrs30630 = sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),"Quantity",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"maximum","maximum",573880714)),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int,new cljs.core.Keyword(null,"help-text","help-text",1567653015),[cljs.core.str("Number of executions of "),cljs.core.str((cljs.core.truth_((function (){var and__6075__auto__ = cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(and__6075__auto__)){
return ((0) < cljs.core.count.call(null,cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"name","name",1843675177))));
} else {
return and__6075__auto__;
}
})())?cljs.core.get.call(null,first_offer,new cljs.core.Keyword(null,"name","name",1843675177)):"Offer"))].join('')], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30630))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30630)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30630))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Accept",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.exchanges.is_valid_exchange_QMARK_.call(null,self__.data,state))], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_handler], null)], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30630),sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Accept",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.exchanges.is_valid_exchange_QMARK_.call(null,self__.data,state))], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_handler], null)], null)))], null)));
})()))], null)));
} else {
return React.createElement("div",{"className": "alert alert-danger"},"Unknown initial offer");
}
} else {
return null;
}
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.getBasis = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"map__30610","map__30610",1982315118,null),new cljs.core.Symbol(null,"vec__30611","vec__30611",-733900078,null),new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Symbol(null,"p__30585","p__30585",1670066548,null),cljs.core.with_meta(new cljs.core.Symbol(null,"exchange-form","exchange-form",1267937017,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"offer-id","offer-id",1127539418,null),new cljs.core.Keyword(null,"initial-offer-id","initial-offer-id",1383510928)], null)], null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"data","data",1407862150,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"offer-id","offer-id",1127539418,null),new cljs.core.Symbol(null,"map__30612","map__30612",2129087643,null),new cljs.core.Symbol(null,"meta30616","meta30616",301386124,null)], null);
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.cljs$lang$type = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30615.cljs$lang$ctorStr = "mktplace.components.exchanges/t_mktplace$components$exchanges30615";

mktplace.components.exchanges.t_mktplace$components$exchanges30615.cljs$lang$ctorPrWriter = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.exchanges/t_mktplace$components$exchanges30615");
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

mktplace.components.exchanges.__GT_t_mktplace$components$exchanges30615 = ((function (map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants){
return (function mktplace$components$exchanges$exchange_form_$___GT_t_mktplace$components$exchanges30615(owner__$1,data__$1,___$1,participants__$1,assets__$1,map__30610__$2,vec__30611__$1,participant__$1,p__30585__$1,exchange_form__$1,offer_id__$1,map__30612__$2,meta30616){
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30615(owner__$1,data__$1,___$1,participants__$1,assets__$1,map__30610__$2,vec__30611__$1,participant__$1,p__30585__$1,exchange_form__$1,offer_id__$1,map__30612__$2,meta30616));
});})(map__30610,map__30610__$1,data,vec__30611,_,map__30612,map__30612__$1,offer_id,assets,participant,participants))
;

}

return (new mktplace.components.exchanges.t_mktplace$components$exchanges30615(owner,data,_,participants,assets,map__30610__$1,vec__30611,participant,p__30585,mktplace$components$exchanges$exchange_form,offer_id,map__30612__$1,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.exchanges.PAGE_SIZE = (10);
mktplace.components.exchanges.load_exchanges = (function mktplace$components$exchanges$load_exchanges(state,page){
return mktplace.service.exchange.exchanges.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"limit","limit",-1355822363),mktplace.components.exchanges.PAGE_SIZE,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"assetId","assetId",-1083269875),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"holdingId","holdingId",-780403375),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"holding","holding",1269510599),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null));
});
mktplace.components.exchanges.exchange_page_fn = (function mktplace$components$exchanges$exchange_page_fn(data,owner){
return (function (page){
mktplace.components.exchanges.load_exchanges.call(null,data,page);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"page","page",849072397),page);
});
});
mktplace.components.exchanges.exchanges = (function mktplace$components$exchanges$exchanges(data,owner){
if(typeof mktplace.components.exchanges.t_mktplace$components$exchanges30639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.exchanges.t_mktplace$components$exchanges30639 = (function (exchanges,data,owner,meta30640){
this.exchanges = exchanges;
this.data = data;
this.owner = owner;
this.meta30640 = meta30640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30641,meta30640__$1){
var self__ = this;
var _30641__$1 = this;
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30639(self__.exchanges,self__.data,self__.owner,meta30640__$1));
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30641){
var self__ = this;
var _30641__$1 = this;
return self__.meta30640;
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IInitState$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IWillMount$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return mktplace.components.exchanges.load_exchanges.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397)));
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IWillUnmount$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return mktplace.service.exchange.clear_exchanges.call(null);
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IWillReceiveProps$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,next_state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.reduce.call(null,((function (___$1){
return (function (prev__29662__auto__,k__29663__auto__){
var k_path__29664__auto__ = ((cljs.core.vector_QMARK_.call(null,k__29663__auto__))?k__29663__auto__:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__29663__auto__], null));
var or__6087__auto__ = prev__29662__auto__;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,next_state,k_path__29664__auto__),cljs.core.get_in.call(null,om.core.get_props.call(null,self__.owner),k_path__29664__auto__));
}
});})(___$1))
,false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"selections","selections",-1277610233)], null)))){
return mktplace.components.exchanges.load_exchanges.call(null,next_state,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397)));
} else {
return null;
}
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IRenderState$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30639.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var exchanges__$1 = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var total = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),new cljs.core.Keyword(null,"count","count",2139924085)], null),(0));
var assets = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"assets","assets",210278279));
return React.createElement("div",{"className": "container-fluid"},(function (){var attrs30642 = om.core.build.call(null,mktplace.components.exchanges.exchange_table,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),exchanges__$1,new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(self__.data)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30642))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30642)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30642))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30642)], null)));
})(),(((mktplace.components.exchanges.PAGE_SIZE < total))?(function (){var attrs30643 = om.core.build.call(null,sawtooth.components.core.paging,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"total-items","total-items",-521030113),total,new cljs.core.Keyword(null,"items-per-page","items-per-page",1024404135),mktplace.components.exchanges.PAGE_SIZE,new cljs.core.Keyword(null,"go-to-page-fn","go-to-page-fn",-1555478667),mktplace.components.exchanges.exchange_page_fn.call(null,self__.data,self__.owner)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30643))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30643)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30643))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30643)], null)));
})():null));
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"exchanges","exchanges",876172586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30640","meta30640",-1647552450,null)], null);
});

mktplace.components.exchanges.t_mktplace$components$exchanges30639.cljs$lang$type = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30639.cljs$lang$ctorStr = "mktplace.components.exchanges/t_mktplace$components$exchanges30639";

mktplace.components.exchanges.t_mktplace$components$exchanges30639.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.exchanges/t_mktplace$components$exchanges30639");
});

mktplace.components.exchanges.__GT_t_mktplace$components$exchanges30639 = (function mktplace$components$exchanges$exchanges_$___GT_t_mktplace$components$exchanges30639(exchanges__$1,data__$1,owner__$1,meta30640){
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30639(exchanges__$1,data__$1,owner__$1,meta30640));
});

}

return (new mktplace.components.exchanges.t_mktplace$components$exchanges30639(mktplace$components$exchanges$exchanges,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.exchanges.is_valid_transfer_QMARK_ = (function mktplace$components$exchanges$is_valid_transfer_QMARK_(app_state,p__30644){
var map__30647 = p__30644;
var map__30647__$1 = ((((!((map__30647 == null)))?((((map__30647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30647):map__30647);
var state = map__30647__$1;
var initial_liability = cljs.core.get.call(null,map__30647__$1,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943));
var final_liability = cljs.core.get.call(null,map__30647__$1,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711));
var quantity = cljs.core.get.call(null,map__30647__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var and__6075__auto__ = ((0) < quantity);
if(and__6075__auto__){
var and__6075__auto____$1 = initial_liability;
if(cljs.core.truth_(and__6075__auto____$1)){
var and__6075__auto____$2 = final_liability;
if(cljs.core.truth_(and__6075__auto____$2)){
var and__6075__auto____$3 = cljs.core.not_EQ_.call(null,initial_liability,final_liability);
if(and__6075__auto____$3){
return mktplace.components.exchanges.are_modeled_holdings_valid_QMARK_.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"holdings","holdings",195829975)], null)),state);
} else {
return and__6075__auto____$3;
}
} else {
return and__6075__auto____$2;
}
} else {
return and__6075__auto____$1;
}
} else {
return and__6075__auto__;
}
});
/**
 * Returns the holdings restricted by the selection values.
 */
mktplace.components.exchanges.holdings_by_selections = (function mktplace$components$exchanges$holdings_by_selections(selections,holdings){
if(cljs.core.truth_(cljs.core.get.call(null,selections,new cljs.core.Keyword(null,"asset","asset",-280274466)))){
return cljs.core.filter.call(null,(function (p1__30649_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(p1__30649_SHARP_),cljs.core.get_in.call(null,selections,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));
}),holdings);
} else {
return holdings;
}
});
mktplace.components.exchanges.form_row = (function mktplace$components$exchanges$form_row(label,field){
return React.createElement("div",{"className": "row"},React.createElement("div",{"className": "col-xs-2"},(function (){var attrs30653 = label;
return cljs.core.apply.call(null,React.createElement,"label",((cljs.core.map_QMARK_.call(null,attrs30653))?sablono.interpreter.attributes.call(null,attrs30653):null),((cljs.core.map_QMARK_.call(null,attrs30653))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30653)], null)));
})()),(function (){var attrs30652 = field;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30652))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-10"], null)], null),attrs30652)):{"className": "col-xs-10"}),((cljs.core.map_QMARK_.call(null,attrs30652))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30652)], null)));
})());
});
mktplace.components.exchanges.transfer_form = (function mktplace$components$exchanges$transfer_form(data,owner){
var initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(1)], null);
if(typeof mktplace.components.exchanges.t_mktplace$components$exchanges30669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.exchanges.t_mktplace$components$exchanges30669 = (function (transfer_form,data,owner,initial_state,meta30670){
this.transfer_form = transfer_form;
this.data = data;
this.owner = owner;
this.initial_state = initial_state;
this.meta30670 = meta30670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.exchanges.t_mktplace$components$exchanges30669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (initial_state){
return (function (_30671,meta30670__$1){
var self__ = this;
var _30671__$1 = this;
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30669(self__.transfer_form,self__.data,self__.owner,self__.initial_state,meta30670__$1));
});})(initial_state))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (initial_state){
return (function (_30671){
var self__ = this;
var _30671__$1 = this;
return self__.meta30670;
});})(initial_state))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.prototype.om$core$IInitState$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.prototype.om$core$IInitState$init_state$arity$1 = ((function (initial_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.initial_state;
});})(initial_state))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.prototype.om$core$IRenderState$ = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.prototype.om$core$IRenderState$render_state$arity$2 = ((function (initial_state){
return (function (_,p__30672){
var self__ = this;
var map__30673 = p__30672;
var map__30673__$1 = ((((!((map__30673 == null)))?((((map__30673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30673):map__30673);
var state = map__30673__$1;
var initial_liability = cljs.core.get.call(null,map__30673__$1,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943));
var final_liability = cljs.core.get.call(null,map__30673__$1,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711));
var quantity = cljs.core.get.call(null,map__30673__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var selected_participant = cljs.core.get.call(null,map__30673__$1,new cljs.core.Keyword(null,"selected-participant","selected-participant",-714778797));
var ___$1 = this;
var map__30675 = self__.data;
var map__30675__$1 = ((((!((map__30675 == null)))?((((map__30675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30675):map__30675);
var participant = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var participants = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"participants","participants",673603367));
var selections = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var source_holdings = mktplace.components.exchanges.holdings_by_selections.call(null,selections,cljs.core.get.call(null,participant,new cljs.core.Keyword(null,"holdings","holdings",195829975)));
var target_holdings = (((selected_participant == null))?source_holdings:(function (){var temp__4655__auto__ = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transfer","transfer",327423400),new cljs.core.Keyword(null,"target-participant","target-participant",-571095342),new cljs.core.Keyword(null,"holdings","holdings",195829975)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var other_holding = temp__4655__auto__;
return mktplace.components.exchanges.holdings_by_selections.call(null,selections,other_holding);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Loading..."], null)], null);
}
})());
var initial_holding = mktplace.components.exchanges.holding_by_id.call(null,source_holdings,initial_liability);
var final_holding = mktplace.components.exchanges.holding_by_id.call(null,target_holdings,final_liability);
var submit_handler = ((function (map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state){
return (function (e__29654__auto__){
var form__29655__auto__ = om.core.get_node.call(null,self__.owner,"transfer-form");
var is_valid_QMARK___29656__auto__ = form__29655__auto__.checkValidity();
if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
e__29654__auto__.preventDefault();

mktplace.transactions.exchange.call(null,sawtooth.ledger.keys.get_key_pair.call(null),participant,initial_liability,final_liability,cljs.core.PersistentVector.EMPTY,quantity,((function (form__29655__auto__,is_valid_QMARK___29656__auto__,map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state){
return (function (){
return sawtooth.router.push.call(null,mktplace.routes.portfolio_path.call(null));
});})(form__29655__auto__,is_valid_QMARK___29656__auto__,map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state))
);
} else {
}

if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
return null;
} else {
return form__29655__auto__.reportValidity();
}
});})(map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state))
;
var cancel_handler = ((function (map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.router.push.call(null,mktplace.routes.portfolio_path.call(null));
});})(map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state))
;
return React.createElement("form",{"ref": "transfer-form", "onSubmit": submit_handler, "className": "form transfer-form"},React.createElement("h3",null,"Confirm Skill Set"),sablono.interpreter.interpret.call(null,mktplace.components.exchanges.form_row.call(null,"Source",sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"initial-liability","initial-liability",306262943),"Select a Record for this Skill set",mktplace.components.exchanges.holdings_to_dropdown_items.call(null,source_holdings)))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(initial_liability)?mktplace.components.exchanges.form_row.call(null,"Participant",sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"selected-participant","selected-participant",-714778797),"Self",cljs.core.map.call(null,((function (map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,cancel_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state){
return (function (p__30679){
var map__30680 = p__30679;
var map__30680__$1 = ((((!((map__30680 == null)))?((((map__30680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30680):map__30680);
var participant_id = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var participant_name = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),participant_name,new cljs.core.Keyword(null,"id","id",-1388402092),participant_id], null);
});})(map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,cancel_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state))
,participants),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,cancel_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state){
return (function (p1__30654_SHARP_){
if(!((p1__30654_SHARP_ == null))){
return mktplace.service.participant.transfer_target_participant.call(null,p1__30654_SHARP_);
} else {
return mktplace.service.participant.clear_transfer_target_participant.call(null);
}
});})(map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,cancel_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state))
], null))):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_(initial_liability)?mktplace.components.exchanges.form_row.call(null,"Destination",sawtooth.components.core.dropdown.call(null,self__.owner,new cljs.core.Keyword(null,"final-liability","final-liability",-1591019711),"Select a holding",mktplace.components.exchanges.holdings_to_dropdown_items.call(null,cljs.core.filter.call(null,((function (map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,cancel_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state){
return (function (p1__30655_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(p1__30655_SHARP_),new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(initial_holding))) && (cljs.core.not_EQ_.call(null,initial_liability,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30655_SHARP_)));
});})(map__30675,map__30675__$1,participant,participants,selections,source_holdings,target_holdings,initial_holding,final_holding,submit_handler,cancel_handler,___$1,map__30673,map__30673__$1,state,initial_liability,final_liability,quantity,selected_participant,initial_state))
,target_holdings)))):null)),sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),"Amount",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int,new cljs.core.Keyword(null,"help-text","help-text",1567653015),"The Skill level to confirm."], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__6075__auto__ = initial_holding;
if(cljs.core.truth_(and__6075__auto__)){
return final_holding;
} else {
return and__6075__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),om.core.build.call(null,mktplace.components.exchanges.modeled_holding_table,cljs.core.merge.call(null,cljs.core.select_keys.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.Keyword(null,"assets","assets",210278279)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-holding","initial-holding",939786507),initial_holding,new cljs.core.Keyword(null,"final-holding","final-holding",1688782034),final_holding,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity], null)))], null):null)),sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,self__.initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Confirm",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.exchanges.is_valid_transfer_QMARK_.call(null,self__.data,state))], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_handler], null)], null))));
});})(initial_state))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.getBasis = ((function (initial_state){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"transfer-form","transfer-form",-1413044225,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"meta30670","meta30670",871783994,null)], null);
});})(initial_state))
;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.cljs$lang$type = true;

mktplace.components.exchanges.t_mktplace$components$exchanges30669.cljs$lang$ctorStr = "mktplace.components.exchanges/t_mktplace$components$exchanges30669";

mktplace.components.exchanges.t_mktplace$components$exchanges30669.cljs$lang$ctorPrWriter = ((function (initial_state){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.exchanges/t_mktplace$components$exchanges30669");
});})(initial_state))
;

mktplace.components.exchanges.__GT_t_mktplace$components$exchanges30669 = ((function (initial_state){
return (function mktplace$components$exchanges$transfer_form_$___GT_t_mktplace$components$exchanges30669(transfer_form__$1,data__$1,owner__$1,initial_state__$1,meta30670){
return (new mktplace.components.exchanges.t_mktplace$components$exchanges30669(transfer_form__$1,data__$1,owner__$1,initial_state__$1,meta30670));
});})(initial_state))
;

}

return (new mktplace.components.exchanges.t_mktplace$components$exchanges30669(mktplace$components$exchanges$transfer_form,data,owner,initial_state,cljs.core.PersistentArrayMap.EMPTY));
});
