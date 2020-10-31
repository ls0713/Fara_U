var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var r = {}, o = function(o, e) {
        if (!r[o]) return require(e);
        if (!r[o].status) {
            var n = {
                exports: {}
            };
            r[o].status = 1, r[o].func(r[o].req, n, n.exports), "object" === t(n.exports) ? (Object.keys(n.exports).forEach(function(t) {
                r[o].m.exports[t] = n.exports[t];
            }), n.exports.__esModule && Object.defineProperty(r[o].m.exports, "__esModule", {
                value: !0
            })) : r[o].m.exports = n.exports;
        }
        return r[o].m.exports;
    };
    return function(t, o, e) {
        var n = {
            exports: {}
        };
        r[t] = {
            status: 0,
            func: o,
            req: e,
            m: n
        };
    }(1554946070758, function(t, r, o) {
        var e = t("is-arrayish"), n = Array.prototype.concat, u = Array.prototype.slice, s = r.exports = function(t) {
            for (var r = [], o = 0, s = t.length; o < s; o++) {
                var p = t[o];
                e(p) ? r = n.call(r, u.call(p)) : r.push(p);
            }
            return r;
        };
        s.wrap = function(t) {
            return function() {
                return t(s(arguments));
            };
        };
    }, function(t) {
        return o({}[t], t);
    }), o(1554946070758);
}();