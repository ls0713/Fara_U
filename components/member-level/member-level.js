var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../macaw/c/behavior")), t = getApp();

t.Macaw.lib.Color;

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        levelId: {
            type: String,
            observer: "update"
        }
    },
    data: {
        frontColor: "",
        level: {}
    },
    lifetimes: {
        attached: function() {
            var e = t.sysConfig.enabledMemberLevel;
            this.setData({
                enabledMemberLevel: e
            });
        }
    },
    methods: {
        update: function(e) {
            var a = t.sysConfig.memberLevel.find(function(t) {
                return t.id === e;
            }) || {};
            this.setData({
                level: a
            });
        }
    }
});