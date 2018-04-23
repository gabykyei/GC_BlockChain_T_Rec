// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.login');
goog.require('cljs.core');
goog.require('sawtooth.files');
goog.require('sawtooth.service.common');
goog.require('mktplace.service.participant');
goog.require('sablono.core');
goog.require('mktplace.components.header');
goog.require('cljs.core.async');
goog.require('sawtooth.router');
goog.require('sawtooth.service.block');
goog.require('mktplace.routes');
goog.require('sawtooth.ledger.keys');
goog.require('sawtooth.utils');
goog.require('sawtooth.components.tooltip');
goog.require('module$lib$deps_library');
goog.require('om.core');
goog.require('sawtooth.components.core');
mktplace.components.login.is_valid_QMARK_ = (function mktplace$components$login$is_valid_QMARK_(p__30778){
var map__30781 = p__30778;
var map__30781__$1 = ((((!((map__30781 == null)))?((((map__30781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30781):map__30781);
var participant_name = cljs.core.get.call(null,map__30781__$1,new cljs.core.Keyword(null,"participant-name","participant-name",-1813384843));
var and__6075__auto__ = participant_name;
if(cljs.core.truth_(and__6075__auto__)){
return !(cljs.core.empty_QMARK_.call(null,participant_name));
} else {
return and__6075__auto__;
}
});
mktplace.components.login.create_participant = (function mktplace$components$login$create_participant(p__30783,owner){
var map__30797 = p__30783;
var map__30797__$1 = ((((!((map__30797 == null)))?((((map__30797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30797):map__30797);
var route = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"route","route",329891309));
if(typeof mktplace.components.login.t_mktplace$components$login30799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.login.t_mktplace$components$login30799 = (function (create_participant,p__30783,owner,map__30797,route,meta30800){
this.create_participant = create_participant;
this.p__30783 = p__30783;
this.owner = owner;
this.map__30797 = map__30797;
this.route = route;
this.meta30800 = meta30800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.login.t_mktplace$components$login30799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30797,map__30797__$1,route){
return (function (_30801,meta30800__$1){
var self__ = this;
var _30801__$1 = this;
return (new mktplace.components.login.t_mktplace$components$login30799(self__.create_participant,self__.p__30783,self__.owner,self__.map__30797,self__.route,meta30800__$1));
});})(map__30797,map__30797__$1,route))
;

mktplace.components.login.t_mktplace$components$login30799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30797,map__30797__$1,route){
return (function (_30801){
var self__ = this;
var _30801__$1 = this;
return self__.meta30800;
});})(map__30797,map__30797__$1,route))
;

mktplace.components.login.t_mktplace$components$login30799.prototype.om$core$IInitState$ = true;

mktplace.components.login.t_mktplace$components$login30799.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__30797,map__30797__$1,route){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(map__30797,map__30797__$1,route))
;

mktplace.components.login.t_mktplace$components$login30799.prototype.om$core$IRenderState$ = true;

mktplace.components.login.t_mktplace$components$login30799.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30797,map__30797__$1,route){
return (function (_,p__30802){
var self__ = this;
var map__30803 = p__30802;
var map__30803__$1 = ((((!((map__30803 == null)))?((((map__30803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30803):map__30803);
var state = map__30803__$1;
var participant_name = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"participant-name","participant-name",-1813384843));
var participant_description = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"participant-description","participant-description",-1235023195));
var ___$1 = this;
var vec__30805 = self__.route;
var ___$2 = cljs.core.nth.call(null,vec__30805,(0),null);
var map__30806 = cljs.core.nth.call(null,vec__30805,(1),null);
var map__30806__$1 = ((((!((map__30806 == null)))?((((map__30806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30806):map__30806);
var address = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"address","address",559499426));
var submit_handler = ((function (vec__30805,___$2,map__30806,map__30806__$1,address,___$1,map__30803,map__30803__$1,state,participant_name,participant_description,map__30797,map__30797__$1,route){
return (function (e__29654__auto__){
var form__29655__auto__ = om.core.get_node.call(null,self__.owner,"participant-form");
var is_valid_QMARK___29656__auto__ = form__29655__auto__.checkValidity();
if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
e__29654__auto__.preventDefault();

mktplace.service.participant.register.call(null,sawtooth.ledger.keys.get_key_pair.call(null),address,participant_name,participant_description);
} else {
}

if(cljs.core.truth_(is_valid_QMARK___29656__auto__)){
return null;
} else {
return form__29655__auto__.reportValidity();
}
});})(vec__30805,___$2,map__30806,map__30806__$1,address,___$1,map__30803,map__30803__$1,state,participant_name,participant_description,map__30797,map__30797__$1,route))
;
var cancel_handler = ((function (vec__30805,___$2,map__30806,map__30806__$1,address,submit_handler,___$1,map__30803,map__30803__$1,state,participant_name,participant_description,map__30797,map__30797__$1,route){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

sawtooth.ledger.keys.clear_wif_BANG_.call(null);

return sawtooth.router.push.call(null,mktplace.routes.intro_path.call(null));
});})(vec__30805,___$2,map__30806,map__30806__$1,address,submit_handler,___$1,map__30803,map__30803__$1,state,participant_name,participant_description,map__30797,map__30797__$1,route))
;
return React.createElement("div",{"className": "container"},React.createElement("h2",null,"Create a Participant"),React.createElement("form",{"onSubmit": submit_handler, "ref": "participant-form", "className": "form-horizontal create-particiant-form"},sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"participant-name","participant-name",-1813384843),"Name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null))),sablono.interpreter.interpret.call(null,sawtooth.components.core.text_field.call(null,self__.owner,new cljs.core.Keyword(null,"participant-description","participant-description",-1235023195),sawtooth.components.core.header_note.call(null,"Description","optional"))),sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,mktplace.components.login.is_valid_QMARK_.call(null,state))], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_handler], null)], null)))));
});})(map__30797,map__30797__$1,route))
;

mktplace.components.login.t_mktplace$components$login30799.getBasis = ((function (map__30797,map__30797__$1,route){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-participant","create-participant",-1109073261,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__30783","p__30783",-2061758229,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__30797","map__30797",708334309,null),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"meta30800","meta30800",1897670116,null)], null);
});})(map__30797,map__30797__$1,route))
;

mktplace.components.login.t_mktplace$components$login30799.cljs$lang$type = true;

mktplace.components.login.t_mktplace$components$login30799.cljs$lang$ctorStr = "mktplace.components.login/t_mktplace$components$login30799";

mktplace.components.login.t_mktplace$components$login30799.cljs$lang$ctorPrWriter = ((function (map__30797,map__30797__$1,route){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.login/t_mktplace$components$login30799");
});})(map__30797,map__30797__$1,route))
;

mktplace.components.login.__GT_t_mktplace$components$login30799 = ((function (map__30797,map__30797__$1,route){
return (function mktplace$components$login$create_participant_$___GT_t_mktplace$components$login30799(create_participant__$1,p__30783__$1,owner__$1,map__30797__$2,route__$1,meta30800){
return (new mktplace.components.login.t_mktplace$components$login30799(create_participant__$1,p__30783__$1,owner__$1,map__30797__$2,route__$1,meta30800));
});})(map__30797,map__30797__$1,route))
;

}

