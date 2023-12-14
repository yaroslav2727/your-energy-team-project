import"./assets/themeBackground-1ed25e12.js";import{a as C,i as m}from"./assets/vendor-96017409.js";const B="https://your-energy.b.goit.study/api",b=12,I=10,u=C.create({baseURL:B,params:{}}),R=async(e,t=1)=>(await u.get("/filters",{params:{filter:e,page:t,limit:b}})).data,O=async(e=1)=>(await u.get("/filters",{params:{filter:"Muscles",page:e,limit:b}})).data,N=async()=>(await u.get("/quote")).data,A=async({bodypart:e,muscles:t,equipment:c,search:s},n=1)=>{const a=s&&!e&&!t&&!c?"":s;return(await u.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:c||"",keyword:a||"",page:n,limit:I}})).data},U=async e=>(await u.get(`/exercises/${e}`)).data,j=async(e,t)=>(await u.patch(`/exercises/${e}/rating`,t)).data;function E(e){return e.map(({imgURL:t,filter:c,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
      <p class="name-exercises">${c}</p>
  </div>
    </li>`).join("")}function H(e){return e.length>20?`${e.slice(0,20)}...`:e}function F(e){return`${Math.round(e)}.0`}function v(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function _(e){return e.map(({rating:t,name:c,burnedCalories:s,bodyPart:n,target:a,_id:r})=>`<li class="exercises-item" data-exercise-id="${r}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${F(t)}</p>
				<span class="exercises-name-span">
				<svg class="exercises-icon-star-rating" width="16" height="16">
                  <use href="./../img/icons.svg#icon-star-rating"></use>
                </svg>
			</span>
			</div>
			<div class="exercises-btn-wrapper">
				<button type="button" class="exercises-btn js-excercise-button">Start</button>
				<span class="exercises-name-span">
					<svg class="exercises-icon-arrow" width="16" height="16">
						<use href="./../img/icons.svg#icon-arrow"></use>
					</svg>
				</span>
			</div>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="./../img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${H(c)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${v(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${v(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const d={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let Q=1,S="muscles",y=null;const o=document.querySelector(".cards"),P=document.querySelector(".filter-list"),K=document.querySelector(".input-filter-exercises"),k=document.querySelector(".cat-title-span");P.addEventListener("click",z);o.addEventListener("click",x);K.addEventListener("input",J);d.create();O().then(e=>{const t=e.results;o.innerHTML=E(t),o.addEventListener("click",x)}).catch(e=>{console.error(e),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy()});function z(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),d.create(),R(t,Q).then(s=>{const n=s.results,{filter:a}=n[0];S=a.toLowerCase(),k.innerHTML="",o.innerHTML=E(n),o.addEventListener("click",x)}).catch(s=>{console.error(s),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy()})}function x(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,c={[S]:t,page:1};d.create(),A(c).then(s=>{const n=s.results;y=n,console.log(y),o.innerHTML=_(n),k.innerHTML=`<span class="cat-title-text">/</span> ${t}`}).catch(s=>{console.error(s),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy(),o.removeEventListener("click",x)})}function J(e){const t=e.target.value.trim().toLowerCase(),c=y.filter(s=>s.name.includes(t));o.innerHTML=_(c)}function W(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?r():i()},a=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),i()},r=()=>{s.style.overflow="hidden"},i=()=>{s.style.overflow="visible"};t.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&a()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&a()})}W();const q=document.querySelector("[data-modal]"),X=document.querySelector("p[data-raiting]"),Y=document.querySelector(".btn_close"),L=document.querySelector(".rating_form"),G=[...document.getElementsByClassName("btn_star")];let f=0,g={},V="64f389465ae26083f39b17a2";Y.addEventListener("click",e=>{e.preventDefault()});L.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((s,n)=>{g[n]=s.trim()}),g.rate=f,g.rate<1){m.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}j(V,g)&&(m.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),L.reset(),f=0,q.classList.add("is-hidden"))});function Z(e){const t="btn_star-active",c="btn_star",s=e.length;let n;e.map(a=>{a.onclick=()=>{if(n=e.indexOf(a),a.className===c)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=c;f=e.filter(i=>{if(i.className===t)return i}).length,X.textContent=`${f}.0`}})}Z(G);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",c);function t(){q.classList.contains("is-hidden")===!0&&document.addEventListener("keydown",s),e.modal.classList.toggle("is-hidden")}function c(n){n.target===n.currentTarget&&e.modal.classList.add("is-hidden")}function s(n){n.key==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",s))}})();const ee=document.querySelector(".cards"),te=document.querySelector(".modal_window_update"),p=document.querySelector(".modal_window_container"),se=document.querySelector(".close_modal_button"),ne=document.querySelector(".rate_button"),h=document.body,ce=document.querySelector(".rate_button"),ae=document.querySelector("[data-modal]");ee.addEventListener("click",ie);se.addEventListener("click",le);ce.addEventListener("click",re);window.addEventListener("keydown",M);window.addEventListener("click",M);function oe({gifUrl:e,time:t,name:c,bodyPart:s,equipment:n,target:a,description:r,rating:i,burnedCalories:l,popularity:D}){return`<div class="modal_window_content">
<div class="modal_image_container"><img class ="modal_image" src="${e}" alt="${c}">
</div>
<div class="modal_text_content"><h3 class="modal_title">${c}</h3>
<p class = "excercise_rating">${i}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${a}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${s}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${n}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${D}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${r}</p>

</ul></div>
</div >`}function re(){ae.classList.remove("is-hidden"),p.classList.add("is-hidden")}function ie(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;U(s).then(n=>{const a=oe(n);te.innerHTML=a}),ne.setAttribute("dataId",s),p.classList.remove("is-hidden"),h.style.overflow="hidden"}function M(e){e.key==="Escape"?(p.classList.add("is-hidden"),h.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(p.classList.add("is-hidden"),h.style.overflow="visible")}function le(){p.classList.add("is-hidden"),h.style.overflow="visible"}const $="quote",de=document.querySelector(".quote-text"),ue=document.querySelector(".quote-author");async function me(){try{const{author:e,quote:t}=await N(),c=new Date().toLocaleDateString();localStorage.setItem($,JSON.stringify({author:e,quote:t,date:c}))}catch(e){console.error("Failed to fetch the quote:",e)}}function T(){const e=localStorage.getItem($);return JSON.parse(e)}function w(){const e=T();de.textContent=e.quote,ue.textContent=e.author}async function pe(){const e=new Date().toLocaleDateString(),t=T();if(t&&t.date===e){w();return}await me(),w()}document.addEventListener("DOMContentLoaded",pe);
//# sourceMappingURL=commonHelpers2.js.map