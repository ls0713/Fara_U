function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function t() {
    function t(e) {
        return i ? e() : console.error("ui-page vm not injected");
    }
    function n(e) {
        i ? e() : u.push(e);
    }
    for (var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = void 0, u = [], s = (0, 
    a.createObserveObject)(r.default.uiPage, function() {
        i && i.configUpdate();
    }, o, function(e) {
        return t(function() {
            return i.data.useConfig[e];
        });
    }), c = [ "scrollTop", "scrollWithAnimation" ], f = 0; f < c.length; f++) !function() {
        var r = c[f];
        Object.defineProperty(s, r, {
            get: function() {
                return t(function() {
                    return i.data[r];
                });
            },
            set: function(t) {
                n(function() {
                    return i.setData(e({}, r, t));
                });
            },
            enumerable: !1
        });
    }();
    return Object.defineProperty(s, "vmInject", {
        value: function(e, t) {
            (i = e)._uiPage = s, i._page = t, s._setStore(i._injectConfig = o);
            var n = !0, r = !1, a = void 0;
            try {
                for (var c, f = u[Symbol.iterator](); !(n = (c = f.next()).done); n = !0) (0, c.value)();
            } catch (e) {
                r = !0, a = e;
            } finally {
                try {
                    !n && f.return && f.return();
                } finally {
                    if (r) throw a;
                }
            }
            u.length = 0;
        },
        enumerable: !1
    }), Object.defineProperty(s, "isInjected", {
        get: function() {
            return !!i;
        },
        enumerable: !1
    }), s;
}

