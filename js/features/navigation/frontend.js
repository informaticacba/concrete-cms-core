!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=390)}({103:function(e,t,n){"use strict";n.r(t);n(104)},104:function(e,t){!function(e,t){document.addEventListener("DOMContentLoaded",(function(){window.innerWidth>992?document.querySelectorAll(".ccm-block-top-navigation-bar .nav-item").forEach((function(e){e.addEventListener("mouseover",(function(e){var t=this.querySelector("a[data-concrete-toggle]");if(null!=t){var n=t.nextElementSibling;t.classList.add("show"),n.classList.add("show")}})),e.addEventListener("mouseleave",(function(e){var t=this.querySelector("a[data-concrete-toggle]");if(null!=t){var n=t.nextElementSibling;t.classList.remove("show"),n.classList.remove("show")}}))})):t("a[data-concrete-toggle]").on("click",(function(e){t(this).hasClass("show")||(e.preventDefault(),t(this).next().addClass("show"),t(this).addClass("show"))}));var e=t("div[data-transparency=navbar]"),n=t("#ccm-toolbar");if(e.length){var a=e.find(".navbar");a.hasClass("fixed-top")&&n.length>0&&a.removeClass("fixed-top");var r=e.next();r.length&&r.is("[data-transparency=element]")&&0===n.length&&(e.addClass("transparency-enabled"),a.hasClass("fixed-top")&&t(window).scroll((function(){t(document).scrollTop()>5?e.removeClass("transparency-enabled"):e.addClass("transparency-enabled")}))),e.show();var o=e.find("[data-bs-toggle]");if(o.length){var s=t(o.attr("data-bs-target"));s.on("show.bs.collapse",(function(){e.addClass("transparency-temporarily-disabled")})),s.on("hidden.bs.collapse",(function(){e.removeClass("transparency-temporarily-disabled")}))}}var l=t(".ccm-block-top-navigation-bar .navbar");l.hasClass("fixed-top")&&(0!==e.length&&e.hasClass("transparency-enabled")||t(".ccm-page").css("padding-top",l.outerHeight()))}))}(window,$)},390:function(e,t,n){e.exports=n(103)}});