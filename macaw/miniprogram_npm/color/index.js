var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var r = {}, o = function(o, n) {
        if (!r[o]) return require(n);
        if (!r[o].status) {
            var e = {
                exports: {}
            };
            r[o].status = 1, r[o].func(r[o].req, e, e.exports), "object" === t(e.exports) ? (Object.keys(e.exports).forEach(function(t) {
                r[o].m.exports[t] = e.exports[t];
            }), e.exports.__esModule && Object.defineProperty(r[o].m.exports, "__esModule", {
                value: !0
            })) : r[o].m.exports = e.exports;
        }
        return r[o].m.exports;
    };
    return function(t, o, n) {
        var e = {
            exports: {}
        };
        r[t] = {
            status: 0,
            func: o,
            req: n,
            m: e
        };
    }(1554946070755, function(t, r, o) {
        function n(t, r) {
            if (!(this instanceof n)) return new n(t, r);
            if (r && r in p && (r = null), r && !(r in u)) throw new Error("Unknown model: " + r);
            var o, e;
            if (void 0 === t) this.model = "rgb", this.color = [ 0, 0, 0 ], this.valpha = 1; else if (t instanceof n) this.model = t.model, 
            this.color = t.color.slice(), this.valpha = t.valpha; else if ("string" == typeof t) {
                var i = c.get(t);
                if (null === i) throw new Error("Unable to parse color from string: " + t);
                this.model = i.model, e = u[this.model].channels, this.color = i.value.slice(0, e), 
                this.valpha = "number" == typeof i.value[e] ? i.value[e] : 1;
            } else if (t.length) {
                this.model = r || "rgb", e = u[this.model].channels;
                var a = f.call(t, 0, e);
                this.color = s(a, e), this.valpha = "number" == typeof t[e] ? t[e] : 1;
            } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [ t >> 16 & 255, t >> 8 & 255, 255 & t ], 
            this.valpha = 1; else {
                this.valpha = 1;
                var l = Object.keys(t);
                "alpha" in t && (l.splice(l.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
                var h = l.sort().join("");
                if (!(h in v)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
                this.model = v[h];
                var m = u[this.model].labels, y = [];
                for (o = 0; o < m.length; o++) y.push(t[m[o]]);
                this.color = s(y);
            }
            if (b[this.model]) for (e = u[this.model].channels, o = 0; o < e; o++) {
                var g = b[this.model][o];
                g && (this.color[o] = g(this.color[o]));
            }
            this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
        }
        function e(t, r) {
            return Number(t.toFixed(r));
        }
        function i(t) {
            return function(r) {
                return e(r, t);
            };
        }
        function a(t, r, o) {
            return (t = Array.isArray(t) ? t : [ t ]).forEach(function(t) {
                (b[t] || (b[t] = []))[r] = o;
            }), t = t[0], function(n) {
                var e;
                return arguments.length ? (o && (n = o(n)), e = this[t](), e.color[r] = n, e) : (e = this[t]().color[r], 
                o && (e = o(e)), e);
            };
        }
        function l(t) {
            return function(r) {
                return Math.max(0, Math.min(t, r));
            };
        }
        function h(t) {
            return Array.isArray(t) ? t : [ t ];
        }
        function s(t, r) {
            for (var o = 0; o < r; o++) "number" != typeof t[o] && (t[o] = 0);
            return t;
        }
        var c = t("color-string"), u = t("color-convert"), f = [].slice, p = [ "keyword", "gray", "hex" ], v = {};
        Object.keys(u).forEach(function(t) {
            v[f.call(u[t].labels).sort().join("")] = t;
        });
        var b = {};
        n.prototype = {
            toString: function() {
                return this.string();
            },
            toJSON: function() {
                return this[this.model]();
            },
            string: function(t) {
                var r = this.model in c.to ? this : this.rgb(), o = 1 === (r = r.round("number" == typeof t ? t : 1)).valpha ? r.color : r.color.concat(this.valpha);
                return c.to[r.model](o);
            },
            percentString: function(t) {
                var r = this.rgb().round("number" == typeof t ? t : 1), o = 1 === r.valpha ? r.color : r.color.concat(this.valpha);
                return c.to.rgb.percent(o);
            },
            array: function() {
                return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha);
            },
            object: function() {
                for (var t = {}, r = u[this.model].channels, o = u[this.model].labels, n = 0; n < r; n++) t[o[n]] = this.color[n];
                return 1 !== this.valpha && (t.alpha = this.valpha), t;
            },
            unitArray: function() {
                var t = this.rgb().color;
                return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), 
                t;
            },
            unitObject: function() {
                var t = this.rgb().object();
                return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), 
                t;
            },
            round: function(t) {
                return t = Math.max(t || 0, 0), new n(this.color.map(i(t)).concat(this.valpha), this.model);
            },
            alpha: function(t) {
                return arguments.length ? new n(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha;
            },
            red: a("rgb", 0, l(255)),
            green: a("rgb", 1, l(255)),
            blue: a("rgb", 2, l(255)),
            hue: a([ "hsl", "hsv", "hsl", "hwb", "hcg" ], 0, function(t) {
                return (t % 360 + 360) % 360;
            }),
            saturationl: a("hsl", 1, l(100)),
            lightness: a("hsl", 2, l(100)),
            saturationv: a("hsv", 1, l(100)),
            value: a("hsv", 2, l(100)),
            chroma: a("hcg", 1, l(100)),
            gray: a("hcg", 2, l(100)),
            white: a("hwb", 1, l(100)),
            wblack: a("hwb", 2, l(100)),
            cyan: a("cmyk", 0, l(100)),
            magenta: a("cmyk", 1, l(100)),
            yellow: a("cmyk", 2, l(100)),
            black: a("cmyk", 3, l(100)),
            x: a("xyz", 0, l(100)),
            y: a("xyz", 1, l(100)),
            z: a("xyz", 2, l(100)),
            l: a("lab", 0, l(100)),
            a: a("lab", 1),
            b: a("lab", 2),
            keyword: function(t) {
                return arguments.length ? new n(t) : u[this.model].keyword(this.color);
            },
            hex: function(t) {
                return arguments.length ? new n(t) : c.to.hex(this.rgb().round().color);
            },
            rgbNumber: function() {
                var t = this.rgb().color;
                return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2];
            },
            luminosity: function() {
                for (var t = this.rgb().color, r = [], o = 0; o < t.length; o++) {
                    var n = t[o] / 255;
                    r[o] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
                }
                return .2126 * r[0] + .7152 * r[1] + .0722 * r[2];
            },
            contrast: function(t) {
                var r = this.luminosity(), o = t.luminosity();
                return r > o ? (r + .05) / (o + .05) : (o + .05) / (r + .05);
            },
            level: function(t) {
                var r = this.contrast(t);
                return r >= 7.1 ? "AAA" : r >= 4.5 ? "AA" : "";
            },
            isDark: function() {
                var t = this.rgb().color;
                return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
            },
            isLight: function() {
                return !this.isDark();
            },
            negate: function() {
                for (var t = this.rgb(), r = 0; r < 3; r++) t.color[r] = 255 - t.color[r];
                return t;
            },
            lighten: function(t) {
                var r = this.hsl();
                return r.color[2] += r.color[2] * t, r;
            },
            darken: function(t) {
                var r = this.hsl();
                return r.color[2] -= r.color[2] * t, r;
            },
            saturate: function(t) {
                var r = this.hsl();
                return r.color[1] += r.color[1] * t, r;
            },
            desaturate: function(t) {
                var r = this.hsl();
                return r.color[1] -= r.color[1] * t, r;
            },
            whiten: function(t) {
                var r = this.hwb();
                return r.color[1] += r.color[1] * t, r;
            },
            blacken: function(t) {
                var r = this.hwb();
                return r.color[2] += r.color[2] * t, r;
            },
            grayscale: function() {
                var t = this.rgb().color, r = .3 * t[0] + .59 * t[1] + .11 * t[2];
                return n.rgb(r, r, r);
            },
            fade: function(t) {
                return this.alpha(this.valpha - this.valpha * t);
            },
            opaquer: function(t) {
                return this.alpha(this.valpha + this.valpha * t);
            },
            rotate: function(t) {
                var r = this.hsl(), o = r.color[0];
                return o = (o + t) % 360, o = o < 0 ? 360 + o : o, r.color[0] = o, r;
            },
            mix: function(t, r) {
                var o = t.rgb(), e = this.rgb(), i = void 0 === r ? .5 : r, a = 2 * i - 1, l = o.alpha() - e.alpha(), h = ((a * l == -1 ? a : (a + l) / (1 + a * l)) + 1) / 2, s = 1 - h;
                return n.rgb(h * o.red() + s * e.red(), h * o.green() + s * e.green(), h * o.blue() + s * e.blue(), o.alpha() * i + e.alpha() * (1 - i));
            }
        }, Object.keys(u).forEach(function(t) {
            if (-1 === p.indexOf(t)) {
                var r = u[t].channels;
                n.prototype[t] = function() {
                    if (this.model === t) return new n(this);
                    if (arguments.length) return new n(arguments, t);
                    var o = "number" == typeof arguments[r] ? r : this.valpha;
                    return new n(h(u[this.model][t].raw(this.color)).concat(o), t);
                }, n[t] = function(o) {
                    return "number" == typeof o && (o = s(f.call(arguments), r)), new n(o, t);
                };
            }
        }), r.exports = n;
    }, function(t) {
        return o({}[t], t);
    }), o(1554946070755);
}();