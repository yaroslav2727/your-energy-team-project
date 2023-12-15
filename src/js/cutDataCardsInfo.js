function cutExerciseName(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)

    if (dataUpperCase.length > 20) {
        return `${dataUpperCase.slice(0, 20)}...`
    }
    return dataUpperCase;
}

function correctRating(rating) {
    return rating.toFixed(1);
}

function cutDataCardsInfo(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)

    if (dataUpperCase.length > 3) {
        return `${dataUpperCase.slice(0, 3)}...`
    }

    return `${dataUpperCase.slice(0, 3)}`
}


export { cutExerciseName, correctRating, cutDataCardsInfo }