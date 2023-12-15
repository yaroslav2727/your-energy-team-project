import { createStorage } from '../storageApi';
import { createCardMarkup } from './createCardMarkup';
import { FavoritesStorage } from './FavoritesStorage';
import { mockFavoritesData } from './mockData';
import { Storage } from './Storage';
import { FAVORITES_STORAGE_KEY } from './favoritesConfig';

const FAVORITES_PER_PAGE = 5;

const listRef = document.querySelector('.js-favorites-list');
const noCardsMessageRef = document.querySelector('.js-favorites-no-cards');

//-------------------------------
const favoritesStorage = new FavoritesStorage(FAVORITES_STORAGE_KEY);

const pageState = createPageState(1, updateData);

//TEMP----------------------
mockFavoritesData.forEach(card => {
  favoritesStorage.addCard(card);
});

const tempAddBtnRef = document.querySelector('.js-temp-add-to-favorites');
const tempPageIncrease = document.querySelector('.js-temp-page-up');
const tempPageDecrease = document.querySelector('.js-temp-page-down');

let tempCount = 1111;
tempAddBtnRef.addEventListener('click', e => {
  // const cardId = e.target.dataset.cardId;
  const card = {
    _id: tempCount++,
    burnedCalories: '312',
    time: '3',
    name: 'Test card19-new',
    bodyPart: 'Waist',
    target: 'Abs',
  };

  favoritesStorage.addCard(card);
  updateData();
});

tempPageIncrease.addEventListener('click', pageState.increase);
tempPageDecrease.addEventListener('click', pageState.decrease);
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
    noCardsMessageRef.classList.add('is-visible');
    listRef.innerHTML = '';
    return;
  } else {
    noCardsMessageRef.classList.remove('is-visible');
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