var e = require("../../macaw/create"), a = getApp(), t = a.Macaw;

(0, e.createPage)({
    uiTop: {
        title: "会员中心",
        backgroundColorAlpha: "original",
        filter: "ios" === t.systemInfo.platform ? "blur(6rpx)" : ""
    },
    data: {},
    onLogged: function(e, t) {
        var r = this;
        t(function(e) {
            r.setData({
                userData: e
            });
        }, !0);
        var i = a.sysConfig.enabledMemberLevel;
        this.setData({
            enabledMemberLevel: i
        }), a.userDataUpdate();
    }
});