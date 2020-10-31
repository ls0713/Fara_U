function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("events")), r = e(require("color"));

exports.default = {
    EventEmitter: t.default,
    Color: r.default
};