var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../index"));

Component({
    data: {
        show: e.default.adapt.iPhoneX
    }
});