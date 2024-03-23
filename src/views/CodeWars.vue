<script setup lang="ts">

import axios from "axios";
import { ref, watch, watchEffect } from "vue";

// const user = "Hermann1871"
const user = "Voile"
const textInputRef = ref('')
const userRef = ref(`${user}`)

const options = {
    method: 'GET',
    url: `https://www.codewars.com/api/v1/users/${userRef.value}`,
    headers: {
        // 'X-RapidAPI-Key': 'b08c2dd28cmshafbb97b86ffca2dp14e4dfjsnfaf8da40da48',
        // 'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
};

let response;

// watch(options, async (newOPt, oldOpt) => {

// try {
response = await axios.request(options);
console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

// })

const honorRef = ref(response?.data.honor)
const positionRef = ref(response?.data.leaderboardPosition)

const rankOverall = response?.data.ranks.overall
const rankOverallRef = ref(rankOverall)

const rankLanguages = response?.data.ranks.languages
const rankLAnguagesRef = ref(rankLanguages)

function changeUser() {
    // todos2.value.push({ id: id++, text: newTodo2.value, done: false })
    console.log("Inserito", textInputRef.value)
    userRef.value = textInputRef.value
    textInputRef.value = ''
}

</script>

<template>
    <h1>CodeWars</h1>

    <!-- <input v-model="textInput" placeholder="Scrivi qui">
    <p>{{ textInput }}</p> -->
    <!-- <input :value="text" @input="onInput" placeholder="Type here"> -->

    <form @submit.prevent="changeUser">
        <input v-model="textInputRef">
        <button>Visualizza utente</button>
    </form>

    <p>Il testo inserito è {{ textInputRef }}</p>

    <h2>{{ userRef }}</h2>

    <br>
    <p>Honor: {{ honorRef }}</p>
    <p>Position: {{ positionRef }}</p>

    <br>
    <!-- <p>Rank Overall {{ rankOverall }}</p> -->
    <p>Rank Overall</p>
    <ul>
        <li v-for="(el, k) in rankOverallRef" :key="k">
            <p>{{ k }} - {{ el }}</p>
        </li>
    </ul>

    <br>
    <h4>Rank by Language</h4>
    <ul>
        <li v-for="(el, k) in rankLAnguagesRef" :key="k">
            <!-- <p>{{ k }} - {{ el }}</p> -->
            <p>{{ k }}</p>
            <ul>
                <li v-for="(el2, k2) in el" :key="k2">
                    <p>{{ k2 }} - {{ el2 }}</p>
                </li>
            </ul>
        </li>
    </ul>



</template>
