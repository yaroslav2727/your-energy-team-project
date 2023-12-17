import{l as a,c as W,D as E,d as q,e as I,f as B}from"./assets/mobileModal-8a41b920.js";import{l as j,i as u}from"./assets/vendor-c2f48a40.js";import{i as x,P}from"./assets/quote-c99cfd6b.js";import"./assets/subscribeFormFooter-91a0fcdb.js";const D="/your-energy-team-project/assets/no-image-8b2e9aa6.jpg";function T(t){return t.map(({imgURL:e,filter:s,name:i})=>`<li class="card-exercises" data-body-exercise='${i}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${F(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${O(i)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const O=t=>t[0].toUpperCase()+t.slice(1),F=t=>`${t?`${t}`:`${D}`}`;function N(t){return t.toFixed(1)}function _(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function R(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function A(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>5?`${e.slice(0,5)}...`:e}function Y(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>2?`${e.slice(0,2)}...`:e}function z(t){return t.map(({rating:e,name:s,burnedCalories:i,bodyPart:w,target:M,_id:U})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${U}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${N(e)}</p>
				<span class="exercises-name-span">
					<svg class="exercises-icon-star-rating" width="16" height="16">
					<use href="${x}#icon-star-rating"></use>
					</svg>
				</span>
			</div>
			
			<button type="button" class="exercises-btn js-excercise-button" >Start					
				<svg class="exercises-icon-arrow" width="16" height="16">
					<use href="${x}#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="${x}#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${_(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${R(i)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${A(w)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${Y(M)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const r=document.querySelector(".cards"),Q=document.querySelector(".filter-list"),$=document.querySelector(".input-filter-exercises"),L=document.querySelector(".filter-input-wrapper"),C=document.querySelector(".cat-title-span"),p=document.querySelector(".filter-icon-search"),c=document.querySelector(".filter-icon-close"),m=document.querySelector(".js-pagination-mainPage"),o=document.querySelector(".js-pagination-filterPage"),K=document.querySelector(".js-paginator-categories"),V=document.querySelector(".js-paginator-exercises");Q.addEventListener("click",G);r.addEventListener("click",f);L.addEventListener("input",j(J,500));c.addEventListener("click",Z);const n=new P(K,{perPage:12}),d=new P(V,{perPage:10}),g={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},v={[g.MUSCLES]:"muscles",[g.BODY_PARTS]:"bodypart",[g.EQUIPMENT]:"equipment"};let X=1,l=g.MUSCLES,y=null,b="",H=null;const S=te(1);n.on("aftermove",t=>{k(l,t.page)});d.on("aftermove",t=>{h({[v[l]]:y,search:b},t.page)});a.create();W().then(t=>{const e=t.results;r.innerHTML=T(e),r.addEventListener("click",f),n.updateTotalItems(E*t.totalPages),n.goToPage(1),n.render()}).catch(t=>{console.error(t),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy(),m.classList.remove("isPaginationHidden"),o.classList.add("isPaginationHidden"),m.classList.add("pagination-cards")});function G(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),t.target.classList.add("active"),a.create(),k(e,X)}async function k(t,e){try{const s=await q(t,e),i=s.results,{filter:w}=i[0];l=w,C.innerHTML="",r.innerHTML=T(i),r.addEventListener("click",f),L.classList.add("isHidden"),n.updateTotalItems(E*s.totalPages),n.goToPage(e),n.render()}catch(s){console.error(s),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),p.classList.remove("isHidden"),c.classList.add("isHidden"),m.classList.remove("isPaginationHidden"),o.classList.add("isPaginationHidden"),o.classList.remove("pagination-cards")}}function f(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;C.innerHTML=`<span class="cat-title-text">/</span> ${e}`,y=e;const s={[v[l]]:e};a.create(),h(s,S.getPage()),$.value=""}async function h(t,e){try{const s=await I(t,e),i=s.results;console.log("getExercises >>>",i),i.length===0&&u.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),H=i,r.innerHTML=z(i),ee(),L.classList.remove("isHidden"),d.updateTotalItems(B*s.totalPages),d.goToPage(e),d.render()}catch(s){console.error(s),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),r.removeEventListener("click",f),m.classList.add("isPaginationHidden"),o.classList.remove("isPaginationHidden"),o.classList.add("pagination-cards")}}function J(t){const e=t.target.value.trim().toLowerCase();b=e;const s={[v[l]]:y,search:e};h(s,S.getPage()),e.length!==0&&(p.classList.add("isHidden"),c.classList.remove("isHidden")),e.length===0&&(p.classList.remove("isHidden"),c.classList.add("isHidden"))}function Z(){$.value="",h(H,S.getPage()),p.classList.remove("isHidden"),c.classList.add("isHidden")}function ee(){let t=null;window.innerWidth>=375&&(t=850),window.innerWidth>768&&window.innerWidth<1440&&(t=1020),window.innerWidth>=1440&&(t=770);const e=window.scrollY-t;window.scrollBy({top:-e,behavior:"smooth"})}function te(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}
//# sourceMappingURL=commonHelpers2.js.map
