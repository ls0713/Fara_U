function n(n) {
    if (Array.isArray(n)) {
        for (var o = 0, r = Array(n.length); o < n.length; o++) r[o] = n[o];
        return r;
    }
    return Array.from(n);
}

function o() {
    for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    if (0 === o.length) return function(n) {
        return n;
    };
    if (1 === o.length) return o[0];
    var e = o[o.length - 1], t = o.slice(0, -1);
    return function() {
        return t.reduceRight(function(n, o) {
            return o(n);
        }, e.apply(void 0, arguments));
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function(n) {
    return "function" == typeof n;
}, e = function() {}, t = [ "onLoad", "onBeforeLoad", "onAfterLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onSmartToHere", "uiTopSizeDataReceiver" ], a = function(n) {
    this.onBeforeLoad(n), this.onNativeLoad(n), this.onAfterLoad(n);
}, i = function(n) {
    var o = {};
    return n.forEach(function(n) {
        var r = n.data, e = void 0 === r ? {} : r;
        Object.keys(e).forEach(function(n) {
            o[n] = e[n];
        });
    }), o;
}, f = function(n) {
    var o = {};
    return n.forEach(function(n) {
        var e = n.methods, a = void 0 === e ? {} : e;
        Object.keys(a).forEach(function(n) {
            if (r(a[n])) {
                if ("onLoad" === n) return;
                o[n] = a[n];
            }
        }), t.forEach(function(e) {
            r(n[e]) && "onLoad" !== e && (o[e] ? o[e] = o[e].concat(n[e]) : o[e] = [ n[e] ]);
        });
    }), o;
}, u = function(n, o) {
    return Object.keys(n).forEach(function(r) {
        void 0 === o[r] && (o[r] = n[r]);
    }), o;
}, c = function(e, a) {
    return Object.keys(e).forEach(function(i) {
        if (t.includes(i)) {
            var f = e[i];
            r(a[i]) && f.push(a[i]), a[i] = function() {
                var r = this;
                return o.apply(void 0, n(f.reverse().map(function(n) {
                    return n.bind(r);
                }))).apply(void 0, arguments);
            };
        } else null == a[i] && (a[i] = e[i]);
    }), a;
};

exports.default = function(o) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], t = o, d = t.mixins, s = void 0 === d ? [] : d, v = t.onBeforeLoad, h = void 0 === v ? e : v, l = t.onAfterLoad, p = void 0 === l ? e : l;
    s.unshift.apply(s, n(r));
    var y = o.onLoad || e, L = o.data || {}, g = i(s), A = f(s);
    return Object.assign(o, {
        data: u(g, L),
        onLoad: a,
        onBeforeLoad: h,
        onAfterLoad: p,
        onNativeLoad: y
    }), o = c(A, o);
};