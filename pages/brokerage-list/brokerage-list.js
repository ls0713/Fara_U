function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../macaw/create"), a = require("../../api/api"), i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../store/orderStatusMap")), r = getApp();

r.Macaw;

(0, e.createPage)({
    uiPage: {
        disableScroll: !1
    },
    uiTop: {
        title: "佣金明细",
        backgroundColorAlpha: 1
    },
    data: {
        statusMap: i.default,
        typesList: [ {
            id: "all",
            label: "全部"
        }, {
            id: 1,
            label: "已付款"
        }, {
            id: 2,
            label: "已完成"
        } ],
        listSet: {}
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
        var t = this;
        this.autoSetStatus("main", r.getDistributorData()).then(function(e) {
            t.setData({
                distributor: e
            }), t.pageChange(t.options.type || t.data.typesList[0].id);
        });
    },
    pageLoad: function(e, i) {
        var r = this, n = this._pagers || (this._pagers = {}), s = n[e] || (n[e] = (0, a.getBrokerageListPager)(e));
        this.autoSetPagerStatus(e, s.load(i), {
            empty: {
                icon: "ui-detail-table",
                text: "暂无此类佣金记录"
            }
        }).then(function(a) {
            r.setData(t({}, "listSet." + e, a));
        });
    },
    onNextPage: function(t) {
        var e = t.currentTarget.dataset.type;
        this.pageNext(e);
    },
    pageNext: function(e) {
        var a = this, i = this._pagers[e];
        i && !i.completed && this.autoSetPager(e, i.next()).then(function(i) {
            var r = i.list;
            a.setData(t({}, "listSet." + e, r));
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