return (new mktplace.components.login.t_mktplace$components$login30799(mktplace$components$login$create_participant,p__30783,owner,map__30797__$1,route,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.login.intro = (function mktplace$components$login$intro(data,owner){
if(typeof mktplace.components.login.t_mktplace$components$login30825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.login.t_mktplace$components$login30825 = (function (intro,data,owner,meta30826){
this.intro = intro;
this.data = data;
this.owner = owner;
this.meta30826 = meta30826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.login.t_mktplace$components$login30825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30827,meta30826__$1){
var self__ = this;
var _30827__$1 = this;
return (new mktplace.components.login.t_mktplace$components$login30825(self__.intro,self__.data,self__.owner,meta30826__$1));
});

mktplace.components.login.t_mktplace$components$login30825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30827){
var self__ = this;
var _30827__$1 = this;
return self__.meta30826;
});

mktplace.components.login.t_mktplace$components$login30825.prototype.om$core$IRenderState$ = true;

mktplace.components.login.t_mktplace$components$login30825.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30828){
var self__ = this;
var map__30829 = p__30828;
var map__30829__$1 = ((((!((map__30829 == null)))?((((map__30829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30829):map__30829);
var show_settings_QMARK_ = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"show-settings?","show-settings?",618408917));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("div",{"className": "text-center"},React.createElement("h1",null,"Welcome to the T_Rec Navigator"),React.createElement("p",null,"T_Rec Navigator is a simple proof-of-concept talent and skill\n              record keeping  built on top of the Sawtooth Lake distrubted ledger,\n              and is ",React.createElement("a",{"href": "http://intelledger.github.io/mktnav_users_guide.html", "target": "_blank"},"documented here"),"."),React.createElement("p",null,"To begin you will need to create an identity by generating a new\n              Wallet Import Format (WIF) key or importing an existing one."),sablono.interpreter.interpret.call(null,(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edge","edge",919909153),sawtooth.utils.browser.call(null))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ie","ie",2038473780),sawtooth.utils.browser.call(null))) || (cljs.core.not.call(null,sawtooth.utils.browser.call(null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger.col-md-10.col-md-offset-1","div.alert.alert-danger.col-md-10.col-md-offset-1",-1382418979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-exclamation-sign","span.glyphicon.glyphicon-exclamation-sign",780702267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edge","edge",919909153),sawtooth.utils.browser.call(null)))?" Microsoft Edge is not supported for this demo.":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ie","ie",2038473780),sawtooth.utils.browser.call(null)))?" Internet Explorer is not supported for this demo.":" Your browser configuration could not be detected."
))," We recommend using Google Chrome for the best experience."], null)], null):null))),React.createElement("div",{"className": "panel panel-warning"},React.createElement("div",{"className": "panel-heading"},"Generate or import your WIF key:"),(function (){var attrs30839 = sawtooth.components.core.boot_row.call(null,"text-center",sawtooth.components.core.link_button.call(null,mktplace.routes.new_wif_path.call(null),"Generate WIF",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"btn-type","btn-type",1955528955),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)),sawtooth.components.core.link_button.call(null,mktplace.routes.add_wif_path.call(null),"Import WIF",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"btn-type","btn-type",1955528955),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30839))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-footer"], null)], null),attrs30839)):{"className": "panel-footer"}),((cljs.core.map_QMARK_.call(null,attrs30839))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30839)], null)));
})()));
});

