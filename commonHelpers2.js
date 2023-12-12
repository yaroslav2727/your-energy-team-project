import"./assets/activePageHeader-353345dc.js";import{a as p}from"./assets/vendor-a61d8330.js";const g="https://your-energy.b.goit.study/api",d=12,m=10,o=p.create({baseURL:g,params:{}}),x=async(e,s=1)=>(await o.get("/filters",{params:{filter:e,page:s,limit:d}})).data,v=async(e=1)=>(await o.get("/filters",{params:{filter:"Body parts",page:e,limit:d}})).data,f=async({bodypart:e,muscles:s,equipment:a,search:t},r=1)=>{const n=t&&!e&&!s&&!a?"":t;return(await o.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:a||"",keyword:n||"",page:r,limit:m}})).data};function u(e){return e.map(({imgURL:s,filter:a,name:t})=>`<li class="card" data-body-exercise='${t}'>
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
    </li>`).join("")}function y(e){return e.map(({rating:s,name:a,burnedCalories:t,bodyPart:r,target:n,_id:l})=>`<li class="exercises-item container" data-exercise-id="${l}">
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
					${r}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${n}
				</li>
			</ul>
		</div>
	</li>`).join("")}let b=1,i="bodypart";const c=document.querySelector(".cards"),h=document.querySelector(".filter-list");h.addEventListener("click",L);c.addEventListener("click",w);v().then(e=>{const s=e.results;console.log(s),c.innerHTML=u(s)}).catch(e=>{console.error(e)});function L(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;console.log(s),document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),x(s,b).then(t=>{const r=t.results,{filter:n}=r[0];i=n.toLowerCase(),c.innerHTML=u(r)}).catch(t=>{console.error(t)})}function w(e){const s=e.target.closest(".card").dataset.bodyExercise;console.log("exercise",s),console.log("category",i);const a={[i]:s,page:1};f(a).then(t=>{const r=t.results;c.innerHTML=y(r)}).catch(t=>{console.error(t)})}function E(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),t=document.body,r=()=>{const n=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",r),a.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}E();
//# sourceMappingURL=commonHelpers2.js.map
