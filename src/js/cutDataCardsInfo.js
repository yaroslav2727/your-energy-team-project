
function correctRating(rating) {
    return rating.toFixed(1);
}

function cutExerciseName(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)

    if (window.innerWidth >= 1440) {
        if (dataUpperCase.length >= 25) {
            return `${dataUpperCase.slice(0, 25)}...`
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

function cutBurnedCalories(calorie, time) {
    const calorieString = String(calorie);

    if (window.innerWidth >= 1440) {
        if (calorieString.length > 5) {
            return `${calorieString.slice(0, 5)}/...`
        }
        return `${calorieString} / ${time} min`;
    }

    if (window.innerWidth > 375 && window.innerWidth < 1440) {
        if (calorieString.length >= 3) {
            return `${calorieString.slice(0, 3)}/...`
        }
        return `${calorieString}/${time}...`;
    }
    if (window.innerWidth <= 375) {
        if (calorieString.length >= 3) {
            return `${calorieString.slice(0, 3)}/...`
        }
        return `${calorieString}/${time}...`;
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
    if (window.innerWidth > 375 && window.innerWidth < 1440) {
        if (dataUpperCase.length > 6) {
            return `${dataUpperCase.slice(0, 5)}...`
        }
        return dataUpperCase;
    }
    if (window.innerWidth <= 375) {
        if (dataUpperCase.length > 4) {
            return `${dataUpperCase.slice(0, 4)}...`
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