// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.portfolio');
goog.require('cljs.core');
goog.require('mktplace.components.holdings');
goog.require('mktplace.service.offer');
goog.require('sablono.core');
goog.require('mktplace.components.format');
goog.require('mktplace.service.asset');
goog.require('mktplace.routes');
goog.require('sawtooth.ledger.keys');
goog.require('mktplace.service.exchange');
goog.require('mktplace.components.offers');
goog.require('mktplace.service.selection');
goog.require('sawtooth.components.core');
goog.require('om.core');
goog.require('mktplace.components.exchanges');
goog.require('mktplace.components.assets');
mktplace.components.portfolio.holding_row = (function mktplace$components$portfolio$holding_row(assets,selections,selectable_QMARK_,holding){
if(cljs.core.truth_(selectable_QMARK_)){
var selected_QMARK_ = cljs.core._EQ_.call(null,holding,cljs.core.get.call(null,selections,new cljs.core.Keyword(null,"holding","holding",1269510599)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(holding),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return mktplace.service.selection.select_holding_BANG_.call(null,((!(selected_QMARK_))?holding:null));
});})(selected_QMARK_))
], null),om.core.build.call(null,mktplace.components.holdings.holding_detail,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"holding","holding",1269510599),holding], null))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group-item","div.list-group-item",983333490),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(holding)], null),om.core.build.call(null,mktplace.components.holdings.holding_detail,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"holding","holding",1269510599),holding], null))], null);
}
});
mktplace.components.portfolio.holding_list = (function mktplace$components$portfolio$holding_list(var_args){
var args31117 = [];
var len__7157__auto___31121 = arguments.length;
var i__7158__auto___31122 = (0);
while(true){
if((i__7158__auto___31122 < len__7157__auto___31121)){
args31117.push((arguments[i__7158__auto___31122]));

var G__31123 = (i__7158__auto___31122 + (1));
i__7158__auto___31122 = G__31123;
continue;
} else {
}
break;
}

var G__31119 = args31117.length;
switch (G__31119) {
case 3:
return mktplace.components.portfolio.holding_list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return mktplace.components.portfolio.holding_list.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31117.length)].join('')));

}
});

mktplace.components.portfolio.holding_list.cljs$core$IFn$_invoke$arity$3 = (function (assets,holdings,selections){
return mktplace.components.portfolio.holding_list.call(null,assets,holdings,selections,true);
});

mktplace.components.portfolio.holding_list.cljs$core$IFn$_invoke$arity$4 = (function (assets,holdings,selections,selectable_QMARK_){
var attrs31120 = ((((0) < cljs.core.count.call(null,holdings)))?cljs.core.map.call(null,cljs.core.partial.call(null,mktplace.components.portfolio.holding_row,assets,selections,selectable_QMARK_),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"count","count",2139924085),holdings))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-holdings","div.empty-holdings",-1177694466),(cljs.core.truth_((function (){var and__6075__auto__ = selectable_QMARK_;
if(cljs.core.truth_(and__6075__auto__)){
return !(cljs.core.empty_QMARK_.call(null,assets));
} else {
return and__6075__auto__;
}
})())?"Select a Talent to see Records":"No Records")], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31120))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"holdings",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-group"], null)], null),attrs31120)):{"id": "holdings", "className": "list-group"}),((cljs.core.map_QMARK_.call(null,attrs31120))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31120)], null)));
});

