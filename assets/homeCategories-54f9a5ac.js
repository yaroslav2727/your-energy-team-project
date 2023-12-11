import{a as u}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=c(s);fetch(s.href,a)}})();const p="https://your-energy.b.goit.study/api",l=12,m=10,i=u.create({baseURL:p,params:{}}),g=async(t,e=1)=>(await i.get("/filters",{params:{filter:t,page:e,limit:l}})).data,f=async(t=1)=>(await i.get("/filters",{params:{filter:"Body parts",page:t,limit:l}})).data,y=async({bodypart:t,muscles:e,equipment:c,search:r},s=1)=>{const a=r&&!t&&!e&&!c?"":r;return(await i.get("/exercises",{params:{bodypart:t||"",muscles:e||"",equipment:c||"",keyword:a||"",page:s,limit:m}})).data};function d(t){return t.map(({imgURL:e,filter:c,name:r})=>`<li class="card" data-body-home='${r}'>
               <button type="button" class="cat-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${e}') ;
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${r}</p>
      <p class="name-exercises">${c}</p>
  </div>
    </li>`).join("")}function x(t){return t.map(({rating:e,name:c,burnedCalories:r,bodyPart:s,target:a,_id:n})=>`<li class="exercises-item" data-exercise-id="${n}">
		<div class="exercises-header">
			<div class="exercises-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">
					${e}
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
					${r} / 3 min
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Body part:</span>
					${s}
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Target:</span>
					${a}
				</li>
			</ul>
		</div>
	</li>`).join("")}let b=1;const o=document.querySelector(".cards"),h=document.querySelector(".filter-list");h.addEventListener("click",L);o.addEventListener("click",v);f().then(t=>{const e=t.results;console.log(e),o.innerHTML=d(e)}).catch(t=>{console.error(t)});function L(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;console.log(e),g(e,b).then(c=>{const r=c.results;console.log(r),o.innerHTML=d(r)}).catch(c=>{console.error(c)})}function v(t){let e=t.target.closest(".card").dataset.bodyHome;console.log(e),y({bodypart:e,page:1}).then(r=>{const s=r.results;console.log(s),o.innerHTML=x(s)}).catch(r=>{console.error(r)})}
//# sourceMappingURL=homeCategories-54f9a5ac.js.map
