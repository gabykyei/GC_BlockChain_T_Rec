// Compiled by ClojureScript 1.8.51 {}
goog.provide('mktplace.service.asset');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sawtooth.service.common');
mktplace.service.asset.not_bootstrap_asset = (function mktplace$service$asset$not_bootstrap_asset(p__31057){
var map__31060 = p__31057;
var map__31060__$1 = ((((!((map__31060 == null)))?((((map__31060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31060):map__31060);
var _fqname = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"_fqname","_fqname",279862222));
return cljs.core.not.call(null,(function (){var and__6075__auto__ = _fqname;
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.re_find.call(null,/\/\/marketplace\/asset\/validation-token/,_fqname);
} else {
return and__6075__auto__;
}
})());
});
mktplace.service.asset.not_boostrap_asset_type = (function mktplace$service$asset$not_boostrap_asset_type(p__31062){
var map__31065 = p__31062;
var map__31065__$1 = ((((!((map__31065 == null)))?((((map__31065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31065):map__31065);
var _fqname = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"_fqname","_fqname",279862222));
return cljs.core.not.call(null,(function (){var and__6075__auto__ = _fqname;
if(cljs.core.truth_(and__6075__auto__)){
return cljs.core.re_find.call(null,/\/\/marketplace\/asset-type\/participant/,_fqname);
} else {
return and__6075__auto__;
}
})());
});
mktplace.service.asset.ASSETS_ENDPOINT = "/api/mktplace/assets";
mktplace.service.asset.assets = (function mktplace$service$asset$assets(){
return sawtooth.service.common.fetch_json_BANG_.call(null,mktplace.service.asset.ASSETS_ENDPOINT,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xform","xform",-1725711008),(function (p__31070){
var map__31071 = p__31070;
var map__31071__$1 = ((((!((map__31071 == null)))?((((map__31071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);
var assets__$1 = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"assets","assets",210278279));
var assetTypes = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"assetTypes","assetTypes",1031401111));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.merge,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.filter.call(null,mktplace.service.asset.not_bootstrap_asset,assets__$1),new cljs.core.Keyword(null,"asset-types","asset-types",158107896),cljs.core.filter.call(null,mktplace.service.asset.not_boostrap_asset_type,assetTypes)], null)], null)], null);
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Asset Failure",new cljs.core.Keyword(null,"message","message",-406056002),"Unable to load assets and asset types due to\n                          an unknown server error."], null)], null));
});
