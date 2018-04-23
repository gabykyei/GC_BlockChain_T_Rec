// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.routes');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sawtooth.state');
goog.require('secretary.core');
mktplace.routes.change_route = (function mktplace$routes$change_route(var_args){
var args30043 = [];
var len__7157__auto___30046 = arguments.length;
var i__7158__auto___30047 = (0);
while(true){
if((i__7158__auto___30047 < len__7157__auto___30046)){
args30043.push((arguments[i__7158__auto___30047]));

var G__30048 = (i__7158__auto___30047 + (1));
i__7158__auto___30047 = G__30048;
continue;
} else {
}
break;
}

var G__30045 = args30043.length;
switch (G__30045) {
case 1:
return mktplace.routes.change_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mktplace.routes.change_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30043.length)].join('')));

}
});

mktplace.routes.change_route.cljs$core$IFn$_invoke$arity$1 = (function (route_key){
return mktplace.routes.change_route.call(null,route_key,cljs.core.PersistentArrayMap.EMPTY);
});

mktplace.routes.change_route.cljs$core$IFn$_invoke$arity$2 = (function (route_key,args){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309)], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_key,args], null)], null));
});

mktplace.routes.change_route.cljs$lang$maxFixedArity = 2;
var action__29486__auto___30054 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30050 = params__29487__auto__;
var map__30050__$1 = ((((!((map__30050 == null)))?((((map__30050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30052 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__29486__auto___30054);

mktplace.routes.home_path = ((function (action__29486__auto___30054){
return (function mktplace$routes$home_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30055 = arguments.length;
var i__7158__auto___30056 = (0);
while(true){
if((i__7158__auto___30056 < len__7157__auto___30055)){
args__7164__auto__.push((arguments[i__7158__auto___30056]));

var G__30057 = (i__7158__auto___30056 + (1));
i__7158__auto___30056 = G__30057;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30054))
;

mktplace.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30054){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__29485__auto__);
});})(action__29486__auto___30054))
;

mktplace.routes.home_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.home_path.cljs$lang$applyTo = ((function (action__29486__auto___30054){
return (function (seq30053){
return mktplace.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30053));
});})(action__29486__auto___30054))
;
var action__29486__auto___30062 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30058 = params__29487__auto__;
var map__30058__$1 = ((((!((map__30058 == null)))?((((map__30058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30058):map__30058);
var participant_id = cljs.core.get.call(null,map__30058__$1,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30060 = params__29487__auto__;
var participant_id = cljs.core.nth.call(null,vec__30060,(0),null);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:participant-id/dashboard",action__29486__auto___30062);

mktplace.routes.dashboard_path = ((function (action__29486__auto___30062){
return (function mktplace$routes$dashboard_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30063 = arguments.length;
var i__7158__auto___30064 = (0);
while(true){
if((i__7158__auto___30064 < len__7157__auto___30063)){
args__7164__auto__.push((arguments[i__7158__auto___30064]));

var G__30065 = (i__7158__auto___30064 + (1));
i__7158__auto___30064 = G__30065;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.dashboard_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30062))
;

mktplace.routes.dashboard_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30062){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:participant-id/dashboard",args__29485__auto__);
});})(action__29486__auto___30062))
;

mktplace.routes.dashboard_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.dashboard_path.cljs$lang$applyTo = ((function (action__29486__auto___30062){
return (function (seq30061){
return mktplace.routes.dashboard_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30061));
});})(action__29486__auto___30062))
;
var action__29486__auto___30070 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30066 = params__29487__auto__;
var map__30066__$1 = ((((!((map__30066 == null)))?((((map__30066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30066):map__30066);
var participant_id = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30068 = params__29487__auto__;
var participant_id = cljs.core.nth.call(null,vec__30068,(0),null);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"exchanges","exchanges",-764358941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:participant-id/exchanges",action__29486__auto___30070);

mktplace.routes.exchanges_path = ((function (action__29486__auto___30070){
return (function mktplace$routes$exchanges_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30071 = arguments.length;
var i__7158__auto___30072 = (0);
while(true){
if((i__7158__auto___30072 < len__7157__auto___30071)){
args__7164__auto__.push((arguments[i__7158__auto___30072]));

var G__30073 = (i__7158__auto___30072 + (1));
i__7158__auto___30072 = G__30073;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.exchanges_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30070))
;

mktplace.routes.exchanges_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30070){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:participant-id/exchanges",args__29485__auto__);
});})(action__29486__auto___30070))
;

mktplace.routes.exchanges_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.exchanges_path.cljs$lang$applyTo = ((function (action__29486__auto___30070){
return (function (seq30069){
return mktplace.routes.exchanges_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30069));
});})(action__29486__auto___30070))
;
var action__29486__auto___30078 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30074 = params__29487__auto__;
var map__30074__$1 = ((((!((map__30074 == null)))?((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30074):map__30074);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"asset-form","asset-form",61149841));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30076 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"asset-form","asset-form",61149841));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/assets/create",action__29486__auto___30078);

mktplace.routes.asset_create_path = ((function (action__29486__auto___30078){
return (function mktplace$routes$asset_create_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30079 = arguments.length;
var i__7158__auto___30080 = (0);
while(true){
if((i__7158__auto___30080 < len__7157__auto___30079)){
args__7164__auto__.push((arguments[i__7158__auto___30080]));

var G__30081 = (i__7158__auto___30080 + (1));
i__7158__auto___30080 = G__30081;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.asset_create_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30078))
;

mktplace.routes.asset_create_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30078){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/assets/create",args__29485__auto__);
});})(action__29486__auto___30078))
;

mktplace.routes.asset_create_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.asset_create_path.cljs$lang$applyTo = ((function (action__29486__auto___30078){
return (function (seq30077){
return mktplace.routes.asset_create_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30077));
});})(action__29486__auto___30078))
;
var action__29486__auto___30086 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30082 = params__29487__auto__;
var map__30082__$1 = ((((!((map__30082 == null)))?((((map__30082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30082):map__30082);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"holding-form","holding-form",1871075199));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30084 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"holding-form","holding-form",1871075199));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/holdings/create",action__29486__auto___30086);

mktplace.routes.holding_create_path = ((function (action__29486__auto___30086){
return (function mktplace$routes$holding_create_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30087 = arguments.length;
var i__7158__auto___30088 = (0);
while(true){
if((i__7158__auto___30088 < len__7157__auto___30087)){
args__7164__auto__.push((arguments[i__7158__auto___30088]));

var G__30089 = (i__7158__auto___30088 + (1));
i__7158__auto___30088 = G__30089;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.holding_create_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30086))
;

mktplace.routes.holding_create_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30086){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/holdings/create",args__29485__auto__);
});})(action__29486__auto___30086))
;

mktplace.routes.holding_create_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.holding_create_path.cljs$lang$applyTo = ((function (action__29486__auto___30086){
return (function (seq30085){
return mktplace.routes.holding_create_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30085));
});})(action__29486__auto___30086))
;
var action__29486__auto___30094 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30090 = params__29487__auto__;
var map__30090__$1 = ((((!((map__30090 == null)))?((((map__30090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30090):map__30090);
var participant_id = cljs.core.get.call(null,map__30090__$1,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30092 = params__29487__auto__;
var participant_id = cljs.core.nth.call(null,vec__30092,(0),null);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"offers","offers",796187776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:participant-id/offers",action__29486__auto___30094);

mktplace.routes.offers_path = ((function (action__29486__auto___30094){
return (function mktplace$routes$offers_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30095 = arguments.length;
var i__7158__auto___30096 = (0);
while(true){
if((i__7158__auto___30096 < len__7157__auto___30095)){
args__7164__auto__.push((arguments[i__7158__auto___30096]));

var G__30097 = (i__7158__auto___30096 + (1));
i__7158__auto___30096 = G__30097;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.offers_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30094))
;

mktplace.routes.offers_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30094){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:participant-id/offers",args__29485__auto__);
});})(action__29486__auto___30094))
;

mktplace.routes.offers_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.offers_path.cljs$lang$applyTo = ((function (action__29486__auto___30094){
return (function (seq30093){
return mktplace.routes.offers_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30093));
});})(action__29486__auto___30094))
;
var action__29486__auto___30102 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30098 = params__29487__auto__;
var map__30098__$1 = ((((!((map__30098 == null)))?((((map__30098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30098):map__30098);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"sell-offer-form","sell-offer-form",-291616872));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30100 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"sell-offer-form","sell-offer-form",-291616872));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/offers/create",action__29486__auto___30102);

mktplace.routes.sell_offer_path = ((function (action__29486__auto___30102){
return (function mktplace$routes$sell_offer_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30103 = arguments.length;
var i__7158__auto___30104 = (0);
while(true){
if((i__7158__auto___30104 < len__7157__auto___30103)){
args__7164__auto__.push((arguments[i__7158__auto___30104]));

var G__30105 = (i__7158__auto___30104 + (1));
i__7158__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.sell_offer_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30102))
;

mktplace.routes.sell_offer_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30102){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/offers/create",args__29485__auto__);
});})(action__29486__auto___30102))
;

mktplace.routes.sell_offer_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.sell_offer_path.cljs$lang$applyTo = ((function (action__29486__auto___30102){
return (function (seq30101){
return mktplace.routes.sell_offer_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30101));
});})(action__29486__auto___30102))
;
var action__29486__auto___30110 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30106 = params__29487__auto__;
var map__30106__$1 = ((((!((map__30106 == null)))?((((map__30106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30106):map__30106);
var initial_offer_id = cljs.core.get.call(null,map__30106__$1,new cljs.core.Keyword(null,"initial-offer-id","initial-offer-id",1383510928));
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-offer-id","initial-offer-id",1383510928),initial_offer_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30108 = params__29487__auto__;
var initial_offer_id = cljs.core.nth.call(null,vec__30108,(0),null);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-offer-id","initial-offer-id",1383510928),initial_offer_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/exchange/:initial-offer-id",action__29486__auto___30110);

mktplace.routes.exchange_offer_path = ((function (action__29486__auto___30110){
return (function mktplace$routes$exchange_offer_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30111 = arguments.length;
var i__7158__auto___30112 = (0);
while(true){
if((i__7158__auto___30112 < len__7157__auto___30111)){
args__7164__auto__.push((arguments[i__7158__auto___30112]));

var G__30113 = (i__7158__auto___30112 + (1));
i__7158__auto___30112 = G__30113;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.exchange_offer_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30110))
;

mktplace.routes.exchange_offer_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30110){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/exchange/:initial-offer-id",args__29485__auto__);
});})(action__29486__auto___30110))
;

mktplace.routes.exchange_offer_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.exchange_offer_path.cljs$lang$applyTo = ((function (action__29486__auto___30110){
return (function (seq30109){
return mktplace.routes.exchange_offer_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30109));
});})(action__29486__auto___30110))
;
var action__29486__auto___30118 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30114 = params__29487__auto__;
var map__30114__$1 = ((((!((map__30114 == null)))?((((map__30114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30114):map__30114);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"transfer","transfer",327423400));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30116 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"transfer","transfer",327423400));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/transfer",action__29486__auto___30118);

mktplace.routes.transfer_path = ((function (action__29486__auto___30118){
return (function mktplace$routes$transfer_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30119 = arguments.length;
var i__7158__auto___30120 = (0);
while(true){
if((i__7158__auto___30120 < len__7157__auto___30119)){
args__7164__auto__.push((arguments[i__7158__auto___30120]));

var G__30121 = (i__7158__auto___30120 + (1));
i__7158__auto___30120 = G__30121;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.transfer_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30118))
;

mktplace.routes.transfer_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30118){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/transfer",args__29485__auto__);
});})(action__29486__auto___30118))
;

mktplace.routes.transfer_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.transfer_path.cljs$lang$applyTo = ((function (action__29486__auto___30118){
return (function (seq30117){
return mktplace.routes.transfer_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30117));
});})(action__29486__auto___30118))
;
var action__29486__auto___30126 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30122 = params__29487__auto__;
var map__30122__$1 = ((((!((map__30122 == null)))?((((map__30122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30122):map__30122);
var participant_id = cljs.core.get.call(null,map__30122__$1,new cljs.core.Keyword(null,"participant-id","participant-id",-694440875));
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30124 = params__29487__auto__;
var participant_id = cljs.core.nth.call(null,vec__30124,(0),null);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),participant_id], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:participant-id/portfolio",action__29486__auto___30126);

mktplace.routes.portfolio_path = ((function (action__29486__auto___30126){
return (function mktplace$routes$portfolio_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30127 = arguments.length;
var i__7158__auto___30128 = (0);
while(true){
if((i__7158__auto___30128 < len__7157__auto___30127)){
args__7164__auto__.push((arguments[i__7158__auto___30128]));

var G__30129 = (i__7158__auto___30128 + (1));
i__7158__auto___30128 = G__30129;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.portfolio_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30126))
;

mktplace.routes.portfolio_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30126){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:participant-id/portfolio",args__29485__auto__);
});})(action__29486__auto___30126))
;

mktplace.routes.portfolio_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.portfolio_path.cljs$lang$applyTo = ((function (action__29486__auto___30126){
return (function (seq30125){
return mktplace.routes.portfolio_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30125));
});})(action__29486__auto___30126))
;
var action__29486__auto___30134 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30130 = params__29487__auto__;
var map__30130__$1 = ((((!((map__30130 == null)))?((((map__30130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30130):map__30130);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"intro","intro",-886090599));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30132 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"intro","intro",-886090599));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/intro",action__29486__auto___30134);

mktplace.routes.intro_path = ((function (action__29486__auto___30134){
return (function mktplace$routes$intro_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30135 = arguments.length;
var i__7158__auto___30136 = (0);
while(true){
if((i__7158__auto___30136 < len__7157__auto___30135)){
args__7164__auto__.push((arguments[i__7158__auto___30136]));

var G__30137 = (i__7158__auto___30136 + (1));
i__7158__auto___30136 = G__30137;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.intro_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30134))
;

mktplace.routes.intro_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30134){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/intro",args__29485__auto__);
});})(action__29486__auto___30134))
;

mktplace.routes.intro_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.intro_path.cljs$lang$applyTo = ((function (action__29486__auto___30134){
return (function (seq30133){
return mktplace.routes.intro_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30133));
});})(action__29486__auto___30134))
;
var action__29486__auto___30142 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30138 = params__29487__auto__;
var map__30138__$1 = ((((!((map__30138 == null)))?((((map__30138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30138):map__30138);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"new-wif","new-wif",1774583520));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30140 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"new-wif","new-wif",1774583520));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/create-key",action__29486__auto___30142);

mktplace.routes.new_wif_path = ((function (action__29486__auto___30142){
return (function mktplace$routes$new_wif_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30143 = arguments.length;
var i__7158__auto___30144 = (0);
while(true){
if((i__7158__auto___30144 < len__7157__auto___30143)){
args__7164__auto__.push((arguments[i__7158__auto___30144]));

var G__30145 = (i__7158__auto___30144 + (1));
i__7158__auto___30144 = G__30145;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.new_wif_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30142))
;

mktplace.routes.new_wif_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30142){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/create-key",args__29485__auto__);
});})(action__29486__auto___30142))
;

