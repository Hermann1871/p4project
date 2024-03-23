<!-- https://www.codewars.com/users/leaderboard/kata -->

<script setup lang="ts">
import axios from "axios";
import { ref, watchEffect, computed } from "vue";
import students from '../assets/studenti.json';
import router from "../router/index"

// Props
const props = defineProps(['userName'])
console.log("props userName", props.userName)
console.log("props", props)

// Json Studenti
console.log("Studenti", students)
console.log("Numero studenti", students.length);
console.log("Studente 0", students[0].imgURL)

const textInputRef = ref('');
const searchedUserRef = ref(props.userName);
const currentUserRef = ref("");

const honorRef = ref(0);
const positionRef = ref(0);
const rankOverallRef = ref({});
const rankLanguagesRef = ref({});

const currentStudentRef = ref(students[12]);

// const currentStudentRef = ref(students.find((el) => el.username === props.userName));
// watchEffect(() => {
//     currentStudentRef.value = students.find((el) => el.username === props.userName);
// });

let student = students.find((el) => el.username === props.userName)
// let isStudent = false
if (student) {
    // console.log("PIPPPO 999", student)
    // console.log("PIPPPO 8888", student?.imgURL)
    currentStudentRef.value = student;
    // isStudent = true;
}

// const currentStudent = computed(() => {
//     console.log("COMPUTED")
//     student = students.find((el) => el.username === props.userName)
//     // currentStudentRef.value = student;
//     return student
// })

// CHAT
// const currentStudent = computed(() => {
//     console.log("COMPUTED")
//     student = students.find((el) => el.username === props.userName)
//     currentStudentRef.value = student;
//     return student
// })

// const currentStudent = computed(() => {
//     console.log("COMPUTED")
//     const student = students.find((el) => el.username === props.userName)
//     return student
// })



const fetchUserData = async () => {

    try {
        const response = await axios.get(`https://www.codewars.com/api/v1/users/${searchedUserRef.value}`);
        const data = response?.data;

        currentStudentRef.value = { name: "", username: "" };

        if (data) {
            console.log("Aggiorno User")
            currentUserRef.value = data.username
            honorRef.value = data.honor ?? 0;
            positionRef.value = data.leaderboardPosition ?? 0;
            rankOverallRef.value = data.ranks?.overall ?? {};
            rankLanguagesRef.value = data.ranks?.languages ?? {};

            //test
            student = students.find((el) => el.username === searchedUserRef.value)
            console.log("E' uno studente?", student, "Props", props.userName, "searchedUserRef.value", searchedUserRef.value)
            if (student) {
                console.log("Aggiorno studente")
                currentStudentRef.value = student;
            }
            // test END

            // router.push({ name: 'detail', params: { id: "Hermann1871" } });

            // { name: 'detail', params: { id } }
        }
        console.log("Data", data)
        console.log("Data username", data.username)
    } catch (error) {
        console.error("Errore", error);
    }
};

watchEffect(() => {
    fetchUserData();
});

function changeUser() {
    searchedUserRef.value = textInputRef.value;
    // currentUserRef.value = 
    textInputRef.value = '';
}
</script>

<template>
    <!-- <h3>CodeWars Component Fetch...</h3> -->

    <form @submit.prevent="changeUser">
        <input v-model="textInputRef">
        <button>Visualizza utente</button><br><br>
    </form>

    <p v-if="searchedUserRef !== currentUserRef" class="error">NOT FOUND You searched: {{ searchedUserRef }}</p>

    <template v-if="currentUserRef">
        <img :src="currentStudentRef.imgURL" alt="">

        <!-- <img :src="student?.imgURL" alt=""> -->

        <h2>{{ currentUserRef }}</h2>

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
