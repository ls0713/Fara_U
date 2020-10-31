(0, require("../../macaw/create").createCustomPage)({
    allowShare: !1,
    data: {
        pageType: "main",
        uiTop: {
            hiddenBackBtn: !0
        }
    },
    onDoubleTapTab: function() {
        this.currentPage && this.currentPage.onDoubleTapTab();
    }
});