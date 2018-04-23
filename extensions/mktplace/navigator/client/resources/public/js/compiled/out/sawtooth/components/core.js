// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.components.core');
goog.require('cljs.core');
goog.require('sawtooth.files');
goog.require('sawtooth.events');
goog.require('goog.string');
goog.require('taoensso.timbre');
goog.require('sablono.core');
goog.require('sawtooth.math');
goog.require('sawtooth.router');
goog.require('sawtooth.service.block');
goog.require('om.core');
goog.require('clojure.string');
sawtooth.components.core.glyph = (function sawtooth$components$core$glyph(k){
return React.createElement("i",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("glyphicon glyphicon-"),cljs.core.str(cljs.core.name.call(null,k))].join('')], null))});
});
/**
 * Converts a map to a string of CSS class names All keys in the map
 *   with logically true values are added to the resulting CSS class string.
 * 
 *   E.g.
 * 
 *   => (classes {:active true :success 1})
 *  "active success"
 */
sawtooth.components.core.classes = (function sawtooth$components$core$classes(m){
if(cljs.core.truth_(m)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__29683_SHARP_){
return cljs.core.name.call(null,cljs.core.get.call(null,p1__29683_SHARP_,(0)));
}),cljs.core.remove.call(null,(function (p1__29682_SHARP_){
return (cljs.core.not.call(null,cljs.core.get.call(null,p1__29682_SHARP_,(0)))) || (cljs.core.not.call(null,cljs.core.get.call(null,p1__29682_SHARP_,(1))));
}),m)));
} else {
return null;
}
});
sawtooth.components.core.nbsp = goog.string.unescapeEntities("&nbsp;");
sawtooth.components.core.react_css_transition_group = React.addons.CSSTransitionGroup;
sawtooth.components.core.create_element = (function sawtooth$components$core$create_element(var_args){
var args__7164__auto__ = [];
var len__7157__auto___29687 = arguments.length;
var i__7158__auto___29688 = (0);
while(true){
if((i__7158__auto___29688 < len__7157__auto___29687)){
args__7164__auto__.push((arguments[i__7158__auto___29688]));

var G__29689 = (i__7158__auto___29688 + (1));
i__7158__auto___29688 = G__29689;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((2) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((2)),(0),null)):null);
return sawtooth.components.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7165__auto__);
});

sawtooth.components.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (element_type,props,more){
return cljs.core.apply.call(null,React.createElement,element_type,props,more);
});

sawtooth.components.core.create_element.cljs$lang$maxFixedArity = (2);

sawtooth.components.core.create_element.cljs$lang$applyTo = (function (seq29684){
var G__29685 = cljs.core.first.call(null,seq29684);
var seq29684__$1 = cljs.core.next.call(null,seq29684);
var G__29686 = cljs.core.first.call(null,seq29684__$1);
var seq29684__$2 = cljs.core.next.call(null,seq29684__$1);
return sawtooth.components.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__29685,G__29686,seq29684__$2);
});
sawtooth.components.core.css_transition_group = (function sawtooth$components$core$css_transition_group(var_args){
var args__7164__auto__ = [];
var len__7157__auto___29695 = arguments.length;
var i__7158__auto___29696 = (0);
while(true){
if((i__7158__auto___29696 < len__7157__auto___29695)){
args__7164__auto__.push((arguments[i__7158__auto___29696]));

var G__29697 = (i__7158__auto___29696 + (1));
i__7158__auto___29696 = G__29697;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return sawtooth.components.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

sawtooth.components.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (p__29692,elements){
var map__29693 = p__29692;
var map__29693__$1 = ((((!((map__29693 == null)))?((((map__29693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29693):map__29693);
var component = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var transition_name = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"transition-name","transition-name",91360299));
var transition_enter_timeout = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"transition-enter-timeout","transition-enter-timeout",811383642));
var transition_leave_timeout = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"transition-leave-timeout","transition-leave-timeout",165643286));
return cljs.core.apply.call(null,sawtooth.components.core.create_element,sawtooth.components.core.react_css_transition_group,{"component": (function (){var or__6087__auto__ = component;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return "div";
}
})(), "transitionName": transition_name, "transitionEnterTimeout": transition_enter_timeout, "transitionLeaveTimeout": transition_leave_timeout},elements);
});

sawtooth.components.core.css_transition_group.cljs$lang$maxFixedArity = (1);

sawtooth.components.core.css_transition_group.cljs$lang$applyTo = (function (seq29690){
var G__29691 = cljs.core.first.call(null,seq29690);
var seq29690__$1 = cljs.core.next.call(null,seq29690);
return sawtooth.components.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(G__29691,seq29690__$1);
});
sawtooth.components.core.modal_scaffold = (function sawtooth$components$core$modal_scaffold(var_args){
var args29699 = [];
var len__7157__auto___29705 = arguments.length;
var i__7158__auto___29706 = (0);
while(true){
if((i__7158__auto___29706 < len__7157__auto___29705)){
args29699.push((arguments[i__7158__auto___29706]));

var G__29707 = (i__7158__auto___29706 + (1));
i__7158__auto___29706 = G__29707;
continue;
} else {
}
break;
}

var G__29701 = args29699.length;
switch (G__29701) {
case 3:
return sawtooth.components.core.modal_scaffold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.components.core.modal_scaffold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29699.length)].join('')));

}
});

sawtooth.components.core.modal_scaffold.cljs$core$IFn$_invoke$arity$3 = (function (close_fn,header,body){
return sawtooth.components.core.modal_scaffold.call(null,close_fn,header,body,false);
});

sawtooth.components.core.modal_scaffold.cljs$core$IFn$_invoke$arity$4 = (function (close_fn,header,body,background_QMARK_){
var escape_handler = (function (p1__29698_SHARP_){
if(cljs.core._EQ_.call(null,p1__29698_SHARP_.key,"Escape")){
p1__29698_SHARP_.preventDefault();

return close_fn.call(null);
} else {
return null;
}
});
var attrs29702 = (cljs.core.truth_(background_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-bg","div.modal-bg",-810390328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (escape_handler){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return close_fn.call(null);
});})(escape_handler))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),escape_handler], null)], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29702))?sablono.interpreter.attributes.call(null,attrs29702):null),((cljs.core.map_QMARK_.call(null,attrs29702))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"role": "dialog", "tabIndex": "1", "onKeyDown": escape_handler, "className": "modal animated-modal"},React.createElement("div",{"className": "modal-dialog"},React.createElement("div",{"className": "modal-content"},React.createElement("div",{"className": "modal-header"},React.createElement("button",{"type": "button", "aria-label": "Close", "onClick": ((function (attrs29702,escape_handler){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return close_fn.call(null);
});})(attrs29702,escape_handler))
, "className": "close"},React.createElement("span",{"aria-hidden": "true"},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&times;")))),sablono.interpreter.interpret.call(null,header)),(function (){var attrs29703 = body;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29703))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs29703)):{"className": "modal-body"}),((cljs.core.map_QMARK_.call(null,attrs29703))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29703)], null)));
})())))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29702),React.createElement("div",{"role": "dialog", "tabIndex": "1", "onKeyDown": escape_handler, "className": "modal animated-modal"},React.createElement("div",{"className": "modal-dialog"},React.createElement("div",{"className": "modal-content"},React.createElement("div",{"className": "modal-header"},React.createElement("button",{"type": "button", "aria-label": "Close", "onClick": ((function (attrs29702,escape_handler){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return close_fn.call(null);
});})(attrs29702,escape_handler))
, "className": "close"},React.createElement("span",{"aria-hidden": "true"},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&times;")))),sablono.interpreter.interpret.call(null,header)),(function (){var attrs29704 = body;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29704))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs29704)):{"className": "modal-body"}),((cljs.core.map_QMARK_.call(null,attrs29704))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29704)], null)));
})())))], null)));
});

