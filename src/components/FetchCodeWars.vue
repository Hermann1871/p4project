<!-- https://www.codewars.com/users/leaderboard/kata -->

<script setup lang="ts">

import type { Student } from "@/models/student";
import { ref, watchEffect, onMounted, } from "vue";
import axios from "axios";
// import router from "../router/index"
import studentData from '../assets/studenti.json';

const students: Student[] = studentData as Student[];

// Props
const props = defineProps(['userName']);
console.log("props userName", props.userName);
console.log("props", props);

// Json Studenti
console.log("Studenti", students);
console.log("Numero studenti", students.length);
console.log("Studente 0", students[0].imgURL);

const isLoading = ref<boolean>(true);

const textInputRef = ref('');
const searchedUserRef = ref(props.userName);
const currentUserRef = ref("");

const nameRef = ref("")
const honorRef = ref(0);
const positionRef = ref(0);
const rankOverallRef = ref({});
const rankLanguagesRef = ref({});

const currentStudentRef = ref<Student>(students[0]);

// const currentStudentRef = ref(students.find((el) => el.username === props.userName));
// watchEffect(() => {
//     currentStudentRef.value = students.find((el) => el.username === props.userName);
// });

// SI PUO' SPOSTARE DENTRO WATCH EFFECT (ma lì non ci sono props!)??????????????????
let student = students.find((el) => el.username === props.userName);
if (student) {
    currentStudentRef.value = student;
}

const fetchUserData = async () => {

    isLoading.value=true;

    try {

        // isLoading.value = true;
        // console.log("IS LOADING 1", isLoading.value)
        // await new Promise(resolve => setTimeout(resolve, 3000));

        const response = await axios.get(`https://www.codewars.com/api/v1/users/${searchedUserRef.value}`);
        const data = response?.data;

        currentStudentRef.value = { name: "", username: "" };

        if (data) {
            console.log("Aggiorno User");
            currentUserRef.value = data.username;
            nameRef.value = data.name;
            honorRef.value = data.honor ?? 0;
            positionRef.value = data.leaderboardPosition ?? 0;
            rankOverallRef.value = data.ranks?.overall ?? {};
            rankLanguagesRef.value = data.ranks?.languages ?? {};

            //test
            student = students.find((el) => el.username === searchedUserRef.value);
            console.log("E' uno studente?", student, "Props", props.userName, "searchedUserRef.value", searchedUserRef.value);
            if (student) {
                console.log("Aggiorno studente");
                currentStudentRef.value = student;
            }
            // test END
        }

        // isLoading.value = false;
        console.log("IS LOADING 2.2", isLoading.value);

        console.log("Data", data);
        console.log("Data username", data.username);

    } catch (error) {
        console.error("Errore", error);
        // isLoading.value = false;
        // console.log("IS LOADING 2.1", isLoading.value);
    } finally {
        isLoading.value = false;
        // console.log("IS LOADING 2", isLoading.value);
    }


};

watchEffect(() => {
    fetchUserData();
});

function changeUser() {
    searchedUserRef.value = textInputRef.value;
    textInputRef.value = '';
}

// onMounted(() => {
//     setTimeout(() => {
//         console.log("GGGGGGGGGGGGGGGGGG")
//         isLoading.value = false;
//     }, 5000);
// });

</script>

<template>
    <form @submit.prevent="changeUser">
        <input v-model="textInputRef">
        <button>Visualizza utente</button><br><br>
    </form>

    <template v-if="!isLoading">
        <!-- <p>LOADED</p> -->        
        <p v-if="searchedUserRef !== currentUserRef" class="error">NOT FOUND You searched: {{
        searchedUserRef }}</p>
    </template>
    <template v-else>
        LOADING ... (4)<br>
    </template> 

    <template v-if="currentUserRef">
        <!-- Mettere un v-if?????????????????? -->
        <img :src="currentStudentRef.imgURL" alt="" height="200">
        <h2>{{ currentStudentRef.name }}</h2>

        <h2>{{ currentUserRef }}</h2>

        <p>Name (on CodeWars): {{nameRef}} </p>

        <p>Honor: {{ honorRef }}</p>
        <p>Position: {{ positionRef }}</p>

        <h4>Rank Overall</h4>
        <ul>
            <li v-for="(el, k) in rankOverallRef" :key="k">
                <p>{{ k }} - {{ el }}</p>
            </li>
        </ul>

        <h4>Rank by Language</h4>
        <ul>
            <li v-for="(el, k) in rankLanguagesRef" :key="k">
                <p>{{ k }}</p>
                <ul>
                    <li v-for="(el2, k2) in el" :key="k2">
                        <p>{{ k2 }} - {{ el2 }}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </template>
</template>

<style>
.error {
    color: red
}
</style>
