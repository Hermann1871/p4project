<script setup lang="ts">
import { useRoute } from 'vue-router';
import UserChallenges from '../components/UserChallenges.vue'

const {
    params: { id }
} = useRoute();

</script>


<template>

    <br>

    <img src="https://assets-global.website-files.com/62e3ee10882dc50bcae8d07a/64c17e87883a17f4153b301f_codewars-by-andela-dark.svg"
        alt="" height="72"><br>
    <!-- <img src="https://www.codewars.com/packs/assets/og-image.7f5134fb.png" alt="" height="144"> --><br>
    <!-- <img src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg" alt=""> -->

    <h1>User Challenges</h1>
    <UserChallenges :userName="id">dfgsfdgsdfgsdgfs</UserChallenges>

</template>