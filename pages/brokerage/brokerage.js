var a = require("../../macaw/create"), t = require("../../api/api");

getApp().Macaw;

(0, a.createPage)({
    uiTop: {
        title: "分销佣金",
        backgroundColorAlpha: 1
    },
    onLogged: function(a, t) {
        var e = this;
        t(function(a) {
            e.setData({
                userData: a
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var a = this;
        this.autoSetStatus("main", (0, t.getBrokerageData)()).then(function(t) {
            a.setData(t);
        });
    }
});