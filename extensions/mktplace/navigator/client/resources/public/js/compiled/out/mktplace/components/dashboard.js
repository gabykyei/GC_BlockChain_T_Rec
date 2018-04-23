// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.dashboard');
goog.require('cljs.core');
goog.require('mktplace.service.exchange');
goog.require('mktplace.service.offer');
goog.require('sablono.core');
goog.require('mktplace.routes');
goog.require('mktplace.components.offers');
goog.require('om.core');
goog.require('sawtooth.components.core');
goog.require('mktplace.components.exchanges');
mktplace.components.dashboard.make_query = (function mktplace$components$dashboard$make_query(app_state){
var selected_asset_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var selected_holding_id = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"holding","holding",1269510599),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(5),new cljs.core.Keyword(null,"assetId","assetId",-1083269875),selected_asset_id,new cljs.core.Keyword(null,"holdingId","holdingId",-780403375),selected_holding_id], null);
});
mktplace.components.dashboard.load_offers_BANG_ = (function mktplace$components$dashboard$load_offers_BANG_(app_state){
var temp__4657__auto__ = (function (){var or__6087__auto__ = new cljs.core.Keyword(null,"view-participant","view-participant",-1183789579).cljs$core$IFn$_invoke$arity$1(app_state);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return new cljs.core.Keyword(null,"participant","participant",1962214029).cljs$core$IFn$_invoke$arity$1(app_state);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var participant = temp__4657__auto__;
var query = mktplace.components.dashboard.make_query.call(null,app_state);
return mktplace.service.offer.available_offers.call(null,participant,query);
} else {
return null;
}
});
mktplace.components.dashboard.load_exchanges_BANG_ = (function mktplace$components$dashboard$load_exchanges_BANG_(app_state){
return mktplace.service.exchange.exchanges.call(null,mktplace.components.dashboard.make_query.call(null,app_state));
});
mktplace.components.dashboard.dashboard = (function mktplace$components$dashboard$dashboard(data,owner){
if(typeof mktplace.components.dashboard.t_mktplace$components$dashboard30689 !== 'undefined'){
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
mktplace.components.dashboard.t_mktplace$components$dashboard30689 = (function (dashboard,data,owner,meta30690){
this.dashboard = dashboard;
this.data = data;
this.owner = owner;
this.meta30690 = meta30690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30691,meta30690__$1){
var self__ = this;
var _30691__$1 = this;
return (new mktplace.components.dashboard.t_mktplace$components$dashboard30689(self__.dashboard,self__.data,self__.owner,meta30690__$1));
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30691){
var self__ = this;
var _30691__$1 = this;
return self__.meta30690;
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IDisplayName$ = true;

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Dashboard";
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IInitState$ = true;

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IWillMount$ = true;

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
mktplace.components.dashboard.load_offers_BANG_.call(null,self__.data);

return mktplace.components.dashboard.load_exchanges_BANG_.call(null,self__.data);
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IWillReceiveProps$ = true;

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,next_state){
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
,false,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"view-participant","view-participant",-1183789579)], null)))){
mktplace.components.dashboard.load_offers_BANG_.call(null,next_state);
} else {
}

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
return mktplace.components.dashboard.load_exchanges_BANG_.call(null,next_state);
} else {
return null;
}
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IRenderState$ = true;

mktplace.components.dashboard.t_mktplace$components$dashboard30689.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var participant_id = (function (){var or__6087__auto__ = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-participant","view-participant",-1183789579),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
})();
var link_args = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null);
var assets = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"assets","assets",210278279));
var participants = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"participants","participants",673603367));
var offers = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var exchanges = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),new cljs.core.Keyword(null,"data","data",-232669377)], null));
return React.createElement("div",{"className": "container-fluid"},(function (){var attrs30692 = om.core.build.call(null,mktplace.components.offers.offer_table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offers","offers",796187776),offers,new cljs.core.Keyword(null,"participants","participants",673603367),participants,new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),mktplace.routes.offers_path.call(null,link_args)], null),"Latest Requests"], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30692))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30692)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30692))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30692)], null)));
})(),(function (){var attrs30693 = om.core.build.call(null,mktplace.components.exchanges.exchange_table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),exchanges,new cljs.core.Keyword(null,"participants","participants",673603367),participants,new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),mktplace.routes.exchanges_path.call(null,link_args)], null),"Latest Confirmations"], null)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30693))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs30693)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs30693))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30693)], null)));
})());
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"dashboard","dashboard",1008784019,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30690","meta30690",-1833618569,null)], null);
});

mktplace.components.dashboard.t_mktplace$components$dashboard30689.cljs$lang$type = true;

mktplace.components.dashboard.t_mktplace$components$dashboard30689.cljs$lang$ctorStr = "mktplace.components.dashboard/t_mktplace$components$dashboard30689";

mktplace.components.dashboard.t_mktplace$components$dashboard30689.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.dashboard/t_mktplace$components$dashboard30689");
});

mktplace.components.dashboard.__GT_t_mktplace$components$dashboard30689 = (function mktplace$components$dashboard$dashboard_$___GT_t_mktplace$components$dashboard30689(dashboard__$1,data__$1,owner__$1,meta30690){
return (new mktplace.components.dashboard.t_mktplace$components$dashboard30689(dashboard__$1,data__$1,owner__$1,meta30690));
});

}

return (new mktplace.components.dashboard.t_mktplace$components$dashboard30689(mktplace$components$dashboard$dashboard,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
