import"./assets/activePageHeader-ca4c4f3c.js";import{a as g}from"./assets/vendor-a61d8330.js";const m="https://your-energy.b.goit.study/api",d=12,x=10,c=g.create({baseURL:m,params:{}}),f=async(e,s=1)=>(await c.get("/filters",{params:{filter:e,page:s,limit:d}})).data,v=async(e=1)=>(await c.get("/filters",{params:{filter:"Muscles",page:e,limit:d}})).data,h=async({bodypart:e,muscles:s,equipment:r,search:t},n=1)=>{const a=t&&!e&&!s&&!r?"":t;return(await c.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:r||"",keyword:a||"",page:n,limit:x}})).data};function u(e){return e.map(({imgURL:s,filter:r,name:t})=>`<li class="card-exercises" data-body-exercise='${t}'>
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
    </li>`).join("")}function b(e){return e.length>20?`${e.slice(0,20)}...`:e}function y(e){return`${Math.round(e)}.0`}function l(e){const s=e[0].toUpperCase()+e.slice(1);return s.length>3?`${s.slice(0,3)}...`:`${s.slice(0,3)}`}function L(e){return e.map(({rating:s,name:r,burnedCalories:t,bodyPart:n,target:a,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${y(s)}</p>
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
					${l(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${l(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}let w=1,p="muscles";const i=document.querySelector(".cards"),E=document.querySelector(".filter-list");E.addEventListener("click",M);i.addEventListener("click",k);v().then(e=>{const s=e.results;i.innerHTML=u(s)}).catch(e=>{console.error(e)});function M(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),f(s,w).then(t=>{const n=t.results,{filter:a}=n[0];p=a.toLowerCase(),i.innerHTML=u(n)}).catch(t=>{console.error(t)})}function k(e){const s=e.target.closest(".card-exercises").dataset.bodyExercise,r={[p]:s,page:1};h(r).then(t=>{const n=t.results;i.innerHTML=L(n)}).catch(t=>{console.error(t)})}function $(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),t=document.body,n=()=>{const a=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}$();
//# sourceMappingURL=commonHelpers2.js.map
