var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var s = {}, t = function(t, n) {
        if (!s[t]) return require(n);
        if (!s[t].status) {
            var r = {
                exports: {}
            };
            s[t].status = 1, s[t].func(s[t].req, r, r.exports), "object" === e(r.exports) ? (Object.keys(r.exports).forEach(function(e) {
                s[t].m.exports[e] = r.exports[e];
            }), r.exports.__esModule && Object.defineProperty(s[t].m.exports, "__esModule", {
                value: !0
            })) : s[t].m.exports = r.exports;
        }
        return s[t].m.exports;
    };
    return function(e, t, n) {
        var r = {
            exports: {}
        };
        s[e] = {
            status: 0,
            func: t,
            req: n,
            m: r
        };
    }(1555573538280, function(s, t, n) {
        var t;
        !function(s) {
            function t(e, s) {
                var t = e.getTime();
                return e.setMonth(e.getMonth() + s), Math.round((e.getTime() - t) / q);
            }
            function n(e) {
                var s = e.getTime(), t = new Date(s);
                return t.setMonth(e.getMonth() + 1), Math.round((t.getTime() - s) / q);
            }
            function r(e) {
                var s = e.getTime(), t = new Date(s);
                return t.setFullYear(e.getFullYear() + 1), Math.round((t.getTime() - s) / q);
            }
            function o(e, s) {
                if (s = s instanceof Date || null !== s && isFinite(s) ? new Date(+s) : new Date(), 
                !e) return s;
                var t = +e.value || 0;
                return t ? (s.setTime(s.getTime() + t), s) : ((t = +e.milliseconds || 0) && s.setMilliseconds(s.getMilliseconds() + t), 
                (t = +e.seconds || 0) && s.setSeconds(s.getSeconds() + t), (t = +e.minutes || 0) && s.setMinutes(s.getMinutes() + t), 
                (t = +e.hours || 0) && s.setHours(s.getHours() + t), (t = +e.weeks || 0) && (t *= R), 
                (t += +e.days || 0) && s.setDate(s.getDate() + t), (t = +e.months || 0) && s.setMonth(s.getMonth() + t), 
                (t = +e.millennia || 0) && (t *= z), (t += +e.centuries || 0) && (t *= W), (t += +e.decades || 0) && (t *= P), 
                (t += +e.years || 0) && s.setFullYear(s.getFullYear() + t), s);
            }
            function i(e, s) {
                return S(e) + (1 === e ? p[s] : g[s]);
            }
            function u() {}
            function a(e, s) {
                switch (s) {
                  case "seconds":
                    if (e.seconds !== C || isNaN(e.minutes)) return;
                    e.minutes++, e.seconds = 0;

                  case "minutes":
                    if (e.minutes !== U || isNaN(e.hours)) return;
                    e.hours++, e.minutes = 0;

                  case "hours":
                    if (e.hours !== _ || isNaN(e.days)) return;
                    e.days++, e.hours = 0;

                  case "days":
                    if (e.days !== R || isNaN(e.weeks)) return;
                    e.weeks++, e.days = 0;

                  case "weeks":
                    if (e.weeks !== n(e.refMonth) / R || isNaN(e.months)) return;
                    e.months++, e.weeks = 0;

                  case "months":
                    if (e.months !== K || isNaN(e.years)) return;
                    e.years++, e.months = 0;

                  case "years":
                    if (e.years !== P || isNaN(e.decades)) return;
                    e.decades++, e.years = 0;

                  case "decades":
                    if (e.decades !== W || isNaN(e.centuries)) return;
                    e.centuries++, e.decades = 0;

                  case "centuries":
                    if (e.centuries !== z || isNaN(e.millennia)) return;
                    e.millennia++, e.centuries = 0;
                }
            }
            function d(e, s, t, n, r, o) {
                return e[t] >= 0 && (s += e[t], delete e[t]), (s /= r) + 1 <= 1 ? 0 : e[n] >= 0 ? (e[n] = +(e[n] + s).toFixed(o), 
                a(e, n), 0) : s;
            }
            function c(e, s) {
                var t = d(e, 0, "milliseconds", "seconds", O, s);
                if (t && (t = d(e, t, "seconds", "minutes", C, s)) && (t = d(e, t, "minutes", "hours", U, s)) && (t = d(e, t, "hours", "days", _, s)) && (t = d(e, t, "days", "weeks", R, s)) && (t = d(e, t, "weeks", "months", n(e.refMonth) / R, s)) && (t = d(e, t, "months", "years", r(e.refMonth) / n(e.refMonth), s)) && (t = d(e, t, "years", "decades", P, s)) && (t = d(e, t, "decades", "centuries", W, s)) && (t = d(e, t, "centuries", "millennia", z, s))) throw new Error("Fractional unit overflow");
            }
            function l(e) {
                var s;
                for (e.milliseconds < 0 ? (s = B(-e.milliseconds / O), e.seconds -= s, e.milliseconds += s * O) : e.milliseconds >= O && (e.seconds += G(e.milliseconds / O), 
                e.milliseconds %= O), e.seconds < 0 ? (s = B(-e.seconds / C), e.minutes -= s, e.seconds += s * C) : e.seconds >= C && (e.minutes += G(e.seconds / C), 
                e.seconds %= C), e.minutes < 0 ? (s = B(-e.minutes / U), e.hours -= s, e.minutes += s * U) : e.minutes >= U && (e.hours += G(e.minutes / U), 
                e.minutes %= U), e.hours < 0 ? (s = B(-e.hours / _), e.days -= s, e.hours += s * _) : e.hours >= _ && (e.days += G(e.hours / _), 
                e.hours %= _); e.days < 0; ) e.months--, e.days += t(e.refMonth, 1);
                e.days >= R && (e.weeks += G(e.days / R), e.days %= R), e.months < 0 ? (s = B(-e.months / K), 
                e.years -= s, e.months += s * K) : e.months >= K && (e.years += G(e.months / K), 
                e.months %= K), e.years >= P && (e.decades += G(e.years / P), e.years %= P, e.decades >= W && (e.centuries += G(e.decades / W), 
                e.decades %= W, e.centuries >= z && (e.millennia += G(e.centuries / z), e.centuries %= z)));
            }
            function m(e, s, n, r) {
                var o = 0;
                !(s & I) || o >= n ? (e.centuries += e.millennia * z, delete e.millennia) : e.millennia && o++, 
                !(s & H) || o >= n ? (e.decades += e.centuries * W, delete e.centuries) : e.centuries && o++, 
                !(s & j) || o >= n ? (e.years += e.decades * P, delete e.decades) : e.decades && o++, 
                !(s & Y) || o >= n ? (e.months += e.years * K, delete e.years) : e.years && o++, 
                !(s & L) || o >= n ? (e.months && (e.days += t(e.refMonth, e.months)), delete e.months, 
                e.days >= R && (e.weeks += G(e.days / R), e.days %= R)) : e.months && o++, !(s & E) || o >= n ? (e.days += e.weeks * R, 
                delete e.weeks) : e.weeks && o++, !(s & F) || o >= n ? (e.hours += e.days * _, delete e.days) : e.days && o++, 
                !(s & T) || o >= n ? (e.minutes += e.hours * U, delete e.hours) : e.hours && o++, 
                !(s & x) || o >= n ? (e.seconds += e.minutes * C, delete e.minutes) : e.minutes && o++, 
                !(s & b) || o >= n ? (e.milliseconds += e.seconds * O, delete e.seconds) : e.seconds && o++, 
                s & k && !(o >= n) || c(e, r);
            }
            function f(e, s, t, n, r, o) {
                var i = new Date();
                if (e.start = s = s || i, e.end = t = t || i, e.units = n, e.value = t.getTime() - s.getTime(), 
                e.value < 0) {
                    var u = t;
                    t = s, s = u;
                }
                e.refMonth = new Date(s.getFullYear(), s.getMonth(), 15, 12, 0, 0);
                try {
                    e.millennia = 0, e.centuries = 0, e.decades = 0, e.years = t.getFullYear() - s.getFullYear(), 
                    e.months = t.getMonth() - s.getMonth(), e.weeks = 0, e.days = t.getDate() - s.getDate(), 
                    e.hours = t.getHours() - s.getHours(), e.minutes = t.getMinutes() - s.getMinutes(), 
                    e.seconds = t.getSeconds() - s.getSeconds(), e.milliseconds = t.getMilliseconds() - s.getMilliseconds(), 
                    l(e), m(e, n, r, o);
                } finally {
                    delete e.refMonth;
                }
                return e;
            }
            function h(e) {
                return e & k ? O / 30 : e & b ? O : e & x ? O * C : e & T ? O * C * U : e & F ? O * C * U * _ : O * C * U * _ * R;
            }
            function y(s, t, n, r, i) {
                var a;
                n = +n || A, r = r > 0 ? r : NaN, i = i > 0 ? i < 20 ? Math.round(i) : 20 : 0;
                var d = null;
                "function" == typeof s ? (a = s, s = null) : s instanceof Date || (null !== s && isFinite(s) ? s = new Date(+s) : ("object" === (void 0 === d ? "undefined" : e(d)) && (d = s), 
                s = null));
                var c = null;
                if ("function" == typeof t ? (a = t, t = null) : t instanceof Date || (null !== t && isFinite(t) ? t = new Date(+t) : ("object" === (void 0 === t ? "undefined" : e(t)) && (c = t), 
                t = null)), d && (s = o(d, t)), c && (t = o(c, s)), !s && !t) return new u();
                if (!a) return f(new u(), s, t, n, r, i);
                var l, m = h(n), y = function() {
                    a(f(new u(), s, t, n, r, i), l);
                };
                return y(), l = setInterval(y, m);
            }
            var p, g, w, v, M, N, S, D, k = 1, b = 2, x = 4, T = 8, F = 16, E = 32, L = 64, Y = 128, j = 256, H = 512, I = 1024, A = Y | L | F | T | x | b, O = 1e3, C = 60, U = 60, _ = 24, q = _ * U * C * O, R = 7, K = 12, P = 10, W = 10, z = 10, B = Math.ceil, G = Math.floor;
            u.prototype.toString = function(e) {
                var s = D(this), t = s.length;
                if (!t) return e ? "" + e : M;
                if (1 === t) return s[0];
                var n = w + s.pop();
                return s.join(v) + n;
            }, u.prototype.toHTML = function(e, s) {
                e = e || "span";
                var t = D(this), n = t.length;
                if (!n) return (s = s || M) ? "<" + e + ">" + s + "</" + e + ">" : s;
                for (var r = 0; r < n; r++) t[r] = "<" + e + ">" + t[r] + "</" + e + ">";
                if (1 === n) return t[0];
                var o = w + t.pop();
                return t.join(v) + o;
            }, u.prototype.addTo = function(e) {
                return o(this, e);
            }, D = function(e) {
                var s = [], t = e.millennia;
                return t && s.push(N(t, 10)), (t = e.centuries) && s.push(N(t, 9)), (t = e.decades) && s.push(N(t, 8)), 
                (t = e.years) && s.push(N(t, 7)), (t = e.months) && s.push(N(t, 6)), (t = e.weeks) && s.push(N(t, 5)), 
                (t = e.days) && s.push(N(t, 4)), (t = e.hours) && s.push(N(t, 3)), (t = e.minutes) && s.push(N(t, 2)), 
                (t = e.seconds) && s.push(N(t, 1)), (t = e.milliseconds) && s.push(N(t, 0)), s;
            }, y.MILLISECONDS = k, y.SECONDS = b, y.MINUTES = x, y.HOURS = T, y.DAYS = F, y.WEEKS = E, 
            y.MONTHS = L, y.YEARS = Y, y.DECADES = j, y.CENTURIES = H, y.MILLENNIA = I, y.DEFAULTS = A, 
            y.ALL = I | H | j | Y | L | E | F | T | x | b | k;
            var J = y.setFormat = function(e) {
                if (e) {
                    if ("singular" in e || "plural" in e) {
                        var s = e.singular || [];
                        s.split && (s = s.split("|"));
                        var t = e.plural || [];
                        t.split && (t = t.split("|"));
                        for (var n = 0; n <= 10; n++) p[n] = s[n] || p[n], g[n] = t[n] || g[n];
                    }
                    "string" == typeof e.last && (w = e.last), "string" == typeof e.delim && (v = e.delim), 
                    "string" == typeof e.empty && (M = e.empty), "function" == typeof e.formatNumber && (S = e.formatNumber), 
                    "function" == typeof e.formatter && (N = e.formatter);
                }
            }, Q = y.resetFormat = function() {
                p = " millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"), 
                g = " milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"), 
                w = " and ", v = ", ", M = "", S = function(e) {
                    return e;
                }, N = i;
            };
            y.setLabels = function(e, s, t, n, r, o, i) {
                J({
                    singular: e,
                    plural: s,
                    last: t,
                    delim: n,
                    empty: r,
                    formatNumber: o,
                    formatter: i
                });
            }, y.resetLabels = Q, Q(), s && s.exports ? s.exports = y : "function" == typeof window.define && void 0 !== window.define.amd && window.define("countdown", [], function() {
                return y;
            });
        }(t);
    }, function(e) {
        return t({}[e], e);
    }), t(1555573538280);
}();