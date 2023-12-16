import{F as h,a as S,P as b,b as p,S as P}from"./assets/quote-3f11ca15.js";import"./assets/vendor-c2f48a40.js";const c="/your-energy-team-project/assets/icons-59c73723.svg";function T({_id:e,burnedCalories:t,time:a,bodyPart:s,target:n,name:f}){return`    <li class="favorites__item js-common-card-item" data-exercise-id="${e}">
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
                          data-card-id="${e}"
                        >
                        

                             <svg class="icon" width="16" height="16" >
                              <use href="${c}#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn js-excercise-button" type="button" data-card-id="${e}">
                        Start
                     
                          <svg class="icon" width="16" height="16" >
                              <use href="${c}#icon-arrow"></use>
                            </svg>
                        
                      </button>
                    </div>
  
                    <div class="sport-card__meta">                     

                      <svg class="icon" width="24" height="24">
                        <use href="${c}#icon-runner"></use>
                      </svg>
  
                      <p class="sport-card__name">${f}</p>
                    </div>
  
                    <div class="sport-card__footer">
                      <ul class="sport-card__param-list">
                        <li class="sport-card__param-item">
                          Burned calories:<span class="sport-card__param__value"
                            >${t} / ${a} min</span
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
              </li>`}const g=document.querySelector(".js-favorites-list"),u=document.querySelector(".js-favorites-list--desktop"),l=document.querySelector(".js-favorites-no-cards"),w=document.querySelector(".js-pag"),i=new h(S),r=new b(w,{perPage:p}),o=$(1,d);r.on("aftermove",e=>{o.setPage(e.page)});g.addEventListener("click",v);u.addEventListener("click",v);d();_();function v(e){const t=e.target.closest(".js-favorites-remove");if(!t)return;const a=t.dataset.cardId;i.removeCard(a),d(),_()}function _(){const e=i.getAllCards();m(e,u)}function d(){const e=i.getCards(o.getPage(),p);console.log(e);const{data:t,page:a,totalCount:s}=e;if(m(t,g),t.length===0&s!==0){o.setPage(a-1);return}r.updateTotalItems(e.totalCount),r.goToPage(a),r.render()}function m(e,t){if(e.length===0){l.classList.add("is-visible"),t.innerHTML="";return}else l.classList.remove("is-visible");const a=e.map(T).join("");t.innerHTML=a}function $(e,t){const a=new P("favorites_page");let s=a.getFromStorage()||e;return{increase(){s++,a.setToStorage(s),t()},decrease(){s--,a.setToStorage(s),t()},setPage(n){s=n,a.setToStorage(s),t()},getPage(){return s}}}window.matchMedia("(min-width: 1440px)").addEventListener("change",e=>{e.matches&&o.setPage(1)});
//# sourceMappingURL=commonHelpers.js.map
