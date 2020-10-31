var t = require("../../macaw/create"), o = require("../../api/api"), e = getApp().Macaw, a = {
    page: o.getPageArticleByID
};

(0, t.createPage)({
    allowShare: {},
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
        var t = this, o = this.options, e = o.id, i = o.type, r = a[i];
        this.autoSetStatus("main", r ? r(e) : Promise.reject("未知文章类型：" + i)).then(function(o) {
            t.setData({
                article: o
            }), t.uiTop.title = o.title, t.onWxmlReady();
        });
    },
    onWxmlReady: function() {
        var t = this;
        this.createIntersectionObserver({
            thresholds: [ .8 ]
        }).relativeToViewport().observe("._top-holder", function(o) {
            var a = t._isTopShow = o.intersectionRatio < .8;
            t.uiTop.backgroundColorAlpha = a ? Math.max(e.uiTop.backgroundColorAlpha, .96) : 0, 
            t.uiTop.titleAlpha = a ? 1 : 0, t.uiTop.frontColor = a ? e.uiTop.frontColor : "#fff";
        });
    }
});