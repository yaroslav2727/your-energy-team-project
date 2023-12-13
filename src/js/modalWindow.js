import { getExerciseById } from "./api/api";

const cardsList = document.querySelector(".cards");
const startButton = document.querySelector(".exercises-btn")
const modalExcercise= document.querySelector(".modal_window_container")
const closeModalButton = document.querySelector(".close_modal_button")

cardsList.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

function markupModal({gifUrl, name, bodyPart, equipment, target, description, rating, burnedCalories, popularity}) {
    return `<div class="modal_window_content">
<img class ="modal_image" src="${gifUrl}" alt="${name}">
<button class="close_modal_button" type="button" data-modal-favorite-close><svg></svg></button>
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
};


function openModal(e) {

    const btn = e.target
    if (!btn.classList.contains('js-excercise-button')) return

    const card = btn.closest('.exercises-item')
       
    const cardId = card.dataset.exerciseId
    console.log(cardId)

    getExerciseById(cardId).then(resp => {
        console.log(resp)
        const modalMarkup = markupModal(resp);
        modalExcercise.innerHTML = modalMarkup
    }
    )

modalExcercise.classList.remove("is_hidden");
}

function closeModal () {
    modalExcercise.classList.add("is_hidden")
    console.log('close modal');
}
