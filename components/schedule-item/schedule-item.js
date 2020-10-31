var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../macaw/c/behavior"));

getApp().Macaw;

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        hiddenStore: Boolean,
        item: {
            type: Object,
            observer: "update"
        }
    },
    data: {
        wait: !0,
        processing: !1,
        enterDisabled: !1,
        enterText: "报名",
        strokeIcons: {
            subway: "ui-subway",
            bus: "ui-bus",
            car: "ui-car"
        }
    },
    lifetimes: {
        detached: function() {
            clearTimeout(this._updateTimeout);
        }
    },
    methods: {
        update: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.item, a = t.timeOffset, i = t.orderStart, o = t.orderEnd, r = t.orderNum, s = t.orderMax, u = t.orderCv, d = t.queueEnabled, n = t.myOrderID, c = t.myQueueID, l = Date.now() + a, m = l < i, p = l > o, b = s - r, h = b <= 0, f = b < u, v = !m && !p && (!h || d), w = i - l, g = o - l, D = Math.max(0, w, g);
            !p && !n && !c && D > 0 && D < 108e6 && (this._updateTimeout = setTimeout(function() {
                e.update();
            }, D)), this.setData({
                wait: m,
                processing: v,
                flagDisabled: Boolean(!v || n || c),
                flagText: n ? "已报名" : c ? "已排队" : m ? "报名未开始" : p ? "报名已截止" : h ? d ? "可排队" : "已满员" : f ? "即将满员" : "可报名"
            });
        }
    }
});