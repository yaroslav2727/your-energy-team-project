import { Storage } from './storage';

export class FavoritesStorage extends Storage {
  #list;

  constructor(key) {
    super(key);
    this.#update();
  }

  addCard(card) {
    if (this.isCardExisted(card._id)) return;

    this.#list.push(card);
    this.setToStorage(this.#list);
  }

  removeCard(id) {
    this.#update();
    const updatedList = this.#list.filter(
      ({ _id }) => _id.toString() !== id.toString()
    );

    this.#list = [...updatedList];
    this.setToStorage(this.#list);
  }

  getCards(page, limit) {
    this.#update();
    if (page * limit - limit > this.#list.length) {
      throw new Error('Out of list');
    }

    if (this.#list.length === 0) return { data: [], page, totalCount: 0 };

    const data = this.#list.filter(
      (item, i) => i >= page * limit - limit && i < page * limit
    );
    return { data, totalCount: this.#list.length, page };
  }

  getAllCards() {
    this.#update();
    if (this.#list.length === 0) return [];
    return this.#list;
  }

  isCardExisted(id) {
    this.#update();
    return this.#list.some(({ _id }) => _id === id);
  }

  get list() {
    this.#update();
    return this.#list;
  }

  #update() {
    this.#list = this.getFromStorage() || [];
  }
}
