import { Character } from "../classes/Character";
import { Stick } from "../weapons/Stick";

export class Skeleton extends Character {
  constructor(name, health) {
    super(name, health);
    this._weapon = new Stick("Basic stick", 5);
  }
}
