var e = require("../../macaw/create"), t = require("../../api/api"), a = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../store/vcHistory")), i = getApp(), r = i.Macaw;

(0, e.createPage)({
    allowShare: !0,
    uiPage: {
        disableScroll: !1
    },
    uiTop: {
        title: "视频详情",
        backgroundColorAlpha: 1
    },
    data: {
        viewGroup: [ {
            id: "info",
            label: "简介"
        }, {
            id: "list",
            label: "视频列表"
        } ],
        currentView: "info",
        playIndex: 0
    },
    onReady: function() {
        this._player = wx.createVideoContext("player", this);
    },
    onLogged: function(e, t) {
        var a = this;
        t(function(e) {
            a.setData({
                userData: e
            });
        }, !0), this.setData({
            iosDisabled: "ios" === r.systemInfo.platform && !i.sysConfig.iosVirtualSell
        }), this.reLoad();
    },
    reLoad: function() {
        var e = this;
        this.autoSetStatus("main", (0, t.getVcInfo)(this.options.id)).then(function(t) {
            var i = e.options, r = i.vid, n = i.time, o = i.autoplay;
            if (void 0 === r) {
                var s = a.getItemByVcID(t.id);
                s && (r = s.playID, n = s.playTime);
            }
            e.setData({
                vc: t,
                playIndex: void 0 === r ? 0 : t.videos.findIndex(function(e) {
                    return e.id == r;
                }),
                playTime: n || 0,
                autoPlay: o || !1
            }), e.uiTop.title = t.title;
        });
    },
    toggleFavorited: function() {
        var e = this, a = this.data.vc, n = !a.favorited;
        (0, t.setVcFavorited)(a.id, n).then(function(t) {
            i._vcNeedReload = !0, n && r.successToast("已收藏"), e.setData({
                "vc.favorited": n
            });
        });
    },
    onVideoTap: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setPlayIndex(t);
    },
    setPlayIndex: function(e) {
        var t = {
            playIndex: e,
            playTime: 0,
            autoPlay: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        }, a = this.data.playIndex;
        t.playIndex = e, e != a && (t.playerBuyTip = !1, this._playerTime = 0, this._playerDone = !1), 
        this.setData(t);
    },
    onPlayerTimeUpdate: function(e) {
        var t = e.currentTarget, a = e.detail, i = this._player, r = this.data.vc, n = t.dataset.index, o = r.videos[n].freeSec, s = this._playerTime = a.currentTime;
        !r.purchased && r.price > 0 && s >= o && (this.setData({
            playerBuyTip: !0
        }), i.exitFullScreen(), i.seek(o), i.pause());
    },
    onPlayerEnded: function(e) {
        var t = e.currentTarget, a = (e.detail, this._player, this.data.vc), i = t.dataset.index;
        this._playerDone = !0, i < a.videos.length - 1 && this.setPlayIndex(i + 1, !0);
    },
    onUnload: function() {
        var e = this.data, t = e.vc, i = e.playIndex;
        a.updateItem(t, i, this._playerTime, this._playerDone);
    },
    onBuyTap: function() {
        var e = this;
        r.smartTo({
            url: ">order-commit",
            data: {
                vc: this.data.vc,
                orderSuccess: function(t) {
                    e.setData({
                        "vc.purchased": !0
                    });
                }
            }
        });
    },
    tabTap: function(e) {
        var t = e.detail;
        this.setData({
            currentView: t.id
        });
    },
    onResultSwiperChange: function(e) {
        var t = e.detail;
        "touch" === t.source && this.setData({
            currentView: t.currentItemId
        });
    }
});