// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.http');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
sawtooth.http.http_methods = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
sawtooth.http.encode_uri_query = (function sawtooth$http$encode_uri_query(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent(s),/%40/,"@"),/%3A/,":"),/%24/,"$"),/%2C/,","),/%20/,"+");
});
sawtooth.http.make_parameters = (function sawtooth$http$make_parameters(query){
return clojure.string.join.call(null,"&",(function (){var iter__6867__auto__ = (function sawtooth$http$make_parameters_$_iter__25558(s__25559){
return (new cljs.core.LazySeq(null,(function (){
var s__25559__$1 = s__25559;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25559__$1);
if(temp__4657__auto__){
var s__25559__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25559__$2)){
var c__6865__auto__ = cljs.core.chunk_first.call(null,s__25559__$2);
var size__6866__auto__ = cljs.core.count.call(null,c__6865__auto__);
var b__25561 = cljs.core.chunk_buffer.call(null,size__6866__auto__);
if((function (){var i__25560 = (0);
while(true){
if((i__25560 < size__6866__auto__)){
var vec__25564 = cljs.core._nth.call(null,c__6865__auto__,i__25560);
var k = cljs.core.nth.call(null,vec__25564,(0),null);
var v = cljs.core.nth.call(null,vec__25564,(1),null);
cljs.core.chunk_append.call(null,b__25561,[cljs.core.str(sawtooth.http.encode_uri_query.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(sawtooth.http.encode_uri_query.call(null,v))].join(''));

var G__25566 = (i__25560 + (1));
i__25560 = G__25566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25561),sawtooth$http$make_parameters_$_iter__25558.call(null,cljs.core.chunk_rest.call(null,s__25559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25561),null);
}
} else {
var vec__25565 = cljs.core.first.call(null,s__25559__$2);
var k = cljs.core.nth.call(null,vec__25565,(0),null);
var v = cljs.core.nth.call(null,vec__25565,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(sawtooth.http.encode_uri_query.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(sawtooth.http.encode_uri_query.call(null,v))].join(''),sawtooth$http$make_parameters_$_iter__25558.call(null,cljs.core.rest.call(null,s__25559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6867__auto__.call(null,query);
})());
});
sawtooth.http.content_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"json","json",1279968570),"application/json; charset=UTF-8",new cljs.core.Keyword(null,"form","form",-1624062471),"application/x-www-form-urlencoded; charset=UTF-8"], null);
sawtooth.http.data_formatters = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"json","json",1279968570),(function (p1__25567_SHARP_){
return JSON.stringify(cljs.core.clj__GT_js.call(null,p1__25567_SHARP_));
}),new cljs.core.Keyword(null,"form","form",-1624062471),sawtooth.http.make_parameters], null);
/**
 * Takes a URL and a map of query parameters and
 *   converts them into an endpoint.
 */
sawtooth.http.query_endpoint = (function sawtooth$http$query_endpoint(url,query){
var query__$1 = cljs.core.filter.call(null,(function (p1__25568_SHARP_){
return cljs.core.get.call(null,p1__25568_SHARP_,(1));
}),query);
return [cljs.core.str(url),cljs.core.str(((cljs.core.empty_QMARK_.call(null,query__$1))?"":[cljs.core.str("?"),cljs.core.str(sawtooth.http.make_parameters.call(null,query__$1))].join('')))].join('');
});
/**
 * Performs an ajax operation.
 * 
 *   Args:
 *  opts
 *    :method - one of :get, :put, :post, or :delete; defaults to :get
 *    :data - post/put data, if needed
 *    :data-type - one of :json, or :form; defaults to :json
 *    :close-on-complete? - indicates whether or not the result channel
 *                          should be closed on completion
 * 
 *  res-ch - the channel on which the results should be placed;
 *           if one is not provided a channel will be created and returned,
 *           and closed on completion
 */
sawtooth.http.ajax = (function sawtooth$http$ajax(var_args){
var args25569 = [];
var len__7157__auto___25576 = arguments.length;
var i__7158__auto___25577 = (0);
while(true){
if((i__7158__auto___25577 < len__7157__auto___25576)){
args25569.push((arguments[i__7158__auto___25577]));

var G__25578 = (i__7158__auto___25577 + (1));
i__7158__auto___25577 = G__25578;
continue;
} else {
}
break;
}

var G__25571 = args25569.length;
switch (G__25571) {
case 1:
return sawtooth.http.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.http.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25569.length)].join('')));

}
});

sawtooth.http.ajax.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return sawtooth.http.ajax.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"close-on-complete?","close-on-complete?",-583274951)),cljs.core.async.chan.call(null,(1)));
});

