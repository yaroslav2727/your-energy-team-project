

const input = document.querySelector(".input-filter-exercises");

console.log(input)



input.addEventListener("input", onSearchExercise)

function onSearchExercise(arr) {
    // console.dir(evt.target.value)
    // const searchData = evt.target.value;
    console.log(arr)
    // arr.map(item => item.bodyPart)
    // return arr;
}

export { onSearchExercise };