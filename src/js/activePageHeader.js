const currentPage = localStorage.getItem('activePage');

const home = document.querySelector('.pg-home');
const favorites = document.querySelector('.pg-favorites');
const linkHome = document.querySelector('.header-item-link');
const linkFavorites = document.querySelector('.header-pages-item-link');

checkActivePage();

function checkActivePage() {
  if (currentPage === 'home') {
    linkHome.classList.add('header-pages-active');
    linkFavorites.classList.remove('header-pages-active2');
  } else if (currentPage === 'pg-favorites') {
    linkHome.classList.remove('header-pages-active');
    linkFavorites.classList.add('header-pages-active2');
  }
}

home.addEventListener('click', OnclickHome);
favorites.addEventListener('click', OnclickFavorites);

function OnclickHome() {
  checkActivePage();

  localStorage.setItem('activePage', 'home');
}

function OnclickFavorites() {
  checkActivePage();
  localStorage.setItem('activePage', 'pg-favorites');
}
