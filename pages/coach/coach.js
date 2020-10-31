var t = require("../../macaw/create"), o = require("../../api/api"), a = getApp().Macaw;

(0, t.createPage)({
    allowShare: !0,
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        title: "教练",
        titleStyle: "left",
        backgroundColorAlpha: 0,
        adaptiveFrontColor: !0
    },
    data: {},
    onLoad: function() {
        a.store.isLogged || this.reLoad();
    },
    onLogged: function(t, o) {
        var a = this;
        o(function(t) {
            a.setData({
                userData: t
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatus("main", (0, o.getCoachInfoByID)(this.options.id)).then(function(o) {
            t.setData({
                coach: o
            }), t.onWxmlReady();
        });
    },
    onWxmlReady: function() {
        var t = this;
        this.createIntersectionObserver({
            thresholds: [ .8 ]
        }).relativeToViewport().observe("._top-holder", function(o) {
            var e = t._isTopShow = o.intersectionRatio < .8;
            t.uiTop.backgroundColorAlpha = e ? Math.max(a.uiTop.backgroundColorAlpha, .96) : 0, 
            t.data.coach && (t.uiTop.title = e ? t.data.coach.name : "教练");
        });
    },
    onBtnTap: function() {
        if (!this.data.userData) return this.selectComponent("#ui-login").popupShow();
        var t = this;
        a.smartTo({
            url: ">order-commit",
            data: {
                coach: this.data.coach,
                orderSuccess: function(o) {
                    t.setData({
                        "coach.showContact": !0
                    });
                }
            }
        });
    },
    showTrems: function() {
        this.selectComponent("#trems-popup").show();
    }
});