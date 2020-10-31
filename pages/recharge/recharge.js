var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
}, e = require("../../macaw/create"), n = require("../../api/api"), a = getApp(), i = a.Macaw, o = {
    level: {
        title: "会员升级",
        get: n.getMemberLevelList,
        buy: n.buyMemberLevel,
        done: n.buyMemberLevelDone
    },
    balance: {
        title: "余额充值",
        get: function() {
            return (0, n.getRechargeItem)("balance");
        },
        buy: n.buyRechargeItem,
        done: n.buyRechargeItemDone
    },
    unlimited: {
        title: "购买无限次约课权",
        get: function() {
            return (0, n.getRechargeItem)("unlimited");
        },
        buy: n.buyRechargeItem,
        done: n.buyRechargeItemDone
    },
    count: {
        title: "购买约课次数套餐",
        get: function() {
            return (0, n.getRechargeItem)("count");
        },
        buy: n.buyRechargeItem,
        done: n.buyRechargeItemDone
    },
    card: {
        title: "购买计次卡",
        get: function() {
            return (0, n.getRechargeItem)("card");
        },
        buy: n.buyRechargeItem,
        done: n.buyRechargeItemDone
    }
};

(0, e.createPage)({
    allowShare: !1,
    uiTop: {
        title: "充值中心",
        backgroundColorAlpha: "original",
        filter: "ios" === i.systemInfo.platform ? "blur(6rpx)" : ""
    },
    data: {
        _status: {
            main: {
                empty: {
                    text: "还没有可以购买的项目",
                    btn: "返回",
                    action: ":navigateBack"
                }
            }
        }
    },
    onLogged: function(t, e) {
        var n = this;
        e(function(t) {
            n.setData({
                userData: t
            });
        }, !0), this.init();
    },
    init: function() {
        var t = this.options.type, e = o[t];
        if (!e) return i.actionRun(":navigateBack"), void i.textToast("[错误]未知的充值类型: " + t + " ");
        this.setData({
            type: t
        }), this.uiTop.title = e.title, this.reLoad();
    },
    reLoad: function() {
        var t = this, e = this.options.type, n = o[e];
        this.autoSetStatus("main", n.get()).then(function(e) {
            t.setData({
                list: e
            });
        });
    },
    onItemTap: function(t) {
        var e = t.currentTarget.dataset.index;
        this.buy(e);
    },
    buy: function(t) {
        this.setData({
            buyIndex: t
        }), this.selectComponent("#buy-view").show();
    },
    buyHide: function() {
        this.selectComponent("#buy-view").hide();
    },
    onBuyTap: function() {
        var e = this, n = this.options.type, u = o[n], r = this.data, s = r.list[r.buyIndex];
        wx.showLoading({
            title: "发起支付",
            mask: !0
        }), u.buy(s.id).then(function(n) {
            wx.hideLoading(), wx.requestPayment(t({}, n, {
                success: function() {
                    u.done(n.sn, s.id).then(function(t) {
                        e.buyHide(), i.successToast("购买成功"), a.userDataUpdate();
                    }, i.textToast);
                },
                fail: function(t) {
                    var e = t.errMsg;
                    return i.textToast(e, !0);
                }
            }));
        }, function(t) {
            i.textToast(t);
        });
    }
});