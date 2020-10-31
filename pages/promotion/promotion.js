var o = require("../../macaw/create"), t = require("../../api/api"), i = getApp().Macaw;

(0, o.createPage)({
    allowShare: !0,
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        title: "",
        titleAlpha: 0,
        backgroundColorAlpha: 0,
        frontColor: "#fff"
    },
    data: {},
    onLoad: function() {
        this.reLoad();
    },
    reLoad: function() {
        var o = this;
        this.autoSetStatus("main", (0, t.getPromotionInfoByID)(this.options.id)).then(function(t) {
            o.setData({
                promotion: t
            }), o.uiTop.title = o.data.promotion.title, o.onWxmlReady();
        });
    },
    onWxmlReady: function() {
        var o = this;
        this.createIntersectionObserver({
            thresholds: [ .8 ]
        }).relativeToViewport().observe("._top-holder", function(t) {
            var a = o._isTopShow = t.intersectionRatio < .8;
            o.uiTop.backgroundColorAlpha = a ? Math.max(i.uiTop.backgroundColorAlpha, .96) : 0, 
            o.uiTop.titleAlpha = a ? 1 : 0, o.uiTop.frontColor = a ? i.uiTop.frontColor : "#fff";
        });
    }
});