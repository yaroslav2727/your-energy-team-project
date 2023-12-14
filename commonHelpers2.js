import"./assets/themeBackground-5adaeb1c.js";import{a as M,i as m}from"./assets/vendor-96017409.js";const $="https://your-energy.b.goit.study/api",L=12,D=10,u=M.create({baseURL:$,params:{}}),T=async(e,t=1)=>(await u.get("/filters",{params:{filter:e,page:t,limit:L}})).data,C=async(e=1)=>(await u.get("/filters",{params:{filter:"Muscles",page:e,limit:L}})).data,B=async()=>(await u.get("/quote")).data,I=async({bodypart:e,muscles:t,equipment:c,search:s},n=1)=>{const a=s&&!e&&!t&&!c?"":s;return(await u.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:c||"",keyword:a||"",page:n,limit:D}})).data},O=async e=>(await u.get(`/exercises/${e}`)).data,R=async(e,t)=>(await u.patch(`/exercises/${e}/rating`,t)).data;function E(e){return e.map(({imgURL:t,filter:c,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
    </li>`).join("")}function N(e){return e.length>20?`${e.slice(0,20)}...`:e}function U(e){return`${Math.round(e)}.0`}function x(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function w(e){return e.map(({rating:t,name:c,burnedCalories:s,bodyPart:n,target:a,_id:r})=>`<li class="exercises-item" data-exercise-id="${r}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${U(t)}</p>
				<span class="exercises-name-span">
				<svg class="exercises-icon-star-rating" width="16" height="16">
                  <use href="./img/icons.svg#icon-star-rating"></use>
                </svg>
			</span>
			</div>
			<div class="exercises-btn-wrapper">
				<button type="button" class="exercises-btn js-excercise-button">Start</button>
				<span class="exercises-name-span">
					<svg class="exercises-icon-arrow" width="16" height="16">
						<use href="../img/icons.svg#icon-arrow"></use>
					</svg>
				</span>
			</div>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="./img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${N(c)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${x(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${x(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const d={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let A=1,b="muscles",h=null;const o=document.querySelector(".cards"),j=document.querySelector(".filter-list"),F=document.querySelector(".input-filter-exercises");j.addEventListener("click",Q);o.addEventListener("click",f);F.addEventListener("input",H);d.create();C().then(e=>{const t=e.results;o.innerHTML=E(t),o.addEventListener("click",f)}).catch(e=>{console.error(e),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy()});function Q(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),d.create(),T(t,A).then(s=>{const n=s.results,{filter:a}=n[0];b=a.toLowerCase(),o.innerHTML=E(n),o.addEventListener("click",f)}).catch(s=>{console.error(s),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy()})}function f(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,c={[b]:t,page:1};d.create(),I(c).then(s=>{const n=s.results;h=n,console.log(h),o.innerHTML=w(n)}).catch(s=>{console.error(s),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy(),o.removeEventListener("click",f)})}function H(e){const t=e.target.value.trim().toLowerCase(),c=h.filter(s=>s.name.includes(t));o.innerHTML=w(c)}function P(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?r():i()},a=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),i()},r=()=>{s.style.overflow="hidden"},i=()=>{s.style.overflow="visible"};t.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&a()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&a()})}P();const S=document.querySelector("[data-modal]"),K=document.querySelector("p[data-raiting]"),z=document.querySelector(".btn_close"),y=document.querySelector(".rating_form"),J=[...document.getElementsByClassName("btn_star")];let g=0,p={},W="64f389465ae26083f39b17a2";z.addEventListener("click",e=>{e.preventDefault()});y.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((s,n)=>{p[n]=s.trim()}),p.rate=g,p.rate<1){m.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}R(W,p)&&(m.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),y.reset(),g=0,S.classList.add("is-hidden"))});function X(e){const t="btn_star-active",c="btn_star",s=e.length;let n;e.map(a=>{a.onclick=()=>{if(n=e.indexOf(a),a.className===c)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=c;g=e.filter(i=>{if(i.className===t)return i}).length,K.textContent=`${g}.0`}})}X(J);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",c);function t(){S.classList.contains("is-hidden")===!0&&document.addEventListener("keydown",s),e.modal.classList.toggle("is-hidden")}function c(n){n.target===n.currentTarget&&e.modal.classList.add("is-hidden")}function s(n){n.key==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",s))}})();const Y=document.querySelector(".cards"),G=document.querySelector(".modal_window_update"),_=document.querySelector(".modal_window_container"),V=document.querySelector(".close_modal_button");Y.addEventListener("click",ee);V.addEventListener("click",te);function Z({gifUrl:e,name:t,bodyPart:c,equipment:s,target:n,description:a,rating:r,burnedCalories:i,popularity:l}){return`<div class="modal_window_content">
<img class ="modal_image" src="${e}" alt="${t}">

<h3 class="modal_title">${t}</h3>
<p class = "excercise_rating">${r}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${n}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${c}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${s}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${l}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${i}</p></li>
        <p class="modal_text">${a}</p>

</ul>
</div >`}function ee(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;console.log(s),O(s).then(n=>{console.log(n);const a=Z(n);G.innerHTML=a}),_.classList.remove("is_hidden")}function te(){_.classList.add("is_hidden"),console.log("close modal")}const k="quote",se=document.querySelector(".quote-text"),ne=document.querySelector(".quote-author");async function ce(){try{const{author:e,quote:t}=await B(),c=new Date().toLocaleDateString();localStorage.setItem(k,JSON.stringify({author:e,quote:t,date:c}))}catch(e){console.error("Failed to fetch the quote:",e)}}function q(){const e=localStorage.getItem(k);return JSON.parse(e)}function v(){const e=q();se.textContent=e.quote,ne.textContent=e.author}async function ae(){const e=new Date().toLocaleDateString(),t=q();if(t&&t.date===e){v();return}await ce(),v()}document.addEventListener("DOMContentLoaded",ae);
//# sourceMappingURL=commonHelpers2.js.map
