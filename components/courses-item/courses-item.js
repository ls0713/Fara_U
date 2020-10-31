var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../macaw/c/behavior")), e = getApp().Macaw, a = void 0;

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        item: {
            type: Object
        }
    },
    data: {
        playing: !1
    },
    methods: {
        stopVideo: function() {
            this.setData({
                playing: !1
            });
        },
        onVideoPlayTap: function(t) {
            t.currentTarget;
            a && a.stopVideo(), this.setData({
                playing: !0
            }), a = this;
        },
        onVideoError: function(t) {
            var a = t.detail;
            this.stopVideo(), e.textToast(a.errMsg);
        }
    }
});