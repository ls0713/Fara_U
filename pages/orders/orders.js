var t = require("../../macaw/create"), a = require("../../api/api"), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../store/orderStatusMap"));

getApp().Macaw;

(0, t.createPage)({
    uiTop: {
        title: "我的订单"
    },
    data: {
        statusMap: e.default,
        _status: {
            main: {
                empty: {
                    text: "你还没有订单",
                    btn: "返回",
                    action: ":navigateBack"
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
    onShow: function() {
        this._showAgain && this.reLoad();
    },
    reLoad: function(t) {
        var e = this;
        this._pager = this._pager || (0, a.getOrdersListPager)(), this.autoSetPagerStatus("main", this._pager.load(t)).then(function(t) {
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
});