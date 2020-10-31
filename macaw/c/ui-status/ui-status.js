function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../behavior")), a = t(require("../../index")), s = getApp();

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0,
        multipleSlots: !0
    },
    properties: {
        status: {
            type: Object,
            observer: "update"
        }
    },
    data: {
        version: s.version,
        useStatus: {}
    },
    methods: {
        update: function(t) {
            var e = t ? t.mode || "" : "loading", s = {
                useStatus: null,
                mode: e
            };
            e && (s.useStatus = Object.assign({}, a.default.uiStatus[e], t[e])), this.setData(s);
        },
        btnTap: function(t) {
            this.targetActionRun(t), this.triggerEvent(t.currentTarget.dataset.mode + "btntap");
        }
    }
});