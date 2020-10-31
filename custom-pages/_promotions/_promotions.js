var t = require("../../macaw/create"), a = require("../../api/api");

getApp().Macaw;

(0, t.createEmulatePage)({
    allowShare: !0,
    uiTop: {
        title: "活动"
    },
    data: {
        _status: {
            main: {
                empty: {
                    text: "暂无活动",
                    btn: "回首页",
                    action: "@home"
                }
            }
        }
    },
    lifetimes: {
        attached: function() {
            this.reLoad();
        }
    },
    methods: {
        reLoad: function(t) {
            var e = this;
            this._pager = this._pager || (0, a.getPromotionsListPager)(), this.autoSetPagerStatus("main", this._pager.load(t)).then(function(t) {
                e.setData({
                    list: t
                });
            });
        },
        nextPage: function() {
            var t = this;
            this._pager && !this._pager.completed && this.autoSetPager("main", this._pager.next()).then(function(a) {
                var e = a.list;
                t.setData({
                    list: e
                });
            });
        }
    }
});