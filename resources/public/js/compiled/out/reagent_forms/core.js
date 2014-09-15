// Compiled by ClojureScript 0.0-2202
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){return (function (id,value){return cljs.core.swap_BANG_.call(null,doc,(function (current_value){return cljs.core.reduce.call(null,(function (p1__48284_SHARP_,p2__48283_SHARP_){var or__26255__auto__ = p2__48283_SHARP_.call(null,reagent_forms.core.id__GT_path.call(null,id),value,p1__48284_SHARP_);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return p1__48284_SHARP_;
}
}),cljs.core.assoc_in.call(null,current_value,reagent_forms.core.id__GT_path.call(null,id),value),events);
}));
});
});
reagent_forms.core.format_type = (function (){var method_table__27113__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__27114__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__27115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__27116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__27117__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("format-type",((function (method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__,hierarchy__27117__auto__){
return (function (field_type,_){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"numeric","numeric",3308457599)], null))))
{return new cljs.core.Keyword(null,"numeric","numeric",3308457599);
} else
{return field_type;
}
});})(method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__,hierarchy__27117__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__27117__auto__,method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",3308457599),(function (_,n){var parsed = parseFloat(n);if(cljs.core.truth_(isNaN(parsed)))
{return null;
} else
{if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n))
{return n;
} else
{return parsed;
}
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,value){return value;
}));
reagent_forms.core.bind = (function (){var method_table__27113__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__27114__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__27115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__27116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__27117__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("bind",((function (method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__,hierarchy__27117__auto__){
return (function (p__48285,_){var map__48286 = p__48285;var map__48286__$1 = ((cljs.core.seq_QMARK_.call(null,map__48286))?cljs.core.apply.call(null,cljs.core.hash_map,map__48286):map__48286);var field = cljs.core.get.call(null,map__48286__$1,new cljs.core.Keyword(null,"field","field",1111331948));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"numeric","numeric",3308457599),new cljs.core.Keyword(null,"password","password",2230889997),new cljs.core.Keyword(null,"email","email",1110523662),new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"textarea","textarea",4305627820)], null))))
{return new cljs.core.Keyword(null,"input-field","input-field",3901784233);
} else
{return field;
}
});})(method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__,hierarchy__27117__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__27117__auto__,method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",3901784233),(function (p__48288,p__48289){var map__48290 = p__48288;var map__48290__$1 = ((cljs.core.seq_QMARK_.call(null,map__48290))?cljs.core.apply.call(null,cljs.core.hash_map,map__48290):map__48290);var fmt = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"fmt","fmt",1014005759));var id = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"id","id",1013907597));var field = cljs.core.get.call(null,map__48290__$1,new cljs.core.Keyword(null,"field","field",1111331948));var map__48291 = p__48289;var map__48291__$1 = ((cljs.core.seq_QMARK_.call(null,map__48291))?cljs.core.apply.call(null,cljs.core.hash_map,map__48291):map__48291);var save_BANG_ = cljs.core.get.call(null,map__48291__$1,new cljs.core.Keyword(null,"save!","save!",1123115446));var get = cljs.core.get.call(null,map__48291__$1,new cljs.core.Keyword(null,"get","get",1014006472));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),(function (){var value = (function (){var or__26255__auto__ = get.call(null,id);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return "";
}
})();if(cljs.core.truth_(fmt))
{return goog.string.format(fmt,value);
} else
{return value;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (map__48290,map__48290__$1,fmt,id,field,map__48291,map__48291__$1,save_BANG_,get){
return (function (p1__48287_SHARP_){return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__48287_SHARP_)));
});})(map__48290,map__48290__$1,fmt,id,field,map__48291,map__48291__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",2550796085),(function (p__48292,p__48293){var map__48294 = p__48292;var map__48294__$1 = ((cljs.core.seq_QMARK_.call(null,map__48294))?cljs.core.apply.call(null,cljs.core.hash_map,map__48294):map__48294);var id = cljs.core.get.call(null,map__48294__$1,new cljs.core.Keyword(null,"id","id",1013907597));var map__48295 = p__48293;var map__48295__$1 = ((cljs.core.seq_QMARK_.call(null,map__48295))?cljs.core.apply.call(null,cljs.core.hash_map,map__48295):map__48295);var checked = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"checked","checked",1756218137));var save_BANG_ = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"save!","save!",1123115446));var get = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"get","get",1014006472));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (map__48294,map__48294__$1,id,map__48295,map__48295__$1,checked,save_BANG_,get){
return (function (){return save_BANG_.call(null,id,cljs.core.swap_BANG_.call(null,checked,cljs.core.not));
});})(map__48294,map__48294__$1,id,map__48295,map__48295__$1,checked,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__48296,opts,p__48297){var vec__48300 = p__48296;var type = cljs.core.nth.call(null,vec__48300,0,null);var attrs = cljs.core.nth.call(null,vec__48300,1,null);var body = cljs.core.nthnext.call(null,vec__48300,2);var vec__48301 = p__48297;var default_attrs = cljs.core.nth.call(null,vec__48301,0,null);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var set_attrs = function (p__48296,opts,var_args){
var p__48297 = null;if (arguments.length > 2) {
  p__48297 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attrs__delegate.call(this,p__48296,opts,p__48297);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__48302){
var p__48296 = cljs.core.first(arglist__48302);
arglist__48302 = cljs.core.next(arglist__48302);
var opts = cljs.core.first(arglist__48302);
var p__48297 = cljs.core.rest(arglist__48302);
return set_attrs__delegate(p__48296,opts,p__48297);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__27113__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__27114__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__27115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__27116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__27117__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("init-field",((function (method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__,hierarchy__27117__auto__){
return (function (p__48303,_){var vec__48304 = p__48303;var ___$1 = cljs.core.nth.call(null,vec__48304,0,null);var map__48305 = cljs.core.nth.call(null,vec__48304,1,null);var map__48305__$1 = ((cljs.core.seq_QMARK_.call(null,map__48305))?cljs.core.apply.call(null,cljs.core.hash_map,map__48305):map__48305);var field = cljs.core.get.call(null,map__48305__$1,new cljs.core.Keyword(null,"field","field",1111331948));var field__$1 = cljs.core.keyword.call(null,field);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"password","password",2230889997),new cljs.core.Keyword(null,"email","email",1110523662),new cljs.core.Keyword(null,"textarea","textarea",4305627820)], null))))
{return new cljs.core.Keyword(null,"input-field","input-field",3901784233);
} else
{return field__$1;
}
});})(method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__,hierarchy__27117__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__27117__auto__,method_table__27113__auto__,prefer_table__27114__auto__,method_cache__27115__auto__,cached_hierarchy__27116__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",3901784233),(function (p__48306,opts){var vec__48307 = p__48306;var _ = cljs.core.nth.call(null,vec__48307,0,null);var map__48308 = cljs.core.nth.call(null,vec__48307,1,null);var map__48308__$1 = ((cljs.core.seq_QMARK_.call(null,map__48308))?cljs.core.apply.call(null,cljs.core.hash_map,map__48308):map__48308);var field = cljs.core.get.call(null,map__48308__$1,new cljs.core.Keyword(null,"field","field",1111331948));var component = vec__48307;return ((function (vec__48307,_,map__48308,map__48308__$1,field,component){
return (function (){return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),field], null));
});
;})(vec__48307,_,map__48308,map__48308__$1,field,component))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",3308457599),(function (p__48310,p__48311){var vec__48312 = p__48310;var type = cljs.core.nth.call(null,vec__48312,0,null);var map__48313 = cljs.core.nth.call(null,vec__48312,1,null);var map__48313__$1 = ((cljs.core.seq_QMARK_.call(null,map__48313))?cljs.core.apply.call(null,cljs.core.hash_map,map__48313):map__48313);var attrs = map__48313__$1;var fmt = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"fmt","fmt",1014005759));var id = cljs.core.get.call(null,map__48313__$1,new cljs.core.Keyword(null,"id","id",1013907597));var map__48314 = p__48311;var map__48314__$1 = ((cljs.core.seq_QMARK_.call(null,map__48314))?cljs.core.apply.call(null,cljs.core.hash_map,map__48314):map__48314);var save_BANG_ = cljs.core.get.call(null,map__48314__$1,new cljs.core.Keyword(null,"save!","save!",1123115446));var get = cljs.core.get.call(null,map__48314__$1,new cljs.core.Keyword(null,"get","get",1014006472));var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",2618862988),false,new cljs.core.Keyword(null,"value","value",1125876963),get.call(null,id)], null));return ((function (display_value,vec__48312,type,map__48313,map__48313__$1,attrs,fmt,id,map__48314,map__48314__$1,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"value","value",1125876963),(function (){var doc_value = get.call(null,id);var map__48315 = cljs.core.deref.call(null,display_value);var map__48315__$1 = ((cljs.core.seq_QMARK_.call(null,map__48315))?cljs.core.apply.call(null,cljs.core.hash_map,map__48315):map__48315);var value = cljs.core.get.call(null,map__48315__$1,new cljs.core.Keyword(null,"value","value",1125876963));var changed_self_QMARK_ = cljs.core.get.call(null,map__48315__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",2618862988));var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",2618862988));
if(cljs.core.truth_(fmt))
{return goog.string.format(fmt,value__$1);
} else
{return value__$1;
}
})(),new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (display_value,vec__48312,type,map__48313,map__48313__$1,attrs,fmt,id,map__48314,map__48314__$1,save_BANG_,get){
return (function (p1__48309_SHARP_){var temp__4124__auto__ = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",3308457599),reagent_forms.core.value_of.call(null,p1__48309_SHARP_));if(cljs.core.truth_(temp__4124__auto__))
{var value = temp__4124__auto__;cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",2618862988),true,new cljs.core.Keyword(null,"value","value",1125876963),value], null));
return save_BANG_.call(null,id,parseFloat(value));
} else
{return "";
}
});})(display_value,vec__48312,type,map__48313,map__48313__$1,attrs,fmt,id,map__48314,map__48314__$1,save_BANG_,get))
], null),attrs)], null);
});
;})(display_value,vec__48312,type,map__48313,map__48313__$1,attrs,fmt,id,map__48314,map__48314__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",2550796085),(function (p__48316,p__48317){var vec__48318 = p__48316;var _ = cljs.core.nth.call(null,vec__48318,0,null);var map__48319 = cljs.core.nth.call(null,vec__48318,1,null);var map__48319__$1 = ((cljs.core.seq_QMARK_.call(null,map__48319))?cljs.core.apply.call(null,cljs.core.hash_map,map__48319):map__48319);var field = cljs.core.get.call(null,map__48319__$1,new cljs.core.Keyword(null,"field","field",1111331948));var id = cljs.core.get.call(null,map__48319__$1,new cljs.core.Keyword(null,"id","id",1013907597));var component = vec__48318;var map__48320 = p__48317;var map__48320__$1 = ((cljs.core.seq_QMARK_.call(null,map__48320))?cljs.core.apply.call(null,cljs.core.hash_map,map__48320):map__48320);var opts = map__48320__$1;var get = cljs.core.get.call(null,map__48320__$1,new cljs.core.Keyword(null,"get","get",1014006472));var state = reagent.core.atom.call(null,get.call(null,id));return ((function (state,vec__48318,_,map__48319,map__48319__$1,field,id,component,map__48320,map__48320__$1,opts,get){
return (function (){return reagent_forms.core.set_attrs.call(null,component,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"checked","checked",1756218137),state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),field], null));
});
;})(state,vec__48318,_,map__48319,map__48319__$1,field,id,component,map__48320,map__48320__$1,opts,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1116631654),(function (p__48321,p__48322){var vec__48323 = p__48321;var type = cljs.core.nth.call(null,vec__48323,0,null);var map__48324 = cljs.core.nth.call(null,vec__48323,1,null);var map__48324__$1 = ((cljs.core.seq_QMARK_.call(null,map__48324))?cljs.core.apply.call(null,cljs.core.hash_map,map__48324):map__48324);var attrs = map__48324__$1;var placeholder = cljs.core.get.call(null,map__48324__$1,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013));var postamble = cljs.core.get.call(null,map__48324__$1,new cljs.core.Keyword(null,"postamble","postamble",3018502273));var preamble = cljs.core.get.call(null,map__48324__$1,new cljs.core.Keyword(null,"preamble","preamble",4015808606));var id = cljs.core.get.call(null,map__48324__$1,new cljs.core.Keyword(null,"id","id",1013907597));var map__48325 = p__48322;var map__48325__$1 = ((cljs.core.seq_QMARK_.call(null,map__48325))?cljs.core.apply.call(null,cljs.core.hash_map,map__48325):map__48325);var get = cljs.core.get.call(null,map__48325__$1,new cljs.core.Keyword(null,"get","get",1014006472));return ((function (vec__48323,type,map__48324,map__48324__$1,attrs,placeholder,postamble,preamble,id,map__48325,map__48325__$1,get){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto__ = get.call(null,id);if(cljs.core.truth_(temp__4124__auto__))
{var value = temp__4124__auto__;return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else
{return placeholder;
}
})()], null);
});
;})(vec__48323,type,map__48324,map__48324__$1,attrs,placeholder,postamble,preamble,id,map__48325,map__48325__$1,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",1106803918),(function (p__48326,p__48327){var vec__48328 = p__48326;var type = cljs.core.nth.call(null,vec__48328,0,null);var map__48329 = cljs.core.nth.call(null,vec__48328,1,null);var map__48329__$1 = ((cljs.core.seq_QMARK_.call(null,map__48329))?cljs.core.apply.call(null,cljs.core.hash_map,map__48329):map__48329);var attrs = map__48329__$1;var touch_event = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"touch-event","touch-event",1599843838));var event = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"event","event",1110795788));var id = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"id","id",1013907597));var body = cljs.core.nthnext.call(null,vec__48328,2);var map__48330 = p__48327;var map__48330__$1 = ((cljs.core.seq_QMARK_.call(null,map__48330))?cljs.core.apply.call(null,cljs.core.hash_map,map__48330):map__48330);var opts = map__48330__$1;var save_BANG_ = cljs.core.get.call(null,map__48330__$1,new cljs.core.Keyword(null,"save!","save!",1123115446));var get = cljs.core.get.call(null,map__48330__$1,new cljs.core.Keyword(null,"get","get",1014006472));return ((function (vec__48328,type,map__48329,map__48329__$1,attrs,touch_event,event,id,body,map__48330,map__48330__$1,opts,save_BANG_,get){
return (function (){if(cljs.core.truth_(event))
{if(cljs.core.truth_(event.call(null,get.call(null,id))))
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else
{return null;
}
} else
{var temp__4124__auto__ = cljs.core.not_empty.call(null,get.call(null,id));if(cljs.core.truth_(temp__4124__auto__))
{var message = temp__4124__auto__;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",888420270),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",2685771360),true,(function (){var or__26255__auto__ = touch_event;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return new cljs.core.Keyword(null,"on-click","on-click",1416542092);
}
})(),((function (message,temp__4124__auto__,vec__48328,type,map__48329,map__48329__$1,attrs,touch_event,event,id,body,map__48330,map__48330__$1,opts,save_BANG_,get){
return (function (){return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto__,vec__48328,type,map__48329,map__48329__$1,attrs,touch_event,event,id,body,map__48330,map__48330__$1,opts,save_BANG_,get))
], true, false),"X"], null),message], null);
} else
{return null;
}
}
});
;})(vec__48328,type,map__48329,map__48329__$1,attrs,touch_event,event,id,body,map__48330,map__48330__$1,opts,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1122174829),(function (p__48331,p__48332){var vec__48333 = p__48331;var type = cljs.core.nth.call(null,vec__48333,0,null);var map__48334 = cljs.core.nth.call(null,vec__48333,1,null);var map__48334__$1 = ((cljs.core.seq_QMARK_.call(null,map__48334))?cljs.core.apply.call(null,cljs.core.hash_map,map__48334):map__48334);var attrs = map__48334__$1;var value = cljs.core.get.call(null,map__48334__$1,new cljs.core.Keyword(null,"value","value",1125876963));var id = cljs.core.get.call(null,map__48334__$1,new cljs.core.Keyword(null,"id","id",1013907597));var field = cljs.core.get.call(null,map__48334__$1,new cljs.core.Keyword(null,"field","field",1111331948));var body = cljs.core.nthnext.call(null,vec__48333,2);var map__48335 = p__48332;var map__48335__$1 = ((cljs.core.seq_QMARK_.call(null,map__48335))?cljs.core.apply.call(null,cljs.core.hash_map,map__48335):map__48335);var save_BANG_ = cljs.core.get.call(null,map__48335__$1,new cljs.core.Keyword(null,"save!","save!",1123115446));var get = cljs.core.get.call(null,map__48335__$1,new cljs.core.Keyword(null,"get","get",1014006472));var state = reagent.core.atom.call(null,cljs.core._EQ_.call(null,value,get.call(null,id)));return ((function (state,vec__48333,type,map__48334,map__48334__$1,attrs,value,id,field,body,map__48335,map__48335__$1,save_BANG_,get){
return (function (){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"radio","radio",1122174829),new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (state,vec__48333,type,map__48334,map__48334__$1,attrs,value,id,field,body,map__48335,map__48335__$1,save_BANG_,get){
return (function (){save_BANG_.call(null,id,value);
return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(state,vec__48333,type,map__48334,map__48334__$1,attrs,value,id,field,body,map__48335,map__48335__$1,save_BANG_,get))
], null),attrs)], null),body);
});
;})(state,vec__48333,type,map__48334,map__48334__$1,attrs,value,id,field,body,map__48335,map__48335__$1,save_BANG_,get))
}));
reagent_forms.core.group_item = (function group_item(p__48336,p__48337,selections,field,id){var vec__48341 = p__48336;var type = cljs.core.nth.call(null,vec__48341,0,null);var map__48342 = cljs.core.nth.call(null,vec__48341,1,null);var map__48342__$1 = ((cljs.core.seq_QMARK_.call(null,map__48342))?cljs.core.apply.call(null,cljs.core.hash_map,map__48342):map__48342);var attrs = map__48342__$1;var touch_event = cljs.core.get.call(null,map__48342__$1,new cljs.core.Keyword(null,"touch-event","touch-event",1599843838));var key = cljs.core.get.call(null,map__48342__$1,new cljs.core.Keyword(null,"key","key",1014010321));var body = cljs.core.nthnext.call(null,vec__48341,2);var map__48343 = p__48337;var map__48343__$1 = ((cljs.core.seq_QMARK_.call(null,map__48343))?cljs.core.apply.call(null,cljs.core.hash_map,map__48343):map__48343);var multi_select = cljs.core.get.call(null,map__48343__$1,new cljs.core.Keyword(null,"multi-select","multi-select",2137594754));var save_BANG_ = cljs.core.get.call(null,map__48343__$1,new cljs.core.Keyword(null,"save!","save!",1123115446));var handle_click_BANG_ = ((function (vec__48341,type,map__48342,map__48342__$1,attrs,touch_event,key,body,map__48343,map__48343__$1,multi_select,save_BANG_){
return (function handle_click_BANG_(){if(cljs.core.truth_(multi_select))
{cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);
return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else
{var value = key.call(null,cljs.core.deref.call(null,selections));cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));
return save_BANG_.call(null,id,(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?key:null));
}
});})(vec__48341,type,map__48342,map__48342__$1,attrs,touch_event,key,body,map__48343,map__48343__$1,multi_select,save_BANG_))
;
return ((function (vec__48341,type,map__48342,map__48342__$1,attrs,touch_event,key,body,map__48343,map__48343__$1,multi_select,save_BANG_){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?"active":null),(function (){var or__26255__auto__ = touch_event;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return new cljs.core.Keyword(null,"on-click","on-click",1416542092);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__48341,type,map__48342,map__48342__$1,attrs,touch_event,key,body,map__48343,map__48343__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__48344){var map__48349 = p__48344;var map__48349__$1 = ((cljs.core.seq_QMARK_.call(null,map__48349))?cljs.core.apply.call(null,cljs.core.hash_map,map__48349):map__48349);var multi_select = cljs.core.get.call(null,map__48349__$1,new cljs.core.Keyword(null,"multi-select","multi-select",2137594754));var get = cljs.core.get.call(null,map__48349__$1,new cljs.core.Keyword(null,"get","get",1014006472));var value = get.call(null,id);return cljs.core.reduce.call(null,((function (value,map__48349,map__48349__$1,multi_select,get){
return (function (m,p__48350){var vec__48351 = p__48350;var _ = cljs.core.nth.call(null,vec__48351,0,null);var map__48352 = cljs.core.nth.call(null,vec__48351,1,null);var map__48352__$1 = ((cljs.core.seq_QMARK_.call(null,map__48352))?cljs.core.apply.call(null,cljs.core.hash_map,map__48352):map__48352);var key = cljs.core.get.call(null,map__48352__$1,new cljs.core.Keyword(null,"key","key",1014010321));return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__48349,map__48349__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
reagent_forms.core.selection_group = (function selection_group(p__48353,opts){var vec__48356 = p__48353;var type = cljs.core.nth.call(null,vec__48356,0,null);var map__48357 = cljs.core.nth.call(null,vec__48356,1,null);var map__48357__$1 = ((cljs.core.seq_QMARK_.call(null,map__48357))?cljs.core.apply.call(null,cljs.core.hash_map,map__48357):map__48357);var attrs = map__48357__$1;var id = cljs.core.get.call(null,map__48357__$1,new cljs.core.Keyword(null,"id","id",1013907597));var field = cljs.core.get.call(null,map__48357__$1,new cljs.core.Keyword(null,"field","field",1111331948));var selection_items = cljs.core.nthnext.call(null,vec__48356,2);var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items,opts));var selectors = cljs.core.map.call(null,((function (selections,vec__48356,type,map__48357,map__48357__$1,attrs,id,field,selection_items){
return (function (item){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null);
});})(selections,vec__48356,type,map__48357,map__48357__$1,attrs,id,field,selection_items))
,selection_items);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),selectors);
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1814441363),(function (field,opts){return reagent_forms.core.selection_group.call(null,field,opts);
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",2137594754),(function (field,opts){return reagent_forms.core.selection_group.call(null,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",2137594754),true));
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",1017226256),(function (p__48359,p__48360){var vec__48361 = p__48359;var type = cljs.core.nth.call(null,vec__48361,0,null);var map__48362 = cljs.core.nth.call(null,vec__48361,1,null);var map__48362__$1 = ((cljs.core.seq_QMARK_.call(null,map__48362))?cljs.core.apply.call(null,cljs.core.hash_map,map__48362):map__48362);var attrs = map__48362__$1;var id = cljs.core.get.call(null,map__48362__$1,new cljs.core.Keyword(null,"id","id",1013907597));var field = cljs.core.get.call(null,map__48362__$1,new cljs.core.Keyword(null,"field","field",1111331948));var options = cljs.core.nthnext.call(null,vec__48361,2);var map__48363 = p__48360;var map__48363__$1 = ((cljs.core.seq_QMARK_.call(null,map__48363))?cljs.core.apply.call(null,cljs.core.hash_map,map__48363):map__48363);var save_BANG_ = cljs.core.get.call(null,map__48363__$1,new cljs.core.Keyword(null,"save!","save!",1123115446));var get = cljs.core.get.call(null,map__48363__$1,new cljs.core.Keyword(null,"get","get",1014006472));var selection = reagent.core.atom.call(null,(function (){var or__26255__auto__ = get.call(null,id);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return cljs.core.get_in.call(null,cljs.core.first.call(null,options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,new cljs.core.Keyword(null,"key","key",1014010321)], null));
}
})());save_BANG_.call(null,id,cljs.core.deref.call(null,selection));
return ((function (selection,vec__48361,type,map__48362,map__48362__$1,attrs,id,field,options,map__48363,map__48363__$1,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (selection,vec__48361,type,map__48362,map__48362__$1,attrs,id,field,options,map__48363,map__48363__$1,save_BANG_,get){
return (function (p1__48358_SHARP_){return save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__48358_SHARP_));
});})(selection,vec__48361,type,map__48362,map__48362__$1,attrs,id,field,options,map__48363,map__48363__$1,save_BANG_,get))
], null)),options], null);
});
;})(selection,vec__48361,type,map__48362,map__48362__$1,attrs,id,field,options,map__48363,map__48363__$1,save_BANG_,get))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",1111331948)));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),(function (p1__48364_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__48364_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",1123115446),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);var form__$1 = clojure.walk.prewalk.call(null,((function (opts){
return (function (node){if(reagent_forms.core.field_QMARK_.call(null,node))
{var field = reagent_forms.core.init_field.call(null,node,opts);if(cljs.core.fn_QMARK_.call(null,field))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else
{return field;
}
} else
{return node;
}
});})(opts))
,form);return ((function (opts,form__$1){
return (function (){return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;if (arguments.length > 2) {
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__48365){
var form = cljs.core.first(arglist__48365);
arglist__48365 = cljs.core.next(arglist__48365);
var doc = cljs.core.first(arglist__48365);
var events = cljs.core.rest(arglist__48365);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;

//# sourceMappingURL=core.js.map