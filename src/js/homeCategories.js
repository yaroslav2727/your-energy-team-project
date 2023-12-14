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
const input = document.querySelector(".input-filter-exercises");

filter.addEventListener("click", handlerClickCategory);
items.addEventListener("click", handlerClickExercises);
input.addEventListener("input", onSearchExercise);

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
}

// вивід списка обраної категорії вправ ----
function handlerClickExercises(e) {
  const exercise = e.target.closest(".card-exercises").dataset.bodyExercise;

  const data = {
    [category]: exercise,
    page: 1,
  };

  loader.create();

  getExercises(data)
    .then(response => {
      const data = response.results;
      getData = data;
      console.log(getData)
      items.innerHTML = markupExercises(data);
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

  items.innerHTML = markupExercises(filteredData);
}
