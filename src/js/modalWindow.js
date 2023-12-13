import { getExerciseById } from "./api/api";

const cardsList = document.querySelector(".cards");
const contentUpdate = document.querySelector(".modal_window_update");
const modalExcercise = document.querySelector(".modal_window_container");
const closeModalButton = document.querySelector(".close_modal_button");
const giveRatingButton = document.querySelector(".rate_button");
const overflow = document.body;

cardsList.addEventListener('click', openModal);
closeModalButton.addEventListener('click', clickToClose);

function markupModal({gifUrl,time, name, bodyPart, equipment, target, description, rating, burnedCalories, popularity}) {
    return `<div class="modal_window_content">
<div class="modal_image_container"><img class ="modal_image" src="${gifUrl}" alt="${name}">
</div>
<div class="modal_text_content"><h3 class="modal_title">${name}</h3>
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
        <p class="excercise_text">${burnedCalories}/${time} min</p></li>
        <p class="modal_text">${description}</p>

</ul></div>
</div >`;
};


function openModal(e) {

    const btn = e.target
    if (!btn.classList.contains('js-excercise-button')) return

    const card = btn.closest('.exercises-item');
       
    const cardId = card.dataset.exerciseId;


    getExerciseById(cardId).then(resp => {

        const modalMarkup = markupModal(resp);
        contentUpdate.innerHTML = modalMarkup;
    }
    )
    giveRatingButton.setAttribute('dataId', cardId);

    modalExcercise.classList.remove("is_hidden");

    overflow.style.overflow = 'hidden'
}
window.addEventListener('keydown', closeModal)
window.addEventListener('click', closeModal)
   
function closeModal(event) {
    if (event.key === 'Escape') {
        modalExcercise.classList.add("is_hidden");
        overflow.style.overflow = 'visible';
    }
    else  if (!event.target.closest(".modal_window_default_content,.js-excercise-button")) {
        modalExcercise.classList.add("is_hidden");
    overflow.style.overflow = 'visible';
    }

}
function clickToClose() {
   
    modalExcercise.classList.add("is_hidden");
    overflow.style.overflow = 'visible';} 