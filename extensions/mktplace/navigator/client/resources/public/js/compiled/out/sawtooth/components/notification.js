// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.components.notification');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sawtooth.state');
goog.require('sawtooth.components.core');
sawtooth.components.notification.NOTIFICATION_TTL = (3500);
sawtooth.components.notification.display_notification = (function sawtooth$components$notification$display_notification(p__30338){
var map__30341 = p__30338;
var map__30341__$1 = ((((!((map__30341 == null)))?((((map__30341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30341):map__30341);
var timestamp = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var type = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"title","title",636505583));
var message = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return React.DOM.li({"key": timestamp, "className": [cljs.core.str("notification notification-"),cljs.core.str(cljs.core.name.call(null,(function (){var or__6087__auto__ = type;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return new cljs.core.Keyword(null,"info","info",-317069002);
}
})()))].join('')},React.DOM.div({"className": "title"},title),React.DOM.div({"className": "message"},cljs.core.map_indexed.call(null,((function (map__30341,map__30341__$1,timestamp,type,title,message){
return (function (p1__30336_SHARP_,p2__30337_SHARP_){
return React.DOM.div({"key": p1__30336_SHARP_},p2__30337_SHARP_);
});})(map__30341,map__30341__$1,timestamp,type,title,message))
,clojure.string.split_lines.call(null,message))));
});
sawtooth.components.notification.notification_container = (function sawtooth$components$notification$notification_container(data,owner){
if(typeof sawtooth.components.notification.t_sawtooth$components$notification30346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
sawtooth.components.notification.t_sawtooth$components$notification30346 = (function (notification_container,data,owner,meta30347){
this.notification_container = notification_container;
this.data = data;
this.owner = owner;
this.meta30347 = meta30347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30348,meta30347__$1){
var self__ = this;
var _30348__$1 = this;
return (new sawtooth.components.notification.t_sawtooth$components$notification30346(self__.notification_container,self__.data,self__.owner,meta30347__$1));
});

sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30348){
var self__ = this;
var _30348__$1 = this;
return self__.meta30347;
});

sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.om$core$IDisplayName$ = true;

sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "NotificationContainer";
});

sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.om$core$IWillUpdate$ = true;

sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){
var self__ = this;
var ___$1 = this;
return setTimeout(((function (___$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notification","notification",-222338233)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (___$1){
return (function (notifications){
return cljs.core.rest.call(null,notifications);
});})(___$1))
], null));
});})(___$1))
,sawtooth.components.notification.NOTIFICATION_TTL);
});

sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.om$core$IRender$ = true;

sawtooth.components.notification.t_sawtooth$components$notification30346.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "notification-container"},sawtooth.components.core.css_transition_group.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),"ul",new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"notification",new cljs.core.Keyword(null,"transition-enter-timeout","transition-enter-timeout",811383642),(500),new cljs.core.Keyword(null,"transition-leave-timeout","transition-leave-timeout",165643286),(300)], null),cljs.core.map.call(null,sawtooth.components.notification.display_notification,new cljs.core.Keyword(null,"notification","notification",-222338233).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

sawtooth.components.notification.t_sawtooth$components$notification30346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"notification-container","notification-container",831046543,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30347","meta30347",2126280888,null)], null);
});

sawtooth.components.notification.t_sawtooth$components$notification30346.cljs$lang$type = true;

sawtooth.components.notification.t_sawtooth$components$notification30346.cljs$lang$ctorStr = "sawtooth.components.notification/t_sawtooth$components$notification30346";

sawtooth.components.notification.t_sawtooth$components$notification30346.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"sawtooth.components.notification/t_sawtooth$components$notification30346");
});

sawtooth.components.notification.__GT_t_sawtooth$components$notification30346 = (function sawtooth$components$notification$notification_container_$___GT_t_sawtooth$components$notification30346(notification_container__$1,data__$1,owner__$1,meta30347){
return (new sawtooth.components.notification.t_sawtooth$components$notification30346(notification_container__$1,data__$1,owner__$1,meta30347));
});

}

return (new sawtooth.components.notification.t_sawtooth$components$notification30346(sawtooth$components$notification$notification_container,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Allows us to send a notification
 */
sawtooth.components.notification.notify_BANG_ = (function sawtooth$components$notification$notify_BANG_(notification){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,sawtooth.state.notification_action.call(null,notification));
});
