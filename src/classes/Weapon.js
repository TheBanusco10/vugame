import { Item } from "../classes/Item";

export class Weapon extends Item {
  constructor(name, damage) {
    super(name);
    this._damage = damage;
  }

  get damage() {
    return this._damage;
  }

  toString() {
    return `${this._name} (${this._damage} DP)`;
  }
}
