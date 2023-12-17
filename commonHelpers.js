import"./assets/mobileModal-81855636.js";import{i as d,F as S,a as b,P as w,b as g,S as T}from"./assets/quote-4295ed6a.js";import"./assets/vendor-c2f48a40.js";const r=(t,e)=>{if(e<=3)throw new Error("Trim length must not be less than 4");return t.length<=e-3?t:t.slice(0,e-3)+"..."};function P({_id:t,burnedCalories:e,time:a,bodyPart:s,target:c,name:h}){return`    <li class="favorites__item js-common-card-item" data-exercise-id="${t}">
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
                              <use href="${d}#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn js-excercise-button" type="button" data-card-id="${t}">
                        Start
                     
                          <svg class="icon" width="16" height="16" >
                              <use href="${d}#icon-arrow"></use>
                            </svg>
                        
                      </button>
                    </div>
  
                    <div class="sport-card__meta">                     

                      <svg class="icon" width="24" height="24">
                        <use href="${d}#icon-runner"></use>
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
                          Target:<span class="sport-card__param__value">${r(c,5)}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>`}const v=document.querySelector(".js-favorites-list"),m=document.querySelector(".js-favorites-list--desktop"),u=document.querySelector(".js-favorites-no-cards"),E=document.querySelector(".js-pag"),l=new S(b),o=new w(E,{perPage:g}),n=$(1,i);o.on("aftermove",t=>{n.setPage(t.page)});v.addEventListener("click",_);m.addEventListener("click",_);window.addEventListener("message",t=>{t.data==="update-favorites"&&(console.log(t.data),i(),p())});i();p();function _(t){const e=t.target.closest(".js-favorites-remove");if(!e)return;const a=e.dataset.cardId;l.removeCard(a),i(),p()}function p(){const t=l.getAllCards();f(t,m)}function i(){const t=l.getCards(n.getPage(),g);console.log(t);const{data:e,page:a,totalCount:s}=t;if(f(e,v),e.length===0&s!==0){n.setPage(a-1);return}o.updateTotalItems(t.totalCount),o.goToPage(a),o.render()}function f(t,e){if(t.length===0){u.classList.add("is-visible"),e.innerHTML="";return}else u.classList.remove("is-visible");const a=t.map(P).join("");e.innerHTML=a}function $(t,e){const a=new T("favorites_page");let s=a.getFromStorage()||t;return{increase(){s++,a.setToStorage(s),e()},decrease(){s--,a.setToStorage(s),e()},setPage(c){s=c,a.setToStorage(s),e()},getPage(){return s}}}window.matchMedia("(min-width: 1440px)").addEventListener("change",t=>{t.matches&&n.setPage(1)});
//# sourceMappingURL=commonHelpers.js.map
