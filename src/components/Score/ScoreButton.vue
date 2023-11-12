<script setup>
import { useScoreStore } from "../../stores/score";

const { incrementScore } = useScoreStore();
</script>

<template>
    <button @click="incrementScore">Increment score</button>
</template>