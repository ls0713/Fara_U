function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../macaw/create"), a = require("../../api/api"), i = {
    vc: {
        list: a.getVcFavoritesListPager,
        set: a.setVcFavorited
    }
}, s = getApp(), n = s.Macaw;

(0, e.createPage)({
    allowShare: !0,
    uiPage: {
        disableScroll: !1
    },
    uiTop: {
        title: "我的收藏",
        backgroundColorAlpha: 1
    },
    data: {
        typesList: [ {
            id: "vc",
            label: "视频课程"
        } ],
        type: "vc",
        listSet: {},
        _status: {
            vc: {
                empty: {
                    icon: "ui-video",
                    text: "你还没有已收藏的视频课程哦~",
                    btn: "去逛逛",
                    action: "@vchome"
                }
            }
        }
    },
    onLoad: function(t) {
        this.setDataByOptions([ "type" ], t);
    },
    onLogged: function(t, e) {
        var a = this;
        e(function(t) {
            a.setData({
                userData: t
            });
        }, !0), this.setData({
            iosDisabled: "ios" === n.systemInfo.platform && !s.sysConfig.iosVirtualSell
        }), this.reLoad();
    },
    reLoad: function() {
        this.pageChange(this.data.type);
    },
    removeItem: function(e) {
        var a = this, o = e.currentTarget.dataset, r = o.type, c = o.id, u = o.index, d = i[r];
        d && d.set(c, 0).then(function(e) {
            a.setData(t({}, "listSet." + r + "[" + u + "].removed", !0)), -1 === a.data.listSet[r].findIndex(function(t) {
                return !t.removed;
            }) && a.setData({
                "_status.vc.mode": "empty"
            }), n.textToast("收藏已移除"), s._vcNeedReload = !0;
        });
    },
    pageLoad: function(e, a) {
        var s = this, n = i[e];
        if (n) {
            var o = this._pagers || (this._pagers = {}), r = o[e] || (o[e] = n.list());
            this.autoSetPagerStatus(e, r.load(a)).then(function(a) {
                s.setData(t({}, "listSet." + e, a));
            });
        }
    },
    onNextPage: function(t) {
        var e = t.currentTarget.dataset.type;
        this.pageNext(e);
    },
    pageNext: function(e) {
        var a = this, i = this._pagers[e];
        i && !i.completed && this.autoSetPager(e, i.next()).then(function(i) {
            var s = i.list;
            a.setData(t({}, "listSet." + e, s));
        });
    },
    tabTap: function(t) {
        var e = t.detail;
        this.pageChange(e.id);
    },
    onResultSwiperChange: function(t) {
        var e = t.detail;
        "touch" === e.source && this.pageChange(e.currentItemId);
    },
    pageChange: function(t) {
        this.setData({
            type: t
        }), this.pageLoad(t);
    },
    onPageErrorTap: function(t) {
        var e = t.currentTarget.dataset.type;
        this.pageLoad(e, !0);
    }
});