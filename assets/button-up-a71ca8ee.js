import{l as b,i as o}from"./vendor-c2f48a40.js";import{i as w,P as T,l as a,g as j,D as $,c as D,d as O,e as A,f as F}from"./quote-d432c5da.js";const N="/your-energy-team-project/assets/no-image-8b2e9aa6.jpg";function C(t){return t.map(({imgURL:e,filter:s,name:n})=>`<li class="card-exercises" data-body-exercise='${n}'>
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
    </li>`).join("")}const _=t=>t[0].toUpperCase()+t.slice(1),R=t=>`${t?`${t}`:`${N}`}`;function z(t){return t.toFixed(1)}function Y(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function Z(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function Q(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>5?`${e.slice(0,5)}...`:e}function K(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>10?`${e.slice(0,10)}...`:e;if(window.innerWidth<1440)return e.length>2?`${e.slice(0,2)}...`:e}function x(t){return t.map(({rating:e,name:s,burnedCalories:n,bodyPart:r,target:h,_id:B})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${B}">
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
					<span class="exercises-data-info">Body part:</span> ${Q(r)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${K(h)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const i=document.querySelector(".cards"),V=document.querySelector(".filter-list"),M=document.querySelector(".input-filter-exercises"),y=document.querySelector(".filter-input-wrapper"),q=document.querySelector(".cat-title-span"),X=document.querySelector(".filter-icon-search"),H=document.querySelector(".filter-icon-close"),m=document.querySelector(".js-pagination-mainPage"),l=document.querySelector(".js-pagination-filterPage"),G=document.querySelector(".js-paginator-categories"),J=document.querySelector(".js-paginator-exercises");V.addEventListener("click",te);i.addEventListener("click",f);y.addEventListener("input",b(se,500));H.addEventListener("click",ne);const c=new T(G,{perPage:12}),g=new T(J,{perPage:10}),p={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},L={[p.MUSCLES]:"muscles",[p.BODY_PARTS]:"bodypart",[p.EQUIPMENT]:"equipment"};let ee=1,d=p.MUSCLES,S=null,k="",I=null;const W=ae(1);c.on("aftermove",t=>{U(d,t.page)});g.on("aftermove",t=>{E({[L[d]]:S,search:k},t.page)});a.create();j().then(t=>{const e=t.results;i.innerHTML=C(e),i.addEventListener("click",f),c.updateTotalItems($*t.totalPages),c.goToPage(1),c.render()}).catch(t=>{console.error(t),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{a.destroy(),m.classList.remove("isPaginationHidden"),l.classList.add("isPaginationHidden"),m.classList.add("pagination-cards")});function te(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),t.target.classList.add("active"),a.create(),U(e,ee)}async function U(t,e){try{const s=await D(t,e),n=s.results,{filter:r}=n[0];d=r,q.innerHTML="",i.innerHTML=C(n),i.addEventListener("click",f),y.classList.add("isHidden"),c.updateTotalItems($*s.totalPages),c.goToPage(e),c.render()}catch(s){console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),m.classList.remove("isPaginationHidden"),l.classList.add("isPaginationHidden"),l.classList.remove("pagination-cards")}}function f(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;q.innerHTML=`<span class="cat-title-text">/</span> ${e}`,S=e;const s={[L[d]]:e};a.create(),E(s,W.getPage()),M.value=""}async function E(t,e){try{const s=await O(t,e),n=s.results;console.log("getExercises >>>",n),n.length===0&&o.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),I=n,i.innerHTML=x(n),ie(),y.classList.remove("isHidden"),g.updateTotalItems(A*s.totalPages),g.goToPage(e),g.render()}catch(s){console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}finally{a.destroy(),i.removeEventListener("click",f),m.classList.add("isPaginationHidden"),l.classList.remove("isPaginationHidden"),l.classList.add("pagination-cards")}}function se(t){const e=t.target.value.trim().toLowerCase();k=e;const s={[L[d]]:S,search:e};E(s,W.getPage()),e.length!==0&&v(),e.length===0&&v(),i.innerHTML=x(filteredData)}function ne(){M.value="",i.innerHTML=x(I),v()}function v(){X.classList.toggle("isHidden"),H.classList.toggle("isHidden")}function ie(){let t=null;window.innerWidth>=375&&(t=850),window.innerWidth>768&&window.innerWidth<1440&&(t=1020),window.innerWidth>=1440&&(t=770);const e=window.scrollY-t;window.scrollBy({top:-e,behavior:"smooth"})}function ae(t){let e=t;return{setPage(s){e=s,storage.setToStorage(e)},getPage(){return e}}}const u=document.querySelector(".subscribe-input"),re=document.querySelector(".submit-btn");re.addEventListener("click",oe);function oe(t){t.preventDefault();const e=u.value.trim();/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e)||(o.show({position:"center",color:"red",message:"Please enter a valid email address."}),u.value="");const n={email:e};a.create(),F(n).then(r=>{const h=r.message;o.show({position:"center",color:"green",message:`${h}`}),u.value=""}).catch(r=>{r.response.status===409&&(o.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),u.value="")}).finally(()=>{a.destroy()})}const P=document.querySelector(".js-button-up");window.addEventListener("scroll",b(ce,500));function ce(){window.pageYOffset>=1e3?P.classList.toggle("hidden",!1):P.classList.toggle("hidden",!0)}
//# sourceMappingURL=button-up-a71ca8ee.js.map
