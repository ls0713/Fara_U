var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./wxButtonBehavior"));

Component({
    options: {
        addGlobalClass: !0
    },
    behaviors: [ t.default ],
    methods: {
        buttonEventDispatch: function(t, e) {
            this.data.needReport ? this._formId ? (e.detail.formId = this._formId, this._formId = null, 
            this.triggerEvent("wxbuttonevent", {
                eventName: t,
                event: e
            })) : this._waitFromID = {
                eventName: t,
                event: e
            } : this.triggerEvent("wxbuttonevent", {
                eventName: t,
                event: e
            });
        },
        onSubmit: function(t) {
            var e = t.detail.formId;
            if (this._waitFromID) {
                var n = this._waitFromID, o = n.eventName, i = n.event;
                i.detail.formId = e, this.triggerEvent("wxbuttonevent", {
                    eventName: o,
                    event: i
                }), this._waitFromID = null;
            } else this._formId = e;
            this.triggerEvent("wxbuttonevent", {
                eventName: "report",
                selfEvent: t
            });
        },
        ongetuserinfo: function(t) {
            this.buttonEventDispatch("getuserinfo", t);
        },
        oncontact: function(t) {
            this.buttonEventDispatch("contact", t);
        },
        ongetphonenumber: function(t) {
            this.buttonEventDispatch("getphonenumber", t);
        },
        onerror: function(t) {
            this.buttonEventDispatch("error", t);
        },
        onopensetting: function(t) {
            this.buttonEventDispatch("opensetting", t);
        },
        onlaunchapp: function(t) {
            this.buttonEventDispatch("launchapp", t);
        }
    }
});