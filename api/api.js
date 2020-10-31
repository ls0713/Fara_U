function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

function r(e) {
    return {
        orderID: C(e.id),
        payParam: e.payParam
    };
}

function o(e) {
    return {
        id: C(e.id),
        title: D(e.title),
        subTitle: D(e.subtitle),
        image: D(e.thumb_url),
        time: w(e.addtime),
        content: D(e.detail),
        actionImage: D(e.out_thumb_url),
        action: D(e.out_link)
    };
}

function n(e) {
    var t = {
        score: "sc",
        video: "vc",
        coach: "coach"
    }[e.type], r = x(e.order_info), o = x(r.user), n = void 0, i = void 0, s = void 0;
    return "sc" === t ? n = f(0)(r) : "coach" === t ? i = y(x(r.coach)) : "vc" === t && (s = a(r.video_course)), 
    {
        id: C(e.id),
        orderID: C(e.id_order),
        orderSN: D(e.sn),
        orderStatus: C(e.status),
        createTime: w(e.create_time),
        type: t,
        sc: n,
        coach: i,
        vc: s,
        totalPrice: P(e.money_format),
        brokerageIncr: P(e.money_brokerage),
        consumer: {
            avatar: D(o.avatar),
            nickName: D(o.nickname),
            realName: D(o.real_name),
            phone: D(o.tel)
        }
    };
}

function a(e) {
    return {
        id: C(e.id),
        title: D(e.name),
        intro: D(e.intro),
        cover: D(e.cover_format),
        price: P(e.price_format),
        details: D(e.details),
        typeID: C(e.category),
        sold: L(e.buy_count),
        purchased: I(e.isBuy),
        favorited: I(e.isCollect),
        videos: S(e.video, function(e) {
            return {
                id: C(e.id),
                cover: D(e.cover_format),
                title: D(e.title),
                speaker: D(e.speaker),
                freeSec: L(e.free_time),
                src: D(e.video_format)
            };
        })
    };
}

function i(e, t, r) {
    return function(o) {
        var n = L(o.enough), a = 1 == o.backtype, i = a ? L(o.discount) : P(o.backmoney_format), s = a ? (0 === n ? "" : "满" + n) + "以原价的" + 10 * i + "%支付" : (0 === n ? "立" : "满" + n) + "减" + i + "元", u = D(o.title), c = e ? o.use_end_time : 0 == o.timelimit ? "0" === D(o.timedays1) ? "无使用期限制" : "获得后" + o.timedays1 + "天内有效" : o.timestart + " - " + o.timeend, d = {
            id: C(o.id),
            isDiscount: a,
            flag: u,
            title: s,
            faceValue: i,
            faceUnit: a ? "折" : "元",
            minConsumption: n,
            multiplication: a ? i / 10 : 1,
            addition: a ? 0 : -i,
            detail: D(o.intro),
            deadline: c,
            fullName: "[" + u + "] " + s,
            over: L(o.total),
            received: I(o.isreceive),
            available: I(o.usable)
        };
        return t ? (d.available || (d.failed = "未生效"), t < d.minConsumption && (d.failed = "条件不符")) : 1 == r && (d.failed = d.available ? "已使用" : "已过期"), 
        d;
    };
}

function s(e) {
    return {
        coach: y(e.coach),
        items: S(e.items, function(e) {
            var t = L(e.num), r = L(e.left_times);
            return {
                id: C(e.id),
                orderID: C(e.order_id),
                isChecked: I(e.status_signin),
                total: t,
                left: r
            };
        })
    };
}

function u(e) {
    return {
        id: C(e.id),
        canCheckIn: I(e.signin_ok),
        isChecked: I(e.status_signin),
        orderID: C(e.order_id),
        sc: {
            id: C(e.course_plan_id),
            start: w(e.start),
            end: w(e.end)
        },
        course: {
            name: D(e.course),
            image: D(e.show_image_format)
        },
        coach: {
            id: C(e.coach_id),
            name: D(e.coach_name),
            avatar: D(e.avatar_format)
        },
        store: {
            id: C(e.store_id),
            name: D(e.store_name)
        }
    };
}

