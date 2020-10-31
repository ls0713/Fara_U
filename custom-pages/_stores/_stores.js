var t = require("../../macaw/create"), e = require("../../api/api"), a = getApp();

a.Macaw;

(0, t.createEmulatePage)({
    allowShare: !0,
    uiTop: {
        title: "门店"
    },
    data: {
        list: [],
        _status: {
            main: {
                empty: {
                    text: "暂无门店",
                    btn: "回首页",
                    action: "@home"
                }
            }
        }
    },
    lifetimes: {
        attached: function() {
            this.reLoad();
            var t = a.sysConfig.serviceStore;
            t && this.setData({
                serviceStoreID: t.id
            });
        }
    },
    methods: {
        reLoad: function(t) {
            var a = this;
            this._pager = this._pager || (0, e.getStoresListPager)(), this.autoSetPagerStatus("main", this._pager.load(t)).then(function(t) {
                a.setData({
                    list: t
                });
            });
        },
        nextPage: function() {
            var t = this;
            this._pager && !this._pager.completed && this.autoSetPager("main", this._pager.next()).then(function(e) {
                var a = e.list;
                t.setData({
                    list: a
                });
            });
        }
    }
});