import { createStorage } from '../storageApi';
import { createCardMarkup } from './createCardMarkup';
import { FavoritesStorage } from './FavoritesStorage';
import { mockFavoritesData } from './mockData';
import { Storage } from './Storage';

const FAVORITES_PER_PAGE = 10;

const listRef = document.querySelector('.js-favorites-list');
// const removeBtnRef = document.querySelector('.js-favorites-remove');

// const storage = createStorage('favorite_sport_cards');

// const pageStorage = new Storage('favorites_page');
const favoritesStorage = new FavoritesStorage('favorite_sport_cards');

// let page = 1;
// const persistedPage = pageStorage.getFromStorage();
// if (persistedPage) {
//   page = persistedPage;
// } else {
//   pageStorage.setToStorage(page);
// }

//TEMP----------------------
// mockFavoritesData.forEach(card => {
//   favoritesStorage.addCard(card);
// });

// const tempAddBtnRef = document.querySelector('.js-temp-add-to-favorites');
// const tempPageIncrease = document.querySelector('.js-temp-page-up');
// const tempPageDecrease = document.querySelector('.js-temp-page-down');

// tempAddBtnRef.addEventListener('click', e => {
//   const cardId = e.target.dataset.cardId;

//   const card = {
//     _id: cardId,
//     burnedCalories: '312',
//     time: '3',
//     name: 'Test card',
//     bodyPart: 'Waist',
//     target: 'Abs',
//   };

//   favoritesStorage.addCard(card);
//   refresh();
// });

// tempPageIncrease.addEventListener('click', () => {
//   page++;
//   pageStorage.setToStorage(page);
// });

// tempPageDecrease.addEventListener('click', () => {
//   page--;
//   pageStorage.setToStorage(page);
// });
//TEMP----------------------

refresh();

// const response = storage.getCards(1, FAVORITES_PER_PAGE);
// render(response.data);

// const state = createFavoritesState(storage.get(), render);

// function createFavoritesState(initialState, render) {
//   let state = initialState || [];

//   return {
//     get() {
//       return state;
//     },

//     set(data) {
//       state = [...data];
//       render(state);
//     },
//   };
// }

function refresh() {
  const response = favoritesStorage.getCards(1, FAVORITES_PER_PAGE);
  render(response.data);
}

function render(list) {
  if (list.length === 0) {
    listRef.innerHTML = `It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.`;
  }

  const markup = list.map(createCardMarkup).join('');
  listRef.innerHTML = markup;
}

// class FavoritesState {
//   constructor(storage, { initialPage, perPage }) {
//     if (!(storage instanceof FavoritesStorage)) {
//       throw new Error(
//         `Constructo must get instance of "FavoritesStorage" class`
//       );
//     }

//     this.page = initialPage;
//     this.limit = perPage;
//   }

//   render() {

//   }
// }
