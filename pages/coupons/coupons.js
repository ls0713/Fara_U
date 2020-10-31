function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = require("../../macaw/create"), e = require("../../api/api"), i = getApp(), n = i.Macaw;

(0, a.createPage)({
    uiPage: {
        disableScroll: !0
    },
    uiTop: {
        title: "优惠券",
        backgroundColorAlpha: 1
    },
    data: {
        callback: null,
        filterClassGroup: [ {
            id: 0,
            label: "未使用"
        }, {
            id: 1,
            label: "已失效"
        } ],
        type: 0,
        listSet: {},
        pagers: {},
        _status: {
            0: {
                empty: {
                    icon: "ui-coupon",
                    text: "您还没有未使用的优惠券",
                    btn: "前往领券中心",
                    action: ">coupons-supply"
                }
            },
            1: {
                empty: {
                    icon: "ui-coupon",
                    text: "暂无已失效的优惠券"
                }
            }
        },
        consumption: null
    },
    onLogged: function(t, a) {
        var e = this;
        a(function(t) {
            e.setData({
                userData: t
            });
        }, !0);
        var i = this.options, n = i.title, s = i.callback, o = i.consumption, l = i.type;
        n && (this.uiTop.title = n), s ? this.setData({
            type: 0,
            callback: s,
            consumption: o,
            "_status.main.empty.text": "没有可用的优惠券",
            "_status.main.empty.btn": ""
        }) : l && this.setData({
            type: l
        }), this.pageLoad(this.data.type);
    },
    onShow: function() {
        this._showAgain && i._couponsNeedReload && (this._pagers = {}, this.pageLoad(this.data.type)), 
        i._couponsNeedReload = !1;
    },
    pageLoad: function(a, i) {
        var n = this, s = this._pagers || (this._pagers = {}), o = this.data.consumption, l = s[a] || (s[a] = (0, 
        e.getCouponsListPager)(a, o));
        this.autoSetPagerStatus(a, l.load(i)).then(function(e) {
            n.setData(t({}, "listSet." + a, e));
        });
    },
    onNextPage: function(t) {
        var a = t.currentTarget.dataset.type;
        this.pageNext(a);
    },
    pageNext: function(a) {
        var e = this, i = this._pagers[a];
        i && !i.completed && this.autoSetPager(a, i.next()).then(function(i) {
            var n = i.list;
            e.setData(t({}, "listSet." + a, n));
        });
    },
    itemTap: function(t) {
        var a = t.detail;
        this.data.callback && !a.data.failed && n.pageCallBack(this.data.callback, a.data);
    },
    itemBtnTap: function(t) {
        var a = t.detail;
        this.data.callback || !a.data.available || a.data.failed || n.actionRun(">schedule");
    },
    callBackNull: function() {
        this.data.callback && n.pageCallBack(this.data.callback, null);
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