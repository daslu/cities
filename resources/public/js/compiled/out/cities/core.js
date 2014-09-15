// Compiled by ClojureScript 0.0-2202
goog.provide('cities.core');
goog.require('cljs.core');
goog.require('reagent_forms.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('markdown.core');
goog.require('markdown.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('figwheel.client');
goog.require('reagent_forms.core');
goog.require('cljs.core.async');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cities.core.app_state !== 'undefined')
{} else
{cities.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1016963423),70], null),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1016963423),2800], null)], null));
}
cities.core.doc = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",1016956616),"\u05D3\u05EA",new cljs.core.Keyword(null,"val","val",1014020755),"\u05D9\u05D4\u05D5\u05D3\u05D9",new cljs.core.Keyword(null,"period","period",4317145395),"\u05D4\u05DB\u05DC"], null));
cities.core.ordered_values = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"religion","religion",4761436323),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05D9\u05D4\u05D5\u05D3\u05D9","\u05E0\u05D5\u05E6\u05E8\u05D9","\u05DE\u05D5\u05E1\u05DC\u05DE\u05D9","\u05D3\u05E8\u05D5\u05D6\u05D9","\u05D0\u05D7\u05E8 / \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2 / \u05DC\u05DC\u05D0 \u05E1\u05D9\u05D5\u05D5\u05D2 \u05D3\u05EA"], null),new cljs.core.Keyword(null,"origin","origin",4300251800),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05D9\u05E9\u05E8\u05D0\u05DC","\u05D0\u05E1\u05D9\u05D4","\u05D0\u05D9\u05E8\u05D5\u05E4\u05D4","\u05D0\u05DE\u05E8\u05D9\u05E7\u05D4-\u05D0\u05D5\u05E7\u05D9\u05D0\u05E0\u05D9\u05D4","\u05D0\u05E4\u05E8\u05D9\u05E7\u05D4","NA"], null)], null);
cities.core.periods = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05E2\u05D3 1947","1948-1954","1955-1964","1965-1974","1975-1984","1985-1989","1990-1994","1995-1999","2000-2004","2005 \u05D5\u05D9\u05D5\u05EA\u05E8","\u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2","\u05D2\u05E8 \u05D1\u05D9\u05D9\u05E9\u05D5\u05D1 \u05DE\u05DC\u05D9\u05D3\u05D4","\u05D1\u05E0\u05D9 0-14","\u05D4\u05DB\u05DC"], null);
cities.core.periods_entered = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05E2\u05D3 1947","1948-1954","1955-1964","1965-1974","1975-1984","1985-1989","1990-1994","1995-1999","2000-2004","2005 \u05D5\u05D9\u05D5\u05EA\u05E8"], null);
cities.core.draw_chart = (function draw_chart(p__46555){var map__46564 = p__46555;var map__46564__$1 = ((cljs.core.seq_QMARK_.call(null,map__46564))?cljs.core.apply.call(null,cljs.core.hash_map,map__46564):map__46564);var plot = cljs.core.get.call(null,map__46564__$1,new cljs.core.Keyword(null,"plot","plot",1017348179));var y_axis = cljs.core.get.call(null,map__46564__$1,new cljs.core.Keyword(null,"y-axis","y-axis",4522598375));var x_axis = cljs.core.get.call(null,map__46564__$1,new cljs.core.Keyword(null,"x-axis","x-axis",4493969224));var bounds = cljs.core.get.call(null,map__46564__$1,new cljs.core.Keyword(null,"bounds","bounds",3925666343));var div = cljs.core.get.call(null,map__46564__$1,new cljs.core.Keyword(null,"div","div",1014003715));var data_series = cljs.core.get.call(null,map__46564__$1,new cljs.core.Keyword(null,"data-series","data-series",2540132716));var map__46565 = div;var map__46565__$1 = ((cljs.core.seq_QMARK_.call(null,map__46565))?cljs.core.apply.call(null,cljs.core.hash_map,map__46565):map__46565);var height = cljs.core.get.call(null,map__46565__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__46565__$1,new cljs.core.Keyword(null,"width","width",1127031096));var id = cljs.core.get.call(null,map__46565__$1,new cljs.core.Keyword(null,"id","id",1013907597));var Chart = dimple.chart;var svg = dimple.newSvg([cljs.core.str("#"),cljs.core.str(id)].join(''),width,height);var dimple_chart = (new Chart(svg)).setBounds(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(bounds));var x = dimple_chart.addCategoryAxis("x",x_axis);var y = dimple_chart.addMeasureAxis("y",y_axis);var seq__46566_46572 = cljs.core.seq.call(null,data_series);var chunk__46567_46573 = null;var count__46568_46574 = 0;var i__46569_46575 = 0;while(true){
if((i__46569_46575 < count__46568_46574))
{var vec__46570_46576 = cljs.core._nth.call(null,chunk__46567_46573,i__46569_46575);var name_46577 = cljs.core.nth.call(null,vec__46570_46576,0,null);var data_46578 = cljs.core.nth.call(null,vec__46570_46576,1,null);var s_46579 = dimple_chart.addSeries(name_46577,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));x.addOrderRule("x");
(s_46579["data"] = cljs.core.clj__GT_js.call(null,data_46578));
{
var G__46580 = seq__46566_46572;
var G__46581 = chunk__46567_46573;
var G__46582 = count__46568_46574;
var G__46583 = (i__46569_46575 + 1);
seq__46566_46572 = G__46580;
chunk__46567_46573 = G__46581;
count__46568_46574 = G__46582;
i__46569_46575 = G__46583;
continue;
}
} else
{var temp__4126__auto___46584 = cljs.core.seq.call(null,seq__46566_46572);if(temp__4126__auto___46584)
{var seq__46566_46585__$1 = temp__4126__auto___46584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46566_46585__$1))
{var c__27003__auto___46586 = cljs.core.chunk_first.call(null,seq__46566_46585__$1);{
var G__46587 = cljs.core.chunk_rest.call(null,seq__46566_46585__$1);
var G__46588 = c__27003__auto___46586;
var G__46589 = cljs.core.count.call(null,c__27003__auto___46586);
var G__46590 = 0;
seq__46566_46572 = G__46587;
chunk__46567_46573 = G__46588;
count__46568_46574 = G__46589;
i__46569_46575 = G__46590;
continue;
}
} else
{var vec__46571_46591 = cljs.core.first.call(null,seq__46566_46585__$1);var name_46592 = cljs.core.nth.call(null,vec__46571_46591,0,null);var data_46593 = cljs.core.nth.call(null,vec__46571_46591,1,null);var s_46594 = dimple_chart.addSeries(name_46592,plot,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));x.addOrderRule("x");
(s_46594["data"] = cljs.core.clj__GT_js.call(null,data_46593));
{
var G__46595 = cljs.core.next.call(null,seq__46566_46585__$1);
var G__46596 = null;
var G__46597 = 0;
var G__46598 = 0;
seq__46566_46572 = G__46595;
chunk__46567_46573 = G__46596;
count__46568_46574 = G__46597;
i__46569_46575 = G__46598;
continue;
}
}
} else
{}
}
break;
}
dimple_chart.addLegend("60%","10%","40%","40%","left");
return dimple_chart.draw();
});
cities.core.get_chart_spec_with_div = (function get_chart_spec_with_div(id,spec){return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"width","width",1127031096),400,new cljs.core.Keyword(null,"height","height",4087841945),400], null));
});
cities.core.chart_component = (function chart_component(id,side,chart_spec){var setup = (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),"relative",new cljs.core.Keyword(null,"direction","direction",4346280689),"ltr"], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),id,new cljs.core.Keyword(null,"ref","ref",1014017029),id,new cljs.core.Keyword(null,"id","id",1013907597),id], null)], null);
});var do_render_BANG_ = ((function (setup){
return (function (){var n = document.getElementById(id);var spec = new cljs.core.Keyword(null,"chart-spec","chart-spec",2753392572).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.app_state)));while(true){
if(cljs.core.truth_(n.hasChildNodes()))
{n.removeChild(n.lastChild);
{
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(spec))
{return cities.core.draw_chart.call(null,cities.core.get_chart_spec_with_div.call(null,id,spec));
} else
{return null;
}
});})(setup))
;return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",4374279432),setup,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",1606210541),do_render_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",2424968217),do_render_BANG_], null));
});
cities.core.tile_url = "//{s}.tiles.mapbox.com/v3/jcheng.map-5ebohr46/{z}/{x}/{y}.png";
cities.core.attribution = "Maps by <a href=\"http://www.mapbox.com/\">Mapbox</a>";
cities.core.create_map = (function create_map(p__46600){var map__46602 = p__46600;var map__46602__$1 = ((cljs.core.seq_QMARK_.call(null,map__46602))?cljs.core.apply.call(null,cljs.core.hash_map,map__46602):map__46602);var zoom = cljs.core.get.call(null,map__46602__$1,new cljs.core.Keyword(null,"zoom","zoom",1017648965));var latlng = cljs.core.get.call(null,map__46602__$1,new cljs.core.Keyword(null,"latlng","latlng",4198997144));var id = cljs.core.get.call(null,map__46602__$1,new cljs.core.Keyword(null,"id","id",1013907597));var m = L.map(id).setView([new cljs.core.Keyword(null,"lat","lat",1014011153).cljs$core$IFn$_invoke$arity$1(latlng),new cljs.core.Keyword(null,"lng","lng",1014011543).cljs$core$IFn$_invoke$arity$1(latlng)],zoom);var tiles = L.tileLayer(cities.core.tile_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",1858199241),16,new cljs.core.Keyword(null,"attribution","attribution",704021489),cities.core.attribution], null));tiles.addTo(m);
cljs.core.swap_BANG_.call(null,cities.core.app_state,((function (m,tiles,map__46602,map__46602__$1,zoom,latlng,id){
return (function (p1__46599_SHARP_){return cljs.core.assoc.call(null,p1__46599_SHARP_,new cljs.core.Keyword(null,"map","map",1014012110),m);
});})(m,tiles,map__46602,map__46602__$1,zoom,latlng,id))
);
return m;
});
cities.core.drop_circle = (function drop_circle(map1,place,color){var circle = L.circle(cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"latlng","latlng",4198997144).cljs$core$IFn$_invoke$arity$1(place)))),(10 * Math.sqrt.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(place))),{"weight": 2, "color": (function (){var or__26255__auto__ = color;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return "#333333";
}
})()}).addTo(map1);circle.on("click",((function (circle){
return (function (e){return cljs.core.swap_BANG_.call(null,cities.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"code","code",1016963423)], null),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(place));
});})(circle))
);
circle.on("contextmenu",((function (circle){
return (function (e){return cljs.core.swap_BANG_.call(null,cities.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"code","code",1016963423)], null),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(place));
});})(circle))
);
return cljs.core.swap_BANG_.call(null,cities.core.app_state,((function (circle){
return (function (p1__46603_SHARP_){return cljs.core.update_in.call(null,p1__46603_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",1796854037)], null),cljs.core.partial.call(null,cljs.core.cons,circle));
});})(circle))
);
});
cities.core.remove_circle = (function remove_circle(map1,circle){return map1.removeLayer(circle);
});
cities.core.map_component = (function map_component(id){var colors = new cljs.core.Keyword(null,"colors","colors",3954028770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));var setup = ((function (colors){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",4087841945),1000,new cljs.core.Keyword(null,"width","width",1127031096),400,new cljs.core.Keyword(null,"position","position",1761709211),"relative",new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"10px"], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),id,new cljs.core.Keyword(null,"ref","ref",1014017029),id,new cljs.core.Keyword(null,"id","id",1013907597),id], null)], null);
});})(colors))
;var do_render_BANG_ = ((function (colors,setup){
return (function (){var m = cities.core.create_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"latlng","latlng",4198997144),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",1014011153),32,new cljs.core.Keyword(null,"lng","lng",1014011543),35], null),new cljs.core.Keyword(null,"zoom","zoom",1017648965),9], null));return null;
});})(colors,setup))
;return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",4374279432),setup,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",1606210541),do_render_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",2424968217),do_render_BANG_], null));
});
cities.core.cache = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.already_sent = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.eval_chans = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.eval_cache = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cities.core.req_eval = (function req_eval(path,form,transf){var code_string = cljs.core.pr_str.call(null,form);var update_state = ((function (code_string){
return (function (result){return cljs.core.swap_BANG_.call(null,cities.core.app_state,cljs.core.assoc_in,path,transf.call(null,result));
});})(code_string))
;var update_cache_and_state = ((function (code_string,update_state){
return (function (result){cljs.core.swap_BANG_.call(null,cities.core.eval_cache,cljs.core.assoc,code_string,result);
return update_state.call(null,result);
});})(code_string,update_state))
;var temp__4124__auto__ = cljs.core.deref.call(null,cities.core.eval_cache).call(null,code_string);if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;return update_state.call(null,result);
} else
{if(cljs.core.not.call(null,cljs.core.deref.call(null,cities.core.eval_chans).call(null,code_string)))
{var ch = cljs.core.async.chan.call(null,1);cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval",code_string], null));
ajax.core.POST.call(null,"/eval",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",4313443576),code_string,new cljs.core.Keyword(null,"handler","handler",1706707644),((function (ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function (response){cljs.core.async.put_BANG_.call(null,ch,response);
return cljs.core.async.close_BANG_.call(null,ch);
});})(ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
], null));
cljs.core.swap_BANG_.call(null,cities.core.eval_chans,cljs.core.assoc,code_string,ch);
var c__28106__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__28106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function (){var f__28107__auto__ = (function (){var switch__28091__auto__ = ((function (c__28106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function (state_46623){var state_val_46624 = (state_46623[1]);if((state_val_46624 === 2))
{var inst_46619 = (state_46623[2]);var inst_46620 = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(inst_46619);var inst_46621 = update_cache_and_state.call(null,inst_46620);var state_46623__$1 = state_46623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46623__$1,inst_46621);
} else
{if((state_val_46624 === 1))
{var state_46623__$1 = state_46623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46623__$1,2,ch);
} else
{return null;
}
}
});})(c__28106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
;return ((function (switch__28091__auto__,c__28106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state){
return (function() {
var state_machine__28092__auto__ = null;
var state_machine__28092__auto____0 = (function (){var statearr_46628 = [null,null,null,null,null,null,null];(statearr_46628[0] = state_machine__28092__auto__);
(statearr_46628[1] = 1);
return statearr_46628;
});
var state_machine__28092__auto____1 = (function (state_46623){while(true){
var ret_value__28093__auto__ = (function (){try{while(true){
var result__28094__auto__ = switch__28091__auto__.call(null,state_46623);if(cljs.core.keyword_identical_QMARK_.call(null,result__28094__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__28094__auto__;
}
break;
}
}catch (e46629){if((e46629 instanceof Object))
{var ex__28095__auto__ = e46629;var statearr_46630_46632 = state_46623;(statearr_46630_46632[5] = ex__28095__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46623);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46633 = state_46623;
state_46623 = G__46633;
continue;
}
} else
{return ret_value__28093__auto__;
}
break;
}
});
state_machine__28092__auto__ = function(state_46623){
switch(arguments.length){
case 0:
return state_machine__28092__auto____0.call(this);
case 1:
return state_machine__28092__auto____1.call(this,state_46623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__28092__auto____0;
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__28092__auto____1;
return state_machine__28092__auto__;
})()
;})(switch__28091__auto__,c__28106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
})();var state__28108__auto__ = (function (){var statearr_46631 = f__28107__auto__.call(null);(statearr_46631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28106__auto__);
return statearr_46631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28108__auto__);
});})(c__28106__auto__,ch,temp__4124__auto__,code_string,update_state,update_cache_and_state))
);
return c__28106__auto__;
} else
{return null;
}
}
});
cities.core.char_to_key = new cljs.core.PersistentArrayMap(null, 2, ["\u05D3\u05EA",new cljs.core.Keyword(null,"religion","religion",4761436323),"\u05DE\u05D5\u05E6\u05D0",new cljs.core.Keyword(null,"origin","origin",4300251800)], null);
cities.core.city_component = (function city_component(side){var temp__4124__auto__ = new cljs.core.Keyword(null,"cities-map","cities-map",4230085706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));if(cljs.core.truth_(temp__4124__auto__))
{var cities_map = temp__4124__auto__;var city = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.app_state)))));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"30px",new cljs.core.Keyword(null,"width","width",1127031096),500], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),(function (){var chart_spec = new cljs.core.Keyword(null,"chart-spec","chart-spec",2753392572).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.app_state)));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chart_component,[cljs.core.str("chart_"),cljs.core.str(cljs.core.name.call(null,side))].join(''),side,chart_spec], null);
})()], null)], null);
} else
{return null;
}
});
cities.core.comparison_component = (function comparison_component(){var temp__4124__auto__ = new cljs.core.Keyword(null,"cities-map","cities-map",4230085706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));if(cljs.core.truth_(temp__4124__auto__))
{var cities_map = temp__4124__auto__;var two_cities = (function (){var iter__26972__auto__ = ((function (cities_map,temp__4124__auto__){
return (function iter__46638(s__46639){return (new cljs.core.LazySeq(null,((function (cities_map,temp__4124__auto__){
return (function (){var s__46639__$1 = s__46639;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46639__$1);if(temp__4126__auto__)
{var s__46639__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46639__$2))
{var c__26970__auto__ = cljs.core.chunk_first.call(null,s__46639__$2);var size__26971__auto__ = cljs.core.count.call(null,c__26970__auto__);var b__46641 = cljs.core.chunk_buffer.call(null,size__26971__auto__);if((function (){var i__46640 = 0;while(true){
if((i__46640 < size__26971__auto__))
{var side = cljs.core._nth.call(null,c__26970__auto__,i__46640);cljs.core.chunk_append.call(null,b__46641,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.app_state))))));
{
var G__46642 = (i__46640 + 1);
i__46640 = G__46642;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46641),iter__46638.call(null,cljs.core.chunk_rest.call(null,s__46639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46641),null);
}
} else
{var side = cljs.core.first.call(null,s__46639__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cities_map.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.app_state))))),iter__46638.call(null,cljs.core.rest.call(null,s__46639__$2)));
}
} else
{return null;
}
break;
}
});})(cities_map,temp__4124__auto__))
,null,null));
});})(cities_map,temp__4124__auto__))
;return iter__26972__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014)], null));
})();return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"30px",new cljs.core.Keyword(null,"width","width",1127031096),1000], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chart_component,[cljs.core.str("chart_comparison")].join('')], null)], null)], null);
} else
{return null;
}
});
cities.core.help = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#dddddd"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"\u05D4\u05D5\u05E8\u05D0\u05D5\u05EA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"\u05E9\u05DC\u05D5\u05DD."], null)], null);
cities.core.render_cities_BANG_ = (function render_cities_BANG_(themap,colors){var temp__4124__auto__ = cljs.core.filter.call(null,new cljs.core.Keyword(null,"freq","freq",1017055722),cljs.core.vals.call(null,new cljs.core.Keyword(null,"cities-map","cities-map",4230085706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state))));if(cljs.core.truth_(temp__4124__auto__))
{var cities__$1 = temp__4124__auto__;var temp__4124__auto___46660__$1 = new cljs.core.Keyword(null,"circles","circles",1796854037).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));if(cljs.core.truth_(temp__4124__auto___46660__$1))
{var circles_46661 = temp__4124__auto___46660__$1;var seq__46652_46662 = cljs.core.seq.call(null,circles_46661);var chunk__46653_46663 = null;var count__46654_46664 = 0;var i__46655_46665 = 0;while(true){
if((i__46655_46665 < count__46654_46664))
{var circle_46666 = cljs.core._nth.call(null,chunk__46653_46663,i__46655_46665);cities.core.remove_circle.call(null,themap,circle_46666);
{
var G__46667 = seq__46652_46662;
var G__46668 = chunk__46653_46663;
var G__46669 = count__46654_46664;
var G__46670 = (i__46655_46665 + 1);
seq__46652_46662 = G__46667;
chunk__46653_46663 = G__46668;
count__46654_46664 = G__46669;
i__46655_46665 = G__46670;
continue;
}
} else
{var temp__4126__auto___46671 = cljs.core.seq.call(null,seq__46652_46662);if(temp__4126__auto___46671)
{var seq__46652_46672__$1 = temp__4126__auto___46671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46652_46672__$1))
{var c__27003__auto___46673 = cljs.core.chunk_first.call(null,seq__46652_46672__$1);{
var G__46674 = cljs.core.chunk_rest.call(null,seq__46652_46672__$1);
var G__46675 = c__27003__auto___46673;
var G__46676 = cljs.core.count.call(null,c__27003__auto___46673);
var G__46677 = 0;
seq__46652_46662 = G__46674;
chunk__46653_46663 = G__46675;
count__46654_46664 = G__46676;
i__46655_46665 = G__46677;
continue;
}
} else
{var circle_46678 = cljs.core.first.call(null,seq__46652_46672__$1);cities.core.remove_circle.call(null,themap,circle_46678);
{
var G__46679 = cljs.core.next.call(null,seq__46652_46672__$1);
var G__46680 = null;
var G__46681 = 0;
var G__46682 = 0;
seq__46652_46662 = G__46679;
chunk__46653_46663 = G__46680;
count__46654_46664 = G__46681;
i__46655_46665 = G__46682;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,cities.core.app_state,((function (circles_46661,temp__4124__auto___46660__$1,cities__$1,temp__4124__auto__){
return (function (p1__46643_SHARP_){return cljs.core.assoc_in.call(null,p1__46643_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",1796854037)], null),cljs.core.PersistentVector.EMPTY);
});})(circles_46661,temp__4124__auto___46660__$1,cities__$1,temp__4124__auto__))
);
} else
{}
var seq__46656 = cljs.core.seq.call(null,cities__$1);var chunk__46657 = null;var count__46658 = 0;var i__46659 = 0;while(true){
if((i__46659 < count__46658))
{var city = cljs.core._nth.call(null,chunk__46657,i__46659);var temp__4124__auto___46683__$1 = new cljs.core.Keyword(null,"freq","freq",1017055722).cljs$core$IFn$_invoke$arity$1(city);if(cljs.core.truth_(temp__4124__auto___46683__$1))
{var size_46684 = temp__4124__auto___46683__$1;var place_46685 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latlng","latlng",4198997144),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",1014011153),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"lng","lng",1014011543),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1017434995),size_46684,new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(city)], null);cities.core.drop_circle.call(null,themap,place_46685,colors.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(city)));
} else
{}
{
var G__46686 = seq__46656;
var G__46687 = chunk__46657;
var G__46688 = count__46658;
var G__46689 = (i__46659 + 1);
seq__46656 = G__46686;
chunk__46657 = G__46687;
count__46658 = G__46688;
i__46659 = G__46689;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46656);if(temp__4126__auto__)
{var seq__46656__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46656__$1))
{var c__27003__auto__ = cljs.core.chunk_first.call(null,seq__46656__$1);{
var G__46690 = cljs.core.chunk_rest.call(null,seq__46656__$1);
var G__46691 = c__27003__auto__;
var G__46692 = cljs.core.count.call(null,c__27003__auto__);
var G__46693 = 0;
seq__46656 = G__46690;
chunk__46657 = G__46691;
count__46658 = G__46692;
i__46659 = G__46693;
continue;
}
} else
{var city = cljs.core.first.call(null,seq__46656__$1);var temp__4124__auto___46694__$1 = new cljs.core.Keyword(null,"freq","freq",1017055722).cljs$core$IFn$_invoke$arity$1(city);if(cljs.core.truth_(temp__4124__auto___46694__$1))
{var size_46695 = temp__4124__auto___46694__$1;var place_46696 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latlng","latlng",4198997144),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",1014011153),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"lng","lng",1014011543),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(city),new cljs.core.Keyword(null,"size","size",1017434995),size_46695,new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(city)], null);cities.core.drop_circle.call(null,themap,place_46696,colors.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(city)));
} else
{}
{
var G__46697 = cljs.core.next.call(null,seq__46656__$1);
var G__46698 = null;
var G__46699 = 0;
var G__46700 = 0;
seq__46656 = G__46697;
chunk__46657 = G__46698;
count__46658 = G__46699;
i__46659 = G__46700;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cities.core.help_component = (function (){var show_help_QMARK_ = reagent.core.atom.call(null,false);return ((function (show_help_QMARK_){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"value","value",1125876963),(cljs.core.truth_(cljs.core.deref.call(null,show_help_QMARK_))?"\u05DC\u05D4\u05E1\u05EA\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D4\u05D5\u05E8\u05D0\u05D5\u05EA?":"\u05DC\u05D4\u05E6\u05D9\u05D2 \u05D0\u05EA \u05D4\u05D4\u05D5\u05E8\u05D0\u05D5\u05EA?"),new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (show_help_QMARK_){
return (function (){return cljs.core.swap_BANG_.call(null,show_help_QMARK_,cljs.core.not);
});})(show_help_QMARK_))
], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,show_help_QMARK_))?cities.core.help:null)], null);
});
;})(show_help_QMARK_))
})();
cities.core.req_chart = (function req_chart(path,city_code,type,char$,val,period){var G__46704 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"freq","freq",1017055722),G__46704))
{return cities.core.req_eval.call(null,path,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,period),cities.core.char_to_key.call(null,char$)),city_code),new cljs.core.Symbol("cities.data","get-freqs","cities.data/get-freqs",2122407207,null)),((function (G__46704){
return (function (freqs){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bounds","bounds",3925666343),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),"5%",new cljs.core.Keyword(null,"y","y",1013904363),"15%",new cljs.core.Keyword(null,"width","width",1127031096),"80%",new cljs.core.Keyword(null,"height","height",4087841945),"50%"], null),new cljs.core.Keyword(null,"x-axis","x-axis",4493969224),"x",new cljs.core.Keyword(null,"y-axis","y-axis",4522598375),"y",new cljs.core.Keyword(null,"plot","plot",1017348179),dimple.plot.bar,new cljs.core.Keyword(null,"data-series","data-series",2540132716),new cljs.core.PersistentArrayMap(null, 2, ["\u05DB\u05DC \u05D4\u05E9\u05D0\u05E8",cljs.core.filter.call(null,((function (G__46704){
return (function (p1__46701_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__46701_SHARP_),val);
});})(G__46704))
,freqs),"\u05E2\u05E8\u05DA \u05E0\u05D1\u05D7\u05E8",cljs.core.filter.call(null,((function (G__46704){
return (function (p1__46702_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__46702_SHARP_),val);
});})(G__46704))
,freqs)], null)], null);
});})(G__46704))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{return null;
}
}
});
cities.core.req_charts = (function req_charts(char$,val,period){var seq__46709 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014)], null));var chunk__46710 = null;var count__46711 = 0;var i__46712 = 0;while(true){
if((i__46712 < count__46711))
{var side = cljs.core._nth.call(null,chunk__46710,i__46712);var temp__4124__auto___46713 = new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.app_state)));if(cljs.core.truth_(temp__4124__auto___46713))
{var city_code_46714 = temp__4124__auto___46713;cities.core.req_chart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [side,new cljs.core.Keyword(null,"chart-spec","chart-spec",2753392572)], null),city_code_46714,new cljs.core.Keyword(null,"freq","freq",1017055722),char$,val,period);
} else
{}
{
var G__46715 = seq__46709;
var G__46716 = chunk__46710;
var G__46717 = count__46711;
var G__46718 = (i__46712 + 1);
seq__46709 = G__46715;
chunk__46710 = G__46716;
count__46711 = G__46717;
i__46712 = G__46718;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46709);if(temp__4126__auto__)
{var seq__46709__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46709__$1))
{var c__27003__auto__ = cljs.core.chunk_first.call(null,seq__46709__$1);{
var G__46719 = cljs.core.chunk_rest.call(null,seq__46709__$1);
var G__46720 = c__27003__auto__;
var G__46721 = cljs.core.count.call(null,c__27003__auto__);
var G__46722 = 0;
seq__46709 = G__46719;
chunk__46710 = G__46720;
count__46711 = G__46721;
i__46712 = G__46722;
continue;
}
} else
{var side = cljs.core.first.call(null,seq__46709__$1);var temp__4124__auto___46723 = new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(side.call(null,cljs.core.deref.call(null,cities.core.app_state)));if(cljs.core.truth_(temp__4124__auto___46723))
{var city_code_46724 = temp__4124__auto___46723;cities.core.req_chart.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [side,new cljs.core.Keyword(null,"chart-spec","chart-spec",2753392572)], null),city_code_46724,new cljs.core.Keyword(null,"freq","freq",1017055722),char$,val,period);
} else
{}
{
var G__46725 = cljs.core.next.call(null,seq__46709__$1);
var G__46726 = null;
var G__46727 = 0;
var G__46728 = 0;
seq__46709 = G__46725;
chunk__46710 = G__46726;
count__46711 = G__46727;
i__46712 = G__46728;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cities.core.req_colors = (function req_colors(char$,val,period){return cities.core.req_eval.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",3954028770)], null),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,period),val),cities.core.char_to_key.call(null,char$)),new cljs.core.Symbol("cities.data","get-colors","cities.data/get-colors",109970724,null)),cljs.core.identity);
});
cities.core.chooser_component = (function chooser_component(path,values,title){var option = (function (val){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"10px",new cljs.core.Keyword(null,"background","background",3976677536),((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cities.core.doc),path),val))?"#ee7777":"#cccccc")], null),new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,path,val);
})], null)], null);
});return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"10px"], null)], null),[cljs.core.str(title),cljs.core.str(":")].join('')], null),(function (){var iter__26972__auto__ = ((function (option){
return (function iter__46733(s__46734){return (new cljs.core.LazySeq(null,((function (option){
return (function (){var s__46734__$1 = s__46734;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46734__$1);if(temp__4126__auto__)
{var s__46734__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46734__$2))
{var c__26970__auto__ = cljs.core.chunk_first.call(null,s__46734__$2);var size__26971__auto__ = cljs.core.count.call(null,c__26970__auto__);var b__46736 = cljs.core.chunk_buffer.call(null,size__26971__auto__);if((function (){var i__46735 = 0;while(true){
if((i__46735 < size__26971__auto__))
{var val = cljs.core._nth.call(null,c__26970__auto__,i__46735);cljs.core.chunk_append.call(null,b__46736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,val], null));
{
var G__46737 = (i__46735 + 1);
i__46735 = G__46737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46736),iter__46733.call(null,cljs.core.chunk_rest.call(null,s__46734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46736),null);
}
} else
{var val = cljs.core.first.call(null,s__46734__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,val], null),iter__46733.call(null,cljs.core.rest.call(null,s__46734__$2)));
}
} else
{return null;
}
break;
}
});})(option))
,null,null));
});})(option))
;return iter__26972__auto__.call(null,values);
})()], null);
});
cities.core.slider_component = (function slider_component(path,values,title){var values__$1 = cljs.core.vec.call(null,values);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),1500], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"10px"], null)], null),[cljs.core.str(title),cljs.core.str(":")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"10px",new cljs.core.Keyword(null,"width","width",1127031096),"400px"], null),new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"min","min",1014012356),0,new cljs.core.Keyword(null,"max","max",1014012118),(cljs.core.count.call(null,values__$1) - 1),new cljs.core.Keyword(null,"on-keypress","on-keypress",4059806948),((function (values__$1){
return (function (){return alert("A");
});})(values__$1))
,new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (values__$1){
return (function (p1__46738_SHARP_){return cljs.core.swap_BANG_.call(null,cities.core.doc,cljs.core.assoc_in,path,values__$1.call(null,p1__46738_SHARP_.target.value));
});})(values__$1))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",2685668404),"inline-block",new cljs.core.Keyword(null,"padding","padding",4502531971),"10px"], null)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,cities.core.doc),path)], null)], null);
});
cities.core.req_eval.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cities-map","cities-map",4230085706)], null),cljs.core.list(new cljs.core.Symbol("cities.data","cities-map","cities.data/cities-map",790970419,null)),cljs.core.identity);
cities.core.req_eval.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"possible-values","possible-values",1329545328)], null),cljs.core.list(new cljs.core.Symbol("cities.data","possible-values","cities.data/possible-values",1510114413,null)),cljs.core.identity);
cities.core.get_period = (function get_period(){var or__26255__auto__ = (function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"period-type","period-type",4302610232).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc));if(cljs.core.truth_(temp__4124__auto__))
{var period_type = temp__4124__auto__;if(cljs.core._EQ_.call(null,period_type,"\u05D4\u05D9\u05D2\u05E8\u05D5 \u05DC\u05D9\u05E9\u05D5\u05D1 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA"))
{var temp__4124__auto____$1 = new cljs.core.Keyword(null,"chosen-period","chosen-period",4706659310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc));if(cljs.core.truth_(temp__4124__auto____$1))
{var chosen_period = temp__4124__auto____$1;return chosen_period;
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
})();if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return "\u05D4\u05DB\u05DC";
}
});
cities.core.app = (function app(){return (function (){return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),"100%",new cljs.core.Keyword(null,"direction","direction",4346280689),"rtl",new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#aaaaaa"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.help_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));if(cljs.core.truth_(temp__4124__auto__))
{var themap = temp__4124__auto__;var colors = (function (){var or__26255__auto__ = new cljs.core.Keyword(null,"colors","colors",3954028770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.app_state));if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rendering cities",cities.core.get_period.call(null)], null));
cities.core.render_cities_BANG_.call(null,themap,colors);
return ".";
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",1111430606),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.map_component,"map"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chooser_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"period-type","period-type",4302610232)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05DB\u05DC \u05D4\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4","\u05D4\u05D9\u05D2\u05E8\u05D5 \u05DC\u05D9\u05E9\u05D5\u05D1 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA"], null),"\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D4"], null),((cljs.core._EQ_.call(null,"\u05D4\u05D9\u05D2\u05E8\u05D5 \u05DC\u05D9\u05E9\u05D5\u05D1 \u05D1\u05EA\u05E7\u05D5\u05E4\u05D4 \u05DE\u05E1\u05D5\u05D9\u05DE\u05EA",cljs.core.deref.call(null,cities.core.doc).call(null,new cljs.core.Keyword(null,"period-type","period-type",4302610232))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.slider_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chosen-period","chosen-period",4706659310)], null),cities.core.periods_entered,"\u05EA\u05E7\u05D5\u05E4\u05D4"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chooser_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",1016956616)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u05D3\u05EA","\u05DE\u05D5\u05E6\u05D0"], null),"\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF \u05DC\u05E0\u05D9\u05EA\u05D5\u05D7"], null),(function (){var temp__4124__auto__ = cljs.core.deref.call(null,cities.core.app_state).call(null,new cljs.core.Keyword(null,"possible-values","possible-values",1329545328));if(cljs.core.truth_(temp__4124__auto__))
{var possible_values = temp__4124__auto__;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.chooser_component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",1014020755)], null),cljs.core.vec.call(null,possible_values.call(null,cities.core.char_to_key.call(null,new cljs.core.Keyword(null,"char","char",1016956616).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cities.core.doc))))),"\u05E2\u05E8\u05DA \u05E0\u05D1\u05D7\u05E8"], null);
} else
{return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),(function (){var temp__4124__auto___46739 = cljs.core.deref.call(null,cities.core.doc).call(null,new cljs.core.Keyword(null,"char","char",1016956616));if(cljs.core.truth_(temp__4124__auto___46739))
{var char_46740 = temp__4124__auto___46739;var temp__4124__auto___46741__$1 = cljs.core.deref.call(null,cities.core.doc).call(null,new cljs.core.Keyword(null,"val","val",1014020755));if(cljs.core.truth_(temp__4124__auto___46741__$1))
{var val_46742 = temp__4124__auto___46741__$1;cities.core.req_charts.call(null,char_46740,val_46742,cities.core.get_period.call(null));
cities.core.req_colors.call(null,char_46740,val_46742,cities.core.get_period.call(null));
} else
{}
} else
{}
return "";
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.city_component,new cljs.core.Keyword(null,"right","right",1122416014)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.city_component,new cljs.core.Keyword(null,"left","left",1017222009)], null)], null);
});
});
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cities.core.app], null),document.getElementById("main-area"));
}));

//# sourceMappingURL=core.js.map