sawtooth.components.core.modal_scaffold.cljs$lang$maxFixedArity = 4;
sawtooth.components.core.modal_container = (function sawtooth$components$core$modal_container(display_QMARK_,modal,data){
return sawtooth.components.core.css_transition_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"modal",new cljs.core.Keyword(null,"transition-enter-timeout","transition-enter-timeout",811383642),(500),new cljs.core.Keyword(null,"transition-leave-timeout","transition-leave-timeout",165643286),(300)], null),(cljs.core.truth_(display_QMARK_)?om.core.build.call(null,modal,data):null));
});
sawtooth.components.core.has_next_QMARK_ = (function sawtooth$components$core$has_next_QMARK_(current_page,total_items,items_per_page){
return (current_page < (sawtooth.math.ceil.call(null,(total_items / items_per_page)) - (1)));
});
sawtooth.components.core.go_back = (function sawtooth$components$core$go_back(current_page,go_to_page_fn){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

if((current_page > (0))){
return go_to_page_fn.call(null,(current_page - (1)));
} else {
return null;
}
});
});
sawtooth.components.core.go_next = (function sawtooth$components$core$go_next(current_page,total_items,items_per_page,go_to_page_fn){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

if(cljs.core.truth_(sawtooth.components.core.has_next_QMARK_.call(null,current_page,total_items,items_per_page))){
return go_to_page_fn.call(null,(current_page + (1)));
} else {
return null;
}
});
});
/**
 * Calculation of a page number with the total pages and with the given
 *   max-viewable-pages, when on a particular page.
 */
sawtooth.components.core.calculate_page_number = (function sawtooth$components$core$calculate_page_number(i,current_page,max_viewable_pages,total_pages){
var halfway = sawtooth.math.ceil.call(null,(max_viewable_pages / (2)));
if(cljs.core._EQ_.call(null,i,max_viewable_pages)){
return total_pages;
} else {
if(cljs.core._EQ_.call(null,i,(0))){
return i;
} else {
if((max_viewable_pages < total_pages)){
if(((total_pages - halfway) < current_page)){
return ((total_pages - max_viewable_pages) + i);
} else {
if((halfway < current_page)){
return ((current_page - halfway) + i);
} else {
return i;

}
}
} else {
return i;

}
}
}
});
/**
 * Computes a vector of pages numbers of length max-viewable-pages, where
 *   gaps in the page numbers are denoted by :...
 */
sawtooth.components.core.make_page_numbers = (function sawtooth$components$core$make_page_numbers(num_pages,current_page,max_viewable_pages){
var halfway = sawtooth.math.ceil.call(null,(max_viewable_pages / (2)));
var position = (((current_page <= halfway))?new cljs.core.Keyword(null,"start","start",-355208981):((((num_pages - halfway) < current_page))?new cljs.core.Keyword(null,"end","end",-268185958):new cljs.core.Keyword(null,"middle","middle",-701029031)
));
var ellipses_needed_QMARK_ = (max_viewable_pages < num_pages);
var pages = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var i = (0);
while(true){
var page_number = sawtooth.components.core.calculate_page_number.call(null,i,current_page,max_viewable_pages,num_pages);
var page_number__$1 = (((ellipses_needed_QMARK_) && (((cljs.core._EQ_.call(null,i,(1))) && ((cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"middle","middle",-701029031))) || (cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"end","end",-268185958))))) || ((cljs.core._EQ_.call(null,i,(max_viewable_pages - (1)))) && ((cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"middle","middle",-701029031))) || (cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"start","start",-355208981)))))))?new cljs.core.Keyword(null,"...","...",727496020):page_number);
if(((i < num_pages)) && ((i < max_viewable_pages))){
var G__29709 = cljs.core.conj_BANG_.call(null,pages,page_number__$1);
var G__29710 = (i + (1));
pages = G__29709;
i = G__29710;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"...","...",727496020),cljs.core.get.call(null,pages,(i - (1)))))?cljs.core.conj_BANG_.call(null,pages,(num_pages - (1))):pages));
}
break;
}
});
/**
 * Component for for navigating pages of items.
 */
sawtooth.components.core.paging = (function sawtooth$components$core$paging(p__29711,owner){
var map__29717 = p__29711;
var map__29717__$1 = ((((!((map__29717 == null)))?((((map__29717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29717):map__29717);
var current_page = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var total_items = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"total-items","total-items",-521030113));
var items_per_page = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"items-per-page","items-per-page",1024404135));
var go_to_page_fn = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"go-to-page-fn","go-to-page-fn",-1555478667));
var max_page_numbers = cljs.core.get.call(null,map__29717__$1,new cljs.core.Keyword(null,"max-page-numbers","max-page-numbers",-1344617696));
if(typeof sawtooth.components.core.t_sawtooth$components$core29719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sawtooth.components.core.t_sawtooth$components$core29719 = (function (paging,p__29711,owner,map__29717,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers,meta29720){
this.paging = paging;
this.p__29711 = p__29711;
this.owner = owner;
this.map__29717 = map__29717;
this.current_page = current_page;
this.total_items = total_items;
this.items_per_page = items_per_page;
this.go_to_page_fn = go_to_page_fn;
this.max_page_numbers = max_page_numbers;
this.meta29720 = meta29720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sawtooth.components.core.t_sawtooth$components$core29719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (_29721,meta29720__$1){
var self__ = this;
var _29721__$1 = this;
return (new sawtooth.components.core.t_sawtooth$components$core29719(self__.paging,self__.p__29711,self__.owner,self__.map__29717,self__.current_page,self__.total_items,self__.items_per_page,self__.go_to_page_fn,self__.max_page_numbers,meta29720__$1));
});})(map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
;

sawtooth.components.core.t_sawtooth$components$core29719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (_29721){
var self__ = this;
var _29721__$1 = this;
return self__.meta29720;
});})(map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
;

sawtooth.components.core.t_sawtooth$components$core29719.prototype.om$core$IDisplayName$ = true;

sawtooth.components.core.t_sawtooth$components$core29719.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (_){
var self__ = this;
var ___$1 = this;
return "Pager";
});})(map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
;

sawtooth.components.core.t_sawtooth$components$core29719.prototype.om$core$IRender$ = true;

sawtooth.components.core.t_sawtooth$components$core29719.prototype.om$core$IRender$render$arity$1 = ((function (map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("nav",null,React.createElement("ul",{"className": "pagination"},React.createElement("li",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((self__.current_page <= (0)))?"disabled":"")], null))},React.createElement("a",{"href": "#", "aria-label": "Previous", "onClick": sawtooth.components.core.go_back.call(null,self__.current_page,self__.go_to_page_fn)},React.createElement("span",{"aria-hidden": true},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&lt;"))))),(function (){var page_numbers = sawtooth.components.core.make_page_numbers.call(null,sawtooth.math.ceil.call(null,(self__.total_items / self__.items_per_page)),self__.current_page,(function (){var or__6087__auto__ = self__.max_page_numbers;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (7);
}
})());
return sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (page_numbers,___$1,map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (i,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,n,self__.current_page))?"active":"")], null),((!(cljs.core._EQ_.call(null,n,new cljs.core.Keyword(null,"...","...",727496020))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_numbers,___$1,map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return self__.go_to_page_fn.call(null,n);
});})(page_numbers,___$1,map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
], null),(n + (1))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page_numbers,___$1,map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return self__.go_to_page_fn.call(null,(sawtooth.math.floor.call(null,((cljs.core.get.call(null,page_numbers,(i + (1))) - cljs.core.get.call(null,page_numbers,(i - (1)))) / (2))) + cljs.core.get.call(null,page_numbers,(i - (1)))));
});})(page_numbers,___$1,map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
], null),"..."], null))], null);
});})(page_numbers,___$1,map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
,page_numbers));
})(),React.createElement("li",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not.call(null,sawtooth.components.core.has_next_QMARK_.call(null,self__.current_page,self__.total_items,self__.items_per_page)))?"disabled":"")], null))},React.createElement("a",{"href": "#", "aria-label": "Next", "onClick": sawtooth.components.core.go_next.call(null,self__.current_page,self__.total_items,self__.items_per_page,self__.go_to_page_fn)},React.createElement("span",{"aria-hidden": true},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&gt;")))))));
});})(map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
;

sawtooth.components.core.t_sawtooth$components$core29719.getBasis = ((function (map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"paging","paging",-938156041,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-page","current-page",1539237347,null),new cljs.core.Symbol(null,"total-items","total-items",1119501414,null),new cljs.core.Symbol(null,"items-per-page","items-per-page",-1630031634,null),new cljs.core.Symbol(null,"go-to-page-fn","go-to-page-fn",85052860,null),new cljs.core.Symbol(null,"max-page-numbers","max-page-numbers",295913831,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Component for for navigating pages of items."], null)),new cljs.core.Symbol(null,"p__29711","p__29711",2131085048,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__29717","map__29717",1941592313,null),new cljs.core.Symbol(null,"current-page","current-page",1539237347,null),new cljs.core.Symbol(null,"total-items","total-items",1119501414,null),new cljs.core.Symbol(null,"items-per-page","items-per-page",-1630031634,null),new cljs.core.Symbol(null,"go-to-page-fn","go-to-page-fn",85052860,null),new cljs.core.Symbol(null,"max-page-numbers","max-page-numbers",295913831,null),new cljs.core.Symbol(null,"meta29720","meta29720",-380821866,null)], null);
});})(map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
;

sawtooth.components.core.t_sawtooth$components$core29719.cljs$lang$type = true;

sawtooth.components.core.t_sawtooth$components$core29719.cljs$lang$ctorStr = "sawtooth.components.core/t_sawtooth$components$core29719";

sawtooth.components.core.t_sawtooth$components$core29719.cljs$lang$ctorPrWriter = ((function (map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"sawtooth.components.core/t_sawtooth$components$core29719");
});})(map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
;

sawtooth.components.core.__GT_t_sawtooth$components$core29719 = ((function (map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers){
return (function sawtooth$components$core$paging_$___GT_t_sawtooth$components$core29719(paging__$1,p__29711__$1,owner__$1,map__29717__$2,current_page__$1,total_items__$1,items_per_page__$1,go_to_page_fn__$1,max_page_numbers__$1,meta29720){
return (new sawtooth.components.core.t_sawtooth$components$core29719(paging__$1,p__29711__$1,owner__$1,map__29717__$2,current_page__$1,total_items__$1,items_per_page__$1,go_to_page_fn__$1,max_page_numbers__$1,meta29720));
});})(map__29717,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers))
;

}

