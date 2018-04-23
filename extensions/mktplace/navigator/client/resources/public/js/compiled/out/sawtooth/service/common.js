// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.service.common');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sawtooth.state');
goog.require('sawtooth.config');
goog.require('sawtooth.http');
goog.require('taoensso.timbre');
sawtooth.service.common.on_fetch_success_fn = (function sawtooth$service$common$on_fetch_success_fn(xform,make_notification_fn){
return (function (p__29609){
var map__29610 = p__29609;
var map__29610__$1 = ((((!((map__29610 == null)))?((((map__29610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29610):map__29610);
var status = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.call(null,status,(200))){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,xform.call(null,body));
} else {
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,sawtooth.state.notification_action.call(null,make_notification_fn.call(null)));
}
});
});
sawtooth.service.common.on_error_notification = (function sawtooth$service$common$on_error_notification(endpoint,on_error){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Fetch Failed",new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("Unable to fetch "),cljs.core.str(endpoint)].join('')], null),on_error);
});
/**
 * Fetches json at the given endpoint. Either a result transform
 *   or a resulting path on the state must be provided in the opts
 *   (but not both).
 */
sawtooth.service.common.fetch_json_BANG_ = (function sawtooth$service$common$fetch_json_BANG_(var_args){
var args29612 = [];
var len__7157__auto___29618 = arguments.length;
var i__7158__auto___29619 = (0);
while(true){
if((i__7158__auto___29619 < len__7157__auto___29618)){
args29612.push((arguments[i__7158__auto___29619]));

var G__29620 = (i__7158__auto___29619 + (1));
i__7158__auto___29619 = G__29620;
continue;
} else {
}
break;
}

var G__29614 = args29612.length;
switch (G__29614) {
case 2:
return sawtooth.service.common.fetch_json_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.service.common.fetch_json_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29612.length)].join('')));

}
});

sawtooth.service.common.fetch_json_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (endpoint,opts){
return sawtooth.service.common.fetch_json_BANG_.call(null,endpoint,null,opts);
});

sawtooth.service.common.fetch_json_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (endpoint,query,p__29615){
var map__29616 = p__29615;
var map__29616__$1 = ((((!((map__29616 == null)))?((((map__29616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29616):map__29616);
var xform = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008));
var path = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_error = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var headers = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6075__auto__ = (function (){var or__6087__auto__ = xform;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return path;
}
})();
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.not.call(null,(function (){var and__6075__auto____$1 = xform;
if(cljs.core.truth_(and__6075__auto____$1)){
return path;
} else {
return and__6075__auto____$1;
}
})());
} else {
return and__6075__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (or xform path) (not (and xform path)))"));
}

var xform__$1 = (function (){var or__6087__auto__ = xform;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return ((function (or__6087__auto__,map__29616,map__29616__$1,xform,path,on_error,headers){
return (function (body){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),body], null);
});
;})(or__6087__auto__,map__29616,map__29616__$1,xform,path,on_error,headers))
}
})();
var res_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,sawtooth.service.common.on_fetch_success_fn.call(null,xform__$1,((function (xform__$1,map__29616,map__29616__$1,xform,path,on_error,headers){
return (function (){
return sawtooth.service.common.on_error_notification.call(null,endpoint,on_error);
});})(xform__$1,map__29616,map__29616__$1,xform,path,on_error,headers))
)),((function (xform__$1,map__29616,map__29616__$1,xform,path,on_error,headers){
return (function (e){
return sawtooth.state.notification_action.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"title","title",636505583),"Exception!",new cljs.core.Keyword(null,"message","message",-406056002),e], null));
});})(xform__$1,map__29616,map__29616__$1,xform,path,on_error,headers))
);
var url = [cljs.core.str(sawtooth.config.base_url),cljs.core.str((cljs.core.truth_(query)?sawtooth.http.query_endpoint.call(null,endpoint,query):endpoint))].join('');
cljs.core.async.pipe.call(null,res_ch,sawtooth.state.state_change_ch,false);

return sawtooth.http.ajax.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null),res_ch);
});

sawtooth.service.common.fetch_json_BANG_.cljs$lang$maxFixedArity = 3;
sawtooth.service.common.set_path_BANG_ = (function sawtooth$service$common$set_path_BANG_(path,value){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Clears the state at the given path, with an optional clear-value.
 */
sawtooth.service.common.clear_path_BANG_ = (function sawtooth$service$common$clear_path_BANG_(var_args){
var args29622 = [];
var len__7157__auto___29625 = arguments.length;
var i__7158__auto___29626 = (0);
while(true){
if((i__7158__auto___29626 < len__7157__auto___29625)){
args29622.push((arguments[i__7158__auto___29626]));

var G__29627 = (i__7158__auto___29626 + (1));
i__7158__auto___29626 = G__29627;
continue;
} else {
}
break;
}

var G__29624 = args29622.length;
switch (G__29624) {
case 1:
return sawtooth.service.common.clear_path_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.service.common.clear_path_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29622.length)].join('')));

}
});

sawtooth.service.common.clear_path_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (path){
return sawtooth.service.common.clear_path_BANG_.call(null,path,null);
});

sawtooth.service.common.clear_path_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (path,clear_value){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"value","value",305978217),clear_value], null));
});

sawtooth.service.common.clear_path_BANG_.cljs$lang$maxFixedArity = 2;
