var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
}, e = require("../../macaw/create"), i = require("../../api/api"), a = getApp(), c = a.Macaw;

(0, e.createPage)({
    uiTop: {
        title: "填写订单"
    },
    data: {
        sc: null,
        coach: null,
        coupon: null,
        list: [],
        totalPrice: 0,
        offer: 10,
        payPrice: 0,
        coachQuantity: 0,
        pmSelected: null
    },
    onUnload: function() {
        this._unloadFunc && this._unloadFunc();
    },
    onLogged: function(t, e) {
        var i = this;
        e(function(t) {
            i.init(t);
        }, !0);
    },
    onSmartToHere: function(t) {
        var e = t.data, i = c.store.userData;
        if (i && e) {
            a.userDataUpdate();
            var n = e.loadFunc, o = e.unloadFunc, r = e.sc, d = e.coach, s = e.vc, u = e.orderSuccess;
            this.orderSuccess = u, n && n.call(this), o && (this._unloadFunc = o.bind(this)), 
            r ? this.scInit(r) : d ? this.coachInit(d) : s && this.vcInit(s), this.init(i);
        } else c.actionRun(":navigateBack");
    },
    init: function(t) {
        var e = this;
        if (!this._pmAllowed) throw "pmAllowed is not defined";
        var i = a.sysConfig, c = i.paymentMethods, n = i.userTerms, o = this.data.sc, r = [], d = [], s = void 0;
        c.forEach(function(i) {
            var a = i.id, c = i.name, n = i.icon, u = !1;
            if (e._pmAllowed.includes(i.id)) {
                if ("unlimited" === a) {
                    if (0 === t.unlimitedEnd) return;
                    u = t.unlimitedExpired;
                } else "count" === a ? u = t.countLeft < 1 : "card" === a && (u = 0 === (d = t.cards.filter(function(t) {
                    return !t.course || t.course.id === o.course.id;
                })).length);
                u || s || (s = a), r.push({
                    id: a,
                    name: c,
                    icon: n,
                    disabled: u
                });
            }
        }), this.setData({
            userData: t,
            userTerms: n,
            paymentMethodsGroup: r,
            pmSelected: s,
            canUseCards: d,
            cardSelected: d.length ? d[0].id : null
        }), this.reCalc();
    },
    scInit: function(t) {
        this.setData({
            sc: t,
            totalPrice: t.price
        }), this._pmAllowed = t.course.pmAllowed;
    },
    coachInit: function(t) {
        var e = Math.max(t.minOrder, 1);
        this.setData({
            coach: t,
            coachQuantity: e,
            totalPrice: t.price.mul(e)
        }), this._pmAllowed = [ "balance" ];
    },
    vcInit: function(t) {
        this.setData({
            vc: t,
            totalPrice: t.price
        }), this._pmAllowed = [ "balance" ];
    },
    reCalc: function() {
        var t = this.data, e = t.totalPrice, i = t.coupon, a = t.userData, c = e, n = 0, o = 0;
        i && (c = c.mul(i.multiplication).add(i.addition), c = Math.max(c, 0).toFixed(2));
        var r = a.balance.sub(c);
        o = r < 0 ? -r : 0, n = e.sub(c), this.setData({
            offer: n,
            payPrice: c,
            wxPayPrice: o
        });
    },
    orderNumChange: function(t) {
        var e = t.detail.value, i = this.data.coach;
        this.setData({
            coachQuantity: e,
            totalPrice: i.price.mul(e)
        }), this.reCalc();
    },
    couponChange: function(t) {
        this.setData({
            coupon: t
        }), this.reCalc();
    },
    commit: function(e) {
        var n = this, o = e.detail, r = o.value, d = o.formId, s = this.data, u = s.sc, l = s.coach, h = s.vc, m = s.coachQuantity, p = s.pmSelected, f = s.cardSelected, v = s.coupon;
        if (!r.name) return c.textToast("姓名不能为空");
        if (!r.phone) return c.textToast("手机号不能为空");
        if (!p) return c.textToast("请选择支付方式");
        if ("card" === p && !f) return c.textToast("请选择需要使用的计次卡");
        var w = u ? (0, i.commitScOrder)({
            id: u.id,
            name: r.name,
            phone: r.phone,
            method: p,
            cardID: f,
            couponID: v ? v.id : ""
        }, d) : l ? (0, i.commitCoachOrder)({
            id: l.id,
            number: m,
            name: r.name,
            phone: r.phone
        }, d) : h ? (0, i.commitVcOrder)({
            id: h.id,
            name: r.name,
            phone: r.phone
        }, d) : null, P = function(t) {
            wx.hideLoading(), a.userDataUpdate(), n.orderSuccess && n.orderSuccess(t), c.smartTo({
                url: ">order?id=" + t,
                method: "redirectTo"
            });
        }, g = function(t, e) {
            wx.hideLoading(), n._commitPending = !1, n._commitErrorBack && c.actionRun(":navigateBack"), 
            c.textToast(t, e);
        };
        this._commitPending = !0, wx.showLoading({
            title: "提交订单",
            mask: !0
        }), w.then(function(e) {
            var a = e.orderID, n = e.payParam;
            a ? P(a) : (wx.hideLoading(), wx.requestPayment(t({}, n, {
                success: function() {
                    wx.showLoading({
                        title: "提交订单",
                        mask: !0
                    }), (u ? (0, i.scOrderPaySuccess)({
                        scID: u.id,
                        orderSN: n.ordersn,
                        couponID: v ? v.id : "",
                        lid: n.lid
                    }) : l ? (0, i.coachorderPaySuccess)({
                        coachID: l.id,
                        orderSN: n.ordersn,
                        pcbid: n.pcbid,
                        lid: n.lid
                    }) : h ? (0, i.vcOrderPaySuccess)({
                        orderSN: n.ordersn,
                        lid: n.lid
                    }) : null).then(function(t) {
                        var e = t.orderID;
                        return P(e);
                    }, g);
                },
                fail: function(t) {
                    var e = t.errMsg;
                    (u ? (0, i.scOrderPayFail)({
                        orderSN: n.ordersn,
                        couponID: v ? v.id : "",
                        lid: n.lid
                    }) : l ? (0, i.coachOrderPayFail)({
                        pcbid: n.pcbid,
                        lid: n.lid
                    }) : h ? (0, i.vcOrderPayFail)({
                        orderSN: n.ordersn,
                        lid: n.lid
                    }) : null).catch(function(t) {
                        c.textToast("[支付结果反馈失败]" + t);
                    }), g(e, !0);
                }
            })));
        }, g);
    },
    showTrems: function() {
        this.selectComponent("#trems-popup").show();
    }
});