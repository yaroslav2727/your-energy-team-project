import { createStorage } from '../storageApi';
import { createCardMarkup } from './createCardMarkup';
import { FavoritesStorage } from './FavoritesStorage';
import { mockFavoritesData } from './mockData';
import { Storage } from './Storage';

const FAVORITES_PER_PAGE = 5;

const listRef = document.querySelector('.js-favorites-list');
// const removeBtnRef = document.querySelector('.js-favorites-remove');

//-------------------------------
const favoritesStorage = new FavoritesStorage('favorite_sport_cards');

const pageState = createPageState(1, updateData);

//TEMP----------------------
mockFavoritesData.forEach(card => {
  favoritesStorage.addCard(card);
});

const tempAddBtnRef = document.querySelector('.js-temp-add-to-favorites');
const tempPageIncrease = document.querySelector('.js-temp-page-up');
const tempPageDecrease = document.querySelector('.js-temp-page-down');

tempAddBtnRef.addEventListener('click', e => {
  // const cardId = e.target.dataset.cardId;
  const card = {
    _id: new Date(),
    burnedCalories: '312',
    time: '3',
    name: 'Test card19-new',
    bodyPart: 'Waist',
    target: 'Abs',
  };

  favoritesStorage.addCard(card);
  updateData();
});

tempPageIncrease.addEventListener('click', () => {
  pageState.increase();
});

tempPageDecrease.addEventListener('click', () => {
  pageState.decrease();
});
//TEMP----------------------

listRef.addEventListener('click', e => {
  const delBtn = e.target.closest('.js-favorites-remove');
  if (!delBtn) return;

  const cardId = delBtn.dataset.cardId;
  favoritesStorage.removeCard(cardId);
  updateData();
});

updateData();

///////////////////////////////////////////////////////////////////////////

function updateData() {
  const response = favoritesStorage.getCards(
    pageState.getPage(),
    FAVORITES_PER_PAGE
  );
  console.log(response);
  render(response.data);
}

function render(list) {
  if (list.length === 0) {
    listRef.innerHTML = `<li>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</li>`;
    return;
  }

  const markup = list.map(createCardMarkup).join('');
  listRef.innerHTML = markup;
}

function createPageState(initialPage, handler) {
  const storage = new Storage('favorites_page');

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

    getPage() {
      return page;
    },
  };
}