mktplace.routes.new_wif_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.new_wif_path.cljs$lang$applyTo = ((function (action__29486__auto___30142){
return (function (seq30141){
return mktplace.routes.new_wif_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30141));
});})(action__29486__auto___30142))
;
var action__29486__auto___30150 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30146 = params__29487__auto__;
var map__30146__$1 = ((((!((map__30146 == null)))?((((map__30146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30146):map__30146);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"add-wif","add-wif",1047494665));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30148 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"add-wif","add-wif",1047494665));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/upload-key",action__29486__auto___30150);

mktplace.routes.add_wif_path = ((function (action__29486__auto___30150){
return (function mktplace$routes$add_wif_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30151 = arguments.length;
var i__7158__auto___30152 = (0);
while(true){
if((i__7158__auto___30152 < len__7157__auto___30151)){
args__7164__auto__.push((arguments[i__7158__auto___30152]));

var G__30153 = (i__7158__auto___30152 + (1));
i__7158__auto___30152 = G__30153;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.add_wif_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30150))
;

mktplace.routes.add_wif_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30150){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/upload-key",args__29485__auto__);
});})(action__29486__auto___30150))
;

mktplace.routes.add_wif_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.add_wif_path.cljs$lang$applyTo = ((function (action__29486__auto___30150){
return (function (seq30149){
return mktplace.routes.add_wif_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30149));
});})(action__29486__auto___30150))
;
var action__29486__auto___30158 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30154 = params__29487__auto__;
var map__30154__$1 = ((((!((map__30154 == null)))?((((map__30154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30154):map__30154);
var address = cljs.core.get.call(null,map__30154__$1,new cljs.core.Keyword(null,"address","address",559499426));
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"create-participant","create-participant",1545362508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),address], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30156 = params__29487__auto__;
var address = cljs.core.nth.call(null,vec__30156,(0),null);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"create-participant","create-participant",1545362508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),address], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/create-participant/:address",action__29486__auto___30158);

mktplace.routes.create_participant_path = ((function (action__29486__auto___30158){
return (function mktplace$routes$create_participant_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30159 = arguments.length;
var i__7158__auto___30160 = (0);
while(true){
if((i__7158__auto___30160 < len__7157__auto___30159)){
args__7164__auto__.push((arguments[i__7158__auto___30160]));

var G__30161 = (i__7158__auto___30160 + (1));
i__7158__auto___30160 = G__30161;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.create_participant_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30158))
;

mktplace.routes.create_participant_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30158){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/create-participant/:address",args__29485__auto__);
});})(action__29486__auto___30158))
;

