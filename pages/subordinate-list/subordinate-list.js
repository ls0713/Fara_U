var t = require("../../macaw/create"), a = require("../../api/api"), e = getApp();

e.Macaw;

(0, t.createPage)({
    uiTop: {
        title: "我的下线",
        backgroundColorAlpha: 1
    },
    data: {
        _status: {
            main: {
                empty: {
                    text: "你还没有下线"
                }
            }
        }
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
        this.autoSetStatus("main", e.getDistributorData()).then(function(a) {
            t.setData({
                distributor: a
            }), t.pageReLoad();
        });
    },
    pageReLoad: function(t) {
        var e = this;
        this._pager = this._pager || (0, a.getSubordinateListPager)(), this.autoSetPagerStatus("list", this._pager.load(t)).then(function(t) {
            e.setData({
                list: t
            });
        });
    },
    nextPage: function() {
        var t = this;
        this._pager && !this._pager.completed && this.autoSetPager("list", this._pager.next()).then(function(a) {
            var e = a.list;
            t.setData({
                list: e
            });
        });
    }
});