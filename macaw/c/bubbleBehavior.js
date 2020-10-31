function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var i = function() {
    function t(t, i) {
        var e = [], a = !0, o = !1, r = void 0;
        try {
            for (var n, s = t[Symbol.iterator](); !(a = (n = s.next()).done) && (e.push(n.value), 
            !i || e.length !== i); a = !0) ;
        } catch (t) {
            o = !0, r = t;
        } finally {
            try {
                !a && s.return && s.return();
            } finally {
                if (o) throw r;
            }
        }
        return e;
    }
    return function(i, e) {
        if (Array.isArray(i)) return i;
        if (Symbol.iterator in Object(i)) return t(i, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = t(require("./behavior")), a = require("../lib/utils"), o = t(require("../index"));

module.exports = Behavior({
    behaviors: [ e.default ],
    properties: {
        adhesion: {
            type: String,
            value: "x"
        },
        margins: {
            type: Object,
            value: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 110
            }
        }
    },
    data: {
        x: 1e3,
        y: 500,
        transition: !1,
        nearTop: !1,
        nearBottom: !1,
        enabled: !1
    },
    pageLifetimes: {
        show: function() {
            this.data.enabled && this.getPosition();
        }
    },
    lifetimes: {
        attached: function() {
            o.default.adapt.iPhoneX && this.setData({
                "margins.bottom": this.data.margins.bottom + 68
            }), this.getPosition();
        },
        ready: function() {
            this.data.enabled && (this.limit(), this.setData({
                isReady: !0
            }));
        }
    },
    methods: {
        getPositionFail: function() {},
        tap: function() {},
        getPosition: function() {
            var t = this, i = this.data.bubbleName;
            i && wx.getStorage({
                key: i + "-position",
                success: function(i) {
                    var e = i.data;
                    e && t.setData({
                        x: e.x,
                        y: e.y,
                        transition: !1
                    }), wx.nextTick(function() {
                        return t.limit();
                    });
                },
                fail: function() {
                    t.getPositionFail();
                }
            });
        },
        savePosition: function() {
            var t = this.data, i = t.bubbleName, e = t.x, a = t.y;
            i && wx.setStorage({
                key: i + "-position",
                data: {
                    x: e,
                    y: a
                }
            });
        },
        touchStart: function(t) {
            var i = t.timeStamp, e = t.touches;
            this._startTime = i, this._isDrag = !0;
            var a = e[0], o = a.clientX, r = a.clientY;
            this._startX = o, this._startY = r, this._oriX = this.data.x, this._oriY = this.data.y, 
            this.setData({
                transition: !1
            });
        },
        touchMove: function(t) {
            var i = t.touches;
            if (this._isDrag) {
                var e = i[0], a = e.clientX, o = e.clientY, r = a - this._startX, n = o - this._startY;
                (this._isMove || (this._isMove = Math.abs(r) > 5 || Math.abs(n) > 5)) && this.setData({
                    x: this._oriX + r,
                    y: this._oriY + n,
                    expand: !1
                });
            }
        },
        touchEnd: function(t) {
            var i = t.timeStamp;
            t.touches;
            !this._isMove && i - this._startTime < 300 && this.tap(), this._isMove = this._isDrag = !1, 
            this.limit(!0);
        },
        limit: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r = wx.createSelectorQuery().in(this);
            r.selectViewport().boundingClientRect(), r.select(".ui-shortcut-wrap").boundingClientRect(), 
            r.exec(function(r) {
                var n = i(r, 2), s = n[0], h = n[1];
                try {
                    var u = s.height, l = s.width, c = h.top, d = h.bottom, f = h.left, p = h.right, m = h.width, g = h.height, b = t.data, v = b.margins, x = b.x, y = b.y, _ = {
                        top: o.default.uiSizeData.topHeight + (0, a.rpx2px)(v.top),
                        bottom: u - (0, a.rpx2px)(v.bottom),
                        left: (0, a.rpx2px)(v.left),
                        right: l - (0, a.rpx2px)(v.right)
                    };
                    _.top > c && (y += _.top - c), _.bottom < d && (y -= d - _.bottom), _.left > f && (x += _.left - f), 
                    _.right < p && (x -= p - _.right);
                    var w = y - _.top < _.bottom - y, D = x - _.left < _.right - x;
                    t.data.adhesion.indexOf("x") > -1 && (x = D ? _.left : _.right - m), t.data.adhesion.indexOf("y") > -1 && (y = w ? _.top : _.bottom - g), 
                    t.setData({
                        x: x,
                        y: y,
                        transition: e,
                        nearTop: w,
                        nearLeft: D
                    }), t.savePosition();
                } catch (t) {}
            });
        }
    }
});