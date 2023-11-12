export class Item {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  toString() {
    return this._name;
  }
}
