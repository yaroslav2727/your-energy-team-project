import{F as f,a as h,P as S,b as l,S as b}from"./assets/quote-2a762230.js";import"./assets/vendor-c2f48a40.js";function P({_id:t,burnedCalories:e,time:a,bodyPart:s,target:n,name:_}){return`    <li class="favorites__item js-common-card-item" data-exercise-id="${t}">
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
  
                      <p class="sport-card__name">${_}</p>
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
              </li>`}const p=document.querySelector(".js-favorites-list"),g=document.querySelector(".js-favorites-list--desktop"),d=document.querySelector(".js-favorites-no-cards"),T=document.querySelector(".js-pag"),i=new f(h),r=new S(T,{perPage:l}),o=w(1,c);r.on("aftermove",t=>{o.setPage(t.page)});p.addEventListener("click",u);g.addEventListener("click",u);c();v();function u(t){const e=t.target.closest(".js-favorites-remove");if(!e)return;const a=e.dataset.cardId;i.removeCard(a),c(),v()}function v(){const t=i.getAllCards();m(t,g)}function c(){const t=i.getCards(o.getPage(),l);console.log(t);const{data:e,page:a,totalCount:s}=t;if(m(e,p),e.length===0&s!==0){o.setPage(a-1);return}r.updateTotalItems(t.totalCount),r.goToPage(a),r.render()}function m(t,e){if(t.length===0){d.classList.add("is-visible"),e.innerHTML="";return}else d.classList.remove("is-visible");const a=t.map(P).join("");e.innerHTML=a}function w(t,e){const a=new b("favorites_page");let s=a.getFromStorage()||t;return{increase(){s++,a.setToStorage(s),e()},decrease(){s--,a.setToStorage(s),e()},setPage(n){s=n,a.setToStorage(s),e()},getPage(){return s}}}window.matchMedia("(min-width: 1440px)").addEventListener("change",t=>{t.matches&&o.setPage(1)});
//# sourceMappingURL=commonHelpers.js.map
