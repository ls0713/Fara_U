function e() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return [ "柔韧性", "心肺功能", "协调性", "肌肉耐力", "肌肉力量", "卡路里消耗" ].map(function(a, i) {
        return {
            name: a,
            value: e[i],
            remark: t[i]
        };
    });
}

function t(t, a) {
    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e(), n = o.commonStyles, l = n.themeColor, s = n.themeColorFront, c = a.width, u = a.height, h = a.color, d = a.fill, p = new r.default.Chart({
        el: t,
        width: c,
        height: u,
        appendPadding: 2
    });
    return p.animate(!1), p.source(i, {
        value: {
            min: 0,
            max: 5
        }
    }), p.coord("polar"), p.axis("value", {
        grid: {
            stroke: h,
            strokeOpacity: .3,
            lineDash: null
        },
        label: null,
        line: null
    }), p.axis("name", {
        grid: {
            lineDash: null,
            stroke: h,
            strokeOpacity: .2,
            fill: d,
            fillOpacity: 1
        },
        label: function(e, t, a) {
            var r = i[t].remark;
            return r && (e += "\n" + r), {
                text: e,
                fontSize: 12,
                fill: h
            };
        }
    }), p.area().position("name*value").style({
        fill: l,
        fillOpacity: .5
    }), p.line().position("name*value").style({
        stroke: l
    }), p.point().position("name*value").style({
        fill: s,
        stroke: l,
        lineWidth: 1
    }), p.render(), p;
}

var a = require("../../macaw/create"), i = require("../../api/api"), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../components/f2-canvas/lib/f2")), o = getApp().Macaw;

(0, a.createPage)({
    allowShare: !0,
    uiTop: {
        title: "",
        titleAlpha: 0
    },
    data: {
        playing: !1,
        difficultyFlags: [ {
            text: "未定义",
            color: "#ccc"
        }, {
            text: "简单",
            color: "#5cca61"
        }, {
            text: "中等",
            color: "#cabe5c"
        }, {
            text: "较难",
            color: "#ca8438"
        }, {
            text: "困难",
            color: "#ca3838"
        } ],
        radarOpts: {
            creator: t
        }
    },
    onLoad: function() {
        this.reLoad();
    },
    reLoad: function() {
        var e = this;
        this.autoSetStatus("main", (0, i.getCourseInfoByID)(this.options.id)).then(function(t) {
            e.setData({
                course: t
            }), e.uiTop.title = t.name, e.onWxmlReady();
        });
    },
    onWxmlReady: function() {
        var a = this;
        this._courseNameObserver && this._courseNameObserver.disconnect(), this._courseNameObserver = this.createIntersectionObserver({
            thresholds: [ .6 ]
        }).relativeToViewport({
            top: -o.uiSizeData.topHeight
        }).observe(".course-name", function(e) {
            var t = a._isTopShow = e.intersectionRatio < .6;
            a.uiTop.titleAlpha = t ? 1 : 0;
        });
        var i = this.data.course, r = i.radarValues, n = i.radarRemarks;
        this.setData({
            "radarOpts.creator": function(a, i) {
                return t(a, i, e(r, n));
            }
        });
    },
    stopVideo: function() {
        this.setData({
            playing: !1
        });
    },
    onVideoPlayTap: function(e) {
        e.currentTarget;
        this.setData({
            playing: !0
        });
    },
    onVideoError: function(e) {
        var t = e.detail;
        this.stopVideo(), o.textToast(t.errMsg);
    }
});