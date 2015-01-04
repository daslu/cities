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
var get_data__delegate = function (path,p__37637){
var map__37639 = p__37637;
var map__37639__$1 = ((cljs.core.seq_QMARK_.call(null,map__37639))?cljs.core.apply.call(null,cljs.core.hash_map,map__37639):map__37639);
var transf = cljs.core.get.call(null,map__37639__$1,new cljs.core.Keyword(null,"transf","transf",-185873150),cljs.core.identity);
return transf.call(null,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.data)),path));
};
var get_data = function (path,var_args){
var p__37637 = null;
if (arguments.length > 1) {
  p__37637 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get_data__delegate.call(this,path,p__37637);};
get_data.cljs$lang$maxFixedArity = 1;
get_data.cljs$lang$applyTo = (function (arglist__37640){
var path = cljs.core.first(arglist__37640);
var p__37637 = cljs.core.rest(arglist__37640);
return get_data__delegate(path,p__37637);
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
return (function (state_37660){
var state_val_37661 = (state_37660[(1)]);
if((state_val_37661 === (2))){
var inst_37656 = (state_37660[(2)]);
var inst_37657 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_37656);
var inst_37658 = update_cache_and_state.call(null,inst_37657);
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37660__$1,inst_37658);
} else {
if((state_val_37661 === (1))){
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37660__$1,(2),ch);
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
var statearr_37665 = [null,null,null,null,null,null,null];
(statearr_37665[(0)] = state_machine__30092__auto__);

(statearr_37665[(1)] = (1));

return statearr_37665;
});
var state_machine__30092__auto____1 = (function (state_37660){
while(true){
var ret_value__30093__auto__ = (function (){try{while(true){
var result__30094__auto__ = switch__30091__auto__.call(null,state_37660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30094__auto__;
}
break;
}
}catch (e37666){if((e37666 instanceof Object)){
var ex__30095__auto__ = e37666;
var statearr_37667_37669 = state_37660;
(statearr_37667_37669[(5)] = ex__30095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37670 = state_37660;
state_37660 = G__37670;
continue;
} else {
return ret_value__30093__auto__;
}
break;
}
});
state_machine__30092__auto__ = function(state_37660){
switch(arguments.length){
case 0:
return state_machine__30092__auto____0.call(this);
case 1:
return state_machine__30092__auto____1.call(this,state_37660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30092__auto____0;
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30092__auto____1;
return state_machine__30092__auto__;
})()
;})(switch__30091__auto__,c__30106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
})();
var state__30108__auto__ = (function (){var statearr_37668 = f__30107__auto__.call(null);
(statearr_37668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30106__auto__);

return statearr_37668;
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
cities.core.get_period = (function get_period(p__37671){
var map__37673 = p__37671;
var map__37673__$1 = ((cljs.core.seq_QMARK_.call(null,map__37673))?cljs.core.apply.call(null,cljs.core.hash_map,map__37673):map__37673);
var chosen_period = cljs.core.get.call(null,map__37673__$1,new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805));
var period_type = cljs.core.get.call(null,map__37673__$1,new cljs.core.Keyword(null,"period-type","period-type",2061129595));
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
var G__37677 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37677) {
case "freq":
return cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freqs","freqs",1215470702),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city-code","city-code",-237533935),city_code,new cljs.core.Keyword(null,"column-name","column-name",551523580),cities.core.char_to_key.call(null,char$),new cljs.core.Keyword(null,"period","period",-352129191),period], null)], null),new cljs.core.Keyword(null,"transf","transf",-185873150),((function (G__37677){
return (function (freqs){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"x-axis-type","x-axis-type",-1071000664),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"order-rule","order-rule",1782525873),new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"data-series","data-series",770919679)],[dimple.plot.bar,"\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA",new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.PersistentArrayMap(null, 2, ["\u05DB\u05DC \u05D4\u05E9\u05D0\u05E8","#9999ff","\u05E2\u05E8\u05DA \u05E0\u05D1\u05D7\u05E8","#ff9999"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"15%",new cljs.core.Keyword(null,"y","y",-1757859776),"15%",new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),cljs.core.vec.call(null,cljs.core.reverse.call(null,cities.core.ordered_values.call(null,cities.core.char_to_key.call(null,char$)))),char$,new cljs.core.PersistentArrayMap(null, 2, ["\u05DB\u05DC \u05D4\u05E9\u05D0\u05E8",cljs.core.filter.call(null,((function (G__37677){
return (function (p1__37674_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__37674_SHARP_),val);
});})(G__37677))
,freqs),"\u05E2\u05E8\u05DA \u05E0\u05D1\u05D7\u05E8",cljs.core.filter.call(null,((function (G__37677){
return (function (p1__37675_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__37675_SHARP_),val);
});})(G__37677))
,freqs)], null)]);
});})(G__37677))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
cities.core.get_comparison_chart = (function get_comparison_chart(city_names_by_code,type,char$,val,period){
var G__37701 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37701) {
case "freq":
var freqs_by_city_name = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28944__auto__ = ((function (G__37701){
return (function iter__37702(s__37703){
return (new cljs.core.LazySeq(null,((function (G__37701){
return (function (){
var s__37703__$1 = s__37703;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37703__$1);
if(temp__4126__auto__){
var s__37703__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37703__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__37703__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__37705 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__37704 = (0);
while(true){
if((i__37704 < size__28943__auto__)){
var vec__37708 = cljs.core._nth.call(null,c__28942__auto__,i__37704);
var city_code = cljs.core.nth.call(null,vec__37708,(0),null);
var city_name = cljs.core.nth.call(null,vec__37708,(1),null);
cljs.core.chunk_append.call(null,b__37705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_name,cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freqs","freqs",1215470702),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city-code","city-code",-237533935),city_code,new cljs.core.Keyword(null,"column-name","column-name",551523580),cities.core.char_to_key.call(null,char$),new cljs.core.Keyword(null,"period","period",-352129191),period], null)], null))], null));

var G__37723 = (i__37704 + (1));
i__37704 = G__37723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37705),iter__37702.call(null,cljs.core.chunk_rest.call(null,s__37703__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37705),null);
}
} else {
var vec__37709 = cljs.core.first.call(null,s__37703__$2);
var city_code = cljs.core.nth.call(null,vec__37709,(0),null);
var city_name = cljs.core.nth.call(null,vec__37709,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_name,cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"freqs","freqs",1215470702),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city-code","city-code",-237533935),city_code,new cljs.core.Keyword(null,"column-name","column-name",551523580),cities.core.char_to_key.call(null,char$),new cljs.core.Keyword(null,"period","period",-352129191),period], null)], null))], null),iter__37702.call(null,cljs.core.rest.call(null,s__37703__$2)));
}
} else {
return null;
}
break;
}
});})(G__37701))
,null,null));
});})(G__37701))
;
return iter__28944__auto__.call(null,city_names_by_code);
})());
var city_names = cljs.core.keys.call(null,freqs_by_city_name);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"x-axis-type","x-axis-type",-1071000664),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"order-rule","order-rule",1782525873),new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"data-series","data-series",770919679)],[dimple.plot.bar,"\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA \u05D9\u05D7\u05E1\u05D9\u05EA",new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,cljs.core.keys.call(null,freqs_by_city_name)),"#339933",cljs.core.second.call(null,cljs.core.keys.call(null,freqs_by_city_name)),"#663366"], true, false),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"15%",new cljs.core.Keyword(null,"y","y",-1757859776),"15%",new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (city_names,freqs_by_city_name,G__37701){
return (function (x){
var iter__28944__auto__ = ((function (city_names,freqs_by_city_name,G__37701){
return (function iter__37710(s__37711){
return (new cljs.core.LazySeq(null,((function (city_names,freqs_by_city_name,G__37701){
return (function (){
var s__37711__$1 = s__37711;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37711__$1);
if(temp__4126__auto__){
var s__37711__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37711__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__37711__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__37713 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__37712 = (0);
while(true){
if((i__37712 < size__28943__auto__)){
var city_name = cljs.core._nth.call(null,c__28942__auto__,i__37712);
cljs.core.chunk_append.call(null,b__37713,[cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join(''));

var G__37724 = (i__37712 + (1));
i__37712 = G__37724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37713),iter__37710.call(null,cljs.core.chunk_rest.call(null,s__37711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37713),null);
}
} else {
var city_name = cljs.core.first.call(null,s__37711__$2);
return cljs.core.cons.call(null,[cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join(''),iter__37710.call(null,cljs.core.rest.call(null,s__37711__$2)));
}
} else {
return null;
}
break;
}
});})(city_names,freqs_by_city_name,G__37701))
,null,null));
});})(city_names,freqs_by_city_name,G__37701))
;
return iter__28944__auto__.call(null,city_names);
});})(city_names,freqs_by_city_name,G__37701))
,cities.core.ordered_values.call(null,cities.core.char_to_key.call(null,char$)))))),char$,cljs.core.apply.call(null,cljs.core.conj,(function (){var iter__28944__auto__ = ((function (city_names,freqs_by_city_name,G__37701){
return (function iter__37714(s__37715){
return (new cljs.core.LazySeq(null,((function (city_names,freqs_by_city_name,G__37701){
return (function (){
var s__37715__$1 = s__37715;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37715__$1);
if(temp__4126__auto__){
var s__37715__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37715__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__37715__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__37717 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__37716 = (0);
while(true){
if((i__37716 < size__28943__auto__)){
var vec__37720 = cljs.core._nth.call(null,c__28942__auto__,i__37716);
var city_name = cljs.core.nth.call(null,vec__37720,(0),null);
var freqs = cljs.core.nth.call(null,vec__37720,(1),null);
cljs.core.chunk_append.call(null,b__37717,(function (){var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),freqs));
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(city_name)].join(''),cljs.core.map.call(null,((function (i__37716,total,vec__37720,city_name,freqs,c__28942__auto__,size__28943__auto__,b__37717,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701){
return (function (p1__37679_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__37679_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),((function (i__37716,total,vec__37720,city_name,freqs,c__28942__auto__,size__28943__auto__,b__37717,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701){
return (function (x){
return [cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join('');
});})(i__37716,total,vec__37720,city_name,freqs,c__28942__auto__,size__28943__auto__,b__37717,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),((function (i__37716,total,vec__37720,city_name,freqs,c__28942__auto__,size__28943__auto__,b__37717,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701){
return (function (y){
return (y / total);
});})(i__37716,total,vec__37720,city_name,freqs,c__28942__auto__,size__28943__auto__,b__37717,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701))
);
});})(i__37716,total,vec__37720,city_name,freqs,c__28942__auto__,size__28943__auto__,b__37717,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701))
,freqs)], true, false);
})());

var G__37725 = (i__37716 + (1));
i__37716 = G__37725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37717),iter__37714.call(null,cljs.core.chunk_rest.call(null,s__37715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37717),null);
}
} else {
var vec__37721 = cljs.core.first.call(null,s__37715__$2);
var city_name = cljs.core.nth.call(null,vec__37721,(0),null);
var freqs = cljs.core.nth.call(null,vec__37721,(1),null);
return cljs.core.cons.call(null,(function (){var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),freqs));
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(city_name)].join(''),cljs.core.map.call(null,((function (total,vec__37721,city_name,freqs,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701){
return (function (p1__37679_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__37679_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),((function (total,vec__37721,city_name,freqs,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701){
return (function (x){
return [cljs.core.str(x),cljs.core.str(" -> "),cljs.core.str(city_name)].join('');
});})(total,vec__37721,city_name,freqs,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null),((function (total,vec__37721,city_name,freqs,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701){
return (function (y){
return (y / total);
});})(total,vec__37721,city_name,freqs,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701))
);
});})(total,vec__37721,city_name,freqs,s__37715__$2,temp__4126__auto__,city_names,freqs_by_city_name,G__37701))
,freqs)], true, false);
})(),iter__37714.call(null,cljs.core.rest.call(null,s__37715__$2)));
}
} else {
return null;
}
break;
}
});})(city_names,freqs_by_city_name,G__37701))
,null,null));
});})(city_names,freqs_by_city_name,G__37701))
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
cities.core.draw_chart = (function draw_chart(p__37726){
var map__37740 = p__37726;
var map__37740__$1 = ((cljs.core.seq_QMARK_.call(null,map__37740))?cljs.core.apply.call(null,cljs.core.hash_map,map__37740):map__37740);
var x_axis_type = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"x-axis-type","x-axis-type",-1071000664));
var order_rule = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"order-rule","order-rule",1782525873));
var plot = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"plot","plot",2086832225));
var y_axis = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434));
var x_axis = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253));
var bounds = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var div = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"div","div",1057191632));
var data_series = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"data-series","data-series",770919679));
var colors = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var map__37741 = div;
var map__37741__$1 = ((cljs.core.seq_QMARK_.call(null,map__37741))?cljs.core.apply.call(null,cljs.core.hash_map,map__37741):map__37741);
var height = cljs.core.get.call(null,map__37741__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__37741__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var id = cljs.core.get.call(null,map__37741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var Chart = dimple.chart;
var svg = dimple.newSvg([cljs.core.str("#"),cljs.core.str(id)].join(''),width,height);
var dimple_chart = (new Chart(svg)).setBounds(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds));
var x = (function (){var G__37742 = (((x_axis_type instanceof cljs.core.Keyword))?x_axis_type.fqn:null);
switch (G__37742) {
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
var xys_37754 = cljs.core.vec.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,data_series)));
var seq__37743_37755 = cljs.core.seq.call(null,xys_37754);
var chunk__37744_37756 = null;
var count__37745_37757 = (0);
var i__37746_37758 = (0);
while(true){
if((i__37746_37758 < count__37745_37757)){
var xy_37759 = cljs.core._nth.call(null,chunk__37744_37756,i__37746_37758);
var aname_37760 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(xy_37759);
var s_37761 = dimple_chart.addSeries(aname_37760,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_37761["data"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy_37759], null)));

dimple_chart.assignColor(aname_37760,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_37759),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_37759),0.5);

