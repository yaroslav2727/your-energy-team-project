import{l as I,i as o}from"./vendor-c2f48a40.js";import{P as w,l as a,g as U,D as E,c as B,d as D,e as H,f as O}from"./quote-7acb295c.js";const W="/your-energy-team-project/assets/no-image-3f568e29.jpg";function L(t){return t.map(({imgURL:e,filter:s,name:r})=>`<li class="card-exercises" data-body-exercise='${r}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${j(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${N(r)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const N=t=>t[0].toUpperCase()+t.slice(1),j=t=>`${t?`${t}`:`${W}`}`;function F(t){return t.toFixed(1)}function _(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function R(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function A(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>5?`${e.slice(0,5)}...`:e}function Y(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>2?`${e.slice(0,2)}...`:e}function h(t){return t.map(({rating:e,name:s,burnedCalories:r,bodyPart:n,target:M,_id:q})=>`<li class="exercises-item" data-exercise-id="${q}">

		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${F(e)}</p>
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
			<h3 class="exercises-name">${_(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${R(r)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${A(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${Y(M)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const z=document.querySelector(".js-paginator-categories"),Q=document.querySelector(".js-paginator-exercises"),c=new w(z,{perPage:12}),u=new w(Q,{perPage:10}),d={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},f={[d.MUSCLES]:"muscles",[d.BODY_PARTS]:"bodypart",[d.EQUIPMENT]:"equipment"};let K=1,l=d.MUSCLES,y=null,b="",v=null;const T=se(1);c.on("aftermove",t=>{P(l,t.page)});u.on("aftermove",t=>{S({[f[l]]:y,search:b},t.page)});const i=document.querySelector(".cards"),V=document.querySelector(".filter-list"),X=document.querySelector(".input-filter-exercises"),x=document.querySelector(".filter-input-wrapper"),$=document.querySelector(".cat-title-span"),G=document.querySelector(".filter-icon-search"),C=document.querySelector(".filter-icon-close");V.addEventListener("click",J);i.addEventListener("click",g);x.addEventListener("input",I(Z,500));C.addEventListener("click",ee);a.create();U().then(t=>{const e=t.results;i.innerHTML=L(e),i.addEventListener("click",g),c.updateTotalItems(E*t.totalPages),c.goToPage(1),c.render()}).catch(t=>{console.error(t),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy()});function J(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),t.target.classList.add("active"),a.create(),P(e,K)}async function P(t,e){try{const s=await B(t,e),r=s.results,{filter:n}=r[0];l=n,$.innerHTML="",i.innerHTML=L(r),i.addEventListener("click",g),x.classList.add("isHidden"),c.updateTotalItems(E*s.totalPages),c.goToPage(e),c.render()}catch(s){console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy()}}function g(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;$.innerHTML=`<span class="cat-title-text">/</span> ${e}`,y=e;const s={[f[l]]:e};a.create(),S(s,T.getPage())}async function S(t,e){try{const s=await D(t,e),r=s.results;v=r,i.innerHTML=h(r),te(),x.classList.remove("isHidden"),console.log("exercises",s),u.updateTotalItems(H*s.totalPages),u.goToPage(e),u.render()}catch(s){console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),i.removeEventListener("click",g)}}function Z(t){const e=t.target.value.trim().toLowerCase();b=e;const s={[f[l]]:y,search:e};S(s,T.getPage());const r=v.filter(n=>n.name.includes(e));if(e.length!==0&&m(),e.length===0&&m(),r.length===0&&o.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),r.length!==0){const n=r.length===1?"exercise":"exercises";o.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${r.length} ${n}.`})}i.innerHTML=h(r)}function ee(){X.value="",i.innerHTML=h(v),m()}function m(){G.classList.toggle("isHidden"),C.classList.toggle("isHidden")}function te(){let t=window.innerWidth<768?860:930;const e=window.pageYOffset-t;window.scrollBy({top:-e,behavior:"smooth"})}function se(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}const p=document.querySelector(".subscribe-input"),re=document.querySelector(".submit-btn");re.addEventListener("click",ne);function ne(t){t.preventDefault();const e=p.value.trim(),s={email:e};a.create(),O(s).then(r=>{const n=r.message;o.show({position:"center",color:"green",message:`${n}`}),p.value=""}).catch(r=>{r.response.status===409&&(o.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),p.value="")}).finally(()=>{a.destroy()})}const ie=document.querySelector(".footer-privacy-policy"),k=document.querySelector(".policy-text");k.style.visibility="hidden";function ae(t){t.preventDefault(),k.style.visibility="visible"}ie.addEventListener("click",ae);
//# sourceMappingURL=privacy-policy-505bea37.js.map
