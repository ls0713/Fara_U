var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../behavior"));

getApp();

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        src: {
            type: String
        },
        poster: {
            type: String,
            value: ""
        }
    }
});