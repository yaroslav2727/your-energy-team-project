var A=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var s=(t,e,a)=>(A(t,e,"read from private field"),a?a.call(t):e.get(t)),c=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},d=(t,e,a,r)=>(A(t,e,"write to private field"),r?r.call(t,a):e.set(t,a),a);var P=(t,e,a)=>(A(t,e,"access private method"),a);import{F as N,a as R,b as W,S as j}from"./assets/quote-b66352b8.js";import"./assets/vendor-46eef696.js";function x({_id:t,burnedCalories:e,time:a,bodyPart:r,target:n,name:C}){return`    <li class="favorites__item">
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
  
                      <button class="button sport-card__start-btn" type="button" data-card-id="${t}">
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
  
                      <p class="sport-card__name">${C}</p>
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
                            >${r}</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Target:<span class="sport-card__param__value">${n}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>`}const D=[{_id:1,burnedCalories:"312",time:"3",name:"air bike1",bodyPart:"Waist",target:"Abs"},{_id:2,burnedCalories:"312",time:"3",name:"Air bike2",bodyPart:"Waist",target:"Abs"},{_id:3,burnedCalories:"312",time:"3",name:"Air bike3",bodyPart:"Waist",target:"Abs"},{_id:4,burnedCalories:"312",time:"3",name:"Air bike4",bodyPart:"Waist",target:"Abs"},{_id:5,burnedCalories:"312",time:"3",name:"Air bike5",bodyPart:"Waist",target:"Abs"},{_id:6,burnedCalories:"312",time:"3",name:"Air bike6",bodyPart:"Waist",target:"Abs"},{_id:7,burnedCalories:"312",time:"3",name:"Air bike7",bodyPart:"Waist",target:"Abs"},{_id:8,burnedCalories:"312",time:"3",name:"Air bike8",bodyPart:"Waist",target:"Abs"},{_id:9,burnedCalories:"312",time:"3",name:"Air bike9",bodyPart:"Waist",target:"Abs"},{_id:10,burnedCalories:"312",time:"3",name:"Air bike10",bodyPart:"Waist",target:"Abs"},{_id:11,burnedCalories:"312",time:"3",name:"Air bike11",bodyPart:"Waist",target:"Abs"},{_id:12,burnedCalories:"312",time:"3",name:"Air bike12",bodyPart:"Waist",target:"Abs"},{_id:13,burnedCalories:"312",time:"3",name:"Air bike13",bodyPart:"Waist",target:"Abs"},{_id:14,burnedCalories:"312",time:"3",name:"Air bike14",bodyPart:"Waist",target:"Abs"},{_id:15,burnedCalories:"312",time:"3",name:"Air bike15",bodyPart:"Waist",target:"Abs"},{_id:16,burnedCalories:"312",time:"3",name:"Air bike16",bodyPart:"Waist",target:"Abs"},{_id:17,burnedCalories:"312",time:"3",name:"Air bike17",bodyPart:"Waist",target:"Abs"},{_id:18,burnedCalories:"312",time:"3",name:"Air bike18",bodyPart:"Waist",target:"Abs"}];var l,b,o,g,u,h,S,v,T;class F{constructor(e,{perPage:a}){c(this,h);c(this,v);c(this,l,void 0);c(this,b,void 0);c(this,o,void 0);c(this,g,void 0);c(this,u,void 0);this.refs={container:e},d(this,g,1),d(this,u,a||10),d(this,o,1),this.refs.container.addEventListener("click",P(this,v,T).bind(this)),window.matchMedia("(min-width: 480px)").addEventListener("change",P(this,h,S).bind(this))}reset(){d(this,o,1)}on(e,a){if(e==="beforemove"){d(this,l,a);return}if(e==="aftermove"){d(this,b,a);return}throw new Error('Event type is not correct (must be "beforemove" of "aftermove")')}render(){if(s(this,g)<=s(this,u)){this.refs.container.innerHTML="";return}const e=Number(s(this,o)),a=this.getLastPageNumber();let r="";const n=a,C=window.innerWidth;let p=1;C<480&&(p=1);const y=`<svg class="pag-icon" width="10" height="3" viewBox="0 0 10 3" xmlns="http://www.w3.org/2000/svg">
                    <path style="fill: var(--dots-color, #A8A2A2)" d="M1.61719 0.5C1.88281 0.5 2.08789 0.576172 2.23242 0.728516C2.37695 0.876953 2.44922 1.06445 2.44922 1.29102C2.44922 1.51367 2.37695 1.69922 2.23242 1.84766C2.08789 1.99219 1.88281 2.06445 1.61719 2.06445C1.36328 2.06445 1.16211 1.99219 1.01367 1.84766C0.865234 1.70312 0.791016 1.51758 0.791016 1.29102C0.791016 1.06445 0.863281 0.876953 1.00781 0.728516C1.15234 0.576172 1.35547 0.5 1.61719 0.5ZM4.96875 0.5C5.23438 0.5 5.43945 0.576172 5.58398 0.728516C5.72852 0.876953 5.80078 1.06445 5.80078 1.29102C5.80078 1.51367 5.72852 1.69922 5.58398 1.84766C5.43945 1.99219 5.23438 2.06445 4.96875 2.06445C4.71484 2.06445 4.51367 1.99219 4.36523 1.84766C4.2168 1.70312 4.14258 1.51758 4.14258 1.29102C4.14258 1.06445 4.21484 0.876953 4.35938 0.728516C4.50391 0.576172 4.70703 0.5 4.96875 0.5ZM8.32031 0.5C8.58594 0.5 8.79102 0.576172 8.93555 0.728516C9.08008 0.876953 9.15234 1.06445 9.15234 1.29102C9.15234 1.51367 9.08008 1.69922 8.93555 1.84766C8.79102 1.99219 8.58594 2.06445 8.32031 2.06445C8.06641 2.06445 7.86523 1.99219 7.7168 1.84766C7.56836 1.70312 7.49414 1.51758 7.49414 1.29102C7.49414 1.06445 7.56641 0.876953 7.71094 0.728516C7.85547 0.576172 8.05859 0.5 8.32031 0.5Z" />
                </svg>`;e>4&&(r+=`<a class="pag__page pag__btn pag__btn--prev" href="#" data-value="${e-1}"></a>`);for(let i=1;i<=n;i++){if(i===e){r+=`<a class="pag__page pag__page--current-number" href="#" data-value="${e}">${e}</a>`;continue}if(i>1&&i<e-p-1){r+=`<a class="pag__page pag__page--dots pag__btn--dots-prev hovered" href="#" data-value="${e-4}">
            ${y}
          </a>`,i=e-p-1;continue}if(i>e+p&&i<n-1){r+=`<a class="pag__page pag__page--dots pag__btn--dots-next hovered" href="#" data-value="${e+4}">
          ${y}
          </a>`,i=n-1;continue}if(i===n&&n>9999){r+=`<a class="pag__page hovered" href="#" data-value="${i}">Last page</a>`;continue}r+=`<a class="pag__page hovered" href="#" data-value="${i}">${i}</a>`}e<=n-4&&(r+=`<a class="pag__page pag__btn pag__btn--next" href="#" data-value="${e+1}"></a>`),this.refs.container.innerHTML=r}goToPage(e){if(!Number.isInteger(Number(e)))throw console.log(e),new Error("Page must be integer!");e<1||e>this.getLastPageNumber()||d(this,o,e)}getCurrentPage(){return s(this,o)}updateTotalItems(e){d(this,g,e)}getLastPageNumber(){return Math.ceil(Number(s(this,g))/Number(s(this,u)))}}l=new WeakMap,b=new WeakMap,o=new WeakMap,g=new WeakMap,u=new WeakMap,h=new WeakSet,S=function(){this.render()},v=new WeakSet,T=function(e){if(e.preventDefault(),!e.target.classList.contains("pag__page"))return;const a=e.target.dataset.value;s(this,o)!=a&&(s(this,l)&&s(this,l).call(this,{page:s(this,o)}),this.goToPage(a),this.render(),s(this,b)&&s(this,b).call(this,{page:s(this,o)}))};const $=document.querySelector(".js-favorites-list"),L=document.querySelector(".js-favorites-list--desktop"),k=document.querySelector(".js-favorites-no-cards"),B=document.querySelector(".pag"),f=new N(R),m=new F(B,{perPage:W}),_=H(1,w);m.on("aftermove",t=>{_.setPage(t.page)});D.forEach(t=>{f.addCard(t)});$.addEventListener("click",E);L.addEventListener("click",E);w();M();function E(t){const e=t.target.closest(".js-favorites-remove");if(!e)return;const a=e.dataset.cardId;f.removeCard(a),w(),M()}function M(){const t=f.getAllCards();I(t,L)}function w(){const t=f.getCards(_.getPage(),W);console.log(t);const{data:e,page:a,totalCount:r}=t;if(I(e,$),e.length===0&r!==0){_.setPage(a-1);return}m.updateTotalItems(t.totalCount),m.goToPage(a),m.render()}function I(t,e){if(t.length===0){k.classList.add("is-visible"),e.innerHTML="";return}else k.classList.remove("is-visible");const a=t.map(x).join("");e.innerHTML=a}function H(t,e){const a=new j("favorites_page");let r=a.getFromStorage()||t;return{increase(){r++,a.setToStorage(r),e()},decrease(){r--,a.setToStorage(r),e()},setPage(n){r=n,a.setToStorage(r),e()},getPage(){return r}}}window.matchMedia("(min-width: 1440px)").addEventListener("change",t=>{t.matches&&_.setPage(1)});
//# sourceMappingURL=commonHelpers.js.map
