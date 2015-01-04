// Compiled by ClojureScript 0.0-2511
goog.provide('cities.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('markdown.core');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('reagent_forms.core');
cljs.core.enable_console_print_BANG_.call(null);
cities.core.data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.cache = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.already_sent = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.eval_chans = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.eval_cache = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* @param {...*} var_args
*/
cities.core.get_data = (function() { 
var get_data__delegate = function (path,p__36555){
var map__36557 = p__36555;
var map__36557__$1 = ((cljs.core.seq_QMARK_.call(null,map__36557))?cljs.core.apply.call(null,cljs.core.hash_map,map__36557):map__36557);
var transf = cljs.core.get.call(null,map__36557__$1,new cljs.core.Keyword(null,"transf","transf",-185873150),cljs.core.identity);
return transf.call(null,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.data)),path));
};
var get_data = function (path,var_args){
var p__36555 = null;
if (arguments.length > 1) {
  p__36555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get_data__delegate.call(this,path,p__36555);};
get_data.cljs$lang$maxFixedArity = 1;
get_data.cljs$lang$applyTo = (function (arglist__36558){
var path = cljs.core.first(arglist__36558);
var p__36555 = cljs.core.rest(arglist__36558);
return get_data__delegate(path,p__36555);
});
get_data.cljs$core$IFn$_invoke$arity$variadic = get_data__delegate;
return get_data;
})()
;
cities.core.req_eval = (function req_eval(path,form,transf){
var code_string = cljs.core.pr_str.call(null,form);
var update_state = ((function (code_string){
return (function (result){
return cljs.core.swap_BANG_.call(null,cities.core.data,cljs.core.assoc_in,path,transf.call(null,result));
});})(code_string))
;
var update_cache_and_state = ((function (code_string,update_state){
return (function (result){
cljs.core.swap_BANG_.call(null,cities.core.eval_cache,cljs.core.assoc,code_string,result);

return update_state.call(null,result);
});})(code_string,update_state))
;
var temp__4124__auto__ = cljs.core.deref.call(null,cities.core.eval_cache).call(null,code_string);
if(cljs.core.truth_(temp__4124__auto__)){
var result = temp__4124__auto__;
return update_state.call(null,result);
} else {
if(cljs.core.not.call(null,cljs.core.deref.call(null,cities.core.eval_chans).call(null,code_string))){
var ch = cljs.core.async.chan.call(null,(1));
ajax.core.POST.call(null,"/eval",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),code_string,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function (response){
cljs.core.async.put_BANG_.call(null,ch,response);

return cljs.core.async.close_BANG_.call(null,ch);
});})(ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
], null));

cljs.core.swap_BANG_.call(null,cities.core.eval_chans,cljs.core.assoc,code_string,ch);

