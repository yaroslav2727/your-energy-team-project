import{g as N,b as O,c as D,p as F,F as U,a as P,d as W}from"./assets/quote-5e304324.js";import{l as z,i as o}from"./assets/vendor-46eef696.js";const K="/your-energy-team-project/assets/no-image-3f568e29.jpg";function B(e){return e.map(({imgURL:t,filter:i,name:n})=>`<li class="card-exercises" data-body-exercise='${n}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${G(t)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${V(n)}</p>
      <p class="name-exercises">${i}</p>
  </div>
    </li>`).join("")}const V=e=>e[0].toUpperCase()+e.slice(1),G=e=>`${e?`${e}`:`${K}`}`;function Y(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function J(e){return`${Math.round(e)}.0`}function $(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function b(e){return e.map(({rating:t,name:i,burnedCalories:n,bodyPart:s,target:a,_id:r})=>`<li class="exercises-item" data-exercise-id="${r}">
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
			<div class="exercises-btn-wrapper">
				<button type="button" class="exercises-btn js-excercise-button">Start</button>
				<span class="exercises-name-span">
					<svg class="exercises-icon-arrow" width="16" height="16">
						<use href="././img/icons.svg#icon-arrow"></use>
					</svg>
				</span>
			</div>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="././img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${Y(i)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${n}/...
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
	</li>`).join("")}const l={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let Q=1,R="muscles",E=null;const c=document.querySelector(".cards"),X=document.querySelector(".filter-list"),Z=document.querySelector(".input-filter-exercises"),k=document.querySelector(".filter-input-wrapper"),H=document.querySelector(".cat-title-span"),ee=document.querySelector(".filter-icon-search"),I=document.querySelector(".filter-icon-close");X.addEventListener("click",te);c.addEventListener("click",L);k.addEventListener("input",z(se,500));I.addEventListener("click",ne);l.create();N().then(e=>{const t=e.results;c.innerHTML=B(t),c.addEventListener("click",L)}).catch(e=>{console.error(e),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{l.destroy()});function te(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),e.target.classList.add("active"),l.create(),O(t,Q).then(n=>{const s=n.results,{filter:a}=s[0];R=a.toLowerCase(),H.innerHTML="",c.innerHTML=B(s),c.addEventListener("click",L),k.classList.add("isHidden")}).catch(n=>{console.error(n),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{l.destroy()})}function L(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise;H.innerHTML=`<span class="cat-title-text">/</span> ${t}`;const i={[R]:t,page:1};l.create(),D(i).then(n=>{const s=n.results;E=s,c.innerHTML=b(s),k.classList.remove("isHidden")}).catch(n=>{console.error(n),o.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{l.destroy(),c.removeEventListener("click",L)})}function se(e){const t=e.target.value.trim().toLowerCase(),i=E.filter(n=>n.name.includes(t));if(t.length!==0&&y(),t.length===0&&y(),i.length===0&&o.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),i.length!==0){const n=i.length===1?"exercise":"exercises";o.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${i.length} ${n}.`})}c.innerHTML=b(i)}function ne(){Z.value="",c.innerHTML=b(E),y()}function y(){ee.classList.toggle("isHidden"),I.classList.toggle("isHidden")}function ie(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=document.body,s=()=>{const m=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!m),e.classList.toggle("is-open"),n.classList.toggle("menu-open"),n.classList.contains("menu-open")?r():u()},a=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),n.classList.remove("menu-open"),u()},r=()=>{n.style.overflow="hidden"},u=()=>{n.style.overflow="visible"};t.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",m=>{m.matches&&a()}),document.addEventListener("keydown",m=>{m.key==="Escape"&&e.classList.contains("is-open")&&a()})}ie();const _=document.querySelector("[data-modal]"),q=document.querySelector("p[data-raiting]"),j=document.querySelector(".rating_form"),C=[...document.getElementsByClassName("btn_star")],A=document.querySelector(".modal_window_container");let f=0,p={};const ae=()=>{j.reset(),f=0,q.textContent="0.0",C.forEach(e=>{e.classList.remove("btn_star-active")}),_.classList.add("is-hidden"),A.classList.remove("is-hidden")};j.addEventListener("submit",e=>{e.preventDefault();const i=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((a,r)=>{p[r]=a.trim()}),p.rate=f,p.rate<1){o.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}F(i,p)&&(o.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),ae())});function ce(e){const t="btn_star-active",i="btn_star",n=e.length;let s;e.map(a=>{a.onclick=()=>{if(s=e.indexOf(a),a.className===i)for(s;s>=0;--s)e[s].className=t;else for(s;s<n;++s)e[s].className=i;f=e.filter(u=>{if(u.className===t)return u}).length,q.textContent=`${f}.0`}})}ce(C);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",i),e.modal.addEventListener("click",n);function t(){_.classList.remove("is-hidden"),document.addEventListener("keydown",s)}function i(){f=0,C.forEach(a=>{a.classList.remove("btn_star-active")}),q.textContent="0.0",_.classList.add("is-hidden"),A.classList.remove("is-hidden"),document.removeEventListener("keydown",s)}function n(a){a.target===a.currentTarget&&i()}function s(a){a.key==="Escape"&&i()}})();const re=document.querySelector(".cards"),oe=document.querySelector(".excercise_units"),g=document.querySelector(".modal_window_container"),le=document.querySelector(".close_modal_button"),M=document.querySelector(".rate_button"),v=document.body,w=document.querySelector(".js-add-favorite-btn"),de=document.querySelector(".modal_title"),ue=document.querySelector(".excercise_rating");document.querySelectorAll(".star_item");const T=document.querySelector(".modal_image");let d=null;const h=new U(P);re.addEventListener("click",Le);le.addEventListener("click",ye);M.addEventListener("click",xe);w.addEventListener("click",me);function S(e){h.isCardExisted(e)?w.classList.add("is-card-existed"):w.classList.remove("is-card-existed")}function me(){d&&(h.isCardExisted(d._id)?(h.removeCard(d._id),S(d._id)):(h.addCard(d),S(d._id)))}function fe(e){e!==null&&(de.textContent=e)}function ge(e){if(e!==null){let t=e.toFixed(1);ue.textContent=t}}function pe(e){let t=document.querySelector(".first_star"),i=document.querySelector(".second_star"),n=document.querySelector(".third_star"),s=document.querySelector(".fourth_star"),a=document.querySelector(".fifth_star");if(e===5)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),n.classList.add("rating_star_filled"),s.classList.add("rating_star_filled"),a.classList.add("rating_star_filled");else if(e>=4)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),n.classList.add("rating_star_filled"),s.classList.add("rating_star_filled");else if(e>=3)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled"),n.classList.add("rating_star_filled");else if(e>=2)t.classList.add("rating_star_filled"),i.classList.add("rating_star_filled");else if(e>=1)t.classList.add("rating_star_filled");else return}function he(e,t){e!==null&&(T.src=e,T.alt=t)}function ve({time:e,bodyPart:t,equipment:i,target:n,description:s,burnedCalories:a,popularity:r}){return`<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${n}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${t}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${i}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${r}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${a}/${e} min</p></li>
        <p class="modal_text">${s}</p>
`}function xe(){M.classList.remove("is-hidden"),g.classList.add("is-hidden"),window.removeEventListener("keydown",x),window.removeEventListener("click",x)}function Le(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const n=t.closest(".exercises-item").dataset.exerciseId;l.create(),W(n).then(s=>{const a=ve(s);oe.innerHTML=a,fe(s.name),ge(s.rating),pe(s.rating),he(s.gifUrl,s.name),d=s,console.log(s),S(s._id)}).catch(s=>{console.error(s),o.show({position:"center",color:"red",message:"An error has ocurred. Please try again later"})}).finally(()=>{l.destroy()}),M.setAttribute("data-Id",n),g.classList.remove("is-hidden"),v.style.overflow="hidden",window.addEventListener("keydown",x),window.addEventListener("click",x)}function x(e){e.key==="Escape"?(g.classList.add("is-hidden"),v.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(g.classList.add("is-hidden"),v.style.overflow="visible")}function ye(){g.classList.add("is-hidden"),v.style.overflow="visible"}
//# sourceMappingURL=commonHelpers2.js.map
