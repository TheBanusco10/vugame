<script setup>
import { storeToRefs } from 'pinia';
import { usePlayerStore } from '../../stores/player';
import { ref } from 'vue';
import { useScoreStore } from '../../stores/score';

const props = defineProps({
    enemies: {
        type: Array,
        default: []
    }
});

defineEmits(['onWin']);

const { addScore } = useScoreStore();
const { player } = storeToRefs(usePlayerStore());
const combatLog = ref([]);
const playerWon = ref(false);

const fight = () => {
    const enemy = props.enemies[0];

    while (enemy.health > 0) {
        enemy.takeDamage(player.value.weapon.damage);
        combatLog.value.push(`${player.value.name} attacked ${enemy.name} with ${player.value.weapon.name}`);

        player.value.takeDamage(enemy.weapon.damage);
        combatLog.value.push(`${enemy.name} attacked ${player.value.name} with ${enemy.weapon.name}`);

        // props.enemies.forEach(enemy => {
        //     setTimeout(() => {
        //         enemy.value.takeDamage(player.value.weapon.damage);
        //         combatLog.value.push(`${player.value.name} attacked ${enemy.value.name} with ${player.value.weapon.name}`);

        //         player.value.takeDamage(enemy.value.weapon.damage);
        //         combatLog.value.push(`${enemy.value.name} attacked ${player.value.name} with ${enemy.value.weapon.name}`);
        //     }, 500);
        // });
    }

    if (player.value.health > 0) {
        addScore(10);
        playerWon.value = true;
    }
}
</script>

<template>
    <h1>Combat tab</h1>
    <section>
        <article>
            <p class="text-emerald-500">
                {{ player }}
            </p>
            <p v-for="enemy in enemies" :key="enemy" class="text-red-500">
                {{ enemy }}
            </p>
        </article>
        <div>
            <p v-for="log in combatLog" :key="log">
                {{ log }}
            </p>
        </div>
        <div>
            Consumables
        </div>
        <button v-if="!playerWon" @click="fight">Start</button>
        <button v-else @click="$emit('onWin')">Continue</button>
    </section>
</template>