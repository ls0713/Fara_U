function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = require("../../macaw/create"), e = require("../../api/api"), i = getApp();

i.Macaw;

(0, a.createPage)({
    uiPage: {
        disableScroll: !1
    },
    uiTop: {
        title: "提现明细",
        backgroundColorAlpha: 1
    },
    data: {
        statusMap: [ "待审核", "通过申请", "拒绝申请", "已打款", "拒绝打款" ],
        typesList: [ {
            id: "all",
            label: "全部"
        }, {
            id: 0,
            label: "待审核"
        }, {
            id: 1,
            label: "待打款"
        }, {
            id: 3,
            label: "已打款"
        }, {
            id: 4,
            label: "无效"
        } ],
        listSet: {}
    },
    onLogged: function(t, a) {
        var e = this;
        a(function(t) {
            e.setData({
                userData: t
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatus("main", i.getDistributorData()).then(function(a) {
            t.setData({
                distributor: a
            }), t.pageChange(t.options.type || t.data.typesList[0].id);
        });
    },
    pageLoad: function(a, i) {
        var r = this, n = this._pagers || (this._pagers = {}), s = n[a] || (n[a] = (0, e.getWithdrawListPager)(a));
        this.autoSetPagerStatus(a, s.load(i), {
            empty: {
                icon: "ui-withdraw",
                text: "暂无此类提现记录"
            }
        }).then(function(e) {
            r.setData(t({}, "listSet." + a, e));
        });
    },
    onNextPage: function(t) {
        var a = t.currentTarget.dataset.type;
        this.pageNext(a);
    },
    pageNext: function(a) {
        var e = this, i = this._pagers[a];
        i && !i.completed && this.autoSetPager(a, i.next()).then(function(i) {
            var r = i.list;
            e.setData(t({}, "listSet." + a, r));
        });
    },
    tabTap: function(t) {
        var a = t.detail;
        this.pageChange(a.id);
    },
    onResultSwiperChange: function(t) {
        var a = t.detail;
        "touch" === a.source && this.pageChange(a.currentItemId);
    },
    pageChange: function(t) {
        this.setData({
            type: t
        }), this.pageLoad(t);
    },
    onPageErrorTap: function(t) {
        var a = t.currentTarget.dataset.type;
        this.pageLoad(a, !0);
    }
});