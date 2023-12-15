import{g as H,a as R,b as I,p as j,c as D}from"./assets/quote-5198aa34.js";import{l as N,i as d}from"./assets/vendor-46eef696.js";const O="/your-energy-team-project/assets/no-image-3f568e29.jpg";function k(e){return e.map(({imgURL:t,filter:c,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${A(t)}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${U(s)}</p>
      <p class="name-exercises">${c}</p>
  </div>
    </li>`).join("")}const U=e=>e[0].toUpperCase()+e.slice(1),A=e=>`${e?`${e}`:`${O}`}`;function W(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function P(e){return`${Math.round(e)}.0`}function E(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function y(e){return e.map(({rating:t,name:c,burnedCalories:s,bodyPart:n,target:i,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${P(t)}</p>
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
			<h3 class="exercises-name">${W(c)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${E(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${E(i)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const u={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let F=1,S="muscles",L=null;const a=document.querySelector(".cards"),z=document.querySelector(".filter-list"),K=document.querySelector(".input-filter-exercises"),w=document.querySelector(".filter-input-wrapper"),M=document.querySelector(".cat-title-span"),G=document.querySelector(".filter-icon-search"),$=document.querySelector(".filter-icon-close");z.addEventListener("click",J);a.addEventListener("click",h);w.addEventListener("input",N(Q,500));$.addEventListener("click",V);u.create();H().then(e=>{const t=e.results;a.innerHTML=k(t),a.addEventListener("click",h)}).catch(e=>{console.error(e),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()});function J(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),u.create(),R(t,F).then(s=>{const n=s.results,{filter:i}=n[0];S=i.toLowerCase(),M.innerHTML="",a.innerHTML=k(n),a.addEventListener("click",h),w.classList.add("isHidden")}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()})}function h(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,c={[S]:t,page:1};u.create(),I(c).then(s=>{const n=s.results;L=n,a.innerHTML=y(n),w.classList.remove("isHidden"),M.innerHTML=`<span class="cat-title-text">/</span> ${t}`}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy(),a.removeEventListener("click",h)})}function Q(e){const t=e.target.value.trim().toLowerCase(),c=L.filter(s=>s.name.includes(t));if(t.length!==0&&v(),t.length===0&&v(),c.length===0&&d.show({position:"topCenter",color:"red",timeout:1500,message:"Oops! We have found nothing. Try again!"}),c.length!==0){const s=c.length===1?"exercise":"exercises";d.show({position:"topCenter",color:"green",timeout:1500,message:`Hooray! We found ${c.length} ${s}.`})}a.innerHTML=y(c)}function V(){K.value="",a.innerHTML=y(L),v()}function v(){G.classList.toggle("isHidden"),$.classList.toggle("isHidden")}function X(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?o():r()},i=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),r()},o=()=>{s.style.overflow="hidden"},r=()=>{s.style.overflow="visible"};t.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&i()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&i()})}X();const x=document.querySelector("[data-modal]"),b=document.querySelector("p[data-raiting]"),q=document.querySelector(".rating_form"),_=[...document.getElementsByClassName("btn_star")],C=document.querySelector(".modal_window_container");let m=0,g={};const Y=()=>{q.reset(),m=0,b.textContent="0.0",_.forEach(e=>{e.classList.remove("btn_star-active")}),x.classList.add("is-hidden"),C.classList.remove("is-hidden")};q.addEventListener("submit",e=>{e.preventDefault();const c=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((i,o)=>{g[o]=i.trim()}),g.rate=m,g.rate<1){d.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}j(c,g)&&(d.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),Y())});function Z(e){const t="btn_star-active",c="btn_star",s=e.length;let n;e.map(i=>{i.onclick=()=>{if(n=e.indexOf(i),i.className===c)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=c;m=e.filter(r=>{if(r.className===t)return r}).length,b.textContent=`${m}.0`}})}Z(_);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",c),e.modal.addEventListener("click",s);function t(){x.classList.remove("is-hidden"),document.addEventListener("keydown",n)}function c(){m=0,_.forEach(i=>{i.classList.remove("btn_star-active")}),b.textContent="0.0",x.classList.add("is-hidden"),C.classList.remove("is-hidden"),document.removeEventListener("keydown",n)}function s(i){i.target===i.currentTarget&&c()}function n(i){i.key==="Escape"&&c()}})();const ee=document.querySelector(".cards"),te=document.querySelector(".modal_window_update"),p=document.querySelector(".modal_window_container"),se=document.querySelector(".close_modal_button"),ne=document.querySelector(".rate_button"),f=document.body,ce=document.querySelector(".rate_button"),ie=document.querySelector("[data-modal]");ee.addEventListener("click",re);se.addEventListener("click",le);ce.addEventListener("click",oe);window.addEventListener("keydown",T);window.addEventListener("click",T);function ae({gifUrl:e,time:t,name:c,bodyPart:s,equipment:n,target:i,description:o,rating:r,burnedCalories:l,popularity:B}){return`<div class="modal_window_content">
<div class="modal_image_container"><img class ="modal_image" src="${e}" alt="${c}">
</div>
<div class="modal_text_content"><h3 class="modal_title">${c}</h3>
<p class = "excercise_rating">${r}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${i}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${s}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${n}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${B}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${o}</p>

</ul></div>
</div >`}function oe(){ie.classList.remove("is-hidden"),p.classList.add("is-hidden")}function re(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;D(s).then(n=>{const i=ae(n);te.innerHTML=i}),ne.setAttribute("data-id",s),p.classList.remove("is-hidden"),f.style.overflow="hidden"}function T(e){e.key==="Escape"?(p.classList.add("is-hidden"),f.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(p.classList.add("is-hidden"),f.style.overflow="visible")}function le(){p.classList.add("is-hidden"),f.style.overflow="visible"}
//# sourceMappingURL=commonHelpers2.js.map
