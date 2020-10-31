var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, n = function(n, r) {
        if (!t[n]) return require(r);
        if (!t[n].status) {
            var o = {
                exports: {}
            };
            t[n].status = 1, t[n].func(t[n].req, o, o.exports), "object" === e(o.exports) ? (Object.keys(o.exports).forEach(function(e) {
                t[n].m.exports[e] = o.exports[e];
            }), o.exports.__esModule && Object.defineProperty(t[n].m.exports, "__esModule", {
                value: !0
            })) : t[n].m.exports = o.exports;
        }
        return t[n].m.exports;
    };
    return function(e, n, r) {
        var o = {
            exports: {}
        };
        t[e] = {
            status: 0,
            func: n,
            req: r,
            m: o
        };
    }(1554946070756, function(t, n, r) {
        function o(e) {
            console && console.warn && console.warn(e);
        }
        function i() {
            i.init.call(this);
        }
        function s(e) {
            return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners;
        }
        function u(t, n, r, i) {
            var u, f, p;
            if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === r ? "undefined" : e(r)));
            if (void 0 === (f = t._events) ? (f = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== f.newListener && (t.emit("newListener", n, r.listener ? r.listener : r), 
            f = t._events), p = f[n]), void 0 === p) p = f[n] = r, ++t._eventsCount; else if ("function" == typeof p ? p = f[n] = i ? [ r, p ] : [ p, r ] : i ? p.unshift(r) : p.push(r), 
            (u = s(t)) > 0 && p.length > u && !p.warned) {
                p.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + p.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = n, c.count = p.length, 
                o(c);
            }
            return t;
        }
        function f() {
            for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
            this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
            m(this.listener, this.target, e));
        }
        function p(e, t, n) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            }, o = f.bind(r);
            return o.listener = n, r.wrapFn = o, o;
        }
        function c(e, t, n) {
            var r = e._events;
            if (void 0 === r) return [];
            var o = r[t];
            return void 0 === o ? [] : "function" == typeof o ? n ? [ o.listener || o ] : [ o ] : n ? h(o) : a(o, o.length);
        }
        function v(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" == typeof n) return 1;
                if (void 0 !== n) return n.length;
            }
            return 0;
        }
        function a(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
            return n;
        }
        function l(e, t) {
            for (;t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop();
        }
        function h(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t;
        }
        var y, d = "object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) ? Reflect : null, m = d && "function" == typeof d.apply ? d.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n);
        };
        y = d && "function" == typeof d.ownKeys ? d.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        } : function(e) {
            return Object.getOwnPropertyNames(e);
        };
        var b = Number.isNaN || function(e) {
            return e !== e;
        };
        n.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, 
        i.prototype._maxListeners = void 0;
        var g = 10;
        Object.defineProperty(i, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return g;
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                g = e;
            }
        }), i.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
            this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, i.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this;
        }, i.prototype.getMaxListeners = function() {
            return s(this);
        }, i.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var r = "error" === e, o = this._events;
            if (void 0 !== o) r = r && void 0 === o.error; else if (!r) return !1;
            if (r) {
                var i;
                if (t.length > 0 && (i = t[0]), i instanceof Error) throw i;
                var s = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
                throw s.context = i, s;
            }
            var u = o[e];
            if (void 0 === u) return !1;
            if ("function" == typeof u) m(u, this, t); else for (var f = u.length, p = a(u, f), n = 0; n < f; ++n) m(p[n], this, t);
            return !0;
        }, i.prototype.addListener = function(e, t) {
            return u(this, e, t, !1);
        }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
            return u(this, e, t, !0);
        }, i.prototype.once = function(t, n) {
            if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === n ? "undefined" : e(n)));
            return this.on(t, p(this, t, n)), this;
        }, i.prototype.prependOnceListener = function(t, n) {
            if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === n ? "undefined" : e(n)));
            return this.prependListener(t, p(this, t, n)), this;
        }, i.prototype.removeListener = function(t, n) {
            var r, o, i, s, u;
            if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === n ? "undefined" : e(n)));
            if (void 0 === (o = this._events)) return this;
            if (void 0 === (r = o[t])) return this;
            if (r === n || r.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete o[t], 
            o.removeListener && this.emit("removeListener", t, r.listener || n)); else if ("function" != typeof r) {
                for (i = -1, s = r.length - 1; s >= 0; s--) if (r[s] === n || r[s].listener === n) {
                    u = r[s].listener, i = s;
                    break;
                }
                if (i < 0) return this;
                0 === i ? r.shift() : l(r, i), 1 === r.length && (o[t] = r[0]), void 0 !== o.removeListener && this.emit("removeListener", t, u || n);
            }
            return this;
        }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), 
            this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), 
            this;
            if (0 === arguments.length) {
                var o, i = Object.keys(n);
                for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
                this._eventsCount = 0, this;
            }
            if ("function" == typeof (t = n[e])) this.removeListener(e, t); else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this;
        }, i.prototype.listeners = function(e) {
            return c(this, e, !0);
        }, i.prototype.rawListeners = function(e) {
            return c(this, e, !1);
        }, i.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t);
        }, i.prototype.listenerCount = v, i.prototype.eventNames = function() {
            return this._eventsCount > 0 ? y(this._events) : [];
        };
    }, function(e) {
        return n({}[e], e);
    }), n(1554946070756);
}();