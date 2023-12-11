import{a as p}from"./vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(t){if(t.ep)return;t.ep=!0;const c=r(t);fetch(t.href,c)}})();const g="https://your-energy.b.goit.study/api",l=12,m=10,o=p.create({baseURL:g,params:{}}),f=async(e,s=1)=>(await o.get("/filters",{params:{filter:e,page:s,limit:l}})).data,y=async(e=1)=>(await o.get("/filters",{params:{filter:"Body parts",page:e,limit:l}})).data,x=async({bodypart:e,muscles:s,equipment:r,search:n},t=1)=>{const c=n&&!e&&!s&&!r?"":n;return(await o.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:r||"",keyword:c||"",page:t,limit:m}})).data};function d(e){return e.map(({imgURL:s,filter:r,name:n})=>`<li class="card">
               <button type="button" class="cat-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${s}') ;
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${n}</p>
      <p class="name-exercises">${r}</p>
  </div>
    </li>`).join("")}function h(e){return e.map(({rating:s,name:r,burnedCalories:n,bodyPart:t,target:c,_id:a})=>`<li class="exercises-item" data-exercise-id="${a}">
		<div class="exercises-header">
			<div class="exercises-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">
					${s}
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
				${r}
			</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-desc-list">
				<li class="exercises-desc-item">
					<span class="exercises-desc-span">Burned calories:</span>
					${n} / 3 min
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Body part:</span>
					${t}
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Target:</span>
					${c}
				</li>
			</ul>
		</div>
	</li>`).join("")}let u=1;const i=document.querySelector(".cards"),L=document.querySelector(".filter-list");L.addEventListener("click",b);i.addEventListener("click",v);y().then(e=>{const s=e.results;console.log(s),i.innerHTML=d(s)}).catch(e=>{console.error(e)});function b(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;console.log(s),f(s,u).then(r=>{const n=r.results;console.log(n),i.innerHTML=d(n)}).catch(r=>{console.error(r)})}function v(e){console.log(e.target);const s=e.target;x(s,u).then(r=>{const n=r.results;console.log(n),i.innerHTML=h(n)}).catch(r=>{console.error(r)})}
//# sourceMappingURL=homeCategories-4a3f9938.js.map
