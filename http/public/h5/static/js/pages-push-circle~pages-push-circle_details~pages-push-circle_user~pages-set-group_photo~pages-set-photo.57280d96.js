(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-push-circle~pages-push-circle_details~pages-push-circle_user~pages-set-group_photo~pages-set-photo"],{"1da1":function(t,e,i){"use strict";function n(t,e,i,n,a,r,s){try{var o=t[r](s),h=o.value}catch(l){return void i(l)}o.done?e(h):Promise.resolve(h).then(n,a)}function a(t){return function(){var e=this,i=arguments;return new Promise((function(a,r){var s=t.apply(e,i);function o(t){n(s,a,r,o,h,"next",t)}function h(t){n(s,a,r,o,h,"throw",t)}o(void 0)}))}}i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"42fa":function(t,e,i){"use strict";i.r(e);var n=i("5ab7"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},5829:function(t,e,i){"use strict";var n=i("e743"),a=i.n(n);a.a},"5ab7":function(t,e,i){"use strict";var n=i("4ea4");i("c975"),i("a15b"),i("ace4"),i("d3b7"),i("acd8"),i("e25e"),i("ac1f"),i("3ca3"),i("466d"),i("1276"),i("498a"),i("5cc6"),i("8a59"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),i("ddb0"),i("2b3d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=n(i("b85c")),s=50,o={name:"yq-avatar",data:function(){return{cvsStyleHeight:"0px",styleDisplay:"none",styleTop:"-10000px",prvTop:"-10000px",imgStyle:{},selStyle:{},showOper:!0,imgSrc:{imgSrc:""},btnWidth:"19%",btnDsp:"flex"}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",noTab:"",inner:"",quality:"",index:""},created:function(){var t=this;this.ctxCanvas=uni.createCanvasContext("avatar-canvas",this),this.ctxCanvasOper=uni.createCanvasContext("oper-canvas",this),this.ctxCanvasPrv=uni.createCanvasContext("prv-canvas",this),this.qlty=parseInt(this.quality)||.9,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate="false"===this.canRotate||"true"===this.inner?0:1,this.letScale="false"===this.canScale?0:1,this.isin="true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=this.minScale||.3,this.mxScale=this.maxScale||4,this.noBar="true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),this.noBar?(this.moreHeight=0,this.fWindowResize()):uni.showTabBar({complete:function(e){t.moreHeight="showTabBar:ok"===e.errMsg?50:0,t.fWindowResize()}})},methods:{fWindowResize:function(){var t=uni.getSystemInfoSync();this.platform=t.platform,this.pixelRatio=t.pixelRatio,this.windowWidth=t.windowWidth,this.drawTop=t.windowTop,this.windowHeight=t.windowHeight+t.windowBottom,this.cvsStyleHeight=this.windowHeight-s+"px",this.pxRatio=this.windowWidth/750;var e=this.avatarStyle;if(e&&!0!==e&&(e=e.trim())){e=e.split(";");var i,n={},a=(0,r.default)(e);try{for(a.s();!(i=a.n()).done;){var o=i.value;if(o){if(o=o.trim().split(":"),o[1].indexOf("upx")>=0){var h=o[1].trim().split(" ");for(var l in h)h[l]&&h[l].indexOf("upx")>=0&&(h[l]=parseFloat(h[l])*this.pxRatio+"px");o[1]=h.join(" ")}n[o[0].trim()]=o[1].trim()}}}catch(c){a.e(c)}finally{a.f()}this.imgStyle=n}this.expWidth&&(this.exportWidth=this.expWidth.indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.exportHeight=this.expHeight.indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.styleDisplay&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var t=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){t.fSelecting=!1}),500),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){uni.showLoading({mask:!0});var i=t.imgPath=e.tempFilePaths[0];uni.getImageInfo({src:i,success:function(e){if(t.imgWidth=e.width,t.imgHeight=e.height,t.path=i,!t.hasSel){var n=t.selStyle||{};if(!t.selWidth||!t.selHeight)return void uni.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var a=t.selWidth.indexOf("upx")>=0?parseInt(t.selWidth)*t.pxRatio:parseInt(t.selWidth),r=t.selHeight.indexOf("upx")>=0?parseInt(t.selHeight)*t.pxRatio:parseInt(t.selHeight);n.width=a+"px",n.height=r+"px",n.top=(t.windowHeight-r-s)/2+"px",n.left=(t.windowWidth-a)/2+"px",t.selStyle=n}t.noBar?t.fDrawInit(!0):uni.hideTabBar({complete:function(){t.fDrawInit(!0)}})},fail:function(){uni.showToast({title:"error3",duration:2e3})},complete:function(){uni.hideLoading()}})}}))},fUpload:function(){var t=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){t.fUploading=!1}),1e3);var e=this.selStyle,i=parseInt(e.left),n=parseInt(e.top),a=parseInt(e.width),r=parseInt(e.height),s=this.exportWidth||a,o=this.exportHeight||r;i*=this.pixelRatio,n*=this.pixelRatio,s=a,o=r,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:i,y:n,width:a,height:r,destWidth:s,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){if(t.exportWidth&&t.exportHeight){var i=t.ctxCanvas;s=t.exportWidth,o=t.exportHeight,i.drawImage(e,0,0,s,o),i.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:s,height:o,destWidth:s,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error0",duration:2e3})}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(t){uni.showToast({title:"error1",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fPrvUpload:function(){var t=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){t.fPrvUploading=!1}),1e3);var e=this.selStyle,i=(parseInt(e.width),parseInt(e.height),this.prvX),n=this.prvY,a=this.prvWidth,r=this.prvHeight,s=this.exportWidth||a,o=this.exportHeight||r;i*=this.pixelRatio,n*=this.pixelRatio,s=a,o=r,uni.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:i,y:n,width:a,height:r,destWidth:s,destHeight:o,canvasId:"prv-canvas",fileType:"png",quality:this.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){if(t.exportWidth&&t.exportHeight){var i=t.ctxCanvas;s=t.exportWidth,o=t.exportHeight,i.drawImage(e,0,0,s,o),i.draw(!1,(function(){uni.canvasToTempFilePath({x:0,y:0,width:s,height:o,destWidth:s,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:t.qlty,success:function(e){e=e.tempFilePath,t.btop(e).then((function(e){t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error0",duration:2e3})}})}))}else t.$emit("upload",{avatar:t.imgSrc,path:e,index:t.indx,data:t.rtn})}))},fail:function(){uni.showToast({title:"error_prv",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar()}},this)}},fDrawInit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.windowWidth,n=this.windowHeight,a=this.imgWidth,r=this.imgHeight,o=a/r,h=i-40,l=n-s-80,c=(this.pixelRatio,parseInt(this.selStyle.width)),p=parseInt(this.selStyle.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":o>1?this.fixWidth=1:this.fixHeight=1;break;case"short":o>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":c>p?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":c>p?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":o>1?this.lckWidth=1:this.lckHeight=1;break;case"short":o>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":c>p?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":c>p?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(h=c,l=h/o):this.fixHeight?(l=p,h=l*o):o<1?r<l?(h=a,l=r):(l=l,h=l*o):a<h?(h=a,l=r):(h=h,l=h/o),this.isin&&(this.scaleWidth=0,this.scaleHeight=0,h<c&&(h=c,l=h/o,this.lckHeight=0),l<p&&(l=p,h=l*o,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(i-h)/2,this.posHeight=(n-l-s)/2,this.useWidth=h,this.useHeight=l;var u=this.selStyle,d=parseInt(u.left),f=parseInt(u.top),v=parseInt(u.width),g=parseInt(u.height),x=(this.canvas,this.canvasOper,this.ctxCanvas),w=this.ctxCanvasOper;w.setLineWidth(3),w.setStrokeStyle("grey"),w.setGlobalAlpha(.4),w.setFillStyle("black"),w.strokeRect(d,f,v,g),w.fillRect(0,0,this.windowWidth,f),w.fillRect(0,f,d,g),w.fillRect(0,f+g,this.windowWidth,this.windowHeight-g-f-s),w.fillRect(d+v,f,this.windowWidth-v-d,g),w.setStrokeStyle("red"),w.moveTo(d+20,f),w.lineTo(d,f),w.lineTo(d,f+20),w.moveTo(d+v-20,f),w.lineTo(d+v,f),w.lineTo(d+v,f+20),w.moveTo(d+20,f+g),w.lineTo(d,f+g),w.lineTo(d,f+g-20),w.moveTo(d+v-20,f+g),w.lineTo(d+v,f+g),w.lineTo(d+v,f+g-20),w.stroke(),w.draw(!1,(function(){e&&(t.styleDisplay="flex",t.styleTop=t.drawTop+"px",x.setFillStyle("black"),t.fDrawImage())})),this.$emit("avtinit")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var e=this.ctxCanvas;e.fillRect(0,0,this.windowWidth,this.windowHeight-s),e.translate(this.posWidth+this.useWidth/2,this.posHeight+this.useHeight/2),e.scale(this.scaleSize,this.scaleSize),e.rotate(this.rotateDeg*Math.PI/180),e.drawImage(this.imgPath,-this.useWidth/2,-this.useHeight/2,this.useWidth,this.useHeight),e.draw(!1)}},fHideImg:function(){this.prvImg="",this.prvTop="-10000px",this.showOper=!0,this.prvImgData=null,this.target=null},fClose:function(){this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||uni.showTabBar()},fPreview:function(){var t=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){t.fPreviewing=!1}),1e3);var e=this.selStyle,i=parseInt(e.left),n=parseInt(e.top),a=parseInt(e.width),r=parseInt(e.height);i*=this.pixelRatio,n*=this.pixelRatio,uni.showLoading({mask:!0}),uni.canvasToTempFilePath({x:i,y:n,width:a,height:r,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(e){t.prvImgTmp=e=e.tempFilePath;var i=t.ctxCanvasPrv,n=t.windowWidth,a=parseInt(t.cvsStyleHeight),r=parseInt(t.selStyle.width),s=parseInt(t.selStyle.height),o=n-40,h=a-80,l=o/r,c=s*l;c<h?(r=o,s=c):(l=h/s,r*=l,s=h),i.setFillStyle("black"),i.fillRect(0,0,n,a),t.prvX=n=(n-r)/2,t.prvY=a=(a-s)/2,t.prvWidth=r,t.prvHeight=s,i.drawImage(e,n,a,r,s),i.draw(!1),t.btop(e).then((function(e){t.showOper=!1,t.prvTop=t.drawTop+"px"}))},fail:function(){uni.showToast({title:"error2",duration:2e3})},complete:function(){uni.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(e){var n=e.selWidth,a=e.selHeight,r=e.expWidth,o=e.expHeight,h=e.quality,l=e.canRotate,c=e.canScale,p=e.minScale,u=e.maxScale,d=e.stretch,f=e.inner,v=e.lock;r&&(this.exportWidth=r.indexOf("upx")>=0?parseInt(r)*this.pxRatio:parseInt(r)),o&&(this.exportHeight=o.indexOf("upx")>=0?parseInt(o)*this.pxRatio:parseInt(o)),this.letRotate="false"===l?0:1,this.letScale="false"===c?0:1,this.qlty=parseInt(h)||.9,this.mnScale=p||.3,this.mxScale=u||4,this.stc=d,this.isin="true"===f?1:0,this.lck=v,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),n&&a&&(n=n.indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n),a=a.indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a),this.selStyle.width=n+"px",this.selStyle.height=a+"px",this.selStyle.top=(this.windowHeight-a-s)/2+"px",this.selStyle.left=(this.windowWidth-n)/2+"px",this.hasSel=!0)}this.rtn=i,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var e=t.touches,i=e[0],n=e[1];if(this.touch0=i,this.touch1=n,n){var a=n.x-i.x,r=n.y-i.y;this.fgDistance=Math.sqrt(a*a+r*r)}},fMove:function(t){var e=t.touches,i=e[0],n=e[1];if(n){var a=n.x-i.x,r=n.y-i.y,s=Math.sqrt(a*a+r*r),o=.005*(s-this.fgDistance),h=this.scaleSize+o;do{if(!this.letScale)break;if(h<this.mnScale)break;if(h>this.mxScale)break;if(this.isin){var l=this.useWidth*h,c=this.useHeight*h,p=this.posWidth+this.useWidth/2,u=this.posHeight+this.useHeight/2,d=p-l/2,f=u-c/2,v=d+l,g=f+c,x=parseInt(this.selStyle.left),w=parseInt(this.selStyle.top),y=parseInt(this.selStyle.width),b=parseInt(this.selStyle.height);if(x<d||x+y>v||w<f||w+b>g)break;this.scaleWidth=(this.useWidth-l)/2,this.scaleHeight=(this.useHeight-c)/2}this.scaleSize=h}while(0);this.fgDistance=s,n.x!==i.x&&this.letRotate&&(a=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),r=(n.y-i.y)/(n.x-i.x),this.rotateDeg+=180*Math.atan((r-a)/(1+a*r))/Math.PI,this.touch0=i,this.touch1=n),this.fDrawImage()}else if(this.touch0){var m=i.x-this.touch0.x,k=i.y-this.touch0.y,S=this.posWidth+m,W=this.posHeight+k;if(this.isin){var H=this.useWidth*this.scaleSize,I=this.useHeight*this.scaleSize,T=S+this.useWidth/2,R=W+this.useHeight/2,P=T-H/2,L=R-I/2,D=P+H,C=L+I,E=parseInt(this.selStyle.left),_=parseInt(this.selStyle.top),O=parseInt(this.selStyle.width),j=parseInt(this.selStyle.height);!this.lckWidth&&Math.abs(m)<100&&(E>=P&&E+O<=D?this.posWidth=S:E<P?this.posWidth=E-this.scaleWidth:E+O>D&&(this.posWidth=E-(H-O)-this.scaleWidth)),!this.lckHeight&&Math.abs(k)<100&&(_>=L&&_+j<=C?this.posHeight=W:_<L?this.posHeight=_-this.scaleHeight:_+j>C&&(this.posHeight=_-(I-j)-this.scaleHeight))}else Math.abs(m)<100&&!this.lckWidth&&(this.posWidth=S),Math.abs(k)<100&&!this.lckHeight&&(this.posHeight=W);this.touch0=i,this.fDrawImage()}},fEnd:function(t){var e=t.touches,i=e&&e[0];e&&e[1];i?this.touch0=i:(this.touch0=null,this.touch1=null)},fGetImgData:function(){var t=this;return new Promise((function(e,i){var n=t.prvX,a=t.prvY,r=t.prvWidth,s=t.prvHeight;n*=t.pixelRatio,a*=t.pixelRatio,r*=t.pixelRatio,s*=t.pixelRatio,uni.canvasGetImageData({canvasId:"prv-canvas",x:n,y:a,width:r,height:s,success:function(t){e(t.data)},fail:function(t){i(t)}},t)}))},fColorChange:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a,r,s,o,h,l,c,p,u,d,f,v,g,x,w,y,b,m,k,S,W,H,I,T,R,P;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=Date.now(),!(n-e.prvTm<100)){i.next=3;break}return i.abrupt("return");case 3:if(e.prvTm=n,uni.showLoading({mask:!0}),e.prvImgData){i.next=11;break}return i.next=8,e.fGetImgData().catch((function(t){uni.showToast({title:"error_read",duration:2e3})}));case 8:if(e.prvImgData=i.sent){i.next=10;break}return i.abrupt("return");case 10:e.target=new Uint8ClampedArray(e.prvImgData.length);case 11:if(a=e.prvImgData,r=e.target,s=t.detail.value,0===s)r=a;else for(s=(s+100)/200,s<.005&&(s=0),s>.995&&(s=1),S=a.length-1;S>=0;S-=4)o=a[S-3]/255,h=a[S-2]/255,l=a[S-1]/255,w=Math.max(o,h,l),x=Math.min(o,h,l),f=w-x,w===x?p=0:w===o&&h>=l?p=(h-l)/f*60:w===o&&h<l?p=(h-l)/f*60+360:w===h?p=(l-o)/f*60+120:w===l&&(p=(o-h)/f*60+240),d=(w+x)/2,0===d||w===x?u=0:0<d&&d<=.5?u=f/(2*d):d>.5&&(u=f/(2-2*d)),a[S]&&(c=a[S]),s<.5?u=u*s/.5:s>.5&&(u=2*u+2*s-u*s/.5-1),0===u?o=h=l=Math.round(255*d):(d<.5?g=d*(1+u):d>=.5&&(g=d+u-d*u),v=2*d-g,y=p/360,b=y+1/3,m=y,k=y-1/3,W=function(t){return t<0?t+1:t>1?t-1:t},H=function(t){return t<1/6?v+6*(g-v)*t:t>=1/6&&t<.5?g:t>=.5&&t<2/3?v+6*(g-v)*(2/3-t):v},o=b=Math.round(255*H(W(b))),h=m=Math.round(255*H(W(m))),l=k=Math.round(255*H(W(k)))),c&&(r[S]=c),r[S-3]=o,r[S-2]=h,r[S-1]=l;I=e.prvX,T=e.prvY,R=e.prvWidth,P=e.prvHeight,e.ctxCanvasPrv.setFillStyle("black"),e.ctxCanvasPrv.fillRect(I,T,R,P),e.ctxCanvasPrv.draw(!0),I*=e.pixelRatio,T*=e.pixelRatio,R*=e.pixelRatio,P*=e.pixelRatio,uni.canvasPutImageData({canvasId:"prv-canvas",x:I,y:T,width:R,height:P,data:r,fail:function(){uni.showToast({title:"error_put",duration:2e3})},complete:function(){uni.hideLoading()}},e);case 22:case"end":return i.stop()}}),i)})))()},btop:function(t){return new Promise((function(e,i){var n=t.split(","),a=n[0].match(/:(.*?);/)[1],r=atob(n[1]),s=r.length,o=new Uint8Array(s);while(s--)o[s]=r.charCodeAt(s);return e((window.URL||window.webkitURL).createObjectURL(new Blob([o],{type:a})))}))}}};e.default=o},7101:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".my-canvas[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:100000;width:100%}.my-avatar[data-v-c65fc8ee]{width:%?150?%;height:%?150?%;border-radius:100%}.oper-canvas[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;left:0;z-index:100001;width:100%}.prv-canvas[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:200000;width:100%}.oper-wrapper[data-v-c65fc8ee]{height:50px;position:fixed!important;box-sizing:border-box;border:1px solid #f1f1f1;background:#fff;width:100%;left:0;bottom:0;z-index:100009;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.oper[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?10?% %?20?%;width:100%;height:100%;box-sizing:border-box;-webkit-align-self:center;align-self:center}.btn-wrapper[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n\n\nheight:50px;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn-wrapper uni-view[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.hover[data-v-c65fc8ee]{background:#f1f1f1;border-radius:6%}.clr-wrapper[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.clr-wrapper uni-view[data-v-c65fc8ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;border-radius:6%}.my-slider[data-v-c65fc8ee]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}",""]),t.exports=e},"7dec":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3b4d")),r={routeTabBarHook:function(){a.default.routeTool(),a.default.setStatusTips()},routeSonHook:function(){a.default.routeTool()}};e.default=r},"96cf":function(t,e){!function(e){"use strict";var i,n=Object.prototype,a=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",h=r.toStringTag||"@@toStringTag",l="object"===typeof t,c=e.regeneratorRuntime;if(c)l&&(t.exports=c);else{c=e.regeneratorRuntime=l?t.exports:{},c.wrap=b;var p="suspendedStart",u="suspendedYield",d="executing",f="completed",v={},g={};g[s]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==n&&a.call(w,s)&&(g=w);var y=W.prototype=k.prototype=Object.create(g);S.prototype=y.constructor=W,W.constructor=S,W[h]=S.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,W):(t.__proto__=W,h in t||(t[h]="GeneratorFunction")),t.prototype=Object.create(y),t},c.awrap=function(t){return{__await:t}},H(I.prototype),I.prototype[o]=function(){return this},c.AsyncIterator=I,c.async=function(t,e,i,n){var a=new I(b(t,e,i,n));return c.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},H(y),y[h]="Generator",y[s]=function(){return this},y.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},c.values=C,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=i),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],o=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var h=a.call(s,"catchLoc"),l=a.call(s,"finallyLoc");if(h&&l){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(h){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),L(i),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var a=n.arg;L(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=i),v}}}function b(t,e,i,n){var a=e&&e.prototype instanceof k?e:k,r=Object.create(a.prototype),s=new D(n||[]);return r._invoke=T(t,i,s),r}function m(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(n){return{type:"throw",arg:n}}}function k(){}function S(){}function W(){}function H(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function I(t){function e(i,n,r,s){var o=m(t[i],t,n);if("throw"!==o.type){var h=o.arg,l=h.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,r,s)}),(function(t){e("throw",t,r,s)})):Promise.resolve(l).then((function(t){h.value=t,r(h)}),(function(t){return e("throw",t,r,s)}))}s(o.arg)}var i;function n(t,n){function a(){return new Promise((function(i,a){e(t,n,i,a)}))}return i=i?i.then(a,a):a()}this._invoke=n}function T(t,e,i){var n=p;return function(a,r){if(n===d)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw r;return E()}i.method=a,i.arg=r;while(1){var s=i.delegate;if(s){var o=R(s,i);if(o){if(o===v)continue;return o}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===p)throw n=f,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=d;var h=m(t,e,i);if("normal"===h.type){if(n=i.done?f:u,h.arg===v)continue;return{value:h.arg,done:i.done}}"throw"===h.type&&(n=f,i.method="throw",i.arg=h.arg)}}}function R(t,e){var n=t.iterator[e.method];if(n===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,R(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=m(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(t){if(t){var e=t[s];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){while(++n<t.length)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=i,e.done=!0,e};return r.next=r}}return{next:E}}function E(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9a0e":function(t,e,i){"use strict";i.r(e);var n=i("e029"),a=i("42fa");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("5829");var s,o=i("f0c5"),h=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"c65fc8ee",null,!1,n["a"],s);e["default"]=h.exports},e029:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-image",{staticClass:"my-avatar",style:[t.imgStyle],attrs:{src:t.imgSrc.imgSrc},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fSelect.apply(void 0,arguments)}}}),i("v-uni-canvas",{staticClass:"my-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),i("v-uni-canvas",{staticClass:"oper-canvas",style:{top:t.styleTop,height:t.cvsStyleHeight},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.fStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.fMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.fEnd.apply(void 0,arguments)}}}),i("v-uni-canvas",{staticClass:"prv-canvas",style:{height:t.cvsStyleHeight,top:t.prvTop},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.fHideImg.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"oper-wrapper",style:{display:t.styleDisplay}},[i("v-uni-view",{staticClass:"oper"},[t.showOper?i("v-uni-view",{staticClass:"btn-wrapper"},[i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fSelect.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("重选")])],1),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fClose.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("关闭")])],1),i("v-uni-view",{style:{width:t.btnWidth,display:t.btnDsp},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fRotate.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("旋转")])],1),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fPreview.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("预览")])],1),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fUpload.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("上传")])],1)],1):i("v-uni-view",{staticClass:"clr-wrapper"},[i("v-uni-slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.fColorChange.apply(void 0,arguments)}}}),i("v-uni-view",{style:{width:t.btnWidth},attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fPrvUpload.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("上传")])],1)],1)],1)],1)],1)},r=[]},e743:function(t,e,i){var n=i("7101");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("70a1f27a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);