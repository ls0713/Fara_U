function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../behavior")), r = e(require("../../lib/html2nodes"));

getApp();

Component({
    behaviors: [ t.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        nodes: {
            type: null,
            value: [],
            observer: "reCalc"
        },
        styles: {
            type: Object,
            value: {}
        }
    },
    data: {
        useNodes: []
    },
    methods: {
        reCalc: function(e) {
            Array.isArray(e) || (e = (0, r.default)(String(e), this.data.styles)), this._images = e.reduce(function(e, t) {
                return "image" === t.name && e.push(t.attrs.src), e;
            }, []), this.setData({
                useNodes: e
            });
        },
        previewImages: function(e) {
            var t = e.currentTarget;
            wx.previewImage({
                current: t.dataset.src,
                urls: this._images
            });
        }
    }
});