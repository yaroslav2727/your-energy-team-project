import{g as D,c as F,d as A,p as j,F as U,a as W,e as P,f as z}from"./assets/quote-467610b1.js";import{l as J,i as n}from"./assets/vendor-46eef696.js";const K="/your-energy-team-project/assets/no-image-3f568e29.jpg";function B(e){return e.map(({imgURL:t,filter:i,name:r})=>`<li class="card-exercises" data-body-exercise='${r}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${Y(t)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${V(r)}</p>
      <p class="name-exercises">${i}</p>
  </div>
    </li>`).join("")}const V=e=>e[0].toUpperCase()+e.slice(1),Y=e=>`${e?`${e}`:`${K}`}`;function G(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function Q(e){return e.toFixed(1)}function $(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function w(e){return e.map(({rating:t,name:i,burnedCalories:r,bodyPart:s,target:a,_id:d})=>`<li class="exercises-item" data-exercise-id="${d}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${Q(t)}</p>
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
			<h3 class="exercises-name">${G(i)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${r}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${$(s)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${$(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const o={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let X=1,I="muscles",S=null;const c=document.querySelector(".cards"),Z=document.querySelector(".filter-list"),ee=document.querySelector(".input-filter-exercises"),b=document.querySelector(".filter-input-wrapper"),R=document.querySelector(".cat-title-span"),te=document.querySelector(".filter-icon-search"),H=document.querySelector(".filter-icon-close");Z.addEventListener("click",se);c.addEventListener("click",v);b.addEventListener("input",J(ie,500));H.addEventListener("click",re);o.create();D().then(e=>{const t=e.results;c.innerHTML=B(t),c.addEventListener("click",v)}).catch(e=>{console.error(e),n.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()});function se(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),e.target.classList.add("active"),o.create(),F(t,X).then(r=>{const s=r.results,{filter:a}=s[0];I=a.toLowerCase(),R.innerHTML="",c.innerHTML=B(s),c.addEventListener("click",v),b.classList.add("isHidden")}).catch(r=>{console.error(r),n.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()})}function v(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise;R.innerHTML=`<span class="cat-title-text">/</span> ${t}`;const i={[I]:t,page:1};o.create(),A(i).then(r=>{const s=r.results;S=s,c.innerHTML=w(s),ae(),b.classList.remove("isHidden")}).catch(r=>{console.error(r),n.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy(),c.removeEventListener("click",v)})}function ie(e){const t=e.target.value.trim().toLowerCase(),i=S.filter(r=>r.name.includes(t));if(t.length!==0&&x(),t.length===0&&x(),i.length===0&&n.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),i.length!==0){const r=i.length===1?"exercise":"exercises";n.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${i.length} ${r}.`})}c.innerHTML=w(i)}function re(){ee.value="",c.innerHTML=w(S),x()}function x(){te.classList.toggle("isHidden"),H.classList.toggle("isHidden")}function ae(){let e=window.innerWidth<768?860:930;const t=window.pageYOffset-e;window.scrollBy({top:-t,behavior:"smooth"})}const _=document.querySelector("[data-modal]"),E=document.querySelector("p[data-raiting]"),N=document.querySelector(".rating_form"),C=[...document.getElementsByClassName("btn_star")],O=document.querySelector(".modal_window_container");let m=0,u={};const ne=()=>{N.reset(),m=0,E.textContent="0.0",C.forEach(e=>{e.classList.remove("btn_star-active")}),_.classList.add("is-hidden"),O.classList.remove("is-hidden")};N.addEventListener("submit",e=>{e.preventDefault();const i=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((a,d)=>{u[d]=a.trim()}),u.rate=m,u.rate<1){n.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}if(!u.email||!u.review){n.show({title:"The email and comment must be selected",color:"red",position:"topCenter",message:""});return}j(i,u)&&(n.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),ne())});function ce(e){const t="btn_star-active",i="btn_star",r=e.length;let s;e.map(a=>{a.onclick=()=>{if(s=e.indexOf(a),a.className===i)for(s;s>=0;--s)e[s].className=t;else for(s;s<r;++s)e[s].className=i;m=e.filter(q=>{if(q.className===t)return q}).length,E.textContent=`${m}.0`}})}ce(C);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",i),e.modal.addEventListener("click",r);function t(){_.classList.remove("is-hidden"),document.addEventListener("keydown",s)}function i(){m=0,C.forEach(a=>{a.classList.remove("btn_star-active"),a.classList.add("btn_star")}),E.textContent="0.0",_.classList.add("is-hidden"),O.classList.remove("is-hidden"),document.removeEventListener("keydown",s)}function r(a){a.target===a.currentTarget&&i()}function s(a){a.key==="Escape"&&i()}})();const oe=document.querySelector(".cards"),le=document.querySelector(".excercise_units"),f=document.querySelector(".modal_window_container"),de=document.querySelector(".close_modal_button"),k=document.querySelector(".rate_button"),p=document.body,y=document.querySelector(".js-add-favorite-btn"),ue=document.querySelector(".modal_title"),me=document.querySelector(".excercise_rating");document.querySelectorAll(".star_item");const T=document.querySelector(".modal_image");let l=null;const g=new U(W);oe.addEventListener("click",ye);de.addEventListener("click",Le);k.addEventListener("click",_e);y.addEventListener("click",fe);function L(e){g.isCardExisted(e)?y.classList.add("is-card-existed"):y.classList.remove("is-card-existed")}function fe(){l&&(g.isCardExisted(l._id)?(g.removeCard(l._id),L(l._id)):(g.addCard(l),L(l._id)))}function ge(e){e!==null&&(ue.textContent=e)}function pe(e){if(e!==null){let t=e.toFixed(1);me.textContent=t}}function he(e){let t=document.querySelector(".first_star"),i=document.querySelector(".second_star"),r=document.querySelector(".third_star"),s=document.querySelector(".fourth_star"),a=document.querySelector(".fifth_star");if(e===5)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),r.classList.add("rating_star_filled"),s.classList.add("rating_star_filled"),a.classList.add("rating_star_filled");else if(e>=4)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),r.classList.add("rating_star_filled"),s.classList.add("rating_star_filled");else if(e>=3)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),r.classList.add("rating_star_filled");else if(e>=2)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled");else if(e>=1)t.classList.add("rating_star_filled");else return}function ve(e,t){e!==null&&(T.src=e,T.alt=t)}function xe({time:e,bodyPart:t,equipment:i,target:r,description:s,burnedCalories:a,popularity:d}){return`<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${r}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${t}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${i}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${d}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${a}/${e} min</p></li>
        <p class="modal_text">${s}</p>
`}function _e(){k.classList.remove("is-hidden"),f.classList.add("is-hidden"),window.removeEventListener("keydown",h),window.removeEventListener("click",h)}function ye(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const r=t.closest(".exercises-item").dataset.exerciseId;o.create(),P(r).then(s=>{const a=xe(s);le.innerHTML=a,ge(s.name),pe(s.rating),he(s.rating),ve(s.gifUrl,s.name),l=s,console.log(s),L(s._id)}).catch(s=>{console.error(s),n.show({position:"center",color:"red",message:"An error has ocurred. Please try again later"})}).finally(()=>{o.destroy()}),k.setAttribute("data-Id",r),f.classList.remove("is-hidden"),p.style.overflow="hidden",window.addEventListener("keydown",h),window.addEventListener("click",h)}function h(e){e.key==="Escape"?(f.classList.add("is-hidden"),p.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(f.classList.add("is-hidden"),p.style.overflow="visible")}function Le(){f.classList.add("is-hidden"),p.style.overflow="visible"}const M=document.querySelector(".subscribe-input"),we=document.querySelector(".submit-btn");function Se(e){return!(JSON.parse(localStorage.getItem("subscribedEmails"))||[]).includes(e)}function be(e){let t=JSON.parse(localStorage.getItem("subscribedEmails"))||[];t.push(e),localStorage.setItem("subscribedEmails",JSON.stringify(t))}we.addEventListener("click",async function(e){e.preventDefault();const t=M.value.trim();if(validateEmail(t))if(Se(t))try{await z({email:t})?(be(t),n.show({title:"Email subscribed successfully!",color:"green",position:"topCenter",message:""}),M.value=""):n.show({title:"Failed to subscribe!",color:"red",position:"topCenter",message:""})}catch(i){console.error("Error:",i),n.show({title:"An error occurred!",color:"red",position:"topCenter",message:""})}else n.show({title:"Email already subscribed!",color:"red",position:"topCenter",message:""});else n.show({title:"Invalid email format!",color:"red",position:"topCenter",message:""})});
//# sourceMappingURL=commonHelpers2.js.map
