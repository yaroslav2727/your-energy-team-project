import { getBodyPartsList, getFilteredList, getExercises } from "./api/api";
import { markupCategories } from "./markupCategories";
import { markupExercises } from "./markupExercises";

let currentPage = 1;
let category = 'bodypart';

const items = document.querySelector('.cards');
const filter = document.querySelector('.filter-list');

filter.addEventListener('click', handlerClickCategory);
items.addEventListener('click', handlerClickExercises);


// стартовий список
getBodyPartsList()
  .then(response => {
    const data = response.results;
    console.log(data);
    items.innerHTML = markupCategories(data);
  })
  .catch(err => {
    console.error(err);
  });


// фільтр категорій 
function handlerClickCategory(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const categoryName = e.target.dataset.name;
  console.log(categoryName);


  const filterBtn = document.querySelectorAll('.filter-btn');
  filterBtn.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
 

  getFilteredList(categoryName, currentPage)
    .then(response => {
      const data = response.results;
      const { filter } = data[0]
      category = filter.toLowerCase();
      
    
      items.innerHTML = markupCategories(data);
    })
    .catch(err => {
      console.error(err);
    });
}

// список вправ
function handlerClickExercises(e) {

  const exercise = e.target.closest('.card').dataset.bodyExercise;
  console.log('exercise', exercise);
  console.log('category', category);

  const data = {
    [category]: exercise,
    page: 1,
  };

  getExercises(data)
    .then(response => {
      const data = response.results;
      items.innerHTML = markupExercises(data);
    })
    .catch(err => {
      console.error(err);
    });
}

// відображає або ховає елемент
function showElement(element, isVisible) {
  element.classList.toggle('hidden', !isVisible);
}