mktplace.components.login.t_mktplace$components$login30825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"intro","intro",754440928,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30826","meta30826",1721775430,null)], null);
});

mktplace.components.login.t_mktplace$components$login30825.cljs$lang$type = true;

mktplace.components.login.t_mktplace$components$login30825.cljs$lang$ctorStr = "mktplace.components.login/t_mktplace$components$login30825";

mktplace.components.login.t_mktplace$components$login30825.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.login/t_mktplace$components$login30825");
});

mktplace.components.login.__GT_t_mktplace$components$login30825 = (function mktplace$components$login$intro_$___GT_t_mktplace$components$login30825(intro__$1,data__$1,owner__$1,meta30826){
return (new mktplace.components.login.t_mktplace$components$login30825(intro__$1,data__$1,owner__$1,meta30826));
});

}

return (new mktplace.components.login.t_mktplace$components$login30825(mktplace$components$login$intro,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.login.load_participant_info = (function mktplace$components$login$load_participant_info(address){
mktplace.service.participant.participants.call(null);

return mktplace.service.participant.participant_by_address.call(null,address);
});
mktplace.components.login.on_authed_component_mount = (function mktplace$components$login$on_authed_component_mount(wallet_id){
mktplace.components.login.load_participant_info.call(null,wallet_id);

return sawtooth.service.block.connect_block_monitor.call(null);
});
mktplace.components.login.do_fetch_on_wallet = (function mktplace$components$login$do_fetch_on_wallet(fetch_fn){
var temp__4655__auto__ = sawtooth.ledger.keys.address.call(null,sawtooth.ledger.keys.get_key_pair.call(null));
if(cljs.core.truth_(temp__4655__auto__)){
var address = temp__4655__auto__;
return fetch_fn.call(null,address);
} else {
return sawtooth.router.replace.call(null,mktplace.routes.intro_path.call(null));
}
});
/**
 * This component requires authentication
 */
mktplace.components.login.authed_component = (function mktplace$components$login$authed_component(data,owner){
if(typeof mktplace.components.login.t_mktplace$components$login30848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.login.t_mktplace$components$login30848 = (function (authed_component,data,owner,meta30849){
this.authed_component = authed_component;
this.data = data;
this.owner = owner;
this.meta30849 = meta30849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.login.t_mktplace$components$login30848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30850,meta30849__$1){
var self__ = this;
var _30850__$1 = this;
return (new mktplace.components.login.t_mktplace$components$login30848(self__.authed_component,self__.data,self__.owner,meta30849__$1));
});

mktplace.components.login.t_mktplace$components$login30848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30850){
var self__ = this;
var _30850__$1 = this;
return self__.meta30849;
});

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IWillMount$ = true;

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return mktplace.components.login.do_fetch_on_wallet.call(null,mktplace.components.login.on_authed_component_mount);
});

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IWillReceiveProps$ = true;

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,next_state){
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
return mktplace.components.login.do_fetch_on_wallet.call(null,mktplace.components.login.load_participant_info);
} else {
return null;
}
});

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IWillUnmount$ = true;

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sawtooth.service.block.disconnect_block_monitor.call(null);
});

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IRender$ = true;

