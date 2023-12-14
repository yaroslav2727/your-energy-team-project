import"./assets/themeBackground-f8a892a0.js";import{a as O,i as f}from"./assets/vendor-96017409.js";const U="https://your-energy.b.goit.study/api",S=12,N=10,m=O.create({baseURL:U,params:{}}),A=async(e,t=1)=>(await m.get("/filters",{params:{filter:e,page:t,limit:S}})).data,H=async(e=1)=>(await m.get("/filters",{params:{filter:"Muscles",page:e,limit:S}})).data,j=async()=>(await m.get("/quote")).data,F=async({bodypart:e,muscles:t,equipment:a,search:s},n=1)=>{const c=s&&!e&&!t&&!a?"":s;return(await m.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:a||"",keyword:c||"",page:n,limit:N}})).data},Q=async e=>(await m.get(`/exercises/${e}`)).data,P=async(e,t)=>(await m.patch(`/exercises/${e}/rating`,t)).data;function k(e){return e.map(({imgURL:t,filter:a,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
    </li>`).join("")}function K(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>20?`${t.slice(0,20)}...`:t}function z(e){return`${Math.round(e)}.0`}function _(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function q(e){return e.map(({rating:t,name:a,burnedCalories:s,bodyPart:n,target:c,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${z(t)}</p>
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
			<h3 class="exercises-name">${K(a)}</h3>
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
	</li>`).join("")}const u={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let J=1,M="muscles",$=null;const i=document.querySelector(".cards"),W=document.querySelector(".filter-list"),w=document.querySelector(".input-filter-exercises"),C=document.querySelector(".cat-title-span");W.addEventListener("click",X);i.addEventListener("click",y);w.addEventListener("input",Y);u.create();H().then(e=>{const t=e.results;i.innerHTML=k(t),i.addEventListener("click",y)}).catch(e=>{console.error(e),f.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()});function X(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),u.create(),A(t,J).then(s=>{const n=s.results,{filter:c}=n[0];M=c.toLowerCase(),C.innerHTML="",i.innerHTML=k(n),i.addEventListener("click",y),w.classList.add("isHidden")}).catch(s=>{console.error(s),f.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy()})}function y(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,a={[M]:t,page:1};u.create(),F(a).then(s=>{const n=s.results;$=n,i.innerHTML=q(n),w.classList.remove("isHidden"),C.innerHTML=`<span class="cat-title-text">/</span> ${t}`}).catch(s=>{console.error(s),f.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{u.destroy(),i.removeEventListener("click",y)})}function Y(e){const t=e.target.value.trim().toLowerCase(),a=$.filter(s=>s.name.includes(t));i.innerHTML=q(a)}function G(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),s=document.body,n=()=>{const l=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),s.classList.toggle("menu-open"),s.classList.contains("menu-open")?o():r()},c=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),s.classList.remove("menu-open"),r()},o=()=>{s.style.overflow="hidden"},r=()=>{s.style.overflow="visible"};t.addEventListener("click",n),a.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&c()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&e.classList.contains("is-open")&&c()})}G();const L=document.querySelector("[data-modal]"),p=document.querySelector("p[data-raiting]"),E=document.querySelector(".rating_form"),g=[...document.getElementsByClassName("btn_star")],T=document.querySelector(".modal_window_container");let d=0,v={};E.addEventListener("submit",e=>{e.preventDefault();const a=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((c,o)=>{v[o]=c.trim()}),v.rate=d,v.rate<1){f.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}P(a,v)&&(f.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),E.reset(),d=0,p.textContent="0.0",g.forEach(c=>{c.classList.remove("btn_star-active")}),L.classList.add("is-hidden"),T.classList.remove("is-hidden"))});function V(e){const t="btn_star-active",a="btn_star",s=e.length;let n;e.map(c=>{c.onclick=()=>{if(n=e.indexOf(c),c.className===a)for(n;n>=0;--n)e[n].className=t;else for(n;n<s;++n)e[n].className=a;d=e.filter(r=>{if(r.className===t)return r}).length,p.textContent=`${d}.0`}})}V(g);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",a),e.modal.addEventListener("click",s);function t(){L.classList.remove("is-hidden"),document.addEventListener("keydown",n)}function a(){d=0,g.forEach(c=>{c.classList.remove("btn_star-active")}),p.textContent="0.0",L.classList.add("is-hidden"),T.classList.remove("is-hidden"),document.removeEventListener("keydown",n)}function s(c){c.target===c.currentTarget&&(d=0,g.forEach(o=>{o.classList.remove("btn_star-active")}),p.textContent="0.0",e.modal.classList.add("is-hidden"))}function n(c){c.key==="Escape"&&(d=0,g.forEach(o=>{o.classList.remove("btn_star-active")}),p.textContent="0.0",e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",n))}})();const Z=document.querySelector(".cards"),ee=document.querySelector(".modal_window_update"),h=document.querySelector(".modal_window_container"),te=document.querySelector(".close_modal_button"),se=document.querySelector(".rate_button"),x=document.body,ne=document.querySelector(".rate_button"),ae=document.querySelector("[data-modal]");Z.addEventListener("click",ie);te.addEventListener("click",re);ne.addEventListener("click",oe);window.addEventListener("keydown",D);window.addEventListener("click",D);function ce({gifUrl:e,time:t,name:a,bodyPart:s,equipment:n,target:c,description:o,rating:r,burnedCalories:l,popularity:I}){return`<div class="modal_window_content">
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
        <p class="excercise_text">${I}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}/${t} min</p></li>
        <p class="modal_text">${o}</p>

</ul></div>
</div >`}function oe(){ae.classList.remove("is-hidden"),h.classList.add("is-hidden")}function ie(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;Q(s).then(n=>{const c=ce(n);ee.innerHTML=c}),se.setAttribute("data-id",s),h.classList.remove("is-hidden"),x.style.overflow="hidden"}function D(e){e.key==="Escape"?(h.classList.add("is-hidden"),x.style.overflow="visible"):e.target.closest(".modal_window_default_content,.js-excercise-button")||(h.classList.add("is-hidden"),x.style.overflow="visible")}function re(){h.classList.add("is-hidden"),x.style.overflow="visible"}const B="quote",le=document.querySelector(".quote-text"),de=document.querySelector(".quote-author");async function ue(){try{const{author:e,quote:t}=await j(),a=new Date().toLocaleDateString();localStorage.setItem(B,JSON.stringify({author:e,quote:t,date:a}))}catch(e){console.error("Failed to fetch the quote:",e)}}function R(){const e=localStorage.getItem(B);return JSON.parse(e)}function b(){const e=R();le.textContent=e.quote,de.textContent=e.author}async function me(){const e=new Date().toLocaleDateString(),t=R();if(t&&t.date===e){b();return}await ue(),b()}document.addEventListener("DOMContentLoaded",me);
//# sourceMappingURL=commonHelpers2.js.map
