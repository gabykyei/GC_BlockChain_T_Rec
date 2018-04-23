// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.offers');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('mktplace.service.offer');
goog.require('sawtooth.math');
goog.require('taoensso.timbre');
goog.require('mktplace.service.participant');
goog.require('sablono.core');
goog.require('mktplace.components.participants');
goog.require('mktplace.components.format');
goog.require('sawtooth.router');
goog.require('mktplace.routes');
goog.require('sawtooth.ledger.keys');
goog.require('mktplace.transactions');
goog.require('sawtooth.utils');
goog.require('sawtooth.components.notification');
goog.require('om.core');
goog.require('sawtooth.components.core');
mktplace.components.offers.pending_label = (function mktplace$components$offers$pending_label(p__30351){
var map__30354 = p__30351;
var map__30354__$1 = ((((!((map__30354 == null)))?((((map__30354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354):map__30354);
var pending = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
var revoked = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"revoked","revoked",-1126520531));
var processing = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"processing","processing",-1576405467));
if(cljs.core.truth_(pending)){
return "Pending";
} else {
if(cljs.core.truth_(revoked)){
return "Revoking";
} else {
if(cljs.core.truth_(processing)){
return "Processing";
} else {
return null;
}
}
}
});
mktplace.components.offers.offer_display = (function mktplace$components$offers$offer_display(offer){
var f = sawtooth.math.ratio__GT_fraction.call(null,new cljs.core.Keyword(null,"ratio","ratio",-926560044).cljs$core$IFn$_invoke$arity$1(offer));
var pending_QMARK_ = (function (){var or__6087__auto__ = new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(offer);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
var or__6087__auto____$1 = new cljs.core.Keyword(null,"revoked","revoked",-1126520531).cljs$core$IFn$_invoke$arity$1(offer);
if(cljs.core.truth_(or__6087__auto____$1)){
return or__6087__auto____$1;
} else {
return new cljs.core.Keyword(null,"processing","processing",-1576405467).cljs$core$IFn$_invoke$arity$1(offer);
}
}
})();
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,offer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-name","input-name",323608185),new cljs.core.Keyword(null,"output-name","output-name",-1769107767),new cljs.core.Keyword(null,"creator","creator",-1069241724)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"input-amount","input-amount",309254296),sawtooth.math.denominator.call(null,f),new cljs.core.Keyword(null,"output-amount","output-amount",-1876010353),sawtooth.math.numerator.call(null,f),new cljs.core.Keyword(null,"pending?","pending?",-2133618792),pending_QMARK_,new cljs.core.Keyword(null,"pending-label","pending-label",-1849118546),mktplace.components.offers.pending_label.call(null,offer),new cljs.core.Keyword(null,"offer-id","offer-id",-512992109),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(offer)], null));
});
mktplace.components.offers.with_creator = (function mktplace$components$offers$with_creator(participants){
return (function (offer){
return cljs.core.assoc.call(null,offer,new cljs.core.Keyword(null,"creator","creator",-1069241724),sawtooth.utils.first_by.call(null,participants,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"creator","creator",-1069241724).cljs$core$IFn$_invoke$arity$1(offer)));
});
});
mktplace.components.offers.with_asset_names = (function mktplace$components$offers$with_asset_names(assets){
return (function (offer){
return cljs.core.assoc.call(null,offer,new cljs.core.Keyword(null,"input-name","input-name",323608185),mktplace.components.format.asset_name_by_holding.call(null,assets,cljs.core.get.call(null,offer,new cljs.core.Keyword(null,"input","input",556931961))),new cljs.core.Keyword(null,"output-name","output-name",-1769107767),mktplace.components.format.asset_name_by_holding.call(null,assets,cljs.core.get.call(null,offer,new cljs.core.Keyword(null,"output","output",-1105869043))));
});
});
mktplace.components.offers.offer_row = (function mktplace$components$offers$offer_row(control_fn){
return (function (offer){
var map__30363 = mktplace.components.offers.offer_display.call(null,offer);
var map__30363__$1 = ((((!((map__30363 == null)))?((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var input_name = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"input-name","input-name",323608185));
var input_amount = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"input-amount","input-amount",309254296));
var output_name = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var output_amount = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"output-amount","output-amount",-1876010353));
var offer_id = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"offer-id","offer-id",-512992109));
var creator = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"creator","creator",-1069241724));
var pending_QMARK_ = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"pending?","pending?",-2133618792));
var pending_label = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"pending-label","pending-label",-1849118546));
return React.createElement("tr",{"key": offer_id, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(pending_QMARK_)?"pending":null)], null))},(function (){var attrs30365 = mktplace.components.participants.participant_link.call(null,creator);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30365))?sablono.interpreter.attributes.call(null,attrs30365):null),((cljs.core.map_QMARK_.call(null,attrs30365))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30365)], null)));
})(),(function (){var attrs30366 = input_amount;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30366))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-right"], null)], null),attrs30366)):{"className": "text-right"}),((cljs.core.map_QMARK_.call(null,attrs30366))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30366)], null)));
})(),(function (){var attrs30367 = input_name;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30367))?sablono.interpreter.attributes.call(null,attrs30367):null),((cljs.core.map_QMARK_.call(null,attrs30367))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30367)], null)));
})(),(function (){var attrs30368 = output_amount;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30368))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-right"], null)], null),attrs30368)):{"className": "text-right"}),((cljs.core.map_QMARK_.call(null,attrs30368))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30368)], null)));
})(),(function (){var attrs30369 = output_name;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30369))?sablono.interpreter.attributes.call(null,attrs30369):null),((cljs.core.map_QMARK_.call(null,attrs30369))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30369)], null)));
})(),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__6075__auto__ = control_fn;
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.not.call(null,pending_QMARK_);
} else {
return and__6075__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),control_fn.call(null,offer)], null):(cljs.core.truth_((function (){var and__6075__auto__ = control_fn;
if(cljs.core.truth_(and__6075__auto__)){
return pending_QMARK_;
} else {
return and__6075__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"hourglass","hourglass",316409166)),[cljs.core.str(" "),cljs.core.str(pending_label)].join('')], null)], null):null))));
});
});
mktplace.components.offers.offer_table = (function mktplace$components$offers$offer_table(p__30370,owner){
var map__30390 = p__30370;
var map__30390__$1 = ((((!((map__30390 == null)))?((((map__30390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30390):map__30390);
var offers = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"offers","offers",796187776));
var participants = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"participants","participants",673603367));
var assets = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var title = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"title","title",636505583),"Open Offers");
var control_fn = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154));
if(typeof mktplace.components.offers.t_mktplace$components$offers30392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.offers.t_mktplace$components$offers30392 = (function (offer_table,p__30370,owner,map__30390,offers,participants,assets,title,control_fn,meta30393){
this.offer_table = offer_table;
this.p__30370 = p__30370;
this.owner = owner;
this.map__30390 = map__30390;
this.offers = offers;
this.participants = participants;
this.assets = assets;
this.title = title;
this.control_fn = control_fn;
this.meta30393 = meta30393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.offers.t_mktplace$components$offers30392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30390,map__30390__$1,offers,participants,assets,title,control_fn){
return (function (_30394,meta30393__$1){
var self__ = this;
var _30394__$1 = this;
return (new mktplace.components.offers.t_mktplace$components$offers30392(self__.offer_table,self__.p__30370,self__.owner,self__.map__30390,self__.offers,self__.participants,self__.assets,self__.title,self__.control_fn,meta30393__$1));
});})(map__30390,map__30390__$1,offers,participants,assets,title,control_fn))
;