var c__30106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function (){
var f__30107__auto__ = (function (){var switch__30091__auto__ = ((function (c__30106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function (state_36578){
var state_val_36579 = (state_36578[(1)]);
if((state_val_36579 === (2))){
var inst_36574 = (state_36578[(2)]);
var inst_36575 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_36574);
var inst_36576 = update_cache_and_state.call(null,inst_36575);
var state_36578__$1 = state_36578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36578__$1,inst_36576);
} else {
if((state_val_36579 === (1))){
var state_36578__$1 = state_36578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36578__$1,(2),ch);
} else {
return null;
}
}
});})(c__30106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
;
return ((function (switch__30091__auto__,c__30106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function() {
var state_machine__30092__auto__ = null;
var state_machine__30092__auto____0 = (function (){
var statearr_36583 = [null,null,null,null,null,null,null];
(statearr_36583[(0)] = state_machine__30092__auto__);

(statearr_36583[(1)] = (1));

return statearr_36583;
});
var state_machine__30092__auto____1 = (function (state_36578){
while(true){
var ret_value__30093__auto__ = (function (){try{while(true){
var result__30094__auto__ = switch__30091__auto__.call(null,state_36578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30094__auto__;
}
break;
}
}catch (e36584){if((e36584 instanceof Object)){
var ex__30095__auto__ = e36584;
var statearr_36585_36587 = state_36578;
(statearr_36585_36587[(5)] = ex__30095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36588 = state_36578;
state_36578 = G__36588;
continue;
} else {
return ret_value__30093__auto__;
}
break;
}
});
state_machine__30092__auto__ = function(state_36578){
switch(arguments.length){
case 0:
return state_machine__30092__auto____0.call(this);
case 1:
return state_machine__30092__auto____1.call(this,state_36578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30092__auto____0;
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30092__auto____1;
return state_machine__30092__auto__;
})()
;})(switch__30091__auto__,c__30106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
})();
var state__30108__auto__ = (function (){var statearr_36586 = f__30107__auto__.call(null);
(statearr_36586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30106__auto__);

return statearr_36586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30108__auto__);
});})(c__30106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
);

return c__30106__auto__;
} else {
return null;
}
}
});
cities.core.req_eval.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742)], null),cljs.core.list(new cljs.core.Symbol("cities.data","get-all","cities.data/get-all",133852847,null)),cljs.core.identity);
if(typeof cities.core.app_state !== 'undefined'){
} else {
cities.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cities.core.doc = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"char","char",-641587586),"\u05DE\u05D5\u05E6\u05D0",new cljs.core.Keyword(null,"val","val",128701612),"\u05D0\u05E4\u05E8\u05D9\u05E7\u05D4",new cljs.core.Keyword(null,"period-type","period-type",2061129595),"\u05E2\u05D1\u05E8\u05D5 \u05DC\u05D9\u05E9\u05D5\u05D1 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA",new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805),"1948-1954",new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),(70)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),(2800)], null)], null));
cities.core.get_period = (function get_period(p__36589){
var map__36591 = p__36589;
var map__36591__$1 = ((cljs.core.seq_QMARK_.call(null,map__36591))?cljs.core.apply.call(null,cljs.core.hash_map,map__36591):map__36591);
var chosen_period = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805));
var period_type = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"period-type","period-type",2061129595));
var or__28188__auto__ = (function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"period-type","period-type",2061129595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc));
if(cljs.core.truth_(temp__4124__auto__)){
var period_type__$1 = temp__4124__auto__;
if(cljs.core._EQ_.call(null,period_type__$1,"\u05E2\u05D1\u05E8\u05D5 \u05DC\u05D9\u05E9\u05D5\u05D1 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA")){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc));
if(cljs.core.truth_(temp__4124__auto____$1)){
var chosen_period__$1 = temp__4124__auto____$1;
return chosen_period__$1;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__28188__auto__)){
return or__28188__auto__;
} else {
return "\u05D4\u05DB\u05DC";
}
});
cities.core.char_to_key = new cljs.core.PersistentArrayMap(null, 2, ["\u05D3\u05EA",new cljs.core.Keyword(null,"religion","religion",-40640352),"\u05DE\u05D5\u05E6\u05D0",new cljs.core.Keyword(null,"origin","origin",1037372088)], null);
cities.core.ordered_values = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"religion","religion",-40640352),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05D9\u05D4\u05D5\u05D3\u05D9","\u05E0\u05D5\u05E6\u05E8\u05D9","\u05DE\u05D5\u05E1\u05DC\u05DE\u05D9","\u05D3\u05E8\u05D5\u05D6\u05D9","\u05D0\u05D7\u05E8 / \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2 / \u05DC\u05DC\u05D0 \u05E1\u05D9\u05D5\u05D5\u05D2 \u05D3\u05EA"], null),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05D9\u05E9\u05E8\u05D0\u05DC","\u05D0\u05E1\u05D9\u05D4","\u05D0\u05E4\u05E8\u05D9\u05E7\u05D4","\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4","\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4-\u05D0\u05D5\u05E7\u05D9\u05D0\u05E0\u05D9\u05D4","NA"], null)], null);
cities.core.periods = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05E2\u05D3 1947","1948-1954","1955-1964","1965-1974","1975-1984","1985-1989","1990-1994","1995-1999","2000-2004","2005 \u05D5\u05D9\u05D5\u05EA\u05E8","\u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2","\u05D2\u05E8 \u05D1\u05D9\u05D9\u05E9\u05D5\u05D1 \u05DE\u05DC\u05D9\u05D3\u05D4","\u05D1\u05E0\u05D9 0-14","\u05D4\u05DB\u05DC"], null);
cities.core.periods_entered = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05E2\u05D3 1947","1948-1954","1955-1964","1965-1974","1975-1984","1985-1989","1990-1994","1995-1999","2000-2004","2005 \u05D5\u05D9\u05D5\u05EA\u05E8"], null);
cities.core.get_chart = (function get_chart(city_code,type,char$,val,period){
var G__36595 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36595) {
case "freq":
return cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freqs","freqs",1215470702),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city-code","city-code",-237533935),city_code,new cljs.core.Keyword(null,"column-name","column-name",551523580),cities.core.char_to_key.call(null,char$),new cljs.core.Keyword(null,"period","period",-352129191),period], null)], null),new cljs.core.Keyword(null,"transf","transf",-185873150),((function (G__36595){
return (function (freqs){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"x-axis-type","x-axis-type",-1071000664),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"order-rule","order-rule",1782525873),new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"data-series","data-series",770919679)],[dimple.plot.bar,"\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA",new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.PersistentArrayMap(null, 2, ["\u05DB\u05DC \u05D4\u05E9\u05D0\u05E8","#9999ff","\u05E2\u05E8\u05DA \u05E0\u05D1\u05D7\u05E8","#ff9999"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"15%",new cljs.core.Keyword(null,"y","y",-1757859776),"15%",new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),cljs.core.vec.call(null,cljs.core.reverse.call(null,cities.core.ordered_values.call(null,cities.core.char_to_key.call(null,char$)))),char$,new cljs.core.PersistentArrayMap(null, 2, ["\u05DB\u05DC \u05D4\u05E9\u05D0\u05E8",cljs.core.filter.call(null,((function (G__36595){
return (function (p1__36592_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__36592_SHARP_),val);
});})(G__36595))
,freqs),"\u05E2\u05E8\u05DA \u05E0\u05D1\u05D7\u05E8",cljs.core.filter.call(null,((function (G__36595){
return (function (p1__36593_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__36593_SHARP_),val);
});})(G__36595))
,freqs)], null)]);
});})(G__36595))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
cities.core.get_comparison_chart = (function get_comparison_chart(city_names_by_code,type,char$,val,period){
var G__36619 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36619) {
case "freq":
var freqs_by_city_name = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28944__auto__ = ((function (G__36619){
return (function iter__36620(s__36621){
return (new cljs.core.LazySeq(null,((function (G__36619){
return (function (){
var s__36621__$1 = s__36621;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36621__$1);
if(temp__4126__auto__){
var s__36621__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36621__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__36621__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__36623 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__36622 = (0);
while(true){
if((i__36622 < size__28943__auto__)){
var vec__36626 = cljs.core._nth.call(null,c__28942__auto__,i__36622);
var city_code = cljs.core.nth.call(null,vec__36626,(0),null);
var city_name = cljs.core.nth.call(null,vec__36626,(1),null);
cljs.core.chunk_append.call(null,b__36623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_name,cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freqs","freqs",1215470702),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city-code","city-code",-237533935),city_code,new cljs.core.Keyword(null,"column-name","column-name",551523580),cities.core.char_to_key.call(null,char$),new cljs.core.Keyword(null,"period","period",-352129191),period], null)], null))], null));

var G__36641 = (i__36622 + (1));
i__36622 = G__36641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36623),iter__36620.call(null,cljs.core.chunk_rest.call(null,s__36621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36623),null);
}
} else {
var vec__36627 = cljs.core.first.call(null,s__36621__$2);
var city_code = cljs.core.nth.call(null,vec__36627,(0),null);
var city_name = cljs.core.nth.call(null,vec__36627,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_name,cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freqs","freqs",1215470702),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city-code","city-code",-237533935),city_code,new cljs.core.Keyword(null,"column-name","column-name",551523580),cities.core.char_to_key.call(null,char$),new cljs.core.Keyword(null,"period","period",-352129191),period], null)], null))], null),iter__36620.call(null,cljs.core.rest.call(null,s__36621__$2)));
}
} else {
return null;
}
break;
}
});})(G__36619))
,null,null));
});})(G__36619))
;
return iter__28944__auto__.call(null,city_names_by_code);
})());
var city_names = cljs.core.keys.call(null,freqs_by_city_name);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"x-axis-type","x-axis-type",-1071000664),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"order-rule","order-rule",1782525873),new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"data-series","data-series",770919679)],[dimple.plot.bar,"\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA \u05D9\u05D7\u05E1\u05D9\u05EA",new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,cljs.core.keys.call(null,freqs_by_city_name)),"#339933",cljs.core.second.call(null,cljs.core.keys.call(null,freqs_by_city_name)),"#663366"], true, false),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"15%",new cljs.core.Keyword(null,"y","y",-1757859776),"15%",new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (city_names,freqs_by_city_name,G__36619){
return (function (x){
var iter__28944__auto__ = ((function (city_names,freqs_by_city_name,G__36619){
return (function iter__36628(s__36629){
return (new cljs.core.LazySeq(null,((function (city_names,freqs_by_city_name,G__36619){
return (function (){
var s__36629__$1 = s__36629;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36629__$1);
if(temp__4126__auto__){
var s__36629__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36629__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__36629__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__36631 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__36630 = (0);
while(true){
if((i__36630 < size__28943__auto__)){
var city_name = cljs.core._nth.call(null,c__28942__auto__,i__36630);
cljs.core.chunk_append.call(null,b__36631,[cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join(''));

var G__36642 = (i__36630 + (1));
i__36630 = G__36642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36631),iter__36628.call(null,cljs.core.chunk_rest.call(null,s__36629__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36631),null);
}
} else {
var city_name = cljs.core.first.call(null,s__36629__$2);
return cljs.core.cons.call(null,[cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join(''),iter__36628.call(null,cljs.core.rest.call(null,s__36629__$2)));
}
} else {
return null;
}
break;
}
});})(city_names,freqs_by_city_name,G__36619))
,null,null));
});})(city_names,freqs_by_city_name,G__36619))
;
return iter__28944__auto__.call(null,city_names);
});})(city_names,freqs_by_city_name,G__36619))
,cities.core.ordered_values.call(null,cities.core.char_to_key.call(null,char$)))))),char$,cljs.core.apply.call(null,cljs.core.conj,(function (){var iter__28944__auto__ = ((function (city_names,freqs_by_city_name,G__36619){
return (function iter__36632(s__36633){
return (new cljs.core.LazySeq(null,((function (city_names,freqs_by_city_name,G__36619){
return (function (){
var s__36633__$1 = s__36633;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36633__$1);
if(temp__4126__auto__){
var s__36633__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36633__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__36633__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__36635 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__36634 = (0);
while(true){
if((i__36634 < size__28943__auto__)){
var vec__36638 = cljs.core._nth.call(null,c__28942__auto__,i__36634);
var city_name = cljs.core.nth.call(null,vec__36638,(0),null);
var freqs = cljs.core.nth.call(null,vec__36638,(1),null);
cljs.core.chunk_append.call(null,b__36635,(function (){var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),freqs));
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(city_name)].join(''),cljs.core.map.call(null,((function (i__36634,total,vec__36638,city_name,freqs,c__28942__auto__,size__28943__auto__,b__36635,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619){
return (function (p1__36597_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__36597_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),((function (i__36634,total,vec__36638,city_name,freqs,c__28942__auto__,size__28943__auto__,b__36635,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619){
return (function (x){
return [cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join('');
});})(i__36634,total,vec__36638,city_name,freqs,c__28942__auto__,size__28943__auto__,b__36635,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),((function (i__36634,total,vec__36638,city_name,freqs,c__28942__auto__,size__28943__auto__,b__36635,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619){
return (function (y){
return (y / total);
});})(i__36634,total,vec__36638,city_name,freqs,c__28942__auto__,size__28943__auto__,b__36635,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619))
);
});})(i__36634,total,vec__36638,city_name,freqs,c__28942__auto__,size__28943__auto__,b__36635,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619))
,freqs)], true, false);
})());

var G__36643 = (i__36634 + (1));
i__36634 = G__36643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36635),iter__36632.call(null,cljs.core.chunk_rest.call(null,s__36633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36635),null);
}
} else {
var vec__36639 = cljs.core.first.call(null,s__36633__$2);
var city_name = cljs.core.nth.call(null,vec__36639,(0),null);
var freqs = cljs.core.nth.call(null,vec__36639,(1),null);
return cljs.core.cons.call(null,(function (){var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),freqs));
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(city_name)].join(''),cljs.core.map.call(null,((function (total,vec__36639,city_name,freqs,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619){
return (function (p1__36597_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__36597_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),((function (total,vec__36639,city_name,freqs,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619){
return (function (x){
return [cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join('');
});})(total,vec__36639,city_name,freqs,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),((function (total,vec__36639,city_name,freqs,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619){
return (function (y){
return (y / total);
});})(total,vec__36639,city_name,freqs,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619))
);
});})(total,vec__36639,city_name,freqs,s__36633__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__36619))
,freqs)], true, false);
})(),iter__36632.call(null,cljs.core.rest.call(null,s__36633__$2)));
}
} else {
return null;
}
break;
}
});})(city_names,freqs_by_city_name,G__36619))
,null,null));
});})(city_names,freqs_by_city_name,G__36619))
;
return iter__28944__auto__.call(null,freqs_by_city_name);
})())]);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
cities.core.get_scatter_chart = (function get_scatter_chart(cities_map,char$,val,proportions,colors,data){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"15%",new cljs.core.Keyword(null,"y","y",-1757859776),"15%",new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null),new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),[cljs.core.str("\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA \u05D9\u05D7\u05E1\u05D9\u05EA \u05E9\u05DC "),cljs.core.str(char$),cljs.core.str(": "),cljs.core.str(val)].join(''),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),"\u05E7\u05D5 \u05E8\u05D5\u05D7\u05D1",new cljs.core.Keyword(null,"plot","plot",2086832225),dimple.plot.bubble,new cljs.core.Keyword(null,"data-series","data-series",770919679),new cljs.core.PersistentArrayMap(null, 1, ["\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD",data], null),new cljs.core.Keyword(null,"x-axis-type","x-axis-type",-1071000664),new cljs.core.Keyword(null,"measure","measure",-1857519826)], null);
});
cities.core.draw_chart = (function draw_chart(p__36644){
var map__36658 = p__36644;
var map__36658__$1 = ((cljs.core.seq_QMARK_.call(null,map__36658))?cljs.core.apply.call(null,cljs.core.hash_map,map__36658):map__36658);
var x_axis_type = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"x-axis-type","x-axis-type",-1071000664));
var order_rule = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"order-rule","order-rule",1782525873));
var plot = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"plot","plot",2086832225));
var y_axis = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var x_axis = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var bounds = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var div = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"div","div",1057191632));
var data_series = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"data-series","data-series",770919679));
var colors = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var map__36659 = div;
var map__36659__$1 = ((cljs.core.seq_QMARK_.call(null,map__36659))?cljs.core.apply.call(null,cljs.core.hash_map,map__36659):map__36659);
var height = cljs.core.get.call(null,map__36659__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__36659__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var id = cljs.core.get.call(null,map__36659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var Chart = dimple.chart;
var svg = dimple.newSvg([cljs.core.str("#"),cljs.core.str(id)].join(''),width,height);
var dimple_chart = (new Chart(svg)).setBounds(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds));
var x = (function (){var G__36660 = (((x_axis_type instanceof cljs.core.Keyword))?x_axis_type.fqn:null);
switch (G__36660) {
case "measure":
return dimple_chart.addMeasureAxis("x","x");

break;
case "category":
return dimple_chart.addCategoryAxis("x","x");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(x_axis_type)].join('')));

}
})();
var y = dimple_chart.addMeasureAxis("y","y");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"measure","measure",-1857519826),x_axis_type)){
var xys_36672 = cljs.core.vec.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,data_series)));
var seq__36661_36673 = cljs.core.seq.call(null,xys_36672);
var chunk__36662_36674 = null;
var count__36663_36675 = (0);
var i__36664_36676 = (0);
while(true){
if((i__36664_36676 < count__36663_36675)){
var xy_36677 = cljs.core._nth.call(null,chunk__36662_36674,i__36664_36676);
var aname_36678 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(xy_36677);
var s_36679 = dimple_chart.addSeries(aname_36678,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_36679["data"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy_36677], null)));

dimple_chart.assignColor(aname_36678,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_36677),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_36677),0.5);

var G__36680 = seq__36661_36673;
var G__36681 = chunk__36662_36674;
var G__36682 = count__36663_36675;
var G__36683 = (i__36664_36676 + (1));
seq__36661_36673 = G__36680;
chunk__36662_36674 = G__36681;
count__36663_36675 = G__36682;
i__36664_36676 = G__36683;
continue;
} else {
var temp__4126__auto___36684 = cljs.core.seq.call(null,seq__36661_36673);
if(temp__4126__auto___36684){
var seq__36661_36685__$1 = temp__4126__auto___36684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36661_36685__$1)){
var c__28975__auto___36686 = cljs.core.chunk_first.call(null,seq__36661_36685__$1);
var G__36687 = cljs.core.chunk_rest.call(null,seq__36661_36685__$1);
var G__36688 = c__28975__auto___36686;
var G__36689 = cljs.core.count.call(null,c__28975__auto___36686);
var G__36690 = (0);
seq__36661_36673 = G__36687;
chunk__36662_36674 = G__36688;
count__36663_36675 = G__36689;
i__36664_36676 = G__36690;
continue;
} else {
var xy_36691 = cljs.core.first.call(null,seq__36661_36685__$1);
var aname_36692 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(xy_36691);
var s_36693 = dimple_chart.addSeries(aname_36692,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_36693["data"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy_36691], null)));

dimple_chart.assignColor(aname_36692,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_36691),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_36691),0.5);

