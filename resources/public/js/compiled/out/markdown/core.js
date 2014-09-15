// Compiled by ClojureScript 0.0-2202
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function init_transformer(p__46944){var map__46950 = p__46944;var map__46950__$1 = ((cljs.core.seq_QMARK_.call(null,map__46950))?cljs.core.apply.call(null,cljs.core.hash_map,map__46950):map__46950);var custom_transformers = cljs.core.get.call(null,map__46950__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",2925052616));var replacement_transformers = cljs.core.get.call(null,map__46950__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",2324106695));return ((function (map__46950,map__46950__$1,custom_transformers,replacement_transformers){
return (function (html,line,next_line,state){var _STAR_next_line_STAR_46951 = markdown.transformers._STAR_next_line_STAR_;try{markdown.transformers._STAR_next_line_STAR_ = next_line;
var vec__46952 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_46951,map__46950,map__46950__$1,custom_transformers,replacement_transformers){
return (function (p__46953,transformer){var vec__46954 = p__46953;var text = cljs.core.nth.call(null,vec__46954,0,null);var state__$1 = cljs.core.nth.call(null,vec__46954,1,null);return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_46951,map__46950,map__46950__$1,custom_transformers,replacement_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__26255__auto__ = replacement_transformers;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());var text = cljs.core.nth.call(null,vec__46952,0,null);var new_state = cljs.core.nth.call(null,vec__46952,1,null);html.append(text);
return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_46951;
}});
;})(map__46950,map__46950__$1,custom_transformers,replacement_transformers))
});
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
markdown.core.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__46955){
var fmt = cljs.core.first(arglist__46955);
var args = cljs.core.rest(arglist__46955);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* processes input text line by line and outputs an HTML string
* @param {...*} var_args
*/
markdown.core.md__GT_html = (function() { 
var md__GT_html__delegate = function (text,params){var _STAR_substring_STAR_46962 = markdown.transformers._STAR_substring_STAR_;var formatter46963 = markdown.transformers.formatter;try{markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_46962,formatter46963){
return (function (s,n){return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_46962,formatter46963))
;
markdown.transformers.formatter = markdown.core.format;
var transformer = markdown.core.init_transformer.call(null,params);var html = (new goog.string.StringBuffer(""));var G__46965_46968 = text.split("\n");var vec__46966_46969 = G__46965_46968;var line_46970 = cljs.core.nth.call(null,vec__46966_46969,0,null);var more_46971 = cljs.core.nthnext.call(null,vec__46966_46969,1);var state_46972 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojurescript","clojurescript",4763057185),true], null),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false),params);var G__46965_46973__$1 = G__46965_46968;var state_46974__$1 = state_46972;while(true){
var vec__46967_46975 = G__46965_46973__$1;var line_46976__$1 = cljs.core.nth.call(null,vec__46967_46975,0,null);var more_46977__$1 = cljs.core.nthnext.call(null,vec__46967_46975,1);var state_46978__$2 = state_46974__$1;var state_46979__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(state_46978__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(state_46978__$2),cljs.core.first.call(null,more_46977__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_46978__$2,new cljs.core.Keyword(null,"buf","buf",1014002149),new cljs.core.Keyword(null,"lists","lists",1116886791)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),true)):state_46978__$2);if(cljs.core.truth_(cljs.core.first.call(null,more_46977__$1)))
{{
var G__46980 = more_46977__$1;
var G__46981 = cljs.core.assoc.call(null,transformer.call(null,html,line_46976__$1,cljs.core.first.call(null,more_46977__$1),state_46979__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),cljs.core.empty_QMARK_.call(null,line_46976__$1));
G__46965_46973__$1 = G__46980;
state_46974__$1 = G__46981;
continue;
}
} else
{transformer.call(null,html,line_46976__$1,"",cljs.core.assoc.call(null,state_46979__$3,new cljs.core.Keyword(null,"eof","eof",1014004846),true));
}
break;
}
return html.toString();
}finally {markdown.transformers.formatter = formatter46963;
markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_46962;
}};
var md__GT_html = function (text,var_args){
var params = null;if (arguments.length > 1) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return md__GT_html__delegate.call(this,text,params);};
md__GT_html.cljs$lang$maxFixedArity = 1;
md__GT_html.cljs$lang$applyTo = (function (arglist__46982){
var text = cljs.core.first(arglist__46982);
var params = cljs.core.rest(arglist__46982);
return md__GT_html__delegate(text,params);
});
md__GT_html.cljs$core$IFn$_invoke$arity$variadic = md__GT_html__delegate;
return md__GT_html;
})()
;
/**
* Js accessible wrapper
* @param {...*} var_args
*/
markdown.core.mdToHtml = (function() { 
var mdToHtml__delegate = function (params){return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
};
var mdToHtml = function (var_args){
var params = null;if (arguments.length > 0) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mdToHtml__delegate.call(this,params);};
mdToHtml.cljs$lang$maxFixedArity = 0;
mdToHtml.cljs$lang$applyTo = (function (arglist__46983){
var params = cljs.core.seq(arglist__46983);
return mdToHtml__delegate(params);
});
mdToHtml.cljs$core$IFn$_invoke$arity$variadic = mdToHtml__delegate;
return mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

//# sourceMappingURL=core.js.map