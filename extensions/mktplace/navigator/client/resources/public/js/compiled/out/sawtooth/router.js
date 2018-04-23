// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.router');
goog.require('cljs.core');
goog.require('sawtooth.state');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
if(typeof sawtooth.router.history !== 'undefined'){
} else {
sawtooth.router.history = (function (){var G__29593 = (new goog.History());
goog.events.listen(G__29593,goog.history.EventType.NAVIGATE,((function (G__29593){
return (function (p1__29592_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__29592_SHARP_.token);
});})(G__29593))
);

G__29593.setEnabled(true);

return G__29593;
})();
}
sawtooth.router.current_route = (function sawtooth$router$current_route(){
return om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,sawtooth.state.app_state)));
});
sawtooth.router.route_handler = (function sawtooth$router$route_handler(data,owner){
var map__29597 = om.core.get_shared.call(null,owner);
var map__29597__$1 = ((((!((map__29597 == null)))?((((map__29597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29597):map__29597);
var current_route = cljs.core.get.call(null,map__29597__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
var route_components = cljs.core.get.call(null,map__29597__$1,new cljs.core.Keyword(null,"route-components","route-components",587715338));
var not_found = cljs.core.get.call(null,map__29597__$1,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var index = (function (){var or__6087__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"outlet-index","outlet-index",-513451969));
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (0);
}
})();
var vec__29598 = om.core.observe.call(null,owner,current_route.call(null));
var route = cljs.core.nth.call(null,vec__29598,(0),null);
var _ = cljs.core.nth.call(null,vec__29598,(1),null);
var temp__4655__auto__ = cljs.core.get_in.call(null,route_components.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,index], null));
if(cljs.core.truth_(temp__4655__auto__)){
var component = temp__4655__auto__;
var route_state = cljs.core.merge.call(null,om.core.get_state.call(null,owner),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outlet-index","outlet-index",-513451969),(index + (1))], null));
return om.core.build.call(null,component,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),route_state], null));
} else {
return om.core.build.call(null,not_found,null);
}
});
sawtooth.router.strip_hash = (function sawtooth$router$strip_hash(path){
if(cljs.core._EQ_.call(null,"#",(path[(0)]))){
return cljs.core.subs.call(null,path,(1));
} else {
return path;
}
});
sawtooth.router.add_hash = (function sawtooth$router$add_hash(path){
if(cljs.core._EQ_.call(null,"#",(path[(0)]))){
return path;
} else {
return [cljs.core.str("#"),cljs.core.str(path)].join('');
}
});
sawtooth.router.update_history_state_BANG_ = (function sawtooth$router$update_history_state_BANG_(f,path){
var path__$1 = sawtooth.router.add_hash.call(null,path);
var vec__29601 = clojure.string.split.call(null,window.location.href,/#/);
var base_path = cljs.core.nth.call(null,vec__29601,(0),null);
var _ = cljs.core.nth.call(null,vec__29601,(1),null);
var url = [cljs.core.str(base_path),cljs.core.str(path__$1)].join('');
f.call(null,url);

return secretary.core.dispatch_BANG_.call(null,path__$1);
});
sawtooth.router.push = (function sawtooth$router$push(path){
return sawtooth.router.history.setToken(sawtooth.router.strip_hash.call(null,path));
});
sawtooth.router.replace = (function sawtooth$router$replace(path){
return sawtooth.router.update_history_state_BANG_.call(null,(function (p1__29603_SHARP_){
return history.replaceState(null,null,p1__29603_SHARP_);
}),path);
});
sawtooth.router.initialize_route = (function sawtooth$router$initialize_route(default_path){
var token = sawtooth.router.history.getToken();
return sawtooth.router.replace.call(null,((cljs.core._EQ_.call(null,token,""))?default_path:token));
});
