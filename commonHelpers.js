import"./assets/mobileModal-ae43c0fa.js";import{i as c,F as S,a as b,P as T,b as u,S as w}from"./assets/quote-97c20a96.js";import"./assets/vendor-c2f48a40.js";const r=(t,e)=>{if(e<=3)throw new Error("Trim length must not be less than 4");return t.length<=e-3?t:t.slice(0,e-3)+"..."};function P({_id:t,burnedCalories:e,time:a,bodyPart:s,target:i,name:h}){return`    <li class="favorites__item js-common-card-item" data-exercise-id="${t}">
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
                              <use href="${c}#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn js-excercise-button" type="button" data-card-id="${t}">
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
  
                      <p class="sport-card__name">${r(h,20)}</p>
                    </div>
  
                    <div class="sport-card__footer">
                      <ul class="sport-card__param-list">
                        <li class="sport-card__param-item">
                          Burned calories:<span class="sport-card__param__value"
                            >${e} / ${r(a.toString()+" min",4)}</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Body part:<span class="sport-card__param__value"
                            >${r(s,8)}</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Target:<span class="sport-card__param__value">${r(i,5)}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>`}const g=document.querySelector(".js-favorites-list"),v=document.querySelector(".js-favorites-list--desktop"),p=document.querySelector(".js-favorites-no-cards"),$=document.querySelector(".js-pag"),d=new S(b),o=new T($,{perPage:u}),n=E(1,l);o.on("aftermove",t=>{n.setPage(t.page)});g.addEventListener("click",m);v.addEventListener("click",m);l();_();function m(t){const e=t.target.closest(".js-favorites-remove");if(!e)return;const a=e.dataset.cardId;d.removeCard(a),l(),_()}function _(){const t=d.getAllCards();f(t,v)}function l(){const t=d.getCards(n.getPage(),u);console.log(t);const{data:e,page:a,totalCount:s}=t;if(f(e,g),e.length===0&s!==0){n.setPage(a-1);return}o.updateTotalItems(t.totalCount),o.goToPage(a),o.render()}function f(t,e){if(t.length===0){p.classList.add("is-visible"),e.innerHTML="";return}else p.classList.remove("is-visible");const a=t.map(P).join("");e.innerHTML=a}function E(t,e){const a=new w("favorites_page");let s=a.getFromStorage()||t;return{increase(){s++,a.setToStorage(s),e()},decrease(){s--,a.setToStorage(s),e()},setPage(i){s=i,a.setToStorage(s),e()},getPage(){return s}}}window.matchMedia("(min-width: 1440px)").addEventListener("change",t=>{t.matches&&n.setPage(1)});
//# sourceMappingURL=commonHelpers.js.map
