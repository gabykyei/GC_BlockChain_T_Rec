// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.service.block');
goog.require('cljs.core');
goog.require('sawtooth.state');
goog.require('sawtooth.service.common');
goog.require('taoensso.timbre');
goog.require('module$lib$deps_library');
goog.require('cljs.core.async');
goog.require('sawtooth.config');
if(typeof sawtooth.service.block.current_socket !== 'undefined'){
} else {
sawtooth.service.block.current_socket = cljs.core.atom.call(null,null);
}
sawtooth.service.block.make_socket = (function sawtooth$service$block$make_socket(url){
return module$lib$deps_library.socket.io(url);
});
sawtooth.service.block.connect_block_monitor = (function sawtooth$service$block$connect_block_monitor(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sawtooth.service.block","/project/sawtooth-core/extensions/mktplace/navigator/client/./scripts/build.clj",30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Connecting block monitor..."], null);
}),null)),null);

var s = sawtooth.service.block.make_socket.call(null,sawtooth.config.socket_location.call(null));
cljs.core.reset_BANG_.call(null,sawtooth.service.block.current_socket,s);

return cljs.core.deref.call(null,sawtooth.service.block.current_socket).on("chain_info",((function (s){
return (function (p1__29631_SHARP_){
var block_info = cljs.core.js__GT_clj.call(null,p1__29631_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blockid","blockid",-664467760).cljs$core$IFn$_invoke$arity$1(block_info),cljs.core.get_in.call(null,cljs.core.deref.call(null,sawtooth.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"blockid","blockid",-664467760)], null)))){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"sawtooth.service.block","/project/sawtooth-core/extensions/mktplace/navigator/client/./scripts/build.clj",36,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (block_info,s){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received block %s (%s)",new cljs.core.Keyword(null,"blocknum","blocknum",-494283662).cljs$core$IFn$_invoke$arity$1(block_info),new cljs.core.Keyword(null,"blockid","blockid",-664467760).cljs$core$IFn$_invoke$arity$1(block_info)], null);
});})(block_info,s))
,null)),null);

return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210)], null),new cljs.core.Keyword(null,"value","value",305978217),block_info], null));
}
});})(s))
);
});
sawtooth.service.block.disconnect_block_monitor = (function sawtooth$service$block$disconnect_block_monitor(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"sawtooth.service.block","/project/sawtooth-core/extensions/mktplace/navigator/client/./scripts/build.clj",41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Disconnecting block monitor..."], null);
}),null)),null);

var temp__4657__auto__ = cljs.core.deref.call(null,sawtooth.service.block.current_socket);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
s.disconnect();

return cljs.core.reset_BANG_.call(null,sawtooth.service.block.current_socket,null);
} else {
return null;
}
});
sawtooth.service.block.chain_info = (function sawtooth$service$block$chain_info(){
return sawtooth.service.common.fetch_json_BANG_.call(null,"/api/ledger/chain",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"info","info",-317069002)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unable to Load Chain Info",new cljs.core.Keyword(null,"message","message",-406056002),"Failed to load the current status of the chain"], null)], null));
});
sawtooth.service.block.transactions = (function sawtooth$service$block$transactions(query){
return sawtooth.service.common.fetch_json_BANG_.call(null,"/api/ledger/transactions",query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unable to Load Transaction History",new cljs.core.Keyword(null,"message","message",-406056002),"Failed to load the transaction history\n                         due to an unknown server error."], null)], null));
});
sawtooth.service.block.transaction_detail = (function sawtooth$service$block$transaction_detail(id){
return sawtooth.service.common.fetch_json_BANG_.call(null,[cljs.core.str("/api/ledger/transactions/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xform","xform",-1725711008),(function (txn){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"transaction-details","transaction-details",268910656)], null),new cljs.core.Keyword(null,"action","action",-811238024),(function (p1__29632_SHARP_){
return cljs.core.conj.call(null,p1__29632_SHARP_,txn);
})], null);
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unable Load Trasaction",new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("Failed to load trasaction "),cljs.core.str(id),cljs.core.str(" due to an unkown server error.")].join('')], null)], null));
});
sawtooth.service.block.pop_transaction_detail = (function sawtooth$service$block$pop_transaction_detail(){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"transaction-details","transaction-details",268910656)], null),new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.rest], null));
});
sawtooth.service.block.clear_chain_info = (function sawtooth$service$block$clear_chain_info(){
return sawtooth.service.common.clear_path_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029)], null));
});
sawtooth.service.block.clear_transaction_details = (function sawtooth$service$block$clear_transaction_details(){
return sawtooth.service.common.clear_path_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"transaction-details","transaction-details",268910656)], null));
});
