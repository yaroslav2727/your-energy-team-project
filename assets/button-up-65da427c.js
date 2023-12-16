import{l as b,i as c}from"./vendor-c2f48a40.js";import{P,l as a,g as j,D as T,c as D,d as W,e as O,f as F}from"./quote-16847300.js";const N="/your-energy-team-project/assets/no-image-8b2e9aa6.jpg";function $(t){return t.map(({imgURL:e,filter:s,name:n})=>`<li class="card-exercises" data-body-exercise='${n}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${R(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${_(n)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const _=t=>t[0].toUpperCase()+t.slice(1),R=t=>`${t?`${t}`:`${N}`}`;function A(t){return t.toFixed(1)}function Y(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function z(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function Q(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>5?`${e.slice(0,5)}...`:e}function K(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>2?`${e.slice(0,2)}...`:e}function h(t){return t.map(({rating:e,name:s,burnedCalories:n,bodyPart:i,target:U,_id:B})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${B}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${A(e)}</p>
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
			<h3 class="exercises-name">${Y(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${z(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${Q(i)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${K(U)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const V=document.querySelector(".js-paginator-categories"),X=document.querySelector(".js-paginator-exercises"),o=new P(V,{perPage:12}),d=new P(X,{perPage:10}),u={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},f={[u.MUSCLES]:"muscles",[u.BODY_PARTS]:"bodypart",[u.EQUIPMENT]:"equipment"};let G=1,l=u.MUSCLES,v=null,C="",x=null;const H=ie(1);o.on("aftermove",t=>{I(l,t.page)});d.on("aftermove",t=>{L({[f[l]]:v,search:C},t.page)});const r=document.querySelector(".cards"),J=document.querySelector(".filter-list"),M=document.querySelector(".input-filter-exercises"),y=document.querySelector(".filter-input-wrapper"),q=document.querySelector(".cat-title-span"),Z=document.querySelector(".filter-icon-search"),k=document.querySelector(".filter-icon-close"),S=document.querySelector(".js-pagination-mainPage"),w=document.querySelector(".js-pagination-filterPage");J.addEventListener("click",ee);r.addEventListener("click",g);y.addEventListener("input",b(te,500));k.addEventListener("click",se);a.create();j().then(t=>{const e=t.results;r.innerHTML=$(e),r.addEventListener("click",g),o.updateTotalItems(T*t.totalPages),o.goToPage(1),o.render()}).catch(t=>{console.error(t),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy(),S.classList.remove("isPaginationHidden"),w.classList.add("isPaginationHidden")});function ee(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),t.target.classList.add("active"),a.create(),I(e,G)}async function I(t,e){try{const s=await D(t,e),n=s.results,{filter:i}=n[0];l=i,q.innerHTML="",r.innerHTML=$(n),r.addEventListener("click",g),y.classList.add("isHidden"),o.updateTotalItems(T*s.totalPages),o.goToPage(e),o.render()}catch(s){console.error(s),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),S.classList.remove("isPaginationHidden"),w.classList.add("isPaginationHidden")}}function g(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;q.innerHTML=`<span class="cat-title-text">/</span> ${e}`,v=e;const s={[f[l]]:e};a.create(),L(s,H.getPage()),M.value=""}async function L(t,e){try{const s=await W(t,e),n=s.results;x=n,r.innerHTML=h(n),ne(),y.classList.remove("isHidden"),d.updateTotalItems(O*s.totalPages),d.goToPage(e),d.render()}catch(s){console.error(s),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),r.removeEventListener("click",g),S.classList.add("isPaginationHidden"),w.classList.remove("isPaginationHidden")}}function te(t){const e=t.target.value.trim().toLowerCase();C=e;const s={[f[l]]:v,search:e};L(s,H.getPage());const n=x.filter(i=>i.name.includes(e));if(e.length!==0&&m(),e.length===0&&m(),n.length===0&&c.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),n.length!==0){const i=n.length===1?"exercise":"exercises";c.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${n.length} ${i}.`})}r.innerHTML=h(n)}function se(){M.value="",r.innerHTML=h(x),m()}function m(){Z.classList.toggle("isHidden"),k.classList.toggle("isHidden")}function ne(){let t=window.innerWidth<768?860:920;const e=window.scrollY-t;window.scrollBy({top:-e,behavior:"smooth"})}function ie(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}const p=document.querySelector(".subscribe-input"),re=document.querySelector(".submit-btn");re.addEventListener("click",ae);function ae(t){t.preventDefault();const e=p.value.trim(),s={email:e};a.create(),F(s).then(n=>{const i=n.message;c.show({position:"center",color:"green",message:`${i}`}),p.value=""}).catch(n=>{n.response.status===409&&(c.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),p.value="")}).finally(()=>{a.destroy()})}const E=document.querySelector(".js-button-up");window.addEventListener("scroll",b(oe,500));function oe(){window.pageYOffset>=1e3?E.classList.toggle("hidden",!1):E.classList.toggle("hidden",!0)}
//# sourceMappingURL=button-up-65da427c.js.map
