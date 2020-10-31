var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../macaw/c/behavior")), l = getApp(), t = l.Macaw;

Component({
    behaviors: [ e.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        allowed: {
            type: Object,
            observer: "update"
        }
    },
    methods: {
        update: function(e) {
            var a = l.sysConfig, d = a.enabledMemberLevel, i = a.memberLevel, s = a.paymentMethods, o = t.store.userData, n = [];
            d && e.mlAllowed && n.push({
                id: "memberLevel",
                label: "支持会员",
                items: i.map(function(l) {
                    return {
                        id: l.id,
                        name: l.name,
                        isAllowed: e.mlAllowed.includes(l.id),
                        isCurrent: !!o && l.id === o.level
                    };
                })
            }), e.pmAllowed && n.push({
                id: "paymentMethods",
                label: "支付方式",
                items: s.map(function(l) {
                    return {
                        id: l.id,
                        name: l.name,
                        isAllowed: e.pmAllowed.includes(l.id)
                    };
                })
            }), this.setData({
                groups: n
            });
        }
    }
});