mktplace.components.offers.t_mktplace$components$offers30392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30390,map__30390__$1,offers,participants,assets,title,control_fn){
return (function (_30394){
var self__ = this;
var _30394__$1 = this;
return self__.meta30393;
});})(map__30390,map__30390__$1,offers,participants,assets,title,control_fn))
;

mktplace.components.offers.t_mktplace$components$offers30392.prototype.om$core$IRender$ = true;

mktplace.components.offers.t_mktplace$components$offers30392.prototype.om$core$IRender$render$arity$1 = ((function (map__30390,map__30390__$1,offers,participants,assets,title,control_fn){
return (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
return React.createElement("div",null,(function (){var attrs30395 = self__.title;
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs30395))?sablono.interpreter.attributes.call(null,attrs30395):null),((cljs.core.map_QMARK_.call(null,attrs30395))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30395)], null)));
})(),React.createElement("table",{"className": "table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Owner"),React.createElement("th",{"className": "text-right"},"#"),React.createElement("th",null,"Input"),React.createElement("th",{"className": "text-right"},"#"),React.createElement("th",null,"Output"),(cljs.core.truth_(self__.control_fn)?React.createElement("th",null):null))),(function (){var attrs30396 = (((cljs.core.count.call(null,self__.offers) > (0)))?cljs.core.map.call(null,cljs.core.comp.call(null,mktplace.components.offers.offer_row.call(null,self__.control_fn),mktplace.components.offers.with_asset_names.call(null,self__.assets),mktplace.components.offers.with_creator.call(null,self__.participants)),self__.offers):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-center","td.text-center",-860992628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(cljs.core.truth_(self__.control_fn)?(6):(5))], null),"No Offers"], null)], null));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs30396))?sablono.interpreter.attributes.call(null,attrs30396):null),((cljs.core.map_QMARK_.call(null,attrs30396))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30396)], null)));
})()));
});})(map__30390,map__30390__$1,offers,participants,assets,title,control_fn))
;

