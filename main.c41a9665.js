parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".materials__slider-box"),t=document.querySelector(".materials__slider-list"),n=new Hammer(t),l=0;function i(){for(var t=0;t<e.length;t++)e[t].style.display=t===l?"block":"none"}function s(){if(window.innerWidth<768)i(),n.get("swipe").set({enable:!0});else{for(var t=0;t<e.length;t++)e[t].style.display="block";n.get("swipe").set({enable:!1})}}n.on("swipeleft swiperight",function(t){e[l].style.display="none","swipeleft"===t.type?l=(l+1)%e.length:"swiperight"===t.type&&(l=(l-1+e.length)%e.length),i()}),s(),window.addEventListener("resize",s)}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".materials__plus-minus"),t=document.querySelectorAll(".materials__slider-box");e.forEach(function(n,l){var i=n.querySelector(".materials__plus"),s=n.querySelector(".materials__minus"),o=t[l];i.addEventListener("click",function(){var n;n=l,t.forEach(function(t,l){if(l!==n){t.style.opacity="0",t.style.pointerEvents="none";var i=e[l].querySelector(".materials__plus"),s=e[l].querySelector(".materials__minus");i.style.display="block",s.style.display="none"}}),i.style.display="none",s.style.display="block",o.style.opacity="1",o.style.pointerEvents="all"}),s.addEventListener("click",function(){i.style.display="block",s.style.display="none",o.style.opacity="0",o.style.pointerEvents="none"})})});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.c41a9665.js.map