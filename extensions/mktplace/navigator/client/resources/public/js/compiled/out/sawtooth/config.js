// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.config');
goog.require('cljs.core');
sawtooth.config.base_url = "";
sawtooth.config.socket_location = cljs.core.memoize.call(null,(function (){
return [cljs.core.str(location.protocol),cljs.core.str("//"),cljs.core.str(location.host)].join('');
}));
