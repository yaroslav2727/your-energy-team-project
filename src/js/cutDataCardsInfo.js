function cutExerciseName(data) {
    // console.log("cutDataCardsInfo >>>", data)
    if (data.length > 21) {
        // console.log("data.slice >>>", data.slice(0, 20))
        return `${data.slice(0, 21)}...`
    }
    return data;
}

function roundingRating(data) {
    // console.log("roundingRating >>>", data)
    return `${Math.round(data)}.0`

}

function cutDataCardsInfo(data) {
    console.log("cutDataCardsInfo >>>", data)
    if (data.length > 3) {
        return `${data.slice(0, 3)}...`
    }
    return `${data.slice(0, 3)}...`
}


export { cutExerciseName, roundingRating, cutDataCardsInfo }