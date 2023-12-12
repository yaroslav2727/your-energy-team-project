import { getExerciseById } from "./api/api";

console.log(getExerciseById('64f389465ae26083f39b1817'));


const cardsList = document.querySelector(".js_cards");
const modalExcercise= document.querySelector(".modal_window_container")
const closeModalButton = document.querySelector(".close_modal_button")

const openModal = function (event) {
    if (cardsList.closest(".exercises-btn")) {
        console.log(event.target);
    modalExcercise.classList.remove("is_hidden");
    }
    else return
    
}

const closeModal = function () {
    modalExcercise.classList.add("is_hidden")
  }
cardsList.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);


// function markupModal(data) {
//     return data
//     .map(({}))
// }
