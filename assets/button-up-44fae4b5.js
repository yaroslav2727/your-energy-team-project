import{l as T,i as r}from"./vendor-c2f48a40.js";import{i as w,P as C,l as o,g as j,D as H,c as D,d as O,e as A,f as F}from"./quote-d432c5da.js";const N="/your-energy-team-project/assets/no-image-8b2e9aa6.jpg";function M(t){return t.map(({imgURL:e,filter:s,name:n})=>`<li class="card-exercises" data-body-exercise='${n}'>
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
    </li>`).join("")}const _=t=>t[0].toUpperCase()+t.slice(1),R=t=>`${t?`${t}`:`${N}`}`;function z(t){return t.toFixed(1)}function Y(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function Z(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function Q(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>5?`${e.slice(0,5)}...`:e}function K(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>2?`${e.slice(0,2)}...`:e}function y(t){return t.map(({rating:e,name:s,burnedCalories:n,bodyPart:i,target:f,_id:B})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${B}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${z(e)}</p>
				<span class="exercises-name-span">
					<svg class="exercises-icon-star-rating" width="16" height="16">
					<use href="${w}#icon-star-rating"></use>
					</svg>
				</span>
			</div>
			
			<button type="button" class="exercises-btn js-excercise-button" >Start					
				<svg class="exercises-icon-arrow" width="16" height="16">
					<use href="${w}#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="${w}#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${Y(s)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${Z(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${Q(i)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${K(f)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const V=document.querySelector(".js-paginator-categories"),X=document.querySelector(".js-paginator-exercises"),c=new C(V,{perPage:12}),g=new C(X,{perPage:10}),p={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},L={[p.MUSCLES]:"muscles",[p.BODY_PARTS]:"bodypart",[p.EQUIPMENT]:"equipment"};let G=1,d=p.MUSCLES,S=null,v="",E=null;const q=ae(1);c.on("aftermove",t=>{W(d,t.page)});g.on("aftermove",t=>{b({[L[d]]:S,search:v},t.page)});const a=document.querySelector(".cards"),J=document.querySelector(".filter-list"),k=document.querySelector(".input-filter-exercises"),P=document.querySelector(".filter-input-wrapper"),I=document.querySelector(".cat-title-span"),ee=document.querySelector(".filter-icon-search"),U=document.querySelector(".filter-icon-close"),m=document.querySelector(".js-pagination-mainPage"),l=document.querySelector(".js-pagination-filterPage");J.addEventListener("click",te);a.addEventListener("click",h);P.addEventListener("input",T(se,500));U.addEventListener("click",ne);o.create();j().then(t=>{const e=t.results;a.innerHTML=M(e),a.addEventListener("click",h),c.updateTotalItems(H*t.totalPages),c.goToPage(1),c.render()}).catch(t=>{console.error(t),r.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy(),m.classList.remove("isPaginationHidden"),l.classList.add("isPaginationHidden"),m.classList.add("pagination-cards")});function te(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),t.target.classList.add("active"),o.create(),W(e,G)}async function W(t,e){try{const s=await D(t,e),n=s.results,{filter:i}=n[0];d=i,I.innerHTML="",a.innerHTML=M(n),a.addEventListener("click",h),P.classList.add("isHidden"),c.updateTotalItems(H*s.totalPages),c.goToPage(e),c.render()}catch(s){console.error(s),r.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{o.destroy(),m.classList.remove("isPaginationHidden"),l.classList.add("isPaginationHidden"),l.classList.remove("pagination-cards")}}function h(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;I.innerHTML=`<span class="cat-title-text">/</span> ${e}`,S=e;const s={[L[d]]:e};o.create(),b(s,q.getPage()),k.value=""}async function b(t,e){try{const s=await O(t,e),n=s.results;E=n,a.innerHTML=y(n),ie(),P.classList.remove("isHidden"),g.updateTotalItems(A*s.totalPages),g.goToPage(e),g.render()}catch(s){console.error(s),r.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{o.destroy(),a.removeEventListener("click",h),m.classList.add("isPaginationHidden"),l.classList.remove("isPaginationHidden"),l.classList.add("pagination-cards")}}function se(t){const e=t.target.value.trim().toLowerCase();v=e;const s={[L[d]]:S,search:e};b(s,q.getPage()),console.log(v);const n=E.filter(i=>i.name.includes(e));if(e.length!==0&&x(),e.length===0&&x(),n.length===0&&r.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),n.length!==0){const i=n.length===1?"exercise":"exercises";r.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${n.length} ${i}.`})}a.innerHTML=y(n)}function ne(){k.value="",a.innerHTML=y(E),x()}function x(){ee.classList.toggle("isHidden"),U.classList.toggle("isHidden")}function ie(){let t=window.innerWidth<768?860:920;const e=window.scrollY-t;window.scrollBy({top:-e,behavior:"smooth"})}function ae(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}const u=document.querySelector(".subscribe-input"),re=document.querySelector(".submit-btn");re.addEventListener("click",oe);function oe(t){t.preventDefault();const e=u.value.trim();/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e)||(r.show({position:"center",color:"red",message:"Please enter a valid email address."}),u.value="");const n={email:e};o.create(),F(n).then(i=>{const f=i.message;r.show({position:"center",color:"green",message:`${f}`}),u.value=""}).catch(i=>{i.response.status===409&&(r.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),u.value="")}).finally(()=>{o.destroy()})}const $=document.querySelector(".js-button-up");window.addEventListener("scroll",T(ce,500));function ce(){window.pageYOffset>=1e3?$.classList.toggle("hidden",!1):$.classList.toggle("hidden",!0)}
//# sourceMappingURL=button-up-44fae4b5.js.map
