// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.components.tooltip');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
sawtooth.components.tooltip.WRAPPER_CLASS = "has-tip";
sawtooth.components.tooltip.DISPLAY_CLASS = "tip-shown";
sawtooth.components.tooltip.TIP_CLASS = "tip-text";
sawtooth.components.tooltip.DEFAULT_WAIT = (3000);
/**
 * Creates a tooltip DOM node with specified message text
 */
sawtooth.components.tooltip.tip_node = (function sawtooth$components$tooltip$tip_node(msg){
return goog.dom.createDom("span",sawtooth.components.tooltip.TIP_CLASS,msg);
});
sawtooth.components.tooltip.setup_BANG_ = (function sawtooth$components$tooltip$setup_BANG_(wrapper,tip){
if(cljs.core.truth_(tip)){
goog.dom.appendChild(wrapper,tip);
} else {
}

return goog.dom.classlist.addAll(wrapper,[sawtooth.components.tooltip.WRAPPER_CLASS,sawtooth.components.tooltip.DISPLAY_CLASS]);
});
sawtooth.components.tooltip.cleanup_BANG_ = (function sawtooth$components$tooltip$cleanup_BANG_(var_args){
var args30746 = [];
var len__7157__auto___30749 = arguments.length;
var i__7158__auto___30750 = (0);
while(true){
if((i__7158__auto___30750 < len__7157__auto___30749)){
args30746.push((arguments[i__7158__auto___30750]));

var G__30751 = (i__7158__auto___30750 + (1));
i__7158__auto___30750 = G__30751;
continue;
} else {
}
break;
}

var G__30748 = args30746.length;
switch (G__30748) {
case 2:
return sawtooth.components.tooltip.cleanup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.tooltip.cleanup_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30746.length)].join('')));

}
});

sawtooth.components.tooltip.cleanup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (wrapper,tip){
return sawtooth.components.tooltip.cleanup_BANG_.call(null,wrapper,tip,false);
});

sawtooth.components.tooltip.cleanup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (wrapper,tip,remove_wrapper_QMARK_){
if(cljs.core.truth_(tip)){
goog.dom.removeNode(tip);
} else {
}

goog.dom.classlist.remove(wrapper,sawtooth.components.tooltip.DISPLAY_CLASS);

if(cljs.core.truth_(remove_wrapper_QMARK_)){
return goog.dom.classlist.remove(wrapper,sawtooth.components.tooltip.WRAPPER_CLASS);
} else {
return null;
}
});

sawtooth.components.tooltip.cleanup_BANG_.cljs$lang$maxFixedArity = 3;
sawtooth.components.tooltip.new_tip_if_not_found_BANG_ = (function sawtooth$components$tooltip$new_tip_if_not_found_BANG_(wrapper,msg){
if((cljs.core.not.call(null,msg)) || (cljs.core.not.call(null,goog.dom.getElementByClass(sawtooth.components.tooltip.TIP_CLASS,wrapper)))){
return sawtooth.components.tooltip.tip_node.call(null,msg);
} else {
return null;
}
});
/**
 * Appends a tooltip to a wrapper node, passes a cleanup fn to clear-fn if passed
 */
sawtooth.components.tooltip.append_basic_tip_BANG_ = (function sawtooth$components$tooltip$append_basic_tip_BANG_(var_args){
var args30753 = [];
var len__7157__auto___30756 = arguments.length;
var i__7158__auto___30757 = (0);
while(true){
if((i__7158__auto___30757 < len__7157__auto___30756)){
args30753.push((arguments[i__7158__auto___30757]));

var G__30758 = (i__7158__auto___30757 + (1));
i__7158__auto___30757 = G__30758;
continue;
} else {
}
break;
}

var G__30755 = args30753.length;
switch (G__30755) {
case 1:
return sawtooth.components.tooltip.append_basic_tip_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.tooltip.append_basic_tip_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.tooltip.append_basic_tip_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30753.length)].join('')));

}
});

sawtooth.components.tooltip.append_basic_tip_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (wrapper){
return sawtooth.components.tooltip.append_basic_tip_BANG_.call(null,wrapper,null,null);
});

sawtooth.components.tooltip.append_basic_tip_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (wrapper,msg_or_clear){
if(typeof msg_or_clear === 'string'){
return sawtooth.components.tooltip.append_basic_tip_BANG_.call(null,wrapper,msg_or_clear,null);
} else {
return sawtooth.components.tooltip.append_basic_tip_BANG_.call(null,wrapper,null,msg_or_clear);
}
});