return (new sawtooth.components.core.t_sawtooth$components$core29719(sawtooth$components$core$paging,p__29711,owner,map__29717__$1,current_page,total_items,items_per_page,go_to_page_fn,max_page_numbers,cljs.core.PersistentArrayMap.EMPTY));
});
sawtooth.components.core.handle_change = (function sawtooth$components$core$handle_change(var_args){
var args29722 = [];
var len__7157__auto___29725 = arguments.length;
var i__7158__auto___29726 = (0);
while(true){
if((i__7158__auto___29726 < len__7157__auto___29725)){
args29722.push((arguments[i__7158__auto___29726]));

var G__29727 = (i__7158__auto___29726 + (1));
i__7158__auto___29726 = G__29727;
continue;
} else {
}
break;
}

var G__29724 = args29722.length;
switch (G__29724) {
case 2:
return sawtooth.components.core.handle_change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return sawtooth.components.core.handle_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29722.length)].join('')));

}
});

sawtooth.components.core.handle_change.cljs$core$IFn$_invoke$arity$2 = (function (owner,k){
return sawtooth.components.core.handle_change.call(null,owner,k,cljs.core.identity,null);
});

sawtooth.components.core.handle_change.cljs$core$IFn$_invoke$arity$4 = (function (owner,k,parse_fn,post_change_fn){
return (function (e){
e.preventDefault();

var old_value = om.core.get_state.call(null,owner,k);
var new_value = parse_fn.call(null,e.target.value);
om.core.set_state_BANG_.call(null,owner,k,new_value);

if(cljs.core.truth_((function (){var and__6075__auto__ = post_change_fn;
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.not_EQ_.call(null,old_value,new_value);
} else {
return and__6075__auto__;
}
})())){
return post_change_fn.call(null,old_value,new_value);
} else {
return null;
}
});
});

sawtooth.components.core.handle_change.cljs$lang$maxFixedArity = 4;
sawtooth.components.core.field_name = (function sawtooth$components$core$field_name(k){
if(cljs.core.coll_QMARK_.call(null,k)){
return clojure.string.join.call(null,cljs.core.map.call(null,cljs.core.name,k),".");
} else {
return cljs.core.name.call(null,k);
}
});
sawtooth.components.core.form_group = (function sawtooth$components$core$form_group(var_args){
var args__7164__auto__ = [];
var len__7157__auto___29731 = arguments.length;
var i__7158__auto___29732 = (0);
while(true){
if((i__7158__auto___29732 < len__7157__auto___29731)){
args__7164__auto__.push((arguments[i__7158__auto___29732]));

var G__29733 = (i__7158__auto___29732 + (1));
i__7158__auto___29732 = G__29733;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return sawtooth.components.core.form_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

sawtooth.components.core.form_group.cljs$core$IFn$_invoke$arity$variadic = (function (opts,content){
return sablono.interpreter.interpret.call(null,cljs.core.conj.call(null,cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(opts))?[cljs.core.str("has-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(opts)))].join(''):null)], null)], null),content),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"help-text","help-text",1567653015).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var help_text = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.help-block","span.help-block",883406276),help_text], null);
} else {
return null;
}
})()));
});

sawtooth.components.core.form_group.cljs$lang$maxFixedArity = (1);

sawtooth.components.core.form_group.cljs$lang$applyTo = (function (seq29729){
var G__29730 = cljs.core.first.call(null,seq29729);
var seq29729__$1 = cljs.core.next.call(null,seq29729);
return sawtooth.components.core.form_group.cljs$core$IFn$_invoke$arity$variadic(G__29730,seq29729__$1);
});
sawtooth.components.core.form_field_props = (function sawtooth$components$core$form_field_props(owner,k,custom,opts){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sawtooth.components.core.field_name.call(null,k),new cljs.core.Keyword(null,"value","value",305978217),om.core.get_state.call(null,owner,k),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(opts)], null),custom,opts);
});
sawtooth.components.core.form_field_label = (function sawtooth$components$core$form_field_label(k,label){
return React.createElement("label",{"htmlFor": sawtooth.components.core.field_name.call(null,k)},sablono.interpreter.interpret.call(null,label));
});
sawtooth.components.core.pattern__GT_str = (function sawtooth$components$core$pattern__GT_str(p){
if(cljs.core.truth_((function (){var and__6075__auto__ = p;
if(cljs.core.truth_(and__6075__auto__)){
return (p instanceof RegExp);
} else {
return and__6075__auto__;
}
})())){
return p.source;
} else {
return p;
}
});
sawtooth.components.core.basic_text_field = (function sawtooth$components$core$basic_text_field(var_args){
var args29734 = [];
var len__7157__auto___29738 = arguments.length;
var i__7158__auto___29739 = (0);
while(true){
if((i__7158__auto___29739 < len__7157__auto___29738)){
args29734.push((arguments[i__7158__auto___29739]));

var G__29740 = (i__7158__auto___29739 + (1));
i__7158__auto___29739 = G__29740;
continue;
} else {
}
break;
}

var G__29736 = args29734.length;
switch (G__29736) {
case 2:
return sawtooth.components.core.basic_text_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.core.basic_text_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29734.length)].join('')));

}
});

sawtooth.components.core.basic_text_field.cljs$core$IFn$_invoke$arity$2 = (function (owner,k){
return sawtooth.components.core.basic_text_field.call(null,owner,k,null);
});

sawtooth.components.core.basic_text_field.cljs$core$IFn$_invoke$arity$3 = (function (owner,k,opts){
var props = sawtooth.components.core.form_field_props.call(null,owner,k,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),sawtooth.components.core.handle_change.call(null,owner,k,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),cljs.core.identity),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"did-change-fn","did-change-fn",111124603))),new cljs.core.Keyword(null,"pattern","pattern",242135423),sawtooth.components.core.pattern__GT_str.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"pattern","pattern",242135423))),new cljs.core.Keyword(null,"type","type",1174270348),"text"], null),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),new cljs.core.Keyword(null,"pattern","pattern",242135423)));
var attrs29737 = props;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs29737))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs29737)):{"className": "form-control"}),((cljs.core.map_QMARK_.call(null,attrs29737))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29737)], null)));
});

