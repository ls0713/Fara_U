var t = require("../../macaw/create"), e = require("../../api/api"), o = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("countdown")), a = getApp(), n = a.Macaw;

(0, t.createPage)({
    allowShare: !0,
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        title: "",
        titleAlpha: 0,
        backgroundColorAlpha: 0,
        frontColor: "#fff"
    },
    data: {},
    onLogged: function(t, e) {
        var o = this;
        e(function(t) {
            o.setData({
                userData: t
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatus("main", (0, e.getScByID)(this.options.id)).then(function(e) {
            t.setData({
                sc: e
            }), t.uiTop.title = e.course.name, t.onWxmlReady();
        });
    },
    onUnload: function() {
        clearInterval(this._countdownTimerId);
    },
    onWxmlReady: function() {
        var t = this;
        this.updateWxml(), this.createIntersectionObserver({
            thresholds: [ .8 ]
        }).relativeToViewport().observe(".course-name", function(e) {
            var o = t._isTopShow = e.intersectionRatio < .8;
            t.uiTop.backgroundColorAlpha = o ? Math.max(n.uiTop.backgroundColorAlpha, .96) : 0, 
            t.uiTop.titleAlpha = o ? 1 : 0;
        });
    },
    updateWxml: function() {
        var t = this, e = function(t) {
            return t.toString().padStart(2, "0");
        }, a = this.data.sc, n = a.timeOffset, r = a.orderStart, i = a.orderEnd, u = a.orderNum, s = a.orderMax, d = a.queueEnabled, c = a.myOrderID, l = a.myQueueID, m = Date.now(), h = r + n, f = i + n, p = m < h, w = m > f, T = s - u <= 0, D = !p && !w && (!T || d), v = !1;
        if (clearInterval(this._countdownTimerId), !w && !c && !l) {
            v = !0;
            var _ = p ? h : f;
            this._countdownTimerId = (0, o.default)(_, function(o) {
                var a = "";
                o.days && (a += o.days + " 天 "), a += e(o.hours) + " 时 ", a += e(o.minutes) + " 分 ", 
                a += e(o.seconds) + " 秒", t._isShow && t.setData({
                    countdownText: a
                }), t._countdownTask && t._countdownTask(a, o.value), o.value >= 0 && t.updateWxml();
            }, o.default.DAYS | o.default.HOURS | o.default.MINUTES | o.default.SECONDS);
        }
        this.setData({
            wait: p,
            isFull: T,
            showCountdown: v,
            processing: D,
            enterDisabled: Boolean(!D || c || l),
            enterText: c ? "已报名" : l ? "已排队" : p ? "报名未开始" : w ? "报名已截止" : T ? d ? "立即排队" : "已满员" : "立即报名"
        });
    },
    commit: function(t) {
        var o = this, r = t.detail, i = this, u = this.data, s = u.sc, d = u.isFull, c = u.enterDisabled;
        if (s.myOrderID) n.actionRun(">order?id=" + s.myOrderID); else if (d) {
            if (s.myQueueID) return;
            wx.showLoading({
                title: "请求排队",
                mask: !0
            }), (0, e.commitScQueue)(s.id, r.formId).then(function(t) {
                a._scheduleNeedReload = !0, o.setData({
                    "sc.myQueueID": t
                }), o.updateWxml(), n.successToast("排队成功");
            }, function(t) {
                n.textToast("[排队失败]" + t);
            });
        } else c || n.smartTo({
            url: ">order-commit",
            data: {
                sc: s,
                orderSuccess: function(t) {
                    a._scheduleNeedReload = !0, a._couponsNeedReload = !0, i.setData({
                        "sc.myOrderID": t,
                        "sc.orderNum": s.orderNum + 1
                    }), i.updateWxml();
                },
                loadFunc: function() {
                    var t = this;
                    i._countdownTask = function(e, o) {
                        t.setData({
                            countdownText: e
                        }), o >= 0 && (t._commitPending ? t._commitErrorBack = !0 : n.actionRun(":navigateBack"), 
                        i._countdownTask = null);
                    };
                },
                unloadFunc: function() {
                    i._countdownTask = null;
                }
            }
        });
    }
});