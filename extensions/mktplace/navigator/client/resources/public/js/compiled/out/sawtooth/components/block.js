// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.components.block');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('goog.string');
goog.require('sawtooth.service.block');
goog.require('sawtooth.components.core');
sawtooth.components.block.transaction_limit = (10);
sawtooth.components.block.load_transactions = (function sawtooth$components$block$load_transactions(page){
return sawtooth.service.block.transactions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"limit","limit",-1355822363),sawtooth.components.block.transaction_limit], null));
});
sawtooth.components.block.load_history = (function sawtooth$components$block$load_history(page){
sawtooth.components.block.load_transactions.call(null,page);

return sawtooth.service.block.chain_info.call(null);
});
sawtooth.components.block.load_history_page_fn = (function sawtooth$components$block$load_history_page_fn(owner){
return (function (page){
sawtooth.components.block.load_transactions.call(null,page);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"page","page",849072397),page);
});
});
sawtooth.components.block.status_text = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown","Pending","Committed","Failed"], null);
sawtooth.components.block.status_class = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["danger","warning",null,"danger"], null);
sawtooth.components.block.transaction_row = (function sawtooth$components$block$transaction_row(on_row_selected_fn,is_selected_QMARK_,p__30898){
var map__30905 = p__30898;
var map__30905__$1 = ((((!((map__30905 == null)))?((((map__30905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30905):map__30905);
var txn = map__30905__$1;
var txn_id = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var txn_type = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"TransactionType","TransactionType",1211886974));
var status = cljs.core.get.call(null,map__30905__$1,new cljs.core.Keyword(null,"Status","Status",-1212030049));
var update_type = (cljs.core.truth_(cljs.core.get_in.call(null,txn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Update","Update",905920545),new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616)], null)))?cljs.core.get_in.call(null,txn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Update","Update",905920545),new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616)], null)):((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.get.call(null,txn,new cljs.core.Keyword(null,"Updates","Updates",889267029))),(1)))?cljs.core.get_in.call(null,txn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Updates","Updates",889267029),(0),new cljs.core.Keyword(null,"UpdateType","UpdateType",-1595763616)], null)):(cljs.core.truth_(cljs.core.get.call(null,txn,new cljs.core.Keyword(null,"Updates","Updates",889267029)))?"Multiple":"Unknown"
)));
return React.createElement("tr",{"key": txn_id, "onClick": ((function (update_type,map__30905,map__30905__$1,txn,txn_id,txn_type,status){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return on_row_selected_fn.call(null,txn_id);
});})(update_type,map__30905,map__30905__$1,txn,txn_id,txn_type,status))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sawtooth.components.core.classes.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"active","active",1895962068),is_selected_QMARK_.call(null,txn_id),sawtooth.components.block.status_class.call(null,status),true], true, false))], null))},(function (){var attrs30907 = txn_id;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30907))?sablono.interpreter.attributes.call(null,attrs30907):null),((cljs.core.map_QMARK_.call(null,attrs30907))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30907)], null)));
})(),(function (){var attrs30908 = txn_type;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30908))?sablono.interpreter.attributes.call(null,attrs30908):null),((cljs.core.map_QMARK_.call(null,attrs30908))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30908)], null)));
})(),(function (){var attrs30909 = update_type;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30909))?sablono.interpreter.attributes.call(null,attrs30909):null),((cljs.core.map_QMARK_.call(null,attrs30909))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30909)], null)));
})(),(function (){var attrs30910 = cljs.core.get.call(null,sawtooth.components.block.status_text,status);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs30910))?sablono.interpreter.attributes.call(null,attrs30910):null),((cljs.core.map_QMARK_.call(null,attrs30910))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30910)], null)));
})());
});
sawtooth.components.block.dependency_link = (function sawtooth$components$block$dependency_link(dependency_id){
return React.createElement("a",{"key": [cljs.core.str("dep"),cljs.core.str(dependency_id)].join(''), "href": "#", "onClick": (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.service.block.transaction_detail.call(null,dependency_id);
})},sablono.interpreter.interpret.call(null,dependency_id));
});
/**
 * Renders a given transaction's content, if it is made up of either
 *   Update or Updates. Anything else is ignored
 */
