function e(e, i) {
    return e.map(function(e) {
        var n = (0, t.matchUrl)(i, e.action), a = e.label, u = Array.isArray(e.items) ? e.items.map(function(e) {
            var u = (0, t.matchUrl)(i, e.action);
            return u && (n = !0, a += "·" + e.label), Object.assign({}, e, {
                isActive: u
            });
        }) : [];
        return Object.assign({}, e, {
            label: a,
            image: Array.isArray(e.image) ? e.image[n ? 1 : 0] : e.image,
            icon: Array.isArray(e.icon) ? e.icon[n ? 1 : 0] : e.icon,
            isActive: n,
            items: u
        });
    });
}

var t = require("../../lib/utils"), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../index"));

Component({
    behaviors: [ "wx://component-export" ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        update: {
            type: null,
            observer: "update"
        },
        config: {
            type: Object,
            observer: "configUpdate"
        }
    },
    data: {
        useConfig: {},
        items: [],
        menuItems: [],
        menuHoverItemIndex: -1,
        menuShow: !1
    },
    lifetimes: {
        attached: function() {
            var e = this;
            i.default.event.on("uiNavUpdate", this._uiNavUpdate = function(t) {
                e.configUpdate();
            }), this.configUpdate(), this.update();
        },
        detached: function() {
            i.default.event.off("uiNavUpdate", this._uiNavUpdate);
        }
    },
    methods: {
        configUpdate: (0, t.injectDebounce)("configUpdate", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.config, t = Object.assign({}, i.default.uiNav, e);
            this.setData({
                useConfig: t
            });
        }, 20),
        update: (0, t.injectDebounce)("update", function() {
            var t = i.default.getCurrentPageUrl();
            this.setData({
                items: e(i.default.navItems, t)
            });
        }, 20),
        openMenu: function(e) {
            var t = this, i = this.data.items[e].items;
            i && i.length && (this._menuOpened = !0, this.setData({
                menuShow: !0,
                menuItems: i,
                menuHoverItemIndex: ""
            }), clearTimeout(this._menuQueryTimeout), this._menuQueryTimeout = setTimeout(function() {
                for (var e = wx.createSelectorQuery().in(t), n = 0; n < i.length; n++) e.select("#_custom-nav-menu-item_" + n).boundingClientRect();
                e.exec(function(e) {
                    try {
                        t.menuItemsX = e.map(function(e) {
                            return e.left;
                        });
                    } catch (e) {}
                });
            }, 100));
        },
        closeMenu: function() {
            this._menuOpened = !1, this.setData({
                menuShow: !1,
                menuHoverItemIndex: -1
            });
        },
        onTouchStart: function(e) {
            var t = this, i = e.currentTarget;
            this._touchStartTimeout = setTimeout(function() {
                t.openMenu(i.dataset.index);
            }, 300);
        },
        onTouchEnd: function(e) {
            if (clearTimeout(this._touchStartTimeout), this._menuOpened) {
                var t = this.data.menuItems[this.data.menuHoverItemIndex];
                t && i.default.actionRun(t.action), this.closeMenu();
            }
        },
        onTouchMove: function(e) {
            var t = e.touches;
            if (this.menuItemsX && this._menuOpened) {
                var i = t[0].pageX, n = -1;
                this.menuItemsX.forEach(function(e, t) {
                    i > e && (n = t);
                }), this.setData({
                    menuHoverItemIndex: n
                });
            }
        },
        click: function(e) {
            var t = this, n = e.currentTarget.dataset.index, a = this.data.items[n];
            a.isActive ? (this._navClickTimeout = setTimeout(function() {
                t.openMenu(n);
            }, 100), a.lastClickTime && e.timeStamp - a.lastClickTime < 300 && (clearInterval(this._navClickTimeout), 
            this.triggerEvent("doubletaptab")), a.lastClickTime = e.timeStamp) : i.default.actionRun(a.action);
        }
    }
});