sawtooth.components.core.basic_text_field.cljs$lang$maxFixedArity = 3;
sawtooth.components.core.text_field = (function sawtooth$components$core$text_field(var_args){
var args29742 = [];
var len__7157__auto___29746 = arguments.length;
var i__7158__auto___29747 = (0);
while(true){
if((i__7158__auto___29747 < len__7157__auto___29746)){
args29742.push((arguments[i__7158__auto___29747]));

var G__29748 = (i__7158__auto___29747 + (1));
i__7158__auto___29747 = G__29748;
continue;
} else {
}
break;
}

var G__29744 = args29742.length;
switch (G__29744) {
case 3:
return sawtooth.components.core.text_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.components.core.text_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29742.length)].join('')));

}
});

sawtooth.components.core.text_field.cljs$core$IFn$_invoke$arity$3 = (function (owner,k,label){
return sawtooth.components.core.text_field.call(null,owner,k,label,null);
});

sawtooth.components.core.text_field.cljs$core$IFn$_invoke$arity$4 = (function (owner,k,label,opts){
return sawtooth.components.core.form_group.call(null,opts,(function (){var attrs29745 = sawtooth.components.core.form_field_label.call(null,k,label);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29745))?sablono.interpreter.attributes.call(null,attrs29745):null),((cljs.core.map_QMARK_.call(null,attrs29745))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,sawtooth.components.core.basic_text_field.call(null,owner,k,opts))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29745),sablono.interpreter.interpret.call(null,sawtooth.components.core.basic_text_field.call(null,owner,k,opts))], null)));
})());
});

sawtooth.components.core.text_field.cljs$lang$maxFixedArity = 4;
sawtooth.components.core.static_field = (function sawtooth$components$core$static_field(var_args){
var args29750 = [];
var len__7157__auto___29754 = arguments.length;
var i__7158__auto___29755 = (0);
while(true){
if((i__7158__auto___29755 < len__7157__auto___29754)){
args29750.push((arguments[i__7158__auto___29755]));

var G__29756 = (i__7158__auto___29755 + (1));
i__7158__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var G__29752 = args29750.length;
switch (G__29752) {
case 2:
return sawtooth.components.core.static_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.core.static_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29750.length)].join('')));

}
});

sawtooth.components.core.static_field.cljs$core$IFn$_invoke$arity$2 = (function (label,value){
return sawtooth.components.core.static_field.call(null,label,value,null);
});

sawtooth.components.core.static_field.cljs$core$IFn$_invoke$arity$3 = (function (label,value,opts){
return sawtooth.components.core.form_group.call(null,opts,sawtooth.components.core.form_field_label.call(null,new cljs.core.Keyword(null,"static","static",1214358571),label),(function (){var attrs29753 = value;
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs29753))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control-static"], null)], null),attrs29753)):{"className": "form-control-static"}),((cljs.core.map_QMARK_.call(null,attrs29753))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29753)], null)));
})());
});

sawtooth.components.core.static_field.cljs$lang$maxFixedArity = 3;
sawtooth.components.core.computed_field = (function sawtooth$components$core$computed_field(var_args){
var args29758 = [];
var len__7157__auto___29762 = arguments.length;
var i__7158__auto___29763 = (0);
while(true){
if((i__7158__auto___29763 < len__7157__auto___29762)){
args29758.push((arguments[i__7158__auto___29763]));

var G__29764 = (i__7158__auto___29763 + (1));
i__7158__auto___29763 = G__29764;
continue;
} else {
}
break;
}

var G__29760 = args29758.length;
switch (G__29760) {
case 2:
return sawtooth.components.core.computed_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.core.computed_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29758.length)].join('')));

}
});

sawtooth.components.core.computed_field.cljs$core$IFn$_invoke$arity$2 = (function (label,value){
return sawtooth.components.core.computed_field.call(null,label,value,null);
});

sawtooth.components.core.computed_field.cljs$core$IFn$_invoke$arity$3 = (function (label,value,opts){
return sawtooth.components.core.form_group.call(null,opts,sawtooth.components.core.form_field_label.call(null,new cljs.core.Keyword(null,"computed","computed",-1482016762),label),(function (){var attrs29761 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),value], null),opts);
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs29761))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs29761)):{"className": "form-control"}),((cljs.core.map_QMARK_.call(null,attrs29761))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29761)], null)));
})());
});

sawtooth.components.core.computed_field.cljs$lang$maxFixedArity = 3;
sawtooth.components.core.select_field = (function sawtooth$components$core$select_field(var_args){
var args29766 = [];
var len__7157__auto___29771 = arguments.length;
var i__7158__auto___29772 = (0);
while(true){
if((i__7158__auto___29772 < len__7157__auto___29771)){
args29766.push((arguments[i__7158__auto___29772]));

var G__29773 = (i__7158__auto___29772 + (1));
i__7158__auto___29772 = G__29773;
continue;
} else {
}
break;
}

var G__29768 = args29766.length;
switch (G__29768) {
case 4:
return sawtooth.components.core.select_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sawtooth.components.core.select_field.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29766.length)].join('')));

}
});

sawtooth.components.core.select_field.cljs$core$IFn$_invoke$arity$4 = (function (owner,k,label,options){
return sawtooth.components.core.select_field.call(null,owner,k,label,options,null);
});

sawtooth.components.core.select_field.cljs$core$IFn$_invoke$arity$5 = (function (owner,k,label,options,opts){
var props = sawtooth.components.core.form_field_props.call(null,owner,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),sawtooth.components.core.handle_change.call(null,owner,k,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),cljs.core.identity),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"did-change-fn","did-change-fn",111124603)))], null),opts);
var select_ctrl = (function (){var attrs29769 = props;
return cljs.core.apply.call(null,React.createElement,"select",((cljs.core.map_QMARK_.call(null,attrs29769))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs29769)):{"className": "form-control"}),((cljs.core.map_QMARK_.call(null,attrs29769))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,options)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29769),sablono.interpreter.interpret.call(null,options)], null)));
})();
return sawtooth.components.core.form_group.call(null,opts,(function (){var attrs29770 = sawtooth.components.core.form_field_label.call(null,k,label);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29770))?sablono.interpreter.attributes.call(null,attrs29770):null),((cljs.core.map_QMARK_.call(null,attrs29770))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"peer","peer",1319662792).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var peer = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"peer","peer",1319662792).cljs$core$IFn$_invoke$arity$1(opts))?"col-xs-8":null)], null),select_ctrl], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),peer], null)], null);
} else {
return select_ctrl;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29770),sablono.interpreter.interpret.call(null,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"peer","peer",1319662792).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var peer = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"peer","peer",1319662792).cljs$core$IFn$_invoke$arity$1(opts))?"col-xs-8":null)], null),select_ctrl], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),peer], null)], null);
} else {
return select_ctrl;
}
})())], null)));
})());
});

sawtooth.components.core.select_field.cljs$lang$maxFixedArity = 5;
sawtooth.components.core.check_box_field = (function sawtooth$components$core$check_box_field(var_args){
var args29775 = [];
var len__7157__auto___29779 = arguments.length;
var i__7158__auto___29780 = (0);
while(true){
if((i__7158__auto___29780 < len__7157__auto___29779)){
args29775.push((arguments[i__7158__auto___29780]));

var G__29781 = (i__7158__auto___29780 + (1));
i__7158__auto___29780 = G__29781;
continue;
} else {
}
break;
}

var G__29777 = args29775.length;
switch (G__29777) {
case 3:
return sawtooth.components.core.check_box_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.components.core.check_box_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29775.length)].join('')));

}
});

sawtooth.components.core.check_box_field.cljs$core$IFn$_invoke$arity$3 = (function (owner,k,label){
return sawtooth.components.core.check_box_field.call(null,owner,k,label,null);
});

sawtooth.components.core.check_box_field.cljs$core$IFn$_invoke$arity$4 = (function (owner,k,label,opts){
var props = sawtooth.components.core.form_field_props.call(null,owner,k,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),om.core.get_state.call(null,owner,k),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,owner,k,cljs.core.not.call(null,om.core.get_state.call(null,owner,k)));
})], null),opts);
return sawtooth.components.core.form_group.call(null,opts,React.createElement("div",{"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["checkbox",(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(opts))?"disabled":null)], null))},React.createElement("label",null,(function (){var attrs29778 = props;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs29778))?sablono.interpreter.attributes.call(null,attrs29778):null),((cljs.core.map_QMARK_.call(null,attrs29778))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29778)], null)));
})(),sablono.interpreter.interpret.call(null,label))));
});

