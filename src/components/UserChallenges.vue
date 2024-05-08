<script setup lang="ts">
import axios from "axios";
import { ref, watchEffect } from "vue";
import type { ChallengesPage, Challenge } from '@/models/completed'

const props = defineProps(['userName']);
console.log("props USR CHALL COMP", props);
console.log("props userName USR CHALL COMP", props.userName);

const currentPage = ref<number>(0)
const totalPages = ref<number>(1)
const totalChallenges = ref<number>(0)
// const pageRef = ref<ChallengesPage>() si può mettere tutto l'oggetto in un ref?
const challengesRef = ref<Challenge[]>()

const fetchUserChallenges = async () => {
    try {
        const { data } = await axios.get(`https://www.codewars.com/api/v1/users/${props.userName}/code-challenges/completed?page=${currentPage.value}`);
        // const { data } = await axios.get(`https://www.codewars.com/api/v1/users/${props.userName}/code-challenges/completed`);
        // const response = await axios.get(`https://www.codewars.com/api/v1/users/${props.userName}/code-challenges/completed`);
        // const data = response?.data;
        const challenges: Challenge[] = data.data
        challengesRef.value = challenges
        const items: number = data.totalItems
        const pages: number = data.totalPages
        totalPages.value = data.totalPages
        totalChallenges.value = data.totalItems
        // challenge.value = response.data?.slice() ?? []
        // challenges.value = response.data
        // page.value = response
        // console.log("Data Ref Value", challenges.value);
        console.log("Data", data);
        console.log("Challenges", challenges);
        console.log("Items", items);
        console.log("Pages", pages);


    } catch (error) {
        console.error("Errore", error);
    }
}

watchEffect(() => {
    fetchUserChallenges()
})



</script>

<template>

    <button @click="currentPage = Math.max(0, currentPage - 1)" :disabled="!currentPage">
        Previous page
    </button>
    Page: {{ currentPage + 1 }} / {{ totalPages }}
    <button @click="currentPage = Math.min(totalPages, currentPage + 1)" :disabled="currentPage >= totalPages - 1">
        Next page
    </button><br>
    Challenges: {{ currentPage * 200 + 1 }} - {{ Math.min(currentPage * 200 + 200, totalChallenges) }}

    <h2>{{ props.userName }}</h2>

    <ol :start="currentPage * 200 + 1">
        <li v-for="(e, k) in challengesRef" :key="k">
            <!-- {{ k }} - {{ e }} -->
            <!-- {{ k }} -->
            <ul>
                <li>
                    <p>slug: {{ e.slug }}</p>
                </li>
                <li>
                    <span>link: </span>
                    <a :href="`https://www.codewars.com/kata/${e.slug}`" target="_blank" class="challengeLink">{{ e.slug
                        }} on Codewars</a>
                </li>
                <li> link JSON API: <a :href="`https://www.codewars.com/api/v1/code-challenges/${e.slug}`"
                        target="_blank" class="challengeLink">{{ e.slug
                        }} on Codewars (JSON)</a></li>
                <li v-for="(e2, k2) in e" :key="k2">
                    {{ k2 }} - {{ e2 }}
                </li>

            </ul>
        </li>
    </ol>

</template>