(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-wallet-index"],{"0840":function(t,e,a){"use strict";a.r(e);var n=a("2172"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"19d4":function(t,e,a){"use strict";a.r(e);var n=a("b3bb"),i=a("0840");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("7b3b");var c,r=a("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"2518c34f",null,!1,n["a"],c);e["default"]=l.exports},2172:function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("f13f")),o=n(a("d2a0")),c=n(a("7dec")),r=n(a("d799")),l=n(a("7f23")),u={components:{uniList:i.default,uniListItem:o.default},data:function(){return{my_data:{}}},onShow:function(){c.default.routeTabBarHook();var e=this;l.default.getUserInfo({}),uni.$on("data_user_info",(function(a){e.my_data=a,t("log","更新用户数据...."," at pages/my/wallet/index.vue:103"),r.default.data("user_info",a)})),e.my_data=r.default.data("user_info"),t("log",e.my_data," at pages/my/wallet/index.vue:107")},onLoad:function(){},onUnload:function(){},computed:{},methods:{goPath:function(t){t&&uni.navigateTo({url:t})}},watch:{}};e.default=u}).call(this,a("0de9")["log"])},"52de":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".content[data-v-2518c34f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.img[data-v-2518c34f]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?440?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#5693ee;width:100%}.img uni-image[data-v-2518c34f]{width:%?140?%;height:%?150?%}.img uni-text[data-v-2518c34f]{color:#fff;font-size:20px}.content .withdraw[data-v-2518c34f]{width:95%;background-color:#5693ee;color:#fff;margin-top:%?10?%;height:%?80?%;line-height:%?80?%!important;font-size:%?36?%;cursor:pointer}.content .charge[data-v-2518c34f]{background-color:#fff;color:#5693ee;border:1px solid #5693ee}.content .list[data-v-2518c34f]{margin-top:%?20?%}.uni-page-head[data-v-2518c34f]{box-sizing:initial!important}",""]),t.exports=e},"7b3b":function(t,e,a){"use strict";var n=a("c751"),i=a.n(n);i.a},adbd:function(t,e,a){t.exports=a.p+"static/img/wallet.7f660be8.png"},b3bb:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniList:a("09f0").default,uniListItem:a("1bbe").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:a("adbd"),"lazy-load":!0}}),n("v-uni-text",{staticClass:"msg"},[t._v("￥"+t._s(t.my_data.money?t.my_data.money:0))])],1),n("v-uni-button",{staticClass:"withdraw",attrs:{type:"button"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPath("charge")}}},[t._v("充值")]),n("v-uni-button",{staticClass:"withdraw charge",attrs:{type:"button"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPath("withdraw")}}},[t._v("提现")]),n("uni-list",{staticClass:"list"},[n("uni-list-item",{attrs:{title:"我的账单","show-arrow":!0,showArrow:!0,thumb:"../../../static/theme/default/my/capital.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPath("capital2")}}}),n("uni-list-item",{attrs:{title:"我的红包记录","show-arrow":!0,showArrow:!0,thumb:"../../../static/theme/default/my/hongbao2.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPath("capital?type=hongbao")}}}),n("uni-list-item",{attrs:{title:"提现渠道设置","show-arrow":!0,showArrow:!0,thumb:"../../../static/theme/default/my/alipay.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPath("alipay_set")}}}),n("uni-list-item",{attrs:{title:"支付密码管理","show-arrow":!0,showArrow:!0,thumb:"../../../static/theme/default/my/pay_password.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPath("trade_password")}}})],1)],1)],1)},o=[]},c751:function(t,e,a){var n=a("52de");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1c94408f",n,!0,{sourceMap:!1,shadowMode:!1})}}]);