(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-push-home"],{"05e0":function(t,e,n){"use strict";(function(t){var u=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("7dec")),a={components:{},data:function(){return{url:"https://www.baidu.com/",agent_user_id:0}},onShow:function(){o.default.routeTabBarHook()},onReady:function(){setTimeout((function(){uni.hideLoading()}),1e3)},onLoad:function(t){uni.showLoading({title:null}),"url"in t&&(t.url=decodeURIComponent(t.url),/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t.url)&&(/^http/.test(t.url)||(t.url="http://"+t.url),this.url=t.url)),"agent_user_id"in t&&(this.agent_user_id=t.agent_user_id)},computed:{},methods:{},onNavigationBarButtonTap:function(e){switch(t("log",e.index," at pages/push/home.vue:64"),e.index){case 0:location.reload();break;case 1:location.reload();break;case 2:uni.switchTab({url:"../push/game"});break;case 3:uni.navigateBack();break;default:break}}};e.default=a}).call(this,n("0de9")["log"])},"479f":function(t,e,n){"use strict";n.r(e);var u=n("6fff"),o=n("da08");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,i=n("f0c5"),c=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,"47deefd0",null,!1,u["a"],r);e["default"]=c.exports},"6fff":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-web-view",{attrs:{src:"http://222.wbssite.com/home.html"}})],1)},a=[]},"7dec":function(t,e,n){"use strict";var u=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("3b4d")),a={routeTabBarHook:function(){o.default.routeTool(),o.default.setStatusTips()},routeSonHook:function(){o.default.routeTool()}};e.default=a},da08:function(t,e,n){"use strict";n.r(e);var u=n("05e0"),o=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=o.a}}]);