sawtooth.components.core.check_box_field.cljs$lang$maxFixedArity = 4;
sawtooth.components.core.radio_buttons = (function sawtooth$components$core$radio_buttons(var_args){
var args29783 = [];
var len__7157__auto___29795 = arguments.length;
var i__7158__auto___29796 = (0);
while(true){
if((i__7158__auto___29796 < len__7157__auto___29795)){
args29783.push((arguments[i__7158__auto___29796]));

var G__29797 = (i__7158__auto___29796 + (1));
i__7158__auto___29796 = G__29797;
continue;
} else {
}
break;
}

var G__29785 = args29783.length;
switch (G__29785) {
case 3:
return sawtooth.components.core.radio_buttons.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.components.core.radio_buttons.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29783.length)].join('')));

}
});

sawtooth.components.core.radio_buttons.cljs$core$IFn$_invoke$arity$3 = (function (owner,k,radio_options){
return sawtooth.components.core.radio_buttons.call(null,owner,k,radio_options,null);
});

sawtooth.components.core.radio_buttons.cljs$core$IFn$_invoke$arity$4 = (function (owner,k,radio_options,opts){
return sawtooth.components.core.form_group.call(null,opts,cljs.core.into_array.call(null,(function (){var iter__6867__auto__ = (function sawtooth$components$core$iter__29786(s__29787){
return (new cljs.core.LazySeq(null,(function (){
var s__29787__$1 = s__29787;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29787__$1);
if(temp__4657__auto__){
var s__29787__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29787__$2)){
var c__6865__auto__ = cljs.core.chunk_first.call(null,s__29787__$2);
var size__6866__auto__ = cljs.core.count.call(null,c__6865__auto__);
var b__29789 = cljs.core.chunk_buffer.call(null,size__6866__auto__);
if((function (){var i__29788 = (0);
while(true){
if((i__29788 < size__6866__auto__)){
var vec__29793 = cljs.core._nth.call(null,c__6865__auto__,i__29788);
var label = cljs.core.nth.call(null,vec__29793,(0),null);
var value = cljs.core.nth.call(null,vec__29793,(1),null);
cljs.core.chunk_append.call(null,b__29789,(function (){var props = sawtooth.components.core.form_field_props.call(null,owner,k,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"on-change","on-change",-732046149),sawtooth.components.core.handle_change.call(null,owner,k,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),cljs.core.identity),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"did-change-fn","did-change-fn",111124603))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,k),value),new cljs.core.Keyword(null,"value","value",305978217),value], null),opts);
return React.createElement("div",{"key": value, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)))?"radio-inline":"radio")], null))},React.createElement("label",null,(function (){var attrs29791 = props;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs29791))?sablono.interpreter.attributes.call(null,attrs29791):null),((cljs.core.map_QMARK_.call(null,attrs29791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29791)], null)));
})(),sablono.interpreter.interpret.call(null,label)));
})());

var G__29799 = (i__29788 + (1));
i__29788 = G__29799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29789),sawtooth$components$core$iter__29786.call(null,cljs.core.chunk_rest.call(null,s__29787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29789),null);
}
} else {
var vec__29794 = cljs.core.first.call(null,s__29787__$2);
var label = cljs.core.nth.call(null,vec__29794,(0),null);
var value = cljs.core.nth.call(null,vec__29794,(1),null);
return cljs.core.cons.call(null,(function (){var props = sawtooth.components.core.form_field_props.call(null,owner,k,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"on-change","on-change",-732046149),sawtooth.components.core.handle_change.call(null,owner,k,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"parse-fn","parse-fn",1818406345),cljs.core.identity),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"did-change-fn","did-change-fn",111124603))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,k),value),new cljs.core.Keyword(null,"value","value",305978217),value], null),opts);
return React.createElement("div",{"key": value, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)))?"radio-inline":"radio")], null))},React.createElement("label",null,(function (){var attrs29791 = props;
return cljs.core.apply.call(null,sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_.call(null,attrs29791))?sablono.interpreter.attributes.call(null,attrs29791):null),((cljs.core.map_QMARK_.call(null,attrs29791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29791)], null)));
})(),sablono.interpreter.interpret.call(null,label)));
})(),sawtooth$components$core$iter__29786.call(null,cljs.core.rest.call(null,s__29787__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6867__auto__.call(null,radio_options);
})()));
});

sawtooth.components.core.radio_buttons.cljs$lang$maxFixedArity = 4;
sawtooth.components.core.form_buttons = (function sawtooth$components$core$form_buttons(var_args){
var args29800 = [];
var len__7157__auto___29805 = arguments.length;
var i__7158__auto___29806 = (0);
while(true){
if((i__7158__auto___29806 < len__7157__auto___29805)){
args29800.push((arguments[i__7158__auto___29806]));

var G__29807 = (i__7158__auto___29806 + (1));
i__7158__auto___29806 = G__29807;
continue;
} else {
}
break;
}

var G__29802 = args29800.length;
switch (G__29802) {
case 2:
return sawtooth.components.core.form_buttons.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.core.form_buttons.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29800.length)].join('')));

}
});

sawtooth.components.core.form_buttons.cljs$core$IFn$_invoke$arity$2 = (function (owner,initial_state){
return sawtooth.components.core.form_buttons.call(null,owner,initial_state,null);
});

sawtooth.components.core.form_buttons.cljs$core$IFn$_invoke$arity$3 = (function (owner,initial_state,opts){
return React.createElement("div",{"className": "form-button-group"},(function (){var attrs29803 = new cljs.core.Keyword(null,"submit","submit",-49315317).cljs$core$IFn$_invoke$arity$1(opts);
return cljs.core.apply.call(null,React.createElement,"button",((cljs.core.map_QMARK_.call(null,attrs29803))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-primary"], null)], null),attrs29803)):{"className": "btn btn-primary"}),((cljs.core.map_QMARK_.call(null,attrs29803))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"label","label",1718410804)], null),"Submit"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29803),sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"label","label",1718410804)], null),"Submit"))], null)));
})(),(function (){var attrs29804 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e__29648__auto__){
e__29648__auto__.preventDefault();

om.core.set_state_BANG_.call(null,owner,initial_state);

var temp__4657__auto__ = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"form-ref","form-ref",-1740957655)], null));
if(cljs.core.truth_(temp__4657__auto__)){
var form_ref = temp__4657__auto__;
return om.core.get_node.call(null,owner,form_ref).reset();
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(opts));
return cljs.core.apply.call(null,React.createElement,"button",((cljs.core.map_QMARK_.call(null,attrs29804))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-default"], null)], null),attrs29804)):{"className": "btn btn-default"}),((cljs.core.map_QMARK_.call(null,attrs29804))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"label","label",1718410804)], null),"Reset"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29804),sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"label","label",1718410804)], null),"Reset"))], null)));
})());
});

sawtooth.components.core.form_buttons.cljs$lang$maxFixedArity = 3;
/**
 * Styled button that triggers HTML5 file upload, saves text to the owner's
 *   state.
 */
sawtooth.components.core.upload_text_button = (function sawtooth$components$core$upload_text_button(var_args){
var args29810 = [];
var len__7157__auto___29814 = arguments.length;
var i__7158__auto___29815 = (0);
while(true){
if((i__7158__auto___29815 < len__7157__auto___29814)){
args29810.push((arguments[i__7158__auto___29815]));

var G__29816 = (i__7158__auto___29815 + (1));
i__7158__auto___29815 = G__29816;
continue;
} else {
}
break;
}

var G__29812 = args29810.length;
switch (G__29812) {
case 3:
return sawtooth.components.core.upload_text_button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sawtooth.components.core.upload_text_button.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29810.length)].join('')));

}
});

sawtooth.components.core.upload_text_button.cljs$core$IFn$_invoke$arity$3 = (function (owner,k,label){
return sawtooth.components.core.upload_text_button.call(null,owner,k,label,null);
});

