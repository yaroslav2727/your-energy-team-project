import debounce from 'lodash.debounce';
const button = document.querySelector('.js-button-up');
window.addEventListener('scroll', debounce(onWindowScroll, 500));

function onWindowScroll() {
  if (window.pageYOffset >= 1000) {
    button.classList.toggle('hidden', false);
  } else {
    button.classList.toggle('hidden', true);
  }
}
