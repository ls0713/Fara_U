var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../macaw/c/behavior")), t = getApp();

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    lifetimes: {
        attached: function() {
            var e = t.sysConfig.serviceStore;
            this.setData({
                store: e
            });
        }
    }
});