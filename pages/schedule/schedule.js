function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

function e(t) {
    return [ "日", "一", "二", "三", "四", "五", "六" ][t];
}

function a(t, a) {
    for (var i = new Date(t).setHours(0, 0, 0, 0), r = [], n = !0, s = 0; s < a; s++) {
        var o = i + 864e5 * s, u = new Date(o), d = u.getDay(), c = u.getDate(), h = u.getMonth() + 1;
        0 !== s && 1 === d && (n = !1), r.push({
            id: String(o),
            time: o,
            dayDate: u,
            dayWord: e(d),
            date: c,
            month: h,
            thisWeek: n
        });
    }
    return r;
}

var i = require("../../macaw/create"), r = require("../../api/api"), n = getApp();

n.Macaw;

(0, i.createPage)({
    allowShare: !0,
    uiPage: {
        disableScroll: !0
    },
    uiTop: {
        title: "课程表"
    },
    data: {
        daysList: [],
        currentIndex: 0,
        coursesSet: {}
    },
    onLoad: function(t) {
        this.options.storeID && (this.uiTop.title = "门店课程表");
    },
    onLogged: function(t, e) {
        var a = this;
        e(function(t) {
            a.setData({
                userData: t
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var t = this, e = this.options.storeID;
        this.autoSetStatus("main", (0, r.getScheduleCfg)(e)).then(function(e) {
            var i = a(e.serverTime, 7);
            t.setData({
                store: e.store,
                daysList: i
            }), t.pageLoad(i[t.data.currentIndex].id);
        });
    },
    onShow: function() {
        var t = this.data, e = t.daysList, a = t.currentIndex;
        this._showAgain && n._scheduleNeedReload && (this.data.coursesSet = {}, this.pageLoad(e[a].id, !0)), 
        n._scheduleNeedReload = !1;
    },
    pageLoad: function(e, a) {
        var i = this;
        if (!this.data.coursesSet[e] || a) {
            var n = this.options.storeID;
            this.autoSetStatus(e, (0, r.getCoursesScheduleByDay)(e, n), {
                empty: {
                    text: "暂无这天的课程安排"
                }
            }).then(function(a) {
                i.setData(t({}, "coursesSet." + e, a));
            });
        }
    },
    onPageErrorTap: function(t) {
        var e = t.currentTarget.dataset.id;
        this.pageLoad(e, !0);
    },
    onDayTap: function(t) {
        var e = t.currentTarget.dataset.index;
        this.pageChange(e);
    },
    onSwiperChange: function(t) {
        var e = t.detail;
        "touch" === e.source && this.pageChange(e.current);
    },
    pageChange: function(t) {
        this.setData({
            currentIndex: t
        });
        var e = this.data.daysList;
        e.length && this.pageLoad(e[t].id);
    }
});