sawtooth.components.block.transaction_detail = (function sawtooth$components$block$transaction_detail(txn){
var render_update = (function() {
var sawtooth$components$block$transaction_detail_$_render_update = null;
var sawtooth$components$block$transaction_detail_$_render_update__1 = (function (txn_update){
return sawtooth$components$block$transaction_detail_$_render_update.call(null,txn_update,cljs.core.name);
});
var sawtooth$components$block$transaction_detail_$_render_update__2 = (function (txn_update,key_fn){
return cljs.core.map.call(null,(function (p1__30912_SHARP_){
var vec__30971 = p1__30912_SHARP_;
var k = cljs.core.nth.call(null,vec__30971,(0),null);
var v = cljs.core.nth.call(null,vec__30971,(1),null);
return React.createElement("div",{"key": [cljs.core.str(key_fn.call(null,k))].join('')},(function (){var attrs30972 = cljs.core.name.call(null,k);
return cljs.core.apply.call(null,React.createElement,"dt",((cljs.core.map_QMARK_.call(null,attrs30972))?sablono.interpreter.attributes.call(null,attrs30972):null),((cljs.core.map_QMARK_.call(null,attrs30972))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30972)], null)));
})(),(function (){var attrs30973 = [cljs.core.str(v)].join('');
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs30973))?sablono.interpreter.attributes.call(null,attrs30973):null),((cljs.core.map_QMARK_.call(null,attrs30973))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30973)], null)));
})());
}),cljs.core.remove.call(null,(function (p1__30911_SHARP_){
return cljs.core._EQ_.call(null,"",cljs.core.get.call(null,p1__30911_SHARP_,(1)));
}),txn_update));
});
sawtooth$components$block$transaction_detail_$_render_update = function(txn_update,key_fn){
switch(arguments.length){
case 1:
return sawtooth$components$block$transaction_detail_$_render_update__1.call(this,txn_update);
case 2:
return sawtooth$components$block$transaction_detail_$_render_update__2.call(this,txn_update,key_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sawtooth$components$block$transaction_detail_$_render_update.cljs$core$IFn$_invoke$arity$1 = sawtooth$components$block$transaction_detail_$_render_update__1;
sawtooth$components$block$transaction_detail_$_render_update.cljs$core$IFn$_invoke$arity$2 = sawtooth$components$block$transaction_detail_$_render_update__2;
return sawtooth$components$block$transaction_detail_$_render_update;
})()
;
var render_indexed_update = (function sawtooth$components$block$transaction_detail_$_render_indexed_update(i,txn_update){
return React.createElement("div",{"key": i},React.createElement("br",null),React.createElement("dt",null,"Update"),(function (){var attrs30983 = [cljs.core.str(i)].join('');
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs30983))?sablono.interpreter.attributes.call(null,attrs30983):null),((cljs.core.map_QMARK_.call(null,attrs30983))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30983)], null)));
})(),sablono.interpreter.interpret.call(null,render_update.call(null,txn_update,(function (p1__30913_SHARP_){
return [cljs.core.str(cljs.core.name.call(null,p1__30913_SHARP_)),cljs.core.str("-"),cljs.core.str(i)].join('');
}))));
});
return React.createElement("dl",{"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(txn), "className": "dl-horizontal transaction-detail"},React.createElement("dt",null,"InBlock"),(function (){var attrs30986 = new cljs.core.Keyword(null,"InBlock","InBlock",700661023).cljs$core$IFn$_invoke$arity$1(txn);
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs30986))?sablono.interpreter.attributes.call(null,attrs30986):null),((cljs.core.map_QMARK_.call(null,attrs30986))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30986)], null)));
})(),React.createElement("dt",null,"Dependencies"),(function (){var attrs30989 = ((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"Dependencies","Dependencies",1805355173).cljs$core$IFn$_invoke$arity$1(txn))))?cljs.core.interpose.call(null,", ",cljs.core.map.call(null,sawtooth.components.block.dependency_link,new cljs.core.Keyword(null,"Dependencies","Dependencies",1805355173).cljs$core$IFn$_invoke$arity$1(txn))):"None");
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs30989))?sablono.interpreter.attributes.call(null,attrs30989):null),((cljs.core.map_QMARK_.call(null,attrs30989))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30989)], null)));
})(),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"Update","Update",905920545).cljs$core$IFn$_invoke$arity$1(txn))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Update"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),""], null),render_update.call(null,new cljs.core.Keyword(null,"Update","Update",905920545).cljs$core$IFn$_invoke$arity$1(txn))], null):null)),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,render_indexed_update,new cljs.core.Keyword(null,"Updates","Updates",889267029).cljs$core$IFn$_invoke$arity$1(txn))));
});
sawtooth.components.block.transaction_detail_modal = (function sawtooth$components$block$transaction_detail_modal(p__30990,owner){
var map__31001 = p__30990;
var map__31001__$1 = ((((!((map__31001 == null)))?((((map__31001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31001):map__31001);
var txns = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
if(typeof sawtooth.components.block.t_sawtooth$components$block31003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sawtooth.components.block.t_sawtooth$components$block31003 = (function (transaction_detail_modal,p__30990,owner,map__31001,txns,meta31004){
this.transaction_detail_modal = transaction_detail_modal;
this.p__30990 = p__30990;
this.owner = owner;
this.map__31001 = map__31001;
this.txns = txns;
this.meta31004 = meta31004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sawtooth.components.block.t_sawtooth$components$block31003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31001,map__31001__$1,txns){
return (function (_31005,meta31004__$1){
var self__ = this;
var _31005__$1 = this;
return (new sawtooth.components.block.t_sawtooth$components$block31003(self__.transaction_detail_modal,self__.p__30990,self__.owner,self__.map__31001,self__.txns,meta31004__$1));
});})(map__31001,map__31001__$1,txns))
;

sawtooth.components.block.t_sawtooth$components$block31003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31001,map__31001__$1,txns){
return (function (_31005){
var self__ = this;
var _31005__$1 = this;
return self__.meta31004;
});})(map__31001,map__31001__$1,txns))
;

sawtooth.components.block.t_sawtooth$components$block31003.prototype.om$core$IRender$ = true;

sawtooth.components.block.t_sawtooth$components$block31003.prototype.om$core$IRender$render$arity$1 = ((function (map__31001,map__31001__$1,txns){
return (function (this__28854__auto__){
var self__ = this;
var this__28854__auto____$1 = this;
var txn = cljs.core.first.call(null,self__.txns);
return sawtooth.components.core.modal_scaffold.call(null,((function (txn,this__28854__auto____$1,map__31001,map__31001__$1,txns){
return (function (){
return sawtooth.service.block.clear_transaction_details.call(null);
});})(txn,this__28854__auto____$1,map__31001,map__31001__$1,txns))
,React.createElement("h4",null,"Transaction ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(txn))),(function (){var attrs31006 = sawtooth.components.block.transaction_detail.call(null,txn);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31006))?sablono.interpreter.attributes.call(null,attrs31006):null),((cljs.core.map_QMARK_.call(null,attrs31006))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("br",null),React.createElement("a",{"href": "#", "onClick": ((function (attrs31006,txn,this__28854__auto____$1,map__31001,map__31001__$1,txns){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.service.block.pop_transaction_detail.call(null);
});})(attrs31006,txn,this__28854__auto____$1,map__31001,map__31001__$1,txns))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((1) < cljs.core.count.call(null,self__.txns)))?null:"invisible")], null))},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&laquo;"))," Back")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31006),React.createElement("br",null),React.createElement("a",{"href": "#", "onClick": ((function (attrs31006,txn,this__28854__auto____$1,map__31001,map__31001__$1,txns){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.service.block.pop_transaction_detail.call(null);
});})(attrs31006,txn,this__28854__auto____$1,map__31001,map__31001__$1,txns))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((1) < cljs.core.count.call(null,self__.txns)))?null:"invisible")], null))},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&laquo;"))," Back")], null)));
})(),true);
});})(map__31001,map__31001__$1,txns))
;

