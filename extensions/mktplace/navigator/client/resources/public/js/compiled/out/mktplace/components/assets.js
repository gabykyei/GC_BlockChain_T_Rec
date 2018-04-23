// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.assets');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('sablono.core');
goog.require('mktplace.components.format');
goog.require('sawtooth.ledger.keys');
goog.require('mktplace.transactions');
goog.require('om.core');
goog.require('sawtooth.components.core');
mktplace.components.assets.asset_type_options = (function mktplace$components$assets$asset_type_options(participant_id,asset_types){
var options = cljs.core.map.call(null,(function (p1__31076_SHARP_){
var map__31079 = p1__31076_SHARP_;
var map__31079__$1 = ((((!((map__31079 == null)))?((((map__31079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31079):map__31079);
var id = cljs.core.get.call(null,map__31079__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__31079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),name], null);
}),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.call(null,(function (p1__31075_SHARP_){
return (cljs.core._EQ_.call(null,participant_id,new cljs.core.Keyword(null,"creator","creator",-1069241724).cljs$core$IFn$_invoke$arity$1(p1__31075_SHARP_))) || (cljs.core.not.call(null,new cljs.core.Keyword(null,"restricted","restricted",2138314034).cljs$core$IFn$_invoke$arity$1(p1__31075_SHARP_)));
}),asset_types)));
return sablono.interpreter.interpret.call(null,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"unselected"], null),"Select a Skill Set"], null)], null),((cljs.core.empty_QMARK_.call(null,options))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"none"], null),"No Skill Sets Available"], null):options)));
});
mktplace.components.assets.is_valid_asset_type_QMARK_ = (function mktplace$components$assets$is_valid_asset_type_QMARK_(new_asset_type){
var and__6075__auto__ = new_asset_type;
if(cljs.core.truth_(and__6075__auto__)){
return mktplace.components.format.valid_object_name_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new_asset_type));
} else {
return and__6075__auto__;
}
});
mktplace.components.assets.is_valid_QMARK_ = (function mktplace$components$assets$is_valid_QMARK_(p__31081){
var map__31084 = p__31081;
var map__31084__$1 = ((((!((map__31084 == null)))?((((map__31084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31084):map__31084);
var name = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var asset_type = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094));
var new_asset_type = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428));
var and__6075__auto__ = (function (){var or__6087__auto__ = asset_type;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return mktplace.components.assets.is_valid_asset_type_QMARK_.call(null,new_asset_type);
}
})();
if(cljs.core.truth_(and__6075__auto__)){
return mktplace.components.format.valid_object_name_QMARK_.call(null,name);
} else {
return and__6075__auto__;
}
});
mktplace.components.assets.submit_asset = (function mktplace$components$assets$submit_asset(participant,state){
return mktplace.transactions.register_asset.call(null,sawtooth.ledger.keys.get_key_pair.call(null),participant,(function (){var or__6087__auto__ = new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428).cljs$core$IFn$_invoke$arity$1(state);
}
})(),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428),new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094)));
});
mktplace.components.assets.reset_form_BANG_ = (function mktplace$components$assets$reset_form_BANG_(owner,initial_state){
om.core.get_ref.call(null,owner,"asset-form").reset();

return om.core.set_state_BANG_.call(null,owner,initial_state);
});
mktplace.components.assets.asset_form = (function mktplace$components$assets$asset_form(data,owner){
var initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"consumable","consumable",-1094669117),true,new cljs.core.Keyword(null,"restricted","restricted",2138314034),true], null);
var initial_new_asset_type = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"restricted","restricted",2138314034),true], null);
if(typeof mktplace.components.assets.t_mktplace$components$assets31091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.assets.t_mktplace$components$assets31091 = (function (asset_form,data,owner,initial_state,initial_new_asset_type,meta31092){
this.asset_form = asset_form;
this.data = data;
this.owner = owner;
this.initial_state = initial_state;
this.initial_new_asset_type = initial_new_asset_type;
this.meta31092 = meta31092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.assets.t_mktplace$components$assets31091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (initial_state,initial_new_asset_type){
return (function (_31093,meta31092__$1){
var self__ = this;
var _31093__$1 = this;
return (new mktplace.components.assets.t_mktplace$components$assets31091(self__.asset_form,self__.data,self__.owner,self__.initial_state,self__.initial_new_asset_type,meta31092__$1));
});})(initial_state,initial_new_asset_type))
;

mktplace.components.assets.t_mktplace$components$assets31091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (initial_state,initial_new_asset_type){
return (function (_31093){
var self__ = this;
var _31093__$1 = this;
return self__.meta31092;
});})(initial_state,initial_new_asset_type))
;

