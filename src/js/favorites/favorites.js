import { createStorage } from "../storageApi";
import { createCardMarkup } from "./createCardMarkup";
import { FavoritesStorage } from "./favoritesStorage";
import { mockFavoritesData } from "./mockData";
import { Storage } from "./storage";
import { FAVORITES_PER_PAGE, FAVORITES_STORAGE_KEY } from "./favoritesConfig";
import Pagination from "../pagination/pagination";

const listRef = document.querySelector(".js-favorites-list");
const listRefDesktop = document.querySelector(".js-favorites-list--desktop");
const noCardsMessageRef = document.querySelector(".js-favorites-no-cards");

const paginationContainer = document.querySelector(".js-pag");

//-------------------------------
const favoritesStorage = new FavoritesStorage(FAVORITES_STORAGE_KEY);
const pagination = new Pagination(paginationContainer, {
  perPage: FAVORITES_PER_PAGE,
});
const pageState = createPageState(1, updateData);

pagination.on("aftermove", event => {
  pageState.setPage(event.page);
});

// const myWorker = new Worker('./js/worker.js');

// myWorker.postMessage('fav');

// myWorker.onmessage = function (event) {
//   console.log(event.data);
//   if (event.data === 'update-favorites') {
//     console.log('EXCELLENT!!');
//   }
// };

// myWorker.postMessage("TEST FAV")

//TEMP----------------------
// mockFavoritesData.forEach(card => {
//   favoritesStorage.addCard(card);
// });

// const tempAddBtnRef = document.querySelector('.js-temp-add-to-favorites');
// const tempPageIncrease = document.querySelector('.js-temp-page-up');
// const tempPageDecrease = document.querySelector('.js-temp-page-down');

// let tempCount = 1111;
// tempAddBtnRef.addEventListener('click', e => {
//   // const cardId = e.target.dataset.cardId;
//   const card = {
//     _id: tempCount++,
//     burnedCalories: '312',
//     time: '3',
//     name: 'Test card19-new',
//     bodyPart: 'Waist',
//     target: 'Abs',
//   };

//   favoritesStorage.addCard(card);
//   updateData();
// });

// tempPageIncrease.addEventListener('click', pageState.increase);
// tempPageDecrease.addEventListener('click', pageState.decrease);
//TEMP----------------------

// listRef.addEventListener('click', e => {
//   const delBtn = e.target.closest('.js-favorites-remove');
//   if (!delBtn) return;

//   const cardId = delBtn.dataset.cardId;
//   favoritesStorage.removeCard(cardId);
//   updateData();
//   updateDesktopData();
// });

// listRefDesktop.addEventListener('click', e => {
//   const delBtn = e.target.closest('.js-favorites-remove');
//   if (!delBtn) return;

//   const cardId = delBtn.dataset.cardId;
//   favoritesStorage.removeCard(cardId);
//   updateDesktopData();
//   updateData();
// });

listRef.addEventListener("click", removeCardHandler);
listRefDesktop.addEventListener("click", removeCardHandler);

window.addEventListener("message", e => {
  // console.log(e.data);
  // if (e.origin !== '*') return;

  // console.log(e.data);
  // if (e.data === 'add' || e.data === 'remove') {
  //   console.log(e.data);
  //   messageHandler(e.data);
  // }

  if (e.data === "update-favorites") {
    // console.log(e.data);

    updateData();
    updateDesktopData();
  }
});

updateData();
updateDesktopData();
///////////////////////////////////////////////////////////////////////////

// function messageHandler({ method, payload }) {
//   if (method === 'add') {
//     favoritesStorage.addCard(payload);
//     updateData();
//     updateDesktopData();
//   }

//   if (method === 'remove') {
//     favoritesStorage.removeCard(payload.id);
//     updateData();
//     updateDesktopData();
//   }
// }

function removeCardHandler(e) {
  const delBtn = e.target.closest(".js-favorites-remove");
  if (!delBtn) return;

  const cardId = delBtn.dataset.cardId;
  favoritesStorage.removeCard(cardId);
  updateData();
  updateDesktopData();
}

function updateDesktopData() {
  const data = favoritesStorage.getAllCards();
  render(data, listRefDesktop);
}

function updateData() {
  const response = favoritesStorage.getCards(pageState.getPage(), FAVORITES_PER_PAGE);

  // console.log(response);

  const { data, page, totalCount } = response;

  render(data, listRef);

  if ((data.length === 0) & (totalCount !== 0)) {
    pageState.setPage(page - 1);
    return;
  }

  pagination.updateTotalItems(response.totalCount);
  pagination.goToPage(page);
  pagination.render();
}

function render(list, containerRef) {
  if (list.length === 0) {
    noCardsMessageRef.classList.add("is-visible");
    containerRef.innerHTML = "";
    return;
  } else {
    noCardsMessageRef.classList.remove("is-visible");
  }

  const markup = list.map(createCardMarkup).join("");
  containerRef.innerHTML = markup;
}

function createPageState(initialPage, handler) {
  const storage = new Storage("favorites_page");

  let page = storage.getFromStorage() || initialPage;

  return {
    increase() {
      page++;
      storage.setToStorage(page);
      handler();
    },

    decrease() {
      page--;
      storage.setToStorage(page);
      handler();
    },

    setPage(newPage) {
      page = newPage;
      storage.setToStorage(page);
      handler();
    },

    getPage() {
      return page;
    },
  };
}

window.matchMedia("(min-width: 1440px)").addEventListener("change", e => {
  if (!e.matches) return;
  pageState.setPage(1);
});
