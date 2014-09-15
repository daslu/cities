// Compiled by ClojureScript 0.0-2202
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.impl.reactimport');
goog.require('reagent.impl.reactimport');
goog.require('reagent.debug');
reagent.impl.util.is_client = !(((function (){try{return window.document;
}catch (e47220){if((e47220 instanceof Object))
{var e = e47220;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47220;
} else
{return null;
}
}
}})() == null));
reagent.impl.util.React = reagent.impl.reactimport.React;
reagent.impl.util.props = "props";
reagent.impl.util.cljs_level = "cljsLevel";
reagent.impl.util.cljs_argv = "cljsArgv";
reagent.impl.util.js_props = (function js_props(C){return (C[reagent.impl.util.props]);
});
reagent.impl.util.extract_props = (function extract_props(v){var p = cljs.core.nth.call(null,v,1,null);if(cljs.core.map_QMARK_.call(null,p))
{return p;
} else
{return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){var p = cljs.core.nth.call(null,v,1,null);var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?2:1);if((cljs.core.count.call(null,v) > first_child))
{return cljs.core.subvec.call(null,v,first_child);
} else
{return null;
}
});
reagent.impl.util.get_argv = (function get_argv(C){return ((C[reagent.impl.util.props])[reagent.impl.util.cljs_argv]);
});
reagent.impl.util.get_props = (function get_props(C){return reagent.impl.util.extract_props.call(null,((C[reagent.impl.util.props])[reagent.impl.util.cljs_argv]));
});
reagent.impl.util.get_children = (function get_children(C){return reagent.impl.util.extract_children.call(null,((C[reagent.impl.util.props])[reagent.impl.util.cljs_argv]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(C){return !((reagent.impl.util.get_argv.call(null,C) == null));
});
reagent.impl.util.memoize_1 = (function memoize_1(f){var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (mem){
return (function (arg){var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);if(!((v == null)))
{return v;
} else
{var ret = f.call(null,arg);cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);
return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(cljs.core.subs.call(null,s,1))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name.call(null,dashed);var vec__47222 = clojure.string.split.call(null,name_str,/-/);var start = cljs.core.nth.call(null,vec__47222,0,null);var parts = cljs.core.nthnext.call(null,vec__47222,1);if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start)))
{return name_str;
} else
{return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.cljs$lang$type = true;
reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";
reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__26822__auto__,writer__26823__auto__,opt__26824__auto__){return cljs.core._write.call(null,writer__26823__auto__,"reagent.impl.util/partial-ifn");
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__47224__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__26255__auto___47225 = self__.p;if(cljs.core.truth_(or__26255__auto___47225))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__47224 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__47224__delegate.call(this,self__,a);};
G__47224.cljs$lang$maxFixedArity = 1;
G__47224.cljs$lang$applyTo = (function (arglist__47226){
var self__ = cljs.core.first(arglist__47226);
var a = cljs.core.rest(arglist__47226);
return G__47224__delegate(self__,a);
});
G__47224.cljs$core$IFn$_invoke$arity$variadic = G__47224__delegate;
return G__47224;
})()
;
reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args47223){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args47223)));
});
reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__47227__delegate = function (a){var _ = this;var or__26255__auto___47228 = self__.p;if(cljs.core.truth_(or__26255__auto___47228))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__47227 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47227__delegate.call(this,a);};
G__47227.cljs$lang$maxFixedArity = 0;
G__47227.cljs$lang$applyTo = (function (arglist__47229){
var a = cljs.core.seq(arglist__47229);
return G__47227__delegate(a);
});
G__47227.cljs$core$IFn$_invoke$arity$variadic = G__47227__delegate;
return G__47227;
})()
;
reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new reagent.impl.util.partial_ifn(f,args,p));
});
reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){var or__26255__auto__ = cljs.core.ifn_QMARK_.call(null,x);if(or__26255__auto__)
{return or__26255__auto__;
} else
{var G__47233 = x;if(G__47233)
{var bit__26905__auto__ = (G__47233.cljs$lang$protocol_mask$partition1$ & 256);if((bit__26905__auto__) || (G__47233.cljs$core$IMultiFn$))
{return true;
} else
{if((!G__47233.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__47233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__47233);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var c1 = temp__4126__auto__;var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var c2 = temp__4126__auto____$1;return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",1108647146),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4126__auto__))
{var s1 = temp__4126__auto__;var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4126__auto____$1))
{var s2 = temp__4126__auto____$1;return cljs.core.merge.call(null,s1,s2);
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",1123684643),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{if(cljs.core.map_QMARK_.call(null,p1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"p1","p1",-1640528006,null))))].join('')));
}
return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._not_found = (function (){var obj47235 = {};return obj47235;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){var or__26255__auto__ = (x === y);if(or__26255__auto__)
{return or__26255__auto__;
} else
{var and__26243__auto__ = cljs.core.map_QMARK_.call(null,x);if(and__26243__auto__)
{var and__26243__auto____$1 = cljs.core.map_QMARK_.call(null,y);if(and__26243__auto____$1)
{var and__26243__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));if(and__26243__auto____$2)
{return cljs.core.reduce_kv.call(null,((function (and__26243__auto____$2,and__26243__auto____$1,and__26243__auto__,or__26255__auto__){
return (function (res,k,v){var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);if(cljs.core.truth_((function (){var or__26255__auto____$1 = (v === yv);if(or__26255__auto____$1)
{return or__26255__auto____$1;
} else
{var or__26255__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);if(or__26255__auto____$2)
{return or__26255__auto____$2;
} else
{var and__26243__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643));if(and__26243__auto____$3)
{return shallow_equal_maps.call(null,v,yv);
} else
{return and__26243__auto____$3;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__26243__auto____$2,and__26243__auto____$1,and__26243__auto__,or__26255__auto__))
,true,x);
} else
{return and__26243__auto____$2;
}
} else
{return and__26243__auto____$1;
}
} else
{return and__26243__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){if(cljs.core.vector_QMARK_.call(null,v1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-1302740715,null),new cljs.core.Symbol(null,"v1","v1",-1640527820,null))))].join('')));
}
if(cljs.core.vector_QMARK_.call(null,v2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-1302740715,null),new cljs.core.Symbol(null,"v2","v2",-1640527819,null))))].join('')));
}
var or__26255__auto__ = (v1 === v2);if(or__26255__auto__)
{return or__26255__auto__;
} else
{var and__26243__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));if(and__26243__auto__)
{return cljs.core.reduce_kv.call(null,((function (and__26243__auto__,or__26255__auto__){
return (function (res,k,v){var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);if(cljs.core.truth_((function (){var or__26255__auto____$1 = (v === v_SINGLEQUOTE_);if(or__26255__auto____$1)
{return or__26255__auto____$1;
} else
{var or__26255__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);if(or__26255__auto____$2)
{return or__26255__auto____$2;
} else
{var and__26243__auto____$1 = cljs.core.map_QMARK_.call(null,v);if(and__26243__auto____$1)
{return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else
{return and__26243__auto____$1;
}
}
}
})()))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
});})(and__26243__auto__,or__26255__auto__))
,true,v1);
} else
{return and__26243__auto__;
}
}
});

//# sourceMappingURL=util.js.map