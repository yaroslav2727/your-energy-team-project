import"./assets/activePageHeader-08605ca9.js";import{a as m}from"./assets/vendor-a61d8330.js";const x="https://your-energy.b.goit.study/api",u=12,f=10,o=m.create({baseURL:x,params:{}}),v=async(e,s=1)=>(await o.get("/filters",{params:{filter:e,page:s,limit:u}})).data,h=async(e=1)=>(await o.get("/filters",{params:{filter:"Muscles",page:e,limit:u}})).data,y=async({bodypart:e,muscles:s,equipment:r,search:t},a=1)=>{const n=t&&!e&&!s&&!r?"":t;return(await o.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:r||"",keyword:n||"",page:a,limit:f}})).data};function p(e){return e.map(({imgURL:s,filter:r,name:t})=>`<li class="card-exercises" data-body-exercise='${t}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${s}') ;
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${t}</p>
      <p class="name-exercises">${r}</p>
  </div>
    </li>`).join("")}function b(e){return e.length>20?`${e.slice(0,20)}...`:e}function L(e){return`${Math.round(e)}.0`}function d(e){const s=e[0].toUpperCase()+e.slice(1);return s.length>3?`${s.slice(0,3)}...`:`${s.slice(0,3)}`}function w(e){return e.map(({rating:s,name:r,burnedCalories:t,bodyPart:a,target:n,_id:l})=>`<li class="exercises-item" data-exercise-id="${l}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${L(s)}</p>
				<span class="exercises-name-span">
				<svg class="exercises-icon-star-rating" width="16" height="16">
                  <use href="../img/icons.svg#icon-star-rating"></use>
                </svg>
			</span>
			</div>
			<div class="exercises-btn-wrapper">
				<button type="button" class="exercises-btn">Start</button>
				<span class="exercises-name-span">
					<svg class="exercises-icon-arrow" width="16" height="16">
						<use href="../img/icons.svg#icon-arrow"></use>
					</svg>
				</span>
			</div>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="../img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${b(r)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${t}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${d(a)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${d(n)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const i={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let E=1,g="muscles";const c=document.querySelector(".cards"),M=document.querySelector(".filter-list");M.addEventListener("click",k);c.addEventListener("click",$);i.create();h().then(e=>{const s=e.results;c.innerHTML=p(s)}).catch(e=>{console.error(e)}).finally(()=>{i.destroy()});function k(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),i.create(),v(s,E).then(t=>{const a=t.results,{filter:n}=a[0];g=n.toLowerCase(),c.innerHTML=p(a)}).catch(t=>{console.error(t)}).finally(()=>{i.destroy()})}function $(e){const s=e.target.closest(".card-exercises").dataset.bodyExercise,r={[g]:s,page:1};i.create(),y(r).then(t=>{const a=t.results;c.innerHTML=w(a)}).catch(t=>{console.error(t)}).finally(()=>{i.destroy()})}function S(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),t=document.body,a=()=>{const n=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",a),r.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}S();
//# sourceMappingURL=commonHelpers2.js.map
