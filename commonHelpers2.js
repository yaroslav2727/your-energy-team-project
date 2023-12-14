import{g as T,a as B,b as R,p as j,c as I}from"./assets/quote-1f304bb0.js";import{l as H,i as u}from"./assets/vendor-46eef696.js";const N="/your-energy-team-project/assets/no-image-3f568e29.jpg";function _(e){return e.map(({imgURL:t,filter:a,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
      <p class="name-exercises">${a}</p>
  </div>
    </li>`).join("")}const O=e=>e[0].toUpperCase()+e.slice(1),D=e=>`${e?`${e}`:`${N}`}`;function U(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function A(e){return`${Math.round(e)}.0`}function b(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function E(e){return e.map(({rating:t,name:a,burnedCalories:s,bodyPart:n,target:c,_id:i})=>`<li class="exercises-item" data-exercise-id="${i}">
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
			<h3 class="exercises-name">${U(a)}</h3>
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
					${b(c)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const m={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let P=1,k="muscles",S=null;const o=document.querySelector(".cards"),F=document.querySelector(".filter-list"),L=document.querySelector(".filter-input-wrapper"),M=document.querySelector(".cat-title-span");F.addEventListener("click",W);o.addEventListener("click",x);L.addEventListener("input",H(z,500));m.create();T().then(e=>{const t=e.results;o.innerHTML=_(t),o.addEventListener("click",x)}).catch(e=>{console.error(e),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{m.destroy()});function W(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),m.create(),B(t,P).then(s=>{const n=s.results,{filter:c}=n[0];k=c.toLowerCase(),M.innerHTML="",o.innerHTML=_(n),o.addEventListener("click",x),L.classList.add("isHidden")}).catch(s=>{console.error(s),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{m.destroy()})}function x(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,a={[k]:t,page:1};m.create(),R(a).then(s=>{const n=s.results;S=n,o.innerHTML=E(n),L.classList.remove("isHidden"),M.innerHTML=`<span class="cat-title-text">/</span> ${t}`}).catch(s=>{console.error(s),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{m.destroy(),o.removeEventListener("click",x)})}function z(e){const t=e.target.value.trim().toLowerCase(),a=S.filter(s=>s.name.includes(t));a.length===0&&u.show({position:"topCenter",color:"red",timeout:3e3,message:"Oops! We have found nothing. Try again!"}),o.innerHTML=E(a)}function K(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?i():r()},c=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),r()},i=()=>{s.style.overflow="hidden"},r=()=>{s.style.overflow="visible"};t.addEventListener("click",n),a.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&c()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&c()})}K();const y=document.querySelector("[data-modal]"),p=document.querySelector("p[data-raiting]"),w=document.querySelector(".rating_form"),g=[...document.getElementsByClassName("btn_star")],$=document.querySelector(".modal_window_container");let d=0,v={};w.addEventListener("submit",e=>{e.preventDefault();const a=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((c,i)=>{v[i]=c.trim()}),v.rate=d,v.rate<1){u.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}j(a,v)&&(u.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),w.reset(),d=0,p.textContent="0.0",g.forEach(c=>{c.classList.remove("btn_star-active")}),y.classList.add("is-hidden"),$.classList.remove("is-hidden"))});function G(e){const t="btn_star-active",a="btn_star",s=e.length;let n;e.map(c=>{c.onclick=()=>{if(n=e.indexOf(c),c.className===a)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=a;d=e.filter(r=>{if(r.className===t)return r}).length,p.textContent=`${d}.0`}})}G(g);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",a),e.modal.addEventListener("click",s);function t(){y.classList.remove("is-hidden"),document.addEventListener("keydown",n)}function a(){d=0,g.forEach(c=>{c.classList.remove("btn_star-active")}),p.textContent="0.0",y.classList.add("is-hidden"),$.classList.remove("is-hidden"),document.removeEventListener("keydown",n)}function s(c){c.target===c.currentTarget&&(d=0,g.forEach(i=>{i.classList.remove("btn_star-active")}),p.textContent="0.0",e.modal.classList.add("is-hidden"))}function n(c){c.key==="Escape"&&(d=0,g.forEach(i=>{i.classList.remove("btn_star-active")}),p.textContent="0.0",e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",n))}})();const J=document.querySelector(".cards"),Q=document.querySelector(".modal_window_update"),f=document.querySelector(".modal_window_container"),V=document.querySelector(".close_modal_button"),X=document.querySelector(".rate_button"),h=document.body,Y=document.querySelector(".rate_button"),Z=document.querySelector("[data-modal]");J.addEventListener("click",se);V.addEventListener("click",ne);Y.addEventListener("click",te);window.addEventListener("keydown",C);window.addEventListener("click",C);function ee({gifUrl:e,time:t,name:a,bodyPart:s,equipment:n,target:c,description:i,rating:r,burnedCalories:l,popularity:q}){return`<div class="modal_window_content">
<div class="modal_image_container"><img class ="modal_image" src="${e}" alt="${a}">
</div>
<div class="modal_text_content"><h3 class="modal_title">${a}</h3>
<p class = "excercise_rating">${r}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${c}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${s}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${n}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${q}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${i}</p>

</ul></div>
</div >`}function te(){Z.classList.remove("is-hidden"),f.classList.add("is-hidden")}function se(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;I(s).then(n=>{const c=ee(n);Q.innerHTML=c}),X.setAttribute("data-id",s),f.classList.remove("is-hidden"),h.style.overflow="hidden"}function C(e){e.key==="Escape"?(f.classList.add("is-hidden"),h.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(f.classList.add("is-hidden"),h.style.overflow="visible")}function ne(){f.classList.add("is-hidden"),h.style.overflow="visible"}
//# sourceMappingURL=commonHelpers2.js.map
