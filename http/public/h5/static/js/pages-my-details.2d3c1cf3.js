(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-details"],{"06e0":function(t,i,n){"use strict";n.r(i);var e=n("b19d"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a},"2a82":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSet("3")}}},[n("v-uni-view",{staticClass:"uni-media-list uni-list-cell-navigate uni-navigate-right"},[n("v-uni-text",[t._v("头像")]),n("v-uni-view",{staticClass:"uni-media-list-logo photo"},[n("v-uni-image",{staticStyle:{"border-radius":"10upx"},attrs:{src:t.myPhoto,"lazy-load":!0}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"uni-card"},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSet("0")}}},[n("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[n("v-uni-view",[n("v-uni-text",[t._v("昵称")]),n("v-uni-view",{staticClass:"show_text"},[t._v(t._s(t.info.nickname))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-navigate"},[n("v-uni-view",[n("v-uni-text",[t._v("账号")]),n("v-uni-view",{staticClass:"show_text"},[t._v(t._s(t.info.username))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-list-cell",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSet("1")}}},[n("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[n("v-uni-view",[n("v-uni-text",[t._v("个性签名")]),n("v-uni-view",{staticClass:"show_text"},[t._v(t._s(t.info.doodling))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-list-cell",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSet("4")}}},[n("v-uni-view",{staticClass:"uni-media-list uni-list-cell-navigate uni-navigate-right"},[n("v-uni-text",[t._v("我的二维码")]),n("v-uni-view",{staticClass:"uni-media-list-logo photo_qrcode"},[n("v-uni-image",{attrs:{src:"/static/theme/default/my/qrcode.png","lazy-load":!0}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-list-cell",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSet("2")}}},[n("v-uni-view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[n("v-uni-view",[n("v-uni-text",[t._v("性别")]),n("v-uni-view",{staticClass:"show_text"},[t._v(t._s(["男","女"][t.info.sex]))])],1)],1)],1),t._e()],1)],1)],1)},s=[]},"675b":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".uni-media-list-logo[data-v-d83e2cc8]{width:%?30?%;height:%?30?%;display:inline-block;vertical-align:middle}.photo_qrcode[data-v-d83e2cc8]{width:%?52?%;height:%?52?%;margin-left:%?30?%;margin-right:%?50?%}.photo[data-v-d83e2cc8]{width:%?106?%;height:%?106?%;margin-left:%?30?%;margin-right:%?50?%}.uni-card[data-v-d83e2cc8]{box-shadow:none}.show_text[data-v-d83e2cc8]{position:absolute;right:%?60?%;color:#8f8f94;display:inline-block}.uni-navigate-right.uni-media-list[data-v-d83e2cc8]{padding-right:%?23?%}",""]),t.exports=i},"7dec":function(t,i,n){"use strict";var e=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("3b4d")),s={routeTabBarHook:function(){a.default.routeTool(),a.default.setStatusTips()},routeSonHook:function(){a.default.routeTool()}};i.default=s},8115:function(t,i,n){"use strict";n.r(i);var e=n("2a82"),a=n("06e0");for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);n("dbf8");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"d83e2cc8",null,!1,e["a"],u);i["default"]=c.exports},b19d:function(t,i,n){"use strict";var e=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;e(n("7f23"));var a=e(n("7dec")),s=e(n("d799")),u={components:{},data:function(){return{info:{}}},onShow:function(){a.default.routeSonHook();var t=this;t.info=s.default.data("user_info"),uni.$on("data_user_info",(function(i){t.info=i}))},onLoad:function(t){},onUnload:function(){uni.$off("data_user_info")},computed:{myPhoto:function(){return s.default.staticPhoto()+this.info.photo}},onBackPress:function(t){return"navigateBack"!==t.from&&(this.back(),!0)},methods:{back:function(){uni.reLaunch({url:"/pages/chat/index"})},goSet:function(t){var i;switch(t){case"0":case"1":case"2":i="../set/user?type="+t;break;case"3":i="../set/photo";break;case"4":i="./qrcode";break;default:return}uni.navigateTo({url:i,animationType:"slide-in-bottom"})}},watch:{}};i.default=u},dbf8:function(t,i,n){"use strict";var e=n("e419"),a=n.n(e);a.a},e419:function(t,i,n){var e=n("675b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("006dba62",e,!0,{sourceMap:!1,shadowMode:!1})}}]);