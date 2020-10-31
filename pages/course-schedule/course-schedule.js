function t(t) {
    return [ "日", "一", "二", "三", "四", "五", "六" ][t];
}

function a(a) {
    var e = {};
    return a.forEach(function(a) {
        var r = new Date(a.start), i = r.setHours(0, 0, 0, 0), n = r.getDay();
        (e[i] || (e[i] = {
            time: i,
            dayWord: t(n),
            items: []
        })).items.push(a);
    }), Object.keys(e).sort().map(function(t) {
        return e[t];
    });
}

var e = require("../../macaw/create"), r = require("../../api/api");

getApp().Macaw;

(0, e.createPage)({
    allowShare: !0,
    uiTop: {
        title: "课程排期"
    },
    data: {
        _status: {
            main: {
                empty: {
                    text: "此课程暂无排期",
                    btn: "返回",
                    action: ":navigateBack"
                }
            }
        }
    },
    onLogged: function(t, a) {
        var e = this;
        a(function(t) {
            e.setData({
                userData: t
            });
        }, !0), this.reLoad();
    },
    reLoad: function() {
        var t = this, e = this.options.id;
        this.autoSetStatus("main", (0, r.getCoursesScheduleByCourseID)(e)).then(function(e) {
            var r = a(e);
            t.setData({
                group: r
            });
        });
    }
});