function c(e) {
    return function(t) {
        var r = [ "sc", "", "", "coach", "vc" ][t.type], o = void 0, n = void 0, s = void 0, u = void 0, c = void 0, d = void 0, m = x(t.order_info_format), p = x(m.pay_way), l = x(m.post), g = m.coupon ? i(!0)(m.coupon) : null, _ = P(m.discount_money_format), h = x(t.one_log), v = "balance" == p.way, b = P(h.money), I = P(h.money_wechat);
        if ("sc" === r) d = P((o = f(e)(m)).price); else if ("coach" === r) {
            n = y(x(m.coach));
            var S = x(m.pcb_money);
            u = L(S.number), c = P(S.price), d = P(S.total_price);
        } else "vc" === r && (d = (s = a(m.video_course)).price);
        return {
            id: C(t.id),
            orderSN: D(t.sn),
            createTime: w(t.create_time),
            status: C(t.status),
            type: r,
            sc: o,
            coach: n,
            vc: s,
            coupon: g,
            offer: _,
            buyNumber: u,
            unitPrice: c,
            totalPrice: d,
            useMoney: v,
            payPrice: b,
            payPriceWx: I,
            payMethod: C(p.name),
            formData: {
                name: D(l.user),
                phone: D(l.tel)
            }
        };
    };
}

function d(e) {
    return {
        name: D(e.real_name),
        phone: D(e.tel),
        gender: L(e.gender, ""),
        age: L(e.age, ""),
        height: L(e.height, ""),
        weight: L(e.weight, ""),
        waistline: L(e.waistline, ""),
        bust: L(e.bust, ""),
        thigh: L(e.thigh, ""),
        idNumber: D(e.id_no),
        idImgSrc: D(e.id_card_image_format),
        photoSrc: D(e.image_format)
    };
}

function m(e) {
    return {
        id: C(e.id),
        nickName: D(e.nickname),
        avatar: D(e.avatar),
        level: C(e.member_level_id),
        balance: P(e.balance),
        countLeft: L(e.left_times),
        unlimitedEnd: w(e.unlimitedEnd),
        unlimitedExpired: I(e.unlimitedExpired),
        cards: S(e.cards, b),
        name: D(e.real_name),
        phone: D(e.tel),
        isAdmin: I(e.role)
    };
}

function p(e) {
    return {
        id: C(e.id),
        name: D(e.name),
        price: P(e.price)
    };
}

function l(e) {
    var t = {
        id: C(e.id),
        name: D(e.name),
        days: L(e.time),
        count: L(e.times),
        money: P(e.money),
        price: P(e.price),
        detail: D(e.details)
    };
    return e.course_id && (t.course = {
        id: C(e.course_id),
        name: D(e.course)
    }), t;
}

function f(e) {
    return function(t) {
        return {
            id: C(t.id),
            store: v(t.store),
            course: _(t.course),
            coach: y(t.coach),
            price: P(t.price),
            orderMax: L(t.number),
            orderNum: L(t.booked_number),
            orderCv: L(t.left_tip),
            queueEnabled: I(t.can_queue),
            orderStart: w(t.book_start),
            orderEnd: w(t.book_end),
            start: w(t.start),
            end: w(t.end),
            timeOffset: e,
            myOrderID: C(t.oid),
            myQueueID: C(t.myQueueID),
            queueNum: L(t.queue_number)
        };
    };
}

function g(e) {
    return {
        id: C(e.id),
        title: D(e.name),
        image: D(e.cover_foramt),
        time: w(e.time),
        tel: D(e.tel),
        content: D(e.content)
    };
}

function _(e) {
    var r = D(e.show_image_format);
    return {
        id: C(e.id),
        name: D(e.name),
        image: r,
        images: [ r ].concat(t(S(e.slides))),
        videoPoster: D(e.video_image),
        videoSrc: D(e.video),
        intro: D(e.simple),
        description: D(e.description),
        difficulty: L(e.difficulty),
        radarValues: [ L(e.flexibility), L(e.heart_lung), L(e.harmony), L(e.muscle_endurance), L(e.muscle_endurance), L(e.calorie) ],
        radarRemarks: [ "", "", "", "", "", D(e.calorie_tips) ],
        precautions: D(e.precautions),
        selfContained: D(e.own_articles),
        sysClass: e.course_system ? h(e.course_system) : null,
        mlAllowed: S(e.member_level),
        pmAllowed: S(e.payment_way),
        details: D(e.details),
        onlyDetails: I(e.details_enabled)
    };
}

