import{a as v}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}})();const b="https://your-energy.b.goit.study/api",p=12,L=10,d=v.create({baseURL:b,params:{}}),k=async(e,t=1)=>(await d.get("/filters",{params:{filter:e,page:t,limit:p}})).data,x=async(e=1)=>(await d.get("/filters",{params:{filter:"Body parts",page:e,limit:p}})).data,S=async({bodypart:e,muscles:t,equipment:c,search:o},s=1)=>{const n=o&&!e&&!t&&!c?"":o;return(await d.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:c||"",keyword:n||"",page:s,limit:L}})).data};function g(e){return e.map(({imgURL:t,filter:c,name:o})=>`<li class="card" data-body-home='${o}'>
               <button type="button" class="cat-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}') ;
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${o}</p>
      <p class="name-exercises">${c}</p>
  </div>
    </li>`).join("")}function E(e){return e.map(({rating:t,name:c,burnedCalories:o,bodyPart:s,target:n,_id:r})=>`<li class="exercises-item" data-exercise-id="${r}">
		<div class="exercises-header">
			<div class="exercises-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">
					${t}
				</p>
			</div>
			<button type="button" class="exercises-btn">
	  Start
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
			</span>
			<h3 class="exercises-name">
				${c}
			</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-desc-list">
				<li class="exercises-desc-item">
					<span class="exercises-desc-span">Burned calories:</span>
					${o} / 3 min
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Body part:</span>
					${s}
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Target:</span>
					${n}
				</li>
			</ul>
		</div>
	</li>`).join("")}let T=1;const l=document.querySelector(".cards"),q=document.querySelector(".filter-list");q.addEventListener("click",I);l.addEventListener("click",M);x().then(e=>{const t=e.results;console.log(t),l.innerHTML=g(t)}).catch(e=>{console.error(e)});function I(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;console.log(t),k(t,T).then(c=>{const o=c.results;console.log(o),l.innerHTML=g(o)}).catch(c=>{console.error(c)})}function M(e){let t=e.target.closest(".card").dataset.bodyHome;console.log(t),S({bodypart:t,page:1}).then(o=>{const s=o.results;console.log(s),l.innerHTML=E(s)}).catch(o=>{console.error(o)})}const y=document.querySelector(".change_theme--btn"),a=document.querySelector(".icon_sun"),i=document.querySelector(".icon_moon"),_=localStorage.getItem("theme"),u=document.querySelector("body");y.addEventListener("click",w);function w(){const e=document.body;e.classList.toggle("dark_mode"),y.classList.toggle("change_theme--btn-on"),e.classList.contains("dark_mode")?(localStorage.setItem("theme","light"),a.style.display="none",i.style.display="block"):(localStorage.setItem("theme","dark"),a.style.display="block",i.style.display="none")}_==="light"?(u.classList.add("dark_mode"),a.style.display="none",i.style.display="block"):(u.classList.remove("dark_mode"),a.style.display="block",i.style.display="none");const m=localStorage.getItem("activePage"),$=document.querySelector(".pg-home"),A=document.querySelector(".pg-favorites"),P=document.querySelector(".header-item-link"),B=document.querySelector(".header-pages-item-link");f();$.addEventListener("click",()=>h("home"));A.addEventListener("click",()=>h("pg-favorites"));function f(){P.classList.toggle("header-pages-active",m==="home"),B.classList.toggle("header-pages-active",m==="pg-favorites")}function h(e){f(),localStorage.setItem("activePage",e)}function O(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),o=document.body,s=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),e.classList.contains("is-open")?o.style.overflow="hidden":o.style.overflow="visible"};t.addEventListener("click",s),c.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}O();
//# sourceMappingURL=mobile-modal-4444e0ea.js.map
