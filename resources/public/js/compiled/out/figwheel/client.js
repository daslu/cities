// Compiled by ClojureScript 0.0-2511
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__39787,args){
var map__39789 = p__39787;
var map__39789__$1 = ((cljs.core.seq_QMARK_.call(null,map__39789))?cljs.core.apply.call(null,cljs.core.hash_map,map__39789):map__39789);
var debug = cljs.core.get.call(null,map__39789__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__39787,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this,p__39787,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__39790){
var p__39787 = cljs.core.first(arglist__39790);
var args = cljs.core.rest(arglist__39790);
return log__delegate(p__39787,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__39791){
var map__39793 = p__39791;
var map__39793__$1 = ((cljs.core.seq_QMARK_.call(null,map__39793))?cljs.core.apply.call(null,cljs.core.hash_map,map__39793):map__39793);
var websocket_url = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__39794,callback){
var map__39796 = p__39794;
var map__39796__$1 = ((cljs.core.seq_QMARK_.call(null,map__39796))?cljs.core.apply.call(null,cljs.core.hash_map,map__39796):map__39796);
var msg = map__39796__$1;
var dependency_file = cljs.core.get.call(null,map__39796__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__39796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__39796__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__28519__auto__ = dependency_file;
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__39796,map__39796__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__39796,map__39796__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__39797,p__39798){
var map__39801 = p__39797;
var map__39801__$1 = ((cljs.core.seq_QMARK_.call(null,map__39801))?cljs.core.apply.call(null,cljs.core.hash_map,map__39801):map__39801);
var opts = map__39801__$1;
var url_rewriter = cljs.core.get.call(null,map__39801__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__39802 = p__39798;
var map__39802__$1 = ((cljs.core.seq_QMARK_.call(null,map__39802))?cljs.core.apply.call(null,cljs.core.hash_map,map__39802):map__39802);
var d = map__39802__$1;
var file = cljs.core.get.call(null,map__39802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__39803,p__39804){
var map__39846 = p__39803;
var map__39846__$1 = ((cljs.core.seq_QMARK_.call(null,map__39846))?cljs.core.apply.call(null,cljs.core.hash_map,map__39846):map__39846);
var opts = map__39846__$1;
var on_jsload = cljs.core.get.call(null,map__39846__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__39846__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__39847 = p__39804;
var map__39847__$1 = ((cljs.core.seq_QMARK_.call(null,map__39847))?cljs.core.apply.call(null,cljs.core.hash_map,map__39847):map__39847);
var files = cljs.core.get.call(null,map__39847__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__30437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto__,map__39846,map__39846__$1,opts,on_jsload,before_jsload,map__39847,map__39847__$1,files){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto__,map__39846,map__39846__$1,opts,on_jsload,before_jsload,map__39847,map__39847__$1,files){
return (function (state_39870){
var state_val_39871 = (state_39870[(1)]);
if((state_val_39871 === (6))){
var inst_39852 = (state_39870[(7)]);
var inst_39861 = (state_39870[(2)]);
var inst_39862 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39863 = [inst_39852];
var inst_39864 = (new cljs.core.PersistentVector(null,1,(5),inst_39862,inst_39863,null));
var inst_39865 = cljs.core.apply.call(null,on_jsload,inst_39864);
var state_39870__$1 = (function (){var statearr_39872 = state_39870;
(statearr_39872[(8)] = inst_39861);

return statearr_39872;
})();
var statearr_39873_39887 = state_39870__$1;
(statearr_39873_39887[(2)] = inst_39865);

(statearr_39873_39887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39871 === (5))){
var inst_39868 = (state_39870[(2)]);
var state_39870__$1 = state_39870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39870__$1,inst_39868);
} else {
if((state_val_39871 === (4))){
var state_39870__$1 = state_39870;
var statearr_39874_39888 = state_39870__$1;
(statearr_39874_39888[(2)] = null);

(statearr_39874_39888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39871 === (3))){
var inst_39852 = (state_39870[(7)]);
var inst_39855 = console.debug("Figwheel: loaded these files");
var inst_39856 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39852);
var inst_39857 = cljs.core.prn_str.call(null,inst_39856);
var inst_39858 = console.log(inst_39857);
var inst_39859 = cljs.core.async.timeout.call(null,(10));
var state_39870__$1 = (function (){var statearr_39875 = state_39870;
(statearr_39875[(9)] = inst_39858);

(statearr_39875[(10)] = inst_39855);

return statearr_39875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39870__$1,(6),inst_39859);
} else {
if((state_val_39871 === (2))){
var inst_39852 = (state_39870[(7)]);
var inst_39852__$1 = (state_39870[(2)]);
var inst_39853 = cljs.core.not_empty.call(null,inst_39852__$1);
var state_39870__$1 = (function (){var statearr_39876 = state_39870;
(statearr_39876[(7)] = inst_39852__$1);

return statearr_39876;
})();
if(cljs.core.truth_(inst_39853)){
var statearr_39877_39889 = state_39870__$1;
(statearr_39877_39889[(1)] = (3));

} else {
var statearr_39878_39890 = state_39870__$1;
(statearr_39878_39890[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39871 === (1))){
var inst_39848 = before_jsload.call(null,files);
var inst_39849 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_39850 = figwheel.client.load_all_js_files.call(null,inst_39849);
var state_39870__$1 = (function (){var statearr_39879 = state_39870;
(statearr_39879[(11)] = inst_39848);

return statearr_39879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39870__$1,(2),inst_39850);
} else {
return null;
}
}
}
}
}
}
});})(c__30437__auto__,map__39846,map__39846__$1,opts,on_jsload,before_jsload,map__39847,map__39847__$1,files))
;
return ((function (switch__30422__auto__,c__30437__auto__,map__39846,map__39846__$1,opts,on_jsload,before_jsload,map__39847,map__39847__$1,files){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39883[(0)] = state_machine__30423__auto__);

(statearr_39883[(1)] = (1));

return statearr_39883;
});
var state_machine__30423__auto____1 = (function (state_39870){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_39870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39884){if((e39884 instanceof Object)){
var ex__30426__auto__ = e39884;
var statearr_39885_39891 = state_39870;
(statearr_39885_39891[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39892 = state_39870;
state_39870 = G__39892;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_39870){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_39870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto__,map__39846,map__39846__$1,opts,on_jsload,before_jsload,map__39847,map__39847__$1,files))
})();
var state__30439__auto__ = (function (){var statearr_39886 = f__30438__auto__.call(null);
(statearr_39886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto__);

return statearr_39886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto__,map__39846,map__39846__$1,opts,on_jsload,before_jsload,map__39847,map__39847__$1,files))
);

return c__30437__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__39893,link_href){
var map__39895 = p__39893;
var map__39895__$1 = ((cljs.core.seq_QMARK_.call(null,map__39895))?cljs.core.apply.call(null,cljs.core.hash_map,map__39895):map__39895);
var request_url = cljs.core.get.call(null,map__39895__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__39895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__30437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto__,parent){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto__,parent){
return (function (state_39916){
var state_val_39917 = (state_39916[(1)]);
if((state_val_39917 === (2))){
var inst_39913 = (state_39916[(2)]);
var inst_39914 = parent.removeChild(orig_link);
var state_39916__$1 = (function (){var statearr_39918 = state_39916;
(statearr_39918[(7)] = inst_39913);

return statearr_39918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39916__$1,inst_39914);
} else {
if((state_val_39917 === (1))){
var inst_39911 = cljs.core.async.timeout.call(null,(200));
var state_39916__$1 = state_39916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39916__$1,(2),inst_39911);
} else {
return null;
}
}
});})(c__30437__auto__,parent))
;
return ((function (switch__30422__auto__,c__30437__auto__,parent){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39922 = [null,null,null,null,null,null,null,null];
(statearr_39922[(0)] = state_machine__30423__auto__);

(statearr_39922[(1)] = (1));

return statearr_39922;
});
var state_machine__30423__auto____1 = (function (state_39916){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_39916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39923){if((e39923 instanceof Object)){
var ex__30426__auto__ = e39923;
var statearr_39924_39926 = state_39916;
(statearr_39924_39926[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39927 = state_39916;
state_39916 = G__39927;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_39916){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_39916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto__,parent))
})();
var state__30439__auto__ = (function (){var statearr_39925 = f__30438__auto__.call(null);
(statearr_39925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto__);

return statearr_39925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto__,parent))
);

return c__30437__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__39928){
var map__39930 = p__39928;
var map__39930__$1 = ((cljs.core.seq_QMARK_.call(null,map__39930))?cljs.core.apply.call(null,cljs.core.hash_map,map__39930):map__39930);
var f_data = map__39930__$1;
var request_url = cljs.core.get.call(null,map__39930__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__39930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__39931,files_msg){
var map__39953 = p__39931;
var map__39953__$1 = ((cljs.core.seq_QMARK_.call(null,map__39953))?cljs.core.apply.call(null,cljs.core.hash_map,map__39953):map__39953);
var opts = map__39953__$1;
var on_cssload = cljs.core.get.call(null,map__39953__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__39954_39974 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39955_39975 = null;
var count__39956_39976 = (0);
var i__39957_39977 = (0);
while(true){
if((i__39957_39977 < count__39956_39976)){
var f_39978 = cljs.core._nth.call(null,chunk__39955_39975,i__39957_39977);
figwheel.client.reload_css_file.call(null,f_39978);

var G__39979 = seq__39954_39974;
var G__39980 = chunk__39955_39975;
var G__39981 = count__39956_39976;
var G__39982 = (i__39957_39977 + (1));
seq__39954_39974 = G__39979;
chunk__39955_39975 = G__39980;
count__39956_39976 = G__39981;
i__39957_39977 = G__39982;
continue;
} else {
var temp__4126__auto___39983 = cljs.core.seq.call(null,seq__39954_39974);
if(temp__4126__auto___39983){
var seq__39954_39984__$1 = temp__4126__auto___39983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39954_39984__$1)){
var c__29306__auto___39985 = cljs.core.chunk_first.call(null,seq__39954_39984__$1);
var G__39986 = cljs.core.chunk_rest.call(null,seq__39954_39984__$1);
var G__39987 = c__29306__auto___39985;
var G__39988 = cljs.core.count.call(null,c__29306__auto___39985);
var G__39989 = (0);
seq__39954_39974 = G__39986;
chunk__39955_39975 = G__39987;
count__39956_39976 = G__39988;
i__39957_39977 = G__39989;
continue;
} else {
var f_39990 = cljs.core.first.call(null,seq__39954_39984__$1);
figwheel.client.reload_css_file.call(null,f_39990);

var G__39991 = cljs.core.next.call(null,seq__39954_39984__$1);
var G__39992 = null;
var G__39993 = (0);
var G__39994 = (0);
seq__39954_39974 = G__39991;
chunk__39955_39975 = G__39992;
count__39956_39976 = G__39993;
i__39957_39977 = G__39994;
continue;
}
} else {
}
}
break;
}

var c__30437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto__,map__39953,map__39953__$1,opts,on_cssload){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto__,map__39953,map__39953__$1,opts,on_cssload){
return (function (state_39964){
var state_val_39965 = (state_39964[(1)]);
if((state_val_39965 === (2))){
var inst_39960 = (state_39964[(2)]);
var inst_39961 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_39962 = on_cssload.call(null,inst_39961);
var state_39964__$1 = (function (){var statearr_39966 = state_39964;
(statearr_39966[(7)] = inst_39960);

return statearr_39966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39964__$1,inst_39962);
} else {
if((state_val_39965 === (1))){
var inst_39958 = cljs.core.async.timeout.call(null,(100));
var state_39964__$1 = state_39964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39964__$1,(2),inst_39958);
} else {
return null;
}
}
});})(c__30437__auto__,map__39953,map__39953__$1,opts,on_cssload))
;
return ((function (switch__30422__auto__,c__30437__auto__,map__39953,map__39953__$1,opts,on_cssload){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39970 = [null,null,null,null,null,null,null,null];
(statearr_39970[(0)] = state_machine__30423__auto__);

(statearr_39970[(1)] = (1));

return statearr_39970;
});
var state_machine__30423__auto____1 = (function (state_39964){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_39964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39971){if((e39971 instanceof Object)){
var ex__30426__auto__ = e39971;
var statearr_39972_39995 = state_39964;
(statearr_39972_39995[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39996 = state_39964;
state_39964 = G__39996;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_39964){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_39964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto__,map__39953,map__39953__$1,opts,on_cssload))
})();
var state__30439__auto__ = (function (){var statearr_39973 = f__30438__auto__.call(null);
(statearr_39973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto__);

return statearr_39973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto__,map__39953,map__39953__$1,opts,on_cssload))
);

return c__30437__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__39997){
var map__40002 = p__39997;
var map__40002__$1 = ((cljs.core.seq_QMARK_.call(null,map__40002))?cljs.core.apply.call(null,cljs.core.hash_map,map__40002):map__40002);
var opts = map__40002__$1;
var on_compile_fail = cljs.core.get.call(null,map__40002__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__40002__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__40002__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__40002__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__40003 = cljs.core._EQ_;
var expr__40004 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__40003.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__40004))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__40003.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__40004))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__40003.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40004))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__40002,map__40002__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj40009 = {"detail":url};
return obj40009;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__40010){
var map__40012 = p__40010;
var map__40012__$1 = ((cljs.core.seq_QMARK_.call(null,map__40012))?cljs.core.apply.call(null,cljs.core.hash_map,map__40012):map__40012);
var class$ = cljs.core.get.call(null,map__40012__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__40012__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__40013){
var map__40019 = p__40013;
var map__40019__$1 = ((cljs.core.seq_QMARK_.call(null,map__40019))?cljs.core.apply.call(null,cljs.core.hash_map,map__40019):map__40019);
var ed = map__40019__$1;
var exception_data = cljs.core.get.call(null,map__40019__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__40019__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__40020_40024 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40021_40025 = null;
var count__40022_40026 = (0);
var i__40023_40027 = (0);
while(true){
if((i__40023_40027 < count__40022_40026)){
var msg_40028 = cljs.core._nth.call(null,chunk__40021_40025,i__40023_40027);
console.log(msg_40028);

var G__40029 = seq__40020_40024;
var G__40030 = chunk__40021_40025;
var G__40031 = count__40022_40026;
var G__40032 = (i__40023_40027 + (1));
seq__40020_40024 = G__40029;
chunk__40021_40025 = G__40030;
count__40022_40026 = G__40031;
i__40023_40027 = G__40032;
continue;
} else {
var temp__4126__auto___40033 = cljs.core.seq.call(null,seq__40020_40024);
if(temp__4126__auto___40033){
var seq__40020_40034__$1 = temp__4126__auto___40033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40020_40034__$1)){
var c__29306__auto___40035 = cljs.core.chunk_first.call(null,seq__40020_40034__$1);
var G__40036 = cljs.core.chunk_rest.call(null,seq__40020_40034__$1);
var G__40037 = c__29306__auto___40035;
var G__40038 = cljs.core.count.call(null,c__29306__auto___40035);
var G__40039 = (0);
seq__40020_40024 = G__40036;
chunk__40021_40025 = G__40037;
count__40022_40026 = G__40038;
i__40023_40027 = G__40039;
continue;
} else {
var msg_40040 = cljs.core.first.call(null,seq__40020_40034__$1);
console.log(msg_40040);

var G__40041 = cljs.core.next.call(null,seq__40020_40034__$1);
var G__40042 = null;
var G__40043 = (0);
var G__40044 = (0);
seq__40020_40024 = G__40041;
chunk__40021_40025 = G__40042;
count__40022_40026 = G__40043;
i__40023_40027 = G__40044;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__28519__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__40045){
var map__40047 = p__40045;
var map__40047__$1 = ((cljs.core.seq_QMARK_.call(null,map__40047))?cljs.core.apply.call(null,cljs.core.hash_map,map__40047):map__40047);
var opts = map__40047__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__40045 = null;
if (arguments.length > 0) {
  p__40045 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__40045);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__40048){
var p__40045 = cljs.core.seq(arglist__40048);
return watch_and_reload__delegate(p__40045);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map