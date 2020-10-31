var t = require("../../common/methods");

Component({
    properties: {
        isShow: {
            type: Boolean,
            value: !1
        },
        tapMaskHide: {
            type: Boolean,
            value: !0
        },
        top: Boolean,
        bottom: Boolean,
        left: Boolean,
        right: Boolean
    },
    data: {
        isReady: !1,
        show: !1,
        contentWrapStyle: "",
        contentStyle: ""
    },
    lifetimes: {
        attached: function() {
            var t = this.data, a = t.contentWrapStyle, e = t.contentStyle, o = this.data, s = o.top, n = o.bottom, i = o.left, r = o.right;
            switch (!0) {
              case s:
                a += "width: 100%; left: 0; top:0; transform: translateY(-100%) translateZ(0);";
                break;

              case i:
                a += "left: 0; top:0; transform: translateX(-100%) translateZ(0);";
                break;

              case r:
                a += "right: 0; top:0; transform: translateX(100%) translateZ(0);";
                break;

              case n:
                a += "width: 100%; left: 0; bottom:0; transform: translateY(100%) translateZ(0);";
                break;

              default:
                a += "left: 50%; top: 50%; opacity:0;", e += "transform: translate3D(-50%,-50%,0);";
            }
            this.setData({
                contentWrapStyle: a,
                contentStyle: e,
                isReady: !0
            });
        },
        ready: function() {
            this.data.isShow && this.show();
        }
    },
    methods: {
        show: function() {
            this.setData({
                show: !0
            });
        },
        hide: function() {
            this.setData({
                show: !1
            });
        },
        toggle: function() {
            this.setData({
                show: !this.data.show
            });
        },
        tapMask: function() {
            this.data.tapMaskHide && this.hide(), this.triggerEvent("tapmask");
        },
        noopFunc: t.noopFunc
    }
});