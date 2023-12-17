var D=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var o=(e,t,s)=>(D(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,r)=>(D(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);var $=(e,t,s)=>(D(e,t,"access private method"),s);import{i as y}from"./vendor-c2f48a40.js";import{l as H,b as N,g as ae,p as re,a as oe}from"./mobileModal-0f22af4b.js";const Te="/your-energy-team-project/assets/icons-a183bb62.svg";var v;class ie{constructor(t){f(this,v,void 0);l(this,v,t)}setToStorage(t){localStorage.setItem(o(this,v),JSON.stringify(t))}getFromStorage(){const t=localStorage.getItem(o(this,v));return t?JSON.parse(t):null}}v=new WeakMap;var n;class ne extends ie{constructor(s){super(s);f(this,n,void 0);l(this,n,this.getFromStorage()||[])}addCard(s){this.isCardExisted(s._id)||(o(this,n).push(s),this.setToStorage(o(this,n)))}removeCard(s){const r=o(this,n).filter(({_id:a})=>a.toString()!==s.toString());l(this,n,[...r]),this.setToStorage(o(this,n))}getCards(s,r){if(s*r-r>o(this,n).length)throw console.log(s),new Error("Out of list");return o(this,n).length===0?{data:[],page:s,totalCount:0}:{data:o(this,n).filter((i,d)=>d>=s*r-r&&d<s*r),totalCount:o(this,n).length,page:s}}getAllCards(){return o(this,n).length===0?[]:o(this,n)}isCardExisted(s){return o(this,n).some(({_id:r})=>r===s)}get list(){return o(this,n)}}n=new WeakMap;const ce="favorite_sport_cards",Pe=10;var p,L,u,g,w,T,z,P,G;class De{constructor(t,s){f(this,T);f(this,P);f(this,p,void 0);f(this,L,void 0);f(this,u,void 0);f(this,g,void 0);f(this,w,void 0);this.refs={container:t},l(this,g,1),l(this,w,(s==null?void 0:s.perPage)||10),l(this,u,1),this.refs.container.addEventListener("click",$(this,P,G).bind(this)),window.matchMedia("(min-width: 480px)").addEventListener("change",$(this,T,z).bind(this))}reset(){l(this,u,1)}on(t,s){if(t==="beforemove"){l(this,p,s);return}if(t==="aftermove"){l(this,L,s);return}throw new Error('Event type is not correct (must be "beforemove" of "aftermove")')}render(){if(o(this,g)<=o(this,w)){this.refs.container.innerHTML="";return}const t=Number(o(this,u)),s=this.getLastPageNumber();let r="";const a=s,i=window.innerWidth;let d=1;i<480&&(d=1);const S=`<svg class="pag-icon" width="10" height="3" viewBox="0 0 10 3" xmlns="http://www.w3.org/2000/svg">
                    <path style="fill: var(--dots-color, #A8A2A2)" d="M1.61719 0.5C1.88281 0.5 2.08789 0.576172 2.23242 0.728516C2.37695 0.876953 2.44922 1.06445 2.44922 1.29102C2.44922 1.51367 2.37695 1.69922 2.23242 1.84766C2.08789 1.99219 1.88281 2.06445 1.61719 2.06445C1.36328 2.06445 1.16211 1.99219 1.01367 1.84766C0.865234 1.70312 0.791016 1.51758 0.791016 1.29102C0.791016 1.06445 0.863281 0.876953 1.00781 0.728516C1.15234 0.576172 1.35547 0.5 1.61719 0.5ZM4.96875 0.5C5.23438 0.5 5.43945 0.576172 5.58398 0.728516C5.72852 0.876953 5.80078 1.06445 5.80078 1.29102C5.80078 1.51367 5.72852 1.69922 5.58398 1.84766C5.43945 1.99219 5.23438 2.06445 4.96875 2.06445C4.71484 2.06445 4.51367 1.99219 4.36523 1.84766C4.2168 1.70312 4.14258 1.51758 4.14258 1.29102C4.14258 1.06445 4.21484 0.876953 4.35938 0.728516C4.50391 0.576172 4.70703 0.5 4.96875 0.5ZM8.32031 0.5C8.58594 0.5 8.79102 0.576172 8.93555 0.728516C9.08008 0.876953 9.15234 1.06445 9.15234 1.29102C9.15234 1.51367 9.08008 1.69922 8.93555 1.84766C8.79102 1.99219 8.58594 2.06445 8.32031 2.06445C8.06641 2.06445 7.86523 1.99219 7.7168 1.84766C7.56836 1.70312 7.49414 1.51758 7.49414 1.29102C7.49414 1.06445 7.56641 0.876953 7.71094 0.728516C7.85547 0.576172 8.05859 0.5 8.32031 0.5Z" />
                </svg>`;t>4&&(r+=`<a class="pag__page pag__btn pag__btn--prev" href="#" data-value="${t-1}"></a>`);for(let c=1;c<=a;c++){if(c===t){r+=`<a class="pag__page pag__page--current-number" href="#" data-value="${t}">${t}</a>`;continue}if(c>1&&c<t-d-1){r+=`<a class="pag__page pag__page--dots pag__btn--dots-prev hovered" href="#" data-value="${t-4}">
            ${S}
          </a>`,c=t-d-1;continue}if(c>t+d&&c<a-1){r+=`<a class="pag__page pag__page--dots pag__btn--dots-next hovered" href="#" data-value="${t+4}">
          ${S}
          </a>`,c=a-1;continue}if(c===a&&a>9999){r+=`<a class="pag__page hovered" href="#" data-value="${c}">Last page</a>`;continue}r+=`<a class="pag__page hovered" href="#" data-value="${c}">${c}</a>`}t<=a-4&&(r+=`<a class="pag__page pag__btn pag__btn--next" href="#" data-value="${t+1}"></a>`),this.refs.container.innerHTML=r}goToPage(t){if(!Number.isInteger(Number(t)))throw console.log(t),new Error("Page must be integer!");t<1||t>this.getLastPageNumber()||l(this,u,t)}getCurrentPage(){return o(this,u)}updateTotalItems(t){l(this,g,t)}getLastPageNumber(){return Math.ceil(Number(o(this,g))/Number(o(this,w)))}}p=new WeakMap,L=new WeakMap,u=new WeakMap,g=new WeakMap,w=new WeakMap,T=new WeakSet,z=function(){this.render()},P=new WeakSet,G=function(t){if(t.preventDefault(),!t.target.classList.contains("pag__page"))return;const s=t.target.dataset.value;o(this,u)!=s&&(o(this,p)&&o(this,p).call(this,{page:o(this,u)}),this.goToPage(s),this.render(),o(this,L)&&o(this,L).call(this,{page:o(this,u)}))};const J=document.querySelector(".js-common-card-list"),V=document.querySelector(".js-faovorites-wrapper"),de=document.querySelector(".excercise_units"),C=document.querySelector(".modal_window_container"),le=document.querySelector(".close_modal_button"),O=document.querySelector(".rate_button"),k=document.body,I=document.querySelector(".js-add-favorite-btn"),ue=document.querySelector(".modal_title"),fe=document.querySelector(".excercise_rating"),K=document.querySelector(".modal_image"),_=document.querySelector(".first_star"),x=document.querySelector(".second_star"),E=document.querySelector(".third_star"),R=document.querySelector(".fourth_star"),U=document.querySelector(".fifth_star");let h=null;const q=new ne(ce);J&&J.addEventListener("click",Y);V&&V.addEventListener("click",Y);le.addEventListener("click",we);O.addEventListener("click",Le);I.addEventListener("click",he);function A(e){q.isCardExisted(e)?I.classList.add("is-card-existed"):I.classList.remove("is-card-existed")}function he(){h&&(q.isCardExisted(h._id)?(q.removeCard(h._id),A(h._id)):(q.addCard(h),A(h._id)))}function ge(e){if(e)ue.textContent=e;else return}function me(e){if(e){let t=e.toFixed(1);fe.textContent=t}else return}function B(){_.classList.remove("rating_star_filled"),x.classList.remove("rating_star_filled"),E.classList.remove("rating_star_filled"),R.classList.remove("rating_star_filled"),U.classList.remove("rating_star_filled")}function _e(e){if(e===5)_.classList.add("rating_star_filled"),x.classList.add("rating_star_filled"),E.classList.add("rating_star_filled"),R.classList.add("rating_star_filled"),U.classList.add("rating_star_filled");else if(e>=4)_.classList.add("rating_star_filled"),x.classList.add("rating_star_filled"),E.classList.add("rating_star_filled"),R.classList.add("rating_star_filled");else if(e>=3)_.classList.add("rating_star_filled"),x.classList.add("rating_star_filled"),E.classList.add("rating_star_filled");else if(e>=2)_.classList.add("rating_star_filled"),x.classList.add("rating_star_filled");else if(e>=1)_.classList.add("rating_star_filled");else return}function ve(e,t){if(e)K.src=e,K.alt=t;else return}function pe({time:e,bodyPart:t,equipment:s,target:r,description:a,burnedCalories:i,popularity:d}){return r||(r="Not Defined"),s||(s="Not Defined"),d||(d="Not defined"),(!i||!e)&&(i="N",e="A"),a||(a="No description yet."),`<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${r}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${t}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${s}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${d}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${i}/${e} min</p></li>
        <li><p class="modal_text">${a}</p></li>
`}function Le(){O.classList.remove("is-hidden"),C.classList.add("is-hidden"),window.removeEventListener("keydown",M),window.removeEventListener("click",M)}function Y(e){const t=e.target.closest(".js-excercise-button");if(!t)return;const r=t.closest(".js-common-card-item").dataset.exerciseId;H.create(),N.hide(),ae(r).then(a=>{const i=pe(a);de.innerHTML=i,ge(a.name),me(a.rating),_e(a.rating),ve(a.gifUrl,a.name),h=a,A(a._id)}).catch(a=>{console.error(a),y.show({position:"center",color:"red",message:"An error has ocurred. Please try again later"})}).finally(()=>{H.destroy()}),O.setAttribute("data-Id",r),C.classList.remove("is-hidden"),k.style.overflow="hidden",window.addEventListener("keydown",M),window.addEventListener("click",M)}function M(e){e.key==="Escape"?(C.classList.add("is-hidden"),k.style.overflow="visible",B(),N.show()):e.target.closest(".modal_window_default_content,.js-excercise-button")||(C.classList.add("is-hidden"),k.style.overflow="visible",B(),N.show())}function we(){C.classList.add("is-hidden"),k.style.overflow="visible",B(),N.show()}const F=document.querySelector("[data-modal]"),Q=document.querySelector("p[data-raiting]"),X=document.querySelector(".rating_form"),j=[...document.getElementsByClassName("btn_star")],ee=document.querySelector(".modal_window_container");let b=0,m={};const Se=()=>{X.reset(),b=0,Q.textContent="0.0",j.forEach(e=>{e.classList.remove("btn_star-active"),e.classList.add("btn_star")}),F.classList.add("is-hidden"),ee.classList.remove("is-hidden")};X.addEventListener("submit",async e=>{e.preventDefault();const s=document.querySelector("[data-id]").dataset.id;if(new FormData(e.currentTarget).forEach((a,i)=>{m[i]=a.trim()}),m.rate=b,m.rate<1){y.show({title:"The rate must be selected",color:"red",position:"topCenter",message:""});return}if(!m.email||!m.review){y.show({title:"The email and comment must be selected",color:"red",position:"topCenter",message:""});return}try{await re(s,m)&&(y.show({title:"The rating has been successfully added",color:"green",position:"topCenter",message:""}),Se())}catch(a){y.show({title:`${a.message}`,color:"red",position:"topCenter",message:""})}});function ye(e){const t="btn_star-active",s="btn_star",r=e.length;let a;e.map(i=>{i.onclick=()=>{if(a=e.indexOf(i),i.className===s)for(a;a>=0;--a)e[a].className=t;else for(a;a<r;++a)e[a].className=s;b=e.filter(S=>{if(S.className===t)return S}).length,Q.textContent=`${b}.0`}})}ye(j);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",r);function t(){F.classList.remove("is-hidden"),document.addEventListener("keydown",a)}function s(){b=0,j.forEach(i=>{i.classList.remove("btn_star-active"),i.classList.add("btn_star")}),Q.textContent="0.0",F.classList.add("is-hidden"),ee.classList.remove("is-hidden"),document.removeEventListener("keydown",a)}function r(i){i.target===i.currentTarget&&s()}function a(i){i.code==="Escape"&&s()}})();const te="quote",xe=document.querySelector(".quote-text"),W=document.querySelector(".quote-author"),Ce=document.querySelector(".favorites-quote-text"),be=document.querySelector(".favorites-quote-author");async function Ee(){try{const{author:e,quote:t}=await oe(),s=new Date().toLocaleDateString();localStorage.setItem(te,JSON.stringify({author:e,quote:t,date:s}))}catch(e){console.error("Failed to fetch the quote:",e)}}function se(){const e=localStorage.getItem(te);return JSON.parse(e)}function Z(){const e=se();W?(xe.textContent=e.quote,W.textContent=e.author):(Ce.textContent=e.quote,be.textContent=e.author)}async function qe(){const e=new Date().toLocaleDateString(),t=se();if(t&&t.date===e){Z();return}await Ee(),Z()}document.addEventListener("DOMContentLoaded",qe);export{ne as F,De as P,ie as S,ce as a,Pe as b,Te as i};
//# sourceMappingURL=quote-f2062b99.js.map