sawtooth.components.core.upload_text_button.cljs$core$IFn$_invoke$arity$4 = (function (owner,k,label,opts){
var u_ref = [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-uploader")].join('');
var u_trigger_BANG_ = ((function (u_ref){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return sawtooth.events.trigger_event_BANG_.call(null,om.core.get_node.call(null,owner,u_ref),"click");
});})(u_ref))
;
var set_text_BANG_ = ((function (u_ref,u_trigger_BANG_){
return (function (p1__29809_SHARP_){
return sawtooth.files.upload__GT_string.call(null,p1__29809_SHARP_,cljs.core.partial.call(null,om.core.set_state_BANG_,owner,k));
});})(u_ref,u_trigger_BANG_))
;
return React.createElement("div",null,sablono.interpreter.create_element.call(null,"input",{"type": "file", "ref": u_ref, "onChange": set_text_BANG_, "className": "hidden"}),(function (){var attrs29813 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),u_trigger_BANG_], null),opts);
return cljs.core.apply.call(null,React.createElement,"button",((cljs.core.map_QMARK_.call(null,attrs29813))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn","btn-primary"], null)], null),attrs29813)):{"className": "btn btn-primary"}),((cljs.core.map_QMARK_.call(null,attrs29813))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,label)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29813),sablono.interpreter.interpret.call(null,label)], null)));
})());
});

sawtooth.components.core.upload_text_button.cljs$lang$maxFixedArity = 4;
sawtooth.components.core.dropdown = (function sawtooth$components$core$dropdown(var_args){
var args29819 = [];
var len__7157__auto___29833 = arguments.length;
var i__7158__auto___29834 = (0);
while(true){
if((i__7158__auto___29834 < len__7157__auto___29833)){
args29819.push((arguments[i__7158__auto___29834]));

var G__29835 = (i__7158__auto___29834 + (1));
i__7158__auto___29834 = G__29835;
continue;
} else {
}
break;
}

var G__29821 = args29819.length;
switch (G__29821) {
case 4:
return sawtooth.components.core.dropdown.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sawtooth.components.core.dropdown.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29819.length)].join('')));

}
});

sawtooth.components.core.dropdown.cljs$core$IFn$_invoke$arity$4 = (function (owner,k,label,menu_items){
return sawtooth.components.core.dropdown.call(null,owner,k,label,menu_items,null);
});

sawtooth.components.core.dropdown.cljs$core$IFn$_invoke$arity$5 = (function (owner,k,label,menu_items,opts){
var selected = om.core.get_state.call(null,owner,k);
var toggle_key = cljs.core.keyword.call(null,[cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-dropdoown")].join(''));
var close_fn = ((function (selected,toggle_key){
return (function (){
return om.core.set_state_BANG_.call(null,owner,toggle_key,false);
});})(selected,toggle_key))
;
var is_open_QMARK_ = om.core.get_state.call(null,owner,toggle_key);
var on_change_fn = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.identity);
var select_fn = ((function (selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn){
return (function (v,on_select_fn){
return ((function (selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

on_change_fn.call(null,v);

om.core.set_state_BANG_.call(null,owner,k,v);

if(cljs.core.truth_(on_select_fn)){
on_select_fn.call(null);
} else {
}

return close_fn.call(null);
});
;})(selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn))
});})(selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn))
;
var attrs29822 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),sawtooth.components.core.classes.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"clearfix","clearfix",1896309300),is_open_QMARK_,new cljs.core.Keyword(null,"open","open",-1763596448),is_open_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts)], true, false))], null),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29822))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown"], null)], null),attrs29822)):{"className": "dropdown"}),((cljs.core.map_QMARK_.call(null,attrs29822))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("button",{"type": "button", "id": cljs.core.name.call(null,toggle_key), "onClick": ((function (attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,owner,toggle_key,cljs.core.not.call(null,is_open_QMARK_));
});})(attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn))
, "className": "btn btn-default dropdown-toggle"},(cljs.core.truth_(selected)?sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn){
return (function (p1__29818_SHARP_){
return cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29818_SHARP_));
});})(attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn))
,menu_items)))):sablono.interpreter.interpret.call(null,label)),React.createElement("span",{"className": "caret"})),React.createElement("ul",{"className": "dropdown-menu"},React.createElement("li",null,React.createElement("a",{"href": "#", "onClick": select_fn.call(null,null,cljs.core.identity)},sablono.interpreter.interpret.call(null,label))),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn){
return (function (i,p__29825){
var map__29826 = p__29825;
var map__29826__$1 = ((((!((map__29826 == null)))?((((map__29826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29826):map__29826);
var item = map__29826__$1;
var description = cljs.core.get.call(null,map__29826__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var menu_item_id = cljs.core.get.call(null,map__29826__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_select_fn = cljs.core.get.call(null,map__29826__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
if(!((cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"divider","divider",1265972657))) || (cljs.core._EQ_.call(null,menu_item_id,new cljs.core.Keyword(null,"divider","divider",1265972657))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),select_fn.call(null,menu_item_id,on_select_fn)], null),description], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.divider","li.divider",1214212749),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"role","role",-736691072),"separator"], null)], null);
}
});})(attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn))
,menu_items)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29822),React.createElement("button",{"type": "button", "id": cljs.core.name.call(null,toggle_key), "onClick": ((function (attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn){
return (function (e__29648__auto__){
e__29648__auto__.preventDefault();

return om.core.set_state_BANG_.call(null,owner,toggle_key,cljs.core.not.call(null,is_open_QMARK_));
});})(attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn))
, "className": "btn btn-default dropdown-toggle"},(cljs.core.truth_(selected)?sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn){
return (function (p1__29818_SHARP_){
return cljs.core._EQ_.call(null,selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29818_SHARP_));
});})(attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn))
,menu_items)))):sablono.interpreter.interpret.call(null,label)),React.createElement("span",{"className": "caret"})),React.createElement("ul",{"className": "dropdown-menu"},React.createElement("li",null,React.createElement("a",{"href": "#", "onClick": select_fn.call(null,null,cljs.core.identity)},sablono.interpreter.interpret.call(null,label))),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn){
return (function (i,p__29830){
var map__29831 = p__29830;
var map__29831__$1 = ((((!((map__29831 == null)))?((((map__29831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29831):map__29831);
var item = map__29831__$1;
var description = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var menu_item_id = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_select_fn = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
if(!((cljs.core._EQ_.call(null,item,new cljs.core.Keyword(null,"divider","divider",1265972657))) || (cljs.core._EQ_.call(null,menu_item_id,new cljs.core.Keyword(null,"divider","divider",1265972657))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),select_fn.call(null,menu_item_id,on_select_fn)], null),description], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.divider","li.divider",1214212749),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"role","role",-736691072),"separator"], null)], null);
}
});})(attrs29822,selected,toggle_key,close_fn,is_open_QMARK_,on_change_fn,select_fn))
,menu_items)))], null)));
});

sawtooth.components.core.dropdown.cljs$lang$maxFixedArity = 5;
/**
 * Creates a button linking to a URL
 */
sawtooth.components.core.link_button = (function sawtooth$components$core$link_button(var_args){
var args29837 = [];
var len__7157__auto___29843 = arguments.length;
var i__7158__auto___29844 = (0);
while(true){
if((i__7158__auto___29844 < len__7157__auto___29843)){
args29837.push((arguments[i__7158__auto___29844]));

var G__29845 = (i__7158__auto___29844 + (1));
i__7158__auto___29844 = G__29845;
continue;
} else {
}
break;
}

var G__29839 = args29837.length;
switch (G__29839) {
case 2:
return sawtooth.components.core.link_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.core.link_button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29837.length)].join('')));

}
});

sawtooth.components.core.link_button.cljs$core$IFn$_invoke$arity$2 = (function (href,label){
return sawtooth.components.core.link_button.call(null,href,label,null);
});

sawtooth.components.core.link_button.cljs$core$IFn$_invoke$arity$3 = (function (href,label,p__29840){
var map__29841 = p__29840;
var map__29841__$1 = ((((!((map__29841 == null)))?((((map__29841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29841):map__29841);
var opts = map__29841__$1;
var btn_type = cljs.core.get.call(null,map__29841__$1,new cljs.core.Keyword(null,"btn-type","btn-type",1955528955));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("btn-"),cljs.core.str(cljs.core.name.call(null,(function (){var or__6087__auto__ = btn_type;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return new cljs.core.Keyword(null,"primary","primary",817773892);
}
})())),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts):null))].join(''),new cljs.core.Keyword(null,"href","href",-793805698),href], null),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"btn-type","btn-type",1955528955),new cljs.core.Keyword(null,"class","class",-2030961996))),label], null);
});

