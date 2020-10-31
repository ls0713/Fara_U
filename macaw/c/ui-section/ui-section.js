var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../behavior"));

Component({
    behaviors: [ e.default ],
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
        description: {
            type: String
        }
    }
});