var G__36694 = cljs.core.next.call(null,seq__36661_36685__$1);
var G__36695 = null;
var G__36696 = (0);
var G__36697 = (0);
seq__36661_36673 = G__36694;
chunk__36662_36674 = G__36695;
count__36663_36675 = G__36696;
i__36664_36676 = G__36697;
continue;
}
} else {
}
}
break;
}

(y["overrideMin"] = (-0.1 + cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.first.call(null,cljs.core.vals.call(null,data_series))))));
} else {
var seq__36665_36698 = cljs.core.seq.call(null,data_series);
var chunk__36666_36699 = null;
var count__36667_36700 = (0);
var i__36668_36701 = (0);
while(true){
if((i__36668_36701 < count__36667_36700)){
var vec__36669_36702 = cljs.core._nth.call(null,chunk__36666_36699,i__36668_36701);
var name_36703 = cljs.core.nth.call(null,vec__36669_36702,(0),null);
var data_36704 = cljs.core.nth.call(null,vec__36669_36702,(1),null);
var s_36705 = dimple_chart.addSeries(name_36703,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_36705["data"] = cljs.core.clj__GT_js.call(null,data_36704));

var temp__4124__auto___36706 = colors.call(null,name_36703);
if(cljs.core.truth_(temp__4124__auto___36706)){
var color_36707 = temp__4124__auto___36706;
dimple_chart.assignColor(name_36703,color_36707);
} else {
}

var G__36708 = seq__36665_36698;
var G__36709 = chunk__36666_36699;
var G__36710 = count__36667_36700;
var G__36711 = (i__36668_36701 + (1));
seq__36665_36698 = G__36708;
chunk__36666_36699 = G__36709;
count__36667_36700 = G__36710;
i__36668_36701 = G__36711;
continue;
} else {
var temp__4126__auto___36712 = cljs.core.seq.call(null,seq__36665_36698);
if(temp__4126__auto___36712){
var seq__36665_36713__$1 = temp__4126__auto___36712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36665_36713__$1)){
var c__28975__auto___36714 = cljs.core.chunk_first.call(null,seq__36665_36713__$1);
var G__36715 = cljs.core.chunk_rest.call(null,seq__36665_36713__$1);
var G__36716 = c__28975__auto___36714;
var G__36717 = cljs.core.count.call(null,c__28975__auto___36714);
var G__36718 = (0);
seq__36665_36698 = G__36715;
chunk__36666_36699 = G__36716;
count__36667_36700 = G__36717;
i__36668_36701 = G__36718;
continue;
} else {
var vec__36670_36719 = cljs.core.first.call(null,seq__36665_36713__$1);
var name_36720 = cljs.core.nth.call(null,vec__36670_36719,(0),null);
var data_36721 = cljs.core.nth.call(null,vec__36670_36719,(1),null);
var s_36722 = dimple_chart.addSeries(name_36720,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_36722["data"] = cljs.core.clj__GT_js.call(null,data_36721));

var temp__4124__auto___36723 = colors.call(null,name_36720);
if(cljs.core.truth_(temp__4124__auto___36723)){
var color_36724 = temp__4124__auto___36723;
dimple_chart.assignColor(name_36720,color_36724);
} else {
}

var G__36725 = cljs.core.next.call(null,seq__36665_36713__$1);
var G__36726 = null;
var G__36727 = (0);
var G__36728 = (0);
seq__36665_36698 = G__36725;
chunk__36666_36699 = G__36726;
count__36667_36700 = G__36727;
i__36668_36701 = G__36728;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.truth_(order_rule)){
x.addOrderRule(cljs.core.clj__GT_js.call(null,order_rule));
} else {
}

if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"measure","measure",-1857519826),x_axis_type)){
dimple_chart.addLegend("60%","10%","40%","40%","left");
} else {
}

dimple_chart.draw();

x.titleShape.text(x_axis);

return y.titleShape.text(y_axis);
});
cities.core.get_chart_spec_with_id = (function get_chart_spec_with_id(id,spec){
return cljs.core.assoc_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"id","id",-1388402092)], null),id);
});
cities.core.chart_component = (function chart_component(id,side,deref_doc){
var setup = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"direction","direction",-633359395),"ltr"], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),id,new cljs.core.Keyword(null,"ref","ref",1289896967),id,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});
var do_render_BANG_ = ((function (setup){
return (function (){
var c__30106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30106__auto__,setup){
return (function (){
var f__30107__auto__ = (function (){var switch__30091__auto__ = ((function (c__30106__auto__,setup){
return (function (state_36968){
var state_val_36969 = (state_36968[(1)]);
if((state_val_36969 === (7))){
var inst_36951 = (state_36968[(2)]);
var state_36968__$1 = state_36968;
var statearr_36970_36999 = state_36968__$1;
(statearr_36970_36999[(2)] = inst_36951);

(statearr_36970_36999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (1))){
var inst_36864 = document.getElementById(id);
var inst_36865 = [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null];
var inst_36866 = (new cljs.core.PersistentArrayMap(null,2,inst_36865,null));
var inst_36867 = (new cljs.core.PersistentHashSet(null,inst_36866,null));
var inst_36868 = inst_36867.call(null,side);
var state_36968__$1 = (function (){var statearr_36971 = state_36968;
(statearr_36971[(7)] = inst_36864);

return statearr_36971;
})();
if(cljs.core.truth_(inst_36868)){
var statearr_36972_37000 = state_36968__$1;
(statearr_36972_37000[(1)] = (2));

} else {
var statearr_36973_37001 = state_36968__$1;
(statearr_36973_37001[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (4))){
var inst_36953 = (state_36968[(2)]);
var state_36968__$1 = (function (){var statearr_36974 = state_36968;
(statearr_36974[(8)] = inst_36953);

return statearr_36974;
})();
var statearr_36975_37002 = state_36968__$1;
(statearr_36975_37002[(2)] = null);

(statearr_36975_37002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (15))){
var inst_36962 = (state_36968[(2)]);
var state_36968__$1 = state_36968;
var statearr_36976_37003 = state_36968__$1;
(statearr_36976_37003[(2)] = inst_36962);

(statearr_36976_37003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (13))){
var inst_36864 = (state_36968[(7)]);
var inst_36957 = inst_36864.lastChild;
var inst_36958 = inst_36864.removeChild(inst_36957);
var state_36968__$1 = (function (){var statearr_36977 = state_36968;
(statearr_36977[(9)] = inst_36958);

return statearr_36977;
})();
var statearr_36978_37004 = state_36968__$1;
(statearr_36978_37004[(2)] = null);

(statearr_36978_37004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (6))){
var inst_36910 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scatter","scatter",507265517),side);
var state_36968__$1 = state_36968;
if(inst_36910){
var statearr_36979_37005 = state_36968__$1;
(statearr_36979_37005[(1)] = (8));

} else {
var statearr_36980_37006 = state_36968__$1;
(statearr_36980_37006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (3))){
var inst_36885 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"comparison","comparison",-986182462),side);
var state_36968__$1 = state_36968;
if(inst_36885){
var statearr_36981_37007 = state_36968__$1;
(statearr_36981_37007[(1)] = (5));

} else {
var statearr_36982_37008 = state_36968__$1;
(statearr_36982_37008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (12))){
var inst_36953 = (state_36968[(8)]);
var inst_36964 = (state_36968[(2)]);
var inst_36965 = cities.core.get_chart_spec_with_id.call(null,id,inst_36953);
var inst_36966 = cities.core.draw_chart.call(null,inst_36965);
var state_36968__$1 = (function (){var statearr_36983 = state_36968;
(statearr_36983[(10)] = inst_36964);

return statearr_36983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36968__$1,inst_36966);
} else {
if((state_val_36969 === (2))){
var inst_36870 = cljs.core.deref.call(null,cities.core.doc);
var inst_36871 = side.call(null,inst_36870);
var inst_36872 = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(inst_36871);
var inst_36873 = cljs.core.deref.call(null,cities.core.doc);
var inst_36874 = new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(inst_36873);
var inst_36875 = cljs.core.deref.call(null,cities.core.doc);
var inst_36876 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(inst_36875);
var inst_36877 = cljs.core.deref.call(null,cities.core.doc);
var inst_36878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36879 = [new cljs.core.Keyword(null,"period-type","period-type",2061129595),new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)];
var inst_36880 = (new cljs.core.PersistentVector(null,2,(5),inst_36878,inst_36879,null));
var inst_36881 = cljs.core.select_keys.call(null,inst_36877,inst_36880);
var inst_36882 = cities.core.get_period.call(null,inst_36881);
var inst_36883 = cities.core.get_chart.call(null,inst_36872,new cljs.core.Keyword(null,"freq","freq",-1855845278),inst_36874,inst_36876,inst_36882);
var state_36968__$1 = state_36968;
var statearr_36984_37009 = state_36968__$1;
(statearr_36984_37009[(2)] = inst_36883);

(statearr_36984_37009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (11))){
var inst_36864 = (state_36968[(7)]);
var inst_36955 = inst_36864.hasChildNodes();
var state_36968__$1 = state_36968;
if(cljs.core.truth_(inst_36955)){
var statearr_36985_37010 = state_36968__$1;
(statearr_36985_37010[(1)] = (13));

} else {
var statearr_36986_37011 = state_36968__$1;
(statearr_36986_37011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (9))){
var state_36968__$1 = state_36968;
var statearr_36987_37012 = state_36968__$1;
(statearr_36987_37012[(2)] = null);

(statearr_36987_37012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (5))){
var inst_36864 = (state_36968[(7)]);
var inst_36887 = cljs.core.PersistentHashMap.EMPTY;
var inst_36892 = (function (){var n = inst_36864;
return ((function (n,inst_36864,inst_36887,state_val_36969,c__30106__auto__,setup){
return (function iter__36888(s__36889){
return (new cljs.core.LazySeq(null,((function (n,inst_36864,inst_36887,state_val_36969,c__30106__auto__,setup){
return (function (){
var s__36889__$1 = s__36889;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36889__$1);
if(temp__4126__auto__){
var s__36889__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36889__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__36889__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__36891 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__36890 = (0);
while(true){
if((i__36890 < size__28943__auto__)){
var side__$1 = cljs.core._nth.call(null,c__28942__auto__,i__36890);
cljs.core.chunk_append.call(null,b__36891,(function (){var cities_map = cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)], null));
var city_code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(side__$1.call(null,cljs.core.deref.call(null,cities.core.doc)));
var city = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,city_code));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_code,city], null);
})());

var G__37013 = (i__36890 + (1));
i__36890 = G__37013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36891),iter__36888.call(null,cljs.core.chunk_rest.call(null,s__36889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36891),null);
}
} else {
var side__$1 = cljs.core.first.call(null,s__36889__$2);
return cljs.core.cons.call(null,(function (){var cities_map = cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)], null));
var city_code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(side__$1.call(null,cljs.core.deref.call(null,cities.core.doc)));
var city = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,city_code));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_code,city], null);
})(),iter__36888.call(null,cljs.core.rest.call(null,s__36889__$2)));
}
} else {
return null;
}
break;
}
});})(n,inst_36864,inst_36887,state_val_36969,c__30106__auto__,setup))
,null,null));
});
;})(n,inst_36864,inst_36887,state_val_36969,c__30106__auto__,setup))
})();
var inst_36893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36894 = [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)];
var inst_36895 = (new cljs.core.PersistentVector(null,2,(5),inst_36893,inst_36894,null));
var inst_36896 = inst_36892.call(null,inst_36895);
var inst_36897 = cljs.core.into.call(null,inst_36887,inst_36896);
var inst_36898 = cljs.core.deref.call(null,cities.core.doc);
var inst_36899 = new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(inst_36898);
var inst_36900 = cljs.core.deref.call(null,cities.core.doc);
var inst_36901 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(inst_36900);
var inst_36902 = cljs.core.deref.call(null,cities.core.doc);
var inst_36903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36904 = [new cljs.core.Keyword(null,"period-type","period-type",2061129595),new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)];
var inst_36905 = (new cljs.core.PersistentVector(null,2,(5),inst_36903,inst_36904,null));
var inst_36906 = cljs.core.select_keys.call(null,inst_36902,inst_36905);
var inst_36907 = cities.core.get_period.call(null,inst_36906);
var inst_36908 = cities.core.get_comparison_chart.call(null,inst_36897,new cljs.core.Keyword(null,"freq","freq",-1855845278),inst_36899,inst_36901,inst_36907);
var state_36968__$1 = state_36968;
var statearr_36988_37014 = state_36968__$1;
(statearr_36988_37014[(2)] = inst_36908);

