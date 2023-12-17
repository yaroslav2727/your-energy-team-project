export default class Pagination {
  #handlerBeforeMove;
  #handlerAfterMove;
  #page;
  #totalItems;
  #perPage;
  constructor(container, options) {
    this.refs = {
      container: container,
    };

    this.#totalItems = 1;
    // this.#perPage = 20;
    this.#perPage = options?.perPage || 10;
    this.#page = 1;

    this.refs.container.addEventListener("click", this.#onPageClick.bind(this));

    window
      .matchMedia("(min-width: 480px)")
      .addEventListener("change", this.#onViewportChange.bind(this));
  }

  reset() {
    this.#page = 1;
  }

  #onViewportChange() {
    // console.log(window.innerWidth);
    this.render();
  }

  #onPageClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains("pag__page")) {
      return;
    }

    const newPage = e.target.dataset.value;
    if (this.#page == newPage) {
      return;
    }

    if (this.#handlerBeforeMove) {
      this.#handlerBeforeMove({ page: this.#page });
    }

    this.goToPage(newPage);

    this.render();

    if (this.#handlerAfterMove) {
      this.#handlerAfterMove({ page: this.#page });
    }
  }

  on(type, handler) {
    if (type === "beforemove") {
      this.#handlerBeforeMove = handler;
      return;
    }

    if (type === "aftermove") {
      this.#handlerAfterMove = handler;
      return;
    }

    throw new Error('Event type is not correct (must be "beforemove" of "aftermove")');
  }

  render() {
    if (this.#totalItems <= this.#perPage) {
      this.refs.container.innerHTML = "";
      return;
    }
    // console.log(paginationTemplate());
    const currentPage = Number(this.#page);
    const lastPageNumber = this.getLastPageNumber();

    let string = "";
    const end = lastPageNumber;

    const windowInnerWidth = window.innerWidth;
    // console.log();
    let nearbyQtyPages = 1;
    if (windowInnerWidth < 480) {
      nearbyQtyPages = 1;
    }

    //SVG
    const dotsSvg = `<svg class="pag-icon" width="10" height="3" viewBox="0 0 10 3" xmlns="http://www.w3.org/2000/svg">
                    <path style="fill: var(--dots-color, #A8A2A2)" d="M1.61719 0.5C1.88281 0.5 2.08789 0.576172 2.23242 0.728516C2.37695 0.876953 2.44922 1.06445 2.44922 1.29102C2.44922 1.51367 2.37695 1.69922 2.23242 1.84766C2.08789 1.99219 1.88281 2.06445 1.61719 2.06445C1.36328 2.06445 1.16211 1.99219 1.01367 1.84766C0.865234 1.70312 0.791016 1.51758 0.791016 1.29102C0.791016 1.06445 0.863281 0.876953 1.00781 0.728516C1.15234 0.576172 1.35547 0.5 1.61719 0.5ZM4.96875 0.5C5.23438 0.5 5.43945 0.576172 5.58398 0.728516C5.72852 0.876953 5.80078 1.06445 5.80078 1.29102C5.80078 1.51367 5.72852 1.69922 5.58398 1.84766C5.43945 1.99219 5.23438 2.06445 4.96875 2.06445C4.71484 2.06445 4.51367 1.99219 4.36523 1.84766C4.2168 1.70312 4.14258 1.51758 4.14258 1.29102C4.14258 1.06445 4.21484 0.876953 4.35938 0.728516C4.50391 0.576172 4.70703 0.5 4.96875 0.5ZM8.32031 0.5C8.58594 0.5 8.79102 0.576172 8.93555 0.728516C9.08008 0.876953 9.15234 1.06445 9.15234 1.29102C9.15234 1.51367 9.08008 1.69922 8.93555 1.84766C8.79102 1.99219 8.58594 2.06445 8.32031 2.06445C8.06641 2.06445 7.86523 1.99219 7.7168 1.84766C7.56836 1.70312 7.49414 1.51758 7.49414 1.29102C7.49414 1.06445 7.56641 0.876953 7.71094 0.728516C7.85547 0.576172 8.05859 0.5 8.32031 0.5Z" />
                </svg>`;

    //--------------------------------------------------------------------------------------------------
    //PREV
    if (currentPage > 4) {
      string += `<a class="pag__page pag__btn pag__btn--prev" href="#" data-value="${
        currentPage - 1
      }"></a>`;
    }

    for (let i = 1; i <= end; i++) {
      //CURRENT PAGE
      if (i === currentPage) {
        string += `<a class="pag__page pag__page--current-number" href="#" data-value="${currentPage}">${currentPage}</a>`;
        continue;
      }

      //LEFT DOTS
      if (i > 1 && i < currentPage - nearbyQtyPages - 1) {
        string += `<a class="pag__page pag__page--dots pag__btn--dots-prev hovered" href="#" data-value="${
          currentPage - 4
        }">
            ${dotsSvg}
          </a>`;

        i = currentPage - nearbyQtyPages - 1;
        continue;
      }

      //RIGHT DOTS
      if (i > currentPage + nearbyQtyPages && i < end - 1) {
        string += `<a class="pag__page pag__page--dots pag__btn--dots-next hovered" href="#" data-value="${
          currentPage + 4
        }">
          ${dotsSvg}
          </a>`;

        i = end - 1;
        continue;
      }

      //LAST PAGE MORE THAN 4 digits
      if (i === end && end > 9999) {
        string += `<a class="pag__page hovered" href="#" data-value="${i}">Last page</a>`;
        continue;
      }

      //OTHER PAGES
      string += `<a class="pag__page hovered" href="#" data-value="${i}">${i}</a>`;
    }

    //NEXT
    if (currentPage <= end - 4) {
      string += `<a class="pag__page pag__btn pag__btn--next" href="#" data-value="${
        currentPage + 1
      }"></a>`;
    }

    this.refs.container.innerHTML = string;
  }

  goToPage(page) {
    if (!Number.isInteger(Number(page))) {
      throw new Error("Page must be integer!");
    }

    if (page < 1 || page > this.getLastPageNumber()) {
      return;
    }
    this.#page = page;
  }

  getCurrentPage() {
    return this.#page;
  }

  updateTotalItems(totalItems) {
    this.#totalItems = totalItems;
  }

  getLastPageNumber() {
    return Math.ceil(Number(this.#totalItems) / Number(this.#perPage));
    // const lastPageNumber = Math.ceil(
    //   Number(this.#totalItems) / Number(this.#perPage)
    // );
    // return lastPageNumber <= 500 ? lastPageNumber : 500;
  }
}
