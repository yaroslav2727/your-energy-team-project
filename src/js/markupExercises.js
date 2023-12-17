import { cutExerciseName, correctRating, cutBodyPartName, cutBurnedCalories, cutTargetName } from "./cutDataCardsInfo"
import icons from "../img/icons.svg"

export function markupExercises(data) {
	return data
		.map(({ rating, name, burnedCalories, bodyPart, target, _id, time }) => {
			return `<li class="exercises-item js-common-card-item" data-exercise-id="${_id}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${correctRating(rating)}</p>
				<span class="exercises-name-span">
					<svg class="exercises-icon-star-rating" width="16" height="16">
					<use href="${icons}#icon-star-rating"></use>
					</svg>
				</span>
			</div>
			
			<button type="button" class="exercises-btn js-excercise-button" >Start					
				<svg class="exercises-icon-arrow" width="16" height="16">
					<use href="${icons}#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon-runner" width="24" height="24">
                  <use href="${icons}#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${cutExerciseName(name)}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span> ${cutBurnedCalories(burnedCalories, time)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span> ${cutBodyPartName(bodyPart)}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span> ${cutTargetName(target)}
				</li>
			</ul>
		</div>
	</li>`;
    })
    .join("");
}
