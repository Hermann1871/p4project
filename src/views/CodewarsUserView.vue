<script setup lang="ts">
import { useRoute } from 'vue-router';
import FetchCodeWars from '../components/FetchCodeWars.vue';
import students from '../assets/studenti.json';
import { onMounted, ref } from 'vue';

const {
    params: { id }
} = useRoute();

const isLoading = ref<boolean>(true)


const student = students.find((el, k) => el.username === id)
console.log("PIPPPO", student?.imgURL)

onMounted(() => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});

// onMounted(() => {
//     // Scroll to the top of the page when the component is mounted
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

</script>

<template>
    <img src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg" alt="">
    <h1>CodeWars User</h1>

    <template v-if="isLoading">
        <p>Loading ...</p>
    </template>

    <template v-else>
        <FetchCodeWars :userName="id" />
    </template>

    <p>
        <RouterLink :to="`/codewars/users/${id}/challenges`" class="challengeLink">{{ id }} - Challenges</RouterLink>
    </p>

    <p>
        <a :href="`https://www.codewars.com/users/${id}`" target="_blank" class="challengeLink">{{ id }} on Codewars</a>
    </p>


</template>

<style>
a.challengeLink {
    font-weight: bold;
    /* font-size: 16px; */
    text-decoration: underline;
}
</style>