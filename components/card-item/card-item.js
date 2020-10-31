var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../macaw/c/behavior"));

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        item: {
            type: Object
        }
    },
    methods: {}
});