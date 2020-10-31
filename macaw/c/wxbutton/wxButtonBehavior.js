module.exports = Behavior({
    properties: {
        needReport: Boolean,
        openType: String,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        appParameter: String,
        showMessageCard: String,
        lang: String
    },
    methods: {
        onWxButtonEvent: function(e) {
            var t = e.detail, n = t.eventName, r = t.event, s = r.detail;
            s._oriEvent = r, this.triggerEvent(n, s);
        }
    }
});