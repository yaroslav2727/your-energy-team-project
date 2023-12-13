import"./assets/activePageHeader-d27568a6.js";import{a as b,i as m}from"./assets/vendor-2dcf4ad5.js";const L="https://your-energy.b.goit.study/api",f=12,w=10,o=b.create({baseURL:L,params:{}}),E=async(e,s=1)=>(await o.get("/filters",{params:{filter:e,page:s,limit:f}})).data,$=async(e=1)=>(await o.get("/filters",{params:{filter:"Muscles",page:e,limit:f}})).data,M=async({bodypart:e,muscles:s,equipment:a,search:t},c=1)=>{const n=t&&!e&&!s&&!a?"":t;return(await o.get("/exercises",{params:{bodypart:e||"",muscles:s||"",equipment:a||"",keyword:n||"",page:c,limit:w}})).data},k=async e=>(await o.get(`/exercises/${e}`)).data,S=async(e,s)=>(await o.patch(`/exercises/${e}/rating`,s)).data;function h(e){return e.map(({imgURL:s,filter:a,name:t})=>`<li class="card-exercises" data-body-exercise='${t}'>
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
      <p class="name-exercises">${a}</p>
  </div>
    </li>`).join("")}function T(e){return e.length>20?`${e.slice(0,20)}...`:e}function C(e){return`${Math.round(e)}.0`}function g(e){const s=e[0].toUpperCase()+e.slice(1);return s.length>3?`${s.slice(0,3)}...`:`${s.slice(0,3)}`}function q(e){return e.map(({rating:s,name:a,burnedCalories:t,bodyPart:c,target:n,_id:i})=>`<li class="exercises-item" data-exercise-id="${i}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${C(s)}</p>
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
			<h3 class="exercises-name">${T(a)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${t}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${g(c)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${g(n)}
				</li>
			</ul>
		</div>
	</li>`).join("")}const r={element:document.querySelector(".loader"),create(){this.element.classList.add("loader-active")},destroy(){this.element.classList.remove("loader-active")}};let B=1,v="muscles";const u=document.querySelector(".cards"),I=document.querySelector(".filter-list");I.addEventListener("click",R);u.addEventListener("click",D);r.create();$().then(e=>{const s=e.results;u.innerHTML=h(s)}).catch(e=>{console.error(e)}).finally(()=>{r.destroy()});function R(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.dataset.name;document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),r.create(),E(s,B).then(t=>{const c=t.results,{filter:n}=c[0];v=n.toLowerCase(),u.innerHTML=h(c)}).catch(t=>{console.error(t)}).finally(()=>{r.destroy()})}function D(e){const s=e.target.closest(".card-exercises").dataset.bodyExercise,a={[v]:s,page:1};r.create(),M(a).then(t=>{const c=t.results;u.innerHTML=q(c)}).catch(t=>{console.error(t)}).finally(()=>{r.destroy()})}function N(){const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),t=document.body,c=()=>{const n=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),e.classList.contains("is-open")?t.style.overflow="hidden":t.style.overflow="visible"};s.addEventListener("click",c),a.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})}N();const U=document.querySelector("p[data-raiting]"),A=document.querySelector(".btn_close"),x=document.querySelector(".rating_form");let p=0,d={},j="64f389465ae26083f39b17a2";A.addEventListener("click",e=>{e.preventDefault(),console.log("close-rating-function")});x.addEventListener("submit",e=>{if(e.preventDefault(),new FormData(e.currentTarget).forEach((t,c)=>{d[c]=t.trim()}),d.rate=p,d.rate<1){m.show({title:"The rate must be at least 1",color:"red",position:"topCenter",message:""});return}S(j,d)&&(m.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),x.reset(),console.log("Dont forgot close modal!!!"))});const F=[...document.getElementsByClassName("btn_star")];function O(e){const s="btn_star-active",a="btn_star",t=e.length;let c;e.map(n=>{n.onclick=()=>{if(c=e.indexOf(n),n.className===a)for(c;c>=0;--c)e[c].className=s;else for(c;c<t;++c)e[c].className=a;p=e.filter(l=>{if(l.className===s)return l}).length,U.textContent=`${p}.0`}})}O(F);const H=document.querySelector(".cards"),P=document.querySelector(".modal_window_update"),y=document.querySelector(".modal_window_container"),z=document.querySelector(".close_modal_button");H.addEventListener("click",W);z.addEventListener("click",X);function K({gifUrl:e,name:s,bodyPart:a,equipment:t,target:c,description:n,rating:i,burnedCalories:l,popularity:_}){return`<div class="modal_window_content">
<img class ="modal_image" src="${e}" alt="${s}">

<h3 class="modal_title">${s}</h3>
<p class = "excercise_rating">${i}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${c}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${a}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${t}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${_}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${l}</p></li>
        <p class="modal_text">${n}</p>

</ul>
</div >`}function W(e){const s=e.target;if(!s.classList.contains("js-excercise-button"))return;const t=s.closest(".exercises-item").dataset.exerciseId;console.log(t),k(t).then(c=>{console.log(c);const n=K(c);P.innerHTML=n}),y.classList.remove("is_hidden")}function X(){y.classList.add("is_hidden"),console.log("close modal")}
//# sourceMappingURL=commonHelpers2.js.map
