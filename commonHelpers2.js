import"./assets/themeBackground-3205a5fa.js";import{a as O,l as U,i as u}from"./assets/vendor-57c75b59.js";const N="https://your-energy.b.goit.study/api",S=12,A=10,p=O.create({baseURL:N,params:{}}),H=async(e,t=1)=>(await p.get("/filters",{params:{filter:e,page:t,limit:S}})).data,j=async(e=1)=>(await p.get("/filters",{params:{filter:"Muscles",page:e,limit:S}})).data,F=async()=>(await p.get("/quote")).data,Q=async({bodypart:e,muscles:t,equipment:a,search:s},n=1)=>{const c=s&&!e&&!t&&!a?"":s;return(await p.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:a||"",keyword:c||"",page:n,limit:A}})).data},P=async e=>(await p.get(`/exercises/${e}`)).data,K=async(e,t)=>(await p.patch(`/exercises/${e}/rating`,t)).data;function k(e){return e.map(({imgURL:t,filter:a,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}') ;
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${s}</p>
      <p class="name-exercises">${a}</p>
  </div>
    </li>`).join("")}function W(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function z(e){return`${Math.round(e)}.0`}function _(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function q(e){return e.map(({rating:t,name:a,burnedCalories:s,bodyPart:n,target:c,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${z(t)}</p>
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
			<h3 class="exercises-name">${W(a)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${_(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${_(c)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const m={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let J=1,M="muscles",C=null;const r=document.querySelector(".cards"),X=document.querySelector(".filter-list"),w=document.querySelector(".filter-input-wrapper"),$=document.querySelector(".cat-title-span");X.addEventListener("click",Y);r.addEventListener("click",y);w.addEventListener("input",U(G,500));m.create();j().then(e=>{const t=e.results;r.innerHTML=k(t),r.addEventListener("click",y)}).catch(e=>{console.error(e),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{m.destroy()});function Y(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),m.create(),H(t,J).then(s=>{const n=s.results,{filter:c}=n[0];M=c.toLowerCase(),$.innerHTML="",r.innerHTML=k(n),r.addEventListener("click",y),w.classList.add("isHidden")}).catch(s=>{console.error(s),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{m.destroy()})}function y(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,a={[M]:t,page:1};m.create(),Q(a).then(s=>{const n=s.results;C=n,r.innerHTML=q(n),w.classList.remove("isHidden"),$.innerHTML=`<span class="cat-title-text">/</span> ${t}`}).catch(s=>{console.error(s),u.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{m.destroy(),r.removeEventListener("click",y)})}function G(e){const t=e.target.value.trim().toLowerCase(),a=C.filter(s=>s.name.includes(t));a.length===0&&u.show({position:"topCenter",color:"red",timeout:3e3,message:"Oops! We have found nothing. Try again!"}),r.innerHTML=q(a)}function V(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?o():i()},c=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),i()},o=()=>{s.style.overflow="hidden"},i=()=>{s.style.overflow="visible"};t.addEventListener("click",n),a.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&c()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&c()})}V();const L=document.querySelector("[data-modal]"),g=document.querySelector("p[data-raiting]"),b=document.querySelector(".rating_form"),f=[...document.getElementsByClassName("btn_star")],T=document.querySelector(".modal_window_container");let d=0,v={};b.addEventListener("submit",e=>{e.preventDefault();const a=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((c,o)=>{v[o]=c.trim()}),v.rate=d,v.rate<1){u.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}K(a,v)&&(u.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),b.reset(),d=0,g.textContent="0.0",f.forEach(c=>{c.classList.remove("btn_star-active")}),L.classList.add("is-hidden"),T.classList.remove("is-hidden"))});function Z(e){const t="btn_star-active",a="btn_star",s=e.length;let n;e.map(c=>{c.onclick=()=>{if(n=e.indexOf(c),c.className===a)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=a;d=e.filter(i=>{if(i.className===t)return i}).length,g.textContent=`${d}.0`}})}Z(f);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",a),e.modal.addEventListener("click",s);function t(){L.classList.remove("is-hidden"),document.addEventListener("keydown",n)}function a(){d=0,f.forEach(c=>{c.classList.remove("btn_star-active")}),g.textContent="0.0",L.classList.add("is-hidden"),T.classList.remove("is-hidden"),document.removeEventListener("keydown",n)}function s(c){c.target===c.currentTarget&&(d=0,f.forEach(o=>{o.classList.remove("btn_star-active")}),g.textContent="0.0",e.modal.classList.add("is-hidden"))}function n(c){c.key==="Escape"&&(d=0,f.forEach(o=>{o.classList.remove("btn_star-active")}),g.textContent="0.0",e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",n))}})();const ee=document.querySelector(".cards"),te=document.querySelector(".modal_window_update"),h=document.querySelector(".modal_window_container"),se=document.querySelector(".close_modal_button"),ne=document.querySelector(".rate_button"),x=document.body,ae=document.querySelector(".rate_button"),ce=document.querySelector("[data-modal]");ee.addEventListener("click",ie);se.addEventListener("click",le);ae.addEventListener("click",re);window.addEventListener("keydown",D);window.addEventListener("click",D);function oe({gifUrl:e,time:t,name:a,bodyPart:s,equipment:n,target:c,description:o,rating:i,burnedCalories:l,popularity:I}){return`<div class="modal_window_content">
<div class="modal_image_container"><img class ="modal_image" src="${e}" alt="${a}">
</div>
<div class="modal_text_content"><h3 class="modal_title">${a}</h3>
<p class = "excercise_rating">${i}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${c}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${s}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${n}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${I}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${o}</p>

</ul></div>
</div >`}function re(){ce.classList.remove("is-hidden"),h.classList.add("is-hidden")}function ie(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;P(s).then(n=>{const c=oe(n);te.innerHTML=c}),ne.setAttribute("data-id",s),h.classList.remove("is-hidden"),x.style.overflow="hidden"}function D(e){e.key==="Escape"?(h.classList.add("is-hidden"),x.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(h.classList.add("is-hidden"),x.style.overflow="visible")}function le(){h.classList.add("is-hidden"),x.style.overflow="visible"}const B="quote",de=document.querySelector(".quote-text"),ue=document.querySelector(".quote-author");async function me(){try{const{author:e,quote:t}=await F(),a=new Date().toLocaleDateString();localStorage.setItem(B,JSON.stringify({author:e,quote:t,date:a}))}catch(e){console.error("Failed to fetch the quote:",e)}}function R(){const e=localStorage.getItem(B);return JSON.parse(e)}function E(){const e=R();de.textContent=e.quote,ue.textContent=e.author}async function pe(){const e=new Date().toLocaleDateString(),t=R();if(t&&t.date===e){E();return}await me(),E()}document.addEventListener("DOMContentLoaded",pe);
//# sourceMappingURL=commonHelpers2.js.map
