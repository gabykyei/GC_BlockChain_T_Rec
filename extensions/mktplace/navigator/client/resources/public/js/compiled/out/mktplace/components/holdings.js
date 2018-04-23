// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.holdings');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('sablono.core');
goog.require('mktplace.components.format');
goog.require('sawtooth.ledger.keys');
goog.require('mktplace.transactions');
goog.require('om.core');
goog.require('sawtooth.components.core');
mktplace.components.holdings.is_valid_asset_QMARK_ = (function mktplace$components$holdings$is_valid_asset_QMARK_(asset){
var and__6075__auto__ = asset;
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.not_EQ_.call(null,asset,new cljs.core.Keyword(null,"unselected","unselected",-1210198137));
} else {
return and__6075__auto__;
}
});
mktplace.components.holdings.is_valid_QMARK_ = (function mktplace$components$holdings$is_valid_QMARK_(p__29919){
var map__29922 = p__29919;
var map__29922__$1 = ((((!((map__29922 == null)))?((((map__29922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29922):map__29922);
var name = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var asset = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"asset","asset",-280274466));
var count = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var and__6075__auto__ = mktplace.components.holdings.is_valid_asset_QMARK_.call(null,asset);
if(cljs.core.truth_(and__6075__auto__)){
var and__6075__auto____$1 = mktplace.components.format.valid_object_name_QMARK_.call(null,name);
if(cljs.core.truth_(and__6075__auto____$1)){
return (count >= (0));
} else {
return and__6075__auto____$1;
}
} else {
return and__6075__auto__;
}
});
mktplace.components.holdings.can_add_instances_QMARK_ = (function mktplace$components$holdings$can_add_instances_QMARK_(p__29924,p__29925){
var map__29930 = p__29924;
var map__29930__$1 = ((((!((map__29930 == null)))?((((map__29930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29930):map__29930);
var participant_id = cljs.core.get.call(null,map__29930__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__29931 = p__29925;
var map__29931__$1 = ((((!((map__29931 == null)))?((((map__29931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29931):map__29931);
var asset = map__29931__$1;
var creator = cljs.core.get.call(null,map__29931__$1,new cljs.core.Keyword(null,"creator","creator",-1069241724));
var restricted = cljs.core.get.call(null,map__29931__$1,new cljs.core.Keyword(null,"restricted","restricted",2138314034));
var and__6075__auto__ = mktplace.components.holdings.is_valid_asset_QMARK_.call(null,asset);
if(cljs.core.truth_(and__6075__auto__)){
return (cljs.core._EQ_.call(null,participant_id,creator)) || (cljs.core.not.call(null,restricted));
} else {
return and__6075__auto__;
}
});
mktplace.components.holdings.asset_option = (function mktplace$components$holdings$asset_option(p__29934){
var map__29937 = p__29934;
var map__29937__$1 = ((((!((map__29937 == null)))?((((map__29937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29937):map__29937);
var asset = map__29937__$1;
var id = cljs.core.get.call(null,map__29937__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return sablono.interpreter.create_element.call(null,"option",{"key": id, "value": id},sablono.interpreter.interpret.call(null,mktplace.components.format.object_name.call(null,asset)));
});
mktplace.components.holdings.holding_form = (function mktplace$components$holdings$holding_form(data,owner){
var selected_asset = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"asset","asset",-280274466)], null));
var initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"asset","asset",-280274466),selected_asset], null);
var empty_option = sablono.interpreter.create_element.call(null,"option",{"key": (0), "value": "unselected"},"Select an Asset");
if(typeof mktplace.components.holdings.t_mktplace$components$holdings29952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.holdings.t_mktplace$components$holdings29952 = (function (holding_form,data,owner,selected_asset,initial_state,empty_option,meta29953){
this.holding_form = holding_form;
this.data = data;
this.owner = owner;
this.selected_asset = selected_asset;
this.initial_state = initial_state;
this.empty_option = empty_option;
this.meta29953 = meta29953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.holdings.t_mktplace$components$holdings29952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (selected_asset,initial_state,empty_option){
return (function (_29954,meta29953__$1){
var self__ = this;
var _29954__$1 = this;
return (new mktplace.components.holdings.t_mktplace$components$holdings29952(self__.holding_form,self__.data,self__.owner,self__.selected_asset,self__.initial_state,self__.empty_option,meta29953__$1));
});})(selected_asset,initial_state,empty_option))
;

mktplace.components.holdings.t_mktplace$components$holdings29952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (selected_asset,initial_state,empty_option){
return (function (_29954){
var self__ = this;
var _29954__$1 = this;
return self__.meta29953;
});})(selected_asset,initial_state,empty_option))
;

mktplace.components.holdings.t_mktplace$components$holdings29952.prototype.om$core$IInitState$ = true;

mktplace.components.holdings.t_mktplace$components$holdings29952.prototype.om$core$IInitState$init_state$arity$1 = ((function (selected_asset,initial_state,empty_option){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.initial_state;
});})(selected_asset,initial_state,empty_option))
;

mktplace.components.holdings.t_mktplace$components$holdings29952.prototype.om$core$IRenderState$ = true;

mktplace.components.holdings.t_mktplace$components$holdings29952.prototype.om$core$IRenderState$render_state$arity$2 = ((function (selected_asset,initial_state,empty_option){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var map__29955 = self__.data;
var map__29955__$1 = ((((!((map__29955 == null)))?((((map__29955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29955):map__29955);
var participant = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var assets = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var asset_options = cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.empty_option], null),cljs.core.map.call(null,((function (map__29955,map__29955__$1,participant,assets,___$1,selected_asset,initial_state,empty_option){
return (function (p1__29939_SHARP_){
return mktplace.components.holdings.asset_option.call(null,p1__29939_SHARP_);
});})(map__29955,map__29955__$1,participant,assets,___$1,selected_asset,initial_state,empty_option))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),assets)));
var submit_handler = ((function (map__29955,map__29955__$1,participant,assets,asset_options,___$1,selected_asset,initial_state,empty_option){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

if(cljs.core.truth_(mktplace.components.holdings.is_valid_QMARK_.call(null,state))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"mktplace.components.holdings","/project/sawtooth-core/extensions/mktplace/navigator/client/./scripts/build.clj",62,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__29955,map__29955__$1,participant,assets,asset_options,___$1,selected_asset,initial_state,empty_option){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["submitting %s",state], null);
});})(map__29955,map__29955__$1,participant,assets,asset_options,___$1,selected_asset,initial_state,empty_option))
,null)),null);

mktplace.transactions.register_holding.call(null,sawtooth.ledger.keys.get_key_pair.call(null),participant,state);

return om.core.set_state_BANG_.call(null,self__.owner,self__.initial_state);
} else {
return null;
}
});})(map__29955,map__29955__$1,participant,assets,asset_options,___$1,selected_asset,initial_state,empty_option))
;
return React.createElement("div",null,React.createElement("h3",null,"Create Record"),React.createElement("form",{"onSubmit": submit_handler, "className": "form holding-form"},sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"name","name",1843675177),"Name",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"An optional, human-readable name for\n                                      the Record. Must begin with '/'.",new cljs.core.Keyword(null,"pattern","pattern",242135423),mktplace.components.format.object_name_pattern], null))),sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"description","description",-1428560544),"Description",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"Optional information about the Record."], null))),sablono.interpreter.interpret.call(null,sawtooth.components.core.select_field.call(null,self__.owner,new cljs.core.Keyword(null,"asset","asset",-280274466),"Asset",asset_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),((function (map__29955,map__29955__$1,participant,assets,asset_options,submit_handler,___$1,selected_asset,initial_state,empty_option){
return (function (id){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29955,map__29955__$1,participant,assets,asset_options,submit_handler,___$1,selected_asset,initial_state,empty_option){
return (function (p1__29940_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29940_SHARP_));
});})(map__29955,map__29955__$1,participant,assets,asset_options,submit_handler,___$1,selected_asset,initial_state,empty_option))
,assets));
});})(map__29955,map__29955__$1,participant,assets,asset_options,submit_handler,___$1,selected_asset,initial_state,empty_option))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"unselected","unselected",-1210198137))], null))),sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"count","count",2139924085),"Count",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),sawtooth.components.core.__GT_int,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.holdings.can_add_instances_QMARK_.call(null,participant,new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(state)))], null))),sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,self__.initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.holdings.is_valid_QMARK_.call(null,state))], null)], null)))));
});})(selected_asset,initial_state,empty_option))
;