sawtooth.http.ajax.cljs$core$IFn$_invoke$arity$2 = (function (p__25572,res_ch){
var map__25573 = p__25572;
var map__25573__$1 = ((((!((map__25573 == null)))?((((map__25573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);
var opts = map__25573__$1;
var method = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var url = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"url","url",276297046));
var data = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_type = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"json","json",1279968570));
var headers = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var close_on_complete_QMARK_ = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"close-on-complete?","close-on-complete?",-583274951),true);
if(cljs.core.truth_(url)){
} else {
throw (new Error("Assert failed: url"));
}

var xhr_25580 = (new goog.net.XhrIo());
var send_headers_25581 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",data_type.call(null,sawtooth.http.content_types)], null),headers);
goog.events.listen(xhr_25580,goog.net.EventType.COMPLETE,((function (xhr_25580,send_headers_25581,map__25573,map__25573__$1,opts,method,url,data,data_type,headers,close_on_complete_QMARK_){
return (function (e){
if(cljs.core.truth_(xhr_25580.isSuccess())){
cljs.core.async.put_BANG_.call(null,res_ch,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),xhr_25580.getStatus(),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhr_25580.getStatusText(),new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__25575 = cljs.core.first.call(null,(function (){var or__6087__auto__ = xhr_25580.getResponseHeader("Content-Type");
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "";
}
})().split(";"));
switch (G__25575) {
case "application/json":
return cljs.core.js__GT_clj.call(null,xhr_25580.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);

break;
default:
return xhr_25580.getResponseText();

}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.js__GT_clj.call(null,xhr_25580.getResponseHeaders())], null));
} else {
var error_code_25583 = xhr_25580.getLastErrorCode();
var error_25584 = xhr_25580.getLastError();
var status_25585 = xhr_25580.getStatus();
cljs.core.async.put_BANG_.call(null,res_ch,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var or__6087__auto__ = status_25585;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (- error_code_25583);
}
})(),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),error_25584,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.ex_info.call(null,[cljs.core.str("Request to "),cljs.core.str(url),cljs.core.str(" failed")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-code","error-code",180497232),error_code_25583,new cljs.core.Keyword(null,"error","error",-978969032),error_25584], null))], null));
}

if(cljs.core.truth_(close_on_complete_QMARK_)){
return cljs.core.async.close_BANG_.call(null,res_ch);
} else {
return null;
}
});})(xhr_25580,send_headers_25581,map__25573,map__25573__$1,opts,method,url,data,data_type,headers,close_on_complete_QMARK_))
);

xhr_25580.send(url,sawtooth.http.http_methods.call(null,method),(cljs.core.truth_(data)?data_type.call(null,sawtooth.http.data_formatters).call(null,data):null),cljs.core.clj__GT_js.call(null,send_headers_25581));

return res_ch;
});

sawtooth.http.ajax.cljs$lang$maxFixedArity = 2;
sawtooth.http.json_xhr = (function sawtooth$http$json_xhr(method,endpoint,data,res_ch){
return sawtooth.http.ajax.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),endpoint,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"json","json",1279968570)], null),res_ch);
});
