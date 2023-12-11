export function markupExercises(data) {
    return data
      .map(({ rating, name, burnedCalories, bodyPart, target, _id }) => {
        return `<li class="exercises-item" data-exercise-id="${_id}">
		<div class="exercises-header">
			<div class="exercises-wrapper">
				<p class="exercises-text">WORKOUT</p>
				<p class="exercises-rating">
					${rating}
				</p>
			</div>
			<button type="button" class="exercises-btn">
	  Start
			</button>
		</div>

		<div class="exercises-title">
			<span class="exercises-name-span">
			</span>
			<h3 class="exercises-name">
				${name}
			</h3>
		</div>

		<div class="exercises-footer">
			<ul class="exercises-desc-list">
				<li class="exercises-desc-item">
					<span class="exercises-desc-span">Burned calories:</span>
					${burnedCalories} / 3 min
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Body part:</span>
					${bodyPart}
				</li>
				<li class="exercises-desc-item">
					<span class="exercises-span">Target:</span>
					${target}
				</li>
			</ul>
		</div>
	</li>`;
      })
      .join('');
}