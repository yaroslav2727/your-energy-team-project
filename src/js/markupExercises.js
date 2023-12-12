export function markupExercises(data) {
	return data
		.map(({ rating, name, burnedCalories, bodyPart, target, _id }) => {
			return `<li class="exercises-item" data-exercise-id="${_id}">
		<div class="exercises-item-header">
			<div class="exercises-rating-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">${rating}</p>
			</div>
			<div class="exercises-btn-wrapper">
				<button type="button" class="exercises-btn">Start</button>
				<span class="exercises-name-span">
					<svg class="exercises-icon-arrow" width="24" height="24">
						<use href="../img/icons.svg#icon-arrow"></use>
					</svg>
				</span>
			</div>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
				<svg class="exercises-icon" width="24" height="24">
                  <use href="../img/icons.svg#icon-runner"></use>
                </svg>
			</span>
			<h3 class="exercises-name">${name}</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-data-list">
				<li class="exercises-data-item">
					<span class="exercises-data-info">Burned calories:</span>
					${burnedCalories}/ ...
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Body part:</span>
					${bodyPart}
				</li>
				<li class="exercises-data-item">
					<span class="exercises-data-info">Target:</span>
					${target}
				</li>
			</ul>
		</div>
	</li>`;
		})
		.join('');
}

