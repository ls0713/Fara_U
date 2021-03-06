var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e, i) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "object" == ("undefined" == typeof module ? "undefined" : t(module)) ? module.exports = i() : "function" == typeof define && define.amd ? define([], i) : "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) ? exports.F2 = i() : e.F2 = i();
}(void 0, function() {
    return function(t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
        }
        var i = {};
        return e.m = t, e.c = i, e.d = function(t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            });
        }, e.n = function(t) {
            var i = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return e.d(i, "a", i), i;
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 129);
    }([ function(t, e, i) {
        var n = i(43), r = {
            upperFirst: i(44),
            lowerFirst: i(45),
            isString: i(15),
            isNumber: i(13),
            isBoolean: i(46),
            isFunction: i(47),
            isDate: i(33),
            isArray: i(10),
            isNil: i(7),
            isObject: i(18),
            isPlainObject: i(28),
            deepMix: i(49),
            mix: i(16),
            each: i(3),
            isObjectValueEqual: function(t, e) {
                t = Object.assign({}, t), e = Object.assign({}, e);
                var i = Object.getOwnPropertyNames(t), n = Object.getOwnPropertyNames(e);
                if (i.length !== n.length) return !1;
                for (var r = 0, a = i.length; r < a; r++) {
                    var o = i[r];
                    if (t[o] !== e[o]) return !1;
                }
                return !0;
            },
            wrapBehavior: function(t, e) {
                if (t["_wrap_" + e]) return t["_wrap_" + e];
                var i = function(i) {
                    t[e](i);
                };
                return t["_wrap_" + e] = i, i;
            },
            getWrapBehavior: function(t, e) {
                return t["_wrap_" + e];
            },
            parsePadding: function(t) {
                var e, i, n, a;
                return r.isNumber(t) || r.isString(t) ? e = n = a = i = t : r.isArray(t) && (e = t[0], 
                i = r.isNil(t[1]) ? t[0] : t[1], n = r.isNil(t[2]) ? t[0] : t[2], a = r.isNil(t[3]) ? i : t[3]), 
                [ e, i, n, a ];
            },
            directionEnabled: function(t, e) {
                return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e);
            }
        };
        r.Array = {
            merge: function(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) e = e.concat(t[i]);
                return e;
            },
            values: function(t, e) {
                for (var i = [], n = {}, a = 0, o = t.length; a < o; a++) {
                    var s = t[a][e];
                    r.isNil(s) || (r.isArray(s) ? r.each(s, function(t) {
                        n[t] || (i.push(t), n[t] = !0);
                    }) : n[s] || (i.push(s), n[s] = !0));
                }
                return i;
            },
            firstValue: function(t, e) {
                for (var i = null, n = 0, a = t.length; n < a; n++) {
                    var o = t[n][e];
                    if (!r.isNil(o)) {
                        i = r.isArray(o) ? o[0] : o;
                        break;
                    }
                }
                return i;
            },
            group: function(t, e, i) {
                if (void 0 === i && (i = {}), !e) return [ t ];
                var n = r.Array.groupToMap(t, e), a = [];
                if (1 === e.length && i[e[0]]) {
                    var o = i[e[0]];
                    r.each(o, function(t) {
                        t = "_" + t, a.push(n[t]);
                    });
                } else for (var s in n) a.push(n[s]);
                return a;
            },
            groupToMap: function(t, e) {
                if (!e) return {
                    0: t
                };
                for (var i = {}, n = 0, r = t.length; n < r; n++) {
                    var a = t[n], o = function(t) {
                        for (var i = "_", n = 0, r = e.length; n < r; n++) i += t[e[n]] && t[e[n]].toString();
                        return i;
                    }(a);
                    i[o] ? i[o].push(a) : i[o] = [ a ];
                }
                return i;
            },
            remove: function(t, e) {
                if (t) {
                    var i = t.indexOf(e);
                    -1 !== i && t.splice(i, 1);
                }
            },
            getRange: function(t) {
                if (!t.length) return {
                    min: 0,
                    max: 0
                };
                var e = Math.max.apply(null, t);
                return {
                    min: Math.min.apply(null, t),
                    max: e
                };
            }
        }, r.mix(r, n), t.exports = r;
    }, function(t, e, i) {
        var n = i(42), r = i(0), a = {
            version: "3.3.2",
            trackable: !0,
            scales: {},
            widthRatio: {
                column: .5,
                rose: .999999,
                multiplePie: .75
            },
            lineDash: [ 4, 4 ]
        };
        a.setTheme = function(t) {
            r.deepMix(this, t);
        }, a.setTheme(n), t.exports = a;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                this._attrs = {
                    zIndex: 0,
                    visible: !0,
                    destroyed: !1,
                    isShape: !0,
                    attrs: {}
                };
            }, i.getType = function() {
                return this._attrs.type;
            }, i.drawInner = function(t) {
                var e = this, i = e.get("attrs");
                e.createPath(t);
                var n = t.globalAlpha;
                if (e.hasFill()) {
                    var a = i.fillOpacity;
                    r.isNil(a) || 1 === a ? t.fill() : (t.globalAlpha = a, t.fill(), t.globalAlpha = n);
                }
                if (e.hasStroke() && i.lineWidth > 0) {
                    var o = i.strokeOpacity;
                    r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke();
                }
            }, i.getBBox = function() {
                var t = this._attrs.bbox;
                return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, 
                t.height = t.maxY - t.minY), this._attrs.bbox = t), t;
            }, i.calculateBox = function() {
                return null;
            }, i.createPath = function() {}, e;
        }(i(25));
        t.exports = a;
    }, function(t, e, i) {
        var n = i(18), r = i(10);
        t.exports = function(t, e) {
            if (t) if (r(t)) for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++) ; else if (n(t)) for (var o in t) if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break;
        };
    }, function(t, e) {
        t.exports = {
            create: function() {
                return [ 0, 0 ];
            },
            length: function(t) {
                var e = t[0], i = t[1];
                return Math.sqrt(e * e + i * i);
            },
            normalize: function(t, e) {
                var i = this.length(e);
                return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t;
            },
            add: function(t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
            },
            sub: function(t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
            },
            scale: function(t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t;
            },
            dot: function(t, e) {
                return t[0] * e[0] + t[1] * e[1];
            },
            direction: function(t, e) {
                return t[0] * e[1] - e[0] * t[1];
            },
            angle: function(t, e) {
                var i = this.dot(t, e) / (this.length(t) * this.length(e));
                return Math.acos(i);
            },
            angleTo: function(t, e, i) {
                var n = this.angle(t, e), r = this.direction(t, e) >= 0;
                return i ? r ? 2 * Math.PI - n : n : r ? n : 2 * Math.PI - n;
            },
            zero: function(t) {
                return 0 === t[0] && 0 === t[1];
            },
            distance: function(t, e) {
                var i = e[0] - t[0], n = e[1] - t[1];
                return Math.sqrt(i * i + n * n);
            },
            clone: function(t) {
                return [ t[0], t[1] ];
            },
            min: function(t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
            },
            max: function(t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
            },
            transformMat2d: function(t, e, i) {
                var n = e[0], r = e[1];
                return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;
            }
        };
    }, function(t, e, i) {
        var n = {
            Canvas: i(68),
            Group: i(31),
            Shape: i(2),
            Matrix: i(23),
            Vector2: i(4)
        };
        i(70), i(71), i(72), i(73), i(74), i(75), i(76), i(77), i(78), t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        function r(t) {
            return a.isArray(t) ? t : a.isString(t) ? t.split("*") : [ t ];
        }
        var a = i(0), o = i(29), s = [ "color", "size", "shape" ], u = i(1), c = i(53), l = i(9), h = i(22), f = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                return {
                    type: null,
                    data: null,
                    attrs: {},
                    scales: {},
                    container: null,
                    styleOptions: null,
                    chart: null,
                    shapeType: "",
                    generatePoints: !1,
                    attrOptions: {},
                    sortable: !1,
                    startOnZero: !0,
                    visible: !0,
                    connectNulls: !1
                };
            }, i.init = function() {
                var t = this;
                t._initAttrs();
                var e = t._processData();
                t.get("adjust") && t._adjustData(e), t.set("dataArray", e);
            }, i._getGroupScales = function() {
                var t = this, e = [];
                return a.each(s, function(i) {
                    var n = t.getAttr(i);
                    if (n) {
                        var r = n.scales;
                        a.each(r, function(t) {
                            t && t.isCategory && -1 === e.indexOf(t) && e.push(t);
                        });
                    }
                }), e;
            }, i._groupData = function(t) {
                var e = this, i = e.get("colDefs"), n = e._getGroupScales();
                if (n.length) {
                    var r = {}, o = [];
                    return a.each(n, function(t) {
                        var e = t.field;
                        o.push(e), i && i[e] && i[e].values && (r[t.field] = i[e].values);
                    }), a.Array.group(t, o, r);
                }
                return [ t ];
            }, i._setAttrOptions = function(t, e) {
                this.get("attrOptions")[t] = e;
            }, i._createAttrOption = function(t, e, i, n) {
                var r = {};
                r.field = e, i ? a.isFunction(i) ? r.callback = i : r.values = i : r.values = n, 
                this._setAttrOptions(t, r);
            }, i._initAttrs = function() {
                var t = this, e = t.get("attrs"), i = t.get("attrOptions"), n = t.get("coord");
                for (var o in i) if (i.hasOwnProperty(o)) {
                    var s = i[o], u = a.upperFirst(o), l = r(s.field);
                    "position" === o && (s.coord = n);
                    for (var h = [], f = 0, p = l.length; f < p; f++) {
                        var g = l[f], d = t._createScale(g);
                        h.push(d);
                    }
                    if ("position" === o) {
                        var v = h[1];
                        "polar" === n.type && n.transposed && t.hasAdjust("stack") && v.values.length && v.change({
                            nice: !1,
                            min: 0,
                            max: Math.max.apply(null, v.values)
                        });
                    }
                    s.scales = h;
                    var y = new c[u](s);
                    e[o] = y;
                }
            }, i._createScale = function(t) {
                var e = this.get("scales"), i = e[t];
                return i || (i = this.get("chart").createScale(t), e[t] = i), i;
            }, i._processData = function() {
                for (var t = this, e = this.get("data"), i = [], n = this._groupData(e), r = 0, a = n.length; r < a; r++) {
                    var o = n[r], s = t._saveOrigin(o);
                    this.hasAdjust("dodge") && t._numberic(s), i.push(s);
                }
                return i;
            }, i._saveOrigin = function(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) {
                    var r = t[i], a = {};
                    for (var o in r) a[o] = r[o];
                    a._origin = r, e.push(a);
                }
                return e;
            }, i._numberic = function(t) {
                for (var e = this.getAttr("position").scales, i = 0, n = t.length; i < n; i++) for (var r = t[i], a = Math.min(2, e.length), o = 0; o < a; o++) {
                    var s = e[o];
                    if (s.isCategory) {
                        var u = s.field;
                        r[u] = s.translate(r[u]);
                    }
                }
            }, i._adjustData = function(t) {
                var e = this, i = e.get("adjust");
                if (i) {
                    var n = a.upperFirst(i.type);
                    if (!h[n]) throw new Error("not support such adjust : " + i);
                    var r = e.getXScale(), o = e.getYScale(), s = a.mix({
                        xField: r.field,
                        yField: o.field
                    }, i);
                    new h[n](s).processAdjust(t), "Stack" === n && e._updateStackRange(o.field, o, t);
                }
            }, i._updateStackRange = function(t, e, i) {
                for (var n = a.Array.merge(i), r = e.min, o = e.max, s = 0, u = n.length; s < u; s++) {
                    var c = n[s], l = Math.min.apply(null, c[t]), h = Math.max.apply(null, c[t]);
                    l < r && (r = l), h > o && (o = h);
                }
                (r < e.min || o > e.max) && e.change({
                    min: r,
                    max: o
                });
            }, i._sort = function(t) {
                var e = this, i = e.getXScale(), n = i.field, r = i.type;
                "identity" !== r && i.values.length > 1 && a.each(t, function(t) {
                    t.sort(function(t, e) {
                        return "timeCat" === r ? i._toTimeStamp(t._origin[n]) - i._toTimeStamp(e._origin[n]) : i.translate(t._origin[n]) - i.translate(e._origin[n]);
                    });
                }), e.set("hasSorted", !0), e.set("dataArray", t);
            }, i.paint = function() {
                var t = this, e = t.get("dataArray"), i = [], n = t.getShapeFactory();
                n.setCoord(t.get("coord")), t._beforeMapping(e);
                for (var r = 0, a = e.length; r < a; r++) {
                    var o = e[r];
                    o.length && (o = t._mapping(o), i.push(o), t.draw(o, n));
                }
                t.set("dataArray", i);
            }, i.getShapeFactory = function() {
                var t = this.get("shapeFactory");
                if (!t) {
                    var e = this.get("shapeType");
                    t = l.getShapeFactory(e), this.set("shapeFactory", t);
                }
                return t;
            }, i._mapping = function(t) {
                for (var e = this, i = e.get("attrs"), n = e.getYScale().field, r = [], o = 0, s = t.length; o < s; o++) {
                    var u = t[o], c = {};
                    c._origin = u._origin, c.points = u.points, c._originY = u[n];
                    for (var l in i) if (i.hasOwnProperty(l)) {
                        var h = i[l], f = h.names, p = e._getAttrValues(h, u);
                        if (f.length > 1) for (var g = 0, d = p.length; g < d; g++) {
                            var v = p[g];
                            c[f[g]] = a.isArray(v) && 1 === v.length ? v[0] : v;
                        } else c[f[0]] = 1 === p.length ? p[0] : p;
                    }
                    r.push(c);
                }
                return r;
            }, i._getAttrValues = function(t, e) {
                for (var i = t.scales, n = [], r = 0, a = i.length; r < a; r++) {
                    var o = i[r], s = o.field;
                    "identity" === o.type ? n.push(o.value) : n.push(e[s]);
                }
                return t.mapping.apply(t, n);
            }, i.getAttrValue = function(t, e) {
                var i = this.getAttr(t), n = null;
                return i && (n = this._getAttrValues(i, e)[0]), n;
            }, i._beforeMapping = function(t) {
                var e = this;
                e.get("sortable") && e._sort(t), e.get("generatePoints") && a.each(t, function(t) {
                    e._generatePoints(t);
                });
            }, i.isInCircle = function() {
                var t = this.get("coord");
                return t && t.isPolar;
            }, i.getCallbackCfg = function(t, e, i) {
                if (!t) return e;
                var n = {}, r = t.map(function(t) {
                    return i[t];
                });
                return a.each(e, function(t, e) {
                    a.isFunction(t) ? n[e] = t.apply(null, r) : n[e] = t;
                }), n;
            }, i.getDrawCfg = function(t) {
                var e = this, i = e.isInCircle(), n = {
                    origin: t,
                    x: t.x,
                    y: t.y,
                    color: t.color,
                    size: t.size,
                    shape: t.shape,
                    isInCircle: i,
                    opacity: t.opacity
                }, r = e.get("styleOptions");
                return r && r.style && (n.style = e.getCallbackCfg(r.fields, r.style, t._origin)), 
                e.get("generatePoints") && (n.points = t.points), i && (n.center = e.get("coord").center), 
                n;
            }, i.draw = function(t, e) {
                var i = this, n = i.get("container"), r = i.getYScale();
                a.each(t, function(t, o) {
                    if (!r || !a.isNil(t._origin[r.field])) {
                        t.index = o;
                        var s = i.getDrawCfg(t), u = t.shape;
                        i.drawShape(u, t, s, n, e);
                    }
                });
            }, i.drawShape = function(t, e, i, n, r) {
                var o = r.drawShape(t, i, n);
                o && a.each([].concat(o), function(t) {
                    t.set("origin", e);
                });
            }, i._generatePoints = function(t) {
                for (var e = this, i = e.getShapeFactory(), n = e.getAttr("shape"), r = 0, a = t.length; r < a; r++) {
                    var o = t[r], s = e.createShapePointsCfg(o), u = n ? e._getAttrValues(n, o) : null, c = i.getShapePoints(u, s);
                    o.points = c;
                }
            }, i.createShapePointsCfg = function(t) {
                var e, i = this.getXScale(), n = this.getYScale(), r = this._normalizeValues(t[i.field], i);
                return e = n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : .1, {
                    x: r,
                    y: e,
                    y0: n ? n.scale(this.getYMinValue()) : void 0
                };
            }, i.getYMinValue = function() {
                var t = this.getYScale(), e = t.min, i = t.max;
                return this.get("startOnZero") ? i <= 0 && e <= 0 ? i : e >= 0 ? e : 0 : e;
            }, i._normalizeValues = function(t, e) {
                var i = [];
                if (a.isArray(t)) for (var n = 0, r = t.length; n < r; n++) {
                    var o = t[n];
                    i.push(e.scale(o));
                } else i = e.scale(t);
                return i;
            }, i.getAttr = function(t) {
                return this.get("attrs")[t];
            }, i.getXScale = function() {
                return this.getAttr("position").scales[0];
            }, i.getYScale = function() {
                return this.getAttr("position").scales[1];
            }, i.hasAdjust = function(t) {
                return this.get("adjust") && this.get("adjust").type === t;
            }, i._getSnap = function(t, e, i) {
                var n, r = 0, a = this.getYScale().field;
                if (this.hasAdjust("stack") && t.field === a) {
                    n = [], i.forEach(function(t) {
                        n.push(t._originY);
                    });
                    for (var o = n.length; r < o && !(n[0][0] > e); r++) {
                        if (n[n.length - 1][1] <= e) {
                            r = n.length - 1;
                            break;
                        }
                        if (n[r][0] <= e && n[r][1] > e) break;
                    }
                } else {
                    (n = t.values).sort(function(t, e) {
                        return t - e;
                    });
                    for (var s = n.length; r < s && !((n[0] + n[1]) / 2 > e) && !((n[r - 1] + n[r]) / 2 <= e && (n[r + 1] + n[r]) / 2 > e); r++) if ((n[n.length - 2] + n[n.length - 1]) / 2 <= e) {
                        r = n.length - 1;
                        break;
                    }
                }
                return n[r];
            }, i.getSnapRecords = function(t) {
                var e = this, i = e.get("coord"), n = e.getXScale(), r = e.getYScale(), o = n.field, s = e.get("dataArray");
                this.get("hasSorted") || this._sort(s);
                var u = [], c = i.invertPoint(t), l = c.x;
                e.isInCircle() && !i.transposed && l > (1 + n.rangeMax()) / 2 && (l = n.rangeMin());
                var h = n.invert(l);
                n.isCategory || (h = e._getSnap(n, h));
                var f = [];
                if (s.forEach(function(t) {
                    t.forEach(function(t) {
                        var i = a.isNil(t._origin) ? t[o] : t._origin[o];
                        e._isEqual(i, h, n) && f.push(t);
                    });
                }), this.hasAdjust("stack") && i.isPolar && i.transposed && 1 === n.values.length) {
                    if (l >= 0 && l <= 1) {
                        var p = r.invert(c.y);
                        p = e._getSnap(r, p, f), f.forEach(function(t) {
                            (a.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && u.push(t);
                        });
                    }
                } else u = f;
                return u;
            }, i._isEqual = function(t, e, i) {
                return "timeCat" === i.type ? i._toTimeStamp(t) === e : e === t;
            }, i.position = function(t) {
                return this._setAttrOptions("position", {
                    field: t
                }), this;
            }, i.color = function(t, e) {
                return this._createAttrOption("color", t, e, u.colors), this;
            }, i.size = function(t, e) {
                return this._createAttrOption("size", t, e, u.sizes), this;
            }, i.shape = function(t, e) {
                var i = this.get("type"), n = u.shapes[i] || [];
                return this._createAttrOption("shape", t, e, n), this;
            }, i.style = function(t, e) {
                var i = this.get("styleOptions");
                i || (i = {}, this.set("styleOptions", i)), a.isObject(t) && (e = t, t = null);
                var n;
                return t && (n = r(t)), i.fields = n, i.style = e, this;
            }, i.adjust = function(t) {
                return a.isString(t) && (t = {
                    type: t
                }), this.set("adjust", t), this;
            }, i.animate = function(t) {
                return this.set("animateCfg", t), this;
            }, i.reset = function() {
                this.set("attrOptions", {}), this.set("adjust", null), this.clearInner();
            }, i.clearInner = function() {
                var t = this.get("container");
                t && (t.clear(), t.setMatrix([ 1, 0, 0, 1, 0, 0 ])), t && t.clear(), this.set("attrs", {}), 
                this.set("groupScales", null), this.set("xDistance", null), this.set("_width", null);
            }, i.clear = function() {
                this.clearInner(), this.set("scales", {});
            }, i.destroy = function() {
                this.clear(), t.prototype.destroy.call(this);
            }, i._display = function(t) {
                this.set("visible", t);
                var e = this.get("container"), i = e.get("canvas");
                e.set("visible", t), i.draw();
            }, i.show = function() {
                this._display(!0);
            }, i.hide = function() {
                this._display(!1);
            }, e;
        }(o);
        t.exports = f;
    }, function(t, e) {
        t.exports = function(t) {
            return null === t || void 0 === t;
        };
    }, function(t, e) {
        var i = {}.toString;
        t.exports = function(t, e) {
            return i.call(t) === "[object " + e + "]";
        };
    }, function(t, e, i) {
        var n = i(0), r = i(1), a = {}, o = {
            _coord: null,
            draw: function(t, e) {
                this.drawShape && this.drawShape(t, e);
            },
            setCoord: function(t) {
                this._coord = t;
            },
            parsePoint: function(t) {
                var e = this._coord;
                return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), 
                e.convertPoint(t);
            },
            parsePoints: function(t) {
                if (!t) return !1;
                var e = this, i = [];
                return t.forEach(function(t) {
                    i.push(e.parsePoint(t));
                }), i;
            }
        }, s = {
            defaultShapeType: null,
            setCoord: function(t) {
                this._coord = t;
            },
            getShape: function(t) {
                var e = this;
                n.isArray(t) && (t = t[0]);
                var i = e[t] || e[e.defaultShapeType];
                return i._coord = e._coord, i;
            },
            getShapePoints: function(t, e) {
                var i = this.getShape(t);
                return (i.getPoints || i.getShapePoints || this.getDefaultPoints)(e);
            },
            getDefaultPoints: function() {
                return [];
            },
            drawShape: function(t, e, i) {
                var n = this.getShape(t);
                return e.color || (e.color = r.colors[0]), n.draw(e, i);
            }
        };
        a.registerFactory = function(t, e) {
            var i = n.upperFirst(t), r = n.mix({}, s, e);
            return a[i] = r, r.name = t, r;
        }, a.registerShape = function(t, e, i) {
            var r = n.upperFirst(t), s = a[r], u = n.mix({}, o, i);
            return s[e] = u, u;
        }, a.registShape = a.registerShape, a.getShapeFactory = function(t) {
            var e = this;
            return t = t || "point", e[n.upperFirst(t)];
        }, t.exports = a;
    }, function(t, e, i) {
        var n = i(8), r = Array.isArray ? Array.isArray : function(t) {
            return n(t, "Array");
        };
        t.exports = r;
    }, function(t, e, i) {
        function n(t, e, i, n, a) {
            return {
                x: r(a, t.x, e.x, i.x, n.x),
                y: r(a, t.y, e.y, i.y, n.y)
            };
        }
        function r(t, e, i, n, r) {
            var a = t * t;
            return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * i + t * (-6 * i + 3 * i * t)) * t + (3 * n - 3 * n * t) * a + r * (a * t);
        }
        function a(t) {
            for (var e = 1 / 0, i = -1 / 0, r = 1 / 0, a = -1 / 0, o = {
                x: t[0],
                y: t[1]
            }, s = {
                x: t[2],
                y: t[3]
            }, u = {
                x: t[4],
                y: t[5]
            }, c = {
                x: t[6],
                y: t[7]
            }, l = 0; l < 100; l++) {
                var h = n(o, s, u, c, l / 100);
                h.x < e && (e = h.x), h.x > i && (i = h.x), h.y < r && (r = h.y), h.y > a && (a = h.y);
            }
            return {
                minX: e,
                minY: r,
                maxX: i,
                maxY: a
            };
        }
        var o = i(4), s = o.create(), u = o.create(), c = o.create();
        t.exports = {
            getBBoxFromPoints: function(t, e) {
                if (0 !== t.length) {
                    for (var i = t[0], n = i.x, r = i.x, a = i.y, o = i.y, s = t.length, u = 1; u < s; u++) i = t[u], 
                    n = Math.min(n, i.x), r = Math.max(r, i.x), a = Math.min(a, i.y), o = Math.max(o, i.y);
                    return e = e / 2 || 0, {
                        minX: n - e,
                        minY: a - e,
                        maxX: r + e,
                        maxY: o + e
                    };
                }
            },
            getBBoxFromLine: function(t, e, i, n, r) {
                return r = r / 2 || 0, {
                    minX: Math.min(t, i) - r,
                    minY: Math.min(e, n) - r,
                    maxX: Math.max(t, i) + r,
                    maxY: Math.max(e, n) + r
                };
            },
            getBBoxFromArc: function(t, e, i, n, r, a) {
                var l = Math.abs(n - r);
                if (l % Math.PI * 2 < 1e-4 && l > 1e-4) return {
                    minX: t - i,
                    minY: e - i,
                    maxX: t + i,
                    maxY: e + i
                };
                s[0] = Math.cos(n) * i + t, s[1] = Math.sin(n) * i + e, u[0] = Math.cos(r) * i + t, 
                u[1] = Math.sin(r) * i + e;
                var h = [ 0, 0 ], f = [ 0, 0 ];
                if (o.min(h, s, u), o.max(f, s, u), (n %= 2 * Math.PI) < 0 && (n += 2 * Math.PI), 
                (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), n > r && !a ? r += 2 * Math.PI : n < r && a && (n += 2 * Math.PI), 
                a) {
                    var p = r;
                    r = n, n = p;
                }
                for (var g = 0; g < r; g += Math.PI / 2) g > n && (c[0] = Math.cos(g) * i + t, c[1] = Math.sin(g) * i + e, 
                o.min(h, c, h), o.max(f, c, f));
                return {
                    minX: h[0],
                    minY: h[1],
                    maxX: f[0],
                    maxY: f[1]
                };
            },
            getBBoxFromBezierGroup: function(t, e) {
                for (var i = 1 / 0, n = -1 / 0, r = 1 / 0, o = -1 / 0, s = 0, u = t.length; s < u; s++) {
                    var c = a(t[s]);
                    c.minX < i && (i = c.minX), c.maxX > n && (n = c.maxX), c.minY < r && (r = c.minY), 
                    c.maxY > o && (o = c.maxY);
                }
                return e = e / 2 || 0, {
                    minX: i - e,
                    minY: r - e,
                    maxX: n + e,
                    maxY: o + e
                };
            }
        };
    }, function(t, e, i) {
        var n = i(0), r = {
            min: 0,
            median: .5,
            max: 1
        }, a = function() {
            function t(t) {
                this._initDefaultCfg(), n.deepMix(this, t);
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {}, e._getNormalizedValue = function(t, e) {
                return n.isNil(r[t]) ? e.scale(t) : r[t];
            }, e.parsePercentPoint = function(t, e) {
                var i = parseFloat(e[0]) / 100, n = parseFloat(e[1]) / 100, r = t.start, a = t.end, o = Math.abs(r.x - a.x), s = Math.abs(r.y - a.y);
                return {
                    x: o * i + Math.min(r.x, a.x),
                    y: s * n + Math.min(r.y, a.y)
                };
            }, e.parsePoint = function(t, e) {
                var i = this, r = i.xScale, a = i.yScales;
                if (n.isFunction(e) && (e = e(r, a)), n.isString(e[0]) && -1 !== e[0].indexOf("%")) return this.parsePercentPoint(t, e);
                var o = i._getNormalizedValue(e[0], r), s = i._getNormalizedValue(e[1], a[0]), u = t.convertPoint({
                    x: o,
                    y: s
                });
                return i.limitInPlot ? o >= 0 && o <= 1 && s >= 0 && s <= 1 ? u : null : u;
            }, e.render = function() {}, e.repaint = function() {
                this.remove();
                var t = this.coord, e = this.container, i = this.canvas;
                e && !e.isDestroyed() && (this.render(t, e), i.draw());
            }, e.remove = function() {
                var t = this.element;
                t && t.remove(!0);
            }, e.changeVisible = function(t) {
                var e = this;
                e.visible = t;
                var i = e.element;
                i && (i.set ? i.set("visible", t) : i.style.display = t ? "" : "none");
            }, t;
        }();
        t.exports = a;
    }, function(t, e, i) {
        var n = i(8);
        t.exports = function(t) {
            return n(t, "Number");
        };
    }, function(t, e, i) {
        var n = i(16), r = i(3), a = i(18), o = i(7), s = function() {
            function t(t) {
                this._initDefaultCfg(), n(this, t), this.init();
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {
                this.type = "base", this.formatter = null, this.range = [ 0, 1 ], this.ticks = null, 
                this.values = [];
            }, e.init = function() {}, e.getTicks = function() {
                var t = this, e = t.ticks, i = [];
                return r(e, function(e) {
                    var n;
                    n = a(e) ? e : {
                        text: t.getText(e),
                        tickValue: e,
                        value: t.scale(e)
                    }, i.push(n);
                }), i;
            }, e.getText = function(t, e) {
                var i = this.formatter;
                return t = i ? i(t, e) : t, !o(t) && t.toString || (t = ""), t.toString();
            }, e.rangeMin = function() {
                return this.range[0];
            }, e.rangeMax = function() {
                var t = this.range;
                return t[t.length - 1];
            }, e.invert = function(t) {
                return t;
            }, e.translate = function(t) {
                return t;
            }, e.scale = function(t) {
                return t;
            }, e.clone = function() {
                var t = this, e = t.constructor, i = {};
                return r(t, function(e, n) {
                    i[n] = t[n];
                }), new e(i);
            }, e.change = function(t) {
                return this.ticks = null, n(this, t), this.init(), this;
            }, t;
        }();
        t.exports = s;
    }, function(t, e, i) {
        var n = i(8);
        t.exports = function(t) {
            return n(t, "String");
        };
    }, function(t, e) {
        function i(t, e) {
            for (var i in e) e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i]);
        }
        t.exports = function(t, e, n, r) {
            return e && i(t, e), n && i(t, n), r && i(t, r), t;
        };
    }, function(t, e, i) {
        function n(t, e) {
            return r(e) ? e : t.invert(t.scale(e));
        }
        var r = i(15), a = i(10), o = i(16), s = i(3), u = function() {
            function t(t) {
                this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], 
                this.linear = null, o(this, t);
            }
            var e = t.prototype;
            return e._getAttrValue = function(t, e) {
                var i = this.values;
                if (t.isCategory && !this.linear) return i[t.translate(e) % i.length];
                var n = t.scale(e);
                return this.getLinearValue(n);
            }, e.getLinearValue = function(t) {
                var e = this.values, i = e.length - 1, n = Math.floor(i * t), r = i * t - n, a = e[n];
                return a + ((n === i ? a : e[n + 1]) - a) * r;
            }, e.callback = function(t) {
                var e = this, i = e.scales[0];
                return "identity" === i.type ? i.value : e._getAttrValue(i, t);
            }, e.getNames = function() {
                for (var t = this.scales, e = this.names, i = Math.min(t.length, e.length), n = [], r = 0; r < i; r++) n.push(e[r]);
                return n;
            }, e.getFields = function() {
                var t = this.scales, e = [];
                return s(t, function(t) {
                    e.push(t.field);
                }), e;
            }, e.getScale = function(t) {
                return this.scales[this.names.indexOf(t)];
            }, e.mapping = function() {
                for (var t = this.scales, e = this.callback, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                var a = n;
                if (e) {
                    for (var o = 0, s = n.length; o < s; o++) n[o] = this._toOriginParam(n[o], t[o]);
                    a = e.apply(this, n);
                }
                return a = [].concat(a);
            }, e._toOriginParam = function(t, e) {
                var i = t;
                if (!e.isLinear) if (a(t)) {
                    i = [];
                    for (var r = 0, o = t.length; r < o; r++) i.push(n(e, t[r]));
                } else i = n(e, t);
                return i;
            }, t;
        }();
        t.exports = u;
    }, function(e, i) {
        var n = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        };
        e.exports = function(t) {
            var e = void 0 === t ? "undefined" : n(t);
            return null !== t && "object" === e || "function" === e;
        };
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        function r(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function a(t) {
            var e = t.startAngle, i = t.endAngle;
            return !(!l.isNil(e) && !l.isNil(i) && i - e < 2 * Math.PI);
        }
        function o(t, e) {
            return t - e;
        }
        function s(t, e) {
            var i = !1;
            return l.each(t, function(t) {
                var n = [].concat(t.values), r = [].concat(e.values);
                t.type !== e.type || t.field !== e.field || n.sort(o).toString() !== r.sort(o).toString() || (i = !0);
            }), i;
        }
        var u = i(29), c = i(50), l = i(0), h = i(51), f = i(6), p = i(59), g = i(65), d = i(1), v = i(5).Canvas, y = i(26), x = function(t) {
            function e(e) {
                var i, n = r(r(i = t.call(this, e) || this));
                return l.each(f, function(t, e) {
                    var i = l.lowerFirst(e);
                    n[i] = function(e) {
                        var i = new t(e);
                        return n.addGeom(i), i;
                    };
                }), n._init(), i;
            }
            n(e, t), e.initPlugins = function() {
                return {
                    _plugins: [],
                    _cacheId: 0,
                    register: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            -1 === e.indexOf(t) && e.push(t);
                        }), this._cacheId++;
                    },
                    unregister: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            var i = e.indexOf(t);
                            -1 !== i && e.splice(i, 1);
                        }), this._cacheId++;
                    },
                    clear: function() {
                        this._plugins = [], this._cacheId++;
                    },
                    count: function() {
                        return this._plugins.length;
                    },
                    getAll: function() {
                        return this._plugins;
                    },
                    notify: function(t, e, i) {
                        var n, r, a, o, s, u = this.descriptors(t), c = u.length;
                        for (n = 0; n < c; ++n) if (r = u[n], a = r.plugin, "function" == typeof (s = a[e]) && (o = [ t ].concat(i || []), 
                        !1 === s.apply(a, o))) return !1;
                        return !0;
                    },
                    descriptors: function(t) {
                        var e = t._plugins || (t._plugins = {});
                        if (e.id === this._cacheId) return e.descriptors;
                        var i = [], n = [];
                        return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {
                            -1 === i.indexOf(t) && (i.push(t), n.push({
                                plugin: t
                            }));
                        }), e.descriptors = n, e.id = this._cacheId, n;
                    }
                };
            };
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                return {
                    id: null,
                    padding: d.padding,
                    data: null,
                    scales: {},
                    geoms: null,
                    colDefs: null,
                    pixelRatio: d.pixelRatio,
                    filters: null,
                    appendPadding: d.appendPadding
                };
            }, i._syncYScales = function() {
                var t = this.get("geoms"), e = [], i = [], n = [];
                l.each(t, function(t) {
                    var r = t.getYScale();
                    r.isLinear && (e.push(r), i.push(r.min), n.push(r.max));
                }), i = Math.min.apply(null, i), n = Math.max.apply(null, n), l.each(e, function(t) {
                    t.change({
                        min: i
                    }), t.change({
                        max: n
                    });
                });
            }, i._getFieldsForLegend = function() {
                var t = [], e = this.get("geoms");
                return l.each(e, function(e) {
                    var i = e.get("attrOptions").color;
                    if (i && i.field && l.isString(i.field)) {
                        var n = i.field.split("*");
                        l.each(n, function(e) {
                            -1 === t.indexOf(e) && t.push(e);
                        });
                    }
                }), t;
            }, i._createScale = function(t, e) {
                return this.get("scaleController").createScale(t, e);
            }, i._adjustScale = function() {
                var t = this, e = t.get("coord"), i = t.getXScale(), n = t.getYScales(), r = [];
                i && r.push(i), r = r.concat(n);
                var o = e.isPolar && a(e), s = t.get("scaleController").defs;
                l.each(r, function(t) {
                    if ((t.isCategory || t.isIdentity) && t.values && (!s[t.field] || !s[t.field].range)) {
                        var i, n = t.values.length;
                        if (1 === n) i = [ .5, 1 ]; else {
                            var r = 0;
                            i = o ? e.transposed ? [ (r = 1 / n * d.widthRatio.multiplePie) / 2, 1 - r / 2 ] : [ 0, 1 - 1 / n ] : [ r = 1 / n * 1 / 2, 1 - r ];
                        }
                        t.range = i;
                    }
                });
                for (var u = this.get("geoms"), c = 0; c < u.length; c++) {
                    var h = u[c];
                    if ("interval" === h.get("type")) {
                        var f = h.getYScale(), p = f.field, g = f.min, v = f.max, y = f.type;
                        s[p] && s[p].min || "time" === y || (g > 0 ? f.change({
                            min: 0
                        }) : v <= 0 && f.change({
                            max: 0
                        }));
                    }
                }
            }, i._removeGeoms = function() {
                for (var t = this.get("geoms"); t.length > 0; ) t.shift().destroy();
            }, i._clearGeoms = function() {
                for (var t = this.get("geoms"), e = 0, i = t.length; e < i; e++) t[e].clear();
            }, i._clearInner = function() {
                this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this, "clearInner"), 
                this.get("axisController") && this.get("axisController").clear();
            }, i._execFilter = function(t) {
                var e = this.get("filters");
                return e && (t = t.filter(function(t) {
                    var i = !0;
                    return l.each(e, function(e, n) {
                        if (e && !(i = e(t[n], t))) return !1;
                    }), i;
                })), t;
            }, i._initGeoms = function(t) {
                for (var e = this.get("coord"), i = this.get("filteredData"), n = this.get("colDefs"), r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    o.set("data", i), o.set("coord", e), o.set("colDefs", n), o.init();
                }
            }, i._initCoord = function() {
                var t = this.get("plotRange"), e = l.mix({
                    type: "cartesian"
                }, this.get("coordCfg"), {
                    plot: t
                }), i = e.type, n = new (0, h[l.upperFirst(i)])(e);
                this.set("coord", n);
            }, i._initLayout = function() {
                var t = this.get("_padding");
                t || (t = this.get("margin") || this.get("padding"), t = l.parsePadding(t));
                var e = "auto" === t[0] ? 0 : t[0], i = "auto" === t[1] ? 0 : t[1], n = "auto" === t[2] ? 0 : t[2], r = "auto" === t[3] ? 0 : t[3], a = this.get("width"), o = this.get("height"), s = new c({
                    start: {
                        x: r,
                        y: e
                    },
                    end: {
                        x: a - i,
                        y: o - n
                    }
                });
                this.set("plotRange", s), this.set("plot", s);
            }, i._initCanvas = function() {
                var t = this;
                try {
                    var i = new v({
                        el: t.get("el") || t.get("id"),
                        context: t.get("context"),
                        pixelRatio: t.get("pixelRatio"),
                        width: t.get("width"),
                        height: t.get("height"),
                        fontFamily: d.fontFamily
                    });
                    t.set("canvas", i), t.set("width", i.get("width")), t.set("height", i.get("height"));
                } catch (t) {
                    throw t;
                }
                e.plugins.notify(t, "afterCanvasInit"), t._initLayout();
            }, i._initLayers = function() {
                var t = this.get("canvas");
                this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({
                    zIndex: 10
                })), this.set("frontPlot", t.addGroup({
                    zIndex: 20
                }));
            }, i._init = function() {
                var t = this;
                t._initCanvas(), t._initLayers(), t.set("geoms", []), t.set("scaleController", new p()), 
                t.set("axisController", new g({
                    frontPlot: t.get("frontPlot").addGroup({
                        className: "axisContainer"
                    }),
                    backPlot: t.get("backPlot").addGroup({
                        className: "axisContainer"
                    }),
                    chart: t
                })), e.plugins.notify(t, "init");
            }, i.source = function(t, e) {
                return this.set("data", t), e && this.scale(e), this;
            }, i.scale = function(t, e) {
                var i = this.get("colDefs") || {};
                return l.isObject(t) ? l.mix(i, t) : i[t] = e, this.set("colDefs", i), this.get("scaleController").defs = i, 
                this;
            }, i.axis = function(t, e) {
                var i = this.get("axisController");
                return t ? (i.axisCfg = i.axisCfg || {}, i.axisCfg[t] = e) : i.axisCfg = null, this;
            }, i.coord = function(t, e) {
                var i;
                return l.isObject(t) ? i = t : (i = e || {}).type = t || "cartesian", this.set("coordCfg", i), 
                this;
            }, i.filter = function(t, e) {
                var i = this.get("filters") || {};
                i[t] = e, this.set("filters", i);
            }, i.render = function() {
                var t = this.get("canvas"), i = this.get("geoms"), n = this.get("data") || [], r = this._execFilter(n);
                this.set("filteredData", r), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), 
                this._initGeoms(i), this.get("syncY") && this._syncYScales(), this._adjustScale(), 
                e.plugins.notify(this, "beforeGeomDraw"), this._renderAxis();
                var a = this.get("middlePlot");
                if (this.get("limitInPlot") && !a.attr("clip")) {
                    var o = this.get("coord"), s = y.getClip(o);
                    s.set("canvas", a.get("canvas")), a.attr("clip", s);
                }
                for (var u = 0, c = i.length; u < c; u++) i[u].paint();
                return e.plugins.notify(this, "afterGeomDraw"), t.sort(), this.get("frontPlot").sort(), 
                e.plugins.notify(this, "beforeCanvasDraw"), t.draw(), this;
            }, i.clear = function() {
                return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), 
                this.set("filters", null), this.set("isUpdate", !1), this.set("_padding", null), 
                this.get("canvas").draw(), this;
            }, i.repaint = function() {
                this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), 
                this.render();
            }, i.changeData = function(t) {
                this.set("data", t), e.plugins.notify(this, "changeData"), this.set("_padding", null), 
                this.repaint();
            }, i.changeSize = function(t, e) {
                return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), 
                this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this;
            }, i.destroy = function() {
                this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), 
                this._interactions && l.each(this._interactions, function(t) {
                    t.destroy();
                }), t.prototype.destroy.call(this);
            }, i.getPosition = function(t) {
                var e = this, i = e.get("coord"), n = e.getXScale(), r = e.getYScales()[0], a = n.field, o = n.scale(t[a]), s = r.field, u = r.scale(t[s]);
                return i.convertPoint({
                    x: o,
                    y: u
                });
            }, i.getRecord = function(t) {
                var e = this, i = e.get("coord"), n = e.getXScale(), r = e.getYScales()[0], a = i.invertPoint(t), o = {};
                return o[n.field] = n.invert(a.x), o[r.field] = r.invert(a.y), o;
            }, i.getSnapRecords = function(t) {
                var e = this.get("geoms")[0], i = [];
                return e && (i = e.getSnapRecords(t)), i;
            }, i.createScale = function(t) {
                var e = this.get("data"), i = this.get("filteredData");
                i.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = i);
                var n = this.get("scales");
                return n[t] || (n[t] = this._createScale(t, e)), n[t];
            }, i.addGeom = function(t) {
                var e = this.get("geoms"), i = this.get("middlePlot");
                e.push(t), t.set("chart", this), t.set("container", i.addGroup());
            }, i.getXScale = function() {
                return this.get("geoms")[0].getXScale();
            }, i.getYScales = function() {
                var t = this.get("geoms"), e = [];
                return l.each(t, function(t) {
                    var i = t.getYScale();
                    -1 === e.indexOf(i) && e.push(i);
                }), e;
            }, i.getLegendItems = function() {
                if (this.get("legendItems")) return this.get("legendItems");
                var t = {}, e = [], i = this.get("geoms");
                return l.each(i, function(i) {
                    var n = i.getAttr("color");
                    if (n) {
                        var r = n.getScale("color");
                        if ("identity" !== r.type && !s(e, r)) {
                            e.push(r);
                            var a = r.field, o = r.getTicks(), u = [];
                            l.each(o, function(t) {
                                var e = t.text, i = t.value, a = r.invert(i), o = {
                                    fill: n.mapping(a).join("") || d.defaultColor,
                                    radius: 3,
                                    symbol: "circle",
                                    stroke: "#fff"
                                };
                                u.push({
                                    name: e,
                                    dataValue: a,
                                    checked: !0,
                                    marker: o
                                });
                            }), t[a] = u;
                        }
                    }
                }), this.set("legendItems", t), t;
            }, i.registerPlugins = function(t) {
                var i = this, n = i.get("plugins") || [];
                l.isArray(n) || (n = [ n ]), [].concat(t).forEach(function(t) {
                    -1 === n.indexOf(t) && (t.init && t.init(i), n.push(t));
                }), e.plugins._cacheId++, i.set("plugins", n);
            }, i._renderAxis = function() {
                var t = this.get("axisController"), i = this.getXScale(), n = this.getYScales(), r = this.get("coord");
                e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, i, n);
            }, i._isAutoPadding = function() {
                if (this.get("_padding")) return !1;
                var t = this.get("padding");
                return l.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t;
            }, i._updateLayout = function(t) {
                var e = this.get("width"), i = this.get("height"), n = {
                    x: t[3],
                    y: t[0]
                }, r = {
                    x: e - t[1],
                    y: i - t[2]
                }, a = this.get("plot"), o = this.get("coord");
                a.reset(n, r), o.reset(a);
            }, e;
        }(u);
        x.plugins = x.initPlugins(), t.exports = x;
    }, function(t, e, i) {
        var n = i(0), r = {
            splitPoints: function(t) {
                var e = [], i = t.x, r = t.y;
                return (r = n.isArray(r) ? r : [ r ]).forEach(function(t, r) {
                    var a = {
                        x: n.isArray(i) ? i[r] : i,
                        y: t
                    };
                    e.push(a);
                }), e;
            },
            splitArray: function(t, e, i) {
                if (!t.length) return [];
                var r, a = [], o = [];
                return n.each(t, function(t) {
                    r = t._origin ? t._origin[e] : t[e], i ? n.isNil(r) || o.push(t) : n.isArray(r) && n.isNil(r[0]) || n.isNil(r) ? o.length && (a.push(o), 
                    o = []) : o.push(t);
                }), o.length && a.push(o), a;
            }
        };
        t.exports = r;
    }, function(t, e, i) {
        var n = i(0), r = function() {
            function t(t) {
                this._initDefaultCfg(), n.mix(this, t);
                var e, i;
                this.plot ? (e = this.plot.bl, i = this.plot.tr, this.start = e, this.end = i) : (e = this.start, 
                i = this.end), this.init(e, i);
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {}, e.init = function() {}, e.convertPoint = function(t) {
                return t;
            }, e.invertPoint = function(t) {
                return t;
            }, e.reset = function(t) {
                this.plot = t;
                var e = t.bl, i = t.tr;
                this.start = e, this.end = i, this.init(e, i);
            }, t;
        }();
        t.exports = r;
    }, function(t, e, i) {
        var n = i(16), r = function() {
            function t(t) {
                this._initDefaultCfg(), n(this, t);
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {
                this.adjustNames = [ "x", "y" ];
            }, e.processAdjust = function() {}, t;
        }();
        t.exports = r;
    }, function(t, e) {
        var i = {
            multiply: function(t, e) {
                return [ t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5] ];
            },
            scale: function(t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[0], t[2] = e[2] * i[1], t[3] = e[3] * i[1], 
                t[4] = e[4], t[5] = e[5], t;
            },
            rotate: function(t, e, i) {
                var n = Math.cos(i), r = Math.sin(i), a = e[0] * n + e[2] * r, o = e[1] * n + e[3] * r, s = e[0] * -r + e[2] * n, u = e[1] * -r + e[3] * n;
                return t[0] = a, t[1] = o, t[2] = s, t[3] = u, t[4] = e[4], t[5] = e[5], t;
            },
            translate: function(t, e, i) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * i[0] + e[2] * i[1], 
                t[5] = e[5] + e[1] * i[0] + e[3] * i[1], t;
            },
            transform: function(t, e) {
                for (var n = [].concat(t), r = 0, a = e.length; r < a; r++) {
                    var o = e[r];
                    switch (o[0]) {
                      case "t":
                        i.translate(n, n, [ o[1], o[2] ]);
                        break;

                      case "s":
                        i.scale(n, n, [ o[1], o[2] ]);
                        break;

                      case "r":
                        i.rotate(n, n, o[1]);
                    }
                }
                return n;
            }
        };
        t.exports = i;
    }, function(t, e, i) {
        var n = i(0), r = i(1), a = i(4), o = function() {
            function t(t) {
                this._initDefaultCfg(), n.mix(this, t), this.draw();
            }
            var e = t.prototype;
            return e._initDefaultCfg = function() {
                this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, 
                this.backContainer = null, this.gridPoints = [];
            }, e.draw = function() {
                var t = this.line, e = this.tickLine, i = this.label, n = this.grid;
                n && this.drawGrid(n), e && this.drawTicks(e), t && this.drawLine(t), i && this.drawLabels();
            }, e.drawTicks = function(t) {
                var e = this, i = e.ticks, r = t.length, a = e.getContainer(t.top);
                n.each(i, function(i) {
                    var o = e.getOffsetPoint(i.value), s = e.getSidePoint(o, r);
                    a.addShape("line", {
                        className: "axis-tick",
                        attrs: n.mix({
                            x1: o.x,
                            y1: o.y,
                            x2: s.x,
                            y2: s.y
                        }, t)
                    })._id = e._id + "-ticks";
                });
            }, e.drawLabels = function() {
                var t = this, e = t.labelOffset, i = t.labels;
                n.each(i, function(i) {
                    var r = t.getContainer(i.get("top")), a = t.getOffsetPoint(i.get("value")), o = t.getSidePoint(a, e), s = o.x, u = o.y;
                    i.attr(n.mix({
                        x: s,
                        y: u
                    }, t.getTextAlignInfo(a, e), i.get("textStyle"))), i._id = t._id + "-" + i.attr("text"), 
                    r.add(i);
                });
            }, e.drawLine = function() {}, e.drawGrid = function(t) {
                var e = this, i = e.gridPoints, o = e.ticks, s = t, u = i.length;
                n.each(i, function(i, c) {
                    if (n.isFunction(t)) {
                        var l = o[c] || {}, h = t(l.text, c, u);
                        s = h ? n.mix({}, r._defaultAxis.grid, h) : null;
                    }
                    if (s) {
                        var f, p = s.type, g = i.points, d = e.getContainer(s.top);
                        if ("arc" === p) {
                            var v = e.center, y = e.startAngle, x = e.endAngle, m = a.length([ g[0].x - v.x, g[0].y - v.y ]);
                            f = d.addShape("Arc", {
                                className: "axis-grid",
                                attrs: n.mix({
                                    x: v.x,
                                    y: v.y,
                                    startAngle: y,
                                    endAngle: x,
                                    r: m
                                }, s)
                            });
                        } else f = d.addShape("Polyline", {
                            className: "axis-grid",
                            attrs: n.mix({
                                points: g
                            }, s)
                        });
                        f._id = i._id;
                    }
                });
            }, e.getOffsetPoint = function() {}, e.getAxisVector = function() {}, e.getOffsetVector = function(t, e) {
                var i = this, n = i.getAxisVector(t), r = a.normalize([], n), o = i.offsetFactor, s = [ -1 * r[1] * o, r[0] * o ];
                return a.scale([], s, e);
            }, e.getSidePoint = function(t, e) {
                var i = this.getOffsetVector(t, e);
                return {
                    x: t.x + i[0],
                    y: t.y + i[1]
                };
            }, e.getTextAlignInfo = function(t, e) {
                var i, n, r = this.getOffsetVector(t, e);
                return i = r[0] > 0 ? "left" : r[0] < 0 ? "right" : "center", n = r[1] > 0 ? "top" : r[1] < 0 ? "bottom" : "middle", 
                {
                    textAlign: i,
                    textBaseline: n
                };
            }, e.getContainer = function(t) {
                var e = this.frontContainer, i = this.backContainer;
                return t ? e : i;
            }, t;
        }();
        t.exports = o;
    }, function(t, e, i) {
        function n(t) {
            return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];
        }
        var r = i(0), a = i(23), o = i(4), s = i(69), u = {
            stroke: "strokeStyle",
            fill: "fillStyle",
            opacity: "globalAlpha"
        }, c = [ "fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash" ], l = [ "circle", "sector", "polygon", "rect", "polyline" ], h = function() {
            function t(t) {
                this._initProperties(), r.mix(this._attrs, t);
                var e = this._attrs.attrs;
                e && this.initAttrs(e), this.initTransform();
            }
            var e = t.prototype;
            return e._initProperties = function() {
                this._attrs = {
                    zIndex: 0,
                    visible: !0,
                    destroyed: !1
                };
            }, e.get = function(t) {
                return this._attrs[t];
            }, e.set = function(t, e) {
                this._attrs[t] = e;
            }, e.isGroup = function() {
                return this.get("isGroup");
            }, e.isShape = function() {
                return this.get("isShape");
            }, e.initAttrs = function(t) {
                this.attr(r.mix(this.getDefaultAttrs(), t));
            }, e.getDefaultAttrs = function() {
                return {};
            }, e._setAttr = function(t, e) {
                var i = this._attrs.attrs;
                if ("clip" === t) e = this._setAttrClip(e); else {
                    var n = u[t];
                    n && (i[n] = e);
                }
                i[t] = e;
            }, e._getAttr = function(t) {
                return this._attrs.attrs[t];
            }, e._setAttrClip = function(t) {
                return t && l.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), 
                t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null;
            }, e.attr = function(t, e) {
                var i = this;
                if (i.get("destroyed")) return null;
                var n = arguments.length;
                if (0 === n) return i._attrs.attrs;
                if (r.isObject(t)) {
                    this._attrs.bbox = null;
                    for (var a in t) i._setAttr(a, t[a]);
                    return i._afterAttrsSet && i._afterAttrsSet(), i;
                }
                return 2 === n ? (this._attrs.bbox = null, i._setAttr(t, e), i._afterAttrsSet && i._afterAttrsSet(), 
                i) : i._getAttr(t);
            }, e.getParent = function() {
                return this.get("parent");
            }, e.draw = function(t) {
                this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), 
                this.restoreContext(t));
            }, e.setContext = function(t) {
                var e = this._attrs.attrs.clip;
                t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), 
                this.resetTransform(t);
            }, e.restoreContext = function(t) {
                t.restore();
            }, e.resetContext = function(t) {
                var e = this._attrs.attrs;
                if (!this._attrs.isGroup) for (var i in e) if (c.indexOf(i) > -1) {
                    var n = e[i];
                    "fillStyle" !== i && "strokeStyle" !== i || (n = s.parseStyle(n, this, t)), "lineDash" === i && t.setLineDash && r.isArray(n) ? t.setLineDash(n) : t[i] = n;
                }
            }, e.hasFill = function() {
                return this.get("canFill") && this._attrs.attrs.fillStyle;
            }, e.hasStroke = function() {
                return this.get("canStroke") && this._attrs.attrs.strokeStyle;
            }, e.drawInner = function() {}, e.show = function() {
                return this.set("visible", !0), this;
            }, e.hide = function() {
                return this.set("visible", !1), this;
            }, e.isVisible = function() {
                return this.get("visible");
            }, e._removeFromParent = function() {
                var t = this.get("parent");
                if (t) {
                    var e = t.get("children");
                    r.Array.remove(e, this);
                }
                return this;
            }, e.remove = function(t) {
                t ? this.destroy() : this._removeFromParent();
            }, e.destroy = function() {
                if (this.get("destroyed")) return null;
                this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0);
            }, e.getBBox = function() {
                return {
                    minX: 0,
                    maxX: 0,
                    minY: 0,
                    maxY: 0,
                    width: 0,
                    height: 0
                };
            }, e.initTransform = function() {
                var t = this._attrs.attrs || {};
                t.matrix || (t.matrix = [ 1, 0, 0, 1, 0, 0 ]), this._attrs.attrs = t;
            }, e.getMatrix = function() {
                return this._attrs.attrs.matrix;
            }, e.setMatrix = function(t) {
                this._attrs.attrs.matrix = [ t[0], t[1], t[2], t[3], t[4], t[5] ];
            }, e.transform = function(t) {
                var e = this._attrs.attrs.matrix;
                return this._attrs.attrs.matrix = a.transform(e, t), this;
            }, e.setTransform = function(t) {
                return this._attrs.attrs.matrix = [ 1, 0, 0, 1, 0, 0 ], this.transform(t);
            }, e.translate = function(t, e) {
                var i = this._attrs.attrs.matrix;
                a.translate(i, i, [ t, e ]);
            }, e.rotate = function(t) {
                var e = this._attrs.attrs.matrix;
                a.rotate(e, e, t);
            }, e.scale = function(t, e) {
                var i = this._attrs.attrs.matrix;
                a.scale(i, i, [ t, e ]);
            }, e.moveTo = function(t, e) {
                var i = this._attrs.x || 0, n = this._attrs.y || 0;
                this.translate(t - i, e - n), this.set("x", t), this.set("y", e);
            }, e.apply = function(t) {
                var e = this._attrs.attrs.matrix;
                return o.transformMat2d(t, t, e), this;
            }, e.resetTransform = function(t) {
                var e = this._attrs.attrs.matrix;
                n(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
            }, e.isDestroyed = function() {
                return this.get("destroyed");
            }, t;
        }();
        t.exports = h;
    }, function(t, e, i) {
        var n = i(5).Shape;
        t.exports = {
            getClip: function(t) {
                var e, i = t.start, r = t.end, a = r.x - i.x, o = Math.abs(r.y - i.y);
                if (t.isPolar) {
                    var s = t.circleRadius, u = t.center, c = t.startAngle, l = t.endAngle;
                    e = new n.Sector({
                        attrs: {
                            x: u.x,
                            y: u.y,
                            r: s,
                            r0: 0,
                            startAngle: c,
                            endAngle: l
                        }
                    });
                } else e = new n.Rect({
                    attrs: {
                        x: i.x,
                        y: r.y - 10,
                        width: a,
                        height: o + 20
                    }
                });
                return e.isClip = !0, e;
            },
            isPointInPlot: function(t, e) {
                var i = t.x, n = t.y, r = e.tl, a = e.tr, o = e.br;
                return i >= r.x && i <= a.x && n >= r.y && n <= o.y;
            }
        };
    }, function(t, e, i) {
        var n = i(7);
        t.exports = function(t) {
            return n(t) ? "" : t.toString();
        };
    }, function(t, e, i) {
        var n = i(48), r = i(8);
        t.exports = function(t) {
            if (!n(t) || !r(t, "Object")) return !1;
            if (null === Object.getPrototypeOf(t)) return !0;
            for (var e = t; null !== Object.getPrototypeOf(e); ) e = Object.getPrototypeOf(e);
            return Object.getPrototypeOf(t) === e;
        };
    }, function(t, e, i) {
        var n = i(0), r = function() {
            function t(t) {
                var e = {}, i = this.getDefaultCfg();
                this._attrs = e, n.mix(e, i, t);
            }
            var e = t.prototype;
            return e.getDefaultCfg = function() {
                return {};
            }, e.get = function(t) {
                return this._attrs[t];
            }, e.set = function(t, e) {
                this._attrs[t] = e;
            }, e.destroy = function() {
                this._attrs = {}, this.destroyed = !0;
            }, t;
        }();
        t.exports = r;
    }, function(t, e, i) {
        function n(t) {
            return function(e, i) {
                var n = t(e, i);
                return 0 === n ? e[s] - i[s] : n;
            };
        }
        var r = i(0), a = i(2), o = {}, s = "_INDEX";
        t.exports = {
            getGroupClass: function() {},
            getChildren: function() {
                return this.get("children");
            },
            addShape: function(t, e) {
                void 0 === e && (e = {});
                var i = this.get("canvas"), n = o[t];
                n || (n = r.upperFirst(t), o[t] = n), e.canvas = i, "Text" === n && i && i.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || i.get("fontFamily"));
                var s = new a[n](e);
                return this.add(s), s;
            },
            addGroup: function(t) {
                var e = this.get("canvas"), i = this.getGroupClass();
                (t = r.mix({}, t)).canvas = e, t.parent = this;
                var n = new i(t);
                return this.add(n), n;
            },
            contain: function(t) {
                return this.get("children").indexOf(t) > -1;
            },
            sort: function() {
                for (var t = this.get("children"), e = 0, i = t.length; e < i; e++) t[e][s] = e;
                return t.sort(n(function(t, e) {
                    return t.get("zIndex") - e.get("zIndex");
                })), this;
            },
            clear: function() {
                for (var t = this.get("children"); 0 !== t.length; ) t[t.length - 1].remove(!0);
                return this;
            },
            add: function(t) {
                var e = this, i = e.get("children");
                r.isArray(t) || (t = [ t ]);
                for (var n = 0, a = t.length; n < a; n++) {
                    var o = t[n], s = o.get("parent");
                    if (s) {
                        var u = s.get("children");
                        r.Array.remove(u, o);
                    }
                    e._setEvn(o), i.push(o);
                }
                return e;
            },
            _setEvn: function(t) {
                var e = this;
                t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas;
                var i = t._attrs.attrs.clip;
                if (i && (i.set("parent", e), i.set("context", e.get("context"))), t._attrs.isGroup) for (var n = t._attrs.children, r = 0, a = n.length; r < a; r++) t._setEvn(n[r]);
            }
        };
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(25), o = i(30), s = i(4), u = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                this._attrs = {
                    zIndex: 0,
                    visible: !0,
                    destroyed: !1,
                    isGroup: !0,
                    children: []
                };
            }, i.drawInner = function(t) {
                for (var e = this.get("children"), i = 0, n = e.length; i < n; i++) e[i].draw(t);
                return this;
            }, i.getBBox = function() {
                for (var t = 1 / 0, e = -1 / 0, i = 1 / 0, n = -1 / 0, r = this.get("children"), a = 0, o = r.length; a < o; a++) {
                    var u = r[a];
                    if (u.get("visible")) {
                        var c = u.getBBox();
                        if (!c) continue;
                        var l = [ c.minX, c.minY ], h = [ c.minX, c.maxY ], f = [ c.maxX, c.minY ], p = [ c.maxX, c.maxY ], g = u.attr("matrix");
                        s.transformMat2d(l, l, g), s.transformMat2d(h, h, g), s.transformMat2d(f, f, g), 
                        s.transformMat2d(p, p, g), t = Math.min(l[0], h[0], f[0], p[0], t), e = Math.max(l[0], h[0], f[0], p[0], e), 
                        i = Math.min(l[1], h[1], f[1], p[1], i), n = Math.max(l[1], h[1], f[1], p[1], n);
                    }
                }
                return {
                    minX: t,
                    minY: i,
                    maxX: e,
                    maxY: n,
                    x: t,
                    y: i,
                    width: e - t,
                    height: n - i
                };
            }, i.destroy = function() {
                this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this));
            }, e;
        }(a);
        r.mix(u.prototype, o, {
            getGroupClass: function() {
                return u;
            }
        }), t.exports = u;
    }, function(t, e, i) {
        function n(t) {
            var e = {
                strokeStyle: t.color
            };
            return t.size >= 0 && (e.lineWidth = t.size), a.mix(e, t.style), a.mix({}, u.shape.line, e);
        }
        function r(t, e, i, n) {
            var r = t.points;
            if (r.length && a.isArray(r[0].y)) {
                for (var o = [], u = [], c = 0, l = r.length; c < l; c++) {
                    var h = r[c], f = s.splitPoints(h);
                    u.push(f[0]), o.push(f[1]);
                }
                return t.isInCircle && (o.push(o[0]), u.push(u[0])), t.isStack ? e.addShape("Polyline", {
                    className: "line",
                    attrs: a.mix({
                        points: o,
                        smooth: n
                    }, i)
                }) : [ e.addShape("Polyline", {
                    className: "line",
                    attrs: a.mix({
                        points: o,
                        smooth: n
                    }, i)
                }), e.addShape("Polyline", {
                    className: "line",
                    attrs: a.mix({
                        points: u,
                        smooth: n
                    }, i)
                }) ];
            }
            return t.isInCircle && r.push(r[0]), e.addShape("Polyline", {
                className: "line",
                attrs: a.mix({
                    points: r,
                    smooth: n
                }, i)
            });
        }
        var a = i(0), o = i(9), s = i(20), u = i(1), c = o.registerFactory("line", {
            defaultShapeType: "line"
        }), l = [ "line", "smooth", "dash" ];
        a.each(l, function(t) {
            o.registerShape("line", t, {
                draw: function(e, i) {
                    var a = "smooth" === t, o = n(e);
                    return "dash" === t && (o.lineDash = u.lineDash), r(e, i, o, a);
                }
            });
        }), t.exports = c;
    }, function(t, e, i) {
        var n = i(8);
        t.exports = function(t) {
            return n(t, "Date");
        };
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(14), a = i(35), o = i(3), s = i(13), u = i(15), c = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, 
                this.isRounding = !0;
            }, i.init = function() {
                var t = this, e = t.values, i = t.tickCount;
                if (o(e, function(t, i) {
                    e[i] = t.toString();
                }), !t.ticks) {
                    var n = e;
                    i && (n = a({
                        maxCount: i,
                        data: e,
                        isRounding: t.isRounding
                    }).ticks), this.ticks = n;
                }
            }, i.getText = function(e) {
                return -1 === this.values.indexOf(e) && s(e) && (e = this.values[Math.round(e)]), 
                t.prototype.getText.call(this, e);
            }, i.translate = function(t) {
                var e = this.values.indexOf(t);
                return -1 === e && s(t) ? e = t : -1 === e && (e = NaN), e;
            }, i.scale = function(t) {
                var e, i = this.rangeMin(), n = this.rangeMax();
                return (u(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, 
                i + e * (n - i);
            }, i.invert = function(t) {
                if (u(t)) return t;
                var e = this.rangeMin(), i = this.rangeMax();
                t < e && (t = e), t > i && (t = i);
                var n = (t - e) / (i - e), r = Math.round(n * (this.values.length - 1)) % this.values.length;
                return r = r || 0, this.values[r];
            }, e;
        }(r);
        r.Cat = c, t.exports = c;
    }, function(t, e, i) {
        function n(t) {
            var e = [];
            return a(t, function(t) {
                e = e.concat(t);
            }), e;
        }
        function r(t, e) {
            var i;
            for (i = e; i > 0 && t % i != 0; i--) ;
            if (1 === i) for (i = e; i > 0 && (t - 1) % i != 0; i--) ;
            return i;
        }
        var a = i(3);
        t.exports = function(t) {
            var e, i = {}, a = [], o = t.isRounding, s = n(t.data), u = s.length, c = t.maxCount || 8;
            if (o ? 2 === (e = r(u - 1, c - 1) + 1) ? e = c : e < c - 4 && (e = c - 4) : e = c, 
            !o && u <= e + e / 2) a = [].concat(s); else {
                for (var l = parseInt(u / (e - 1), 10), h = s.map(function(t, e) {
                    return e % l == 0 ? s.slice(e, e + l) : null;
                }).filter(function(t) {
                    return t;
                }), f = 1, p = h.length; f < p && (o ? f * l < u - l : f < e - 1); f++) a.push(h[f][0]);
                if (s.length) {
                    a.unshift(s[0]);
                    var g = s[u - 1];
                    -1 === a.indexOf(g) && a.push(g);
                }
            }
            return i.categories = s, i.ticks = a, i;
        };
    }, function(e, i) {
        e.exports = {
            requestAnimationFrame: "object" == ("undefined" == typeof window ? "undefined" : t(window)) && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                return setTimeout(t, 16);
            }
        };
    }, function(t, e, i) {
        function n(t) {
            return [ t.x, t.y ];
        }
        function r(t, e, i, r) {
            var o, s, u, c, l, h, f, p, g = [], d = !!r;
            if (d) {
                for (u = [ 1 / 0, 1 / 0 ], c = [ -1 / 0, -1 / 0 ], p = 0, f = t.length; p < f; p++) l = n(t[p]), 
                a.min(u, u, l), a.max(c, c, l);
                a.min(u, u, r[0]), a.max(c, c, r[1]);
            }
            for (p = 0, h = t.length; p < h; p++) {
                if (l = n(t[p]), i) o = n(t[p ? p - 1 : h - 1]), s = n(t[(p + 1) % h]); else {
                    if (0 === p || p === h - 1) {
                        g.push([ l[0], l[1] ]);
                        continue;
                    }
                    o = n(t[p - 1]), s = n(t[p + 1]);
                }
                var v = a.sub([], s, o);
                a.scale(v, v, e);
                var y = a.distance(l, o), x = a.distance(l, s), m = y + x;
                0 !== m && (y /= m, x /= m);
                var _ = a.scale([], v, -y), S = a.scale([], v, x), b = a.add([], l, _), P = a.add([], l, S);
                d && (a.max(b, b, u), a.min(b, b, c), a.max(P, P, u), a.min(P, P, c)), g.push([ b[0], b[1] ]), 
                g.push([ P[0], P[1] ]);
            }
            return i && g.push(g.shift()), g;
        }
        var a = i(4);
        t.exports = {
            smooth: function(t, e, i) {
                for (var n, a, o, s = !!e, u = r(t, .4, s, i), c = t.length, l = [], h = 0; h < c - 1; h++) n = u[2 * h], 
                a = u[2 * h + 1], o = t[h + 1], l.push([ "C", n[0], n[1], a[0], a[1], o.x, o.y ]);
                return s && (n = u[c], a = u[c + 1], o = t[0], l.push([ "C", n[0], n[1], a[0], a[1], o.x, o.y ])), 
                l;
            }
        };
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(6), a = i(20), o = i(0);
        i(32);
        var s = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "path", e.shapeType = "line", e;
            }, i.getDrawCfg = function(e) {
                var i = t.prototype.getDrawCfg.call(this, e);
                return i.isStack = this.hasAdjust("stack"), i;
            }, i.draw = function(t, e) {
                var i = this, n = i.get("container"), r = i.getYScale(), s = i.get("connectNulls"), u = a.splitArray(t, r.field, s), c = this.getDrawCfg(t[0]);
                c.origin = t, o.each(u, function(r, a) {
                    c.splitedIndex = a, c.points = r, i.drawShape(c.shape, t[0], c, n, e);
                });
            }, e;
        }(r);
        r.Path = s, t.exports = s;
    }, function(t, e, i) {
        var n = i(1), r = i(0), a = {
            getDefalutSize: function() {
                var t = this.get("defaultSize");
                if (!t) {
                    var e = this.get("coord"), i = this.getXScale(), r = this.get("dataArray"), a = i.values.length, o = i.range, s = 1 / a, u = 1;
                    e && e.isPolar ? u = e.transposed && a > 1 ? n.widthRatio.multiplePie : n.widthRatio.rose : (i.isLinear && (s *= o[1] - o[0]), 
                    u = n.widthRatio.column), s *= u, this.hasAdjust("dodge") && (s /= r.length), t = s, 
                    this.set("defaultSize", t);
                }
                return t;
            },
            getDimWidth: function(t) {
                var e = this.get("coord"), i = e.convertPoint({
                    x: 0,
                    y: 0
                }), n = e.convertPoint({
                    x: "x" === t ? 1 : 0,
                    y: "x" === t ? 0 : 1
                }), r = 0;
                return i && n && (r = Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2))), 
                r;
            },
            _getWidth: function() {
                var t = this.get("_width");
                if (!t) {
                    var e = this.get("coord");
                    t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this.getDimWidth("x"), 
                    this.set("_width", t);
                }
                return t;
            },
            _toNormalizedSize: function(t) {
                return t / this._getWidth();
            },
            _toCoordSize: function(t) {
                return this._getWidth() * t;
            },
            getNormalizedSize: function(t) {
                var e = this.getAttrValue("size", t);
                return e = r.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e);
            },
            getSize: function(t) {
                var e = this.getAttrValue("size", t);
                if (r.isNil(e)) {
                    var i = this.getDefalutSize();
                    e = this._toCoordSize(i);
                }
                return e;
            }
        };
        t.exports = a;
    }, , function(t, e, i) {
        var n = {}, r = i(1);
        n.Global = r, n.version = r.version, n.Chart = i(19), n.Shape = i(9), n.G = i(5), 
        n.Util = i(0), n.track = function(t) {
            r.trackable = t;
        }, i(79), t.exports = n;
    }, function(t, e, i) {
        var n = i(0), r = {
            label: {
                fill: "#808080",
                fontSize: 10
            },
            line: {
                stroke: "#E8E8E8",
                lineWidth: 1
            },
            grid: {
                type: "line",
                stroke: "#E8E8E8",
                lineWidth: 1,
                lineDash: [ 2 ]
            },
            tickLine: null,
            labelOffset: 7.5
        }, a = {
            fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
            defaultColor: "#1890FF",
            pixelRatio: 1,
            padding: "auto",
            appendPadding: 15,
            colors: [ "#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864" ],
            shapes: {
                line: [ "line", "dash" ],
                point: [ "circle", "hollowCircle" ]
            },
            sizes: [ 4, 10 ],
            axis: {
                common: r,
                bottom: n.mix({}, r, {
                    grid: null
                }),
                left: n.mix({}, r, {
                    line: null
                }),
                right: n.mix({}, r, {
                    line: null
                }),
                circle: n.mix({}, r, {
                    line: null
                }),
                radius: n.mix({}, r, {
                    labelOffset: 4
                })
            },
            shape: {
                line: {
                    lineWidth: 2,
                    lineJoin: "round",
                    lineCap: "round"
                },
                point: {
                    lineWidth: 0,
                    size: 3
                },
                area: {
                    fillOpacity: .1
                }
            },
            _defaultAxis: r
        };
        t.exports = a;
    }, function(e, i) {
        function n(t, e, i, n, r) {
            return {
                type: t,
                chart: e,
                native: r || null,
                x: void 0 !== i ? i : null,
                y: void 0 !== n ? n : null
            };
        }
        function r(t, e) {
            var i = t.type, r = {}, o = t.targetTouches;
            o && o.length > 0 ? (r.x = o[0].clientX, r.y = o[0].clientY) : (r.x = t.clientX, 
            r.y = t.clientY);
            var s = e.get("canvas"), u = a.getRelativePosition(r, s);
            return n(i, e, u.x, u.y, t);
        }
        var a, o = !!function() {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0;
                    }
                });
                window.addEventListener("e", null, e);
            } catch (t) {}
            return t;
        }() && {
            passive: !0
        };
        a = {
            isWx: "object" == ("undefined" == typeof wx ? "undefined" : t(wx)) && "function" == typeof wx.getSystemInfoSync,
            isMy: "object" == ("undefined" == typeof my ? "undefined" : t(my)) && "function" == typeof my.getSystemInfoSync,
            isNode: void 0 !== e && void 0 !== e.exports,
            isBrowser: "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage,
            getPixelRatio: function() {
                return window && window.devicePixelRatio || 1;
            },
            getStyle: function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
            },
            getWidth: function(t) {
                var e = this.getStyle(t, "width");
                return "auto" === e && (e = t.offsetWidth), parseFloat(e);
            },
            getHeight: function(t) {
                var e = this.getStyle(t, "height");
                return "auto" === e && (e = t.offsetHeight), parseFloat(e);
            },
            getDomById: function(t) {
                return t ? document.getElementById(t) : null;
            },
            getRelativePosition: function(t, e) {
                var i = e.get("el"), n = i.getBoundingClientRect(), r = n.top, a = n.right, o = n.bottom, s = n.left, u = parseFloat(this.getStyle(i, "padding-left")), c = parseFloat(this.getStyle(i, "padding-top")), l = a - s - u - parseFloat(this.getStyle(i, "padding-right")), h = o - r - c - parseFloat(this.getStyle(i, "padding-bottom")), f = e.get("pixelRatio");
                return {
                    x: (t.x - s - u) / l * i.width / f,
                    y: (t.y - r - c) / h * i.height / f
                };
            },
            addEventListener: function(t, e, i) {
                a.isBrowser && t.addEventListener(e, i, o);
            },
            removeEventListener: function(t, e, i) {
                a.isBrowser && t.removeEventListener(e, i, o);
            },
            createEvent: function(t, e) {
                return r(t, e);
            },
            measureText: function(t, e, i) {
                return i || (i = document.createElement("canvas").getContext("2d")), i.font = e || "12px sans-serif", 
                i.measureText(t);
            }
        }, e.exports = a;
    }, function(t, e, i) {
        var n = i(27);
        t.exports = function(t) {
            var e = n(t);
            return e.charAt(0).toUpperCase() + e.substring(1);
        };
    }, function(t, e, i) {
        var n = i(27);
        t.exports = function(t) {
            var e = n(t);
            return e.charAt(0).toLowerCase() + e.substring(1);
        };
    }, function(t, e, i) {
        var n = i(8);
        t.exports = function(t) {
            return n(t, "Boolean");
        };
    }, function(t, e, i) {
        var n = i(8);
        t.exports = function(t) {
            return n(t, "Function");
        };
    }, function(e, i) {
        var n = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        };
        e.exports = function(t) {
            return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t;
        };
    }, function(t, e, i) {
        function n(t, e, i, s) {
            i = i || 0, s = s || o;
            for (var u in e) if (e.hasOwnProperty(u)) {
                var c = e[u];
                null !== c && r(c) ? (r(t[u]) || (t[u] = {}), i < s ? n(t[u], c, i + 1, s) : t[u] = e[u]) : a(c) ? (t[u] = [], 
                t[u] = t[u].concat(c)) : void 0 !== c && (t[u] = c);
            }
        }
        var r = i(28), a = i(10), o = 5;
        t.exports = function() {
            for (var t = new Array(arguments.length), e = t.length, i = 0; i < e; i++) t[i] = arguments[i];
            for (var r = t[0], a = 1; a < e; a++) n(r, t[a]);
            return r;
        };
    }, function(t, e, i) {
        var n = i(0), r = function() {
            function t(t) {
                n.mix(this, t), this._init();
            }
            var e = t.prototype;
            return e._init = function() {
                var t = this, e = t.start, i = t.end, n = Math.min(e.x, i.x), r = Math.max(e.x, i.x), a = Math.min(e.y, i.y), o = Math.max(e.y, i.y);
                this.tl = {
                    x: n,
                    y: a
                }, this.tr = {
                    x: r,
                    y: a
                }, this.bl = {
                    x: n,
                    y: o
                }, this.br = {
                    x: r,
                    y: o
                }, this.width = r - n, this.height = o - a;
            }, e.reset = function(t, e) {
                this.start = t, this.end = e, this._init();
            }, e.isInRange = function(t, e) {
                n.isObject(t) && (e = t.y, t = t.x);
                var i = this.tl, r = this.br;
                return i.x <= t && t <= r.x && i.y <= e && e <= r.y;
            }, t;
        }();
        t.exports = r;
    }, function(t, e, i) {
        var n = i(21);
        i(52), t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(21), a = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "cartesian", this.transposed = !1, this.isRect = !0;
            }, i.init = function(t, e) {
                this.x = {
                    start: t.x,
                    end: e.x
                }, this.y = {
                    start: t.y,
                    end: e.y
                };
            }, i.convertPoint = function(t) {
                var e = this, i = e.transposed, n = i ? "y" : "x", r = i ? "x" : "y", a = e.x, o = e.y;
                return {
                    x: a.start + (a.end - a.start) * t[n],
                    y: o.start + (o.end - o.start) * t[r]
                };
            }, i.invertPoint = function(t) {
                var e = this, i = e.transposed, n = i ? "y" : "x", r = i ? "x" : "y", a = e.x, o = e.y, s = {};
                return s[n] = (t.x - a.start) / (a.end - a.start), s[r] = (t.y - o.start) / (o.end - o.start), 
                s;
            }, e;
        }(r);
        r.Cartesian = a, r.Rect = a, t.exports = a;
    }, function(t, e, i) {
        t.exports = {
            Position: i(54),
            Shape: i(55),
            Size: i(56),
            Color: i(57)
        };
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(7), a = i(10), o = i(3), s = function(t) {
            function e(e) {
                var i;
                return i = t.call(this, e) || this, i.names = [ "x", "y" ], i.type = "position", 
                i;
            }
            return n(e, t), e.prototype.mapping = function(t, e) {
                var i, n, s, u = this.scales, c = this.coord, l = u[0], h = u[1];
                if (r(t) || r(e)) return [];
                if (a(e) && a(t)) {
                    i = [], n = [];
                    for (var f = 0, p = 0, g = t.length, d = e.length; f < g && p < d; f++, p++) s = c.convertPoint({
                        x: l.scale(t[f]),
                        y: h.scale(e[p])
                    }), i.push(s.x), n.push(s.y);
                } else if (a(e)) t = l.scale(t), n = [], o(e, function(e) {
                    e = h.scale(e), s = c.convertPoint({
                        x: t,
                        y: e
                    }), i && i !== s.x ? (a(i) || (i = [ i ]), i.push(s.x)) : i = s.x, n.push(s.y);
                }); else if (a(t)) e = h.scale(e), i = [], o(t, function(t) {
                    t = l.scale(t), s = c.convertPoint({
                        x: t,
                        y: e
                    }), n && n !== s.y ? (a(n) || (n = [ n ]), n.push(s.y)) : n = s.y, i.push(s.x);
                }); else {
                    t = l.scale(t), e = h.scale(e);
                    var v = c.convertPoint({
                        x: t,
                        y: e
                    });
                    i = v.x, n = v.y;
                }
                return [ i, n ];
            }, e;
        }(i(17));
        t.exports = s;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = function(t) {
            function e(e) {
                var i;
                return i = t.call(this, e) || this, i.names = [ "shape" ], i.type = "shape", i.gradient = null, 
                i;
            }
            return n(e, t), e.prototype.getLinearValue = function(t) {
                var e = this.values;
                return e[Math.round((e.length - 1) * t)];
            }, e;
        }(i(17));
        t.exports = r;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = function(t) {
            function e(e) {
                var i;
                return i = t.call(this, e) || this, i.names = [ "size" ], i.type = "size", i.gradient = null, 
                i;
            }
            return n(e, t), e;
        }(i(17));
        t.exports = r;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(58), o = function(t) {
            function e(e) {
                var i;
                return i = t.call(this, e) || this, i.names = [ "color" ], i.type = "color", i.gradient = null, 
                r.isString(i.values) && (i.linear = !0), i;
            }
            return n(e, t), e.prototype.getLinearValue = function(t) {
                var e = this.gradient;
                if (!e) {
                    var i = this.values;
                    e = a.gradient(i), this.gradient = e;
                }
                return e(t);
            }, e;
        }(i(17));
        t.exports = o;
    }, function(t, e, i) {
        function n(t, e, i, n) {
            return t[n] + (e[n] - t[n]) * i;
        }
        function r(t) {
            return "#" + a(t[0]) + a(t[1]) + a(t[2]);
        }
        function a(t) {
            return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t;
        }
        function o(t, e) {
            var i = t.length - 1, a = Math.floor(i * e), o = i * e - a, s = t[a], u = a === i ? s : t[a + 1];
            return r([ n(s, u, o, 0), n(s, u, o, 1), n(s, u, o, 2) ]);
        }
        function s(t) {
            var e = [];
            return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), 
            e.push(parseInt(t.substr(5, 2), 16)), e;
        }
        var u = i(0), c = {
            black: "#000000",
            blue: "#0000ff",
            grey: "#808080",
            green: "#008000",
            orange: "#ffa500",
            pink: "#ffc0cb",
            purple: "#800080",
            red: "#ff0000",
            white: "#ffffff",
            yellow: "#ffff00"
        }, l = {
            toHex: function(t) {
                if (c[t]) return c[t];
                if ("#" === t[0]) {
                    if (7 === t.length) return t;
                    var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                        return "#" + e + e + i + i + n + n;
                    });
                    return c[t] = e, e;
                }
                var i = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                return i.shift(), i = r(i), c[t] = i, i;
            },
            hex2arr: s,
            gradient: function(t) {
                var e = [];
                return u.isString(t) && (t = t.split("-")), u.each(t, function(t) {
                    -1 === t.indexOf("#") && (t = l.toHex(t)), e.push(s(t));
                }), function(t) {
                    return o(e, t);
                };
            }
        };
        t.exports = l;
    }, function(t, e, i) {
        var n = i(0), r = i(1), a = i(60), o = {
            linear: "Linear",
            cat: "Cat",
            timeCat: "TimeCat",
            identity: "Identity"
        }, s = function() {
            function t(t) {
                this.defs = {}, n.mix(this, t);
            }
            var e = t.prototype;
            return e._getDef = function(t) {
                var e = this.defs, i = null;
                return (r.scales[t] || e[t]) && (i = n.mix({}, r.scales[t]), n.each(e[t], function(t, e) {
                    n.isNil(t) ? delete i[e] : i[e] = t;
                })), i;
            }, e._getDefaultType = function(t, e, i) {
                if (i && i.type) return i.type;
                var r = "linear", a = n.Array.firstValue(e, t);
                return n.isArray(a) && (a = a[0]), n.isString(a) && (r = "cat"), r;
            }, e._getScaleCfg = function(t, e, i, r) {
                var a, o = {
                    field: e,
                    values: a = r && r.values ? r.values : n.Array.values(i, e)
                };
                if (!("cat" === t || "timeCat" === t || r && r.min && r.max)) {
                    var s = n.Array.getRange(a), u = s.min, c = s.max;
                    o.min = u, o.max = c, o.nice = !0;
                }
                return "cat" !== t && "timeCat" !== t || (o.isRounding = !1), o;
            }, e.createScale = function(t, e) {
                var i, r = this, s = r._getDef(t);
                if (!e || !e.length) return s && s.type ? (s.field = t, i = new a[o[s.type]](s)) : i = new a.Identity({
                    value: t,
                    field: t.toString(),
                    values: [ t ]
                }), i;
                var u = e[0][t];
                if (null === u && (u = n.Array.firstValue(e, t)), n.isNumber(t) || n.isNil(u) && !s) i = new a.Identity({
                    value: t,
                    field: t.toString(),
                    values: [ t ]
                }); else {
                    var c = r._getDefaultType(t, e, s), l = r._getScaleCfg(c, t, e, s);
                    s && n.mix(l, s), i = new a[o[c]](l);
                }
                return i;
            }, t;
        }();
        t.exports = s;
    }, function(t, e, i) {
        var n = i(14);
        i(61), i(64), i(34), t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(7), a = i(3), o = i(14), s = i(62), u = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this);
                var e = this;
                e.type = "linear", e.isLinear = !0, e.nice = !1, e.min = null, e.minLimit = null, 
                e.max = null, e.maxLimit = null, e.tickCount = null, e.tickInterval = null, e.minTickInterval = null, 
                e.snapArray = null;
            }, i.init = function() {
                var t = this;
                if (t.ticks) {
                    var e = t.ticks, i = t.translate(e[0]), n = t.translate(e[e.length - 1]);
                    (r(t.min) || t.min > i) && (t.min = i), (r(t.max) || t.max < n) && (t.max = n);
                } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks();
            }, i.calculateTicks = function() {
                var t = this.min, e = this.max, i = this.minLimit, n = this.maxLimit, r = this.tickCount, a = this.tickInterval, o = this.minTickInterval, u = this.snapArray;
                if (1 === r) throw new Error("linear scale'tickCount should not be 1");
                if (e < t) throw new Error("max: " + e + " should not be less than min: " + t);
                return s({
                    min: t,
                    max: e,
                    minLimit: i,
                    maxLimit: n,
                    minCount: r,
                    maxCount: r,
                    interval: a,
                    minTickInterval: o,
                    snapArray: u
                }).ticks;
            }, i.initTicks = function() {
                var t = this, e = t.calculateTicks();
                if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1]; else {
                    var i = [];
                    a(e, function(e) {
                        e >= t.min && e <= t.max && i.push(e);
                    }), i.length || (i.push(t.min), i.push(t.max)), t.ticks = i;
                }
            }, i.scale = function(t) {
                if (r(t)) return NaN;
                var e = this.max, i = this.min;
                if (e === i) return 0;
                var n = (t - i) / (e - i), a = this.rangeMin();
                return a + n * (this.rangeMax() - a);
            }, i.invert = function(t) {
                var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                return this.min + e * (this.max - this.min);
            }, e;
        }(o);
        o.Linear = u, t.exports = u;
    }, function(t, e, i) {
        var n = i(7), r = i(13), a = i(63), o = [ 0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10 ], s = [ 0, 1, 2, 4, 5, 10 ];
        t.exports = function(t) {
            var e = t.min, i = t.max, u = t.interval, c = t.minTickInterval, l = [], h = t.minCount || 5, f = t.maxCount || 7, p = h === f, g = n(t.minLimit) ? -1 / 0 : t.minLimit, d = n(t.maxLimit) ? 1 / 0 : t.maxLimit, v = (h + f) / 2, y = v, x = t.snapArray ? t.snapArray : p ? o : s;
            if (e === g && i === d && p && (u = (i - e) / (y - 1)), n(e) && (e = 0), n(i) && (i = 0), 
            i === e && (0 === e ? i = 1 : e > 0 ? e = 0 : i = 0, i - e < 5 && !u && i - e >= 1 && (u = 1)), 
            n(u)) {
                var m = (i - e) / (v - 1);
                u = a.snapFactorTo(m, x, "ceil"), f !== h && ((y = parseInt((i - e) / u, 10)) > f && (y = f), 
                y < h && (y = h), u = a.snapFactorTo((i - e) / (y - 1), x, "floor"));
            }
            if (r(c) && u < c && (u = c), t.interval || f !== h) i = Math.min(a.snapMultiple(i, u, "ceil"), d), 
            e = Math.max(a.snapMultiple(e, u, "floor"), g), y = Math.round((i - e) / u), e = a.fixedBase(e, u), 
            i = a.fixedBase(i, u); else {
                v = parseInt(v, 10);
                var _, S = (i + e) / 2, b = a.snapMultiple(S, u, "ceil"), P = Math.floor((v - 2) / 2), w = b + P * u;
                _ = v % 2 == 0 ? b - P * u : b - (P + 1) * u, w < i && (w += u), _ > e && (_ -= u), 
                i = a.fixedBase(w, u), e = a.fixedBase(_, u);
            }
            i = Math.min(i, d), e = Math.max(e, g), l.push(e);
            for (var C = 1; C < y; C++) {
                var M = a.fixedBase(u * C + e, u);
                M < i && l.push(M);
            }
            return l[l.length - 1] < i && l.push(i), {
                min: e,
                max: i,
                interval: u,
                count: y,
                ticks: l
            };
        };
    }, function(t, e) {
        function i(t) {
            var e = 1;
            if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");
            if (t < 1) {
                for (var i = 0; t < 1; ) e /= 10, t *= 10, i++;
                e.toString().length > a && (e = parseFloat(e.toFixed(i)));
            } else for (;t > 10; ) e *= 10, t /= 10;
            return e;
        }
        function n(t, e) {
            var i = t.length;
            if (0 === i) return NaN;
            var n = t[0];
            if (e < t[0]) return NaN;
            if (e >= t[i - 1]) return t[i - 1];
            for (var r = 1; r < t.length && !(e < t[r]); r++) n = t[r];
            return n;
        }
        function r(t, e) {
            var i = t.length;
            if (0 === i) return NaN;
            var n;
            if (e > t[i - 1]) return NaN;
            if (e < t[0]) return t[0];
            for (var r = 1; r < t.length; r++) if (e <= t[r]) {
                n = t[r];
                break;
            }
            return n;
        }
        var a = 12, o = {
            snapFactorTo: function(t, e, n) {
                if (isNaN(t)) return NaN;
                var r = 1;
                if (0 !== t) {
                    t < 0 && (r = -1);
                    var s = i(t *= r);
                    r *= s, t /= s;
                }
                var u = (t = "floor" === n ? o.snapFloor(e, t) : "ceil" === n ? o.snapCeiling(e, t) : o.snapTo(e, t)) * r;
                return Math.abs(r) < 1 && u.toString().length > a && (u = t / parseInt(1 / r) * (r > 0 ? 1 : -1)), 
                u;
            },
            snapMultiple: function(t, e, i) {
                return ("ceil" === i ? Math.ceil(t / e) : "floor" === i ? Math.floor(t / e) : Math.round(t / e)) * e;
            },
            snapTo: function(t, e) {
                var i = n(t, e), a = r(t, e);
                if (isNaN(i) || isNaN(a)) {
                    if (t[0] >= e) return t[0];
                    var o = t[t.length - 1];
                    if (o <= e) return o;
                }
                return Math.abs(e - i) < Math.abs(a - e) ? i : a;
            },
            snapFloor: function(t, e) {
                return n(t, e);
            },
            snapCeiling: function(t, e) {
                return r(t, e);
            },
            fixedBase: function(t, e) {
                var i = e.toString(), n = i.indexOf(".");
                if (-1 === n) return Math.round(t);
                var r = i.substr(n + 1).length;
                return r > 20 && (r = 20), parseFloat(t.toFixed(r));
            }
        };
        t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(14), a = i(13), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", 
                this.value = null;
            }, i.getText = function() {
                return this.value.toString();
            }, i.scale = function(t) {
                return this.value !== t && a(t) ? t : this.range[0];
            }, i.invert = function() {
                return this.value;
            }, e;
        }(r);
        r.Identity = o, t.exports = o;
    }, function(t, e, i) {
        function n(t) {
            var e = t.slice(0);
            if (e.length > 0) {
                var i = e[0], n = e[e.length - 1];
                0 !== i.value && e.unshift({
                    value: 0
                }), 1 !== n.value && e.push({
                    value: 1
                });
            }
            return e;
        }
        var r = i(0), a = i(66), o = i(1), s = i(5).Shape, u = function() {
            function t(t) {
                this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, 
                r.mix(this, t);
            }
            var e = t.prototype;
            return e._isHide = function(t) {
                var e = this.axisCfg;
                return !e || !1 === e[t];
            }, e._getLinePosition = function(t, e, i, n) {
                var r = "", a = t.field, o = this.axisCfg;
                return o[a] && o[a].position ? r = o[a].position : "x" === e ? r = n ? "left" : "bottom" : "y" === e && (r = i ? "right" : "left", 
                n && (r = "bottom")), r;
            }, e._getLineCfg = function(t, e, i) {
                var n, r, a = 1;
                return "x" === e ? (n = {
                    x: 0,
                    y: 0
                }, r = {
                    x: 1,
                    y: 0
                }) : "right" === i ? (n = {
                    x: 1,
                    y: 0
                }, r = {
                    x: 1,
                    y: 1
                }) : (n = {
                    x: 0,
                    y: 0
                }, r = {
                    x: 0,
                    y: 1
                }, a = -1), t.transposed && (a *= -1), {
                    offsetFactor: a,
                    start: t.convertPoint(n),
                    end: t.convertPoint(r)
                };
            }, e._getCircleCfg = function(t) {
                return {
                    startAngle: t.startAngle,
                    endAngle: t.endAngle,
                    center: t.center,
                    radius: t.circleRadius
                };
            }, e._getRadiusCfg = function(t) {
                var e, i;
                return t.transposed ? (e = {
                    x: 0,
                    y: 0
                }, i = {
                    x: 1,
                    y: 0
                }) : (e = {
                    x: 0,
                    y: 0
                }, i = {
                    x: 0,
                    y: 1
                }), {
                    offsetFactor: -1,
                    start: t.convertPoint(e),
                    end: t.convertPoint(i)
                };
            }, e._getAxisCfg = function(t, e, i, n, a) {
                var u = this, c = this.axisCfg, l = e.getTicks(), h = r.deepMix({
                    ticks: l,
                    frontContainer: this.frontPlot,
                    backContainer: this.backPlot
                }, a, c[e.field]), f = [], p = h.label, g = l.length, d = 0, v = 0, y = p;
                return r.each(l, function(t, e) {
                    if (r.isFunction(p)) {
                        var i = p(t.text, e, g);
                        y = i ? r.mix({}, o._defaultAxis.label, i) : null;
                    }
                    if (y) {
                        var n = {};
                        y.textAlign && (n.textAlign = y.textAlign), y.textBaseline && (n.textBaseline = y.textBaseline);
                        var a = new s.Text({
                            className: "axis-label",
                            attrs: r.mix({
                                x: 0,
                                y: 0,
                                text: t.text,
                                fontFamily: u.chart.get("canvas").get("fontFamily")
                            }, y),
                            value: t.value,
                            textStyle: n,
                            top: y.top,
                            context: u.chart.get("canvas").get("context")
                        });
                        f.push(a);
                        var c = a.getBBox(), l = c.width, h = c.height;
                        d = Math.max(d, l), v = Math.max(v, h);
                    }
                }), h.labels = f, h.maxWidth = d, h.maxHeight = v, h;
            }, e._createAxis = function(t, e, i, n, r) {
                void 0 === r && (r = "");
                var a, s, u, c = this, l = t.type, h = t.transposed;
                if ("cartesian" === l || "rect" === l) {
                    var f = c._getLinePosition(e, n, r, h);
                    (u = o.axis[f]).position = f, a = "Line", s = f;
                } else "x" === n && !h || "y" === n && h ? (u = o.axis.circle, a = "Circle", s = "circle") : (u = o.axis.radius, 
                a = "Line", s = "radius");
                var p = c._getAxisCfg(t, e, i, n, u);
                p.type = a, p.dimType = n, p.verticalScale = i, p.index = r, this.axes[s] = p;
            }, e.createAxis = function(t, e, i) {
                var o = this;
                e && !o._isHide(e.field) && o._createAxis(t, e, i[0], "x"), r.each(i, function(i, n) {
                    o._isHide(i.field) || o._createAxis(t, i, e, "y", n);
                });
                var s = this.axes, u = o.chart;
                if (u._isAutoPadding()) {
                    var c = r.parsePadding(u.get("padding")), l = r.parsePadding(u.get("appendPadding")), h = u.get("legendRange") || {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, f = [ "auto" === c[0] ? h.top + 2 * l[0] : c[0], "auto" === c[1] ? h.right + l[1] : c[1], "auto" === c[2] ? h.bottom + l[2] : c[2], "auto" === c[3] ? h.left + l[3] : c[3] ];
                    if (t.isPolar) {
                        var p = s.circle;
                        if (p) {
                            var g = p.maxHeight, d = p.maxWidth, v = p.labelOffset;
                            f[0] += g + v, f[1] += d + v, f[2] += g + v, f[3] += d + v;
                        }
                    } else {
                        if (s.right && "auto" === c[1]) {
                            var y = s.right, x = y.maxWidth, m = y.labelOffset;
                            f[1] += x + m;
                        }
                        if (s.left && "auto" === c[3]) {
                            var _ = s.left, S = _.maxWidth, b = _.labelOffset;
                            f[3] += S + b;
                        }
                        if (s.bottom && "auto" === c[2]) {
                            var P = s.bottom, w = P.maxHeight, C = P.labelOffset;
                            f[2] += w + C;
                        }
                    }
                    u.set("_padding", f), u._updateLayout(f);
                }
                r.each(s, function(e) {
                    var i, s = e.type, u = e.grid, c = e.verticalScale, l = e.ticks, h = e.dimType, f = e.position, p = e.index;
                    if (t.isPolar ? "Line" === s ? i = o._getRadiusCfg(t) : "Circle" === s && (i = o._getCircleCfg(t)) : i = o._getLineCfg(t, h, f), 
                    u && c) {
                        var g = [], d = n(c.getTicks());
                        r.each(l, function(e) {
                            var i = [];
                            r.each(d, function(n) {
                                var r = "x" === h ? e.value : n.value, a = "x" === h ? n.value : e.value;
                                if (r >= 0 && r <= 1 && a >= 0 && a <= 1) {
                                    var o = t.convertPoint({
                                        x: r,
                                        y: a
                                    });
                                    i.push(o);
                                }
                            }), g.push({
                                points: i,
                                _id: "axis-" + h + p + "-grid-" + e.tickValue
                            });
                        }), e.gridPoints = g, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, 
                        e.endAngle = t.endAngle);
                    }
                    i._id = "axis-" + h, r.isNil(p) || (i._id = "axis-" + h + p), new a[s](r.mix(e, i));
                });
            }, e.clear = function() {
                this.axes = {}, this.frontPlot.clear(), this.backPlot.clear();
            }, t;
        }();
        t.exports = u;
    }, function(t, e, i) {
        var n = i(24);
        i(67), t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(24), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null;
            }, i.getOffsetPoint = function(t) {
                var e = this.start, i = this.end;
                return {
                    x: e.x + (i.x - e.x) * t,
                    y: e.y + (i.y - e.y) * t
                };
            }, i.getAxisVector = function() {
                var t = this.start, e = this.end;
                return [ e.x - t.x, e.y - t.y ];
            }, i.drawLine = function(t) {
                var e = this.getContainer(t.top), i = this.start, n = this.end;
                e.addShape("line", {
                    className: "axis-line",
                    attrs: r.mix({
                        x1: i.x,
                        y1: i.y,
                        x2: n.x,
                        y2: n.y
                    }, t)
                });
            }, e;
        }(a);
        a.Line = o, t.exports = o;
    }, function(t, e, i) {
        var n = i(0), r = i(30), a = i(31), o = i(36).requestAnimationFrame, s = function() {
            function t(t) {
                this._attrs = n.mix({
                    type: "canvas",
                    children: []
                }, t), this._initPixelRatio(), this._initCanvas();
            }
            var e = t.prototype;
            return e.get = function(t) {
                return this._attrs[t];
            }, e.set = function(t, e) {
                this._attrs[t] = e;
            }, e._initPixelRatio = function() {
                this.get("pixelRatio") || this.set("pixelRatio", n.getPixelRatio());
            }, e.beforeDraw = function() {
                var t = this._attrs.context, e = this._attrs.el;
                !n.isWx && !n.isMy && t && t.clearRect(0, 0, e.width, e.height);
            }, e._initCanvas = function() {
                var t, e = this, i = e.get("el"), r = e.get("context");
                if (!(t = r ? r.canvas : n.isString(i) ? n.getDomById(i) : i)) throw new Error("Please specify the id or el of the chart!");
                r && t && !t.getContext && (t.getContext = function() {
                    return r;
                });
                var a = e.get("width");
                a || (a = n.getWidth(t));
                var o = e.get("height");
                o || (o = n.getHeight(t)), e.set("canvas", this), e.set("el", t), e.set("context", r || t.getContext("2d")), 
                e.changeSize(a, o);
            }, e.changeSize = function(t, e) {
                var i = this.get("pixelRatio"), r = this.get("el");
                n.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), n.isWx || n.isMy || (r.width = t * i, 
                r.height = e * i, 1 !== i && this.get("context").scale(i, i)), this.set("width", t), 
                this.set("height", e);
            }, e.getWidth = function() {
                var t = this.get("pixelRatio");
                return this.get("width") * t;
            }, e.getHeight = function() {
                var t = this.get("pixelRatio");
                return this.get("height") * t;
            }, e.getPointByClient = function(t, e) {
                var i = this.get("el"), n = i.getBoundingClientRect(), r = n.right - n.left, a = n.bottom - n.top;
                return {
                    x: (t - n.left) * (i.width / r),
                    y: (e - n.top) * (i.height / a)
                };
            }, e._beginDraw = function() {
                this._attrs.toDraw = !0;
            }, e._endDraw = function() {
                this._attrs.toDraw = !1;
            }, e.draw = function() {
                function t() {
                    e.set("animateHandler", o(function() {
                        e.set("animateHandler", void 0), e.get("toDraw") && t();
                    })), e.beforeDraw();
                    try {
                        for (var i = e._attrs.context, r = e._attrs.children, a = 0, s = r.length; a < s; a++) r[a].draw(i);
                        (n.isWx || n.isMy) && i.draw();
                    } catch (t) {
                        console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw();
                    }
                    e._endDraw();
                }
                var e = this;
                e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t());
            }, e.destroy = function() {
                this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0));
            }, e.isDestroyed = function() {
                return this.get("destroyed");
            }, t;
        }();
        n.mix(s.prototype, r, {
            getGroupClass: function() {
                return a;
            }
        }), t.exports = s;
    }, function(t, e, i) {
        function n(t, e) {
            return (t % e + e) % e;
        }
        function r(t, e) {
            s.each(t, function(t) {
                t = t.split(":"), e.addColorStop(Number(t[0]), t[1]);
            });
        }
        function a(t, e, i) {
            var a = t.split(" "), o = a[0].slice(2, a[0].length - 1);
            o = n(parseFloat(o) * Math.PI / 180, 2 * Math.PI);
            var s, u, c = a.slice(1), l = e.getBBox(), h = l.minX, f = l.minY, p = l.maxX, g = l.maxY;
            o >= 0 && o < .5 * Math.PI ? (s = {
                x: h,
                y: f
            }, u = {
                x: p,
                y: g
            }) : .5 * Math.PI <= o && o < Math.PI ? (s = {
                x: p,
                y: f
            }, u = {
                x: h,
                y: g
            }) : Math.PI <= o && o < 1.5 * Math.PI ? (s = {
                x: p,
                y: g
            }, u = {
                x: h,
                y: f
            }) : (s = {
                x: h,
                y: g
            }, u = {
                x: p,
                y: f
            });
            var d = Math.tan(o), v = d * d, y = (u.x - s.x + d * (u.y - s.y)) / (v + 1) + s.x, x = d * (u.x - s.x + d * (u.y - s.y)) / (v + 1) + s.y, m = i.createLinearGradient(s.x, s.y, y, x);
            return r(c, m), m;
        }
        function o(t, e, i) {
            var n = t.split(" "), a = n[0].slice(2, n[0].length - 1);
            a = a.split(",");
            var o = parseFloat(a[0]), s = parseFloat(a[1]), u = parseFloat(a[2]), c = n.slice(1);
            if (0 === u) return c[c.length - 1].split(":")[1];
            var l = e.getBBox(), h = l.width, f = l.height, p = l.minX, g = l.minY, d = Math.sqrt(h * h + f * f) / 2, v = i.createRadialGradient(p + h * o, g + f * s, u * d, p + h / 2, g + f / 2, d);
            return r(c, v), v;
        }
        var s = i(0);
        t.exports = {
            parseStyle: function(t, e, i) {
                if ("(" === t[1]) try {
                    var n = t[0];
                    if ("l" === n) return a(t, e, i);
                    if ("r" === n) return o(t, e, i);
                } catch (t) {
                    console.error("error in parsing gradient string, please check if there are any extra whitespaces."), 
                    console.error(t);
                }
                return t;
            }
        };
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(2), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "rect";
            }, i.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    radius: 0,
                    lineWidth: 0
                };
            }, i.createPath = function(t) {
                var e = this.get("attrs"), i = e.x, n = e.y, a = e.width, o = e.height;
                t.beginPath();
                var s = e.radius;
                s && a * o ? (s = r.parsePadding(s), t.moveTo(i + s[0], n), t.lineTo(i + a - s[1], n), 
                t.arc(i + a - s[1], n + s[1], s[1], -Math.PI / 2, 0, !1), t.lineTo(i + a, n + o - s[2]), 
                t.arc(i + a - s[2], n + o - s[2], s[2], 0, Math.PI / 2, !1), t.lineTo(i + s[3], n + o), 
                t.arc(i + s[3], n + o - s[3], s[3], Math.PI / 2, Math.PI, !1), t.lineTo(i, n + s[0]), 
                t.arc(i + s[0], n + s[0], s[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(i, n, a, o);
            }, i.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, i = t.y;
                return {
                    minX: e,
                    minY: i,
                    maxX: e + t.width,
                    maxY: i + t.height
                };
            }, e;
        }(a);
        a.Rect = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(2), a = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "circle";
            }, i.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    r: 0,
                    lineWidth: 0
                };
            }, i.createPath = function(t) {
                var e = this.get("attrs"), i = e.x, n = e.y, r = e.r;
                t.beginPath(), t.arc(i, n, r, 0, 2 * Math.PI, !1), t.closePath();
            }, i.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, i = t.y, n = t.r;
                return {
                    minX: e - n,
                    maxX: e + n,
                    minY: i - n,
                    maxY: i + n
                };
            }, e;
        }(r);
        r.Circle = a, t.exports = a;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(2), a = i(11), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line";
            }, i.getDefaultAttrs = function() {
                return {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    lineWidth: 1
                };
            }, i.createPath = function(t) {
                var e = this.get("attrs"), i = e.x1, n = e.y1, r = e.x2, a = e.y2;
                t.beginPath(), t.moveTo(i, n), t.lineTo(r, a);
            }, i.calculateBox = function() {
                var t = this.get("attrs"), e = t.x1, i = t.y1, n = t.x2, r = t.y2, o = t.lineWidth;
                return a.getBBoxFromLine(e, i, n, r, o);
            }, e;
        }(r);
        r.Line = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(2), a = i(11), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "polygon";
            }, i.getDefaultAttrs = function() {
                return {
                    points: null,
                    lineWidth: 0
                };
            }, i.createPath = function(t) {
                var e = this.get("attrs").points;
                t.beginPath();
                for (var i = 0, n = e.length; i < n; i++) {
                    var r = e[i];
                    0 === i ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
                }
                t.closePath();
            }, i.calculateBox = function() {
                var t = this.get("attrs").points;
                return a.getBBoxFromPoints(t);
            }, e;
        }(r);
        r.Polygon = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(2), a = i(37), o = i(11), s = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "polyline";
            }, i.getDefaultAttrs = function() {
                return {
                    points: null,
                    lineWidth: 1,
                    smooth: !1
                };
            }, i.createPath = function(t) {
                for (var e = this.get("attrs"), i = e.points, n = e.smooth, r = [], o = 0, s = i.length; o < s; o++) {
                    var u = i[o];
                    isNaN(u.x) || isNaN(u.y) || r.push(u);
                }
                if (t.beginPath(), r.length) if (t.moveTo(r[0].x, r[0].y), n) for (var c = [ [ 0, 0 ], [ 1, 1 ] ], l = a.smooth(r, !1, c), h = 0, f = l.length; h < f; h++) {
                    var p = l[h];
                    t.bezierCurveTo(p[1], p[2], p[3], p[4], p[5], p[6]);
                } else {
                    var g, d;
                    for (g = 1, d = r.length - 1; g < d; g++) t.lineTo(r[g].x, r[g].y);
                    t.lineTo(r[d].x, r[d].y);
                }
            }, i.calculateBox = function() {
                var t = this.get("attrs"), e = t.points, i = t.smooth, n = t.lineWidth;
                if (i) {
                    for (var r = [], s = [ [ 0, 0 ], [ 1, 1 ] ], u = a.smooth(e, !1, s), c = 0, l = u.length; c < l; c++) {
                        var h = u[c];
                        if (0 === c) r.push([ e[0].x, e[0].y, h[1], h[2], h[3], h[4], h[5], h[6] ]); else {
                            var f = u[c - 1];
                            r.push([ f[5], f[6], h[1], h[2], h[3], h[4], h[5], h[6] ]);
                        }
                    }
                    return o.getBBoxFromBezierGroup(r, n);
                }
                return o.getBBoxFromPoints(e, n);
            }, e;
        }(r);
        r.Polyline = s, t.exports = s;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(2), a = i(11), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, 
                this._attrs.type = "arc";
            }, i.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    clockwise: !1,
                    lineWidth: 1
                };
            }, i.createPath = function(t) {
                var e = this.get("attrs"), i = e.x, n = e.y, r = e.r, a = e.startAngle, o = e.endAngle, s = e.clockwise;
                t.beginPath(), t.arc(i, n, r, a, o, s);
            }, i.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, i = t.y, n = t.r, r = t.startAngle, o = t.endAngle, s = t.clockwise;
                return a.getBBoxFromArc(e, i, n, r, o, s);
            }, e;
        }(r);
        r.Arc = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(2), a = i(11), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "sector";
            }, i.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    lineWidth: 0,
                    r: 0,
                    r0: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    clockwise: !1
                };
            }, i.createPath = function(t) {
                var e = this.get("attrs"), i = e.x, n = e.y, r = e.startAngle, a = e.endAngle, o = e.r, s = e.r0, u = e.clockwise;
                t.beginPath();
                var c = Math.cos(r), l = Math.sin(r);
                t.moveTo(c * s + i, l * s + n), t.lineTo(c * o + i, l * o + n), t.arc(i, n, o, r, a, u), 
                t.lineTo(Math.cos(a) * s + i, Math.sin(a) * s + n), 0 !== s && t.arc(i, n, s, a, r, !u), 
                t.closePath();
            }, i.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, i = t.y, n = t.r, r = t.r0, o = t.startAngle, s = t.endAngle, u = t.clockwise, c = a.getBBoxFromArc(e, i, n, o, s, u), l = a.getBBoxFromArc(e, i, r, o, s, u);
                return {
                    minX: Math.min(c.minX, l.minX),
                    minY: Math.min(c.minY, l.minY),
                    maxX: Math.max(c.maxX, l.maxX),
                    maxY: Math.max(c.maxY, l.maxY)
                };
            }, e;
        }(r);
        r.Sector = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(2), o = 0, s = {}, u = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "text";
            }, i.getDefaultAttrs = function() {
                return {
                    lineWidth: 0,
                    lineCount: 1,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textAlign: "start",
                    textBaseline: "bottom",
                    lineHeight: null,
                    textArr: null
                };
            }, i._getFontStyle = function() {
                var t = this._attrs.attrs, e = t.fontSize, i = t.fontFamily, n = t.fontWeight;
                return t.fontStyle + " " + t.fontVariant + " " + n + " " + e + "px " + i;
            }, i._afterAttrsSet = function() {
                var t = this._attrs.attrs;
                if (t.font = this._getFontStyle(), t.text) {
                    var e = t.text, i = null, n = 1;
                    r.isString(e) && -1 !== e.indexOf("\n") && (n = (i = e.split("\n")).length), t.lineCount = n, 
                    t.textArr = i;
                }
                this.set("attrs", t);
            }, i._getTextHeight = function() {
                var t = this._attrs.attrs;
                if (t.height) return t.height;
                var e = t.lineCount, i = 1 * t.fontSize;
                return e > 1 ? i * e + this._getSpaceingY() * (e - 1) : i;
            }, i._getSpaceingY = function() {
                var t = this._attrs.attrs, e = t.lineHeight, i = 1 * t.fontSize;
                return e ? e - i : .14 * i;
            }, i.drawInner = function(t) {
                var e = this, i = e._attrs.attrs, n = i.text, a = i.x, o = i.y;
                if (!(r.isNil(n) || isNaN(a) || isNaN(o))) {
                    var s = i.textArr, u = 1 * i.fontSize, c = e._getSpaceingY();
                    i.rotate && (t.translate(a, o), t.rotate(i.rotate), a = 0, o = 0);
                    var l, h = i.textBaseline;
                    s && (l = e._getTextHeight());
                    var f;
                    if (e.hasFill()) {
                        var p = i.fillOpacity;
                        if (r.isNil(p) || 1 === p || (t.globalAlpha = p), s) for (var g = 0, d = s.length; g < d; g++) {
                            var v = s[g];
                            f = o + g * (c + u) - l + u, "middle" === h && (f += l - u - (l - u) / 2), "top" === h && (f += l - u), 
                            t.fillText(v, a, f);
                        } else t.fillText(n, a, o);
                    }
                    if (e.hasStroke()) if (s) for (var y = 0, x = s.length; y < x; y++) {
                        var m = s[y];
                        f = o + y * (c + u) - l + u, "middle" === h && (f += l - u - (l - u) / 2), "top" === h && (f += l - u), 
                        t.strokeText(m, a, f);
                    } else t.strokeText(n, a, o);
                }
            }, i.calculateBox = function() {
                var t = this, e = t._attrs.attrs, i = e.x, n = e.y, r = e.textAlign, a = e.textBaseline, o = t._getTextWidth();
                if (!o) return {
                    minX: i,
                    minY: n,
                    maxX: i,
                    maxY: n
                };
                var s = t._getTextHeight(), u = {
                    x: i,
                    y: n - s
                };
                return r && ("end" === r || "right" === r ? u.x -= o : "center" === r && (u.x -= o / 2)), 
                a && ("top" === a ? u.y += s : "middle" === a && (u.y += s / 2)), {
                    minX: u.x,
                    minY: u.y,
                    maxX: u.x + o,
                    maxY: u.y + s
                };
            }, i._getTextWidth = function() {
                var t = this._attrs.attrs;
                if (t.width) return t.width;
                var e = t.text, i = this.get("context");
                if (!r.isNil(e)) {
                    var n = t.font, a = t.textArr, u = e + "" + n;
                    if (s[u]) return s[u];
                    var c = 0;
                    if (a) for (var l = 0, h = a.length; l < h; l++) {
                        var f = a[l];
                        c = Math.max(c, r.measureText(f, n, i).width);
                    } else c = r.measureText(e, n, i).width;
                    return o > 5e3 && (o = 0, s = {}), o++, s[u] = c, c;
                }
            }, e;
        }(a);
        a.Text = u, t.exports = u;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(2), a = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.createPath = null, this._attrs.type = "custom";
            }, i.createPath = function(t) {
                var e = this.get("createPath");
                e && e.call(this, t);
            }, i.calculateBox = function() {
                var t = this.get("calculateBox");
                return t && t.call(this);
            }, e;
        }(r);
        r.Custom = a, t.exports = a;
    }, function(t, e, i) {
        var n = i(1), r = i(0);
        setTimeout(function() {
            if (n.trackable && r.isBrowser) {
                var t = new Image(), e = {
                    pg: document.URL,
                    r: new Date().getTime(),
                    f2: !0,
                    version: n.version,
                    page_type: "syslog"
                }, i = encodeURIComponent(JSON.stringify([ e ]));
                t.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + i;
            }
        }, 3e3);
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(38), a = i(6);
        i(32);
        var o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            return n(e, t), e.prototype.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "line", e.sortable = !0, e;
            }, e;
        }(r);
        a.Line = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        function r(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        var a = i(6), o = i(0), s = i(39);
        i(82);
        var u = function(t) {
            function e(e) {
                var i;
                return i = t.call(this, e) || this, o.mix(r(r(i)), s), i;
            }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e;
            }, i.createShapePointsCfg = function(e) {
                var i = t.prototype.createShapePointsCfg.call(this, e);
                return i.size = this.getNormalizedSize(e), i;
            }, i.clearInner = function() {
                t.prototype.clearInner.call(this), this.set("defaultSize", null);
            }, e;
        }(a);
        a.Interval = u, t.exports = u;
    }, function(t, e, i) {
        function n(t) {
            var e = t.x, i = t.y, n = t.y0, r = t.size, o = n, s = i;
            a.isArray(i) && (s = i[1], o = i[0]);
            var u, c;
            return a.isArray(e) ? (u = e[0], c = e[1]) : (u = e - r / 2, c = e + r / 2), [ {
                x: u,
                y: o
            }, {
                x: u,
                y: s
            }, {
                x: c,
                y: s
            }, {
                x: c,
                y: o
            } ];
        }
        function r(t) {
            for (var e = [], i = [], n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                e.push(a.x), i.push(a.y);
            }
            var o = Math.min.apply(null, e), s = Math.min.apply(null, i);
            return {
                x: o,
                y: s,
                width: Math.max.apply(null, e) - o,
                height: Math.max.apply(null, i) - s
            };
        }
        var a = i(0), o = i(9), s = i(4), u = i(1), c = o.registerFactory("interval", {
            defaultShapeType: "rect",
            getDefaultPoints: function(t) {
                return n(t);
            }
        });
        o.registerShape("interval", "rect", {
            draw: function(t, e) {
                var i = this.parsePoints(t.points), n = a.mix({
                    fill: t.color
                }, u.shape.interval, t.style);
                if (t.isInCircle) {
                    var o = i.slice(0);
                    this._coord.transposed && (o = [ i[0], i[3], i[2], i[1] ]);
                    var c = t.center, l = c.x, h = c.y, f = [ 1, 0 ], p = [ o[0].x - l, o[0].y - h ], g = [ o[1].x - l, o[1].y - h ], d = [ o[2].x - l, o[2].y - h ], v = s.angleTo(f, g), y = s.angleTo(f, d), x = s.length(p), m = s.length(g);
                    return v >= 1.5 * Math.PI && (v -= 2 * Math.PI), y >= 1.5 * Math.PI && (y -= 2 * Math.PI), 
                    e.addShape("Sector", {
                        className: "interval",
                        attrs: a.mix({
                            x: l,
                            y: h,
                            r: m,
                            r0: x,
                            startAngle: v,
                            endAngle: y
                        }, n)
                    });
                }
                var _ = r(i);
                return e.addShape("rect", {
                    className: "interval",
                    attrs: a.mix(_, n)
                });
            }
        }), t.exports = c;
    }, function(t, e, i) {
        t.exports = {
            Stack: i(84),
            Dodge: i(86)
        };
    }, function(t, e, i) {
        var n = i(85);
        t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(10), a = i(7), o = i(22), s = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.xField = null, this.yField = null;
            }, i.processAdjust = function(t) {
                this.processStack(t);
            }, i.processStack = function(t) {
                var e = this, i = e.xField, n = e.yField, o = t.length, s = {
                    positive: {},
                    negative: {}
                };
                e.reverseOrder && (t = t.slice(0).reverse());
                for (var u = 0; u < o; u++) for (var c = t[u], l = 0, h = c.length; l < h; l++) {
                    var f = c[l], p = f[i] || 0, g = f[n], d = p.toString();
                    if (g = r(g) ? g[1] : g, !a(g)) {
                        var v = g >= 0 ? "positive" : "negative";
                        s[v][d] || (s[v][d] = 0), f[n] = [ s[v][d], g + s[v][d] ], s[v][d] += g;
                    }
                }
            }, e;
        }(o);
        o.Stack = s, t.exports = s;
    }, function(t, e, i) {
        var n = i(87);
        t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(22), a = i(3), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = [ "x", "y" ];
            }, i.getDodgeOffset = function(t, e, i) {
                var n = this, r = t.pre, a = t.next, o = a - r, s = o * n.dodgeRatio / i, u = n.marginRatio * s;
                return (r + a) / 2 + (.5 * (o - i * s - (i - 1) * u) + ((e + 1) * s + e * u) - .5 * s - .5 * o);
            }, i.processAdjust = function(t) {
                var e = this, i = t.length, n = e.xField;
                a(t, function(t, r) {
                    for (var a = 0, o = t.length; a < o; a++) {
                        var s = t[a], u = s[n], c = {
                            pre: u - .5,
                            next: u + .5
                        }, l = e.getDodgeOffset(c, r, i);
                        s[n] = l;
                    }
                });
            }, e;
        }(r);
        r.Dodge = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(21), a = i(4), o = i(23), s = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, 
                this.inner = 0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, 
                this.radius = null;
            }, i.init = function(t, e) {
                var i, n, r = this, a = r.inner || r.innerRadius, o = Math.abs(e.x - t.x), s = Math.abs(e.y - t.y);
                r.startAngle === -Math.PI && 0 === r.endAngle ? (i = Math.min(o / 2, s), n = {
                    x: (t.x + e.x) / 2,
                    y: t.y
                }) : (i = Math.min(o, s) / 2, n = {
                    x: (t.x + e.x) / 2,
                    y: (t.y + e.y) / 2
                });
                var u = r.radius;
                u > 0 && u <= 1 && (i *= u), this.x = {
                    start: r.startAngle,
                    end: r.endAngle
                }, this.y = {
                    start: i * a,
                    end: i
                }, this.center = n, this.circleRadius = i;
            }, i.convertPoint = function(t) {
                var e = this, i = e.center, n = e.transposed, r = n ? "y" : "x", a = n ? "x" : "y", o = e.x, s = e.y, u = o.start + (o.end - o.start) * t[r], c = s.start + (s.end - s.start) * t[a];
                return {
                    x: i.x + Math.cos(u) * c,
                    y: i.y + Math.sin(u) * c
                };
            }, i.invertPoint = function(t) {
                var e = this, i = e.center, n = e.transposed, r = e.x, s = e.y, u = n ? "y" : "x", c = n ? "x" : "y", l = [ 1, 0, 0, 1, 0, 0 ];
                o.rotate(l, l, r.start);
                var h = [ 1, 0 ];
                a.transformMat2d(h, h, l), h = [ h[0], h[1] ];
                var f = [ t.x - i.x, t.y - i.y ];
                if (a.zero(f)) return {
                    x: 0,
                    y: 0
                };
                var p = a.angleTo(h, f, r.end < r.start);
                Math.abs(p - 2 * Math.PI) < .001 && (p = 0);
                var g = a.length(f), d = p / (r.end - r.start);
                d = r.end - r.start > 0 ? d : -d;
                var v = (g - s.start) / (s.end - s.start), y = {};
                return y[u] = d, y[c] = v, y;
            }, e;
        }(r);
        r.Polar = s, t.exports = s;
    }, function(t, e, i) {
        var n = i(15), r = i(33);
        t.exports = {
            toTimeStamp: function(t) {
                return n(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), 
                r(t) && (t = t.getTime()), t;
            }
        };
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = {
            circle: function(t, e, i, n) {
                n.arc(t, e, i, 0, 2 * Math.PI, !1);
            },
            square: function(t, e, i, n) {
                n.moveTo(t - i, e - i), n.lineTo(t + i, e - i), n.lineTo(t + i, e + i), n.lineTo(t - i, e + i), 
                n.closePath();
            }
        }, o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initProperties = function() {
                t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                this._attrs.type = "marker";
            }, i.getDefaultAttrs = function() {
                return {
                    x: 0,
                    y: 0,
                    lineWidth: 0
                };
            }, i.createPath = function(t) {
                var e, i = this.get("attrs"), n = i.x, o = i.y, s = i.radius, u = i.symbol || "circle";
                e = r.isFunction(u) ? u : a[u], t.beginPath(), e(n, o, s, t, this);
            }, i.calculateBox = function() {
                var t = this.get("attrs"), e = t.x, i = t.y, n = t.radius;
                return {
                    minX: e - n,
                    minY: i - n,
                    maxX: e + n,
                    maxY: i + n
                };
            }, e;
        }(i(5).Shape);
        t.exports = o;
    }, function(t, e, i) {
        var n = i(0), r = i(5).Group, a = i(90), o = function() {
            function t(t) {
                n.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems();
            }
            var e = t.prototype;
            return e.getDefaultCfg = function() {
                return {
                    showTitle: !1,
                    title: null,
                    items: null,
                    titleGap: 12,
                    itemGap: 10,
                    itemMarginBottom: 12,
                    itemFormatter: null,
                    itemWidth: null,
                    wordSpace: 6,
                    x: 0,
                    y: 0,
                    layout: "horizontal",
                    joinString: ": "
                };
            }, e._init = function() {
                var t = new r({
                    zIndex: this.zIndex || 0
                });
                this.container = t;
                var e = t.addGroup();
                this.wrapper = e;
                var i = e.addGroup({
                    className: "itemsGroup"
                });
                this.itemsGroup = i, this.parent && this.parent.add(t);
            }, e._renderTitle = function(t) {
                t = t || this.title;
                var e = this.titleShape, i = 0;
                if (this.showTitle && t) {
                    if (e && !e.get("destroyed")) e.attr("text", t); else {
                        var r = this.wrapper, a = this.titleStyle;
                        e = r.addShape("text", {
                            className: "title",
                            attrs: n.mix({
                                x: 0,
                                y: 0,
                                text: t
                            }, a)
                        }), this.titleShape = e;
                    }
                    i = e.getBBox().height + this.titleGap;
                }
                this._titleHeight = i;
            }, e._renderItems = function(t) {
                var e = this;
                (t = t || e.items) && (e.reversed && t.reverse(), n.each(t, function(t, i) {
                    e._addItem(t, i);
                }), t.length > 1 && this._adjustItems(), this._renderBackground());
            }, e._renderBackground = function() {
                var t = this.background;
                if (t) {
                    var e = this.container, i = this.wrapper.getBBox(), r = i.minX, a = i.minY, o = i.width, s = i.height, u = t.padding || [ 0, 0, 0, 0 ];
                    u = n.parsePadding(u);
                    var c = n.mix({
                        x: r - u[3],
                        y: a - u[0],
                        width: o + u[1] + u[3],
                        height: s + u[0] + u[2]
                    }, t), l = this.backShape;
                    l ? l.attr(c) : l = e.addShape("Rect", {
                        zIndex: -1,
                        attrs: c
                    }), this.backShape = l, e.sort();
                }
            }, e._addItem = function(t) {
                var e = this.itemsGroup.addGroup({
                    name: t.name,
                    value: t.value,
                    dataValue: t.dataValue,
                    checked: t.checked
                }), i = this.unCheckStyle, r = this.unCheckColor, o = this.nameStyle, s = this.valueStyle, u = this.wordSpace, c = t.marker, l = t.value, h = 0;
                if (r && (i.fill = r), c) {
                    var f = c.radius || 3, p = n.mix({
                        x: f,
                        y: this._titleHeight
                    }, c);
                    !1 === t.checked && n.mix(p, i);
                    var g = new a({
                        className: "item-marker",
                        attrs: p
                    });
                    e.add(g), h += g.getBBox().width + u;
                }
                var d, v = t.name;
                if (v) {
                    var y = this.joinString || "";
                    v = l ? v + y : v, d = e.addShape("text", {
                        className: "name",
                        attrs: n.mix({
                            x: h,
                            y: this._titleHeight,
                            text: this._formatItemValue(v)
                        }, o, !1 === t.checked ? i : null)
                    });
                }
                if (l) {
                    var x = h;
                    d && (x += d.getBBox().width), e.addShape("text", {
                        className: "value",
                        attrs: n.mix({
                            x: x,
                            y: this._titleHeight,
                            text: l
                        }, s, !1 === t.checked ? i : null)
                    });
                }
                return e;
            }, e._formatItemValue = function(t) {
                var e = this.itemFormatter;
                return e && (t = e.call(this, t)), t;
            }, e._getMaxItemWidth = function() {
                var t = this.itemWidth;
                if (n.isNumber(t) || n.isNil(t)) return t;
                if ("auto" === t) {
                    for (var e = this.itemsGroup.get("children"), i = e.length, r = 0, a = 0; a < i; a++) {
                        var o = e[a].getBBox().width;
                        r = Math.max(r, o);
                    }
                    var s = this.maxLength, u = this.itemGap, c = (s - u) / 2, l = (s - 2 * u) / 3;
                    return 2 === i ? Math.max(r, c) : r <= l ? l : r <= c ? c : r;
                }
            }, e._adjustHorizontal = function() {
                for (var t, e, i = this.maxLength, n = this.itemsGroup.get("children"), r = this.itemGap, a = this.itemMarginBottom, o = this._titleHeight, s = 0, u = 0, c = this._getMaxItemWidth(), l = [], h = 0, f = n.length; h < f; h++) {
                    var p = n[h], g = p.getBBox(), d = g.height, v = g.width;
                    e = d + a, (t = c || v) - (i - u) > 1e-4 && (s++, u = 0), p.moveTo(u, s * e), l.push({
                        x: u,
                        y: s * e + o - d / 2,
                        width: 1.375 * v,
                        height: 1.375 * d
                    }), u += t + r;
                }
                this.legendHitBoxes = l;
            }, e._adjustVertical = function() {
                for (var t, e, i = this.maxLength, r = this.itemsGroup, a = this.itemGap, o = this.itemMarginBottom, s = this.itemWidth, u = this._titleHeight, c = r.get("children"), l = 0, h = 0, f = 0, p = [], g = 0, d = c.length; g < d; g++) {
                    var v = c[g], y = v.getBBox();
                    t = y.width, e = y.height, n.isNumber(s) ? h = s + a : t > h && (h = t + a), i - l < e ? (l = 0, 
                    f += h, v.moveTo(f, 0), p.push({
                        x: f,
                        y: u - e / 2,
                        width: 1.375 * t,
                        height: 1.375 * e
                    })) : (v.moveTo(f, l), p.push({
                        x: f,
                        y: l - e / 2 + u,
                        width: 1.375 * t,
                        height: 1.375 * e
                    })), l += e + o;
                }
                this.legendHitBoxes = p;
            }, e._adjustItems = function() {
                "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical();
            }, e.moveTo = function(t, e) {
                this.x = t, this.y = e;
                var i = this.container;
                return i && i.moveTo(t, e), this;
            }, e.setItems = function(t) {
                this.clearItems(), this._renderItems(t);
            }, e.setTitle = function(t) {
                this._renderTitle(t);
            }, e.clearItems = function() {
                this.itemsGroup.clear();
            }, e.getWidth = function() {
                return this.container.getBBox().width;
            }, e.getHeight = function() {
                return this.container.getBBox().height;
            }, e.show = function() {
                this.container.show();
            }, e.hide = function() {
                this.container.hide();
            }, e.clear = function() {
                var t = this.container;
                t.clear(), t.remove(!0);
            }, t;
        }();
        t.exports = o;
    }, function(t, e, i) {
        var n = i(0), r = {
            appear: {
                duration: 450,
                easing: "quadraticOut"
            },
            update: {
                duration: 300,
                easing: "quadraticOut"
            },
            enter: {
                duration: 300,
                easing: "quadraticOut"
            },
            leave: {
                duration: 350,
                easing: "quadraticIn"
            }
        }, a = {
            defaultCfg: {},
            Action: {},
            getAnimation: function(t, e, i) {
                var r = this.defaultCfg[t];
                if (r) {
                    var a = r[i];
                    if (n.isFunction(a)) return a(e);
                }
                return !1;
            },
            getAnimateCfg: function(t, e) {
                var i = r[e], a = this.defaultCfg[t];
                return a && a.cfg && a.cfg[e] ? n.deepMix({}, i, a.cfg[e]) : i;
            },
            registerAnimation: function(t, e) {
                this.Action || (this.Action = {}), this.Action[t] = e;
            }
        };
        t.exports = a;
    }, function(t, e, i) {
        var n = i(5).Matrix, r = i(0), a = {
            getCoordInfo: function(t) {
                var e = t.start, i = t.end;
                return {
                    start: e,
                    end: i,
                    width: i.x - e.x,
                    height: Math.abs(i.y - e.y)
                };
            },
            getScaledMatrix: function(t, e, i) {
                var r;
                t.apply(e);
                var a = e[0], o = e[1];
                if ("x" === i) {
                    t.transform([ [ "t", a, o ], [ "s", .01, 1 ], [ "t", -a, -o ] ]);
                    var s = t.getMatrix();
                    r = n.transform(s, [ [ "t", a, o ], [ "s", 100, 1 ], [ "t", -a, -o ] ]);
                } else if ("y" === i) {
                    t.transform([ [ "t", a, o ], [ "s", 1, .01 ], [ "t", -a, -o ] ]);
                    var u = t.getMatrix();
                    r = n.transform(u, [ [ "t", a, o ], [ "s", 1, 100 ], [ "t", -a, -o ] ]);
                } else if ("xy" === i) {
                    t.transform([ [ "t", a, o ], [ "s", .01, .01 ], [ "t", -a, -o ] ]);
                    var c = t.getMatrix();
                    r = n.transform(c, [ [ "t", a, o ], [ "s", 100, 100 ], [ "t", -a, -o ] ]);
                }
                return r;
            },
            getAnimateParam: function(t, e, i) {
                var n = {};
                return t.delay && (n.delay = r.isFunction(t.delay) ? t.delay(e, i) : t.delay), n.easing = t.easing, 
                n.duration = t.duration, n.delay = t.delay, n;
            },
            doAnimation: function(t, e, i, n) {
                var r = t._id, o = t.get("index"), s = a.getAnimateParam(i, o, r), u = s.easing, c = s.delay, l = s.duration, h = t.animate().to({
                    attrs: e,
                    duration: l,
                    delay: c,
                    easing: u
                });
                n && h.onEnd(function() {
                    n();
                });
            }
        };
        t.exports = a;
    }, , function(t, e, i) {
        var n = i(6);
        i(96), i(38), i(80), i(98), i(81), i(100), i(102), t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(6);
        i(97);
        var o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e;
            }, i.draw = function(t, e) {
                var i = this, n = i.get("container");
                r.each(t, function(t) {
                    var a = t.shape, o = i.getDrawCfg(t);
                    if (r.isArray(t.y)) {
                        var s = i.hasAdjust("stack");
                        r.each(t.y, function(r, u) {
                            o.y = r, s && 0 === u || i.drawShape(a, t, o, n, e);
                        });
                    } else r.isNil(t.y) || i.drawShape(a, t, o, n, e);
                });
            }, e;
        }(a);
        a.Point = o, t.exports = o;
    }, function(t, e, i) {
        function n(t) {
            var e = {
                lineWidth: 0,
                stroke: t.color,
                fill: t.color
            };
            return t.size && (e.size = t.size), a.mix(e, t.style), a.mix({}, o.shape.point, e);
        }
        function r(t, e, i) {
            if (0 !== t.size) {
                var r = n(t), o = r.r || r.size, s = t.x, u = a.isArray(t.y) ? t.y : [ t.y ];
                "hollowCircle" === i && (r.lineWidth = 1, r.fill = null);
                for (var c = 0, l = u.length; c < l; c++) return "rect" === i ? e.addShape("Rect", {
                    className: "point",
                    attrs: a.mix({
                        x: s - o,
                        y: u[c] - o,
                        width: 2 * o,
                        height: 2 * o
                    }, r)
                }) : e.addShape("Circle", {
                    className: "point",
                    attrs: a.mix({
                        x: s,
                        y: u[c],
                        r: o
                    }, r)
                });
            }
        }
        var a = i(0), o = i(1), s = i(20), u = i(9), c = [ "circle", "hollowCircle", "rect" ], l = u.registerFactory("point", {
            defaultShapeType: "circle",
            getDefaultPoints: function(t) {
                return s.splitPoints(t);
            }
        });
        a.each(c, function(t) {
            u.registerShape("point", t, {
                draw: function(e, i) {
                    return r(e, i, t);
                }
            });
        }), t.exports = l;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(6), a = i(20), o = i(0);
        i(99);
        var s = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, 
                e;
            }, i.draw = function(t, e) {
                var i = this, n = i.get("container"), r = this.getDrawCfg(t[0]), s = i.getYScale(), u = i.get("connectNulls"), c = a.splitArray(t, s.field, u);
                r.origin = t, o.each(c, function(a, o) {
                    r.splitedIndex = o;
                    var s = a.map(function(t) {
                        return t.points;
                    });
                    r.points = s, i.drawShape(r.shape, t[0], r, n, e);
                });
            }, e;
        }(r);
        r.Area = s, t.exports = s;
    }, function(t, e, i) {
        function n(t, e) {
            return Math.abs(t - e) < 1e-5;
        }
        function r(t) {
            return !isNaN(t) && !c.isNil(t);
        }
        function a(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var a = t[i];
                r(a.x) && r(a.y) && e.push(a);
            }
            return e;
        }
        function o(t, e) {
            var i = !0;
            return c.each(t, function(t) {
                if (!n(t.x, e.x) || !n(t.y, e.y)) return i = !1, !1;
            }), i;
        }
        function s(t, e, i, n, r) {
            var o = t.concat(e);
            return r ? i.addShape("Custom", {
                className: "area",
                attrs: c.mix({
                    points: o
                }, n),
                createPath: function(t) {
                    var e = [ [ 0, 0 ], [ 1, 1 ] ], i = a(this._attrs.attrs.points), n = i.length, r = i.slice(0, n / 2), o = i.slice(n / 2, n), s = h.smooth(r, !1, e);
                    t.beginPath(), t.moveTo(r[0].x, r[0].y);
                    for (var u = 0, c = s.length; u < c; u++) {
                        var l = s[u];
                        t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
                    }
                    if (o.length) {
                        var f = h.smooth(o, !1, e);
                        t.lineTo(o[0].x, o[0].y);
                        for (var p = 0, g = f.length; p < g; p++) {
                            var d = f[p];
                            t.bezierCurveTo(d[1], d[2], d[3], d[4], d[5], d[6]);
                        }
                    }
                    t.closePath();
                },
                calculateBox: function() {
                    var t = a(this._attrs.attrs.points);
                    return f.getBBoxFromPoints(t);
                }
            }) : i.addShape("Polyline", {
                className: "area",
                attrs: c.mix({
                    points: o
                }, n)
            });
        }
        function u(t, e, i) {
            var n = this, r = t.points, a = [], u = [];
            c.each(r, function(t) {
                u.push(t[0]), a.push(t[1]);
            });
            var l = c.mix({
                fillStyle: t.color
            }, p.shape.area, t.style);
            return u.reverse(), a = n.parsePoints(a), u = n.parsePoints(u), t.isInCircle && (a.push(a[0]), 
            u.unshift(u[u.length - 1]), o(u, t.center) && (u = [])), s(a, u, e, l, i);
        }
        var c = i(0), l = i(9), h = i(37), f = i(11), p = i(1), g = l.registerFactory("area", {
            defaultShapeType: "area",
            getDefaultPoints: function(t) {
                var e = t.x, i = t.y, n = t.y0;
                i = c.isArray(i) ? i : [ n, i ];
                var r = [];
                return r.push({
                    x: e,
                    y: i[0]
                }, {
                    x: e,
                    y: i[1]
                }), r;
            }
        }), d = [ "area", "smooth" ];
        c.each(d, function(t) {
            l.registerShape("area", t, {
                draw: function(e, i) {
                    var n = "smooth" === t;
                    return u.call(this, e, i, n);
                }
            });
        }), t.exports = g;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(6), a = i(0);
        i(101);
        var o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e;
            }, i.createShapePointsCfg = function(e) {
                var i, n = t.prototype.createShapePointsCfg.call(this, e), r = this, o = n.x, s = n.y;
                if (!a.isArray(o) || !a.isArray(s)) {
                    var u = r.getXScale(), c = r.getYScale(), l = .5 / (u.values ? u.values.length : u.ticks.length), h = .5 / (c.values ? c.values.length : c.ticks.length);
                    u.isCategory && c.isCategory ? (o = [ o - l, o - l, o + l, o + l ], s = [ s - h, s + h, s + h, s - h ]) : a.isArray(o) ? (o = [ (i = o)[0], i[0], i[1], i[1] ], 
                    s = [ s - h / 2, s + h / 2, s + h / 2, s - h / 2 ]) : a.isArray(s) && (s = [ (i = s)[0], i[1], i[1], i[0] ], 
                    o = [ o - l / 2, o - l / 2, o + l / 2, o + l / 2 ]), n.x = o, n.y = s;
                }
                return n;
            }, e;
        }(r);
        r.Polygon = o, t.exports = o;
    }, function(t, e, i) {
        var n = i(9), r = i(0), a = n.registerFactory("polygon", {
            defaultShapeType: "polygon",
            getDefaultPoints: function(t) {
                for (var e = [], i = t.x, n = t.y, r = 0, a = i.length; r < a; r++) e.push({
                    x: i[r],
                    y: n[r]
                });
                return e;
            }
        });
        n.registerShape("polygon", "polygon", {
            draw: function(t, e) {
                var i = this.parsePoints(t.points), n = r.mix({
                    fill: t.color,
                    points: i
                }, t.style);
                return e.addShape("Polygon", {
                    className: "polygon",
                    attrs: n
                });
            }
        }), t.exports = a;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        function r(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        var a = i(6), o = i(0), s = i(39);
        i(103);
        var u = function(t) {
            function e(e) {
                var i;
                return i = t.call(this, e) || this, o.mix(r(r(i)), s), i;
            }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() {
                var e = t.prototype.getDefaultCfg.call(this);
                return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e;
            }, i.createShapePointsCfg = function(e) {
                var i = t.prototype.createShapePointsCfg.call(this, e);
                return i.size = this.getNormalizedSize(e), i;
            }, i.clearInner = function() {
                t.prototype.clearInner.call(this), this.set("defaultSize", null);
            }, e;
        }(a);
        a.Schema = u, t.exports = u;
    }, function(t, e, i) {
        function n(t) {
            var e = t.sort(function(t, e) {
                return t < e ? 1 : -1;
            }), i = e.length;
            if (i < 4) for (var n = e[i - 1], r = 0; r < 4 - i; r++) e.push(n);
            return e;
        }
        function r(t, e, i) {
            var r = n(e);
            return [ {
                x: t,
                y: r[0]
            }, {
                x: t,
                y: r[1]
            }, {
                x: t - i / 2,
                y: r[2]
            }, {
                x: t - i / 2,
                y: r[1]
            }, {
                x: t + i / 2,
                y: r[1]
            }, {
                x: t + i / 2,
                y: r[2]
            }, {
                x: t,
                y: r[2]
            }, {
                x: t,
                y: r[3]
            } ];
        }
        var a = i(9), o = i(0), s = a.registerFactory("schema", {});
        a.registerShape("schema", "candle", {
            getPoints: function(t) {
                return r(t.x, t.y, t.size);
            },
            draw: function(t, e) {
                var i = this.parsePoints(t.points), n = o.mix({
                    stroke: t.color,
                    fill: t.color,
                    lineWidth: 1
                }, t.style);
                return e.addShape("Custom", {
                    className: "schema",
                    attrs: n,
                    createPath: function(t) {
                        t.beginPath(), t.moveTo(i[0].x, i[0].y), t.lineTo(i[1].x, i[1].y), t.moveTo(i[2].x, i[2].y);
                        for (var e = 3; e < 6; e++) t.lineTo(i[e].x, i[e].y);
                        t.closePath(), t.moveTo(i[6].x, i[6].y), t.lineTo(i[7].x, i[7].y);
                    }
                });
            }
        }), t.exports = s;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(24), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, 
                this.radius = null, this.center = null;
            }, i.getOffsetPoint = function(t) {
                var e = this.startAngle, i = e + (this.endAngle - e) * t;
                return this._getCirclePoint(i);
            }, i._getCirclePoint = function(t, e) {
                var i = this, n = i.center;
                return e = e || i.radius, {
                    x: n.x + Math.cos(t) * e,
                    y: n.y + Math.sin(t) * e
                };
            }, i.getTextAlignInfo = function(t, e) {
                var i, n = this.getOffsetVector(t, e), r = "middle";
                return n[0] > 0 ? i = "left" : n[0] < 0 ? i = "right" : (i = "center", n[1] > 0 ? r = "top" : n[1] < 0 && (r = "bottom")), 
                {
                    textAlign: i,
                    textBaseline: r
                };
            }, i.getAxisVector = function(t) {
                var e = this.center, i = this.offsetFactor;
                return [ (t.y - e.y) * i, -1 * (t.x - e.x) * i ];
            }, i.drawLine = function(t) {
                var e = this.center, i = this.radius, n = this.startAngle, a = this.endAngle;
                this.getContainer(t.top).addShape("arc", {
                    className: "axis-line",
                    attrs: r.mix({
                        x: e.x,
                        y: e.y,
                        r: i,
                        startAngle: n,
                        endAngle: a
                    }, t)
                });
            }, e;
        }(a);
        a.Circle = o, t.exports = o;
    }, function(t, e, i) {
        var n = i(106);
        t.exports = n;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(14), a = i(34), o = i(107), s = i(35), u = i(89), c = i(3), l = i(13), h = i(18), f = i(15), p = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, 
                this.tickCount = 5, this.mask = "YYYY-MM-DD";
            }, i.init = function() {
                var t = this, e = this.values;
                c(e, function(i, n) {
                    e[n] = t._toTimeStamp(i);
                }), this.sortable && e.sort(function(t, e) {
                    return t - e;
                }), t.ticks || (t.ticks = this.calculateTicks());
            }, i.calculateTicks = function() {
                var t = this, e = t.tickCount;
                return e ? s({
                    maxCount: e,
                    data: t.values,
                    isRounding: t.isRounding
                }).ticks : t.values;
            }, i.translate = function(t) {
                t = this._toTimeStamp(t);
                var e = this.values.indexOf(t);
                return -1 === e && (e = l(t) && t < this.values.length ? t : NaN), e;
            }, i.scale = function(t) {
                var e, i = this.rangeMin(), n = this.rangeMax(), r = this.translate(t);
                return e = 1 === this.values.length || isNaN(r) ? r : r > -1 ? r / (this.values.length - 1) : 0, 
                i + e * (n - i);
            }, i.getText = function(t) {
                var e = "", i = this.translate(t);
                e = i > -1 ? this.values[i] : t;
                var n = this.formatter;
                return e = parseInt(e, 10), e = n ? n(e) : o.format(e, this.mask);
            }, i.getTicks = function() {
                var t = this, e = this.ticks, i = [];
                return c(e, function(e) {
                    var n;
                    n = h(e) ? e : {
                        text: f(e) ? e : t.getText(e),
                        value: t.scale(e),
                        tickValue: e
                    }, i.push(n);
                }), i;
            }, i._toTimeStamp = function(t) {
                return u.toTimeStamp(t);
            }, e;
        }(a);
        r.TimeCat = p, t.exports = p;
    }, function(t, e, i) {
        var n;
        !function(r) {
            function a(t, e) {
                for (var i = [], n = 0, r = t.length; n < r; n++) i.push(t[n].substr(0, e));
                return i;
            }
            function o(t) {
                return function(e, i, n) {
                    var r = n[t].indexOf(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
                    ~r && (e.month = r);
                };
            }
            function s(t, e) {
                for (t = String(t), e = e || 2; t.length < e; ) t = "0" + t;
                return t;
            }
            var u = {}, c = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, l = /\d\d?/, h = /\d{3}/, f = /\d{4}/, p = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, g = /\[([^]*?)\]/gm, d = function() {}, v = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], y = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], x = a(y, 3), m = a(v, 3);
            u.i18n = {
                dayNamesShort: m,
                dayNames: v,
                monthNamesShort: x,
                monthNames: y,
                amPm: [ "am", "pm" ],
                DoFn: function(t) {
                    return t + [ "th", "st", "nd", "rd" ][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10];
                }
            };
            var _ = {
                D: function(t) {
                    return t.getDate();
                },
                DD: function(t) {
                    return s(t.getDate());
                },
                Do: function(t, e) {
                    return e.DoFn(t.getDate());
                },
                d: function(t) {
                    return t.getDay();
                },
                dd: function(t) {
                    return s(t.getDay());
                },
                ddd: function(t, e) {
                    return e.dayNamesShort[t.getDay()];
                },
                dddd: function(t, e) {
                    return e.dayNames[t.getDay()];
                },
                M: function(t) {
                    return t.getMonth() + 1;
                },
                MM: function(t) {
                    return s(t.getMonth() + 1);
                },
                MMM: function(t, e) {
                    return e.monthNamesShort[t.getMonth()];
                },
                MMMM: function(t, e) {
                    return e.monthNames[t.getMonth()];
                },
                YY: function(t) {
                    return String(t.getFullYear()).substr(2);
                },
                YYYY: function(t) {
                    return s(t.getFullYear(), 4);
                },
                h: function(t) {
                    return t.getHours() % 12 || 12;
                },
                hh: function(t) {
                    return s(t.getHours() % 12 || 12);
                },
                H: function(t) {
                    return t.getHours();
                },
                HH: function(t) {
                    return s(t.getHours());
                },
                m: function(t) {
                    return t.getMinutes();
                },
                mm: function(t) {
                    return s(t.getMinutes());
                },
                s: function(t) {
                    return t.getSeconds();
                },
                ss: function(t) {
                    return s(t.getSeconds());
                },
                S: function(t) {
                    return Math.round(t.getMilliseconds() / 100);
                },
                SS: function(t) {
                    return s(Math.round(t.getMilliseconds() / 10), 2);
                },
                SSS: function(t) {
                    return s(t.getMilliseconds(), 3);
                },
                a: function(t, e) {
                    return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
                },
                A: function(t, e) {
                    return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase();
                },
                ZZ: function(t) {
                    var e = t.getTimezoneOffset();
                    return (e > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4);
                }
            }, S = {
                D: [ l, function(t, e) {
                    t.day = e;
                } ],
                Do: [ new RegExp(l.source + p.source), function(t, e) {
                    t.day = parseInt(e, 10);
                } ],
                M: [ l, function(t, e) {
                    t.month = e - 1;
                } ],
                YY: [ l, function(t, e) {
                    var i = +("" + new Date().getFullYear()).substr(0, 2);
                    t.year = "" + (e > 68 ? i - 1 : i) + e;
                } ],
                h: [ l, function(t, e) {
                    t.hour = e;
                } ],
                m: [ l, function(t, e) {
                    t.minute = e;
                } ],
                s: [ l, function(t, e) {
                    t.second = e;
                } ],
                YYYY: [ f, function(t, e) {
                    t.year = e;
                } ],
                S: [ /\d/, function(t, e) {
                    t.millisecond = 100 * e;
                } ],
                SS: [ /\d{2}/, function(t, e) {
                    t.millisecond = 10 * e;
                } ],
                SSS: [ h, function(t, e) {
                    t.millisecond = e;
                } ],
                d: [ l, d ],
                ddd: [ p, d ],
                MMM: [ p, o("monthNamesShort") ],
                MMMM: [ p, o("monthNames") ],
                a: [ p, function(t, e, i) {
                    var n = e.toLowerCase();
                    n === i.amPm[0] ? t.isPm = !1 : n === i.amPm[1] && (t.isPm = !0);
                } ],
                ZZ: [ /([\+\-]\d\d:?\d\d|Z)/, function(t, e) {
                    "Z" === e && (e = "+00:00");
                    var i, n = (e + "").match(/([\+\-]|\d\d)/gi);
                    n && (i = 60 * n[1] + parseInt(n[2], 10), t.timezoneOffset = "+" === n[0] ? i : -i);
                } ]
            };
            S.dd = S.d, S.dddd = S.ddd, S.DD = S.D, S.mm = S.m, S.hh = S.H = S.HH = S.h, S.MM = S.M, 
            S.ss = S.s, S.A = S.a, u.masks = {
                default: "ddd MMM DD YYYY HH:mm:ss",
                shortDate: "M/D/YY",
                mediumDate: "MMM D, YYYY",
                longDate: "MMMM D, YYYY",
                fullDate: "dddd, MMMM D, YYYY",
                shortTime: "HH:mm",
                mediumTime: "HH:mm:ss",
                longTime: "HH:mm:ss.SSS"
            }, u.format = function(t, e, i) {
                var n = i || u.i18n;
                if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format");
                var r = [];
                return e = (e = u.masks[e] || e || u.masks.default).replace(g, function(t, e) {
                    return r.push(e), "??";
                }), (e = e.replace(c, function(e) {
                    return e in _ ? _[e](t, n) : e.slice(1, e.length - 1);
                })).replace(/\?\?/g, function() {
                    return r.shift();
                });
            }, u.parse = function(t, e, i) {
                var n = i || u.i18n;
                if ("string" != typeof e) throw new Error("Invalid format in fecha.parse");
                if (e = u.masks[e] || e, t.length > 1e3) return !1;
                var r = !0, a = {};
                if (e.replace(c, function(e) {
                    if (S[e]) {
                        var i = S[e], o = t.search(i[0]);
                        ~o ? t.replace(i[0], function(e) {
                            return i[1](a, e, n), t = t.substr(o + e.length), e;
                        }) : r = !1;
                    }
                    return S[e] ? "" : e.slice(1, e.length - 1);
                }), !r) return !1;
                var o = new Date();
                !0 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : !1 === a.isPm && 12 == +a.hour && (a.hour = 0);
                var s;
                return null != a.timezoneOffset ? (a.minute = +(a.minute || 0) - +a.timezoneOffset, 
                s = new Date(Date.UTC(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0))) : s = new Date(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0), 
                s;
            }, void 0 !== t && t.exports ? t.exports = u : void 0 !== (n = function() {
                return u;
            }.call(e, i, e, t)) && (t.exports = n);
        }();
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(12), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "arc", this.start = [], this.end = [], this.style = {
                    stroke: "#999",
                    lineWidth: 1
                };
            }, i.render = function(t, e) {
                var i = this, n = i.parsePoint(t, i.start), a = i.parsePoint(t, i.end);
                if (n && a) {
                    var o = t.center, s = Math.sqrt((n.x - o.x) * (n.x - o.x) + (n.y - o.y) * (n.y - o.y)), u = Math.atan2(n.y - o.y, n.x - o.x), c = Math.atan2(a.y - o.y, a.x - o.x), l = e.addShape("arc", {
                        className: "guide-arc",
                        attrs: r.mix({
                            x: o.x,
                            y: o.y,
                            r: s,
                            startAngle: u,
                            endAngle: c
                        }, i.style)
                    });
                    return i.element = l, l;
                }
            }, e;
        }(a);
        a.Arc = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        function r(t, e, i, n) {
            var r = [];
            return "left" === t && "top" === e ? (r[0] = 0, r[1] = 0) : "right" === t && "top" === e ? (r[0] = -i, 
            r[1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0, r[1] = Math.floor(-n)) : "right" === t && "bottom" === e ? (r[0] = Math.floor(-i), 
            r[1] = Math.floor(-n)) : "right" === t && "middle" === e ? (r[0] = Math.floor(-i), 
            r[1] = Math.floor(-n / 2)) : "left" === t && "middle" === e ? (r[0] = 0, r[1] = Math.floor(-n / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-i / 2), 
            r[1] = Math.floor(-n)) : "center" === t && "top" === e ? (r[0] = Math.floor(-i / 2), 
            r[1] = 0) : (r[0] = Math.floor(-i / 2), r[1] = Math.floor(-n / 2)), r;
        }
        function a(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i]);
            return t;
        }
        function o(t) {
            var e = document.createElement("div");
            return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0];
        }
        var s = i(0), u = i(12), c = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", 
                this.offsetX = null, this.offsetY = null, this.html = null;
            }, i.render = function(t, e) {
                var i = this, n = i.parsePoint(t, i.position);
                if (n) {
                    var u = o(i.html);
                    u = a(u, {
                        position: "absolute",
                        top: Math.floor(n.y) + "px",
                        left: Math.floor(n.x) + "px",
                        visibility: "hidden"
                    });
                    var c = e.get("canvas").get("el"), l = c.parentNode;
                    l = a(l, {
                        position: "relative"
                    });
                    var h = o('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
                    l.appendChild(h), h.appendChild(u);
                    var f = c.offsetTop, p = c.offsetLeft, g = i.alignX, d = i.alignY, v = i.offsetX, y = i.offsetY, x = r(g, d, s.getWidth(u), s.getHeight(u));
                    n.x = n.x + x[0] + p, n.y = n.y + x[1] + f, v && (n.x += v), y && (n.y += y), a(u, {
                        top: Math.floor(n.y) + "px",
                        left: Math.floor(n.x) + "px",
                        visibility: "visible"
                    }), i.element = h;
                }
            }, i.remove = function() {
                var t = this.element;
                t && t.parentNode && t.parentNode.removeChild(t);
            }, e;
        }(u);
        u.Html = c, t.exports = c;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(12), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "line", this.start = [], this.end = [], this.style = {
                    stroke: "#000",
                    lineWidth: 1
                };
            }, i.render = function(t, e) {
                var i = [];
                if (i[0] = this.parsePoint(t, this.start), i[1] = this.parsePoint(t, this.end), 
                i[0] && i[1]) {
                    var n = e.addShape("Line", {
                        className: "guide-line",
                        attrs: r.mix({
                            x1: i[0].x,
                            y1: i[0].y,
                            x2: i[1].x,
                            y2: i[1].y
                        }, this.style)
                    });
                    return this.element = n, n;
                }
            }, e;
        }(a);
        a.Line = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(12), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "rect", this.start = [], this.end = [], this.style = {
                    fill: "#CCD7EB",
                    opacity: .4
                };
            }, i.render = function(t, e) {
                var i = this.parsePoint(t, this.start), n = this.parsePoint(t, this.end);
                if (i && n) {
                    var a = e.addShape("rect", {
                        className: "guide-rect",
                        attrs: r.mix({
                            x: Math.min(i.x, n.x),
                            y: Math.min(i.y, n.y),
                            width: Math.abs(n.x - i.x),
                            height: Math.abs(i.y - n.y)
                        }, this.style)
                    });
                    return this.element = a, a;
                }
            }, e;
        }(a);
        a.Rect = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(12), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "text", this.position = null, this.content = null, this.style = {
                    fill: "#000"
                }, this.offsetX = 0, this.offsetY = 0;
            }, i.render = function(t, e) {
                var i = this.position, n = this.parsePoint(t, i);
                if (n) {
                    var a = this.content, o = this.style, s = this.offsetX, u = this.offsetY;
                    s && (n.x += s), u && (n.y += u);
                    var c = e.addShape("text", {
                        className: "guide-text",
                        attrs: r.mix({
                            x: n.x,
                            y: n.y,
                            text: a
                        }, o)
                    });
                    return this.element = c, c;
                }
            }, e;
        }(a);
        a.Text = o, t.exports = o;
    }, function(t, e, i) {
        function n(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
        }
        var r = i(0), a = i(12), o = function(t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            n(e, t);
            var i = e.prototype;
            return i._initDefaultCfg = function() {
                this.type = "tag", this.position = null, this.content = null, this.direct = "tl", 
                this.autoAdjust = !0, this.offsetX = 0, this.offsetY = 0, this.side = 4, this.background = {
                    padding: 5,
                    radius: 2,
                    fill: "#1890FF"
                }, this.textStyle = {
                    fontSize: 12,
                    fill: "#fff",
                    textAlign: "center",
                    textBaseline: "middle"
                }, this.withPoint = !0, this.pointStyle = {
                    fill: "#1890FF",
                    r: 3,
                    lineWidth: 1,
                    stroke: "#fff"
                };
            }, i._getDirect = function(t, e, i, n) {
                var r = this.direct, a = this.side, o = t.get("canvas"), s = o.get("width"), u = o.get("height"), c = e.x, l = e.y, h = r[0], f = r[1];
                "t" === h && l - a - n < 0 ? h = "b" : "b" === h && l + a + n > u && (h = "t");
                var p = "c" === h ? a : 0;
                return "l" === f && c - p - i < 0 ? f = "r" : "r" === f && c + p + i > s ? f = "l" : "c" === f && (i / 2 + c + p > s ? f = "l" : c - i / 2 - p < 0 && (f = "r")), 
                r = h + f;
            }, i.render = function(t, e) {
                var i = this.parsePoint(t, this.position);
                if (i) {
                    var n = this.content, a = this.background, o = this.textStyle, s = [], u = e.addGroup({
                        className: "guide-tag"
                    });
                    if (this.withPoint) {
                        var c = u.addShape("Circle", {
                            className: "guide-tag-point",
                            attrs: r.mix({
                                x: i.x,
                                y: i.y
                            }, this.pointStyle)
                        });
                        s.push(c);
                    }
                    var l = u.addGroup(), h = l.addShape("text", {
                        className: "guide-tag-text",
                        zIndex: 1,
                        attrs: r.mix({
                            x: 0,
                            y: 0,
                            text: n
                        }, o)
                    });
                    s.push(h);
                    var f = h.getBBox(), p = r.parsePadding(a.padding), g = f.width + p[1] + p[3], d = f.height + p[0] + p[2], v = f.minY - p[0], y = f.minX - p[3], x = l.addShape("rect", {
                        className: "guide-tag-bg",
                        zIndex: -1,
                        attrs: r.mix({
                            x: y,
                            y: v,
                            width: g,
                            height: d
                        }, a)
                    });
                    s.push(x);
                    var m, _ = this.autoAdjust ? this._getDirect(e, i, g, d) : this.direct, S = this.side, b = i.x + this.offsetX, P = i.y + this.offsetY, w = r.parsePadding(a.radius);
                    "tl" === _ ? (m = [ {
                        x: g + y - S - 1,
                        y: d + v - 1
                    }, {
                        x: g + y,
                        y: d + v - 1
                    }, {
                        x: g + y,
                        y: d + S + v
                    } ], w[2] = 0, b -= g, P = P - S - d) : "cl" === _ ? (m = [ {
                        x: g + y - 1,
                        y: (d - S) / 2 + v - 1
                    }, {
                        x: g + y - 1,
                        y: (d + S) / 2 + v + 1
                    }, {
                        x: g + S + y,
                        y: d / 2 + v
                    } ], b = b - g - S, P -= d / 2) : "bl" === _ ? (m = [ {
                        x: g + y,
                        y: -S + v
                    }, {
                        x: g + y - S - 1,
                        y: v + 1
                    }, {
                        x: g + y,
                        y: v + 1
                    } ], w[1] = 0, b -= g, P += S) : "bc" === _ ? (m = [ {
                        x: g / 2 + y,
                        y: -S + v
                    }, {
                        x: (g - S) / 2 + y - 1,
                        y: v + 1
                    }, {
                        x: (g + S) / 2 + y + 1,
                        y: v + 1
                    } ], b -= g / 2, P += S) : "br" === _ ? (m = [ {
                        x: y,
                        y: v - S
                    }, {
                        x: y,
                        y: v + 1
                    }, {
                        x: y + S + 1,
                        y: v + 1
                    } ], w[0] = 0, P += S) : "cr" === _ ? (m = [ {
                        x: y - S,
                        y: d / 2 + v
                    }, {
                        x: y + 1,
                        y: (d - S) / 2 + v - 1
                    }, {
                        x: y + 1,
                        y: (d + S) / 2 + v + 1
                    } ], b += S, P -= d / 2) : "tr" === _ ? (m = [ {
                        x: y,
                        y: d + S + v
                    }, {
                        x: y,
                        y: d + v - 1
                    }, {
                        x: S + y + 1,
                        y: d + v - 1
                    } ], w[3] = 0, P = P - d - S) : "tc" === _ && (m = [ {
                        x: (g - S) / 2 + y - 1,
                        y: d + v - 1
                    }, {
                        x: (g + S) / 2 + y + 1,
                        y: d + v - 1
                    }, {
                        x: g / 2 + y,
                        y: d + S + v
                    } ], b -= g / 2, P = P - d - S);
                    var C = l.addShape("Polygon", {
                        className: "guide-tag-side",
                        zIndex: 0,
                        attrs: {
                            points: m,
                            fill: a.fill
                        }
                    });
                    return s.push(C), x.attr("radius", w), l.moveTo(b - y, P - v), l.sort(), this.element = u, 
                    s;
                }
            }, e;
        }(a);
        a.Tag = o, t.exports = o;
    }, function(t, e, i) {
        function n(t) {
            var e = t.getAttr("color");
            if (e) {
                var i = e.getScale(e.type);
                if (i.isLinear) return i;
            }
            var n = t.getXScale();
            return t.getYScale() || n;
        }
        function r(t, e) {
            var i, r, a = t._getGroupScales();
            if (a.length && l.each(a, function(t) {
                return r = t, !1;
            }), r) {
                var o = r.field;
                i = r.getText(e[o]);
            } else {
                var s = n(t);
                i = s.alias || s.field;
            }
            return i;
        }
        function a(t, e) {
            var i = n(t);
            return i.getText(e[i.field]);
        }
        function o(t, e) {
            var i = t.getAttr("position").getFields()[0], n = t.get("scales")[i];
            return n.getText(e[n.field]);
        }
        function s(t, e) {
            var i = -1;
            return l.each(t, function(t, n) {
                if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return i = n, 
                !1;
            }), i;
        }
        function u(t) {
            var e = [];
            return l.each(t, function(t) {
                var i = s(e, t);
                -1 === i ? e.push(t) : e[i] = t;
            }), e;
        }
        function c(t, e) {
            return JSON.stringify(t) === JSON.stringify(e);
        }
        var l = i(0), h = i(1), f = i(115), p = i(26);
        h.tooltip = l.deepMix({
            triggerOn: [ "touchstart", "touchmove" ],
            alwaysShow: !1,
            showTitle: !1,
            showCrosshairs: !1,
            crosshairsStyle: {
                stroke: "rgba(0, 0, 0, 0.25)",
                lineWidth: 1
            },
            showTooltipMarker: !0,
            background: {
                radius: 1,
                fill: "rgba(0, 0, 0, 0.65)",
                padding: [ 3, 5 ]
            },
            titleStyle: {
                fontSize: 12,
                fill: "#fff",
                textAlign: "start",
                textBaseline: "top"
            },
            nameStyle: {
                fontSize: 12,
                fill: "rgba(255, 255, 255, 0.65)",
                textAlign: "start",
                textBaseline: "middle"
            },
            valueStyle: {
                fontSize: 12,
                fill: "#fff",
                textAlign: "start",
                textBaseline: "middle"
            },
            showItemMarker: !0,
            itemMarkerStyle: {
                radius: 3,
                symbol: "circle",
                lineWidth: 1,
                stroke: "#fff"
            },
            layout: "horizontal",
            snap: !1
        }, h.tooltip || {});
        var g = function() {
            function t(t) {
                this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, 
                l.mix(this, t);
                var e = this.chart;
                this.canvasDom = e.get("canvas").get("el");
            }
            var e = t.prototype;
            return e._setCrosshairsCfg = function() {
                var t = this.chart, e = l.mix({}, h.tooltip), i = t.get("geoms"), n = [];
                l.each(i, function(t) {
                    var e = t.get("type");
                    -1 === n.indexOf(e) && n.push(e);
                });
                var r = t.get("coord").type;
                return !i.length || "cartesian" !== r && "rect" !== r || 1 === n.length && -1 !== [ "line", "area", "path", "point" ].indexOf(n[0]) && l.mix(e, {
                    showCrosshairs: !0
                }), e;
            }, e._getMaxLength = function(t) {
                void 0 === t && (t = {});
                var e = t, i = e.layout, n = e.plotRange;
                return "horizontal" === i ? n.br.x - n.bl.x : n.bl.y - n.tr.y;
            }, e.render = function() {
                var t = this;
                if (!t.tooltip) {
                    var e = t.chart, i = e.get("canvas"), n = e.get("frontPlot").addGroup({
                        className: "tooltipContainer",
                        zIndex: 10
                    }), r = e.get("backPlot").addGroup({
                        className: "tooltipContainer"
                    }), a = e.get("plotRange"), o = e.get("coord"), s = t._setCrosshairsCfg(), u = t.cfg;
                    (u = l.deepMix({
                        plotRange: a,
                        frontPlot: n,
                        backPlot: r,
                        canvas: i,
                        fixed: o.transposed || o.isPolar
                    }, s, u)).maxLength = t._getMaxLength(u), this.cfg = u;
                    var c = new f(u);
                    t.tooltip = c, t.bindEvents();
                }
            }, e.clear = function() {
                var t = this.tooltip;
                t && t.destroy(), this.tooltip = null, this.prePoint = null, this._lastActive = null, 
                this.unBindEvents();
            }, e._getTooltipMarkerStyle = function(t) {
                void 0 === t && (t = {});
                var e = t, i = e.type, n = e.items, r = this.cfg;
                if ("rect" === i) {
                    var a, o, s, u, c = this.chart, h = c.get("plotRange"), f = h.tl, p = h.br, g = c.get("coord"), d = n[0], v = n[n.length - 1], y = d.width;
                    g.transposed ? (a = f.x, o = v.y - .75 * y, s = p.x - f.x, u = d.y - v.y + 1.5 * y) : (a = d.x - .75 * y, 
                    o = f.y, s = v.x - d.x + 1.5 * y, u = p.y - f.y), t.style = l.mix({
                        x: a,
                        y: o,
                        width: s,
                        height: u,
                        fill: "#CCD6EC",
                        opacity: .3
                    }, r.tooltipMarkerStyle);
                } else t.style = l.mix({
                    radius: 4,
                    fill: "#fff",
                    lineWidth: 2
                }, r.tooltipMarkerStyle);
                return t;
            }, e._setTooltip = function(t, e, i) {
                void 0 === i && (i = {});
                var n = this._lastActive, r = this.tooltip, a = this.cfg;
                e = u(e);
                var o = this.chart, s = o.get("coord"), h = o.getYScales()[0], f = a.snap;
                if (!1 === f && h.isLinear) {
                    var g, d, v = s.invertPoint(t), y = o.get("plotRange");
                    p.isPointInPlot(t, y) && (s.transposed ? (g = h.invert(v.x), d = t.x, r.setXTipContent(g), 
                    r.setXTipPosition(d), r.setYCrosshairPosition(d)) : (g = h.invert(v.y), d = t.y, 
                    r.setYTipContent(g), r.setYTipPosition(d), r.setXCrosshairPosition(d)));
                }
                if (a.onShow && a.onShow({
                    x: t.x,
                    y: t.y,
                    tooltip: r,
                    items: e,
                    tooltipMarkerCfg: i
                }), c(n, e)) !1 === f && (l.directionEnabled(a.crosshairsType, "y") || a.showYTip) && this.chart.get("canvas").draw(); else {
                    this._lastActive = e;
                    var x = a.onChange;
                    x && x({
                        x: t.x,
                        y: t.y,
                        tooltip: r,
                        items: e,
                        tooltipMarkerCfg: i
                    });
                    var m = e[0], _ = m.title || m.name, S = m.x;
                    if (e.length > 1 && (S = (e[0].x + e[e.length - 1].x) / 2), r.setContent(_, e, s.transposed), 
                    r.setPosition(e, t), s.transposed) {
                        var b = m.y;
                        e.length > 1 && (b = (e[0].y + e[e.length - 1].y) / 2), r.setYTipContent(_), r.setYTipPosition(b), 
                        r.setXCrosshairPosition(b), f && (r.setXTipContent(m.value), r.setXTipPosition(S), 
                        r.setYCrosshairPosition(S));
                    } else r.setXTipContent(_), r.setXTipPosition(S), r.setYCrosshairPosition(S), f && (r.setYTipContent(m.value), 
                    r.setYTipPosition(m.y), r.setXCrosshairPosition(m.y));
                    var P = i.items;
                    a.showTooltipMarker && P.length ? (i = this._getTooltipMarkerStyle(i), r.setMarkers(i)) : r.clearMarkers(), 
                    r.show();
                }
            }, e.showTooltip = function(t) {
                var e, i, n = this, s = n.chart, u = [], c = [], f = n.cfg;
                f.showItemMarker && (i = f.itemMarkerStyle);
                var p = s.get("geoms"), g = s.get("coord");
                if (l.each(p, function(n) {
                    if (n.get("visible")) {
                        var s = n.get("type"), f = n.getSnapRecords(t);
                        l.each(f, function(t) {
                            if (t.x && t.y) {
                                var f = t.x, p = t.y, d = t._origin, v = t.color, y = {
                                    x: f,
                                    y: l.isArray(p) ? p[1] : p,
                                    color: v || h.defaultColor,
                                    origin: d,
                                    name: r(n, d),
                                    value: a(n, d),
                                    title: o(n, d)
                                };
                                i && (y.marker = l.mix({
                                    fill: v || h.defaultColor
                                }, i)), c.push(y), -1 !== [ "line", "area", "path" ].indexOf(s) ? (e = "circle", 
                                u.push(y)) : "interval" !== s || "cartesian" !== g.type && "rect" !== g.type || (e = "rect", 
                                y.width = n.getSize(t._origin), u.push(y));
                            }
                        });
                    }
                }), c.length) {
                    var d = {
                        items: u,
                        type: e
                    };
                    n._setTooltip(t, c, d);
                } else n.hideTooltip();
            }, e.hideTooltip = function() {
                var t = this.cfg;
                this._lastActive = null;
                var e = this.tooltip;
                e && (e.hide(), t.onHide && t.onHide({
                    tooltip: e
                }), this.chart.get("canvas").draw());
            }, e.handleShowEvent = function(t) {
                var e = this.chart;
                if (this.enable && !e.get("_closeTooltip")) {
                    var i = e.get("plotRange"), n = l.createEvent(t, e);
                    if (p.isPointInPlot(n, i) || this.cfg.alwaysShow) {
                        var r = this.timeStamp, a = +new Date();
                        a - r > 16 && (this.showTooltip(n), this.timeStamp = a);
                    } else this.hideTooltip();
                }
            }, e.handleHideEvent = function() {
                var t = this.chart;
                this.enable && !t.get("_closeTooltip") && this.hideTooltip();
            }, e.handleDocEvent = function(t) {
                var e = this.chart;
                if (this.enable && !e.get("_closeTooltip")) {
                    var i = this.canvasDom;
                    t.target !== i && this.hideTooltip();
                }
            }, e._handleEvent = function(t, e, i) {
                var n = this.canvasDom;
                l.each([].concat(t), function(t) {
                    "bind" === i ? l.addEventListener(n, t, e) : l.removeEventListener(n, t, e);
                });
            }, e.bindEvents = function() {
                var t = this.cfg, e = t.triggerOn, i = t.triggerOff, n = t.alwaysShow, r = l.wrapBehavior(this, "handleShowEvent"), a = l.wrapBehavior(this, "handleHideEvent");
                if (e && this._handleEvent(e, r, "bind"), i && this._handleEvent(i, a, "bind"), 
                !n) {
                    var o = l.wrapBehavior(this, "handleDocEvent");
                    l.isBrowser && l.addEventListener(document, "touchstart", o);
                }
            }, e.unBindEvents = function() {
                var t = this.cfg, e = t.triggerOn, i = t.triggerOff, n = t.alwaysShow, r = l.getWrapBehavior(this, "handleShowEvent"), a = l.getWrapBehavior(this, "handleHideEvent");
                if (e && this._handleEvent(e, r, "unBind"), i && this._handleEvent(i, a, "unBind"), 
                !n) {
                    var o = l.getWrapBehavior(this, "handleDocEvent");
                    l.isBrowser && l.removeEventListener(document, "touchstart", o);
                }
            }, t;
        }();
        t.exports = {
            init: function(t) {
                var e = new g({
                    chart: t
                });
                t.set("tooltipController", e), t.tooltip = function(t, i) {
                    return l.isObject(t) && (i = t, t = !0), e.enable = t, i && (e.cfg = i), this;
                };
            },
            afterGeomDraw: function(t) {
                var e = t.get("tooltipController");
                e.render(), t.showTooltip = function(t) {
                    return e.showTooltip(t), this;
                }, t.hideTooltip = function() {
                    return e.hideTooltip(), this;
                };
            },
            clearInner: function(t) {
                t.get("tooltipController").clear();
            }
        };
    }, function(t, e, i) {
        var n = i(0), r = i(90), a = i(91), o = i(116), s = function() {
            function t(t) {
                n.deepMix(this, this.getDefaultCfg(), t);
                var e = this.frontPlot;
                if (!this.custom) {
                    var i = new a(n.mix({
                        parent: e,
                        zIndex: 3
                    }, t));
                    this.container = i;
                    var r = this.fixed, s = this.background;
                    r || (this.tooltipArrow = e.addShape("Polygon", {
                        className: "tooltip-arrow",
                        visible: !1,
                        zIndex: 2,
                        attrs: n.mix({
                            points: []
                        }, s)
                    }));
                }
                if (this.showXTip) {
                    var u = this.xTipBackground, c = new o({
                        className: "xTip",
                        background: u,
                        visible: !1
                    });
                    e.add(c.container), this.xTipBox = c;
                }
                if (this.showYTip) {
                    var l = this.yTipBackground, h = new o({
                        className: "yTip",
                        background: l,
                        visible: !1
                    });
                    e.add(h.container), this.yTipBox = h;
                }
                this.showCrosshairs && this._renderCrosshairs(), e.sort();
            }
            var e = t.prototype;
            return e.getDefaultCfg = function() {
                return {
                    showCrosshairs: !1,
                    crosshairsStyle: {
                        stroke: "rgba(0, 0, 0, 0.25)",
                        lineWidth: 1
                    },
                    crosshairsType: "y",
                    showXTip: !1,
                    showYTip: !1,
                    xTip: null,
                    xTipBackground: {
                        radius: 1,
                        fill: "rgba(0, 0, 0, 0.65)",
                        padding: [ 3, 5 ]
                    },
                    yTip: null,
                    yTipBackground: {
                        radius: 1,
                        fill: "rgba(0, 0, 0, 0.65)",
                        padding: [ 3, 5 ]
                    },
                    background: null,
                    layout: "horizontal",
                    offsetX: 0,
                    offsetY: 0
                };
            }, e.setContent = function(t, e) {
                if (this.title = t, this.items = e, !this.custom) {
                    var i = this.container;
                    i.setTitle(t), i.setItems(e);
                }
            }, e.setYTipContent = function(t) {
                var e = this.yTip;
                t = n.isFunction(e) ? e(t) : n.mix({
                    text: t
                }, e), this.yTipBox && this.yTipBox.updateContent(t);
            }, e.setYTipPosition = function(t) {
                var e = this.plotRange, i = this.crosshairsShapeX;
                if (this.showYTip) {
                    var n = this.yTipBox, r = n.getHeight(), a = n.getWidth(), o = e.tl.x - a, s = t - r / 2;
                    s <= e.tl.y && (s = e.tl.y), s + r >= e.br.y && (s = e.br.y - r), o < 0 && (o = e.tl.x, 
                    i && i.attr("x1", e.tl.x + a)), n.updatePosition(o, s);
                }
            }, e.setXTipContent = function(t) {
                var e = this.xTip;
                t = n.isFunction(e) ? e(t) : n.mix({
                    text: t
                }, e), this.xTipBox && this.xTipBox.updateContent(t);
            }, e.setXTipPosition = function(t) {
                var e = this.showXTip, i = this.canvas, r = this.plotRange, a = this.xTipBox, o = this.crosshairsShapeY;
                if (e) {
                    var s = i.get("el"), u = n.getHeight(s), c = a.getWidth(), l = a.getHeight(), h = t - c / 2, f = r.br.y;
                    h <= r.tl.x && (h = r.tl.x), h + c >= r.tr.x && (h = r.tr.x - c), u - f < l && (f -= l), 
                    a.updatePosition(h, f), o && o.attr("y1", f);
                }
            }, e.setXCrosshairPosition = function(t) {
                this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t);
            }, e.setYCrosshairPosition = function(t) {
                this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0);
            }, e.setPosition = function(t) {
                var e = this.container, i = this.plotRange, r = this.offsetX, a = this.offsetY, o = this.fixed, s = this.tooltipArrow;
                if (e) {
                    var u = e.container.getBBox(), c = u.minX, l = u.minY, h = u.width, f = u.height, p = i.tl, g = i.tr, d = 0, v = p.y - f - 4 + a;
                    if (o) d = (p.x + g.x) / 2 - h / 2 + r; else {
                        var y;
                        if (y = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (d = y - h / 2 + r) < p.x && (d = p.x), 
                        d + h > g.x && (d = g.x - h), s) {
                            s.attr("points", [ {
                                x: y - 3,
                                y: p.y - 4 + a
                            }, {
                                x: y + 3,
                                y: p.y - 4 + a
                            }, {
                                x: y,
                                y: p.y + a
                            } ]);
                            var x = e.backShape, m = n.parsePadding(x.attr("radius"));
                            y === p.x ? (m[3] = 0, s.attr("points", [ {
                                x: p.x,
                                y: p.y + a
                            }, {
                                x: p.x,
                                y: p.y - 4 + a
                            }, {
                                x: p.x + 4,
                                y: p.y - 4 + a
                            } ])) : y === g.x && (m[2] = 0, s.attr("points", [ {
                                x: g.x,
                                y: p.y + a
                            }, {
                                x: g.x - 4,
                                y: p.y - 4 + a
                            }, {
                                x: g.x,
                                y: p.y - 4 + a
                            } ])), x.attr("radius", m);
                        }
                    }
                    e.moveTo(d - c, v - l);
                }
            }, e.setMarkers = function(t) {
                void 0 === t && (t = {});
                var e = this, i = t, a = i.items, o = i.style, s = i.type, u = e._getMarkerGroup(s);
                if ("circle" === s) for (var c = 0, l = a.length; c < l; c++) {
                    var h = a[c], f = new r({
                        className: "tooltip-circle-marker",
                        attrs: n.mix({
                            x: h.x,
                            y: h.y,
                            stroke: h.color
                        }, o)
                    });
                    u.add(f);
                } else u.addShape("rect", {
                    className: "tooltip-rect-marker",
                    attrs: o
                });
            }, e.clearMarkers = function() {
                var t = this.markerGroup;
                t && t.clear();
            }, e.show = function() {
                var t = this.crosshairsShapeX, e = this.crosshairsShapeY, i = this.markerGroup, n = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox, s = this.canvas;
                t && t.show(), e && e.show(), i && i.show(), n && n.show(), r && r.show(), a && a.show(), 
                o && o.show(), s.draw();
            }, e.hide = function() {
                var t = this.crosshairsShapeX, e = this.crosshairsShapeY, i = this.markerGroup, n = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox;
                t && t.hide(), e && e.hide(), i && i.hide(), n && n.hide(), r && r.hide(), a && a.hide(), 
                o && o.hide();
            }, e.destroy = function() {
                var t = this.crosshairsShapeX, e = this.crosshairsShapeY, i = this.markerGroup, n = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox;
                t && t.remove(!0), e && e.remove(!0), i && i.remove(!0), r && r.remove(!0), n && n.clear(), 
                a && a.clear(), o && o.clear(), this.destroyed = !0;
            }, e._getMarkerGroup = function(t) {
                var e = this.markerGroup;
                return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({
                    zIndex: 1
                }), this.frontPlot.sort()) : e = this.backPlot.addGroup(), this.markerGroup = e), 
                e;
            }, e._renderCrosshairs = function() {
                var t = this.crosshairsType, e = this.crosshairsStyle, i = this.frontPlot, r = this.plotRange, a = r.tl, o = r.br;
                n.directionEnabled(t, "x") && (this.crosshairsShapeX = i.addShape("Line", {
                    className: "tooltip-crosshairs-x",
                    zIndex: 0,
                    visible: !1,
                    attrs: n.mix({
                        x1: a.x,
                        y1: 0,
                        x2: o.x,
                        y2: 0
                    }, e)
                })), n.directionEnabled(t, "y") && (this.crosshairsShapeY = i.addShape("Line", {
                    className: "tooltip-crosshairs-y",
                    zIndex: 0,
                    visible: !1,
                    attrs: n.mix({
                        x1: 0,
                        y1: o.y,
                        x2: 0,
                        y2: a.y
                    }, e)
                }));
            }, t;
        }();
        t.exports = s;
    }, function(t, e, i) {
        var n = i(0), r = i(5).Group, a = function() {
            function t(t) {
                n.deepMix(this, this.getDefaultCfg(), t), this._init();
                var e = this.content, i = this.x, r = this.y;
                n.isNil(e) || this.updateContent(e), this.updatePosition(i, r);
            }
            var e = t.prototype;
            return e.getDefaultCfg = function() {
                return {
                    x: 0,
                    y: 0,
                    content: "",
                    textStyle: {
                        fontSize: 12,
                        fill: "#fff",
                        textAlign: "center",
                        textBaseline: "middle"
                    },
                    background: {
                        radius: 1,
                        fill: "rgba(0, 0, 0, 0.65)",
                        padding: [ 3, 5 ]
                    },
                    width: 0,
                    height: 0,
                    className: ""
                };
            }, e._init = function() {
                var t = this.content, e = this.textStyle, i = this.background, a = this.className, o = this.visible, s = new r({
                    className: a,
                    zIndex: 0,
                    visible: o
                }), u = s.addShape("Text", {
                    className: a + "-text",
                    zIndex: 1,
                    attrs: n.mix({
                        text: t,
                        x: 0,
                        y: 0
                    }, e)
                }), c = s.addShape("Rect", {
                    className: a + "-bg",
                    zIndex: -1,
                    attrs: n.mix({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }, i)
                });
                s.sort(), this.container = s, this.textShape = u, this.backgroundShape = c;
            }, e._getBBox = function() {
                var t = this.textShape, e = this.background, i = t.getBBox(), r = n.parsePadding(e.padding), a = i.width + r[1] + r[3], o = i.height + r[0] + r[2];
                return {
                    x: i.minX - r[3],
                    y: i.minY - r[0],
                    width: a,
                    height: o
                };
            }, e.updateContent = function(t) {
                var e = this.textShape, i = this.backgroundShape;
                if (!n.isNil(t)) {
                    n.isObject(t) || (t = {
                        text: t
                    }), e.attr(t);
                    var r = this._getBBox(), a = r.x, o = r.y, s = r.width, u = r.height, c = this.width || s, l = this.height || u;
                    i.attr({
                        x: a,
                        y: o,
                        width: c,
                        height: l
                    }), this._width = c, this._height = l, this.content = t.text;
                }
            }, e.updatePosition = function(t, e) {
                var i = this.container, n = this._getBBox(), r = n.x, a = n.y;
                i.moveTo(t - r, e - a), this.x = t - r, this.y = e - a;
            }, e.getWidth = function() {
                return this._width;
            }, e.getHeight = function() {
                return this._height;
            }, e.show = function() {
                this.container.show();
            }, e.hide = function() {
                this.container.hide();
            }, e.clear = function() {
                var t = this.container;
                t.clear(), t.remove(!0), this.container = null, this.textShape = null, this.backgroundShape = null;
            }, t;
        }();
        t.exports = a;
    }, function(t, e, i) {
        var n = i(0), r = i(12), a = i(1);
        a.guide = n.deepMix({
            line: {
                style: {
                    stroke: "#a3a3a3",
                    lineWidth: 1
                },
                top: !0
            },
            text: {
                style: {
                    fill: "#787878",
                    textAlign: "center",
                    textBaseline: "middle"
                },
                offsetX: 0,
                offsetY: 0,
                top: !0
            },
            rect: {
                style: {
                    fill: "#fafafa"
                },
                top: !1
            },
            arc: {
                style: {
                    stroke: "#a3a3a3"
                },
                top: !0
            },
            html: {
                offsetX: 0,
                offsetY: 0,
                alignX: "center",
                alignY: "middle"
            },
            tag: {
                top: !0,
                offsetX: 0,
                offsetY: 0,
                side: 4,
                background: {
                    padding: 5,
                    radius: 2,
                    fill: "#1890FF"
                },
                textStyle: {
                    fontSize: 12,
                    fill: "#fff",
                    textAlign: "center",
                    textBaseline: "middle"
                }
            },
            point: {
                top: !0,
                offsetX: 0,
                offsetY: 0,
                style: {
                    fill: "#fff",
                    r: 3,
                    lineWidth: 2,
                    stroke: "#1890ff"
                }
            }
        }, a.guide || {});
        var o = function() {
            function t(t) {
                this.guides = [], this.xScale = null, this.yScales = null, this.guideShapes = [], 
                n.mix(this, t);
            }
            var e = t.prototype;
            return e._toString = function(t) {
                return n.isFunction(t) && (t = t(this.xScale, this.yScales)), t = t.toString();
            }, e._getId = function(t, e) {
                var i = e.id;
                if (!i) {
                    var n = e.type;
                    i = "arc" === n || "line" === n || "rect" === n ? this._toString(e.start) + "-" + this._toString(e.end) : this._toString(e.position);
                }
                return i;
            }, e.paint = function(t) {
                var e = this, i = e.chart, r = e.guides, a = e.xScale, o = e.yScales, s = [];
                n.each(r, function(n, r) {
                    n.xScale = a, n.yScales = o;
                    var u;
                    "regionFilter" === n.type ? n.chart = i : u = n.top ? e.frontPlot : e.backPlot, 
                    n.coord = t, n.container = u, n.canvas = i.get("canvas");
                    var c = n.render(t, u);
                    if (c) {
                        var l = e._getId(c, n);
                        [].concat(c).forEach(function(t) {
                            t._id = t.get("className") + "-" + l, t.set("index", r), s.push(t);
                        });
                    }
                }), e.guideShapes = s;
            }, e.clear = function() {
                return this.reset(), this.guides = [], this;
            }, e.reset = function() {
                var t = this.guides;
                n.each(t, function(t) {
                    t.remove();
                });
            }, e._createGuide = function(t, e) {
                var i = n.upperFirst(t), o = new r[i](n.deepMix({}, a.guide[t], e));
                return this.guides.push(o), o;
            }, e.line = function(t) {
                return void 0 === t && (t = {}), this._createGuide("line", t);
            }, e.text = function(t) {
                return void 0 === t && (t = {}), this._createGuide("text", t);
            }, e.arc = function(t) {
                return void 0 === t && (t = {}), this._createGuide("arc", t);
            }, e.html = function(t) {
                return void 0 === t && (t = {}), this._createGuide("html", t);
            }, e.rect = function(t) {
                return void 0 === t && (t = {}), this._createGuide("rect", t);
            }, e.tag = function(t) {
                return void 0 === t && (t = {}), this._createGuide("tag", t);
            }, e.point = function(t) {
                return void 0 === t && (t = {}), this._createGuide("point", t);
            }, e.regionFilter = function(t) {
                return void 0 === t && (t = {}), this._createGuide("regionFilter", t);
            }, t;
        }();
        t.exports = {
            init: function(t) {
                var e = new o({
                    frontPlot: t.get("frontPlot").addGroup({
                        zIndex: 20,
                        className: "guideContainer"
                    }),
                    backPlot: t.get("backPlot").addGroup({
                        className: "guideContainer"
                    })
                });
                t.set("guideController", e), t.guide = function() {
                    return e;
                };
            },
            afterGeomDraw: function(t) {
                var e = t.get("guideController");
                if (e.guides.length) {
                    var i = t.getXScale(), n = t.getYScales(), r = t.get("coord");
                    e.xScale = i, e.yScales = n, e.chart = t, e.paint(r);
                }
            },
            clear: function(t) {
                t.get("guideController").clear();
            },
            repaint: function(t) {
                t.get("guideController").reset();
            }
        };
    }, function(t, e, i) {
        function n(t, e) {
            var i = 0;
            switch (e = r.parsePadding(e), t) {
              case "top":
                i = e[0];
                break;

              case "right":
                i = e[1];
                break;

              case "bottom":
                i = e[2];
                break;

              case "left":
                i = e[3];
            }
            return i;
        }
        var r = i(0), a = i(91), o = i(1), s = {
            itemMarginBottom: 12,
            itemGap: 10,
            showTitle: !1,
            titleStyle: {
                fontSize: 12,
                fill: "#808080",
                textAlign: "start",
                textBaseline: "top"
            },
            nameStyle: {
                fill: "#808080",
                fontSize: 12,
                textAlign: "start",
                textBaseline: "middle"
            },
            valueStyle: {
                fill: "#000000",
                fontSize: 12,
                textAlign: "start",
                textBaseline: "middle"
            },
            unCheckStyle: {
                fill: "#bfbfbf"
            },
            itemWidth: "auto",
            wordSpace: 6,
            selectedMode: "multiple"
        };
        o.legend = r.deepMix({
            common: s,
            right: r.mix({
                position: "right",
                layout: "vertical"
            }, s),
            left: r.mix({
                position: "left",
                layout: "vertical"
            }, s),
            top: r.mix({
                position: "top",
                layout: "horizontal"
            }, s),
            bottom: r.mix({
                position: "bottom",
                layout: "horizontal"
            }, s)
        }, o.legend || {});
        var u = function() {
            function t(t) {
                this.legendCfg = {}, this.enable = !0, this.position = "top", r.mix(this, t);
                var e = this.chart;
                this.canvasDom = e.get("canvas").get("el"), this.clear();
            }
            var e = t.prototype;
            return e.addLegend = function(t, e, i) {
                var n = this, r = n.legendCfg, a = t.field, o = r[a];
                if (!1 === o) return null;
                if (o && o.custom) n.addCustomLegend(a); else {
                    var s = r.position || n.position;
                    o && o.position && (s = o.position), t.isCategory && n._addCategoryLegend(t, e, s, i);
                }
            }, e.addCustomLegend = function(t) {
                var e = this, i = e.legendCfg;
                t && i[t] && (i = i[t]);
                var n = i.position || e.position, s = e.legends;
                s[n] = s[n] || [];
                var u = i.items;
                if (!u) return null;
                var c = e.container;
                r.each(u, function(t) {
                    r.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = {
                        symbol: t.marker || "circle",
                        fill: t.fill,
                        radius: 3
                    }, t.checked = !!r.isNil(t.checked) || t.checked, t.name = t.name || t.value;
                });
                var l = new a(r.deepMix({}, o.legend[n], i, {
                    maxLength: e._getMaxLength(n),
                    items: u,
                    parent: c
                }));
                s[n].push(l);
            }, e.clear = function() {
                var t = this.legends;
                r.each(t, function(t) {
                    r.each(t, function(t) {
                        t.clear();
                    });
                }), this.legends = {}, this.unBindEvents();
            }, e._isFiltered = function(t, e, i) {
                var n = !1;
                return r.each(e, function(e) {
                    if (n = n || t.getText(e) === t.getText(i)) return !1;
                }), n;
            }, e._getMaxLength = function(t) {
                var e = this.chart, i = r.parsePadding(e.get("appendPadding"));
                return "right" === t || "left" === t ? e.get("height") - (i[0] + i[2]) : e.get("width") - (i[1] + i[3]);
            }, e._addCategoryLegend = function(t, e, i, n) {
                var s = this, u = s.legendCfg, c = s.legends, l = s.container, h = s.chart, f = t.field;
                c[i] = c[i] || [];
                var p = "circle";
                u[f] && u[f].marker ? p = u[f].marker : u.marker && (p = u.marker), r.each(e, function(e) {
                    r.isPlainObject(p) ? r.mix(e.marker, p) : e.marker.symbol = p, n && (e.checked = s._isFiltered(t, n, e.dataValue));
                }), h.get("legendItems")[f] = e;
                var g = r.deepMix({}, o.legend[i], u[f] || u, {
                    maxLength: s._getMaxLength(i),
                    items: e,
                    field: f,
                    filterVals: n,
                    parent: l
                });
                g.showTitle && r.deepMix(g, {
                    title: t.alias || t.field
                });
                var d = new a(g);
                return c[i].push(d), d;
            }, e._alignLegend = function(t, e, i) {
                var n = this, a = n.plotRange, o = a.tl, s = a.bl, u = n.chart, c = t.offsetX || 0, l = t.offsetY || 0, h = u.get("width"), f = u.get("height"), p = r.parsePadding(u.get("appendPadding")), g = t.getHeight(), d = t.getWidth(), v = 0, y = 0;
                if ("left" === i || "right" === i) {
                    var x = t.verticalAlign || "middle", m = Math.abs(o.y - s.y);
                    v = "left" === i ? p[3] : h - d - p[1], y = (m - g) / 2 + o.y, "top" === x ? y = o.y : "bottom" === x && (y = s.y - g), 
                    e && (y = e.get("y") - g - 12);
                } else {
                    var _ = t.align || "left";
                    if (v = p[3], "center" === _ ? v = h / 2 - d / 2 : "right" === _ && (v = h - (d + p[1])), 
                    y = "top" === i ? p[0] + Math.abs(t.container.getBBox().minY) : f - g, e) {
                        var S = e.getWidth();
                        v = e.x + S + 12;
                    }
                }
                "bottom" === i && l > 0 && (l = 0), "right" === i && c > 0 && (c = 0), t.moveTo(v + c, y + l);
            }, e.alignLegends = function() {
                var t = this, e = t.legends;
                return r.each(e, function(e, i) {
                    r.each(e, function(n, r) {
                        var a = e[r - 1];
                        t._alignLegend(n, a, i);
                    });
                }), t;
            }, e.handleEvent = function(t) {
                var e = this, i = e.chart, n = r.createEvent(t, i), a = function(t, i) {
                    var n = null, a = e.legends;
                    return r.each(a, function(e) {
                        r.each(e, function(e) {
                            var a = e.itemsGroup, o = e.legendHitBoxes, s = a.get("children");
                            if (s.length) {
                                var u = e.x, c = e.y;
                                r.each(o, function(r, a) {
                                    if (t >= r.x + u && t <= r.x + r.width + u && i >= r.y + c && i <= r.height + r.y + c) return n = {
                                        clickedItem: s[a],
                                        clickedLegend: e
                                    }, !1;
                                });
                            }
                        });
                    }), n;
                }(n.x, n.y);
                if (a && !1 !== a.clickedLegend.clickable) {
                    var o = a.clickedItem, s = a.clickedLegend;
                    if (s.onClick) t.clickedItem = o, s.onClick(t); else if (!s.custom) {
                        var u = o.get("checked"), c = o.get("dataValue"), l = s.filterVals, h = s.field;
                        "single" === s.selectedMode ? i.filter(h, function(t) {
                            return t === c;
                        }) : (u ? r.Array.remove(l, c) : l.push(c), i.filter(h, function(t) {
                            return -1 !== l.indexOf(t);
                        })), i.repaint();
                    }
                }
            }, e.bindEvents = function() {
                var t = this.legendCfg.triggerOn || "touchstart", e = r.wrapBehavior(this, "handleEvent");
                r.addEventListener(this.canvasDom, t, e);
            }, e.unBindEvents = function() {
                var t = this.legendCfg.triggerOn || "touchstart", e = r.getWrapBehavior(this, "handleEvent");
                r.removeEventListener(this.canvasDom, t, e);
            }, t;
        }();
        t.exports = {
            init: function(t) {
                var e = new u({
                    container: t.get("backPlot"),
                    plotRange: t.get("plotRange"),
                    chart: t
                });
                t.set("legendController", e), t.legend = function(t, i) {
                    var n = e.legendCfg;
                    return e.enable = !0, r.isBoolean(t) ? (e.enable = t, n = i || {}) : r.isObject(t) ? n = t : n[t] = i, 
                    e.legendCfg = n, this;
                };
            },
            beforeGeomDraw: function(t) {
                var e = t.get("legendController");
                if (!e.enable) return null;
                var i = e.legendCfg;
                if (i && i.custom) e.addCustomLegend(); else {
                    var a = t.getLegendItems(), o = t.get("scales"), s = t.get("filters");
                    r.each(a, function(t, i) {
                        var n, r = o[i], a = r.values;
                        n = s && s[i] ? a.filter(s[i]) : a.slice(0), e.addLegend(r, t, n);
                    });
                }
                i && !1 !== i.clickable && e.bindEvents();
                var u = e.legends, c = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
                r.each(u, function(e, i) {
                    var a = 0;
                    r.each(e, function(t) {
                        var e = t.getWidth(), n = t.getHeight();
                        "top" === i || "bottom" === i ? (a = Math.max(a, n), t.offsetY > 0 && (a += t.offsetY)) : (a = Math.max(a, e), 
                        t.offsetX > 0 && (a += t.offsetX));
                    }), c[i] = a + n(i, t.get("appendPadding"));
                }), t.set("legendRange", c);
            },
            afterGeomDraw: function(t) {
                t.get("legendController").alignLegends();
            },
            clearInner: function(t) {
                t.get("legendController").clear(), t.set("legendRange", null);
            }
        };
    }, function(t, e, i) {
        function n(t, e) {
            var i = {};
            for (var n in e) f.isNumber(t[n]) && t[n] !== e[n] ? i[n] = e[n] : f.isArray(t[n]) && JSON.stringify(t[n]) !== JSON.stringify(e[n]) && (i[n] = e[n]);
            return i;
        }
        function r(t, e, i) {
            var n, r = t.get("type"), a = "geom" + i + "-" + r, o = t.getXScale(), s = t.getYScale(), u = o.field || "x", c = s.field || "y", l = e[c];
            n = o.isIdentity ? o.value : e[u], a += "interval" === r || "schema" === r ? "-" + n : "line" === r || "area" === r || "path" === r ? "-" + r : o.isCategory ? "-" + n : "-" + n + "-" + l;
            var h = t._getGroupScales();
            return f.each(h, function(t) {
                var i = t.field;
                "identity" !== t.type && (a += "-" + e[i]);
            }), a;
        }
        function a(t, e, i) {
            var n = [];
            return f.each(t, function(t, a) {
                var o = t.get("container").get("children"), s = t.get("type"), u = f.isNil(t.get("animateCfg")) ? l(s, e) : t.get("animateCfg");
                !1 !== u && f.each(o, function(e, o) {
                    e.get("className") === s && (e._id = r(t, e.get("origin")._origin, a), e.set("coord", i), 
                    e.set("animateCfg", u), e.set("index", o), n.push(e));
                }), t.set("shapes", o);
            }), n;
        }
        function o(t) {
            for (var e = {}, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                if (r._id && !r.isClip) {
                    var a = r._id;
                    e[a] = {
                        _id: a,
                        type: r.get("type"),
                        attrs: f.mix({}, r._attrs.attrs),
                        className: r.get("className"),
                        geomType: r.get("className"),
                        index: r.get("index"),
                        coord: r.get("coord"),
                        animateCfg: r.get("animateCfg")
                    };
                }
            }
            return e;
        }
        function s(t, e, i, n) {
            return f.isFunction(n) ? n : f.isString(n) ? v.Action[n] : v.getAnimation(t, e, i);
        }
        function u(t, e, i) {
            if (!1 === i || f.isObject(i) && !1 === i[e]) return !1;
            var n = v.getAnimateCfg(t, e);
            return i && i[e] ? f.deepMix({}, n, i[e]) : n;
        }
        function c(t, e, i) {
            var r, a, o = [], c = [];
            f.each(e, function(e) {
                var i = t[e._id];
                i ? (e.set("cacheShape", i), o.push(e), delete t[e._id]) : c.push(e);
            }), f.each(t, function(t) {
                var e = t.className, n = t.coord, o = t._id, c = t.attrs, l = t.index, h = t.type;
                if (!1 === (a = u(e, "leave", t.animateCfg))) return !0;
                if (r = s(e, n, "leave", a.animation), f.isFunction(r)) {
                    var p = i.addShape(h, {
                        attrs: c,
                        index: l,
                        canvas: i,
                        className: e
                    });
                    p._id = o, r(p, a, n);
                }
            }), f.each(o, function(t) {
                var e = t.get("className");
                if (!1 === (a = u(e, "update", t.get("animateCfg")))) return !0;
                var i = t.get("coord"), o = t.get("cacheShape").attrs, c = n(o, t._attrs.attrs);
                Object.keys(c).length && (r = s(e, i, "update", a.animation), f.isFunction(r) ? r(t, a, i) : (t.attr(o), 
                t.animate().to({
                    attrs: c,
                    duration: a.duration,
                    easing: a.easing,
                    delay: a.delay
                }).onEnd(function() {
                    t.set("cacheShape", null);
                })));
            }), f.each(c, function(t) {
                var e = t.get("className"), i = t.get("coord");
                if (!1 === (a = u(e, "enter", t.get("animateCfg")))) return !0;
                if (r = s(e, i, "enter", a.animation), f.isFunction(r)) if ("interval" === e && i.isPolar && i.transposed) {
                    var n = t.get("index"), c = o[n - 1];
                    r(t, a, c);
                } else r(t, a, i);
            });
        }
        function l(t, e) {
            if (!t) return null;
            var i = e.get("animate");
            return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), f.isObject(i) ? i[t] : !1 !== i && null;
        }
        var h, f = i(0), p = i(25), g = i(120), d = i(121), v = i(92), y = i(123), x = i(124), m = i(19);
        p.prototype.animate = function() {
            var t = f.mix({}, this.get("attrs"));
            return new d(this, t, h);
        }, m.prototype.animate = function(t) {
            return this.set("animate", t), this;
        }, v.Action = y, v.defaultCfg = {
            interval: {
                enter: function(t) {
                    return t.isPolar && t.transposed ? function(t) {
                        t.set("zIndex", -1), t.get("parent").sort();
                    } : y.fadeIn;
                }
            },
            area: {
                enter: function(t) {
                    return t.isPolar ? null : y.fadeIn;
                }
            },
            line: {
                enter: function(t) {
                    return t.isPolar ? null : y.fadeIn;
                }
            },
            path: {
                enter: function(t) {
                    return t.isPolar ? null : y.fadeIn;
                }
            }
        };
        var _ = {
            line: function(t) {
                return t.isPolar ? x.groupScaleInXY : x.groupWaveIn;
            },
            area: function(t) {
                return t.isPolar ? x.groupScaleInXY : x.groupWaveIn;
            },
            path: function(t) {
                return t.isPolar ? x.groupScaleInXY : x.groupWaveIn;
            },
            point: function() {
                return x.shapesScaleInXY;
            },
            interval: function(t) {
                var e;
                return t.isPolar ? (e = x.groupScaleInXY, t.transposed && (e = x.groupWaveIn)) : e = t.transposed ? x.groupScaleInX : x.groupScaleInY, 
                e;
            },
            schema: function() {
                return x.groupWaveIn;
            }
        };
        t.exports = {
            afterCanvasInit: function() {
                (h = new g()).play();
            },
            beforeCanvasDraw: function(t) {
                if (!1 !== t.get("animate")) {
                    var e = t.get("isUpdate"), i = t.get("canvas"), n = t.get("coord"), r = t.get("geoms"), h = i.get("caches") || [];
                    0 === h.length && (e = !1);
                    var p = a(r, t, n), g = t.get("axisController"), d = g.frontPlot, y = g.backPlot, m = d.get("children").concat(y.get("children")), S = [];
                    t.get("guideController") && (S = t.get("guideController").guideShapes);
                    var b = [];
                    if (m.concat(S).forEach(function(e) {
                        var i = l(e.get("className"), t);
                        e.set("coord", n), e.set("animateCfg", i), b.push(e), p.push(e);
                    }), i.set("caches", o(p)), e) c(h, p, i); else {
                        var P, w;
                        f.each(r, function(e) {
                            var i = e.get("type"), r = f.isNil(e.get("animateCfg")) ? l(i, t) : e.get("animateCfg");
                            if (!1 !== r) if (P = u(i, "appear", r), w = s(i, n, "appear", P.animation), f.isFunction(w)) {
                                var a = e.get("shapes");
                                f.each(a, function(t) {
                                    w(t, P, n);
                                });
                            } else if (_[i]) {
                                w = x[P.animation] || _[i](n);
                                var o = e.getYScale(), c = n.convertPoint({
                                    x: 0,
                                    y: o.scale(e.getYMinValue())
                                }), h = e.get("container");
                                w && w(h, P, n, c);
                            }
                        }), f.each(b, function(t) {
                            var e = t.get("animateCfg"), i = t.get("className");
                            if (e && e.appear) {
                                var r = v.getAnimateCfg(i, "appear"), a = f.deepMix({}, r, e.appear), o = s(i, n, "appear", a.animation);
                                f.isFunction(o) && o(t, a, n);
                            }
                        });
                    }
                }
            },
            afterCanvasDestroyed: function() {
                h.stop();
            }
        };
    }, function(e, i, n) {
        var r = n(36).requestAnimationFrame, a = "object" == ("undefined" == typeof performance ? "undefined" : t(performance)) && performance.now ? performance : Date, o = function() {
            function t() {
                this.anims = [], this.time = null, this.playing = !1, this.canvas = [];
            }
            var e = t.prototype;
            return e.play = function() {
                function t() {
                    e.playing && (r(t), e.update());
                }
                var e = this;
                e.time = a.now(), e.playing = !0, r(t);
            }, e.stop = function() {
                this.playing = !1, this.time = null, this.canvas = [];
            }, e.update = function() {
                var t = a.now();
                this.canvas = [];
                for (var e = 0; e < this.anims.length; e++) {
                    var i = this.anims[e];
                    if (!(t < i.startTime || i.hasEnded)) {
                        var n = i.shape;
                        if (n.get("destroyed")) this.anims.splice(e, 1), e--; else {
                            var r = i.startState, o = i.endState, s = i.interpolate, u = i.duration;
                            t >= i.startTime && !i.hasStarted && (i.hasStarted = !0, i.onStart && i.onStart());
                            var c = (t - i.startTime) / u;
                            if (c = Math.max(0, Math.min(c, 1)), c = i.easing(c), i.onFrame) i.onFrame(c); else for (var l in s) {
                                var h = (0, s[l])(c), f = void 0;
                                if ("points" === l) {
                                    f = [];
                                    for (var p = Math.max(r.points.length, o.points.length), g = 0; g < p; g += 2) f.push({
                                        x: h[g],
                                        y: h[g + 1]
                                    });
                                } else f = h;
                                n._attrs.attrs[l] = f, n._attrs.bbox = null;
                            }
                            var d = n.get("canvas");
                            -1 === this.canvas.indexOf(d) && this.canvas.push(d), i.onUpdate && i.onUpdate(c), 
                            t >= i.endTime && !i.hasEnded && (i.hasEnded = !0, i.onEnd && i.onEnd()), 1 === c && (this.anims.splice(e, 1), 
                            e--);
                        }
                    }
                }
                this.canvas.map(function(t) {
                    return t.draw(), t;
                }), this.time = a.now();
            }, t;
        }();
        e.exports = o;
    }, function(t, e, i) {
        function n(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) t[i] && (e.push(t[i].x), e.push(t[i].y));
            return e;
        }
        function r(t, e) {
            return t = +t, e -= t, function(i) {
                return t + e * i;
            };
        }
        function a(t, e) {
            var i, n = e ? e.length : 0, a = t ? Math.min(n, t.length) : 0, o = new Array(a), s = new Array(n);
            for (i = 0; i < a; ++i) o[i] = r(t[i], e[i]);
            for (;i < n; ++i) s[i] = e[i];
            return function(t) {
                for (i = 0; i < a; ++i) s[i] = o[i](t);
                return s;
            };
        }
        var o = i(122), s = function() {
            function t(t, e, i) {
                this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = i, 
                this.animate = null;
            }
            var e = t.prototype;
            return e.to = function(t) {
                void 0 === t && (t = {});
                var e, i = t.delay || 0, s = t.attrs || {}, u = t.duration || 1e3;
                e = "function" == typeof t.easing ? t.easing : o[t.easing] || o.linear;
                var c = {
                    shape: this.shape,
                    startTime: this.timeline.time + i,
                    duration: u,
                    easing: e
                }, l = {};
                for (var h in s) {
                    var f = this.source[h], p = s[h];
                    "points" === h ? (f = n(f), p = n(p), l.points = a(f, p), this.source.points = f, 
                    s.points = p) : "matrix" === h ? l.matrix = a(f, p) : l[h] = r(f, p);
                }
                return c.interpolate = l, c.startState = this.source, c.endState = s, c.endTime = c.startTime + u, 
                this.timeline.anims.push(c), this.animate = c, this;
            }, e.onFrame = function(t) {
                return this.animate && (this.animate.onFrame = function(e) {
                    t(e);
                }), this;
            }, e.onStart = function(t) {
                return this.animate && (this.animate.onStart = function() {
                    t();
                }), this;
            }, e.onUpdate = function(t) {
                return this.animate && (this.animate.onUpdate = function(e) {
                    t(e);
                }), this;
            }, e.onEnd = function(t) {
                return this.animate && (this.animate.onEnd = function() {
                    t();
                }), this;
            }, t;
        }();
        t.exports = s;
    }, function(t, e) {
        var i = {
            linear: function(t) {
                return t;
            },
            quadraticIn: function(t) {
                return t * t;
            },
            quadraticOut: function(t) {
                return t * (2 - t);
            },
            quadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
            },
            cubicIn: function(t) {
                return t * t * t;
            },
            cubicOut: function(t) {
                return --t * t * t + 1;
            },
            cubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
            },
            elasticIn: function(t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 
                -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
            },
            elasticOut: function(t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 
                i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
            },
            elasticInOut: function(t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 
                (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
            },
            backIn: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e);
            },
            backOut: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1;
            },
            backInOut: function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
            },
            bounceIn: function(t) {
                return 1 - i.bounceOut(1 - t);
            },
            bounceOut: function(t) {
                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
            },
            bounceInOut: function(t) {
                return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5;
            }
        };
        t.exports = i;
    }, function(t, e, i) {
        var n = i(0), r = i(93);
        t.exports = {
            fadeIn: function(t, e) {
                var i = n.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"), a = n.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
                t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);
                var o = {
                    fillOpacity: i,
                    strokeOpacity: a
                };
                r.doAnimation(t, o, e);
            }
        };
    }, function(t, e, i) {
        function n(t, e, i, n, r) {
            var o, u, c = a.getCoordInfo(i), l = c.start, h = c.end, f = c.width, p = c.height, g = new s.Rect({
                attrs: {
                    x: l.x,
                    y: h.y,
                    width: f,
                    height: p
                }
            });
            "y" === r ? (o = l.x + f / 2, u = n.y < l.y ? n.y : l.y) : "x" === r ? (o = n.x > l.x ? n.x : l.x, 
            u = l.y + p / 2) : "xy" === r && (i.isPolar ? (o = i.center.x, u = i.center.y) : (o = (l.x + h.x) / 2, 
            u = (l.y + h.y) / 2));
            var d = a.getScaledMatrix(g, [ o, u ], r);
            g.isClip = !0, g.endState = {
                matrix: d
            }, g.set("canvas", t.get("canvas")), t.attr("clip", g), a.doAnimation(g, g.endState, e, function() {
                t.attr("clip", null), g.remove(!0);
            });
        }
        function r(t, e, i) {
            for (var n, r, o, s = t.get("children"), u = 0, c = s.length; u < c; u++) {
                var l = s[u], h = l.getBBox();
                n = (h.minX + h.maxX) / 2, r = (h.minY + h.maxY) / 2, o = a.getScaledMatrix(l, [ n, r ], i), 
                a.doAnimation(l, {
                    matrix: o
                }, e);
            }
        }
        var a = i(93), o = i(26), s = i(5).Shape;
        t.exports = {
            groupWaveIn: function(t, e, i) {
                var n = o.getClip(i);
                n.set("canvas", t.get("canvas")), t.attr("clip", n);
                var r = {};
                if (i.isPolar) {
                    var s = i.startAngle, u = i.endAngle;
                    r.endAngle = u, n.attr("endAngle", s);
                } else {
                    var c = i.start, l = i.end, h = Math.abs(c.x - l.x), f = Math.abs(c.y - l.y);
                    i.isTransposed ? (n.attr("height", 0), r.height = f) : (n.attr("width", 0), r.width = h);
                }
                a.doAnimation(n, r, e, function() {
                    t.attr("clip", null), n.remove(!0);
                });
            },
            groupScaleInX: function(t, e, i, r) {
                n(t, e, i, r, "x");
            },
            groupScaleInY: function(t, e, i, r) {
                n(t, e, i, r, "y");
            },
            groupScaleInXY: function(t, e, i, r) {
                n(t, e, i, r, "xy");
            },
            shapesScaleInX: function(t, e) {
                r(t, e, "x");
            },
            shapesScaleInY: function(t, e) {
                r(t, e, "y");
            },
            shapesScaleInXY: function(t, e) {
                r(t, e, "xy");
            }
        };
    }, , , , , function(t, e, i) {
        var n = i(41);
        i(95), i(83), i(88), i(104), i(105), i(108), i(109), i(110), i(111), i(112), i(113);
        var r = i(114), a = i(117), o = i(118), s = i(119);
        n.Animate = i(92), n.Chart.plugins.register([ r, o, a, s ]), t.exports = n;
    } ]);
});