(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{676:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e);var r=function t(e,n){if(!(this instanceof t))return new t(e,n);this.options=this.extend({noPrint:".no-print"},n),"string"==typeof e?this.dom=document.querySelector(e):(this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el),this.init()};r.prototype={init:function(){var t=this.getStyle()+this.getHtml();this.writeIframe(t)},extend:function(t,e){for(var n in e)t[n]=e[n];return t},getStyle:function(){for(var t="",e=document.querySelectorAll("style,link"),n=0;n<e.length;n++)t+=e[n].outerHTML;return t+"<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>"},getHtml:function(){for(var t=document.querySelectorAll("input"),e=document.querySelectorAll("textarea"),n=document.querySelectorAll("select"),o=0;o<t.length;o++)"checkbox"==t[o].type||"radio"==t[o].type?1==t[o].checked?t[o].setAttribute("checked","checked"):t[o].removeAttribute("checked"):(t[o].type,t[o].setAttribute("value",t[o].value));for(var r=0;r<e.length;r++)"textarea"==e[r].type&&(e[r].innerHTML=e[r].value);for(var i=0;i<n.length;i++)if("select-one"==n[i].type){var u=n[i].children;for(var c in u)"OPTION"==u[c].tagName&&(1==u[c].selected?u[c].setAttribute("selected","selected"):u[c].removeAttribute("selected"))}return this.wrapperRefDom(this.dom).outerHTML},wrapperRefDom:function(t){var e=null,n=t;if(!this.isInBody(n))return n;for(;n;){if(e){var o=n.cloneNode(!1);o.appendChild(e),e=o}else e=n.cloneNode(!0);n=n.parentElement}return e},writeIframe:function(t){var e,n,o=document.createElement("iframe"),r=document.body.appendChild(o);o.id="myIframe",o.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),e=r.contentWindow||r.contentDocument,(n=r.contentDocument||r.contentWindow.document).open(),n.write(t),n.close();var i=this;o.onload=function(){i.toPrint(e),setTimeout((function(){document.body.removeChild(o)}),100)}},toPrint:function(t){try{setTimeout((function(){t.focus();try{t.document.execCommand("print",!1,null)||t.print()}catch(e){t.print()}t.close()}),10)}catch(t){console.log("err",t)}},isInBody:function(t){return t!==document.body&&document.body.contains(t)},isDOM:"object"===("undefined"==typeof HTMLElement?"undefined":o(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===o(t)&&1===t.nodeType&&"string"==typeof t.nodeName}},e.default=r}]).default},835:function(t,e,n){"use strict";n.r(e);var o=n(676),r={methods:{$Print:n.n(o).a,handlePrint:function(){this.$Print("#all")},handlePrint1:function(){this.$Print("#test")}}},i=n(29),u=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"all"}},[n("h2",{staticStyle:{color:"red"},attrs:{id:"test"}},[t._v("我是标题1")]),t._v(" "),n("h2",{staticStyle:{color:"green"}},[t._v("我是标题2")]),t._v(" "),n("h2",{staticClass:"no-print"},[t._v("我会被忽略")]),t._v(" "),n("button",{on:{click:t.handlePrint}},[t._v("打印全部")]),t._v("  \n  "),n("button",{on:{click:t.handlePrint1}},[t._v("打印局部")])])}),[],!1,null,null,null);e.default=u.exports}}]);