var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../index"));

module.exports = {
    data: {
        commonStyles: t.default.commonStyles
    },
    onBeforeLoad: function() {
        var e = this;
        wx.nextTick(function() {
            e.setData({
                commonStyles: t.default.commonStyles
            });
        }), t.default.event.on("commonStylesUpdate", this._commonStylesUpdate = function(t) {
            e.setData({
                commonStyles: t
            });
        });
    },
    onUnload: function() {
        t.default.event.off("commonStylesUpdate", this._commonStylesUpdate);
    }
};