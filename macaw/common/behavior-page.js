var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./behavior-commonStyles")), e = require("./methods");

module.exports = Behavior({
    behaviors: [ t.default, "wx://component-export" ],
    properties: {
        pageType: String,
        pageConfig: Object,
        topConfig: Object
    },
    data: {
        scrollTop: 0,
        statusViewState: "loading",
        pagerLoadingState: ""
    },
    methods: {
        dataReceiver: e.dataReceiver,
        setDataByOptions: e.setDataByOptions,
        targetDataSet: e.targetDataSet,
        targetActionRun: e.targetActionRun,
        autoSetStatus: e.autoSetStatus,
        autoSetPager: e.autoSetPager,
        autoSetPagerStatus: e.autoSetPagerStatus,
        updateOptions: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.options;
            this.setData({
                options: t
            }), this._page.options = Object.assign(t, {
                page: this._page.options.page
            });
        }
    },
    lifetimes: {
        attached: function() {
            e.injectUI.call(this);
        }
    },
    export: function() {
        var t = this, e = function(e) {
            return function() {
                if (t[e]) return t[e].apply(t, arguments);
            };
        };
        return {
            onToggleIn: function() {
                return t._isActive = !0, e("onToggleIn")();
            },
            onToggleOut: function() {
                return t._isActive = !1, e("onToggleOut")();
            },
            onShow: function() {
                return t._isShow = !0, t.uiTop.enableUpdate(), e("onShow")();
            },
            onHide: function() {
                return t._isShow = !1, t._showAgain = !0, t.uiTop.disableUpdate(), e("onHide")();
            },
            onSmartToHere: e("onSmartToHere"),
            onReachBottom: e("onReachBottom"),
            onShareAppMessage: e("onShareAppMessage"),
            onPullDownRefresh: e("onPullDownRefresh"),
            onDoubleTapTab: function() {
                return Object.assign(t.uiPage, {
                    scrollWithAnimation: !0,
                    scrollTop: 0
                }), e("onDoubleTapTab")();
            },
            swapData: function(o, a) {
                return o.allowShare = t.allowShare, t._page = o, t.pageOptions = a || {}, o.setData({
                    shortcutGroup: o.data.shortcutGroup = t.shortcutGroup || ""
                }), e("swapData")(o, a);
            }
        };
    }
});