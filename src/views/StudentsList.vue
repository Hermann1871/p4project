<!-- https://www.codewars.com/users/leaderboard/kata -->

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import students from '../assets/studenti.json';
import StudentCard from "@/components/StudentCard.vue";
import StudentsListComponent from '@/components/StudentsListComponent.vue';

console.log("Studenti", students)
console.log("Numero studenti", students.length);
console.log("Studente 0", students[0].imgURL)


// // PROVA
// import axios from "axios";
// import type { Student } from "@/models/student";

// const props = { userName: "Condizionatore" }

// const isLoading = ref<boolean>(true);

// const currentUserRef = ref("");
// const searchedUserRef = ref(props.userName);

// interface StudentData {
//     name: string;
//     username: string;
//     imgURL: string;
//     overall?: number;
//     java?: number;
// }

// const currentStudentRef = ref<StudentData>({ ...students[0], overall: 0, java: 0 }); // TIPO rimosso
// // const currentStudentReactive = reactive(students[0]); // ESPERIMENTO per ordinare in base alla classifica, togliere tipo perchè aggiungo campi?

// const nameRef = ref("")
// const honorRef = ref(0);
// const positionRef = ref(0);
// const rankOverallRef = ref({});
// const rankLanguagesRef = ref({});

// let student = students.find((el) => el.username === props.userName);
// if (student) {
//     currentStudentRef.value = student;
// }

// // const mergedStudentData = {
// //     ...student,
// //     overall: "0",
// //     java: "0",
// //     // other properties as needed
// // };

// const fetchUserData = async () => {

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

// fetchUserData()
// // PROVA - END

const studentsWithoutIMG = computed(() => {
    // let modifiedArray = students.map(({ imgURL, ...rest }) => rest);
    const modifiedArray = students.map(({ name, username }) => ({ name, username }));
    return modifiedArray
})

const studentsSorted = computed(() => {
    // let modifiedArray = students.sort((a, b) => {
    //     let nameA = a.name.toLowerCase();
    //     let nameB = b.name.toLowerCase();

    //     if (nameA < nameB) {
    //         return -1; // nameA comes before nameB
    //     } else if (nameA > nameB) {
    //         return 1; // nameA comes after nameB
    //     } else {
    //         return 0; // names are equal
    //     }
    // }
    // );
    return students.sort((a, b) => a.name.localeCompare(b.name));
    // return modifiedArray
})

console.log('studentsWithoutIMG', studentsWithoutIMG.value)

// const currentStudentRef = ref(students[12]); // Non serve il Ref??? RIMUOVERE????

onMounted(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

</script>

<template>
    <br>
    <!-- <img src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg" alt=""> -->
    <img src="https://assets-global.website-files.com/62e3ee10882dc50bcae8d07a/64c17e87883a17f4153b301f_codewars-by-andela-dark.svg"
        alt="" height="36">
    <img src="https://stevejobs.academy/wp-content/uploads/2020/02/logo-sja.png" alt="" height="36">
    <h1>Students</h1>

    <!-- <StudentsListComponent></StudentsListComponent> -->
    <StudentsListComponent />

    <div class="container">
        <!-- :id="index + 1 * offset + 1" -->
        <!-- <StudentCard v-for="({ name, username, imgURL }, index) in studentsSorted" :key="index" :url="imgURL"
            :name="name" :username="username" /> -->
    </div>

</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
</style>

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
