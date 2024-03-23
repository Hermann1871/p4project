<script setup lang="ts">
import { ref } from 'vue';
// import useFetch from '../utils/fetch'
import axios from "axios";
import type { Pokemon } from '@/models/pokemon';



// const {results} = data.value
const message = ref({
  results: [{ name: 'Pippo' }, { name: 'Pluto' }]
})

const { results: res1 } = message.value
console.log("PROVA", res1)
res1.forEach((result, index) => {
  console.log(`Item ${index + 1}:`, result.name);
});

const message2 = ref({
  results: [{
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/51"
    ],
    "url": "https://rickandmortyapi.com/api/character/3",
    "created": "2017-11-04T19:09:56.428Z"
  }, { name: 'Pluto' }]
})

const { results: res2 } = message2.value
console.log("PROVA B", res2)
res2.forEach((el, index) => {
  console.log(`Item B ${index + 1}:`, el.name);
});

const data = ref<Pokemon[]>([]);

// FUNZIONA
const { data: { results: resPokemon } } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
console.log("resPokemon", resPokemon)
const d = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
console.log("d", d)
data.value = resPokemon;


// FUNZIONA
const { data: { results } }
  = await axios.get(`https://rickandmortyapi.com/api/character`);
console.log("QUA 3", results)

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

let id = 0
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

</script>

<template>
  <main>
    <h1>Homepage Esame</h1>
    <!-- <p v-for="({ name }, index) in results" :key="index">{{ title }}</p> -->
    <!-- <p>{{ error }}</p> -->

    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.message }}
      </li>


    </ul>

    <ul>
      <li v-for="el in results" :key="el.id">
        {{ el.name }} - {{ el.id }}
        <img :src="el.image" alt="">
        <p>{{ el.image }}</p>
      </li>
    </ul>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button>X</button>
      </li>
    </ul>




 

  </main>
</template>
