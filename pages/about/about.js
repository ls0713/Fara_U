var a = require("../../macaw/create"), e = getApp(), t = e.Macaw;

(0, a.createPage)({
	allowShare: !0,
	uiTop: {
			title: "关于我们",
			filter: "ios" === t.systemInfo.platform ? "blur(2rpx)" : ""
	},
	methods: {
		callPhone() {
			console.log('1111111')
			wx.makePhoneCall({
				phoneNumber: '022-88347566'
			})
		}
	}
});