import { getExerciseById } from "./api/api";

// import { handlerClickCategory } from "./homeCategories"
// console.log(getExerciseById('64f389465ae26083f39b1817'));


const cardsList = document.querySelector(".cards");
const startButton = document.querySelector(".exercises-btn")
const modalExcercise= document.querySelector(".modal_window_container")
const closeModalButton = document.querySelector(".close_modal_button")


function markupModal(data) {
    return data
        .map(({ gifUrl, name, bodyPart, equipment, target, description, rating, burnedCalories, popularity }) => {
            return `<div class="modal_window_content">
<img class ="modal_image" src="${gifUrl}" alt="${name}">
<h3 class="modal_title">${name}</h3>
<p class = "excercise_rating">${rating}</p>
<ul class="excercise_units">
<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${target}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${bodyPart}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${equipment}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${popularity}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${burnedCalories}</p></li>
        <p class="modal_text">${description}</p>
<div class="buttons_modal"><button class="add_favorite_button" type="button">Add to favorite</button>
<button class="rate_button" type="button">Give a rating</button></div> 
</ul>
</div >`;
        })
        .join('');
};
 


const openModal = function () {
    // if (!event.target.classList.contains('exercises-btn')) {
    //     return
    // }
    //     console.log(event.target);
    modalExcercise.classList.remove("is_hidden");
    
    console.log(getExerciseById('64f389465ae26083f39b1817'))
       }

const closeModal = function () {
    modalExcercise.classList.add("is_hidden")
}
cardsList.addEventListener('click', openModal);
// function createListener() {
//     if (handlerClickCategory == true) {
//       startButton.addEventListener('click', openModal);  
//     } return
// }
// cardsList.addEventListener('click', createListener);
closeModalButton.addEventListener('click', closeModal);


// function markupModal(data) {
//     return data
//     .map(({}))
// }
