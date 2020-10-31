function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e) {
    return (e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0]).split("?")[0];
}

function r(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
}

function n(e, t) {
    return t ? e.replace(/\/+$/, "") + (t.startsWith("?") ? "" : "/") + t.replace(/^\/+/, "") : e;
}

function o(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}

function i(e, t) {
    if (null !== e && void 0 !== e) if ("object" !== (void 0 === e ? "undefined" : u(e)) && (e = [ e ]), 
    Array.isArray(e)) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
}

function a(e, t) {
    if (!t) return e;
    var r = void 0, n = [];
    if (i(t, function(e, t) {
        null !== e && void 0 !== e && (Array.isArray(e) ? t += "[]" : e = [ e ], i(e, function(e) {
            e instanceof Date ? e = e.toISOString() : null !== e && "object" === (void 0 === e ? "undefined" : u(e)) && (e = JSON.stringify(e)), 
            n.push(o(t) + "=" + o(e));
        }));
    }), r = n.join("&")) {
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + r;
    }
    return e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, l = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), c = function() {
    function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e(this, o), Object.assign(this, {
            defaultConfig: t,
            interceptor: r
        });
    }
    return l(o, [ {
        key: "request",
        value: function(e) {
            var o = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = arguments[2];
            return new Promise(function(l, c) {
                try {
                    var s = o.interceptor.request, f = o.interceptor.response, p = Object.assign({
                        url: e,
                        header: {},
                        params: {},
                        data: {}
                    }, o.defaultConfig, i);
                    s && s(p, u);
                    var y = Object.assign({}, o.defaultConfig.params, p.params);
                    p.baseURL && !r(p.url) && (p.url = n(p.baseURL, p.url)), p.url = a(p.url, y);
                    var d = {
                        success: function(e) {
                            try {
                                var t = f ? f(e, u) : e;
                                if (p.transform) try {
                                    t = p.transform(t, e);
                                } catch (e) {
                                    throw "[Data Transform Error] " + e;
                                }
                                l(t);
                            } catch (e) {
                                c(e ? e.toString() : e);
                            }
                        },
                        fail: function(e) {
                            var r = e.errMsg;
                            "request:fail url not in domain list" === r ? r = "\n" + t(p.url) + "\n不在request合法域名列表中，请到微信公众号平台-登录小程序账户密码-进入小程序后台-开发-开发设置-服务器域名" : "request:fail timeout" === r && (r = "请求超时"), 
                            c(r);
                        }
                    }, v = u ? [ "url", "filePath", "name", "header", "formData" ] : [ "url", "data", "header", "method", "dataType", "responseType" ], g = !0, h = !1, b = void 0;
                    try {
                        for (var m, O = v[Symbol.iterator](); !(g = (m = O.next()).done); g = !0) {
                            var j = m.value, S = p[j];
                            S && (d[j] = S);
                        }
                    } catch (e) {
                        h = !0, b = e;
                    } finally {
                        try {
                            !g && O.return && O.return();
                        } finally {
                            if (h) throw b;
                        }
                    }
                    u ? wx.uploadFile(d) : wx.request(d);
                } catch (e) {
                    c(e ? e.toString() : e);
                }
            });
        }
    }, {
        key: "get",
        value: function(e, t) {
            return this.request(e, Object.assign({}, t, {
                method: "GET"
            }));
        }
    }, {
        key: "post",
        value: function(e, t) {
            return this.request(e, Object.assign({}, t, {
                method: "POST"
            }));
        }
    }, {
        key: "upload",
        value: function(e, t) {
            return this.request(e, Object.assign({}, t), !0);
        }
    } ]), o;
}();

exports.default = c;