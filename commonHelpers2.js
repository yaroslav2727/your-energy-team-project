import{g as P,c as z,d as J,p as K,F as V,a as Y,e as G,f as Q}from"./assets/quote-b3813f8c.js";import{l as X,i as n}from"./assets/vendor-46eef696.js";const Z="/your-energy-team-project/assets/no-image-3f568e29.jpg";function O(e){return e.map(({imgURL:t,filter:r,name:i})=>`<li class="card-exercises" data-body-exercise='${i}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${te(t)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${ee(i)}</p>
      <p class="name-exercises">${r}</p>
  </div>
    </li>`).join("")}const ee=e=>e[0].toUpperCase()+e.slice(1),te=e=>`${e?`${e}`:`${Z}`}`;function se(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function ie(e){return e.toFixed(1)}function R(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function k(e){return e.map(({rating:t,name:r,burnedCalories:i,bodyPart:s,target:a,_id:d})=>`<li class="exercises-item" data-exercise-id="${d}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${ie(t)}</p>
				<span class="exercises-name-span">
					<svg class="exercises-icon-star-rating" width="16" height="16">
					<use href="././img/icons.svg#icon-star-rating"></use>
					</svg>
				</span>
			</div>
			
			<button type="button" class="exercises-btn js-excercise-button">Start					
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
			<h3 class="exercises-name">${se(r)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${i}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${R(s)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${R(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const o={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let re=1,D="muscles",q=null;const c=document.querySelector(".cards"),ae=document.querySelector(".filter-list"),ne=document.querySelector(".input-filter-exercises"),$=document.querySelector(".filter-input-wrapper"),F=document.querySelector(".cat-title-span"),ce=document.querySelector(".filter-icon-search"),j=document.querySelector(".filter-icon-close");ae.addEventListener("click",oe);c.addEventListener("click",L);$.addEventListener("input",X(le,500));j.addEventListener("click",de);o.create();P().then(e=>{const t=e.results;c.innerHTML=O(t),c.addEventListener("click",L)}).catch(e=>{console.error(e),n.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()});function oe(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),o.create(),z(t,re).then(i=>{const s=i.results,{filter:a}=s[0];D=a.toLowerCase(),F.innerHTML="",c.innerHTML=O(s),c.addEventListener("click",L),$.classList.add("isHidden")}).catch(i=>{console.error(i),n.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()})}function L(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise;F.innerHTML=`<span class="cat-title-text">/</span> ${t}`;const r={[D]:t,page:1};o.create(),J(r).then(i=>{const s=i.results;q=s,c.innerHTML=k(s),ue(),$.classList.remove("isHidden")}).catch(i=>{console.error(i),n.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy(),c.removeEventListener("click",L)})}function le(e){const t=e.target.value.trim().toLowerCase(),r=q.filter(i=>i.name.includes(t));if(t.length!==0&&y(),t.length===0&&y(),r.length===0&&n.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),r.length!==0){const i=r.length===1?"exercise":"exercises";n.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${r.length} ${i}.`})}c.innerHTML=k(r)}function de(){ne.value="",c.innerHTML=k(q),y()}function y(){ce.classList.toggle("isHidden"),j.classList.toggle("isHidden")}function ue(){let e=window.innerWidth<768?860:930;const t=window.pageYOffset-e;window.scrollBy({top:-t,behavior:"smooth"})}const w=document.querySelector("[data-modal]"),T=document.querySelector("p[data-raiting]"),A=document.querySelector(".rating_form"),M=[...document.getElementsByClassName("btn_star")],U=document.querySelector(".modal_window_container");let g=0,u={};const me=()=>{A.reset(),g=0,T.textContent="0.0",M.forEach(e=>{e.classList.remove("btn_star-active")}),w.classList.add("is-hidden"),U.classList.remove("is-hidden")};A.addEventListener("submit",e=>{e.preventDefault();const r=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((a,d)=>{u[d]=a.trim()}),u.rate=g,u.rate<1){n.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}if(!u.email||!u.review){n.show({title:"The email and comment must be selected",color:"red",position:"topCenter",message:""});return}K(r,u)&&(n.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),me())});function fe(e){const t="btn_star-active",r="btn_star",i=e.length;let s;e.map(a=>{a.onclick=()=>{if(s=e.indexOf(a),a.className===r)for(s;s>=0;--s)e[s].className=t;else for(s;s<i;++s)e[s].className=r;g=e.filter(I=>{if(I.className===t)return I}).length,T.textContent=`${g}.0`}})}fe(M);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",r),e.modal.addEventListener("click",i);function t(){w.classList.remove("is-hidden"),document.addEventListener("keydown",s)}function r(){g=0,M.forEach(a=>{a.classList.remove("btn_star-active"),a.classList.add("btn_star")}),T.textContent="0.0",w.classList.add("is-hidden"),U.classList.remove("is-hidden"),document.removeEventListener("keydown",s)}function i(a){a.target===a.currentTarget&&r()}function s(a){a.key==="Escape"&&r()}})();const ge=document.querySelector(".cards"),pe=document.querySelector(".excercise_units"),p=document.querySelector(".modal_window_container"),he=document.querySelector(".close_modal_button"),B=document.querySelector(".rate_button"),_=document.body,S=document.querySelector(".js-add-favorite-btn"),ve=document.querySelector(".modal_title"),_e=document.querySelector(".excercise_rating"),H=document.querySelector(".modal_image"),m=document.querySelector(".first_star"),f=document.querySelector(".second_star"),h=document.querySelector(".third_star"),b=document.querySelector(".fourth_star"),W=document.querySelector(".fifth_star");let l=null;const v=new V(Y);ge.addEventListener("click",Ce);he.addEventListener("click",ke);B.addEventListener("click",Ee);S.addEventListener("click",xe);function E(e){v.isCardExisted(e)?S.classList.add("is-card-existed"):S.classList.remove("is-card-existed")}function xe(){l&&(v.isCardExisted(l._id)?(v.removeCard(l._id),E(l._id)):(v.addCard(l),E(l._id)))}function Le(e){e!==null&&(ve.textContent=e)}function ye(e){if(e!==null){let t=e.toFixed(1);_e.textContent=t}}function C(){m.classList.remove("rating_star_filled"),f.classList.remove("rating_star_filled"),h.classList.remove("rating_star_filled"),b.classList.remove("rating_star_filled"),W.classList.remove("rating_star_filled")}function we(e){if(e===5)m.classList.add("rating_star_filled"),f.classList.add("rating_star_filled"),h.classList.add("rating_star_filled"),b.classList.add("rating_star_filled"),W.classList.add("rating_star_filled");else if(e>=4)m.classList.add("rating_star_filled"),f.classList.add("rating_star_filled"),h.classList.add("rating_star_filled"),b.classList.add("rating_star_filled");else if(e>=3)m.classList.add("rating_star_filled"),f.classList.add("rating_star_filled"),h.classList.add("rating_star_filled");else if(e>=2)m.classList.add("rating_star_filled"),f.classList.add("rating_star_filled");else if(e>=1)m.classList.add("rating_star_filled");else return}function Se(e,t){e!==null&&(H.src=e,H.alt=t)}function be({time:e,bodyPart:t,equipment:r,target:i,description:s,burnedCalories:a,popularity:d}){return`<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${i}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${t}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${r}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${d}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${a}/${e} min</p></li>
        <p class="modal_text">${s}</p>
