<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <br> -->
        <RouterLink to="/about">About</RouterLink>
        <!-- <br> -->
        <RouterLink to="/prova">Prova</RouterLink>
        <RouterLink to="/page1">Page 1</RouterLink>
        <RouterLink to="/nba">NBA</RouterLink>
        <!-- <RouterLink to="/codewars">CodeWars</RouterLink> -->
        <RouterLink to="/codewars2">CodeWars 2</RouterLink>
        <RouterLink to="/students">Students</RouterLink>
        <RouterLink to="/redirect">Cerca utente Codewars</RouterLink>
        <RouterLink to="/weather">Weather</RouterLink>
      </nav>

    </div>
  </header>

  <!-- <RouterView /> -->
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /* mod */
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

/* mod */
nav a {
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* mod */
nav a:visited {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
