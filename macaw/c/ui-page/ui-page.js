function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../index")), i = t(require("../behavior")), o = t(require("../../common/behavior-commonStyles")), a = require("../../lib/utils");

Component({
    behaviors: [ o.default, i.default, "wx://component-export" ],
    options: {
        addGlobalClass: !0,
        multipleSlots: !0
    },
    properties: {
        topConfig: {
            type: Object
        },
        config: {
            type: Object,
            observer: "configUpdate"
        },
        scrollListener: Boolean,
        scrollTop: null,
        scrollWithAnimation: Boolean,
        upperThreshold: null,
        lowerThreshold: null
    },
    data: {
        useConfig: {},
        uiCssVars: e.default.uiSizeData.cssVars
    },
    lifetimes: {
        attached: function() {
            var t = this;
            e.default.event.on("uiPageUpdate", this._uiPageUpdate = function(e) {
                t.configUpdate();
            }), e.default.event.on("uiSizeDataUpdate", this._uiSizeDataUpdate = function(e) {
                var i = e.cssVars;
                t.setData({
                    uiCssVars: i
                });
            }), this.configUpdate();
        },
        detached: function() {
            e.default.event.off("uiPageUpdate", this._uiPageUpdate), e.default.event.off("uiSizeDataUpdate", this._uiSizeDataUpdate);
        }
    },
    methods: {
        configUpdate: (0, a.injectDebounce)("configUpdate", function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.config, i = Object.assign({}, e.default.uiPage, t, this._injectConfig);
            this.setData({
                useConfig: i
            });
        }, 20),
        onScroll: function(t) {
            var e = t.detail;
            this.triggerEvent("scroll", e);
        },
        onScrollToUpper: function(t) {
            var e = t.detail;
            this.triggerEvent("scrolltoupper", e);
        },
        onScrollToLower: function(t) {
            var e = t.detail;
            this.triggerEvent("scrolltolower", e);
        },
        onDoubleTapTab: function() {
            this.triggerEvent("doubletaptab");
        },
        onTopHeightUpdate: function(t) {
            var e = t.detail;
            this.setData({
                topHeightPx: e.height + "px"
            });
        },
        onTopCssVarsUpdate: function(t) {
            var e = t.detail.topCssVars;
            this.setData({
                topCssVars: e
            });
        }
    },
    export: function() {
        return {
            vm: this,
            uiTopVm: this.selectComponent("#ui-top")
        };
    }
});