mktplace.components.portfolio.holding_list.cljs$lang$maxFixedArity = 4;
mktplace.components.portfolio.asset_row = (function mktplace$components$portfolio$asset_row(asset_types,selections,asset){
var selected_QMARK_ = cljs.core._EQ_.call(null,asset,cljs.core.get.call(null,selections,new cljs.core.Keyword(null,"asset","asset",-280274466)));
return React.createElement("a",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(asset), "href=": "#", "onClick": ((function (selected_QMARK_){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return mktplace.service.selection.select_asset_BANG_.call(null,((!(selected_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset","asset",-280274466),asset], null):null));
});})(selected_QMARK_))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-group-item",((selected_QMARK_)?"active":null)], null))},sablono.interpreter.interpret.call(null,om.core.build.call(null,mktplace.components.assets.asset_detail,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asset-types","asset-types",158107896),asset_types,new cljs.core.Keyword(null,"asset","asset",-280274466),asset], null))));
});
mktplace.components.portfolio.asset_list = (function mktplace$components$portfolio$asset_list(asset_types,assets,selections){
var attrs31126 = ((cljs.core.empty_QMARK_.call(null,assets))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.empty-assets","li.empty-assets",1902380040),"No Skills"], null):cljs.core.map.call(null,cljs.core.partial.call(null,mktplace.components.portfolio.asset_row,asset_types,selections),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),assets)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31126))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"assets",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-group"], null)], null),attrs31126)):{"id": "assets", "className": "list-group"}),((cljs.core.map_QMARK_.call(null,attrs31126))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31126)], null)));
});
mktplace.components.portfolio.column_header = (function mktplace$components$portfolio$column_header(label,create_link_target){
return React.createElement("div",{"className": "row"},React.createElement("div",{"className": "col-xs-6"},(function (){var attrs31128 = label;
return cljs.core.apply.call(null,React.createElement,"h4",((cljs.core.map_QMARK_.call(null,attrs31128))?sablono.interpreter.attributes.call(null,attrs31128):null),((cljs.core.map_QMARK_.call(null,attrs31128))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31128)], null)));
})()),React.createElement("div",{"className": "col-xs-6"},React.createElement("a",{"href": create_link_target, "className": "btn btn-default btn-xs pull-right header-btn"},sablono.interpreter.interpret.call(null,sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"plus","plus",211540661))))));
});
mktplace.components.portfolio.portfolio = (function mktplace$components$portfolio$portfolio(p__31129,_){
var map__31137 = p__31129;
var map__31137__$1 = ((((!((map__31137 == null)))?((((map__31137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31137):map__31137);
var asset_types = cljs.core.get.call(null,map__31137__$1,new cljs.core.Keyword(null,"asset-types","asset-types",158107896));
var assets = cljs.core.get.call(null,map__31137__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var holdings = cljs.core.get.call(null,map__31137__$1,new cljs.core.Keyword(null,"holdings","holdings",195829975));
var selections = cljs.core.get.call(null,map__31137__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
if(typeof mktplace.components.portfolio.t_mktplace$components$portfolio31139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.portfolio.t_mktplace$components$portfolio31139 = (function (portfolio,p__31129,_,map__31137,asset_types,assets,holdings,selections,meta31140){
this.portfolio = portfolio;
this.p__31129 = p__31129;
this._ = _;
this.map__31137 = map__31137;
this.asset_types = asset_types;
this.assets = assets;
this.holdings = holdings;
this.selections = selections;
this.meta31140 = meta31140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.portfolio.t_mktplace$components$portfolio31139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31137,map__31137__$1,asset_types,assets,holdings,selections){
return (function (_31141,meta31140__$1){
var self__ = this;
var _31141__$1 = this;
return (new mktplace.components.portfolio.t_mktplace$components$portfolio31139(self__.portfolio,self__.p__31129,self__._,self__.map__31137,self__.asset_types,self__.assets,self__.holdings,self__.selections,meta31140__$1));
});})(map__31137,map__31137__$1,asset_types,assets,holdings,selections))
;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31137,map__31137__$1,asset_types,assets,holdings,selections){
return (function (_31141){
var self__ = this;
var _31141__$1 = this;
return self__.meta31140;
});})(map__31137,map__31137__$1,asset_types,assets,holdings,selections))
;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.prototype.om$core$IDisplayName$ = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__31137,map__31137__$1,asset_types,assets,holdings,selections){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "Portfolio";
});})(map__31137,map__31137__$1,asset_types,assets,holdings,selections))
;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.prototype.om$core$IRender$ = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.prototype.om$core$IRender$render$arity$1 = ((function (map__31137,map__31137__$1,asset_types,assets,holdings,selections){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return React.createElement("div",{"className": "row"},(function (){var attrs31142 = mktplace.components.portfolio.column_header.call(null,"Skills",mktplace.routes.asset_create_path.call(null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31142))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-6"], null)], null),attrs31142)):{"className": "col-xs-6"}),((cljs.core.map_QMARK_.call(null,attrs31142))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,mktplace.components.portfolio.asset_list.call(null,self__.asset_types,self__.assets,self__.selections))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31142),sablono.interpreter.interpret.call(null,mktplace.components.portfolio.asset_list.call(null,self__.asset_types,self__.assets,self__.selections))], null)));
})(),(function (){var attrs31143 = mktplace.components.portfolio.column_header.call(null,"Records",mktplace.routes.holding_create_path.call(null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31143))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-6"], null)], null),attrs31143)):{"className": "col-xs-6"}),((cljs.core.map_QMARK_.call(null,attrs31143))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,mktplace.components.portfolio.holding_list.call(null,self__.assets,self__.holdings,self__.selections))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31143),sablono.interpreter.interpret.call(null,mktplace.components.portfolio.holding_list.call(null,self__.assets,self__.holdings,self__.selections))], null)));
})());
});})(map__31137,map__31137__$1,asset_types,assets,holdings,selections))
;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.getBasis = ((function (map__31137,map__31137__$1,asset_types,assets,holdings,selections){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"portfolio","portfolio",-1696867171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asset-types","asset-types",1798639423,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"holdings","holdings",1836361502,null),new cljs.core.Symbol(null,"selections","selections",362921294,null)], null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null)),new cljs.core.Symbol(null,"p__31129","p__31129",-499427840,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"map__31137","map__31137",1347706200,null),new cljs.core.Symbol(null,"asset-types","asset-types",1798639423,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"holdings","holdings",1836361502,null),new cljs.core.Symbol(null,"selections","selections",362921294,null),new cljs.core.Symbol(null,"meta31140","meta31140",-1554535179,null)], null);
});})(map__31137,map__31137__$1,asset_types,assets,holdings,selections))
;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.cljs$lang$type = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31139.cljs$lang$ctorStr = "mktplace.components.portfolio/t_mktplace$components$portfolio31139";

