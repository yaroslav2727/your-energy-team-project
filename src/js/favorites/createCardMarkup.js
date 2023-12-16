import icons from '../../img/icons.svg';

export function createCardMarkup({
  _id,
  burnedCalories,
  time,
  bodyPart,
  target,
  name,
}) {
  return `    <li class="favorites__item js-common-card-item" data-exercise-id="${_id}">
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
                          data-card-id="${_id}"
                        >
                        

                             <svg class="icon" width="16" height="16" >
                              <use href="${icons}#icon-trash"></use>
                            </svg>
                        </button>
                      </div>
  
                      <button class="button sport-card__start-btn js-excercise-button" type="button" data-card-id="${_id}">
                        Start
                     
                          <svg class="icon" width="16" height="16" >
                              <use href="${icons}#icon-arrow"></use>
                            </svg>
                        
                      </button>
                    </div>
  
                    <div class="sport-card__meta">                     

                      <svg class="icon" width="24" height="24">
                        <use href="${icons}#icon-runner"></use>
                      </svg>
  
                      <p class="sport-card__name">${name}</p>
                    </div>
  
                    <div class="sport-card__footer">
                      <ul class="sport-card__param-list">
                        <li class="sport-card__param-item">
                          Burned calories:<span class="sport-card__param__value"
                            >${burnedCalories} / ${time} min</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Body part:<span class="sport-card__param__value"
                            >${bodyPart}</span
                          >
                        </li>
                        <li class="sport-card__param-item">
                          Target:<span class="sport-card__param__value">${target}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>`;
}