sawtooth.components.block.t_sawtooth$components$block31003.getBasis = ((function (map__31001,map__31001__$1,txns){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"transaction-detail-modal","transaction-detail-modal",-667075902,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"txns","txns",148429106,null),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__30990","p__30990",255509661,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__31001","map__31001",-1660318839,null),new cljs.core.Symbol(null,"txns","txns",148429106,null),new cljs.core.Symbol(null,"meta31004","meta31004",-32592326,null)], null);
});})(map__31001,map__31001__$1,txns))
;

sawtooth.components.block.t_sawtooth$components$block31003.cljs$lang$type = true;

sawtooth.components.block.t_sawtooth$components$block31003.cljs$lang$ctorStr = "sawtooth.components.block/t_sawtooth$components$block31003";

sawtooth.components.block.t_sawtooth$components$block31003.cljs$lang$ctorPrWriter = ((function (map__31001,map__31001__$1,txns){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"sawtooth.components.block/t_sawtooth$components$block31003");
});})(map__31001,map__31001__$1,txns))
;

sawtooth.components.block.__GT_t_sawtooth$components$block31003 = ((function (map__31001,map__31001__$1,txns){
return (function sawtooth$components$block$transaction_detail_modal_$___GT_t_sawtooth$components$block31003(transaction_detail_modal__$1,p__30990__$1,owner__$1,map__31001__$2,txns__$1,meta31004){
return (new sawtooth.components.block.t_sawtooth$components$block31003(transaction_detail_modal__$1,p__30990__$1,owner__$1,map__31001__$2,txns__$1,meta31004));
});})(map__31001,map__31001__$1,txns))
;

}

