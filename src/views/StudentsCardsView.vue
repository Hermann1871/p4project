<!-- https://www.codewars.com/users/leaderboard/kata -->

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import students from '../assets/studenti.json';
import StudentCard from "@/components/StudentsCards.vue";
// import StudentsListComponent from '@/components/StudentsListComponent.vue';

console.log("Studenti", students)
console.log("Numero studenti", students.length);
console.log("Studente 0", students[0].imgURL)

const studentsWithoutIMG = computed(() => {
    // let modifiedArray = students.map(({ imgURL, ...rest }) => rest);
    let modifiedArray = students.map(({ name, username }) => ({ name, username }));
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
    <!-- <StudentsListComponent /> -->

    <div class="container">
        <!-- :id="index + 1 * offset + 1" -->
        <StudentCard v-for="({ name, username, imgURL }, index) in studentsSorted" :key="index" :url="imgURL"
            :name="name" :username="username" />
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
