(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d004599c"],{"02f4":function(t,e,n){var i=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var r,o,c=String(a(e)),s=i(n),u=c.length;return s<0||s>=u?t?"":void 0:(r=c.charCodeAt(s),r<55296||r>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):r:t?c.slice(s,s+2):o-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"11e9":function(t,e,n){var i=n("52a7"),a=n("4630"),r=n("6821"),o=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=r(t),e=o(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return a(!i.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),a=n("32e9"),r=n("79e5"),o=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),v=!r(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=v?!r(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e}):void 0;if(!v||!d||"replace"===t&&!l||"split"===t&&!f){var h=/./[p],b=n(o,p,""[t],function(t,e,n,i,a){return e.exec===s?v&&!a?{done:!0,value:h.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),g=b[0],k=b[1];i(String.prototype,t,g),a(RegExp.prototype,p,2==e?function(t,e){return k.call(t,this,e)}:function(t){return k.call(t,this)})}}},"2b88":function(t,e,n){"use strict";var i=n("d225"),a=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=(n("f559"),n("6b54"),n("bc3a")),u=n.n(s),l=n("db49"),f=n("5c96"),p=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,[{key:"request",value:function(t){var e=this,n=t.url,i=t.data,a=void 0===i?{}:i,r=t.method,o=void 0===r?"GET":r;return new Promise(function(t,i){e._request(n,t,i,a,o)})}},{key:"_request",value:function(t,e,n){var i=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"GET";u()({url:"/api"+t,method:r,headers:{"content-type":"application/json",appkey:l["a"].appkey},data:a}).then(function(t){var n=t.status.toString();n.startsWith("2")&&e(t.data)},function(t){n(),i._show_error(t)})}},{key:"_show_error",value:function(t){Object(f["Message"])({type:"error",title:"小提示",message:t,duration:2e3})}}]),t}();n.d(e,"a",function(){return v});var v=function(t){function e(){return Object(i["a"])(this,e),Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"getHotList",value:function(){return this.request({url:"/book/hot_list"})}},{key:"search",value:function(t,e){return this.request({url:"/book/search?summary=1&q=".concat(e,"&start=").concat(t)})}},{key:"getMyBookCount",value:function(){return this.request({url:"/book/favor/count"})}},{key:"getDetail",value:function(t){return this.request({url:"/book/".concat(t,"/detail")})}},{key:"getLikeStatus",value:function(t){return this.request({url:"/book/".concat(t,"/favor")})}},{key:"getComments",value:function(t){return this.request({url:"/book/".concat(t,"/short_comment")})}},{key:"postComment",value:function(t,e){return this.request({url:"/book/add/short_comment",method:"POST",data:{book_id:t,content:e}})}}]),e}(p)},"520a":function(t,e,n){"use strict";var i=n("0bfb"),a=RegExp.prototype.exec,r=String.prototype.replace,o=a,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(o=function(t){var e,n,o,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),s&&(e=f[c]),o=a.call(f,t),s&&o&&(f[c]=f.global?o.index+o[0].length:e),u&&o&&o.length>1&&r.call(o[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)}),o}),t.exports=o},5604:function(t,e,n){"use strict";var i=n("5d0a"),a=n.n(i);a.a},"5d0a":function(t,e,n){},"5dbc":function(t,e,n){var i=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var r,o=e.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&i(r)&&a&&a(t,r),t}},"5df3":function(t,e,n){"use strict";var i=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"84b1":function(t,e,n){},"8b97":function(t,e,n){var i=n("d3f4"),a=n("cb7c"),r=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},9093:function(t,e,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},"9d2b":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("d225"),a=n("b0b4"),r=n("308d"),o=n("6bb5"),c=n("4e2b"),s=n("751a"),u=function(t){function e(){return Object(i["a"])(this,e),Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"like",value:function(t,e,n){var i="like"==t?"like":"like/cancel";return this.request({url:i,method:"POST",data:{art_id:e,type:n}})}},{key:"getClassicLikeStatus",value:function(t,e){return this.request({url:"classic/".concat(e,"/").concat(t,"/favor")})}}]),e}(s["a"])},"9fd9":function(t,e,n){},a481:function(t,e,n){"use strict";var i=n("cb7c"),a=n("4bf8"),r=n("9def"),o=n("4588"),c=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(i,a){var r=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,r,a):n.call(String(r),i,a)},function(t,e){var a=h(n,t,this,e);if(a.done)return a.value;var f=i(t),p=String(this),v="function"===typeof e;v||(e=String(e));var g=f.global;if(g){var k=f.unicode;f.lastIndex=0}var m=[];while(1){var A=s(f,p);if(null===A)break;if(m.push(A),!g)break;var y=String(A[0]);""===y&&(f.lastIndex=c(p,r(f.lastIndex),k))}for(var S="",C=0,R=0;R<m.length;R++){A=m[R];for(var I=String(A[0]),G=u(l(o(A.index),p.length),0),E=[],w=1;w<A.length;w++)E.push(d(A[w]));var _=A.groups;if(v){var L=[I].concat(E,G,p);void 0!==_&&L.push(_);var T=String(e.apply(void 0,L))}else T=b(I,p,G,E,_,e);G>=C&&(S+=p.slice(C,G)+T,C=G+I.length)}return S+p.slice(C)}];function b(t,e,i,r,o,c){var s=i+t.length,u=r.length,l=v;return void 0!==o&&(o=a(o),l=p),n.call(c,l,function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=f(l/10);return 0===p?n:p<=u?void 0===r[p-1]?a.charAt(1):r[p-1]+a.charAt(1):n}c=r[l-1]}return void 0===c?"":c})}})},a6e0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkVEOTUzREE2QkNGMTFFOEI1MTdGQzU0NkNERTFGREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkVEOTUzREI2QkNGMTFFOEI1MTdGQzU0NkNERTFGREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUVDRDcwRDZCQ0YxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUVDRDcwRTZCQ0YxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg0b/fgAAAGuSURBVHjavJc/S8NAHIYvKiJaqAg6dVE6CaH4j64Fd7u461SxoN/DxcFJB/0OKlIcxG7i1KGLSBVBpRRdRKQOwfheeQPXmtZc/twPHkiv/d3zJndJWyH+1gQogQvQAi74AffgCKyI/pUHB+AOtNnb4lwlzt1VVs/rNXAIZsAVqIJnMAbmQRHMgUVQU/qmGG4dPIFThvgCGVAAqwyzDc780u8y8TnI9jnDIbAMhpUxKWiAd7DBz/hVlnO7dHVVkW/s+VyVQTVLeYPH/5VFh0tnp1KgyXQ6cnlGL5RnNPosupp0iy3gDLjsccrVfoduUQGXBuVeSWdFbpglcK3RuMNbrMAgYatKd2dDbGo0jvC2jFrS6crJvsG4RqNDopZ0tuUSPABbmC/pfJQH+1zLUYNy6XqlW+S4D8oGA5TpzHkDJ+DT0FLYdB2rgyl+ubwlHMKmo+Y9BdWaBvUEQ3jyOl2+lVSIQPKkQmjJ4w4RSh5XiEhy9afWbYgQnlz2TkZdw7RmCFWejmsXBw2RiDxoiETlfiFyyviCCXlviA/+Ecnz2IjcL4RxuRrihoSW/wowACLbfsGWfozrAAAAAElFTkSuQmCC"},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),o=n("fdef"),c="["+o+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,n){var a={},c=r(function(){return!!o[t]()||s[t]()!=s}),u=a[t]=c?e(p):o[t];n&&(a[n]=u),i(i.P+i.F*c,"String",a)},p=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},ab01:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag_container",on:{click:t.onTap}},[t._t("before"),n("span",[t._v(t._s(t.text))]),t._t("after")],2)},a=[],r={name:"tag",props:{text:String},methods:{onTap:function(){this.$emit("tapping",this.text)}}},o=r,c=(n("f9f0"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,"45755393",null);e["a"]=s.exports},ac6a:function(t,e,n){for(var i=n("cadf"),a=n("0d58"),r=n("2aba"),o=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),p=s.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=a(v),h=0;h<d.length;h++){var b,g=d[h],k=v[g],m=o[g],A=m&&m.prototype;if(A&&(A[l]||c(A,l,p),A[f]||c(A,f,g),s[g]=p,k))for(b in i)A[b]||r(A,b,i[b],!0)}},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b67b:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkZBN0RCRjQ2QkNFMTFFOEI1MTdGQzU0NkNERTFGREUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkZBN0RCRjU2QkNFMTFFOEI1MTdGQzU0NkNERTFGREUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE3REJGMjZCQ0UxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE3REJGMzZCQ0UxMUU4QjUxN0ZDNTQ2Q0RFMUZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuEuiQQAAAFvSURBVHjaxJfPSwJBGIbXIS8RGUhB905C/0l6jI4SBBFUdNJDh6BDdBIVK8HqUofO5X8S0SG6RpigKXis95NvYJn2x8y07rzwIIwM7zPO7s6a+Wy2PSWrYBtsgAJYBEPwDLqgA3pecBbAFijy3GXwBV7BE7gHI/+EjCJwAM7AvBeeMaiAC2V8EzTBSsTcPjhkkWmE78tLUI8pl6tsgQYtgMdOwENMOSUP7sCpHJjjT7La9cyyD7K8PRXDucfgHdzSFtCev2msPOmQ+JrgCy7tckoOlAVf7a5SEny7uMq64PvcVZZIYOBQYCT4CecqLyTw6FCgSwI34NtB+YTOFcGHxZEDAXoafsizgH6F8xTLr0FNPYyqKUlcgR3wowqkIUHle7I8SGCWEn/KwwRmIRFYHiWQpERoeZxAEhKR5ToC/5GILdcVsJHQKjcRMJHQLjcV0JEwKrcRiJIwLrcVCJKwKvf/L7CVkG+3VuWUXwEGAAICVy4ybmY6AAAAAElFTkSuQmCC"},bc9d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{click:t.onLike}},[n("img",{attrs:{src:t.like?t.yesSrc:t.noSrc,alt:""}}),n("span",[t._v(t._s(t.count))])])},a=[],r=(n("c5f6"),{name:"like",props:{likeStatus:Boolean,likeCount:Number,readonly:Boolean},data:function(){return{count:this.likeCount,like:this.likeStatus,yesSrc:n("b67b"),noSrc:n("a6e0")}},watch:{likeStatus:function(t,e){this.like=t},likeCount:function(t,e){this.count=t}},methods:{onLike:function(t){if(!this.readonly){var e=this.count,n=this.like;this.count=n?e-1:e+1,this.like=!n;var i=this.like?"like":"cancel";this.$emit("like",i)}}}}),o=r,c=(n("ce5b"),n("2877")),s=Object(c["a"])(o,i,a,!1,null,"55b81e6e",null);e["a"]=s.exports},c271:function(t,e,n){"use strict";var i=n("84b1"),a=n.n(i);a.a},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),o=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,p=n("aa77").trim,v="Number",d=i[v],h=d,b=d.prototype,g=r(n("2aeb")(b))==v,k="trim"in String.prototype,m=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=k?e.trim():p(e,3);var n,i,a,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var o,s=e.slice(2),u=0,l=s.length;u<l;u++)if(o=s.charCodeAt(u),o<48||o>a)return NaN;return parseInt(s,i)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(g?s(function(){b.valueOf.call(n)}):r(n)!=v)?o(new h(m(e)),n,d):m(e)};for(var A,y=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)a(h,A=y[S])&&!a(d,A)&&f(d,A,l(h,A));d.prototype=b,b.constructor=d,n("2aba")(i,v,d)}},ce5b:function(t,e,n){"use strict";var i=n("9fd9"),a=n.n(i);a.a},e3c1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book_com_container"},[n("div",{staticClass:"head"},[n("img",{attrs:{src:t.book.image,alt:"this a book image"}}),n("span",{staticClass:"title"},[t._v(t._s(t.book.title))]),n("span",{staticClass:"author"},[t._v(t._s(t.author))])]),n("div",{staticClass:"sub-container"},[t.comments.length>0?n("span",{staticClass:"headline"},[t._v("短评")]):n("span",{staticClass:"shadow"},[t._v("还没有短评")]),n("div",{staticClass:"comment_container"},t._l(t.comments,function(e,i){return n("Tag",{key:i,staticClass:"com_tag",attrs:{text:e.content},scopedSlots:t._u([{key:"after",fn:function(){return[n("span",{staticClass:"num"},[t._v(t._s("+"+e.nums))])]},proxy:!0}],null,!0)})}),1)]),n("div",{staticClass:"sub-container"},[n("span",{staticClass:"headline"},[t._v("内容简介")]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$options.filters.format(t.book.summary))}})]),n("div",{staticClass:"sub-container"},[n("span",{staticClass:"headline"},[t._v("书本信息")]),n("div",{staticClass:"detail-container"},[t._m(0),n("div",{staticClass:"vertical"},[n("span",[t._v(t._s(t.book.publisher))]),n("span",[t._v(t._s(t.book.pubdate))]),n("span",[t._v(t._s(t.book.pages))]),n("span",[t._v(t._s(t.book.price))]),n("span",[t._v(t._s(t.book.binding))])])])]),t.posting?n("div",{staticClass:"posting-container"},[n("div",{staticClass:"post-header"},[t.comments.length>0?n("span",[t._v("点击可以 +1")]):n("span",[t._v("暂无标签")]),n("span",{staticClass:"cancel",on:{click:t.onCancel}},[t._v("取消")])]),n("div",{staticClass:"comment_container"},t._l(t.limit(t.comments,3),function(e,i){return n("Tag",{key:i,staticClass:"com_tag",attrs:{text:e.content},on:{tapping:t.onTagPost},scopedSlots:t._u([{key:"after",fn:function(){return[n("span",{staticClass:"num"},[t._v(t._s("+"+e.nums))])]},proxy:!0}],null,!0)})}),1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"post",attrs:{type:"text",placeholder:"评论最多12字符"},domProps:{value:t.inputValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onInputPost(e)},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})]):n("div",{staticClass:"post-container"},[n("div",{staticClass:"post-fake",on:{click:t.onFakePost}},[n("span",[t._v("输入短评")])]),n("div",{staticClass:"like-container"},[n("Like",{staticClass:"like",attrs:{likeStatus:Boolean(t.likeStatus),likeCount:t.likeCount},on:{like:t.onLike}})],1)]),t.posting?n("MaskFull"):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vertical description"},[n("span",[t._v("出版社")]),n("span",[t._v("出版年")]),n("span",[t._v("页数")]),n("span",[t._v("定价")]),n("span",[t._v("装帧")])])}],r=(n("a481"),n("ac6a"),n("5df3"),n("2b88")),o=n("9d2b"),c=n("5c96"),s=n("ab01"),u=n("bc9d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mask_container"})},f=[],p={name:"maskfull"},v=p,d=(n("c271"),n("2877")),h=Object(d["a"])(v,l,f,!1,null,"31eae3d0",null),b=h.exports,g=new r["a"],k=new o["a"],m={name:"book-detail",data:function(){return{comments:[],book:{},author:"author",likeStatus:!1,likeCount:0,posting:!1,inputValue:""}},components:{Tag:s["a"],Like:u["a"],MaskFull:b},activated:function(){var t=this,e=c["Loading"].service({text:"loading... @ @"}),n=this.$route.params.bid,i=g.getDetail(n),a=g.getComments(n),r=g.getLikeStatus(n);Promise.all([i,a,r]).then(function(n){t.$nextTick(function(){e.close()}),t.book=n[0],t.author=n[0].author[0],t.comments=n[1].comments,t.likeStatus=n[2].like_status,t.likeCount=n[2].fav_nums})},methods:{onLike:function(t){k.like(t,this.book.id,400)},onFakePost:function(){this.posting=!0},onCancel:function(){this.posting=!1},limit:function(t,e){return t.slice(0,e)},onTagPost:function(t){this.onPost(t)},onInputPost:function(){this.onPost(this.inputValue)},onPost:function(t){var e=this,n=t;n&&(n.length>12?this.$notify.warning({title:"温馨小提示",duration:2e3,message:"最多只能填写12个字符 @ @"}):(this.$notify.success({title:"温馨小提示",duration:2e3,message:"信息提交中 请稍后"}),g.postComment(this.book.id,n).then(function(t){e.comments.unshift({content:n,nums:1}),e.posting=!1,e.$notify.success({title:"温馨小提示",duration:2e3,message:"信息添加成功 +1 @ @"})})))}},filters:{format:function(t){return t?t.replace(/\\n/g,"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"):"hello there is summary later"}}},A=m,y=(n("5604"),Object(d["a"])(A,i,a,!1,null,"6ac3d548",null));e["default"]=y.exports},f9f0:function(t,e,n){"use strict";var i=n("ff10"),a=n.n(i);a.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ff10:function(t,e,n){}}]);
//# sourceMappingURL=chunk-d004599c.bfd68ce0.js.map