import { createStorage } from '../storageApi';
import { createCardMarkup } from './createCardMarkup';
import { FavoritesStorage } from './favoritesStorage';

import { Storage } from './storage';
import { FAVORITES_PER_PAGE, FAVORITES_STORAGE_KEY } from './favoritesConfig';
import Pagination from '../pagination/pagination';

const listRef = document.querySelector('.js-favorites-list');
const listRefDesktop = document.querySelector('.js-favorites-list--desktop');
const noCardsMessageRef = document.querySelector('.js-favorites-no-cards');

const paginationContainer = document.querySelector('.js-pag');

const favoritesStorage = new FavoritesStorage(FAVORITES_STORAGE_KEY);
const pagination = new Pagination(paginationContainer, {
  perPage: FAVORITES_PER_PAGE,
});
const pageState = createPageState(1, updateData);

pagination.on('aftermove', event => {
  pageState.setPage(event.page);
});

listRef.addEventListener('click', removeCardHandler);
listRefDesktop.addEventListener('click', removeCardHandler);

window.addEventListener('message', e => {
  if (e.data === 'update-favorites') {
    updateData();
    updateDesktopData();
  }
});

updateData();
updateDesktopData();
///////////////////////////////////////////////////////////////////////////

function removeCardHandler(e) {
  const delBtn = e.target.closest('.js-favorites-remove');
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
  const response = favoritesStorage.getCards(
    pageState.getPage(),
    FAVORITES_PER_PAGE
  );

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
    noCardsMessageRef.classList.add('is-visible');
    containerRef.innerHTML = '';
    return;
  } else {
    noCardsMessageRef.classList.remove('is-visible');
  }

  const markup = list.map(createCardMarkup).join('');
  containerRef.innerHTML = markup;
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

window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
  if (!e.matches) return;
  pageState.setPage(1);
});
