function t(t, e) {
    var n = void 0;
    return function() {
        var r = this, o = arguments;
        clearTimeout(n), n = setTimeout(function() {
            n = null, t.apply(r, o);
        }, e);
    };
}

function e(t) {
    return t / 750 * u;
}

function n(t) {
    return t.match(/^(>|\^)/) ? t.replace(/^([^?]+)(\?.*)?$/, function(t, e, n) {
        var r = e.substring(1);
        return (e = "/pages/" + r + "/" + r) + (n || "");
    }) : t;
}

function r(t, e) {
    var r = (t = n(t)).indexOf("?"), u = t.substr(0, r), c = {};
    return r > -1 ? c = o(t.substring(r)) : u = t, e && (Object.assign(c, e), t = u + i(c)), 
    {
        url: t,
        pureUrl: u,
        options: c
    };
}

function o(t) {
    for (var e = void 0, n = /([^&=]+)=?([^&]*)/g, r = t.substring(1), o = {}; e = n.exec(r); ) o[e[1]] = e[2];
    return o;
}

function i(t) {
    var e = Object.keys(t).filter(function(e) {
        return null != t[e];
    }).map(function(e) {
        return e + "=" + t[e];
    }).join("&");
    return e ? "?" + e : "";
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.camelCaseToDash = function(t) {
    return t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}, exports.debounce = t, exports.injectDebounce = function(e, n, r, o) {
    var i = "__debounce_" + e;
    return function() {
        return (this[i] || (this[i] = t(n, r, o))).apply(this, arguments);
    };
}, exports.px2rpx = function(t) {
    return t * (750 / u);
}, exports.rpx2px = e, exports.urlNormalize = n, exports.urlParser = r, exports.matchUrl = function(t, e) {
    return r(t).pureUrl === r(e).pureUrl;
}, exports.queryStringToOptions = o, exports.optionsToQueryString = i, exports.getImageInfo = function(t) {
    return new Promise(function(e, n) {
        wx.getImageInfo({
            src: t,
            success: function(n) {
                var r = n.width, o = n.height, i = n.path;
                i.match(/^[aA-zZ]+:\/\//) || (i = t), e({
                    width: r,
                    height: o,
                    path: i
                });
            },
            fail: function(e) {
                var r = e.errMsg;
                n(r + " (" + t + ")");
            }
        });
    });
}, exports.getUISizeData = function() {
    var t = wx.getSystemInfoSync(), n = t.statusBarHeight, r = t.windowWidth, o = wx.getMenuButtonBoundingClientRect(), i = o.top, u = o.left, c = r - o.right, s = o.height, a = i - n, p = s + 2 * a;
    return {
        topBtnTop: i,
        topBtnLeft: u,
        topBtnRight: c,
        topBtnHeight: s,
        titleBarPaddingTop: a,
        titleBarPaddingRight: r - u,
        statusBarHeight: n,
        titleBarHeight: p,
        topHeight: n + p + e(6)
    };
}, exports.createObserveObject = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments[3], o = {};
    return Object.keys(t).forEach(function(i) {
        Object.defineProperty(o, i, {
            get: function() {
                return r ? r(i) : void 0 !== n[i] ? n[i] : t[i];
            },
            set: function(t) {
                n[i] = t, e(o);
            },
            enumerable: !0
        });
    }), Object.defineProperty(o, "_setStore", {
        value: function(t, r) {
            n = r ? Object.assign({}, n, t) : t, e(o);
        },
        enumerable: !1
    }), Object.defineProperty(o, "_define", {
        get: function() {
            return t;
        },
        enumerable: !1
    }), Object.defineProperty(o, "_store", {
        get: function() {
            return n;
        },
        enumerable: !1
    }), o;
};

var u = wx.getSystemInfoSync().windowWidth;