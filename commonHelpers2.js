import{g as O,c as D,d as F,p as j,F as A,a as U,e as W}from"./assets/quote-7ed57733.js";import{l as P,i as c}from"./assets/vendor-46eef696.js";const z="/your-energy-team-project/assets/no-image-3f568e29.jpg";function M(e){return e.map(({imgURL:t,filter:a,name:i})=>`<li class="card-exercises" data-body-exercise='${i}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${V(t)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${K(i)}</p>
      <p class="name-exercises">${a}</p>
  </div>
    </li>`).join("")}const K=e=>e[0].toUpperCase()+e.slice(1),V=e=>`${e?`${e}`:`${z}`}`;function Y(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function G(e){return e.toFixed(1)}function $(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function w(e){return e.map(({rating:t,name:a,burnedCalories:i,bodyPart:s,target:n,_id:d})=>`<li class="exercises-item" data-exercise-id="${d}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${G(t)}</p>
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
			<h3 class="exercises-name">${Y(a)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${i}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${$(s)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${$(n)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const o={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let J=1,B="muscles",S=null;const r=document.querySelector(".cards"),Q=document.querySelector(".filter-list"),X=document.querySelector(".input-filter-exercises"),E=document.querySelector(".filter-input-wrapper"),R=document.querySelector(".cat-title-span"),Z=document.querySelector(".filter-icon-search"),H=document.querySelector(".filter-icon-close");Q.addEventListener("click",ee);r.addEventListener("click",x);E.addEventListener("input",P(te,500));H.addEventListener("click",se);o.create();O().then(e=>{const t=e.results;r.innerHTML=M(t),r.addEventListener("click",x)}).catch(e=>{console.error(e),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()});function ee(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),o.create(),D(t,J).then(i=>{const s=i.results,{filter:n}=s[0];B=n.toLowerCase(),R.innerHTML="",r.innerHTML=M(s),r.addEventListener("click",x),E.classList.add("isHidden")}).catch(i=>{console.error(i),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()})}function x(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise;R.innerHTML=`<span class="cat-title-text">/</span> ${t}`;const a={[B]:t,page:1};o.create(),F(a).then(i=>{const s=i.results;S=s,r.innerHTML=w(s),ie(),E.classList.remove("isHidden")}).catch(i=>{console.error(i),c.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy(),r.removeEventListener("click",x)})}function te(e){const t=e.target.value.trim().toLowerCase(),a=S.filter(i=>i.name.includes(t));if(t.length!==0&&v(),t.length===0&&v(),a.length===0&&c.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),a.length!==0){const i=a.length===1?"exercise":"exercises";c.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${a.length} ${i}.`})}r.innerHTML=w(a)}function se(){X.value="",r.innerHTML=w(S),v()}function v(){Z.classList.toggle("isHidden"),H.classList.toggle("isHidden")}function ie(){let e=window.innerWidth<768?860:930;const t=window.pageYOffset-e;window.scrollBy({top:-t,behavior:"smooth"})}const _=document.querySelector("[data-modal]"),b=document.querySelector("p[data-raiting]"),I=document.querySelector(".rating_form"),k=[...document.getElementsByClassName("btn_star")],N=document.querySelector(".modal_window_container");let m=0,u={};const ae=()=>{I.reset(),m=0,b.textContent="0.0",k.forEach(e=>{e.classList.remove("btn_star-active")}),_.classList.add("is-hidden"),N.classList.remove("is-hidden")};I.addEventListener("submit",e=>{e.preventDefault();const a=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((n,d)=>{u[d]=n.trim()}),u.rate=m,u.rate<1){c.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}if(!u.email||!u.review){c.show({title:"The email and comment must be selected",color:"red",position:"topCenter",message:""});return}j(a,u)&&(c.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),ae())});function ne(e){const t="btn_star-active",a="btn_star",i=e.length;let s;e.map(n=>{n.onclick=()=>{if(s=e.indexOf(n),n.className===a)for(s;s>=0;--s)e[s].className=t;else for(s;s<i;++s)e[s].className=a;m=e.filter(C=>{if(C.className===t)return C}).length,b.textContent=`${m}.0`}})}ne(k);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",a),e.modal.addEventListener("click",i);function t(){_.classList.remove("is-hidden"),document.addEventListener("keydown",s)}function a(){m=0,k.forEach(n=>{n.classList.remove("btn_star-active"),n.classList.add("btn_star")}),b.textContent="0.0",_.classList.add("is-hidden"),N.classList.remove("is-hidden"),document.removeEventListener("keydown",s)}function i(n){n.target===n.currentTarget&&a()}function s(n){n.key==="Escape"&&a()}})();const ce=document.querySelector(".cards"),re=document.querySelector(".excercise_units"),f=document.querySelector(".modal_window_container"),oe=document.querySelector(".close_modal_button"),q=document.querySelector(".rate_button"),p=document.body,L=document.querySelector(".js-add-favorite-btn"),le=document.querySelector(".modal_title"),de=document.querySelector(".excercise_rating");document.querySelectorAll(".star_item");const T=document.querySelector(".modal_image");let l=null;const g=new A(U);ce.addEventListener("click",ve);oe.addEventListener("click",_e);q.addEventListener("click",xe);L.addEventListener("click",ue);function y(e){g.isCardExisted(e)?L.classList.add("is-card-existed"):L.classList.remove("is-card-existed")}function ue(){l&&(g.isCardExisted(l._id)?(g.removeCard(l._id),y(l._id)):(g.addCard(l),y(l._id)))}function me(e){e!==null&&(le.textContent=e)}function fe(e){if(e!==null){let t=e.toFixed(1);de.textContent=t}}function ge(e){let t=document.querySelector(".first_star"),a=document.querySelector(".second_star"),i=document.querySelector(".third_star"),s=document.querySelector(".fourth_star"),n=document.querySelector(".fifth_star");if(e===5)t.classList.add("rating_star_filled"),a.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),s.classList.add("rating_star_filled"),n.classList.add("rating_star_filled");else if(e>=4)t.classList.add("rating_star_filled"),a.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),s.classList.add("rating_star_filled");else if(e>=3)t.classList.add("rating_star_filled"),a.classList.add("rating_star_filled"),i.classList.add("rating_star_filled");else if(e>=2)t.classList.add("rating_star_filled"),a.classList.add("rating_star_filled");else if(e>=1)t.classList.add("rating_star_filled");else return}function pe(e,t){e!==null&&(T.src=e,T.alt=t)}function he({time:e,bodyPart:t,equipment:a,target:i,description:s,burnedCalories:n,popularity:d}){return`<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${i}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${t}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${a}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${d}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${n}/${e} min</p></li>
        <p class="modal_text">${s}</p>
`}function xe(){q.classList.remove("is-hidden"),f.classList.add("is-hidden"),window.removeEventListener("keydown",h),window.removeEventListener("click",h)}function ve(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const i=t.closest(".exercises-item").dataset.exerciseId;o.create(),W(i).then(s=>{const n=he(s);re.innerHTML=n,me(s.name),fe(s.rating),ge(s.rating),pe(s.gifUrl,s.name),l=s,console.log(s),y(s._id)}).catch(s=>{console.error(s),c.show({position:"center",color:"red",message:"An error has ocurred. Please try again later"})}).finally(()=>{o.destroy()}),q.setAttribute("data-Id",i),f.classList.remove("is-hidden"),p.style.overflow="hidden",window.addEventListener("keydown",h),window.addEventListener("click",h)}function h(e){e.key==="Escape"?(f.classList.add("is-hidden"),p.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(f.classList.add("is-hidden"),p.style.overflow="visible")}function _e(){f.classList.add("is-hidden"),p.style.overflow="visible"}
//# sourceMappingURL=commonHelpers2.js.map