mktplace.components.login.t_mktplace$components$login30848.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__30851 = self__.data;
var map__30851__$1 = ((((!((map__30851 == null)))?((((map__30851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30851):map__30851);
var participant = cljs.core.get.call(null,map__30851__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
if(cljs.core.truth_(participant)){
var attrs30853 = om.core.build.call(null,mktplace.components.header.header,cljs.core.select_keys.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.Keyword(null,"block","block",664686210)], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30853))?sablono.interpreter.attributes.call(null,attrs30853):null),((cljs.core.map_QMARK_.call(null,attrs30853))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,sawtooth.router.route_handler.call(null,self__.data,self__.owner))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30853),sablono.interpreter.interpret.call(null,sawtooth.router.route_handler.call(null,self__.data,self__.owner))], null)));
} else {
return React.createElement("div",{"className": "container"},"Loading...");
}
});

mktplace.components.login.t_mktplace$components$login30848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"authed-component","authed-component",192648366,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"This component requires authentication"], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30849","meta30849",1637783519,null)], null);
});

mktplace.components.login.t_mktplace$components$login30848.cljs$lang$type = true;

mktplace.components.login.t_mktplace$components$login30848.cljs$lang$ctorStr = "mktplace.components.login/t_mktplace$components$login30848";

mktplace.components.login.t_mktplace$components$login30848.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.login/t_mktplace$components$login30848");
});

mktplace.components.login.__GT_t_mktplace$components$login30848 = (function mktplace$components$login$authed_component_$___GT_t_mktplace$components$login30848(authed_component__$1,data__$1,owner__$1,meta30849){
return (new mktplace.components.login.t_mktplace$components$login30848(authed_component__$1,data__$1,owner__$1,meta30849));
});

}

