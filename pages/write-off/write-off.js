function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = function() {
    function t(t, a) {
        var e = [], r = !0, s = !1, i = void 0;
        try {
            for (var n, o = t[Symbol.iterator](); !(r = (n = o.next()).done) && (e.push(n.value), 
            !a || e.length !== a); r = !0) ;
        } catch (t) {
            s = !0, i = t;
        } finally {
            try {
                !r && o.return && o.return();
            } finally {
                if (s) throw i;
            }
        }
        return e;
    }
    return function(a, e) {
        if (Array.isArray(a)) return a;
        if (Symbol.iterator in Object(a)) return t(a, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = require("../../macaw/create"), r = require("../../api/api"), s = getApp(), i = s.Macaw, n = {
    flicker: !1,
    text: "请扫描用户签到二维码"
};

(0, e.createPage)({
    uiPage: {
        disableScroll: !0
    },
    uiTop: {
        title: "扫码核销",
        backgroundColorAlpha: 0,
        adaptiveFrontColor: !0
    },
    data: {
        tasksList: [],
        output: n
    },
    onLoad: function() {
        wx.setInnerAudioOption({
            mixWithOther: !0,
            obeyMuteSwitch: !0
        });
        var t = wx.createInnerAudioContext();
        t.autoplay = !1, t.src = "/resources/scan-success.mp3", this.successAudio = t;
    },
    onLogged: function(t, a) {
        var e = this;
        a(function(t) {
            e.setData({
                userData: t
            });
        }, !0);
    },
    onShow: function() {
        this._showAgain && this.checkAuth();
    },
    checkAuth: function() {
        var t = this;
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.camera"] && t.setData({
                    error: !1
                });
            }
        });
    },
    onError: function() {
        this.setData({
            error: !0
        });
    },
    onScanCode: function(t) {
        var a = t.detail;
        this.scanCodeHandle(a);
    },
    wxScan: function() {
        var t = this;
        wx.scanCode({
            onlyFromCamera: !0,
            scanType: [ "qrCode" ],
            success: function(a) {
                return t.scanCodeHandle(a, !0);
            },
            fail: function(t) {
                var a = t.errMsg;
                return i.textToast("[调用微信扫一扫失败]" + a, !0);
            }
        });
    },
    scanCodeHandle: function(t, e) {
        var r = RegExp("^#" + s.sysConfig.appID + "#((sc|coach)#(.+?)#(.*?))#$").exec(t.result);
        if (r) {
            var i = a(r, 5), n = (i[0], i[1]), o = i[2], u = i[3], c = i[4];
            this.addTask({
                raw: n,
                type: o,
                id: u,
                left: c
            }, e);
        } else this.output("无效的二维码", !0);
    },
    addTask: function(a, e) {
        var r = this, s = this.data.tasksList, i = s.findIndex(function(t) {
            return t.raw === a.raw;
        }), n = s[i], o = a.typeStr = {
            sc: "团课",
            coach: "私教"
        }[a.type];
        this.groupSetData(function() {
            if (r._lastOutputRaw = a.raw, r.output(o + " [" + a.id + "] 处理中", !1), n) n.success ? r.output(a.typeStr + "[" + a.id + "]已处理", !0) : n.fail && r.taskHandle(i, !0); else {
                var u;
                e || r.successAudio.play();
                var c = s.length;
                r.setData((u = {}, t(u, "tasksList[" + c + "]", a), t(u, "scrollTop", 0), u)), r.taskHandle(c);
            }
        });
    },
    taskHandle: function(a, e) {
        var s = this;
        this._tasksPromise || (this._tasksPromise = {});
        var i = this.data.tasksList[a], o = "tasksList[" + a + "]";
        !e && this._tasksPromise[a] || (this.setData(t({}, o + ".fail", !1)), this._tasksPromise[a] = (0, 
        r.orderWriteOff)(i).then(function(a) {
            var e, r = (e = {}, t(e, o + ".success", !0), t(e, o + ".info", a), e);
            s._lastOutputRaw === i.raw && (r.output = n), s.setData(r);
        }, function(a) {
            var e, r = (e = {}, t(e, o + ".fail", !0), t(e, o + ".error", a.toString()), e);
            s._lastOutputRaw === i.raw && (r.output = n), s.setData(r);
        }));
    },
    onTaskRetryTap: function(t) {
        var a = t.currentTarget.dataset.index;
        this.taskHandle(a, !0);
    },
    output: function() {
        var t = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        clearTimeout(this._outputTimeout), this.setData({
            output: {
                text: a,
                flicker: e
            }
        }), this._outputTimeout = setTimeout(function() {
            t.setData({
                output: n
            });
        }, 2e3);
    }
});