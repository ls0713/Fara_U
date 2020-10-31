var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    var r = {}, e = function(t, e, o) {
        var n = {
            exports: {}
        };
        r[t] = {
            status: 0,
            func: e,
            req: o,
            m: n
        };
    }, o = function(e, o) {
        if (!r[e]) return require(o);
        if (!r[e].status) {
            var n = {
                exports: {}
            };
            r[e].status = 1, r[e].func(r[e].req, n, n.exports), "object" === t(n.exports) ? (Object.keys(n.exports).forEach(function(t) {
                r[e].m.exports[t] = n.exports[t];
            }), n.exports.__esModule && Object.defineProperty(r[e].m.exports, "__esModule", {
                value: !0
            })) : r[e].m.exports = n.exports;
        }
        return r[e].m.exports;
    };
    return e(1555573538281, function(t, r, e) {
        var o = t("./lib/gifImg"), n = t("./lib/encode"), i = t("./lib/qrcode"), a = Math.ceil, u = Math.floor, s = Math.round;
        r.exports = {
            outputQRCodeBase64: function(t, r) {
                var e = n.utf16to8(t), a = r.ecc || "H", s = r.size || 256, f = r.padding || 0, h = r.color || "#000000", l = r.background || "#ffffff", g = new i(-1, a);
                g.addData(e), g.make();
                var c = (s - 2 * f) / g.getModuleCount(), d = f, m = s - f;
                return o(s, h, l, function(t, r) {
                    if (d <= t && t < m && d <= r && r < m) {
                        var e = u((t - d) / c), o = u((r - d) / c);
                        return g.isDark(o, e) ? 0 : 1;
                    }
                    return 1;
                });
            },
            drawQRCodeToCanvas: function(t, r) {
                var e = r.x || 0, o = r.y || 0, f = n.utf16to8(t), h = "string" == typeof r.ctx ? wx.createCanvasContext(r.ctx) : r.ctx, l = r.ecc || "H", g = "number" == typeof r.size ? u(r.size) : 256, c = r.padding || 0, d = r.color || "#000000", m = r.background || "#ffffff", v = new i(-1, l);
                v.addData(f), v.make();
                var w = v.getModuleCount(), B = (g - 2 * c) / w;
                h.setFillStyle(m), h.fillRect(e, o, g, g);
                for (var C = 0; C < w; C++) for (var p = 0; p < w; p++) {
                    var y = a((p + 1) * B) - u(p * B), E = a((C + 1) * B) - u(C * B);
                    h.setFillStyle(v.isDark(C, p) ? d : m), h.fillRect(e + s(p * B) + c, o + s(C * B) + c, y, E);
                }
                "string" == typeof r.ctx && h.draw();
            }
        };
    }, function(t) {
        return o({
            "./lib/gifImg": 1555573538282,
            "./lib/encode": 1555573538283,
            "./lib/qrcode": 1555573538284
        }[t], t);
    }), e(1555573538282, function(t, r, e) {
        var o = function(t, r, e) {
            var o = new Array(t * t), i = {};
            i.setPixel = function(r, e, n) {
                o[e * t + r] = n;
            }, i.write = function(o) {
                o.writeString("GIF87a"), o.writeShort(t), o.writeShort(t), o.writeByte(128), o.writeByte(0), 
                o.writeByte(0), o.writeByte("0x" + r[1] + r[2]), o.writeByte("0x" + r[3] + r[4]), 
                o.writeByte("0x" + r[5] + r[6]), o.writeByte("0x" + e[1] + e[2]), o.writeByte("0x" + e[3] + e[4]), 
                o.writeByte("0x" + e[5] + e[6]), o.writeString(","), o.writeShort(0), o.writeShort(0), 
                o.writeShort(t), o.writeShort(t), o.writeByte(0);
                var n = u(2);
                o.writeByte(2);
                for (var i = 0; n.length - i > 255; ) o.writeByte(255), o.writeBytes(n, i, 255), 
                i += 255;
                o.writeByte(n.length - i), o.writeBytes(n, i, n.length - i), o.writeByte(0), o.writeString(";");
            };
            var a = function(t) {
                var r = t, e = 0, o = 0, n = {};
                return n.write = function(t, n) {
                    if (t >>> n != 0) throw new Error("length over");
                    for (;e + n >= 8; ) r.writeByte(255 & (t << e | o)), n -= 8 - e, t >>>= 8 - e, o = 0, 
                    e = 0;
                    o |= t << e, e += n;
                }, n.flush = function() {
                    e > 0 && r.writeByte(o);
                }, n;
            }, u = function(t) {
                for (var r = 1 << t, e = 1 + (1 << t), i = t + 1, u = s(), f = 0; f < r; f++) u.add(String.fromCharCode(f));
                u.add(String.fromCharCode(r)), u.add(String.fromCharCode(e));
                var h = n(), l = a(h);
                l.write(r, i);
                var g = 0, c = String.fromCharCode(o[g]);
                for (g += 1; g < o.length; ) {
                    var d = String.fromCharCode(o[g]);
                    g += 1, u.contains(c + d) ? c += d : (l.write(u.indexOf(c), i), u.size() < 4095 && (u.size() == 1 << i && (i += 1), 
                    u.add(c + d)), c = d);
                }
                return l.write(u.indexOf(c), i), l.write(e, i), l.flush(), h.toByteArray();
            }, s = function() {
                var t = {}, r = 0, e = {};
                return e.add = function(o) {
                    if (e.contains(o)) throw new Error("dup key:" + o);
                    t[o] = r, r += 1;
                }, e.size = function() {
                    return r;
                }, e.indexOf = function(r) {
                    return t[r];
                }, e.contains = function(r) {
                    return void 0 !== t[r];
                }, e;
            };
            return i;
        }, n = function() {
            var t = new Array(), r = {};
            return r.writeByte = function(r) {
                t.push(255 & r);
            }, r.writeShort = function(t) {
                r.writeByte(t), r.writeByte(t >>> 8);
            }, r.writeBytes = function(t, e, o) {
                e = e || 0, o = o || t.length;
                for (var n = 0; n < o; n++) r.writeByte(t[n + e]);
            }, r.writeString = function(t) {
                for (var e = 0; e < t.length; e++) r.writeByte(t.charCodeAt(e));
            }, r.toByteArray = function() {
                return t;
            }, r.toString = function() {
                var r = "";
                r += "[";
                for (var e = 0; e < t.length; e++) e > 0 && (r += ","), r += t[e];
                return r += "]";
            }, r;
        }, i = function() {
            var t = 0, r = 0, e = 0, o = "", n = {}, i = function(t) {
                o += String.fromCharCode(a(63 & t));
            }, a = function(t) {
                if (t < 0) ; else {
                    if (t < 26) return 65 + t;
                    if (t < 52) return t - 26 + 97;
                    if (t < 62) return t - 52 + 48;
                    if (62 == t) return 43;
                    if (63 == t) return 47;
                }
                throw new Error("n:" + t);
            };
            return n.writeByte = function(o) {
                for (t = t << 8 | 255 & o, r += 8, e += 1; r >= 6; ) i(t >>> r - 6), r -= 6;
            }, n.flush = function() {
                if (r > 0 && (i(t << 6 - r), t = 0, r = 0), e % 3 != 0) for (var n = 3 - e % 3, a = 0; a < n; a++) o += "=";
            }, n.toString = function() {
                return o;
            }, n;
        };
        r.exports = function(t, r, e, a) {
            for (var u = o(t, r, e), s = 0; s < t; s++) for (var f = 0; f < t; f++) u.setPixel(f, s, a(f, s));
            var h = n();
            u.write(h);
            for (var l = i(), g = h.toByteArray(), c = 0; c < g.length; c++) l.writeByte(g[c]);
            l.flush();
            var d = "";
            return d += "data:image/gif;base64,", d += l;
        };
    }, function(t) {
        return o({}[t], t);
    }), e(1555573538283, function(t, r, e) {
        var o = {
            utf16to8: function(t) {
                var r = void 0, e = void 0, o = void 0, n = void 0;
                for (r = "", o = t.length, e = 0; e < o; e++) (n = t.charCodeAt(e)) >= 1 && n <= 127 ? r += t.charAt(e) : n > 2047 ? (r += String.fromCharCode(224 | n >> 12 & 15), 
                r += String.fromCharCode(128 | n >> 6 & 63), r += String.fromCharCode(128 | n >> 0 & 63)) : (r += String.fromCharCode(192 | n >> 6 & 31), 
                r += String.fromCharCode(128 | n >> 0 & 63));
                return r;
            },
            utf8to16: function(t) {
                var r = void 0, e = void 0, o = void 0, n = void 0, i = void 0, a = void 0;
                for (r = "", o = t.length, e = 0; e < o; ) switch ((n = t.charCodeAt(e++)) >> 4) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                    r += t.charAt(e - 1);
                    break;

                  case 12:
                  case 13:
                    i = t.charCodeAt(e++), r += String.fromCharCode((31 & n) << 6 | 63 & i);
                    break;

                  case 14:
                    i = t.charCodeAt(e++), a = t.charCodeAt(e++), r += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | (63 & a) << 0);
                }
                return r;
            }
        };
        r.exports = o;
    }, function(t) {
        return o({}[t], t);
    }), e(1555573538284, function(t, r, e) {
        function o(t) {
            this.mode = s.MODE_8BIT_BYTE, this.data = t;
        }
        function n(t, r) {
            this.typeNumber = t, this.errorCorrectLevel = f[r], this.modules = null, this.moduleCount = 0, 
            this.dataCache = null, this.dataList = new Array();
        }
        function i(t, r) {
            if (void 0 == t.length) throw new Error(t.length + "/" + r);
            for (var e = 0; e < t.length && 0 == t[e]; ) e++;
            this.num = new Array(t.length - e + r);
            for (var o = 0; o < t.length - e; o++) this.num[o] = t[o + e];
        }
        function a(t, r) {
            this.totalCount = t, this.dataCount = r;
        }
        function u() {
            this.buffer = new Array(), this.length = 0;
        }
        o.prototype = {
            getLength: function() {
                return this.data.length;
            },
            write: function(t) {
                for (var r = 0; r < this.data.length; r++) t.put(this.data.charCodeAt(r), 8);
            }
        }, n.prototype = {
            addData: function(t) {
                var r = new o(t);
                this.dataList.push(r), this.dataCache = null;
            },
            isDark: function(t, r) {
                if (t < 0 || this.moduleCount <= t || r < 0 || this.moduleCount <= r) throw new Error(t + "," + r);
                return this.modules[t][r];
            },
            getModuleCount: function() {
                return this.moduleCount;
            },
            make: function() {
                if (this.typeNumber < 1) {
                    var t = 1;
                    for (t = 1; t < 40; t++) {
                        for (var r = a.getRSBlocks(t, this.errorCorrectLevel), e = new u(), o = 0, n = 0; n < r.length; n++) o += r[n].dataCount;
                        for (n = 0; n < this.dataList.length; n++) {
                            var i = this.dataList[n];
                            e.put(i.mode, 4), e.put(i.getLength(), l.getLengthInBits(i.mode, t)), i.write(e);
                        }
                        if (e.getLengthInBits() <= 8 * o) break;
                    }
                    this.typeNumber = t;
                }
                this.makeImpl(!1, this.getBestMaskPattern());
            },
            makeImpl: function(t, r) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                for (var e = 0; e < this.moduleCount; e++) {
                    this.modules[e] = new Array(this.moduleCount);
                    for (var o = 0; o < this.moduleCount; o++) this.modules[e][o] = null;
                }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
                this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
                this.setupTimingPattern(), this.setupTypeInfo(t, r), this.typeNumber >= 7 && this.setupTypeNumber(t), 
                null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), 
                this.mapData(this.dataCache, r);
            },
            setupPositionProbePattern: function(t, r) {
                for (var e = -1; e <= 7; e++) if (!(t + e <= -1 || this.moduleCount <= t + e)) for (var o = -1; o <= 7; o++) r + o <= -1 || this.moduleCount <= r + o || (this.modules[t + e][r + o] = 0 <= e && e <= 6 && (0 == o || 6 == o) || 0 <= o && o <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= o && o <= 4);
            },
            getBestMaskPattern: function() {
                for (var t = 0, r = 0, e = 0; e < 8; e++) {
                    this.makeImpl(!0, e);
                    var o = l.getLostPoint(this);
                    (0 == e || t > o) && (t = o, r = e);
                }
                return r;
            },
            createMovieClip: function(t, r, e) {
                var o = t.createEmptyMovieClip(r, e);
                this.make();
                for (var n = 0; n < this.modules.length; n++) for (var i = 1 * n, a = 0; a < this.modules[n].length; a++) {
                    var u = 1 * a;
                    this.modules[n][a] && (o.beginFill(0, 100), o.moveTo(u, i), o.lineTo(u + 1, i), 
                    o.lineTo(u + 1, i + 1), o.lineTo(u, i + 1), o.endFill());
                }
                return o;
            },
            setupTimingPattern: function() {
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                for (var r = 8; r < this.moduleCount - 8; r++) null == this.modules[6][r] && (this.modules[6][r] = r % 2 == 0);
            },
            setupPositionAdjustPattern: function() {
                for (var t = l.getPatternPosition(this.typeNumber), r = 0; r < t.length; r++) for (var e = 0; e < t.length; e++) {
                    var o = t[r], n = t[e];
                    if (null == this.modules[o][n]) for (var i = -2; i <= 2; i++) for (var a = -2; a <= 2; a++) this.modules[o + i][n + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
                }
            },
            setupTypeNumber: function(t) {
                for (var r = l.getBCHTypeNumber(this.typeNumber), e = 0; e < 18; e++) {
                    o = !t && 1 == (r >> e & 1);
                    this.modules[Math.floor(e / 3)][e % 3 + this.moduleCount - 8 - 3] = o;
                }
                for (e = 0; e < 18; e++) {
                    var o = !t && 1 == (r >> e & 1);
                    this.modules[e % 3 + this.moduleCount - 8 - 3][Math.floor(e / 3)] = o;
                }
            },
            setupTypeInfo: function(t, r) {
                for (var e = this.errorCorrectLevel << 3 | r, o = l.getBCHTypeInfo(e), n = 0; n < 15; n++) {
                    i = !t && 1 == (o >> n & 1);
                    n < 6 ? this.modules[n][8] = i : n < 8 ? this.modules[n + 1][8] = i : this.modules[this.moduleCount - 15 + n][8] = i;
                }
                for (n = 0; n < 15; n++) {
                    var i = !t && 1 == (o >> n & 1);
                    n < 8 ? this.modules[8][this.moduleCount - n - 1] = i : n < 9 ? this.modules[8][15 - n - 1 + 1] = i : this.modules[8][15 - n - 1] = i;
                }
                this.modules[this.moduleCount - 8][8] = !t;
            },
            mapData: function(t, r) {
                for (var e = -1, o = this.moduleCount - 1, n = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
                    for (var u = 0; u < 2; u++) if (null == this.modules[o][a - u]) {
                        var s = !1;
                        i < t.length && (s = 1 == (t[i] >>> n & 1)), l.getMask(r, o, a - u) && (s = !s), 
                        this.modules[o][a - u] = s, -1 == --n && (i++, n = 7);
                    }
                    if ((o += e) < 0 || this.moduleCount <= o) {
                        o -= e, e = -e;
                        break;
                    }
                }
            }
        }, n.PAD0 = 236, n.PAD1 = 17, n.createData = function(t, r, e) {
            for (var o = a.getRSBlocks(t, r), i = new u(), s = 0; s < e.length; s++) {
                var f = e[s];
                i.put(f.mode, 4), i.put(f.getLength(), l.getLengthInBits(f.mode, t)), f.write(i);
            }
            for (var h = 0, s = 0; s < o.length; s++) h += o[s].dataCount;
            if (i.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * h + ")");
            for (i.getLengthInBits() + 4 <= 8 * h && i.put(0, 4); i.getLengthInBits() % 8 != 0; ) i.putBit(!1);
            for (;;) {
                if (i.getLengthInBits() >= 8 * h) break;
                if (i.put(n.PAD0, 8), i.getLengthInBits() >= 8 * h) break;
                i.put(n.PAD1, 8);
            }
            return n.createBytes(i, o);
        }, n.createBytes = function(t, r) {
            for (var e = 0, o = 0, n = 0, a = new Array(r.length), u = new Array(r.length), s = 0; s < r.length; s++) {
                var f = r[s].dataCount, h = r[s].totalCount - f;
                o = Math.max(o, f), n = Math.max(n, h), a[s] = new Array(f);
                for (v = 0; v < a[s].length; v++) a[s][v] = 255 & t.buffer[v + e];
                e += f;
                var g = l.getErrorCorrectPolynomial(h), c = new i(a[s], g.getLength() - 1).mod(g);
                u[s] = new Array(g.getLength() - 1);
                for (v = 0; v < u[s].length; v++) {
                    var d = v + c.getLength() - u[s].length;
                    u[s][v] = d >= 0 ? c.get(d) : 0;
                }
            }
            for (var m = 0, v = 0; v < r.length; v++) m += r[v].totalCount;
            for (var w = new Array(m), B = 0, v = 0; v < o; v++) for (s = 0; s < r.length; s++) v < a[s].length && (w[B++] = a[s][v]);
            for (v = 0; v < n; v++) for (s = 0; s < r.length; s++) v < u[s].length && (w[B++] = u[s][v]);
            return w;
        };
        for (var s = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, f = {
            M: 0,
            L: 1,
            H: 2,
            Q: 3
        }, h = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, l = {
            PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                for (var r = t << 10; l.getBCHDigit(r) - l.getBCHDigit(l.G15) >= 0; ) r ^= l.G15 << l.getBCHDigit(r) - l.getBCHDigit(l.G15);
                return (t << 10 | r) ^ l.G15_MASK;
            },
            getBCHTypeNumber: function(t) {
                for (var r = t << 12; l.getBCHDigit(r) - l.getBCHDigit(l.G18) >= 0; ) r ^= l.G18 << l.getBCHDigit(r) - l.getBCHDigit(l.G18);
                return t << 12 | r;
            },
            getBCHDigit: function(t) {
                for (var r = 0; 0 != t; ) r++, t >>>= 1;
                return r;
            },
            getPatternPosition: function(t) {
                return l.PATTERN_POSITION_TABLE[t - 1];
            },
            getMask: function(t, r, e) {
                switch (t) {
                  case h.PATTERN000:
                    return (r + e) % 2 == 0;

                  case h.PATTERN001:
                    return r % 2 == 0;

                  case h.PATTERN010:
                    return e % 3 == 0;

                  case h.PATTERN011:
                    return (r + e) % 3 == 0;

                  case h.PATTERN100:
                    return (Math.floor(r / 2) + Math.floor(e / 3)) % 2 == 0;

                  case h.PATTERN101:
                    return r * e % 2 + r * e % 3 == 0;

                  case h.PATTERN110:
                    return (r * e % 2 + r * e % 3) % 2 == 0;

                  case h.PATTERN111:
                    return (r * e % 3 + (r + e) % 2) % 2 == 0;

                  default:
                    throw new Error("bad maskPattern:" + t);
                }
            },
            getErrorCorrectPolynomial: function(t) {
                for (var r = new i([ 1 ], 0), e = 0; e < t; e++) r = r.multiply(new i([ 1, g.gexp(e) ], 0));
                return r;
            },
            getLengthInBits: function(t, r) {
                if (1 <= r && r < 10) switch (t) {
                  case s.MODE_NUMBER:
                    return 10;

                  case s.MODE_ALPHA_NUM:
                    return 9;

                  case s.MODE_8BIT_BYTE:
                  case s.MODE_KANJI:
                    return 8;

                  default:
                    throw new Error("mode:" + t);
                } else if (r < 27) switch (t) {
                  case s.MODE_NUMBER:
                    return 12;

                  case s.MODE_ALPHA_NUM:
                    return 11;

                  case s.MODE_8BIT_BYTE:
                    return 16;

                  case s.MODE_KANJI:
                    return 10;

                  default:
                    throw new Error("mode:" + t);
                } else {
                    if (!(r < 41)) throw new Error("type:" + r);
                    switch (t) {
                      case s.MODE_NUMBER:
                        return 14;

                      case s.MODE_ALPHA_NUM:
                        return 13;

                      case s.MODE_8BIT_BYTE:
                        return 16;

                      case s.MODE_KANJI:
                        return 12;

                      default:
                        throw new Error("mode:" + t);
                    }
                }
            },
            getLostPoint: function(t) {
                for (var r = t.getModuleCount(), e = 0, o = 0; o < r; o++) for (h = 0; h < r; h++) {
                    for (var n = 0, i = t.isDark(o, h), a = -1; a <= 1; a++) if (!(o + a < 0 || r <= o + a)) for (var u = -1; u <= 1; u++) h + u < 0 || r <= h + u || 0 == a && 0 == u || i == t.isDark(o + a, h + u) && n++;
                    n > 5 && (e += 3 + n - 5);
                }
                for (o = 0; o < r - 1; o++) for (h = 0; h < r - 1; h++) {
                    var s = 0;
                    t.isDark(o, h) && s++, t.isDark(o + 1, h) && s++, t.isDark(o, h + 1) && s++, t.isDark(o + 1, h + 1) && s++, 
                    0 != s && 4 != s || (e += 3);
                }
                for (o = 0; o < r; o++) for (h = 0; h < r - 6; h++) t.isDark(o, h) && !t.isDark(o, h + 1) && t.isDark(o, h + 2) && t.isDark(o, h + 3) && t.isDark(o, h + 4) && !t.isDark(o, h + 5) && t.isDark(o, h + 6) && (e += 40);
                for (h = 0; h < r; h++) for (o = 0; o < r - 6; o++) t.isDark(o, h) && !t.isDark(o + 1, h) && t.isDark(o + 2, h) && t.isDark(o + 3, h) && t.isDark(o + 4, h) && !t.isDark(o + 5, h) && t.isDark(o + 6, h) && (e += 40);
                for (var f = 0, h = 0; h < r; h++) for (o = 0; o < r; o++) t.isDark(o, h) && f++;
                return e += 10 * (Math.abs(100 * f / r / r - 50) / 5);
            }
        }, g = {
            glog: function(t) {
                if (t < 1) throw new Error("glog(" + t + ")");
                return g.LOG_TABLE[t];
            },
            gexp: function(t) {
                for (;t < 0; ) t += 255;
                for (;t >= 256; ) t -= 255;
                return g.EXP_TABLE[t];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, c = 0; c < 8; c++) g.EXP_TABLE[c] = 1 << c;
        for (c = 8; c < 256; c++) g.EXP_TABLE[c] = g.EXP_TABLE[c - 4] ^ g.EXP_TABLE[c - 5] ^ g.EXP_TABLE[c - 6] ^ g.EXP_TABLE[c - 8];
        for (c = 0; c < 255; c++) g.LOG_TABLE[g.EXP_TABLE[c]] = c;
        i.prototype = {
            get: function(t) {
                return this.num[t];
            },
            getLength: function() {
                return this.num.length;
            },
            multiply: function(t) {
                for (var r = new Array(this.getLength() + t.getLength() - 1), e = 0; e < this.getLength(); e++) for (var o = 0; o < t.getLength(); o++) r[e + o] ^= g.gexp(g.glog(this.get(e)) + g.glog(t.get(o)));
                return new i(r, 0);
            },
            mod: function(t) {
                if (this.getLength() - t.getLength() < 0) return this;
                for (var r = g.glog(this.get(0)) - g.glog(t.get(0)), e = new Array(this.getLength()), o = 0; o < this.getLength(); o++) e[o] = this.get(o);
                for (o = 0; o < t.getLength(); o++) e[o] ^= g.gexp(g.glog(t.get(o)) + r);
                return new i(e, 0).mod(t);
            }
        }, a.RS_BLOCK_TABLE = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], 
        a.getRSBlocks = function(t, r) {
            var e = a.getRsBlockTable(t, r);
            if (void 0 == e) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + r);
            for (var o = e.length / 3, n = new Array(), i = 0; i < o; i++) for (var u = e[3 * i + 0], s = e[3 * i + 1], f = e[3 * i + 2], h = 0; h < u; h++) n.push(new a(s, f));
            return n;
        }, a.getRsBlockTable = function(t, r) {
            switch (r) {
              case f.L:
                return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];

              case f.M:
                return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];

              case f.Q:
                return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];

              case f.H:
                return a.RS_BLOCK_TABLE[4 * (t - 1) + 3];

              default:
                return;
            }
        }, u.prototype = {
            get: function(t) {
                var r = Math.floor(t / 8);
                return 1 == (this.buffer[r] >>> 7 - t % 8 & 1);
            },
            put: function(t, r) {
                for (var e = 0; e < r; e++) this.putBit(1 == (t >>> r - e - 1 & 1));
            },
            getLengthInBits: function() {
                return this.length;
            },
            putBit: function(t) {
                var r = Math.floor(this.length / 8);
                this.buffer.length <= r && this.buffer.push(0), t && (this.buffer[r] |= 128 >>> this.length % 8), 
                this.length++;
            }
        }, r.exports = n;
    }, function(t) {
        return o({}[t], t);
    }), o(1555573538281);
}();