mktplace.components.assets.t_mktplace$components$assets31091.prototype.om$core$IInitState$ = true;

mktplace.components.assets.t_mktplace$components$assets31091.prototype.om$core$IInitState$init_state$arity$1 = ((function (initial_state,initial_new_asset_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.initial_state;
});})(initial_state,initial_new_asset_type))
;

mktplace.components.assets.t_mktplace$components$assets31091.prototype.om$core$IRenderState$ = true;

mktplace.components.assets.t_mktplace$components$assets31091.prototype.om$core$IRenderState$render_state$arity$2 = ((function (initial_state,initial_new_asset_type){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var participant = new cljs.core.Keyword(null,"participant","participant",1962214029).cljs$core$IFn$_invoke$arity$1(self__.data);
var asset_types = mktplace.components.assets.asset_type_options.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(participant),new cljs.core.Keyword(null,"asset-types","asset-types",158107896).cljs$core$IFn$_invoke$arity$1(self__.data));
var submit_handler = ((function (participant,asset_types,___$1,initial_state,initial_new_asset_type){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"mktplace.components.assets","/project/sawtooth-core/extensions/mktplace/navigator/client/./scripts/build.clj",75,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (participant,asset_types,___$1,initial_state,initial_new_asset_type){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["submitting asset %s",state], null);
});})(participant,asset_types,___$1,initial_state,initial_new_asset_type))
,null)),null);

mktplace.components.assets.submit_asset.call(null,participant,state);

return mktplace.components.assets.reset_form_BANG_.call(null,self__.owner,self__.initial_state);
});})(participant,asset_types,___$1,initial_state,initial_new_asset_type))
;
var reset_handler = ((function (participant,asset_types,submit_handler,___$1,initial_state,initial_new_asset_type){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return mktplace.components.assets.reset_form_BANG_.call(null,self__.owner,self__.initial_state);
});})(participant,asset_types,submit_handler,___$1,initial_state,initial_new_asset_type))
;
return React.createElement("div",null,React.createElement("h3",null,"Create Asset"),React.createElement("form",{"onSubmit": submit_handler, "ref": "asset-form", "className": "form asset-form"},sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"name","name",1843675177),"Name",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"An optional, human-readable name for the\n                                      asset. Must begin with '/'.",new cljs.core.Keyword(null,"pattern","pattern",242135423),mktplace.components.format.object_name_pattern], null))),sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"description","description",-1428560544),"Description",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"Optional information about the asset."], null))),sablono.interpreter.interpret.call(null,sawtooth.components.core.select_field.call(null,self__.owner,new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),"Type",asset_types,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"peer","peer",1319662792),React.createElement("button",{"disabled": new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428).cljs$core$IFn$_invoke$arity$1(state), "onClick": ((function (participant,asset_types,submit_handler,reset_handler,___$1,initial_state,initial_new_asset_type){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428),self__.initial_new_asset_type);
});})(participant,asset_types,submit_handler,reset_handler,___$1,initial_state,initial_new_asset_type))
, "className": "btn btn-default"},sablono.interpreter.interpret.call(null,sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"plus","plus",211540661)))," Add Type")], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Create a Skill Set"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428),new cljs.core.Keyword(null,"name","name",1843675177)], null),"Name",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"An optional, human-readable name for\n                                          the skill set. Must begin with '/'.",new cljs.core.Keyword(null,"pattern","pattern",242135423),mktplace.components.format.object_name_pattern], null)),sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428),new cljs.core.Keyword(null,"description","description",-1428560544)], null),"Description",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-text","help-text",1567653015),"Optional information about the skill set."], null)),sawtooth.components.core.check_box_field.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428),new cljs.core.Keyword(null,"restricted","restricted",2138314034)], null),sawtooth.components.core.header_note.call(null,"Restricted","only the original creator can create skill sets of this type")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-button-group","div.form-button-group",1034886171),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.pull-right","button.btn.btn-default.pull-right",1868443249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (participant,asset_types,submit_handler,reset_handler,___$1,initial_state,initial_new_asset_type){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-asset-type","new-asset-type",1303162428),null);
});})(participant,asset_types,submit_handler,reset_handler,___$1,initial_state,initial_new_asset_type))
], null),"Discard"], null)], null)], null)], null):null)),sablono.interpreter.interpret.call(null,sawtooth.components.core.check_box_field.call(null,self__.owner,new cljs.core.Keyword(null,"restricted","restricted",2138314034),sawtooth.components.core.header_note.call(null,"Restricted","only the original creator can create Records of this skill set"))),sablono.interpreter.interpret.call(null,sawtooth.components.core.check_box_field.call(null,self__.owner,new cljs.core.Keyword(null,"consumable","consumable",-1094669117),sawtooth.components.core.header_note.call(null,"Consumable","used when transfered, i.e. non-infinite"))),sablono.interpreter.interpret.call(null,sawtooth.components.core.check_box_field.call(null,self__.owner,new cljs.core.Keyword(null,"divisible","divisible",-221365488),sawtooth.components.core.header_note.call(null,"Divisible","can exist in fractional form"))),sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,self__.initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.assets.is_valid_QMARK_.call(null,state))], null)], null)))));
});})(initial_state,initial_new_asset_type))
;

