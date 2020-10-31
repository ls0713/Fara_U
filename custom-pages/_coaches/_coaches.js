var t = require("../../macaw/create"), a = require("../../api/api");

getApp().Macaw;

(0, t.createEmulatePage)({
    allowShare: !0,
    uiPage: {
        disableScroll: !0,
        immersiveTop: !0
    },
    uiTop: {
        title: "",
        backgroundColorAlpha: 1
    },
    data: {
        filterClassGroup: [ {
            id: "all",
            label: "全部教练"
        }, {
            id: "private",
            label: "私人教练"
        } ],
        filterClass: "all"
    },
    lifetimes: {
        attached: function() {
            this.reLoad();
        }
    },
    methods: {
        onSmartToHere: function(t) {
            var a = t.options;
            this.setDataByOptions([ {
                filterClass: "type"
            } ], a);
        },
        reLoad: function() {
            var t = this;
            this.autoSetStatus("main", (0, a.getCoachesList)()).then(function(a) {
                t.setData({
                    list: a
                });
            });
        },
        tabTap: function(t) {
            var a = t.detail;
            this.setData({
                filterClass: a.id
            });
        },
        onResultSwiperChange: function(t) {
            var a = t.detail;
            "touch" === a.source && this.setData({
                filterClass: a.currentItemId
            });
        }
    }
});