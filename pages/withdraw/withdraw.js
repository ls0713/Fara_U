var a = require("../../macaw/create"), t = require("../../api/api"), e = getApp(), i = e.Macaw;

(0, a.createPage)({
    uiTop: {
        title: "佣金提现",
        backgroundColorAlpha: 1
    },
    data: {
        withdrawMethodsGroup: [ {
            id: "balance",
            icon: "ui-balance",
            name: "提现至余额"
        }, {
            id: "wechat",
            icon: "info-wechat",
            name: "提现至微信",
            disabled: !0
        }, {
            id: "alipay",
            icon: "ui-alipay",
            name: "提现至支付宝",
            disabled: !0
        }, {
            id: "bank",
            icon: "ui-bank-card",
            name: "提现至银行卡",
            disabled: !0
        } ],
        methodSelected: "balance"
    },
    onLogged: function(a, t) {
        var e = this;
        t(function(a) {
            e.setData({
                userData: a
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var a = this;
        this.autoSetStatus("main", (0, t.getBrokerageData)()).then(function(t) {
            a.setData(t);
        });
    },
    calc: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.money, t = a, e = this.data, i = e.withdrawMinLimit, n = e.brokerage;
        a = Number(a) || 0, 0 === (a = Math.min(Math.max(a, i), n)) && (a = ""), String(t).endsWith(".") && t == a || this.setData({
            money: a
        });
    },
    inputChange: function(a) {
        var t = a.detail;
        "" !== t.value && this.calc(t.value);
    },
    inputBlur: function(a) {
        var t = a.detail;
        this.calc(t.value);
    },
    onAllTap: function() {
        this.setData({
            money: this.data.brokerage
        });
    },
    commit: function(a) {
        var n = this, o = a.detail.value, r = this.data, c = r.withdrawMinLimit, s = r.brokerage;
        return o.money && 0 != o.money ? o.money < c ? i.textToast("提现金额不得低于" + c + "元") : o.money > s ? i.textToast("提现金额不得高于可提现佣金") : void (0, 
        t.commitWithdrawRequest)(o).then(function(a) {
            e.getDistributorData(!0), n.options.successback ? wx.navigateBack() : i.smartTo({
                url: ">brokerage",
                method: "redirectTo"
            });
        }, i.textToast) : i.textToast("请输入提现金额");
    }
});