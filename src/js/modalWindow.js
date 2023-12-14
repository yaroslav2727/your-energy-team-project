import { getExerciseById } from "./api/api";
import { loader } from "./utils/loader";

const cardsList = document.querySelector(".cards");
const contentUpdate = document.querySelector(".modal_window_update");
const modalExcercise = document.querySelector(".modal_window_container");
const closeModalButton = document.querySelector(".close_modal_button");
const giveRatingButton = document.querySelector(".rate_button");
const overflow = document.body;
const addFavoriteBtn = document.querySelector(".add_favorite_button")

cardsList.addEventListener('click', openModal);
closeModalButton.addEventListener('click', clickToClose);
giveRatingButton.addEventListener('click', openRateModal);
addFavoriteBtn.addEventListener('click', showIcon)

function showIcon() {
    let trashIcon = document.querySelector(".trash")
    let heartIcon = document.querySelector(".heart")
    trashIcon.classList.toggle("hidden-icon")
    heartIcon.classList.toggle("hidden-icon")
    addFavoriteBtn.classList.toggle("button-text")
    if (addFavoriteBtn.classList.contains("button-text"))
    {   
                } else {addFavoriteBtn.textContent = `Remove from Favorite `}

}





function showDecimal(data) {
       
    return `${data.toFixed(1)}`
    }

function markupModal({ gifUrl, time, name, bodyPart, equipment, target, description, rating, burnedCalories, popularity }) {

    return `<div class="modal_window_content">
<div class="modal_image_container"><img class ="modal_image" src="${gifUrl}" alt="${name}">
</div>
<div class="modal_text_content"><h3 class="modal_title">${name}</h3>
<div class="rating_modal_wrapper"><p class = "excercise_rating">${showDecimal(rating)}</p>
<ul class="list stars_list">
    <li class="rating_item"><a class="star_item"><svg height="24" width="24" class="rating_star_modal"><use href="./img/icons.svg#icon-star-rating"></use></svg></a></li>
     <li class="rating_item"><a class="star_item"><svg height="24" width="24" class="rating_star_modal"><use href="./img/icons.svg#icon-star-rating"></use></svg></a></li>
      <li class="rating_item"><a class="star_item"><svg height="24" width="24" class="rating_star_modal"><use href="./img/icons.svg#icon-star-rating"></use></svg></a></li>
       <li class="rating_item"><a class="star_item"><svg height="24" width="24" class="rating_star_modal"><use href="./img/icons.svg#icon-star-rating"></use></svg></a></li>
        <li class="rating_item"><a class="star_item"><svg height="24" width="24" class="rating_star_modal"><use href="./img/icons.svg#icon-star-rating"></use></svg></a></li>
    </ul></div>
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

function openRateModal() {
    giveRatingButton.classList.remove("is-hidden");
    modalExcercise.classList.add("is-hidden");
    window.removeEventListener('keydown', closeModal)
    window.removeEventListener('click', closeModal)
}

function openModal(e) {

    const btn = e.target
    if (!btn.classList.contains('js-excercise-button')) return

    const card = btn.closest('.exercises-item');

    const cardId = card.dataset.exerciseId;

    // loader.create()

    // getExerciseById(cardId)
    //     .then(resp => {
    //     const modalMarkup = markupModal(resp);
    //     contentUpdate.innerHTML = modalMarkup;
    // }
    // )
    //     .finally(() => {
    //         loader.destroy();
    // })
    giveRatingButton.setAttribute('data-Id', cardId);

    modalExcercise.classList.remove("is-hidden");

    overflow.style.overflow = 'hidden'
    window.addEventListener('keydown', closeModal)
    window.addEventListener('click', closeModal)

}


function closeModal(event) {
    if (event.key === 'Escape') {
        modalExcercise.classList.add("is-hidden");
        overflow.style.overflow = 'visible';
    }
    else if (!event.target.closest(".modal_window_default_content,.js-excercise-button")) {
        modalExcercise.classList.add("is-hidden");
        overflow.style.overflow = 'visible';
    }

 }

function clickToClose() {

    modalExcercise.classList.add("is-hidden");
    overflow.style.overflow = 'visible';
} 