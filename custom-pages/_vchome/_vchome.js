var t = require("../../macaw/create"), e = require("../../api/api"), o = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    return e.default = t, e;
}(require("../../store/vcHistory")), a = getApp(), i = a.Macaw;

(0, t.createEmulatePage)({
    allowShare: !0,
    uiPage: {
        immersiveTop: !0
    },
    uiTop: {
        title: "视频课程",
        backgroundColorAlpha: 0,
        adaptiveFrontColor: !0
    },
    data: {
        _pager: {
            recommend: {
                completed: {
                    text: "我是有底线的"
                }
            }
        }
    },
    lifetimes: {
        attached: function() {
            i.store.isLogged || this.reLoad();
        }
    },
    methods: {
        onLogged: function(t, e) {
            this.reLoad(), this.favoritesReLoad(), this.historyReload();
        },
        onShow: function() {
            this._showAgain && this.historyReload(), a._vcNeedReload && this.favoritesReLoad(), 
            a._vcNeedReload = !1;
        },
        reLoad: function() {
            var t = this, o = this._pager || (this._pager = (0, e.getVcsRecommendListPager)()), a = (0, 
            e.getVcTypesList)().then(function(e) {
                t.setData({
                    typesList: e
                });
            }), i = this.autoSetPagerStatus("recommend", o.load(!0)).then(function(e) {
                t.setData({
                    recommendVcs: e
                });
            });
            this.autoSetStatus("main", Promise.all([ a, i ])).then(function(e) {
                t.onWxmlReady();
            });
        },
        historyReload: function() {
            this.setData({
                historyVcs: o.getItems()
            });
        },
        favoritesReLoad: function() {
            var t = this, o = this._favoritesPager || (this._favoritesPager = (0, e.getVcFavoritesListPager)());
            this.autoSetPagerStatus("favorites", o.load(!0)).then(function(e) {
                t.setData({
                    favoriteVcs: e
                });
            });
        },
        clearHistory: function() {
            var t = this;
            wx.showModal({
                title: "清除观看历史",
                content: "确定清除视频课程历史观看记录？",
                cancelText: "点错了",
                confirmColor: "#cc353c",
                success: function(e) {
                    e.confirm && (o.clear(), t.historyReload());
                }
            });
        },
        nextPage: function() {
            var t = this;
            this._pager && !this._pager.completed && this.autoSetPager("recommend", this._pager.next()).then(function(e) {
                var o = e.list;
                t.setData({
                    recommendVcs: o
                });
            });
        },
        onWxmlReady: function() {
            var t = this;
            this._observer || (this._observer = this.createIntersectionObserver({
                thresholds: [ .8 ]
            }).relativeToViewport().observe("._top-holder", function(e) {
                if (t._isActive) {
                    var o = t._isTopShow = e.intersectionRatio < .8;
                    t.uiTop.backgroundColorAlpha = o ? Math.max(i.uiTop.backgroundColorAlpha, .96) : 0;
                }
            }));
        },
        loginBtnTap: function() {
            this.selectComponent("#ui-login").popupShow();
        }
    }
});