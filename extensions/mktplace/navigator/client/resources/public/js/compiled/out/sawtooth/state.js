// Compiled by ClojureScript 1.8.51 {}
goog.provide('sawtooth.state');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
sawtooth.state.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notification","notification",-222338233),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"route","route",329891309),cljs.core.PersistentVector.EMPTY], null);
if(typeof sawtooth.state.app_state !== 'undefined'){
} else {
sawtooth.state.app_state = cljs.core.atom.call(null,sawtooth.state.initial_state);
}
if(typeof sawtooth.state.state_change_ch !== 'undefined'){
} else {
sawtooth.state.state_change_ch = cljs.core.async.chan.call(null);
}
var c__12583__auto___25379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12583__auto___25379){
return (function (){
var f__12584__auto__ = (function (){var switch__12471__auto__ = ((function (c__12583__auto___25379){
return (function (state_25334){
var state_val_25335 = (state_25334[(1)]);
if((state_val_25335 === (7))){
var inst_25330 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25336_25380 = state_25334__$1;
(statearr_25336_25380[(2)] = inst_25330);

(statearr_25336_25380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (20))){
var inst_25301 = (state_25334[(7)]);
var inst_25302 = (state_25334[(8)]);
var inst_25311 = cljs.core.apply.call(null,cljs.core.swap_BANG_,sawtooth.state.app_state,inst_25301,inst_25302);
var state_25334__$1 = state_25334;
var statearr_25337_25381 = state_25334__$1;
(statearr_25337_25381[(2)] = inst_25311);

(statearr_25337_25381[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (27))){
var state_25334__$1 = state_25334;
var statearr_25338_25382 = state_25334__$1;
(statearr_25338_25382[(2)] = null);

(statearr_25338_25382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (1))){
var state_25334__$1 = state_25334;
var statearr_25339_25383 = state_25334__$1;
(statearr_25339_25383[(2)] = null);

(statearr_25339_25383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (24))){
var state_25334__$1 = state_25334;
var statearr_25340_25384 = state_25334__$1;
(statearr_25340_25384[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (4))){
var inst_25275 = (state_25334[(9)]);
var inst_25275__$1 = (state_25334[(2)]);
var state_25334__$1 = (function (){var statearr_25342 = state_25334;
(statearr_25342[(9)] = inst_25275__$1);

return statearr_25342;
})();
if(cljs.core.truth_(inst_25275__$1)){
var statearr_25343_25385 = state_25334__$1;
(statearr_25343_25385[(1)] = (5));

} else {
var statearr_25344_25386 = state_25334__$1;
(statearr_25344_25386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (15))){
var inst_25275 = (state_25334[(9)]);
var state_25334__$1 = state_25334;
var statearr_25345_25387 = state_25334__$1;
(statearr_25345_25387[(2)] = inst_25275);

(statearr_25345_25387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (21))){
var inst_25300 = (state_25334[(10)]);
var state_25334__$1 = state_25334;
if(cljs.core.truth_(inst_25300)){
var statearr_25346_25388 = state_25334__$1;
(statearr_25346_25388[(1)] = (23));

} else {
var statearr_25347_25389 = state_25334__$1;
(statearr_25347_25389[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (13))){
var inst_25289 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25348_25390 = state_25334__$1;
(statearr_25348_25390[(2)] = inst_25289);

(statearr_25348_25390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (22))){
var inst_25324 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25349_25391 = state_25334__$1;
(statearr_25349_25391[(2)] = inst_25324);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (6))){
var state_25334__$1 = state_25334;
var statearr_25350_25392 = state_25334__$1;
(statearr_25350_25392[(2)] = null);

(statearr_25350_25392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (28))){
var inst_25320 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25351_25393 = state_25334__$1;
(statearr_25351_25393[(2)] = inst_25320);

(statearr_25351_25393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (25))){
var inst_25322 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25352_25394 = state_25334__$1;
(statearr_25352_25394[(2)] = inst_25322);

(statearr_25352_25394[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (17))){
var inst_25326 = (state_25334[(2)]);
var state_25334__$1 = (function (){var statearr_25353 = state_25334;
(statearr_25353[(11)] = inst_25326);

return statearr_25353;
})();
var statearr_25354_25395 = state_25334__$1;
(statearr_25354_25395[(2)] = null);

(statearr_25354_25395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (3))){
var inst_25332 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25334__$1,inst_25332);
} else {
if((state_val_25335 === (12))){
var state_25334__$1 = state_25334;
var statearr_25355_25396 = state_25334__$1;
(statearr_25355_25396[(2)] = false);

(statearr_25355_25396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (2))){
var state_25334__$1 = state_25334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25334__$1,(4),sawtooth.state.state_change_ch);
} else {
if((state_val_25335 === (23))){
var inst_25300 = (state_25334[(10)]);
var inst_25298 = (state_25334[(12)]);
var inst_25314 = cljs.core.swap_BANG_.call(null,sawtooth.state.app_state,cljs.core.update_in,inst_25298,inst_25300);
var state_25334__$1 = state_25334;
var statearr_25356_25397 = state_25334__$1;
(statearr_25356_25397[(2)] = inst_25314);

(statearr_25356_25397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (19))){
var inst_25301 = (state_25334[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25334,(18),new cljs.core.Keyword(null,"default","default",-1987822328),null,(17));
var state_25334__$1 = state_25334;
if(cljs.core.truth_(inst_25301)){
var statearr_25357_25398 = state_25334__$1;
(statearr_25357_25398[(1)] = (20));

} else {
var statearr_25358_25399 = state_25334__$1;
(statearr_25358_25399[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (11))){
var state_25334__$1 = state_25334;
var statearr_25359_25400 = state_25334__$1;
(statearr_25359_25400[(2)] = true);

(statearr_25359_25400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (9))){
var state_25334__$1 = state_25334;
var statearr_25360_25401 = state_25334__$1;
(statearr_25360_25401[(2)] = false);

(statearr_25360_25401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (5))){
var inst_25275 = (state_25334[(9)]);
var inst_25279 = (inst_25275 == null);
var inst_25280 = cljs.core.not.call(null,inst_25279);
var state_25334__$1 = state_25334;
if(inst_25280){
var statearr_25361_25402 = state_25334__$1;
(statearr_25361_25402[(1)] = (8));

} else {
var statearr_25362_25403 = state_25334__$1;
(statearr_25362_25403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (14))){
var inst_25275 = (state_25334[(9)]);
var inst_25294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25275);
var state_25334__$1 = state_25334;
var statearr_25363_25404 = state_25334__$1;
(statearr_25363_25404[(2)] = inst_25294);

(statearr_25363_25404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (26))){
var inst_25298 = (state_25334[(12)]);
var inst_25299 = (state_25334[(13)]);
var inst_25317 = cljs.core.swap_BANG_.call(null,sawtooth.state.app_state,cljs.core.assoc_in,inst_25298,inst_25299);
var state_25334__$1 = state_25334;
var statearr_25364_25405 = state_25334__$1;
(statearr_25364_25405[(2)] = inst_25317);

(statearr_25364_25405[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (16))){
var inst_25297 = (state_25334[(14)]);
var inst_25297__$1 = (state_25334[(2)]);
var inst_25298 = cljs.core.get.call(null,inst_25297__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var inst_25299 = cljs.core.get.call(null,inst_25297__$1,new cljs.core.Keyword(null,"value","value",305978217));
var inst_25300 = cljs.core.get.call(null,inst_25297__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var inst_25301 = cljs.core.get.call(null,inst_25297__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var inst_25302 = cljs.core.get.call(null,inst_25297__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var state_25334__$1 = (function (){var statearr_25365 = state_25334;
(statearr_25365[(7)] = inst_25301);

(statearr_25365[(10)] = inst_25300);

(statearr_25365[(8)] = inst_25302);

(statearr_25365[(12)] = inst_25298);

(statearr_25365[(14)] = inst_25297__$1);

(statearr_25365[(13)] = inst_25299);

return statearr_25365;
})();
var statearr_25366_25406 = state_25334__$1;
(statearr_25366_25406[(2)] = null);

(statearr_25366_25406[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (10))){
var inst_25292 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
if(cljs.core.truth_(inst_25292)){
var statearr_25367_25407 = state_25334__$1;
(statearr_25367_25407[(1)] = (14));

} else {
var statearr_25368_25408 = state_25334__$1;
(statearr_25368_25408[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (18))){
var inst_25301 = (state_25334[(7)]);
var inst_25300 = (state_25334[(10)]);
var inst_25302 = (state_25334[(8)]);
var inst_25298 = (state_25334[(12)]);
var inst_25297 = (state_25334[(14)]);
var inst_25299 = (state_25334[(13)]);
var inst_25275 = (state_25334[(9)]);
var inst_25303 = (state_25334[(2)]);
var inst_25304 = (function (){var temp__4657__auto__ = inst_25275;
var map__25277 = inst_25297;
var evt = inst_25297;
var path = inst_25298;
var value = inst_25299;
var action = inst_25300;
var f = inst_25301;
var args = inst_25302;
var e = inst_25303;
return ((function (temp__4657__auto__,map__25277,evt,path,value,action,f,args,e,inst_25301,inst_25300,inst_25302,inst_25298,inst_25297,inst_25299,inst_25275,inst_25303,state_val_25335,c__12583__auto___25379){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unknown error occurred on state while processing %s",evt], null);
});
;})(temp__4657__auto__,map__25277,evt,path,value,action,f,args,e,inst_25301,inst_25300,inst_25302,inst_25298,inst_25297,inst_25299,inst_25275,inst_25303,state_val_25335,c__12583__auto___25379))
})();
var inst_25305 = (new cljs.core.Delay(inst_25304,null));
var inst_25306 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"sawtooth.state","/project/sawtooth-core/extensions/mktplace/navigator/client/./scripts/build.clj",35,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_25305,null);
var state_25334__$1 = state_25334;
var statearr_25369_25409 = state_25334__$1;
(statearr_25369_25409[(2)] = inst_25306);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (8))){
var inst_25275 = (state_25334[(9)]);
var inst_25282 = inst_25275.cljs$lang$protocol_mask$partition0$;
var inst_25283 = (inst_25282 & (64));
var inst_25284 = inst_25275.cljs$core$ISeq$;
var inst_25285 = (inst_25283) || (inst_25284);
var state_25334__$1 = state_25334;
if(cljs.core.truth_(inst_25285)){
var statearr_25370_25410 = state_25334__$1;
(statearr_25370_25410[(1)] = (11));

} else {
var statearr_25371_25411 = state_25334__$1;
(statearr_25371_25411[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12583__auto___25379))
;
return ((function (switch__12471__auto__,c__12583__auto___25379){
return (function() {
var sawtooth$state$state_machine__12472__auto__ = null;
var sawtooth$state$state_machine__12472__auto____0 = (function (){
var statearr_25375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25375[(0)] = sawtooth$state$state_machine__12472__auto__);

(statearr_25375[(1)] = (1));

return statearr_25375;
});
var sawtooth$state$state_machine__12472__auto____1 = (function (state_25334){
while(true){
var ret_value__12473__auto__ = (function (){try{while(true){
var result__12474__auto__ = switch__12471__auto__.call(null,state_25334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12474__auto__;
}
break;
}
}catch (e25376){if((e25376 instanceof Object)){
var ex__12475__auto__ = e25376;
var statearr_25377_25412 = state_25334;
(statearr_25377_25412[(5)] = ex__12475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25413 = state_25334;
state_25334 = G__25413;
continue;
} else {
return ret_value__12473__auto__;
}
break;
}
});
sawtooth$state$state_machine__12472__auto__ = function(state_25334){
switch(arguments.length){
case 0:
return sawtooth$state$state_machine__12472__auto____0.call(this);
case 1:
return sawtooth$state$state_machine__12472__auto____1.call(this,state_25334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sawtooth$state$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$0 = sawtooth$state$state_machine__12472__auto____0;
sawtooth$state$state_machine__12472__auto__.cljs$core$IFn$_invoke$arity$1 = sawtooth$state$state_machine__12472__auto____1;
return sawtooth$state$state_machine__12472__auto__;
})()
;})(switch__12471__auto__,c__12583__auto___25379))
})();
var state__12585__auto__ = (function (){var statearr_25378 = f__12584__auto__.call(null);
(statearr_25378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12583__auto___25379);

return statearr_25378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12585__auto__);
});})(c__12583__auto___25379))
);

sawtooth.state.reset_state_BANG_ = (function sawtooth$state$reset_state_BANG_(){
return cljs.core.reset_BANG_.call(null,sawtooth.state.app_state,sawtooth.state.initial_state);
});
sawtooth.state.notification_action = (function sawtooth$state$notification_action(notification){
var timestamped = cljs.core.assoc.call(null,notification,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notification","notification",-222338233)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (timestamped){
return (function (p1__25414_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timestamped], null),p1__25414_SHARP_);
});})(timestamped))
], null);
});