return (new sawtooth.components.block.t_sawtooth$components$block31003(sawtooth$components$block$transaction_detail_modal,p__30990,owner,map__31001__$1,txns,null));
});
sawtooth.components.block.transaction_detail_row = (function sawtooth$components$block$transaction_detail_row(is_selected_QMARK_,p__31011){
var map__31014 = p__31011;
var map__31014__$1 = ((((!((map__31014 == null)))?((((map__31014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31014):map__31014);
var txn = map__31014__$1;
var txn_id = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(is_selected_QMARK_.call(null,txn_id))){
return React.createElement("tr",{"key": [cljs.core.str(txn_id),cljs.core.str("-detail")].join('')},React.createElement("td",{"colSpan": (4)},sablono.interpreter.interpret.call(null,sawtooth.components.block.transaction_detail.call(null,txn))));
} else {
return null;
}
});
/**
 * Component for a transaction history table. The state provided
 *   must contain a page number and page function.
 * 
 *   Args:
 * 
 *  state: the Om component state
 *   :txns - the list of transactions for this page
 *   :total-txns - the total available transactions
 *   :page - the current page number (required)
 *   :page-fn - a function for changing pages (required)
 *  owner: the Om component owner
 */
sawtooth.components.block.history_table = (function sawtooth$components$block$history_table(p__31016,owner){
var map__31029 = p__31016;
var map__31029__$1 = ((((!((map__31029 == null)))?((((map__31029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31029):map__31029);
var txns = cljs.core.get.call(null,map__31029__$1,new cljs.core.Keyword(null,"txns","txns",-1492102421));
var total_txns = cljs.core.get.call(null,map__31029__$1,new cljs.core.Keyword(null,"total-txns","total-txns",-96827068));
var page = cljs.core.get.call(null,map__31029__$1,new cljs.core.Keyword(null,"page","page",849072397));
var page_fn = cljs.core.get.call(null,map__31029__$1,new cljs.core.Keyword(null,"page-fn","page-fn",55230390));
if(typeof page === 'number'){
} else {
throw (new Error("Assert failed: (number? page)"));
}

if(cljs.core.fn_QMARK_.call(null,page_fn)){
} else {
throw (new Error("Assert failed: (fn? page-fn)"));
}

if(typeof sawtooth.components.block.t_sawtooth$components$block31031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
sawtooth.components.block.t_sawtooth$components$block31031 = (function (history_table,p__31016,owner,map__31029,txns,total_txns,page,page_fn,meta31032){
this.history_table = history_table;
this.p__31016 = p__31016;
this.owner = owner;
this.map__31029 = map__31029;
this.txns = txns;
this.total_txns = total_txns;
this.page = page;
this.page_fn = page_fn;
this.meta31032 = meta31032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sawtooth.components.block.t_sawtooth$components$block31031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function (_31033,meta31032__$1){
var self__ = this;
var _31033__$1 = this;
return (new sawtooth.components.block.t_sawtooth$components$block31031(self__.history_table,self__.p__31016,self__.owner,self__.map__31029,self__.txns,self__.total_txns,self__.page,self__.page_fn,meta31032__$1));
});})(map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;

sawtooth.components.block.t_sawtooth$components$block31031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function (_31033){
var self__ = this;
var _31033__$1 = this;
return self__.meta31032;
});})(map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;

sawtooth.components.block.t_sawtooth$components$block31031.prototype.om$core$IInitState$ = true;

sawtooth.components.block.t_sawtooth$components$block31031.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;

sawtooth.components.block.t_sawtooth$components$block31031.prototype.om$core$IRenderState$ = true;

sawtooth.components.block.t_sawtooth$components$block31031.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function (_,p__31034){
var self__ = this;
var map__31035 = p__31034;
var map__31035__$1 = ((((!((map__31035 == null)))?((((map__31035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31035):map__31035);
var selected_txn_id = cljs.core.get.call(null,map__31035__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var ___$1 = this;
var on_row_select = ((function (___$1,map__31035,map__31035__$1,selected_txn_id,map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function sawtooth$components$block$history_table_$_on_row_select(txn_id){
return sawtooth.service.block.transaction_detail.call(null,txn_id);
});})(___$1,map__31035,map__31035__$1,selected_txn_id,map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;
var is_selected_QMARK_ = ((function (___$1,map__31035,map__31035__$1,selected_txn_id,map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function sawtooth$components$block$history_table_$_is_selected_QMARK_(txn_id){
return cljs.core._EQ_.call(null,txn_id,selected_txn_id);
});})(___$1,map__31035,map__31035__$1,selected_txn_id,map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;
return React.createElement("div",{"className": "history-container"},React.createElement("div",{"className": "row"},React.createElement("table",{"className": "table table-condensed"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Transaction Id"),React.createElement("th",null,"Transaction Type"),React.createElement("th",null,"Update Type"),React.createElement("th",null,"Transaction Status"))),(function (){var attrs31039 = cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,sawtooth.components.block.transaction_row,on_row_select,is_selected_QMARK_),self__.txns),cljs.core.map.call(null,cljs.core.partial.call(null,sawtooth.components.block.transaction_detail_row,is_selected_QMARK_),self__.txns));
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs31039))?sablono.interpreter.attributes.call(null,attrs31039):null),((cljs.core.map_QMARK_.call(null,attrs31039))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31039)], null)));
})())),(((sawtooth.components.block.transaction_limit < self__.total_txns))?(function (){var attrs31040 = om.core.build.call(null,sawtooth.components.core.paging,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),self__.page,new cljs.core.Keyword(null,"total-items","total-items",-521030113),self__.total_txns,new cljs.core.Keyword(null,"items-per-page","items-per-page",1024404135),sawtooth.components.block.transaction_limit,new cljs.core.Keyword(null,"go-to-page-fn","go-to-page-fn",-1555478667),self__.page_fn], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs31040))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs31040)):{"className": "row"}),((cljs.core.map_QMARK_.call(null,attrs31040))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31040)], null)));
})():null));
});})(map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;

sawtooth.components.block.t_sawtooth$components$block31031.getBasis = ((function (map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"history-table","history-table",-1787473867,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"txns","txns",148429106,null),new cljs.core.Symbol(null,"total-txns","total-txns",1543704459,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Symbol(null,"page-fn","page-fn",1695761917,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Component for a transaction history table. The state provided\n  must contain a page number and page function.\n\n  Args:\n\n    state: the Om component state\n     :txns - the list of transactions for this page\n     :total-txns - the total available transactions\n     :page - the current page number (required)\n     :page-fn - a function for changing pages (required)\n    owner: the Om component owner"], null)),new cljs.core.Symbol(null,"p__31016","p__31016",-1131957376,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__31029","map__31029",2022786988,null),new cljs.core.Symbol(null,"txns","txns",148429106,null),new cljs.core.Symbol(null,"total-txns","total-txns",1543704459,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),new cljs.core.Symbol(null,"page-fn","page-fn",1695761917,null),new cljs.core.Symbol(null,"meta31032","meta31032",1409494526,null)], null);
});})(map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;

sawtooth.components.block.t_sawtooth$components$block31031.cljs$lang$type = true;

sawtooth.components.block.t_sawtooth$components$block31031.cljs$lang$ctorStr = "sawtooth.components.block/t_sawtooth$components$block31031";

sawtooth.components.block.t_sawtooth$components$block31031.cljs$lang$ctorPrWriter = ((function (map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"sawtooth.components.block/t_sawtooth$components$block31031");
});})(map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;

sawtooth.components.block.__GT_t_sawtooth$components$block31031 = ((function (map__31029,map__31029__$1,txns,total_txns,page,page_fn){
return (function sawtooth$components$block$history_table_$___GT_t_sawtooth$components$block31031(history_table__$1,p__31016__$1,owner__$1,map__31029__$2,txns__$1,total_txns__$1,page__$1,page_fn__$1,meta31032){
return (new sawtooth.components.block.t_sawtooth$components$block31031(history_table__$1,p__31016__$1,owner__$1,map__31029__$2,txns__$1,total_txns__$1,page__$1,page_fn__$1,meta31032));
});})(map__31029,map__31029__$1,txns,total_txns,page,page_fn))
;

}

