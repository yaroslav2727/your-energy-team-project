import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { patchRating } from '../js/api/api'

const reatingTitleReff = document.querySelector('p[data-raiting]')
const btnCloseReff = document.querySelector('.btn_close')
const formReff = document.querySelector('.rating_form')


let raiting = 0
let formItems = {}
let id = '64f389465ae26083f39b17a2'

btnCloseReff.addEventListener('click', (evt) => {
  evt.preventDefault()
  console.log('close-rating-function')
})


formReff.addEventListener('submit', (evt) => {
  evt.preventDefault()
  // const { email, review } = evt.currentTarget.elements
  // formItems = {
  //   email: email.value,
  //   review: review.value,
  //   rait: raiting
  // }
  const formData = new FormData(evt.currentTarget)
  formData.forEach((value, key) => {
    formItems[key] = value.trim()
  })
  formItems.rate = raiting

  if (formItems.rate < 1) {
    iziToast.show({
      title: 'The rate must be at least 1',
      color: 'red',
      position: 'topCenter',
      message: ``
    });
    return
  }

  const response = patchRating(id, formItems)
  if (response) {
    iziToast.show({
      title: 'The rating has been successfully added',
      color: 'green',
      position: 'topCenter',
      message: ``
    });

    formReff.reset()
    console.log('Dont forgot close modal!!!')
  }
})

const ratingStars = [...document.getElementsByClassName("btn_star")];

function executeRating(stars) {
  const starClassActive = "btn_star-active";
  const starClassInactive = "btn_star";
  const starsLength = stars.length;
  let i;

  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }

      const rait = stars.filter((star) => {
        if (star.className === starClassActive) {
          return star
        }
      })
      raiting = rait.length
      reatingTitleReff.textContent = `${raiting}.0`
    };
  })
}

executeRating(ratingStars);


