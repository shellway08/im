(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail"],{"02c7":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-popup-dialog"},[i("v-uni-view",{staticClass:"uni-dialog-title"},[i("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.title))])],1),i("v-uni-view",{staticClass:"uni-dialog-content"},["base"===t.mode?i("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))]):i("v-uni-input",{staticClass:"uni-dialog-input",attrs:{maxlength:t.maxlength,type:"text",placeholder:t.placeholder,focus:t.focus},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),i("v-uni-view",{staticClass:"uni-dialog-button-group"},[i("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v("取消")])],1),i("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v("确定")])],1)],1)],1)},a=[]},2344:function(t,e,i){"use strict";var r=i("44cb"),o=i.n(r);o.a},"2a52":function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-text",{staticClass:"uni-badge",class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},a=[]},"2fd1":function(t,e,i){"use strict";var r=i("c7c3"),o=i.n(r);o.a},"44cb":function(t,e,i){var r=i("d9b8");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("dd910f14",r,!0,{sourceMap:!1,shadowMode:!1})},"4b79":function(t,e,i){"use strict";i.r(e);var r=i("ef39"),o=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"5aaa":function(t,e,i){"use strict";i.r(e);var r=i("aec7"),o=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"70cf":function(t,e,i){"use strict";i.r(e);var r=i("995b"),o=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"7dec":function(t,e,i){"use strict";var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("3b4d")),a={routeTabBarHook:function(){o.default.routeTool(),o.default.setStatusTips()},routeSonHook:function(){o.default.routeTool()}};e.default=a},"80b8":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-badge[data-v-14aa89f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;padding:0 6px}.uni-badge--inverted[data-v-14aa89f4]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-14aa89f4]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-14aa89f4]{color:#999;background-color:initial}.uni-badge--primary[data-v-14aa89f4]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-14aa89f4]{color:#007aff;background-color:initial}.uni-badge--success[data-v-14aa89f4]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-14aa89f4]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-14aa89f4]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-14aa89f4]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-14aa89f4]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-14aa89f4]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-14aa89f4]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},"858a":function(t,e,i){"use strict";var r=i("a39d"),o=i.n(r);o.a},9395:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-7cddedf5]{width:300px;border-radius:5px;background-color:#fff}.uni-dialog-title[data-v-7cddedf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:20px 0 10px 15px}.uni-dialog-title-text[data-v-7cddedf5]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-7cddedf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5px 15px 15px 15px}.uni-dialog-content-text[data-v-7cddedf5]{font-size:14px;color:#6e6e6e}.uni-dialog-button-group[data-v-7cddedf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-top-color:#bdbdbd;border-top-style:solid;border-top-width:1px;margin-top:5px}.uni-dialog-button[data-v-7cddedf5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:55px}.uni-border-left[data-v-7cddedf5]{border-left-color:#bdbdbd;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-7cddedf5]{font-size:14px}.uni-dialog-input[data-v-7cddedf5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;overflow:visible!important;line-height:1.9rem!important;height:1.9rem!important;border-radius:10px;padding-left:2px;background-color:#eee}.uni-popup__success[data-v-7cddedf5]{color:#4cd964}.uni-popup__warn[data-v-7cddedf5]{color:#f0ad4e}.uni-popup__error[data-v-7cddedf5]{color:#dd524d}.uni-popup__info[data-v-7cddedf5]{color:#909399}',""]),t.exports=e},"995b":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uniPopupDialog",props:{value:{type:[String,Number],default:""},maxlength:{type:Number,default:10},placeholder:{type:[String,Number],default:"请输入内容"},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:"提示"},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:function(){return{dialogType:"error",focus:!1,val:""}},inject:["popup"],watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.mkclick=!1,"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){var t=this;this.$emit("confirm",(function(){if(t.popup.close(),"input"===t.mode)return t.val=t.value,t.val}),"input"===this.mode?this.val:"")},close:function(){var t=this;this.beforeClose?this.$emit("close",(function(){t.popup.close()})):this.popup.close()}}};e.default=r},"9c09":function(t,e,i){"use strict";i.r(e);var r=i("02c7"),o=i("70cf");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("2fd1");var n,s=i("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"7cddedf5",null,!1,r["a"],n);e["default"]=l.exports},a39d:function(t,e,i){var r=i("80b8");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("11eba08d",r,!0,{sourceMap:!1,shadowMode:!1})},ad63:function(t,e,i){"use strict";i.r(e);var r=i("fa95"),o=i("4b79");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("2344");var n,s=i("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"754bd88e",null,!1,r["a"],n);e["default"]=l.exports},aec7:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=r},c5bd:function(t,e,i){"use strict";i.r(e);var r=i("2a52"),o=i("5aaa");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("858a");var n,s=i("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"14aa89f4",null,!1,r["a"],n);e["default"]=l.exports},c7c3:function(t,e,i){var r=i("9395");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=i("4f06").default;o("d5ba3fb4",r,!0,{sourceMap:!1,shadowMode:!1})},d9b8:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".order-info-detail[data-v-754bd88e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:80px}.rder-info-detail-item[data-v-754bd88e]{word-break:break-all}.list-fahuo[data-v-754bd88e]{border-radius:30px;margin-top:20px;width:80%;height:40px;line-height:unset;line-height:40px}",""]),t.exports=e},ef39:function(t,e,i){"use strict";(function(t){var r=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("7dec")),a=r(i("d799")),n=r(i("7f23")),s=r(i("9c09")),l={data:function(){return{showArrow:!1,orderDetail:{}}},components:{UniPopupConfirm:s.default},computed:{staticPhoto:function(){return a.default.staticPhoto()}},onShow:function(){o.default.routeSonHook()},onLoad:function(e){t("log",e," at pages/order/detail.vue:97"),this.orderDetail=e},methods:{open:function(){this.$refs.popup.open()},confirm:function(t,e){t(),n.default.updateOrderStatus({logistics_code:e,id:this.orderDetail.id},(function(t){uni.showToast({title:"发货成功"}),setTimeout((function(){uni.navigateBack()}),1e3)}),(function(t){uni.showToast({title:t.msg,icon:"none"})}))},close:function(){this.$refs.popup.close()}}};e.default=l}).call(this,i("0de9")["log"])},fa95:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uniList:i("09f0").default,uniListItem:i("1bbe").default,uniPopup:i("dc17").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[0==t.orderDetail.is_buyer?i("v-uni-view",{staticClass:"order-info-detail"},[i("uni-list",{staticClass:"list",staticStyle:{"margin-top":"14px"}},[i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"商品标题：",rightText:t.orderDetail.goods_name,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"商品图片：",rightImage:t.orderDetail.small_pic,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"商品价格：",rightText:t.orderDetail.amount,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"买家昵称：",rightText:t.orderDetail.buyer_username,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"买家头像：",rightImage:t.staticPhoto+t.orderDetail.buyer_face,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"收货人：",rightText:t.orderDetail.username,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"手机号：",rightText:t.orderDetail.mobile,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"快递单号：",rightText:t.orderDetail.logistics_code?t.orderDetail.logistics_code:"",showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"收货地址：",rightText:t.orderDetail.address,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"订单状态：",rightText:t.orderDetail.status_msg,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"下单时间：",rightText:t.orderDetail.create_time,showArrow:t.showArrow}})],1),1==t.orderDetail.logistics_status?i("v-uni-view",[i("v-uni-button",{staticClass:"list-fahuo",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[t._v("发货")])],1):t._e()],1):t._e(),1==t.orderDetail.is_buyer?i("v-uni-view",{staticClass:"order-info-detail"},[i("uni-list",{staticClass:"list",staticStyle:{"margin-top":"14px"}},[i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"商品标题：",rightText:t.orderDetail.goods_name,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"商品图片：",rightImage:t.orderDetail.small_pic,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"商品价格：",rightText:t.orderDetail.amount,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"卖家昵称：",rightText:t.orderDetail.seller_username,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"卖家头像：",rightImage:t.staticPhoto+t.orderDetail.seller_face,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"收货人：",rightText:t.orderDetail.username,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"手机号：",rightText:t.orderDetail.mobile,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"快递单号：",rightText:t.orderDetail.logistics_code?t.orderDetail.logistics_code:"",showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"收货地址：",rightText:t.orderDetail.address,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"订单状态：",rightText:t.orderDetail.status_msg,showArrow:t.showArrow}}),i("uni-list-item",{staticClass:"rder-info-detail-item",attrs:{title:"下单时间：",rightText:t.orderDetail.create_time,showArrow:t.showArrow}})],1)],1):t._e(),i("uni-popup",{ref:"popup",attrs:{type:"dialog"}},[i("uni-popup-confirm",{attrs:{mode:"input",type:"input",value:"",placeholder:"请输入快递单号",title:"发货",duration:2e3,"before-close":!0},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}})],1)],1)},a=[]}}]);