import{l as a,c as W,D as S,d as q,e as B,f as j}from"./assets/mobileModal-73db8da4.js";import{l as D,i as g}from"./assets/vendor-c2f48a40.js";import{i as f,P as E}from"./assets/quote-08712c49.js";import"./assets/subscribeFormFooter-aa884ff9.js";const O="/your-energy-team-project/assets/no-image-8b2e9aa6.jpg";function P(t){return t.map(({imgURL:e,filter:s,name:i})=>`<li class="card-exercises" data-body-exercise='${i}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${N(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${F(i)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const F=t=>t[0].toUpperCase()+t.slice(1),N=t=>`${t?`${t}`:`${O}`}`;function _(t){return t.toFixed(1)}function R(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function A(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function Y(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>5?`${e.slice(0,5)}...`:e}function z(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>2?`${e.slice(0,2)}...`:e}function w(t){return t.map(({rating:e,name:s,burnedCalories:i,bodyPart:m,target:I,_id:U})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${U}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${_(e)}</p>
				<span class="exercises-name-span">
					<svg class="exercises-icon-star-rating" width="16" height="16">
					<use href="${f}#icon-star-rating"></use>
					</svg>
				</span>
			</div>
			
			<button type="button" class="exercises-btn js-excercise-button" >Start					
				<svg class="exercises-icon-arrow" width="16" height="16">
					<use href="${f}#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="${f}#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${R(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${A(i)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${Y(m)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${z(I)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const n=document.querySelector(".cards"),Q=document.querySelector(".filter-list"),T=document.querySelector(".input-filter-exercises"),x=document.querySelector(".filter-input-wrapper"),$=document.querySelector(".cat-title-span"),K=document.querySelector(".filter-icon-search"),C=document.querySelector(".filter-icon-close"),u=document.querySelector(".js-pagination-mainPage"),o=document.querySelector(".js-pagination-filterPage"),V=document.querySelector(".js-paginator-categories"),X=document.querySelector(".js-paginator-exercises");Q.addEventListener("click",J);n.addEventListener("click",p);x.addEventListener("input",D(Z,500));C.addEventListener("click",ee);const r=new E(V,{perPage:12}),l=new E(X,{perPage:10}),d={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},L={[d.MUSCLES]:"muscles",[d.BODY_PARTS]:"bodypart",[d.EQUIPMENT]:"equipment"};let G=1,c=d.MUSCLES,v=null,b="",H=null;const M=se(1);r.on("aftermove",t=>{k(c,t.page)});l.on("aftermove",t=>{y({[L[c]]:v,search:b},t.page)});a.create();W().then(t=>{const e=t.results;n.innerHTML=P(e),n.addEventListener("click",p),r.updateTotalItems(S*t.totalPages),r.goToPage(1),r.render()}).catch(t=>{console.error(t),g.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy(),u.classList.remove("isPaginationHidden"),o.classList.add("isPaginationHidden"),u.classList.add("pagination-cards")});function J(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),t.target.classList.add("active"),a.create(),k(e,G)}async function k(t,e){try{const s=await q(t,e),i=s.results,{filter:m}=i[0];c=m,$.innerHTML="",n.innerHTML=P(i),n.addEventListener("click",p),x.classList.add("isHidden"),r.updateTotalItems(S*s.totalPages),r.goToPage(e),r.render()}catch(s){console.error(s),g.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),u.classList.remove("isPaginationHidden"),o.classList.add("isPaginationHidden"),o.classList.remove("pagination-cards")}}function p(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;$.innerHTML=`<span class="cat-title-text">/</span> ${e}`,v=e;const s={[L[c]]:e};a.create(),y(s,M.getPage()),T.value=""}async function y(t,e){try{const s=await B(t,e),i=s.results;console.log("getExercises >>>",i),i.length===0&&g.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),H=i,n.innerHTML=w(i),te(),x.classList.remove("isHidden"),l.updateTotalItems(j*s.totalPages),l.goToPage(e),l.render()}catch(s){console.error(s),g.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),n.removeEventListener("click",p),u.classList.add("isPaginationHidden"),o.classList.remove("isPaginationHidden"),o.classList.add("pagination-cards")}}function Z(t){const e=t.target.value.trim().toLowerCase();b=e;const s={[L[c]]:v,search:e};y(s,M.getPage()),e.length!==0&&h(),e.length===0&&h(),n.innerHTML=w(filteredData)}function ee(){T.value="",n.innerHTML=w(H),h()}function h(){K.classList.toggle("isHidden"),C.classList.toggle("isHidden")}function te(){let t=null;window.innerWidth>=375&&(t=850),window.innerWidth>768&&window.innerWidth<1440&&(t=1020),window.innerWidth>=1440&&(t=770);const e=window.scrollY-t;window.scrollBy({top:-e,behavior:"smooth"})}function se(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}
//# sourceMappingURL=commonHelpers2.js.map
