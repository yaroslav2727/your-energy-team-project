import"./assets/activePageHeader-04e0478e.js";import{a as $,i as d}from"./assets/vendor-96017409.js";const D="https://your-energy.b.goit.study/api",v=12,M=10,i=$.create({baseURL:D,params:{}}),k=async(e,t=1)=>(await i.get("/filters",{params:{filter:e,page:t,limit:v}})).data,T=async(e=1)=>(await i.get("/filters",{params:{filter:"Muscles",page:e,limit:v}})).data,C=async()=>(await i.get("/quote")).data,I=async({bodypart:e,muscles:t,equipment:n,search:s},c=1)=>{const a=s&&!e&&!t&&!n?"":s;return(await i.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:n||"",keyword:a||"",page:c,limit:M}})).data},B=async e=>(await i.get(`/exercises/${e}`)).data,O=async(e,t)=>(await i.patch(`/exercises/${e}/rating`,t)).data;function L(e){return e.map(({imgURL:t,filter:n,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
      <p class="name-exercises">${n}</p>
  </div>
    </li>`).join("")}function N(e){return e.length>20?`${e.slice(0,20)}...`:e}function R(e){return`${Math.round(e)}.0`}function x(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function w(e){return e.map(({rating:t,name:n,burnedCalories:s,bodyPart:c,target:a,_id:l})=>`<li class="exercises-item" data-exercise-id="${l}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${R(t)}</p>
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
			<h3 class="exercises-name">${N(n)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${x(c)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${x(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const o={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let U=1,_="muscles",g=null;const r=document.querySelector(".cards"),A=document.querySelector(".filter-list"),j=document.querySelector(".input-filter-exercises");A.addEventListener("click",F);r.addEventListener("click",m);j.addEventListener("input",Q);o.create();T().then(e=>{const t=e.results;r.innerHTML=L(t),r.addEventListener("click",m)}).catch(e=>{console.error(e),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()});function F(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),o.create(),k(t,U).then(s=>{const c=s.results,{filter:a}=c[0];_=a.toLowerCase(),r.innerHTML=L(c),r.addEventListener("click",m)}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()})}function m(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,n={[_]:t,page:1};o.create(),I(n).then(s=>{const c=s.results;g=c,console.log(g),r.innerHTML=w(c)}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy(),r.removeEventListener("click",m)})}function Q(e){const t=e.target.value.trim().toLowerCase(),n=g.filter(s=>s.name.includes(t));r.innerHTML=w(n)}function H(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),s=document.body,c=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),e.classList.contains("is-open")?s.style.overflow="hidden":s.style.overflow="visible"};t.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}H();const P=document.querySelector("p[data-raiting]"),z=document.querySelector(".btn_close"),h=document.querySelector(".rating_form");let f=0,p={},J="64f389465ae26083f39b17a2";z.addEventListener("click",e=>{e.preventDefault(),console.log("close-rating-function")});h.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((s,c)=>{p[c]=s.trim()}),p.rate=f,p.rate<1){d.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}O(J,p)&&(d.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),h.reset(),console.log("Dont forgot close modal!!!"))});const K=[...document.getElementsByClassName("btn_star")];function W(e){const t="btn_star-active",n="btn_star",s=e.length;let c;e.map(a=>{a.onclick=()=>{if(c=e.indexOf(a),a.className===n)for(c;c>=0;--c)e[c].className=t;else for(c;c<s;++c)e[c].className=n;f=e.filter(u=>{if(u.className===t)return u}).length,P.textContent=`${f}.0`}})}W(K);const X=document.querySelector(".cards"),Y=document.querySelector(".modal_window_update"),b=document.querySelector(".modal_window_container"),G=document.querySelector(".close_modal_button");X.addEventListener("click",Z);G.addEventListener("click",ee);function V({gifUrl:e,name:t,bodyPart:n,equipment:s,target:c,description:a,rating:l,burnedCalories:u,popularity:q}){return`<div class="modal_window_content">
<img class ="modal_image" src="${e}" alt="${t}">

<h3 class="modal_title">${t}</h3>
<p class = "excercise_rating">${l}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${c}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${n}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${s}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${q}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${u}</p></li>
        <p class="modal_text">${a}</p>

</ul>
</div >`}function Z(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;console.log(s),B(s).then(c=>{console.log(c);const a=V(c);Y.innerHTML=a}),b.classList.remove("is_hidden")}function ee(){b.classList.add("is_hidden"),console.log("close modal")}const E="quote",te=document.querySelector(".quote-text"),se=document.querySelector(".quote-author");async function ce(){try{const{author:e,quote:t}=await C(),n=new Date().toLocaleDateString();localStorage.setItem(E,JSON.stringify({author:e,quote:t,date:n}))}catch(e){console.error("Failed to fetch the quote:",e)}}function S(){const e=localStorage.getItem(E);return JSON.parse(e)}function y(){const e=S();te.textContent=e.quote,se.textContent=e.author}async function ne(){const e=new Date().toLocaleDateString(),t=S();if(t&&t.date===e){y();return}await ce(),y()}document.addEventListener("DOMContentLoaded",ne);
//# sourceMappingURL=commonHelpers2.js.map
