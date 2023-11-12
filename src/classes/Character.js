export class Character {
  constructor(name, health, weapon) {
    this._name = name;
    this._health = health;
    this._weapon = weapon;
  }

  get name() {
    return this._name;
  }

  get health() {
    return this._health;
  }

  get weapon() {
    return this._weapon;
  }

  takeDamage(damage) {
    this._health -= damage;
    if (this._health < 0) {
      this._health = 0;
    }
  }

  toString() {
    return `${this._name} (${this._health} HP) - ${this._weapon}`;
  }
}
