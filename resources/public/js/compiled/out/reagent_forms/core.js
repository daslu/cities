// Compiled by ClojureScript 0.0-2511
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,(function (current_value){
return cljs.core.reduce.call(null,(function (p1__36498_SHARP_,p2__36497_SHARP_){
var or__28519__auto__ = p2__36497_SHARP_.call(null,reagent_forms.core.id__GT_path.call(null,id),value,p1__36498_SHARP_);
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return p1__36498_SHARP_;
}
}),cljs.core.assoc_in.call(null,current_value,reagent_forms.core.id__GT_path.call(null,id),value),events);
}));
});
});
reagent_forms.core.format_type = (function (){var method_table__29416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__,hierarchy__29420__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__,hierarchy__29420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29420__auto__,method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n)){
return n;
} else {
return parsed;
}
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
reagent_forms.core.bind = (function (){var method_table__29416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__,hierarchy__29420__auto__){
return (function (p__36499,_){
var map__36500 = p__36499;
var map__36500__$1 = ((cljs.core.seq_QMARK_.call(null,map__36500))?cljs.core.apply.call(null,cljs.core.hash_map,map__36500):map__36500);
var field = cljs.core.get.call(null,map__36500__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__,hierarchy__29420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29420__auto__,method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__36502,p__36503){
var map__36504 = p__36502;
var map__36504__$1 = ((cljs.core.seq_QMARK_.call(null,map__36504))?cljs.core.apply.call(null,cljs.core.hash_map,map__36504):map__36504);
var fmt = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__36505 = p__36503;
var map__36505__$1 = ((cljs.core.seq_QMARK_.call(null,map__36505))?cljs.core.apply.call(null,cljs.core.hash_map,map__36505):map__36505);
var save_BANG_ = cljs.core.get.call(null,map__36505__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__36505__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__28519__auto__ = get.call(null,id);
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return "";
}
})();
if(cljs.core.truth_(fmt)){
return goog.string.format(fmt,value);
} else {
return value;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__36504,map__36504__$1,fmt,id,field,map__36505,map__36505__$1,save_BANG_,get){
return (function (p1__36501_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__36501_SHARP_)));
});})(map__36504,map__36504__$1,fmt,id,field,map__36505,map__36505__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__36506,p__36507){
var map__36508 = p__36506;
var map__36508__$1 = ((cljs.core.seq_QMARK_.call(null,map__36508))?cljs.core.apply.call(null,cljs.core.hash_map,map__36508):map__36508);
var id = cljs.core.get.call(null,map__36508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__36509 = p__36507;
var map__36509__$1 = ((cljs.core.seq_QMARK_.call(null,map__36509))?cljs.core.apply.call(null,cljs.core.hash_map,map__36509):map__36509);
var checked = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var save_BANG_ = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__36508,map__36508__$1,id,map__36509,map__36509__$1,checked,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.swap_BANG_.call(null,checked,cljs.core.not));
});})(map__36508,map__36508__$1,id,map__36509,map__36509__$1,checked,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__36510,opts,p__36511){
var vec__36514 = p__36510;
var type = cljs.core.nth.call(null,vec__36514,(0),null);
var attrs = cljs.core.nth.call(null,vec__36514,(1),null);
var body = cljs.core.nthnext.call(null,vec__36514,(2));
var vec__36515 = p__36511;
var default_attrs = cljs.core.nth.call(null,vec__36515,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var set_attrs = function (p__36510,opts,var_args){
var p__36511 = null;
if (arguments.length > 2) {
  p__36511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attrs__delegate.call(this,p__36510,opts,p__36511);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__36516){
var p__36510 = cljs.core.first(arglist__36516);
arglist__36516 = cljs.core.next(arglist__36516);
var opts = cljs.core.first(arglist__36516);
var p__36511 = cljs.core.rest(arglist__36516);
return set_attrs__delegate(p__36510,opts,p__36511);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__29416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__,hierarchy__29420__auto__){
return (function (p__36517,_){
var vec__36518 = p__36517;
var ___$1 = cljs.core.nth.call(null,vec__36518,(0),null);
var map__36519 = cljs.core.nth.call(null,vec__36518,(1),null);
var map__36519__$1 = ((cljs.core.seq_QMARK_.call(null,map__36519))?cljs.core.apply.call(null,cljs.core.hash_map,map__36519):map__36519);
var field = cljs.core.get.call(null,map__36519__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__,hierarchy__29420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29420__auto__,method_table__29416__auto__,prefer_table__29417__auto__,method_cache__29418__auto__,cached_hierarchy__29419__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__36520,opts){
var vec__36521 = p__36520;
var _ = cljs.core.nth.call(null,vec__36521,(0),null);
var map__36522 = cljs.core.nth.call(null,vec__36521,(1),null);
var map__36522__$1 = ((cljs.core.seq_QMARK_.call(null,map__36522))?cljs.core.apply.call(null,cljs.core.hash_map,map__36522):map__36522);
var field = cljs.core.get.call(null,map__36522__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__36521;
return ((function (vec__36521,_,map__36522,map__36522__$1,field,component){
return (function (){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(vec__36521,_,map__36522,map__36522__$1,field,component))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__36524,p__36525){
var vec__36526 = p__36524;
var type = cljs.core.nth.call(null,vec__36526,(0),null);
var map__36527 = cljs.core.nth.call(null,vec__36526,(1),null);
var map__36527__$1 = ((cljs.core.seq_QMARK_.call(null,map__36527))?cljs.core.apply.call(null,cljs.core.hash_map,map__36527):map__36527);
var attrs = map__36527__$1;
var fmt = cljs.core.get.call(null,map__36527__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__36527__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__36528 = p__36525;
var map__36528__$1 = ((cljs.core.seq_QMARK_.call(null,map__36528))?cljs.core.apply.call(null,cljs.core.hash_map,map__36528):map__36528);
var save_BANG_ = cljs.core.get.call(null,map__36528__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__36528__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__36526,type,map__36527,map__36527__$1,attrs,fmt,id,map__36528,map__36528__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = get.call(null,id);
var map__36529 = cljs.core.deref.call(null,display_value);
var map__36529__$1 = ((cljs.core.seq_QMARK_.call(null,map__36529))?cljs.core.apply.call(null,cljs.core.hash_map,map__36529):map__36529);
var value = cljs.core.get.call(null,map__36529__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__36529__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

if(cljs.core.truth_(fmt)){
return goog.string.format(fmt,value__$1);
} else {
return value__$1;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_value,vec__36526,type,map__36527,map__36527__$1,attrs,fmt,id,map__36528,map__36528__$1,save_BANG_,get){
return (function (p1__36523_SHARP_){
var temp__4124__auto__ = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__36523_SHARP_));
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return "";
}
});})(display_value,vec__36526,type,map__36527,map__36527__$1,attrs,fmt,id,map__36528,map__36528__$1,save_BANG_,get))
], null),attrs)], null);
});
;})(display_value,vec__36526,type,map__36527,map__36527__$1,attrs,fmt,id,map__36528,map__36528__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__36530,p__36531){
var vec__36532 = p__36530;
var _ = cljs.core.nth.call(null,vec__36532,(0),null);
var map__36533 = cljs.core.nth.call(null,vec__36532,(1),null);
var map__36533__$1 = ((cljs.core.seq_QMARK_.call(null,map__36533))?cljs.core.apply.call(null,cljs.core.hash_map,map__36533):map__36533);
var field = cljs.core.get.call(null,map__36533__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__36533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__36532;
var map__36534 = p__36531;
var map__36534__$1 = ((cljs.core.seq_QMARK_.call(null,map__36534))?cljs.core.apply.call(null,cljs.core.hash_map,map__36534):map__36534);
var opts = map__36534__$1;
var get = cljs.core.get.call(null,map__36534__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var state = reagent.core.atom.call(null,get.call(null,id));
return ((function (state,vec__36532,_,map__36533,map__36533__$1,field,id,component,map__36534,map__36534__$1,opts,get){
return (function (){
return reagent_forms.core.set_attrs.call(null,component,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"checked","checked",-50955819),state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(state,vec__36532,_,map__36533,map__36533__$1,field,id,component,map__36534,map__36534__$1,opts,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__36535,p__36536){
var vec__36537 = p__36535;
var type = cljs.core.nth.call(null,vec__36537,(0),null);
var map__36538 = cljs.core.nth.call(null,vec__36537,(1),null);
var map__36538__$1 = ((cljs.core.seq_QMARK_.call(null,map__36538))?cljs.core.apply.call(null,cljs.core.hash_map,map__36538):map__36538);
var attrs = map__36538__$1;
var placeholder = cljs.core.get.call(null,map__36538__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__36538__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__36538__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__36538__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__36539 = p__36536;
var map__36539__$1 = ((cljs.core.seq_QMARK_.call(null,map__36539))?cljs.core.apply.call(null,cljs.core.hash_map,map__36539):map__36539);
var get = cljs.core.get.call(null,map__36539__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__36537,type,map__36538,map__36538__$1,attrs,placeholder,postamble,preamble,id,map__36539,map__36539__$1,get){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto__)){
var value = temp__4124__auto__;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
});
;})(vec__36537,type,map__36538,map__36538__$1,attrs,placeholder,postamble,preamble,id,map__36539,map__36539__$1,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__36540,p__36541){
var vec__36542 = p__36540;
var type = cljs.core.nth.call(null,vec__36542,(0),null);
var map__36543 = cljs.core.nth.call(null,vec__36542,(1),null);
var map__36543__$1 = ((cljs.core.seq_QMARK_.call(null,map__36543))?cljs.core.apply.call(null,cljs.core.hash_map,map__36543):map__36543);
var attrs = map__36543__$1;
var touch_event = cljs.core.get.call(null,map__36543__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__36543__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__36543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__36542,(2));
var map__36544 = p__36541;
var map__36544__$1 = ((cljs.core.seq_QMARK_.call(null,map__36544))?cljs.core.apply.call(null,cljs.core.hash_map,map__36544):map__36544);
var opts = map__36544__$1;
var save_BANG_ = cljs.core.get.call(null,map__36544__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__36544__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__36542,type,map__36543,map__36543__$1,attrs,touch_event,event,id,body,map__36544,map__36544__$1,opts,save_BANG_,get){
return (function (){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto__ = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto__)){
var message = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__28519__auto__ = touch_event;
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto__,vec__36542,type,map__36543,map__36543__$1,attrs,touch_event,event,id,body,map__36544,map__36544__$1,opts,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto__,vec__36542,type,map__36543,map__36543__$1,attrs,touch_event,event,id,body,map__36544,map__36544__$1,opts,save_BANG_,get))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
});
;})(vec__36542,type,map__36543,map__36543__$1,attrs,touch_event,event,id,body,map__36544,map__36544__$1,opts,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__36545,p__36546){
var vec__36547 = p__36545;
var type = cljs.core.nth.call(null,vec__36547,(0),null);
var map__36548 = cljs.core.nth.call(null,vec__36547,(1),null);
var map__36548__$1 = ((cljs.core.seq_QMARK_.call(null,map__36548))?cljs.core.apply.call(null,cljs.core.hash_map,map__36548):map__36548);
var attrs = map__36548__$1;
var value = cljs.core.get.call(null,map__36548__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__36548__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__36548__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__36547,(2));
var map__36549 = p__36546;
var map__36549__$1 = ((cljs.core.seq_QMARK_.call(null,map__36549))?cljs.core.apply.call(null,cljs.core.hash_map,map__36549):map__36549);
var save_BANG_ = cljs.core.get.call(null,map__36549__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__36549__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var state = reagent.core.atom.call(null,cljs.core._EQ_.call(null,value,get.call(null,id)));
return ((function (state,vec__36547,type,map__36548,map__36548__$1,attrs,value,id,field,body,map__36549,map__36549__$1,save_BANG_,get){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,vec__36547,type,map__36548,map__36548__$1,attrs,value,id,field,body,map__36549,map__36549__$1,save_BANG_,get){
return (function (){
save_BANG_.call(null,id,value);

return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(state,vec__36547,type,map__36548,map__36548__$1,attrs,value,id,field,body,map__36549,map__36549__$1,save_BANG_,get))
], null),attrs)], null),body);
});
;})(state,vec__36547,type,map__36548,map__36548__$1,attrs,value,id,field,body,map__36549,map__36549__$1,save_BANG_,get))
}));
reagent_forms.core.group_item = (function group_item(p__36550,p__36551,selections,field,id){
var vec__36555 = p__36550;
var type = cljs.core.nth.call(null,vec__36555,(0),null);
var map__36556 = cljs.core.nth.call(null,vec__36555,(1),null);
var map__36556__$1 = ((cljs.core.seq_QMARK_.call(null,map__36556))?cljs.core.apply.call(null,cljs.core.hash_map,map__36556):map__36556);
var attrs = map__36556__$1;
var touch_event = cljs.core.get.call(null,map__36556__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__36556__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__36555,(2));
var map__36557 = p__36551;
var map__36557__$1 = ((cljs.core.seq_QMARK_.call(null,map__36557))?cljs.core.apply.call(null,cljs.core.hash_map,map__36557):map__36557);
var multi_select = cljs.core.get.call(null,map__36557__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__36557__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var handle_click_BANG_ = ((function (vec__36555,type,map__36556,map__36556__$1,attrs,touch_event,key,body,map__36557,map__36557__$1,multi_select,save_BANG_){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = key.call(null,cljs.core.deref.call(null,selections));
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?key:null));
}
});})(vec__36555,type,map__36556,map__36556__$1,attrs,touch_event,key,body,map__36557,map__36557__$1,multi_select,save_BANG_))
;
return ((function (vec__36555,type,map__36556,map__36556__$1,attrs,touch_event,key,body,map__36557,map__36557__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?"active":null),(function (){var or__28519__auto__ = touch_event;
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__36555,type,map__36556,map__36556__$1,attrs,touch_event,key,body,map__36557,map__36557__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__36558){
var map__36563 = p__36558;
var map__36563__$1 = ((cljs.core.seq_QMARK_.call(null,map__36563))?cljs.core.apply.call(null,cljs.core.hash_map,map__36563):map__36563);
var multi_select = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__36563,map__36563__$1,multi_select,get){
return (function (m,p__36564){
var vec__36565 = p__36564;
var _ = cljs.core.nth.call(null,vec__36565,(0),null);
var map__36566 = cljs.core.nth.call(null,vec__36565,(1),null);
var map__36566__$1 = ((cljs.core.seq_QMARK_.call(null,map__36566))?cljs.core.apply.call(null,cljs.core.hash_map,map__36566):map__36566);
var key = cljs.core.get.call(null,map__36566__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__36563,map__36563__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
reagent_forms.core.selection_group = (function selection_group(p__36567,opts){
var vec__36570 = p__36567;
var type = cljs.core.nth.call(null,vec__36570,(0),null);
var map__36571 = cljs.core.nth.call(null,vec__36570,(1),null);
var map__36571__$1 = ((cljs.core.seq_QMARK_.call(null,map__36571))?cljs.core.apply.call(null,cljs.core.hash_map,map__36571):map__36571);
var attrs = map__36571__$1;
var id = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__36570,(2));
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items,opts));
var selectors = cljs.core.map.call(null,((function (selections,vec__36570,type,map__36571,map__36571__$1,attrs,id,field,selection_items){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null);
});})(selections,vec__36570,type,map__36571,map__36571__$1,attrs,id,field,selection_items))
,selection_items);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),selectors);
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (field,opts){
return reagent_forms.core.selection_group.call(null,field,opts);
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (field,opts){
return reagent_forms.core.selection_group.call(null,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true));
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__36573,p__36574){
var vec__36575 = p__36573;
var type = cljs.core.nth.call(null,vec__36575,(0),null);
var map__36576 = cljs.core.nth.call(null,vec__36575,(1),null);
var map__36576__$1 = ((cljs.core.seq_QMARK_.call(null,map__36576))?cljs.core.apply.call(null,cljs.core.hash_map,map__36576):map__36576);
var attrs = map__36576__$1;
var id = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__36575,(2));
var map__36577 = p__36574;
var map__36577__$1 = ((cljs.core.seq_QMARK_.call(null,map__36577))?cljs.core.apply.call(null,cljs.core.hash_map,map__36577):map__36577);
var save_BANG_ = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection = reagent.core.atom.call(null,(function (){var or__28519__auto__ = get.call(null,id);
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (selection,vec__36575,type,map__36576,map__36576__$1,attrs,id,field,options,map__36577,map__36577__$1,save_BANG_,get){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selection,vec__36575,type,map__36576,map__36576__$1,attrs,id,field,options,map__36577,map__36577__$1,save_BANG_,get){
return (function (p1__36572_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__36572_SHARP_));
});})(selection,vec__36575,type,map__36576,map__36576__$1,attrs,id,field,options,map__36577,map__36577__$1,save_BANG_,get))
], null)),options], null);
});
;})(selection,vec__36575,type,map__36576,map__36576__$1,attrs,id,field,options,map__36577,map__36577__$1,save_BANG_,get))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__36578_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__36578_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.prewalk.call(null,((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_.call(null,node)){
var field = reagent_forms.core.init_field.call(null,node,opts);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__36579){
var form = cljs.core.first(arglist__36579);
arglist__36579 = cljs.core.next(arglist__36579);
var doc = cljs.core.first(arglist__36579);
var events = cljs.core.rest(arglist__36579);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;

//# sourceMappingURL=core.js.map