mktplace.components.assets.t_mktplace$components$assets31091.getBasis = ((function (initial_state,initial_new_asset_type){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"asset-form","asset-form",1701681368,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"initial-new-asset-type","initial-new-asset-type",-682915216,null),new cljs.core.Symbol(null,"meta31092","meta31092",1949327782,null)], null);
});})(initial_state,initial_new_asset_type))
;

mktplace.components.assets.t_mktplace$components$assets31091.cljs$lang$type = true;

mktplace.components.assets.t_mktplace$components$assets31091.cljs$lang$ctorStr = "mktplace.components.assets/t_mktplace$components$assets31091";

mktplace.components.assets.t_mktplace$components$assets31091.cljs$lang$ctorPrWriter = ((function (initial_state,initial_new_asset_type){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.assets/t_mktplace$components$assets31091");
});})(initial_state,initial_new_asset_type))
;

mktplace.components.assets.__GT_t_mktplace$components$assets31091 = ((function (initial_state,initial_new_asset_type){
return (function mktplace$components$assets$asset_form_$___GT_t_mktplace$components$assets31091(asset_form__$1,data__$1,owner__$1,initial_state__$1,initial_new_asset_type__$1,meta31092){
return (new mktplace.components.assets.t_mktplace$components$assets31091(asset_form__$1,data__$1,owner__$1,initial_state__$1,initial_new_asset_type__$1,meta31092));
});})(initial_state,initial_new_asset_type))
;

}

