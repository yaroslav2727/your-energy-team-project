import { cutExerciseName, roundingRating, cutDataCardsInfo } from "./cutDataCardsInfo"



export function markupExercises(data) {

	return data
		.map(({ rating, name, burnedCalories, bodyPart, target, _id }) => {
			return `<li class="exercises-item" data-exercise-id="${_id}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${roundingRating(rating)}</p>
				<span class="exercises-name-span">
					<svg class="exercises-icon-star-rating" width="16" height="16">
					<use href="././img/icons.svg#icon-star-rating"></use>
					</svg>
				</span>
			</div>
			
			<button type="button" class="exercises-btn js-excercise-button">Start					
				<svg class="exercises-icon-arrow" width="16" height="16">
					<use href="././img/icons.svg#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="././img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${cutExerciseName(name)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${burnedCalories}/...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${cutDataCardsInfo(bodyPart)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${cutDataCardsInfo(target)}
				</li>
			</ul>
		</div>
	</li>`;
		})
		.join('');
}

{/* <div class="exercises-btn-wrapper"></div> */ }
{/* <span class="exercises-name-span"></span> */ }