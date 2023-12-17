import"./assets/mobileModal-8ba4908d.js";import{i,F as h,a as S,P as b,b as p,S as P}from"./assets/quote-3ea2c106.js";import"./assets/vendor-c2f48a40.js";function T({_id:t,burnedCalories:e,time:a,bodyPart:s,target:n,name:f}){return`    <li class="favorites__item js-common-card-item" data-exercise-id="${t}">
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
                              <use href="${i}#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn js-excercise-button" type="button" data-card-id="${t}">
                        Start
                     
                          <svg class="icon" width="16" height="16" >
                              <use href="${i}#icon-arrow"></use>
                            </svg>
                        
                      </button>
                    </div>
  
                    <div class="sport-card__meta">                     

                      <svg class="icon" width="24" height="24">
                        <use href="${i}#icon-runner"></use>
                      </svg>
  
                      <p class="sport-card__name">${f}</p>
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
              </li>`}const g=document.querySelector(".js-favorites-list"),u=document.querySelector(".js-favorites-list--desktop"),l=document.querySelector(".js-favorites-no-cards"),w=document.querySelector(".js-pag"),c=new h(S),r=new b(w,{perPage:p}),o=$(1,d);r.on("aftermove",t=>{o.setPage(t.page)});g.addEventListener("click",v);u.addEventListener("click",v);d();_();function v(t){const e=t.target.closest(".js-favorites-remove");if(!e)return;const a=e.dataset.cardId;c.removeCard(a),d(),_()}function _(){const t=c.getAllCards();m(t,u)}function d(){const t=c.getCards(o.getPage(),p);console.log(t);const{data:e,page:a,totalCount:s}=t;if(m(e,g),e.length===0&s!==0){o.setPage(a-1);return}r.updateTotalItems(t.totalCount),r.goToPage(a),r.render()}function m(t,e){if(t.length===0){l.classList.add("is-visible"),e.innerHTML="";return}else l.classList.remove("is-visible");const a=t.map(T).join("");e.innerHTML=a}function $(t,e){const a=new P("favorites_page");let s=a.getFromStorage()||t;return{increase(){s++,a.setToStorage(s),e()},decrease(){s--,a.setToStorage(s),e()},setPage(n){s=n,a.setToStorage(s),e()},getPage(){return s}}}window.matchMedia("(min-width: 1440px)").addEventListener("change",t=>{t.matches&&o.setPage(1)});
//# sourceMappingURL=commonHelpers.js.map
