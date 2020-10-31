function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../macaw/create"), a = require("../../api/api"), i = getApp(), n = i.Macaw;

(0, e.createPage)({
    allowShare: !0,
    uiTop: {
        title: "领券中心"
    },
    data: {
        _status: {
            main: {
                empty: {
                    icon: "ui-coupon",
                    text: "还没有可以领取的优惠券哦"
                }
            }
        }
    },
    onLogged: function(t, e) {
        var a = this;
        e(function(t) {
            a.setData({
                userData: t
            });
        }, !0), this.reLoad();
    },
    reLoad: function(t) {
        var e = this;
        this._pager = this._pager || (0, a.getCouponsSupplyListPager)(), this.autoSetPagerStatus("main", this._pager.load(t)).then(function(t) {
            e.setData({
                list: t
            });
        });
    },
    nextPage: function() {
        var t = this;
        this._pager && !this._pager.completed && this.autoSetPager("main", this._pager.next()).then(function(e) {
            var a = e.list;
            t.setData({
                list: a
            });
        });
    },
    itemTap: function(e) {
        var r = this, s = e.detail.data, o = e.currentTarget;
        if (!(s.received || s.over < 1)) {
            var u = o.dataset.index;
            (0, a.receiveCounpon)(s.id).then(function(e) {
                i._couponsNeedReload = !0, r.setData(t({}, "list[" + u + "].received", !0)), n.successToast("领取成功");
            }, function(t) {
                n.textToast("领取失败: " + t);
            });
        }
    }
});