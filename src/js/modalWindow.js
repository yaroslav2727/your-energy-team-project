import { getExerciseById } from "./api/api";

console.log(getExerciseById('64f389465ae26083f39b1817'));


const openModalButton = document.querySelector(".exercises-btn");
const modalExcercise= document.querySelector(".modal_window_container")
const closeModalButton = document.querySelector(".close_modal_button")

const openModal = function () {
    modalExcercise.classList.remove("is_hidden");
}
const closeModal = function () {
    modalExcercise.classList.add("is_hidden")
  }
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

openModalButton.addEventListener('click', getExerciseById);

function markupModal(data) {
    return data
    .map(({}))
}