return (new sawtooth.components.block.t_sawtooth$components$block31031(sawtooth$components$block$history_table,p__31016,owner,map__31029__$1,txns,total_txns,page,page_fn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Component for displaying the history of the block-chain.
 * 
 *   Args:
 *  data: the Om component state
 *  owner: the Om component owner
 */
sawtooth.components.block.transaction_history = (function sawtooth$components$block$transaction_history(data,owner){
if(typeof sawtooth.components.block.t_sawtooth$components$block31047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
sawtooth.components.block.t_sawtooth$components$block31047 = (function (transaction_history,data,owner,meta31048){
this.transaction_history = transaction_history;
this.data = data;
this.owner = owner;
this.meta31048 = meta31048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sawtooth.components.block.t_sawtooth$components$block31047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31049,meta31048__$1){
var self__ = this;
var _31049__$1 = this;
return (new sawtooth.components.block.t_sawtooth$components$block31047(self__.transaction_history,self__.data,self__.owner,meta31048__$1));
});

sawtooth.components.block.t_sawtooth$components$block31047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31049){
var self__ = this;
var _31049__$1 = this;
return self__.meta31048;
});

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IInitState$ = true;

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),(0)], null);
});

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IWillMount$ = true;

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sawtooth.components.block.load_history.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397)));
});

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IWillUnmount$ = true;

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sawtooth.service.block.clear_chain_info.call(null);
});

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IWillReceiveProps$ = true;

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,next_state){
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
return sawtooth.components.block.load_history.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397)));
} else {
return null;
}
});

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IRenderState$ = true;

