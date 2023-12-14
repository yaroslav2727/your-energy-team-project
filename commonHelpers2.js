import"./assets/themeBackground-59b3794d.js";import{a as D,i as m}from"./assets/vendor-96017409.js";const C="https://your-energy.b.goit.study/api",_=12,B=10,u=D.create({baseURL:C,params:{}}),I=async(e,t=1)=>(await u.get("/filters",{params:{filter:e,page:t,limit:_}})).data,R=async(e=1)=>(await u.get("/filters",{params:{filter:"Muscles",page:e,limit:_}})).data,O=async()=>(await u.get("/quote")).data,N=async({bodypart:e,muscles:t,equipment:c,search:s},n=1)=>{const a=s&&!e&&!t&&!c?"":s;return(await u.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:c||"",keyword:a||"",page:n,limit:B}})).data},A=async e=>(await u.get(`/exercises/${e}`)).data,U=async(e,t)=>(await u.patch(`/exercises/${e}/rating`,t)).data;function b(e){return e.map(({imgURL:t,filter:c,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
    </li>`).join("")}function j(e){return e.length>20?`${e.slice(0,20)}...`:e}function F(e){return`${Math.round(e)}.0`}function y(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function E(e){return e.map(({rating:t,name:c,burnedCalories:s,bodyPart:n,target:a,_id:r})=>`<li class="exercises-item" data-exercise-id="${r}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${F(t)}</p>
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
			<h3 class="exercises-name">${j(c)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${y(n)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${y(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const d={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let Q=1,S="muscles",v=null;const o=document.querySelector(".cards"),H=document.querySelector(".filter-list"),P=document.querySelector(".input-filter-exercises");H.addEventListener("click",K);o.addEventListener("click",x);P.addEventListener("input",z);d.create();R().then(e=>{const t=e.results;o.innerHTML=b(t),o.addEventListener("click",x)}).catch(e=>{console.error(e),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy()});function K(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),d.create(),I(t,Q).then(s=>{const n=s.results,{filter:a}=n[0];S=a.toLowerCase(),o.innerHTML=b(n),o.addEventListener("click",x)}).catch(s=>{console.error(s),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy()})}function x(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,c={[S]:t,page:1};d.create(),N(c).then(s=>{const n=s.results;v=n,console.log(v),o.innerHTML=E(n)}).catch(s=>{console.error(s),m.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{d.destroy(),o.removeEventListener("click",x)})}function z(e){const t=e.target.value.trim().toLowerCase(),c=v.filter(s=>s.name.includes(t));o.innerHTML=E(c)}function J(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?r():i()},a=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),i()},r=()=>{s.style.overflow="hidden"},i=()=>{s.style.overflow="visible"};t.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&a()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&a()})}J();const k=document.querySelector("[data-modal]"),W=document.querySelector("p[data-raiting]"),X=document.querySelector(".btn_close"),L=document.querySelector(".rating_form"),Y=[...document.getElementsByClassName("btn_star")];let g=0,p={},G="64f389465ae26083f39b17a2";X.addEventListener("click",e=>{e.preventDefault()});L.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((s,n)=>{p[n]=s.trim()}),p.rate=g,p.rate<1){m.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}U(G,p)&&(m.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),L.reset(),g=0,k.classList.add("is-hidden"))});function V(e){const t="btn_star-active",c="btn_star",s=e.length;let n;e.map(a=>{a.onclick=()=>{if(n=e.indexOf(a),a.className===c)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=c;g=e.filter(i=>{if(i.className===t)return i}).length,W.textContent=`${g}.0`}})}V(Y);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",c);function t(){k.classList.contains("is-hidden")===!0&&document.addEventListener("keydown",s),e.modal.classList.toggle("is-hidden")}function c(n){n.target===n.currentTarget&&e.modal.classList.add("is-hidden")}function s(n){n.key==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",s))}})();const Z=document.querySelector(".cards"),ee=document.querySelector(".modal_window_update"),f=document.querySelector(".modal_window_container"),te=document.querySelector(".close_modal_button"),se=document.querySelector(".rate_button"),h=document.body;Z.addEventListener("click",ce);te.addEventListener("click",ae);function ne({gifUrl:e,time:t,name:c,bodyPart:s,equipment:n,target:a,description:r,rating:i,burnedCalories:l,popularity:T}){return`<div class="modal_window_content">
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
        <p class="excercise_text">${T}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${r}</p>

</ul></div>
</div >`}function ce(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;A(s).then(n=>{const a=ne(n);ee.innerHTML=a}),se.setAttribute("dataId",s),f.classList.remove("is_hidden"),h.style.overflow="hidden"}window.addEventListener("keydown",q);window.addEventListener("click",q);function q(e){e.key==="Escape"?(f.classList.add("is_hidden"),h.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(f.classList.add("is_hidden"),h.style.overflow="visible")}function ae(){f.classList.add("is_hidden"),h.style.overflow="visible"}const M="quote",oe=document.querySelector(".quote-text"),re=document.querySelector(".quote-author");async function ie(){try{const{author:e,quote:t}=await O(),c=new Date().toLocaleDateString();localStorage.setItem(M,JSON.stringify({author:e,quote:t,date:c}))}catch(e){console.error("Failed to fetch the quote:",e)}}function $(){const e=localStorage.getItem(M);return JSON.parse(e)}function w(){const e=$();oe.textContent=e.quote,re.textContent=e.author}async function le(){const e=new Date().toLocaleDateString(),t=$();if(t&&t.date===e){w();return}await ie(),w()}document.addEventListener("DOMContentLoaded",le);
//# sourceMappingURL=commonHelpers2.js.map
