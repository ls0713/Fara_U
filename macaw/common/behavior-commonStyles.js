var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../index"));

module.exports = Behavior({
    data: {
        commonStyles: t.default.commonStyles
    },
    lifetimes: {
        attached: function() {
            var e = this;
            this.setData({
                commonStyles: t.default.commonStyles
            }), t.default.event.on("commonStylesUpdate", this._commonStylesUpdate = function(t) {
                e.setData({
                    commonStyles: t
                });
            });
        },
        detached: function() {
            t.default.event.off("commonStylesUpdate", this._commonStylesUpdate);
        }
    }
});