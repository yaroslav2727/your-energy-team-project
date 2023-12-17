import debounce from "lodash.debounce";
window.addEventListener("scroll", debounce(onWindowScroll, 100));

export const buttonup = {
  element: document.querySelector(".js-button-up"),
  show() {
    if (window.pageYOffset >= 800) {
      this.element.classList.toggle("hidden", false);
    } else {
      this.element.classList.toggle("hidden", true);
    }
  },
  hide() {
    this.element.classList.toggle("hidden", true);
  },
};

function onWindowScroll() {
  buttonup.show();
}
