function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("./lib/renderer")), a = t(require("./lib/f2")), i = getApp().Macaw;

a.default.Util.addEventListener = function(t, e, a) {
    a && t.addListener(e, a);
}, a.default.Util.removeEventListener = function(t, e, a) {
    a && t.removeListener(e, a);
}, a.default.Util.createEvent = function(t, e) {
    var a = t.type, i = 0, s = 0, n = t.touches;
    return n && n.length > 0 && (i = n[0].x, s = n[0].y), {
        type: a,
        chart: e,
        x: i,
        y: s
    };
}, Component({
    properties: {
        canvasId: {
            type: String,
            value: "f2-canvas"
        },
        opts: {
            type: Object
        },
        useImage: Boolean
    },
    observers: {
        "opts.creator": function(t) {
            t instanceof Function && this.reCreate();
        }
    },
    data: {
        image: ""
    },
    lifetimes: {
        ready: function() {
            this.wxmlReady();
        },
        detached: function() {
            this._commonStylesUpdate && i.event.off("commonStylesUpdate", this._commonStylesUpdate);
        }
    },
    methods: {
        wxmlReady: function() {
            this._wxmlReady = !0, this._waitCreate && (this._waitCreate = !1, this.reCreate());
        },
        reCreate: function() {
            var t = this;
            if (this.setData({
                image: ""
            }), this._wxmlReady) {
                var a = void 0;
                if (this._canvas) a = this._canvas; else {
                    var i = wx.createCanvasContext(this.data.canvasId, this);
                    a = this._canvas = new e.default(i);
                }
                var s = this.data.opts;
                wx.createSelectorQuery().in(this).select(".f2-canvas").fields({
                    size: !0,
                    computedStyle: [ "color", "fill" ]
                }, function(e) {
                    t.chart && t.chart.destroy(), t.chart = s.creator(a, e), t.data.useImage && t.toImage(e), 
                    t.registerListener();
                }).exec();
            } else this._waitCreate = !0;
        },
        registerListener: function() {
            var t = this;
            this._commonStylesUpdate || i.event.on("commonStylesUpdate", this._commonStylesUpdate = function() {
                setTimeout(function() {
                    t.reCreate();
                }, 100);
            });
        },
        toImage: function(t) {
            var e = this;
            clearTimeout(this._toImageTask), this._toImageTask = setTimeout(function() {
                wx.canvasToTempFilePath({
                    canvasId: e.data.canvasId,
                    success: function(a) {
                        var i = a.tempFilePath;
                        e.setData({
                            image: i,
                            width: t.width,
                            height: t.height
                        });
                    }
                }, e);
            }, 100);
        },
        touchStart: function(t) {
            this.canvas && this.canvas.emit("touchstart", [ t ]);
        },
        touchMove: function(t) {
            this.canvas && this.canvas.emit("touchmove", [ t ]);
        },
        touchEnd: function(t) {
            this.canvas && this.canvas.emit("touchend", [ t ]);
        },
        press: function(t) {
            this.canvas && this.canvas.emit("press", [ t ]);
        }
    }
});