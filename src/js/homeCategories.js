import { getBodyPartsList, getFilteredList, getExercises } from "./api/api";
import { markupCategories } from "./markupCategories";
import { markupExercises } from "./markupExercises";

let currentPage = 1;

const items = document.querySelector('.cards');
const filter = document.querySelector('.filter-list');
filter.addEventListener('click', handlerClickCategory);
items.addEventListener('click', handlerClickExercises);

getBodyPartsList()
  .then(response => {
    const data = response.results;
    console.log(data);
    items.innerHTML = markupCategories(data);
  })
  .catch(err => {
    console.error(err);
  });

function handlerClickCategory(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const categoryName = e.target.dataset.name;
  console.log(categoryName);

  getFilteredList(categoryName, currentPage)
    .then(response => {
      const data = response.results;
      console.log(data);
      items.innerHTML = markupCategories(data);
    })
    .catch(err => {
      console.error(err);
    });
}

function handlerClickExercises(e) {
  console.log(e.target);
  const target = e.target;

  getExercises(target, currentPage)
    .then(response => {
      const data = response.results;
      console.log(data);
      items.innerHTML = markupExercises(data);
    })
    .catch(err => {
      console.error(err);
    });
}
