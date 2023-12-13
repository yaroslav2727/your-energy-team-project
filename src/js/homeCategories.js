import { getMusclesList, getFilteredList, getExercises } from "./api/api";
import { markupCategories } from "./markupCategories";
import { markupExercises } from "./markupExercises";
import { loader } from "./utils/loader";

let currentPage = 1;
let category = "muscles";

const items = document.querySelector(".cards");
const filter = document.querySelector(".filter-list");

filter.addEventListener("click", handlerClickCategory);
items.addEventListener("click", handlerClickExercises);

// стартовий список
loader.create();

getMusclesList()
  .then(response => {
    const data = response.results;
    items.innerHTML = markupCategories(data);
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    loader.destroy();
  });

// фільтр по категоріям
function handlerClickCategory(e) {
  if (e.target.nodeName !== "BUTTON") {
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
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      loader.destroy();
    });
}

// вивід списка вибраних вправ
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
      items.innerHTML = markupExercises(data);
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      loader.destroy();
    });
}
