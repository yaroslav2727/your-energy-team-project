import"./assets/activePageHeader-8c7cb6b7.js";import{a as u}from"./assets/vendor-a61d8330.js";const p="https://your-energy.b.goit.study/api",l=12,g=10,c=u.create({baseURL:p,params:{}}),m=async(e,s=1)=>(await c.get("/filters",{params:{filter:e,page:s,limit:l}})).data,x=async(e=1)=>(await c.get("/filters",{params:{filter:"Body parts",page:e,limit:l}})).data,v=async({bodypart:e,muscles:s,equipment:a,search:t},n=1)=>{const r=t&&!e&&!s&&!a?"":t;return(await c.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:a||"",keyword:r||"",page:n,limit:g}})).data};function d(e){return e.map(({imgURL:s,filter:a,name:t})=>`<li class="card" data-body-home='${t}'>
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
      <p class="name-exercises">${a}</p>
  </div>
    </li>`).join("")}function h(e){return e.map(({rating:s,name:a,burnedCalories:t,bodyPart:n,target:r,_id:o})=>`<li class="exercises-item container" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${s}</p>
			</div>
			<div class="exercises-btn-wrapper">
				<button type="button" class="exercises-btn">Start</button>
				<span class="exercises-name-span">
					<svg class="exercises-icon-arrow" width="24" height="24">
						<use href="../img/icons.svg#icon-arrow"></use>
					</svg>
				</span>
			</div>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon" width="24" height="24">
                  <use href="../img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${a}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${t}/ ...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${n}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${r}
				</li>
			</ul>
		</div>
	</li>`).join("")}let y=1;const i=document.querySelector(".cards"),b=document.querySelector(".filter-list");b.addEventListener("click",f);i.addEventListener("click",L);x().then(e=>{const s=e.results;console.log(s),i.innerHTML=d(s)}).catch(e=>{console.error(e)});function f(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;console.log(s),m(s,y).then(a=>{const t=a.results;console.log(t),i.innerHTML=d(t)}).catch(a=>{console.error(a)})}function L(e){let s=e.target.closest(".card").dataset.bodyHome;console.log(s),v({bodypart:s,page:1}).then(t=>{const n=t.results;console.log(n),i.innerHTML=h(n)}).catch(t=>{console.error(t)})}function w(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),t=document.body,n=()=>{const r=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",n),a.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}w();
//# sourceMappingURL=commonHelpers2.js.map
