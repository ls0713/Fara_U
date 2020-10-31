var t = require("../../macaw/create"), e = require("../../api/api"), a = getApp(), r = a.Macaw;

(0, t.createPage)({
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        hiddenBackBtn: !0,
        backgroundColorAlpha: 0,
        adaptiveFrontColor: !0
    },
    data: {
        url: r.defaultPage,
        needSelectStore: !1,
        stores: [],
        _status: {
            stores: {
                empty: {
                    text: "暂无门店，请联系管理员配置",
                    btn: "重试"
                }
            }
        }
    },
    onLoad: function(t) {
        t.redirect && (this.data.url = decodeURIComponent(t.redirect)), this.load(t.retry);
    },
    reLoad: function() {
        this.load(!0);
    },
    load: function(t) {
        var e = this;
        this.autoSetStatus("main", a.getConfig(t)).then(function(t) {
            t.serviceStore ? e.enter() : (e.setData({
                needSelectStore: !0
            }), e.uiTop.title = "请选择服务门店", e.storesLoad());
        });
    },
    selectStore: function(t) {
        var e = t.currentTarget.dataset.index;
        a.setServiceStore(this.data.stores[e]), this.enter();
    },
    storesLoad: function() {
        var t = this;
        this._pager = this._pager || (0, e.getStoresListPager)(), this.autoSetPagerStatus("stores", this._pager.load(!0)).then(function(e) {
            t.setData({
                stores: e
            });
        });
    },
    nextPage: function() {
        var t = this;
        this._pager && !this._pager.completed && this.autoSetPager("stores", this._pager.next()).then(function(e) {
            var a = e.list;
            t.setData({
                stores: a
            });
        });
    },
    enter: function() {
        r.smartTo({
            method: "reLaunch",
            url: this.data.url,
            failToDefaultPage: !0
        });
    }
});