sawtooth.components.core.link_button.cljs$lang$maxFixedArity = 3;
sawtooth.components.core.bootstrap_cols = (12);
/**
 * Builds a set of tags with a react key and optional class
 */
sawtooth.components.core.keyed_tags = (function sawtooth$components$core$keyed_tags(var_args){
var args29847 = [];
var len__7157__auto___29850 = arguments.length;
var i__7158__auto___29851 = (0);
while(true){
if((i__7158__auto___29851 < len__7157__auto___29850)){
args29847.push((arguments[i__7158__auto___29851]));

var G__29852 = (i__7158__auto___29851 + (1));
i__7158__auto___29851 = G__29852;
continue;
} else {
}
break;
}

var G__29849 = args29847.length;
switch (G__29849) {
case 2:
return sawtooth.components.core.keyed_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.core.keyed_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29847.length)].join('')));

}
});

sawtooth.components.core.keyed_tags.cljs$core$IFn$_invoke$arity$2 = (function (tag,items){
return sawtooth.components.core.keyed_tags.call(null,tag,"",items);
});

sawtooth.components.core.keyed_tags.cljs$core$IFn$_invoke$arity$3 = (function (tag,class_name,items){
return cljs.core.map_indexed.call(null,(function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),class_name], null),item], null);
}),items);
});

sawtooth.components.core.keyed_tags.cljs$lang$maxFixedArity = 3;
/**
 * Distributes items into n bootstap columns, one item per column per row
 */
sawtooth.components.core.n_col_rows = (function sawtooth$components$core$n_col_rows(var_args){
var args__7164__auto__ = [];
var len__7157__auto___29858 = arguments.length;
var i__7158__auto___29859 = (0);
while(true){
if((i__7158__auto___29859 < len__7157__auto___29858)){
args__7164__auto__.push((arguments[i__7158__auto___29859]));

var G__29860 = (i__7158__auto___29859 + (1));
i__7158__auto___29859 = G__29860;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((2) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((2)),(0),null)):null);
return sawtooth.components.core.n_col_rows.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7165__auto__);
});

sawtooth.components.core.n_col_rows.cljs$core$IFn$_invoke$arity$variadic = (function (n,class_name,items){
if(!(typeof class_name === 'string')){
return cljs.core.apply.call(null,sawtooth.components.core.n_col_rows,n,"",class_name,items);
} else {
var size = (((n > sawtooth.components.core.bootstrap_cols))?(1):((sawtooth.components.core.bootstrap_cols / n) | (0)));
var rows = cljs.core.partition.call(null,n,items);
return sawtooth.components.core.keyed_tags.call(null,new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("row "),cljs.core.str(class_name)].join(''),cljs.core.map.call(null,((function (size,rows){
return (function (p1__29854_SHARP_){
return sawtooth.components.core.keyed_tags.call(null,new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("col-sm-"),cljs.core.str(size)].join(''),p1__29854_SHARP_);
});})(size,rows))
,rows));
}
});

sawtooth.components.core.n_col_rows.cljs$lang$maxFixedArity = (2);

sawtooth.components.core.n_col_rows.cljs$lang$applyTo = (function (seq29855){
var G__29856 = cljs.core.first.call(null,seq29855);
var seq29855__$1 = cljs.core.next.call(null,seq29855);
var G__29857 = cljs.core.first.call(null,seq29855__$1);
var seq29855__$2 = cljs.core.next.call(null,seq29855__$1);
return sawtooth.components.core.n_col_rows.cljs$core$IFn$_invoke$arity$variadic(G__29856,G__29857,seq29855__$2);
});
/**
 * Creates a single bootstrap row with as many columns as items
 */
sawtooth.components.core.boot_row = (function sawtooth$components$core$boot_row(var_args){
var args__7164__auto__ = [];
var len__7157__auto___29863 = arguments.length;
var i__7158__auto___29864 = (0);
while(true){
if((i__7158__auto___29864 < len__7157__auto___29863)){
args__7164__auto__.push((arguments[i__7158__auto___29864]));

var G__29865 = (i__7158__auto___29864 + (1));
i__7158__auto___29864 = G__29865;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return sawtooth.components.core.boot_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

sawtooth.components.core.boot_row.cljs$core$IFn$_invoke$arity$variadic = (function (class_name,items){
if(!(typeof class_name === 'string')){
return cljs.core.apply.call(null,sawtooth.components.core.boot_row,"",class_name,items);
} else {
return cljs.core.apply.call(null,sawtooth.components.core.n_col_rows,cljs.core.count.call(null,items),class_name,items);
}
});

sawtooth.components.core.boot_row.cljs$lang$maxFixedArity = (1);

sawtooth.components.core.boot_row.cljs$lang$applyTo = (function (seq29861){
var G__29862 = cljs.core.first.call(null,seq29861);
var seq29861__$1 = cljs.core.next.call(null,seq29861);
return sawtooth.components.core.boot_row.cljs$core$IFn$_invoke$arity$variadic(G__29862,seq29861__$1);
});
/**
 * Sorts items into rows of two col-sm-6 columns
 */
sawtooth.components.core.divided_rows = (function sawtooth$components$core$divided_rows(var_args){
var args__7164__auto__ = [];
var len__7157__auto___29868 = arguments.length;
var i__7158__auto___29869 = (0);
while(true){
if((i__7158__auto___29869 < len__7157__auto___29868)){
args__7164__auto__.push((arguments[i__7158__auto___29869]));

var G__29870 = (i__7158__auto___29869 + (1));
i__7158__auto___29869 = G__29870;
continue;
} else {
}
break;
}

var argseq__7165__auto__ = ((((1) < args__7164__auto__.length))?(new cljs.core.IndexedSeq(args__7164__auto__.slice((1)),(0),null)):null);
return sawtooth.components.core.divided_rows.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7165__auto__);
});

sawtooth.components.core.divided_rows.cljs$core$IFn$_invoke$arity$variadic = (function (class_name,items){
return cljs.core.apply.call(null,sawtooth.components.core.n_col_rows,(2),class_name,items);
});

sawtooth.components.core.divided_rows.cljs$lang$maxFixedArity = (1);

sawtooth.components.core.divided_rows.cljs$lang$applyTo = (function (seq29866){
var G__29867 = cljs.core.first.call(null,seq29866);
var seq29866__$1 = cljs.core.next.call(null,seq29866);
return sawtooth.components.core.divided_rows.cljs$core$IFn$_invoke$arity$variadic(G__29867,seq29866__$1);
});
/**
 * Adds a small note in parens to a header, with optional link
 */
sawtooth.components.core.header_note = (function sawtooth$components$core$header_note(var_args){
var args29871 = [];
var len__7157__auto___29874 = arguments.length;
var i__7158__auto___29875 = (0);
while(true){
if((i__7158__auto___29875 < len__7157__auto___29874)){
args29871.push((arguments[i__7158__auto___29875]));

var G__29876 = (i__7158__auto___29875 + (1));
i__7158__auto___29875 = G__29876;
continue;
} else {
}
break;
}

var G__29873 = args29871.length;
switch (G__29873) {
case 2:
return sawtooth.components.core.header_note.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.core.header_note.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29871.length)].join('')));

}
});

sawtooth.components.core.header_note.cljs$core$IFn$_invoke$arity$2 = (function (label,note){
return sawtooth.components.core.header_note.call(null,label,note,null);
});

sawtooth.components.core.header_note.cljs$core$IFn$_invoke$arity$3 = (function (label,note,url){
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [label," ",React.createElement("em",null,React.createElement("small",null,"(",(cljs.core.truth_(url)?React.createElement("a",{"href": url, "target": "_blank"},sablono.interpreter.interpret.call(null,note)):sablono.interpreter.interpret.call(null,note)),")"))], null));
});

