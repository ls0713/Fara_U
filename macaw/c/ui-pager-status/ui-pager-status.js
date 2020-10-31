function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../behavior")), a = t(require("../../index"));

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
        useStatus: a.default.uiPagerStatus
    },
    methods: {
        update: function(t) {
            var e = t ? t.mode || "" : "idle", u = {
                useStatus: null,
                mode: e
            };
            e && (u.useStatus = Object.assign({}, a.default.uiPagerStatus[e], t[e])), this.setData(u);
        },
        btnTap: function(t) {
            this.targetActionRun(t), this.triggerEvent(t.currentTarget.dataset.mode + "btntap");
        }
    }
});