import{g as T,a as B,b as R,p as j,c as H}from"./assets/quote-1f304bb0.js";import{l as I,i as d}from"./assets/vendor-46eef696.js";const N="/your-energy-team-project/assets/no-image-3f568e29.jpg";function w(e){return e.map(({imgURL:t,filter:c,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${D(t)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${O(s)}</p>
      <p class="name-exercises">${c}</p>
  </div>
    </li>`).join("")}const O=e=>e[0].toUpperCase()+e.slice(1),D=e=>`${e?`${e}`:`${N}`}`;function U(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function A(e){return`${Math.round(e)}.0`}function b(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function _(e){return e.map(({rating:t,name:c,burnedCalories:s,bodyPart:n,target:a,_id:i})=>`<li class="exercises-item" data-exercise-id="${i}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${A(t)}</p>
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
			<h3 class="exercises-name">${U(c)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${b(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${b(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const u={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let P=1,E="muscles",k=null;const o=document.querySelector(".cards"),F=document.querySelector(".filter-list"),x=document.querySelector(".filter-input-wrapper"),S=document.querySelector(".cat-title-span");F.addEventListener("click",W);o.addEventListener("click",h);x.addEventListener("input",I(z,500));u.create();T().then(e=>{const t=e.results;o.innerHTML=w(t),o.addEventListener("click",h)}).catch(e=>{console.error(e),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()});function W(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),u.create(),B(t,P).then(s=>{const n=s.results,{filter:a}=n[0];E=a.toLowerCase(),S.innerHTML="",o.innerHTML=w(n),o.addEventListener("click",h),x.classList.add("isHidden")}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()})}function h(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,c={[E]:t,page:1};u.create(),R(c).then(s=>{const n=s.results;k=n,o.innerHTML=_(n),x.classList.remove("isHidden"),S.innerHTML=`<span class="cat-title-text">/</span> ${t}`}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy(),o.removeEventListener("click",h)})}function z(e){const t=e.target.value.trim().toLowerCase(),c=k.filter(s=>s.name.includes(t));c.length===0&&d.show({position:"topCenter",color:"red",timeout:3e3,message:"Oops! We have found nothing. Try again!"}),o.innerHTML=_(c)}function K(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?i():r()},a=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),r()},i=()=>{s.style.overflow="hidden"},r=()=>{s.style.overflow="visible"};t.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&a()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&a()})}K();const v=document.querySelector("[data-modal]"),y=document.querySelector("p[data-raiting]"),M=document.querySelector(".rating_form"),L=[...document.getElementsByClassName("btn_star")],$=document.querySelector(".modal_window_container");let m=0,g={};const G=()=>{M.reset(),m=0,y.textContent="0.0",L.forEach(e=>{e.classList.remove("btn_star-active")}),v.classList.add("is-hidden"),$.classList.remove("is-hidden")};M.addEventListener("submit",e=>{e.preventDefault();const c=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((a,i)=>{g[i]=a.trim()}),g.rate=m,g.rate<1){d.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}j(c,g)&&(d.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),G())});function J(e){const t="btn_star-active",c="btn_star",s=e.length;let n;e.map(a=>{a.onclick=()=>{if(n=e.indexOf(a),a.className===c)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=c;m=e.filter(r=>{if(r.className===t)return r}).length,y.textContent=`${m}.0`}})}J(L);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",c),e.modal.addEventListener("click",s);function t(){v.classList.remove("is-hidden"),document.addEventListener("keydown",n)}function c(){m=0,L.forEach(a=>{a.classList.remove("btn_star-active")}),y.textContent="0.0",v.classList.add("is-hidden"),$.classList.remove("is-hidden"),document.removeEventListener("keydown",n)}function s(a){a.target===a.currentTarget&&c()}function n(a){a.key==="Escape"&&c()}})();const Q=document.querySelector(".cards"),V=document.querySelector(".modal_window_update"),p=document.querySelector(".modal_window_container"),X=document.querySelector(".close_modal_button"),Y=document.querySelector(".rate_button"),f=document.body,Z=document.querySelector(".rate_button"),ee=document.querySelector("[data-modal]");Q.addEventListener("click",ne);X.addEventListener("click",ce);Z.addEventListener("click",se);window.addEventListener("keydown",q);window.addEventListener("click",q);function te({gifUrl:e,time:t,name:c,bodyPart:s,equipment:n,target:a,description:i,rating:r,burnedCalories:l,popularity:C}){return`<div class="modal_window_content">
<div class="modal_image_container"><img class ="modal_image" src="${e}" alt="${c}">
</div>
<div class="modal_text_content"><h3 class="modal_title">${c}</h3>
<p class = "excercise_rating">${r}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${a}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${s}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${n}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${C}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${i}</p>

</ul></div>
</div >`}function se(){ee.classList.remove("is-hidden"),p.classList.add("is-hidden")}function ne(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;H(s).then(n=>{const a=te(n);V.innerHTML=a}),Y.setAttribute("data-id",s),p.classList.remove("is-hidden"),f.style.overflow="hidden"}function q(e){e.key==="Escape"?(p.classList.add("is-hidden"),f.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(p.classList.add("is-hidden"),f.style.overflow="visible")}function ce(){p.classList.add("is-hidden"),f.style.overflow="visible"}
//# sourceMappingURL=commonHelpers2.js.map