var G__37762 = seq__37743_37755;
var G__37763 = chunk__37744_37756;
var G__37764 = count__37745_37757;
var G__37765 = (i__37746_37758 + (1));
seq__37743_37755 = G__37762;
chunk__37744_37756 = G__37763;
count__37745_37757 = G__37764;
i__37746_37758 = G__37765;
continue;
} else {
var temp__4126__auto___37766 = cljs.core.seq.call(null,seq__37743_37755);
if(temp__4126__auto___37766){
var seq__37743_37767__$1 = temp__4126__auto___37766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37743_37767__$1)){
var c__28975__auto___37768 = cljs.core.chunk_first.call(null,seq__37743_37767__$1);
var G__37769 = cljs.core.chunk_rest.call(null,seq__37743_37767__$1);
var G__37770 = c__28975__auto___37768;
var G__37771 = cljs.core.count.call(null,c__28975__auto___37768);
var G__37772 = (0);
seq__37743_37755 = G__37769;
chunk__37744_37756 = G__37770;
count__37745_37757 = G__37771;
i__37746_37758 = G__37772;
continue;
} else {
var xy_37773 = cljs.core.first.call(null,seq__37743_37767__$1);
var aname_37774 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(xy_37773);
var s_37775 = dimple_chart.addSeries(aname_37774,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_37775["data"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy_37773], null)));

