<script setup>
import { storeToRefs } from 'pinia';
import { usePlayerStore } from '../../stores/player';

const { player } = storeToRefs(usePlayerStore());
</script>

<template>
    <section class="flex justify-between gap-4">
        <p>
            {{ player.name }}
        </p>
        <p>
            {{ player.health }} HP
        </p>
    </section>
</template>