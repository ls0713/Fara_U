var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../macaw/c/behavior")), t = getApp(), a = t.Macaw;

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        mode: {
            type: String,
            value: ""
        },
        items: {
            type: Array,
            value: []
        }
    },
    lifetimes: {
        attached: function() {
            this.setData({
                iosDisabled: "ios" === a.systemInfo.platform && !t.sysConfig.iosVirtualSell
            });
        }
    }
});