mktplace.components.portfolio.t_mktplace$components$portfolio31139.cljs$lang$ctorPrWriter = ((function (map__31137,map__31137__$1,asset_types,assets,holdings,selections){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.portfolio/t_mktplace$components$portfolio31139");
});})(map__31137,map__31137__$1,asset_types,assets,holdings,selections))
;

mktplace.components.portfolio.__GT_t_mktplace$components$portfolio31139 = ((function (map__31137,map__31137__$1,asset_types,assets,holdings,selections){
return (function mktplace$components$portfolio$portfolio_$___GT_t_mktplace$components$portfolio31139(portfolio__$1,p__31129__$1,___$1,map__31137__$2,asset_types__$1,assets__$1,holdings__$1,selections__$1,meta31140){
return (new mktplace.components.portfolio.t_mktplace$components$portfolio31139(portfolio__$1,p__31129__$1,___$1,map__31137__$2,asset_types__$1,assets__$1,holdings__$1,selections__$1,meta31140));
});})(map__31137,map__31137__$1,asset_types,assets,holdings,selections))
;

}

return (new mktplace.components.portfolio.t_mktplace$components$portfolio31139(mktplace$components$portfolio$portfolio,p__31129,_,map__31137__$1,asset_types,assets,holdings,selections,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.portfolio.make_revoke_control_fn = (function mktplace$components$portfolio$make_revoke_control_fn(participant){
return (function (offer){
return React.createElement("div",{"className": "offer-controls"},React.createElement("a",{"href": "#", "onClick": (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return mktplace.service.offer.revoke.call(null,sawtooth.ledger.keys.get_key_pair.call(null),participant,offer);
})},sablono.interpreter.interpret.call(null,sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"trash","trash",-1136970594)))));
});
});
mktplace.components.portfolio.load_portfolio_info = (function mktplace$components$portfolio$load_portfolio_info(app_state){
var participant = new cljs.core.Keyword(null,"participant","participant",1962214029).cljs$core$IFn$_invoke$arity$1(app_state);
mktplace.service.asset.assets.call(null);

mktplace.service.offer.owned_offers.call(null,participant,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(5)], null));

