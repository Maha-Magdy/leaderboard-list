(()=>{"use strict";var e,n,r,t,a,o,i,s,c,u,d,f,l,p,v={402:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(645),a=r.n(t)()((function(e){return e[1]}));a.push([e.id,'body {\r\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\r\n  padding: 50px; }\r\n\r\n.m-0 {\r\n  margin: 0; }\r\n\r\n.mb-25 {\r\n  margin-bottom: 25px; }\r\n\r\n.w-50 {\r\n  width: 50%; }\r\n\r\n.p-lr {\r\n  padding: 0 50px; }\r\n\r\nmain {\r\n  display: flex; }\r\n\r\n.recent-scores-header {\r\n  display: flex;\r\n  justify-content: space-between; }\r\n\r\n.d-block {\r\n  display: block; }\r\n',""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],d=o[u]||0,f="".concat(u," ").concat(d);o[u]=d+1;var l=r(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(n[l].references++,n[l].updater(p)):n.push({identifier:f,updater:a(p,t),references:1}),i.push(f)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);n[s].references--}for(var c=t(e,a),u=0;u<o.length;u++){var d=r(o[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t=r.css,a=r.media,o=r.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function h(e){var n=m[e];if(void 0!==n)return n.exports;var r=m[e]={id:e,exports:{}};return v[e](r,r.exports,h),r.exports}h.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return h.d(n,{a:n}),n},h.d=(e,n)=>{for(var r in n)h.o(n,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},h.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=h(379),n=h.n(e),r=h(795),t=h.n(r),a=h(569),o=h.n(a),i=h(565),s=h.n(i),c=h(216),u=h.n(c),d=h(589),f=h.n(d),l=h(402),(p={}).styleTagTransform=f(),p.setAttributes=s(),p.insert=o().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=u(),n()(l.Z,p),l.Z&&l.Z.locals&&l.Z.locals})();