mktplace.components.offers.t_mktplace$components$offers30392.getBasis = ((function (map__30390,map__30390__$1,offers,participants,assets,title,control_fn){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"offer-table","offer-table",-846906141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offers","offers",-1858247993,null),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"control-fn","control-fn",750138373,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"title","title",-2017930186,null),"Open Offers"], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__30370","p__30370",1083575690,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__30390","map__30390",1254728871,null),new cljs.core.Symbol(null,"offers","offers",-1858247993,null),new cljs.core.Symbol(null,"participants","participants",-1980832402,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"control-fn","control-fn",750138373,null),new cljs.core.Symbol(null,"meta30393","meta30393",-60870692,null)], null);
});})(map__30390,map__30390__$1,offers,participants,assets,title,control_fn))
;

mktplace.components.offers.t_mktplace$components$offers30392.cljs$lang$type = true;

mktplace.components.offers.t_mktplace$components$offers30392.cljs$lang$ctorStr = "mktplace.components.offers/t_mktplace$components$offers30392";

mktplace.components.offers.t_mktplace$components$offers30392.cljs$lang$ctorPrWriter = ((function (map__30390,map__30390__$1,offers,participants,assets,title,control_fn){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.offers/t_mktplace$components$offers30392");
});})(map__30390,map__30390__$1,offers,participants,assets,title,control_fn))
;

mktplace.components.offers.__GT_t_mktplace$components$offers30392 = ((function (map__30390,map__30390__$1,offers,participants,assets,title,control_fn){
return (function mktplace$components$offers$offer_table_$___GT_t_mktplace$components$offers30392(offer_table__$1,p__30370__$1,owner__$1,map__30390__$2,offers__$1,participants__$1,assets__$1,title__$1,control_fn__$1,meta30393){
return (new mktplace.components.offers.t_mktplace$components$offers30392(offer_table__$1,p__30370__$1,owner__$1,map__30390__$2,offers__$1,participants__$1,assets__$1,title__$1,control_fn__$1,meta30393));
});})(map__30390,map__30390__$1,offers,participants,assets,title,control_fn))
;

}

