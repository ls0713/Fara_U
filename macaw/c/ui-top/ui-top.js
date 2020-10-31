function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../index")), o = t(require("color")), a = require("../../lib/utils");

Component({
    options: {
        addGlobalClass: !0,
        multipleSlots: !0
    },
    properties: {
        config: {
            type: Object,
            observer: "configUpdate"
        }
    },
    data: {
        uiCssVars: e.default.uiSizeData.cssVars,
        useConfig: {},
        titleText: ""
    },
    lifetimes: {
        attached: function() {
            var t = this;
            e.default.event.on("uiSizeDataUpdate", this._uiSizeDataUpdate = function(e) {
                var o = e.cssVars;
                t.setData({
                    uiCssVars: o
                }), t.heightUpdate();
            }), e.default.event.on("uiTopUpdate", this._uiTopUpdate = function(e) {
                t.configUpdate();
            }), this.configUpdate(), this.setData({
                backPrev: getCurrentPages().length > 1
            });
        },
        detached: function() {
            e.default.event.off("uiSizeDataUpdate", this._uiSizeDataUpdate), e.default.event.off("uiTopUpdate", this._uiTopUpdate);
        },
        ready: function() {
            this.heightUpdate();
        }
    },
    methods: {
        configUpdate: (0, a.injectDebounce)("configUpdate", function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.config;
            if (!this._updateDisabled) {
                var a = Object.assign({}, e.default.uiTop, t, this._injectConfig), i = a.title, n = "middle" === a.titleStyle && i.length > 11 ? i.slice(0, 10) + "…" : i, r = new o.default(a.backgroundColor);
                if (a.backgroundColorOpaque = r.alpha(1).hex(), "original" !== a.backgroundColorAlpha && (r = r.alpha(a.backgroundColorAlpha)), 
                a.backgroundColorUse = r.rgb().string(), r.alpha() <= .2 && a.adaptiveFrontColor && this._page) {
                    var u = new o.default(this._page.uiPage.backgroundColor);
                    new o.default(a.frontColor).contrast(u) < 7 && (a.frontColor = u.isLight() ? "#000000" : "#ffffff");
                }
                var s = a.frontColorIsLight = new o.default(a.frontColor).isLight();
                wx.setNavigationBarTitle({
                    title: i
                }), wx.setNavigationBarColor({
                    frontColor: s ? "#ffffff" : "#000000",
                    backgroundColor: r.hex()
                });
                var l = "--top-title-alpha:" + a.titleAlpha + ";\n\t\t\t--top-background-color-opaque:" + a.backgroundColorOpaque + ";\n\t\t\t--top-background-color:" + a.backgroundColorUse + ";\n\t\t\t--top-front:" + a.frontColor + ";\n\t\t\t--top-filter: " + a.filter + ";\n\t\t\t--top-transition-duration: " + a.transitionDuration + ";\n\t\t\t--top-front-front: " + (s ? "#333" : "#fff") + ";";
                this.triggerEvent("topcssvarsupdate", {
                    topCssVars: l
                }, {
                    bubbles: !0,
                    composed: !0
                }), this.setData({
                    useConfig: a,
                    titleText: n
                });
            }
        }, 20),
        navigateBack: function() {
            wx.navigateBack();
        },
        homeBack: function() {
            e.default.actionRun(e.default.defaultPage);
        },
        heightUpdate: function() {
            var t = this;
            this.getHeight().then(function(e) {
                t.triggerEvent("topheightupdate", {
                    height: e
                }, {
                    bubbles: !0,
                    composed: !0
                });
            }, function(t) {});
        },
        getHeight: function() {
            var t = this;
            return new Promise(function(e, o) {
                setTimeout(function() {
                    t.createSelectorQuery().select(".ui-top").boundingClientRect(function(t) {
                        try {
                            e(t.height);
                        } catch (t) {
                            o(t);
                        }
                    }).exec();
                }, 100);
            });
        }
    }
});