mktplace.routes.create_participant_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.create_participant_path.cljs$lang$applyTo = ((function (action__29486__auto___30158){
return (function (seq30157){
return mktplace.routes.create_participant_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30157));
});})(action__29486__auto___30158))
;
var action__29486__auto___30166 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30162 = params__29487__auto__;
var map__30162__$1 = ((((!((map__30162 == null)))?((((map__30162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30162):map__30162);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"block-transactions","block-transactions",-1375582950));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30164 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"block-transactions","block-transactions",-1375582950));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/transactions",action__29486__auto___30166);

mktplace.routes.block_transactions_path = ((function (action__29486__auto___30166){
return (function mktplace$routes$block_transactions_path(var_args){
var args__7164__auto__ = [];
var len__7157__auto___30167 = arguments.length;
var i__7158__auto___30168 = (0);
while(true){
if((i__7158__auto___30168 < len__7157__auto___30167)){
args__7164__auto__.push((arguments[i__7158__auto___30168]));

var G__30169 = (i__7158__auto___30168 + (1));
i__7158__auto___30168 = G__30169;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((0) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((0)),(0),null)):null);
return mktplace.routes.block_transactions_path.cljs$core$IFn$_invoke$arity$variadic(argseq__7165__auto__);
});})(action__29486__auto___30166))
;

mktplace.routes.block_transactions_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__29486__auto___30166){
return (function (args__29485__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/transactions",args__29485__auto__);
});})(action__29486__auto___30166))
;

mktplace.routes.block_transactions_path.cljs$lang$maxFixedArity = (0);

mktplace.routes.block_transactions_path.cljs$lang$applyTo = ((function (action__29486__auto___30166){
return (function (seq30165){
return mktplace.routes.block_transactions_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30165));
});})(action__29486__auto___30166))
;
var action__29486__auto___30173 = (function (params__29487__auto__){
if(cljs.core.map_QMARK_.call(null,params__29487__auto__)){
var map__30170 = params__29487__auto__;
var map__30170__$1 = ((((!((map__30170 == null)))?((((map__30170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30170):map__30170);
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29487__auto__)){
var vec__30172 = params__29487__auto__;
return mktplace.routes.change_route.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__29486__auto___30173);

