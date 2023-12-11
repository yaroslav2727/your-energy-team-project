const currentPage = localStorage.getItem('activePage');
const home = document.querySelector('.pg-home');
const favorites = document.querySelector('.pg-favorites');
const linkHome = document.querySelector('.header-item-link');
const linkFavorites = document.querySelector('.header-pages-item-link');

checkActivePage();

home.addEventListener('click', () => setActivePage('home'));
favorites.addEventListener('click', () => setActivePage('pg-favorites'));

export function checkActivePage() {
  linkHome.classList.toggle('header-pages-active', currentPage === 'home');
  linkFavorites.classList.toggle(
    'header-pages-active',
    currentPage === 'pg-favorites'
  );
}

export function setActivePage(page) {
  checkActivePage();
  localStorage.setItem('activePage', page);
}
