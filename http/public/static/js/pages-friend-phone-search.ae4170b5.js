(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-friend-phone-search"],{"051c":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("9752")),o=(n(i("1a0f")),n(i("3809"))),r=n(i("ec4e")),s={components:{phoneSearchList:a.default},data:function(){return{phones:[]}},onShow:function(){o.default.routeSonHook()},onLoad:function(e){var t=r.default.localData("friend_list");t&&(this.phones=t)},computed:{},methods:{}};t.default=s},"0c75":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".search-main[data-v-79fc177b]{height:100%;padding-bottom:%?20?%;background-color:#fff;overflow:hidden}.search-main-errtitle[data-v-79fc177b]{width:100%;height:%?92?%;line-height:%?92?%;font-size:%?32?%;padding:0 %?20?%;border-bottom:1px solid #e5e5e5}.header[data-v-79fc177b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:10px 15px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input-view[data-v-79fc177b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#e7e7e7;height:30px;border-radius:5px;padding:0 10px;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.input[data-v-79fc177b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 5px;height:24px;line-height:24px;font-size:16px}",""])},5670:function(e,t,i){"use strict";i.r(t);var n=i("eeed"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"65d4":function(e,t,i){"use strict";i.r(t);var n=i("051c"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},7271:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("phone-search-list",{attrs:{phones:e.phones}})],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},8034:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"input-view"},[i("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"输入要搜索的联系人",focus:!0},on:{input:function(t){t=e.$handleEvent(t),e.handleInput(t)}}})],1)],1),e.keyword?i("v-uni-view",{staticClass:"search-main"},[e.hasNoData?i("v-uni-view",{staticClass:"search-main-errtitle"},[e._v("无搜索结果")]):e._e(),i("v-uni-view",{staticClass:"uni-list"},e._l(e.list,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"none"},on:{click:function(i){i=e.$handleEvent(i),e.goDetails(t.user_id)}}},[i("v-uni-view",{staticClass:"uni-media-list"},[i("v-uni-view",{staticClass:"uni-media-list-logo"},[i("v-uni-image",{attrs:{src:e.staticPhoto+t.photo,"lazy-load":!0}})],1),i("v-uni-view",{staticClass:"uni-media-list-body"},[i("v-uni-view",{staticClass:"uni-list-cell-navigate"},[e._v(e._s(t.name))])],1)],1)],1)}),1)],1):e._e()],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},9752:function(e,t,i){"use strict";i.r(t);var n=i("8034"),a=i("5670");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("9e4d");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"79fc177b",null);t["default"]=s.exports},"9e4d":function(e,t,i){"use strict";var n=i("fdc3"),a=i.n(n);a.a},c69e:function(e,t,i){"use strict";i.r(t);var n=i("7271"),a=i("65d4");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"0a6873a4",null);t["default"]=s.exports},eeed:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("7f7f"),i("ac6a");var a=n(i("08a6")),o=(n(i("1a0f")),n(i("3809"))),r=n(i("ec4e")),s={components:{uniIcon:a.default},props:{phones:Array},data:function(){return{keyword:"",list:[],timer:null}},onShow:function(){o.default.routeSonHook()},onLoad:function(){},computed:{hasNoData:function(){return!this.list.length},staticPhoto:function(){return r.default.staticPhoto()}},watch:{keyword:function(){var e=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){for(var t=[],i=0,n=e.phones.length;i<n;i++)e.phones[i].data.forEach(function(i){i.name.indexOf(e.keyword)>-1&&t.push(i)});e.list=t},100):this.list=[]}},methods:{handleInput:function(e){this.keyword=e.detail.value},goDetails:function(e){uni.navigateTo({url:"../details/index?user_id="+e})}}};t.default=s},fdc3:function(e,t,i){var n=i("0c75");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("ebcecf68",n,!0,{sourceMap:!1,shadowMode:!1})}}]);