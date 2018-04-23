// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.events');
goog.require('cljs.core');
goog.require('goog.object');
/**
 * Triggers the given function on content loaded.
 */
sawtooth.events.on_content_loaded = (function sawtooth$events$on_content_loaded(f){
return document.addEventListener("DOMContentLoaded",f);
});
/**
 * Triggers an event of 'type' on the passed element
 */
sawtooth.events.trigger_event_BANG_ = (function sawtooth$events$trigger_event_BANG_(elem,type){
if(cljs.core.truth_((function (){var and__6075__auto__ = cljs.core._EQ_.call(null,type,"click");
if(and__6075__auto__){
return goog.object.get(elem,"click");
} else {
return and__6075__auto__;
}
})())){
return elem.click();
} else {
var e = window.document.createEvent("HTMLEvents");
e.initEvent(type,true,false);

return elem.dispatchEvent(e);

}
});
