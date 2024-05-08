<script setup lang="ts">
// import axios from "axios";

const { name, username, url } = defineProps<{ name: string, username: string, url: string }>();
// console.log(name, username, url)

</script>

<template>
    <!-- <RouterLink :to="`/${id}`" class="pokemon-element"> -->
    <!-- <div class="card"> -->
    <RouterLink :to="`/codewars/users/${username}`" @click.prevent class="card">
        <img :src="url" :alt="name" width="100" />
        <p>{{ username }}</p>
        <p>{{ name }}</p>
    </RouterLink>
    <!-- </div> -->
    <br>
</template>

<style scoped>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    /* border: solid 2px red; */
    width: 200px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>



<!-- <style scoped lang="scss">
@import "@/scss/includes.scss";

.pokemon-element {
    width: 16.66666667%;

    box-shadow: 0 0 rem(8) rem(2) rgba(#000, 0.5);

    text-align: center;

    padding: rem(8) 0;

    border-radius: rem(8);

    text-decoration: none;
    color: $primary;

    transition: $transition;

    &:hover {
        color: $background;
        background: darken($background, 50%);
    }
}
</style> -->
