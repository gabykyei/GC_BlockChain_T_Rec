// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.header');
goog.require('cljs.core');
goog.require('mktplace.service.participant');
goog.require('sablono.core');
goog.require('sawtooth.router');
goog.require('mktplace.routes');
goog.require('om.core');
goog.require('sawtooth.components.core');
mktplace.components.header.toggle_menu = (function mktplace$components$header$toggle_menu(var_args){
var args30696 = [];
var len__7157__auto___30699 = arguments.length;
var i__7158__auto___30700 = (0);
while(true){
if((i__7158__auto___30700 < len__7157__auto___30699)){
args30696.push((arguments[i__7158__auto___30700]));

var G__30701 = (i__7158__auto___30700 + (1));
i__7158__auto___30700 = G__30701;
continue;
} else {
}
break;
}

var G__30698 = args30696.length;
switch (G__30698) {
case 1:
return mktplace.components.header.toggle_menu.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mktplace.components.header.toggle_menu.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30696.length)].join('')));

}
});

mktplace.components.header.toggle_menu.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return mktplace.components.header.toggle_menu.call(null,owner,cljs.core.not.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295))));
});

mktplace.components.header.toggle_menu.cljs$core$IFn$_invoke$arity$2 = (function (owner,open_QMARK_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),open_QMARK_);
});

mktplace.components.header.toggle_menu.cljs$lang$maxFixedArity = 2;
mktplace.components.header.menu_item = (function mktplace$components$header$menu_item(owner,label,link_or_action_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),((typeof link_or_action_fn === 'string')?link_or_action_fn:"#"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
mktplace.components.header.toggle_menu.call(null,owner,false);

if(cljs.core.fn_QMARK_.call(null,link_or_action_fn)){
e.preventDefault();

return link_or_action_fn.call(null);
} else {
return null;
}
})], null),label], null)], null);
});
/**
 * Marketplace header component.
 */
