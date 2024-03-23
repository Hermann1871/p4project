<script setup lang="ts">
// import useFetch from '../utils/fetch'
import { type Root } from '../models/rm'

import { ref, toValue } from 'vue';

const useFetch = (url: string, options?: RequestInit) => {
    const data = ref<Root | null>(null);
    const error = ref(null);

    // toValue() esegue l'estrazione di potenziali ref o getter
    fetch(toValue(url), options)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err));

    return { data, error };
};



const { data, error } = useFetch("https://rickandmortyapi.com/api/character")
// const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

console.log("Data", data)
console.log("Data 2", data.value)
console.log("Data 3", data.value?.results)



</script>

<template>
    <main>
        <h1>Page1</h1>


        <!-- <p v-for="({ results }, index) in data" :key="index">{{ results }}</p> -->
        <!-- <p v-for="({ title }, index) in data" :key="index">{{ title }}</p> -->



    </main>
</template>
