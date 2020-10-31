var t = function() {
    function t(t, r) {
        var e = [], n = !0, o = !1, a = void 0;
        try {
            for (var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (e.push(i.value), 
            !r || e.length !== r); n = !0) ;
        } catch (t) {
            o = !0, a = t;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (o) throw a;
            }
        }
        return e;
    }
    return function(r, e) {
        if (Array.isArray(r)) return r;
        if (Symbol.iterator in Object(r)) return t(r, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), r = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../macaw/c/behavior"));

Component({
    behaviors: [ r.default ],
    options: {
        addGlobalClass: !0
    },
    properties: {
        store: {
            type: Object
        }
    },
    methods: {
        openLocation: function() {
            var r = this.data.store, e = r.name, n = r.address, o = t(r.location, 2), a = o[0], i = o[1];
            wx.openLocation({
                name: e,
                address: n,
                latitude: i,
                longitude: a
            });
        }
    }
});