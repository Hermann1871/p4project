<script setup lang="ts">

import { ref, onMounted } from "vue"

const isLoading = ref<boolean>(true)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 5000);
});


</script>

<template>
    <h1>Test Loading</h1>
    <p v-if="!isLoading">Completed!</p>
    <p v-else> Loading ...</p>
</template>