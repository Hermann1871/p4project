<!-- https://www.codewars.com/users/leaderboard/kata -->

<script setup lang="ts">
import { ref, } from "vue";
import router from "../router";

const userName = ref('')

const handleClick = () => {
    // console.log('Button clicked!');
    router.push({ name: 'detail', params: { id: `${userName.value}` } });
};

</script>

<template>

    <h2>Cerca utente</h2>
    <!-- <button @click="handleClick">Click me</button> -->

    <form @submit.prevent="handleClick">
        <input v-model="userName">
        <button>Vai alla pagina utente</button><br><br>
    </form>

</template>

<style>
.error {
    color: red
}
</style>
