// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__51109,args){var map__51111 = p__51109;var map__51111__$1 = ((cljs.core.seq_QMARK_.call(null,map__51111))?cljs.core.apply.call(null,cljs.core.hash_map,map__51111):map__51111);var debug = cljs.core.get.call(null,map__51111__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__51109,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__51109,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__51112){
var p__51109 = cljs.core.first(arglist__51112);
var args = cljs.core.rest(arglist__51112);
return log__delegate(p__51109,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__51113){var map__51115 = p__51113;var map__51115__$1 = ((cljs.core.seq_QMARK_.call(null,map__51115))?cljs.core.apply.call(null,cljs.core.hash_map,map__51115):map__51115);var websocket_url = cljs.core.get.call(null,map__51115__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__51116,callback){var map__51118 = p__51116;var map__51118__$1 = ((cljs.core.seq_QMARK_.call(null,map__51118))?cljs.core.apply.call(null,cljs.core.hash_map,map__51118):map__51118);var msg = map__51118__$1;var dependency_file = cljs.core.get.call(null,map__51118__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__51118__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__51118__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__26255__auto__ = dependency_file;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__51118,map__51118__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__51118,map__51118__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__51119,p__51120){var map__51123 = p__51119;var map__51123__$1 = ((cljs.core.seq_QMARK_.call(null,map__51123))?cljs.core.apply.call(null,cljs.core.hash_map,map__51123):map__51123);var opts = map__51123__$1;var url_rewriter = cljs.core.get.call(null,map__51123__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__51124 = p__51120;var map__51124__$1 = ((cljs.core.seq_QMARK_.call(null,map__51124))?cljs.core.apply.call(null,cljs.core.hash_map,map__51124):map__51124);var d = map__51124__$1;var file = cljs.core.get.call(null,map__51124__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__51125,p__51126){var map__51167 = p__51125;var map__51167__$1 = ((cljs.core.seq_QMARK_.call(null,map__51167))?cljs.core.apply.call(null,cljs.core.hash_map,map__51167):map__51167);var opts = map__51167__$1;var on_jsload = cljs.core.get.call(null,map__51167__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__51167__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__51168 = p__51126;var map__51168__$1 = ((cljs.core.seq_QMARK_.call(null,map__51168))?cljs.core.apply.call(null,cljs.core.hash_map,map__51168):map__51168);var files = cljs.core.get.call(null,map__51168__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__28106__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__28106__auto__,map__51167,map__51167__$1,opts,on_jsload,before_jsload,map__51168,map__51168__$1,files){
return (function (){var f__28107__auto__ = (function (){var switch__28091__auto__ = ((function (c__28106__auto__,map__51167,map__51167__$1,opts,on_jsload,before_jsload,map__51168,map__51168__$1,files){
return (function (state_51190){var state_val_51191 = (state_51190[1]);if((state_val_51191 === 6))
{var inst_51173 = (state_51190[7]);var inst_51182 = (state_51190[2]);var inst_51183 = [inst_51173];var inst_51184 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_51183,null));var inst_51185 = cljs.core.apply.call(null,on_jsload,inst_51184);var state_51190__$1 = (function (){var statearr_51192 = state_51190;(statearr_51192[8] = inst_51182);
return statearr_51192;
})();var statearr_51193_51207 = state_51190__$1;(statearr_51193_51207[2] = inst_51185);
(statearr_51193_51207[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51191 === 5))
{var inst_51188 = (state_51190[2]);var state_51190__$1 = state_51190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51190__$1,inst_51188);
} else
{if((state_val_51191 === 4))
{var state_51190__$1 = state_51190;var statearr_51194_51208 = state_51190__$1;(statearr_51194_51208[2] = null);
(statearr_51194_51208[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51191 === 3))
{var inst_51173 = (state_51190[7]);var inst_51176 = console.debug("Figwheel: loaded these files");var inst_51177 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_51173);var inst_51178 = cljs.core.prn_str.call(null,inst_51177);var inst_51179 = console.log(inst_51178);var inst_51180 = cljs.core.async.timeout.call(null,10);var state_51190__$1 = (function (){var statearr_51195 = state_51190;(statearr_51195[9] = inst_51179);
(statearr_51195[10] = inst_51176);
return statearr_51195;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51190__$1,6,inst_51180);
} else
{if((state_val_51191 === 2))
{var inst_51173 = (state_51190[7]);var inst_51173__$1 = (state_51190[2]);var inst_51174 = cljs.core.not_empty.call(null,inst_51173__$1);var state_51190__$1 = (function (){var statearr_51196 = state_51190;(statearr_51196[7] = inst_51173__$1);
return statearr_51196;
})();if(cljs.core.truth_(inst_51174))
{var statearr_51197_51209 = state_51190__$1;(statearr_51197_51209[1] = 3);
} else
{var statearr_51198_51210 = state_51190__$1;(statearr_51198_51210[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51191 === 1))
{var inst_51169 = before_jsload.call(null,files);var inst_51170 = figwheel.client.add_request_urls.call(null,opts,files);var inst_51171 = figwheel.client.load_all_js_files.call(null,inst_51170);var state_51190__$1 = (function (){var statearr_51199 = state_51190;(statearr_51199[11] = inst_51169);
return statearr_51199;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51190__$1,2,inst_51171);
} else
{return null;
}
}
}
}
}
}
});})(c__28106__auto__,map__51167,map__51167__$1,opts,on_jsload,before_jsload,map__51168,map__51168__$1,files))
;return ((function (switch__28091__auto__,c__28106__auto__,map__51167,map__51167__$1,opts,on_jsload,before_jsload,map__51168,map__51168__$1,files){
return (function() {
var state_machine__28092__auto__ = null;
var state_machine__28092__auto____0 = (function (){var statearr_51203 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51203[0] = state_machine__28092__auto__);
(statearr_51203[1] = 1);
return statearr_51203;
});
var state_machine__28092__auto____1 = (function (state_51190){while(true){
var ret_value__28093__auto__ = (function (){try{while(true){
var result__28094__auto__ = switch__28091__auto__.call(null,state_51190);if(cljs.core.keyword_identical_QMARK_.call(null,result__28094__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__28094__auto__;
}
break;
}
}catch (e51204){if((e51204 instanceof Object))
{var ex__28095__auto__ = e51204;var statearr_51205_51211 = state_51190;(statearr_51205_51211[5] = ex__28095__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51212 = state_51190;
state_51190 = G__51212;
continue;
}
} else
{return ret_value__28093__auto__;
}
break;
}
});
state_machine__28092__auto__ = function(state_51190){
switch(arguments.length){
case 0:
return state_machine__28092__auto____0.call(this);
case 1:
return state_machine__28092__auto____1.call(this,state_51190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__28092__auto____0;
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__28092__auto____1;
return state_machine__28092__auto__;
})()
;})(switch__28091__auto__,c__28106__auto__,map__51167,map__51167__$1,opts,on_jsload,before_jsload,map__51168,map__51168__$1,files))
})();var state__28108__auto__ = (function (){var statearr_51206 = f__28107__auto__.call(null);(statearr_51206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28106__auto__);
return statearr_51206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28108__auto__);
});})(c__28106__auto__,map__51167,map__51167__$1,opts,on_jsload,before_jsload,map__51168,map__51168__$1,files))
);
return c__28106__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__51213,link_href){var map__51215 = p__51213;var map__51215__$1 = ((cljs.core.seq_QMARK_.call(null,map__51215))?cljs.core.apply.call(null,cljs.core.hash_map,map__51215):map__51215);var request_url = cljs.core.get.call(null,map__51215__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__51215__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__28106__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__28106__auto__,parent){
return (function (){var f__28107__auto__ = (function (){var switch__28091__auto__ = ((function (c__28106__auto__,parent){
return (function (state_51236){var state_val_51237 = (state_51236[1]);if((state_val_51237 === 2))
{var inst_51233 = (state_51236[2]);var inst_51234 = parent.removeChild(orig_link);var state_51236__$1 = (function (){var statearr_51238 = state_51236;(statearr_51238[7] = inst_51233);
return statearr_51238;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51236__$1,inst_51234);
} else
{if((state_val_51237 === 1))
{var inst_51231 = cljs.core.async.timeout.call(null,200);var state_51236__$1 = state_51236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51236__$1,2,inst_51231);
} else
{return null;
}
}
});})(c__28106__auto__,parent))
;return ((function (switch__28091__auto__,c__28106__auto__,parent){
return (function() {
var state_machine__28092__auto__ = null;
var state_machine__28092__auto____0 = (function (){var statearr_51242 = [null,null,null,null,null,null,null,null];(statearr_51242[0] = state_machine__28092__auto__);
(statearr_51242[1] = 1);
return statearr_51242;
});
var state_machine__28092__auto____1 = (function (state_51236){while(true){
var ret_value__28093__auto__ = (function (){try{while(true){
var result__28094__auto__ = switch__28091__auto__.call(null,state_51236);if(cljs.core.keyword_identical_QMARK_.call(null,result__28094__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__28094__auto__;
}
break;
}
}catch (e51243){if((e51243 instanceof Object))
{var ex__28095__auto__ = e51243;var statearr_51244_51246 = state_51236;(statearr_51244_51246[5] = ex__28095__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51247 = state_51236;
state_51236 = G__51247;
continue;
}
} else
{return ret_value__28093__auto__;
}
break;
}
});
state_machine__28092__auto__ = function(state_51236){
switch(arguments.length){
case 0:
return state_machine__28092__auto____0.call(this);
case 1:
return state_machine__28092__auto____1.call(this,state_51236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__28092__auto____0;
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__28092__auto____1;
return state_machine__28092__auto__;
})()
;})(switch__28091__auto__,c__28106__auto__,parent))
})();var state__28108__auto__ = (function (){var statearr_51245 = f__28107__auto__.call(null);(statearr_51245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28106__auto__);
return statearr_51245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28108__auto__);
});})(c__28106__auto__,parent))
);
return c__28106__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__51248){var map__51250 = p__51248;var map__51250__$1 = ((cljs.core.seq_QMARK_.call(null,map__51250))?cljs.core.apply.call(null,cljs.core.hash_map,map__51250):map__51250);var f_data = map__51250__$1;var request_url = cljs.core.get.call(null,map__51250__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__51250__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__51251,files_msg){var map__51273 = p__51251;var map__51273__$1 = ((cljs.core.seq_QMARK_.call(null,map__51273))?cljs.core.apply.call(null,cljs.core.hash_map,map__51273):map__51273);var opts = map__51273__$1;var on_cssload = cljs.core.get.call(null,map__51273__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__51274_51294 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__51275_51295 = null;var count__51276_51296 = 0;var i__51277_51297 = 0;while(true){
if((i__51277_51297 < count__51276_51296))
{var f_51298 = cljs.core._nth.call(null,chunk__51275_51295,i__51277_51297);figwheel.client.reload_css_file.call(null,f_51298);
{
var G__51299 = seq__51274_51294;
var G__51300 = chunk__51275_51295;
var G__51301 = count__51276_51296;
var G__51302 = (i__51277_51297 + 1);
seq__51274_51294 = G__51299;
chunk__51275_51295 = G__51300;
count__51276_51296 = G__51301;
i__51277_51297 = G__51302;
continue;
}
} else
{var temp__4126__auto___51303 = cljs.core.seq.call(null,seq__51274_51294);if(temp__4126__auto___51303)
{var seq__51274_51304__$1 = temp__4126__auto___51303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51274_51304__$1))
{var c__27003__auto___51305 = cljs.core.chunk_first.call(null,seq__51274_51304__$1);{
var G__51306 = cljs.core.chunk_rest.call(null,seq__51274_51304__$1);
var G__51307 = c__27003__auto___51305;
var G__51308 = cljs.core.count.call(null,c__27003__auto___51305);
var G__51309 = 0;
seq__51274_51294 = G__51306;
chunk__51275_51295 = G__51307;
count__51276_51296 = G__51308;
i__51277_51297 = G__51309;
continue;
}
} else
{var f_51310 = cljs.core.first.call(null,seq__51274_51304__$1);figwheel.client.reload_css_file.call(null,f_51310);
{
var G__51311 = cljs.core.next.call(null,seq__51274_51304__$1);
var G__51312 = null;
var G__51313 = 0;
var G__51314 = 0;
seq__51274_51294 = G__51311;
chunk__51275_51295 = G__51312;
count__51276_51296 = G__51313;
i__51277_51297 = G__51314;
continue;
}
}
} else
{}
}
break;
}
var c__28106__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__28106__auto__,map__51273,map__51273__$1,opts,on_cssload){
return (function (){var f__28107__auto__ = (function (){var switch__28091__auto__ = ((function (c__28106__auto__,map__51273,map__51273__$1,opts,on_cssload){
return (function (state_51284){var state_val_51285 = (state_51284[1]);if((state_val_51285 === 2))
{var inst_51280 = (state_51284[2]);var inst_51281 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_51282 = on_cssload.call(null,inst_51281);var state_51284__$1 = (function (){var statearr_51286 = state_51284;(statearr_51286[7] = inst_51280);
return statearr_51286;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51284__$1,inst_51282);
} else
{if((state_val_51285 === 1))
{var inst_51278 = cljs.core.async.timeout.call(null,100);var state_51284__$1 = state_51284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51284__$1,2,inst_51278);
} else
{return null;
}
}
});})(c__28106__auto__,map__51273,map__51273__$1,opts,on_cssload))
;return ((function (switch__28091__auto__,c__28106__auto__,map__51273,map__51273__$1,opts,on_cssload){
return (function() {
var state_machine__28092__auto__ = null;
var state_machine__28092__auto____0 = (function (){var statearr_51290 = [null,null,null,null,null,null,null,null];(statearr_51290[0] = state_machine__28092__auto__);
(statearr_51290[1] = 1);
return statearr_51290;
});
var state_machine__28092__auto____1 = (function (state_51284){while(true){
var ret_value__28093__auto__ = (function (){try{while(true){
var result__28094__auto__ = switch__28091__auto__.call(null,state_51284);if(cljs.core.keyword_identical_QMARK_.call(null,result__28094__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__28094__auto__;
}
break;
}
}catch (e51291){if((e51291 instanceof Object))
{var ex__28095__auto__ = e51291;var statearr_51292_51315 = state_51284;(statearr_51292_51315[5] = ex__28095__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28093__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51316 = state_51284;
state_51284 = G__51316;
continue;
}
} else
{return ret_value__28093__auto__;
}
break;
}
});
state_machine__28092__auto__ = function(state_51284){
switch(arguments.length){
case 0:
return state_machine__28092__auto____0.call(this);
case 1:
return state_machine__28092__auto____1.call(this,state_51284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__28092__auto____0;
state_machine__28092__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__28092__auto____1;
return state_machine__28092__auto__;
})()
;})(switch__28091__auto__,c__28106__auto__,map__51273,map__51273__$1,opts,on_cssload))
})();var state__28108__auto__ = (function (){var statearr_51293 = f__28107__auto__.call(null);(statearr_51293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28106__auto__);
return statearr_51293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28108__auto__);
});})(c__28106__auto__,map__51273,map__51273__$1,opts,on_cssload))
);
return c__28106__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__51317){var map__51322 = p__51317;var map__51322__$1 = ((cljs.core.seq_QMARK_.call(null,map__51322))?cljs.core.apply.call(null,cljs.core.hash_map,map__51322):map__51322);var opts = map__51322__$1;var on_compile_fail = cljs.core.get.call(null,map__51322__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__51322__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__51322__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__51322__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__51323 = cljs.core._EQ_;var expr__51324 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__51323.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__51324)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__51323.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__51324)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__51323.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__51324)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__51322,map__51322__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj51329 = {"detail":url};return obj51329;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__51330){var map__51332 = p__51330;var map__51332__$1 = ((cljs.core.seq_QMARK_.call(null,map__51332))?cljs.core.apply.call(null,cljs.core.hash_map,map__51332):map__51332);var class$ = cljs.core.get.call(null,map__51332__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__51332__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__51333){var map__51339 = p__51333;var map__51339__$1 = ((cljs.core.seq_QMARK_.call(null,map__51339))?cljs.core.apply.call(null,cljs.core.hash_map,map__51339):map__51339);var ed = map__51339__$1;var exception_data = cljs.core.get.call(null,map__51339__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__51339__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.debug("Figwheel: Compile Exception");
var seq__51340_51344 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__51341_51345 = null;var count__51342_51346 = 0;var i__51343_51347 = 0;while(true){
if((i__51343_51347 < count__51342_51346))
{var msg_51348 = cljs.core._nth.call(null,chunk__51341_51345,i__51343_51347);console.log(msg_51348);
{
var G__51349 = seq__51340_51344;
var G__51350 = chunk__51341_51345;
var G__51351 = count__51342_51346;
var G__51352 = (i__51343_51347 + 1);
seq__51340_51344 = G__51349;
chunk__51341_51345 = G__51350;
count__51342_51346 = G__51351;
i__51343_51347 = G__51352;
continue;
}
} else
{var temp__4126__auto___51353 = cljs.core.seq.call(null,seq__51340_51344);if(temp__4126__auto___51353)
{var seq__51340_51354__$1 = temp__4126__auto___51353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51340_51354__$1))
{var c__27003__auto___51355 = cljs.core.chunk_first.call(null,seq__51340_51354__$1);{
var G__51356 = cljs.core.chunk_rest.call(null,seq__51340_51354__$1);
var G__51357 = c__27003__auto___51355;
var G__51358 = cljs.core.count.call(null,c__27003__auto___51355);
var G__51359 = 0;
seq__51340_51344 = G__51356;
chunk__51341_51345 = G__51357;
count__51342_51346 = G__51358;
i__51343_51347 = G__51359;
continue;
}
} else
{var msg_51360 = cljs.core.first.call(null,seq__51340_51354__$1);console.log(msg_51360);
{
var G__51361 = cljs.core.next.call(null,seq__51340_51354__$1);
var G__51362 = null;
var G__51363 = 0;
var G__51364 = 0;
seq__51340_51344 = G__51361;
chunk__51341_51345 = G__51362;
count__51342_51346 = G__51363;
i__51343_51347 = G__51364;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__26255__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__51365){var map__51367 = p__51365;var map__51367__$1 = ((cljs.core.seq_QMARK_.call(null,map__51367))?cljs.core.apply.call(null,cljs.core.hash_map,map__51367):map__51367);var opts = map__51367__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__51365 = null;if (arguments.length > 0) {
  p__51365 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__51365);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__51368){
var p__51365 = cljs.core.seq(arglist__51368);
return watch_and_reload__delegate(p__51365);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map