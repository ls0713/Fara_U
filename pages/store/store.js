var e = require("../../macaw/create"), o = require("../../api/api"), t = getApp(), i = t.Macaw;

(0, e.createPage)({
    allowShare: !0,
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        title: "门店",
        titleAlpha: 0,
        backgroundColorAlpha: 0,
        frontColor: "#fff",
        transitionDuration: 0
    },
    data: {
        boxFixed: !1,
        strokeMethods: [ {
            key: "subway",
            icon: "ui-subway",
            iconColor: "#6e8795",
            siteBefore: "乘地铁到"
        }, {
            key: "bus",
            icon: "ui-bus",
            iconColor: "#c29e10",
            siteBefore: "乘公交巴士到"
        }, {
            key: "car",
            icon: "ui-car",
            iconColor: "#274fa0",
            siteBefore: "驾车到"
        } ]
    },
    onLoad: function(e) {
        this.reLoad();
    },
    reLoad: function() {
        var e = this, i = t.sysConfig.serviceStore;
        this.autoSetStatus("main", (0, o.getStoreInfoByID)(this.options.id)).then(function(o) {
            e.setData({
                store: o,
                isService: i && i.id == o.id
            }), e.onWxmlReady();
        });
    },
    onWxmlReady: function() {
        var e = this;
        this._storeBoxObserver && this._storeBoxObserver.disconnect(), this._storeBoxObserver = this.createIntersectionObserver({
            thresholds: [ 0, 1 ]
        }).relativeToViewport({
            top: -i.uiSizeData.topHeight
        }).observe(".store-box-static", function(o) {
            var t = o.intersectionRatio < 1;
            e.uiTop.backgroundColorAlpha = e.uiTop.titleAlpha = t ? 1 : 0, e.uiTop.frontColor = t ? i.uiTop.frontColor : "#fff", 
            e.setData({
                boxFixed: t
            });
        }), this.createSelectorQuery().select(".store-box-fixed").boundingClientRect(function(o) {
            e.setData({
                boxFixedBottom: o.bottom
            });
        }).exec();
    },
    toggle: function() {
        var e = this.data.store;
        i.actionRun(":toggleServiceStore", e.id, !0);
    }
});