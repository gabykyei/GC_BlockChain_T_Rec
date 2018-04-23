// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.participants');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('mktplace.routes');
/**
 * Displays a link for a given participant.
 */
mktplace.components.participants.participant_link = (function mktplace$components$participants$participant_link(participant){
return React.createElement("a",{"href": mktplace.routes.dashboard_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"participant-id","participant-id",-694440875),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(participant)], null)), "className": "participant-link"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(participant)));
});
