import{l as b,i as r}from"./vendor-c2f48a40.js";import{P as T,l as o,g as j,D as $,c as D,d as W,e as O,f as A}from"./quote-f8065425.js";const F="/your-energy-team-project/assets/no-image-8b2e9aa6.jpg";function C(t){return t.map(({imgURL:e,filter:s,name:n})=>`<li class="card-exercises" data-body-exercise='${n}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${_(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${N(n)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const N=t=>t[0].toUpperCase()+t.slice(1),_=t=>`${t?`${t}`:`${F}`}`;function R(t){return t.toFixed(1)}function z(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function Y(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function Z(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>5?`${e.slice(0,5)}...`:e}function Q(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>2?`${e.slice(0,2)}...`:e}function v(t){return t.map(({rating:e,name:s,burnedCalories:n,bodyPart:i,target:h,_id:B})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${B}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${R(e)}</p>
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
			<h3 class="exercises-name">${z(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${Y(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${Z(i)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${Q(h)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const K=document.querySelector(".js-paginator-categories"),V=document.querySelector(".js-paginator-exercises"),c=new T(K,{perPage:12}),g=new T(V,{perPage:10}),p={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},x={[p.MUSCLES]:"muscles",[p.BODY_PARTS]:"bodypart",[p.EQUIPMENT]:"equipment"};let X=1,d=p.MUSCLES,y=null,H="",L=null;const M=ie(1);c.on("aftermove",t=>{U(d,t.page)});g.on("aftermove",t=>{E({[x[d]]:y,search:H},t.page)});const a=document.querySelector(".cards"),G=document.querySelector(".filter-list"),q=document.querySelector(".input-filter-exercises"),w=document.querySelector(".filter-input-wrapper"),k=document.querySelector(".cat-title-span"),J=document.querySelector(".filter-icon-search"),I=document.querySelector(".filter-icon-close"),S=document.querySelector(".js-pagination-mainPage"),l=document.querySelector(".js-pagination-filterPage");G.addEventListener("click",ee);a.addEventListener("click",m);w.addEventListener("input",b(te,500));I.addEventListener("click",se);o.create();j().then(t=>{const e=t.results;a.innerHTML=C(e),a.addEventListener("click",m),c.updateTotalItems($*t.totalPages),c.goToPage(1),c.render()}).catch(t=>{console.error(t),r.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy(),S.classList.remove("isPaginationHidden"),l.classList.add("isPaginationHidden")});function ee(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),t.target.classList.add("active"),o.create(),U(e,X)}async function U(t,e){try{const s=await D(t,e),n=s.results,{filter:i}=n[0];d=i,k.innerHTML="",a.innerHTML=C(n),a.addEventListener("click",m),w.classList.add("isHidden"),c.updateTotalItems($*s.totalPages),c.goToPage(e),c.render()}catch(s){console.error(s),r.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{o.destroy(),S.classList.remove("isPaginationHidden"),l.classList.add("isPaginationHidden"),l.classList.remove("pagination-cards")}}function m(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;k.innerHTML=`<span class="cat-title-text">/</span> ${e}`,y=e;const s={[x[d]]:e};o.create(),E(s,M.getPage()),q.value=""}async function E(t,e){try{const s=await W(t,e),n=s.results;L=n,a.innerHTML=v(n),ne(),w.classList.remove("isHidden"),g.updateTotalItems(O*s.totalPages),g.goToPage(e),g.render()}catch(s){console.error(s),r.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{o.destroy(),a.removeEventListener("click",m),S.classList.add("isPaginationHidden"),l.classList.remove("isPaginationHidden"),l.classList.add("pagination-cards")}}function te(t){const e=t.target.value.trim().toLowerCase();H=e;const s={[x[d]]:y,search:e};E(s,M.getPage());const n=L.filter(i=>i.name.includes(e));if(e.length!==0&&f(),e.length===0&&f(),n.length===0&&r.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),n.length!==0){const i=n.length===1?"exercise":"exercises";r.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${n.length} ${i}.`})}a.innerHTML=v(n)}function se(){q.value="",a.innerHTML=v(L),f()}function f(){J.classList.toggle("isHidden"),I.classList.toggle("isHidden")}function ne(){let t=window.innerWidth<768?860:920;const e=window.scrollY-t;window.scrollBy({top:-e,behavior:"smooth"})}function ie(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}const u=document.querySelector(".subscribe-input"),ae=document.querySelector(".submit-btn");ae.addEventListener("click",re);function re(t){t.preventDefault();const e=u.value.trim();/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e)||(r.show({position:"center",color:"red",message:"Please enter a valid email address."}),u.value="");const n={email:e};o.create(),A(n).then(i=>{const h=i.message;r.show({position:"center",color:"green",message:`${h}`}),u.value=""}).catch(i=>{i.response.status===409&&(r.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),u.value="")}).finally(()=>{o.destroy()})}const P=document.querySelector(".js-button-up");window.addEventListener("scroll",b(oe,500));function oe(){window.pageYOffset>=1e3?P.classList.toggle("hidden",!1):P.classList.toggle("hidden",!0)}
//# sourceMappingURL=button-up-356964ff.js.map
