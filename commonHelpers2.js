import{l as c,g as w,c as E,d as S,e as L}from"./assets/quote-d6e8cc01.js";import{l as C,i}from"./assets/vendor-c2f48a40.js";const $="/your-energy-team-project/assets/no-image-3f568e29.jpg";function f(e){return e.map(({imgURL:s,filter:r,name:t})=>`<li class="card-exercises" data-body-exercise='${t}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${T(s)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${k(t)}</p>
      <p class="name-exercises">${r}</p>
  </div>
    </li>`).join("")}const k=e=>e[0].toUpperCase()+e.slice(1),T=e=>`${e?`${e}`:`${$}`}`;function H(e){const s=e[0].toUpperCase()+e.slice(1);return s.length>20?`${s.slice(0,20)}...`:s}function q(e){return e.toFixed(1)}function m(e){const s=e[0].toUpperCase()+e.slice(1);return s.length>3?`${s.slice(0,3)}...`:`${s.slice(0,3)}`}function u(e){return e.map(({rating:s,name:r,burnedCalories:t,bodyPart:o,target:l,_id:y})=>`<li class="exercises-item js-common-card-item" data-exercise-id="${y}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${q(s)}</p>
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
					<span class="exercises-data-info">Burned calories:</span>
					${t}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${m(o)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${m(l)}
				</li>
			</ul>
		</div>
	</li>`).join("")}let O=1,v="muscles",p=null;const n=document.querySelector(".cards"),I=document.querySelector(".filter-list"),M=document.querySelector(".input-filter-exercises"),g=document.querySelector(".filter-input-wrapper"),x=document.querySelector(".cat-title-span"),B=document.querySelector(".filter-icon-search"),b=document.querySelector(".filter-icon-close");I.addEventListener("click",D);n.addEventListener("click",a);g.addEventListener("input",C(N,500));b.addEventListener("click",U);c.create();w().then(e=>{const s=e.results;n.innerHTML=f(s),n.addEventListener("click",a)}).catch(e=>{console.error(e),i.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy()});function D(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),c.create(),E(s,O).then(t=>{const o=t.results,{filter:l}=o[0];v=l.toLowerCase(),x.innerHTML="",n.innerHTML=f(o),n.addEventListener("click",a),g.classList.add("isHidden")}).catch(t=>{console.error(t),i.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy()})}function a(e){const s=e.target.closest(".card-exercises").dataset.bodyExercise;x.innerHTML=`<span class="cat-title-text">/</span> ${s}`;const r={[v]:s,page:1};c.create(),S(r).then(t=>{const o=t.results;p=o,n.innerHTML=u(o),j(),g.classList.remove("isHidden")}).catch(t=>{console.error(t),i.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{c.destroy(),n.removeEventListener("click",a)})}function N(e){const s=e.target.value.trim().toLowerCase(),r=p.filter(t=>t.name.includes(s));if(s.length!==0&&d(),s.length===0&&d(),r.length===0&&i.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),r.length!==0){const t=r.length===1?"exercise":"exercises";i.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${r.length} ${t}.`})}n.innerHTML=u(r)}function U(){M.value="",n.innerHTML=u(p),d()}function d(){B.classList.toggle("isHidden"),b.classList.toggle("isHidden")}function j(){let e=window.innerWidth<768?860:930;const s=window.pageYOffset-e;window.scrollBy({top:-s,behavior:"smooth"})}const h=document.querySelector(".subscribe-input"),W=document.querySelector(".submit-btn");function F(e){return!(JSON.parse(localStorage.getItem("subscribedEmails"))||[]).includes(e)}function J(e){let s=JSON.parse(localStorage.getItem("subscribedEmails"))||[];s.push(e),localStorage.setItem("subscribedEmails",JSON.stringify(s))}W.addEventListener("click",async function(e){e.preventDefault();const s=h.value.trim();if(validateEmail(s))if(F(s))try{await L({email:s})?(J(s),i.show({title:"Email subscribed successfully!",color:"green",position:"topCenter",message:""}),h.value=""):i.show({title:"Failed to subscribe!",color:"red",position:"topCenter",message:""})}catch(r){console.error("Error:",r),i.show({title:"An error occurred!",color:"red",position:"topCenter",message:""})}else i.show({title:"Email already subscribed!",color:"red",position:"topCenter",message:""});else i.show({title:"Invalid email format!",color:"red",position:"topCenter",message:""})});
//# sourceMappingURL=commonHelpers2.js.map