mktplace.components.holdings.t_mktplace$components$holdings29952.getBasis = ((function (selected_asset,initial_state,empty_option){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"holding-form","holding-form",-783360570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"selected-asset","selected-asset",-139148368,null),new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"empty-option","empty-option",267991741,null),new cljs.core.Symbol(null,"meta29953","meta29953",2098493533,null)], null);
});})(selected_asset,initial_state,empty_option))
;

mktplace.components.holdings.t_mktplace$components$holdings29952.cljs$lang$type = true;

mktplace.components.holdings.t_mktplace$components$holdings29952.cljs$lang$ctorStr = "mktplace.components.holdings/t_mktplace$components$holdings29952";

mktplace.components.holdings.t_mktplace$components$holdings29952.cljs$lang$ctorPrWriter = ((function (selected_asset,initial_state,empty_option){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.holdings/t_mktplace$components$holdings29952");
});})(selected_asset,initial_state,empty_option))
;

mktplace.components.holdings.__GT_t_mktplace$components$holdings29952 = ((function (selected_asset,initial_state,empty_option){
return (function mktplace$components$holdings$holding_form_$___GT_t_mktplace$components$holdings29952(holding_form__$1,data__$1,owner__$1,selected_asset__$1,initial_state__$1,empty_option__$1,meta29953){
return (new mktplace.components.holdings.t_mktplace$components$holdings29952(holding_form__$1,data__$1,owner__$1,selected_asset__$1,initial_state__$1,empty_option__$1,meta29953));
});})(selected_asset,initial_state,empty_option))
;

}

