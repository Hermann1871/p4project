<!-- https://www.codewars.com/users/leaderboard/kata -->

<script setup lang="ts">
import { ref, } from "vue";
import FetchCodeWars from '../components/FetchCodeWars.vue';
// import RedirectView from "../views/RedirectView.vue";

const searchedUserRef = ref(""); // Voile
console.log("DDDDDDDDDDDDDDDDDDDDD", searchedUserRef.value)
if (searchedUserRef.value) { console.log("PIPPPO 23456",) }

</script>

<template>

    <h2>Codewars 2</h2>
    <img src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg" alt="">
    <span>{{ searchedUserRef }}</span>
    <!-- <RedirectView /> -->
    <!-- <FetchCodeWars v-if="searchedUserRef" :userName="searchedUserRef" /> -->
    <FetchCodeWars :userName="searchedUserRef" />

</template>

<style>
.error {
    color: red
}
</style>
