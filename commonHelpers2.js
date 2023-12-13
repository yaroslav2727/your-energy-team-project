import"./assets/activePageHeader-76d82681.js";import{a as S,i as d}from"./assets/vendor-96017409.js";const $="https://your-energy.b.goit.study/api",y=12,q=10,i=S.create({baseURL:$,params:{}}),k=async(e,t=1)=>(await i.get("/filters",{params:{filter:e,page:t,limit:y}})).data,M=async(e=1)=>(await i.get("/filters",{params:{filter:"Muscles",page:e,limit:y}})).data,D=async()=>(await i.get("/quote")).data,T=async({bodypart:e,muscles:t,equipment:n,search:s},c=1)=>{const a=s&&!e&&!t&&!n?"":s;return(await i.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:n||"",keyword:a||"",page:c,limit:q}})).data},C=async e=>(await i.get(`/exercises/${e}`)).data,I=async(e,t)=>(await i.patch(`/exercises/${e}/rating`,t)).data;function v(e){return e.map(({imgURL:t,filter:n,name:s})=>`<li class="card-exercises" data-body-exercise='${s}'>
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
    </li>`).join("")}function B(e){return e.length>20?`${e.slice(0,20)}...`:e}function O(e){return`${Math.round(e)}.0`}function f(e){const t=e[0].toUpperCase()+e.slice(1);return t.length>3?`${t.slice(0,3)}...`:`${t.slice(0,3)}`}function N(e){return e.map(({rating:t,name:n,burnedCalories:s,bodyPart:c,target:a,_id:l})=>`<li class="exercises-item" data-exercise-id="${l}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${O(t)}</p>
				<span class="exercises-name-span">
				<svg class="exercises-icon-star-rating" width="16" height="16">
                  <use href="../img/icons.svg#icon-star-rating"></use>
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
                  <use href="../img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${B(n)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${s}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${f(c)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${f(a)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const o={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let R=1,L="muscles";const r=document.querySelector(".cards"),U=document.querySelector(".filter-list");U.addEventListener("click",A);r.addEventListener("click",m);o.create();M().then(e=>{const t=e.results;r.innerHTML=v(t),r.addEventListener("click",m)}).catch(e=>{console.error(e),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()});function A(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),e.target.classList.add("active"),o.create(),k(t,R).then(s=>{const c=s.results,{filter:a}=c[0];L=a.toLowerCase(),r.innerHTML=v(c),r.addEventListener("click",m)}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy()})}function m(e){const t=e.target.closest(".card-exercises").dataset.bodyExercise,n={[L]:t,page:1};o.create(),T(n).then(s=>{const c=s.results;r.innerHTML=N(c)}).catch(s=>{console.error(s),d.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{o.destroy(),r.removeEventListener("click",m)})}function j(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),s=document.body,c=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),e.classList.contains("is-open")?s.style.overflow="hidden":s.style.overflow="visible"};t.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}j();const F=document.querySelector("p[data-raiting]"),Q=document.querySelector(".btn_close"),x=document.querySelector(".rating_form");let g=0,p={},H="64f389465ae26083f39b17a2";Q.addEventListener("click",e=>{e.preventDefault(),console.log("close-rating-function")});x.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((s,c)=>{p[c]=s.trim()}),p.rate=g,p.rate<1){d.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}I(H,p)&&(d.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),x.reset(),console.log("Dont forgot close modal!!!"))});const P=[...document.getElementsByClassName("btn_star")];function z(e){const t="btn_star-active",n="btn_star",s=e.length;let c;e.map(a=>{a.onclick=()=>{if(c=e.indexOf(a),a.className===n)for(c;c>=0;--c)e[c].className=t;else for(c;c<s;++c)e[c].className=n;g=e.filter(u=>{if(u.className===t)return u}).length,F.textContent=`${g}.0`}})}z(P);const J=document.querySelector(".cards"),K=document.querySelector(".modal_window_update"),_=document.querySelector(".modal_window_container"),W=document.querySelector(".close_modal_button");J.addEventListener("click",Y);W.addEventListener("click",G);function X({gifUrl:e,name:t,bodyPart:n,equipment:s,target:c,description:a,rating:l,burnedCalories:u,popularity:E}){return`<div class="modal_window_content">
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
        <p class="excercise_text">${E}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${u}</p></li>
        <p class="modal_text">${a}</p>

</ul>
</div >`}function Y(e){const t=e.target;if(!t.classList.contains("js-excercise-button"))return;const s=t.closest(".exercises-item").dataset.exerciseId;console.log(s),C(s).then(c=>{console.log(c);const a=X(c);K.innerHTML=a}),_.classList.remove("is_hidden")}function G(){_.classList.add("is_hidden"),console.log("close modal")}const w="quote",V=document.querySelector(".quote-text"),Z=document.querySelector(".quote-author");async function ee(){try{const{author:e,quote:t}=await D(),n=new Date().toLocaleDateString();localStorage.setItem(w,JSON.stringify({author:e,quote:t,date:n}))}catch(e){console.error("Failed to fetch the quote:",e)}}function b(){const e=localStorage.getItem(w);return JSON.parse(e)}function h(){const e=b();V.textContent=e.quote,Z.textContent=e.author}async function te(){const e=new Date().toLocaleDateString(),t=b();if(t&&t.date===e){h();return}await ee(),h()}document.addEventListener("DOMContentLoaded",te);
//# sourceMappingURL=commonHelpers2.js.map