return mktplace.service.exchange.exchanges.call(null,participant,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(5)], null));
});
mktplace.components.portfolio.portfolio_summary = (function mktplace$components$portfolio$portfolio_summary(data,owner){
if(typeof mktplace.components.portfolio.t_mktplace$components$portfolio31155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.portfolio.t_mktplace$components$portfolio31155 = (function (portfolio_summary,data,owner,meta31156){
this.portfolio_summary = portfolio_summary;
this.data = data;
this.owner = owner;
this.meta31156 = meta31156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31157,meta31156__$1){
var self__ = this;
var _31157__$1 = this;
return (new mktplace.components.portfolio.t_mktplace$components$portfolio31155(self__.portfolio_summary,self__.data,self__.owner,meta31156__$1));
});

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31157){
var self__ = this;
var _31157__$1 = this;
return self__.meta31156;
});

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IDisplayName$ = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "PortfolioSummary";
});

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IWillMount$ = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return mktplace.components.portfolio.load_portfolio_info.call(null,self__.data);
});

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IWillReceiveProps$ = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,next_state){
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
,false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210)], null)))){
return mktplace.components.portfolio.load_portfolio_info.call(null,next_state);
} else {
return null;
}
});

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IRender$ = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31155.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__31158 = self__.data;
var map__31158__$1 = ((((!((map__31158 == null)))?((((map__31158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31158):map__31158);
var assets = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var participant = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var view_participant = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"view-participant","view-participant",-1183789579));
var participants = cljs.core.get.call(null,map__31158__$1,new cljs.core.Keyword(null,"participants","participants",673603367));
var participant__$1 = (function (){var or__6087__auto__ = view_participant;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return participant;
}
})();
var holdings = cljs.core.get.call(null,participant__$1,new cljs.core.Keyword(null,"holdings","holdings",195829975));
var offers = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var exchanges = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),new cljs.core.Keyword(null,"data","data",-232669377)], null));
return React.createElement("div",{"className": "container-fluid"},React.createElement("h3",{"className": "page-header"},"My Wallet"),React.createElement("div",{"className": "row"},React.createElement("div",{"className": "col-md-4"},React.createElement("div",{"className": "scroll-area"},React.createElement("h4",null,"Holdings"),sablono.interpreter.interpret.call(null,mktplace.components.portfolio.holding_list.call(null,assets,holdings,null,false)))),React.createElement("div",{"className": "col-md-6"},(function (){var attrs31164 = om.core.build.call(null,mktplace.components.offers.offer_table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"offers","offers",796187776),offers,new cljs.core.Keyword(null,"participants","participants",673603367),participants,new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"title","title",636505583),"My Latest Skill Record Requests",new cljs.core.Keyword(null,"control-fn","control-fn",-890393154),mktplace.components.portfolio.make_revoke_control_fn.call(null,participant__$1)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31164))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["offer-area"], null)], null),attrs31164)):{"className": "offer-area"}),((cljs.core.map_QMARK_.call(null,attrs31164))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31164)], null)));
})(),(function (){var attrs31165 = om.core.build.call(null,mktplace.components.exchanges.exchange_table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),exchanges,new cljs.core.Keyword(null,"participants","participants",673603367),participants,new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"title","title",636505583),"My Recent Skills Acquired"], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31165))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exchange-area"], null)], null),attrs31165)):{"className": "exchange-area"}),((cljs.core.map_QMARK_.call(null,attrs31165))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31165)], null)));
})())));
});

mktplace.components.portfolio.t_mktplace$components$portfolio31155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"portfolio-summary","portfolio-summary",289221211,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31156","meta31156",-247075981,null)], null);
});

mktplace.components.portfolio.t_mktplace$components$portfolio31155.cljs$lang$type = true;

mktplace.components.portfolio.t_mktplace$components$portfolio31155.cljs$lang$ctorStr = "mktplace.components.portfolio/t_mktplace$components$portfolio31155";

mktplace.components.portfolio.t_mktplace$components$portfolio31155.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.portfolio/t_mktplace$components$portfolio31155");
});

mktplace.components.portfolio.__GT_t_mktplace$components$portfolio31155 = (function mktplace$components$portfolio$portfolio_summary_$___GT_t_mktplace$components$portfolio31155(portfolio_summary__$1,data__$1,owner__$1,meta31156){
return (new mktplace.components.portfolio.t_mktplace$components$portfolio31155(portfolio_summary__$1,data__$1,owner__$1,meta31156));
});

}

return (new mktplace.components.portfolio.t_mktplace$components$portfolio31155(mktplace$components$portfolio$portfolio_summary,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
