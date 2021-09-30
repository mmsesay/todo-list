export default class LocalStorage {
  constructor() {
    this.store = {
      key: null,
      value: null,
    };
  }

  setItem = (keyArg, keyValue) => {
    this.store.key = keyArg;
    this.store.value = keyValue;

    return JSON.stringify(this.store);
  }

  getItem = (keyArg) => {
    if (keyArg === this.store.key) {
      return [this.store.value];
    }
    return null;
  };
}