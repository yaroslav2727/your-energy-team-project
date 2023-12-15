import{F as p,a as u,S as v}from"./assets/quote-b11192e6.js";import"./assets/vendor-46eef696.js";function g({_id:e,burnedCalories:t,time:s,bodyPart:a,target:d,name:l}){return`    <li class="favorites__item">
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
                              <use href="./img/icons.svg#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn" type="button" data-card-id="${e}">
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
  
                      <p class="sport-card__name">${l}</p>
                    </div>
  
                    <div class="sport-card__footer">
                      <ul class="sport-card__param-list">
                        <li class="sport-card__param-item">
                          Burned calories:<span class="sport-card__param__value"
                            >${t} / ${s} min</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Body part:<span class="sport-card__param__value"
                            >${a}</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Target:<span class="sport-card__param__value">${d}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>`}const _=5,o=document.querySelector(".js-favorites-list"),n=document.querySelector(".js-favorites-no-cards"),c=new p(u),i=T(1,r),m=document.querySelector(".js-temp-add-to-favorites"),f=document.querySelector(".js-temp-page-up"),h=document.querySelector(".js-temp-page-down");let S=1111;m.addEventListener("click",e=>{const t={_id:S++,burnedCalories:"312",time:"3",name:"Test card19-new",bodyPart:"Waist",target:"Abs"};c.addCard(t),r()});f.addEventListener("click",i.increase);h.addEventListener("click",i.decrease);o.addEventListener("click",e=>{const t=e.target.closest(".js-favorites-remove");if(!t)return;const s=t.dataset.cardId;c.removeCard(s),r()});r();function r(){const e=c.getCards(i.getPage(),_);console.log(e),b(e.data)}function b(e){if(e.length===0){n.classList.add("is-visible"),o.innerHTML="";return}else n.classList.remove("is-visible");const t=e.map(g).join("");o.innerHTML=t}function T(e,t){const s=new v("favorites_page");let a=s.getFromStorage()||e;return{increase(){a++,s.setToStorage(a),t()},decrease(){a--,s.setToStorage(a),t()},getPage(){return a}}}
//# sourceMappingURL=commonHelpers.js.map
