function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../behavior")), i = e(require("../../index")), o = getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0,
        multipleSlots: !0
    },
    properties: {
        passive: Boolean,
        config: {
            type: Object,
            observer: "updateConfig"
        }
    },
    data: {
        version: o.version,
        useConfig: i.default.uiLogin,
        isAuth: !1,
        isLogged: !1,
        isError: !1,
        loginMsg: "",
        errDetail: "",
        popupShow: !1
    },
    lifetimes: {
        attached: function() {
            var e = this;
            i.default.event.on("loginPending", this._loginPending = function(t) {
                e.promiseUpdate(t);
            }), i.default.store.isLogged ? this.promiseUpdate(Promise.resolve(i.default.store.userData)) : i.default._loginPromise ? this.promiseUpdate(i.default._loginPromise) : this.loginBegin();
        },
        detached: function() {
            i.default.event.off("loginPending", this._loginPending);
        }
    },
    methods: {
        promiseUpdate: function(e) {
            var t = this;
            this._promise !== e && (this._promise = e, this.setData({
                loginMsg: "正在登录……"
            }), e.then(function(e) {
                t.setData({
                    isLogged: !0,
                    isError: !1,
                    popupShow: !1
                }), t._popupCallBack && t._popupCallBack(e), t.triggerEvent("logged", e);
            }, function(e) {
                t.error(e);
            }));
        },
        updateConfig: function(e) {
            this.setData({
                useConfig: Object.assign({}, i.default.uiLogin, e)
            });
        },
        retry: function() {
            this.setData({
                isError: !1,
                loginMsg: "正在重试……"
            }), this.loginBegin();
        },
        loginBegin: function() {
            var e = this;
            this.setData({
                loginMsg: "正在检查授权状态……"
            }), i.default.getLoginCode(!0).then(function(t) {
                var o = t.code;
                e._loginCode = o, wx.getSetting({
                    success: function(t) {
                        var n = !!t.authSetting["scope.userInfo"];
                        e.setData({
                            isAuth: n,
                            loginMsg: n ? "正在登录……" : ""
                        }), n ? wx.getUserInfo({
                            success: function(t) {
                                var n = t.userInfo;
                                return e.promiseUpdate(i.default.loginHandle(n, o));
                            },
                            fail: e.error
                        }) : wx.canIUse("button.open-type.getUserInfo") || e.setData({
                            loginMsg: "你的微信版本过低，请升级"
                        });
                    },
                    fail: e.error
                });
            }, this.error);
        },
        getUserInfo: function(e) {
            var t = e.detail, o = t.errMsg, n = t.userInfo;
            "getUserInfo:ok" === o && this.promiseUpdate(i.default.loginHandle(n, this._loginCode));
        },
        error: function(e) {
            var t = "";
            e instanceof Object && (e = e.errMsg || JSON.stringify(e)), (e = String(e)).length > 100 && (t = e, 
            e = e.substring(0, 100) + "..."), this.setData({
                isError: !0,
                loginMsg: "登录失败：" + e,
                errDetail: t
            }), this.triggerEvent("error", t);
        },
        backgroundTap: function() {
            this.data.loginMsg && !this.data.isError || this.popupHide();
        },
        popupShow: function(e) {
            this.setData({
                popupShow: !0
            }), this._popupCallBack = e;
        },
        popupHide: function() {
            this.setData({
                popupShow: !1
            }), this._popupCallBack = null;
        }
    }
});