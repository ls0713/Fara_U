function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../behavior")), n = e(require("../wxbutton/wxButtonBehavior"));

Component({
    behaviors: [ n.default, t.default ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        icon: {
            type: String
        },
        iconColor: {
            type: String
        },
        label: {
            type: String
        },
        value: {
            type: String
        },
        valueAlign: {
            type: String
        },
        action: {
            type: String
        },
        actionValue: {
            type: null
        },
        nextIcon: {
            type: String,
            value: "ui-next"
        },
        next: Boolean,
        hover: Boolean,
        disableTap: Boolean
    }
});