(statearr_36988_37014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (14))){
var state_36968__$1 = state_36968;
var statearr_36989_37015 = state_36968__$1;
(statearr_36989_37015[(2)] = null);

(statearr_36989_37015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (10))){
var inst_36949 = (state_36968[(2)]);
var state_36968__$1 = state_36968;
var statearr_36990_37016 = state_36968__$1;
(statearr_36990_37016[(2)] = inst_36949);

(statearr_36990_37016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36969 === (8))){
var inst_36864 = (state_36968[(7)]);
var inst_36912 = cljs.core.deref.call(null,cities.core.doc);
var inst_36913 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(inst_36912);
var inst_36914 = cljs.core.deref.call(null,cities.core.doc);
var inst_36915 = new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(inst_36914);
var inst_36916 = [new cljs.core.Keyword(null,"column-name","column-name",551523580),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"val","val",128701612)];
var inst_36917 = cities.core.char_to_key.call(null,inst_36915);
var inst_36918 = cljs.core.deref.call(null,cities.core.doc);
var inst_36919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36920 = [new cljs.core.Keyword(null,"period-type","period-type",2061129595),new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)];
var inst_36921 = (new cljs.core.PersistentVector(null,2,(5),inst_36919,inst_36920,null));
var inst_36922 = cljs.core.select_keys.call(null,inst_36918,inst_36921);
var inst_36923 = cities.core.get_period.call(null,inst_36922);
var inst_36924 = [inst_36917,inst_36923,inst_36913];
var inst_36925 = cljs.core.PersistentHashMap.fromArrays(inst_36916,inst_36924);
var inst_36926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36927 = [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)];
var inst_36928 = (new cljs.core.PersistentVector(null,1,(5),inst_36926,inst_36927,null));
var inst_36929 = cities.core.get_data.call(null,inst_36928);
var inst_36930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36931 = [new cljs.core.Keyword(null,"proportions","proportions",-135582411),inst_36925];
var inst_36932 = (new cljs.core.PersistentVector(null,2,(5),inst_36930,inst_36931,null));
var inst_36933 = cities.core.get_data.call(null,inst_36932);
var inst_36934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36935 = [new cljs.core.Keyword(null,"colors","colors",1157174732),inst_36925];
var inst_36936 = (new cljs.core.PersistentVector(null,2,(5),inst_36934,inst_36935,null));
var inst_36937 = cities.core.get_data.call(null,inst_36936);
var inst_36942 = (function (){var colors = inst_36937;
var proportions = inst_36933;
var cities_map = inst_36929;
var profile = inst_36925;
var char$ = inst_36915;
var val = inst_36913;
var n = inst_36864;
return ((function (colors,proportions,cities_map,profile,char$,val,n,inst_36864,inst_36912,inst_36913,inst_36914,inst_36915,inst_36916,inst_36917,inst_36918,inst_36919,inst_36920,inst_36921,inst_36922,inst_36923,inst_36924,inst_36925,inst_36926,inst_36927,inst_36928,inst_36929,inst_36930,inst_36931,inst_36932,inst_36933,inst_36934,inst_36935,inst_36936,inst_36937,state_val_36969,c__30106__auto__,setup){
return (function iter__36938(s__36939){
return (new cljs.core.LazySeq(null,((function (colors,proportions,cities_map,profile,char$,val,n,inst_36864,inst_36912,inst_36913,inst_36914,inst_36915,inst_36916,inst_36917,inst_36918,inst_36919,inst_36920,inst_36921,inst_36922,inst_36923,inst_36924,inst_36925,inst_36926,inst_36927,inst_36928,inst_36929,inst_36930,inst_36931,inst_36932,inst_36933,inst_36934,inst_36935,inst_36936,inst_36937,state_val_36969,c__30106__auto__,setup){
return (function (){
var s__36939__$1 = s__36939;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36939__$1);
if(temp__4126__auto__){
var s__36939__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36939__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__36939__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__36941 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__36940 = (0);
while(true){
if((i__36940 < size__28943__auto__)){
var city = cljs.core._nth.call(null,c__28942__auto__,i__36940);
cljs.core.chunk_append.call(null,b__36941,(function (){var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var or__28188__auto__ = proportions.call(null,code);
if(cljs.core.truth_(or__28188__auto__)){
return or__28188__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),((10) * Math.sqrt.call(null,new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city))),new cljs.core.Keyword(null,"color","color",1011675173),colors.call(null,code),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null);
})());

var G__37017 = (i__36940 + (1));
i__36940 = G__37017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36941),iter__36938.call(null,cljs.core.chunk_rest.call(null,s__36939__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36941),null);
}
} else {
var city = cljs.core.first.call(null,s__36939__$2);
return cljs.core.cons.call(null,(function (){var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var or__28188__auto__ = proportions.call(null,code);
if(cljs.core.truth_(or__28188__auto__)){
return or__28188__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),((10) * Math.sqrt.call(null,new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city))),new cljs.core.Keyword(null,"color","color",1011675173),colors.call(null,code),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null);
})(),iter__36938.call(null,cljs.core.rest.call(null,s__36939__$2)));
}
} else {
return null;
}
break;
}
});})(colors,proportions,cities_map,profile,char$,val,n,inst_36864,inst_36912,inst_36913,inst_36914,inst_36915,inst_36916,inst_36917,inst_36918,inst_36919,inst_36920,inst_36921,inst_36922,inst_36923,inst_36924,inst_36925,inst_36926,inst_36927,inst_36928,inst_36929,inst_36930,inst_36931,inst_36932,inst_36933,inst_36934,inst_36935,inst_36936,inst_36937,state_val_36969,c__30106__auto__,setup))
,null,null));
});
;})(colors,proportions,cities_map,profile,char$,val,n,inst_36864,inst_36912,inst_36913,inst_36914,inst_36915,inst_36916,inst_36917,inst_36918,inst_36919,inst_36920,inst_36921,inst_36922,inst_36923,inst_36924,inst_36925,inst_36926,inst_36927,inst_36928,inst_36929,inst_36930,inst_36931,inst_36932,inst_36933,inst_36934,inst_36935,inst_36936,inst_36937,state_val_36969,c__30106__auto__,setup))
})();
var inst_36943 = cljs.core.vals.call(null,inst_36929);
var inst_36944 = inst_36942.call(null,inst_36943);
var inst_36945 = cljs.core.vec.call(null,inst_36944);
var inst_36946 = cities.core.get_scatter_chart.call(null,inst_36929,inst_36915,inst_36913,inst_36933,inst_36937,inst_36945);
var state_36968__$1 = state_36968;
var statearr_36991_37018 = state_36968__$1;
(statearr_36991_37018[(2)] = inst_36946);

(statearr_36991_37018[(1)] = (10));


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
});})(c__30106__auto__,setup))
;
return ((function (switch__30091__auto__,c__30106__auto__,setup){
return (function() {
var state_machine__30092__auto__ = null;
var state_machine__30092__auto____0 = (function (){
var statearr_36995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36995[(0)] = state_machine__30092__auto__);

(statearr_36995[(1)] = (1));

return statearr_36995;
});
var state_machine__30092__auto____1 = (function (state_36968){
while(true){
var ret_value__30093__auto__ = (function (){try{while(true){
var result__30094__auto__ = switch__30091__auto__.call(null,state_36968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30094__auto__;
}
break;
}
}catch (e36996){if((e36996 instanceof Object)){
var ex__30095__auto__ = e36996;
var statearr_36997_37019 = state_36968;
(statearr_36997_37019[(5)] = ex__30095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37020 = state_36968;
state_36968 = G__37020;
continue;
} else {
return ret_value__30093__auto__;
}
break;
}
});
state_machine__30092__auto__ = function(state_36968){
switch(arguments.length){
case 0:
return state_machine__30092__auto____0.call(this);
case 1:
return state_machine__30092__auto____1.call(this,state_36968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30092__auto____0;
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30092__auto____1;
return state_machine__30092__auto__;
})()
;})(switch__30091__auto__,c__30106__auto__,setup))
})();
var state__30108__auto__ = (function (){var statearr_36998 = f__30107__auto__.call(null);
(statearr_36998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30106__auto__);

return statearr_36998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30108__auto__);
});})(c__30106__auto__,setup))
);

return c__30106__auto__;
});})(setup))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),setup,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),do_render_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),do_render_BANG_], null));
});
cities.core.tile_url = "//{s}.tiles.mapbox.com/v3/jcheng.map-5ebohr46/{z}/{x}/{y}.png";
cities.core.attribution = "Maps by <a href=\"http://www.mapbox.com/\">Mapbox</a>";
cities.core.create_map = (function create_map(p__37022){
var map__37024 = p__37022;
var map__37024__$1 = ((cljs.core.seq_QMARK_.call(null,map__37024))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var zoom = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var latlng = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"latlng","latlng",-199468611));
var id = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var m = L.map(id).setView([new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(latlng),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(latlng)],zoom);
var tiles = L.tileLayer(cities.core.tile_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(16),new cljs.core.Keyword(null,"attribution","attribution",1937239286),cities.core.attribution], null));
tiles.addTo(m);

cljs.core.swap_BANG_.call(null,cities.core.app_state,((function (m,tiles,map__37024,map__37024__$1,zoom,latlng,id){
return (function (p1__37021_SHARP_){
return cljs.core.assoc.call(null,p1__37021_SHARP_,new cljs.core.Keyword(null,"map","map",1371690461),m);
});})(m,tiles,map__37024,map__37024__$1,zoom,latlng,id))
);

