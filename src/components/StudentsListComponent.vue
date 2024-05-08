<script setup lang="ts">
import { computed, ref } from 'vue';
import students from '../assets/studenti.json';


// PROVA
import axios from "axios";
import type { Student } from "@/models/student";

const props = { userName: "Condizionatore" }

const isLoading = ref<boolean>(true);

const currentUserRef = ref("");
const searchedUserRef = ref(props.userName);

interface StudentData {
    name: string;
    username: string;
    imgURL: string;
    overall?: number;
    java?: number;
}

const currentStudentRef = ref<StudentData>({ ...students[0], overall: 0, java: 0 }); // TIPO rimosso
// const currentStudentReactive = reactive(students[0]); // ESPERIMENTO per ordinare in base alla classifica, togliere tipo perchè aggiungo campi?

const nameRef = ref("")
const honorRef = ref(0);
const positionRef = ref(0);
const rankOverallRef = ref({});
const rankLanguagesRef = ref({});

let student = students.find((el) => el.username === props.userName);
if (student) {
    currentStudentRef.value = student;
}

// const mergedStudentData = {
//     ...student,
//     overall: "0",
//     java: "0",
//     // other properties as needed
// };

// OLD
// const fetchUserData (n: string) = async () => {

//     isLoading.value = true;

//     try {

//         // isLoading.value = true;
//         // console.log("IS LOADING 1", isLoading.value)
//         // await new Promise(resolve => setTimeout(resolve, 3000));

//         const response = await axios.get(`https://www.codewars.com/api/v1/users/${searchedUserRef.value}`);
//         const data = response?.data;

//         currentStudentRef.value = { name: "", username: "", imgURL: "" };

//         if (data) {
//             console.log("Aggiorno User");
//             currentUserRef.value = data.username;
//             nameRef.value = data.name;
//             honorRef.value = data.honor ?? 0;
//             positionRef.value = data.leaderboardPosition ?? 0;
//             rankOverallRef.value = data.ranks?.overall ?? {};
//             rankLanguagesRef.value = data.ranks?.languages ?? {};


//             //test
//             student = students.find((el) => el.username === searchedUserRef.value);
//             console.log("E' uno studente?", student, "Props", props.userName, "searchedUserRef.value", searchedUserRef.value);
//             if (student) {
//                 console.log("Aggiorno studente");
//                 currentStudentRef.value = student;
//                 // currentStudentRef.value = student;
//                 // currentStudentReactive


//                 currentStudentRef.value = { nameStud: student.name, usernameStud: student.username, imgURLStud: student.imgURL, overall: data.ranks.overall.score, java: data.ranks.languages.java.score, ...data }
//                 console.log("MERGE dei JSON ", currentStudentRef.value)
//                 console.log("MERGE dei JSON 2 OVERALL", currentStudentRef.value.overall)

//                 return { overall: data.ranks.overall.score, java: data.ranks.languages.java.score }

//             }
//             // test END
//         }

//         // isLoading.value = false;
//         console.log("IS LOADING 2.2", isLoading.value);

//         console.log("Data", data);
//         console.log("Data username", data.username);

//     } catch (error) {
//         console.error("Errore", error);
//         // isLoading.value = false;
//         // console.log("IS LOADING 2.1", isLoading.value);
//     } finally {
//         isLoading.value = false;
//         // console.log("IS LOADING 2", isLoading.value);
//     }

// };

// OLD END

async function fetchUserData(n: string): Promise<{ overall: number, java: number }> {
    isLoading.value = true;

    try {
        const response = await axios.get(`https://www.codewars.com/api/v1/users/${n}`);
        const data = response?.data;

        // Reset currentStudentRef.value
        currentStudentRef.value = { name: "", username: "", imgURL: "" };

        if (data) {
            currentUserRef.value = data.username;
            nameRef.value = data.name;
            honorRef.value = data.honor ?? 0;
            positionRef.value = data.leaderboardPosition ?? 0;
            rankOverallRef.value = data.ranks?.overall ?? {};
            rankLanguagesRef.value = data.ranks?.languages ?? {};

            const student = students.find((el) => el.username === n);
            if (student) {
                currentStudentRef.value = {
                    nameStud: student.name,
                    usernameStud: student.username,
                    imgURLStud: student.imgURL,
                    overall: data.ranks.overall.score ?? 0,
                    java: data.ranks.languages.java.score ?? 0,
                    ...data
                };
                console.log("MERGE dei JSON ", currentStudentRef.value);
                console.log("MERGE dei JSON 2 OVERALL", currentStudentRef.value.overall);

                // Return the overall and java scores
                return { overall: data.ranks.overall.score ?? 0, java: data.ranks.languages.java.score ?? 0 };
            }
        }
    } catch (error) {
        console.error("Errore", error);
    } finally {
        isLoading.value = false;
    }

    // Return default values if data not found
    return { overall: 0, java: 0 };
}

// const { overall, java } = await fetchUserData("Condizionatore");
// console.log("OVERALL", overall, "JAVA", java)

