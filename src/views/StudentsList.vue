<!-- https://www.codewars.com/users/leaderboard/kata -->

<script setup lang="ts">
import { ref } from "vue";
import students from '../assets/studenti.json';

console.log("Studenti", students)
console.log("Numero studenti", students.length);
console.log("Studente 0", students[0].imgURL)

const currentStudentRef = ref(students[12]);

</script>

<template>
    <br>
    <img src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg" alt="">
    <img src="https://stevejobs.academy/wp-content/uploads/2020/02/logo-sja.png" alt="" height="36">
    <h1>Students</h1>

    <ol>
        <li v-for="(el, k) in students" :key="k">
            <!-- <p>username {{ el.username }}</p> -->
            <img :src="el.imgURL" alt=""><br>

            <!-- <RouterLink :to="`/${id}`" class="pokemon-element">
                <img :src="data.sprites.front_default" :alt="data.name" />
                <p>{{ data.name }}</p>
            </RouterLink> -->

            <ul>
                <!-- <p>Id: {{ k }}</p> -->
                <li v-for="(el2, k2) in el" :key="k2">
                    <p>{{ k2 }} - {{ el2 }}</p>
                </li>
                <li>
                    <RouterLink :to="`/codewars/users/${el.username}`">{{ el.username }} - Dettagli</RouterLink>
                </li><br>
            </ul>
        </li>
    </ol>

</template>

<style>
.error {
    color: red
}

a {
    text-decoration: none;
    color: var(--color-text);
}

img {
    margin-right: 20px;
    /* Adjust as needed */
}

/* Apply margin only to the second image */
img:last-child {
    margin-right: 0;
    /* Reset margin for the last image */
}
</style>
