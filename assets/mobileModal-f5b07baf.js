import{a as L,l as b}from"./vendor-c2f48a40.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const w="https://your-energy.b.goit.study/api",_=12,S=9,E=10,v=8;let g=window.innerWidth<768?S:_,k=window.innerWidth<768?v:E;const a=L.create({baseURL:w,params:{}}),x=async(e,s=1)=>(await a.get("/filters",{params:{filter:e,page:s,limit:g}})).data,A=async(e=1)=>(await a.get("/filters",{params:{filter:"Muscles",page:e,limit:g}})).data,O=async()=>(await a.get("/quote")).data,F=async({bodypart:e,muscles:s,equipment:c,search:n},t=1)=>{const o=n&&!e&&!s&&!c?"":n;return(await a.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:c||"",keyword:o||"",page:t,limit:k}})).data},B=async e=>(await a.get(`/exercises/${e}`)).data,R=async(e,s)=>(await a.patch(`/exercises/${e}/rating`,s)).data,j=async e=>(await a.post("/subscription",e)).data,D={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};window.addEventListener("scroll",b(M,100));const I={element:document.querySelector(".js-button-up"),show(){window.pageYOffset>=800?this.element.classList.toggle("hidden",!1):this.element.classList.toggle("hidden",!0)},hide(){this.element.classList.toggle("hidden",!0)}};function M(){I.show()}const l=document.querySelector(".change_theme--btn"),d=document.querySelector(".icon_sun"),u=document.querySelector(".icon_moon"),h=localStorage.getItem("theme"),m=document.querySelector("body"),p=document.querySelector(".mobile_menu--btn");document.querySelector(".mobile_menu");l.addEventListener("click",f);p.addEventListener("click",f);function f(){const e=document.body;e.classList.toggle("dark_mode"),l.classList.toggle("change_theme--btn-on"),p.classList.toggle("show"),e.classList.contains("dark_mode")?(localStorage.setItem("theme","dark"),d.style.display="none",u.style.display="block"):(localStorage.setItem("theme","light"),d.style.display="block",u.style.display="none")}h==="dark"?(m.classList.add("dark_mode"),d.style.display="none",u.style.display="block",l.classList.add("change_theme--btn-on")):(m.classList.remove("dark_mode"),d.style.display="block",u.style.display="none",l.classList.remove("change_theme--btn-on"));h==="dark"?(m.classList.add("dark_mode"),p.classList.add("show")):(m.classList.remove("dark_mode"),p.classList.remove("show"));function T(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=document.body,t=()=>{const i=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!i),e.classList.toggle("is-open"),n.classList.toggle("menu-open"),n.classList.contains("menu-open")?r():y()},o=()=>{e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),n.classList.remove("menu-open"),y()},r=()=>{n.style.overflow="hidden"},y=()=>{n.style.overflow="visible"};s.addEventListener("click",t),c.addEventListener("click",t),n.addEventListener("click",i=>{i.target.closest(".js-menu-container")||i.target.closest(".js-open-menu")||e.classList.contains("is-open")&&o()}),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&o()})}T();export{_ as D,O as a,I as b,A as c,x as d,F as e,E as f,B as g,j as h,D as l,R as p};
//# sourceMappingURL=mobileModal-f5b07baf.js.map
