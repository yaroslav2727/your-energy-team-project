var C=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var r=(t,e,a)=>(C(t,e,"read from private field"),a?a.call(t):e.get(t)),g=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},c=(t,e,a,s)=>(C(t,e,"write to private field"),s?s.call(t,a):e.set(t,a),a);var w=(t,e,a)=>(C(t,e,"access private method"),a);import{F as j,a as x,b as L,S as R}from"./assets/quote-343ebdf3.js";import"./assets/vendor-c2f48a40.js";function B({_id:t,burnedCalories:e,time:a,bodyPart:s,target:n,name:b}){return`    <li class="favorites__item js-common-card-item" data-exercise-id="${t}">
                <div class="favorites__card" href="">
                  <div class="sport-card">
                    <div class="sport-card__header">
                      <div class="sport-card__tag-wrapper">
                        <p class="sport-card__tag">WORKOUT</p>
                        <!-- <svg class="" width="" height="">
                      <use href=""></use>
                    </svg> -->
  
                        <!-- Temporary icon -->
                        <button
                          class="button sport-card__remove-btn js-favorites-remove"
                          type="button"
                          aria-label="Remove card button"
                          data-card-id="${t}"
                        >
                        

                             <svg class="icon" width="16" height="16" >
                              <use href="./img/icons.svg#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn js-excercise-button" type="button" data-card-id="${t}">
                        Start
                     
                          <svg class="icon" width="16" height="16" >
                              <use href="./img/icons.svg#icon-arrow"></use>
                            </svg>
                        
                      </button>
                    </div>
  
                    <div class="sport-card__meta">                     

                      <svg class="icon" width="24" height="24">
                        <use href="./img/icons.svg#icon-runner"></use>
                      </svg>
  
                      <p class="sport-card__name">${b}</p>
                    </div>
  
                    <div class="sport-card__footer">
                      <ul class="sport-card__param-list">
                        <li class="sport-card__param-item">
                          Burned calories:<span class="sport-card__param__value"
                            >${e} / ${a} min</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Body part:<span class="sport-card__param__value"
                            >${s}</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Target:<span class="sport-card__param__value">${n}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>`}var l,p,o,d,u,f,E,m,M;class D{constructor(e,{perPage:a}){g(this,f);g(this,m);g(this,l,void 0);g(this,p,void 0);g(this,o,void 0);g(this,d,void 0);g(this,u,void 0);this.refs={container:e},c(this,d,1),c(this,u,a||10),c(this,o,1),this.refs.container.addEventListener("click",w(this,m,M).bind(this)),window.matchMedia("(min-width: 480px)").addEventListener("change",w(this,f,E).bind(this))}reset(){c(this,o,1)}on(e,a){if(e==="beforemove"){c(this,l,a);return}if(e==="aftermove"){c(this,p,a);return}throw new Error('Event type is not correct (must be "beforemove" of "aftermove")')}render(){if(r(this,d)<=r(this,u)){this.refs.container.innerHTML="";return}const e=Number(r(this,o)),a=this.getLastPageNumber();let s="";const n=a,b=window.innerWidth;let h=1;b<480&&(h=1);const $=`<svg class="pag-icon" width="10" height="3" viewBox="0 0 10 3" xmlns="http://www.w3.org/2000/svg">
                    <path style="fill: var(--dots-color, #A8A2A2)" d="M1.61719 0.5C1.88281 0.5 2.08789 0.576172 2.23242 0.728516C2.37695 0.876953 2.44922 1.06445 2.44922 1.29102C2.44922 1.51367 2.37695 1.69922 2.23242 1.84766C2.08789 1.99219 1.88281 2.06445 1.61719 2.06445C1.36328 2.06445 1.16211 1.99219 1.01367 1.84766C0.865234 1.70312 0.791016 1.51758 0.791016 1.29102C0.791016 1.06445 0.863281 0.876953 1.00781 0.728516C1.15234 0.576172 1.35547 0.5 1.61719 0.5ZM4.96875 0.5C5.23438 0.5 5.43945 0.576172 5.58398 0.728516C5.72852 0.876953 5.80078 1.06445 5.80078 1.29102C5.80078 1.51367 5.72852 1.69922 5.58398 1.84766C5.43945 1.99219 5.23438 2.06445 4.96875 2.06445C4.71484 2.06445 4.51367 1.99219 4.36523 1.84766C4.2168 1.70312 4.14258 1.51758 4.14258 1.29102C4.14258 1.06445 4.21484 0.876953 4.35938 0.728516C4.50391 0.576172 4.70703 0.5 4.96875 0.5ZM8.32031 0.5C8.58594 0.5 8.79102 0.576172 8.93555 0.728516C9.08008 0.876953 9.15234 1.06445 9.15234 1.29102C9.15234 1.51367 9.08008 1.69922 8.93555 1.84766C8.79102 1.99219 8.58594 2.06445 8.32031 2.06445C8.06641 2.06445 7.86523 1.99219 7.7168 1.84766C7.56836 1.70312 7.49414 1.51758 7.49414 1.29102C7.49414 1.06445 7.56641 0.876953 7.71094 0.728516C7.85547 0.576172 8.05859 0.5 8.32031 0.5Z" />
                </svg>`;e>4&&(s+=`<a class="pag__page pag__btn pag__btn--prev" href="#" data-value="${e-1}"></a>`);for(let i=1;i<=n;i++){if(i===e){s+=`<a class="pag__page pag__page--current-number" href="#" data-value="${e}">${e}</a>`;continue}if(i>1&&i<e-h-1){s+=`<a class="pag__page pag__page--dots pag__btn--dots-prev hovered" href="#" data-value="${e-4}">
            ${$}
          </a>`,i=e-h-1;continue}if(i>e+h&&i<n-1){s+=`<a class="pag__page pag__page--dots pag__btn--dots-next hovered" href="#" data-value="${e+4}">
          ${$}
          </a>`,i=n-1;continue}if(i===n&&n>9999){s+=`<a class="pag__page hovered" href="#" data-value="${i}">Last page</a>`;continue}s+=`<a class="pag__page hovered" href="#" data-value="${i}">${i}</a>`}e<=n-4&&(s+=`<a class="pag__page pag__btn pag__btn--next" href="#" data-value="${e+1}"></a>`),this.refs.container.innerHTML=s}goToPage(e){if(!Number.isInteger(Number(e)))throw console.log(e),new Error("Page must be integer!");e<1||e>this.getLastPageNumber()||c(this,o,e)}getCurrentPage(){return r(this,o)}updateTotalItems(e){c(this,d,e)}getLastPageNumber(){return Math.ceil(Number(r(this,d))/Number(r(this,u)))}}l=new WeakMap,p=new WeakMap,o=new WeakMap,d=new WeakMap,u=new WeakMap,f=new WeakSet,E=function(){this.render()},m=new WeakSet,M=function(e){if(e.preventDefault(),!e.target.classList.contains("pag__page"))return;const a=e.target.dataset.value;r(this,o)!=a&&(r(this,l)&&r(this,l).call(this,{page:r(this,o)}),this.goToPage(a),this.render(),r(this,p)&&r(this,p).call(this,{page:r(this,o)}))};const y=document.querySelector(".js-favorites-list"),k=document.querySelector(".js-favorites-list--desktop"),T=document.querySelector(".js-favorites-no-cards"),F=document.querySelector(".pag"),P=new j(x),v=new D(F,{perPage:L}),_=H(1,S);v.on("aftermove",t=>{_.setPage(t.page)});y.addEventListener("click",A);k.addEventListener("click",A);S();I();function A(t){const e=t.target.closest(".js-favorites-remove");if(!e)return;const a=e.dataset.cardId;P.removeCard(a),S(),I()}function I(){const t=P.getAllCards();N(t,k)}function S(){const t=P.getCards(_.getPage(),L);console.log(t);const{data:e,page:a,totalCount:s}=t;if(N(e,y),e.length===0&s!==0){_.setPage(a-1);return}v.updateTotalItems(t.totalCount),v.goToPage(a),v.render()}function N(t,e){if(t.length===0){T.classList.add("is-visible"),e.innerHTML="";return}else T.classList.remove("is-visible");const a=t.map(B).join("");e.innerHTML=a}function H(t,e){const a=new R("favorites_page");let s=a.getFromStorage()||t;return{increase(){s++,a.setToStorage(s),e()},decrease(){s--,a.setToStorage(s),e()},setPage(n){s=n,a.setToStorage(s),e()},getPage(){return s}}}window.matchMedia("(min-width: 1440px)").addEventListener("change",t=>{t.matches&&_.setPage(1)});
//# sourceMappingURL=commonHelpers.js.map