mktplace.components.header.header = (function mktplace$components$header$header(p__30703,owner){
var map__30724 = p__30703;
var map__30724__$1 = ((((!((map__30724 == null)))?((((map__30724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30724):map__30724);
var participant = cljs.core.get.call(null,map__30724__$1,new cljs.core.Keyword(null,"participant","participant",1962214029));
var map__30725 = cljs.core.get.call(null,map__30724__$1,new cljs.core.Keyword(null,"block","block",664686210));
var map__30725__$1 = ((((!((map__30725 == null)))?((((map__30725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30725):map__30725);
var block = map__30725__$1;
var blocknum = cljs.core.get.call(null,map__30725__$1,new cljs.core.Keyword(null,"blocknum","blocknum",-494283662));
var blockid = cljs.core.get.call(null,map__30725__$1,new cljs.core.Keyword(null,"blockid","blockid",-664467760));
if(typeof mktplace.components.header.t_mktplace$components$header30728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
mktplace.components.header.t_mktplace$components$header30728 = (function (header,p__30703,owner,map__30724,participant,map__30725,block,blocknum,blockid,meta30729){
this.header = header;
this.p__30703 = p__30703;
this.owner = owner;
this.map__30724 = map__30724;
this.participant = participant;
this.map__30725 = map__30725;
this.block = block;
this.blocknum = blocknum;
this.blockid = blockid;
this.meta30729 = meta30729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mktplace.components.header.t_mktplace$components$header30728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (_30730,meta30729__$1){
var self__ = this;
var _30730__$1 = this;
return (new mktplace.components.header.t_mktplace$components$header30728(self__.header,self__.p__30703,self__.owner,self__.map__30724,self__.participant,self__.map__30725,self__.block,self__.blocknum,self__.blockid,meta30729__$1));
});})(map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
;

mktplace.components.header.t_mktplace$components$header30728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (_30730){
var self__ = this;
var _30730__$1 = this;
return self__.meta30729;
});})(map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
;

mktplace.components.header.t_mktplace$components$header30728.prototype.om$core$IRender$ = true;

mktplace.components.header.t_mktplace$components$header30728.prototype.om$core$IRender$render$arity$1 = ((function (map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
var participant_name = ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.participant),""))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.participant):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.participant));
var link_args = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),mktplace.service.participant.current_participant_id.call(null)], null);
return React.createElement("nav",{"className": "navbar navbar-inverse navbar-fixed-top"},React.createElement("div",{"className": "navbar-header"},React.createElement("a",{"href": mktplace.routes.dashboard_path.call(null,link_args), "className": "navbar-brand"},"T_Rec Navigator")),React.createElement("div",{"id": "navbar"},(function (){var attrs30731 = (cljs.core.truth_(self__.block)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),mktplace.routes.block_transactions_path.call(null)], null),[cljs.core.str("Block: "),cljs.core.str(self__.blocknum),cljs.core.str(" ("),cljs.core.str(self__.blockid),cljs.core.str(")")].join('')], null)], null):null);
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs30731))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav","navbar-nav","navbar-right"], null)], null),attrs30731)):{"className": "nav navbar-nav navbar-right"}),((cljs.core.map_QMARK_.call(null,attrs30731))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(cljs.core.truth_(mktplace.service.participant.is_fully_provisioned_QMARK_.call(null,self__.participant))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),mktplace.routes.sell_offer_path.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"plus","plus",211540661))," Create Request"], null)], null)], null):null)),React.createElement("li",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown",(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"clearfix open":null)], null))},React.createElement("a",{"href": "#", "onClick": ((function (attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return mktplace.components.header.toggle_menu.call(null,self__.owner);
});})(attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
, "className": "dropdown-toggle"},sablono.interpreter.interpret.call(null,[cljs.core.str("Hi, "),cljs.core.str(participant_name)].join('')),React.createElement("span",{"className": "caret"})),React.createElement("ul",{"className": "dropdown-menu"},React.createElement("li",{"role": "separator", "className": "divider"}),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Dashboard",mktplace.routes.dashboard_path.call(null,link_args))),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Portfolio",mktplace.routes.portfolio_path.call(null,link_args))),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Transfer Assets",mktplace.routes.transfer_path.call(null))),React.createElement("li",{"role": "separator", "className": "divider"}),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Sign out",((function (attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (){
return mktplace.service.participant.sign_out.call(null);
});})(attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30731),sablono.interpreter.interpret.call(null,(cljs.core.truth_(mktplace.service.participant.is_fully_provisioned_QMARK_.call(null,self__.participant))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),mktplace.routes.sell_offer_path.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),sawtooth.components.core.glyph.call(null,new cljs.core.Keyword(null,"plus","plus",211540661))," Create Request"], null)], null)], null):null)),React.createElement("li",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown",(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)))?"clearfix open":null)], null))},React.createElement("a",{"href": "#", "onClick": ((function (attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return mktplace.components.header.toggle_menu.call(null,self__.owner);
});})(attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
, "className": "dropdown-toggle"},sablono.interpreter.interpret.call(null,[cljs.core.str("Hi, "),cljs.core.str(participant_name)].join('')),React.createElement("span",{"className": "caret"})),React.createElement("ul",{"className": "dropdown-menu"},React.createElement("li",{"role": "separator", "className": "divider"}),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Dashboard",mktplace.routes.dashboard_path.call(null,link_args))),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Portfolio",mktplace.routes.portfolio_path.call(null,link_args))),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Transfer Assets",mktplace.routes.transfer_path.call(null))),React.createElement("li",{"role": "separator", "className": "divider"}),sablono.interpreter.interpret.call(null,mktplace.components.header.menu_item.call(null,self__.owner,"Sign out",((function (attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (){
return mktplace.service.participant.sign_out.call(null);
});})(attrs30731,participant_name,link_args,this__28854__auto____$1,map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
))))], null)));
})()));
});})(map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
;

mktplace.components.header.t_mktplace$components$header30728.getBasis = ((function (map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Keyword(null,"participant","participant",1962214029),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocknum","blocknum",1146247865,null),new cljs.core.Symbol(null,"blockid","blockid",976063767,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"block","block",-1989749559,null)], null),new cljs.core.Keyword(null,"block","block",664686210)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marketplace header component."], null)),new cljs.core.Symbol(null,"p__30703","p__30703",1449851627,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__30724","map__30724",1794279866,null),new cljs.core.Symbol(null,"participant","participant",-692221740,null),new cljs.core.Symbol(null,"map__30725","map__30725",580611135,null),new cljs.core.Symbol(null,"block","block",-1989749559,null),new cljs.core.Symbol(null,"blocknum","blocknum",1146247865,null),new cljs.core.Symbol(null,"blockid","blockid",976063767,null),new cljs.core.Symbol(null,"meta30729","meta30729",1353977215,null)], null);
});})(map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
;

mktplace.components.header.t_mktplace$components$header30728.cljs$lang$type = true;

mktplace.components.header.t_mktplace$components$header30728.cljs$lang$ctorStr = "mktplace.components.header/t_mktplace$components$header30728";

mktplace.components.header.t_mktplace$components$header30728.cljs$lang$ctorPrWriter = ((function (map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"mktplace.components.header/t_mktplace$components$header30728");
});})(map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
;

mktplace.components.header.__GT_t_mktplace$components$header30728 = ((function (map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid){
return (function mktplace$components$header$header_$___GT_t_mktplace$components$header30728(header__$1,p__30703__$1,owner__$1,map__30724__$2,participant__$1,map__30725__$2,block__$1,blocknum__$1,blockid__$1,meta30729){
return (new mktplace.components.header.t_mktplace$components$header30728(header__$1,p__30703__$1,owner__$1,map__30724__$2,participant__$1,map__30725__$2,block__$1,blocknum__$1,blockid__$1,meta30729));
});})(map__30724,map__30724__$1,participant,map__30725,map__30725__$1,block,blocknum,blockid))
;

}

return (new mktplace.components.header.t_mktplace$components$header30728(mktplace$components$header$header,p__30703,owner,map__30724__$1,participant,map__30725__$1,block,blocknum,blockid,null));
});
