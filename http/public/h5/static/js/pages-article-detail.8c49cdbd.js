(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-detail"],{"0dc3":function(e,t,n){var a=n("a577");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("214f4156",a,!0,{sourceMap:!1,shadowMode:!1})},"0ebc":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("10ba")),i=a(n("7f23")),c={components:{},data:function(){return{id:0,info:{content:""},noData:'<p style="text-align:center;color:#666">详情加载中...</p>'}},onLoad:function(e){"id"in e&&(this.id=e.id),this.getDetail()},methods:{getDetail:function(){var e=this;i.default.getArticleDetail({article_id:this.id},(function(t){e.info=t,uni.setNavigationBarTitle({title:t.article_name})}))},getHtml:function(e){return(0,r.default)(e)}}};t.default=c},"10ba":function(e,t,n){"use strict";(function(e){n("c975"),n("13d5"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,i=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,c=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),o=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),l=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),u=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),d=h("script,style");function f(e,t){var n,f,h,p=[],m=e;p.last=function(){return this[this.length-1]};while(e){if(f=!0,p.last()&&d[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(e,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(n),""})),g("",p.last());else if(0==e.indexOf("\x3c!--")?(n=e.indexOf("--\x3e"),n>=0&&(t.comment&&t.comment(e.substring(4,n)),e=e.substring(n+3),f=!1)):0==e.indexOf("</")?(h=e.match(r),h&&(e=e.substring(h[0].length),h[0].replace(r,g),f=!1)):0==e.indexOf("<")&&(h=e.match(a),h&&(e=e.substring(h[0].length),h[0].replace(a,b),f=!1)),f){n=e.indexOf("<");var v=n<0?e:e.substring(0,n);e=n<0?"":e.substring(n),t.chars&&t.chars(v)}if(e==m)throw"Parse Error: "+e;m=e}function b(e,n,a,r){if(n=n.toLowerCase(),s[n])while(p.last()&&o[p.last()])g("",p.last());if(l[n]&&p.last()==n&&g("",n),r=c[n]||!!r,r||p.push(n),t.start){var d=[];a.replace(i,(function(e,t){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:u[t]?t:"";d.push({name:t,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(n,d,r)}}function g(e,n){if(n){for(a=p.length-1;a>=0;a--)if(p[a]==n)break}else var a=0;if(a>=0){for(var r=p.length-1;r>=a;r--)t.end&&t.end(p[r]);p.length=a}}g()}function h(e){for(var t={},n=e.split(","),a=0;a<n.length;a++)t[n[a]]=!0;return t}function p(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function m(e){return e.reduce((function(e,t){var n=t.value,a=t.name;return e[a]?e[a]=e[a]+" "+n:e[a]=n,e}),{})}function v(t){t=p(t);var n=[],a={node:"root",children:[]};return f(t,{start:function(e,t,r){var i={name:e};if(0!==t.length&&(i.attrs=m(t)),r){var c=n[0]||a;c.children||(c.children=[]),c.children.push(i)}else n.unshift(i)},end:function(t){var r=n.shift();if(r.name!==t&&e("error","invalid state: mismatch end tag"," at common/html-parser.js:304"),0===n.length)a.children.push(r);else{var i=n[0];i.children||(i.children=[]),i.children.push(r)}},chars:function(e){var t={type:"text",text:e};if(0===n.length)a.children.push(t);else{var r=n[0];r.children||(r.children=[]),r.children.push(t)}},comment:function(e){var t={node:"comment",text:e},a=n[0];a.children||(a.children=[]),a.children.push(t)}}),a.children}var b=v;t.default=b}).call(this,n("0de9")["log"])},"2d7e":function(e,t,n){"use strict";var a=n("0dc3"),r=n.n(a);r.a},"8a4f":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-rich-text",{attrs:{nodes:e.info.content?e.getHtml(e.info.content):"",space:"true",selectable:"true"}})],1)},i=[]},"8e07":function(e,t,n){"use strict";n.r(t);var a=n("8a4f"),r=n("e370");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("2d7e");var c,s=n("f0c5"),o=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"26f603fc",null,!1,a["a"],c);t["default"]=o.exports},a577:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".page uni-image[data-v-26f603fc]{max-width:100%}",""]),e.exports=t},e370:function(e,t,n){"use strict";n.r(t);var a=n("0ebc"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a}}]);