sawtooth.components.block.t_sawtooth$components$block31047.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31050){
var self__ = this;
var map__31051 = p__31050;
var map__31051__$1 = ((((!((map__31051 == null)))?((((map__31051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31051):map__31051);
var page = cljs.core.get.call(null,map__31051__$1,new cljs.core.Keyword(null,"page","page",849072397));
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var temp__4655__auto__ = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"info","info",-317069002)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var chain_info = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.transaction-history","div.container.transaction-history",287557386),(function (){var temp__4657__auto__ = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"transaction-details","transaction-details",268910656)], null));
if(cljs.core.truth_(temp__4657__auto__)){
var transaction_detail_stack = temp__4657__auto__;
return sawtooth.components.core.modal_container.call(null,!(cljs.core.empty_QMARK_.call(null,transaction_detail_stack)),sawtooth.components.block.transaction_detail_modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118),transaction_detail_stack], null));
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Transaction History"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-title","div.panel-title",1200532533),"Current Block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-basic","table.table-basic",1767860213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Block Id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Block Number"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Transaction Count"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,chain_info,new cljs.core.Keyword(null,"blockid","blockid",-664467760))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,chain_info,new cljs.core.Keyword(null,"blocknum","blocknum",-494283662))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,chain_info,new cljs.core.Keyword(null,"size","size",1098693007))], null)], null)], null)], null)], null)], null)], null),om.core.build.call(null,sawtooth.components.block.history_table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"txns","txns",-1492102421),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"transactions","transactions",-1425846118),new cljs.core.Keyword(null,"data","data",-232669377)], null)),new cljs.core.Keyword(null,"total-txns","total-txns",-96827068),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chain","chain",15631029),new cljs.core.Keyword(null,"transactions","transactions",-1425846118),new cljs.core.Keyword(null,"count","count",2139924085)], null)),new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"page-fn","page-fn",55230390),sawtooth.components.block.load_history_page_fn.call(null,self__.owner)], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),"Loading..."], null);
}
})());
});

sawtooth.components.block.t_sawtooth$components$block31047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"transaction-history","transaction-history",1195585271,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Component for displaying the history of the block-chain.\n\n  Args:\n    data: the Om component state\n    owner: the Om component owner"], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31048","meta31048",-2085051677,null)], null);
});

sawtooth.components.block.t_sawtooth$components$block31047.cljs$lang$type = true;

sawtooth.components.block.t_sawtooth$components$block31047.cljs$lang$ctorStr = "sawtooth.components.block/t_sawtooth$components$block31047";

sawtooth.components.block.t_sawtooth$components$block31047.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"sawtooth.components.block/t_sawtooth$components$block31047");
});

sawtooth.components.block.__GT_t_sawtooth$components$block31047 = (function sawtooth$components$block$transaction_history_$___GT_t_sawtooth$components$block31047(transaction_history__$1,data__$1,owner__$1,meta31048){
return (new sawtooth.components.block.t_sawtooth$components$block31047(transaction_history__$1,data__$1,owner__$1,meta31048));
});

}

return (new sawtooth.components.block.t_sawtooth$components$block31047(sawtooth$components$block$transaction_history,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
