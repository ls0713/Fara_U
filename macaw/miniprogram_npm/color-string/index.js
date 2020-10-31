var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
    return typeof r;
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
};

module.exports = function() {
    var t = {}, e = function(e, n) {
        if (!t[e]) return require(n);
        if (!t[e].status) {
            var o = {
                exports: {}
            };
            t[e].status = 1, t[e].func(t[e].req, o, o.exports), "object" === r(o.exports) ? (Object.keys(o.exports).forEach(function(r) {
                t[e].m.exports[r] = o.exports[r];
            }), o.exports.__esModule && Object.defineProperty(t[e].m.exports, "__esModule", {
                value: !0
            })) : t[e].m.exports = o.exports;
        }
        return t[e].m.exports;
    };
    return function(r, e, n) {
        var o = {
            exports: {}
        };
        t[r] = {
            status: 0,
            func: e,
            req: n,
            m: o
        };
    }(1554946070754, function(r, t, e) {
        function n(r, t, e) {
            return Math.min(Math.max(t, r), e);
        }
        function o(r) {
            var t = r.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t;
        }
        var s = r("color-name"), a = r("simple-swizzle"), u = {};
        for (var l in s) s.hasOwnProperty(l) && (u[s[l]] = l);
        var f = t.exports = {
            to: {},
            get: {}
        };
        f.get = function(r) {
            var t, e;
            switch (r.substring(0, 3).toLowerCase()) {
              case "hsl":
                t = f.get.hsl(r), e = "hsl";
                break;

              case "hwb":
                t = f.get.hwb(r), e = "hwb";
                break;

              default:
                t = f.get.rgb(r), e = "rgb";
            }
            return t ? {
                model: e,
                value: t
            } : null;
        }, f.get.rgb = function(r) {
            if (!r) return null;
            var t, e, o, a = /^#([a-f0-9]{3,4})$/i, u = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, l = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, f = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, i = /(\D+)/, h = [ 0, 0, 0, 1 ];
            if (t = r.match(u)) {
                for (o = t[2], t = t[1], e = 0; e < 3; e++) {
                    var c = 2 * e;
                    h[e] = parseInt(t.slice(c, c + 2), 16);
                }
                o && (h[3] = Math.round(parseInt(o, 16) / 255 * 100) / 100);
            } else if (t = r.match(a)) {
                for (o = (t = t[1])[3], e = 0; e < 3; e++) h[e] = parseInt(t[e] + t[e], 16);
                o && (h[3] = Math.round(parseInt(o + o, 16) / 255 * 100) / 100);
            } else if (t = r.match(l)) {
                for (e = 0; e < 3; e++) h[e] = parseInt(t[e + 1], 0);
                t[4] && (h[3] = parseFloat(t[4]));
            } else {
                if (!(t = r.match(f))) return (t = r.match(i)) ? "transparent" === t[1] ? [ 0, 0, 0, 0 ] : (h = s[t[1]]) ? (h[3] = 1, 
                h) : null : null;
                for (e = 0; e < 3; e++) h[e] = Math.round(2.55 * parseFloat(t[e + 1]));
                t[4] && (h[3] = parseFloat(t[4]));
            }
            for (e = 0; e < 3; e++) h[e] = n(h[e], 0, 255);
            return h[3] = n(h[3], 0, 1), h;
        }, f.get.hsl = function(r) {
            if (!r) return null;
            var t = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, e = r.match(t);
            if (e) {
                var o = parseFloat(e[4]);
                return [ (parseFloat(e[1]) + 360) % 360, n(parseFloat(e[2]), 0, 100), n(parseFloat(e[3]), 0, 100), n(isNaN(o) ? 1 : o, 0, 1) ];
            }
            return null;
        }, f.get.hwb = function(r) {
            if (!r) return null;
            var t = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/, e = r.match(t);
            if (e) {
                var o = parseFloat(e[4]);
                return [ (parseFloat(e[1]) % 360 + 360) % 360, n(parseFloat(e[2]), 0, 100), n(parseFloat(e[3]), 0, 100), n(isNaN(o) ? 1 : o, 0, 1) ];
            }
            return null;
        }, f.to.hex = function() {
            var r = a(arguments);
            return "#" + o(r[0]) + o(r[1]) + o(r[2]) + (r[3] < 1 ? o(Math.round(255 * r[3])) : "");
        }, f.to.rgb = function() {
            var r = a(arguments);
            return r.length < 4 || 1 === r[3] ? "rgb(" + Math.round(r[0]) + ", " + Math.round(r[1]) + ", " + Math.round(r[2]) + ")" : "rgba(" + Math.round(r[0]) + ", " + Math.round(r[1]) + ", " + Math.round(r[2]) + ", " + r[3] + ")";
        }, f.to.rgb.percent = function() {
            var r = a(arguments), t = Math.round(r[0] / 255 * 100), e = Math.round(r[1] / 255 * 100), n = Math.round(r[2] / 255 * 100);
            return r.length < 4 || 1 === r[3] ? "rgb(" + t + "%, " + e + "%, " + n + "%)" : "rgba(" + t + "%, " + e + "%, " + n + "%, " + r[3] + ")";
        }, f.to.hsl = function() {
            var r = a(arguments);
            return r.length < 4 || 1 === r[3] ? "hsl(" + r[0] + ", " + r[1] + "%, " + r[2] + "%)" : "hsla(" + r[0] + ", " + r[1] + "%, " + r[2] + "%, " + r[3] + ")";
        }, f.to.hwb = function() {
            var r = a(arguments), t = "";
            return r.length >= 4 && 1 !== r[3] && (t = ", " + r[3]), "hwb(" + r[0] + ", " + r[1] + "%, " + r[2] + "%" + t + ")";
        }, f.to.keyword = function(r) {
            return u[r.slice(0, 3)];
        };
    }, function(r) {
        return e({}[r], r);
    }), e(1554946070754);
}();