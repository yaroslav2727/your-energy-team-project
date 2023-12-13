import"./assets/activePageHeader-1a989ebf.js";import{a as y,i as g}from"./assets/vendor-2dcf4ad5.js";const b="https://your-energy.b.goit.study/api",h=12,L=10,o=y.create({baseURL:b,params:{}}),w=async(e,s=1)=>(await o.get("/filters",{params:{filter:e,page:s,limit:h}})).data,E=async(e=1)=>(await o.get("/filters",{params:{filter:"Muscles",page:e,limit:h}})).data,T=async({bodypart:e,muscles:s,equipment:r,search:t},n=1)=>{const a=t&&!e&&!s&&!r?"":t;return(await o.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:r||"",keyword:a||"",page:n,limit:L}})).data},k=async(e,s)=>(await o.patch(`/exercises/${e}/rating`,s)).data;function x(e){return e.map(({imgURL:s,filter:r,name:t})=>`<li class="card-exercises" data-body-exercise='${t}'>
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
    </li>`).join("")}function C(e){return e.length>20?`${e.slice(0,20)}...`:e}function M(e){return`${Math.round(e)}.0`}function m(e){const s=e[0].toUpperCase()+e.slice(1);return s.length>3?`${s.slice(0,3)}...`:`${s.slice(0,3)}`}function S(e){return e.map(({rating:s,name:r,burnedCalories:t,bodyPart:n,target:a,_id:d})=>`<li class="exercises-item" data-exercise-id="${d}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${M(s)}</p>
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
			<h3 class="exercises-name">${C(r)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${t}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${m(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${m(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const c={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let $=1,v="muscles";const l=document.querySelector(".cards"),R=document.querySelector(".filter-list");R.addEventListener("click",q);l.addEventListener("click",_);c.create();E().then(e=>{const s=e.results;l.innerHTML=x(s)}).catch(e=>{console.error(e)}).finally(()=>{c.destroy()});function q(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),c.create(),w(s,$).then(t=>{const n=t.results,{filter:a}=n[0];v=a.toLowerCase(),l.innerHTML=x(n)}).catch(t=>{console.error(t)}).finally(()=>{c.destroy()})}function _(e){const s=e.target.closest(".card-exercises").dataset.bodyExercise,r={[v]:s,page:1};c.create(),T(r).then(t=>{const n=t.results;l.innerHTML=S(n)}).catch(t=>{console.error(t)}).finally(()=>{c.destroy()})}function B(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),t=document.body,n=()=>{const a=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}B();const D=document.querySelector("p[data-raiting]"),I=document.querySelector(".btn_close"),f=document.querySelector(".rating_form");let u=0,i={},N="64f389465ae26083f39b17a2";I.addEventListener("click",e=>{e.preventDefault(),console.log("close-rating-function")});f.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((t,n)=>{i[n]=t.trim()}),i.rate=u,i.rate<1){g.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}k(N,i)&&(g.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),f.reset(),console.log("Dont forgot close modal!!!"))});const A=[...document.getElementsByClassName("btn_star")];function U(e){const s="btn_star-active",r="btn_star",t=e.length;let n;e.map(a=>{a.onclick=()=>{if(n=e.indexOf(a),a.className===r)for(n;n>=0;--n)e[n].className=s;else for(n;n<t;++n)e[n].className=r;u=e.filter(p=>{if(p.className===s)return p}).length,D.textContent=`${u}.0`}})}U(A);
//# sourceMappingURL=commonHelpers2.js.map