function h(e) {
    return {
        id: C(e.id),
        name: D(e.name),
        iconImg: D(e.icon_format),
        bgColor: k(e.bg_color)
    };
}

function y(e) {
    return {
        id: C(e.id),
        avatar: D(e.avatar_format),
        name: D(e.name),
        intro: D(e.simple),
        skillful: D(e.strong_points).split("|"),
        isPrivate: I(e.private),
        price: P(e.price),
        minOrder: L(e.course_num_lower),
        professional: D(e.zizhi),
        say: D(e.speech),
        showContact: I(e.bought),
        wechat: D(e.wechat),
        phone: D(e.tel),
        details: D(e.details),
        onlyDetails: I(e.details_enabled)
    };
}

function v(e) {
    var r = {
        id: C(e.id),
        name: D(e.name),
        address: D(e.address),
        image: D(e.image),
        prefer: [ "", "bus", "subway", "car" ][e.way],
        location: e.coordinate_format ? [ L(e.coordinate_format.qq.lng), L(e.coordinate_format.qq.lat) ] : null
    };
    return e.subway_name && (r.subway = [ e.subway_name, e.subway_distance, e.subway_description ]), 
    e.bus_stop_name && (r.bus = [ e.bus_stop_name, e.bus_stop_distance, e.bus_stop_description ]), 
    e.drive_place && (r.car = [ e.drive_place, "", e.drive_description ]), r.prefer && (r.stroke = [ r.prefer ].concat(t(r[r.prefer]))), 
    r;
}

function b(e) {
    var t = {
        id: C(e.id),
        name: D(e.name),
        count: L(e.times),
        countLeft: L(e.left_times),
        end: w(e.due_time)
    };
    return e.course && (t.course = {
        id: C(e.course.id),
        name: D(e.course.name)
    }), t;
}

function x(e) {
    return e instanceof Object ? e : {};
}

function I(e) {
    return 0 != e && !!e;
}

function w(e) {
    return e ? 0 == e ? 0 : 1e3 * Number(e) : 0;
}

function L(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return "" === e ? t : (e = Number(e), Number.isFinite(e) && !Number.isNaN(e) ? e : t);
}

function D(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return e ? String(e) : t;
}

function S(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
        return e;
    };
    return Array.isArray(e) ? e.map(t) : [];
}

function C(e, t) {
    return void 0 === e || null === e ? t : String(e);
}

function P(e) {
    return "number" == typeof e ? e : "string" != typeof e ? NaN : Number(e.replace(/[^-0-9\.]|/g, ""));
}

function k(e, t) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e) ? e : t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPageArticleByID = exports.commitWithdrawRequest = exports.getSubordinateListPager = exports.getWithdrawListPager = exports.getBrokerageListPager = exports.getBrokerageData = exports.getDistributorData = exports.getVcInfo = exports.getVcsListPager = exports.getVcTypesList = exports.getVcsRecommendListPager = exports.setVcFavorited = exports.getVcFavoritesListPager = exports.getCouponsListPager = exports.receiveCounpon = exports.getCouponsSupplyListPager = exports.uploadFile = exports.orderWriteOff = exports.getCheckInStatus = exports.getCheckInList = exports.orderRefund = exports.getOrderInfoByID = exports.getOrdersListPager = exports.saveUserPersonalInfo = exports.getUserPersonalInfo = exports.commitScQueue = exports.vcOrderPayFail = exports.vcOrderPaySuccess = exports.commitVcOrder = exports.coachOrderPayFail = exports.coachorderPaySuccess = exports.commitCoachOrder = exports.scOrderPayFail = exports.scOrderPaySuccess = exports.commitScOrder = exports.buyMemberLevelDone = exports.buyMemberLevel = exports.getMemberLevelList = exports.buyRechargeItemDone = exports.buyRechargeItem = exports.getRechargeItem = exports.getCourseInfoByID = exports.getPromotionInfoByID = exports.getPromotionsListPager = exports.getStoreInfoByID = exports.getStoresListPager = exports.getCoachInfoByID = exports.getCoachesList = exports.getScByID = exports.getCoursesScheduleByCourseID = exports.getCoursesScheduleByDay = exports.getScheduleCfg = exports.getHomeData = exports.getUserData = exports.userLogin = exports.getAppConfig = void 0, 
exports.injectConfig = function(e) {
    Object.assign(B, e);
};