`}function Ee(){B.classList.remove("is-hidden"),p.classList.add("is-hidden"),window.removeEventListener("keydown",x),window.removeEventListener("click",x)}function Ce(e){const t=e.target.closest(".js-excercise-button");if(!t)return;const i=t.closest(".exercises-item").dataset.exerciseId;o.create(),G(i).then(s=>{const a=be(s);pe.innerHTML=a,Le(s.name),ye(s.rating),we(s.rating),Se(s.gifUrl,s.name),l=s,console.log(s),E(s._id)}).catch(s=>{console.error(s),n.show({position:"center",color:"red",message:"An error has ocurred. Please try again later"})}).finally(()=>{o.destroy()}),B.setAttribute("data-Id",i),p.classList.remove("is-hidden"),_.style.overflow="hidden",window.addEventListener("keydown",x),window.addEventListener("click",x)}function x(e){e.key==="Escape"?(p.classList.add("is-hidden"),_.style.overflow="visible",C()):e.target.closest(".modal_window_default_content,.js-excercise-button")||(p.classList.add("is-hidden"),_.style.overflow="visible",C())}function ke(){p.classList.add("is-hidden"),_.style.overflow="visible",C()}const N=document.querySelector(".subscribe-input"),qe=document.querySelector(".submit-btn");function $e(e){return!(JSON.parse(localStorage.getItem("subscribedEmails"))||[]).includes(e)}function Te(e){let t=JSON.parse(localStorage.getItem("subscribedEmails"))||[];t.push(e),localStorage.setItem("subscribedEmails",JSON.stringify(t))}qe.addEventListener("click",async function(e){e.preventDefault();const t=N.value.trim();if(validateEmail(t))if($e(t))try{await Q({email:t})?(Te(t),n.show({title:"Email subscribed successfully!",color:"green",position:"topCenter",message:""}),N.value=""):n.show({title:"Failed to subscribe!",color:"red",position:"topCenter",message:""})}catch(r){console.error("Error:",r),n.show({title:"An error occurred!",color:"red",position:"topCenter",message:""})}else n.show({title:"Email already subscribed!",color:"red",position:"topCenter",message:""});else n.show({title:"Invalid email format!",color:"red",position:"topCenter",message:""})});
//# sourceMappingURL=commonHelpers2.js.map