function n() {
    function e(e) {
        return n ? e() : console.error("ui-top vm not injected");
    }
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = void 0, o = void 0, i = (0, 
    a.createObserveObject)(r.default.uiTop, function() {
        n && n.configUpdate();
    }, t, function(t) {
        return e(function() {
            return n.data.useConfig[t];
        });
    }), u = [ "backgroundColorOpaque", "backgroundColorUse", "frontColorIsLight" ], s = 0; s < u.length; s++) !function() {
        var t = u[s];
        Object.defineProperty(i, t, {
            get: function() {
                return e(function() {
                    return n.data.useConfig[t];
                });
            },
            enumerable: !1
        });
    }();
    return Object.defineProperty(i, "enableUpdate", {
        value: function() {
            n ? (n._updateDisabled = !1, n.configUpdate()) : o = !1;
        },
        enumerable: !1
    }), Object.defineProperty(i, "disableUpdate", {
        value: function() {
            n ? n._updateDisabled = !0 : o = !0;
        },
        enumerable: !1
    }), Object.defineProperty(i, "vmInject", {
        value: function(e, r) {
            (n = e)._uiTop = i, n._page = r, n._updateDisabled = o, i._setStore(n._injectConfig = t);
        },
        enumerable: !1
    }), Object.defineProperty(i, "isInjected", {
        get: function() {
            return !!n;
        },
        enumerable: !1
    }), i;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.bindEventLifetimes = function() {
    var e = this;
    if (this.onLogged) {
        var t = function(t, n) {
            n && t.call(e, r.default.store.userData), e._userDataUpdate && r.default.event.off("userDataUpdate", e._userDataUpdate), 
            r.default.event.on("userDataUpdate", e._userDataUpdate = function() {
                t.call(e, r.default.store.userData);
            });
        };
        r.default.store.isLogged && wx.nextTick(function() {
            return e.onLogged(r.default.store.userData, t);
        }), r.default.event.on("loginDone", this._loginDone = function(n) {
            e.onLogged(n, t);
        });
    }
}, exports.unbindEventLifetimes = function() {
    this._loginDone && r.default.event.off("loginDone", this._loginDone), this._userDataUpdate && r.default.event.off("userDataUpdate", this._userDataUpdate);
}, exports.createUI = function() {
    this.uiPage = t(this.uiPage), this.uiTop = n(this.uiTop);
}, exports.injectUI = function() {
    var e = this.selectComponent("#ui-page") || {}, t = e.vm, n = e.uiTopVm;
    n = n || this.selectComponent("#ui-top"), t && this.uiPage.vmInject(t, this), n && this.uiTop.vmInject(n, this);
}, exports.onShareAppMessage = function() {
    var e = this.allowShare instanceof Object ? this.allowShare : {}, t = {
        title: e.title || this.title || r.default.defaultTitle,
        path: e.url || r.default.getCurrentPageUrl(this, !0),
        success: e.success,
        fail: e.fail,
        complete: e.complete
    };
    return r.default.shareInterceptor ? r.default.shareInterceptor(t) : t;
}, exports.targetDataSet = function(e) {
    var t = e.currentTarget;
    this.setData(t.dataset);
}, exports.targetActionRun = function(e) {
    var t = e.currentTarget.dataset, n = t.action, a = t.actionValue;
    return r.default.actionRun(n, a), {
        action: n,
        value: a
    };
}, exports.setDataByOptions = function(e, t) {
    if (t) {
        var n = {}, r = {}, a = e.map(function(e) {
            var t = e;
            if (e instanceof Object) {
                var n = Object.keys(e)[0];
                t = e[n], r[t] = n;
            }
            return t;
        });
        Object.keys(t).forEach(function(e) {
            a.includes(e) && void 0 !== t[e] && (n[r[e] || e] = t[e]);
        }), this.setData(n);
    }
}, exports.autoSetPagerStatus = function(e, t, n, r) {
    return this.autoSetStatus(e, this.autoSetPager(e, t, r).then(function(e) {
        return e.list;
    }, function(e) {
        return Promise.reject(e.errMsg);
    }), n);
}, exports.autoSetStatus = function(t, n, r) {
    var a = this;
    this._statusPromieIDs || (this._statusPromieIDs = {}), n instanceof Promise || (n = Promise.resolve(n));
    var o = "_status." + t, i = o + ".mode", u = o + ".ready", s = this._statusPromieIDs[t] = Date.now();
    return this.groupSetData(function() {
        var t;
        r && a.setData(e({}, o, r)), a.setData((t = {}, e(t, i, "loading"), e(t, u, !1), 
        t));
    }), n.then(function(n) {
        var r;
        if (a._statusPromieIDs[t] === s) {
            var o = Array.isArray(n) && !n.length;
            a.setData((r = {}, e(r, i, o ? "empty" : ""), e(r, u, !o), r));
        }
    }, function(n) {
        var r;
        a._statusPromieIDs[t] === s && a.setData((r = {}, e(r, o + ".error.text", n.toString()), 
        e(r, i, "error"), r));
    }), n;
}, exports.autoSetPager = function(t, n, r) {
    var a = this;
    this._pagerPromieIDs || (this._pagerPromieIDs = {}), n instanceof Promise || (n = Promise.resolve(n));
    var o = "_pager." + t, i = o + ".mode", u = o + ".ready", s = this._pagerPromieIDs[t] = Date.now();
    return this.groupSetData(function() {
        var t;
        r && a.setData(e({}, o, r)), a.setData((t = {}, e(t, i, "loading"), e(t, u, !1), 
        t));
    }), n.then(function(n) {
        var r, o = n.completed;
        a._pagerPromieIDs[t] === s && a.setData((r = {}, e(r, i, o ? "completed" : "idle"), 
        e(r, u, !0), r));
    }, function(n) {
        var r, c = n.state, f = n.errMsg;
        a._pagerPromieIDs[t] === s && a.setData((r = {}, e(r, o + ".error.text", f || ""), 
        e(r, i, c), e(r, u, !1), r));
    }), n;
}, exports.dataReceiver = function(e) {
    var t = e.detail, n = e.currentTarget.dataset, r = {};
    Object.keys(n).forEach(function(e) {
        var a = n[e], o = "*" === a ? t : t[a];
        r[e] = o;
    }), this.setData(r);
}, exports.noopFunc = function() {
    return !1;
};

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../index")), a = require("../lib/utils");