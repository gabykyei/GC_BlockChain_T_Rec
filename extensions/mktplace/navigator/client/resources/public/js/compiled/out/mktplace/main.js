// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.main');
goog.require('cljs.core');
goog.require('sawtooth.state');
goog.require('sawtooth.events');
goog.require('mktplace.components.holdings');
goog.require('mktplace.components.dashboard');
goog.require('mktplace.components.login');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sawtooth.router');
goog.require('mktplace.routes');
goog.require('mktplace.components.offers');
goog.require('sawtooth.components.notification');
goog.require('sawtooth.components.block');
goog.require('mktplace.components.portfolio');
goog.require('om.core');
goog.require('mktplace.components.exchanges');
goog.require('mktplace.components.assets');
goog.require('mktplace.components.home');
cljs.core.enable_console_print_BANG_.call(null);
mktplace.main.not_found = (function mktplace$main$not_found(_,owner){
if(typeof mktplace.main.t_mktplace$main31218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.main.t_mktplace$main31218 = (function (not_found,_,owner,meta31219){
this.not_found = not_found;
this._ = _;
this.owner = owner;
this.meta31219 = meta31219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.main.t_mktplace$main31218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31220,meta31219__$1){
var self__ = this;
var _31220__$1 = this;
return (new mktplace.main.t_mktplace$main31218(self__.not_found,self__._,self__.owner,meta31219__$1));
});

mktplace.main.t_mktplace$main31218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31220){
var self__ = this;
var _31220__$1 = this;
return self__.meta31219;
});

mktplace.main.t_mktplace$main31218.prototype.om$core$IRender$ = true;

mktplace.main.t_mktplace$main31218.prototype.om$core$IRender$render$arity$1 = (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
return React.createElement("div",{"className": "container-fluid"},React.createElement("h3",null,"Not Found"),React.createElement("p",null,"I'm sorry, I don't know where you want to be."));
});

mktplace.main.t_mktplace$main31218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"not-found","not-found",1011451547,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31219","meta31219",1989407213,null)], null);
});

mktplace.main.t_mktplace$main31218.cljs$lang$type = true;

mktplace.main.t_mktplace$main31218.cljs$lang$ctorStr = "mktplace.main/t_mktplace$main31218";

mktplace.main.t_mktplace$main31218.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.main/t_mktplace$main31218");
});

mktplace.main.__GT_t_mktplace$main31218 = (function mktplace$main$not_found_$___GT_t_mktplace$main31218(not_found__$1,___$1,owner__$1,meta31219){
return (new mktplace.main.t_mktplace$main31218(not_found__$1,___$1,owner__$1,meta31219));
});

}

return (new mktplace.main.t_mktplace$main31218(mktplace$main$not_found,_,owner,null));
});
mktplace.main.app = (function mktplace$main$app(data,owner){
if(typeof mktplace.main.t_mktplace$main31229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.main.t_mktplace$main31229 = (function (app,data,owner,meta31230){
this.app = app;
this.data = data;
this.owner = owner;
this.meta31230 = meta31230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.main.t_mktplace$main31229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31231,meta31230__$1){
var self__ = this;
var _31231__$1 = this;
return (new mktplace.main.t_mktplace$main31229(self__.app,self__.data,self__.owner,meta31230__$1));
});

mktplace.main.t_mktplace$main31229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31231){
var self__ = this;
var _31231__$1 = this;
return self__.meta31230;
});

mktplace.main.t_mktplace$main31229.prototype.om$core$IRender$ = true;

mktplace.main.t_mktplace$main31229.prototype.om$core$IRender$render$arity$1 = (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
var attrs31232 = sawtooth.router.route_handler.call(null,self__.data,self__.owner);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31232))?sablono.interpreter.attributes.call(null,attrs31232):null),((cljs.core.map_QMARK_.call(null,attrs31232))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs31233 = om.core.build.call(null,sawtooth.components.notification.notification_container,cljs.core.select_keys.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notification","notification",-222338233)], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31233))?sablono.interpreter.attributes.call(null,attrs31233):null),((cljs.core.map_QMARK_.call(null,attrs31233))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31233)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31232),(function (){var attrs31234 = om.core.build.call(null,sawtooth.components.notification.notification_container,cljs.core.select_keys.call(null,self__.data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notification","notification",-222338233)], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31234))?sablono.interpreter.attributes.call(null,attrs31234):null),((cljs.core.map_QMARK_.call(null,attrs31234))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31234)], null)));
})()], null)));
});

mktplace.main.t_mktplace$main31229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31230","meta31230",-1836415496,null)], null);
});

mktplace.main.t_mktplace$main31229.cljs$lang$type = true;

mktplace.main.t_mktplace$main31229.cljs$lang$ctorStr = "mktplace.main/t_mktplace$main31229";

mktplace.main.t_mktplace$main31229.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.main/t_mktplace$main31229");
});

mktplace.main.__GT_t_mktplace$main31229 = (function mktplace$main$app_$___GT_t_mktplace$main31229(app__$1,data__$1,owner__$1,meta31230){
return (new mktplace.main.t_mktplace$main31229(app__$1,data__$1,owner__$1,meta31230));
});

}

return (new mktplace.main.t_mktplace$main31229(mktplace$main$app,data,owner,null));
});
mktplace.main.route_components = (function mktplace$main$route_components(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.Keyword(null,"new-wif","new-wif",1774583520),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),new cljs.core.Keyword(null,"transfer","transfer",327423400),new cljs.core.Keyword(null,"add-wif","add-wif",1047494665),new cljs.core.Keyword(null,"create-participant","create-participant",1545362508),new cljs.core.Keyword(null,"asset-form","asset-form",61149841),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.Keyword(null,"sell-offer-form","sell-offer-form",-291616872),new cljs.core.Keyword(null,"intro","intro",-886090599),new cljs.core.Keyword(null,"block-transactions","block-transactions",-1375582950),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"holding-form","holding-form",1871075199)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.offers.offers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.new_wif], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.dashboard.dashboard], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.exchanges.exchanges], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.exchanges.transfer_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.add_wif], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.create_participant], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.assets.asset_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.main.not_found], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.portfolio.portfolio_summary], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.offers.sell_offer_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.intro], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,sawtooth.components.block.transaction_history], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.exchanges.exchange_form], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mktplace.components.login.authed_component,mktplace.components.home.home,mktplace.components.holdings.holding_form], null)]);
});
mktplace.main.start_app = (function mktplace$main$start_app(){
var temp__4657__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__4657__auto__)){
var app_el = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,sawtooth.state.app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309)], null)], null));

sawtooth.router.initialize_route.call(null,mktplace.routes.home_path.call(null));

return om.core.root.call(null,mktplace.main.app,sawtooth.state.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),app_el,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),sawtooth.router.current_route,new cljs.core.Keyword(null,"route-components","route-components",587715338),mktplace.main.route_components,new cljs.core.Keyword(null,"not-found","not-found",-629079980),mktplace.main.not_found], null)], null));
} else {
return null;
}
});
sawtooth.events.on_content_loaded.call(null,mktplace.main.start_app);
mktplace.main.on_reload = (function mktplace$main$on_reload(){
return cljs.core.swap_BANG_.call(null,sawtooth.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),(1),new cljs.core.Keyword(null,"__timestamp","__timestamp",774587147)], null),Date.now());
});
