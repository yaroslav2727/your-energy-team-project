import { getExerciseById } from "./api/api";

// import { handlerClickCategory } from "./homeCategories"
// console.log(getExerciseById('64f389465ae26083f39b1817'));


const cardsList = document.querySelector(".cards");
const startButton = document.querySelector(".exercises-btn")
const modalExcercise= document.querySelector(".modal_window_container")
const closeModalButton = document.querySelector(".close_modal_button")

const openModal = function (event) {
    // if (!event.target.classList.contains('exercises-btn')) {
    //     return
    // }
    //     console.log(event.target);
    modalExcercise.classList.remove("is_hidden");
       }

const closeModal = function () {
    modalExcercise.classList.add("is_hidden")
}
  
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
