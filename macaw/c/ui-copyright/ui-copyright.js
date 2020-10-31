function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../behavior")), i = e(require("../../index")), a = i.default.uiCopyright;

Component({
    behaviors: [ t.default ],
    data: {
        config: a
    },
    lifetimes: {
        attached: function() {
            this.setData({
                config: i.default.uiCopyright
            });
        }
    }
});