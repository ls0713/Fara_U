function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function n(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), r = getApp().Macaw.lib.EventEmitter, i = {
    fontSize: "FontSize",
    opacity: "GlobalAlpha",
    lineDash: "LineDash",
    textAlign: "TextAlign"
}, c = {
    start: "left",
    end: "right"
}, u = function(u) {
    function a(n) {
        t(this, a);
        var o = e(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this)), r = o;
        return r.ctx = n, r.style = {}, r._initContext(n), o;
    }
    return n(a, r), o(a, [ {
        key: "getContext",
        value: function(t) {
            if ("2d" === t) return this.ctx;
        }
    }, {
        key: "_initContext",
        value: function(t) {
            Object.keys(i).map(function(e) {
                Object.defineProperty(t, e, {
                    set: function(n) {
                        "textAlign" == e && (n = c[n] ? c[n] : n), t["set" + i[e]](n);
                    }
                });
            });
        }
    } ]), a;
}();

exports.default = u;