var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./macaw/index")), t = require("./macaw/lib/utils"), r = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("./api/api")), i = void 0, n = wx.getStorageSync("serviceStoreID"), a = require("siteinfo.js"), o = {}, u = {
    i: a.uniacid,
    c: "entry",
    a: "wxapp",
    m: "bozutung_jsfmd",
    ver: "4.19.0",
    ssid: n
};

r.injectConfig({
    baseURL: a.siteroot,
    params: u
}), e.default.toggleStyle("red"), e.default.event.on("loginHandle", function(e, t, n) {
    var a = e.userInfo, o = e.loginCode;
    r.userLogin(a, o, i).then(function(e) {
        u.uid = e.id, t(e);
    }, n);
}), e.default.shareInterceptor = function(r) {
    return r.path = (0, t.urlParser)(">index", {
        redirect: encodeURIComponent(r.path),
        referrer: e.default.store.userData.id,
        ssid: n
    }).url, r;
}, e.default.uiTop._define.titleStyle = "center", e.default.uiNav._define.iconCustom = !0, 
e.default.uiLogin.showAppVersion = !0, e.default.uiStatus.error.showAppVersion = !0, 
Object.assign(e.default.actionMethods, {
    openOrganizationLocation: function() {
        var e = o.organization, t = e.name, r = e.latitude, i = e.longitude;
        wx.openLocation({
            name: t,
            latitude: r,
            longitude: i
        });
    },
    callOrganizationTel: function() {
        var e = o.organization.tel;
        e && wx.makePhoneCall({
            phoneNumber: e
        });
    },
    toggleServiceStore: function(t, r) {
        if (t == n) return e.default.textToast("你已处于此门店");
        wx.showModal({
            title: "切换服务门店",
            content: "确定切换到此门店？",
            cancelText: "点错了",
            success: function(i) {
                i.confirm && (u.ssid = n = t, e.default.smartTo({
                    method: "reLaunch",
                    url: ">index",
                    options: {
                        redirect: r ? void 0 : encodeURIComponent(e.default.getCurrentPageUrl(null, !0)),
                        retry: !0
                    }
                }));
            }
        });
    }
}), App({
    Macaw: e.default,
    version: "4.19.0",
    siteInfo: a,
    sysConfig: o,
    getConfig: function(t) {
        var i = this;
        return t && (this._getConfigPromise = null), this._getConfigPromise || (this._getConfigPromise = r.getAppConfig().then(function(t) {
            Object.assign(o, t);
            var r = t.nav, n = t.serviceStore;
            return i.setServiceStore(n), r.enabled && (e.default.navItems = r.items).forEach(function(t) {
                t.action.match(/^@/) && e.default.navPages.push(t.action);
            }), e.default.uiTop._define.title = t.appName, e.default.uiCopyright = t.copyright, 
            o;
        }).catch(function(e) {
            throw "[获取配置失败]" + e;
        }));
    },
    setServiceStore: function(e) {
        n = e ? e.id : void 0, u.ssid = n, o.serviceStore = e, wx.setStorageSync("serviceStoreID", n);
    },
    userDataUpdate: function(t) {
        var i = Date.now();
        if (!(t && this._userDataUpdateTime && i - this._userDataUpdateTime < 6e5)) {
            this._userDataUpdateTime = i;
            var n = r.getUserData();
            return n.then(function(t) {
                e.default.setUserData(t);
            }, function(t) {
                e.default.textToast("[更新用户数据失败]" + t);
            }), n;
        }
    },
    getDistributorData: function(e) {
        return e && (this._getDistributorDataPromise = null), this._getDistributorDataPromise || (this._getDistributorDataPromise = r.getDistributorData());
    },
    onLaunch: function(t) {
        var r = t.path, a = t.query;
        return i = a.referrer, n = a.ssid, this.getConfig(), e.default.autoLogin(), this.pageRedirect({
            path: r,
            query: a,
            isEntryPage: !0
        });
    },
    onPageNotFound: function(e) {
        this.pageRedirect(e);
    },
    pageRedirect: function(r) {
        var i = r.path, n = r.query, a = r.isEntryPage;
        if (i) {
            i.match(/^(>|\^|\/|@)/) || (i = "/" + i);
            var o = Object.assign({}, n);
            if (a) {
                if ((0, t.matchUrl)(i, ">index")) return;
                delete o.scene, delete o.redirect, delete o.referrer, delete o.ssid, e.default.smartTo({
                    method: "reLaunch",
                    url: ">index",
                    options: {
                        redirect: encodeURIComponent((0, t.urlParser)(i, o).url),
                        referrer: n.referrer || n.scene,
                        ssid: n.ssid
                    }
                });
            } else e.default.smartTo({
                method: "reLaunch",
                url: i,
                options: o,
                failToDefaultPage: !0
            });
        }
    }
});

var s = wx.getUpdateManager();

s.onUpdateReady(function() {
    wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success: function(e) {
            e.confirm && s.applyUpdate();
        }
    });
});