sawtooth.components.core.header_note.cljs$lang$maxFixedArity = 3;
sawtooth.components.core.__GT_int = (function sawtooth$components$core$__GT_int(var_args){
var args29878 = [];
var len__7157__auto___29882 = arguments.length;
var i__7158__auto___29883 = (0);
while(true){
if((i__7158__auto___29883 < len__7157__auto___29882)){
args29878.push((arguments[i__7158__auto___29883]));

var G__29884 = (i__7158__auto___29883 + (1));
i__7158__auto___29883 = G__29884;
continue;
} else {
}
break;
}

var G__29880 = args29878.length;
switch (G__29880) {
case 1:
return sawtooth.components.core.__GT_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.core.__GT_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29878.length)].join('')));

}
});

sawtooth.components.core.__GT_int.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sawtooth.components.core.__GT_int.call(null,s,null);
});

sawtooth.components.core.__GT_int.cljs$core$IFn$_invoke$arity$2 = (function (s,default_value){
if(cljs.core.truth_(s)){
try{var i = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(i))){
return i;
} else {
return default_value;
}
}catch (e29881){var e = e29881;
return default_value;
}} else {
return default_value;
}
});

sawtooth.components.core.__GT_int.cljs$lang$maxFixedArity = 2;
sawtooth.components.core.__GT_boolean = (function sawtooth$components$core$__GT_boolean(var_args){
var args29886 = [];
var len__7157__auto___29889 = arguments.length;
var i__7158__auto___29890 = (0);
while(true){
if((i__7158__auto___29890 < len__7157__auto___29889)){
args29886.push((arguments[i__7158__auto___29890]));

var G__29891 = (i__7158__auto___29890 + (1));
i__7158__auto___29890 = G__29891;
continue;
} else {
}
break;
}

var G__29888 = args29886.length;
switch (G__29888) {
case 1:
return sawtooth.components.core.__GT_boolean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.core.__GT_boolean.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29886.length)].join('')));

}
});

sawtooth.components.core.__GT_boolean.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sawtooth.components.core.__GT_boolean.call(null,s,false);
});

sawtooth.components.core.__GT_boolean.cljs$core$IFn$_invoke$arity$2 = (function (s,default_value){
if(cljs.core.truth_(s)){
return cljs.core._EQ_.call(null,s.toLowerCase(),"true");
} else {
return default_value;
}
});

sawtooth.components.core.__GT_boolean.cljs$lang$maxFixedArity = 2;
sawtooth.components.core.__GT_float = (function sawtooth$components$core$__GT_float(var_args){
var args29893 = [];
var len__7157__auto___29897 = arguments.length;
var i__7158__auto___29898 = (0);
while(true){
if((i__7158__auto___29898 < len__7157__auto___29897)){
args29893.push((arguments[i__7158__auto___29898]));

var G__29899 = (i__7158__auto___29898 + (1));
i__7158__auto___29898 = G__29899;
continue;
} else {
}
break;
}

var G__29895 = args29893.length;
switch (G__29895) {
case 1:
return sawtooth.components.core.__GT_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.core.__GT_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29893.length)].join('')));

}
});

sawtooth.components.core.__GT_float.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sawtooth.components.core.__GT_float.call(null,s,null);
});

sawtooth.components.core.__GT_float.cljs$core$IFn$_invoke$arity$2 = (function (s,default_value){
if(cljs.core.truth_((function (){var and__6075__auto__ = s;
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.not_EQ_.call(null,cljs.core.last.call(null,s),".");
} else {
return and__6075__auto__;
}
})())){
try{var n = goog.string.toNumber(s);
if(cljs.core.not.call(null,(function (){var and__6075__auto__ = typeof n === 'number';
if(and__6075__auto__){
return isNaN(n);
} else {
return and__6075__auto__;
}
})())){
return n;
} else {
return default_value;
}
}catch (e29896){var e = e29896;
return default_value;
}} else {
return default_value;
}
});

sawtooth.components.core.__GT_float.cljs$lang$maxFixedArity = 2;
/**
 * Versatile string to number converter that can handle compound fractions
 */
sawtooth.components.core.__GT_num = (function sawtooth$components$core$__GT_num(var_args){
var args29901 = [];
var len__7157__auto___29904 = arguments.length;
var i__7158__auto___29905 = (0);
while(true){
if((i__7158__auto___29905 < len__7157__auto___29904)){
args29901.push((arguments[i__7158__auto___29905]));

var G__29906 = (i__7158__auto___29905 + (1));
i__7158__auto___29905 = G__29906;
continue;
} else {
}
break;
}

var G__29903 = args29901.length;
switch (G__29903) {
case 1:
return sawtooth.components.core.__GT_num.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.core.__GT_num.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29901.length)].join('')));

}
});

sawtooth.components.core.__GT_num.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sawtooth.components.core.__GT_num.call(null,s,null);
});

sawtooth.components.core.__GT_num.cljs$core$IFn$_invoke$arity$2 = (function (s,default_value){
if(typeof s === 'number'){
return s;
} else {
if(!(typeof s === 'string')){
return default_value;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,s),"-")){
return ((-1) * sawtooth.components.core.__GT_num.call(null,cljs.core.subs.call(null,s,(1))));
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/ /,s))){
var nums = cljs.core.map.call(null,sawtooth.components.core.__GT_num,clojure.string.split.call(null,s,/ /));
return cljs.core.reduce.call(null,cljs.core._PLUS_,nums);
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/\//,s))){
var fraction = clojure.string.split.call(null,s,/\//);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,fraction),(2))){
return (sawtooth.components.core.__GT_num.call(null,cljs.core.first.call(null,fraction)) / sawtooth.components.core.__GT_num.call(null,cljs.core.last.call(null,fraction)));
} else {
return default_value;
}
} else {
var num = Number(s);
if(cljs.core.truth_(isNaN(num))){
return default_value;
} else {
return num;
}

}
}
}
}
}
});

sawtooth.components.core.__GT_num.cljs$lang$maxFixedArity = 2;
/**
 * Converts a number to a fraction string with a specified denominator.
 *   Rounds down any remainder, and reduces as needed.
 */
sawtooth.components.core.__GT_frac = (function sawtooth$components$core$__GT_frac(var_args){
var args29908 = [];
var len__7157__auto___29911 = arguments.length;
var i__7158__auto___29912 = (0);
while(true){
if((i__7158__auto___29912 < len__7157__auto___29911)){
args29908.push((arguments[i__7158__auto___29912]));

var G__29913 = (i__7158__auto___29912 + (1));
i__7158__auto___29912 = G__29913;
continue;
} else {
}
break;
}

var G__29910 = args29908.length;
switch (G__29910) {
case 1:
return sawtooth.components.core.__GT_frac.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.core.__GT_frac.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29908.length)].join('')));

}
});

sawtooth.components.core.__GT_frac.cljs$core$IFn$_invoke$arity$1 = (function (n){
return sawtooth.components.core.__GT_frac.call(null,n,(8));
});

sawtooth.components.core.__GT_frac.cljs$core$IFn$_invoke$arity$2 = (function (n,denom){
if((n < (0))){
return [cljs.core.str("-"),cljs.core.str(sawtooth.components.core.__GT_frac.call(null,((-1) * n),denom))].join('');
} else {
var numer = Math.floor((n * denom));
var gcd = (function (){var x = numer;
var y = denom;
while(true){
if((y === (0))){
return x;
} else {
var G__29915 = y;
var G__29916 = cljs.core.mod.call(null,x,y);
x = G__29915;
y = G__29916;
continue;
}
break;
}
})();
var numer__$1 = (numer / gcd);
var denom__$1 = (denom / gcd);
if(cljs.core._EQ_.call(null,denom__$1,(1))){
return [cljs.core.str(numer__$1)].join('');
} else {
if((numer__$1 > denom__$1)){
return [cljs.core.str(Math.floor((numer__$1 / denom__$1))),cljs.core.str(" "),cljs.core.str(cljs.core.mod.call(null,numer__$1,denom__$1)),cljs.core.str("/"),cljs.core.str(denom__$1)].join('');
} else {
return [cljs.core.str(numer__$1),cljs.core.str("/"),cljs.core.str(denom__$1)].join('');

}
}
}
});

sawtooth.components.core.__GT_frac.cljs$lang$maxFixedArity = 2;
