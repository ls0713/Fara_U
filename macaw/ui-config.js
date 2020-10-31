function e(e, o) {
    var t = "", r = o instanceof Object, a = "string" == typeof o ? o : "", n = r ? o : e, s = !0, c = !1, l = void 0;
    try {
        for (var u, p = Object.keys(n)[Symbol.iterator](); !(s = (u = p.next()).done); s = !0) {
            var g = u.value;
            if ("cssVars" !== g) {
                var d = r ? n[g] : g, b = e[g];
                (b || 0 === b) && (r || (d = (0, i.camelCaseToDash)(d), "number" == typeof b && (b += a)), 
                t += "--" + d + ":" + b + ";");
            }
        }
    } catch (e) {
        c = !0, l = e;
    } finally {
        try {
            !s && p.return && p.return();
        } finally {
            if (c) throw l;
        }
    }
    return t;
}

function o(o, t) {
    t && Object.defineProperty(o, "cssVars", {
        value: e(o, t),
        configurable: !0,
        enumerable: !0
    });
}

function t(e, t, a) {
    var n = (0, i.createObserveObject)(t, (0, i.debounce)(function(t) {
        o(t, a), r.default.emit(e, t);
    }, 20));
    return o(n, a), n;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uiCopyright = exports.uiPagerStatus = exports.uiStatus = exports.uiLogin = exports.uiImg = exports.shortcutMenu = exports.uiNav = exports.uiTop = exports.uiPage = exports.commonStyles = exports.uiSizeData = void 0;

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./event")), i = require("./lib/utils");

exports.uiSizeData = t("uiSizeDataUpdate", (0, i.getUISizeData)(), "px"), exports.commonStyles = t("commonStylesUpdate", {
    themeColor: "#333",
    themeColorFront: "#fff",
    secondaryColor: "#555",
    secondaryColorFront: "#fff",
    activeColor: "#333",
    activeColorFront: "#fff",
    priceColor: "#a32b2a",
    iconDecolor: !1,
    textDecolor: !1
}, !0), exports.uiPage = t("uiPageUpdate", {
    mode: "light",
    backgroundImage: "",
    backgroundColor: "#f6f6f6",
    sectionBackground: "",
    blockBlurRatio: "",
    immersiveTop: !1,
    disableTop: !1,
    hiddenTop: !1,
    disableScroll: !1
}, {
    backgroundColor: "page-background-color",
    sectionBackground: "section-bg",
    blockBlurRatio: "block-blur-ratio"
}), exports.uiTop = t("uiTopUpdate", {
    title: "",
    titleStyle: "left",
    titleAlpha: 1,
    showBackHome: !1,
    hiddenBackBtn: !1,
    backgroundColor: "#fff",
    backgroundColorAlpha: 1,
    frontColor: "#333",
    filter: "",
    transitionDuration: "0.2s",
    adaptiveFrontColor: !1
}), exports.uiNav = t("uiNavUpdate", {
    backgroundColor: "#fff",
    iconCustom: !1,
    iconColor: "#666",
    textColor: "#666",
    activeIconColor: "#333",
    activeTextColor: "#333",
    filter: ""
}), exports.shortcutMenu = t("shortcutMenuUpdate", {
    enabled: !0,
    items: [ {
        label: "主题-海蓝",
        action: ':toggleStyle("blue")',
        icon: "shortcut-skin"
    }, {
        label: "主题-纯净",
        action: ':toggleStyle("pure")',
        icon: "shortcut-skin"
    }, {
        label: "主题-暗黑",
        action: ':toggleStyle("night")',
        icon: "shortcut-skin"
    }, {
        label: "主题-幽冥",
        action: ':toggleStyle("ghost")',
        icon: "shortcut-skin"
    }, {
        label: "主题-典雅",
        action: ':toggleStyle("elegant")',
        icon: "shortcut-skin"
    }, {
        label: "主题-火红",
        action: ':toggleStyle("red")',
        icon: "shortcut-skin"
    } ]
}), exports.uiImg = {
    empty: {
        src: "/resources/images/image-empty.svg",
        mode: "aspectFit"
    },
    error: {
        src: "/resources/images/image-error.svg",
        mode: "aspectFit"
    }
}, exports.uiLogin = {
    desc: "需要你的授权以继续访问",
    btn: "授权登录",
    showAppVersion: !1
}, exports.uiStatus = {
    mode: "loading",
    empty: {
        icon: "ui-warn",
        text: "暂无数据",
        btn: "",
        action: ""
    },
    error: {
        icon: "ui-error",
        btn: "重试",
        action: "",
        showAppVersion: !1
    }
}, exports.uiPagerStatus = {
    mode: "idle",
    idle: {
        btn: "",
        action: ""
    },
    completed: {
        icon: "",
        text: "没有更多了",
        btn: "",
        action: ""
    },
    error: {
        icon: "ui-error",
        btn: "重试",
        action: ""
    }
}, exports.uiCopyright = {
    enabled: !0,
    image: "/resources/images/deepblue.png",
    owner: "深蓝网络",
    more: "提供技术支持",
    action: ""
};