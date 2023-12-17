
function correctRating(rating) {
    return rating.toFixed(1);
}

function cutExerciseName(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)

    if (window.innerWidth >= 1440) {
        if (dataUpperCase.length >= 28) {
            return `${dataUpperCase.slice(0, 28)}...`
        }
        return dataUpperCase;
    }
    if (window.innerWidth < 1440) {
        if (dataUpperCase.length >= 20) {
            return `${dataUpperCase.slice(0, 20)}...`
        }
        return dataUpperCase;
    }
}

function cutBurnedCalories(calorie) {
    const calorieString = String(calorie);

    if (window.innerWidth >= 1440) {
        if (calorieString.length > 3) {
            return `${calorieString.slice(0, 3)}/...`
        }
        return `${calorieString} / 3 min`;
    }

    if (window.innerWidth < 1440) {
        if (calorieString.length >= 3) {
            return `${calorieString.slice(0, 3)}/...`
        }
        return `${calorieString}/3...`;
    }
}

function cutBodyPartName(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)

    if (window.innerWidth >= 1440) {
        if (dataUpperCase.length > 10) {
            return `${dataUpperCase.slice(0, 10)}...`
        }
        return dataUpperCase;
    }

    if (window.innerWidth < 1440) {
        if (dataUpperCase.length > 5) {
            return `${dataUpperCase.slice(0, 5)}...`
        }
        return dataUpperCase;
    }
}


function cutTargetName(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)

    if (window.innerWidth >= 1440) {
        if (dataUpperCase.length > 10) {
            return `${dataUpperCase.slice(0, 10)}...`
        }
        return dataUpperCase;
    }

    if (window.innerWidth < 1440) {
        if (dataUpperCase.length > 2) {
            return `${dataUpperCase.slice(0, 2)}...`
        }
        return dataUpperCase;
    }
}


export { cutExerciseName, correctRating, cutBodyPartName, cutBurnedCalories, cutTargetName }