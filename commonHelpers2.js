import"./assets/activePageHeader-c1a9f651.js";import{a as g}from"./assets/vendor-a61d8330.js";const m="https://your-energy.b.goit.study/api",u=12,x=10,o=g.create({baseURL:m,params:{}}),f=async(e,s=1)=>(await o.get("/filters",{params:{filter:e,page:s,limit:u}})).data,v=async(e=1)=>(await o.get("/filters",{params:{filter:"Body parts",page:e,limit:u}})).data,h=async({bodypart:e,muscles:s,equipment:n,search:t},r=1)=>{const a=t&&!e&&!s&&!n?"":t;return(await o.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:n||"",keyword:a||"",page:r,limit:x}})).data};function p(e){return e.map(({imgURL:s,filter:n,name:t})=>`<li class="card" data-body-exercise='${t}'>
               <button type="button" class="cat-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${s}') ;
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${t}</p>
      <p class="name-exercises">${n}</p>
  </div>
    </li>`).join("")}function y(e){return e.length>21?`${e.slice(0,21)}...`:e}function b(e){return`${Math.round(e)}.0`}function d(e){return console.log("cutDataCardsInfo >>>",e),e.length>3?`${e.slice(0,3)}...`:`${e.slice(0,3)}...`}function L(e){return e.map(({rating:s,name:n,burnedCalories:t,bodyPart:r,target:a,_id:l})=>`<li class="exercises-item" data-exercise-id="${l}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${b(s)}</p>
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
			<h3 class="exercises-name">${y(n)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${t}/ ...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${d(r)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${d(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}let w=1,c="bodypart";const i=document.querySelector(".cards"),E=document.querySelector(".filter-list");E.addEventListener("click",k);i.addEventListener("click",M);v().then(e=>{const s=e.results;console.log(s),i.innerHTML=p(s)}).catch(e=>{console.error(e)});function k(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;console.log(s),document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),f(s,w).then(t=>{const r=t.results,{filter:a}=r[0];c=a.toLowerCase(),i.innerHTML=p(r)}).catch(t=>{console.error(t)})}function M(e){const s=e.target.closest(".card").dataset.bodyExercise;console.log("exercise",s),console.log("category",c);const n={[c]:s,page:1};h(n).then(t=>{const r=t.results;i.innerHTML=L(r)}).catch(t=>{console.error(t)})}function $(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),t=document.body,r=()=>{const a=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}$();
//# sourceMappingURL=commonHelpers2.js.map
