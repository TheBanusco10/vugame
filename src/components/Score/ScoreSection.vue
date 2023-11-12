<script setup>
import { storeToRefs } from 'pinia';
import { useScoreStore } from '../../stores/score';

const { score } = storeToRefs(useScoreStore());
</script>

<template>
    <section class="flex justify-between gap-4">
        <p>Your score</p>
        <p>
            {{ score }}
        </p>
    </section>
</template>