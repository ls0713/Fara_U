Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportFormID = function(e) {
    e && "the formId is a mock one" !== e && (o.add(e), t());
}, exports.reportUserBehavior = function(e, o) {
    (0, r.reportUserBehavior)(e, o), console.log("reportUserBehavior", e, o);
};

var e = require("../lib/utils"), r = require("../api/site"), o = new Set(), t = (0, 
e.debounce)(function() {
    (0, r.commitFormID)(Array.from(o)), o.clear();
}, 1e3);