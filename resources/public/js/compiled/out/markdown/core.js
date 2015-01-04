// Compiled by ClojureScript 0.0-2511
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function init_transformer(p__34925){
var map__34931 = p__34925;
var map__34931__$1 = ((cljs.core.seq_QMARK_.call(null,map__34931))?cljs.core.apply.call(null,cljs.core.hash_map,map__34931):map__34931);
var custom_transformers = cljs.core.get.call(null,map__34931__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var replacement_transformers = cljs.core.get.call(null,map__34931__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
return ((function (map__34931,map__34931__$1,custom_transformers,replacement_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_34932 = markdown.transformers._STAR_next_line_STAR_;
try{markdown.transformers._STAR_next_line_STAR_ = next_line;

var vec__34933 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_34932,map__34931,map__34931__$1,custom_transformers,replacement_transformers){
return (function (p__34934,transformer){
var vec__34935 = p__34934;
var text = cljs.core.nth.call(null,vec__34935,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__34935,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_34932,map__34931,map__34931__$1,custom_transformers,replacement_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__28519__auto__ = replacement_transformers;
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__34933,(0),null);
var new_state = cljs.core.nth.call(null,vec__34933,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_34932;
}});
;})(map__34931,map__34931__$1,custom_transformers,replacement_transformers))
});
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
markdown.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__34936){
var fmt = cljs.core.first(arglist__34936);
var args = cljs.core.rest(arglist__34936);
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
var md__GT_html__delegate = function (text,params){
var _STAR_substring_STAR_34943 = markdown.transformers._STAR_substring_STAR_;
var formatter34944 = markdown.transformers.formatter;
try{markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_34943,formatter34944){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_34943,formatter34944))
;

markdown.transformers.formatter = markdown.core.format;

var transformer = markdown.core.init_transformer.call(null,params);
var html = (new goog.string.StringBuffer(""));
var G__34946_34949 = text.split("\n");
var vec__34947_34950 = G__34946_34949;
var line_34951 = cljs.core.nth.call(null,vec__34947_34950,(0),null);
var more_34952 = cljs.core.nthnext.call(null,vec__34947_34950,(1));
var state_34953 = cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true], null),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false),params);
var G__34946_34954__$1 = G__34946_34949;
var state_34955__$1 = state_34953;
while(true){
var vec__34948_34956 = G__34946_34954__$1;
var line_34957__$1 = cljs.core.nth.call(null,vec__34948_34956,(0),null);
var more_34958__$1 = cljs.core.nthnext.call(null,vec__34948_34956,(1));
var state_34959__$2 = state_34955__$1;
var state_34960__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34959__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_34959__$2),cljs.core.first.call(null,more_34958__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_34959__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_34959__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_34958__$1))){
var G__34961 = more_34958__$1;
var G__34962 = cljs.core.assoc.call(null,transformer.call(null,html,line_34957__$1,cljs.core.first.call(null,more_34958__$1),state_34960__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_34957__$1));
G__34946_34954__$1 = G__34961;
state_34955__$1 = G__34962;
continue;
} else {
transformer.call(null,html,line_34957__$1,"",cljs.core.assoc.call(null,state_34960__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter34944;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_34943;
}};
var md__GT_html = function (text,var_args){
var params = null;
if (arguments.length > 1) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return md__GT_html__delegate.call(this,text,params);};
md__GT_html.cljs$lang$maxFixedArity = 1;
md__GT_html.cljs$lang$applyTo = (function (arglist__34963){
var text = cljs.core.first(arglist__34963);
var params = cljs.core.rest(arglist__34963);
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
var mdToHtml__delegate = function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
};
var mdToHtml = function (var_args){
var params = null;
if (arguments.length > 0) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return mdToHtml__delegate.call(this,params);};
mdToHtml.cljs$lang$maxFixedArity = 0;
mdToHtml.cljs$lang$applyTo = (function (arglist__34964){
var params = cljs.core.seq(arglist__34964);
return mdToHtml__delegate(params);
});
mdToHtml.cljs$core$IFn$_invoke$arity$variadic = mdToHtml__delegate;
return mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

//# sourceMappingURL=core.js.map