// FUNZ ma non tutti hanno java
// async function fetchStudentData(student: { username: string, name: string, imgURL: string }): Promise<{ nameStud: string, usernameStud: string, imgURLStud: string, overall: number, java: number }> {
//     const { username, name, imgURL } = student;
//     const { overall, java } = await fetchUserData(username);
//     return { nameStud: name, usernameStud: username, imgURLStud: imgURL, overall, java };
// }

// const mappedStudents = await Promise.all(students.map(async (student) => {
//     return await fetchStudentData(student);
// }));
// FUNZ END

async function fetchStudentData(student: { username: string, name: string, imgURL: string }): Promise<{ nameStud: string, usernameStud: string, imgURLStud: string, overall: number, java?: number }> {
    const { username, name, imgURL } = student;
    const { overall, java } = await fetchUserData(username);
    return { nameStud: name, usernameStud: username, imgURLStud: imgURL, overall, java };
}

const mappedStudents = await Promise.all(students.map(async (student) => {
    try {
        return await fetchStudentData(student);
    } catch (error) {
        console.error(`Error fetching data for ${student.username}:`, error);
        return {
            nameStud: student.name,
            usernameStud: student.username,
            imgURLStud: student.imgURL,
            overall: 0
        };
    }
}));

// mappedStudents.sort((a, b) => b.overall - a.overall);
// console.log(mappedStudents)



// students.map((stud) => {
//     const {overall, java} = fetchUserData(stud.username);
//     return { nameStud: stud.name,  usernameStud: stud.username, imgURLStud: stud.imgURL, overall : overall, java : java }}
// )

// PROVA - END

const sortStudents = ref<boolean>(false)

// const unsortedStudents = students
// const unsortedStudents = students.sort
const studentsSorted = computed(() => {
    console.log("sortStudents.value:", sortStudents.value)
    // const res = sortStudents.value ? students.sort((a, b) => a.name.localeCompare(b.name)) : students
    // console.log("res", res)
    return sortStudents.value
        ? [...students].sort((a, b) => a.name.localeCompare(b.name))
        : [...students];
})

const sortStudents2 = ref<boolean>(false)

// const unsortedStudents = students
// const unsortedStudents = students.sort
const studentsSorted2 = computed(() => {
    console.log("sortStudents2.value:", sortStudents2.value)
    // const res = sortStudents.value ? students.sort((a, b) => a.name.localeCompare(b.name)) : students
    // console.log("res", res)
    return sortStudents2.value
        ? [...mappedStudents].sort((a, b) => b.overall - a.overall)
        : [...mappedStudents];
})


</script>

<template>

    <button @click="sortStudents2 = !sortStudents2">Ordine classifica generale</button><br><br>
    <ol>
        <li v-for="(el, k) in studentsSorted2" :key="k">
            <!-- <p>username {{ el.username }}</p> -->

            <ul>
                <!-- <p>Id: {{ k }}</p> -->
                <!-- Stampa anche l'imgURL, meglio senza -->
                <!-- <li v-for="(el2, k2) in el" :key="k2"> -->
                <!-- <li v-for="(el2, k2) in el" :key="k2" v-if="k2 !== 'imgURL'"> non si può fare, si può con COMPUTED property ma perdo anche l'immagine :) -->
                <!-- <p>{{ k2 }} - {{ el2 }}</p> -->
                <!-- </li> -->
                <li><img :src="el.imgURLStud" alt="el.imgURL" width="100"><br></li>

                <li> Nome: {{ el.nameStud }} </li>
                <li> Username: {{ el.usernameStud }} </li>
                <li> Overall Score: {{ el.overall }} </li>
                <li>
                    <RouterLink :to="`/codewars/users/${el.usernameStud}`">Dettagli</RouterLink>
                </li><br>
            </ul>
        </li>
    </ol>


    <button @click="sortStudents = !sortStudents">Ordine alfabetico</button><br><br>
    <!-- myBoolean ^= true; -->
    <ol>
        <li v-for="(el, k) in studentsSorted" :key="k">
            <!-- <p>username {{ el.username }}</p> -->

            <ul>
                <!-- <p>Id: {{ k }}</p> -->
                <!-- Stampa anche l'imgURL, meglio senza -->
                <!-- <li v-for="(el2, k2) in el" :key="k2"> -->
                <!-- <li v-for="(el2, k2) in el" :key="k2" v-if="k2 !== 'imgURL'"> non si può fare, si può con COMPUTED property ma perdo anche l'immagine :) -->
                <!-- <p>{{ k2 }} - {{ el2 }}</p> -->
                <!-- </li> -->
                <li><img :src="el.imgURL" alt="el.imgURL" width="100"><br></li>

                <li> Nome: {{ el.name }} </li>
                <li> Username: {{ el.username }} </li>
                <li>
                    <RouterLink :to="`/codewars/users/${el.username}`">Dettagli</RouterLink>
                </li><br>
            </ul>
        </li>
    </ol>



</template>
