// Compiled by ClojureScript 1.8.51 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.display_name[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core.display_name["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.init_state[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core.init_state["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.should_update[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,next_props,next_state);
} else {
var m__6751__auto____$1 = (om.core.should_update["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.will_mount[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core.will_mount["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.did_mount[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core.did_mount["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.will_unmount[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.will_update[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,next_props,next_state);
} else {
var m__6751__auto____$1 = (om.core.will_update["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.did_update[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__6751__auto____$1 = (om.core.did_update["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.will_receive_props[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,next_props);
} else {
var m__6751__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.render[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core.render["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.render_props[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,props,state);
} else {
var m__6751__auto____$1 = (om.core.render_props["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core.render_state[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,state);
} else {
var m__6751__auto____$1 = (om.core.render_state["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__6751__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args28862 = [];
var len__7157__auto___28865 = arguments.length;
var i__7158__auto___28866 = (0);
while(true){
if((i__7158__auto___28866 < len__7157__auto___28865)){
args28862.push((arguments[i__7158__auto___28866]));

var G__28867 = (i__7158__auto___28866 + (1));
i__7158__auto___28866 = G__28867;
continue;
} else {
}
break;
}

var G__28864 = args28862.length;
switch (G__28864) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28862.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._get_state[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core._get_state["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._get_state[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,ks);
} else {
var m__6751__auto____$1 = (om.core._get_state["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args28869 = [];
var len__7157__auto___28872 = arguments.length;
var i__7158__auto___28873 = (0);
while(true){
if((i__7158__auto___28873 < len__7157__auto___28872)){
args28869.push((arguments[i__7158__auto___28873]));

var G__28874 = (i__7158__auto___28873 + (1));
i__7158__auto___28873 = G__28874;
continue;
} else {
}
break;
}

var G__28871 = args28869.length;
switch (G__28871) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28869.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._get_render_state[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._get_render_state[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,ks);
} else {
var m__6751__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args28876 = [];
var len__7157__auto___28879 = arguments.length;
var i__7158__auto___28880 = (0);
while(true){
if((i__7158__auto___28880 < len__7157__auto___28879)){
args28876.push((arguments[i__7158__auto___28880]));

var G__28881 = (i__7158__auto___28880 + (1));
i__7158__auto___28880 = G__28881;
continue;
} else {
}
break;
}

var G__28878 = args28876.length;
switch (G__28878) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28876.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,val,render);
} else {
var m__6751__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,ks,val,render);
} else {
var m__6751__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._get_queue[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core._get_queue["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,c);
} else {
var m__6751__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__6750__auto__ = (((x == null))?null:x);
var m__6751__auto__ = (om.core._value[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,x);
} else {
var m__6751__auto____$1 = (om.core._value["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__6750__auto__ = (((cursor == null))?null:cursor);
var m__6751__auto__ = (om.core._path[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,cursor);
} else {
var m__6751__auto____$1 = (om.core._path["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__6750__auto__ = (((cursor == null))?null:cursor);
var m__6751__auto__ = (om.core._state[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,cursor);
} else {
var m__6751__auto____$1 = (om.core._state["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args28883 = [];
var len__7157__auto___28886 = arguments.length;
var i__7158__auto___28887 = (0);
while(true){
if((i__7158__auto___28887 < len__7157__auto___28886)){
args28883.push((arguments[i__7158__auto___28887]));

var G__28888 = (i__7158__auto___28887 + (1));
i__7158__auto___28887 = G__28888;
continue;
} else {
}
break;
}

var G__28885 = args28883.length;
switch (G__28885) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28883.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__6750__auto__ = (((value == null))?null:value);
var m__6751__auto__ = (om.core._to_cursor[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,value,state);
} else {
var m__6751__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__6750__auto__ = (((value == null))?null:value);
var m__6751__auto__ = (om.core._to_cursor[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,value,state,path);
} else {
var m__6751__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__6750__auto__ = (((cursor == null))?null:cursor);
var m__6751__auto__ = (om.core._derive[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,cursor,derived,state,path);
} else {
var m__6751__auto____$1 = (om.core._derive["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__6750__auto__ = (((cursor == null))?null:cursor);
var m__6751__auto__ = (om.core._transact_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,cursor,korks,f,tag);
} else {
var m__6751__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__6750__auto__ = (((x == null))?null:x);
var m__6751__auto__ = (om.core._listen_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,x,key,tx_listen);
} else {
var m__6751__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__6750__auto__ = (((x == null))?null:x);
var m__6751__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,x,key);
} else {
var m__6751__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__6750__auto__ = (((x == null))?null:x);
var m__6751__auto__ = (om.core._notify_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__6751__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,id,p,val);
} else {
var m__6751__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,id,p);
} else {
var m__6751__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,id);
} else {
var m__6751__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._get_property[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,id,p);
} else {
var m__6751__auto____$1 = (om.core._get_property["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__6750__auto__ = (((cursor == null))?null:cursor);
var m__6751__auto__ = (om.core._root_key[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,cursor);
} else {
var m__6751__auto____$1 = (om.core._root_key["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._adapt[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,other);
} else {
var m__6751__auto____$1 = (om.core._adapt["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,c);
} else {
var m__6751__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$,c);
} else {
var m__6751__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__6750__auto__ = (((this$ == null))?null:this$);
var m__6751__auto__ = (om.core._get_deps[goog.typeOf(x__6750__auto__)]);
if(!((m__6751__auto__ == null))){
return m__6751__auto__.call(null,this$);
} else {
var m__6751__auto____$1 = (om.core._get_deps["_"]);
if(!((m__6751__auto____$1 == null))){
return m__6751__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args28894 = [];
var len__7157__auto___28898 = arguments.length;
var i__7158__auto___28899 = (0);
while(true){
if((i__7158__auto___28899 < len__7157__auto___28898)){
args28894.push((arguments[i__7158__auto___28899]));

var G__28900 = (i__7158__auto___28899 + (1));
i__7158__auto___28899 = G__28900;
continue;
} else {
}
break;
}

var G__28896 = args28894.length;
switch (G__28896) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28894.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__28897 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__28897,korks__$1);
} else {
return G__28897;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args28902 = [];
var len__7157__auto___28905 = arguments.length;
var i__7158__auto___28906 = (0);
while(true){
if((i__7158__auto___28906 < len__7157__auto___28905)){
args28902.push((arguments[i__7158__auto___28906]));

var G__28907 = (i__7158__auto___28906 + (1));
i__7158__auto___28906 = G__28907;
continue;
} else {
}
break;
}

var G__28904 = args28902.length;
switch (G__28904) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28902.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args28909 = [];
var len__7157__auto___28912 = arguments.length;
var i__7158__auto___28913 = (0);
while(true){
if((i__7158__auto___28913 < len__7157__auto___28912)){
args28909.push((arguments[i__7158__auto___28913]));

var G__28914 = (i__7158__auto___28913 + (1));
i__7158__auto___28913 = G__28914;
continue;
} else {
}
break;
}

var G__28911 = args28909.length;
switch (G__28911) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28909.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__28917 = state;
(G__28917["__om_prev_state"] = (state["__om_state"]));

(G__28917["__om_state"] = pending_state);

(G__28917["__om_pending_state"] = null);

return G__28917;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args28918 = [];
var len__7157__auto___28921 = arguments.length;
var i__7158__auto___28922 = (0);
while(true){
if((i__7158__auto___28922 < len__7157__auto___28921)){
args28918.push((arguments[i__7158__auto___28922]));

var G__28923 = (i__7158__auto___28922 + (1));
i__7158__auto___28922 = G__28923;
continue;
} else {
}
break;
}

var G__28920 = args28918.length;
switch (G__28920) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28918.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__6087__auto__ = props;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__6087__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_28947 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__6087__auto__ = (state_28947["__om_prev_state"]);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (state_28947["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__28928 = cljs.core.seq.call(null,refs);
var chunk__28929 = null;
var count__28930 = (0);
var i__28931 = (0);
while(true){
if((i__28931 < count__28930)){
var ref = cljs.core._nth.call(null,chunk__28929,i__28931);
om.core.unobserve.call(null,this$,ref);

var G__28948 = seq__28928;
var G__28949 = chunk__28929;
var G__28950 = count__28930;
var G__28951 = (i__28931 + (1));
seq__28928 = G__28948;
chunk__28929 = G__28949;
count__28930 = G__28950;
i__28931 = G__28951;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28928);
if(temp__4657__auto____$1){
var seq__28928__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28928__$1)){
var c__6898__auto__ = cljs.core.chunk_first.call(null,seq__28928__$1);
var G__28952 = cljs.core.chunk_rest.call(null,seq__28928__$1);
var G__28953 = c__6898__auto__;
var G__28954 = cljs.core.count.call(null,c__6898__auto__);
var G__28955 = (0);
seq__28928 = G__28952;
chunk__28929 = G__28953;
count__28930 = G__28954;
i__28931 = G__28955;
continue;
} else {
var ref = cljs.core.first.call(null,seq__28928__$1);
om.core.unobserve.call(null,this$,ref);

var G__28956 = cljs.core.next.call(null,seq__28928__$1);
var G__28957 = null;
var G__28958 = (0);
var G__28959 = (0);
seq__28928 = G__28956;
chunk__28929 = G__28957;
count__28930 = G__28958;
i__28931 = G__28959;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6075__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__6075__auto__)){
var and__6075__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__6075__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__6075__auto____$1;
}
} else {
return and__6075__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__6075__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__6075__auto__){
return cljs.core.some.call(null,((function (and__6075__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__28925_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__28925_SHARP_);
});})(and__6075__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__6075__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_28934 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_28935 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_28936 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_28937 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_28938 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_28938;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_28937;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_28936;

om.core._STAR_state_STAR_ = _STAR_state_STAR_28935;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_28934;
}}),(function (next_props,next_state){
var this$ = this;
var c_28960 = om.core.children.call(null,this$);
if(((!((c_28960 == null)))?(((false) || (c_28960.om$core$IWillUpdate$))?true:(((!c_28960.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_28960):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_28960))){
var state_28961 = this$.state;
om.core.will_update.call(null,c_28960,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__6087__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__6087__auto__ = id;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_28962 = om.core.children.call(null,this$);
if(((!((c_28962 == null)))?(((false) || (c_28962.om$core$IWillMount$))?true:(((!c_28962.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_28962):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_28962))){
om.core.will_mount.call(null,c_28962);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x28964 = obj;
x28964.om$core$ISetState$ = true;

x28964.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x28964){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__6075__auto__ = !((app_state == null));
if(and__6075__auto__){
return render;
} else {
return and__6075__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x28964))
;

x28964.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x28964){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__6075__auto__ = !((app_state == null));
if(and__6075__auto__){
return render;
} else {
return and__6075__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x28964))
;

x28964.om$core$IGetRenderState$ = true;

x28964.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x28964){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x28964))
;

x28964.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x28964){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x28964))
;

x28964.om$core$IGetState$ = true;

x28964.om$core$IGetState$_get_state$arity$1 = ((function (x28964){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__6087__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (state["__om_state"]);
}
});})(x28964))
;

x28964.om$core$IGetState$_get_state$arity$2 = ((function (x28964){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x28964))
;

return x28964;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__6087__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__6087__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_28975 = om.core.children.call(null,this$);
if(((!((c_28975 == null)))?(((false) || (c_28975.om$core$IWillMount$))?true:(((!c_28975.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_28975):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_28975))){
om.core.will_mount.call(null,c_28975);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__28969 = cljs.core.seq.call(null,refs);
var chunk__28970 = null;
var count__28971 = (0);
var i__28972 = (0);
while(true){
if((i__28972 < count__28971)){
var ref = cljs.core._nth.call(null,chunk__28970,i__28972);
om.core.unobserve.call(null,this$,ref);

var G__28976 = seq__28969;
var G__28977 = chunk__28970;
var G__28978 = count__28971;
var G__28979 = (i__28972 + (1));
seq__28969 = G__28976;
chunk__28970 = G__28977;
count__28971 = G__28978;
i__28972 = G__28979;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28969);
if(temp__4657__auto____$1){
var seq__28969__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28969__$1)){
var c__6898__auto__ = cljs.core.chunk_first.call(null,seq__28969__$1);
var G__28980 = cljs.core.chunk_rest.call(null,seq__28969__$1);
var G__28981 = c__6898__auto__;
var G__28982 = cljs.core.count.call(null,c__6898__auto__);
var G__28983 = (0);
seq__28969 = G__28980;
chunk__28970 = G__28981;
count__28971 = G__28982;
i__28972 = G__28983;
continue;
} else {
var ref = cljs.core.first.call(null,seq__28969__$1);
om.core.unobserve.call(null,this$,ref);

var G__28984 = cljs.core.next.call(null,seq__28969__$1);
var G__28985 = null;
var G__28986 = (0);
var G__28987 = (0);
seq__28969 = G__28984;
chunk__28970 = G__28985;
count__28971 = G__28986;
i__28972 = G__28987;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_28988 = this$.props;
var c_28989 = om.core.children.call(null,this$);
if(((!((c_28989 == null)))?(((false) || (c_28989.om$core$IWillUpdate$))?true:(((!c_28989.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_28989):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_28989))){
var state_28990 = this$.state;
om.core.will_update.call(null,c_28989,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_28991 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__6087__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x28993 = cljs.core.clj__GT_js.call(null,methods$);
x28993.om$core$ISetState$ = true;

x28993.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x28993){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__6075__auto__ = !((gstate == null));
if(and__6075__auto__){
return render;
} else {
return and__6075__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x28993))
;

x28993.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x28993){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x28993))
;

x28993.om$core$IGetRenderState$ = true;

x28993.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x28993){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x28993))
;

x28993.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x28993){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x28993))
;

x28993.om$core$IGetState$ = true;

x28993.om$core$IGetState$_get_state$arity$1 = ((function (x28993){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__6087__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x28993))
;

x28993.om$core$IGetState$_get_state$arity$2 = ((function (x28993){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x28993))
;

return x28993;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__28997){
var vec__28998 = p__28997;
var k = cljs.core.nth.call(null,vec__28998,(0),null);
var v = cljs.core.nth.call(null,vec__28998,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__28999 = null;
var G__28999__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__28999__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__28999 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28999__2.call(this,self__,k);
case 3:
return G__28999__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28999.cljs$core$IFn$_invoke$arity$2 = G__28999__2;
G__28999.cljs$core$IFn$_invoke$arity$3 = G__28999__3;
return G__28999;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args28996){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28996)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__29001 = null;
var G__29001__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__29001__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__29001 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29001__2.call(this,self__,k);
case 3:
return G__29001__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29001.cljs$core$IFn$_invoke$arity$2 = G__29001__2;
G__29001.cljs$core$IFn$_invoke$arity$3 = G__29001__3;
return G__29001;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args29000){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29000)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__6693__auto__,writer__6694__auto__,opt__6695__auto__){
return cljs.core._write.call(null,writer__6694__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x29003 = cljs.core.clone.call(null,val);
x29003.cljs$core$IDeref$ = true;

x29003.cljs$core$IDeref$_deref$arity$1 = ((function (x29003){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x29003))
;

x29003.om$core$ICursor$ = true;

x29003.om$core$ICursor$_path$arity$1 = ((function (x29003){
return (function (_){
var ___$1 = this;
return path;
});})(x29003))
;

x29003.om$core$ICursor$_state$arity$1 = ((function (x29003){
return (function (_){
var ___$1 = this;
return state;
});})(x29003))
;

x29003.om$core$ITransact$ = true;

x29003.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29003){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x29003))
;

x29003.cljs$core$IEquiv$ = true;

x29003.cljs$core$IEquiv$_equiv$arity$2 = ((function (x29003){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x29003))
;

return x29003;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args29004 = [];
var len__7157__auto___29009 = arguments.length;
var i__7158__auto___29010 = (0);
while(true){
if((i__7158__auto___29010 < len__7157__auto___29009)){
args29004.push((arguments[i__7158__auto___29010]));

var G__29011 = (i__7158__auto___29010 + (1));
i__7158__auto___29010 = G__29011;
continue;
} else {
}
break;
}

var G__29006 = args29004.length;
switch (G__29006) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29004.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x29016 = cljs.core.clone.call(null,x);
x29016.cljs$core$ICloneable$ = true;

x29016.cljs$core$ICloneable$_clone$arity$1 = ((function (x29016){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x29016))
;

x29016.om$core$IAdapt$ = true;

x29016.om$core$IAdapt$_adapt$arity$2 = ((function (x29016){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x29016))
;

x29016.om$core$ICursorDerive$ = true;

x29016.om$core$ICursorDerive$_derive$arity$4 = ((function (x29016){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x29016))
;

x29016.om$core$ITransact$ = true;

x29016.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29016){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x29016))
;

return x29016;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x29024 = cljs.core.clone.call(null,cursor);
x29024.om$core$ICursorDerive$ = true;

x29024.om$core$ICursorDerive$_derive$arity$4 = ((function (x29024,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x29024,path,storage))
;

x29024.om$core$IOmRef$ = true;

x29024.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x29024,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x29024,path,storage))
;

x29024.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x29024,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x29024,path,storage))
;

x29024.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x29024,path,storage){
return (function (_){
var ___$1 = this;
var seq__29025 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__29026 = null;
var count__29027 = (0);
var i__29028 = (0);
while(true){
if((i__29028 < count__29027)){
var c = cljs.core._nth.call(null,chunk__29026,i__29028);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__29029 = seq__29025;
var G__29030 = chunk__29026;
var G__29031 = count__29027;
var G__29032 = (i__29028 + (1));
seq__29025 = G__29029;
chunk__29026 = G__29030;
count__29027 = G__29031;
i__29028 = G__29032;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29025);
if(temp__4657__auto__){
var seq__29025__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29025__$1)){
var c__6898__auto__ = cljs.core.chunk_first.call(null,seq__29025__$1);
var G__29033 = cljs.core.chunk_rest.call(null,seq__29025__$1);
var G__29034 = c__6898__auto__;
var G__29035 = cljs.core.count.call(null,c__6898__auto__);
var G__29036 = (0);
seq__29025 = G__29033;
chunk__29026 = G__29034;
count__29027 = G__29035;
i__29028 = G__29036;
continue;
} else {
var c = cljs.core.first.call(null,seq__29025__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__29037 = cljs.core.next.call(null,seq__29025__$1);
var G__29038 = null;
var G__29039 = (0);
var G__29040 = (0);
seq__29025 = G__29037;
chunk__29026 = G__29038;
count__29027 = G__29039;
i__29028 = G__29040;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29024,path,storage))
;

x29024.om$core$IOmRef$_get_deps$arity$1 = ((function (x29024,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x29024,path,storage))
;

x29024.om$core$ITransact$ = true;

x29024.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x29024,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x29024,path,storage))
;

return x29024;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__6087__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__6087__auto__ = state.om$render$T;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args29041 = [];
var len__7157__auto___29048 = arguments.length;
var i__7158__auto___29049 = (0);
while(true){
if((i__7158__auto___29049 < len__7157__auto___29048)){
args29041.push((arguments[i__7158__auto___29049]));

var G__29050 = (i__7158__auto___29049 + (1));
i__7158__auto___29049 = G__29050;
continue;
} else {
}
break;
}

var G__29043 = args29041.length;
switch (G__29043) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29041.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__29044_29052 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__29045_29053 = null;
var count__29046_29054 = (0);
var i__29047_29055 = (0);
while(true){
if((i__29047_29055 < count__29046_29054)){
var f_29056 = cljs.core._nth.call(null,chunk__29045_29053,i__29047_29055);
f_29056.call(null);

var G__29057 = seq__29044_29052;
var G__29058 = chunk__29045_29053;
var G__29059 = count__29046_29054;
var G__29060 = (i__29047_29055 + (1));
seq__29044_29052 = G__29057;
chunk__29045_29053 = G__29058;
count__29046_29054 = G__29059;
i__29047_29055 = G__29060;
continue;
} else {
var temp__4657__auto___29061 = cljs.core.seq.call(null,seq__29044_29052);
if(temp__4657__auto___29061){
var seq__29044_29062__$1 = temp__4657__auto___29061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29044_29062__$1)){
var c__6898__auto___29063 = cljs.core.chunk_first.call(null,seq__29044_29062__$1);
var G__29064 = cljs.core.chunk_rest.call(null,seq__29044_29062__$1);
var G__29065 = c__6898__auto___29063;
var G__29066 = cljs.core.count.call(null,c__6898__auto___29063);
var G__29067 = (0);
seq__29044_29052 = G__29064;
chunk__29045_29053 = G__29065;
count__29046_29054 = G__29066;
i__29047_29055 = G__29067;
continue;
} else {
var f_29068 = cljs.core.first.call(null,seq__29044_29062__$1);
f_29068.call(null);

var G__29069 = cljs.core.next.call(null,seq__29044_29062__$1);
var G__29070 = null;
var G__29071 = (0);
var G__29072 = (0);
seq__29044_29052 = G__29069;
chunk__29045_29053 = G__29070;
count__29046_29054 = G__29071;
i__29047_29055 = G__29072;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__6087__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__6087__auto__){
return or__6087__auto__;
} else {
var or__6087__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__6087__auto____$1){
return or__6087__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args29083 = [];
var len__7157__auto___29086 = arguments.length;
var i__7158__auto___29087 = (0);
while(true){
if((i__7158__auto___29087 < len__7157__auto___29086)){
args29083.push((arguments[i__7158__auto___29087]));

var G__29088 = (i__7158__auto___29087 + (1));
i__7158__auto___29087 = G__29088;
continue;
} else {
}
break;
}

var G__29085 = args29083.length;
switch (G__29085) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29083.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_29090 = (function (){var or__6087__auto__ = descriptor;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
var or__6087__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__6087__auto____$1)){
return or__6087__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_29090 === goog.object.get(f,"om$tag"))))){
var factory_29091 = React.createFactory(React.createClass(rdesc_29090));
goog.object.set(f,"om$descriptor",factory_29091);

goog.object.set(f,"om$tag",rdesc_29090);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args29092 = [];
var len__7157__auto___29095 = arguments.length;
var i__7158__auto___29096 = (0);
while(true){
if((i__7158__auto___29096 < len__7157__auto___29095)){
args29092.push((arguments[i__7158__auto___29096]));

var G__29097 = (i__7158__auto___29096 + (1));
i__7158__auto___29096 = G__29097;
continue;
} else {
}
break;
}

var G__29094 = args29092.length;
switch (G__29094) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29092.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args29099 = [];
var len__7157__auto___29104 = arguments.length;
var i__7158__auto___29105 = (0);
while(true){
if((i__7158__auto___29105 < len__7157__auto___29104)){
args29099.push((arguments[i__7158__auto___29105]));

var G__29106 = (i__7158__auto___29105 + (1));
i__7158__auto___29105 = G__29106;
continue;
} else {
}
break;
}

var G__29101 = args29099.length;
switch (G__29101) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29099.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__29102 = m;
var map__29102__$1 = ((((!((map__29102 == null)))?((((map__29102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29102):map__29102);
var key = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__6087__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__29102,map__29102__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__29102,map__29102__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__29102,map__29102__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__29102,map__29102__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__6087__auto__ = rkey;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args29108 = [];
var len__7157__auto___29111 = arguments.length;
var i__7158__auto___29112 = (0);
while(true){
if((i__7158__auto___29112 < len__7157__auto___29111)){
args29108.push((arguments[i__7158__auto___29112]));

var G__29113 = (i__7158__auto___29112 + (1));
i__7158__auto___29112 = G__29113;
continue;
} else {
}
break;
}

var G__29110 = args29108.length;
switch (G__29110) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29108.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args29115 = [];
var len__7157__auto___29118 = arguments.length;
var i__7158__auto___29119 = (0);
while(true){
if((i__7158__auto___29119 < len__7157__auto___29118)){
args29115.push((arguments[i__7158__auto___29119]));

var G__29120 = (i__7158__auto___29119 + (1));
i__7158__auto___29119 = G__29120;
continue;
} else {
}
break;
}

var G__29117 = args29115.length;
switch (G__29117) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29115.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_29138 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_29139 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_29140 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x29131_29141 = state;
x29131_29141.om$core$IRootProperties$ = true;

x29131_29141.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29138,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29138,cljs.core.dissoc,id,k);
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_29138,cljs.core.dissoc,id);
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$IRootProperties$_get_property$arity$3 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_29138),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$INotify$ = true;

x29131_29141.om$core$INotify$_listen_BANG_$arity$3 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_29139,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_29139,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$INotify$_notify_BANG_$arity$3 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__29132_29142 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_29139));
var chunk__29133_29143 = null;
var count__29134_29144 = (0);
var i__29135_29145 = (0);
while(true){
if((i__29135_29145 < count__29134_29144)){
var vec__29136_29146 = cljs.core._nth.call(null,chunk__29133_29143,i__29135_29145);
var __29147 = cljs.core.nth.call(null,vec__29136_29146,(0),null);
var f_29148 = cljs.core.nth.call(null,vec__29136_29146,(1),null);
f_29148.call(null,tx_data,root_cursor);

var G__29149 = seq__29132_29142;
var G__29150 = chunk__29133_29143;
var G__29151 = count__29134_29144;
var G__29152 = (i__29135_29145 + (1));
seq__29132_29142 = G__29149;
chunk__29133_29143 = G__29150;
count__29134_29144 = G__29151;
i__29135_29145 = G__29152;
continue;
} else {
var temp__4657__auto___29153 = cljs.core.seq.call(null,seq__29132_29142);
if(temp__4657__auto___29153){
var seq__29132_29154__$1 = temp__4657__auto___29153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29132_29154__$1)){
var c__6898__auto___29155 = cljs.core.chunk_first.call(null,seq__29132_29154__$1);
var G__29156 = cljs.core.chunk_rest.call(null,seq__29132_29154__$1);
var G__29157 = c__6898__auto___29155;
var G__29158 = cljs.core.count.call(null,c__6898__auto___29155);
var G__29159 = (0);
seq__29132_29142 = G__29156;
chunk__29133_29143 = G__29157;
count__29134_29144 = G__29158;
i__29135_29145 = G__29159;
continue;
} else {
var vec__29137_29160 = cljs.core.first.call(null,seq__29132_29154__$1);
var __29161 = cljs.core.nth.call(null,vec__29137_29160,(0),null);
var f_29162 = cljs.core.nth.call(null,vec__29137_29160,(1),null);
f_29162.call(null,tx_data,root_cursor);

var G__29163 = cljs.core.next.call(null,seq__29132_29154__$1);
var G__29164 = null;
var G__29165 = (0);
var G__29166 = (0);
seq__29132_29142 = G__29163;
chunk__29133_29143 = G__29164;
count__29134_29144 = G__29165;
i__29135_29145 = G__29166;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$IRenderQueue$ = true;

x29131_29141.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_29140);
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_29140),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_29140,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

x29131_29141.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x29131_29141,properties_29138,listeners_29139,render_queue_29140){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_29140,cljs.core.empty);
});})(x29131_29141,properties_29138,listeners_29139,render_queue_29140))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x29168 = cljs.core.clone.call(null,cursor);
x29168.cljs$core$ICloneable$ = true;

x29168.cljs$core$ICloneable$_clone$arity$1 = ((function (x29168){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x29168))
;

x29168.om$core$IAdapt$ = true;

x29168.om$core$IAdapt$_adapt$arity$2 = ((function (x29168){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x29168))
;

x29168.om$core$IRootKey$ = true;

x29168.om$core$IRootKey$_root_key$arity$1 = ((function (x29168){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x29168))
;

return x29168;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__29169){
var map__29233 = p__29169;
var map__29233__$1 = ((((!((map__29233 == null)))?((((map__29233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29233):map__29233);
var options = map__29233__$1;
var target = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__29233__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__29296 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__29296,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__29296,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__6087__auto__ = adapt;
if(cljs.core.truth_(or__6087__auto__)){
return or__6087__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_29297 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_29266 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_29267 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_29268 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_29269 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_29269;

om.core._STAR_state_STAR_ = _STAR_state_STAR_29268;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_29267;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_29266;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_29297);
} else {
}
}

var queue_29298 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_29298)){
} else {
var seq__29270_29299 = cljs.core.seq.call(null,queue_29298);
var chunk__29271_29300 = null;
var count__29272_29301 = (0);
var i__29273_29302 = (0);
while(true){
if((i__29273_29302 < count__29272_29301)){
var c_29303 = cljs.core._nth.call(null,chunk__29271_29300,i__29273_29302);
if(cljs.core.truth_(c_29303.isMounted())){
var temp__4657__auto___29304 = (c_29303.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___29304)){
var next_props_29305 = temp__4657__auto___29304;
(c_29303.props["__om_cursor"] = next_props_29305);

(c_29303.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6087__auto__ = !((function (){var G__29275 = om.core.children.call(null,c_29303);
if(!((G__29275 == null))){
if((false) || (G__29275.om$core$ICheckState$)){
return true;
} else {
if((!G__29275.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29275);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29275);
}
})());
if(or__6087__auto__){
return or__6087__auto__;
} else {
return c_29303.shouldComponentUpdate(c_29303.props,c_29303.state);
}
})())){
c_29303.forceUpdate();
} else {
}
} else {
}

var G__29306 = seq__29270_29299;
var G__29307 = chunk__29271_29300;
var G__29308 = count__29272_29301;
var G__29309 = (i__29273_29302 + (1));
seq__29270_29299 = G__29306;
chunk__29271_29300 = G__29307;
count__29272_29301 = G__29308;
i__29273_29302 = G__29309;
continue;
} else {
var temp__4657__auto___29310 = cljs.core.seq.call(null,seq__29270_29299);
if(temp__4657__auto___29310){
var seq__29270_29311__$1 = temp__4657__auto___29310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29270_29311__$1)){
var c__6898__auto___29312 = cljs.core.chunk_first.call(null,seq__29270_29311__$1);
var G__29313 = cljs.core.chunk_rest.call(null,seq__29270_29311__$1);
var G__29314 = c__6898__auto___29312;
var G__29315 = cljs.core.count.call(null,c__6898__auto___29312);
var G__29316 = (0);
seq__29270_29299 = G__29313;
chunk__29271_29300 = G__29314;
count__29272_29301 = G__29315;
i__29273_29302 = G__29316;
continue;
} else {
var c_29317 = cljs.core.first.call(null,seq__29270_29311__$1);
if(cljs.core.truth_(c_29317.isMounted())){
var temp__4657__auto___29318__$1 = (c_29317.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___29318__$1)){
var next_props_29319 = temp__4657__auto___29318__$1;
(c_29317.props["__om_cursor"] = next_props_29319);

(c_29317.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__6087__auto__ = !((function (){var G__29277 = om.core.children.call(null,c_29317);
if(!((G__29277 == null))){
if((false) || (G__29277.om$core$ICheckState$)){
return true;
} else {
if((!G__29277.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29277);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__29277);
}
})());
if(or__6087__auto__){
return or__6087__auto__;
} else {
return c_29317.shouldComponentUpdate(c_29317.props,c_29317.state);
}
})())){
c_29317.forceUpdate();
} else {
}
} else {
}

var G__29320 = cljs.core.next.call(null,seq__29270_29311__$1);
var G__29321 = null;
var G__29322 = (0);
var G__29323 = (0);
seq__29270_29299 = G__29320;
chunk__29271_29300 = G__29321;
count__29272_29301 = G__29322;
i__29273_29302 = G__29323;
continue;
}
} else {
}
}
break;
}
}

var _refs_29324 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_29324)){
} else {
var seq__29278_29325 = cljs.core.seq.call(null,_refs_29324);
var chunk__29279_29326 = null;
var count__29280_29327 = (0);
var i__29281_29328 = (0);
while(true){
if((i__29281_29328 < count__29280_29327)){
var vec__29282_29329 = cljs.core._nth.call(null,chunk__29279_29326,i__29281_29328);
var path_29330__$1 = cljs.core.nth.call(null,vec__29282_29329,(0),null);
var cs_29331 = cljs.core.nth.call(null,vec__29282_29329,(1),null);
var cs_29332__$1 = cljs.core.deref.call(null,cs_29331);
var seq__29283_29333 = cljs.core.seq.call(null,cs_29332__$1);
var chunk__29284_29334 = null;
var count__29285_29335 = (0);
var i__29286_29336 = (0);
while(true){
if((i__29286_29336 < count__29285_29335)){
var vec__29287_29337 = cljs.core._nth.call(null,chunk__29284_29334,i__29286_29336);
var id_29338 = cljs.core.nth.call(null,vec__29287_29337,(0),null);
var c_29339 = cljs.core.nth.call(null,vec__29287_29337,(1),null);
if(cljs.core.truth_(c_29339.shouldComponentUpdate(c_29339.props,c_29339.state))){
c_29339.forceUpdate();
} else {
}

var G__29340 = seq__29283_29333;
var G__29341 = chunk__29284_29334;
var G__29342 = count__29285_29335;
var G__29343 = (i__29286_29336 + (1));
seq__29283_29333 = G__29340;
chunk__29284_29334 = G__29341;
count__29285_29335 = G__29342;
i__29286_29336 = G__29343;
continue;
} else {
var temp__4657__auto___29344 = cljs.core.seq.call(null,seq__29283_29333);
if(temp__4657__auto___29344){
var seq__29283_29345__$1 = temp__4657__auto___29344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29283_29345__$1)){
var c__6898__auto___29346 = cljs.core.chunk_first.call(null,seq__29283_29345__$1);
var G__29347 = cljs.core.chunk_rest.call(null,seq__29283_29345__$1);
var G__29348 = c__6898__auto___29346;
var G__29349 = cljs.core.count.call(null,c__6898__auto___29346);
var G__29350 = (0);
seq__29283_29333 = G__29347;
chunk__29284_29334 = G__29348;
count__29285_29335 = G__29349;
i__29286_29336 = G__29350;
continue;
} else {
var vec__29288_29351 = cljs.core.first.call(null,seq__29283_29345__$1);
var id_29352 = cljs.core.nth.call(null,vec__29288_29351,(0),null);
var c_29353 = cljs.core.nth.call(null,vec__29288_29351,(1),null);
if(cljs.core.truth_(c_29353.shouldComponentUpdate(c_29353.props,c_29353.state))){
c_29353.forceUpdate();
} else {
}

var G__29354 = cljs.core.next.call(null,seq__29283_29345__$1);
var G__29355 = null;
var G__29356 = (0);
var G__29357 = (0);
seq__29283_29333 = G__29354;
chunk__29284_29334 = G__29355;
count__29285_29335 = G__29356;
i__29286_29336 = G__29357;
continue;
}
} else {
}
}
break;
}

var G__29358 = seq__29278_29325;
var G__29359 = chunk__29279_29326;
var G__29360 = count__29280_29327;
var G__29361 = (i__29281_29328 + (1));
seq__29278_29325 = G__29358;
chunk__29279_29326 = G__29359;
count__29280_29327 = G__29360;
i__29281_29328 = G__29361;
continue;
} else {
var temp__4657__auto___29362 = cljs.core.seq.call(null,seq__29278_29325);
if(temp__4657__auto___29362){
var seq__29278_29363__$1 = temp__4657__auto___29362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29278_29363__$1)){
var c__6898__auto___29364 = cljs.core.chunk_first.call(null,seq__29278_29363__$1);
var G__29365 = cljs.core.chunk_rest.call(null,seq__29278_29363__$1);
var G__29366 = c__6898__auto___29364;
var G__29367 = cljs.core.count.call(null,c__6898__auto___29364);
var G__29368 = (0);
seq__29278_29325 = G__29365;
chunk__29279_29326 = G__29366;
count__29280_29327 = G__29367;
i__29281_29328 = G__29368;
continue;
} else {
var vec__29289_29369 = cljs.core.first.call(null,seq__29278_29363__$1);
var path_29370__$1 = cljs.core.nth.call(null,vec__29289_29369,(0),null);
var cs_29371 = cljs.core.nth.call(null,vec__29289_29369,(1),null);
var cs_29372__$1 = cljs.core.deref.call(null,cs_29371);
var seq__29290_29373 = cljs.core.seq.call(null,cs_29372__$1);
var chunk__29291_29374 = null;
var count__29292_29375 = (0);
var i__29293_29376 = (0);
while(true){
if((i__29293_29376 < count__29292_29375)){
var vec__29294_29377 = cljs.core._nth.call(null,chunk__29291_29374,i__29293_29376);
var id_29378 = cljs.core.nth.call(null,vec__29294_29377,(0),null);
var c_29379 = cljs.core.nth.call(null,vec__29294_29377,(1),null);
if(cljs.core.truth_(c_29379.shouldComponentUpdate(c_29379.props,c_29379.state))){
c_29379.forceUpdate();
} else {
}

var G__29380 = seq__29290_29373;
var G__29381 = chunk__29291_29374;
var G__29382 = count__29292_29375;
var G__29383 = (i__29293_29376 + (1));
seq__29290_29373 = G__29380;
chunk__29291_29374 = G__29381;
count__29292_29375 = G__29382;
i__29293_29376 = G__29383;
continue;
} else {
var temp__4657__auto___29384__$1 = cljs.core.seq.call(null,seq__29290_29373);
if(temp__4657__auto___29384__$1){
var seq__29290_29385__$1 = temp__4657__auto___29384__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29290_29385__$1)){
var c__6898__auto___29386 = cljs.core.chunk_first.call(null,seq__29290_29385__$1);
var G__29387 = cljs.core.chunk_rest.call(null,seq__29290_29385__$1);
var G__29388 = c__6898__auto___29386;
var G__29389 = cljs.core.count.call(null,c__6898__auto___29386);
var G__29390 = (0);
seq__29290_29373 = G__29387;
chunk__29291_29374 = G__29388;
count__29292_29375 = G__29389;
i__29293_29376 = G__29390;
continue;
} else {
var vec__29295_29391 = cljs.core.first.call(null,seq__29290_29385__$1);
var id_29392 = cljs.core.nth.call(null,vec__29295_29391,(0),null);
var c_29393 = cljs.core.nth.call(null,vec__29295_29391,(1),null);
if(cljs.core.truth_(c_29393.shouldComponentUpdate(c_29393.props,c_29393.state))){
c_29393.forceUpdate();
} else {
}

var G__29394 = cljs.core.next.call(null,seq__29290_29385__$1);
var G__29395 = null;
var G__29396 = (0);
var G__29397 = (0);
seq__29290_29373 = G__29394;
chunk__29291_29374 = G__29395;
count__29292_29375 = G__29396;
i__29293_29376 = G__29397;
continue;
}
} else {
}
}
break;
}

var G__29398 = cljs.core.next.call(null,seq__29278_29363__$1);
var G__29399 = null;
var G__29400 = (0);
var G__29401 = (0);
seq__29278_29325 = G__29398;
chunk__29279_29326 = G__29399;
count__29280_29327 = G__29400;
i__29281_29328 = G__29401;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__29233,map__29233__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args29404 = [];
var len__7157__auto___29407 = arguments.length;
var i__7158__auto___29408 = (0);
while(true){
if((i__7158__auto___29408 < len__7157__auto___29407)){
args29404.push((arguments[i__7158__auto___29408]));

var G__29409 = (i__7158__auto___29408 + (1));
i__7158__auto___29408 = G__29409;
continue;
} else {
}
break;
}

var G__29406 = args29404.length;
switch (G__29406) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29404.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args29411 = [];
var len__7157__auto___29414 = arguments.length;
var i__7158__auto___29415 = (0);
while(true){
if((i__7158__auto___29415 < len__7157__auto___29414)){
args29411.push((arguments[i__7158__auto___29415]));

var G__29416 = (i__7158__auto___29415 + (1));
i__7158__auto___29415 = G__29416;
continue;
} else {
}
break;
}

var G__29413 = args29411.length;
switch (G__29413) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29411.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args29420 = [];
var len__7157__auto___29424 = arguments.length;
var i__7158__auto___29425 = (0);
while(true){
if((i__7158__auto___29425 < len__7157__auto___29424)){
args29420.push((arguments[i__7158__auto___29425]));

var G__29426 = (i__7158__auto___29425 + (1));
i__7158__auto___29425 = G__29426;
continue;
} else {
}
break;
}

var G__29422 = args29420.length;
switch (G__29422) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29420.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__29423 = owner.refs;
var G__29423__$1 = (((G__29423 == null))?null:(G__29423[name]));
if((G__29423__$1 == null)){
return null;
} else {
return G__29423__$1.getDOMNode();
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__29429 = owner.refs;
if((G__29429 == null)){
return null;
} else {
return goog.object.get(G__29429,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args29430 = [];
var len__7157__auto___29433 = arguments.length;
var i__7158__auto___29434 = (0);
while(true){
if((i__7158__auto___29434 < len__7157__auto___29433)){
args29430.push((arguments[i__7158__auto___29434]));

var G__29435 = (i__7158__auto___29434 + (1));
i__7158__auto___29434 = G__29435;
continue;
} else {
}
break;
}

var G__29432 = args29430.length;
switch (G__29432) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29430.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args29437 = [];
var len__7157__auto___29440 = arguments.length;
var i__7158__auto___29441 = (0);
while(true){
if((i__7158__auto___29441 < len__7157__auto___29440)){
args29437.push((arguments[i__7158__auto___29441]));

var G__29442 = (i__7158__auto___29441 + (1));
i__7158__auto___29441 = G__29442;
continue;
} else {
}
break;
}

var G__29439 = args29437.length;
switch (G__29439) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29437.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args29444 = [];
var len__7157__auto___29447 = arguments.length;
var i__7158__auto___29448 = (0);
while(true){
if((i__7158__auto___29448 < len__7157__auto___29447)){
args29444.push((arguments[i__7158__auto___29448]));

var G__29449 = (i__7158__auto___29448 + (1));
i__7158__auto___29448 = G__29449;
continue;
} else {
}
break;
}

var G__29446 = args29444.length;
switch (G__29446) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29444.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args29451 = [];
var len__7157__auto___29454 = arguments.length;
var i__7158__auto___29455 = (0);
while(true){
if((i__7158__auto___29455 < len__7157__auto___29454)){
args29451.push((arguments[i__7158__auto___29455]));

var G__29456 = (i__7158__auto___29455 + (1));
i__7158__auto___29455 = G__29456;
continue;
} else {
}
break;
}

var G__29453 = args29451.length;
switch (G__29453) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29451.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args29458 = [];
var len__7157__auto___29461 = arguments.length;
var i__7158__auto___29462 = (0);
while(true){
if((i__7158__auto___29462 < len__7157__auto___29461)){
args29458.push((arguments[i__7158__auto___29462]));

var G__29463 = (i__7158__auto___29462 + (1));
i__7158__auto___29462 = G__29463;
continue;
} else {
}
break;
}

var G__29460 = args29458.length;
switch (G__29460) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29458.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
