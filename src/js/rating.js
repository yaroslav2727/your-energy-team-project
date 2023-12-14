import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { patchRating } from '../js/api/api';

const modalReff = document.querySelector('[data-modal]');
const reatingTitleReff = document.querySelector('p[data-raiting]');
const formReff = document.querySelector('.rating_form');
const ratingStarsReff = [...document.getElementsByClassName('btn_star')];
const modalContainerReff = document.querySelector('.modal_window_container');

let raiting = 0;
let formItems = {};

formReff.addEventListener('submit', evt => {
  evt.preventDefault();
  const dataIdReff = document.querySelector('[data-id]');
  const id = dataIdReff.dataset.id;

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
      title: 'The rate must be selected',
      color: 'red',
      position: 'topCenter',
      message: ``,
    });
    return;
  }

  const response = patchRating(id, formItems);
  if (response) {
    iziToast.show({
      title: 'The rating has been successfully added',
      color: 'green',
      position: 'topCenter',
      message: ``,
    });

    formReff.reset();
    raiting = 0;
    reatingTitleReff.textContent = `0.0`;
    ratingStarsReff.forEach(item => {
      item.classList.remove('btn_star-active');
    });
    modalReff.classList.add('is-hidden');
    modalContainerReff.classList.remove('is-hidden');
  }
});

function executeRating(stars) {
  const starClassActive = 'btn_star-active';
  const starClassInactive = 'btn_star';
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
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function openModal() {
    modalReff.classList.remove('is-hidden');
    document.addEventListener('keydown', onEscapeKeyPress);
  }
  function closeModal() {
    raiting = 0;
    ratingStarsReff.forEach(item => {
      item.classList.remove('btn_star-active');
    });
    reatingTitleReff.textContent = `0.0`;
    modalReff.classList.add('is-hidden');
    modalContainerReff.classList.remove('is-hidden');
    document.removeEventListener('keydown', onEscapeKeyPress);
  }

  function onBackdropClick(evt) {
    if (evt.target === evt.currentTarget) {
      raiting = 0;
      ratingStarsReff.forEach(item => {
        item.classList.remove('btn_star-active');
      });
      reatingTitleReff.textContent = `0.0`;
      refs.modal.classList.add('is-hidden');
    }
  }

  function onEscapeKeyPress(evt) {
    if (evt.key === 'Escape') {
      raiting = 0;
      ratingStarsReff.forEach(item => {
        item.classList.remove('btn_star-active');
      });
      reatingTitleReff.textContent = `0.0`;
      refs.modal.classList.add('is-hidden');
      document.removeEventListener('keydown', onEscapeKeyPress);
    }
  }
})();
