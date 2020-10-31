var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
    return typeof r;
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
};

module.exports = function() {
    var n = {}, t = function(r, t, a) {
        var e = {
            exports: {}
        };
        n[r] = {
            status: 0,
            func: t,
            req: a,
            m: e
        };
    }, a = function(t, a) {
        if (!n[t]) return require(a);
        if (!n[t].status) {
            var e = {
                exports: {}
            };
            n[t].status = 1, n[t].func(n[t].req, e, e.exports), "object" === r(e.exports) ? (Object.keys(e.exports).forEach(function(r) {
                n[t].m.exports[r] = e.exports[r];
            }), e.exports.__esModule && Object.defineProperty(n[t].m.exports, "__esModule", {
                value: !0
            })) : n[t].m.exports = e.exports;
        }
        return n[t].m.exports;
    };
    return t(1554946070750, function(n, t, a) {
        function e(r) {
            var n = function(n) {
                return void 0 === n || null === n ? n : (arguments.length > 1 && (n = Array.prototype.slice.call(arguments)), 
                r(n));
            };
            return "conversion" in r && (n.conversion = r.conversion), n;
        }
        function o(n) {
            var t = function(t) {
                if (void 0 === t || null === t) return t;
                arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                var a = n(t);
                if ("object" === (void 0 === a ? "undefined" : r(a))) for (var e = a.length, o = 0; o < e; o++) a[o] = Math.round(a[o]);
                return a;
            };
            return "conversion" in n && (t.conversion = n.conversion), t;
        }
        var u = n("./conversions"), c = n("./route"), s = {};
        Object.keys(u).forEach(function(r) {
            s[r] = {}, Object.defineProperty(s[r], "channels", {
                value: u[r].channels
            }), Object.defineProperty(s[r], "labels", {
                value: u[r].labels
            });
            var n = c(r);
            Object.keys(n).forEach(function(t) {
                var a = n[t];
                s[r][t] = o(a), s[r][t].raw = e(a);
            });
        }), t.exports = s;
    }, function(r) {
        return a({
            "./conversions": 1554946070751,
            "./route": 1554946070752
        }[r], r);
    }), t(1554946070751, function(r, n, t) {
        function a(r, n) {
            return Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2) + Math.pow(r[2] - n[2], 2);
        }
        var e = r("color-name"), o = {};
        for (var u in e) e.hasOwnProperty(u) && (o[e[u]] = u);
        var c = n.exports = {
            rgb: {
                channels: 3,
                labels: "rgb"
            },
            hsl: {
                channels: 3,
                labels: "hsl"
            },
            hsv: {
                channels: 3,
                labels: "hsv"
            },
            hwb: {
                channels: 3,
                labels: "hwb"
            },
            cmyk: {
                channels: 4,
                labels: "cmyk"
            },
            xyz: {
                channels: 3,
                labels: "xyz"
            },
            lab: {
                channels: 3,
                labels: "lab"
            },
            lch: {
                channels: 3,
                labels: "lch"
            },
            hex: {
                channels: 1,
                labels: [ "hex" ]
            },
            keyword: {
                channels: 1,
                labels: [ "keyword" ]
            },
            ansi16: {
                channels: 1,
                labels: [ "ansi16" ]
            },
            ansi256: {
                channels: 1,
                labels: [ "ansi256" ]
            },
            hcg: {
                channels: 3,
                labels: [ "h", "c", "g" ]
            },
            apple: {
                channels: 3,
                labels: [ "r16", "g16", "b16" ]
            },
            gray: {
                channels: 1,
                labels: [ "gray" ]
            }
        };
        for (var s in c) if (c.hasOwnProperty(s)) {
            if (!("channels" in c[s])) throw new Error("missing channels property: " + s);
            if (!("labels" in c[s])) throw new Error("missing channel labels property: " + s);
            if (c[s].labels.length !== c[s].channels) throw new Error("channel and label counts mismatch: " + s);
            var i = c[s].channels, h = c[s].labels;
            delete c[s].channels, delete c[s].labels, Object.defineProperty(c[s], "channels", {
                value: i
            }), Object.defineProperty(c[s], "labels", {
                value: h
            });
        }
        c.rgb.hsl = function(r) {
            var n, t, a, e = r[0] / 255, o = r[1] / 255, u = r[2] / 255, c = Math.min(e, o, u), s = Math.max(e, o, u), i = s - c;
            return s === c ? n = 0 : e === s ? n = (o - u) / i : o === s ? n = 2 + (u - e) / i : u === s && (n = 4 + (e - o) / i), 
            (n = Math.min(60 * n, 360)) < 0 && (n += 360), a = (c + s) / 2, t = s === c ? 0 : a <= .5 ? i / (s + c) : i / (2 - s - c), 
            [ n, 100 * t, 100 * a ];
        }, c.rgb.hsv = function(r) {
            var n, t, a, e, o, u = r[0] / 255, c = r[1] / 255, s = r[2] / 255, i = Math.max(u, c, s), h = i - Math.min(u, c, s), l = function(r) {
                return (i - r) / 6 / h + .5;
            };
            return 0 === h ? e = o = 0 : (o = h / i, n = l(u), t = l(c), a = l(s), u === i ? e = a - t : c === i ? e = 1 / 3 + n - a : s === i && (e = 2 / 3 + t - n), 
            e < 0 ? e += 1 : e > 1 && (e -= 1)), [ 360 * e, 100 * o, 100 * i ];
        }, c.rgb.hwb = function(r) {
            var n = r[0], t = r[1], a = r[2], e = c.rgb.hsl(r)[0], o = 1 / 255 * Math.min(n, Math.min(t, a));
            return a = 1 - 1 / 255 * Math.max(n, Math.max(t, a)), [ e, 100 * o, 100 * a ];
        }, c.rgb.cmyk = function(r) {
            var n, t, a, e, o = r[0] / 255, u = r[1] / 255, c = r[2] / 255;
            return e = Math.min(1 - o, 1 - u, 1 - c), n = (1 - o - e) / (1 - e) || 0, t = (1 - u - e) / (1 - e) || 0, 
            a = (1 - c - e) / (1 - e) || 0, [ 100 * n, 100 * t, 100 * a, 100 * e ];
        }, c.rgb.keyword = function(r) {
            var n = o[r];
            if (n) return n;
            var t, u = 1 / 0;
            for (var c in e) if (e.hasOwnProperty(c)) {
                var s = a(r, e[c]);
                s < u && (u = s, t = c);
            }
            return t;
        }, c.keyword.rgb = function(r) {
            return e[r];
        }, c.rgb.xyz = function(r) {
            var n = r[0] / 255, t = r[1] / 255, a = r[2] / 255;
            return [ 100 * (.4124 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .3576 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .1805 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92)), 100 * (.2126 * n + .7152 * t + .0722 * a), 100 * (.0193 * n + .1192 * t + .9505 * a) ];
        }, c.rgb.lab = function(r) {
            var n, t, a, e = c.rgb.xyz(r), o = e[0], u = e[1], s = e[2];
            return o /= 95.047, u /= 100, s /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, 
            u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, 
            n = 116 * u - 16, t = 500 * (o - u), a = 200 * (u - s), [ n, t, a ];
        }, c.hsl.rgb = function(r) {
            var n, t, a, e, o, u = r[0] / 360, c = r[1] / 100, s = r[2] / 100;
            if (0 === c) return o = 255 * s, [ o, o, o ];
            n = 2 * s - (t = s < .5 ? s * (1 + c) : s + c - s * c), e = [ 0, 0, 0 ];
            for (var i = 0; i < 3; i++) (a = u + 1 / 3 * -(i - 1)) < 0 && a++, a > 1 && a--, 
            o = 6 * a < 1 ? n + 6 * (t - n) * a : 2 * a < 1 ? t : 3 * a < 2 ? n + (t - n) * (2 / 3 - a) * 6 : n, 
            e[i] = 255 * o;
            return e;
        }, c.hsl.hsv = function(r) {
            var n, t, a = r[0], e = r[1] / 100, o = r[2] / 100, u = e, c = Math.max(o, .01);
            return o *= 2, e *= o <= 1 ? o : 2 - o, u *= c <= 1 ? c : 2 - c, t = (o + e) / 2, 
            n = 0 === o ? 2 * u / (c + u) : 2 * e / (o + e), [ a, 100 * n, 100 * t ];
        }, c.hsv.rgb = function(r) {
            var n = r[0] / 60, t = r[1] / 100, a = r[2] / 100, e = Math.floor(n) % 6, o = n - Math.floor(n), u = 255 * a * (1 - t), c = 255 * a * (1 - t * o), s = 255 * a * (1 - t * (1 - o));
            switch (a *= 255, e) {
              case 0:
                return [ a, s, u ];

              case 1:
                return [ c, a, u ];

              case 2:
                return [ u, a, s ];

              case 3:
                return [ u, c, a ];

              case 4:
                return [ s, u, a ];

              case 5:
                return [ a, u, c ];
            }
        }, c.hsv.hsl = function(r) {
            var n, t, a, e = r[0], o = r[1] / 100, u = r[2] / 100, c = Math.max(u, .01);
            return a = (2 - o) * u, n = (2 - o) * c, t = o * c, t /= n <= 1 ? n : 2 - n, t = t || 0, 
            a /= 2, [ e, 100 * t, 100 * a ];
        }, c.hwb.rgb = function(r) {
            var n, t, a, e, o = r[0] / 360, u = r[1] / 100, c = r[2] / 100, s = u + c;
            s > 1 && (u /= s, c /= s), t = 1 - c, a = 6 * o - (n = Math.floor(6 * o)), 0 != (1 & n) && (a = 1 - a), 
            e = u + a * (t - u);
            var i, h, l;
            switch (n) {
              default:
              case 6:
              case 0:
                i = t, h = e, l = u;
                break;

              case 1:
                i = e, h = t, l = u;
                break;

              case 2:
                i = u, h = t, l = e;
                break;

              case 3:
                i = u, h = e, l = t;
                break;

              case 4:
                i = e, h = u, l = t;
                break;

              case 5:
                i = t, h = u, l = e;
            }
            return [ 255 * i, 255 * h, 255 * l ];
        }, c.cmyk.rgb = function(r) {
            var n, t, a, e = r[0] / 100, o = r[1] / 100, u = r[2] / 100, c = r[3] / 100;
            return n = 1 - Math.min(1, e * (1 - c) + c), t = 1 - Math.min(1, o * (1 - c) + c), 
            a = 1 - Math.min(1, u * (1 - c) + c), [ 255 * n, 255 * t, 255 * a ];
        }, c.xyz.rgb = function(r) {
            var n, t, a, e = r[0] / 100, o = r[1] / 100, u = r[2] / 100;
            return n = 3.2406 * e + -1.5372 * o + -.4986 * u, t = -.9689 * e + 1.8758 * o + .0415 * u, 
            a = .0557 * e + -.204 * o + 1.057 * u, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, 
            t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, 
            n = Math.min(Math.max(0, n), 1), t = Math.min(Math.max(0, t), 1), a = Math.min(Math.max(0, a), 1), 
            [ 255 * n, 255 * t, 255 * a ];
        }, c.xyz.lab = function(r) {
            var n, t, a, e = r[0], o = r[1], u = r[2];
            return e /= 95.047, o /= 100, u /= 108.883, e = e > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, 
            o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, 
            n = 116 * o - 16, t = 500 * (e - o), a = 200 * (o - u), [ n, t, a ];
        }, c.lab.xyz = function(r) {
            var n, t, a, e = r[0];
            n = r[1] / 500 + (t = (e + 16) / 116), a = t - r[2] / 200;
            var o = Math.pow(t, 3), u = Math.pow(n, 3), c = Math.pow(a, 3);
            return t = o > .008856 ? o : (t - 16 / 116) / 7.787, n = u > .008856 ? u : (n - 16 / 116) / 7.787, 
            a = c > .008856 ? c : (a - 16 / 116) / 7.787, n *= 95.047, t *= 100, a *= 108.883, 
            [ n, t, a ];
        }, c.lab.lch = function(r) {
            var n, t, a, e = r[0], o = r[1], u = r[2];
            return n = Math.atan2(u, o), (t = 360 * n / 2 / Math.PI) < 0 && (t += 360), a = Math.sqrt(o * o + u * u), 
            [ e, a, t ];
        }, c.lch.lab = function(r) {
            var n, t, a, e = r[0], o = r[1];
            return a = r[2] / 360 * 2 * Math.PI, n = o * Math.cos(a), t = o * Math.sin(a), [ e, n, t ];
        }, c.rgb.ansi16 = function(r) {
            var n = r[0], t = r[1], a = r[2], e = 1 in arguments ? arguments[1] : c.rgb.hsv(r)[2];
            if (0 === (e = Math.round(e / 50))) return 30;
            var o = 30 + (Math.round(a / 255) << 2 | Math.round(t / 255) << 1 | Math.round(n / 255));
            return 2 === e && (o += 60), o;
        }, c.hsv.ansi16 = function(r) {
            return c.rgb.ansi16(c.hsv.rgb(r), r[2]);
        }, c.rgb.ansi256 = function(r) {
            var n = r[0], t = r[1], a = r[2];
            return n === t && t === a ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(a / 255 * 5);
        }, c.ansi16.rgb = function(r) {
            var n = r % 10;
            if (0 === n || 7 === n) return r > 50 && (n += 3.5), n = n / 10.5 * 255, [ n, n, n ];
            var t = .5 * (1 + ~~(r > 50));
            return [ (1 & n) * t * 255, (n >> 1 & 1) * t * 255, (n >> 2 & 1) * t * 255 ];
        }, c.ansi256.rgb = function(r) {
            if (r >= 232) {
                var n = 10 * (r - 232) + 8;
                return [ n, n, n ];
            }
            r -= 16;
            var t;
            return [ Math.floor(r / 36) / 5 * 255, Math.floor((t = r % 36) / 6) / 5 * 255, t % 6 / 5 * 255 ];
        }, c.rgb.hex = function(r) {
            var n = (((255 & Math.round(r[0])) << 16) + ((255 & Math.round(r[1])) << 8) + (255 & Math.round(r[2]))).toString(16).toUpperCase();
            return "000000".substring(n.length) + n;
        }, c.hex.rgb = function(r) {
            var n = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!n) return [ 0, 0, 0 ];
            var t = n[0];
            3 === n[0].length && (t = t.split("").map(function(r) {
                return r + r;
            }).join(""));
            var a = parseInt(t, 16);
            return [ a >> 16 & 255, a >> 8 & 255, 255 & a ];
        }, c.rgb.hcg = function(r) {
            var n, t, a = r[0] / 255, e = r[1] / 255, o = r[2] / 255, u = Math.max(Math.max(a, e), o), c = Math.min(Math.min(a, e), o), s = u - c;
            return n = s < 1 ? c / (1 - s) : 0, t = s <= 0 ? 0 : u === a ? (e - o) / s % 6 : u === e ? 2 + (o - a) / s : 4 + (a - e) / s + 4, 
            t /= 6, t %= 1, [ 360 * t, 100 * s, 100 * n ];
        }, c.hsl.hcg = function(r) {
            var n = r[1] / 100, t = r[2] / 100, a = 1, e = 0;
            return (a = t < .5 ? 2 * n * t : 2 * n * (1 - t)) < 1 && (e = (t - .5 * a) / (1 - a)), 
            [ r[0], 100 * a, 100 * e ];
        }, c.hsv.hcg = function(r) {
            var n = r[1] / 100, t = r[2] / 100, a = n * t, e = 0;
            return a < 1 && (e = (t - a) / (1 - a)), [ r[0], 100 * a, 100 * e ];
        }, c.hcg.rgb = function(r) {
            var n = r[0] / 360, t = r[1] / 100, a = r[2] / 100;
            if (0 === t) return [ 255 * a, 255 * a, 255 * a ];
            var e = [ 0, 0, 0 ], o = n % 1 * 6, u = o % 1, c = 1 - u, s = 0;
            switch (Math.floor(o)) {
              case 0:
                e[0] = 1, e[1] = u, e[2] = 0;
                break;

              case 1:
                e[0] = c, e[1] = 1, e[2] = 0;
                break;

              case 2:
                e[0] = 0, e[1] = 1, e[2] = u;
                break;

              case 3:
                e[0] = 0, e[1] = c, e[2] = 1;
                break;

              case 4:
                e[0] = u, e[1] = 0, e[2] = 1;
                break;

              default:
                e[0] = 1, e[1] = 0, e[2] = c;
            }
            return s = (1 - t) * a, [ 255 * (t * e[0] + s), 255 * (t * e[1] + s), 255 * (t * e[2] + s) ];
        }, c.hcg.hsv = function(r) {
            var n = r[1] / 100, t = n + r[2] / 100 * (1 - n), a = 0;
            return t > 0 && (a = n / t), [ r[0], 100 * a, 100 * t ];
        }, c.hcg.hsl = function(r) {
            var n = r[1] / 100, t = r[2] / 100 * (1 - n) + .5 * n, a = 0;
            return t > 0 && t < .5 ? a = n / (2 * t) : t >= .5 && t < 1 && (a = n / (2 * (1 - t))), 
            [ r[0], 100 * a, 100 * t ];
        }, c.hcg.hwb = function(r) {
            var n = r[1] / 100, t = n + r[2] / 100 * (1 - n);
            return [ r[0], 100 * (t - n), 100 * (1 - t) ];
        }, c.hwb.hcg = function(r) {
            var n = r[1] / 100, t = 1 - r[2] / 100, a = t - n, e = 0;
            return a < 1 && (e = (t - a) / (1 - a)), [ r[0], 100 * a, 100 * e ];
        }, c.apple.rgb = function(r) {
            return [ r[0] / 65535 * 255, r[1] / 65535 * 255, r[2] / 65535 * 255 ];
        }, c.rgb.apple = function(r) {
            return [ r[0] / 255 * 65535, r[1] / 255 * 65535, r[2] / 255 * 65535 ];
        }, c.gray.rgb = function(r) {
            return [ r[0] / 100 * 255, r[0] / 100 * 255, r[0] / 100 * 255 ];
        }, c.gray.hsl = c.gray.hsv = function(r) {
            return [ 0, 0, r[0] ];
        }, c.gray.hwb = function(r) {
            return [ 0, 100, r[0] ];
        }, c.gray.cmyk = function(r) {
            return [ 0, 0, 0, r[0] ];
        }, c.gray.lab = function(r) {
            return [ r[0], 0, 0 ];
        }, c.gray.hex = function(r) {
            var n = 255 & Math.round(r[0] / 100 * 255), t = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
            return "000000".substring(t.length) + t;
        }, c.rgb.gray = function(r) {
            return [ (r[0] + r[1] + r[2]) / 3 / 255 * 100 ];
        };
    }, function(r) {
        return a({}[r], r);
    }), t(1554946070752, function(r, n, t) {
        function a() {
            for (var r = {}, n = Object.keys(c), t = n.length, a = 0; a < t; a++) r[n[a]] = {
                distance: -1,
                parent: null
            };
            return r;
        }
        function e(r) {
            var n = a(), t = [ r ];
            for (n[r].distance = 0; t.length; ) for (var e = t.pop(), o = Object.keys(c[e]), u = o.length, s = 0; s < u; s++) {
                var i = o[s], h = n[i];
                -1 === h.distance && (h.distance = n[e].distance + 1, h.parent = e, t.unshift(i));
            }
            return n;
        }
        function o(r, n) {
            return function(t) {
                return n(r(t));
            };
        }
        function u(r, n) {
            for (var t = [ n[r].parent, r ], a = c[n[r].parent][r], e = n[r].parent; n[e].parent; ) t.unshift(n[e].parent), 
            a = o(c[n[e].parent][e], a), e = n[e].parent;
            return a.conversion = t, a;
        }
        var c = r("./conversions");
        n.exports = function(r) {
            for (var n = e(r), t = {}, a = Object.keys(n), o = a.length, c = 0; c < o; c++) {
                var s = a[c];
                null !== n[s].parent && (t[s] = u(s, n));
            }
            return t;
        };
    }, function(r) {
        return a({
            "./conversions": 1554946070751
        }[r], r);
    }), a(1554946070750);
}();