var O = e(require("../macaw/lib/ApiClient")), N = e(require("../macaw/lib/PagerCreater")), B = {}, T = new O.default(B, {
    request: function(e) {
        e.data instanceof Function && (e.data = e.data()), "POST" === e.method && (e.header["content-type"] = e.header["content-type"] || "application/x-www-form-urlencoded");
    },
    response: function(e, t) {
        var r = e.data, o = e.statusCode;
        if (200 !== o) throw "statusCode: " + o;
        if (t && (r = JSON.parse(r)), !(r instanceof Object)) {
            if ("string" == typeof r) {
                var n = r.match(/util\.message\('(.*?)',/);
                if (n) throw n[1];
            }
            throw r;
        }
        if (0 != r.code) throw r.msg;
        return r.data;
    }
}), F = new N.default({
    requestCreater: function(e) {
        return T.request(e.url, e);
    },
    cfgCreater: function(e, t) {
        return e.params = e.params || {}, e.params.page = t, e;
    },
    per: 10,
    firstPage: 1
});

exports.getAppConfig = function() {
    return T.get("?do=Smk_config", {
        transform: function(e) {
            var t = e.menus || {}, r = e.config || {}, o = e.zdy || {}, n = e.cpright || {};
            return {
                appID: D(e.appid),
                appName: D(r.appname),
                enabledMemberLevel: I(o.member_level),
                memberLevel: S(e.member_level, p),
                paymentMethods: [ {
                    id: "unlimited",
                    icon: "pay-unlimited",
                    name: "无限次约课权"
                }, {
                    id: "count",
                    icon: "pay-count",
                    name: "剩余约课次数"
                }, {
                    id: "card",
                    icon: "pay-card",
                    name: "记次卡"
                }, {
                    id: "balance",
                    icon: "ui-balance",
                    name: "余额/微信支付"
                } ],
                iosVirtualSell: I(o.pay_ios_enabled),
                userTerms: D(e.service_term),
                privateCoachTerms: D(e.private_teach_rule),
                aboutUs: D(e.intro),
                organization: {
                    logo: D(r.logo_url),
                    name: D(r.company),
                    latitude: L(r.lat),
                    longitude: L(r.lng),
                    tel: D(r.tel)
                },
                copyright: {
                    enabled: I(n.enabled_wxapp),
                    image: D(n.logo_url),
                    owner: D(n.copyright_wxapp_l1),
                    more: D(n.copyright_wxapp_l2),
                    action: n.tel ? ':callPhone("' + n.tel + '")' : ""
                },
                nav: {
                    enabled: I(t.enabled),
                    items: S(t.items, function(e) {
                        var t = D(e.attachment_format), r = t ? D(e.pic_highlight_format) : "";
                        return {
                            label: D(e.title),
                            image: r ? [ t, r ] : t,
                            icon: D(e.icon),
                            action: D(e.page_url),
                            hiddenLabel: !e.title
                        };
                    })
                },
                serviceStore: e.store ? v(e.store) : null
            };
        }
    });
}, exports.userLogin = function(e, t, r) {
    return T.get("?do=smk_create_user", {
        data: {
            code: t,
            nicename: e.nickName,
            avatar: e.avatarUrl,
            province: e.province,
            city: e.city,
            gender: e.gender,
            invite: r
        },
        transform: m
    });
}, exports.getUserData = function() {
    return T.get("?do=SL_get_user", {
        transform: m
    });
}, exports.getHomeData = function() {
    return T.get("?do=SL_index", {
        transform: function(e) {
            var t = e.buttons || {};
            return {
                banner: {
                    enabled: !0,
                    height: 300,
                    items: S(e.banner, function(e) {
                        return {
                            id: C(e.id),
                            image: D(e.thumb_format),
                            action: D(e.page_url)
                        };
                    })
                },
                starCourses: {
                    enabled: !0,
                    items: S(e.courses, _)
                },
                guide: {
                    enabled: I(t.enabled),
                    iconCustom: !0,
                    column: L(t.rownum),
                    items: S(t.items, function(e) {
                        var t = D(e.attachment_format), r = t ? D(e.pic_highlight_format) : "";
                        return {
                            label: D(e.title),
                            image: r ? [ t, r ] : t,
                            icon: D(e.icon),
                            action: D(e.page_url),
                            hiddenLabel: !e.title
                        };
                    })
                }
            };
        }
    });
}, exports.getScheduleCfg = function(e) {
    return T.get("?do=SL_getScheduleCfg", {
        params: {
            id: e
        },
        transform: function(e) {
            return {
                store: e.store_info ? v(e.store_info) : null,
                serverTime: w(e.timestamp)
            };
        }
    });
}, exports.getCoursesScheduleByDay = function(e, t) {
    return T.get("?do=designedDayCoursePlanList", {
        params: {
            day: e ? e / 1e3 : void 0,
            storeID: t
        },
        transform: function(e, t) {
            var r = new Date(t.header.Date).getTime();
            return S(e, f(Date.now() - r));
        }
    });
}, exports.getCoursesScheduleByCourseID = function(e) {
    return T.get("?do=designedCoursePlanList", {
        params: {
            courseID: e
        },
        transform: function(e, t) {
            var r = new Date(t.header.Date).getTime();
            return S(e, f(Date.now() - r));
        }
    });
}, exports.getScByID = function(e) {
    return T.get("?do=bookInfo", {
        params: {
            id: e
        },
        transform: function(e, t) {
            var r = new Date(t.header.Date).getTime();
            return f(Date.now() - r)(e);
        }
    });
}, exports.getCoachesList = function() {
    return T.get("?do=coachList", {
        transform: function(e) {
            return S(e, y);
        }
    });
}, exports.getCoachInfoByID = function(e) {
    return T.get("?do=coachInfo", {
        params: {
            id: e
        },
        transform: y
    });
}, exports.getStoresListPager = function() {
    return F.create({
        url: "?do=storeList",
        method: "GET",
        transform: function(e) {
            return S(e, v);
        }
    });
}, exports.getStoreInfoByID = function(e) {
    return T.get("?do=storeInfo", {
        params: {
            id: e
        },
        transform: v
    });
}, exports.getPromotionsListPager = function() {
    return F.create({
        url: "?do=activityList",
        method: "GET",
        transform: function(e) {
            return S(e, g);
        }
    });
}, exports.getPromotionInfoByID = function(e) {
    return T.get("?do=activityInfo", {
        params: {
            id: e
        },
        transform: g
    });
}, exports.getCourseInfoByID = function(e) {
    return T.get("?do=courseInfo", {
        params: {
            id: e
        },
        transform: _
    });
}, exports.getRechargeItem = function(e) {
    return T.get("?do=memberCardList", {
        params: {
            type: e
        },
        transform: function(e) {
            return S(e, l);
        }
    });
}, exports.buyRechargeItem = function(e) {
    return T.get("?do=buyMemberCard", {
        params: {
            mcid: e
        }
    });
}, exports.buyRechargeItemDone = function(e, t) {
    return T.get("?do=memberCardBuyDone", {
        params: {
            ordersn: e,
            mcid: t
        }
    });
}, exports.getMemberLevelList = function() {
    return T.get("?do=memberLevelList", {
        transform: function(e) {
            return S(e, p);
        }
    });
}, exports.buyMemberLevel = function(e) {
    return T.get("?do=upgradeMemberLevel", {
        params: {
            mlid: e
        }
    });
}, exports.buyMemberLevelDone = function(e, t) {
    return T.get("?do=memberLevelUpgradeDone", {
        params: {
            ordersn: e,
            mlid: t
        }
    });
}, exports.commitScOrder = function(e, t) {
    return T.post("?do=Pay2", {
        header: {
            "content-type": "application/json"
        },
        data: {
            cid: e.id,
            name: e.name,
            tel: e.phone,
            way: e.method,
            ucid: e.cardID,
            couponId: e.couponID,
            formID: t
        },
        transform: r
    });
}, exports.scOrderPaySuccess = function(e) {
    return T.post("?do=bookCourse2", {
        data: {
            ordersn: e.orderSN,
            planId: e.scID,
            cid: e.couponID || "",
            lid: e.lid || ""
        },
        transform: r
    });
}, exports.scOrderPayFail = function(e) {
    return T.post("?do=paymentFail", {
        data: {
            osn: e.orderSN,
            cid: e.couponID,
            lid: e.lid
        }
    });
}, exports.commitCoachOrder = function(e, t) {
    return T.post("?do=buyPrivateCoach", {
        data: {
            cid: e.id,
            number: e.number,
            name: e.name,
            tel: e.phone,
            formID: t
        },
        transform: r
    });
}, exports.coachorderPaySuccess = function(e) {
    return T.post("?do=privateCoachBuySuccess", {
        data: {
            cid: e.coachID,
            ordersn: e.orderSN,
            pcbid: e.pcbid,
            lid: e.lid || ""
        },
        transform: r
    });
}, exports.coachOrderPayFail = function(e) {
    return T.post("?do=privateCoachBuyFail", {
        data: {
            lid: e.lid || "",
            pcbid: e.pcbid
        }
    });
}, exports.commitVcOrder = function(e, t) {
    return T.post("?do=BuyVideoCourse", {
        header: {
            "content-type": "application/json"
        },
        data: {
            vcid: e.id,
            name: e.name,
            tel: e.phone,
            formID: t
        },
        transform: r
    });
}, exports.vcOrderPaySuccess = function(e) {
    return T.post("?do=BuyVideoCourseSuccess", {
        data: {
            ordersn: e.orderSN,
            lid: e.lid || ""
        },
        transform: r
    });
}, exports.vcOrderPayFail = function(e) {
    return T.post("?do=BuyVideoCourseFail", {
        data: {
            ordersn: e.orderSN,
            lid: e.lid
        }
    });
}, exports.commitScQueue = function(e, t) {
    return T.get("?do=queueCoursePlan", {
        data: {
            planId: e,
            formID: t
        },
        transform: function(e) {
            return C(e);
        }
    });
}, exports.getUserPersonalInfo = function() {
    return T.get("?do=personalInfo", {
        transform: function(e) {
            var t = e.user, r = e.zdy;
            return {
                personal: d(t),
                config: {
                    required: {
                        name: I(r.name),
                        phone: I(r.tel),
                        gender: I(r.gender),
                        age: I(r.age),
                        height: I(r.height),
                        weight: I(r.weight),
                        waistline: I(r.waistline),
                        bust: I(r.bust),
                        thigh: I(r.thigh),
                        idNumber: I(r.idcard),
                        idImgSrc: I(r.idcard),
                        photoSrc: I(r.image)
                    },
                    hideOptional: I(r.hide_option)
                }
            };
        }
    });
}, exports.saveUserPersonalInfo = function(e) {
    return T.post("?do=savePersonalInfo", {
        data: e,
        transform: d
    });
}, exports.getOrdersListPager = function() {
    return F.create({
        url: "?do=orderList2",
        method: "GET",
        transform: function(e, t) {
            var r = new Date(t.header.Date).getTime();
            return S(e, c(Date.now() - r));
        }
    });
}, exports.getOrderInfoByID = function(e) {
    return T.get("?do=OrderInfo", {
        params: {
            oid: e
        },
        transform: function(e, t) {
            var r = new Date(t.header.Date).getTime();
            return c(Date.now() - r)(e);
        }
    });
}, exports.orderRefund = function(e) {
    return T.get("?do=requestRefund", {
        params: {
            id: e
        }
    });
}, exports.getCheckInList = function(e) {
    return T.get("?do=signInList", {
        params: {
            type: e
        },
        transform: function(t) {
            return S(t, "sc" === e ? u : s);
        }
    });
}, exports.getCheckInStatus = function(e, t) {
    return T.get("?do=SL_SignInCheck", {
        params: {
            type: e,
            id: t
        },
        transform: function(t) {
            return "sc" === e || L(t.left_times);
        }
    });
}, exports.orderWriteOff = function(e) {
    return T.get("?do=signIn", {
        params: {
            type: e.type,
            id: e.id,
            left: e.left
        },
        transform: function(e) {
            var t = {
                user: {
                    nickName: D(e.user.nickname),
                    avatar: D(e.user.avatar_format)
                },
                coach: {
                    name: D(e.coach.name),
                    avatar: D(e.coach.avatar_format)
                }
            };
            return e.sc && (t.sc = {
                name: D(e.sc.name),
                image: D(e.sc.show_image_format),
                start: w(e.sc.start),
                end: w(e.sc.end)
            }), t;
        }
    });
}, exports.uploadFile = function(e) {
    return T.upload("?do=uploadFile", {
        filePath: e,
        name: "file",
        transform: function(e) {
            return e;
        }
    });
}, exports.getCouponsSupplyListPager = function() {
    return F.create({
        url: "?do=SL_coupon",
        method: "GET",
        transform: function(e) {
            return S(e, i());
        }
    });
}, exports.receiveCounpon = function(e) {
    return T.get("?do=SL_coupon_my", {
        params: {
            op: "add",
            id: e
        }
    });
}, exports.getCouponsListPager = function(e, t) {
    return F.create({
        url: "?do=SL_coupon_my",
        method: "GET",
        params: {
            type: e
        },
        transform: function(r) {
            return S(r, i(!0, t, e));
        }
    });
}, exports.getVcFavoritesListPager = function() {
    return F.create({
        url: "?do=SL_video_course_collect",
        method: "GET",
        transform: function(e) {
            return S(e.video_course, a);
        }
    });
}, exports.setVcFavorited = function(e, t) {
    return T.get("?do=SL_video_course_collect", {
        params: {
            id: e,
            iscollect: t ? 1 : 0,
            op: "post"
        }
    });
}, exports.getVcsRecommendListPager = function() {
    return F.create({
        url: "?do=SL_video_recommend",
        method: "GET",
        transform: function(e) {
            return S(e, a);
        }
    });
}, exports.getVcTypesList = function() {
    return T.get("?do=SL_category", {
        transform: function(e) {
            return S(e, function(e) {
                return {
                    id: C(e.id),
                    name: D(e.name),
                    image: D(e.icon_format)
                };
            });
        }
    });
}, exports.getVcsListPager = function(e) {
    return F.create({
        url: "?do=SL_list_video",
        method: "GET",
        params: {
            id: e
        },
        transform: function(e) {
            return S(e, a);
        }
    });
}, exports.getVcInfo = function(e) {
    return T.get("?do=SL_one_video", {
        params: {
            id: e
        },
        transform: a
    });
}, exports.getDistributorData = function() {
    return T.get("?do=SL_jsf_com_center", {
        transform: function(e) {
            var t = e.superior;
            return {
                isDistributor: I(e.distributor),
                referrer: t ? {
                    avatar: D(t.avatar),
                    name: D(t.name),
                    phone: D(t.tel)
                } : null,
                brokerage: P(e.money),
                brokerageConsumed: P(e.money_withdraw),
                brokerageCumulative: P(e.money_total),
                brokerageCount: L(e.brokerage_count),
                withdrawCount: L(e.withdraw_count),
                subordinateCount: L(e.my_downline_count)
            };
        }
    });
}, exports.getBrokerageData = function() {
    return T.get("?do=SL_jsf_com_brokerage", {
        transform: function(e) {
            return {
                userName: D(e.name),
                brokerage: P(e.money),
                brokerageConsumed: P(e.money_withdraw),
                brokerageReview: P(e.application_ing),
                brokerageWaiting: P(e.application_ing),
                brokerageSuspend: P(e.brokerage_unsettlement),
                brokerageCumulative: P(e.money_total),
                withdrawMinLimit: P(e.withdraw_min)
            };
        }
    });
}, exports.getBrokerageListPager = function(e) {
    return F.create({
        url: "?do=SL_jsf_com_brokerage_log",
        method: "GET",
        params: {
            type: e
        },
        transform: function(e) {
            return S(e, n);
        }
    });
}, exports.getWithdrawListPager = function(e) {
    return F.create({
        url: "?do=SL_jsf_com_withdraw_log",
        method: "GET",
        params: {
            type: e
        },
        transform: function(e) {
            return S(e, function(e) {
                return {
                    id: C(e.id),
                    status: C(e.status),
                    money: P(e.money_format),
                    createTime: w(e.timestamp)
                };
            });
        }
    });
}, exports.getSubordinateListPager = function() {
    return F.create({
        url: "?do=SL_jsf_my_downline",
        method: "GET",
        transform: function(e) {
            return S(e, function(e) {
                return {
                    avatar: D(e.avatar),
                    nickName: D(e.nickname),
                    realName: D(e.real_name),
                    phone: D(e.tel)
                };
            });
        }
    });
}, exports.commitWithdrawRequest = function(e) {
    return T.post("?do=SL_jsf_withdraw_post", {
        header: {
            "content-type": "application/json"
        },
        data: e
    });
}, exports.getPageArticleByID = function(e) {
    return T.get("?do=SL_adact_one", {
        needTrack: !0,
        params: {
            id: e
        },
        transform: function(e) {
            return o(e.one);
        }
    });
};