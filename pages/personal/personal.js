function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
}, n = require("../../macaw/create"), i = require("../../api/api"), a = getApp(), r = a.Macaw, u = {
    name: "姓名",
    phone: "手机号",
    gender: "性别",
    age: "年龄",
    height: "身高",
    weight: "体重",
    waistline: "腰围",
    bust: "胸围",
    thigh: "腿围",
    idNumber: "身份证号",
    idImgSrc: "身份证",
    photoSrc: "照片"
}, o = [ {
    id: "name",
    type: "input",
    inputType: "text"
}, {
    id: "phone",
    type: "input",
    inputType: "number"
}, {
    id: "gender",
    type: "input",
    inputType: "number",
    tap: "setGender",
    valueMap: [ "", "男", "女" ],
    next: !0,
    inputHidden: !0
}, {
    id: "age",
    type: "input",
    inputType: "number"
}, {
    id: "height",
    type: "input",
    inputType: "number",
    unit: "CM"
}, {
    id: "weight",
    type: "input",
    inputType: "number",
    unit: "KG"
}, {
    id: "waistline",
    type: "input",
    inputType: "number",
    unit: "CM"
}, {
    id: "bust",
    type: "input",
    inputType: "number",
    unit: "CM"
}, {
    id: "thigh",
    type: "input",
    inputType: "number",
    unit: "CM"
}, {
    id: "idNumber",
    type: "input",
    inputType: "idcard"
}, {
    id: "idImgSrc",
    type: "image",
    valueAlign: "right",
    tap: "onImageTap",
    hover: !0
}, {
    id: "photoSrc",
    type: "image",
    valueAlign: "right",
    tap: "onImageTap",
    hover: !0
} ];

(0, n.createPage)({
    allowShare: !1,
    uiTop: {
        title: "个人信息"
    },
    data: {
        labelMap: u,
        formItems: o,
        newImage: {}
    },
    onLogged: function(e) {
        this.setData({
            userData: e
        }), this.reLoad();
    },
    reLoad: function() {
        var e = this;
        this.autoSetStatus("main", (0, i.getUserPersonalInfo)()).then(function(n) {
            var i = n.personal, a = n.config;
            e.oriData = i, e.setData(t({
                set: Object.assign({}, i)
            }, a));
        });
    },
    setGender: function() {
        var e = this;
        wx.showActionSheet({
            itemList: [ "男", "女" ],
            success: function(t) {
                e.setData({
                    "set.gender": t.tapIndex + 1
                });
            }
        });
    },
    onImageTap: function(e) {
        var t = e.currentTarget.dataset.id;
        this.changeImage(t);
    },
    changeImage: function(t) {
        var n = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(i) {
                n.setData(e({}, "newImage." + t, i.tempFilePaths[0]));
            }
        });
    },
    onSubmit: function(e) {
        function t() {
            var e = this;
            if (0 === Object.keys(g).length) return r.textToast("信息未作改动");
            wx.showLoading({
                title: "正在保存",
                mask: !0
            }), (0, i.saveUserPersonalInfo)(g).then(function(t) {
                wx.hideLoading(), r.successToast("保存成功"), e.oriData = t, e.setData({
                    newImage: {},
                    set: Object.assign({}, t)
                }), a.userDataUpdate();
            }, function(e) {
                r.textToast("[保存失败] " + e);
            });
        }
        var n = e.detail, o = this.data, s = o.newImage, p = o.required, c = this.oriData, h = n.value, g = {}, d = !0, m = !1, l = void 0;
        try {
            for (var y, f = Object.keys(h)[Symbol.iterator](); !(d = (y = f.next()).done); d = !0) {
                var b = y.value, v = h[b];
                if (p[b] && !v) return r.textToast(u[b] + "不能为空");
                v != c[b] && (g[b] = v);
            }
        } catch (e) {
            m = !0, l = e;
        } finally {
            try {
                !d && f.return && f.return();
            } finally {
                if (m) throw l;
            }
        }
        var w = [];
        Object.keys(s).forEach(function(e) {
            var t = s[e];
            w.push((0, i.uploadFile)(t).then(function(t) {
                g[e] = t;
            }));
        }), w.length ? (wx.showLoading({
            title: "正在上传图片",
            mask: !0
        }), Promise.all(w).then(t, function(e) {
            r.textToast("[上传失败] " + e);
        })) : t();
    }
});