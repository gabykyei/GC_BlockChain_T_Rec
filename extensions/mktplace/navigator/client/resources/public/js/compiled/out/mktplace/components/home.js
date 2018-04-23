// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.home');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('mktplace.service.participant');
goog.require('mktplace.service.asset');
goog.require('sablono.core');
goog.require('sawtooth.router');
goog.require('mktplace.service.selection');
goog.require('mktplace.components.portfolio');
goog.require('om.core');
goog.require('sawtooth.components.core');
mktplace.components.home.load_assets_BANG_ = (function mktplace$components$home$load_assets_BANG_(){
return mktplace.service.asset.assets.call(null);
});
mktplace.components.home.load_view_participant_BANG_ = (function mktplace$components$home$load_view_participant_BANG_(p__31168){
var map__31174 = p__31168;
var map__31174__$1 = ((((!((map__31174 == null)))?((((map__31174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31174):map__31174);
var vec__31175 = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword(null,"route","route",329891309));
var _ = cljs.core.nth.call(null,vec__31175,(0),null);
var map__31176 = cljs.core.nth.call(null,vec__31175,(1),null);
var map__31176__$1 = ((((!((map__31176 == null)))?((((map__31176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31176):map__31176);
var view_participant_id = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
if(cljs.core.truth_(view_participant_id)){
return mktplace.service.participant.as_participant.call(null,view_participant_id);
} else {
return null;
}
});
mktplace.components.home.home = (function mktplace$components$home$home(data,owner){
if(typeof mktplace.components.home.t_mktplace$components$home31196 !== 'undefined'){
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
mktplace.components.home.t_mktplace$components$home31196 = (function (home,data,owner,meta31197){
this.home = home;
this.data = data;
this.owner = owner;
this.meta31197 = meta31197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.home.t_mktplace$components$home31196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31198,meta31197__$1){
var self__ = this;
var _31198__$1 = this;
return (new mktplace.components.home.t_mktplace$components$home31196(self__.home,self__.data,self__.owner,meta31197__$1));
});

mktplace.components.home.t_mktplace$components$home31196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31198){
var self__ = this;
var _31198__$1 = this;
return self__.meta31197;
});

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IDisplayName$ = true;

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Home";
});

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IWillMount$ = true;

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
mktplace.components.home.load_assets_BANG_.call(null);

return mktplace.components.home.load_view_participant_BANG_.call(null,self__.data);
});

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IWillReceiveProps$ = true;

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,next_state){
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
mktplace.components.home.load_assets_BANG_.call(null);

mktplace.components.home.load_view_participant_BANG_.call(null,next_state);
} else {
}

if(cljs.core._EQ_.call(null,((function (___$1){
return (function (p1__31179_SHARP_){
var map__31199 = p1__31179_SHARP_;
var map__31199__$1 = ((((!((map__31199 == null)))?((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31199):map__31199);
var vec__31200 = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"route","route",329891309));
var ___$2 = cljs.core.nth.call(null,vec__31200,(0),null);
var map__31201 = cljs.core.nth.call(null,vec__31200,(1),null);
var map__31201__$1 = ((((!((map__31201 == null)))?((((map__31201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31201):map__31201);
var participant_id = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
return participant_id;
});})(___$1))
.call(null,next_state),((function (___$1){
return (function (p1__31179_SHARP_){
var map__31204 = p1__31179_SHARP_;
var map__31204__$1 = ((((!((map__31204 == null)))?((((map__31204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31204):map__31204);
var vec__31205 = cljs.core.get.call(null,map__31204__$1,new cljs.core.Keyword(null,"route","route",329891309));
var ___$2 = cljs.core.nth.call(null,vec__31205,(0),null);
var map__31206 = cljs.core.nth.call(null,vec__31205,(1),null);
var map__31206__$1 = ((((!((map__31206 == null)))?((((map__31206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31206):map__31206);
var participant_id = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
return participant_id;
});})(___$1))
.call(null,om.core.get_props.call(null,self__.owner)))){
return null;
} else {
mktplace.service.selection.select_holding_BANG_.call(null,null);

return mktplace.components.home.load_view_participant_BANG_.call(null,next_state);
}
});

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IRender$ = true;

mktplace.components.home.t_mktplace$components$home31196.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var participant = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"participant","participant",1962214029));
var view_participant = (function (){var or__6087__auto__ = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"view-participant","view-participant",-1183789579));
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return participant;
}
})();
return sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(participant))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Waiting for participant to be provisioned.\n\n                  This may take a few minutes..."], null)], null):((cljs.core.not.call(null,mktplace.service.participant.is_fully_provisioned_QMARK_.call(null,participant)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Participant provisioned. Registering an account.\n\n                  This may take a few minutes..."], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-5.col-md-5.sidebar","div.col-sm-5.col-md-5.sidebar",-1660195148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),((cljs.core._EQ_.call(null,cljs.core.get.call(null,view_participant,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.get.call(null,participant,new cljs.core.Keyword(null,"id","id",-1388402092))))?"My Portfolio":goog.string.format("%s's Portfolio",cljs.core.get.call(null,view_participant,new cljs.core.Keyword(null,"name","name",1843675177))))], null),(function (){var map__31209 = self__.data;
var map__31209__$1 = ((((!((map__31209 == null)))?((((map__31209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31209):map__31209);
var assets = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var asset_types = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"asset-types","asset-types",158107896));
var selections = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var holdings = (cljs.core.truth_(cljs.core.get.call(null,selections,new cljs.core.Keyword(null,"asset","asset",-280274466)))?cljs.core.filter.call(null,((function (map__31209,map__31209__$1,assets,asset_types,selections,participant,view_participant,___$1){
return (function (p1__31180_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"asset","asset",-280274466).cljs$core$IFn$_invoke$arity$1(p1__31180_SHARP_),cljs.core.get_in.call(null,selections,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset","asset",-280274466),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));
});})(map__31209,map__31209__$1,assets,asset_types,selections,participant,view_participant,___$1))
,new cljs.core.Keyword(null,"holdings","holdings",195829975).cljs$core$IFn$_invoke$arity$1(view_participant)):new cljs.core.Keyword(null,"holdings","holdings",195829975).cljs$core$IFn$_invoke$arity$1(view_participant));
return om.core.build.call(null,mktplace.components.portfolio.portfolio,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assets","assets",210278279),assets,new cljs.core.Keyword(null,"asset-types","asset-types",158107896),asset_types,new cljs.core.Keyword(null,"holdings","holdings",195829975),holdings,new cljs.core.Keyword(null,"selections","selections",-1277610233),selections], null));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-7.col-sm-offset-5.col-md-7.col-md-offset-5.main","div.col-sm-7.col-sm-offset-5.col-md-7.col-md-offset-5.main",-1257943553),sawtooth.router.route_handler.call(null,self__.data,self__.owner)], null)], null)], null)
)));
});

mktplace.components.home.t_mktplace$components$home31196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31197","meta31197",1636478357,null)], null);
});

mktplace.components.home.t_mktplace$components$home31196.cljs$lang$type = true;

mktplace.components.home.t_mktplace$components$home31196.cljs$lang$ctorStr = "mktplace.components.home/t_mktplace$components$home31196";

mktplace.components.home.t_mktplace$components$home31196.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.home/t_mktplace$components$home31196");
});

mktplace.components.home.__GT_t_mktplace$components$home31196 = (function mktplace$components$home$home_$___GT_t_mktplace$components$home31196(home__$1,data__$1,owner__$1,meta31197){
return (new mktplace.components.home.t_mktplace$components$home31196(home__$1,data__$1,owner__$1,meta31197));
});

}

return (new mktplace.components.home.t_mktplace$components$home31196(mktplace$components$home$home,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
