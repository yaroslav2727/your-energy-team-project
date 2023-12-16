import{l as I,i as o}from"./vendor-c2f48a40.js";import{P as w,l as a,g as U,D as E,c as q,d as B,e as H,f as D}from"./quote-7acb295c.js";const O="/your-energy-team-project/assets/no-image-3f568e29.jpg";function L(t){return t.map(({imgURL:e,filter:s,name:r})=>`<li class="card-exercises" data-body-exercise='${r}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${N(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${W(r)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const W=t=>t[0].toUpperCase()+t.slice(1),N=t=>`${t?`${t}`:`${O}`}`;function j(t){return t.toFixed(1)}function F(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function _(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function R(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>5?`${e.slice(0,5)}...`:e}function A(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>2?`${e.slice(0,2)}...`:e}function h(t){return t.map(({rating:e,name:s,burnedCalories:r,bodyPart:n,target:M,_id:k})=>`<li class="exercises-item" data-exercise-id="${k}">

		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${j(e)}</p>
				<span class="exercises-name-span">
					<svg class="exercises-icon-star-rating" width="16" height="16">
					<use href="././img/icons.svg#icon-star-rating"></use>
					</svg>
				</span>
			</div>
			
			<button type="button" class="exercises-btn js-excercise-button" >Start					
				<svg class="exercises-icon-arrow" width="16" height="16">
					<use href="././img/icons.svg#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="././img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${F(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${_(r)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${R(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${A(M)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const Y=document.querySelector(".js-paginator-categories"),z=document.querySelector(".js-paginator-exercises"),c=new w(Y,{perPage:12}),u=new w(z,{perPage:10}),d={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},f={[d.MUSCLES]:"muscles",[d.BODY_PARTS]:"bodypart",[d.EQUIPMENT]:"equipment"};let Q=1,l=d.MUSCLES,x=null,T="",v=null;const b=te(1);c.on("aftermove",t=>{P(l,t.page)});u.on("aftermove",t=>{S({[f[l]]:x,search:T},t.page)});const i=document.querySelector(".cards"),K=document.querySelector(".filter-list"),V=document.querySelector(".input-filter-exercises"),y=document.querySelector(".filter-input-wrapper"),$=document.querySelector(".cat-title-span"),X=document.querySelector(".filter-icon-search"),C=document.querySelector(".filter-icon-close");K.addEventListener("click",G);i.addEventListener("click",g);y.addEventListener("input",I(J,500));C.addEventListener("click",Z);a.create();U().then(t=>{const e=t.results;i.innerHTML=L(e),i.addEventListener("click",g),c.updateTotalItems(E*t.totalPages),c.goToPage(1),c.render()}).catch(t=>{console.error(t),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy()});function G(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),t.target.classList.add("active"),a.create(),P(e,Q)}async function P(t,e){try{const s=await q(t,e),r=s.results,{filter:n}=r[0];l=n,$.innerHTML="",i.innerHTML=L(r),i.addEventListener("click",g),y.classList.add("isHidden"),c.updateTotalItems(E*s.totalPages),c.goToPage(e),c.render()}catch(s){console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy()}}function g(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;$.innerHTML=`<span class="cat-title-text">/</span> ${e}`,x=e;const s={[f[l]]:e};a.create(),S(s,b.getPage())}async function S(t,e){try{const s=await B(t,e),r=s.results;v=r,i.innerHTML=h(r),ee(),y.classList.remove("isHidden"),console.log("exercises",s),u.updateTotalItems(H*s.totalPages),u.goToPage(e),u.render()}catch(s){console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),i.removeEventListener("click",g)}}function J(t){const e=t.target.value.trim().toLowerCase();T=e;const s={[f[l]]:x,search:e};S(s,b.getPage());const r=v.filter(n=>n.name.includes(e));if(e.length!==0&&m(),e.length===0&&m(),r.length===0&&o.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),r.length!==0){const n=r.length===1?"exercise":"exercises";o.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${r.length} ${n}.`})}i.innerHTML=h(r)}function Z(){V.value="",i.innerHTML=h(v),m()}function m(){X.classList.toggle("isHidden"),C.classList.toggle("isHidden")}function ee(){let t=window.innerWidth<768?860:930;const e=window.pageYOffset-t;window.scrollBy({top:-e,behavior:"smooth"})}function te(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}const p=document.querySelector(".subscribe-input"),se=document.querySelector(".submit-btn");se.addEventListener("click",re);function re(t){t.preventDefault();const e=p.value.trim(),s={email:e};a.create(),D(s).then(r=>{const n=r.message;o.show({position:"center",color:"green",message:`${n}`}),p.value=""}).catch(r=>{r.response.status===409&&(o.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),p.value="")}).finally(()=>{a.destroy()})}
//# sourceMappingURL=subscribeFormFooter-58102914.js.map
