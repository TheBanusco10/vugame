<script setup>
import { Skeleton } from "../characters/Skeleton";
import { ref } from 'vue';
import CombatSection from './Combat/CombatSection.vue';
import ScoreSection from './Score/ScoreSection.vue';
import PlayerInformationSection from "./Player/PlayerInformationSection.vue";

const enemies = ref([]);

const generateEnemies = count => {
    for (let i = 0; i < count; i++) {
        enemies.value.push(new Skeleton('Skeleton', 20));
    }
}

const handleWin = () => {
    enemies.value = [];
}
</script>

<template>
    <section class="flex justify-between">
        <ScoreSection />
        <PlayerInformationSection />
    </section>
    <button @click="generateEnemies(1)">Search for a combat</button>
    <CombatSection v-if="enemies.length > 0" :enemies="enemies" @onWin="handleWin" />
</template>