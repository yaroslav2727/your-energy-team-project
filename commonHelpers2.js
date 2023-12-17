import{l as a,c as q,D as E,d as I,e as B,f as j}from"./assets/mobileModal-ab7c3073.js";import{l as N,i as g}from"./assets/vendor-c2f48a40.js";import{i as x,P as $}from"./assets/quote-47073b39.js";import"./assets/subscribeFormFooter-06ca0c24.js";const O="/your-energy-team-project/assets/no-image-fc78954b.jpg";function P(t){return t.map(({imgURL:e,filter:s,name:i})=>`<li class="card-exercises" data-body-exercise='${i}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${F(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${D(i)}</p>
      <p class="name-exercises">${s}</p>
  </div>
    </li>`).join("")}const D=t=>t[0].toUpperCase()+t.slice(1),F=t=>`${t?`${t}`:`${O}`}`;function _(t){return t.toFixed(1)}function R(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=25?`${e.slice(0,25)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function A(t,e){const s=String(t);if(window.innerWidth>=1440)return s.length>5?`${s.slice(0,5)}/...`:`${s} / ${e} min`;if(window.innerWidth>375&&window.innerWidth<1440)return s.length>=3?`${s.slice(0,3)}/...`:`${s}/${e}...`;if(window.innerWidth<=375)return s.length>=3?`${s.slice(0,3)}/...`:`${s}/${e}...`}function Y(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth>375&&window.innerWidth<1440)return e.length>6?`${e.slice(0,5)}...`:e;if(window.innerWidth<=375)return e.length>4?`${e.slice(0,4)}...`:e}function z(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>2?`${e.slice(0,2)}...`:e}function Q(t){return t.map(({rating:e,name:s,burnedCalories:i,bodyPart:w,target:U,_id:k,time:M})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${k}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${_(e)}</p>
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
			<h3 class="exercises-name">${R(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${A(i,M)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${Y(w)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${z(U)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const r=document.querySelector(".cards"),K=document.querySelector(".filter-list"),T=document.querySelector(".input-filter-exercises"),L=document.querySelector(".filter-input-wrapper"),C=document.querySelector(".cat-title-span"),p=document.querySelector(".filter-icon-search"),o=document.querySelector(".filter-icon-close"),m=document.querySelector(".js-pagination-mainPage"),c=document.querySelector(".js-pagination-filterPage"),V=document.querySelector(".js-paginator-categories"),X=document.querySelector(".js-paginator-exercises");K.addEventListener("click",J);r.addEventListener("click",f);L.addEventListener("input",N(Z,500));o.addEventListener("click",ee);const n=new $(V,{perPage:12}),l=new $(X,{perPage:10}),u={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},v={[u.MUSCLES]:"muscles",[u.BODY_PARTS]:"bodypart",[u.EQUIPMENT]:"equipment"};let G=1,d=u.MUSCLES,y=null,b="",H=null;const S=se(1);n.on("aftermove",t=>{W(d,t.page)});l.on("aftermove",t=>{h({[v[d]]:y,search:b},t.page)});a.create();q().then(t=>{const e=t.results;r.innerHTML=P(e),r.addEventListener("click",f),n.updateTotalItems(E*t.totalPages),n.goToPage(1),n.render()}).catch(t=>{console.error(t),g.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy(),m.classList.remove("isPaginationHidden"),c.classList.add("isPaginationHidden"),m.classList.add("pagination-cards")});function J(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),t.target.classList.add("active"),a.create(),W(e,G)}async function W(t,e){try{const s=await I(t,e),i=s.results,{filter:w}=i[0];d=w,C.innerHTML="",r.innerHTML=P(i),r.addEventListener("click",f),L.classList.add("isHidden"),n.updateTotalItems(E*s.totalPages),n.goToPage(e),n.render()}catch(s){console.error(s),g.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),p.classList.remove("isHidden"),o.classList.add("isHidden"),m.classList.remove("isPaginationHidden"),c.classList.add("isPaginationHidden"),c.classList.remove("pagination-cards")}}function f(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.closest(".card-exercises").dataset.bodyExercise;C.innerHTML=`<span class="cat-title-text">/</span> ${e}`,y=e;const s={[v[d]]:e};a.create(),h(s,S.getPage()),T.value=""}async function h(t,e){try{const s=await B(t,e),i=s.results;i.length===0&&g.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),H=i,r.innerHTML=Q(i),te(),L.classList.remove("isHidden"),l.updateTotalItems(j*s.totalPages),l.goToPage(e),l.render()}catch(s){console.error(s),g.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),r.removeEventListener("click",f),m.classList.add("isPaginationHidden"),c.classList.remove("isPaginationHidden"),c.classList.add("pagination-cards")}}function Z(t){const e=t.target.value.trim().toLowerCase();b=e;const s={[v[d]]:y,search:e};h(s,S.getPage()),e.length!==0&&(p.classList.add("isHidden"),o.classList.remove("isHidden")),e.length===0&&(p.classList.remove("isHidden"),o.classList.add("isHidden"))}function ee(){T.value="",h(H,S.getPage()),p.classList.remove("isHidden"),o.classList.add("isHidden")}function te(){let t=null;window.innerWidth>=375&&(t=850),window.innerWidth>768&&window.innerWidth<1440&&(t=1020),window.innerWidth>=1440&&(t=770);const e=window.scrollY-t;window.scrollBy({top:-e,behavior:"smooth"})}function se(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}
//# sourceMappingURL=commonHelpers2.js.map
