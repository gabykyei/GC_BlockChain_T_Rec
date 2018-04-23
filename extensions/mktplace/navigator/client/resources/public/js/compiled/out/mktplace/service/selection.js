// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.service.selection');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sawtooth.state');
mktplace.service.selection.select_holding_BANG_ = (function mktplace$service$selection$select_holding_BANG_(holding){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233),new cljs.core.Keyword(null,"holding","holding",1269510599)], null),new cljs.core.Keyword(null,"value","value",305978217),holding], null));
});
mktplace.service.selection.select_asset_BANG_ = (function mktplace$service$selection$select_asset_BANG_(asset){
return cljs.core.async.put_BANG_.call(null,sawtooth.state.state_change_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selections","selections",-1277610233)], null),new cljs.core.Keyword(null,"value","value",305978217),asset], null));
});
