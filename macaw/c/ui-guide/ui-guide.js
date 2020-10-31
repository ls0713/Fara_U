var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../behavior")), t = (getApp(), {
    column: 4,
    items: []
});

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        config: {
            type: Object,
            observer: "configUpdate"
        }
    },
    data: {
        useConfig: {}
    },
    methods: {
        configUpdate: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.useConfig, o = Object.assign({}, t, e);
            this.setData({
                useConfig: o
            });
        }
    }
});