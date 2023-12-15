import{g as A,b as N,c as D,p as F,F as U,a as P,d as W}from"./assets/quote-1d0eca53.js";import{l as z,i as a}from"./assets/vendor-46eef696.js";const K="/your-energy-team-project/assets/no-image-3f568e29.jpg";function B(e){return e.map(({imgURL:t,filter:n,name:i})=>`<li class="card-exercises" data-body-exercise='${i}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${Y(t)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${V(i)}</p>
      <p class="name-exercises">${n}</p>
  </div>
    </li>`).join("")}const V=e=>e[0].toUpperCase()+e.slice(1),Y=e=>`${e?`${e}`:`${K}`}`;function G(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function J(e){return e.toFixed(1)}function $(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function b(e){return e.map(({rating:t,name:n,burnedCalories:i,bodyPart:s,target:c,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${J(t)}</p>
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
			<h3 class="exercises-name">${G(n)}</h3>
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
					${$(c)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const l={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let Q=1,R="muscles",E=null;const r=document.querySelector(".cards"),X=document.querySelector(".filter-list"),Z=document.querySelector(".input-filter-exercises"),k=document.querySelector(".filter-input-wrapper"),H=document.querySelector(".cat-title-span"),ee=document.querySelector(".filter-icon-search"),I=document.querySelector(".filter-icon-close");X.addEventListener("click",te);r.addEventListener("click",L);k.addEventListener("input",z(se,500));I.addEventListener("click",ie);l.create();A().then(e=>{const t=e.results;r.innerHTML=B(t),r.addEventListener("click",L)}).catch(e=>{console.error(e),a.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{l.destroy()});function te(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),e.target.classList.add("active"),l.create(),N(t,Q).then(i=>{const s=i.results,{filter:c}=s[0];R=c.toLowerCase(),H.innerHTML="",r.innerHTML=B(s),r.addEventListener("click",L),k.classList.add("isHidden")}).catch(i=>{console.error(i),a.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{l.destroy()})}function L(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise;H.innerHTML=`<span class="cat-title-text">/</span> ${t}`;const n={[R]:t,page:1};l.create(),D(n).then(i=>{const s=i.results;E=s,r.innerHTML=b(s),ne(),k.classList.remove("isHidden")}).catch(i=>{console.error(i),a.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{l.destroy(),r.removeEventListener("click",L)})}function se(e){const t=e.target.value.trim().toLowerCase(),n=E.filter(i=>i.name.includes(t));if(t.length!==0&&y(),t.length===0&&y(),n.length===0&&a.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),n.length!==0){const i=n.length===1?"exercise":"exercises";a.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${n.length} ${i}.`})}r.innerHTML=b(n)}function ie(){Z.value="",r.innerHTML=b(E),y()}function y(){ee.classList.toggle("isHidden"),I.classList.toggle("isHidden")}function ne(){let e=window.innerWidth<768?840:930;const t=window.pageYOffset-e;window.scrollBy({top:-t,behavior:"smooth"})}function ce(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=document.body,s=()=>{const f=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!f),e.classList.toggle("is-open"),i.classList.toggle("menu-open"),i.classList.contains("menu-open")?o():m()},c=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),i.classList.remove("menu-open"),m()},o=()=>{i.style.overflow="hidden"},m=()=>{i.style.overflow="visible"};t.addEventListener("click",s),n.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",f=>{f.matches&&c()}),document.addEventListener("keydown",f=>{f.key==="Escape"&&e.classList.contains("is-open")&&c()})}ce();const _=document.querySelector("[data-modal]"),q=document.querySelector("p[data-raiting]"),O=document.querySelector(".rating_form"),C=[...document.getElementsByClassName("btn_star")],j=document.querySelector(".modal_window_container");let g=0,u={};const ae=()=>{O.reset(),g=0,q.textContent="0.0",C.forEach(e=>{e.classList.remove("btn_star-active")}),_.classList.add("is-hidden"),j.classList.remove("is-hidden")};O.addEventListener("submit",e=>{e.preventDefault();const n=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((c,o)=>{u[o]=c.trim()}),u.rate=g,u.rate<1){a.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}if(!u.email||!u.review){a.show({title:"The email and comment must be selected",color:"red",position:"topCenter",message:""});return}F(n,u)&&(a.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),ae())});function re(e){const t="btn_star-active",n="btn_star",i=e.length;let s;e.map(c=>{c.onclick=()=>{if(s=e.indexOf(c),c.className===n)for(s;s>=0;--s)e[s].className=t;else for(s;s<i;++s)e[s].className=n;g=e.filter(m=>{if(m.className===t)return m}).length,q.textContent=`${g}.0`}})}re(C);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",n),e.modal.addEventListener("click",i);function t(){_.classList.remove("is-hidden"),document.addEventListener("keydown",s)}function n(){g=0,C.forEach(c=>{c.classList.remove("btn_star-active"),c.classList.add("btn_star")}),q.textContent="0.0",_.classList.add("is-hidden"),j.classList.remove("is-hidden"),document.removeEventListener("keydown",s)}function i(c){c.target===c.currentTarget&&n()}function s(c){c.key==="Escape"&&n()}})();const oe=document.querySelector(".cards"),le=document.querySelector(".excercise_units"),p=document.querySelector(".modal_window_container"),de=document.querySelector(".close_modal_button"),M=document.querySelector(".rate_button"),v=document.body,w=document.querySelector(".js-add-favorite-btn"),ue=document.querySelector(".modal_title"),me=document.querySelector(".excercise_rating");document.querySelectorAll(".star_item");const T=document.querySelector(".modal_image");let d=null;const h=new U(P);oe.addEventListener("click",ye);de.addEventListener("click",_e);M.addEventListener("click",Le);w.addEventListener("click",fe);function S(e){h.isCardExisted(e)?w.classList.add("is-card-existed"):w.classList.remove("is-card-existed")}function fe(){d&&(h.isCardExisted(d._id)?(h.removeCard(d._id),S(d._id)):(h.addCard(d),S(d._id)))}function ge(e){e!==null&&(ue.textContent=e)}function pe(e){if(e!==null){let t=e.toFixed(1);me.textContent=t}}function he(e){let t=document.querySelector(".first_star"),n=document.querySelector(".second_star"),i=document.querySelector(".third_star"),s=document.querySelector(".fourth_star"),c=document.querySelector(".fifth_star");if(e===5)t.classList.add("rating_star_filled"),n.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),s.classList.add("rating_star_filled"),c.classList.add("rating_star_filled");else if(e>=4)t.classList.add("rating_star_filled"),n.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),s.classList.add("rating_star_filled");else if(e>=3)t.classList.add("rating_star_filled"),n.classList.add("rating_star_filled"),i.classList.add("rating_star_filled");else if(e>=2)t.classList.add("rating_star_filled"),n.classList.add("rating_star_filled");else if(e>=1)t.classList.add("rating_star_filled");else return}function ve(e,t){e!==null&&(T.src=e,T.alt=t)}function xe({time:e,bodyPart:t,equipment:n,target:i,description:s,burnedCalories:c,popularity:o}){return`<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${i}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${t}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${n}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${o}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${c}/${e} min</p></li>
        <p class="modal_text">${s}</p>
`}function Le(){M.classList.remove("is-hidden"),p.classList.add("is-hidden"),window.removeEventListener("keydown",x),window.removeEventListener("click",x)}function ye(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const i=t.closest(".exercises-item").dataset.exerciseId;l.create(),W(i).then(s=>{const c=xe(s);le.innerHTML=c,ge(s.name),pe(s.rating),he(s.rating),ve(s.gifUrl,s.name),d=s,console.log(s),S(s._id)}).catch(s=>{console.error(s),a.show({position:"center",color:"red",message:"An error has ocurred. Please try again later"})}).finally(()=>{l.destroy()}),M.setAttribute("data-Id",i),p.classList.remove("is-hidden"),v.style.overflow="hidden",window.addEventListener("keydown",x),window.addEventListener("click",x)}function x(e){e.key==="Escape"?(p.classList.add("is-hidden"),v.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(p.classList.add("is-hidden"),v.style.overflow="visible")}function _e(){p.classList.add("is-hidden"),v.style.overflow="visible"}
//# sourceMappingURL=commonHelpers2.js.map
