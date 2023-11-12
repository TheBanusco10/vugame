import { ref } from "vue";
import { defineStore } from "pinia";

export const useScoreStore = defineStore("score", () => {
  const score = ref(0);

  function incrementScore() {
    score.value++;
  }

  const addScore = (points) => {
    score.value += points;
  };

  return { score, incrementScore, addScore };
});
