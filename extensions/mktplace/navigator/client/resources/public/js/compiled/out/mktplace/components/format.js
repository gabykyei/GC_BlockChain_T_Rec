// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.components.format');
goog.require('cljs.core');
goog.require('sawtooth.utils');
mktplace.components.format.object_name_pattern = /^\/.+/;
mktplace.components.format.valid_object_name_QMARK_ = (function mktplace$components$format$valid_object_name_QMARK_(s){
var or__6087__auto__ = (s == null);
if(or__6087__auto__){
return or__6087__auto__;
} else {
var or__6087__auto____$1 = cljs.core.empty_QMARK_.call(null,s);
if(or__6087__auto____$1){
return or__6087__auto____$1;
} else {
return cljs.core.re_find.call(null,mktplace.components.format.object_name_pattern,s);
}
}
});
/**
 * Check if an object name is empty, and returns its id as needed
 */
mktplace.components.format.object_name = (function mktplace$components$format$object_name(p__25439){
var map__25442 = p__25439;
var map__25442__$1 = ((((!((map__25442 == null)))?((((map__25442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25442):map__25442);
var obj_id = cljs.core.get.call(null,map__25442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var obj_name = cljs.core.get.call(null,map__25442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(((obj_name == null)) || ((typeof obj_name === 'string') && (cljs.core.empty_QMARK_.call(null,obj_name)))){
return obj_id;
} else {
return obj_name;
}
});
/**
 * Finds the first item in the given collection wih the given id
 *   and returns its name.
 * 
 *   Params:
 * 
 *  coll - the search collection
 *  id - the id to find
 *  default-value - the value to return if none is found.
 */
mktplace.components.format.first_name = (function mktplace$components$format$first_name(coll,id,default_value){
var obj_name = sawtooth.utils.firstk.call(null,coll,id,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.empty_QMARK_.call(null,obj_name)){
return default_value;
} else {
return obj_name;
}
});
/**
 * Finds the skill name for the given Record
 */
mktplace.components.format.asset_name_by_holding = (function mktplace$components$format$asset_name_by_holding(assets,p__25444){
var map__25447 = p__25444;
var map__25447__$1 = ((((!((map__25447 == null)))?((((map__25447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25447):map__25447);
var asset_id = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"asset","asset",-280274466));
return mktplace.components.format.first_name.call(null,assets,asset_id,"unknown");
});
/**
 * Finds the Skill-type name for a given Record
 */
mktplace.components.format.asset_type_name_by_asset = (function mktplace$components$format$asset_type_name_by_asset(asset_types,p__25449){
var map__25452 = p__25449;
var map__25452__$1 = ((((!((map__25452 == null)))?((((map__25452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25452):map__25452);
var asset_type_id = cljs.core.get.call(null,map__25452__$1,new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094));
return mktplace.components.format.first_name.call(null,asset_types,asset_type_id,"unknown");
});
/**
 * Returns the display name of a participant with the given id, from
 *   the given sequence of participants
 */
mktplace.components.format.participant_display_name = (function mktplace$components$format$participant_display_name(participants,id){
return mktplace.components.format.first_name.call(null,participants,id,"Unknown Participant");
});