return (new mktplace.components.holdings.t_mktplace$components$holdings29952(mktplace$components$holdings$holding_form,data,owner,selected_asset,initial_state,empty_option,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Component for dispaying the Record details
 */
mktplace.components.holdings.holding_detail = (function mktplace$components$holdings$holding_detail(p__29959,owner){
var map__29974 = p__29959;
var map__29974__$1 = ((((!((map__29974 == null)))?((((map__29974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29974):map__29974);
var assets = cljs.core.get.call(null,map__29974__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var holding = cljs.core.get.call(null,map__29974__$1,new cljs.core.Keyword(null,"holding","holding",1269510599));
var participant_name = cljs.core.get.call(null,map__29974__$1,new cljs.core.Keyword(null,"participant-name","participant-name",-1813384843));
if(typeof mktplace.components.holdings.t_mktplace$components$holdings29976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.holdings.t_mktplace$components$holdings29976 = (function (holding_detail,p__29959,owner,map__29974,assets,holding,participant_name,meta29977){
this.holding_detail = holding_detail;
this.p__29959 = p__29959;
this.owner = owner;
this.map__29974 = map__29974;
this.assets = assets;
this.holding = holding;
this.participant_name = participant_name;
this.meta29977 = meta29977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.holdings.t_mktplace$components$holdings29976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29974,map__29974__$1,assets,holding,participant_name){
return (function (_29978,meta29977__$1){
var self__ = this;
var _29978__$1 = this;
return (new mktplace.components.holdings.t_mktplace$components$holdings29976(self__.holding_detail,self__.p__29959,self__.owner,self__.map__29974,self__.assets,self__.holding,self__.participant_name,meta29977__$1));
});})(map__29974,map__29974__$1,assets,holding,participant_name))
;

mktplace.components.holdings.t_mktplace$components$holdings29976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29974,map__29974__$1,assets,holding,participant_name){
return (function (_29978){
var self__ = this;
var _29978__$1 = this;
return self__.meta29977;
});})(map__29974,map__29974__$1,assets,holding,participant_name))
;

mktplace.components.holdings.t_mktplace$components$holdings29976.prototype.om$core$IRender$ = true;

mktplace.components.holdings.t_mktplace$components$holdings29976.prototype.om$core$IRender$render$arity$1 = ((function (map__29974,map__29974__$1,assets,holding,participant_name){
return (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
var holding_name = mktplace.components.format.object_name.call(null,self__.holding);
var holding_type = mktplace.components.format.asset_name_by_holding.call(null,self__.assets,self__.holding);
var amount = cljs.core.get.call(null,self__.holding,new cljs.core.Keyword(null,"count","count",2139924085));
var attrs29979 = (cljs.core.truth_(self__.participant_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.participant-name","span.participant-name",-1973462641),self__.participant_name], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29979))?sablono.interpreter.attributes.call(null,attrs29979):null),((cljs.core.map_QMARK_.call(null,attrs29979))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("table",{"className": "holding-entry"},React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,(function (){var attrs29980 = holding_name;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29980))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding-name"], null)], null),attrs29980)):{"className": "holding-name"}),((cljs.core.map_QMARK_.call(null,attrs29980))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29980)], null)));
})(),React.createElement("br",null),(function (){var attrs29983 = holding_type;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29983))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding-type"], null)], null),attrs29983)):{"className": "holding-type"}),((cljs.core.map_QMARK_.call(null,attrs29983))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29983)], null)));
})()),React.createElement("td",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding-count",((((0) > amount))?"text-danger":null)], null))},sablono.interpreter.interpret.call(null,amount)))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29979),React.createElement("table",{"className": "holding-entry"},React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,(function (){var attrs29984 = holding_name;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29984))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding-name"], null)], null),attrs29984)):{"className": "holding-name"}),((cljs.core.map_QMARK_.call(null,attrs29984))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29984)], null)));
})(),React.createElement("br",null),(function (){var attrs29987 = holding_type;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs29987))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding-type"], null)], null),attrs29987)):{"className": "holding-type"}),((cljs.core.map_QMARK_.call(null,attrs29987))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29987)], null)));
})()),React.createElement("td",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["holding-count",((((0) > amount))?"text-danger":null)], null))},sablono.interpreter.interpret.call(null,amount)))))], null)));
});})(map__29974,map__29974__$1,assets,holding,participant_name))
;

