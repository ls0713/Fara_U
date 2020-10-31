var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../behavior"));

Component({
    behaviors: [ e.default ]
});