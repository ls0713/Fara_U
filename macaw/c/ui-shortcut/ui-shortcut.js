function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../index")), a = t(require("../bubbleBehavior")), s = require("../../lib/utils"), i = t(require("../../common/behavior-commonStyles")), n = e.default.shortcutMenu;

Component({
    behaviors: [ i.default, a.default ],
    properties: {
        group: {
            type: String,
            observer: "update"
        },
        update: {
            type: null,
            observer: "update"
        },
        say: {
            type: String,
            observer: "sayObserver"
        },
        sayTime: {
            type: Number,
            value: 5e3
        }
    },
    data: {
        enabled: n.enabled,
        bubbleName: "ui-shortcut",
        hasMessageItem: !1,
        shortcutMenu: n,
        items: [],
        alone: !1,
        expand: !1,
        maskShow: !1,
        sayContent: "",
        msgCount: 0
    },
    lifetimes: {
        created: function() {
            var t = this;
            e.default.event.on("shortcutMenuUpdate", this._shortcutMenuUpdate = function() {
                t.update();
            }), wx.nextTick(function() {
                t.update();
            });
        },
        detached: function() {
            e.default.event.off("shortcutMenuUpdate", this._shortcutMenuUpdate);
        }
    },
    methods: {
        getPositionFail: function() {
            this.say((this.data.alone ? this.data.items[0].helperSay : "") || n.helperSay, 5e3);
        },
        sayObserver: function(t) {
            t && this.say(t);
        },
        say: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.data.sayTime;
            clearTimeout(this._sayTimeout), this.setData({
                sayContent: e
            }), e && (this.setData({
                sayShow: !0
            }), this._sayTimeout = setTimeout(function() {
                t.setData({
                    sayShow: !1
                });
            }, a));
        },
        update: function() {
            var t = this;
            if (n.enabled) {
                var a = e.default.getCurrentPageUrl(), i = this.data.group.startsWith("*"), o = !1, u = n.items.filter(function(e) {
                    var n = (i ? "*" + e.group === t.data.group : !e.group || e.group === t.data.group) && !(0, 
                    s.matchUrl)(a, e.action);
                    return n && e.messageItem && (o = !0), n;
                });
                this.setData({
                    items: u,
                    hasMessageItem: o,
                    alone: 1 === u.length,
                    enabled: u.length > 0,
                    shortcutMenu: n
                });
            }
        },
        close: function() {
            this.setData({
                expand: !1
            });
        },
        tap: function() {
            if (this.data.alone) e.default.actionRun(this.data.items[0].action); else {
                var t = !this.data.expand;
                t && this.setData({
                    maskShow: !0
                }), clearTimeout(this._sayTimeout), this.setData({
                    expand: t,
                    sayShow: !1
                });
            }
        },
        maskTransitionEnd: function() {
            this.data.expand || this.setData({
                maskShow: !1
            });
        }
    }
});