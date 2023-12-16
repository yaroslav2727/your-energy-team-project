import debounce from 'lodash.debounce';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMusclesList, getFilteredList, getExercises } from './api/api';
import { markupCategories } from './markupCategories';
import { markupExercises } from './markupExercises';
import { loader } from './utils/loader';
import Pagination from './Pagination/Pagination';
import { DEFAULT_EXERCISES_LIMIT, DEFAULT_FILTER_LIMIT } from './api/config';
import { Storage } from './favorites/Storage';

const paginatorContainerCategories = document.querySelector(
  '.js-paginator-categories'
);
const paginatorContainerExercises = document.querySelector(
  '.js-paginator-exercises'
);
const paginatorCat = new Pagination(paginatorContainerCategories, {
  perPage: 12,
});
const paginatorExercises = new Pagination(paginatorContainerExercises, {
  perPage: 10,
});

const FILTER = {
  MUSCLES: 'Muscles',
  BODY_PARTS: 'Body parts',
  EQUIPMENT: 'Equipment',
};

const filterVocabulary = {
  [FILTER.MUSCLES]: 'muscles',
  [FILTER.BODY_PARTS]: 'bodypart',
  [FILTER.EQUIPMENT]: 'equipment',
};

let currentPage = 1;
let category = FILTER.MUSCLES;
let exerciseState = null;
let searchState = '';
let getData = null;
const exercisesPageState = createPageState(1);

paginatorCat.on('aftermove', event => {
  updateList(category, event.page);
});

paginatorExercises.on('aftermove', event => {
  updateExercises(
    {
      [filterVocabulary[category]]: exerciseState,
      search: searchState,
    },
    event.page
  );
});

const items = document.querySelector('.cards');
const filter = document.querySelector('.filter-list');
const input = document.querySelector('.input-filter-exercises');
const inputWrapper = document.querySelector('.filter-input-wrapper');
const span = document.querySelector('.cat-title-span');
const iconSearch = document.querySelector('.filter-icon-search');
const iconClose = document.querySelector('.filter-icon-close');
const paginationMainPage = document.querySelector('.js-pagination-mainPage');
const paginationFilterPage = document.querySelector('.js-pagination-filterPage');

filter.addEventListener('click', handlerClickCategory);
items.addEventListener('click', handlerClickExercises);
inputWrapper.addEventListener('input', debounce(onSearchExercise, 500));
iconClose.addEventListener('click', onDeleteSearchData);

// початковий список вправ Muscles  ----
loader.create();

getMusclesList()
  .then(response => {
    const data = response.results;
    items.innerHTML = markupCategories(data);
    items.addEventListener('click', handlerClickExercises);

    paginatorCat.updateTotalItems(DEFAULT_FILTER_LIMIT * response.totalPages);
    paginatorCat.goToPage(1);
    paginatorCat.render();
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
    paginationMainPage.classList.remove("isPaginationHidden")
    paginationFilterPage.classList.add("isPaginationHidden")
  });


// фільтр по категоріям ----
function handlerClickCategory(e) {

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const categoryName = e.target.dataset.name;
  const filterBtn = document.querySelectorAll('.filter-btn');
  filterBtn.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  loader.create();

  updateList(categoryName, currentPage);
}

async function updateList(categoryName, currentPage) {
  try {
    const response = await getFilteredList(categoryName, currentPage);
    const data = response.results;
    const { filter } = data[0];

    category = filter;

    span.innerHTML = '';

    items.innerHTML = markupCategories(data);
    items.addEventListener('click', handlerClickExercises);
    inputWrapper.classList.add('isHidden');

    paginatorCat.updateTotalItems(DEFAULT_FILTER_LIMIT * response.totalPages);
    paginatorCat.goToPage(currentPage);
    paginatorCat.render();

  } catch (err) {
    console.error(err);
    iziToast.show({
      position: 'center',
      color: 'red',
      message: 'Oops! Something wrong!',
    });
  } finally {
    loader.destroy();
    paginationMainPage.classList.remove("isPaginationHidden")
    paginationFilterPage.classList.add("isPaginationHidden")
  }
}

// вивід списка обраної категорії вправ ----
function handlerClickExercises(e) {
  const exercise = e.target.closest('.card-exercises').dataset.bodyExercise;
  span.innerHTML = `<span class="cat-title-text">/</span> ${exercise}`;

  exerciseState = exercise;

  const data = {
    [filterVocabulary[category]]: exercise,
  };

  loader.create();

  updateExercises(data, exercisesPageState.getPage());
  input.value = "";
}

async function updateExercises(exercise, page) {
  try {
    const response = await getExercises(exercise, page);
    const data = response.results;

    getData = data;
    items.innerHTML = markupExercises(data);

    scrollExercises();

    inputWrapper.classList.remove('isHidden');

    // console.log('exercises', response);

    paginatorExercises.updateTotalItems(
      DEFAULT_EXERCISES_LIMIT * response.totalPages
    );

    paginatorExercises.goToPage(page);
    paginatorExercises.render();

  } catch (err) {
    console.error(err);
    iziToast.show({
      position: 'center',
      color: 'red',
      message: 'Oops! Something wrong!',
    });
  } finally {
    loader.destroy();
    items.removeEventListener('click', handlerClickExercises);
    paginationMainPage.classList.add("isPaginationHidden")
    paginationFilterPage.classList.remove("isPaginationHidden")

  }
}

// пошук вправи по назві ----

function onSearchExercise(evt) {
  const searchData = evt.target.value.trim().toLowerCase();

  //------Anton--------
  searchState = searchData;
  const data = {
    [filterVocabulary[category]]: exerciseState,
    search: searchData,
  };
  updateExercises(data, exercisesPageState.getPage());
  //------Anton--------

  const filteredData = getData.filter(item => item.name.includes(searchData));

  if (searchData.length !== 0) {
    switchIcons();
  }

  if (searchData.length === 0) {
    switchIcons();
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
    const searchWord = filteredData.length === 1 ? 'exercise' : 'exercises';

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
  input.value = '';
  items.innerHTML = markupExercises(getData);
  switchIcons();
}

function switchIcons() {
  iconSearch.classList.toggle('isHidden');
  iconClose.classList.toggle('isHidden');
}

// прокрутка категорій ----
function scrollExercises() {
  let top = window.innerWidth < 768 ? 860 : 930;
  const heightScroll = window.scrollY - top;

  window.scrollBy({
    top: -heightScroll,
    behavior: 'smooth',
  });
}

function createPageState(initialPage) {

  let page = initialPage;

  return {
    setPage(newPage) {
      page = newPage;
      storage.setToStorage(page);
    },

    getPage() {
      return page;
    },
  };
}