dimple_chart.assignColor(aname_37774,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_37773),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(xy_37773),0.5);

var G__37776 = cljs.core.next.call(null,seq__37743_37767__$1);
var G__37777 = null;
var G__37778 = (0);
var G__37779 = (0);
seq__37743_37755 = G__37776;
chunk__37744_37756 = G__37777;
count__37745_37757 = G__37778;
i__37746_37758 = G__37779;
continue;
}
} else {
}
}
break;
}

(y["overrideMin"] = (-0.1 + cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.first.call(null,cljs.core.vals.call(null,data_series))))));
} else {
var seq__37747_37780 = cljs.core.seq.call(null,data_series);
var chunk__37748_37781 = null;
var count__37749_37782 = (0);
var i__37750_37783 = (0);
while(true){
if((i__37750_37783 < count__37749_37782)){
var vec__37751_37784 = cljs.core._nth.call(null,chunk__37748_37781,i__37750_37783);
var name_37785 = cljs.core.nth.call(null,vec__37751_37784,(0),null);
var data_37786 = cljs.core.nth.call(null,vec__37751_37784,(1),null);
var s_37787 = dimple_chart.addSeries(name_37785,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_37787["data"] = cljs.core.clj__GT_js.call(null,data_37786));

var temp__4124__auto___37788 = colors.call(null,name_37785);
if(cljs.core.truth_(temp__4124__auto___37788)){
var color_37789 = temp__4124__auto___37788;
dimple_chart.assignColor(name_37785,color_37789);
} else {
}

var G__37790 = seq__37747_37780;
var G__37791 = chunk__37748_37781;
var G__37792 = count__37749_37782;
var G__37793 = (i__37750_37783 + (1));
seq__37747_37780 = G__37790;
chunk__37748_37781 = G__37791;
count__37749_37782 = G__37792;
i__37750_37783 = G__37793;
continue;
} else {
var temp__4126__auto___37794 = cljs.core.seq.call(null,seq__37747_37780);
if(temp__4126__auto___37794){
var seq__37747_37795__$1 = temp__4126__auto___37794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37747_37795__$1)){
var c__28975__auto___37796 = cljs.core.chunk_first.call(null,seq__37747_37795__$1);
var G__37797 = cljs.core.chunk_rest.call(null,seq__37747_37795__$1);
var G__37798 = c__28975__auto___37796;
var G__37799 = cljs.core.count.call(null,c__28975__auto___37796);
var G__37800 = (0);
seq__37747_37780 = G__37797;
chunk__37748_37781 = G__37798;
count__37749_37782 = G__37799;
i__37750_37783 = G__37800;
continue;
} else {
var vec__37752_37801 = cljs.core.first.call(null,seq__37747_37795__$1);
var name_37802 = cljs.core.nth.call(null,vec__37752_37801,(0),null);
var data_37803 = cljs.core.nth.call(null,vec__37752_37801,(1),null);
var s_37804 = dimple_chart.addSeries(name_37802,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
(s_37804["data"] = cljs.core.clj__GT_js.call(null,data_37803));

var temp__4124__auto___37805 = colors.call(null,name_37802);
if(cljs.core.truth_(temp__4124__auto___37805)){
var color_37806 = temp__4124__auto___37805;
dimple_chart.assignColor(name_37802,color_37806);
} else {
}

var G__37807 = cljs.core.next.call(null,seq__37747_37795__$1);
var G__37808 = null;
var G__37809 = (0);
var G__37810 = (0);
seq__37747_37780 = G__37807;
chunk__37748_37781 = G__37808;
count__37749_37782 = G__37809;
i__37750_37783 = G__37810;
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
return (function (state_38050){
var state_val_38051 = (state_38050[(1)]);
if((state_val_38051 === (7))){
var inst_38033 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38052_38081 = state_38050__$1;
(statearr_38052_38081[(2)] = inst_38033);

(statearr_38052_38081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (1))){
var inst_37946 = document.getElementById(id);
var inst_37947 = [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null];
var inst_37948 = (new cljs.core.PersistentArrayMap(null,2,inst_37947,null));
var inst_37949 = (new cljs.core.PersistentHashSet(null,inst_37948,null));
var inst_37950 = inst_37949.call(null,side);
var state_38050__$1 = (function (){var statearr_38053 = state_38050;
(statearr_38053[(7)] = inst_37946);

return statearr_38053;
})();
if(cljs.core.truth_(inst_37950)){
var statearr_38054_38082 = state_38050__$1;
(statearr_38054_38082[(1)] = (2));

} else {
var statearr_38055_38083 = state_38050__$1;
(statearr_38055_38083[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (4))){
var inst_38035 = (state_38050[(2)]);
var state_38050__$1 = (function (){var statearr_38056 = state_38050;
(statearr_38056[(8)] = inst_38035);

return statearr_38056;
})();
var statearr_38057_38084 = state_38050__$1;
(statearr_38057_38084[(2)] = null);

(statearr_38057_38084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (15))){
var inst_38044 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38058_38085 = state_38050__$1;
(statearr_38058_38085[(2)] = inst_38044);

(statearr_38058_38085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (13))){
var inst_37946 = (state_38050[(7)]);
var inst_38039 = inst_37946.lastChild;
var inst_38040 = inst_37946.removeChild(inst_38039);
var state_38050__$1 = (function (){var statearr_38059 = state_38050;
(statearr_38059[(9)] = inst_38040);

return statearr_38059;
})();
var statearr_38060_38086 = state_38050__$1;
(statearr_38060_38086[(2)] = null);

(statearr_38060_38086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (6))){
var inst_37992 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scatter","scatter",507265517),side);
var state_38050__$1 = state_38050;
if(inst_37992){
var statearr_38061_38087 = state_38050__$1;
(statearr_38061_38087[(1)] = (8));

} else {
var statearr_38062_38088 = state_38050__$1;
(statearr_38062_38088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (3))){
var inst_37967 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"comparison","comparison",-986182462),side);
var state_38050__$1 = state_38050;
if(inst_37967){
var statearr_38063_38089 = state_38050__$1;
(statearr_38063_38089[(1)] = (5));

} else {
var statearr_38064_38090 = state_38050__$1;
(statearr_38064_38090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (12))){
var inst_38035 = (state_38050[(8)]);
var inst_38046 = (state_38050[(2)]);
var inst_38047 = cities.core.get_chart_spec_with_id.call(null,id,inst_38035);
var inst_38048 = cities.core.draw_chart.call(null,inst_38047);
var state_38050__$1 = (function (){var statearr_38065 = state_38050;
(statearr_38065[(10)] = inst_38046);

return statearr_38065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38050__$1,inst_38048);
} else {
if((state_val_38051 === (2))){
var inst_37952 = cljs.core.deref.call(null,cities.core.doc);
var inst_37953 = side.call(null,inst_37952);
var inst_37954 = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(inst_37953);
var inst_37955 = cljs.core.deref.call(null,cities.core.doc);
var inst_37956 = new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(inst_37955);
var inst_37957 = cljs.core.deref.call(null,cities.core.doc);
var inst_37958 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(inst_37957);
var inst_37959 = cljs.core.deref.call(null,cities.core.doc);
var inst_37960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37961 = [new cljs.core.Keyword(null,"period-type","period-type",2061129595),new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)];
var inst_37962 = (new cljs.core.PersistentVector(null,2,(5),inst_37960,inst_37961,null));
var inst_37963 = cljs.core.select_keys.call(null,inst_37959,inst_37962);
var inst_37964 = cities.core.get_period.call(null,inst_37963);
var inst_37965 = cities.core.get_chart.call(null,inst_37954,new cljs.core.Keyword(null,"freq","freq",-1855845278),inst_37956,inst_37958,inst_37964);
var state_38050__$1 = state_38050;
var statearr_38066_38091 = state_38050__$1;
(statearr_38066_38091[(2)] = inst_37965);

(statearr_38066_38091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (11))){
var inst_37946 = (state_38050[(7)]);
var inst_38037 = inst_37946.hasChildNodes();
var state_38050__$1 = state_38050;
if(cljs.core.truth_(inst_38037)){
var statearr_38067_38092 = state_38050__$1;
(statearr_38067_38092[(1)] = (13));

} else {
var statearr_38068_38093 = state_38050__$1;
(statearr_38068_38093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (9))){
var state_38050__$1 = state_38050;
var statearr_38069_38094 = state_38050__$1;
(statearr_38069_38094[(2)] = null);

(statearr_38069_38094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (5))){
var inst_37946 = (state_38050[(7)]);
var inst_37969 = cljs.core.PersistentHashMap.EMPTY;
var inst_37974 = (function (){var n = inst_37946;
return ((function (n,inst_37946,inst_37969,state_val_38051,c__30106__auto__,setup){
return (function iter__37970(s__37971){
return (new cljs.core.LazySeq(null,((function (n,inst_37946,inst_37969,state_val_38051,c__30106__auto__,setup){
return (function (){
var s__37971__$1 = s__37971;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37971__$1);
if(temp__4126__auto__){
var s__37971__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37971__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__37971__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__37973 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__37972 = (0);
while(true){
if((i__37972 < size__28943__auto__)){
var side__$1 = cljs.core._nth.call(null,c__28942__auto__,i__37972);
cljs.core.chunk_append.call(null,b__37973,(function (){var cities_map = cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)], null));
var city_code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(side__$1.call(null,cljs.core.deref.call(null,cities.core.doc)));
var city = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,city_code));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_code,city], null);
})());

var G__38095 = (i__37972 + (1));
i__37972 = G__38095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37973),iter__37970.call(null,cljs.core.chunk_rest.call(null,s__37971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37973),null);
}
} else {
var side__$1 = cljs.core.first.call(null,s__37971__$2);
return cljs.core.cons.call(null,(function (){var cities_map = cities.core.get_data.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)], null));
var city_code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(side__$1.call(null,cljs.core.deref.call(null,cities.core.doc)));
var city = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,city_code));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [city_code,city], null);
})(),iter__37970.call(null,cljs.core.rest.call(null,s__37971__$2)));
}
} else {
return null;
}
break;
}
});})(n,inst_37946,inst_37969,state_val_38051,c__30106__auto__,setup))
,null,null));
});
;})(n,inst_37946,inst_37969,state_val_38051,c__30106__auto__,setup))
})();
var inst_37975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37976 = [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)];
var inst_37977 = (new cljs.core.PersistentVector(null,2,(5),inst_37975,inst_37976,null));
var inst_37978 = inst_37974.call(null,inst_37977);
var inst_37979 = cljs.core.into.call(null,inst_37969,inst_37978);
var inst_37980 = cljs.core.deref.call(null,cities.core.doc);
var inst_37981 = new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(inst_37980);
var inst_37982 = cljs.core.deref.call(null,cities.core.doc);
var inst_37983 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(inst_37982);
var inst_37984 = cljs.core.deref.call(null,cities.core.doc);
var inst_37985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37986 = [new cljs.core.Keyword(null,"period-type","period-type",2061129595),new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)];
var inst_37987 = (new cljs.core.PersistentVector(null,2,(5),inst_37985,inst_37986,null));
var inst_37988 = cljs.core.select_keys.call(null,inst_37984,inst_37987);
var inst_37989 = cities.core.get_period.call(null,inst_37988);
var inst_37990 = cities.core.get_comparison_chart.call(null,inst_37979,new cljs.core.Keyword(null,"freq","freq",-1855845278),inst_37981,inst_37983,inst_37989);
var state_38050__$1 = state_38050;
var statearr_38070_38096 = state_38050__$1;
(statearr_38070_38096[(2)] = inst_37990);