return (new mktplace.components.login.t_mktplace$components$login30848(mktplace$components$login$authed_component,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.login.add_wif = (function mktplace$components$login$add_wif(data,owner){
var is_valid_QMARK_ = (function mktplace$components$login$add_wif_$_is_valid_QMARK_(state){
return new cljs.core.Keyword(null,"wif-key","wif-key",284969873).cljs$core$IFn$_invoke$arity$1(state);
});
if(typeof mktplace.components.login.t_mktplace$components$login30866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.login.t_mktplace$components$login30866 = (function (add_wif,data,owner,is_valid_QMARK_,meta30867){
this.add_wif = add_wif;
this.data = data;
this.owner = owner;
this.is_valid_QMARK_ = is_valid_QMARK_;
this.meta30867 = meta30867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.login.t_mktplace$components$login30866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30868,meta30867__$1){
var self__ = this;
var _30868__$1 = this;
return (new mktplace.components.login.t_mktplace$components$login30866(self__.add_wif,self__.data,self__.owner,self__.is_valid_QMARK_,meta30867__$1));
});

mktplace.components.login.t_mktplace$components$login30866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30868){
var self__ = this;
var _30868__$1 = this;
return self__.meta30867;
});

mktplace.components.login.t_mktplace$components$login30866.prototype.om$core$IRenderState$ = true;

mktplace.components.login.t_mktplace$components$login30866.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container add-wif"},React.createElement("h1",null,"Import WIF Key"),React.createElement("form",{"autocomplete": "off", "onSubmit": ((function (___$1){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

sawtooth.ledger.keys.save_wif_BANG_.call(null,new cljs.core.Keyword(null,"wif-key","wif-key",284969873).cljs$core$IFn$_invoke$arity$1(state));

return sawtooth.router.replace.call(null,mktplace.routes.home_path.call(null));
});})(___$1))
, "className": "form add-wif-form"},React.createElement("div",{"className": "panel panel-primary"},React.createElement("div",{"className": "panel-heading"},"Input your WIF key"),React.createElement("div",{"className": "panel-body"},"Either copy and paste your WIF key below,\n                             or upload the \".wif\" file you downloaded earlier."),(function (){var attrs30875 = sawtooth.components.core.boot_row.call(null,"text-center",sawtooth.components.core.basic_text_field.call(null,self__.owner,new cljs.core.Keyword(null,"wif-key","wif-key",284969873),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste WIF key..."], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-tip.show-on-hover","span.has-tip.show-on-hover",-1420857839),sawtooth.components.core.upload_text_button.call(null,self__.owner,new cljs.core.Keyword(null,"wif-key","wif-key",284969873),"Upload WIF File")], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30875))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-footer"], null)], null),attrs30875)):{"className": "panel-footer"}),((cljs.core.map_QMARK_.call(null,attrs30875))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30875)], null)));
})()),sablono.interpreter.interpret.call(null,sawtooth.components.core.form_buttons.call(null,self__.owner,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,self__.is_valid_QMARK_.call(null,state)),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-lg"], null),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-lg",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (___$1){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.router.replace.call(null,mktplace.routes.home_path.call(null));
});})(___$1))
], null)], null)))));
});

mktplace.components.login.t_mktplace$components$login30866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"add-wif","add-wif",-1606941104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"is-valid?","is-valid?",1942306620,null),new cljs.core.Symbol(null,"meta30867","meta30867",-69455205,null)], null);
});

mktplace.components.login.t_mktplace$components$login30866.cljs$lang$type = true;

mktplace.components.login.t_mktplace$components$login30866.cljs$lang$ctorStr = "mktplace.components.login/t_mktplace$components$login30866";

mktplace.components.login.t_mktplace$components$login30866.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.login/t_mktplace$components$login30866");
});

mktplace.components.login.__GT_t_mktplace$components$login30866 = (function mktplace$components$login$add_wif_$___GT_t_mktplace$components$login30866(add_wif__$1,data__$1,owner__$1,is_valid_QMARK___$1,meta30867){
return (new mktplace.components.login.t_mktplace$components$login30866(add_wif__$1,data__$1,owner__$1,is_valid_QMARK___$1,meta30867));
});

}

