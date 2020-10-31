var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../macaw/c/behavior")), o = getApp().Macaw.lib.Color;

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        sysclass: {
            type: Object,
            observer: "update"
        }
    },
    data: {
        frontColor: ""
    },
    methods: {
        update: function(e) {
            if (e instanceof Object) {
                var t = e.bgColor;
                t && this.setData({
                    frontColor: new o(t).isDark() ? "#ffffff" : "#000000"
                });
            }
        }
    }
});