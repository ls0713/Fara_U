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
    properties: {
        use: {
            type: String,
            observer: "update"
        },
        title: String
    },
    methods: {
        update: function(e) {
            var o = t.sysConfig[e];
            o && this.setData({
                nodes: o
            });
        },
        show: function() {
            this.selectComponent("#trems-popup").show();
        },
        hide: function() {
            this.selectComponent("#trems-popup").hide();
        }
    }
});