mktplace.components.holdings.t_mktplace$components$holdings29976.getBasis = ((function (map__29974,map__29974__$1,assets,holding,participant_name){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"holding-detail","holding-detail",954708487,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"holding","holding",-1384925170,null),new cljs.core.Symbol(null,"participant-name","participant-name",-172853316,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Component for dispaying the Record details"], null)),new cljs.core.Symbol(null,"p__29959","p__29959",-1449584536,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__29974","map__29974",119126440,null),new cljs.core.Symbol(null,"assets","assets",1850809806,null),new cljs.core.Symbol(null,"holding","holding",-1384925170,null),new cljs.core.Symbol(null,"participant-name","participant-name",-172853316,null),new cljs.core.Symbol(null,"meta29977","meta29977",1672798491,null)], null);
});})(map__29974,map__29974__$1,assets,holding,participant_name))
;

mktplace.components.holdings.t_mktplace$components$holdings29976.cljs$lang$type = true;

mktplace.components.holdings.t_mktplace$components$holdings29976.cljs$lang$ctorStr = "mktplace.components.holdings/t_mktplace$components$holdings29976";

mktplace.components.holdings.t_mktplace$components$holdings29976.cljs$lang$ctorPrWriter = ((function (map__29974,map__29974__$1,assets,holding,participant_name){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.holdings/t_mktplace$components$holdings29976");
});})(map__29974,map__29974__$1,assets,holding,participant_name))
;

mktplace.components.holdings.__GT_t_mktplace$components$holdings29976 = ((function (map__29974,map__29974__$1,assets,holding,participant_name){
return (function mktplace$components$holdings$holding_detail_$___GT_t_mktplace$components$holdings29976(holding_detail__$1,p__29959__$1,owner__$1,map__29974__$2,assets__$1,holding__$1,participant_name__$1,meta29977){
return (new mktplace.components.holdings.t_mktplace$components$holdings29976(holding_detail__$1,p__29959__$1,owner__$1,map__29974__$2,assets__$1,holding__$1,participant_name__$1,meta29977));
});})(map__29974,map__29974__$1,assets,holding,participant_name))
;

}

return (new mktplace.components.holdings.t_mktplace$components$holdings29976(mktplace$components$holdings$holding_detail,p__29959,owner,map__29974__$1,assets,holding,participant_name,null));
});
