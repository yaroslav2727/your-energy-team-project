import { createStorage } from '../storageApi';
import { createCardMarkup } from './createCardMarkup';
import { FavoritesStorage } from './FavoritesStorage';
import { mockFavoritesData } from './mockData';

const listRef = document.querySelector('.js-favorites-list');

// const storage = createStorage('favorite_sport_cards');

const favorites = new FavoritesStorage('favorite_sport_cards');

//TEMP----------------------
mockFavoritesData.forEach(card => {
  favorites.addCard(card);
});

// favorites.removeCard(5);

// favorites.addCard({
//   _id: 5,
//   burnedCalories: '312',
//   time: '3',
//   name: 'Air bike',
//   bodyPart: 'Waist',
//   target: 'Abs',
// });

console.log(favorites.getCards(4, 5));

//TEMP----------------------

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

// function render(list) {
//   const markup = list.map(createCardMarkup).join('');
//   listRef.innerHTML = markup;
// }
