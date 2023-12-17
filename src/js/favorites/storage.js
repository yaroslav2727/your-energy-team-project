export class Storage {
  #key;
  constructor(key) {
    this.#key = key;
  }

  setToStorage(data) {
    localStorage.setItem(this.#key, JSON.stringify(data));
  }

  getFromStorage() {
    const res = localStorage.getItem(this.#key);
    return res ? JSON.parse(res) : null;
  }
}
