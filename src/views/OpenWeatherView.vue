<script setup lang="ts">
import axios from 'axios';
import { watchEffect } from 'vue';





const fetchUserData = async () => {
    const key = ""
    try {
        const response = await axios.get(`https://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87.65&appid=${key}`);
        // const response = await axios.get(`http://history.openweathermap.org/data/2.5/history/city?id=2885679&type=hour&appid=${key}`);
        // const response = await axios.get(`http://pro.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${key}`);
        const data = response?.data;
        console.log("Data", data)
        console.log("Data username", data.username)
    } catch (error) {
        console.error("Errore di Axios", error);
    }
};

watchEffect(() => {
    fetchUserData();
});

</script>

<template>
    <h1>Weather</h1>
</template>