return m;
});
cities.core.drop_circle = (function drop_circle(map1,place,color){
var circle = L.circle(cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"latlng","latlng",-199468611).cljs$core$IFn$_invoke$arity$1(place)))),((10) * Math.sqrt.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(place))),{"weight": (2), "color": (function (){var or__28188__auto__ = color;
if(cljs.core.truth_(or__28188__auto__)){
return or__28188__auto__;
} else {
return "#333333";
}
})()}).addTo(map1);
circle.on("click",((function (circle){
return (function (e){
return cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(place));
});})(circle))
);

circle.on("contextmenu",((function (circle){
return (function (e){
return cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(place));
});})(circle))
);

return cljs.core.swap_BANG_.call(null,cities.core.app_state,((function (circle){
return (function (p1__37025_SHARP_){
return cljs.core.update_in.call(null,p1__37025_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null),cljs.core.partial.call(null,cljs.core.cons,circle));
});})(circle))
);
});
cities.core.remove_circle = (function remove_circle(map1,circle){
return map1.removeLayer(circle);
});
cities.core.map_component = (function map_component(id){
var setup = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(1100),new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),id,new cljs.core.Keyword(null,"ref","ref",1289896967),id,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});
var do_render_BANG_ = ((function (setup){
return (function (){
var m = cities.core.create_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"latlng","latlng",-199468611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),(32),new cljs.core.Keyword(null,"lng","lng",1667213918),(35)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(9)], null));
return null;
});})(setup))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),setup,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),do_render_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),do_render_BANG_], null));
});
cities.core.city_component = (function city_component(side,deref_doc){
var cities_map = cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)], null));
var city_code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.doc)));
var city = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,city_code));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"25%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(deref_doc)], null),(function (){var G__37027 = (((side instanceof cljs.core.Keyword))?side.fqn:null);
switch (G__37027) {
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"(\u05D1\u05D7\u05D9\u05E8\u05D4 \u05D1\u05DE\u05E4\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DC\u05D7\u05D9\u05E6\u05EA \u05E2\u05DB\u05D1\u05E8 \u05E9\u05DE\u05D0\u05DC\u05D9\u05EA)"], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"(\u05D1\u05D7\u05D9\u05E8\u05D4 \u05D1\u05DE\u05E4\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DC\u05D7\u05D9\u05E6\u05EA \u05E2\u05DB\u05D1\u05E8 \u05D9\u05DE\u05E0\u05D9\u05EA)"], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(side)].join('')));

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chart_component,[cljs.core.str("chart_"),cljs.core.str(cljs.core.name.call(null,side))].join(''),side,deref_doc], null)], null)], null);
});
cities.core.render_cities_BANG_ = (function render_cities_BANG_(themap,colors){
var cities__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"freq","freq",-1855845278),cljs.core.vals.call(null,cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)], null))));
var temp__4124__auto___37045 = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));
if(cljs.core.truth_(temp__4124__auto___37045)){
var circles_37046 = temp__4124__auto___37045;
var seq__37037_37047 = cljs.core.seq.call(null,circles_37046);
var chunk__37038_37048 = null;
var count__37039_37049 = (0);
var i__37040_37050 = (0);
while(true){
if((i__37040_37050 < count__37039_37049)){
var circle_37051 = cljs.core._nth.call(null,chunk__37038_37048,i__37040_37050);
cities.core.remove_circle.call(null,themap,circle_37051);

var G__37052 = seq__37037_37047;
var G__37053 = chunk__37038_37048;
var G__37054 = count__37039_37049;
var G__37055 = (i__37040_37050 + (1));
seq__37037_37047 = G__37052;
chunk__37038_37048 = G__37053;
count__37039_37049 = G__37054;
i__37040_37050 = G__37055;
continue;
} else {
var temp__4126__auto___37056 = cljs.core.seq.call(null,seq__37037_37047);
if(temp__4126__auto___37056){
var seq__37037_37057__$1 = temp__4126__auto___37056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37037_37057__$1)){
var c__28975__auto___37058 = cljs.core.chunk_first.call(null,seq__37037_37057__$1);
var G__37059 = cljs.core.chunk_rest.call(null,seq__37037_37057__$1);
var G__37060 = c__28975__auto___37058;
var G__37061 = cljs.core.count.call(null,c__28975__auto___37058);
var G__37062 = (0);
seq__37037_37047 = G__37059;
chunk__37038_37048 = G__37060;
count__37039_37049 = G__37061;
i__37040_37050 = G__37062;
continue;
} else {
var circle_37063 = cljs.core.first.call(null,seq__37037_37057__$1);
cities.core.remove_circle.call(null,themap,circle_37063);

var G__37064 = cljs.core.next.call(null,seq__37037_37057__$1);
var G__37065 = null;
var G__37066 = (0);
var G__37067 = (0);
seq__37037_37047 = G__37064;
chunk__37038_37048 = G__37065;
count__37039_37049 = G__37066;
i__37040_37050 = G__37067;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__37041 = cljs.core.seq.call(null,cities__$1);
var chunk__37042 = null;
var count__37043 = (0);
var i__37044 = (0);
while(true){
if((i__37044 < count__37043)){
var city = cljs.core._nth.call(null,chunk__37042,i__37044);
var size_37068 = new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city);
var place_37069 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latlng","latlng",-199468611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),size_37068,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)], null);
cities.core.drop_circle.call(null,themap,place_37069,colors.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)));

var G__37070 = seq__37041;
var G__37071 = chunk__37042;
var G__37072 = count__37043;
var G__37073 = (i__37044 + (1));
seq__37041 = G__37070;
chunk__37042 = G__37071;
count__37043 = G__37072;
i__37044 = G__37073;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__37041);
if(temp__4126__auto__){
var seq__37041__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37041__$1)){
var c__28975__auto__ = cljs.core.chunk_first.call(null,seq__37041__$1);
var G__37074 = cljs.core.chunk_rest.call(null,seq__37041__$1);
var G__37075 = c__28975__auto__;
var G__37076 = cljs.core.count.call(null,c__28975__auto__);
var G__37077 = (0);
seq__37041 = G__37074;
chunk__37042 = G__37075;
count__37043 = G__37076;
i__37044 = G__37077;
continue;
} else {
var city = cljs.core.first.call(null,seq__37041__$1);
var size_37078 = new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city);
var place_37079 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latlng","latlng",-199468611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),size_37078,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)], null);
cities.core.drop_circle.call(null,themap,place_37079,colors.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)));

