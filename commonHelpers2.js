import"./assets/activePageHeader-78d48107.js";import{a as L,i as l}from"./assets/vendor-96017409.js";const w="https://your-energy.b.goit.study/api",h=12,E=10,d=L.create({baseURL:w,params:{}}),$=async(e,s=1)=>(await d.get("/filters",{params:{filter:e,page:s,limit:h}})).data,k=async(e=1)=>(await d.get("/filters",{params:{filter:"Muscles",page:e,limit:h}})).data,S=async({bodypart:e,muscles:s,equipment:n,search:t},c=1)=>{const r=t&&!e&&!s&&!n?"":t;return(await d.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:n||"",keyword:r||"",page:c,limit:E}})).data},M=async e=>(await d.get(`/exercises/${e}`)).data,T=async(e,s)=>(await d.patch(`/exercises/${e}/rating`,s)).data;function v(e){return e.map(({imgURL:s,filter:n,name:t})=>`<li class="card-exercises" data-body-exercise='${t}'>
               <button type="button" class="card-exercises-img"
                 style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${s}') ;
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                "
                </button>
  <div class="card-description">
   <p class="name-category">${t}</p>
      <p class="name-exercises">${n}</p>
  </div>
    </li>`).join("")}function C(e){return e.length>20?`${e.slice(0,20)}...`:e}function q(e){return`${Math.round(e)}.0`}function x(e){const s=e[0].toUpperCase()+e.slice(1);return s.length>3?`${s.slice(0,3)}...`:`${s.slice(0,3)}`}function B(e){return e.map(({rating:s,name:n,burnedCalories:t,bodyPart:c,target:r,_id:o})=>`<li class="exercises-item" data-exercise-id="${o}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${q(s)}</p>
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
			<h3 class="exercises-name">${C(n)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${t}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${x(c)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${x(r)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const i={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let I=1,y="muscles";const a=document.querySelector(".cards"),R=document.querySelector(".filter-list");R.addEventListener("click",D);a.addEventListener("click",m);i.create();k().then(e=>{const s=e.results;a.innerHTML=v(s),a.addEventListener("click",m)}).catch(e=>{console.error(e),l.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{i.destroy()});function D(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),i.create(),$(s,I).then(t=>{const c=t.results,{filter:r}=c[0];y=r.toLowerCase(),a.innerHTML=v(c),a.addEventListener("click",m)}).catch(t=>{console.error(t),l.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{i.destroy()})}function m(e){const s=e.target.closest(".card-exercises").dataset.bodyExercise,n={[y]:s,page:1};i.create(),S(n).then(t=>{const c=t.results;a.innerHTML=B(c)}).catch(t=>{console.error(t),l.show({position:"center",color:"red",message:"Oops! Something wrong!"})}).finally(()=>{i.destroy(),a.removeEventListener("click",m)})}function N(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),t=document.body,c=()=>{const r=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}N();const U=document.querySelector("p[data-raiting]"),A=document.querySelector(".btn_close"),f=document.querySelector(".rating_form");let g=0,p={},O="64f389465ae26083f39b17a2";A.addEventListener("click",e=>{e.preventDefault(),console.log("close-rating-function")});f.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((t,c)=>{p[c]=t.trim()}),p.rate=g,p.rate<1){l.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}T(O,p)&&(l.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),f.reset(),console.log("Dont forgot close modal!!!"))});const j=[...document.getElementsByClassName("btn_star")];function F(e){const s="btn_star-active",n="btn_star",t=e.length;let c;e.map(r=>{r.onclick=()=>{if(c=e.indexOf(r),r.className===n)for(c;c>=0;--c)e[c].className=s;else for(c;c<t;++c)e[c].className=n;g=e.filter(u=>{if(u.className===s)return u}).length,U.textContent=`${g}.0`}})}F(j);const H=document.querySelector(".cards"),P=document.querySelector(".modal_window_update"),_=document.querySelector(".modal_window_container"),z=document.querySelector(".close_modal_button");H.addEventListener("click",W);z.addEventListener("click",X);function K({gifUrl:e,name:s,bodyPart:n,equipment:t,target:c,description:r,rating:o,burnedCalories:u,popularity:b}){return`<div class="modal_window_content">
<img class ="modal_image" src="${e}" alt="${s}">

<h3 class="modal_title">${s}</h3>
<p class = "excercise_rating">${o}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${c}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${n}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${t}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${b}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${u}</p></li>
        <p class="modal_text">${r}</p>

</ul>
</div >`}function W(e){const s=e.target;if(!s.classList.contains("js-excercise-button"))return;const t=s.closest(".exercises-item").dataset.exerciseId;console.log(t),M(t).then(c=>{console.log(c);const r=K(c);P.innerHTML=r}),_.classList.remove("is_hidden")}function X(){_.classList.add("is_hidden"),console.log("close modal")}
//# sourceMappingURL=commonHelpers2.js.map
