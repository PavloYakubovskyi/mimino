(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:25,freeMode:!0,breakpointsBase:"container",loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"}});new Swiper(".room-hero-swiper",{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".btn-next",prevEl:".btn-prev"}});new Swiper(".details-slider",{slidesPerView:"auto",spaceBetween:86,loop:!0,navigation:{nextEl:".details-btn-next",prevEl:".details-btn-prev"}});(function(i){typeof i.matches!="function"&&(i.matches=i.msMatchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||function(n){for(var r=this,t=(r.document||r.ownerDocument).querySelectorAll(n),e=0;t[e]&&t[e]!==r;)++e;return Boolean(t[e])}),typeof i.closest!="function"&&(i.closest=function(n){for(var r=this;r&&r.nodeType===1;){if(r.matches(n))return r;r=r.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var i=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");i.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+o+'"]');c.classList.add("active"),n.classList.add("active")})}),r.forEach(function(t){t.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(t){var e=t.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(t){t.target===t.currentTarget&&(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"))})});
