// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t36591 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36591 = (function (f,fn_handler,meta36592){
this.f = f;
this.fn_handler = fn_handler;
this.meta36592 = meta36592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36593){
var self__ = this;
var _36593__$1 = this;
return self__.meta36592;
});

cljs.core.async.t36591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36593,meta36592__$1){
var self__ = this;
var _36593__$1 = this;
return (new cljs.core.async.t36591(self__.f,self__.fn_handler,meta36592__$1));
});

cljs.core.async.t36591.cljs$lang$type = true;

cljs.core.async.t36591.cljs$lang$ctorStr = "cljs.core.async/t36591";

cljs.core.async.t36591.cljs$lang$ctorPrWriter = (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t36591");
});

cljs.core.async.__GT_t36591 = (function __GT_t36591(f__$1,fn_handler__$1,meta36592){
return (new cljs.core.async.t36591(f__$1,fn_handler__$1,meta36592));
});

}

return (new cljs.core.async.t36591(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__36595 = buff;
if(G__36595){
var bit__29200__auto__ = null;
if(cljs.core.truth_((function (){var or__28519__auto__ = bit__29200__auto__;
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return G__36595.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__36595.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36595);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36595);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36596 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36596);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36596,ret){
return (function (){
return fn1.call(null,val_36596);
});})(val_36596,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__29406__auto___36597 = n;
var x_36598 = (0);
while(true){
if((x_36598 < n__29406__auto___36597)){
(a[x_36598] = (0));

var G__36599 = (x_36598 + (1));
x_36598 = G__36599;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36600 = (i + (1));
i = G__36600;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36604 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36604 = (function (flag,alt_flag,meta36605){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36605 = meta36605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36604.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36606){
var self__ = this;
var _36606__$1 = this;
return self__.meta36605;
});})(flag))
;

cljs.core.async.t36604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36606,meta36605__$1){
var self__ = this;
var _36606__$1 = this;
return (new cljs.core.async.t36604(self__.flag,self__.alt_flag,meta36605__$1));
});})(flag))
;

cljs.core.async.t36604.cljs$lang$type = true;

cljs.core.async.t36604.cljs$lang$ctorStr = "cljs.core.async/t36604";

cljs.core.async.t36604.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t36604");
});})(flag))
;

cljs.core.async.__GT_t36604 = ((function (flag){
return (function __GT_t36604(flag__$1,alt_flag__$1,meta36605){
return (new cljs.core.async.t36604(flag__$1,alt_flag__$1,meta36605));
});})(flag))
;

}

return (new cljs.core.async.t36604(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t36610 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36610 = (function (cb,flag,alt_handler,meta36611){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36611 = meta36611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36610.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36612){
var self__ = this;
var _36612__$1 = this;
return self__.meta36611;
});

cljs.core.async.t36610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36612,meta36611__$1){
var self__ = this;
var _36612__$1 = this;
return (new cljs.core.async.t36610(self__.cb,self__.flag,self__.alt_handler,meta36611__$1));
});

cljs.core.async.t36610.cljs$lang$type = true;

cljs.core.async.t36610.cljs$lang$ctorStr = "cljs.core.async/t36610";

cljs.core.async.t36610.cljs$lang$ctorPrWriter = (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t36610");
});

cljs.core.async.__GT_t36610 = (function __GT_t36610(cb__$1,flag__$1,alt_handler__$1,meta36611){
return (new cljs.core.async.t36610(cb__$1,flag__$1,alt_handler__$1,meta36611));
});

}

