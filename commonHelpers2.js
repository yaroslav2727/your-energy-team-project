import"./assets/activePageHeader-fbff274e.js";import{a as p}from"./assets/vendor-a61d8330.js";const u="https://your-energy.b.goit.study/api",l=12,m=10,i=p.create({baseURL:u,params:{}}),g=async(e,s=1)=>(await i.get("/filters",{params:{filter:e,page:s,limit:l}})).data,x=async(e=1)=>(await i.get("/filters",{params:{filter:"Body parts",page:e,limit:l}})).data,y=async({bodypart:e,muscles:s,equipment:a,search:t},n=1)=>{const r=t&&!e&&!s&&!a?"":t;return(await i.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:a||"",keyword:r||"",page:n,limit:m}})).data};function d(e){return e.map(({imgURL:s,filter:a,name:t})=>`<li class="card" data-body-home='${t}'>
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
    </li>`).join("")}function b(e){return e.map(({rating:s,name:a,burnedCalories:t,bodyPart:n,target:r,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
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
				${a}
			</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-desc-list">
				<li class="exercises-desc-item">
					<span class="exercises-desc-span">Burned calories:</span>
					${t} / 3 min
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Body part:</span>
					${n}
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Target:</span>
					${r}
				</li>
			</ul>
		</div>
	</li>`).join("")}let v=1;const c=document.querySelector(".cards"),f=document.querySelector(".filter-list");f.addEventListener("click",L);c.addEventListener("click",h);x().then(e=>{const s=e.results;console.log(s),c.innerHTML=d(s)}).catch(e=>{console.error(e)});function L(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;console.log(s),g(s,v).then(a=>{const t=a.results;console.log(t),c.innerHTML=d(t)}).catch(a=>{console.error(a)})}function h(e){let s=e.target.closest(".card").dataset.bodyHome;console.log(s),y({bodypart:s,page:1}).then(t=>{const n=t.results;console.log(n),c.innerHTML=b(n)}).catch(t=>{console.error(t)})}function E(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),t=document.body,n=()=>{const r=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",n),a.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}E();
//# sourceMappingURL=commonHelpers2.js.map
