function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

function e(t, e, i) {
    var n = !1;
    return {
        promise: new Promise(function(o, s) {
            function u() {
                if (n) return s();
                (0, a.getCheckInStatus)(t, e).then(function(t) {
                    i != t ? o(t) : setTimeout(u, c);
                }, function(t) {
                    setTimeout(u, c);
                });
            }
            u();
        }),
        stop: function() {
            setTimeout(function() {
                n = !0;
            }, s);
        }
    };
}

var i = require("../../macaw/create"), a = require("../../api/api"), n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("wx-mini-qrcode")), o = getApp(), c = (o.Macaw, 1e3), s = 3e3;

(0, i.createPage)({
    uiPage: {
        disableScroll: !0,
        immersiveTop: !0
    },
    uiTop: {
        title: "",
        backgroundColorAlpha: 1
    },
    data: {
        filterClassGroup: [ {
            id: "sc",
            label: "我的团课"
        }, {
            id: "coach",
            label: "我的私教"
        } ],
        filterClass: "sc",
        listSet: {},
        _status: {
            sc: {
                empty: {
                    text: "你还没有未完成的团课",
                    btn: "去选课",
                    action: ">schedule"
                }
            },
            coach: {
                empty: {
                    text: "你还没有购买过私教课程",
                    btn: "去购买",
                    action: "@coaches?type=private"
                }
            }
        }
    },
    onLoad: function(t) {
        this.setDataByOptions([ {
            filterClass: "type"
        } ], t);
    },
    onUnload: function() {
        this._checkStop && this._checkStop(), clearTimeout(this._popupHide);
    },
    onLogged: function(t, e) {
        var i = this;
        e(function(t) {
            i.setData({
                userData: t
            });
        }, !0), this.pageLoad(this.data.filterClass);
    },
    pageLoad: function(e, i) {
        var n = this;
        this.data.listSet[e] && !i || this.autoSetStatus(e, (0, a.getCheckInList)(e)).then(function(i) {
            n.setData(t({}, "listSet." + e, i));
        });
    },
    onCheckInTap: function(i) {
        var a = this, c = i.currentTarget.dataset, s = c.type, u = c.id, r = c.left, p = c.info, h = c.place, l = function() {
            a._checkStop && a._checkStop(), clearTimeout(a._popupHide), a.setData({
                checkIn: {
                    type: s,
                    info: p
                }
            }), a.selectComponent("#check-in-popup").show();
            var i = "#" + o.sysConfig.appID + "#" + (s || "") + "#" + (u || "") + "#" + (r || "") + "#", c = n.default.outputQRCodeBase64(i, {
                size: 600,
                color: "#000000",
                padding: 16,
                background: "#FFFFFF"
            }), l = "sc" === s, f = !l && r;
            a.setData({
                "checkIn.qrcImg": c
            });
            var d = e(s, u, f), g = d.promise, m = d.stop;
            a._checkStop = m, g.then(function(e) {
                var i, n = (i = {}, t(i, "listSet." + s + h + ".isChecked", !0), t(i, "checkIn.success", !0), 
                i);
                l || (n["listSet." + s + h + ".left"] = e), a.setData(n), a._popupHide = setTimeout(function() {
                    a.hidePopup();
                }, 3e3);
            }, function(t) {});
        };
        c.again ? wx.showModal({
            title: "签到",
            content: "你今日已签到过此课程，确定再次签到吗？",
            confirmColor: "#cc353c",
            success: function(t) {
                t.confirm && l();
            }
        }) : l();
    },
    hidePopup: function() {
        clearTimeout(this._popupHide), this.selectComponent("#check-in-popup").hide(), this._checkStop && this._checkStop();
    },
    tabTap: function(t) {
        var e = t.detail;
        this.pageChange(e.id);
    },
    onResultSwiperChange: function(t) {
        var e = t.detail;
        "touch" === e.source && this.pageChange(e.currentItemId);
    },
    pageChange: function(t) {
        this.setData({
            filterClass: t
        }), this.pageLoad(t);
    },
    onPageErrorTap: function(t) {
        var e = t.currentTarget.dataset.type;
        this.pageLoad(e, !0);
    }
});