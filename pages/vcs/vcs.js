function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../macaw/create"), a = require("../../api/api");

getApp().Macaw;

(0, e.createPage)({
    allowShare: !0,
    uiPage: {
        disableScroll: !1
    },
    uiTop: {
        title: "视频课程",
        backgroundColorAlpha: 1
    },
    data: {
        typesList: null,
        listSet: {},
        _status: {
            main: {
                empty: {
                    text: "视频课程分类列表为空",
                    btn: "回首页",
                    action: "@home"
                }
            }
        }
    },
    onLoad: function(t) {
        this.setDataByOptions([ "type" ], t), this.reLoad();
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatus("main", (0, a.getVcTypesList)()).then(function(e) {
            t._typesLoaded = !0, t.setData({
                typesList: e
            }), t.pageChange(t.data.type || e[0].id);
        });
    },
    pageLoad: function(e, i) {
        var n = this;
        if (this._typesLoaded) {
            var s = this._pagers || (this._pagers = {}), r = s[e] || (s[e] = (0, a.getVcsListPager)(e));
            this.autoSetPagerStatus(e, r.load(i)).then(function(a) {
                n.setData(t({}, "listSet." + e, a));
            });
        }
    },
    onNextPage: function(t) {
        var e = t.currentTarget.dataset.type;
        this.pageNext(e);
    },
    pageNext: function(e) {
        var a = this, i = this._pagers[e];
        i && !i.completed && this.autoSetPager(e, i.next()).then(function(i) {
            var n = i.list;
            a.setData(t({}, "listSet." + e, n));
        });
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
            type: t
        }), this.pageLoad(t);
    },
    onPageErrorTap: function(t) {
        var e = t.currentTarget.dataset.type;
        this.pageLoad(e, !0);
    }
});