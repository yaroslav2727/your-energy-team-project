function cutExerciseName(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)
    // console.log("cutDataCardsInfo >>>", dataUpperCase)
    if (dataUpperCase.length > 20) {
        // console.log("data.slice >>>", data.slice(0, 20))
        return `${dataUpperCase.slice(0, 20)}...`
    }
    return dataUpperCase;
}

function roundingRating(data) {
    // console.log("roundingRating >>>", data)
    return `${Math.round(data)}.0`

}

function cutDataCardsInfo(data) {
    const dataUpperCase = data[0].toUpperCase() + data.slice(1)
    // console.log("cutDataCardsInfo >>>", dataUpperCase)
    // console.log("dataUpperCase >>>", dataUpperCase)
    // if (dataUpperCase.length > 10) {
    //     // console.log("data.slice >>>", data.slice(0, 20))
    //     return `${data.slice(0, 21)}...`
    // }
    if (dataUpperCase.length > 3) {
        return `${dataUpperCase.slice(0, 3)}...`
    }

    return `${dataUpperCase.slice(0, 3)}`
}


export { cutExerciseName, roundingRating, cutDataCardsInfo }