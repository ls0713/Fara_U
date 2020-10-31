var e = require("../../macaw/create"), o = getApp(), t = o.Macaw;

(0, e.createEmulatePage)({
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        title: "",
        titleStyle: "center",
        titleAlpha: 0,
        backgroundColorAlpha: 0,
        adaptiveFrontColor: !0
    },
    data: {
        orderGuide: {
            column: 3,
            items: [ {
                icon: "order-pay",
                label: "待付款",
                action: ""
            }, {
                icon: "order-wait",
                label: "待使用",
                action: ""
            }, {
                icon: "order-finished",
                label: "已完成",
                action: ""
            } ]
        }
    },
    methods: {
        onLogged: function(e, t) {
            var a = this;
            t(function(e) {
                a.setData({
                    userData: e
                });
            }, !0), o.userDataUpdate(!0), this.onWxmlReady();
        },
        callBusiness() {
            wx.makePhoneCall({
                phoneNumber: '022-88347566'
            })
        },
        updateConfig: function() {
            wx.showModal({
                title: "更新配置",
                content: "确定重新获取系统配置并刷新所有页面？",
                cancelText: "点错了",
                confirmColor: "#cc353c",
                success: function(e) {
                    e.confirm && (o.getConfig(!0), t.smartTo({
                        url: ">index",
                        method: "reLaunch"
                    }));
                }
            });
        },
        onWxmlReady: function() {
            var e = this;
            this.createIntersectionObserver({
                thresholds: [ .2 ]
            }).relativeToViewport().observe("._top-holder", function(o) {
                if (e._isActive) {
                    var a = e._isTopShow = o.intersectionRatio < .2;
                    e.uiTop.backgroundColorAlpha = a ? Math.max(t.uiTop.backgroundColorAlpha, .96) : 0, 
                    e.uiTop.titleAlpha = a ? 1 : 0;
                }
            });
        }
    }
});