return (new cljs.core.async.t36610(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36613_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36613_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36614_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36614_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28519__auto__ = wport;
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36615 = (i + (1));
i = G__36615;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28519__auto__ = ret;
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__28507__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28507__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28507__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__36616){
var map__36618 = p__36616;
var map__36618__$1 = ((cljs.core.seq_QMARK_.call(null,map__36618))?cljs.core.apply.call(null,cljs.core.hash_map,map__36618):map__36618);
var opts = map__36618__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__36616 = null;
if (arguments.length > 1) {
  p__36616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__36616);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36619){
var ports = cljs.core.first(arglist__36619);
var p__36616 = cljs.core.rest(arglist__36619);
return alts_BANG___delegate(ports,p__36616);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__30437__auto___36714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___36714){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___36714){
return (function (state_36690){
var state_val_36691 = (state_36690[(1)]);
if((state_val_36691 === (7))){
var inst_36686 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
var statearr_36692_36715 = state_36690__$1;
(statearr_36692_36715[(2)] = inst_36686);

(statearr_36692_36715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (1))){
var state_36690__$1 = state_36690;
var statearr_36693_36716 = state_36690__$1;
(statearr_36693_36716[(2)] = null);

(statearr_36693_36716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (4))){
var inst_36669 = (state_36690[(7)]);
var inst_36669__$1 = (state_36690[(2)]);
var inst_36670 = (inst_36669__$1 == null);
var state_36690__$1 = (function (){var statearr_36694 = state_36690;
(statearr_36694[(7)] = inst_36669__$1);

return statearr_36694;
})();
if(cljs.core.truth_(inst_36670)){
var statearr_36695_36717 = state_36690__$1;
(statearr_36695_36717[(1)] = (5));

} else {
var statearr_36696_36718 = state_36690__$1;
(statearr_36696_36718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (13))){
var state_36690__$1 = state_36690;
var statearr_36697_36719 = state_36690__$1;
(statearr_36697_36719[(2)] = null);

(statearr_36697_36719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (6))){
var inst_36669 = (state_36690[(7)]);
var state_36690__$1 = state_36690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36690__$1,(11),to,inst_36669);
} else {
if((state_val_36691 === (3))){
var inst_36688 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36690__$1,inst_36688);
} else {
if((state_val_36691 === (12))){
var state_36690__$1 = state_36690;
var statearr_36698_36720 = state_36690__$1;
(statearr_36698_36720[(2)] = null);

(statearr_36698_36720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (2))){
var state_36690__$1 = state_36690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36690__$1,(4),from);
} else {
if((state_val_36691 === (11))){
var inst_36679 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
if(cljs.core.truth_(inst_36679)){
var statearr_36699_36721 = state_36690__$1;
(statearr_36699_36721[(1)] = (12));

} else {
var statearr_36700_36722 = state_36690__$1;
(statearr_36700_36722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (9))){
var state_36690__$1 = state_36690;
var statearr_36701_36723 = state_36690__$1;
(statearr_36701_36723[(2)] = null);

(statearr_36701_36723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (5))){
var state_36690__$1 = state_36690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36702_36724 = state_36690__$1;
(statearr_36702_36724[(1)] = (8));

} else {
var statearr_36703_36725 = state_36690__$1;
(statearr_36703_36725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (14))){
var inst_36684 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
var statearr_36704_36726 = state_36690__$1;
(statearr_36704_36726[(2)] = inst_36684);

(statearr_36704_36726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (10))){
var inst_36676 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
var statearr_36705_36727 = state_36690__$1;
(statearr_36705_36727[(2)] = inst_36676);

(statearr_36705_36727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (8))){
var inst_36673 = cljs.core.async.close_BANG_.call(null,to);
var state_36690__$1 = state_36690;
var statearr_36706_36728 = state_36690__$1;
(statearr_36706_36728[(2)] = inst_36673);

(statearr_36706_36728[(1)] = (10));


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
});})(c__30437__auto___36714))
;
return ((function (switch__30422__auto__,c__30437__auto___36714){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_36710 = [null,null,null,null,null,null,null,null];
(statearr_36710[(0)] = state_machine__30423__auto__);

(statearr_36710[(1)] = (1));

return statearr_36710;
});
var state_machine__30423__auto____1 = (function (state_36690){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_36690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e36711){if((e36711 instanceof Object)){
var ex__30426__auto__ = e36711;
var statearr_36712_36729 = state_36690;
(statearr_36712_36729[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36730 = state_36690;
state_36690 = G__36730;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_36690){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_36690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___36714))
})();
var state__30439__auto__ = (function (){var statearr_36713 = f__30438__auto__.call(null);
(statearr_36713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___36714);

return statearr_36713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___36714))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36914){
var vec__36915 = p__36914;
var v = cljs.core.nth.call(null,vec__36915,(0),null);
var p = cljs.core.nth.call(null,vec__36915,(1),null);
var job = vec__36915;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30437__auto___37097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___37097,res,vec__36915,v,p,job,jobs,results){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___37097,res,vec__36915,v,p,job,jobs,results){
return (function (state_36920){
var state_val_36921 = (state_36920[(1)]);
if((state_val_36921 === (2))){
var inst_36917 = (state_36920[(2)]);
var inst_36918 = cljs.core.async.close_BANG_.call(null,res);
var state_36920__$1 = (function (){var statearr_36922 = state_36920;
(statearr_36922[(7)] = inst_36917);

return statearr_36922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36920__$1,inst_36918);
} else {
if((state_val_36921 === (1))){
var state_36920__$1 = state_36920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36920__$1,(2),res,v);
} else {
return null;
}
}
});})(c__30437__auto___37097,res,vec__36915,v,p,job,jobs,results))
;
return ((function (switch__30422__auto__,c__30437__auto___37097,res,vec__36915,v,p,job,jobs,results){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_36926 = [null,null,null,null,null,null,null,null];
(statearr_36926[(0)] = state_machine__30423__auto__);

(statearr_36926[(1)] = (1));

return statearr_36926;
});
var state_machine__30423__auto____1 = (function (state_36920){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_36920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e36927){if((e36927 instanceof Object)){
var ex__30426__auto__ = e36927;
var statearr_36928_37098 = state_36920;
(statearr_36928_37098[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37099 = state_36920;
state_36920 = G__37099;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_36920){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_36920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___37097,res,vec__36915,v,p,job,jobs,results))
})();
var state__30439__auto__ = (function (){var statearr_36929 = f__30438__auto__.call(null);
(statearr_36929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___37097);

return statearr_36929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___37097,res,vec__36915,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36930){
var vec__36931 = p__36930;
var v = cljs.core.nth.call(null,vec__36931,(0),null);
var p = cljs.core.nth.call(null,vec__36931,(1),null);
var job = vec__36931;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29406__auto___37100 = n;
var __37101 = (0);
while(true){
if((__37101 < n__29406__auto___37100)){
var G__36932_37102 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36932_37102) {
case "async":
var c__30437__auto___37104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37101,c__30437__auto___37104,G__36932_37102,n__29406__auto___37100,jobs,results,process,async){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (__37101,c__30437__auto___37104,G__36932_37102,n__29406__auto___37100,jobs,results,process,async){
return (function (state_36945){
var state_val_36946 = (state_36945[(1)]);
if((state_val_36946 === (7))){
var inst_36941 = (state_36945[(2)]);
var state_36945__$1 = state_36945;
var statearr_36947_37105 = state_36945__$1;
(statearr_36947_37105[(2)] = inst_36941);

(statearr_36947_37105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (6))){
var state_36945__$1 = state_36945;
var statearr_36948_37106 = state_36945__$1;
(statearr_36948_37106[(2)] = null);

(statearr_36948_37106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (5))){
var state_36945__$1 = state_36945;
var statearr_36949_37107 = state_36945__$1;
(statearr_36949_37107[(2)] = null);

(statearr_36949_37107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (4))){
var inst_36935 = (state_36945[(2)]);
var inst_36936 = async.call(null,inst_36935);
var state_36945__$1 = state_36945;
if(cljs.core.truth_(inst_36936)){
var statearr_36950_37108 = state_36945__$1;
(statearr_36950_37108[(1)] = (5));

} else {
var statearr_36951_37109 = state_36945__$1;
(statearr_36951_37109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36946 === (3))){
var inst_36943 = (state_36945[(2)]);
var state_36945__$1 = state_36945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36945__$1,inst_36943);
} else {
if((state_val_36946 === (2))){
var state_36945__$1 = state_36945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36945__$1,(4),jobs);
} else {
if((state_val_36946 === (1))){
var state_36945__$1 = state_36945;
var statearr_36952_37110 = state_36945__$1;
(statearr_36952_37110[(2)] = null);

(statearr_36952_37110[(1)] = (2));


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
});})(__37101,c__30437__auto___37104,G__36932_37102,n__29406__auto___37100,jobs,results,process,async))
;
return ((function (__37101,switch__30422__auto__,c__30437__auto___37104,G__36932_37102,n__29406__auto___37100,jobs,results,process,async){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_36956 = [null,null,null,null,null,null,null];
(statearr_36956[(0)] = state_machine__30423__auto__);

(statearr_36956[(1)] = (1));

return statearr_36956;
});
var state_machine__30423__auto____1 = (function (state_36945){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_36945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e36957){if((e36957 instanceof Object)){
var ex__30426__auto__ = e36957;
var statearr_36958_37111 = state_36945;
(statearr_36958_37111[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37112 = state_36945;
state_36945 = G__37112;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_36945){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_36945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(__37101,switch__30422__auto__,c__30437__auto___37104,G__36932_37102,n__29406__auto___37100,jobs,results,process,async))
})();
var state__30439__auto__ = (function (){var statearr_36959 = f__30438__auto__.call(null);
(statearr_36959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___37104);

return statearr_36959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(__37101,c__30437__auto___37104,G__36932_37102,n__29406__auto___37100,jobs,results,process,async))
);


break;
case "compute":
var c__30437__auto___37113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37101,c__30437__auto___37113,G__36932_37102,n__29406__auto___37100,jobs,results,process,async){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (__37101,c__30437__auto___37113,G__36932_37102,n__29406__auto___37100,jobs,results,process,async){
return (function (state_36972){
var state_val_36973 = (state_36972[(1)]);
if((state_val_36973 === (7))){
var inst_36968 = (state_36972[(2)]);
var state_36972__$1 = state_36972;
var statearr_36974_37114 = state_36972__$1;
(statearr_36974_37114[(2)] = inst_36968);

(statearr_36974_37114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36973 === (6))){
var state_36972__$1 = state_36972;
var statearr_36975_37115 = state_36972__$1;
(statearr_36975_37115[(2)] = null);

(statearr_36975_37115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36973 === (5))){
var state_36972__$1 = state_36972;
var statearr_36976_37116 = state_36972__$1;
(statearr_36976_37116[(2)] = null);

(statearr_36976_37116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36973 === (4))){
var inst_36962 = (state_36972[(2)]);
var inst_36963 = process.call(null,inst_36962);
var state_36972__$1 = state_36972;
if(cljs.core.truth_(inst_36963)){
var statearr_36977_37117 = state_36972__$1;
(statearr_36977_37117[(1)] = (5));

} else {
var statearr_36978_37118 = state_36972__$1;
(statearr_36978_37118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36973 === (3))){
var inst_36970 = (state_36972[(2)]);
var state_36972__$1 = state_36972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36972__$1,inst_36970);
} else {
if((state_val_36973 === (2))){
var state_36972__$1 = state_36972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36972__$1,(4),jobs);
} else {
if((state_val_36973 === (1))){
var state_36972__$1 = state_36972;
var statearr_36979_37119 = state_36972__$1;
(statearr_36979_37119[(2)] = null);

(statearr_36979_37119[(1)] = (2));


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
});})(__37101,c__30437__auto___37113,G__36932_37102,n__29406__auto___37100,jobs,results,process,async))
;
return ((function (__37101,switch__30422__auto__,c__30437__auto___37113,G__36932_37102,n__29406__auto___37100,jobs,results,process,async){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_36983 = [null,null,null,null,null,null,null];
(statearr_36983[(0)] = state_machine__30423__auto__);

(statearr_36983[(1)] = (1));

return statearr_36983;
});
var state_machine__30423__auto____1 = (function (state_36972){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_36972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e36984){if((e36984 instanceof Object)){
var ex__30426__auto__ = e36984;
var statearr_36985_37120 = state_36972;
(statearr_36985_37120[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37121 = state_36972;
state_36972 = G__37121;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_36972){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_36972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(__37101,switch__30422__auto__,c__30437__auto___37113,G__36932_37102,n__29406__auto___37100,jobs,results,process,async))
})();
var state__30439__auto__ = (function (){var statearr_36986 = f__30438__auto__.call(null);
(statearr_36986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___37113);

return statearr_36986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(__37101,c__30437__auto___37113,G__36932_37102,n__29406__auto___37100,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37122 = (__37101 + (1));
__37101 = G__37122;
continue;
} else {
}
break;
}

var c__30437__auto___37123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___37123,jobs,results,process,async){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___37123,jobs,results,process,async){
return (function (state_37008){
var state_val_37009 = (state_37008[(1)]);
if((state_val_37009 === (9))){
var inst_37001 = (state_37008[(2)]);
var state_37008__$1 = (function (){var statearr_37010 = state_37008;
(statearr_37010[(7)] = inst_37001);

return statearr_37010;
})();
var statearr_37011_37124 = state_37008__$1;
(statearr_37011_37124[(2)] = null);

(statearr_37011_37124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37009 === (8))){
var inst_36994 = (state_37008[(8)]);
var inst_36999 = (state_37008[(2)]);
var state_37008__$1 = (function (){var statearr_37012 = state_37008;
(statearr_37012[(9)] = inst_36999);

return statearr_37012;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37008__$1,(9),results,inst_36994);
} else {
if((state_val_37009 === (7))){
var inst_37004 = (state_37008[(2)]);
var state_37008__$1 = state_37008;
var statearr_37013_37125 = state_37008__$1;
(statearr_37013_37125[(2)] = inst_37004);

(statearr_37013_37125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37009 === (6))){
var inst_36994 = (state_37008[(8)]);
var inst_36989 = (state_37008[(10)]);
var inst_36994__$1 = cljs.core.async.chan.call(null,(1));
var inst_36995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36996 = [inst_36989,inst_36994__$1];
var inst_36997 = (new cljs.core.PersistentVector(null,2,(5),inst_36995,inst_36996,null));
var state_37008__$1 = (function (){var statearr_37014 = state_37008;
(statearr_37014[(8)] = inst_36994__$1);

return statearr_37014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37008__$1,(8),jobs,inst_36997);
} else {
if((state_val_37009 === (5))){
var inst_36992 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37008__$1 = state_37008;
var statearr_37015_37126 = state_37008__$1;
(statearr_37015_37126[(2)] = inst_36992);

(statearr_37015_37126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37009 === (4))){
var inst_36989 = (state_37008[(10)]);
var inst_36989__$1 = (state_37008[(2)]);
var inst_36990 = (inst_36989__$1 == null);
var state_37008__$1 = (function (){var statearr_37016 = state_37008;
(statearr_37016[(10)] = inst_36989__$1);

return statearr_37016;
})();
if(cljs.core.truth_(inst_36990)){
var statearr_37017_37127 = state_37008__$1;
(statearr_37017_37127[(1)] = (5));

} else {
var statearr_37018_37128 = state_37008__$1;
(statearr_37018_37128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37009 === (3))){
var inst_37006 = (state_37008[(2)]);
var state_37008__$1 = state_37008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37008__$1,inst_37006);
} else {
if((state_val_37009 === (2))){
var state_37008__$1 = state_37008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37008__$1,(4),from);
} else {
if((state_val_37009 === (1))){
var state_37008__$1 = state_37008;
var statearr_37019_37129 = state_37008__$1;
(statearr_37019_37129[(2)] = null);

(statearr_37019_37129[(1)] = (2));


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
});})(c__30437__auto___37123,jobs,results,process,async))
;
return ((function (switch__30422__auto__,c__30437__auto___37123,jobs,results,process,async){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_37023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37023[(0)] = state_machine__30423__auto__);

(statearr_37023[(1)] = (1));

return statearr_37023;
});
var state_machine__30423__auto____1 = (function (state_37008){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_37008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e37024){if((e37024 instanceof Object)){
var ex__30426__auto__ = e37024;
var statearr_37025_37130 = state_37008;
(statearr_37025_37130[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37131 = state_37008;
state_37008 = G__37131;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_37008){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_37008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___37123,jobs,results,process,async))
})();
var state__30439__auto__ = (function (){var statearr_37026 = f__30438__auto__.call(null);
(statearr_37026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___37123);

return statearr_37026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___37123,jobs,results,process,async))
);


var c__30437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto__,jobs,results,process,async){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto__,jobs,results,process,async){
return (function (state_37064){
var state_val_37065 = (state_37064[(1)]);
if((state_val_37065 === (7))){
var inst_37060 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
var statearr_37066_37132 = state_37064__$1;
(statearr_37066_37132[(2)] = inst_37060);

(statearr_37066_37132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (20))){
var state_37064__$1 = state_37064;
var statearr_37067_37133 = state_37064__$1;
(statearr_37067_37133[(2)] = null);

(statearr_37067_37133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (1))){
var state_37064__$1 = state_37064;
var statearr_37068_37134 = state_37064__$1;
(statearr_37068_37134[(2)] = null);

(statearr_37068_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (4))){
var inst_37029 = (state_37064[(7)]);
var inst_37029__$1 = (state_37064[(2)]);
var inst_37030 = (inst_37029__$1 == null);
var state_37064__$1 = (function (){var statearr_37069 = state_37064;
(statearr_37069[(7)] = inst_37029__$1);

return statearr_37069;
})();
if(cljs.core.truth_(inst_37030)){
var statearr_37070_37135 = state_37064__$1;
(statearr_37070_37135[(1)] = (5));

} else {
var statearr_37071_37136 = state_37064__$1;
(statearr_37071_37136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (15))){
var inst_37042 = (state_37064[(8)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37064__$1,(18),to,inst_37042);
} else {
if((state_val_37065 === (21))){
var inst_37055 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
var statearr_37072_37137 = state_37064__$1;
(statearr_37072_37137[(2)] = inst_37055);

(statearr_37072_37137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (13))){
var inst_37057 = (state_37064[(2)]);
var state_37064__$1 = (function (){var statearr_37073 = state_37064;
(statearr_37073[(9)] = inst_37057);

return statearr_37073;
})();
var statearr_37074_37138 = state_37064__$1;
(statearr_37074_37138[(2)] = null);

(statearr_37074_37138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (6))){
var inst_37029 = (state_37064[(7)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37064__$1,(11),inst_37029);
} else {
if((state_val_37065 === (17))){
var inst_37050 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
if(cljs.core.truth_(inst_37050)){
var statearr_37075_37139 = state_37064__$1;
(statearr_37075_37139[(1)] = (19));

} else {
var statearr_37076_37140 = state_37064__$1;
(statearr_37076_37140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (3))){
var inst_37062 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37064__$1,inst_37062);
} else {
if((state_val_37065 === (12))){
var inst_37039 = (state_37064[(10)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37064__$1,(14),inst_37039);
} else {
if((state_val_37065 === (2))){
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37064__$1,(4),results);
} else {
if((state_val_37065 === (19))){
var state_37064__$1 = state_37064;
var statearr_37077_37141 = state_37064__$1;
(statearr_37077_37141[(2)] = null);

(statearr_37077_37141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (11))){
var inst_37039 = (state_37064[(2)]);
var state_37064__$1 = (function (){var statearr_37078 = state_37064;
(statearr_37078[(10)] = inst_37039);

return statearr_37078;
})();
var statearr_37079_37142 = state_37064__$1;
(statearr_37079_37142[(2)] = null);

(statearr_37079_37142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (9))){
var state_37064__$1 = state_37064;
var statearr_37080_37143 = state_37064__$1;
(statearr_37080_37143[(2)] = null);

(statearr_37080_37143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (5))){
var state_37064__$1 = state_37064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37081_37144 = state_37064__$1;
(statearr_37081_37144[(1)] = (8));

} else {
var statearr_37082_37145 = state_37064__$1;
(statearr_37082_37145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (14))){
var inst_37042 = (state_37064[(8)]);
var inst_37044 = (state_37064[(11)]);
var inst_37042__$1 = (state_37064[(2)]);
var inst_37043 = (inst_37042__$1 == null);
var inst_37044__$1 = cljs.core.not.call(null,inst_37043);
var state_37064__$1 = (function (){var statearr_37083 = state_37064;
(statearr_37083[(8)] = inst_37042__$1);

(statearr_37083[(11)] = inst_37044__$1);

return statearr_37083;
})();
if(inst_37044__$1){
var statearr_37084_37146 = state_37064__$1;
(statearr_37084_37146[(1)] = (15));

} else {
var statearr_37085_37147 = state_37064__$1;
(statearr_37085_37147[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (16))){
var inst_37044 = (state_37064[(11)]);
var state_37064__$1 = state_37064;
var statearr_37086_37148 = state_37064__$1;
(statearr_37086_37148[(2)] = inst_37044);

(statearr_37086_37148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (10))){
var inst_37036 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
var statearr_37087_37149 = state_37064__$1;
(statearr_37087_37149[(2)] = inst_37036);

(statearr_37087_37149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (18))){
var inst_37047 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
var statearr_37088_37150 = state_37064__$1;
(statearr_37088_37150[(2)] = inst_37047);

(statearr_37088_37150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (8))){
var inst_37033 = cljs.core.async.close_BANG_.call(null,to);
var state_37064__$1 = state_37064;
var statearr_37089_37151 = state_37064__$1;
(statearr_37089_37151[(2)] = inst_37033);

(statearr_37089_37151[(1)] = (10));


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
}
}
}
}
}
}
});})(c__30437__auto__,jobs,results,process,async))
;
return ((function (switch__30422__auto__,c__30437__auto__,jobs,results,process,async){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_37093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37093[(0)] = state_machine__30423__auto__);

(statearr_37093[(1)] = (1));

return statearr_37093;
});
var state_machine__30423__auto____1 = (function (state_37064){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_37064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e37094){if((e37094 instanceof Object)){
var ex__30426__auto__ = e37094;
var statearr_37095_37152 = state_37064;
(statearr_37095_37152[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37153 = state_37064;
state_37064 = G__37153;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_37064){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_37064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto__,jobs,results,process,async))
})();
var state__30439__auto__ = (function (){var statearr_37096 = f__30438__auto__.call(null);
(statearr_37096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto__);

return statearr_37096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto__,jobs,results,process,async))
);

return c__30437__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30437__auto___37254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___37254,tc,fc){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___37254,tc,fc){
return (function (state_37229){
var state_val_37230 = (state_37229[(1)]);
if((state_val_37230 === (7))){
var inst_37225 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37231_37255 = state_37229__$1;
(statearr_37231_37255[(2)] = inst_37225);

(statearr_37231_37255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (1))){
var state_37229__$1 = state_37229;
var statearr_37232_37256 = state_37229__$1;
(statearr_37232_37256[(2)] = null);

(statearr_37232_37256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (4))){
var inst_37206 = (state_37229[(7)]);
var inst_37206__$1 = (state_37229[(2)]);
var inst_37207 = (inst_37206__$1 == null);
var state_37229__$1 = (function (){var statearr_37233 = state_37229;
(statearr_37233[(7)] = inst_37206__$1);

return statearr_37233;
})();
if(cljs.core.truth_(inst_37207)){
var statearr_37234_37257 = state_37229__$1;
(statearr_37234_37257[(1)] = (5));

} else {
var statearr_37235_37258 = state_37229__$1;
(statearr_37235_37258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (13))){
var state_37229__$1 = state_37229;
var statearr_37236_37259 = state_37229__$1;
(statearr_37236_37259[(2)] = null);

(statearr_37236_37259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (6))){
var inst_37206 = (state_37229[(7)]);
var inst_37212 = p.call(null,inst_37206);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37212)){
var statearr_37237_37260 = state_37229__$1;
(statearr_37237_37260[(1)] = (9));

} else {
var statearr_37238_37261 = state_37229__$1;
(statearr_37238_37261[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (3))){
var inst_37227 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37229__$1,inst_37227);
} else {
if((state_val_37230 === (12))){
var state_37229__$1 = state_37229;
var statearr_37239_37262 = state_37229__$1;
(statearr_37239_37262[(2)] = null);

(statearr_37239_37262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (2))){
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(4),ch);
} else {
if((state_val_37230 === (11))){
var inst_37206 = (state_37229[(7)]);
var inst_37216 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37229__$1,(8),inst_37216,inst_37206);
} else {
if((state_val_37230 === (9))){
var state_37229__$1 = state_37229;
var statearr_37240_37263 = state_37229__$1;
(statearr_37240_37263[(2)] = tc);

(statearr_37240_37263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (5))){
var inst_37209 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37210 = cljs.core.async.close_BANG_.call(null,fc);
var state_37229__$1 = (function (){var statearr_37241 = state_37229;
(statearr_37241[(8)] = inst_37209);

return statearr_37241;
})();
var statearr_37242_37264 = state_37229__$1;
(statearr_37242_37264[(2)] = inst_37210);

(statearr_37242_37264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (14))){
var inst_37223 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37243_37265 = state_37229__$1;
(statearr_37243_37265[(2)] = inst_37223);

(statearr_37243_37265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (10))){
var state_37229__$1 = state_37229;
var statearr_37244_37266 = state_37229__$1;
(statearr_37244_37266[(2)] = fc);

(statearr_37244_37266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (8))){
var inst_37218 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37218)){
var statearr_37245_37267 = state_37229__$1;
(statearr_37245_37267[(1)] = (12));

} else {
var statearr_37246_37268 = state_37229__$1;
(statearr_37246_37268[(1)] = (13));

}

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
});})(c__30437__auto___37254,tc,fc))
;
return ((function (switch__30422__auto__,c__30437__auto___37254,tc,fc){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_37250 = [null,null,null,null,null,null,null,null,null];
(statearr_37250[(0)] = state_machine__30423__auto__);

(statearr_37250[(1)] = (1));

return statearr_37250;
});
var state_machine__30423__auto____1 = (function (state_37229){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_37229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e37251){if((e37251 instanceof Object)){
var ex__30426__auto__ = e37251;
var statearr_37252_37269 = state_37229;
(statearr_37252_37269[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37270 = state_37229;
state_37229 = G__37270;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_37229){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_37229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___37254,tc,fc))
})();
var state__30439__auto__ = (function (){var statearr_37253 = f__30438__auto__.call(null);
(statearr_37253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___37254);

return statearr_37253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___37254,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__30437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto__){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto__){
return (function (state_37317){
var state_val_37318 = (state_37317[(1)]);
if((state_val_37318 === (7))){
var inst_37313 = (state_37317[(2)]);
var state_37317__$1 = state_37317;
var statearr_37319_37335 = state_37317__$1;
(statearr_37319_37335[(2)] = inst_37313);

(statearr_37319_37335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (6))){
var inst_37303 = (state_37317[(7)]);
var inst_37306 = (state_37317[(8)]);
var inst_37310 = f.call(null,inst_37303,inst_37306);
var inst_37303__$1 = inst_37310;
var state_37317__$1 = (function (){var statearr_37320 = state_37317;
(statearr_37320[(7)] = inst_37303__$1);

return statearr_37320;
})();
var statearr_37321_37336 = state_37317__$1;
(statearr_37321_37336[(2)] = null);

(statearr_37321_37336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (5))){
var inst_37303 = (state_37317[(7)]);
var state_37317__$1 = state_37317;
var statearr_37322_37337 = state_37317__$1;
(statearr_37322_37337[(2)] = inst_37303);

(statearr_37322_37337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (4))){
var inst_37306 = (state_37317[(8)]);
var inst_37306__$1 = (state_37317[(2)]);
var inst_37307 = (inst_37306__$1 == null);
var state_37317__$1 = (function (){var statearr_37323 = state_37317;
(statearr_37323[(8)] = inst_37306__$1);

return statearr_37323;
})();
if(cljs.core.truth_(inst_37307)){
var statearr_37324_37338 = state_37317__$1;
(statearr_37324_37338[(1)] = (5));

} else {
var statearr_37325_37339 = state_37317__$1;
(statearr_37325_37339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37318 === (3))){
var inst_37315 = (state_37317[(2)]);
var state_37317__$1 = state_37317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37317__$1,inst_37315);
} else {
if((state_val_37318 === (2))){
var state_37317__$1 = state_37317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37317__$1,(4),ch);
} else {
if((state_val_37318 === (1))){
var inst_37303 = init;
var state_37317__$1 = (function (){var statearr_37326 = state_37317;
(statearr_37326[(7)] = inst_37303);

return statearr_37326;
})();
var statearr_37327_37340 = state_37317__$1;
(statearr_37327_37340[(2)] = null);

(statearr_37327_37340[(1)] = (2));


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
});})(c__30437__auto__))
;
return ((function (switch__30422__auto__,c__30437__auto__){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_37331 = [null,null,null,null,null,null,null,null,null];
(statearr_37331[(0)] = state_machine__30423__auto__);

(statearr_37331[(1)] = (1));

return statearr_37331;
});
var state_machine__30423__auto____1 = (function (state_37317){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_37317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e37332){if((e37332 instanceof Object)){
var ex__30426__auto__ = e37332;
var statearr_37333_37341 = state_37317;
(statearr_37333_37341[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37342 = state_37317;
state_37317 = G__37342;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_37317){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_37317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto__))
})();
var state__30439__auto__ = (function (){var statearr_37334 = f__30438__auto__.call(null);
(statearr_37334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto__);

return statearr_37334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto__))
);

return c__30437__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__30437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto__){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto__){
return (function (state_37416){
var state_val_37417 = (state_37416[(1)]);
if((state_val_37417 === (7))){
var inst_37398 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37418_37441 = state_37416__$1;
(statearr_37418_37441[(2)] = inst_37398);

(statearr_37418_37441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (1))){
var inst_37392 = cljs.core.seq.call(null,coll);
var inst_37393 = inst_37392;
var state_37416__$1 = (function (){var statearr_37419 = state_37416;
(statearr_37419[(7)] = inst_37393);

return statearr_37419;
})();
var statearr_37420_37442 = state_37416__$1;
(statearr_37420_37442[(2)] = null);

(statearr_37420_37442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (4))){
var inst_37393 = (state_37416[(7)]);
var inst_37396 = cljs.core.first.call(null,inst_37393);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37416__$1,(7),ch,inst_37396);
} else {
if((state_val_37417 === (13))){
var inst_37410 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37421_37443 = state_37416__$1;
(statearr_37421_37443[(2)] = inst_37410);

(statearr_37421_37443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (6))){
var inst_37401 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37401)){
var statearr_37422_37444 = state_37416__$1;
(statearr_37422_37444[(1)] = (8));

} else {
var statearr_37423_37445 = state_37416__$1;
(statearr_37423_37445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (3))){
var inst_37414 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37416__$1,inst_37414);
} else {
if((state_val_37417 === (12))){
var state_37416__$1 = state_37416;
var statearr_37424_37446 = state_37416__$1;
(statearr_37424_37446[(2)] = null);

(statearr_37424_37446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (2))){
var inst_37393 = (state_37416[(7)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37393)){
var statearr_37425_37447 = state_37416__$1;
(statearr_37425_37447[(1)] = (4));

} else {
var statearr_37426_37448 = state_37416__$1;
(statearr_37426_37448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (11))){
var inst_37407 = cljs.core.async.close_BANG_.call(null,ch);
var state_37416__$1 = state_37416;
var statearr_37427_37449 = state_37416__$1;
(statearr_37427_37449[(2)] = inst_37407);

(statearr_37427_37449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (9))){
var state_37416__$1 = state_37416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37428_37450 = state_37416__$1;
(statearr_37428_37450[(1)] = (11));

} else {
var statearr_37429_37451 = state_37416__$1;
(statearr_37429_37451[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (5))){
var inst_37393 = (state_37416[(7)]);
var state_37416__$1 = state_37416;
var statearr_37430_37452 = state_37416__$1;
(statearr_37430_37452[(2)] = inst_37393);

(statearr_37430_37452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (10))){
var inst_37412 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37431_37453 = state_37416__$1;
(statearr_37431_37453[(2)] = inst_37412);

(statearr_37431_37453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (8))){
var inst_37393 = (state_37416[(7)]);
var inst_37403 = cljs.core.next.call(null,inst_37393);
var inst_37393__$1 = inst_37403;
var state_37416__$1 = (function (){var statearr_37432 = state_37416;
(statearr_37432[(7)] = inst_37393__$1);

return statearr_37432;
})();
var statearr_37433_37454 = state_37416__$1;
(statearr_37433_37454[(2)] = null);

(statearr_37433_37454[(1)] = (2));


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
});})(c__30437__auto__))
;
return ((function (switch__30422__auto__,c__30437__auto__){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_37437 = [null,null,null,null,null,null,null,null];
(statearr_37437[(0)] = state_machine__30423__auto__);

(statearr_37437[(1)] = (1));

return statearr_37437;
});
var state_machine__30423__auto____1 = (function (state_37416){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_37416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e37438){if((e37438 instanceof Object)){
var ex__30426__auto__ = e37438;
var statearr_37439_37455 = state_37416;
(statearr_37439_37455[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37456 = state_37416;
state_37416 = G__37456;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_37416){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_37416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto__))
})();
var state__30439__auto__ = (function (){var statearr_37440 = f__30438__auto__.call(null);
(statearr_37440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto__);

return statearr_37440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto__))
);

return c__30437__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj37458 = {};
return obj37458;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__28507__auto__ = _;
if(and__28507__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__28507__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29163__auto__ = (((_ == null))?null:_);
return (function (){var or__28519__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj37460 = {};
return obj37460;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t37682 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37682 = (function (cs,ch,mult,meta37683){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37683 = meta37683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37682.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t37682.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t37682.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t37682.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t37682.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t37682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37684){
var self__ = this;
var _37684__$1 = this;
return self__.meta37683;
});})(cs))
;

cljs.core.async.t37682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37684,meta37683__$1){
var self__ = this;
var _37684__$1 = this;
return (new cljs.core.async.t37682(self__.cs,self__.ch,self__.mult,meta37683__$1));
});})(cs))
;

cljs.core.async.t37682.cljs$lang$type = true;

cljs.core.async.t37682.cljs$lang$ctorStr = "cljs.core.async/t37682";

cljs.core.async.t37682.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t37682");
});})(cs))
;

cljs.core.async.__GT_t37682 = ((function (cs){
return (function __GT_t37682(cs__$1,ch__$1,mult__$1,meta37683){
return (new cljs.core.async.t37682(cs__$1,ch__$1,mult__$1,meta37683));
});})(cs))
;

}

return (new cljs.core.async.t37682(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30437__auto___37903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___37903,cs,m,dchan,dctr,done){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___37903,cs,m,dchan,dctr,done){
return (function (state_37815){
var state_val_37816 = (state_37815[(1)]);
if((state_val_37816 === (7))){
var inst_37811 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37817_37904 = state_37815__$1;
(statearr_37817_37904[(2)] = inst_37811);

(statearr_37817_37904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (20))){
var inst_37716 = (state_37815[(7)]);
var inst_37726 = cljs.core.first.call(null,inst_37716);
var inst_37727 = cljs.core.nth.call(null,inst_37726,(0),null);
var inst_37728 = cljs.core.nth.call(null,inst_37726,(1),null);
var state_37815__$1 = (function (){var statearr_37818 = state_37815;
(statearr_37818[(8)] = inst_37727);

return statearr_37818;
})();
if(cljs.core.truth_(inst_37728)){
var statearr_37819_37905 = state_37815__$1;
(statearr_37819_37905[(1)] = (22));

} else {
var statearr_37820_37906 = state_37815__$1;
(statearr_37820_37906[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (27))){
var inst_37758 = (state_37815[(9)]);
var inst_37687 = (state_37815[(10)]);
var inst_37763 = (state_37815[(11)]);
var inst_37756 = (state_37815[(12)]);
var inst_37763__$1 = cljs.core._nth.call(null,inst_37756,inst_37758);
var inst_37764 = cljs.core.async.put_BANG_.call(null,inst_37763__$1,inst_37687,done);
var state_37815__$1 = (function (){var statearr_37821 = state_37815;
(statearr_37821[(11)] = inst_37763__$1);

return statearr_37821;
})();
if(cljs.core.truth_(inst_37764)){
var statearr_37822_37907 = state_37815__$1;
(statearr_37822_37907[(1)] = (30));

} else {
var statearr_37823_37908 = state_37815__$1;
(statearr_37823_37908[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (1))){
var state_37815__$1 = state_37815;
var statearr_37824_37909 = state_37815__$1;
(statearr_37824_37909[(2)] = null);

(statearr_37824_37909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (24))){
var inst_37716 = (state_37815[(7)]);
var inst_37733 = (state_37815[(2)]);
var inst_37734 = cljs.core.next.call(null,inst_37716);
var inst_37696 = inst_37734;
var inst_37697 = null;
var inst_37698 = (0);
var inst_37699 = (0);
var state_37815__$1 = (function (){var statearr_37825 = state_37815;
(statearr_37825[(13)] = inst_37733);

(statearr_37825[(14)] = inst_37696);

(statearr_37825[(15)] = inst_37699);

(statearr_37825[(16)] = inst_37698);

(statearr_37825[(17)] = inst_37697);

return statearr_37825;
})();
var statearr_37826_37910 = state_37815__$1;
(statearr_37826_37910[(2)] = null);

(statearr_37826_37910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (39))){
var state_37815__$1 = state_37815;
var statearr_37830_37911 = state_37815__$1;
(statearr_37830_37911[(2)] = null);

(statearr_37830_37911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (4))){
var inst_37687 = (state_37815[(10)]);
var inst_37687__$1 = (state_37815[(2)]);
var inst_37688 = (inst_37687__$1 == null);
var state_37815__$1 = (function (){var statearr_37831 = state_37815;
(statearr_37831[(10)] = inst_37687__$1);

return statearr_37831;
})();
if(cljs.core.truth_(inst_37688)){
var statearr_37832_37912 = state_37815__$1;
(statearr_37832_37912[(1)] = (5));

} else {
var statearr_37833_37913 = state_37815__$1;
(statearr_37833_37913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (15))){
var inst_37696 = (state_37815[(14)]);
var inst_37699 = (state_37815[(15)]);
var inst_37698 = (state_37815[(16)]);
var inst_37697 = (state_37815[(17)]);
var inst_37712 = (state_37815[(2)]);
var inst_37713 = (inst_37699 + (1));
var tmp37827 = inst_37696;
var tmp37828 = inst_37698;
var tmp37829 = inst_37697;
var inst_37696__$1 = tmp37827;
var inst_37697__$1 = tmp37829;
var inst_37698__$1 = tmp37828;
var inst_37699__$1 = inst_37713;
var state_37815__$1 = (function (){var statearr_37834 = state_37815;
(statearr_37834[(14)] = inst_37696__$1);

(statearr_37834[(15)] = inst_37699__$1);

(statearr_37834[(16)] = inst_37698__$1);

(statearr_37834[(18)] = inst_37712);

(statearr_37834[(17)] = inst_37697__$1);

return statearr_37834;
})();
var statearr_37835_37914 = state_37815__$1;
(statearr_37835_37914[(2)] = null);

(statearr_37835_37914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (21))){
var inst_37737 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37839_37915 = state_37815__$1;
(statearr_37839_37915[(2)] = inst_37737);

(statearr_37839_37915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (31))){
var inst_37763 = (state_37815[(11)]);
var inst_37767 = done.call(null,null);
var inst_37768 = cljs.core.async.untap_STAR_.call(null,m,inst_37763);
var state_37815__$1 = (function (){var statearr_37840 = state_37815;
(statearr_37840[(19)] = inst_37767);

return statearr_37840;
})();
var statearr_37841_37916 = state_37815__$1;
(statearr_37841_37916[(2)] = inst_37768);

(statearr_37841_37916[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (32))){
var inst_37758 = (state_37815[(9)]);
var inst_37755 = (state_37815[(20)]);
var inst_37757 = (state_37815[(21)]);
var inst_37756 = (state_37815[(12)]);
var inst_37770 = (state_37815[(2)]);
var inst_37771 = (inst_37758 + (1));
var tmp37836 = inst_37755;
var tmp37837 = inst_37757;
var tmp37838 = inst_37756;
var inst_37755__$1 = tmp37836;
var inst_37756__$1 = tmp37838;
var inst_37757__$1 = tmp37837;
var inst_37758__$1 = inst_37771;
var state_37815__$1 = (function (){var statearr_37842 = state_37815;
(statearr_37842[(9)] = inst_37758__$1);

(statearr_37842[(20)] = inst_37755__$1);

(statearr_37842[(21)] = inst_37757__$1);

(statearr_37842[(22)] = inst_37770);

(statearr_37842[(12)] = inst_37756__$1);

return statearr_37842;
})();
var statearr_37843_37917 = state_37815__$1;
(statearr_37843_37917[(2)] = null);

(statearr_37843_37917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (40))){
var inst_37783 = (state_37815[(23)]);
var inst_37787 = done.call(null,null);
var inst_37788 = cljs.core.async.untap_STAR_.call(null,m,inst_37783);
var state_37815__$1 = (function (){var statearr_37844 = state_37815;
(statearr_37844[(24)] = inst_37787);

return statearr_37844;
})();
var statearr_37845_37918 = state_37815__$1;
(statearr_37845_37918[(2)] = inst_37788);

(statearr_37845_37918[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (33))){
var inst_37774 = (state_37815[(25)]);
var inst_37776 = cljs.core.chunked_seq_QMARK_.call(null,inst_37774);
var state_37815__$1 = state_37815;
if(inst_37776){
var statearr_37846_37919 = state_37815__$1;
(statearr_37846_37919[(1)] = (36));

} else {
var statearr_37847_37920 = state_37815__$1;
(statearr_37847_37920[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (13))){
var inst_37706 = (state_37815[(26)]);
var inst_37709 = cljs.core.async.close_BANG_.call(null,inst_37706);
var state_37815__$1 = state_37815;
var statearr_37848_37921 = state_37815__$1;
(statearr_37848_37921[(2)] = inst_37709);

(statearr_37848_37921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (22))){
var inst_37727 = (state_37815[(8)]);
var inst_37730 = cljs.core.async.close_BANG_.call(null,inst_37727);
var state_37815__$1 = state_37815;
var statearr_37849_37922 = state_37815__$1;
(statearr_37849_37922[(2)] = inst_37730);

(statearr_37849_37922[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (36))){
var inst_37774 = (state_37815[(25)]);
var inst_37778 = cljs.core.chunk_first.call(null,inst_37774);
var inst_37779 = cljs.core.chunk_rest.call(null,inst_37774);
var inst_37780 = cljs.core.count.call(null,inst_37778);
var inst_37755 = inst_37779;
var inst_37756 = inst_37778;
var inst_37757 = inst_37780;
var inst_37758 = (0);
var state_37815__$1 = (function (){var statearr_37850 = state_37815;
(statearr_37850[(9)] = inst_37758);

(statearr_37850[(20)] = inst_37755);

(statearr_37850[(21)] = inst_37757);

(statearr_37850[(12)] = inst_37756);

return statearr_37850;
})();
var statearr_37851_37923 = state_37815__$1;
(statearr_37851_37923[(2)] = null);

(statearr_37851_37923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (41))){
var inst_37774 = (state_37815[(25)]);
var inst_37790 = (state_37815[(2)]);
var inst_37791 = cljs.core.next.call(null,inst_37774);
var inst_37755 = inst_37791;
var inst_37756 = null;
var inst_37757 = (0);
var inst_37758 = (0);
var state_37815__$1 = (function (){var statearr_37852 = state_37815;
(statearr_37852[(9)] = inst_37758);

(statearr_37852[(20)] = inst_37755);

(statearr_37852[(21)] = inst_37757);

(statearr_37852[(27)] = inst_37790);

(statearr_37852[(12)] = inst_37756);

return statearr_37852;
})();
var statearr_37853_37924 = state_37815__$1;
(statearr_37853_37924[(2)] = null);

(statearr_37853_37924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (43))){
var state_37815__$1 = state_37815;
var statearr_37854_37925 = state_37815__$1;
(statearr_37854_37925[(2)] = null);

(statearr_37854_37925[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (29))){
var inst_37799 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37855_37926 = state_37815__$1;
(statearr_37855_37926[(2)] = inst_37799);

(statearr_37855_37926[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (44))){
var inst_37808 = (state_37815[(2)]);
var state_37815__$1 = (function (){var statearr_37856 = state_37815;
(statearr_37856[(28)] = inst_37808);

return statearr_37856;
})();
var statearr_37857_37927 = state_37815__$1;
(statearr_37857_37927[(2)] = null);

(statearr_37857_37927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (6))){
var inst_37747 = (state_37815[(29)]);
var inst_37746 = cljs.core.deref.call(null,cs);
var inst_37747__$1 = cljs.core.keys.call(null,inst_37746);
var inst_37748 = cljs.core.count.call(null,inst_37747__$1);
var inst_37749 = cljs.core.reset_BANG_.call(null,dctr,inst_37748);
var inst_37754 = cljs.core.seq.call(null,inst_37747__$1);
var inst_37755 = inst_37754;
var inst_37756 = null;
var inst_37757 = (0);
var inst_37758 = (0);
var state_37815__$1 = (function (){var statearr_37858 = state_37815;
(statearr_37858[(9)] = inst_37758);

(statearr_37858[(20)] = inst_37755);

(statearr_37858[(29)] = inst_37747__$1);

(statearr_37858[(21)] = inst_37757);

(statearr_37858[(12)] = inst_37756);

(statearr_37858[(30)] = inst_37749);

return statearr_37858;
})();
var statearr_37859_37928 = state_37815__$1;
(statearr_37859_37928[(2)] = null);

(statearr_37859_37928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (28))){
var inst_37755 = (state_37815[(20)]);
var inst_37774 = (state_37815[(25)]);
var inst_37774__$1 = cljs.core.seq.call(null,inst_37755);
var state_37815__$1 = (function (){var statearr_37860 = state_37815;
(statearr_37860[(25)] = inst_37774__$1);

return statearr_37860;
})();
if(inst_37774__$1){
var statearr_37861_37929 = state_37815__$1;
(statearr_37861_37929[(1)] = (33));

} else {
var statearr_37862_37930 = state_37815__$1;
(statearr_37862_37930[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (25))){
var inst_37758 = (state_37815[(9)]);
var inst_37757 = (state_37815[(21)]);
var inst_37760 = (inst_37758 < inst_37757);
var inst_37761 = inst_37760;
var state_37815__$1 = state_37815;
if(cljs.core.truth_(inst_37761)){
var statearr_37863_37931 = state_37815__$1;
(statearr_37863_37931[(1)] = (27));

} else {
var statearr_37864_37932 = state_37815__$1;
(statearr_37864_37932[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (34))){
var state_37815__$1 = state_37815;
var statearr_37865_37933 = state_37815__$1;
(statearr_37865_37933[(2)] = null);

(statearr_37865_37933[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (17))){
var state_37815__$1 = state_37815;
var statearr_37866_37934 = state_37815__$1;
(statearr_37866_37934[(2)] = null);

(statearr_37866_37934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (3))){
var inst_37813 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37815__$1,inst_37813);
} else {
if((state_val_37816 === (12))){
var inst_37742 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37867_37935 = state_37815__$1;
(statearr_37867_37935[(2)] = inst_37742);

(statearr_37867_37935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (2))){
var state_37815__$1 = state_37815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37815__$1,(4),ch);
} else {
if((state_val_37816 === (23))){
var state_37815__$1 = state_37815;
var statearr_37868_37936 = state_37815__$1;
(statearr_37868_37936[(2)] = null);

(statearr_37868_37936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (35))){
var inst_37797 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37869_37937 = state_37815__$1;
(statearr_37869_37937[(2)] = inst_37797);

(statearr_37869_37937[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (19))){
var inst_37716 = (state_37815[(7)]);
var inst_37720 = cljs.core.chunk_first.call(null,inst_37716);
var inst_37721 = cljs.core.chunk_rest.call(null,inst_37716);
var inst_37722 = cljs.core.count.call(null,inst_37720);
var inst_37696 = inst_37721;
var inst_37697 = inst_37720;
var inst_37698 = inst_37722;
var inst_37699 = (0);
var state_37815__$1 = (function (){var statearr_37870 = state_37815;
(statearr_37870[(14)] = inst_37696);

(statearr_37870[(15)] = inst_37699);

(statearr_37870[(16)] = inst_37698);

(statearr_37870[(17)] = inst_37697);

return statearr_37870;
})();
var statearr_37871_37938 = state_37815__$1;
(statearr_37871_37938[(2)] = null);

(statearr_37871_37938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (11))){
var inst_37716 = (state_37815[(7)]);
var inst_37696 = (state_37815[(14)]);
var inst_37716__$1 = cljs.core.seq.call(null,inst_37696);
var state_37815__$1 = (function (){var statearr_37872 = state_37815;
(statearr_37872[(7)] = inst_37716__$1);

return statearr_37872;
})();
if(inst_37716__$1){
var statearr_37873_37939 = state_37815__$1;
(statearr_37873_37939[(1)] = (16));

} else {
var statearr_37874_37940 = state_37815__$1;
(statearr_37874_37940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (9))){
var inst_37744 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37875_37941 = state_37815__$1;
(statearr_37875_37941[(2)] = inst_37744);

(statearr_37875_37941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (5))){
var inst_37694 = cljs.core.deref.call(null,cs);
var inst_37695 = cljs.core.seq.call(null,inst_37694);
var inst_37696 = inst_37695;
var inst_37697 = null;
var inst_37698 = (0);
var inst_37699 = (0);
var state_37815__$1 = (function (){var statearr_37876 = state_37815;
(statearr_37876[(14)] = inst_37696);

(statearr_37876[(15)] = inst_37699);

(statearr_37876[(16)] = inst_37698);

(statearr_37876[(17)] = inst_37697);

return statearr_37876;
})();
var statearr_37877_37942 = state_37815__$1;
(statearr_37877_37942[(2)] = null);

(statearr_37877_37942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (14))){
var state_37815__$1 = state_37815;
var statearr_37878_37943 = state_37815__$1;
(statearr_37878_37943[(2)] = null);

(statearr_37878_37943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (45))){
var inst_37805 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37879_37944 = state_37815__$1;
(statearr_37879_37944[(2)] = inst_37805);

(statearr_37879_37944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (26))){
var inst_37747 = (state_37815[(29)]);
var inst_37801 = (state_37815[(2)]);
var inst_37802 = cljs.core.seq.call(null,inst_37747);
var state_37815__$1 = (function (){var statearr_37880 = state_37815;
(statearr_37880[(31)] = inst_37801);

return statearr_37880;
})();
if(inst_37802){
var statearr_37881_37945 = state_37815__$1;
(statearr_37881_37945[(1)] = (42));

} else {
var statearr_37882_37946 = state_37815__$1;
(statearr_37882_37946[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (16))){
var inst_37716 = (state_37815[(7)]);
var inst_37718 = cljs.core.chunked_seq_QMARK_.call(null,inst_37716);
var state_37815__$1 = state_37815;
if(inst_37718){
var statearr_37883_37947 = state_37815__$1;
(statearr_37883_37947[(1)] = (19));

} else {
var statearr_37884_37948 = state_37815__$1;
(statearr_37884_37948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (38))){
var inst_37794 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37885_37949 = state_37815__$1;
(statearr_37885_37949[(2)] = inst_37794);

(statearr_37885_37949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (30))){
var state_37815__$1 = state_37815;
var statearr_37886_37950 = state_37815__$1;
(statearr_37886_37950[(2)] = null);

(statearr_37886_37950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (10))){
var inst_37699 = (state_37815[(15)]);
var inst_37697 = (state_37815[(17)]);
var inst_37705 = cljs.core._nth.call(null,inst_37697,inst_37699);
var inst_37706 = cljs.core.nth.call(null,inst_37705,(0),null);
var inst_37707 = cljs.core.nth.call(null,inst_37705,(1),null);
var state_37815__$1 = (function (){var statearr_37887 = state_37815;
(statearr_37887[(26)] = inst_37706);

return statearr_37887;
})();
if(cljs.core.truth_(inst_37707)){
var statearr_37888_37951 = state_37815__$1;
(statearr_37888_37951[(1)] = (13));

} else {
var statearr_37889_37952 = state_37815__$1;
(statearr_37889_37952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (18))){
var inst_37740 = (state_37815[(2)]);
var state_37815__$1 = state_37815;
var statearr_37890_37953 = state_37815__$1;
(statearr_37890_37953[(2)] = inst_37740);

(statearr_37890_37953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (42))){
var state_37815__$1 = state_37815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37815__$1,(45),dchan);
} else {
if((state_val_37816 === (37))){
var inst_37687 = (state_37815[(10)]);
var inst_37783 = (state_37815[(23)]);
var inst_37774 = (state_37815[(25)]);
var inst_37783__$1 = cljs.core.first.call(null,inst_37774);
var inst_37784 = cljs.core.async.put_BANG_.call(null,inst_37783__$1,inst_37687,done);
var state_37815__$1 = (function (){var statearr_37891 = state_37815;
(statearr_37891[(23)] = inst_37783__$1);

return statearr_37891;
})();
if(cljs.core.truth_(inst_37784)){
var statearr_37892_37954 = state_37815__$1;
(statearr_37892_37954[(1)] = (39));

} else {
var statearr_37893_37955 = state_37815__$1;
(statearr_37893_37955[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37816 === (8))){
var inst_37699 = (state_37815[(15)]);
var inst_37698 = (state_37815[(16)]);
var inst_37701 = (inst_37699 < inst_37698);
var inst_37702 = inst_37701;
var state_37815__$1 = state_37815;
if(cljs.core.truth_(inst_37702)){
var statearr_37894_37956 = state_37815__$1;
(statearr_37894_37956[(1)] = (10));

} else {
var statearr_37895_37957 = state_37815__$1;
(statearr_37895_37957[(1)] = (11));

}

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
});})(c__30437__auto___37903,cs,m,dchan,dctr,done))
;
return ((function (switch__30422__auto__,c__30437__auto___37903,cs,m,dchan,dctr,done){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_37899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37899[(0)] = state_machine__30423__auto__);

(statearr_37899[(1)] = (1));

return statearr_37899;
});
var state_machine__30423__auto____1 = (function (state_37815){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_37815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e37900){if((e37900 instanceof Object)){
var ex__30426__auto__ = e37900;
var statearr_37901_37958 = state_37815;
(statearr_37901_37958[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37959 = state_37815;
state_37815 = G__37959;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_37815){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_37815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___37903,cs,m,dchan,dctr,done))
})();
var state__30439__auto__ = (function (){var statearr_37902 = f__30438__auto__.call(null);
(statearr_37902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___37903);

return statearr_37902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___37903,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj37961 = {};
return obj37961;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__28507__auto__ = m;
if(and__28507__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__28507__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29163__auto__ = (((m == null))?null:m);
return (function (){var or__28519__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__37962){
var map__37967 = p__37962;
var map__37967__$1 = ((cljs.core.seq_QMARK_.call(null,map__37967))?cljs.core.apply.call(null,cljs.core.hash_map,map__37967):map__37967);
var opts = map__37967__$1;
var statearr_37968_37971 = state;
(statearr_37968_37971[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__37967,map__37967__$1,opts){
return (function (val){
var statearr_37969_37972 = state;
(statearr_37969_37972[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37967,map__37967__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_37970_37973 = state;
(statearr_37970_37973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__37962 = null;
if (arguments.length > 3) {
  p__37962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__37962);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__37974){
var state = cljs.core.first(arglist__37974);
arglist__37974 = cljs.core.next(arglist__37974);
var cont_block = cljs.core.first(arglist__37974);
arglist__37974 = cljs.core.next(arglist__37974);
var ports = cljs.core.first(arglist__37974);
var p__37962 = cljs.core.rest(arglist__37974);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__37962);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t38094 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38094 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38095){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38095 = meta38095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38094.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t38094.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38096){
var self__ = this;
var _38096__$1 = this;
return self__.meta38095;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38096,meta38095__$1){
var self__ = this;
var _38096__$1 = this;
return (new cljs.core.async.t38094(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38095__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38094.cljs$lang$type = true;

cljs.core.async.t38094.cljs$lang$ctorStr = "cljs.core.async/t38094";

cljs.core.async.t38094.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t38094");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t38094 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38094(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38095){
return (new cljs.core.async.t38094(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38095));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t38094(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__30437__auto___38213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___38213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___38213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38166){
var state_val_38167 = (state_38166[(1)]);
if((state_val_38167 === (7))){
var inst_38110 = (state_38166[(7)]);
var inst_38115 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38110);
var state_38166__$1 = state_38166;
var statearr_38168_38214 = state_38166__$1;
(statearr_38168_38214[(2)] = inst_38115);

(statearr_38168_38214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (20))){
var inst_38125 = (state_38166[(8)]);
var state_38166__$1 = state_38166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38166__$1,(23),out,inst_38125);
} else {
if((state_val_38167 === (1))){
var inst_38100 = (state_38166[(9)]);
var inst_38100__$1 = calc_state.call(null);
var inst_38101 = cljs.core.seq_QMARK_.call(null,inst_38100__$1);
var state_38166__$1 = (function (){var statearr_38169 = state_38166;
(statearr_38169[(9)] = inst_38100__$1);

return statearr_38169;
})();
if(inst_38101){
var statearr_38170_38215 = state_38166__$1;
(statearr_38170_38215[(1)] = (2));

} else {
var statearr_38171_38216 = state_38166__$1;
(statearr_38171_38216[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (24))){
var inst_38118 = (state_38166[(10)]);
var inst_38110 = inst_38118;
var state_38166__$1 = (function (){var statearr_38172 = state_38166;
(statearr_38172[(7)] = inst_38110);

return statearr_38172;
})();
var statearr_38173_38217 = state_38166__$1;
(statearr_38173_38217[(2)] = null);

(statearr_38173_38217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (4))){
var inst_38100 = (state_38166[(9)]);
var inst_38106 = (state_38166[(2)]);
var inst_38107 = cljs.core.get.call(null,inst_38106,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38108 = cljs.core.get.call(null,inst_38106,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38109 = cljs.core.get.call(null,inst_38106,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38110 = inst_38100;
var state_38166__$1 = (function (){var statearr_38174 = state_38166;
(statearr_38174[(11)] = inst_38108);

(statearr_38174[(7)] = inst_38110);

(statearr_38174[(12)] = inst_38109);

(statearr_38174[(13)] = inst_38107);

return statearr_38174;
})();
var statearr_38175_38218 = state_38166__$1;
(statearr_38175_38218[(2)] = null);

(statearr_38175_38218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (15))){
var state_38166__$1 = state_38166;
var statearr_38176_38219 = state_38166__$1;
(statearr_38176_38219[(2)] = null);

(statearr_38176_38219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (21))){
var inst_38118 = (state_38166[(10)]);
var inst_38110 = inst_38118;
var state_38166__$1 = (function (){var statearr_38177 = state_38166;
(statearr_38177[(7)] = inst_38110);

return statearr_38177;
})();
var statearr_38178_38220 = state_38166__$1;
(statearr_38178_38220[(2)] = null);

(statearr_38178_38220[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (13))){
var inst_38162 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
var statearr_38179_38221 = state_38166__$1;
(statearr_38179_38221[(2)] = inst_38162);

(statearr_38179_38221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (22))){
var inst_38160 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
var statearr_38180_38222 = state_38166__$1;
(statearr_38180_38222[(2)] = inst_38160);

(statearr_38180_38222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (6))){
var inst_38164 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38166__$1,inst_38164);
} else {
if((state_val_38167 === (25))){
var state_38166__$1 = state_38166;
var statearr_38181_38223 = state_38166__$1;
(statearr_38181_38223[(2)] = null);

(statearr_38181_38223[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (17))){
var inst_38140 = (state_38166[(14)]);
var state_38166__$1 = state_38166;
var statearr_38182_38224 = state_38166__$1;
(statearr_38182_38224[(2)] = inst_38140);

(statearr_38182_38224[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (3))){
var inst_38100 = (state_38166[(9)]);
var state_38166__$1 = state_38166;
var statearr_38183_38225 = state_38166__$1;
(statearr_38183_38225[(2)] = inst_38100);

(statearr_38183_38225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (12))){
var inst_38126 = (state_38166[(15)]);
var inst_38121 = (state_38166[(16)]);
var inst_38140 = (state_38166[(14)]);
var inst_38140__$1 = inst_38121.call(null,inst_38126);
var state_38166__$1 = (function (){var statearr_38184 = state_38166;
(statearr_38184[(14)] = inst_38140__$1);

return statearr_38184;
})();
if(cljs.core.truth_(inst_38140__$1)){
var statearr_38185_38226 = state_38166__$1;
(statearr_38185_38226[(1)] = (17));

} else {
var statearr_38186_38227 = state_38166__$1;
(statearr_38186_38227[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (2))){
var inst_38100 = (state_38166[(9)]);
var inst_38103 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38100);
var state_38166__$1 = state_38166;
var statearr_38187_38228 = state_38166__$1;
(statearr_38187_38228[(2)] = inst_38103);

(statearr_38187_38228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (23))){
var inst_38151 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
if(cljs.core.truth_(inst_38151)){
var statearr_38188_38229 = state_38166__$1;
(statearr_38188_38229[(1)] = (24));

} else {
var statearr_38189_38230 = state_38166__$1;
(statearr_38189_38230[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (19))){
var inst_38148 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
if(cljs.core.truth_(inst_38148)){
var statearr_38190_38231 = state_38166__$1;
(statearr_38190_38231[(1)] = (20));

} else {
var statearr_38191_38232 = state_38166__$1;
(statearr_38191_38232[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (11))){
var inst_38125 = (state_38166[(8)]);
var inst_38131 = (inst_38125 == null);
var state_38166__$1 = state_38166;
if(cljs.core.truth_(inst_38131)){
var statearr_38192_38233 = state_38166__$1;
(statearr_38192_38233[(1)] = (14));

} else {
var statearr_38193_38234 = state_38166__$1;
(statearr_38193_38234[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (9))){
var inst_38118 = (state_38166[(10)]);
var inst_38118__$1 = (state_38166[(2)]);
var inst_38119 = cljs.core.get.call(null,inst_38118__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38120 = cljs.core.get.call(null,inst_38118__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38121 = cljs.core.get.call(null,inst_38118__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_38166__$1 = (function (){var statearr_38194 = state_38166;
(statearr_38194[(17)] = inst_38120);

(statearr_38194[(16)] = inst_38121);

(statearr_38194[(10)] = inst_38118__$1);

return statearr_38194;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38166__$1,(10),inst_38119);
} else {
if((state_val_38167 === (5))){
var inst_38110 = (state_38166[(7)]);
var inst_38113 = cljs.core.seq_QMARK_.call(null,inst_38110);
var state_38166__$1 = state_38166;
if(inst_38113){
var statearr_38195_38235 = state_38166__$1;
(statearr_38195_38235[(1)] = (7));

} else {
var statearr_38196_38236 = state_38166__$1;
(statearr_38196_38236[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (14))){
var inst_38126 = (state_38166[(15)]);
var inst_38133 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38126);
var state_38166__$1 = state_38166;
var statearr_38197_38237 = state_38166__$1;
(statearr_38197_38237[(2)] = inst_38133);

(statearr_38197_38237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (26))){
var inst_38156 = (state_38166[(2)]);
var state_38166__$1 = state_38166;
var statearr_38198_38238 = state_38166__$1;
(statearr_38198_38238[(2)] = inst_38156);

(statearr_38198_38238[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (16))){
var inst_38136 = (state_38166[(2)]);
var inst_38137 = calc_state.call(null);
var inst_38110 = inst_38137;
var state_38166__$1 = (function (){var statearr_38199 = state_38166;
(statearr_38199[(7)] = inst_38110);

(statearr_38199[(18)] = inst_38136);

return statearr_38199;
})();
var statearr_38200_38239 = state_38166__$1;
(statearr_38200_38239[(2)] = null);

(statearr_38200_38239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (10))){
var inst_38125 = (state_38166[(8)]);
var inst_38126 = (state_38166[(15)]);
var inst_38124 = (state_38166[(2)]);
var inst_38125__$1 = cljs.core.nth.call(null,inst_38124,(0),null);
var inst_38126__$1 = cljs.core.nth.call(null,inst_38124,(1),null);
var inst_38127 = (inst_38125__$1 == null);
var inst_38128 = cljs.core._EQ_.call(null,inst_38126__$1,change);
var inst_38129 = (inst_38127) || (inst_38128);
var state_38166__$1 = (function (){var statearr_38201 = state_38166;
(statearr_38201[(8)] = inst_38125__$1);

(statearr_38201[(15)] = inst_38126__$1);

return statearr_38201;
})();
if(cljs.core.truth_(inst_38129)){
var statearr_38202_38240 = state_38166__$1;
(statearr_38202_38240[(1)] = (11));

} else {
var statearr_38203_38241 = state_38166__$1;
(statearr_38203_38241[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (18))){
var inst_38120 = (state_38166[(17)]);
var inst_38126 = (state_38166[(15)]);
var inst_38121 = (state_38166[(16)]);
var inst_38143 = cljs.core.empty_QMARK_.call(null,inst_38121);
var inst_38144 = inst_38120.call(null,inst_38126);
var inst_38145 = cljs.core.not.call(null,inst_38144);
var inst_38146 = (inst_38143) && (inst_38145);
var state_38166__$1 = state_38166;
var statearr_38204_38242 = state_38166__$1;
(statearr_38204_38242[(2)] = inst_38146);

(statearr_38204_38242[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38167 === (8))){
var inst_38110 = (state_38166[(7)]);
var state_38166__$1 = state_38166;
var statearr_38205_38243 = state_38166__$1;
(statearr_38205_38243[(2)] = inst_38110);

(statearr_38205_38243[(1)] = (9));


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
});})(c__30437__auto___38213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30422__auto__,c__30437__auto___38213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_38209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38209[(0)] = state_machine__30423__auto__);

(statearr_38209[(1)] = (1));

return statearr_38209;
});
var state_machine__30423__auto____1 = (function (state_38166){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_38166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e38210){if((e38210 instanceof Object)){
var ex__30426__auto__ = e38210;
var statearr_38211_38244 = state_38166;
(statearr_38211_38244[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38245 = state_38166;
state_38166 = G__38245;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_38166){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_38166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___38213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30439__auto__ = (function (){var statearr_38212 = f__30438__auto__.call(null);
(statearr_38212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___38213);

return statearr_38212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___38213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj38247 = {};
return obj38247;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__28507__auto__ = p;
if(and__28507__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__28507__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29163__auto__ = (((p == null))?null:p);
return (function (){var or__28519__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__28507__auto__ = p;
if(and__28507__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__28507__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29163__auto__ = (((p == null))?null:p);
return (function (){var or__28519__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__28507__auto__ = p;
if(and__28507__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__28507__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29163__auto__ = (((p == null))?null:p);
return (function (){var or__28519__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__28507__auto__ = p;
if(and__28507__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__28507__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29163__auto__ = (((p == null))?null:p);
return (function (){var or__28519__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29163__auto__)]);
if(or__28519__auto__){
return or__28519__auto__;
} else {
var or__28519__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__28519__auto____$1){
return or__28519__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28519__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28519__auto__)){
return or__28519__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28519__auto__,mults){
return (function (p1__38248_SHARP_){
if(cljs.core.truth_(p1__38248_SHARP_.call(null,topic))){
return p1__38248_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38248_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28519__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t38371 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38371 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38372){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38372 = meta38372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38371.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t38371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t38371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t38371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t38371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t38371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t38371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38373){
var self__ = this;
var _38373__$1 = this;
return self__.meta38372;
});})(mults,ensure_mult))
;

cljs.core.async.t38371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38373,meta38372__$1){
var self__ = this;
var _38373__$1 = this;
return (new cljs.core.async.t38371(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38372__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t38371.cljs$lang$type = true;

cljs.core.async.t38371.cljs$lang$ctorStr = "cljs.core.async/t38371";

cljs.core.async.t38371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t38371");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t38371 = ((function (mults,ensure_mult){
return (function __GT_t38371(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38372){
return (new cljs.core.async.t38371(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38372));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t38371(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__30437__auto___38493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___38493,mults,ensure_mult,p){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___38493,mults,ensure_mult,p){
return (function (state_38445){
var state_val_38446 = (state_38445[(1)]);
if((state_val_38446 === (7))){
var inst_38441 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38447_38494 = state_38445__$1;
(statearr_38447_38494[(2)] = inst_38441);

(statearr_38447_38494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (20))){
var state_38445__$1 = state_38445;
var statearr_38448_38495 = state_38445__$1;
(statearr_38448_38495[(2)] = null);

(statearr_38448_38495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (1))){
var state_38445__$1 = state_38445;
var statearr_38449_38496 = state_38445__$1;
(statearr_38449_38496[(2)] = null);

(statearr_38449_38496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (24))){
var inst_38424 = (state_38445[(7)]);
var inst_38433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38424);
var state_38445__$1 = state_38445;
var statearr_38450_38497 = state_38445__$1;
(statearr_38450_38497[(2)] = inst_38433);

(statearr_38450_38497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (4))){
var inst_38376 = (state_38445[(8)]);
var inst_38376__$1 = (state_38445[(2)]);
var inst_38377 = (inst_38376__$1 == null);
var state_38445__$1 = (function (){var statearr_38451 = state_38445;
(statearr_38451[(8)] = inst_38376__$1);

return statearr_38451;
})();
if(cljs.core.truth_(inst_38377)){
var statearr_38452_38498 = state_38445__$1;
(statearr_38452_38498[(1)] = (5));

} else {
var statearr_38453_38499 = state_38445__$1;
(statearr_38453_38499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (15))){
var inst_38418 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38454_38500 = state_38445__$1;
(statearr_38454_38500[(2)] = inst_38418);

(statearr_38454_38500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (21))){
var inst_38438 = (state_38445[(2)]);
var state_38445__$1 = (function (){var statearr_38455 = state_38445;
(statearr_38455[(9)] = inst_38438);

return statearr_38455;
})();
var statearr_38456_38501 = state_38445__$1;
(statearr_38456_38501[(2)] = null);

(statearr_38456_38501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (13))){
var inst_38400 = (state_38445[(10)]);
var inst_38402 = cljs.core.chunked_seq_QMARK_.call(null,inst_38400);
var state_38445__$1 = state_38445;
if(inst_38402){
var statearr_38457_38502 = state_38445__$1;
(statearr_38457_38502[(1)] = (16));

} else {
var statearr_38458_38503 = state_38445__$1;
(statearr_38458_38503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (22))){
var inst_38430 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
if(cljs.core.truth_(inst_38430)){
var statearr_38459_38504 = state_38445__$1;
(statearr_38459_38504[(1)] = (23));

} else {
var statearr_38460_38505 = state_38445__$1;
(statearr_38460_38505[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (6))){
var inst_38424 = (state_38445[(7)]);
var inst_38426 = (state_38445[(11)]);
var inst_38376 = (state_38445[(8)]);
var inst_38424__$1 = topic_fn.call(null,inst_38376);
var inst_38425 = cljs.core.deref.call(null,mults);
var inst_38426__$1 = cljs.core.get.call(null,inst_38425,inst_38424__$1);
var state_38445__$1 = (function (){var statearr_38461 = state_38445;
(statearr_38461[(7)] = inst_38424__$1);

(statearr_38461[(11)] = inst_38426__$1);

return statearr_38461;
})();
if(cljs.core.truth_(inst_38426__$1)){
var statearr_38462_38506 = state_38445__$1;
(statearr_38462_38506[(1)] = (19));

} else {
var statearr_38463_38507 = state_38445__$1;
(statearr_38463_38507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (25))){
var inst_38435 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38464_38508 = state_38445__$1;
(statearr_38464_38508[(2)] = inst_38435);

(statearr_38464_38508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (17))){
var inst_38400 = (state_38445[(10)]);
var inst_38409 = cljs.core.first.call(null,inst_38400);
var inst_38410 = cljs.core.async.muxch_STAR_.call(null,inst_38409);
var inst_38411 = cljs.core.async.close_BANG_.call(null,inst_38410);
var inst_38412 = cljs.core.next.call(null,inst_38400);
var inst_38386 = inst_38412;
var inst_38387 = null;
var inst_38388 = (0);
var inst_38389 = (0);
var state_38445__$1 = (function (){var statearr_38465 = state_38445;
(statearr_38465[(12)] = inst_38389);

(statearr_38465[(13)] = inst_38386);

(statearr_38465[(14)] = inst_38387);

(statearr_38465[(15)] = inst_38388);

(statearr_38465[(16)] = inst_38411);

return statearr_38465;
})();
var statearr_38466_38509 = state_38445__$1;
(statearr_38466_38509[(2)] = null);

(statearr_38466_38509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (3))){
var inst_38443 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38445__$1,inst_38443);
} else {
if((state_val_38446 === (12))){
var inst_38420 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38467_38510 = state_38445__$1;
(statearr_38467_38510[(2)] = inst_38420);

(statearr_38467_38510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (2))){
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38445__$1,(4),ch);
} else {
if((state_val_38446 === (23))){
var state_38445__$1 = state_38445;
var statearr_38468_38511 = state_38445__$1;
(statearr_38468_38511[(2)] = null);

(statearr_38468_38511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (19))){
var inst_38426 = (state_38445[(11)]);
var inst_38376 = (state_38445[(8)]);
var inst_38428 = cljs.core.async.muxch_STAR_.call(null,inst_38426);
var state_38445__$1 = state_38445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38445__$1,(22),inst_38428,inst_38376);
} else {
if((state_val_38446 === (11))){
var inst_38400 = (state_38445[(10)]);
var inst_38386 = (state_38445[(13)]);
var inst_38400__$1 = cljs.core.seq.call(null,inst_38386);
var state_38445__$1 = (function (){var statearr_38469 = state_38445;
(statearr_38469[(10)] = inst_38400__$1);

return statearr_38469;
})();
if(inst_38400__$1){
var statearr_38470_38512 = state_38445__$1;
(statearr_38470_38512[(1)] = (13));

} else {
var statearr_38471_38513 = state_38445__$1;
(statearr_38471_38513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (9))){
var inst_38422 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38472_38514 = state_38445__$1;
(statearr_38472_38514[(2)] = inst_38422);

(statearr_38472_38514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (5))){
var inst_38383 = cljs.core.deref.call(null,mults);
var inst_38384 = cljs.core.vals.call(null,inst_38383);
var inst_38385 = cljs.core.seq.call(null,inst_38384);
var inst_38386 = inst_38385;
var inst_38387 = null;
var inst_38388 = (0);
var inst_38389 = (0);
var state_38445__$1 = (function (){var statearr_38473 = state_38445;
(statearr_38473[(12)] = inst_38389);

(statearr_38473[(13)] = inst_38386);

(statearr_38473[(14)] = inst_38387);

(statearr_38473[(15)] = inst_38388);

return statearr_38473;
})();
var statearr_38474_38515 = state_38445__$1;
(statearr_38474_38515[(2)] = null);

(statearr_38474_38515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (14))){
var state_38445__$1 = state_38445;
var statearr_38478_38516 = state_38445__$1;
(statearr_38478_38516[(2)] = null);

(statearr_38478_38516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (16))){
var inst_38400 = (state_38445[(10)]);
var inst_38404 = cljs.core.chunk_first.call(null,inst_38400);
var inst_38405 = cljs.core.chunk_rest.call(null,inst_38400);
var inst_38406 = cljs.core.count.call(null,inst_38404);
var inst_38386 = inst_38405;
var inst_38387 = inst_38404;
var inst_38388 = inst_38406;
var inst_38389 = (0);
var state_38445__$1 = (function (){var statearr_38479 = state_38445;
(statearr_38479[(12)] = inst_38389);

(statearr_38479[(13)] = inst_38386);

(statearr_38479[(14)] = inst_38387);

(statearr_38479[(15)] = inst_38388);

return statearr_38479;
})();
var statearr_38480_38517 = state_38445__$1;
(statearr_38480_38517[(2)] = null);

(statearr_38480_38517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (10))){
var inst_38389 = (state_38445[(12)]);
var inst_38386 = (state_38445[(13)]);
var inst_38387 = (state_38445[(14)]);
var inst_38388 = (state_38445[(15)]);
var inst_38394 = cljs.core._nth.call(null,inst_38387,inst_38389);
var inst_38395 = cljs.core.async.muxch_STAR_.call(null,inst_38394);
var inst_38396 = cljs.core.async.close_BANG_.call(null,inst_38395);
var inst_38397 = (inst_38389 + (1));
var tmp38475 = inst_38386;
var tmp38476 = inst_38387;
var tmp38477 = inst_38388;
var inst_38386__$1 = tmp38475;
var inst_38387__$1 = tmp38476;
var inst_38388__$1 = tmp38477;
var inst_38389__$1 = inst_38397;
var state_38445__$1 = (function (){var statearr_38481 = state_38445;
(statearr_38481[(12)] = inst_38389__$1);

(statearr_38481[(13)] = inst_38386__$1);

(statearr_38481[(17)] = inst_38396);

(statearr_38481[(14)] = inst_38387__$1);

(statearr_38481[(15)] = inst_38388__$1);

return statearr_38481;
})();
var statearr_38482_38518 = state_38445__$1;
(statearr_38482_38518[(2)] = null);

(statearr_38482_38518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (18))){
var inst_38415 = (state_38445[(2)]);
var state_38445__$1 = state_38445;
var statearr_38483_38519 = state_38445__$1;
(statearr_38483_38519[(2)] = inst_38415);

(statearr_38483_38519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38446 === (8))){
var inst_38389 = (state_38445[(12)]);
var inst_38388 = (state_38445[(15)]);
var inst_38391 = (inst_38389 < inst_38388);
var inst_38392 = inst_38391;
var state_38445__$1 = state_38445;
if(cljs.core.truth_(inst_38392)){
var statearr_38484_38520 = state_38445__$1;
(statearr_38484_38520[(1)] = (10));

} else {
var statearr_38485_38521 = state_38445__$1;
(statearr_38485_38521[(1)] = (11));

}

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
});})(c__30437__auto___38493,mults,ensure_mult,p))
;
return ((function (switch__30422__auto__,c__30437__auto___38493,mults,ensure_mult,p){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_38489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38489[(0)] = state_machine__30423__auto__);

(statearr_38489[(1)] = (1));

return statearr_38489;
});
var state_machine__30423__auto____1 = (function (state_38445){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_38445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e38490){if((e38490 instanceof Object)){
var ex__30426__auto__ = e38490;
var statearr_38491_38522 = state_38445;
(statearr_38491_38522[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38523 = state_38445;
state_38445 = G__38523;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_38445){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_38445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___38493,mults,ensure_mult,p))
})();
var state__30439__auto__ = (function (){var statearr_38492 = f__30438__auto__.call(null);
(statearr_38492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___38493);

return statearr_38492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___38493,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30437__auto___38660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___38660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___38660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38630){
var state_val_38631 = (state_38630[(1)]);
if((state_val_38631 === (7))){
var state_38630__$1 = state_38630;
var statearr_38632_38661 = state_38630__$1;
(statearr_38632_38661[(2)] = null);

(statearr_38632_38661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (1))){
var state_38630__$1 = state_38630;
var statearr_38633_38662 = state_38630__$1;
(statearr_38633_38662[(2)] = null);

(statearr_38633_38662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (4))){
var inst_38594 = (state_38630[(7)]);
var inst_38596 = (inst_38594 < cnt);
var state_38630__$1 = state_38630;
if(cljs.core.truth_(inst_38596)){
var statearr_38634_38663 = state_38630__$1;
(statearr_38634_38663[(1)] = (6));

} else {
var statearr_38635_38664 = state_38630__$1;
(statearr_38635_38664[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (15))){
var inst_38626 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38636_38665 = state_38630__$1;
(statearr_38636_38665[(2)] = inst_38626);

(statearr_38636_38665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (13))){
var inst_38619 = cljs.core.async.close_BANG_.call(null,out);
var state_38630__$1 = state_38630;
var statearr_38637_38666 = state_38630__$1;
(statearr_38637_38666[(2)] = inst_38619);

(statearr_38637_38666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (6))){
var state_38630__$1 = state_38630;
var statearr_38638_38667 = state_38630__$1;
(statearr_38638_38667[(2)] = null);

(statearr_38638_38667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (3))){
var inst_38628 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38630__$1,inst_38628);
} else {
if((state_val_38631 === (12))){
var inst_38616 = (state_38630[(8)]);
var inst_38616__$1 = (state_38630[(2)]);
var inst_38617 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38616__$1);
var state_38630__$1 = (function (){var statearr_38639 = state_38630;
(statearr_38639[(8)] = inst_38616__$1);

return statearr_38639;
})();
if(cljs.core.truth_(inst_38617)){
var statearr_38640_38668 = state_38630__$1;
(statearr_38640_38668[(1)] = (13));

} else {
var statearr_38641_38669 = state_38630__$1;
(statearr_38641_38669[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (2))){
var inst_38593 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38594 = (0);
var state_38630__$1 = (function (){var statearr_38642 = state_38630;
(statearr_38642[(7)] = inst_38594);

(statearr_38642[(9)] = inst_38593);

return statearr_38642;
})();
var statearr_38643_38670 = state_38630__$1;
(statearr_38643_38670[(2)] = null);

(statearr_38643_38670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (11))){
var inst_38594 = (state_38630[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38630,(10),Object,null,(9));
var inst_38603 = chs__$1.call(null,inst_38594);
var inst_38604 = done.call(null,inst_38594);
var inst_38605 = cljs.core.async.take_BANG_.call(null,inst_38603,inst_38604);
var state_38630__$1 = state_38630;
var statearr_38644_38671 = state_38630__$1;
(statearr_38644_38671[(2)] = inst_38605);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38630__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (9))){
var inst_38594 = (state_38630[(7)]);
var inst_38607 = (state_38630[(2)]);
var inst_38608 = (inst_38594 + (1));
var inst_38594__$1 = inst_38608;
var state_38630__$1 = (function (){var statearr_38645 = state_38630;
(statearr_38645[(7)] = inst_38594__$1);

(statearr_38645[(10)] = inst_38607);

return statearr_38645;
})();
var statearr_38646_38672 = state_38630__$1;
(statearr_38646_38672[(2)] = null);

(statearr_38646_38672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (5))){
var inst_38614 = (state_38630[(2)]);
var state_38630__$1 = (function (){var statearr_38647 = state_38630;
(statearr_38647[(11)] = inst_38614);

return statearr_38647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38630__$1,(12),dchan);
} else {
if((state_val_38631 === (14))){
var inst_38616 = (state_38630[(8)]);
var inst_38621 = cljs.core.apply.call(null,f,inst_38616);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38630__$1,(16),out,inst_38621);
} else {
if((state_val_38631 === (16))){
var inst_38623 = (state_38630[(2)]);
var state_38630__$1 = (function (){var statearr_38648 = state_38630;
(statearr_38648[(12)] = inst_38623);

return statearr_38648;
})();
var statearr_38649_38673 = state_38630__$1;
(statearr_38649_38673[(2)] = null);

(statearr_38649_38673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (10))){
var inst_38598 = (state_38630[(2)]);
var inst_38599 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38630__$1 = (function (){var statearr_38650 = state_38630;
(statearr_38650[(13)] = inst_38598);

return statearr_38650;
})();
var statearr_38651_38674 = state_38630__$1;
(statearr_38651_38674[(2)] = inst_38599);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38630__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (8))){
var inst_38612 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38652_38675 = state_38630__$1;
(statearr_38652_38675[(2)] = inst_38612);

(statearr_38652_38675[(1)] = (5));


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
}
});})(c__30437__auto___38660,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30422__auto__,c__30437__auto___38660,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_38656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38656[(0)] = state_machine__30423__auto__);

(statearr_38656[(1)] = (1));

return statearr_38656;
});
var state_machine__30423__auto____1 = (function (state_38630){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_38630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e38657){if((e38657 instanceof Object)){
var ex__30426__auto__ = e38657;
var statearr_38658_38676 = state_38630;
(statearr_38658_38676[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38677 = state_38630;
state_38630 = G__38677;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_38630){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_38630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___38660,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30439__auto__ = (function (){var statearr_38659 = f__30438__auto__.call(null);
(statearr_38659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___38660);

return statearr_38659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___38660,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30437__auto___38785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___38785,out){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___38785,out){
return (function (state_38761){
var state_val_38762 = (state_38761[(1)]);
if((state_val_38762 === (7))){
var inst_38741 = (state_38761[(7)]);
var inst_38740 = (state_38761[(8)]);
var inst_38740__$1 = (state_38761[(2)]);
var inst_38741__$1 = cljs.core.nth.call(null,inst_38740__$1,(0),null);
var inst_38742 = cljs.core.nth.call(null,inst_38740__$1,(1),null);
var inst_38743 = (inst_38741__$1 == null);
var state_38761__$1 = (function (){var statearr_38763 = state_38761;
(statearr_38763[(7)] = inst_38741__$1);

(statearr_38763[(9)] = inst_38742);

(statearr_38763[(8)] = inst_38740__$1);

return statearr_38763;
})();
if(cljs.core.truth_(inst_38743)){
var statearr_38764_38786 = state_38761__$1;
(statearr_38764_38786[(1)] = (8));

} else {
var statearr_38765_38787 = state_38761__$1;
(statearr_38765_38787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (1))){
var inst_38732 = cljs.core.vec.call(null,chs);
var inst_38733 = inst_38732;
var state_38761__$1 = (function (){var statearr_38766 = state_38761;
(statearr_38766[(10)] = inst_38733);

return statearr_38766;
})();
var statearr_38767_38788 = state_38761__$1;
(statearr_38767_38788[(2)] = null);

(statearr_38767_38788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (4))){
var inst_38733 = (state_38761[(10)]);
var state_38761__$1 = state_38761;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38761__$1,(7),inst_38733);
} else {
if((state_val_38762 === (6))){
var inst_38757 = (state_38761[(2)]);
var state_38761__$1 = state_38761;
var statearr_38768_38789 = state_38761__$1;
(statearr_38768_38789[(2)] = inst_38757);

(statearr_38768_38789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (3))){
var inst_38759 = (state_38761[(2)]);
var state_38761__$1 = state_38761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38761__$1,inst_38759);
} else {
if((state_val_38762 === (2))){
var inst_38733 = (state_38761[(10)]);
var inst_38735 = cljs.core.count.call(null,inst_38733);
var inst_38736 = (inst_38735 > (0));
var state_38761__$1 = state_38761;
if(cljs.core.truth_(inst_38736)){
var statearr_38770_38790 = state_38761__$1;
(statearr_38770_38790[(1)] = (4));

} else {
var statearr_38771_38791 = state_38761__$1;
(statearr_38771_38791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (11))){
var inst_38733 = (state_38761[(10)]);
var inst_38750 = (state_38761[(2)]);
var tmp38769 = inst_38733;
var inst_38733__$1 = tmp38769;
var state_38761__$1 = (function (){var statearr_38772 = state_38761;
(statearr_38772[(11)] = inst_38750);

(statearr_38772[(10)] = inst_38733__$1);

return statearr_38772;
})();
var statearr_38773_38792 = state_38761__$1;
(statearr_38773_38792[(2)] = null);

(statearr_38773_38792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (9))){
var inst_38741 = (state_38761[(7)]);
var state_38761__$1 = state_38761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38761__$1,(11),out,inst_38741);
} else {
if((state_val_38762 === (5))){
var inst_38755 = cljs.core.async.close_BANG_.call(null,out);
var state_38761__$1 = state_38761;
var statearr_38774_38793 = state_38761__$1;
(statearr_38774_38793[(2)] = inst_38755);

(statearr_38774_38793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (10))){
var inst_38753 = (state_38761[(2)]);
var state_38761__$1 = state_38761;
var statearr_38775_38794 = state_38761__$1;
(statearr_38775_38794[(2)] = inst_38753);

(statearr_38775_38794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38762 === (8))){
var inst_38741 = (state_38761[(7)]);
var inst_38742 = (state_38761[(9)]);
var inst_38740 = (state_38761[(8)]);
var inst_38733 = (state_38761[(10)]);
var inst_38745 = (function (){var c = inst_38742;
var v = inst_38741;
var vec__38738 = inst_38740;
var cs = inst_38733;
return ((function (c,v,vec__38738,cs,inst_38741,inst_38742,inst_38740,inst_38733,state_val_38762,c__30437__auto___38785,out){
return (function (p1__38678_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38678_SHARP_);
});
;})(c,v,vec__38738,cs,inst_38741,inst_38742,inst_38740,inst_38733,state_val_38762,c__30437__auto___38785,out))
})();
var inst_38746 = cljs.core.filterv.call(null,inst_38745,inst_38733);
var inst_38733__$1 = inst_38746;
var state_38761__$1 = (function (){var statearr_38776 = state_38761;
(statearr_38776[(10)] = inst_38733__$1);

return statearr_38776;
})();
var statearr_38777_38795 = state_38761__$1;
(statearr_38777_38795[(2)] = null);

(statearr_38777_38795[(1)] = (2));


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
});})(c__30437__auto___38785,out))
;
return ((function (switch__30422__auto__,c__30437__auto___38785,out){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_38781 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38781[(0)] = state_machine__30423__auto__);

(statearr_38781[(1)] = (1));

return statearr_38781;
});
var state_machine__30423__auto____1 = (function (state_38761){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_38761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e38782){if((e38782 instanceof Object)){
var ex__30426__auto__ = e38782;
var statearr_38783_38796 = state_38761;
(statearr_38783_38796[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38797 = state_38761;
state_38761 = G__38797;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_38761){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_38761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___38785,out))
})();
var state__30439__auto__ = (function (){var statearr_38784 = f__30438__auto__.call(null);
(statearr_38784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___38785);

return statearr_38784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___38785,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30437__auto___38890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___38890,out){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___38890,out){
return (function (state_38867){
var state_val_38868 = (state_38867[(1)]);
if((state_val_38868 === (7))){
var inst_38849 = (state_38867[(7)]);
var inst_38849__$1 = (state_38867[(2)]);
var inst_38850 = (inst_38849__$1 == null);
var inst_38851 = cljs.core.not.call(null,inst_38850);
var state_38867__$1 = (function (){var statearr_38869 = state_38867;
(statearr_38869[(7)] = inst_38849__$1);

return statearr_38869;
})();
if(inst_38851){
var statearr_38870_38891 = state_38867__$1;
(statearr_38870_38891[(1)] = (8));

} else {
var statearr_38871_38892 = state_38867__$1;
(statearr_38871_38892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (1))){
var inst_38844 = (0);
var state_38867__$1 = (function (){var statearr_38872 = state_38867;
(statearr_38872[(8)] = inst_38844);

return statearr_38872;
})();
var statearr_38873_38893 = state_38867__$1;
(statearr_38873_38893[(2)] = null);

(statearr_38873_38893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (4))){
var state_38867__$1 = state_38867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38867__$1,(7),ch);
} else {
if((state_val_38868 === (6))){
var inst_38862 = (state_38867[(2)]);
var state_38867__$1 = state_38867;
var statearr_38874_38894 = state_38867__$1;
(statearr_38874_38894[(2)] = inst_38862);

(statearr_38874_38894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (3))){
var inst_38864 = (state_38867[(2)]);
var inst_38865 = cljs.core.async.close_BANG_.call(null,out);
var state_38867__$1 = (function (){var statearr_38875 = state_38867;
(statearr_38875[(9)] = inst_38864);

return statearr_38875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38867__$1,inst_38865);
} else {
if((state_val_38868 === (2))){
var inst_38844 = (state_38867[(8)]);
var inst_38846 = (inst_38844 < n);
var state_38867__$1 = state_38867;
if(cljs.core.truth_(inst_38846)){
var statearr_38876_38895 = state_38867__$1;
(statearr_38876_38895[(1)] = (4));

} else {
var statearr_38877_38896 = state_38867__$1;
(statearr_38877_38896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (11))){
var inst_38844 = (state_38867[(8)]);
var inst_38854 = (state_38867[(2)]);
var inst_38855 = (inst_38844 + (1));
var inst_38844__$1 = inst_38855;
var state_38867__$1 = (function (){var statearr_38878 = state_38867;
(statearr_38878[(10)] = inst_38854);

(statearr_38878[(8)] = inst_38844__$1);

return statearr_38878;
})();
var statearr_38879_38897 = state_38867__$1;
(statearr_38879_38897[(2)] = null);

(statearr_38879_38897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (9))){
var state_38867__$1 = state_38867;
var statearr_38880_38898 = state_38867__$1;
(statearr_38880_38898[(2)] = null);

(statearr_38880_38898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (5))){
var state_38867__$1 = state_38867;
var statearr_38881_38899 = state_38867__$1;
(statearr_38881_38899[(2)] = null);

(statearr_38881_38899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (10))){
var inst_38859 = (state_38867[(2)]);
var state_38867__$1 = state_38867;
var statearr_38882_38900 = state_38867__$1;
(statearr_38882_38900[(2)] = inst_38859);

(statearr_38882_38900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38868 === (8))){
var inst_38849 = (state_38867[(7)]);
var state_38867__$1 = state_38867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38867__$1,(11),out,inst_38849);
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
});})(c__30437__auto___38890,out))
;
return ((function (switch__30422__auto__,c__30437__auto___38890,out){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_38886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38886[(0)] = state_machine__30423__auto__);

(statearr_38886[(1)] = (1));

return statearr_38886;
});
var state_machine__30423__auto____1 = (function (state_38867){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_38867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e38887){if((e38887 instanceof Object)){
var ex__30426__auto__ = e38887;
var statearr_38888_38901 = state_38867;
(statearr_38888_38901[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38902 = state_38867;
state_38867 = G__38902;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_38867){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_38867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___38890,out))
})();
var state__30439__auto__ = (function (){var statearr_38889 = f__30438__auto__.call(null);
(statearr_38889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___38890);

return statearr_38889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___38890,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t38910 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38910 = (function (ch,f,map_LT_,meta38911){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38911 = meta38911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38910.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t38910.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t38913 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38913 = (function (fn1,_,meta38911,map_LT_,f,ch,meta38914){
this.fn1 = fn1;
this._ = _;
this.meta38911 = meta38911;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38914 = meta38914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38913.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38903_SHARP_){
return f1.call(null,(((p1__38903_SHARP_ == null))?null:self__.f.call(null,p1__38903_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t38913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38915){
var self__ = this;
var _38915__$1 = this;
return self__.meta38914;
});})(___$1))
;

cljs.core.async.t38913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38915,meta38914__$1){
var self__ = this;
var _38915__$1 = this;
return (new cljs.core.async.t38913(self__.fn1,self__._,self__.meta38911,self__.map_LT_,self__.f,self__.ch,meta38914__$1));
});})(___$1))
;

cljs.core.async.t38913.cljs$lang$type = true;

cljs.core.async.t38913.cljs$lang$ctorStr = "cljs.core.async/t38913";

cljs.core.async.t38913.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t38913");
});})(___$1))
;

cljs.core.async.__GT_t38913 = ((function (___$1){
return (function __GT_t38913(fn1__$1,___$2,meta38911__$1,map_LT___$1,f__$1,ch__$1,meta38914){
return (new cljs.core.async.t38913(fn1__$1,___$2,meta38911__$1,map_LT___$1,f__$1,ch__$1,meta38914));
});})(___$1))
;

}

return (new cljs.core.async.t38913(fn1,___$1,self__.meta38911,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__28507__auto__ = ret;
if(cljs.core.truth_(and__28507__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28507__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t38910.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38912){
var self__ = this;
var _38912__$1 = this;
return self__.meta38911;
});

cljs.core.async.t38910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38912,meta38911__$1){
var self__ = this;
var _38912__$1 = this;
return (new cljs.core.async.t38910(self__.ch,self__.f,self__.map_LT_,meta38911__$1));
});

cljs.core.async.t38910.cljs$lang$type = true;

cljs.core.async.t38910.cljs$lang$ctorStr = "cljs.core.async/t38910";

cljs.core.async.t38910.cljs$lang$ctorPrWriter = (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t38910");
});

cljs.core.async.__GT_t38910 = (function __GT_t38910(ch__$1,f__$1,map_LT___$1,meta38911){
return (new cljs.core.async.t38910(ch__$1,f__$1,map_LT___$1,meta38911));
});

}

return (new cljs.core.async.t38910(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t38919 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38919 = (function (ch,f,map_GT_,meta38920){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38920 = meta38920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38919.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t38919.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38919.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38921){
var self__ = this;
var _38921__$1 = this;
return self__.meta38920;
});

cljs.core.async.t38919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38921,meta38920__$1){
var self__ = this;
var _38921__$1 = this;
return (new cljs.core.async.t38919(self__.ch,self__.f,self__.map_GT_,meta38920__$1));
});

cljs.core.async.t38919.cljs$lang$type = true;

cljs.core.async.t38919.cljs$lang$ctorStr = "cljs.core.async/t38919";

cljs.core.async.t38919.cljs$lang$ctorPrWriter = (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t38919");
});

cljs.core.async.__GT_t38919 = (function __GT_t38919(ch__$1,f__$1,map_GT___$1,meta38920){
return (new cljs.core.async.t38919(ch__$1,f__$1,map_GT___$1,meta38920));
});

}

return (new cljs.core.async.t38919(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t38925 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38925 = (function (ch,p,filter_GT_,meta38926){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38926 = meta38926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t38925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38925.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38927){
var self__ = this;
var _38927__$1 = this;
return self__.meta38926;
});

cljs.core.async.t38925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38927,meta38926__$1){
var self__ = this;
var _38927__$1 = this;
return (new cljs.core.async.t38925(self__.ch,self__.p,self__.filter_GT_,meta38926__$1));
});

cljs.core.async.t38925.cljs$lang$type = true;

cljs.core.async.t38925.cljs$lang$ctorStr = "cljs.core.async/t38925";

cljs.core.async.t38925.cljs$lang$ctorPrWriter = (function (this__29106__auto__,writer__29107__auto__,opt__29108__auto__){
return cljs.core._write.call(null,writer__29107__auto__,"cljs.core.async/t38925");
});

cljs.core.async.__GT_t38925 = (function __GT_t38925(ch__$1,p__$1,filter_GT___$1,meta38926){
return (new cljs.core.async.t38925(ch__$1,p__$1,filter_GT___$1,meta38926));
});

}

return (new cljs.core.async.t38925(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/root/cities/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30437__auto___39010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___39010,out){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___39010,out){
return (function (state_38989){
var state_val_38990 = (state_38989[(1)]);
if((state_val_38990 === (7))){
var inst_38985 = (state_38989[(2)]);
var state_38989__$1 = state_38989;
var statearr_38991_39011 = state_38989__$1;
(statearr_38991_39011[(2)] = inst_38985);

(statearr_38991_39011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (1))){
var state_38989__$1 = state_38989;
var statearr_38992_39012 = state_38989__$1;
(statearr_38992_39012[(2)] = null);

(statearr_38992_39012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (4))){
var inst_38971 = (state_38989[(7)]);
var inst_38971__$1 = (state_38989[(2)]);
var inst_38972 = (inst_38971__$1 == null);
var state_38989__$1 = (function (){var statearr_38993 = state_38989;
(statearr_38993[(7)] = inst_38971__$1);

return statearr_38993;
})();
if(cljs.core.truth_(inst_38972)){
var statearr_38994_39013 = state_38989__$1;
(statearr_38994_39013[(1)] = (5));

} else {
var statearr_38995_39014 = state_38989__$1;
(statearr_38995_39014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (6))){
var inst_38971 = (state_38989[(7)]);
var inst_38976 = p.call(null,inst_38971);
var state_38989__$1 = state_38989;
if(cljs.core.truth_(inst_38976)){
var statearr_38996_39015 = state_38989__$1;
(statearr_38996_39015[(1)] = (8));

} else {
var statearr_38997_39016 = state_38989__$1;
(statearr_38997_39016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (3))){
var inst_38987 = (state_38989[(2)]);
var state_38989__$1 = state_38989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38989__$1,inst_38987);
} else {
if((state_val_38990 === (2))){
var state_38989__$1 = state_38989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38989__$1,(4),ch);
} else {
if((state_val_38990 === (11))){
var inst_38979 = (state_38989[(2)]);
var state_38989__$1 = state_38989;
var statearr_38998_39017 = state_38989__$1;
(statearr_38998_39017[(2)] = inst_38979);

(statearr_38998_39017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (9))){
var state_38989__$1 = state_38989;
var statearr_38999_39018 = state_38989__$1;
(statearr_38999_39018[(2)] = null);

(statearr_38999_39018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (5))){
var inst_38974 = cljs.core.async.close_BANG_.call(null,out);
var state_38989__$1 = state_38989;
var statearr_39000_39019 = state_38989__$1;
(statearr_39000_39019[(2)] = inst_38974);

(statearr_39000_39019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (10))){
var inst_38982 = (state_38989[(2)]);
var state_38989__$1 = (function (){var statearr_39001 = state_38989;
(statearr_39001[(8)] = inst_38982);

return statearr_39001;
})();
var statearr_39002_39020 = state_38989__$1;
(statearr_39002_39020[(2)] = null);

(statearr_39002_39020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38990 === (8))){
var inst_38971 = (state_38989[(7)]);
var state_38989__$1 = state_38989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38989__$1,(11),out,inst_38971);
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
});})(c__30437__auto___39010,out))
;
return ((function (switch__30422__auto__,c__30437__auto___39010,out){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39006 = [null,null,null,null,null,null,null,null,null];
(statearr_39006[(0)] = state_machine__30423__auto__);

(statearr_39006[(1)] = (1));

return statearr_39006;
});
var state_machine__30423__auto____1 = (function (state_38989){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_38989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39007){if((e39007 instanceof Object)){
var ex__30426__auto__ = e39007;
var statearr_39008_39021 = state_38989;
(statearr_39008_39021[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39022 = state_38989;
state_38989 = G__39022;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_38989){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_38989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___39010,out))
})();
var state__30439__auto__ = (function (){var statearr_39009 = f__30438__auto__.call(null);
(statearr_39009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___39010);

return statearr_39009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___39010,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__30437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto__){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto__){
return (function (state_39188){
var state_val_39189 = (state_39188[(1)]);
if((state_val_39189 === (7))){
var inst_39184 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39190_39231 = state_39188__$1;
(statearr_39190_39231[(2)] = inst_39184);

(statearr_39190_39231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (20))){
var inst_39154 = (state_39188[(7)]);
var inst_39165 = (state_39188[(2)]);
var inst_39166 = cljs.core.next.call(null,inst_39154);
var inst_39140 = inst_39166;
var inst_39141 = null;
var inst_39142 = (0);
var inst_39143 = (0);
var state_39188__$1 = (function (){var statearr_39191 = state_39188;
(statearr_39191[(8)] = inst_39140);

(statearr_39191[(9)] = inst_39143);

(statearr_39191[(10)] = inst_39165);

(statearr_39191[(11)] = inst_39142);

(statearr_39191[(12)] = inst_39141);

return statearr_39191;
})();
var statearr_39192_39232 = state_39188__$1;
(statearr_39192_39232[(2)] = null);

(statearr_39192_39232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (1))){
var state_39188__$1 = state_39188;
var statearr_39193_39233 = state_39188__$1;
(statearr_39193_39233[(2)] = null);

(statearr_39193_39233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (4))){
var inst_39129 = (state_39188[(13)]);
var inst_39129__$1 = (state_39188[(2)]);
var inst_39130 = (inst_39129__$1 == null);
var state_39188__$1 = (function (){var statearr_39194 = state_39188;
(statearr_39194[(13)] = inst_39129__$1);

return statearr_39194;
})();
if(cljs.core.truth_(inst_39130)){
var statearr_39195_39234 = state_39188__$1;
(statearr_39195_39234[(1)] = (5));

} else {
var statearr_39196_39235 = state_39188__$1;
(statearr_39196_39235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (15))){
var state_39188__$1 = state_39188;
var statearr_39200_39236 = state_39188__$1;
(statearr_39200_39236[(2)] = null);

(statearr_39200_39236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (21))){
var state_39188__$1 = state_39188;
var statearr_39201_39237 = state_39188__$1;
(statearr_39201_39237[(2)] = null);

(statearr_39201_39237[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (13))){
var inst_39140 = (state_39188[(8)]);
var inst_39143 = (state_39188[(9)]);
var inst_39142 = (state_39188[(11)]);
var inst_39141 = (state_39188[(12)]);
var inst_39150 = (state_39188[(2)]);
var inst_39151 = (inst_39143 + (1));
var tmp39197 = inst_39140;
var tmp39198 = inst_39142;
var tmp39199 = inst_39141;
var inst_39140__$1 = tmp39197;
var inst_39141__$1 = tmp39199;
var inst_39142__$1 = tmp39198;
var inst_39143__$1 = inst_39151;
var state_39188__$1 = (function (){var statearr_39202 = state_39188;
(statearr_39202[(8)] = inst_39140__$1);

(statearr_39202[(9)] = inst_39143__$1);

(statearr_39202[(14)] = inst_39150);

(statearr_39202[(11)] = inst_39142__$1);

(statearr_39202[(12)] = inst_39141__$1);

return statearr_39202;
})();
var statearr_39203_39238 = state_39188__$1;
(statearr_39203_39238[(2)] = null);

(statearr_39203_39238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (22))){
var state_39188__$1 = state_39188;
var statearr_39204_39239 = state_39188__$1;
(statearr_39204_39239[(2)] = null);

(statearr_39204_39239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (6))){
var inst_39129 = (state_39188[(13)]);
var inst_39138 = f.call(null,inst_39129);
var inst_39139 = cljs.core.seq.call(null,inst_39138);
var inst_39140 = inst_39139;
var inst_39141 = null;
var inst_39142 = (0);
var inst_39143 = (0);
var state_39188__$1 = (function (){var statearr_39205 = state_39188;
(statearr_39205[(8)] = inst_39140);

(statearr_39205[(9)] = inst_39143);

(statearr_39205[(11)] = inst_39142);

(statearr_39205[(12)] = inst_39141);

return statearr_39205;
})();
var statearr_39206_39240 = state_39188__$1;
(statearr_39206_39240[(2)] = null);

(statearr_39206_39240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (17))){
var inst_39154 = (state_39188[(7)]);
var inst_39158 = cljs.core.chunk_first.call(null,inst_39154);
var inst_39159 = cljs.core.chunk_rest.call(null,inst_39154);
var inst_39160 = cljs.core.count.call(null,inst_39158);
var inst_39140 = inst_39159;
var inst_39141 = inst_39158;
var inst_39142 = inst_39160;
var inst_39143 = (0);
var state_39188__$1 = (function (){var statearr_39207 = state_39188;
(statearr_39207[(8)] = inst_39140);

(statearr_39207[(9)] = inst_39143);

(statearr_39207[(11)] = inst_39142);

(statearr_39207[(12)] = inst_39141);

return statearr_39207;
})();
var statearr_39208_39241 = state_39188__$1;
(statearr_39208_39241[(2)] = null);

(statearr_39208_39241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (3))){
var inst_39186 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39188__$1,inst_39186);
} else {
if((state_val_39189 === (12))){
var inst_39174 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39209_39242 = state_39188__$1;
(statearr_39209_39242[(2)] = inst_39174);

(statearr_39209_39242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (2))){
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39188__$1,(4),in$);
} else {
if((state_val_39189 === (23))){
var inst_39182 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39210_39243 = state_39188__$1;
(statearr_39210_39243[(2)] = inst_39182);

(statearr_39210_39243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (19))){
var inst_39169 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39211_39244 = state_39188__$1;
(statearr_39211_39244[(2)] = inst_39169);

(statearr_39211_39244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (11))){
var inst_39140 = (state_39188[(8)]);
var inst_39154 = (state_39188[(7)]);
var inst_39154__$1 = cljs.core.seq.call(null,inst_39140);
var state_39188__$1 = (function (){var statearr_39212 = state_39188;
(statearr_39212[(7)] = inst_39154__$1);

return statearr_39212;
})();
if(inst_39154__$1){
var statearr_39213_39245 = state_39188__$1;
(statearr_39213_39245[(1)] = (14));

} else {
var statearr_39214_39246 = state_39188__$1;
(statearr_39214_39246[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (9))){
var inst_39176 = (state_39188[(2)]);
var inst_39177 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39188__$1 = (function (){var statearr_39215 = state_39188;
(statearr_39215[(15)] = inst_39176);

return statearr_39215;
})();
if(cljs.core.truth_(inst_39177)){
var statearr_39216_39247 = state_39188__$1;
(statearr_39216_39247[(1)] = (21));

} else {
var statearr_39217_39248 = state_39188__$1;
(statearr_39217_39248[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (5))){
var inst_39132 = cljs.core.async.close_BANG_.call(null,out);
var state_39188__$1 = state_39188;
var statearr_39218_39249 = state_39188__$1;
(statearr_39218_39249[(2)] = inst_39132);

(statearr_39218_39249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (14))){
var inst_39154 = (state_39188[(7)]);
var inst_39156 = cljs.core.chunked_seq_QMARK_.call(null,inst_39154);
var state_39188__$1 = state_39188;
if(inst_39156){
var statearr_39219_39250 = state_39188__$1;
(statearr_39219_39250[(1)] = (17));

} else {
var statearr_39220_39251 = state_39188__$1;
(statearr_39220_39251[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (16))){
var inst_39172 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39221_39252 = state_39188__$1;
(statearr_39221_39252[(2)] = inst_39172);

(statearr_39221_39252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (10))){
var inst_39143 = (state_39188[(9)]);
var inst_39141 = (state_39188[(12)]);
var inst_39148 = cljs.core._nth.call(null,inst_39141,inst_39143);
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39188__$1,(13),out,inst_39148);
} else {
if((state_val_39189 === (18))){
var inst_39154 = (state_39188[(7)]);
var inst_39163 = cljs.core.first.call(null,inst_39154);
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39188__$1,(20),out,inst_39163);
} else {
if((state_val_39189 === (8))){
var inst_39143 = (state_39188[(9)]);
var inst_39142 = (state_39188[(11)]);
var inst_39145 = (inst_39143 < inst_39142);
var inst_39146 = inst_39145;
var state_39188__$1 = state_39188;
if(cljs.core.truth_(inst_39146)){
var statearr_39222_39253 = state_39188__$1;
(statearr_39222_39253[(1)] = (10));

} else {
var statearr_39223_39254 = state_39188__$1;
(statearr_39223_39254[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
});})(c__30437__auto__))
;
return ((function (switch__30422__auto__,c__30437__auto__){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39227[(0)] = state_machine__30423__auto__);

(statearr_39227[(1)] = (1));

return statearr_39227;
});
var state_machine__30423__auto____1 = (function (state_39188){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_39188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39228){if((e39228 instanceof Object)){
var ex__30426__auto__ = e39228;
var statearr_39229_39255 = state_39188;
(statearr_39229_39255[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39256 = state_39188;
state_39188 = G__39256;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_39188){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_39188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto__))
})();
var state__30439__auto__ = (function (){var statearr_39230 = f__30438__auto__.call(null);
(statearr_39230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto__);

return statearr_39230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto__))
);

return c__30437__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30437__auto___39353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___39353,out){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___39353,out){
return (function (state_39328){
var state_val_39329 = (state_39328[(1)]);
if((state_val_39329 === (7))){
var inst_39323 = (state_39328[(2)]);
var state_39328__$1 = state_39328;
var statearr_39330_39354 = state_39328__$1;
(statearr_39330_39354[(2)] = inst_39323);

(statearr_39330_39354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39329 === (1))){
var inst_39305 = null;
var state_39328__$1 = (function (){var statearr_39331 = state_39328;
(statearr_39331[(7)] = inst_39305);

return statearr_39331;
})();
var statearr_39332_39355 = state_39328__$1;
(statearr_39332_39355[(2)] = null);

(statearr_39332_39355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39329 === (4))){
var inst_39308 = (state_39328[(8)]);
var inst_39308__$1 = (state_39328[(2)]);
var inst_39309 = (inst_39308__$1 == null);
var inst_39310 = cljs.core.not.call(null,inst_39309);
var state_39328__$1 = (function (){var statearr_39333 = state_39328;
(statearr_39333[(8)] = inst_39308__$1);

return statearr_39333;
})();
if(inst_39310){
var statearr_39334_39356 = state_39328__$1;
(statearr_39334_39356[(1)] = (5));

} else {
var statearr_39335_39357 = state_39328__$1;
(statearr_39335_39357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39329 === (6))){
var state_39328__$1 = state_39328;
var statearr_39336_39358 = state_39328__$1;
(statearr_39336_39358[(2)] = null);

(statearr_39336_39358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39329 === (3))){
var inst_39325 = (state_39328[(2)]);
var inst_39326 = cljs.core.async.close_BANG_.call(null,out);
var state_39328__$1 = (function (){var statearr_39337 = state_39328;
(statearr_39337[(9)] = inst_39325);

return statearr_39337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39328__$1,inst_39326);
} else {
if((state_val_39329 === (2))){
var state_39328__$1 = state_39328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39328__$1,(4),ch);
} else {
if((state_val_39329 === (11))){
var inst_39308 = (state_39328[(8)]);
var inst_39317 = (state_39328[(2)]);
var inst_39305 = inst_39308;
var state_39328__$1 = (function (){var statearr_39338 = state_39328;
(statearr_39338[(7)] = inst_39305);

(statearr_39338[(10)] = inst_39317);

return statearr_39338;
})();
var statearr_39339_39359 = state_39328__$1;
(statearr_39339_39359[(2)] = null);

(statearr_39339_39359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39329 === (9))){
var inst_39308 = (state_39328[(8)]);
var state_39328__$1 = state_39328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39328__$1,(11),out,inst_39308);
} else {
if((state_val_39329 === (5))){
var inst_39305 = (state_39328[(7)]);
var inst_39308 = (state_39328[(8)]);
var inst_39312 = cljs.core._EQ_.call(null,inst_39308,inst_39305);
var state_39328__$1 = state_39328;
if(inst_39312){
var statearr_39341_39360 = state_39328__$1;
(statearr_39341_39360[(1)] = (8));

} else {
var statearr_39342_39361 = state_39328__$1;
(statearr_39342_39361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39329 === (10))){
var inst_39320 = (state_39328[(2)]);
var state_39328__$1 = state_39328;
var statearr_39343_39362 = state_39328__$1;
(statearr_39343_39362[(2)] = inst_39320);

(statearr_39343_39362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39329 === (8))){
var inst_39305 = (state_39328[(7)]);
var tmp39340 = inst_39305;
var inst_39305__$1 = tmp39340;
var state_39328__$1 = (function (){var statearr_39344 = state_39328;
(statearr_39344[(7)] = inst_39305__$1);

return statearr_39344;
})();
var statearr_39345_39363 = state_39328__$1;
(statearr_39345_39363[(2)] = null);

(statearr_39345_39363[(1)] = (2));


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
});})(c__30437__auto___39353,out))
;
return ((function (switch__30422__auto__,c__30437__auto___39353,out){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39349[(0)] = state_machine__30423__auto__);

(statearr_39349[(1)] = (1));

return statearr_39349;
});
var state_machine__30423__auto____1 = (function (state_39328){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_39328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39350){if((e39350 instanceof Object)){
var ex__30426__auto__ = e39350;
var statearr_39351_39364 = state_39328;
(statearr_39351_39364[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39365 = state_39328;
state_39328 = G__39365;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_39328){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_39328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___39353,out))
})();
var state__30439__auto__ = (function (){var statearr_39352 = f__30438__auto__.call(null);
(statearr_39352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___39353);

return statearr_39352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___39353,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30437__auto___39500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___39500,out){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___39500,out){
return (function (state_39470){
var state_val_39471 = (state_39470[(1)]);
if((state_val_39471 === (7))){
var inst_39466 = (state_39470[(2)]);
var state_39470__$1 = state_39470;
var statearr_39472_39501 = state_39470__$1;
(statearr_39472_39501[(2)] = inst_39466);

(statearr_39472_39501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (1))){
var inst_39433 = (new Array(n));
var inst_39434 = inst_39433;
var inst_39435 = (0);
var state_39470__$1 = (function (){var statearr_39473 = state_39470;
(statearr_39473[(7)] = inst_39434);

(statearr_39473[(8)] = inst_39435);

return statearr_39473;
})();
var statearr_39474_39502 = state_39470__$1;
(statearr_39474_39502[(2)] = null);

(statearr_39474_39502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (4))){
var inst_39438 = (state_39470[(9)]);
var inst_39438__$1 = (state_39470[(2)]);
var inst_39439 = (inst_39438__$1 == null);
var inst_39440 = cljs.core.not.call(null,inst_39439);
var state_39470__$1 = (function (){var statearr_39475 = state_39470;
(statearr_39475[(9)] = inst_39438__$1);

return statearr_39475;
})();
if(inst_39440){
var statearr_39476_39503 = state_39470__$1;
(statearr_39476_39503[(1)] = (5));

} else {
var statearr_39477_39504 = state_39470__$1;
(statearr_39477_39504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (15))){
var inst_39460 = (state_39470[(2)]);
var state_39470__$1 = state_39470;
var statearr_39478_39505 = state_39470__$1;
(statearr_39478_39505[(2)] = inst_39460);

(statearr_39478_39505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (13))){
var state_39470__$1 = state_39470;
var statearr_39479_39506 = state_39470__$1;
(statearr_39479_39506[(2)] = null);

(statearr_39479_39506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (6))){
var inst_39435 = (state_39470[(8)]);
var inst_39456 = (inst_39435 > (0));
var state_39470__$1 = state_39470;
if(cljs.core.truth_(inst_39456)){
var statearr_39480_39507 = state_39470__$1;
(statearr_39480_39507[(1)] = (12));

} else {
var statearr_39481_39508 = state_39470__$1;
(statearr_39481_39508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (3))){
var inst_39468 = (state_39470[(2)]);
var state_39470__$1 = state_39470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39470__$1,inst_39468);
} else {
if((state_val_39471 === (12))){
var inst_39434 = (state_39470[(7)]);
var inst_39458 = cljs.core.vec.call(null,inst_39434);
var state_39470__$1 = state_39470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39470__$1,(15),out,inst_39458);
} else {
if((state_val_39471 === (2))){
var state_39470__$1 = state_39470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39470__$1,(4),ch);
} else {
if((state_val_39471 === (11))){
var inst_39450 = (state_39470[(2)]);
var inst_39451 = (new Array(n));
var inst_39434 = inst_39451;
var inst_39435 = (0);
var state_39470__$1 = (function (){var statearr_39482 = state_39470;
(statearr_39482[(7)] = inst_39434);

(statearr_39482[(8)] = inst_39435);

(statearr_39482[(10)] = inst_39450);

return statearr_39482;
})();
var statearr_39483_39509 = state_39470__$1;
(statearr_39483_39509[(2)] = null);

(statearr_39483_39509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (9))){
var inst_39434 = (state_39470[(7)]);
var inst_39448 = cljs.core.vec.call(null,inst_39434);
var state_39470__$1 = state_39470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39470__$1,(11),out,inst_39448);
} else {
if((state_val_39471 === (5))){
var inst_39434 = (state_39470[(7)]);
var inst_39435 = (state_39470[(8)]);
var inst_39443 = (state_39470[(11)]);
var inst_39438 = (state_39470[(9)]);
var inst_39442 = (inst_39434[inst_39435] = inst_39438);
var inst_39443__$1 = (inst_39435 + (1));
var inst_39444 = (inst_39443__$1 < n);
var state_39470__$1 = (function (){var statearr_39484 = state_39470;
(statearr_39484[(12)] = inst_39442);

(statearr_39484[(11)] = inst_39443__$1);

return statearr_39484;
})();
if(cljs.core.truth_(inst_39444)){
var statearr_39485_39510 = state_39470__$1;
(statearr_39485_39510[(1)] = (8));

} else {
var statearr_39486_39511 = state_39470__$1;
(statearr_39486_39511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (14))){
var inst_39463 = (state_39470[(2)]);
var inst_39464 = cljs.core.async.close_BANG_.call(null,out);
var state_39470__$1 = (function (){var statearr_39488 = state_39470;
(statearr_39488[(13)] = inst_39463);

return statearr_39488;
})();
var statearr_39489_39512 = state_39470__$1;
(statearr_39489_39512[(2)] = inst_39464);

(statearr_39489_39512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (10))){
var inst_39454 = (state_39470[(2)]);
var state_39470__$1 = state_39470;
var statearr_39490_39513 = state_39470__$1;
(statearr_39490_39513[(2)] = inst_39454);

(statearr_39490_39513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39471 === (8))){
var inst_39434 = (state_39470[(7)]);
var inst_39443 = (state_39470[(11)]);
var tmp39487 = inst_39434;
var inst_39434__$1 = tmp39487;
var inst_39435 = inst_39443;
var state_39470__$1 = (function (){var statearr_39491 = state_39470;
(statearr_39491[(7)] = inst_39434__$1);

(statearr_39491[(8)] = inst_39435);

return statearr_39491;
})();
var statearr_39492_39514 = state_39470__$1;
(statearr_39492_39514[(2)] = null);

(statearr_39492_39514[(1)] = (2));


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
});})(c__30437__auto___39500,out))
;
return ((function (switch__30422__auto__,c__30437__auto___39500,out){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39496[(0)] = state_machine__30423__auto__);

(statearr_39496[(1)] = (1));

return statearr_39496;
});
var state_machine__30423__auto____1 = (function (state_39470){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_39470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39497){if((e39497 instanceof Object)){
var ex__30426__auto__ = e39497;
var statearr_39498_39515 = state_39470;
(statearr_39498_39515[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39516 = state_39470;
state_39470 = G__39516;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_39470){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_39470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___39500,out))
})();
var state__30439__auto__ = (function (){var statearr_39499 = f__30438__auto__.call(null);
(statearr_39499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___39500);

return statearr_39499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___39500,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30437__auto___39659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30437__auto___39659,out){
return (function (){
var f__30438__auto__ = (function (){var switch__30422__auto__ = ((function (c__30437__auto___39659,out){
return (function (state_39629){
var state_val_39630 = (state_39629[(1)]);
if((state_val_39630 === (7))){
var inst_39625 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
var statearr_39631_39660 = state_39629__$1;
(statearr_39631_39660[(2)] = inst_39625);

(statearr_39631_39660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (1))){
var inst_39588 = [];
var inst_39589 = inst_39588;
var inst_39590 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39629__$1 = (function (){var statearr_39632 = state_39629;
(statearr_39632[(7)] = inst_39589);

(statearr_39632[(8)] = inst_39590);

return statearr_39632;
})();
var statearr_39633_39661 = state_39629__$1;
(statearr_39633_39661[(2)] = null);

(statearr_39633_39661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (4))){
var inst_39593 = (state_39629[(9)]);
var inst_39593__$1 = (state_39629[(2)]);
var inst_39594 = (inst_39593__$1 == null);
var inst_39595 = cljs.core.not.call(null,inst_39594);
var state_39629__$1 = (function (){var statearr_39634 = state_39629;
(statearr_39634[(9)] = inst_39593__$1);

return statearr_39634;
})();
if(inst_39595){
var statearr_39635_39662 = state_39629__$1;
(statearr_39635_39662[(1)] = (5));

} else {
var statearr_39636_39663 = state_39629__$1;
(statearr_39636_39663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (15))){
var inst_39619 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
var statearr_39637_39664 = state_39629__$1;
(statearr_39637_39664[(2)] = inst_39619);

(statearr_39637_39664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (13))){
var state_39629__$1 = state_39629;
var statearr_39638_39665 = state_39629__$1;
(statearr_39638_39665[(2)] = null);

(statearr_39638_39665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (6))){
var inst_39589 = (state_39629[(7)]);
var inst_39614 = inst_39589.length;
var inst_39615 = (inst_39614 > (0));
var state_39629__$1 = state_39629;
if(cljs.core.truth_(inst_39615)){
var statearr_39639_39666 = state_39629__$1;
(statearr_39639_39666[(1)] = (12));

} else {
var statearr_39640_39667 = state_39629__$1;
(statearr_39640_39667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (3))){
var inst_39627 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39629__$1,inst_39627);
} else {
if((state_val_39630 === (12))){
var inst_39589 = (state_39629[(7)]);
var inst_39617 = cljs.core.vec.call(null,inst_39589);
var state_39629__$1 = state_39629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39629__$1,(15),out,inst_39617);
} else {
if((state_val_39630 === (2))){
var state_39629__$1 = state_39629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39629__$1,(4),ch);
} else {
if((state_val_39630 === (11))){
var inst_39597 = (state_39629[(10)]);
var inst_39593 = (state_39629[(9)]);
var inst_39607 = (state_39629[(2)]);
var inst_39608 = [];
var inst_39609 = inst_39608.push(inst_39593);
var inst_39589 = inst_39608;
var inst_39590 = inst_39597;
var state_39629__$1 = (function (){var statearr_39641 = state_39629;
(statearr_39641[(11)] = inst_39609);

(statearr_39641[(7)] = inst_39589);

(statearr_39641[(12)] = inst_39607);

(statearr_39641[(8)] = inst_39590);

return statearr_39641;
})();
var statearr_39642_39668 = state_39629__$1;
(statearr_39642_39668[(2)] = null);

(statearr_39642_39668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (9))){
var inst_39589 = (state_39629[(7)]);
var inst_39605 = cljs.core.vec.call(null,inst_39589);
var state_39629__$1 = state_39629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39629__$1,(11),out,inst_39605);
} else {
if((state_val_39630 === (5))){
var inst_39597 = (state_39629[(10)]);
var inst_39590 = (state_39629[(8)]);
var inst_39593 = (state_39629[(9)]);
var inst_39597__$1 = f.call(null,inst_39593);
var inst_39598 = cljs.core._EQ_.call(null,inst_39597__$1,inst_39590);
var inst_39599 = cljs.core.keyword_identical_QMARK_.call(null,inst_39590,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39600 = (inst_39598) || (inst_39599);
var state_39629__$1 = (function (){var statearr_39643 = state_39629;
(statearr_39643[(10)] = inst_39597__$1);

return statearr_39643;
})();
if(cljs.core.truth_(inst_39600)){
var statearr_39644_39669 = state_39629__$1;
(statearr_39644_39669[(1)] = (8));

} else {
var statearr_39645_39670 = state_39629__$1;
(statearr_39645_39670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (14))){
var inst_39622 = (state_39629[(2)]);
var inst_39623 = cljs.core.async.close_BANG_.call(null,out);
var state_39629__$1 = (function (){var statearr_39647 = state_39629;
(statearr_39647[(13)] = inst_39622);

return statearr_39647;
})();
var statearr_39648_39671 = state_39629__$1;
(statearr_39648_39671[(2)] = inst_39623);

(statearr_39648_39671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (10))){
var inst_39612 = (state_39629[(2)]);
var state_39629__$1 = state_39629;
var statearr_39649_39672 = state_39629__$1;
(statearr_39649_39672[(2)] = inst_39612);

(statearr_39649_39672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39630 === (8))){
var inst_39589 = (state_39629[(7)]);
var inst_39597 = (state_39629[(10)]);
var inst_39593 = (state_39629[(9)]);
var inst_39602 = inst_39589.push(inst_39593);
var tmp39646 = inst_39589;
var inst_39589__$1 = tmp39646;
var inst_39590 = inst_39597;
var state_39629__$1 = (function (){var statearr_39650 = state_39629;
(statearr_39650[(7)] = inst_39589__$1);

(statearr_39650[(14)] = inst_39602);

(statearr_39650[(8)] = inst_39590);

return statearr_39650;
})();
var statearr_39651_39673 = state_39629__$1;
(statearr_39651_39673[(2)] = null);

(statearr_39651_39673[(1)] = (2));


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
});})(c__30437__auto___39659,out))
;
return ((function (switch__30422__auto__,c__30437__auto___39659,out){
return (function() {
var state_machine__30423__auto__ = null;
var state_machine__30423__auto____0 = (function (){
var statearr_39655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39655[(0)] = state_machine__30423__auto__);

(statearr_39655[(1)] = (1));

return statearr_39655;
});
var state_machine__30423__auto____1 = (function (state_39629){
while(true){
var ret_value__30424__auto__ = (function (){try{while(true){
var result__30425__auto__ = switch__30422__auto__.call(null,state_39629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30425__auto__;
}
break;
}
}catch (e39656){if((e39656 instanceof Object)){
var ex__30426__auto__ = e39656;
var statearr_39657_39674 = state_39629;
(statearr_39657_39674[(5)] = ex__30426__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39675 = state_39629;
state_39629 = G__39675;
continue;
} else {
return ret_value__30424__auto__;
}
break;
}
});
state_machine__30423__auto__ = function(state_39629){
switch(arguments.length){
case 0:
return state_machine__30423__auto____0.call(this);
case 1:
return state_machine__30423__auto____1.call(this,state_39629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__30423__auto____0;
state_machine__30423__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__30423__auto____1;
return state_machine__30423__auto__;
})()
;})(switch__30422__auto__,c__30437__auto___39659,out))
})();
var state__30439__auto__ = (function (){var statearr_39658 = f__30438__auto__.call(null);
(statearr_39658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30437__auto___39659);

return statearr_39658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30439__auto__);
});})(c__30437__auto___39659,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map