function t(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e.default = t, e;
}

function e(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
};

require("./lib/polyfill");

var a = require("./lib/utils"), r = e(require("./lib")), o = e(require("./store")), i = e(require("./event")), s = t(require("./ui-config")), u = t(require("./common/styles")), l = wx.getSystemInfoSync(), c = n({
    event: i.default,
    store: o.default,
    lib: r.default,
    systemInfo: l
}, s, {
    adapt: {
        iPhoneX: /iPhone( X| XR| XS|10,3|10,6|11)/.test(l.model)
    },
    defaultPage: "@home",
    customPage: {
        defaultPage: "home",
        mainUrl: "/custom-pages/main/main",
        subUrl: "/custom-pages/sub/sub"
    },
    navItems: [],
    navPages: [],
    presetWxapp: [],
    actionMethods: {
        toggleStyle: function(t) {
            this.toggleStyle(t);
        },
        openLocation: function(t) {
            t instanceof Object && wx.openLocation(t);
        },
        copyText: function(t) {
            wx.setClipboardData({
                data: String(t),
                success: function() {
                    wx.showToast({
                        title: "已复制",
                        icon: "none",
                        duration: 1e3
                    });
                }
            });
        },
        callPhone: function(t) {
            wx.makePhoneCall({
                phoneNumber: String(t)
            });
        },
        navigateBack: function() {
            getCurrentPages().length > 1 ? wx.navigateBack() : this.actionRun(this.defaultPage);
        },
        toPresetWxapp: function(t) {
            var e = this, n = this.presetWxapp.find(function(e) {
                return e.id == t;
            });
            if (!n) return this.textToast("找不到ID为 " + t + " 的预置小程序");
            wx.navigateToMiniProgram({
                appId: n.appID,
                path: n.path,
                success: function() {
                    reportUserBehavior("slwl-000007", t);
                },
                fail: function(n) {
                    var a = n.errMsg;
                    "navigateToMiniProgram:fail invalid appid" === a ? e.textToast("预置小程序 [" + t + "] 的appID无效") : a.endsWith("is not in navigateToMiniProgramAppIdList") && e.textToast("预置小程序 [" + t + "] 的appID不在配置列表中");
                }
            });
        }
    },
    toggleStyle: function(t) {
        var e = u[t];
        e && (this.commonStyles._setStore(e.commonStyles), this.uiPage._setStore(e.uiPage), 
        this.uiTop._setStore(e.uiTop), this.uiNav._setStore(e.uiNav));
    },
    getCurrentPage: function() {
        var t = getCurrentPages();
        return t[t.length - 1];
    },
    getCurrentPageUrl: function(t, e, n) {
        if (!(t = t || this.getCurrentPage())) return "";
        if (!n && t.rewritePageUrl) return t.rewritePageUrl(e);
        var r = "/" + t.route;
        return e && (r += (0, a.optionsToQueryString)(t.options)), r;
    },
    pageCallBack: function(t, e) {
        var n = getCurrentPages(), a = n[n.length - 2];
        a && (a[t](e), wx.navigateBack());
    },
    smartToData: {},
    smartTo: function(t) {
        var e = this, n = arguments, r = getCurrentPages().length >= 10, o = this.getCurrentPage(), s = this.getCurrentPageUrl(null, !1, !0), u = t.data, l = (0, 
        a.urlParser)(t.url, t.options), c = l.url, f = l.pureUrl, g = l.options, d = !!this.navPages.find(function(t) {
            return (0, a.matchUrl)(t, f);
        }), h = !d && (0, a.matchUrl)(s, f), p = t.method || (d ? "switchTab" : h || r ? "redirectTo" : "navigateTo");
        if (d && ![ "switchTab", "reLaunch" ].includes(p) && (p = "switchTab"), f.startsWith("@")) {
            var m = d ? this.customPage.mainUrl : this.customPage.subUrl, v = (0, a.urlParser)(m, Object.assign({}, g, {
                page: f.substring(1)
            }));
            c = v.url, f = v.pureUrl, g = v.options, h = (0, a.matchUrl)(s, f);
        }
        t.url = "switchTab" === p ? f : c;
        var w = {
            options: g,
            data: u,
            method: p
        };
        "switchTab" === p && h ? (o.onSmartToHere && o.onSmartToHere(w), i.default.emit("smartToDone", w)) : this.smartToData[f] = w;
        var P = t.fail;
        t.fail = function(a) {
            a.errMsg.endsWith("is not found") && e.textToast("找不到页面: " + f), t.failToDefaultPage && e.smartTo({
                method: "reLaunch" === p ? "reLaunch" : void 0,
                url: e.defaultPage
            }), P && P.apply(void 0, n);
        }, wx[p](t);
    },
    actionRun: function(t) {
        for (var e = this, n = arguments.length, a = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
        if ("string" == typeof t && "" !== t) switch (t.slice(0, 1)) {
          case "#":
            break;

          case "/":
          case ">":
          case "^":
          case "@":
            this.smartTo({
                url: t
            });
            break;

          case ":":
            t.substring(1).replace(/^(\w+)(?:\((.*)\))?$/, function(t, n, r) {
                var o = n ? e.actionMethods[n] : null;
                if (!o) return e.textToast("找不到方法: " + n);
                try {
                    r = r ? JSON.parse("[" + r + "]") : a;
                } catch (t) {
                    return void e.textToast("方法[" + n + "]调用失败：无效的参数");
                }
                o.apply(e, r);
            });
            break;

          default:
            t.match(/^https?:/) ? this.smartTo({
                url: ">webview?url=" + t
            }) : this.textToast("未知动作: " + t);
        }
    },
    onPageShow: function(t) {
        wx.hideTabBar(), t.allowShare ? wx.showShareMenu() : wx.hideShareMenu();
        var e = this.smartToData["/" + t.route];
        this.smartToData = {}, e && (t.onSmartToHere && t.onSmartToHere(e), i.default.emit("smartToDone", e));
    },
    successToast: function(t) {
        wx.showToast({
            title: t,
            icon: "success",
            duration: 1500
        });
    },
    textToast: function(t, e) {
        t && (e && t.endsWith("cancel") || wx.showToast({
            title: t.toString(),
            icon: "none",
            duration: 2e3
        }));
    },
    getLoginCode: function(t) {
        return new Promise(function(e, n) {
            function a() {
                wx.login({
                    success: function(t) {
                        var n = t.code;
                        e({
                            code: o.default.loginCode = n,
                            isNew: !0
                        });
                    },
                    fail: function(t) {
                        var e = t.errMsg;
                        n(e);
                    }
                });
            }
            if (!o.default.loginCode || t) return a();
            wx.checkSession({
                success: function() {
                    e({
                        code: o.default.loginCode,
                        isNew: !1
                    });
                },
                fail: function() {
                    a();
                }
            });
        });
    },
    setUserData: function(t) {
        o.default.userData = t, i.default.emit("userDataUpdate", t);
    },
    loginHandle: function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default.loginCode;
        o.default.isLogged = !1;
        var n = this._loginPromise = new Promise(function(n, a) {
            try {
                o.default.userInfo = t;
                var r = 0, s = {};
                r = i.default.listenerCount("loginHandle"), i.default.emit("loginHandle", {
                    userInfo: t,
                    loginCode: e
                }, function(t) {
                    r--, t && Object.assign(s, t), r <= 0 && (o.default.userData = s, o.default.isLogged = !0, 
                    n(s));
                }, a) || n(o.default.userData);
            } catch (t) {
                var u = t.toString();
                a(u);
            }
        });
        return i.default.emit("loginPending", n), n.then(function(t) {
            i.default.emit("loginDone", t);
        }, function(t) {
            i.default.emit("loginError", t);
        }), n;
    },
    autoLogin: function() {
        var t = this;
        return new Promise(function(e, n) {
            t.getLoginCode(!0).then(function(a) {
                var r = a.code;
                wx.getSetting({
                    success: function(a) {
                        !!a.authSetting["scope.userInfo"] && wx.getUserInfo({
                            success: function(a) {
                                var o = a.userInfo;
                                return t.loginHandle(o, r).then(e, n);
                            },
                            fail: n
                        });
                    },
                    fail: n
                });
            }, n);
        });
    }
});

exports.default = c;