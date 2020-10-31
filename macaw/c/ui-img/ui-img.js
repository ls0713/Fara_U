var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../index"));

Component({
    properties: {
        src: {
            type: String,
            observer: "update"
        },
        mode: String,
        lazyLoad: Boolean,
        emptyConfig: {
            type: Object
        },
        errorConfig: {
            type: Object
        }
    },
    data: {
        isError: !1,
        useConfig: {}
    },
    lifetimes: {
        attached: function() {
            this.update(this.data.src);
        }
    },
    methods: {
        update: function(r) {
            if (!r) return this.setError(this.data.emptyConfig || t.default.uiImg.empty);
            this.setData({
                isError: !1
            });
        },
        onError: function() {
            this.setError(this.data.errorConfig || t.default.uiImg.error);
        },
        setError: function(t) {
            this.setData({
                isError: !0,
                useConfig: t
            });
        }
    }
});