Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getItems = function() {
    return r;
}, exports.getItemByVcID = function(e) {
    return r.find(function(t) {
        return t.vcID == e;
    });
}, exports.updateItem = function(n, o, i, c) {
    if (i || c) {
        var a = r.findIndex(function(e) {
            return e.vcID == n.id;
        }), l = r[a], v = n.videos[o];
        if (v) {
            var p = {
                vcID: n.id,
                vcTitle: n.title,
                vcCover: n.cover,
                vcIntro: n.intro,
                playID: v.id,
                playTitle: v.title,
                playCover: v.cover,
                playSpeaker: v.speaker,
                playTime: i,
                playDone: c
            };
            l && r.splice(a, 1), r.unshift(p), r.length > t && (r.length = t), wx.setStorageSync(e, r);
        }
    }
}, exports.clear = function() {
    r.length = 0, wx.removeStorageSync(e);
};

var e = "vcHistoryItems", t = 10, r = wx.getStorageSync(e) || [];