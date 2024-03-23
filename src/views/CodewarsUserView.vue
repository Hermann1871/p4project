<script setup lang="ts">
import { useRoute } from 'vue-router';
import FetchCodeWars from '../components/FetchCodeWars.vue';
import students from '../assets/studenti.json';

const {
    params: { id }
} = useRoute();

const student = students.find((el, k) => el.username === id)
console.log("PIPPPO", student?.imgURL)

</script>

<template>
    <img src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg" alt="">
    <h1>CodeWars User</h1>
    <!-- <h1>Pagina utente {{ id }}</h1> -->
    <!-- <img :src="student?.imgURL" alt=""> -->
    <FetchCodeWars :userName="id" />

</template>