sawtooth.components.tooltip.append_basic_tip_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (wrapper,msg,clear_fn){
var tip = sawtooth.components.tooltip.new_tip_if_not_found_BANG_.call(null,wrapper,msg);
var no_wrapper_QMARK_ = cljs.core.not.call(null,goog.dom.classlist.contains(wrapper,sawtooth.components.tooltip.WRAPPER_CLASS));
var no_display_QMARK_ = cljs.core.not.call(null,goog.dom.classlist.contains(wrapper,sawtooth.components.tooltip.DISPLAY_CLASS));
sawtooth.components.tooltip.setup_BANG_.call(null,wrapper,tip);

if(cljs.core.truth_((function (){var and__6075__auto__ = clear_fn;
if(cljs.core.truth_(and__6075__auto__)){
var or__6087__auto__ = tip;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return no_display_QMARK_;
}
} else {
return and__6075__auto__;
}
})())){
return clear_fn.call(null,((function (tip,no_wrapper_QMARK_,no_display_QMARK_){
return (function (){
return sawtooth.components.tooltip.cleanup_BANG_.call(null,wrapper,tip,no_wrapper_QMARK_);
});})(tip,no_wrapper_QMARK_,no_display_QMARK_))
);
} else {
return null;
}
});

sawtooth.components.tooltip.append_basic_tip_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Adds tooltip to a wrapper node and removes after a wait time
 */
sawtooth.components.tooltip.timed_tip_BANG_ = (function sawtooth$components$tooltip$timed_tip_BANG_(var_args){
var args30761 = [];
var len__7157__auto___30764 = arguments.length;
var i__7158__auto___30765 = (0);
while(true){
if((i__7158__auto___30765 < len__7157__auto___30764)){
args30761.push((arguments[i__7158__auto___30765]));

var G__30766 = (i__7158__auto___30765 + (1));
i__7158__auto___30765 = G__30766;
continue;
} else {
}
break;
}

var G__30763 = args30761.length;
switch (G__30763) {
case 1:
return sawtooth.components.tooltip.timed_tip_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.tooltip.timed_tip_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sawtooth.components.tooltip.timed_tip_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30761.length)].join('')));

}
});

sawtooth.components.tooltip.timed_tip_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (wrapper){
return sawtooth.components.tooltip.timed_tip_BANG_.call(null,wrapper,null,sawtooth.components.tooltip.DEFAULT_WAIT);
});

sawtooth.components.tooltip.timed_tip_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (wrapper,msg_or_wait){
if(typeof msg_or_wait === 'string'){
return sawtooth.components.tooltip.timed_tip_BANG_.call(null,wrapper,msg_or_wait,sawtooth.components.tooltip.DEFAULT_WAIT);
} else {
return sawtooth.components.tooltip.timed_tip_BANG_.call(null,wrapper,null,msg_or_wait);
}
});

sawtooth.components.tooltip.timed_tip_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (wrapper,msg,wait){
return sawtooth.components.tooltip.append_basic_tip_BANG_.call(null,wrapper,msg,(function (p1__30760_SHARP_){
return setTimeout(p1__30760_SHARP_,wait);
}));
});

sawtooth.components.tooltip.timed_tip_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Adds tooltip to a wrapper node and removes after any key is pressed
 */
sawtooth.components.tooltip.keyup_tip_BANG_ = (function sawtooth$components$tooltip$keyup_tip_BANG_(var_args){
var args30769 = [];
var len__7157__auto___30772 = arguments.length;
var i__7158__auto___30773 = (0);
while(true){
if((i__7158__auto___30773 < len__7157__auto___30772)){
args30769.push((arguments[i__7158__auto___30773]));

var G__30774 = (i__7158__auto___30773 + (1));
i__7158__auto___30773 = G__30774;
continue;
} else {
}
break;
}

var G__30771 = args30769.length;
switch (G__30771) {
case 1:
return sawtooth.components.tooltip.keyup_tip_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sawtooth.components.tooltip.keyup_tip_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30769.length)].join('')));

}
});

sawtooth.components.tooltip.keyup_tip_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (wrapper){
return sawtooth.components.tooltip.keyup_tip_BANG_.call(null,wrapper,null);
});

sawtooth.components.tooltip.keyup_tip_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (wrapper,msg){
return sawtooth.components.tooltip.append_basic_tip_BANG_.call(null,wrapper,msg,(function (p1__30768_SHARP_){
return goog.events.listenOnce(document,"keyup",p1__30768_SHARP_);
}));
});

sawtooth.components.tooltip.keyup_tip_BANG_.cljs$lang$maxFixedArity = 2;
