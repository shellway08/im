(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-message-qun_manage"],{"0408":function(t,i,e){"use strict";e.r(i);var a=e("38fa"),n=e("935d");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("2d9f");var o,c=e("f0c5"),u=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5f7e6675",null,!1,a["a"],o);i["default"]=u.exports},"2d9f":function(t,i,e){"use strict";var a=e("d847"),n=e.n(a);n.a},"38fa":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"page-content"},[e("v-uni-view",{staticClass:"page-list"},[e("v-uni-view",{staticClass:"page-item"},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("全员禁言")]),e("v-uni-view",{staticClass:"page-item-info"},[t._v("开启后仅群主和管理员可以发言")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-switch",{attrs:{checked:!!t.data.group.is_msg},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.msgChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"page-item"},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("允许群程序修改群名称和头像")]),e("v-uni-view",{staticClass:"page-item-info"},[t._v("关闭后紧群主和管理员可以修改群名称和头像")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-switch",{attrs:{checked:!!t.data.group.edit_photo},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.editChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"page-item"},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("允许群成员领取长时间未领取的红包")]),e("v-uni-view",{staticClass:"page-item-info"},[t._v("关闭后紧群主和管理员使用")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-switch",{attrs:{checked:!!t.data.group.can_get_bigred},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.getRedChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"page-item"},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("允许群成员上麦")]),e("v-uni-view",{staticClass:"page-item-info"},[t._v("关闭后紧群主和管理员可以上麦")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-switch",{attrs:{checked:!!t.data.group.can_shangmai},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.shangmai.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"page-item"},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("群内禁止好友")]),e("v-uni-view",{staticClass:"page-item-info"},[t._v("关闭后群成员直接可以加好友")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-switch",{attrs:{checked:"!data.group.can_add_friend"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switch1Change.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"page-item"},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("匿名聊天")]),e("v-uni-view",{staticClass:"page-item-info"},[t._v("开启后用户聊天不显示真实头像")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-switch",{attrs:{checked:1==t.data.group.can_niming},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.nimingChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"page-item-footer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSetAdmin(4)}}},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("一键复制新群")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-view",{staticClass:"iconfont-im icon-jiantou font-jiantou"})],1)],1),e("v-uni-view",{staticClass:"footer-list"},[e("v-uni-view",{staticClass:"page-item-footer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSetAdmin(1)}}},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("设置管理员")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-view",{staticClass:"iconfont-im icon-jiantou font-jiantou"})],1)],1),e("v-uni-view",{staticClass:"footer-hr"}),e("v-uni-view",{staticClass:"page-item-footer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSetAdmin(3)}}},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("群主管理权转让")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-view",{staticClass:"iconfont-im icon-jiantou font-jiantou"})],1)],1),e("v-uni-view",{staticClass:"footer-hr"}),e("v-uni-view",{staticClass:"page-item-footer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reduce.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("踢出群成员")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-view",{staticClass:"iconfont-im icon-jiantou font-jiantou"})],1)],1),e("v-uni-view",{staticClass:"footer-hr"}),e("v-uni-view",{staticClass:"page-item-footer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSetAdmin(2)}}},[e("v-uni-view",{staticClass:"page-item-left"},[e("v-uni-view",[t._v("禁言设置")])],1),e("v-uni-view",{staticClass:"page-item-right"},[e("v-uni-view",{staticClass:"iconfont-im icon-jiantou font-jiantou"})],1)],1),e("v-uni-view",{staticClass:"footer-hr"}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==t.data.is_action,expression:"data.is_action == 2"}],staticClass:"doButton"},[e("v-uni-button",{staticClass:"group-button",attrs:{type:"button"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeGroup.apply(void 0,arguments)}}},[t._v("解散该群")])],1)],1)],1)],1)],1)},s=[]},"3c90":function(t,i,e){"use strict";(function(t){var a=e("4ea4");e("a434"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("7dec")),s=a(e("d799")),o=a(e("2bf1")),c={data:function(){return{data:{member:[],group:{is_photo:"default_group_photo/90.jpg"},is_action:0,type:1},list_id:0}},computed:{staticPhoto:function(){return s.default.staticPhoto()},isAction:function(){return this.data.group.main_id==s.default.data("user_info").id}},onShow:function(){n.default.routeSonHook();var t=this;t.$httpSend({path:"/im/message/getChatDetails",data:{list_id:t.list_id},success:function(i){t.data=i,1==i.type&&uni.setNavigationBarTitle({title:i.group.name});var e=s.default.data("cache");1!=i.type||"group_photo_"+t.list_id in e||uni.downloadFile({url:s.default.staticPhoto()+i.group.is_photo,success:function(i){200===i.statusCode&&(e["group_photo_"+t.list_id]=i.tempFilePath,s.default.data("cache",e))}})}})},methods:{shangmai:function(t){var i=t.detail.value?1:0,e=this;this.$httpSend({path:"/im/vendor/setShangmai",data:{list_id:this.list_id,value:i},success:function(t){s.default.localData("DISTURB:"+e.list_id,i)}})},groupNickname:function(i){t("log",i," at pages/chat/message/qun_manage.vue:188"),uni.navigateTo({url:"group_nickname?"+o.default.pageParam({list_id:this.list_id,nickname:i})})},disturb:function(t){var i=t.detail.value?1:0,e=this;this.$httpSend({path:"/im/message/msgDisturb",data:{list_id:this.list_id,value:i},success:function(t){s.default.localData("DISTURB:"+e.list_id,i)}})},liveGroup:function(){var i=this;uni.showModal({title:"重要提示",content:"确定要离开群聊吗?",confirmText:"离开",cancelText:"再看看",confirmColor:"red",cancelColor:"#353535",success:function(e){e.confirm&&i.$httpSend({path:"/im/message/liveGroup",data:{list_id:i.list_id},success:function(i){t("log",i," at pages/chat/message/qun_manage.vue:221"),uni.switchTab({url:"../index"})}})}})},imageError:function(i){t("log","图片加载失败!",i.detail," at pages/chat/message/qun_manage.vue:232");var e=i.currentTarget.dataset.index;t("log",i.currentTarget.dataset.index," at pages/chat/message/qun_manage.vue:234"),t("log",this.data.member[e].photo," at pages/chat/message/qun_manage.vue:236"),this.data.member[e].photo="/default_photo_path.png"},removeGroup:function(){var t=this;uni.showModal({title:"重要提示",content:"此操作数据不可恢复,确定要解散该群吗?",confirmText:"不解散",cancelText:"解散",confirmColor:"#353535",cancelColor:"red",success:function(i){i.confirm||t.$httpSend({path:"/im/message/removeGroup",data:{list_id:t.list_id},success:function(t){uni.switchTab({url:"../index"})}})}})},photo:function(t){return this.staticPhoto+t+"?_="+Math.random()},msgChange:function(t){var i=t.detail.value?1:0;2==this.data.is_action?this.$httpSend({path:"/im/message/groupIsMsg",data:{list_id:this.list_id,value:i},success:function(t){}}):uni.showModal({content:"没有权限设置",showCancel:!1})},nimingChange:function(t){var i=t.detail.value?1:0;this.data.is_action||2==this.data.is_action?this.$httpSend({path:"/im/message/nimingChange",data:{list_id:this.list_id,value:i},success:function(t){}}):uni.showModal({content:"没有权限设置",showCancel:!1})},msgTop:function(t){var i=this,e=t.detail.value?1:0;this.$httpSend({path:"/im/message/chatTop",data:{list_id:this.list_id,value:e},success:function(t){for(var e=0,a=s.default.localData("chat_list"),n=a.length;e<n;e++)if(a[e].list_id==i.list_id){var o=a[e];a.splice(e,1),a.unshift(o),s.default.localData("chat_list",a),uni.$emit("data_chat_list",a);break}}})},switch1Change:function(t){var i=this,e=t.detail.value?1:0;this.$httpSend({path:"/im/message/speekChecked",data:{list_id:this.list_id,value:e},success:function(t){for(var e=0,a=s.default.localData("chat_list"),n=a.length;e<n;e++)if(a[e].list_id==i.list_id){var o=a[e];a.splice(e,1),a.unshift(o),s.default.localData("chat_list",a),uni.$emit("data_chat_list",a);break}}})},editChange:function(t){var i=t.detail.value?1:0;this.$httpSend({path:"/im/vendor/editChange",data:{list_id:this.list_id,value:i},success:function(t){}})},goGroupQrcode:function(){uni.navigateTo({url:"./group_qrcode?list_id="+this.list_id,animationType:"slide-in-bottom"})},goSetGroupPhoto:function(){2==this.data.is_action||this.data.group.edit_photo?uni.navigateTo({url:"../../set/group_photo?list_id="+this.list_id,animationType:"slide-in-bottom"}):uni.showToast({title:"没有权限设置",icon:"none",duration:1e3})},goSetAdmin:function(i){switch(i){case 1:if(2!=this.data.is_action)return t("log","this.data.is_action",this.data.is_action," at pages/chat/message/qun_manage.vue:389"),void uni.showToast({title:"群主才能设置",icon:"none",duration:1e3});break;case 2:if(2!=this.data.is_action)return void uni.showModal({content:"没有权限设置",showCancel:!1});break;case 3:if(2!=this.data.is_action)return void uni.showModal({content:"没有权限设置",showCancel:!1});break;case 4:if(2!=this.data.is_action)return void uni.showModal({content:"没有权限设置",showCancel:!1});break;default:return}var e="../../set/group_admin?list_id="+this.list_id+"&type="+i;3==i&&(e="../../set/group_trans?list_id="+this.list_id+"&type="+i),4==i&&(e="../../set/copy_group?list_id="+this.list_id+"&type="+i),uni.navigateTo({url:e,animationType:"slide-in-bottom"})},goSet:function(t){2==this.data.is_action||this.data.group.edit_photo?uni.navigateTo({url:"../../set/message_more?list_id="+this.list_id+"&type="+t,animationType:"slide-in-bottom"}):uni.showToast({title:"没有权限设置",icon:"none",duration:1e3})},goDetails:function(t){this.data.type&&2!=this.data.is_action?uni.showToast({title:"没有权限查看",icon:"none",duration:1e3}):uni.navigateTo({url:"../../details/index?user_id="+t+"&type="+this.data.type+"&list_id="+this.list_id+"&is_action="+this.data.is_action})},add:function(){uni.navigateTo({url:"../../friend/index_list?list_id="+this.list_id,animationType:"slide-in-bottom"})},reduce:function(){uni.navigateTo({url:"./reduce?list_id="+this.list_id,animationType:"slide-in-bottom"})},groupCopy:function(t){o.default.uniCopy({content:this.data.group.id,success:function(){uni.showToast({title:"复制成功",duration:2e3})}})},replaceStr:function(i){return t("log",i," at pages/chat/message/qun_manage.vue:485"),i.substr(10)},getRedChange:function(t){var i=t.detail.value?1:0;this.$httpSend({path:"/im/vendor/getRedChange",data:{list_id:this.list_id,value:i},success:function(t){}})},goBigRedList:function(){uni.navigateTo({url:"../message/red_list?list_id="+this.list_id})},manarger:function(){uni.navigateTo({url:"../message/qun_manage?list_id="+this.list_id})}},onLoad:function(t){this.list_id=t.list_id,this.data.type=t.type}};i.default=c}).call(this,e("0de9")["log"])},"7dec":function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("3b4d")),s={routeTabBarHook:function(){n.default.routeTool(),n.default.setStatusTips()},routeSonHook:function(){n.default.routeTool()}};i.default=s},"935d":function(t,i,e){"use strict";e.r(i);var a=e("3c90"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},b7be:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"uni-page-body[data-v-5f7e6675]{background-color:#e5e5e5}.page[data-v-5f7e6675]{height:100%}.page-content[data-v-5f7e6675]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-list[data-v-5f7e6675]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page-item[data-v-5f7e6675]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;margin-bottom:10px;padding:10px 20px}.page-item-footer[data-v-5f7e6675]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;padding:10px 20px}.footer-hr[data-v-5f7e6675]{height:%?1?%;width:90%;background-color:#e1e1e1;margin:0 auto}.page-list[data-v-5f7e6675]:first-child{border-top:%?1?% solid #e1e1e1}.page-item-left[data-v-5f7e6675]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.footer-list[data-v-5f7e6675]{background-color:#fff;padding-bottom:20px}.page-item-info[data-v-5f7e6675]{color:#bababa;font-size:12px}.font-jiantou[data-v-5f7e6675]{font-size:12px}.page-item-footer .page-item-right[data-v-5f7e6675]{margin-right:20px}.page-item-footer[data-v-5f7e6675]{margin-bottom:10px}.doButton[data-v-5f7e6675]{padding:10px}.group-button[data-v-5f7e6675]{width:92%;background-color:#5693ee;color:#fff;height:%?70?%;line-height:%?70?%!important;border-radius:%?40?%;font-size:%?36?%;cursor:pointer;margin-top:%?20?%}body.?%PAGE?%[data-v-5f7e6675]{background-color:#e5e5e5}",""]),t.exports=i},d847:function(t,i,e){var a=e("b7be");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("4ffcd884",a,!0,{sourceMap:!1,shadowMode:!1})}}]);