return (new mktplace.components.offers.t_mktplace$components$offers30392(mktplace$components$offers$offer_table,p__30370,owner,map__30390__$1,offers,participants,assets,title,control_fn,null));
});
mktplace.components.offers.make_offer_control_fn = (function mktplace$components$offers$make_offer_control_fn(owner,participant){
return (function (offer){
var attrs30410 = ((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,offer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creator","creator",-1069241724),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),cljs.core.get.call(null,participant,new cljs.core.Keyword(null,"id","id",-1388402092))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__29648__auto__){
e__29648__auto__.preventDefault();

return mktplace.service.offer.revoke.call(null,sawtooth.ledger.keys.get_key_pair.call(null),participant,offer);
})], null),sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"trash","trash",-1136970594))," Revoke"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.router.push.call(null,mktplace.routes.exchange_offer_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-offer-id","initial-offer-id",1383510928),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(offer)], null)));
})], null),sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"transfer","transfer",327423400))," Accept"], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30410))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["offer-controls"], null)], null),attrs30410)):{"className": "offer-controls"}),((cljs.core.map_QMARK_.call(null,attrs30410))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30410)], null)));
});
});
mktplace.components.offers.PAGE_SIZE = (10);
mktplace.components.offers.load_offers = (function mktplace$components$offers$load_offers(state,page){
return mktplace.service.offer.available_offers.call(null,new cljs.core.Keyword(null,"participant","participant",1962214029).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"limit","limit",-1355822363),mktplace.components.offers.PAGE_SIZE,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"assetId","assetId",-1083269875),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"holdingId","holdingId",-780403375),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"holding","holding",1269510599),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null));
});
mktplace.components.offers.offer_page_fn = (function mktplace$components$offers$offer_page_fn(app_state,owner){
return (function (page){
mktplace.components.offers.load_offers.call(null,app_state,page);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"page","page",849072397),page);
});
});
mktplace.components.offers.offers = (function mktplace$components$offers$offers(data,owner){
if(typeof mktplace.components.offers.t_mktplace$components$offers30421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.offers.t_mktplace$components$offers30421 = (function (offers,data,owner,meta30422){
this.offers = offers;
this.data = data;
this.owner = owner;
this.meta30422 = meta30422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.offers.t_mktplace$components$offers30421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30423,meta30422__$1){
var self__ = this;
var _30423__$1 = this;
return (new mktplace.components.offers.t_mktplace$components$offers30421(self__.offers,self__.data,self__.owner,meta30422__$1));
});

mktplace.components.offers.t_mktplace$components$offers30421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30423){
var self__ = this;
var _30423__$1 = this;
return self__.meta30422;
});

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IDisplayName$ = true;

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Offers";
});

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IInitState$ = true;

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
});

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IWillMount$ = true;

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return mktplace.components.offers.load_offers.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397)));
});

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IWillReceiveProps$ = true;

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,next_state){
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
return mktplace.components.offers.load_offers.call(null,next_state,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397)));
} else {
return null;
}
});

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IRenderState$ = true;

mktplace.components.offers.t_mktplace$components$offers30421.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30424){
var self__ = this;
var map__30425 = p__30424;
var map__30425__$1 = ((((!((map__30425 == null)))?((((map__30425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30425):map__30425);
var page = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"page","page",849072397));
var ___$1 = this;
var map__30427 = self__.data;
var map__30427__$1 = ((((!((map__30427 == null)))?((((map__30427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30427):map__30427);
var participant = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var participants = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"participants","participants",673603367));
var assets = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var offers__$1 = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var offer_count = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.Keyword(null,"count","count",2139924085)], null),(0));
return React.createElement("div",{"className": "container-fluid"},(function (){var attrs30429 = om.core.build.call(null,mktplace.components.offers.offer_table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offers","offers",796187776),offers__$1,new cljs.core.Keyword(null,"participants","participants",673603367),participants,new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),mktplace.components.offers.make_offer_control_fn.call(null,self__.owner,participant)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30429))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30429)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30429))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30429)], null)));
})(),(((mktplace.components.offers.PAGE_SIZE < offer_count))?(function (){var attrs30430 = om.core.build.call(null,sawtooth.components.core.paging,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),page,new cljs.core.Keyword(null,"total-items","total-items",-521030113),offer_count,new cljs.core.Keyword(null,"items-per-page","items-per-page",1024404135),mktplace.components.offers.PAGE_SIZE,new cljs.core.Keyword(null,"go-to-page-fn","go-to-page-fn",-1555478667),mktplace.components.offers.offer_page_fn.call(null,self__.data,self__.owner)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30430))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30430)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30430))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30430)], null)));
})():null));
});

