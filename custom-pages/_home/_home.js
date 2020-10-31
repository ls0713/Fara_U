var e = require("../../macaw/create"), t = require("../../api/api"), a = getApp().Macaw;

(0, e.createEmulatePage)({
    allowShare: !0,
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        backgroundColorAlpha: 0,
        adaptiveFrontColor: !0
    },
    data: {
        _status: ""
    },
    lifetimes: {
        attached: function() {
            this.reLoad();
        }
    },
    methods: {
        onWxmlReady: function() {
            var e = this;
            this.createIntersectionObserver({
                thresholds: [ .8 ]
            }).relativeToViewport().observe("._top-holder", function(t) {
                if (e._isActive) {
                    var o = e._isTopShow = t.intersectionRatio < .8;
                    e.uiTop.backgroundColorAlpha = o ? Math.max(a.uiTop.backgroundColorAlpha, .96) : 0;
                }
            });
        },
        reLoad: function() {
            var e = this;
            this.autoSetStatus("home", (0, t.getHomeData)()).then(function(t) {
                e.setData(t), e.onWxmlReady();
            });
        }
    }
});