import{l as c,g as b,c as y,d as E,e as S}from"./assets/quote-343ebdf3.js";import{l as L,i}from"./assets/vendor-c2f48a40.js";const $="/your-energy-team-project/assets/no-image-3f568e29.jpg";function h(s){return s.map(({imgURL:e,filter:r,name:t})=>`<li class="card-exercises" data-body-exercise='${t}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${k(e)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${C(t)}</p>
      <p class="name-exercises">${r}</p>
  </div>
    </li>`).join("")}const C=s=>s[0].toUpperCase()+s.slice(1),k=s=>`${s?`${s}`:`${$}`}`;function T(s){return s.toFixed(1)}function H(s){const e=s[0].toUpperCase()+s.slice(1);if(window.innerWidth>=1440)return e.length>=28?`${e.slice(0,28)}...`:e;if(window.innerWidth<1440)return e.length>=20?`${e.slice(0,20)}...`:e}function q(s){const e=String(s);if(window.innerWidth>=1440)return e.length>3?`${e.slice(0,3)}/...`:`${e} / 3 min`;if(window.innerWidth<1440)return e.length>=3?`${e.slice(0,3)}/...`:`${e}/3...`}function O(s){const e=s[0].toUpperCase()+s.slice(1);return e.length>5?`${e.slice(0,5)}...`:e}function W(s){const e=s[0].toUpperCase()+s.slice(1);return e.length>2?`${e.slice(0,2)}...`:e}function u(s){return s.map(({rating:e,name:r,burnedCalories:t,bodyPart:o,target:l,_id:w})=>`<li class="exercises-item" data-exercise-id="${w}">

		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${T(e)}</p>
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
			<h3 class="exercises-name">${H(r)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${q(t)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${O(o)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${W(l)}
				</li>
			</ul>
		</div>
	</li>`).join("")}let B=1,f="muscles",g=null;const n=document.querySelector(".cards"),N=document.querySelector(".filter-list"),U=document.querySelector(".input-filter-exercises"),p=document.querySelector(".filter-input-wrapper"),v=document.querySelector(".cat-title-span"),I=document.querySelector(".filter-icon-search"),x=document.querySelector(".filter-icon-close");N.addEventListener("click",M);n.addEventListener("click",a);p.addEventListener("input",L(D,500));x.addEventListener("click",j);c.create();b().then(s=>{const e=s.results;n.innerHTML=h(e),n.addEventListener("click",a)}).catch(s=>{console.error(s),i.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy()});function M(s){if(s.target.nodeName!=="BUTTON")return;const e=s.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),s.target.classList.add("active"),c.create(),y(e,B).then(t=>{const o=t.results,{filter:l}=o[0];f=l.toLowerCase(),v.innerHTML="",n.innerHTML=h(o),n.addEventListener("click",a),p.classList.add("isHidden")}).catch(t=>{console.error(t),i.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy()})}function a(s){const e=s.target.closest(".card-exercises").dataset.bodyExercise;v.innerHTML=`<span class="cat-title-text">/</span> ${e}`;const r={[f]:e,page:1};c.create(),E(r).then(t=>{const o=t.results;g=o,n.innerHTML=u(o),F(),p.classList.remove("isHidden")}).catch(t=>{console.error(t),i.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy(),n.removeEventListener("click",a)})}function D(s){const e=s.target.value.trim().toLowerCase(),r=g.filter(t=>t.name.includes(e));if(e.length!==0&&d(),e.length===0&&d(),r.length===0&&i.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),r.length!==0){const t=r.length===1?"exercise":"exercises";i.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${r.length} ${t}.`})}n.innerHTML=u(r)}function j(){U.value="",n.innerHTML=u(g),d()}function d(){I.classList.toggle("isHidden"),x.classList.toggle("isHidden")}function F(){let s=window.innerWidth<768?860:930;const e=window.pageYOffset-s;window.scrollBy({top:-e,behavior:"smooth"})}const m=document.querySelector(".subscribe-input"),J=document.querySelector(".submit-btn");function z(s){return!(JSON.parse(localStorage.getItem("subscribedEmails"))||[]).includes(s)}function A(s){let e=JSON.parse(localStorage.getItem("subscribedEmails"))||[];e.push(s),localStorage.setItem("subscribedEmails",JSON.stringify(e))}J.addEventListener("click",async function(s){s.preventDefault();const e=m.value.trim();if(validateEmail(e))if(z(e))try{await S({email:e})?(A(e),i.show({title:"Email subscribed successfully!",color:"green",position:"topCenter",message:""}),m.value=""):i.show({title:"Failed to subscribe!",color:"red",position:"topCenter",message:""})}catch(r){console.error("Error:",r),i.show({title:"An error occurred!",color:"red",position:"topCenter",message:""})}else i.show({title:"Email already subscribed!",color:"red",position:"topCenter",message:""});else i.show({title:"Invalid email format!",color:"red",position:"topCenter",message:""})});
//# sourceMappingURL=commonHelpers2.js.map
