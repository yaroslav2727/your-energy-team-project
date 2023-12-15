import debounce from "lodash.debounce"
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMusclesList, getFilteredList, getExercises } from './api/api';
import { markupCategories } from './markupCategories';
import { markupExercises } from './markupExercises';
import { loader } from './utils/loader';

let currentPage = 1;
let category = "muscles";
let getData = null;

const items = document.querySelector(".cards");
const filter = document.querySelector(".filter-list");
const input = document.querySelector(".input-filter-exercises")
const inputWrapper = document.querySelector(".filter-input-wrapper");
const span = document.querySelector(".cat-title-span")
const iconSearch = document.querySelector(".filter-icon-search")
const iconClose = document.querySelector(".filter-icon-close")

filter.addEventListener("click", handlerClickCategory);
items.addEventListener("click", handlerClickExercises);
inputWrapper.addEventListener("input", debounce(onSearchExercise, 500));
iconClose.addEventListener('click', onDeleteSearchData)

// початковий список вправ Muscles  ----
loader.create();

getMusclesList()
  .then(response => {
    const data = response.results;
    items.innerHTML = markupCategories(data);
    items.addEventListener('click', handlerClickExercises);
  })
  .catch(err => {
    console.error(err);
    iziToast.show({
      position: 'center',
      color: 'red',
      message: 'Oops! Something wrong!',
    });
  })
  .finally(() => {
    loader.destroy();
  });

// фільтр по категоріям ----
function handlerClickCategory(e) {

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const categoryName = e.target.dataset.name;

  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");

  loader.create();

  getFilteredList(categoryName, currentPage)
    .then(response => {
      const data = response.results;
      const { filter } = data[0];
      category = filter.toLowerCase();

      span.innerHTML = '';
      items.innerHTML = markupCategories(data);
      items.addEventListener('click', handlerClickExercises);
      inputWrapper.classList.add("isHidden")
    })
    .catch(err => {
      console.error(err);
      iziToast.show({
        position: 'center',
        color: 'red',
        message: 'Oops! Something wrong!',
      });
    })
    .finally(() => {
      loader.destroy();
    });
}

// вивід списка обраної категорії вправ ----
function handlerClickExercises(e) {
  const exercise = e.target.closest(".card-exercises").dataset.bodyExercise;
  span.innerHTML = `<span class="cat-title-text">/</span> ${exercise}`; // МАЄ ТУТ БУТИ?

  const data = {
    [category]: exercise,
    page: 1,
  };

  loader.create();

  getExercises(data)
    .then(response => {
      const data = response.results;
      getData = data;
      items.innerHTML = markupExercises(data);
      scrollPage()
      inputWrapper.classList.remove("isHidden");
    })
    .catch(err => {
      console.error(err);
      iziToast.show({
        position: 'center',
        color: 'red',
        message: 'Oops! Something wrong!',
      });
    })
    .finally(() => {
      loader.destroy();
      items.removeEventListener('click', handlerClickExercises);
    });
}


// пошук вправи по назві ---- 

function onSearchExercise(evt) {
  const searchData = evt.target.value.trim().toLowerCase();

  const filteredData = getData.filter((item) => item.name.includes(searchData))

  if (searchData.length !== 0) {
    switchIcons()
  }

  if (searchData.length === 0) {
    switchIcons()
  }

  if (filteredData.length === 0) {
    iziToast.show({
      position: 'topCenter',
      color: 'red',
      timeout: 1500,
      message: 'Oops! We have found nothing. Try again!',
    });
  }

  if (filteredData.length !== 0) {
    const searchWord = filteredData.length === 1 ? "exercise" : "exercises";

    iziToast.show({
      position: 'topCenter',
      color: 'green',
      timeout: 1500,
      message: `Hooray! We found ${filteredData.length} ${searchWord}.`,
    });
  }

  items.innerHTML = markupExercises(filteredData);
}

function onDeleteSearchData() {
  input.value = "";
  items.innerHTML = markupExercises(getData);
  switchIcons();
}

function switchIcons() {
  iconSearch.classList.toggle("isHidden");
  iconClose.classList.toggle("isHidden");
}

// прокрутка стрінки ----
function scrollPage() {
  let limit = window.innerWidth < 768 ? 840 : 930;
  const heightView = window.pageYOffset - limit;

  window.scrollBy({
    top: -heightView,
    behavior: 'smooth',
  });
}