import{l as b,i as o}from"./vendor-c2f48a40.js";import{l as c,g as L,c as $,d as S,e as k}from"./quote-5de1291e.js";const C="/your-energy-team-project/assets/no-image-3f568e29.jpg";function m(t){return t.map(({imgURL:e,filter:i,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${T(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${E(s)}</p>
      <p class="name-exercises">${i}</p>
  </div>
    </li>`).join("")}const E=t=>t[0].toUpperCase()+t.slice(1),T=t=>`${t?`${t}`:`${C}`}`;function q(t){return t.toFixed(1)}function H(t){const e=t[0].toUpperCase()+t.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function W(t){const e=String(t);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function B(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>5?`${e.slice(0,5)}...`:e}function M(t){const e=t[0].toUpperCase()+t.slice(1);return e.length>2?`${e.slice(0,2)}...`:e}function p(t){return t.map(({rating:e,name:i,burnedCalories:s,bodyPart:r,target:l,_id:w})=>`<li class="exercises-item" data-exercise-id="${w}">

		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${q(e)}</p>
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
			<h3 class="exercises-name">${H(i)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${W(s)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${B(r)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${M(l)}
				</li>
			</ul>
		</div>
	</li>`).join("")}let O=1,f="muscles",g=null;const n=document.querySelector(".cards"),U=document.querySelector(".filter-list"),D=document.querySelector(".input-filter-exercises"),h=document.querySelector(".filter-input-wrapper"),v=document.querySelector(".cat-title-span"),N=document.querySelector(".filter-icon-search"),y=document.querySelector(".filter-icon-close");U.addEventListener("click",j);n.addEventListener("click",a);h.addEventListener("input",b(P,500));y.addEventListener("click",I);c.create();L().then(t=>{const e=t.results;n.innerHTML=m(e),n.addEventListener("click",a)}).catch(t=>{console.error(t),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy()});function j(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),t.target.classList.add("active"),c.create(),$(e,O).then(s=>{const r=s.results,{filter:l}=r[0];f=l.toLowerCase(),v.innerHTML="",n.innerHTML=m(r),n.addEventListener("click",a),h.classList.add("isHidden")}).catch(s=>{console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy()})}function a(t){const e=t.target.closest(".card-exercises").dataset.bodyExercise;v.innerHTML=`<span class="cat-title-text">/</span> ${e}`;const i={[f]:e,page:1};c.create(),S(i).then(s=>{const r=s.results;g=r,n.innerHTML=p(r),F(),h.classList.remove("isHidden")}).catch(s=>{console.error(s),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy(),n.removeEventListener("click",a)})}function P(t){const e=t.target.value.trim().toLowerCase(),i=g.filter(s=>s.name.includes(e));if(e.length!==0&&u(),e.length===0&&u(),i.length===0&&o.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),i.length!==0){const s=i.length===1?"exercise":"exercises";o.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${i.length} ${s}.`})}n.innerHTML=p(i)}function I(){D.value="",n.innerHTML=p(g),u()}function u(){N.classList.toggle("isHidden"),y.classList.toggle("isHidden")}function F(){let t=window.innerWidth<768?860:930;const e=window.pageYOffset-t;window.scrollBy({top:-e,behavior:"smooth"})}const d=document.querySelector(".subscribe-input"),z=document.querySelector(".submit-btn");z.addEventListener("click",A);function A(t){t.preventDefault();const e=d.value.trim(),i={email:e};c.create(),k(i).then(s=>{const r=s.message;o.show({position:"center",color:"green",message:`${r}`}),d.value=""}).catch(s=>{s.response.status===409&&(o.show({position:"center",color:"red",message:`this email ${e} is subscribs`}),d.value="")}).finally(()=>{c.destroy()})}const K=document.querySelector(".footer-privacy-policy"),x=document.querySelector(".policy-text");x.style.visibility="hidden";function R(t){t.preventDefault(),x.style.visibility="visible"}K.addEventListener("click",R);
//# sourceMappingURL=privacy-policy-83c573dc.js.map
