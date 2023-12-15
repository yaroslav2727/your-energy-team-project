var u=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var i=(r,t,e)=>(u(r,t,"read from private field"),e?e.call(r):t.get(r)),n=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},c=(r,t,e,a)=>(u(r,t,"write to private field"),a?a.call(r,e):t.set(r,e),e);var h=(r,t,e)=>(u(r,t,"access private method"),e);import"./assets/quote-babb17fd.js";import"./assets/vendor-46eef696.js";function y({_id:r,burnedCalories:t,time:e,bodyPart:a,target:d,name:p}){return`    <li class="favorites__item">
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
                          data-card-id="${r}"
                        >
                        

                             <svg class="icon" width="16" height="16" >
                              <use href="./img/icons.svg#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn" type="button" data-card-id="${r}">
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
  
                      <p class="sport-card__name">${p}</p>
                    </div>
  
                    <div class="sport-card__footer">
                      <ul class="sport-card__param-list">
                        <li class="sport-card__param-item">
                          Burned calories:<span class="sport-card__param__value"
                            >${t} / ${e} min</span
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
              </li>`}var o;class f{constructor(t){n(this,o,void 0);c(this,o,t)}setToStorage(t){localStorage.setItem(i(this,o),JSON.stringify(t))}getFromStorage(){const t=localStorage.getItem(i(this,o));return t?JSON.parse(t):null}}o=new WeakMap;var s,l,C;class S extends f{constructor(e){super(e);n(this,l);n(this,s,void 0);c(this,s,this.getFromStorage()||[])}addCard(e){h(this,l,C).call(this,e._id)||(i(this,s).push(e),this.setToStorage(i(this,s)))}removeCard(e){const a=i(this,s).filter(({_id:d})=>d.toString()!==e.toString());c(this,s,[...a]),this.setToStorage(i(this,s))}getCards(e,a){if(e*a-a>i(this,s).length)throw new Error("Out of list");return i(this,s).length===0?{data:[]}:{data:i(this,s).filter((p,v)=>v>=e*a-a&&v<e*a),totalCount:i(this,s).length,page:e}}get list(){return i(this,s)}}s=new WeakMap,l=new WeakSet,C=function(e){return i(this,s).some(({_id:a})=>a===e)};const k=[{_id:1,burnedCalories:"312",time:"3",name:"air bike1",bodyPart:"Waist",target:"Abs"},{_id:2,burnedCalories:"312",time:"3",name:"Air bike2",bodyPart:"Waist",target:"Abs"},{_id:3,burnedCalories:"312",time:"3",name:"Air bike3",bodyPart:"Waist",target:"Abs"},{_id:4,burnedCalories:"312",time:"3",name:"Air bike4",bodyPart:"Waist",target:"Abs"},{_id:5,burnedCalories:"312",time:"3",name:"Air bike5",bodyPart:"Waist",target:"Abs"},{_id:6,burnedCalories:"312",time:"3",name:"Air bike6",bodyPart:"Waist",target:"Abs"},{_id:7,burnedCalories:"312",time:"3",name:"Air bike7",bodyPart:"Waist",target:"Abs"},{_id:8,burnedCalories:"312",time:"3",name:"Air bike8",bodyPart:"Waist",target:"Abs"},{_id:9,burnedCalories:"312",time:"3",name:"Air bike9",bodyPart:"Waist",target:"Abs"},{_id:10,burnedCalories:"312",time:"3",name:"Air bike10",bodyPart:"Waist",target:"Abs"},{_id:11,burnedCalories:"312",time:"3",name:"Air bike11",bodyPart:"Waist",target:"Abs"},{_id:12,burnedCalories:"312",time:"3",name:"Air bike12",bodyPart:"Waist",target:"Abs"},{_id:13,burnedCalories:"312",time:"3",name:"Air bike13",bodyPart:"Waist",target:"Abs"},{_id:14,burnedCalories:"312",time:"3",name:"Air bike14",bodyPart:"Waist",target:"Abs"},{_id:15,burnedCalories:"312",time:"3",name:"Air bike15",bodyPart:"Waist",target:"Abs"},{_id:16,burnedCalories:"312",time:"3",name:"Air bike16",bodyPart:"Waist",target:"Abs"},{_id:17,burnedCalories:"312",time:"3",name:"Air bike17",bodyPart:"Waist",target:"Abs"},{_id:18,burnedCalories:"312",time:"3",name:"Air bike18",bodyPart:"Waist",target:"Abs"}],P="favorite_sport_cards",W=5,g=document.querySelector(".js-favorites-list"),A=document.querySelector(".js-favorites-no-cards"),b=new S(P),_=j(1,m);k.forEach(r=>{b.addCard(r)});const T=document.querySelector(".js-temp-add-to-favorites"),E=document.querySelector(".js-temp-page-up"),w=document.querySelector(".js-temp-page-down");let L=1111;T.addEventListener("click",r=>{const t={_id:L++,burnedCalories:"312",time:"3",name:"Test card19-new",bodyPart:"Waist",target:"Abs"};b.addCard(t),m()});E.addEventListener("click",_.increase);w.addEventListener("click",_.decrease);g.addEventListener("click",r=>{const t=r.target.closest(".js-favorites-remove");if(!t)return;const e=t.dataset.cardId;b.removeCard(e),m()});m();function m(){const r=b.getCards(_.getPage(),W);console.log(r),R(r.data)}function R(r){if(r.length===0){A.classList.add("is-visible"),g.innerHTML="";return}else A.classList.remove("is-visible");const t=r.map(y).join("");g.innerHTML=t}function j(r,t){const e=new f("favorites_page");let a=e.getFromStorage()||r;return{increase(){a++,e.setToStorage(a),t()},decrease(){a--,e.setToStorage(a),t()},getPage(){return a}}}
//# sourceMappingURL=commonHelpers.js.map
