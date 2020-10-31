var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../behavior"));

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        scroll: Boolean,
        vertical: Boolean,
        items: {
            type: Array,
            value: [],
            observer: "update"
        },
        labelKey: {
            type: String,
            value: "label"
        },
        idKey: {
            type: String,
            value: "id"
        },
        current: {
            type: null,
            observer: function(t, e) {
                t !== e && this.triggerEvent("change", {
                    value: t,
                    newID: t,
                    oldID: e
                });
            }
        }
    },
    data: {
        indicatorGroup: {}
    },
    lifetimes: {
        ready: function() {
            this._isReady = !0, this.update();
        },
        detached: function() {
            clearTimeout(this._readyTimeout);
        }
    },
    methods: {
        onItemTap: function(t) {
            var e = t.currentTarget, a = this.data.idKey, i = e.dataset.item;
            this.setData({
                current: i[a]
            }), this.triggerEvent("itemtap", i);
        },
        update: function() {
            var t = this, e = this.data.idKey;
            this._readyTimeout = setTimeout(function() {
                if (!t._isReady) return !1;
                var a = wx.createSelectorQuery().in(t);
                a.select(".ui-tabs-items-box").boundingClientRect();
                var i = !0, r = !1, n = void 0;
                try {
                    for (var o, u = t.data.items[Symbol.iterator](); !(i = (o = u.next()).done); i = !0) {
                        var s = o.value;
                        a.select("#ui-tabs-item_" + s[e]).boundingClientRect();
                    }
                } catch (t) {
                    r = !0, n = t;
                } finally {
                    try {
                        !i && u.return && u.return();
                    } finally {
                        if (r) throw n;
                    }
                }
                a.exec(function(a) {
                    try {
                        var i = a.shift(), r = i.top, n = i.left, o = {}, u = t.data.vertical;
                        a.forEach(function(a, i) {
                            var s = t.data.items[i][e];
                            o[s] = u ? "--ui-tabs-indicator-height:" + a.height + "px; transform:translate3D(0," + (a.top - r) + "px,0);" : "--ui-tabs-indicator-width:" + a.width + "px; transform:translate3D(" + (a.left - n) + "px,0,0);";
                        }), t.setData({
                            indicatorGroup: o,
                            current: t.data.current
                        });
                    } catch (t) {}
                });
            }, 200);
        }
    }
});