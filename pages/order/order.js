var t = require("../../macaw/create"), e = require("../../api/api"), a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../store/orderStatusMap")), o = getApp().Macaw;

(0, t.createPage)({
    uiTop: {
        title: "订单详情",
        showBackHome: !0
    },
    data: {
        statusMap: a.default
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
        this.autoSetStatus("main", (0, e.getOrderInfoByID)(this.options.id)).then(function(e) {
            t.setData({
                order: e
            }), t.options.refund && t.refund();
        });
    },
    refund: function() {
        var t = this, a = this.data.order;
        wx.showModal({
            title: "取消订单",
            content: "确定取消此订单？",
            cancelText: "点错了",
            confirmColor: "#cc353c",
            success: function(i) {
                i.confirm && (wx.showLoading({
                    title: "取消订单",
                    mask: !0
                }), (0, e.orderRefund)(a.id).then(function(e) {
                    wx.hideLoading(), 3 == e && o.successToast("已申请退款"), t.setData({
                        "order.status": e
                    });
                }, function(t) {
                    wx.hideLoading(), o.textToast("[申请退款失败]" + t);
                }));
            }
        });
    }
});