(statearr_38070_38096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (14))){
var state_38050__$1 = state_38050;
var statearr_38071_38097 = state_38050__$1;
(statearr_38071_38097[(2)] = null);

(statearr_38071_38097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (10))){
var inst_38031 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38072_38098 = state_38050__$1;
(statearr_38072_38098[(2)] = inst_38031);

(statearr_38072_38098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (8))){
var inst_37946 = (state_38050[(7)]);
var inst_37994 = cljs.core.deref.call(null,cities.core.doc);
var inst_37995 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(inst_37994);
var inst_37996 = cljs.core.deref.call(null,cities.core.doc);
var inst_37997 = new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(inst_37996);
var inst_37998 = [new cljs.core.Keyword(null,"column-name","column-name",551523580),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"val","val",128701612)];
var inst_37999 = cities.core.char_to_key.call(null,inst_37997);
var inst_38000 = cljs.core.deref.call(null,cities.core.doc);
var inst_38001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38002 = [new cljs.core.Keyword(null,"period-type","period-type",2061129595),new cljs.core.Keyword(null,"chosen-period","chosen-period",-409303805)];
var inst_38003 = (new cljs.core.PersistentVector(null,2,(5),inst_38001,inst_38002,null));
var inst_38004 = cljs.core.select_keys.call(null,inst_38000,inst_38003);
var inst_38005 = cities.core.get_period.call(null,inst_38004);
var inst_38006 = [inst_37999,inst_38005,inst_37995];
var inst_38007 = cljs.core.PersistentHashMap.fromArrays(inst_37998,inst_38006);
var inst_38008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38009 = [new cljs.core.Keyword(null,"cities-map","cities-map",-517907717)];
var inst_38010 = (new cljs.core.PersistentVector(null,1,(5),inst_38008,inst_38009,null));
var inst_38011 = cities.core.get_data.call(null,inst_38010);
var inst_38012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38013 = [new cljs.core.Keyword(null,"proportions","proportions",-135582411),inst_38007];
var inst_38014 = (new cljs.core.PersistentVector(null,2,(5),inst_38012,inst_38013,null));
var inst_38015 = cities.core.get_data.call(null,inst_38014);
var inst_38016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38017 = [new cljs.core.Keyword(null,"colors","colors",1157174732),inst_38007];
var inst_38018 = (new cljs.core.PersistentVector(null,2,(5),inst_38016,inst_38017,null));
var inst_38019 = cities.core.get_data.call(null,inst_38018);
var inst_38024 = (function (){var colors = inst_38019;
var proportions = inst_38015;
var cities_map = inst_38011;
var profile = inst_38007;
var char$ = inst_37997;
var val = inst_37995;
var n = inst_37946;
return ((function (colors,proportions,cities_map,profile,char$,val,n,inst_37946,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,state_val_38051,c__30106__auto__,setup){
return (function iter__38020(s__38021){
return (new cljs.core.LazySeq(null,((function (colors,proportions,cities_map,profile,char$,val,n,inst_37946,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,state_val_38051,c__30106__auto__,setup){
return (function (){
var s__38021__$1 = s__38021;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38021__$1);
if(temp__4126__auto__){
var s__38021__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38021__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__38021__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__38023 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__38022 = (0);
while(true){
if((i__38022 < size__28943__auto__)){
var city = cljs.core._nth.call(null,c__28942__auto__,i__38022);
cljs.core.chunk_append.call(null,b__38023,(function (){var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var or__28188__auto__ = proportions.call(null,code);
if(cljs.core.truth_(or__28188__auto__)){
return or__28188__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),((10) * Math.sqrt.call(null,new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city))),new cljs.core.Keyword(null,"color","color",1011675173),colors.call(null,code),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null);
})());

var G__38099 = (i__38022 + (1));
i__38022 = G__38099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38023),iter__38020.call(null,cljs.core.chunk_rest.call(null,s__38021__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38023),null);
}
} else {
var city = cljs.core.first.call(null,s__38021__$2);
return cljs.core.cons.call(null,(function (){var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var or__28188__auto__ = proportions.call(null,code);
if(cljs.core.truth_(or__28188__auto__)){
return or__28188__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),((10) * Math.sqrt.call(null,new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city))),new cljs.core.Keyword(null,"color","color",1011675173),colors.call(null,code),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null);
})(),iter__38020.call(null,cljs.core.rest.call(null,s__38021__$2)));
}
} else {
return null;
}
break;
}
});})(colors,proportions,cities_map,profile,char$,val,n,inst_37946,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,state_val_38051,c__30106__auto__,setup))
,null,null));
});
;})(colors,proportions,cities_map,profile,char$,val,n,inst_37946,inst_37994,inst_37995,inst_37996,inst_37997,inst_37998,inst_37999,inst_38000,inst_38001,inst_38002,inst_38003,inst_38004,inst_38005,inst_38006,inst_38007,inst_38008,inst_38009,inst_38010,inst_38011,inst_38012,inst_38013,inst_38014,inst_38015,inst_38016,inst_38017,inst_38018,inst_38019,state_val_38051,c__30106__auto__,setup))
})();
var inst_38025 = cljs.core.vals.call(null,inst_38011);
var inst_38026 = inst_38024.call(null,inst_38025);
var inst_38027 = cljs.core.vec.call(null,inst_38026);
var inst_38028 = cities.core.get_scatter_chart.call(null,inst_38011,inst_37997,inst_37995,inst_38015,inst_38019,inst_38027);
var state_38050__$1 = state_38050;
var statearr_38073_38100 = state_38050__$1;
(statearr_38073_38100[(2)] = inst_38028);