return (new mktplace.components.login.t_mktplace$components$login30866(mktplace$components$login$add_wif,data,owner,is_valid_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
mktplace.components.login.copy_fail_msg = (cljs.core.truth_(cljs.core.re_find.call(null,/iPhone|iPad/,navigator.userAgent))?"Copying unsupported on iOS":(cljs.core.truth_(cljs.core.re_find.call(null,/Mac/,navigator.userAgent))?"Press \u2318-C to Copy":"Press Ctrl-C to Copy"
));
mktplace.components.login.copy_success = (function mktplace$components$login$copy_success(e){
return sawtooth.components.tooltip.timed_tip_BANG_.call(null,e.trigger,"Copied!");
});
mktplace.components.login.copy_failure = (function mktplace$components$login$copy_failure(e){
return sawtooth.components.tooltip.keyup_tip_BANG_.call(null,e.trigger,mktplace.components.login.copy_fail_msg);
});
mktplace.components.login.new_wif = (function mktplace$components$login$new_wif(data,owner){
var set_state_BANG_ = cljs.core.partial.call(null,om.core.set_state_BANG_,owner);
var set_wif_saved_BANG_ = ((function (set_state_BANG_){
return (function (){
return set_state_BANG_.call(null,new cljs.core.Keyword(null,"wif-saved","wif-saved",1863709281),true);
});})(set_state_BANG_))
;
if(typeof mktplace.components.login.t_mktplace$components$login30886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.login.t_mktplace$components$login30886 = (function (new_wif,data,owner,set_state_BANG_,set_wif_saved_BANG_,meta30887){
this.new_wif = new_wif;
this.data = data;
this.owner = owner;
this.set_state_BANG_ = set_state_BANG_;
this.set_wif_saved_BANG_ = set_wif_saved_BANG_;
this.meta30887 = meta30887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.login.t_mktplace$components$login30886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (set_state_BANG_,set_wif_saved_BANG_){
return (function (_30888,meta30887__$1){
var self__ = this;
var _30888__$1 = this;
return (new mktplace.components.login.t_mktplace$components$login30886(self__.new_wif,self__.data,self__.owner,self__.set_state_BANG_,self__.set_wif_saved_BANG_,meta30887__$1));
});})(set_state_BANG_,set_wif_saved_BANG_))
;

mktplace.components.login.t_mktplace$components$login30886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (set_state_BANG_,set_wif_saved_BANG_){
return (function (_30888){
var self__ = this;
var _30888__$1 = this;
return self__.meta30887;
});})(set_state_BANG_,set_wif_saved_BANG_))
;

mktplace.components.login.t_mktplace$components$login30886.prototype.om$core$IDidMount$ = true;

mktplace.components.login.t_mktplace$components$login30886.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (set_state_BANG_,set_wif_saved_BANG_){
return (function (_){
var self__ = this;
var ___$1 = this;
var key_pair = sawtooth.ledger.keys.random_key_pair.call(null);
var wif_key = sawtooth.ledger.keys.key_pair__GT_wif.call(null,key_pair);
var wif_url = sawtooth.files.text_file_url_BANG_.call(null,wif_key);
var clipboard = (new module$lib$deps_library.Clipboard(".btn-copy"));
self__.set_state_BANG_.call(null,new cljs.core.Keyword(null,"wif-key","wif-key",284969873),wif_key);

self__.set_state_BANG_.call(null,new cljs.core.Keyword(null,"wif-url","wif-url",-1129028422),wif_url);

sawtooth.service.common.set_path_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-pair","key-pair",-1701609338)], null),key_pair);

sawtooth.ledger.keys.save_wif_BANG_.call(null,wif_key);

clipboard.on("success",mktplace.components.login.copy_success);

return clipboard.on("error",mktplace.components.login.copy_failure);
});})(set_state_BANG_,set_wif_saved_BANG_))
;

mktplace.components.login.t_mktplace$components$login30886.prototype.om$core$IRenderState$ = true;

mktplace.components.login.t_mktplace$components$login30886.prototype.om$core$IRenderState$render_state$arity$2 = ((function (set_state_BANG_,set_wif_saved_BANG_){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container new-wif"},React.createElement("h1",null,"Generate WIF Key"),React.createElement("div",{"className": "panel panel-primary"},React.createElement("div",{"className": "panel-heading"},"Key Generated!"),React.createElement("div",{"className": "panel-body"},"To continue, download your key or copy and paste\n                             it. There is no way to recover your identity if\n                             this key is lost, so keep it in a safe place!"),(function (){var attrs30895 = sawtooth.components.core.boot_row.call(null,"text-center",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-tip.show-on-hover","span.has-tip.show-on-hover",-1420857839),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"wif-url","wif-url",-1129028422).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"download","download",-300081668),"mktplace.wif",new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.set_wif_saved_BANG_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"safari","safari",497115653),sawtooth.utils.browser.call(null))], null),"Download Key"], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"safari","safari",497115653),sawtooth.utils.browser.call(null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tip-text","span.tip-text",705462804),"Downloading not supported on Safari"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.btn-copy","a.btn.btn-primary.btn-copy",1092466208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-clipboard-text","data-clipboard-text",210278990),new cljs.core.Keyword(null,"wif-key","wif-key",284969873).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.set_wif_saved_BANG_], null),"Copy Key to Clipboard"], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs30895))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-footer"], null)], null),attrs30895)):{"className": "panel-footer"}),((cljs.core.map_QMARK_.call(null,attrs30895))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30895)], null)));
})()),React.createElement("div",null,React.createElement("button",{"onClick": ((function (___$1,set_state_BANG_,set_wif_saved_BANG_){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.router.replace.call(null,mktplace.routes.create_participant_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),sawtooth.ledger.keys.address.call(null,new cljs.core.Keyword(null,"key-pair","key-pair",-1701609338).cljs$core$IFn$_invoke$arity$1(self__.data))], null)));
});})(___$1,set_state_BANG_,set_wif_saved_BANG_))
, "disabled": cljs.core.not.call(null,new cljs.core.Keyword(null,"wif-saved","wif-saved",1863709281).cljs$core$IFn$_invoke$arity$1(state)), "className": "btn btn-primary btn-lg"},"Create Participant")));
});})(set_state_BANG_,set_wif_saved_BANG_))
;

