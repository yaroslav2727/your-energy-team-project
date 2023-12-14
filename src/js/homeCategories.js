import debounce from "lodash.debounce"
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMusclesList, getFilteredList, getExercises } from './api/api';
import { markupCategories } from './markupCategories';
import { markupExercises } from './markupExercises';
import { loader } from './utils/loader';


console.log(debounce)
let currentPage = 1;
let category = "muscles";
let getData = null;

const items = document.querySelector(".cards");
const filter = document.querySelector(".filter-list");
const inputWrapper = document.querySelector(".filter-input-wrapper");
const span = document.querySelector(".cat-title-span")

filter.addEventListener("click", handlerClickCategory);
items.addEventListener("click", handlerClickExercises);
inputWrapper.addEventListener("input", debounce(onSearchExercise, 500));

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

  const data = {
    [category]: exercise,
    page: 1,
  };

  loader.create();

  getExercises(data)
    .then(response => {
      const data = response.results;
      getData = data;
      // console.log(getData)
      items.innerHTML = markupExercises(data);

      inputWrapper.classList.remove("isHidden")

      span.innerHTML = `<span class="cat-title-text">/</span> ${exercise}`; // МАЄ ТУТ БУТИ?

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
  console.log(filteredData)

  if (filteredData.length === 0) {
    iziToast.show({
      position: 'center',
      color: 'red',
      message: 'Oops! We have found nothing. Try again!',
    });
  }

  items.innerHTML = markupExercises(filteredData);
}