mktplace.components.offers.t_mktplace$components$offers30421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"offers","offers",-1858247993,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30422","meta30422",1464638815,null)], null);
});

mktplace.components.offers.t_mktplace$components$offers30421.cljs$lang$type = true;

mktplace.components.offers.t_mktplace$components$offers30421.cljs$lang$ctorStr = "mktplace.components.offers/t_mktplace$components$offers30421";

mktplace.components.offers.t_mktplace$components$offers30421.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.offers/t_mktplace$components$offers30421");
});

mktplace.components.offers.__GT_t_mktplace$components$offers30421 = (function mktplace$components$offers$offers_$___GT_t_mktplace$components$offers30421(offers__$1,data__$1,owner__$1,meta30422){
return (new mktplace.components.offers.t_mktplace$components$offers30421(offers__$1,data__$1,owner__$1,meta30422));
});

}

return (new mktplace.components.offers.t_mktplace$components$offers30421(mktplace$components$offers$offers,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.offers.viewable_holdings = (function mktplace$components$offers$viewable_holdings(app_state){
var get_asset_name = cljs.core.partial.call(null,mktplace.components.format.asset_name_by_holding,cljs.core.get.call(null,app_state,new cljs.core.Keyword(null,"assets","assets",210278279)));
return cljs.core.map.call(null,((function (get_asset_name){
return (function (p1__30431_SHARP_){
return cljs.core.assoc.call(null,p1__30431_SHARP_,new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368),get_asset_name.call(null,p1__30431_SHARP_));
});})(get_asset_name))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"holdings","holdings",195829975)], null))));
});
mktplace.components.offers.set_initial_form_state = (function mktplace$components$offers$set_initial_form_state(owner,app_state,initial_form){
var available_assets = mktplace.components.offers.viewable_holdings.call(null,app_state);
var selected_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,available_assets));
return om.core.update_state_BANG_.call(null,owner,cljs.core.constantly.call(null,cljs.core.merge.call(null,initial_form,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),selected_id,new cljs.core.Keyword(null,"output","output",-1105869043),selected_id], null))));
});
mktplace.components.offers.do_submit = (function mktplace$components$offers$do_submit(participant,sell_offer){
mktplace.service.offer.submit_offer.call(null,sawtooth.ledger.keys.get_key_pair.call(null),participant,sell_offer);

return sawtooth.router.push.call(null,mktplace.routes.offers_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),cljs.core.get.call(null,participant,new cljs.core.Keyword(null,"id","id",-1388402092))], null)));
});
mktplace.components.offers.is_valid_QMARK_ = (function mktplace$components$offers$is_valid_QMARK_(p__30432){
var map__30435 = p__30432;
var map__30435__$1 = ((((!((map__30435 == null)))?((((map__30435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30435):map__30435);
var input = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var minimum = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.call(null,map__30435__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
return (!((input == null))) && (!((output == null))) && (!((minimum == null))) && (!((maximum == null))) && (cljs.core.not_EQ_.call(null,input,output));
});
mktplace.components.offers.handle_submit = (function mktplace$components$offers$handle_submit(owner,participant,sell_offer){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

if(cljs.core.truth_(mktplace.components.offers.is_valid_QMARK_.call(null,sell_offer))){
return mktplace.components.offers.do_submit.call(null,participant,sell_offer);
} else {
return sawtooth.components.notification.notify_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"title","title",636505583),"Invalid Sell Offer",new cljs.core.Keyword(null,"message","message",-406056002),"Input and output must be different holdings!"], null));
}
});
});
mktplace.components.offers.sell_offer_form = (function mktplace$components$offers$sell_offer_form(data,owner){
var initial_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"input-count","input-count",1906960590),(1),new cljs.core.Keyword(null,"output-count","output-count",1108610852),(1),new cljs.core.Keyword(null,"execution","execution",253283524),"Any",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(1),new cljs.core.Keyword(null,"maximum","maximum",573880714),sawtooth.math.max_int], null);
var reset_form = ((function (initial_state){
return (function (p1__30437_SHARP_){
return mktplace.components.offers.set_initial_form_state.call(null,owner,p1__30437_SHARP_,initial_state);
});})(initial_state))
;
if(typeof mktplace.components.offers.t_mktplace$components$offers30444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.offers.t_mktplace$components$offers30444 = (function (sell_offer_form,data,owner,initial_state,reset_form,meta30445){
this.sell_offer_form = sell_offer_form;
this.data = data;
this.owner = owner;
this.initial_state = initial_state;
this.reset_form = reset_form;
this.meta30445 = meta30445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.offers.t_mktplace$components$offers30444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (initial_state,reset_form){
return (function (_30446,meta30445__$1){
var self__ = this;
var _30446__$1 = this;
return (new mktplace.components.offers.t_mktplace$components$offers30444(self__.sell_offer_form,self__.data,self__.owner,self__.initial_state,self__.reset_form,meta30445__$1));
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (initial_state,reset_form){
return (function (_30446){
var self__ = this;
var _30446__$1 = this;
return self__.meta30445;
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IDisplayName$ = true;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (initial_state,reset_form){
return (function (_){
var self__ = this;
var ___$1 = this;
return "SellOfferForm";
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IInitState$ = true;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IInitState$init_state$arity$1 = ((function (initial_state,reset_form){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.initial_state;
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IWillMount$ = true;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (initial_state,reset_form){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.reset_form.call(null,self__.data);
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IWillReceiveProps$ = true;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (initial_state,reset_form){
return (function (_,next_state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.reduce.call(null,((function (___$1,initial_state,reset_form){
return (function (prev__29662__auto__,k__29663__auto__){
var k_path__29664__auto__ = ((cljs.core.vector_QMARK_.call(null,k__29663__auto__))?k__29663__auto__:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__29663__auto__], null));
var or__6087__auto__ = prev__29662__auto__;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,next_state,k_path__29664__auto__),cljs.core.get_in.call(null,om.core.get_props.call(null,self__.owner),k_path__29664__auto__));
}
});})(___$1,initial_state,reset_form))
,false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210)], null)))){
return self__.reset_form.call(null,next_state);
} else {
return null;
}
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IRenderState$ = true;

mktplace.components.offers.t_mktplace$components$offers30444.prototype.om$core$IRenderState$render_state$arity$2 = ((function (initial_state,reset_form){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var participant = new cljs.core.Keyword(null,"participant","participant",1962214029).cljs$core$IFn$_invoke$arity$1(self__.data);
var holdings = mktplace.components.offers.viewable_holdings.call(null,self__.data);
var holding_options = cljs.core.map.call(null,((function (participant,holdings,___$1,initial_state,reset_form){
return (function (p__30447){
var map__30448 = p__30447;
var map__30448__$1 = ((((!((map__30448 == null)))?((((map__30448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30448):map__30448);
var holding = map__30448__$1;
var id = cljs.core.get.call(null,map__30448__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var asset_name = cljs.core.get.call(null,map__30448__$1,new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368));
return sablono.interpreter.create_element.call(null,"option",{"key": id, "value": id},sablono.interpreter.interpret.call(null,[cljs.core.str(mktplace.components.format.object_name.call(null,holding)),cljs.core.str(" ("),cljs.core.str(asset_name),cljs.core.str(")")].join('')));
});})(participant,holdings,___$1,initial_state,reset_form))
,holdings);
var submit_handler = ((function (participant,holdings,holding_options,___$1,initial_state,reset_form){
return (function (e__29654__auto__){
var form__29655__auto__ = om.core.get_node.call(null,self__.owner,"sell-offer-form");
var is_valid_QMARK___29656__auto__ = form__29655__auto__.checkValidity();
if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
e__29654__auto__.preventDefault();

if(cljs.core.truth_(mktplace.components.offers.is_valid_QMARK_.call(null,state))){
mktplace.components.offers.do_submit.call(null,participant,state);
} else {
sawtooth.components.notification.notify_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"title","title",636505583),"Invalid Sell Offer",new cljs.core.Keyword(null,"message","message",-406056002),"Input and output must be different holdings!"], null));
}
} else {
}

if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
return null;
} else {
return form__29655__auto__.reportValidity();
}
});})(participant,holdings,holding_options,___$1,initial_state,reset_form))
;
var reset_handler = ((function (participant,holdings,holding_options,submit_handler,___$1,initial_state,reset_form){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return self__.reset_form.call(null,self__.data);
});})(participant,holdings,holding_options,submit_handler,___$1,initial_state,reset_form))
;
return sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,holdings)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Create Sell Offer"], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.sell-offer-form","form.sell-offer-form",1231964477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit_handler,new cljs.core.Keyword(null,"ref","ref",1289896967),"sell-offer-form"], null),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"name","name",1843675177),"Name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"An optional, human-readable name for the sell offer.\n                                        Must beging with '/'"], null)),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"description","description",-1428560544),"Description",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"Optional information about the sell offer."], null)),sawtooth.components.core.select_field.call(null,self__.owner,new cljs.core.Keyword(null,"input","input",556931961),"Input",holding_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"The holding into which payment is made"], null)),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"input-count","input-count",1906960590),"Amount",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int], null)),sawtooth.components.core.select_field.call(null,self__.owner,new cljs.core.Keyword(null,"output","output",-1105869043),"Output",holding_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"The holding from which assets are transfered"], null)),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"output-count","output-count",1108610852),"Amount",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int], null)),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),"Minimum",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"The minimum number of input instances",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int], null)),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"maximum","maximum",573880714),"Maximum",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"The maximum number of input instances",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),sawtooth.math.max_int,new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int], null)),sawtooth.components.core.radio_buttons.call(null,self__.owner,new cljs.core.Keyword(null,"execution","execution",253283524),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Executeable multiple times","Any"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Executeable once","ExecuteOnce"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Executeable once per participant","ExecuteOncePerParticipant"], null)], null)),sawtooth.components.core.form_buttons.call(null,self__.owner,self__.initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.offers.is_valid_QMARK_.call(null,state))], null)], null))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),"You have no holdings!"], null)));
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.getBasis = ((function (initial_state,reset_form){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"sell-offer-form","sell-offer-form",1348914655,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"reset-form","reset-form",-2034189143,null),new cljs.core.Symbol(null,"meta30445","meta30445",1793562967,null)], null);
});})(initial_state,reset_form))
;

mktplace.components.offers.t_mktplace$components$offers30444.cljs$lang$type = true;

mktplace.components.offers.t_mktplace$components$offers30444.cljs$lang$ctorStr = "mktplace.components.offers/t_mktplace$components$offers30444";

mktplace.components.offers.t_mktplace$components$offers30444.cljs$lang$ctorPrWriter = ((function (initial_state,reset_form){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.offers/t_mktplace$components$offers30444");
});})(initial_state,reset_form))
;

mktplace.components.offers.__GT_t_mktplace$components$offers30444 = ((function (initial_state,reset_form){
return (function mktplace$components$offers$sell_offer_form_$___GT_t_mktplace$components$offers30444(sell_offer_form__$1,data__$1,owner__$1,initial_state__$1,reset_form__$1,meta30445){
return (new mktplace.components.offers.t_mktplace$components$offers30444(sell_offer_form__$1,data__$1,owner__$1,initial_state__$1,reset_form__$1,meta30445));
});})(initial_state,reset_form))
;

}

return (new mktplace.components.offers.t_mktplace$components$offers30444(mktplace$components$offers$sell_offer_form,data,owner,initial_state,reset_form,cljs.core.PersistentArrayMap.EMPTY));
});