(statearr_38073_38100[(1)] = (10));


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
var statearr_38077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38077[(0)] = state_machine__30092__auto__);

(statearr_38077[(1)] = (1));

return statearr_38077;
});
var state_machine__30092__auto____1 = (function (state_38050){
while(true){
var ret_value__30093__auto__ = (function (){try{while(true){
var result__30094__auto__ = switch__30091__auto__.call(null,state_38050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30094__auto__;
}
break;
}
}catch (e38078){if((e38078 instanceof Object)){
var ex__30095__auto__ = e38078;
var statearr_38079_38101 = state_38050;
(statearr_38079_38101[(5)] = ex__30095__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38102 = state_38050;
state_38050 = G__38102;
continue;
} else {
return ret_value__30093__auto__;
}
break;
}
});
state_machine__30092__auto__ = function(state_38050){
switch(arguments.length){
case 0:
return state_machine__30092__auto____0.call(this);
case 1:
return state_machine__30092__auto____1.call(this,state_38050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30092__auto____0;
state_machine__30092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30092__auto____1;
return state_machine__30092__auto__;
})()
;})(switch__30091__auto__,c__30106__auto__,setup))
})();
var state__30108__auto__ = (function (){var statearr_38080 = f__30107__auto__.call(null);
(statearr_38080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30106__auto__);

return statearr_38080;
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
cities.core.create_map = (function create_map(p__38104){
var map__38106 = p__38104;
var map__38106__$1 = ((cljs.core.seq_QMARK_.call(null,map__38106))?cljs.core.apply.call(null,cljs.core.hash_map,map__38106):map__38106);
var zoom = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var latlng = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"latlng","latlng",-199468611));
var id = cljs.core.get.call(null,map__38106__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var m = L.map(id).setView([new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(latlng),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(latlng)],zoom);
var tiles = L.tileLayer(cities.core.tile_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(16),new cljs.core.Keyword(null,"attribution","attribution",1937239286),cities.core.attribution], null));
tiles.addTo(m);

cljs.core.swap_BANG_.call(null,cities.core.app_state,((function (m,tiles,map__38106,map__38106__$1,zoom,latlng,id){
return (function (p1__38103_SHARP_){
return cljs.core.assoc.call(null,p1__38103_SHARP_,new cljs.core.Keyword(null,"map","map",1371690461),m);
});})(m,tiles,map__38106,map__38106__$1,zoom,latlng,id))
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
return (function (p1__38107_SHARP_){
return cljs.core.update_in.call(null,p1__38107_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null),cljs.core.partial.call(null,cljs.core.cons,circle));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"25%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(deref_doc)], null),(function (){var G__38109 = (((side instanceof cljs.core.Keyword))?side.fqn:null);
switch (G__38109) {
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
var temp__4124__auto___38127 = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));
if(cljs.core.truth_(temp__4124__auto___38127)){
var circles_38128 = temp__4124__auto___38127;
var seq__38119_38129 = cljs.core.seq.call(null,circles_38128);
var chunk__38120_38130 = null;
var count__38121_38131 = (0);
var i__38122_38132 = (0);
while(true){
if((i__38122_38132 < count__38121_38131)){
var circle_38133 = cljs.core._nth.call(null,chunk__38120_38130,i__38122_38132);
cities.core.remove_circle.call(null,themap,circle_38133);

var G__38134 = seq__38119_38129;
var G__38135 = chunk__38120_38130;
var G__38136 = count__38121_38131;
var G__38137 = (i__38122_38132 + (1));
seq__38119_38129 = G__38134;
chunk__38120_38130 = G__38135;
count__38121_38131 = G__38136;
i__38122_38132 = G__38137;
continue;
} else {
var temp__4126__auto___38138 = cljs.core.seq.call(null,seq__38119_38129);
if(temp__4126__auto___38138){
var seq__38119_38139__$1 = temp__4126__auto___38138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38119_38139__$1)){
var c__28975__auto___38140 = cljs.core.chunk_first.call(null,seq__38119_38139__$1);
var G__38141 = cljs.core.chunk_rest.call(null,seq__38119_38139__$1);
var G__38142 = c__28975__auto___38140;
var G__38143 = cljs.core.count.call(null,c__28975__auto___38140);
var G__38144 = (0);
seq__38119_38129 = G__38141;
chunk__38120_38130 = G__38142;
count__38121_38131 = G__38143;
i__38122_38132 = G__38144;
continue;
} else {
var circle_38145 = cljs.core.first.call(null,seq__38119_38139__$1);
cities.core.remove_circle.call(null,themap,circle_38145);

var G__38146 = cljs.core.next.call(null,seq__38119_38139__$1);
var G__38147 = null;
var G__38148 = (0);
var G__38149 = (0);
seq__38119_38129 = G__38146;
chunk__38120_38130 = G__38147;
count__38121_38131 = G__38148;
i__38122_38132 = G__38149;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__38123 = cljs.core.seq.call(null,cities__$1);
var chunk__38124 = null;
var count__38125 = (0);
var i__38126 = (0);
while(true){
if((i__38126 < count__38125)){
var city = cljs.core._nth.call(null,chunk__38124,i__38126);
var size_38150 = new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city);
var place_38151 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latlng","latlng",-199468611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),size_38150,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)], null);
cities.core.drop_circle.call(null,themap,place_38151,colors.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)));

var G__38152 = seq__38123;
var G__38153 = chunk__38124;
var G__38154 = count__38125;
var G__38155 = (i__38126 + (1));
seq__38123 = G__38152;
chunk__38124 = G__38153;
count__38125 = G__38154;
i__38126 = G__38155;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__38123);
if(temp__4126__auto__){
var seq__38123__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38123__$1)){
var c__28975__auto__ = cljs.core.chunk_first.call(null,seq__38123__$1);
var G__38156 = cljs.core.chunk_rest.call(null,seq__38123__$1);
var G__38157 = c__28975__auto__;
var G__38158 = cljs.core.count.call(null,c__28975__auto__);
var G__38159 = (0);
seq__38123 = G__38156;
chunk__38124 = G__38157;
count__38125 = G__38158;
i__38126 = G__38159;
continue;
} else {
var city = cljs.core.first.call(null,seq__38123__$1);
var size_38160 = new cljs.core.Keyword(null,"freq","freq",-1855845278).cljs$core$IFn$_invoke$arity$1(city);
var place_38161 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latlng","latlng",-199468611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1098693007),size_38160,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)], null);
cities.core.drop_circle.call(null,themap,place_38161,colors.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(city)));

var G__38162 = cljs.core.next.call(null,seq__38123__$1);
var G__38163 = null;
var G__38164 = (0);
var G__38165 = (0);
seq__38123 = G__38162;
chunk__38124 = G__38163;
count__38125 = G__38164;
i__38126 = G__38165;
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
return (function iter__38170(s__38171){
return (new cljs.core.LazySeq(null,((function (values_set,option){
return (function (){
var s__38171__$1 = s__38171;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38171__$1);
if(temp__4126__auto__){
var s__38171__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38171__$2)){
var c__28942__auto__ = cljs.core.chunk_first.call(null,s__38171__$2);
var size__28943__auto__ = cljs.core.count.call(null,c__28942__auto__);
var b__38173 = cljs.core.chunk_buffer.call(null,size__28943__auto__);
if((function (){var i__38172 = (0);
while(true){
if((i__38172 < size__28943__auto__)){
var val = cljs.core._nth.call(null,c__28942__auto__,i__38172);
cljs.core.chunk_append.call(null,b__38173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,val], null));

var G__38174 = (i__38172 + (1));
i__38172 = G__38174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38173),iter__38170.call(null,cljs.core.chunk_rest.call(null,s__38171__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38173),null);
}
} else {
var val = cljs.core.first.call(null,s__38171__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,val], null),iter__38170.call(null,cljs.core.rest.call(null,s__38171__$2)));
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
return (function (p1__38175_SHARP_){
return cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,path,values__$1.call(null,p1__38175_SHARP_.target.value));
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
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.app], null),document.getElementById("main-area"));

//# sourceMappingURL=core.js.map