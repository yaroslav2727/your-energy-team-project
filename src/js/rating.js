import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { patchRating } from "../js/api/api";

const modalReff = document.querySelector("[data-modal]");
const reatingTitleReff = document.querySelector("p[data-raiting]");
const btnCloseReff = document.querySelector(".btn_close");
const formReff = document.querySelector(".rating_form");
const ratingStarsReff = [...document.getElementsByClassName("btn_star")];
const modalContainerReff = document.querySelector('.modal_window_container')


let raiting = 0;
let formItems = {};

btnCloseReff.addEventListener("click", evt => {
  evt.preventDefault();
  modalContainerReff.classList.remove('is-hidden')
});

formReff.addEventListener("submit", evt => {
  evt.preventDefault();
  const dataIdReff = document.querySelector("[dataid]")
  // const { email, review } = evt.currentTarget.elements
  // formItems = {
  //   email: email.value,
  //   review: review.value,
  //   rait: raiting
  // }
  const formData = new FormData(evt.currentTarget);
  formData.forEach((value, key) => {
    formItems[key] = value.trim();
  });
  formItems.rate = raiting;

  if (formItems.rate < 1) {
    iziToast.show({
      title: "The rate must be selected",
      color: "red",
      position: "topCenter",
      message: ``,
    });
    return;
  }

  const response = patchRating(dataIdReff, formItems);
  if (response) {
    iziToast.show({
      title: "The rating has been successfully added",
      color: "green",
      position: "topCenter",
      message: ``,
    });

    formReff.reset();
    raiting = 0;
    modalReff.classList.add("is-hidden");
    modalContainerReff.classList.remove('is-hidden')
  }
});

function executeRating(stars) {
  const starClassActive = "btn_star-active";
  const starClassInactive = "btn_star";
  const starsLength = stars.length;
  let i;

  stars.map(star => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }

      const rait = stars.filter(star => {
        if (star.className === starClassActive) {
          return star;
        }
      });
      raiting = rait.length;
      reatingTitleReff.textContent = `${raiting}.0`;
    };
  });
}

executeRating(ratingStarsReff);

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick);

  function toggleModal() {
    if (modalReff.classList.contains("is-hidden") === true) {
      document.addEventListener("keydown", onEscapeKeyPress);
    }

    refs.modal.classList.toggle("is-hidden");
  }

  function onBackdropClick(evt) {
    if (evt.target === evt.currentTarget) {
      refs.modal.classList.add("is-hidden");
    }
  }

  function onEscapeKeyPress(evt) {
    if (evt.key === "Escape") {
      refs.modal.classList.add("is-hidden");
      document.removeEventListener("keydown", onEscapeKeyPress);
    }
  }
})();
