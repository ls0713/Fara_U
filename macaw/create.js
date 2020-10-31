function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createPage = function(e) {
    if (e.onWxmlReady) {
        var t = e.onWxmlReady;
        e.onWxmlReady = function() {
            this._isReady ? t.call(this) : this._waitWxmlReady = !0;
        };
    }
    return Page((0, i.default)(e, [ {
        onShareAppMessage: r.onShareAppMessage,
        onBeforeLoad: function() {
            r.createUI.call(this), r.bindEventLifetimes.call(this);
        },
        onUnload: function() {
            r.unbindEventLifetimes.call(this);
        },
        onReady: function() {
            this._isReady = !0, r.injectUI.call(this), this._waitWxmlReady && this.onWxmlReady && this.onWxmlReady();
        },
        onShow: function() {
            this._isShow = !0, a.default.onPageShow(this), this.uiTop.enableUpdate();
        },
        onHide: function() {
            this._isShow = !1, this._showAgain = !0, this.uiTop.disableUpdate();
        },
        methods: {
            noopFunc: r.noopFunc,
            targetDataSet: r.targetDataSet,
            targetActionRun: r.targetActionRun,
            setDataByOptions: r.setDataByOptions,
            dataReceiver: r.dataReceiver,
            autoSetStatus: r.autoSetStatus,
            autoSetPager: r.autoSetPager,
            autoSetPagerStatus: r.autoSetPagerStatus
        }
    }, s.default ]));
}, exports.createCustomPage = function(e) {
    return Page((0, i.default)(e, [ {
        data: {
            page: "",
            pageUrl: "",
            shortcutGroup: "",
            pageAlive: {},
            options: {}
        },
        onBeforeLoad: function(e) {
            this.updateOptions(e);
        },
        onShareAppMessage: function() {
            return this.currentPage && this.currentPage.onShareAppMessage(), r.onShareAppMessage.bind(this)();
        },
        onSmartToHere: function(e) {
            this.updateOptions(e.options, function(t) {
                t && t.onSmartToHere(e);
            });
        },
        onResize: function() {
            wx.nextTick(function() {
                wx.hideTabBar();
            });
        },
        onShow: function() {
            a.default.onPageShow(this), this.currentPage && this.currentPage.onShow();
        },
        onHide: function() {
            this._showAgain = !0, this.currentPage && this.currentPage.onHide();
        },
        methods: {
            noopFunc: r.noopFunc,
            targetDataSet: r.targetDataSet,
            targetActionRun: r.targetActionRun,
            setDataByOptions: r.setDataByOptions,
            dataReceiver: r.dataReceiver,
            updateOptions: function() {
                var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments[1], o = n.page || this.data.page || a.default.customPage.defaultPage, s = o !== this.data.page, r = this.currentPage, u = !this.data.pageAlive[o];
                delete n.page, delete this.options.page, u && this.setData(t({}, "pageAlive." + o, !0)), 
                setTimeout(function() {
                    var t = e.currentPage = e.selectComponent("#" + o);
                    if (!t) return a.default.textToast("找不到页面: " + o);
                    s && (r && r.onToggleOut(), t.onToggleIn()), e.setData({
                        page: o,
                        pageUrl: "@" + o
                    }), t.swapData(e, n), s && (r && r.onHide(), t.onShow(), a.default.onPageShow(e), 
                    e.onPageChange && e.onPageChange()), i && i(t);
                }, u ? 100 : 0);
            },
            rewritePageUrl: function(e) {
                return (0, n.urlParser)(this.data.pageUrl, e ? this.options : {}).url;
            }
        }
    }, s.default ]));
}, exports.createEmulatePage = function(e) {
    if (Array.isArray(e.behaviors) || (e.behaviors = []), e.options instanceof Object || (e.options = {}), 
    e.options.addGlobalClass = !0, e.methods && e.methods.onWxmlReady) {
        var t = e.methods.onWxmlReady;
        e.methods.onWxmlReady = function() {
            this._isReady ? t.call(this) : this._waitWxmlReady = !0;
        };
    }
    var a = {
        allowShare: e.allowShare,
        uiPage: e.uiPage,
        uiTop: e.uiTop
    };
    return e.behaviors.push(o.default, Behavior({
        lifetimes: {
            created: function() {
                Object.assign(this, a), r.createUI.call(this), r.bindEventLifetimes.call(this);
            },
            detached: function() {
                r.unbindEventLifetimes.call(this);
            },
            ready: function() {
                this._isReady = !0, this._waitWxmlReady && this.onWxmlReady && this.onWxmlReady();
            }
        }
    })), Component(e);
};

var a = e(require("./index")), n = require("./lib/utils"), i = e(require("./lib/pageMixin")), o = e(require("./common/behavior-page")), s = e(require("./common/page-commonStyles")), r = require("./common/methods");