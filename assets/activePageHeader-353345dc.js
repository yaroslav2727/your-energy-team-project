(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();const d=document.querySelector(".change_theme--btn"),s=document.querySelector(".icon_sun"),n=document.querySelector(".icon_moon"),y=localStorage.getItem("theme"),i=document.querySelector("body");d.addEventListener("click",f);function f(){const o=document.body;o.classList.toggle("dark_mode"),d.classList.toggle("change_theme--btn-on"),o.classList.contains("dark_mode")?(localStorage.setItem("theme","light"),s.style.display="none",n.style.display="block"):(localStorage.setItem("theme","dark"),s.style.display="block",n.style.display="none")}y==="light"?(i.classList.add("dark_mode"),s.style.display="none",n.style.display="block"):(i.classList.remove("dark_mode"),s.style.display="block",n.style.display="none");const a=localStorage.getItem("activePage"),h=document.querySelector(".pg-home"),p=document.querySelector(".pg-favorites"),v=document.querySelector(".header-item-link"),k=document.querySelector(".header-pages-item-link");u();h.addEventListener("click",()=>m("home"));p.addEventListener("click",()=>m("pg-favorites"));function u(){v.classList.toggle("header-pages-active",a==="home"),k.classList.toggle("header-pages-active",a==="pg-favorites")}function m(o){u(),localStorage.setItem("activePage",o)}
//# sourceMappingURL=activePageHeader-353345dc.js.map