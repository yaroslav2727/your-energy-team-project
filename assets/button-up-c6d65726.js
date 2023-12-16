import{l as L,i as c}from"./vendor-c2f48a40.js";import{P as E,l as a,g as U,D as b,c as B,d as H,e as D,f as O}from"./quote-15d652ab.js";const W="/your-energy-team-project/assets/no-image-3f568e29.jpg";function T(t){return t.map(({imgURL:e,filter:s,name:n})=>`<li class="card-exercises" data-body-exercise='${n}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${N(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${j(n)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const j=t=>t[0].toUpperCase()+t.slice(1),N=t=>`${t?`${t}`:`${W}`}`;function F(t){return t.toFixed(1)}function _(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function R(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function A(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>5?`${e.slice(0,5)}...`:e}function Y(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>2?`${e.slice(0,2)}...`:e}function f(t){return t.map(({rating:e,name:s,burnedCalories:n,bodyPart:r,target:I,_id:q})=>`<li class="exercises-item" data-exercise-id="${q}">

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
					<span class="exercises-data-info">Burned calories:</span> ${R(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${A(r)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${Y(I)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const z=document.querySelector(".js-paginator-categories"),Q=document.querySelector(".js-paginator-exercises"),o=new E(z,{perPage:12}),d=new E(Q,{perPage:10}),u={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},h={[u.MUSCLES]:"muscles",[u.BODY_PARTS]:"bodypart",[u.EQUIPMENT]:"equipment"};let K=1,l=u.MUSCLES,x=null,$="",v=null;const C=se(1);o.on("aftermove",t=>{k(l,t.page)});d.on("aftermove",t=>{w({[h[l]]:x,search:$},t.page)});const i=document.querySelector(".cards"),V=document.querySelector(".filter-list"),X=document.querySelector(".input-filter-exercises"),y=document.querySelector(".filter-input-wrapper"),P=document.querySelector(".cat-title-span"),G=document.querySelector(".filter-icon-search"),M=document.querySelector(".filter-icon-close");V.addEventListener("click",J);i.addEventListener("click",g);y.addEventListener("input",L(Z,500));M.addEventListener("click",ee);a.create();U().then(t=>{const e=t.results;i.innerHTML=T(e),i.addEventListener("click",g),o.updateTotalItems(b*t.totalPages),o.goToPage(1),o.render()}).catch(t=>{console.error(t),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy()});function J(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),t.target.classList.add("active"),a.create(),k(e,K)}async function k(t,e){try{const s=await B(t,e),n=s.results,{filter:r}=n[0];l=r,P.innerHTML="",i.innerHTML=T(n),i.addEventListener("click",g),y.classList.add("isHidden"),o.updateTotalItems(b*s.totalPages),o.goToPage(e),o.render()}catch(s){console.error(s),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy()}}function g(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;P.innerHTML=`<span class="cat-title-text">/</span> ${e}`,x=e;const s={[h[l]]:e};a.create(),w(s,C.getPage())}async function w(t,e){try{const s=await H(t,e),n=s.results;v=n,i.innerHTML=f(n),te(),y.classList.remove("isHidden"),console.log("exercises",s),d.updateTotalItems(D*s.totalPages),d.goToPage(e),d.render()}catch(s){console.error(s),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),i.removeEventListener("click",g)}}function Z(t){const e=t.target.value.trim().toLowerCase();$=e;const s={[h[l]]:x,search:e};w(s,C.getPage());const n=v.filter(r=>r.name.includes(e));if(e.length!==0&&m(),e.length===0&&m(),n.length===0&&c.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),n.length!==0){const r=n.length===1?"exercise":"exercises";c.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${n.length} ${r}.`})}i.innerHTML=f(n)}function ee(){X.value="",i.innerHTML=f(v),m()}function m(){G.classList.toggle("isHidden"),M.classList.toggle("isHidden")}function te(){let t=window.innerWidth<768?860:930;const e=window.pageYOffset-t;window.scrollBy({top:-e,behavior:"smooth"})}function se(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}const p=document.querySelector(".subscribe-input"),ne=document.querySelector(".submit-btn");ne.addEventListener("click",re);function re(t){t.preventDefault();const e=p.value.trim(),s={email:e};a.create(),O(s).then(n=>{const r=n.message;c.show({position:"center",color:"green",message:`${r}`}),p.value=""}).catch(n=>{n.response.status===409&&(c.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),p.value="")}).finally(()=>{a.destroy()})}const S=document.querySelector(".js-button-up");window.addEventListener("scroll",L(ie,500));function ie(){window.pageYOffset>=1e3?S.classList.toggle("hidden",!1):S.classList.toggle("hidden",!0)}
//# sourceMappingURL=button-up-c6d65726.js.map
