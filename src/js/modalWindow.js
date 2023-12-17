import iziToast from "izitoast";
import { getExerciseById } from "./api/api";
import { loader } from "./utils/loader";
import { buttonup } from "./button-up";
import { FavoritesStorage } from "./favorites/favoritesStorage";
import { FAVORITES_STORAGE_KEY } from "./favorites/favoritesConfig";

const cardsList = document.querySelector(".js-common-card-list");
const cardFavoritesWrapper = document.querySelector(".js-faovorites-wrapper");
const contentUpdate = document.querySelector(".excercise_units");
const modalExcercise = document.querySelector(".modal_window_container");
const closeModalButton = document.querySelector(".close_modal_button");
const giveRatingButton = document.querySelector(".rate_button");
const overflow = document.body;
const addFavoriteBtn = document.querySelector(".js-add-favorite-btn");
const excerciseName = document.querySelector(".modal_title");
const excerciseRating = document.querySelector(".excercise_rating");
const image = document.querySelector(".modal_image");
const firstStar = document.querySelector(".first_star");
const secondStar = document.querySelector(".second_star");
const thirdStar = document.querySelector(".third_star");
const fourthStar = document.querySelector(".fourth_star");
const fifthStar = document.querySelector(".fifth_star");
let cardState = null;
const storage = new FavoritesStorage(FAVORITES_STORAGE_KEY);

function sendMessage(message) {
  window.postMessage(message, "*");
}

if (cardsList) {
  cardsList.addEventListener("click", openModal);
}

if (cardFavoritesWrapper) {
  cardFavoritesWrapper.addEventListener("click", openModal);
}

closeModalButton.addEventListener("click", clickToClose);
giveRatingButton.addEventListener("click", openRateModal);
addFavoriteBtn.addEventListener("click", addFavoriteAction);

function buttonView(cardId) {
  if (storage.isCardExisted(cardId)) {
    addFavoriteBtn.classList.add("is-card-existed");
  } else {
    addFavoriteBtn.classList.remove("is-card-existed");
  }
}

function addFavoriteAction() {
  if (!cardState) return;
  if (storage.isCardExisted(cardState._id)) {
    storage.removeCard(cardState._id);
    buttonView(cardState._id);
  } else {
    storage.addCard(cardState);
    buttonView(cardState._id);
  }
  sendMessage("update-favorites");
}

function editName(elem) {
  if (!elem) {
    return;
  } else {
    excerciseName.textContent = elem;
  }
}

function editRating(rating) {
  if (!rating) {
    return;
  } else {
    let newRating = rating.toFixed(1);
    excerciseRating.textContent = newRating;
  }
}

function clearStars() {
  firstStar.classList.remove("rating_star_filled");
  secondStar.classList.remove("rating_star_filled");
  thirdStar.classList.remove("rating_star_filled");
  fourthStar.classList.remove("rating_star_filled");
  fifthStar.classList.remove("rating_star_filled");
}

function colorizeStars(rating) {
  if (rating === 5) {
    firstStar.classList.add("rating_star_filled");
    secondStar.classList.add("rating_star_filled");
    thirdStar.classList.add("rating_star_filled");
    fourthStar.classList.add("rating_star_filled");
    fifthStar.classList.add("rating_star_filled");
  } else if (rating >= 4) {
    firstStar.classList.add("rating_star_filled");
    secondStar.classList.add("rating_star_filled");
    thirdStar.classList.add("rating_star_filled");
    fourthStar.classList.add("rating_star_filled");
  } else if (rating >= 3) {
    firstStar.classList.add("rating_star_filled");
    secondStar.classList.add("rating_star_filled");
    thirdStar.classList.add("rating_star_filled");
  } else if (rating >= 2) {
    firstStar.classList.add("rating_star_filled");
    secondStar.classList.add("rating_star_filled");
  } else if (rating >= 1) {
    firstStar.classList.add("rating_star_filled");
  } else return;
}

function updateImage(imgUrl, alt) {
  if (!imgUrl) {
    return;
  } else {
    image.src = imgUrl;
    image.alt = alt;
  }
}

function markupModal({
  time,
  bodyPart,
  equipment,
  target,
  description,
  burnedCalories,
  popularity,
}) {
  if (!target) {
    target = "Not Defined";
  }
  if (!equipment) {
    equipment = "Not Defined";
  }
  if (!popularity) {
    popularity = "Not defined";
  }
  if (!burnedCalories || !time) {
    burnedCalories = "N";
    time = "A";
  }
  if (!description) {
    description = "No description yet.";
  }
  return `<li class="excercise_item"><h4 class="excercise_title">Taget</h4><p class="excercise_text">${target}</p></li>
<li class="excercise_item"><h4 class="excercise_title">Body Part</h4>
        <p class="excercise_text">${bodyPart}</p></li>
 <li class="excercise_item"><h4 class="excercise_title">Equipment</h4>
        <p class="excercise_text">${equipment}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Popular</h4>
        <p class="excercise_text">${popularity}</p></li>
        <li class="excercise_item"><h4 class="excercise_title">Burned calories</h4>
        <p class="excercise_text">${burnedCalories}/${time} min</p></li>
        <li><p class="modal_text">${description}</p></li>
`;
}

function openRateModal() {
  giveRatingButton.classList.remove("is-hidden");
  modalExcercise.classList.add("is-hidden");
  window.removeEventListener("keydown", closeModal);
  window.removeEventListener("click", closeModal);
}

function openModal(e) {
  const btn = e.target.closest(".js-excercise-button");
  if (!btn) return;

  const card = btn.closest(".js-common-card-item");

  const cardId = card.dataset.exerciseId;

  loader.create();
  buttonup.hide();

  getExerciseById(cardId)
    .then(resp => {
      const modalMarkup = markupModal(resp);
      contentUpdate.innerHTML = modalMarkup;
      editName(resp.name);
      editRating(resp.rating);
      colorizeStars(resp.rating);
      updateImage(resp.gifUrl, resp.name);
      cardState = resp;
      buttonView(resp._id);
    })
    .catch(err => {
      console.error(err);
      iziToast.show({
        position: "center",
        color: "red",
        message: "An error has ocurred. Please try again later",
      });
    })
    .finally(() => {
      loader.destroy();
    });
  giveRatingButton.setAttribute("data-Id", cardId);

  modalExcercise.classList.remove("is-hidden");
  overflow.style.overflow = "hidden";
  window.addEventListener("keydown", closeModal);
  window.addEventListener("click", closeModal);
}

function closeModal(event) {
  if (event.key === "Escape") {
    modalExcercise.classList.add("is-hidden");
    overflow.style.overflow = "visible";
    clearStars();
    buttonup.show();
  } else if (!event.target.closest(".modal_window_default_content,.js-excercise-button")) {
    modalExcercise.classList.add("is-hidden");
    overflow.style.overflow = "visible";
    clearStars();
    buttonup.show();
  }
}

function clickToClose() {
  modalExcercise.classList.add("is-hidden");
  overflow.style.overflow = "visible";
  clearStars();
  buttonup.show();
}
