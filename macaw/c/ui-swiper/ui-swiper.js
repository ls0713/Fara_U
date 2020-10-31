function e(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var r, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../behavior"));

Component({
    behaviors: [ t.default ],
    properties: (r = {
        current: {
            type: Number,
            value: 0
        },
        autoplay: {
            type: Boolean,
            value: !1
        },
        interval: {
            type: Number,
            value: 5e3
        }
    }, e(r, "current", {
        type: Number,
        value: 0
    }), e(r, "duration", {
        type: Number,
        value: 500
    }), e(r, "easingFunction", {
        type: String,
        value: "default"
    }), e(r, "circular", {
        type: Boolean,
        value: !1
    }), e(r, "previousMargin", {
        type: String,
        value: "20rpx"
    }), e(r, "nextMargin", {
        type: String,
        value: "20rpx"
    }), e(r, "items", {
        type: Array,
        value: []
    }), r),
    data: {
        currentIndex: 0
    },
    methods: {
        onChange: function(e) {
            var r = e.detail;
            this.triggerEvent("change", r);
        }
    }
});