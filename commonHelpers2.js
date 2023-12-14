import"./assets/themeBackground-1ed25e12.js";import{a as I,i as f}from"./assets/vendor-96017409.js";const O="https://your-energy.b.goit.study/api",S=12,N=10,m=I.create({baseURL:O,params:{}}),A=async(e,t=1)=>(await m.get("/filters",{params:{filter:e,page:t,limit:S}})).data,U=async(e=1)=>(await m.get("/filters",{params:{filter:"Muscles",page:e,limit:S}})).data,j=async()=>(await m.get("/quote")).data,H=async({bodypart:e,muscles:t,equipment:c,search:s},n=1)=>{const a=s&&!e&&!t&&!c?"":s;return(await m.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:c||"",keyword:a||"",page:n,limit:N}})).data},F=async e=>(await m.get(`/exercises/${e}`)).data,Q=async(e,t)=>(await m.patch(`/exercises/${e}/rating`,t)).data;function k(e){return e.map(({imgURL:t,filter:c,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
    </li>`).join("")}function P(e){return e.length>20?`${e.slice(0,20)}...`:e}function K(e){return`${Math.round(e)}.0`}function _(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function q(e){return e.map(({rating:t,name:c,burnedCalories:s,bodyPart:n,target:a,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${K(t)}</p>
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
			<h3 class="exercises-name">${P(c)}</h3>
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
					${_(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const u={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let z=1,M="muscles",L=null;const r=document.querySelector(".cards"),J=document.querySelector(".filter-list"),W=document.querySelector(".input-filter-exercises"),$=document.querySelector(".cat-title-span");J.addEventListener("click",X);r.addEventListener("click",y);W.addEventListener("input",Y);u.create();U().then(e=>{const t=e.results;r.innerHTML=k(t),r.addEventListener("click",y)}).catch(e=>{console.error(e),f.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()});function X(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),u.create(),A(t,z).then(s=>{const n=s.results,{filter:a}=n[0];M=a.toLowerCase(),$.innerHTML="",r.innerHTML=k(n),r.addEventListener("click",y)}).catch(s=>{console.error(s),f.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()})}function y(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,c={[M]:t,page:1};u.create(),H(c).then(s=>{const n=s.results;L=n,console.log(L),r.innerHTML=q(n),$.innerHTML=`<span class="cat-title-text">/</span> ${t}`}).catch(s=>{console.error(s),f.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy(),r.removeEventListener("click",y)})}function Y(e){const t=e.target.value.trim().toLowerCase(),c=L.filter(s=>s.name.includes(t));r.innerHTML=q(c)}function G(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?o():i()},a=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),i()},o=()=>{s.style.overflow="hidden"},i=()=>{s.style.overflow="visible"};t.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&a()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&a()})}G();const w=document.querySelector("[data-modal]"),p=document.querySelector("p[data-raiting]"),E=document.querySelector(".rating_form"),g=[...document.getElementsByClassName("btn_star")],C=document.querySelector(".modal_window_container");let d=0,v={};E.addEventListener("submit",e=>{e.preventDefault();const c=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((a,o)=>{v[o]=a.trim()}),v.rate=d,v.rate<1){f.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}Q(c,v)&&(f.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),E.reset(),d=0,p.textContent="0.0",g.forEach(a=>{a.classList.remove("btn_star-active")}),w.classList.add("is-hidden"),C.classList.remove("is-hidden"))});function V(e){const t="btn_star-active",c="btn_star",s=e.length;let n;e.map(a=>{a.onclick=()=>{if(n=e.indexOf(a),a.className===c)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=c;d=e.filter(i=>{if(i.className===t)return i}).length,p.textContent=`${d}.0`}})}V(g);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",c),e.modal.addEventListener("click",s);function t(){w.classList.remove("is-hidden"),document.addEventListener("keydown",n)}function c(){d=0,g.forEach(a=>{a.classList.remove("btn_star-active")}),p.textContent="0.0",w.classList.add("is-hidden"),C.classList.remove("is-hidden"),document.removeEventListener("keydown",n)}function s(a){a.target===a.currentTarget&&(d=0,g.forEach(o=>{o.classList.remove("btn_star-active")}),p.textContent="0.0",e.modal.classList.add("is-hidden"))}function n(a){a.key==="Escape"&&(d=0,g.forEach(o=>{o.classList.remove("btn_star-active")}),p.textContent="0.0",e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",n))}})();const Z=document.querySelector(".cards"),ee=document.querySelector(".modal_window_update"),h=document.querySelector(".modal_window_container"),te=document.querySelector(".close_modal_button"),se=document.querySelector(".rate_button"),x=document.body,ne=document.querySelector(".rate_button"),ce=document.querySelector("[data-modal]");Z.addEventListener("click",re);te.addEventListener("click",ie);ne.addEventListener("click",oe);window.addEventListener("keydown",T);window.addEventListener("click",T);function ae({gifUrl:e,time:t,name:c,bodyPart:s,equipment:n,target:a,description:o,rating:i,burnedCalories:l,popularity:R}){return`<div class="modal_window_content">
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
        <p class="excercise_text">${R}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${o}</p>

</ul></div>
</div >`}function oe(){ce.classList.remove("is-hidden"),h.classList.add("is-hidden")}function re(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;F(s).then(n=>{const a=ae(n);ee.innerHTML=a}),se.setAttribute("data-id",s),h.classList.remove("is-hidden"),x.style.overflow="hidden"}function T(e){e.key==="Escape"?(h.classList.add("is-hidden"),x.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(h.classList.add("is-hidden"),x.style.overflow="visible")}function ie(){h.classList.add("is-hidden"),x.style.overflow="visible"}const D="quote",le=document.querySelector(".quote-text"),de=document.querySelector(".quote-author");async function ue(){try{const{author:e,quote:t}=await j(),c=new Date().toLocaleDateString();localStorage.setItem(D,JSON.stringify({author:e,quote:t,date:c}))}catch(e){console.error("Failed to fetch the quote:",e)}}function B(){const e=localStorage.getItem(D);return JSON.parse(e)}function b(){const e=B();le.textContent=e.quote,de.textContent=e.author}async function me(){const e=new Date().toLocaleDateString(),t=B();if(t&&t.date===e){b();return}await ue(),b()}document.addEventListener("DOMContentLoaded",me);
//# sourceMappingURL=commonHelpers2.js.map
