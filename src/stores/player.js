import { defineStore } from "pinia";
import { Stick } from "../weapons/Stick";
import { Character } from "../classes/Character";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const player = ref(
    new Character("Player", 100, new Stick("Sword stick", 20))
  );

  return { player };
});
