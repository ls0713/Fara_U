var t = require("../../macaw/create"), a = getApp();

a.Macaw;

(0, t.createPage)({
    uiTop: {
        title: "分销中心"
    },
    onLogged: function(t, a) {
        var e = this;
        a(function(t) {
            e.setData({
                userData: t
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var t = this;
        this.autoSetStatus("main", a.getDistributorData(!0)).then(function(a) {
            t.setData({
                distributor: a
            });
        });
    }
});