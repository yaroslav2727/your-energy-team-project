import { getMusclesList, getFilteredList, getExercises } from './api/api';
import { markupCategories } from './markupCategories';
import { markupExercises } from './markupExercises';
import { onSearchExercise } from "./searchExercise"


let currentPage = 1;
let category = 'muscles';

const items = document.querySelector('.cards');
const filter = document.querySelector('.filter-list');

filter.addEventListener('click', handlerClickCategory);
items.addEventListener('click', handlerClickExercises);

// стартовий список
getMusclesList()
  .then(response => {
    const data = response.results;
    items.innerHTML = markupCategories(data);
  })
  .catch(err => {
    console.error(err);
  });

// фільтр по категоріям
function handlerClickCategory(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const categoryName = e.target.dataset.name;

  const filterBtn = document.querySelectorAll('.filter-btn');
  filterBtn.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  getFilteredList(categoryName, currentPage)
    .then(response => {
      const data = response.results;
      const { filter } = data[0];
      category = filter.toLowerCase();

      items.innerHTML = markupCategories(data);
    })
    .catch(err => {
      console.error(err);
    });
}

// вивід списка вибраних вправ
function handlerClickExercises(e) {

  const exercise = e.target.closest('.card-exercises').dataset.bodyExercise;
  // console.log('exercise', exercise)
  // console.log('category', category)
  const data = {
    [category]: exercise,
    page: 1,
  };

  getExercises(data)
    .then(response => {
      const data = response.results;
      // console.log(filteredData)
      items.innerHTML = markupExercises(data);
      onSearchExercise(data)

    })
    .catch(err => {
      console.error(err);
    });
}