return (new mktplace.components.assets.t_mktplace$components$assets31091(mktplace$components$assets$asset_form,data,owner,initial_state,initial_new_asset_type,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.assets.asset_detail = (function mktplace$components$assets$asset_detail(p__31096,owner){
var map__31106 = p__31096;
var map__31106__$1 = ((((!((map__31106 == null)))?((((map__31106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31106):map__31106);
var asset_types = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"asset-types","asset-types",158107896));
var asset = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"asset","asset",-280274466));
if(typeof mktplace.components.assets.t_mktplace$components$assets31108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.assets.t_mktplace$components$assets31108 = (function (asset_detail,p__31096,owner,map__31106,asset_types,asset,meta31109){
this.asset_detail = asset_detail;
this.p__31096 = p__31096;
this.owner = owner;
this.map__31106 = map__31106;
this.asset_types = asset_types;
this.asset = asset;
this.meta31109 = meta31109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.assets.t_mktplace$components$assets31108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31106,map__31106__$1,asset_types,asset){
return (function (_31110,meta31109__$1){
var self__ = this;
var _31110__$1 = this;
return (new mktplace.components.assets.t_mktplace$components$assets31108(self__.asset_detail,self__.p__31096,self__.owner,self__.map__31106,self__.asset_types,self__.asset,meta31109__$1));
});})(map__31106,map__31106__$1,asset_types,asset))
;

mktplace.components.assets.t_mktplace$components$assets31108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31106,map__31106__$1,asset_types,asset){
return (function (_31110){
var self__ = this;
var _31110__$1 = this;
return self__.meta31109;
});})(map__31106,map__31106__$1,asset_types,asset))
;

mktplace.components.assets.t_mktplace$components$assets31108.prototype.om$core$IRender$ = true;

mktplace.components.assets.t_mktplace$components$assets31108.prototype.om$core$IRender$render$arity$1 = ((function (map__31106,map__31106__$1,asset_types,asset){
return (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
var asset_name = mktplace.components.format.object_name.call(null,self__.asset);
var asset_type_name = mktplace.components.format.asset_type_name_by_asset.call(null,self__.asset_types,self__.asset);
return React.createElement("div",null,(function (){var attrs31111 = asset_name;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs31111))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["asset-name"], null)], null),attrs31111)):{"className": "asset-name"}),((cljs.core.map_QMARK_.call(null,attrs31111))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31111)], null)));
})(),React.createElement("br",null),(function (){var attrs31114 = asset_type_name;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs31114))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["asset-type"], null)], null),attrs31114)):{"className": "asset-type"}),((cljs.core.map_QMARK_.call(null,attrs31114))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31114)], null)));
})());
});})(map__31106,map__31106__$1,asset_types,asset))
;

mktplace.components.assets.t_mktplace$components$assets31108.getBasis = ((function (map__31106,map__31106__$1,asset_types,asset){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"asset-detail","asset-detail",433409572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"asset-types","asset-types",1798639423,null),new cljs.core.Symbol(null,"asset","asset",1360257061,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31096","p__31096",1195444623,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__31106","map__31106",1819500232,null),new cljs.core.Symbol(null,"asset-types","asset-types",1798639423,null),new cljs.core.Symbol(null,"asset","asset",1360257061,null),new cljs.core.Symbol(null,"meta31109","meta31109",1411543542,null)], null);
});})(map__31106,map__31106__$1,asset_types,asset))
;

mktplace.components.assets.t_mktplace$components$assets31108.cljs$lang$type = true;

mktplace.components.assets.t_mktplace$components$assets31108.cljs$lang$ctorStr = "mktplace.components.assets/t_mktplace$components$assets31108";

mktplace.components.assets.t_mktplace$components$assets31108.cljs$lang$ctorPrWriter = ((function (map__31106,map__31106__$1,asset_types,asset){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.assets/t_mktplace$components$assets31108");
});})(map__31106,map__31106__$1,asset_types,asset))
;

mktplace.components.assets.__GT_t_mktplace$components$assets31108 = ((function (map__31106,map__31106__$1,asset_types,asset){
return (function mktplace$components$assets$asset_detail_$___GT_t_mktplace$components$assets31108(asset_detail__$1,p__31096__$1,owner__$1,map__31106__$2,asset_types__$1,asset__$1,meta31109){
return (new mktplace.components.assets.t_mktplace$components$assets31108(asset_detail__$1,p__31096__$1,owner__$1,map__31106__$2,asset_types__$1,asset__$1,meta31109));
});})(map__31106,map__31106__$1,asset_types,asset))
;

}

return (new mktplace.components.assets.t_mktplace$components$assets31108(mktplace$components$assets$asset_detail,p__31096,owner,map__31106__$1,asset_types,asset,null));
});
