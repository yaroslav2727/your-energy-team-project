(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const d=document.querySelector(".change_theme--btn"),l=document.querySelector(".icon_sun"),n=document.querySelector(".icon_moon"),a=localStorage.getItem("theme"),o=document.querySelector("body"),m=document.querySelector(".mobile_menu--btn");document.querySelector(".mobile_menu");d.addEventListener("click",y);m.addEventListener("click",g);function y(){const s=document.body;s.classList.toggle("dark_mode"),d.classList.toggle("change_theme--btn-on"),s.classList.contains("dark_mode")?(localStorage.setItem("theme","light"),l.style.display="none",n.style.display="block"):(localStorage.setItem("theme","dark"),l.style.display="block",n.style.display="none")}a==="light"?(o.classList.add("dark_mode"),l.style.display="none",n.style.display="block"):(o.classList.remove("dark_mode"),l.style.display="block",n.style.display="none");function g(){document.body.classList.toggle("dark_mode"),m.classList.toggle("show")}o.classList.contains("dark_mode")?localStorage.setItem("theme","light"):localStorage.setItem("theme","dark");a==="light"?o.classList.add("dark_mode"):o.classList.remove("dark_mode");
//# sourceMappingURL=themeBackground-5adaeb1c.js.map