mktplace.components.login.t_mktplace$components$login30886.getBasis = ((function (set_state_BANG_,set_wif_saved_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-wif","new-wif",-879852249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"set-state!","set-state!",-1204823669,null),new cljs.core.Symbol(null,"set-wif-saved!","set-wif-saved!",229553709,null),new cljs.core.Symbol(null,"meta30887","meta30887",1611802753,null)], null);
});})(set_state_BANG_,set_wif_saved_BANG_))
;

mktplace.components.login.t_mktplace$components$login30886.cljs$lang$type = true;

mktplace.components.login.t_mktplace$components$login30886.cljs$lang$ctorStr = "mktplace.components.login/t_mktplace$components$login30886";

mktplace.components.login.t_mktplace$components$login30886.cljs$lang$ctorPrWriter = ((function (set_state_BANG_,set_wif_saved_BANG_){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.login/t_mktplace$components$login30886");
});})(set_state_BANG_,set_wif_saved_BANG_))
;

mktplace.components.login.__GT_t_mktplace$components$login30886 = ((function (set_state_BANG_,set_wif_saved_BANG_){
return (function mktplace$components$login$new_wif_$___GT_t_mktplace$components$login30886(new_wif__$1,data__$1,owner__$1,set_state_BANG___$1,set_wif_saved_BANG___$1,meta30887){
return (new mktplace.components.login.t_mktplace$components$login30886(new_wif__$1,data__$1,owner__$1,set_state_BANG___$1,set_wif_saved_BANG___$1,meta30887));
});})(set_state_BANG_,set_wif_saved_BANG_))
;

}

return (new mktplace.components.login.t_mktplace$components$login30886(mktplace$components$login$new_wif,data,owner,set_state_BANG_,set_wif_saved_BANG_,cljs.core.PersistentArrayMap.EMPTY));
});