var G__37080 = cljs.core.next.call(null,seq__37041__$1);
var G__37081 = null;
var G__37082 = (0);
var G__37083 = (0);
seq__37041 = G__37080;
chunk__37042 = G__37081;
count__37043 = G__37082;
i__37044 = G__37083;
continue;
}
} else {
return null;
}
}
break;
}
});
cities.core.help_button = (function help_button(show_help_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#99dd99"], null),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(cljs.core.deref.call(null,show_help_QMARK_))?"\u05DC\u05D4\u05E1\u05EA\u05D9\u05E8 \u05D4\u05E1\u05D1\u05E8?":"\u05DC\u05D4\u05E6\u05D9\u05D2 \u05D4\u05E1\u05D1\u05E8?"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,show_help_QMARK_,cljs.core.not);
})], null)], null)], null);
});
cities.core.help = new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#dddddd"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E1\u05D9\u05D5\u05DD \u05D1\u05E7\u05D5\u05E8\u05E1 \"\u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9\u05D6\u05E6\u05D9\u05D4 \u05E9\u05DC \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD\""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u05D1\u05D4\u05E0\u05D7\u05D9\u05D9\u05EA \u05E4\u05E8\u05D5\u05E4' \u05D9\u05D5\u05D0\u05D1 \u05D1\u05E0\u05D9\u05DE\u05D9\u05E0\u05D9 \u05D5\u05E9\u05D9 \u05D9\u05E2\u05E7\u05D1\u05D9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u05DE\u05D2\u05D9\u05E9\u05D9\u05DD: \u05E8\u05D5\u05E2\u05D9 \u05D2\u05E8\u05E0\u05D5\u05EA \u05D5\u05D3\u05E0\u05D9\u05D0\u05DC \u05E1\u05DC\u05D5\u05E6\u05E7\u05D9, \u05E1\u05E4\u05D8\u05DE\u05D1\u05E8 2014"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"~~~"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D6\u05D4 \u05DE\u05E6\u05D9\u05E2 \u05DB\u05DE\u05D4 \u05D3\u05E8\u05DB\u05D9\u05DD \u05DC\u05D4\u05EA\u05D1\u05D5\u05E0\u05DF \u05D1\u05EA\u05E0\u05D5\u05E2\u05D4 \u05E9\u05DC \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4 \u05D0\u05DC \u05E2\u05E8\u05D9\u05DD \u05E9\u05D5\u05E0\u05D5\u05EA \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05E0\u05D9\u05DD.\n\u05D4\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05DE\u05E4\u05E7\u05D3 \u05D4\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05DF \u05E9\u05DC 2008."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u05DE\u05D5\u05D8\u05D9\u05D1\u05E6\u05D9\u05D4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05E7\u05D5\u05D1\u05E5 \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05DB\u05D9\u05DC \u05D1\u05D9\u05DF \u05D4\u05E9\u05D0\u05E8 \u05E9\u05D9\u05D5\u05DA \u05E9\u05DC \u05D4\u05E0\u05E9\u05D0\u05DC\u05D9\u05DD \u05DC\u05DE\u05E7\u05D5\u05DD \u05D9\u05D9\u05E9\u05D5\u05D1, \u05DC\u05D3\u05EA \u05D5\u05DC\u05DE\u05D5\u05E6\u05D0. \u05D4\u05D5\u05D0 \u05DE\u05DB\u05D9\u05DC \u05D2\u05DD \u05EA\u05E9\u05D5\u05D1\u05D4 \u05DC\u05E9\u05D0\u05DC\u05D4 \u05D4\u05D1\u05D0\u05D4:\n\u05D1\u05D0\u05D9\u05D6\u05D5 \u05E9\u05E0\u05D4 \u05E2\u05D1\u05E8\u05EA \u05DC\u05D2\u05D5\u05E8 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9? (\u05D4\u05EA\u05E9\u05D5\u05D1\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E6\u05EA \u05DC\u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05E9\u05DC \u05DB\u05BE10 \u05E9\u05E0\u05D9\u05DD).\n\u05DE\u05D9\u05D3\u05E2 \u05D6\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D1\u05D7\u05D5\u05DF \u05DE\u05E2\u05D9\u05DF '\u05E9\u05DB\u05D1\u05D5\u05EA \u05D0\u05E8\u05DB\u05D0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA' \u05E9\u05DC \u05D4\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D5\u05EA \u05E9\u05D4\u05D2\u05D9\u05E2\u05D5\n\u05DC\u05D9\u05D9\u05E9\u05D5\u05D1 \u05E0\u05EA\u05D5\u05DF \u05D1\u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D9\u05E9 \u05DB\u05D0\u05DF, \u05D0\u05DD \u05DB\u05DF, \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E8\u05D1\u05BE\u05DE\u05D9\u05DE\u05D3\u05D9\u05D9\u05DD \u05E9\u05DC \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9 \u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4, \u05D4\u05DE\u05E9\u05EA\u05E0\u05D9\u05DD \u05E2\u05DC \u05E4\u05E0\u05D9\n\u05D4\u05DE\u05E8\u05D7\u05D1 \u05D4\u05D2\u05D0\u05D5\u05D2\u05E8\u05E4\u05D9 \u05D5\u05DC\u05D0\u05D5\u05E8\u05DA \u05D6\u05DE\u05DF."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D3\u05E8\u05DA \u05D0\u05D7\u05EA \u05D0\u05E4\u05E9\u05E8\u05D9\u05EA \u05DC\u05D4\u05E6\u05D9\u05D2 \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05D9\u05DF \u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05D4\u05D9\u05D0 \u05DB\u05DE\u05D5\u05D1\u05DF \u05EA\u05E6\u05D5\u05D2\u05D4 \u05E9\u05D2\u05E8\u05EA\u05D9\u05EA \u05E9\u05DC\n    \u05E1\u05D3\u05E8\u05D5\u05EA \u05E2\u05EA\u05D9\u05D5\u05EA, \u05D1\u05D4 \u05D0\u05D7\u05D3 \u05D4\u05E6\u05D9\u05E8\u05D9\u05DD \u05D4\u05D5\u05D0 \u05E6\u05D9\u05E8 \u05D4\u05D6\u05DE\u05DF. \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05DE\u05E6\u05D9\u05E2 \u05D3\u05E8\u05DA\n    \u05EA\u05E6\u05D5\u05D2\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA, \u05D1\u05EA\u05E0\u05D5\u05E2\u05D4 \u05D4\u05E0\u05E9\u05DC\u05D8\u05EA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9/\u05EA. \u05D3\u05E8\u05DA \u05D6\u05D5 \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05D4\u05E7\u05DC \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05DE\u05D9\u05DD \u05E2\u05DC \u05D4\u05EA\u05E4\u05D9\u05E9\u05D4 \u05E9\u05DC \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E9\u05D9\u05E0\u05D5\u05D9 \u05E8\u05D1\u05BE\u05DE\u05D9\u05DE\u05D3\u05D9\u05D9\u05DD."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05DB\u05E2\u05EA \u05E0\u05E6\u05D9\u05D2 \u05D0\u05EA \u05D0\u05D5\u05E4\u05DF \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E2\u05DE\u05D5\u05D3."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D1\u05D7\u05D9\u05E8\u05D4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D1\u05E8\u05D0\u05E9 \u05D4\u05E2\u05DE\u05D5\u05D3 \u05D9\u05E9 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D1\u05D7\u05D5\u05E8 \u05DB\u05DE\u05D4 \u05D1\u05D7\u05D9\u05E8\u05D5\u05EA:"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"\u05D0. \u05DE\u05D4\u05D5 \u05DE\u05D0\u05E4\u05D9\u05D9\u05DF\n \u05D4\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4 \u05E9\u05E0\u05E0\u05EA\u05D7? \u05D1\u05EA\u05E6\u05D5\u05D2\u05D4 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9\u05EA \u05D4\u05EA\u05DE\u05E7\u05D3\u05E0\u05D5 \u05D1\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD (\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D0\u05DC\u05D9\u05D9\u05DD)\n \u05D0\u05E4\u05E9\u05E8\u05D9\u05D9\u05DD: \u05DE\u05D5\u05E6\u05D0 \u05D5\u05D3\u05EA. \u05D0\u05DC\u05D4 \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD \u05D9\u05D7\u05E1\u05D9\u05EA, \u05E9\u05D1\u05D4\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E0\u05D9\u05D7 \u05E9\u05EA\u05E9\u05D5\u05D1\u05EA\n \u05D4\u05E0\u05E9\u05D0\u05DC/\u05EA \u05D1\u05E2\u05EA \u05D4\u05DE\u05E4\u05E7\u05D3 \u05DE\u05E2\u05D9\u05D3\u05D4 \u05D2\u05DD \u05E2\u05DC \u05DE\u05E6\u05D1\u05D5/\u05D4 \u05D1\u05E2\u05EA \u05D4\u05DE\u05E2\u05D1\u05E8 \u05DC\u05D2\u05D5\u05E8 \u05D1\u05D9\u05D9\u05E9\u05D5\u05D1."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)," \u05D1. \u05D1\u05D0\u05D9\u05D6\u05D4 \u05E2\u05E8\u05DA \u05E9\u05DC \u05DE\u05D0\u05E4\u05D9\u05D9\u05DF \u05D6\u05D4 \u05E0\u05EA\u05DE\u05E7\u05D3? \u05D9\u05E9\n \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D0\u05D7\u05D3 \u05DE\u05D4\u05E2\u05E8\u05DB\u05D9\u05DD (\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4 '\u05DE\u05D5\u05E1\u05DC\u05DE\u05D9' \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF \u05D4\u05D3\u05EA). \u05E2\u05E8\u05DA \u05D6\u05D4 \u05D9\u05E7\u05D1\u05DC\n \u05D4\u05EA\u05D9\u05D7\u05E1\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA \u05D1\u05D9\u05D9\u05E6\u05D5\u05D2 \u05D4\u05D7\u05D6\u05D5\u05EA\u05D9."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"\u05D2. \u05D0\u05D9\u05D6\u05D5 \u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4 \u05DC\u05E0\u05EA\u05D7? \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D0\u05D7\u05EA \u05D4\u05D9\u05D0 \u05DC\u05E0\u05EA\u05D7 \u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA\n    \u05D4\u05E9\u05D5\u05E0\u05D5\u05EA \u05D1\u05E7\u05E8\u05D1 \u05DB\u05DC \u05D4\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4.\n \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05EA \u05D4\u05D9\u05D0 \u05DC\u05D4\u05E6\u05D8\u05DE\u05E6\u05DD \u05DC\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05E9\u05E0\u05DB\u05E0\u05E1\u05D5 \u05DC\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD (\u05E9\u05D1\u05D4\u05DD \u05D2\u05E8\u05D5\n \u05D1\u05E2\u05EA \u05D4\u05DE\u05E4\u05E7\u05D3) \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"\u05D3. \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05D1\u05D7\u05E8\u05E0\u05D5 \u05DC\u05D4\u05E6\u05D8\u05DE\u05E6\u05DD \u05DC\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4\n \u05E9\u05DC \u05DE\u05D9 \u05E9\u05E0\u05DB\u05E0\u05E1\u05D5 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA, \u05D9\u05E9 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D0\u05EA \u05D4\u05EA\u05E7\u05D5\u05E4\u05D4 (\u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D4\u05EA\u05E7\u05D5\u05E4\u05D4 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05D0\u05D5 \u05D1\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E2\u05DC \u05D4\u05E1\u05E8\u05D2\u05DC (slider))."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"\u05DB\u05DE\u05D5 \u05DB\u05DF, \u05D9\u05E9 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05E9\u05E0\u05D9 \u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD \u05E9\u05D1\u05D4\u05DD \u05E0\u05EA\u05DE\u05E7\u05D3. \u05D9\u05D9\u05E9\u05D5\u05D1 \u05D0\u05D7\u05D3 \u05E0\u05D1\u05D7\u05E8 \u05D1\u05DC\u05D7\u05D9\u05E6\u05EA \u05E2\u05DB\u05D1\u05E8 \u05D9\u05DE\u05E0\u05D9\u05EA \u05E2\u05DC \u05D4\u05E2\u05D9\u05D2\u05D5\u05DC \u05D4\u05DE\u05EA\u05D0\u05D9\u05DD \u05D1\u05DE\u05E4\u05D4, \u05D5\u05D0\u05EA \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1 \u05D4\u05E9\u05E0\u05D9 \u05BE\u05BE \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E9\u05DE\u05D0\u05DC\u05D9\u05EA."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05DB\u05E2\u05EA \u05E0\u05E1\u05D1\u05D9\u05E8 \u05D0\u05EA \u05D4\u05EA\u05D5\u05E6\u05E8 \u05D4\u05D7\u05D6\u05D5\u05EA\u05D9 \u05E9\u05DC \u05D4\u05D1\u05D7\u05D9\u05E8\u05D5\u05EA \u05D4\u05DC\u05DC\u05D5."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u05D4\u05EA\u05E6\u05D5\u05D2\u05D4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," \u05DC\u05DB\u05DC \u05D9\u05D9\u05E9\u05D5\u05D1 \u05DE\u05EA\u05D0\u05D9\u05DD \u05E6\u05D1\u05E2, \u05D4\u05DE\u05D9\u05D9\u05E6\u05D2 \u05D0\u05EA \u05D4\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA \u05D4\u05D9\u05D7\u05E1\u05D9\u05EA \u05E9\u05DC \u05D4\u05E2\u05E8\u05DA \u05D4\u05E0\u05D1\u05D7\u05E8 \u05D1\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4 \u05D4\u05E0\u05D1\u05D3\u05E7\u05EA \u05D1\u05D9\u05D9\u05E9\u05D5\u05D1 \u05D6\u05D4.\n    \u05DB\u05DB\u05DC \u05E9\u05D4\u05E6\u05D1\u05E2 \u05D0\u05D3\u05D5\u05DD \u05D9\u05D5\u05EA\u05E8 \u05D5\u05DB\u05D7\u05D5\u05DC \u05E4\u05D7\u05D5\u05EA, \u05D4\u05E2\u05E8\u05DA \u05E9\u05DB\u05D9\u05D7 \u05D9\u05D5\u05EA\u05E8 \u05D1\u05D9\u05D9\u05E9\u05D5\u05D1 \u05D6\u05D4, \u05D1\u05D0\u05D5\u05E4\u05DF \u05D9\u05D7\u05E1\u05D9 \u05DC\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD.\n    \u05D4\u05E9\u05EA\u05DE\u05E9\u05E0\u05D5 \u05D1\u05E1\u05E8\u05D2\u05DC \u05E9\u05DC \u05E6\u05D1\u05E2\u05D9\u05DD \u05DE\u05DB\u05D7\u05D5\u05DC \u05DC\u05D0\u05D3\u05D5\u05DD \u05E2\u05DD \u05DE\u05D3\u05D4 \u05E7\u05D1\u05D5\u05E2\u05D4 \u05E9\u05DC \u05DB\u05D4\u05D5\u05EA, \u05D1\u05DB\u05D5\u05D5\u05E0\u05D4 \u05DC\u05E7\u05D1\u05DC \u05D4\u05D1\u05D7\u05E0\u05D4 \u05D7\u05D6\u05D5\u05EA\u05D9\u05EA \u05E1\u05D1\u05D9\u05E8\u05D4 \u05D1\u05D9\u05DF \u05D4\u05E2\u05E8\u05DB\u05D9\u05DD \u05D4\u05E9\u05D5\u05E0\u05D9\u05DD, \u05DE\u05D1\u05DC\u05D9 \u05E9\u05D7\u05DC\u05E7 \u05DE\u05D4\u05DD \u05D9\u05D1\u05DC\u05D8\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA \u05D1\u05D9\u05D7\u05E1 \u05DC\u05E8\u05E7\u05E2.\n    \u05DE\u05D9\u05E4\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D5\u05E4\u05D5\u05E8\u05E6\u05D9\u05D5\u05EA \u05DC\u05E6\u05D1\u05E2\u05D9\u05DD \u05DB\u05DA \u05E9\u05D4\u05E6\u05D1\u05E2\u05D9\u05DD \u05D9\u05EA\u05E4\u05DC\u05D2\u05D5 \u05D1\u05D0\u05D7\u05D9\u05D3\u05D5\u05EA \u05E2\u05DC \u05E4\u05E0\u05D9 \u05D4\u05E1\u05E8\u05D2\u05DC (\u05D1\u05E7\u05E8\u05D1 \u05D4\u05DE\u05E7\u05E8\u05D9\u05DD \u05E9\u05D1\u05D4\u05DD \u05D4\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA \u05D0\u05D9\u05E0\u05D4 \u05D0\u05E4\u05E1). \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4 \u05D6\u05D5 \u05D9\u05E9 \u05D7\u05E1\u05E8\u05D5\u05DF \u05BE\u05BE \u05D4\u05DE\u05D9\u05E4\u05D5\u05D9 \u05D1\u05D9\u05DF \u05E4\u05E8\u05D5\u05E4\u05D5\u05E8\u05E6\u05D9\u05D5\u05EA \u05DC\u05E6\u05D1\u05E2\u05D9\u05DD \u05EA\u05DC\u05D5\u05D9 \u05D1\u05D7\u05EA\u05DA \u05D4\u05E0\u05D1\u05D3\u05E7, \u05D5\u05D0\u05D9\u05DF \u05E4\u05E8\u05E9\u05E0\u05D5\u05EA \u05D0\u05D5\u05E0\u05D9\u05D1\u05E8\u05E1\u05DC\u05D9\u05EA \u05DC\u05E6\u05D1\u05E2\u05D9\u05DD. \u05DE\u05E6\u05D3 \u05E9\u05E0\u05D9, \u05E2\u05DC \u05E4\u05D9 \u05E0\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA\u05D9\u05E0\u05D5, \u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D1\u05E1\u05D5\u05DC\u05D5\u05D8\u05D9\u05EA \u05D4\u05D9\u05EA\u05D4 \u05D9\u05D5\u05E6\u05E8\u05EA \u05DE\u05D9\u05E4\u05D5\u05D9 \u05E9\u05E7\u05E9\u05D4 \u05DE\u05D0\u05D3 \u05DC\u05D4\u05D1\u05D7\u05D9\u05DF \u05D1\u05D4\u05D1\u05D3\u05DC\u05D9\u05DD \u05E9\u05D1\u05D5, \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05D1\u05D9\u05D3\u05E0\u05D5."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D4\u05E2\u05D9\u05D2\u05D5\u05DC\u05D9\u05DD \u05D1\u05DE\u05E4\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD \u05DB\u05D0\u05DE\u05D5\u05E8 \u05DC\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD. \u05E9\u05D8\u05D7\u05D9 \u05D4\u05E2\u05D9\u05D2\u05D5\u05DC\u05D9\u05DD \u05E4\u05E8\u05D5\u05E4\u05D5\u05E8\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9\u05D9\u05DD\n    \u05DC\u05D2\u05D3\u05DC\u05D9 \u05D4\u05DE\u05D3\u05D2\u05DE\u05D9\u05DD \u05DE\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D1\u05DE\u05E4\u05E7\u05D3. \u05D4\u05E6\u05D1\u05E2\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD \u05DB\u05E4\u05D9 \u05E9\u05D4\u05E1\u05D1\u05E8\u05E0\u05D5\n    \u05DC\u05E2\u05D9\u05DC (\u05D0\u05E4\u05D5\u05E8 \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05E0\u05EA\u05D5\u05DF \u05D7\u05E1\u05E8). \u05EA\u05E6\u05D5\u05D2\u05D4 \u05D6\u05D5 \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DE\u05D1\u05D8 \u05E2\u05DC \u05D4\u05E4\u05E8\u05D9\u05E9\u05D4\n    \u05D4\u05D2\u05D0\u05D5\u05D2\u05E8\u05E4\u05D9\u05EA \u05E9\u05DC \u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05D4\u05E2\u05E8\u05DA \u05D4\u05E0\u05D1\u05D3\u05E7."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05EA\u05E8\u05E9\u05D9\u05DD \u05D4\u05E4\u05D9\u05D6\u05D5\u05E8 \u05DE\u05E6\u05D9\u05D2 \u05D0\u05EA \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD \u05D1\u05D0\u05D5\u05EA\u05DD \u05E6\u05D1\u05E2\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05E6\u05D9\u05E8 \u05D4\u05BEy \u05DE\u05D9\u05D9\u05E6\u05D2 \u05E2\u05D3\u05D9\u05D9\u05DF \u05D0\u05EA \u05E7\u05D5\u05D9\n\u05D4\u05E8\u05D5\u05D7\u05D1, \u05D0\u05D1\u05DC \u05E6\u05D9\u05E8 \u05D4\u05BEx \u05D4\u05D5\u05D0 \u05D4\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA \u05D4\u05D9\u05D7\u05E1\u05D9\u05EA \u05E9\u05DC \u05D4\u05E2\u05E8\u05DA \u05D4\u05E0\u05D1\u05D7\u05E8 \u05D1\u05D7\u05EA\u05DA \u05D4\u05E0\u05D1\u05D3\u05E7 \u05D1\u05DB\u05DC \u05D9\u05D9\u05E9\u05D5\u05D1.\n\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E6\u05D1\u05D9\u05E2 \u05E2\u05DC \u05DB\u05DC \u05D0\u05D9\u05D1\u05E8 \u05D5\u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05E9\u05DD \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DD \u05D1\u05D1\u05D5\u05E2\u05D4 \u05D4\u05DE\u05D5\u05E4\u05D9\u05E2\u05D4.\n\u05D4\u05EA\u05E6\u05D5\u05D2\u05D4 \u05D4\u05D6\u05D5 \u05DE\u05E9\u05E8\u05EA\u05EA \u05E9\u05EA\u05D9 \u05DE\u05D8\u05E8\u05D5\u05EA: \u05D0. \u05DC\u05D4\u05DE\u05D7\u05D9\u05E9 \u05D0\u05EA \u05D4\u05E9\u05D9\u05D5\u05DA \u05D1\u05D9\u05DF \u05E6\u05D1\u05E2\u05D9\u05DD \u05DC\u05E4\u05E8\u05D5\u05E4\u05D5\u05E8\u05E6\u05D9\u05D5\u05EA.\n\u05D1. \u05DC\u05D1\u05D7\u05D5\u05DF \u05DB\u05D9\u05E6\u05D3 \u05D4\u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05E2\u05E8\u05DA \u05D4\u05E0\u05D1\u05D7\u05E8 \u05E7\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E6\u05D9\u05E8 \u05D2\u05D0\u05D5\u05D2\u05E8\u05E4\u05D9 \u05D7\u05E9\u05D5\u05D1 \u05BE\u05BE \u05D4\u05E9\u05D9\u05D5\u05DA \u05DC\u05E7\u05D5\u05D9\n\u05E8\u05D5\u05D7\u05D1. \u05E7\u05D5\u05D9 \u05D4\u05E8\u05D5\u05D7\u05D1 \u05D1\u05D0\u05E8\u05E5 \u05DE\u05E2\u05D9\u05D3\u05D9\u05DD \u05D1\u05DE\u05D3\u05D4 \u05E8\u05D1\u05D4 \u05E2\u05DC \u05D4\u05E9\u05D9\u05D5\u05DA \u05E9\u05DC \u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD \u05DC\u05DE\u05E8\u05DB\u05D6 \u05D0\u05D5\n\u05DC\u05E4\u05E8\u05D9\u05E4\u05E8\u05D9\u05D4 \u05D5\u05E2\u05DC \u05D3\u05E4\u05D5\u05E1\u05D9 \u05D4\u05D4\u05EA\u05D9\u05E9\u05D1\u05D5\u05EA \u05E9\u05DC \u05DE\u05D4\u05D2\u05E8\u05D9\u05DD \u05D1\u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05D4\u05E9\u05D5\u05E0\u05D5\u05EA; \u05D0\u05DB\u05DF \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D1\u05D7\u05D9\u05DF\n\u05D1\u05E7\u05E9\u05E8 \u05DC\u05D0 \u05DC\u05D9\u05E0\u05D0\u05E8\u05D9 (\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4, \u05D1\u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05DE\u05E1\u05D5\u05D9\u05DE\u05D5\u05EA \u05D4\u05D2\u05D9\u05E2\u05D4 \u05D4\u05D4\u05D2\u05D9\u05E8\u05D4 \u05DE\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4 \u05D1\u05E2\u05D9\u05E7\u05E8 \u05DC\u05DE\u05E8\u05DB\u05D6,\n\u05D5\u05DE\u05D0\u05E4\u05E8\u05D9\u05E7\u05D4 \u05D5\u05D0\u05E1\u05D9\u05D4 \u05BE\u05BE \u05DC\u05E4\u05E8\u05D9\u05E4\u05E8\u05D9\u05D4)."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05EA\u05E8\u05E9\u05D9\u05DE\u05D9 \u05D4\u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05E0\u05D5\u05EA\u05E0\u05D9\u05DD \u05DE\u05D1\u05D8 \u05DE\u05E4\u05D5\u05E8\u05D8 \u05D9\u05D5\u05EA\u05E8 \u05E2\u05DC \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5. \u05DC\u05DB\u05DC \u05D0\u05D7\u05D3 \u05DE\u05E9\u05E0\u05D9 \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD\n\u05D9\u05E9 \u05EA\u05E8\u05E9\u05D9\u05DD \u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05E0\u05E4\u05E8\u05D3, \u05E9\u05D1\u05D5 \u05DE\u05D5\u05E6\u05D2\u05D5\u05EA \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF \u05D1\u05D7\u05EA\u05DA \u05D4\u05E0\u05D1\u05D3\u05E7.\n\u05D4\u05E2\u05E8\u05DA \u05D4\u05E0\u05D1\u05D7\u05E8 \u05E6\u05D1\u05D5\u05E2 \u05D1\u05D0\u05D3\u05D5\u05DD, \u05D5\u05E9\u05D0\u05E8 \u05D4\u05E2\u05E8\u05DB\u05D9\u05DD, \u05D1\u05DB\u05D7\u05D5\u05DC."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D1\u05E0\u05D5\u05E1\u05E3, \u05D9\u05E9 \u05EA\u05E8\u05E9\u05D9\u05DD \u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05E6\u05D9\u05D2 \u05D0\u05EA \u05D4\u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05D4\u05D9\u05D7\u05E1\u05D9\u05D5\u05EA \u05D1\u05E9\u05E0\u05D9 \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD\n(\u05D4\u05E4\u05E2\u05DD \u05E9\u05DB\u05D9\u05D7\u05D5\u05D9\u05D5\u05EA \u05D9\u05D7\u05E1\u05D9\u05D5\u05EA \u05BE\u05BE \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05EA\u05D4\u05D9\u05D4 \u05E1\u05E7\u05D0\u05DC\u05D4 \u05DE\u05E9\u05D5\u05EA\u05E4\u05EA \u05DC\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4).\n\u05D4\u05E9\u05EA\u05DE\u05E9\u05E0\u05D5 \u05D1\u05D5 \u05D1\u05E6\u05D1\u05E2\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD (\u05D5\u05DE\u05D5\u05D1\u05D7\u05E0\u05D9\u05DD \u05D6\u05D4 \u05DE\u05D6\u05D4), \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05DE\u05E0\u05D5\u05E2 \u05D1\u05DC\u05D1\u05D5\u05DC \u05D1\u05D9\u05D7\u05E1 \u05DC\u05EA\u05E8\u05E9\u05D9\u05DE\u05D9\u05DD \u05D4\u05E7\u05D5\u05D3\u05DE\u05D9\u05DD."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D4\u05E7\u05E4\u05D3\u05E0\u05D5 \u05E2\u05DC \u05E2\u05E7\u05D1\u05D9\u05D5\u05EA \u05D1\u05E1\u05D3\u05E8 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D1\u05D9\u05DF \u05D4\u05EA\u05E8\u05E9\u05D9\u05DE\u05D9\u05DD, \u05DB\u05DA \u05E9\u05E0\u05D9\u05EA\u05DF \u05D9\u05D4\u05D9 \u05DC\u05EA\u05E4\u05D5\u05E1 \u05D3\u05DE\u05D9\u05D5\u05DF \u05D5\u05E9\u05D5\u05E0\u05D9\n\u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05D1\u05D8 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D4\u05DB\u05DC\u05DC\u05D9\u05EA \u05E9\u05DC\u05D4\u05DD, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05D1\u05E2\u05D9\u05D5\u05DF \u05D7\u05D5\u05D6\u05E8 \u05D1\u05E9\u05DE\u05D5\u05EA \u05E2\u05DC \u05D4\u05E6\u05D9\u05E8\u05D9\u05DD."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D4\u05E9\u05E8\u05D9\u05D2 \u05E9\u05DC \u05E7\u05D5\u05D9 \u05D4\u05D9\u05D7\u05D5\u05E1 \u05DE\u05D5\u05E6\u05D2 \u05D1\u05DC\u05D1\u05DF \u05E2\u05DC \u05E8\u05E7\u05E2 \u05D0\u05E4\u05D5\u05E8, \u05DB\u05D3\u05D9 \u05E9\u05DC\u05D0 \u05DC\u05D4\u05D8\u05E8\u05D9\u05D3 \u05D1\u05D3\u05D9\u05D5 \u05DE\u05D9\u05D5\u05EA\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D9\u05DF \u05D4\u05DE\u05E0\u05E1\u05D4 \u05DC\u05EA\u05E4\u05D5\u05E1 \u05D0\u05EA \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D4\u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05E2\u05DC \u05E4\u05E0\u05D9 \u05D4\u05E8\u05E7\u05E2."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D4\u05D6\u05D6\u05D4 \u05E9\u05DC \u05D4\u05E1\u05E8\u05D2\u05DC (slider) \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DE\u05D1\u05D8 \u05D1\u05EA\u05E0\u05D5\u05E2\u05D4 \u05E2\u05DC \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D1\u05D9\u05DF \u05EA\u05E7\u05D5\u05E4\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u05E9\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD \u05D0\u05E4\u05E9\u05E8\u05D9\u05D9\u05DD"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"\u05D9\u05D9\u05EA\u05DB\u05DF \u05DB\u05D9 \u05DE\u05E2\u05D1\u05E8 \u05D4\u05D3\u05E8\u05D2\u05EA\u05D9 \u05D1\u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D4 \u05D4\u05D9\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05EA\u05E4\u05D9\u05E1\u05D4 \u05D1\u05E8\u05D5\u05E8\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\n\u05E9\u05D9\u05E0\u05D5\u05D9. \u05DE\u05E1\u05D9\u05D1\u05D4 \u05D8\u05DB\u05E0\u05D9\u05EA \u05DC\u05D0 \u05DE\u05D9\u05DE\u05E9\u05E0\u05D5 \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D4 \u05DB\u05D6\u05D5 \u05D1\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D6\u05D4."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"\u05DE\u05E2\u05E0\u05D9\u05D9\u05DF \u05D9\u05D4\u05D9\u05D4 \u05DC\u05D1\u05D7\u05D5\u05DF \u05EA\u05E6\u05D5\u05D2\u05D4 \u05D1\u05EA\u05E0\u05D5\u05E2\u05D4 \u05DC\u05E6\u05D3 \u05EA\u05E6\u05D5\u05D2\u05D4 \u05E9\u05D2\u05E8\u05EA\u05D9\u05EA \u05E9\u05DC \u05E1\u05D3\u05E8\u05D5\u05EA \u05E2\u05EA\u05D9\u05D5\u05EA, \u05E2\u05DD \u05E7\u05D9\u05E9\u05D5\u05E8 \u05D1\u05D9\u05E0\u05D9\u05D4\u05DF."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u05DE\u05D9\u05DE\u05D5\u05E9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u05D4\u05EA\u05D5\u05DB\u05E0\u05D4 \u05E0\u05DB\u05EA\u05D1\u05D4 \u05D1\u05E9\u05E4\u05EA clojurescript \u05D5\u05E2\u05D5\u05E9\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E1\u05E4\u05E8\u05D9\u05EA \u05D4\u05D2\u05E8\u05E4\u05D9\u05DD dimple\n\u05D5\u05D1\u05E1\u05E4\u05E8\u05D9\u05EA \u05D4\u05DE\u05E4\u05D5\u05EA leaflet."], null)], null);
cities.core.help_component = (function (){var show_help_QMARK_ = reagent.core.atom.call(null,true);
return ((function (show_help_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.help_button,show_help_QMARK_], null),(cljs.core.truth_(cljs.core.deref.call(null,show_help_QMARK_))?cities.core.help:null),(cljs.core.truth_(cljs.core.deref.call(null,show_help_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.help_button,show_help_QMARK_], null):null)], null);
});
;})(show_help_QMARK_))
})();
cities.core.chooser_component = (function chooser_component(path,values,title){
var values_set = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,values);
var option = ((function (values_set){
return (function (val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cities.core.doc),path),val))?"#ff9999":"#9999ff")], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (values_set){
return (function (){
return cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,path,val);
});})(values_set))
], null)], null);
});})(values_set))
;
if(cljs.core.truth_(option)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),[cljs.core.str(title),cljs.core.str(":")].join('')], null),(function (){
if(cljs.core.not.call(null,values_set.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cities.core.doc),path)))){
cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,path,cljs.core.first.call(null,values));
} else {
}

