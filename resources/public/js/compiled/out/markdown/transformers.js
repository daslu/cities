// Compiled by ClojureScript 0.0-2202
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
markdown.transformers.heading_QMARK_ = (function heading_QMARK_(text,type){if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.call(null,4,text)))
{return null;
} else
{var trimmed = (cljs.core.truth_(text)?clojure.string.trim.call(null,text):null);var and__26243__auto__ = cljs.core.not_empty.call(null,trimmed);if(cljs.core.truth_(and__26243__auto__))
{return cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([type], true),trimmed);
} else
{return and__26243__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function h1_QMARK_(text){return markdown.transformers.heading_QMARK_.call(null,text,"=");
});
markdown.transformers.h2_QMARK_ = (function h2_QMARK_(text){return markdown.transformers.heading_QMARK_.call(null,text,"-");
});
markdown.transformers.empty_line = (function empty_line(text,state){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__26255__auto__ = markdown.transformers.h1_QMARK_.call(null,text);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return markdown.transformers.h2_QMARK_.call(null,text);
}
})())?"":text),(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,text))?cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1013907580),new cljs.core.Keyword(null,"heading","heading",1809215860)):state)], null);
});
markdown.transformers.escape_code = (function escape_code(s){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
/**
* @param {...*} var_args
*/
markdown.transformers.escape_link = (function() { 
var escape_link__delegate = function (xs){return cljs.core.seq.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.join.call(null,cljs.core.apply.call(null,cljs.core.concat,xs)),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"));
};
var escape_link = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return escape_link__delegate.call(this,xs);};
escape_link.cljs$lang$maxFixedArity = 0;
escape_link.cljs$lang$applyTo = (function (arglist__46984){
var xs = cljs.core.seq(arglist__46984);
return escape_link__delegate(xs);
});
escape_link.cljs$core$IFn$_invoke$arity$variadic = escape_link__delegate;
return escape_link;
})()
;
markdown.transformers.escaped_chars = (function escaped_chars(text,state){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__26255__auto__ = new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return new cljs.core.Keyword(null,"codeblock","codeblock",4184389170).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.transformers.separator = (function separator(escape_QMARK_,text,open,close,separator__$1,state){if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(state)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{var out = cljs.core.PersistentVector.EMPTY;var buf = cljs.core.PersistentVector.EMPTY;var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator__$1)),cljs.core.seq.call(null,text));var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",3737005920),false);while(true){
if(cljs.core.empty_QMARK_.call(null,tokens))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",3737005920).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator__$1):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",3737005920))], null);
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",3737005920).cljs$core$IFn$_invoke$arity$1(cur_state)))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1))
{{
var G__46985 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),(cljs.core.truth_(escape_QMARK_)?cljs.core.seq.call(null,markdown.transformers.escape_code.call(null,clojure.string.join.call(null,buf))):buf),cljs.core.seq.call(null,close)));
var G__46986 = cljs.core.PersistentVector.EMPTY;
var G__46987 = cljs.core.rest.call(null,tokens);
var G__46988 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",3737005920),false);
out = G__46985;
buf = G__46986;
tokens = G__46987;
cur_state = G__46988;
continue;
}
} else
{{
var G__46989 = out;
var G__46990 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__46991 = cljs.core.rest.call(null,tokens);
var G__46992 = cur_state;
out = G__46989;
buf = G__46990;
tokens = G__46991;
cur_state = G__46992;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1))
{{
var G__46993 = out;
var G__46994 = buf;
var G__46995 = cljs.core.rest.call(null,tokens);
var G__46996 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",3737005920),true);
out = G__46993;
buf = G__46994;
tokens = G__46995;
cur_state = G__46996;
continue;
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__46997 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__46998 = buf;
var G__46999 = cljs.core.rest.call(null,tokens);
var G__47000 = cur_state;
out = G__46997;
buf = G__46998;
tokens = G__46999;
cur_state = G__47000;
continue;
}
} else
{return null;
}
}
}
}
break;
}
}
});
markdown.transformers.strong = (function strong(text,state){return markdown.transformers.separator.call(null,false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.transformers.bold = (function bold(text,state){return markdown.transformers.separator.call(null,false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.transformers.em = (function em(text,state){return markdown.transformers.separator.call(null,false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.transformers.italics = (function italics(text,state){return markdown.transformers.separator.call(null,false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.transformers.inline_code = (function inline_code(text,state){return markdown.transformers.separator.call(null,true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.transformers.strikethrough = (function strikethrough(text,state){return markdown.transformers.separator.call(null,false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.transformers.superscript = (function superscript(text,state){if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(state)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);var buf = cljs.core.PersistentVector.EMPTY;var remaining = tokens;while(true){
if(cljs.core.empty_QMARK_.call(null,remaining))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,buf),state], null);
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)))
{{
var G__47001 = cljs.core.into.call(null,buf,cljs.core.concat.call(null,cljs.core.seq.call(null,"<sup>"),cljs.core.second.call(null,remaining),cljs.core.seq.call(null,"</sup>")));
var G__47002 = cljs.core.drop.call(null,2,remaining);
buf = G__47001;
remaining = G__47002;
continue;
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__47003 = cljs.core.into.call(null,buf,cljs.core.first.call(null,remaining));
var G__47004 = cljs.core.rest.call(null,remaining);
buf = G__47003;
remaining = G__47004;
continue;
}
} else
{return null;
}
}
}
break;
}
}
});
markdown.transformers.heading_text = (function heading_text(heading,text){return clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.drop_while.call(null,(function (p1__47005_SHARP_){return (cljs.core._EQ_.call(null,"#",p1__47005_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__47005_SHARP_));
}),text)));
});
markdown.transformers.heading_level = (function heading_level(text){var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__47006_SHARP_){return cljs.core.not_EQ_.call(null," ",p1__47006_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__47007_SHARP_){return (cljs.core._EQ_.call(null,"#",p1__47007_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__47007_SHARP_));
}),cljs.core.seq.call(null,text))));if((num_hashes > 0))
{return num_hashes;
} else
{return null;
}
});
markdown.transformers.make_heading = (function make_heading(text,heading_anchors){var temp__4124__auto__ = markdown.transformers.heading_level.call(null,text);if(cljs.core.truth_(temp__4124__auto__))
{var heading = temp__4124__auto__;var text__$1 = markdown.transformers.heading_text.call(null,heading,text);return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str("<a name=\""),cljs.core.str(clojure.string.replace.call(null,clojure.string.lower_case.call(null,text__$1)," ","&#95;")),cljs.core.str("\"></a>")].join(''):null)),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else
{return null;
}
});
markdown.transformers.heading = (function heading(text,state){if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(state)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{if(cljs.core.truth_(markdown.transformers.h1_QMARK_.call(null,markdown.transformers._STAR_next_line_STAR_)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h1>"),cljs.core.str(text),cljs.core.str("</h1>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",1809215860),true)], null);
} else
{if(cljs.core.truth_(markdown.transformers.h2_QMARK_.call(null,markdown.transformers._STAR_next_line_STAR_)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h2>"),cljs.core.str(text),cljs.core.str("</h2>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",1809215860),true)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4124__auto__ = markdown.transformers.make_heading.call(null,text,new cljs.core.Keyword(null,"heading-anchors","heading-anchors",4213950213).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4124__auto__))
{var heading__$1 = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading__$1,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",1809215860),true)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else
{return null;
}
}
}
}
});
markdown.transformers.br = (function br(text,p__47008){var map__47010 = p__47008;var map__47010__$1 = ((cljs.core.seq_QMARK_.call(null,map__47010))?cljs.core.apply.call(null,cljs.core.hash_map,map__47010):map__47010);var state = map__47010__$1;var lists = cljs.core.get.call(null,map__47010__$1,new cljs.core.Keyword(null,"lists","lists",1116886791));var code = cljs.core.get.call(null,map__47010__$1,new cljs.core.Keyword(null,"code","code",1016963423));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last.call(null,2,text))) && (cljs.core.not.call(null,(function (){var or__26255__auto__ = code;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return lists;
}
})())))?[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,2,text))),cljs.core.str("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function autourl_transformer(text,state){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(state))?text:clojure.string.replace.call(null,text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__47011_SHARP_){var url = cljs.core.subs.call(null,p1__47011_SHARP_,1,(cljs.core.count.call(null,p1__47011_SHARP_) - 1));return [cljs.core.str("<a href=\""),cljs.core.str(url),cljs.core.str("\">"),cljs.core.str(url),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.autoemail_transformer = (function autoemail_transformer(text,state){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__26255__auto__ = new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return new cljs.core.Keyword(null,"codeblock","codeblock",4184389170).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__47012_SHARP_){var encoded = (cljs.core.truth_(new cljs.core.Keyword(null,"clojurescript","clojurescript",4763057185).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.call(null,p1__47012_SHARP_,1,(cljs.core.count.call(null,p1__47012_SHARP_) - 1)):cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (c){if((cljs.core.rand.call(null) > 0.5))
{return markdown.transformers.formatter.call(null,"&#x%02x;",(c | 0));
} else
{return c;
}
}),cljs.core.subs.call(null,p1__47012_SHARP_,1,(cljs.core.count.call(null,p1__47012_SHARP_) - 1)))));return [cljs.core.str("<a href=\"mailto:"),cljs.core.str(encoded),cljs.core.str("\">"),cljs.core.str(encoded),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.paragraph_text = (function paragraph_text(last_line_empty_QMARK_,text){if(cljs.core.truth_((function (){var and__26243__auto__ = cljs.core.not.call(null,last_line_empty_QMARK_);if(and__26243__auto__)
{return cljs.core.not_empty.call(null,text);
} else
{return and__26243__auto__;
}
})()))
{return [cljs.core.str(" "),cljs.core.str(text)].join('');
} else
{return text;
}
});
markdown.transformers.paragraph = (function paragraph(text,p__47013){var map__47015 = p__47013;var map__47015__$1 = ((cljs.core.seq_QMARK_.call(null,map__47015))?cljs.core.apply.call(null,cljs.core.hash_map,map__47015):map__47015);var state = map__47015__$1;var last_line_empty_QMARK_ = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262));var paragraph_QMARK_ = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"paragraph?","paragraph?",1312315395));var blockquote = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"blockquote","blockquote",2317106561));var lists = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"lists","lists",1116886791));var code = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"code","code",1016963423));var hr = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"hr","hr",1013907580));var heading = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"heading","heading",1809215860));var eof = cljs.core.get.call(null,map__47015__$1,new cljs.core.Keyword(null,"eof","eof",1014004846));if(cljs.core.truth_((function (){var or__26255__auto__ = heading;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{var or__26255__auto____$1 = hr;if(cljs.core.truth_(or__26255__auto____$1))
{return or__26255__auto____$1;
} else
{var or__26255__auto____$2 = code;if(cljs.core.truth_(or__26255__auto____$2))
{return or__26255__auto____$2;
} else
{var or__26255__auto____$3 = lists;if(cljs.core.truth_(or__26255__auto____$3))
{return or__26255__auto____$3;
} else
{return blockquote;
}
}
}
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{if(cljs.core.truth_(paragraph_QMARK_))
{if(cljs.core.truth_((function (){var or__26255__auto__ = eof;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text));
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text)),cljs.core.str("</p>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph?","paragraph?",1312315395),false)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text),state], null);
}
} else
{if(cljs.core.truth_((function (){var and__26243__auto__ = cljs.core.not.call(null,eof);if(and__26243__auto__)
{return last_line_empty_QMARK_;
} else
{return and__26243__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<p>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph?","paragraph?",1312315395),true,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false)], null);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{return null;
}
}
}
}
});
markdown.transformers.code = (function code(text,p__47016){var map__47018 = p__47016;var map__47018__$1 = ((cljs.core.seq_QMARK_.call(null,map__47018))?cljs.core.apply.call(null,cljs.core.hash_map,map__47018):map__47018);var state = map__47018__$1;var codeblock = cljs.core.get.call(null,map__47018__$1,new cljs.core.Keyword(null,"codeblock","codeblock",4184389170));var code__$1 = cljs.core.get.call(null,map__47018__$1,new cljs.core.Keyword(null,"code","code",1016963423));var lists = cljs.core.get.call(null,map__47018__$1,new cljs.core.Keyword(null,"lists","lists",1116886791));var eof = cljs.core.get.call(null,map__47018__$1,new cljs.core.Keyword(null,"eof","eof",1014004846));if(cljs.core.truth_((function (){var or__26255__auto__ = lists;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return codeblock;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{if(cljs.core.truth_(code__$1))
{if(cljs.core.truth_((function (){var or__26255__auto__ = eof;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return cljs.core.not_EQ_.call(null,"    ",clojure.string.join.call(null,cljs.core.take.call(null,4,text)));
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</pre>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1016963423),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.transformers.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),state], null);
}
} else
{if(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{var num_spaces = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));if((num_spaces > 3))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre>\n"),cljs.core.str(markdown.transformers.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1016963423),true)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else
{return null;
}
}
}
}
});
markdown.transformers.codeblock = (function codeblock(text,state){var trimmed = clojure.string.trim.call(null,text);if(cljs.core.truth_((function (){var and__26243__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.call(null,3,trimmed));if(and__26243__auto__)
{return new cljs.core.Keyword(null,"codeblock","codeblock",4184389170).cljs$core$IFn$_invoke$arity$1(state);
} else
{return and__26243__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</pre>"),cljs.core.str(clojure.string.join.call(null,cljs.core.drop.call(null,3,trimmed)))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1016963423),false,new cljs.core.Keyword(null,"codeblock","codeblock",4184389170),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false)], null);
} else
{if(cljs.core.truth_((function (){var and__26243__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last.call(null,3,trimmed));if(and__26243__auto__)
{return new cljs.core.Keyword(null,"codeblock","codeblock",4184389170).cljs$core$IFn$_invoke$arity$1(state);
} else
{return and__26243__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</pre>"),cljs.core.str(clojure.string.join.call(null,cljs.core.drop_last.call(null,3,trimmed)))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1016963423),false,new cljs.core.Keyword(null,"codeblock","codeblock",4184389170),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.call(null,3,trimmed)))
{var vec__47020 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.drop.call(null,3,trimmed));var lang = cljs.core.nth.call(null,vec__47020,0,null);var code = cljs.core.nth.call(null,vec__47020,1,null);var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,code));var formatter = new cljs.core.Keyword(null,"code-style","code-style",3298946371).cljs$core$IFn$_invoke$arity$1(state);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty.call(null,lang))?[cljs.core.str(" "),cljs.core.str((cljs.core.truth_(formatter)?formatter.call(null,clojure.string.join.call(null,lang)):[cljs.core.str("class=\"brush: "),cljs.core.str(clojure.string.join.call(null,lang)),cljs.core.str("\"")].join('')))].join(''):null)),cljs.core.str(">"),cljs.core.str(markdown.transformers.escape_code.call(null,((cljs.core.empty_QMARK_.call(null,s))?s:[cljs.core.str("\n"),cljs.core.str(s)].join(''))))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1016963423),true,new cljs.core.Keyword(null,"codeblock","codeblock",4184389170),true)], null);
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"codeblock","codeblock",4184389170).cljs$core$IFn$_invoke$arity$1(state)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.transformers.escape_code.call(null,text))].join(''),state], null);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{return null;
}
}
}
}
}
});
markdown.transformers.hr = (function hr(text,state){if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(state)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{if(((cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > 2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<hr/>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1013907580),true)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
markdown.transformers.blockquote = (function blockquote(text,p__47021){var map__47023 = p__47021;var map__47023__$1 = ((cljs.core.seq_QMARK_.call(null,map__47023))?cljs.core.apply.call(null,cljs.core.hash_map,map__47023):map__47023);var state = map__47023__$1;var lists = cljs.core.get.call(null,map__47023__$1,new cljs.core.Keyword(null,"lists","lists",1116886791));var codeblock = cljs.core.get.call(null,map__47023__$1,new cljs.core.Keyword(null,"codeblock","codeblock",4184389170));var code = cljs.core.get.call(null,map__47023__$1,new cljs.core.Keyword(null,"code","code",1016963423));var eof = cljs.core.get.call(null,map__47023__$1,new cljs.core.Keyword(null,"eof","eof",1014004846));if(cljs.core.truth_((function (){var or__26255__auto__ = code;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{var or__26255__auto____$1 = codeblock;if(cljs.core.truth_(or__26255__auto____$1))
{return or__26255__auto____$1;
} else
{return lists;
}
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote","blockquote",2317106561).cljs$core$IFn$_invoke$arity$1(state)))
{if(cljs.core.truth_((function (){var or__26255__auto__ = eof;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text));
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p></blockquote>",cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote","blockquote",2317106561),false)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text),cljs.core.str(" ")].join(''),state], null);
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{if(cljs.core._EQ_.call(null,">",cljs.core.first.call(null,text)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<blockquote><p>"),cljs.core.str(clojure.string.join.call(null,cljs.core.rest.call(null,text))),cljs.core.str(" ")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote","blockquote",2317106561),true)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else
{return null;
}
}
}
});
markdown.transformers.href = (function href(title,link){return markdown.transformers.escape_link.call(null,cljs.core.seq.call(null,"<a href='"),link,cljs.core.seq.call(null,"'>"),title,cljs.core.seq.call(null,"</a>"));
});
/**
* @param {...*} var_args
*/
markdown.transformers.img = (function() { 
var img__delegate = function (alt,url,p__47024){var vec__47026 = p__47024;var title = cljs.core.nth.call(null,vec__47026,0,null);return markdown.transformers.escape_link.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")));
};
var img = function (alt,url,var_args){
var p__47024 = null;if (arguments.length > 2) {
  p__47024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return img__delegate.call(this,alt,url,p__47024);};
img.cljs$lang$maxFixedArity = 2;
img.cljs$lang$applyTo = (function (arglist__47027){
var alt = cljs.core.first(arglist__47027);
arglist__47027 = cljs.core.next(arglist__47027);
var url = cljs.core.first(arglist__47027);
var p__47024 = cljs.core.rest(arglist__47027);
return img__delegate(alt,url,p__47024);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
markdown.transformers.handle_img_link = (function handle_img_link(xs){if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,3,xs)))
{var xs__$1 = cljs.core.drop.call(null,3,xs);var vec__47031 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);var alt = cljs.core.nth.call(null,vec__47031,0,null);var xy = cljs.core.nth.call(null,vec__47031,1,null);var vec__47032 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,2,xy));var url_title = cljs.core.nth.call(null,vec__47032,0,null);var zy = cljs.core.nth.call(null,vec__47032,1,null);var vec__47033 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);var url = cljs.core.nth.call(null,vec__47033,0,null);var title = cljs.core.nth.call(null,vec__47033,1,null);return cljs.core.concat.call(null,"[",markdown.transformers.img.call(null,alt,url,cljs.core.not_empty.call(null,title)),cljs.core.rest.call(null,zy));
} else
{return xs;
}
});
markdown.transformers.link = (function link(text,p__47034){var map__47041 = p__47034;var map__47041__$1 = ((cljs.core.seq_QMARK_.call(null,map__47041))?cljs.core.apply.call(null,cljs.core.hash_map,map__47041):map__47041);var state = map__47041__$1;var codeblock = cljs.core.get.call(null,map__47041__$1,new cljs.core.Keyword(null,"codeblock","codeblock",4184389170));var code = cljs.core.get.call(null,map__47041__$1,new cljs.core.Keyword(null,"code","code",1016963423));if(cljs.core.truth_((function (){var or__26255__auto__ = code;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return codeblock;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{var out = cljs.core.PersistentVector.EMPTY;var tokens = cljs.core.seq.call(null,text);while(true){
if(cljs.core.empty_QMARK_.call(null,tokens))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),state], null);
} else
{var vec__47042 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);var head = cljs.core.nth.call(null,vec__47042,0,null);var xs = cljs.core.nth.call(null,vec__47042,1,null);var xs__$1 = markdown.transformers.handle_img_link.call(null,xs);var vec__47043 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);var title = cljs.core.nth.call(null,vec__47043,0,null);var ys = cljs.core.nth.call(null,vec__47043,1,null);var vec__47044 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);var dud = cljs.core.nth.call(null,vec__47044,0,null);var zs = cljs.core.nth.call(null,vec__47044,1,null);var vec__47045 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);var link__$1 = cljs.core.nth.call(null,vec__47045,0,null);var tail = cljs.core.nth.call(null,vec__47045,1,null);if(((cljs.core.count.call(null,link__$1) < 2)) || ((cljs.core.count.call(null,tail) < 1)) || ((cljs.core.count.call(null,dud) > 1)))
{{
var G__47047 = cljs.core.concat.call(null,out,head,title,dud,link__$1);
var G__47048 = tail;
out = G__47047;
tokens = G__47048;
continue;
}
} else
{{
var G__47049 = cljs.core.into.call(null,out,((cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!"))?(function (){var alt = cljs.core.rest.call(null,title);var vec__47046 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));var url = cljs.core.nth.call(null,vec__47046,0,null);var title__$1 = cljs.core.nth.call(null,vec__47046,1,null);var title__$2 = clojure.string.join.call(null,cljs.core.rest.call(null,title__$1));return cljs.core.concat.call(null,cljs.core.butlast.call(null,head),markdown.transformers.img.call(null,alt,url,title__$2));
})():cljs.core.concat.call(null,head,markdown.transformers.href.call(null,cljs.core.rest.call(null,title),cljs.core.rest.call(null,link__$1)))));
var G__47050 = cljs.core.rest.call(null,tail);
out = G__47049;
tokens = G__47050;
continue;
}
}
}
break;
}
}
});
markdown.transformers.close_lists = (function close_lists(lists){return clojure.string.join.call(null,(function (){var iter__26972__auto__ = (function iter__47059(s__47060){return (new cljs.core.LazySeq(null,(function (){var s__47060__$1 = s__47060;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47060__$1);if(temp__4126__auto__)
{var s__47060__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47060__$2))
{var c__26970__auto__ = cljs.core.chunk_first.call(null,s__47060__$2);var size__26971__auto__ = cljs.core.count.call(null,c__26970__auto__);var b__47062 = cljs.core.chunk_buffer.call(null,size__26971__auto__);if((function (){var i__47061 = 0;while(true){
if((i__47061 < size__26971__auto__))
{var vec__47065 = cljs.core._nth.call(null,c__26970__auto__,i__47061);var list_type = cljs.core.nth.call(null,vec__47065,0,null);cljs.core.chunk_append.call(null,b__47062,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''));
{
var G__47067 = (i__47061 + 1);
i__47061 = G__47067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47062),iter__47059.call(null,cljs.core.chunk_rest.call(null,s__47060__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47062),null);
}
} else
{var vec__47066 = cljs.core.first.call(null,s__47060__$2);var list_type = cljs.core.nth.call(null,vec__47066,0,null);return cljs.core.cons.call(null,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''),iter__47059.call(null,cljs.core.rest.call(null,s__47060__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__26972__auto__.call(null,lists);
})());
});
markdown.transformers.add_row = (function add_row(row_type,list_type,num_indents,indents,content,state){if(cljs.core.truth_(list_type))
{if((num_indents < indents))
{var lists_to_close = cljs.core.take_while.call(null,(function (p1__47068_SHARP_){return (cljs.core.second.call(null,p1__47068_SHARP_) > num_indents);
}),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"lists","lists",1116886791).cljs$core$IFn$_invoke$arity$1(state)));var remaining_lists = cljs.core.vec.call(null,cljs.core.drop_last.call(null,cljs.core.count.call(null,lists_to_close),new cljs.core.Keyword(null,"lists","lists",1116886791).cljs$core$IFn$_invoke$arity$1(state)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,markdown.transformers.close_lists.call(null,lists_to_close),"</li><li>",content),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",1116886791),(((num_indents > cljs.core.second.call(null,cljs.core.last.call(null,remaining_lists))))?cljs.core.conj.call(null,remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else
{if((num_indents > indents))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",1116886791)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else
{if(cljs.core._EQ_.call(null,num_indents,indents))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</li><li>"),cljs.core.str(content)].join(''),state], null);
} else
{return null;
}
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",1116886791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.transformers.ul = (function ul(text,state){var vec__47070 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",1116886791).cljs$core$IFn$_invoke$arity$1(state));var list_type = cljs.core.nth.call(null,vec__47070,0,null);var indents = cljs.core.nth.call(null,vec__47070,1,null);var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));var content = clojure.string.trim.call(null,markdown.transformers._STAR_substring_STAR_.call(null,text,(num_indents + 1)));return markdown.transformers.add_row.call(null,new cljs.core.Keyword(null,"ul","ul",1013907977),list_type,num_indents,indents,(function (){var or__26255__auto__ = markdown.transformers.make_heading.call(null,content,false);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return content;
}
})(),state);
});
markdown.transformers.ol = (function ol(text,state){var vec__47072 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",1116886791).cljs$core$IFn$_invoke$arity$1(state));var list_type = cljs.core.nth.call(null,vec__47072,0,null);var indents = cljs.core.nth.call(null,vec__47072,1,null);var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));var content = clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.drop_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),clojure.string.trim.call(null,text))));return markdown.transformers.add_row.call(null,new cljs.core.Keyword(null,"ol","ol",1013907791),list_type,num_indents,indents,(function (){var or__26255__auto__ = markdown.transformers.make_heading.call(null,content,false);if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return content;
}
})(),state);
});
markdown.transformers.li = (function li(text,p__47073){var map__47075 = p__47073;var map__47075__$1 = ((cljs.core.seq_QMARK_.call(null,map__47075))?cljs.core.apply.call(null,cljs.core.hash_map,map__47075):map__47075);var state = map__47075__$1;var lists = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"lists","lists",1116886791));var eof = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"eof","eof",1014004846));var last_line_empty_QMARK_ = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262));var codeblock = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"codeblock","codeblock",4184389170));var code = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"code","code",1016963423));if(cljs.core.truth_((function (){var and__26243__auto__ = last_line_empty_QMARK_;if(cljs.core.truth_(and__26243__auto__))
{return clojure.string.blank_QMARK_.call(null,text);
} else
{return and__26243__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists.call(null,lists)),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",1116886791)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false)], null);
} else
{if(cljs.core.truth_((function (){var or__26255__auto__ = code;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return codeblock;
}
})()))
{if(cljs.core.truth_((function (){var and__26243__auto__ = lists;if(cljs.core.truth_(and__26243__auto__))
{var or__26255__auto__ = last_line_empty_QMARK_;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return eof;
}
} else
{return and__26243__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists.call(null,lists)),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",1116886791)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),false)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else
{if(cljs.core.truth_((function (){var and__26243__auto__ = cljs.core.not.call(null,eof);if(and__26243__auto__)
{var and__26243__auto____$1 = lists;if(cljs.core.truth_(and__26243__auto____$1))
{return clojure.string.blank_QMARK_.call(null,text);
} else
{return and__26243__auto____$1;
}
} else
{return and__26243__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",4449512262),true)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));var trimmed = clojure.string.trim.call(null,text);if(cljs.core.truth_(cljs.core.re_find.call(null,/^[\*\+-] /,trimmed)))
{return markdown.transformers.ul.call(null,text,state);
} else
{if(cljs.core.truth_(cljs.core.re_find.call(null,/^[0-9]+\./,trimmed)))
{return markdown.transformers.ol.call(null,text,state);
} else
{if((indents > 0))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{if(cljs.core.truth_((function (){var and__26243__auto__ = (function (){var or__26255__auto__ = eof;if(cljs.core.truth_(or__26255__auto__))
{return or__26255__auto__;
} else
{return last_line_empty_QMARK_;
}
})();if(cljs.core.truth_(and__26243__auto__))
{return cljs.core.not_empty.call(null,lists);
} else
{return and__26243__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.close_lists.call(null,lists),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",1116886791),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"buf","buf",1014002149),text)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
}
});
markdown.transformers.transformer_vector = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.empty_line,markdown.transformers.codeblock,markdown.transformers.code,markdown.transformers.escaped_chars,markdown.transformers.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.transformers.link,markdown.transformers.hr,markdown.transformers.li,markdown.transformers.heading,markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough,markdown.transformers.superscript,markdown.transformers.blockquote,markdown.transformers.paragraph,markdown.transformers.br], null);

//# sourceMappingURL=transformers.js.map