var iter__28944__auto__ = ((function (values_set,option){
return (function iter__37088(s__37089){
return (new cljs.core.LazySeq(null,((function (values_set,option){
return (function (){
var s__37089__$1 = s__37089;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37089__$1);
if(temp__4126__auto__){
var s__37089__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37089__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__37089__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__37091 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__37090 = (0);
while(true){
if((i__37090 < size__28943__auto__)){
var val = cljs.core._nth.call(null,c__28942__auto__,i__37090);
cljs.core.chunk_append.call(null,b__37091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,val], null));

var G__37092 = (i__37090 + (1));
i__37090 = G__37092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37091),iter__37088.call(null,cljs.core.chunk_rest.call(null,s__37089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37091),null);
}
} else {
var val = cljs.core.first.call(null,s__37089__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,val], null),iter__37088.call(null,cljs.core.rest.call(null,s__37089__$2)));
}
} else {
return null;
}
break;
}
});})(values_set,option))
,null,null));
});})(values_set,option))
;
return iter__28944__auto__.call(null,values);
})()
], null);
} else {
return null;
}
});
cities.core.slider_component = (function slider_component(path,values,title){
var values__$1 = cljs.core.vec.call(null,values);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(1500)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chooser_component,path,values__$1,title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"#aaaaaa"], null)], null),[cljs.core.str(title),cljs.core.str(":")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"800px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count.call(null,values__$1) - (1)),new cljs.core.Keyword(null,"on-keypress","on-keypress",1091062179),((function (values__$1){
return (function (){
return alert("A");
});})(values__$1))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (values__$1){
return (function (p1__37093_SHARP_){
return cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,path,values__$1.call(null,p1__37093_SHARP_.target.value));
});})(values__$1))
], null)], null)], null);
});
cities.core.cities_component = (function cities_component(docref){
var setup = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),""], null);
});
var do_render_BANG_ = ((function (setup){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));
if(cljs.core.truth_(temp__4124__auto__)){
var themap = temp__4124__auto__;
var profile = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-name","column-name",551523580),cities.core.char_to_key.call(null,new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc))),new cljs.core.Keyword(null,"period","period",-352129191),cities.core.get_period.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,cities.core.doc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"period-type","period-type",2061129595),new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)], null))),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc))], null);
var colors = cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),profile], null));
return cities.core.render_cities_BANG_.call(null,themap,colors);
} else {
return null;
}
})()], null);
});})(setup))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),setup,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),do_render_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),do_render_BANG_], null));
});
cities.core.app = (function app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"direction","direction",-633359395),"rtl",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#aaaaaa"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#dddddd",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),"\u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9\u05D6\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4 \u05DC\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05E0\u05D9\u05DD"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.help_component], null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.data))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D1\u05D8\u05E2\u05D9\u05E0\u05D4..."], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.map_component,"map"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chooser_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05D3\u05EA","\u05DE\u05D5\u05E6\u05D0"], null),"\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF \u05DC\u05E0\u05D9\u05EA\u05D5\u05D7"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chooser_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),cljs.core.vec.call(null,cities.core.ordered_values.call(null,cities.core.char_to_key.call(null,new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc))))),"\u05E2\u05E8\u05DA \u05E0\u05D1\u05D7\u05E8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chooser_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"period-type","period-type",2061129595)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05DB\u05DC \u05D4\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4","\u05E2\u05D1\u05E8\u05D5 \u05DC\u05D9\u05E9\u05D5\u05D1 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA"], null),"\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4"], null),((cljs.core._EQ_.call(null,"\u05E2\u05D1\u05E8\u05D5 \u05DC\u05D9\u05E9\u05D5\u05D1 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA",cljs.core.deref.call(null,cities.core.doc).call(null,new cljs.core.Keyword(null,"period-type","period-type",2061129595))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.slider_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)], null),cities.core.periods_entered,"\u05EA\u05E7\u05D5\u05E4\u05D4"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.city_component,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.deref.call(null,cities.core.doc)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.city_component,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,cities.core.doc)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"40%",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),"\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chart_component,"comparison",new cljs.core.Keyword(null,"comparison","comparison",-986182462),cljs.core.deref.call(null,cities.core.doc)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),"\u05DB\u05DC \u05D4\u05D9\u05D9\u05E9\u05D5\u05D1\u05D9\u05DD"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chart_component,"scatter",new cljs.core.Keyword(null,"scatter","scatter",507265517),cljs.core.deref.call(null,cities.core.doc)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.cities_component,cljs.core.deref.call(null,cities.core.doc)], null)], null))], null);
});
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.app], null),document.getElementById("main-area"));
}));

//# sourceMappingURL=core.js.map