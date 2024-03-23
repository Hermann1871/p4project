import { ref, toValue } from 'vue';

const useFetch = (url: string, options?: RequestInit) => {
  const data = ref<[]>([]);
  const error = ref(null);

  // toValue() esegue l'estrazione di potenziali ref o getter
  fetch(toValue(url), options)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
};

export default useFetch;

// import { ref } from 'vue';

// // type CharacterData = {
// //   info: {
// //     count: number;
// //     pages: number;
// //     next: string;
// //     prev: string;
// //   };
// //   results: {
// //     id: number;
// //     name: string;
// //     status: string;
// //     species: string;
// //     type: string;
// //     gender: string;
// //     origin: {
// //       name: string;
// //       url: string;
// //     };
// //     location: {
// //       name: string;
// //       url: string;
// //     };
// //     image: string;
// //     episode: string[];
// //     url: string;
// //     created: string;
// //   }[];
// // }

// export interface Root {
//     info: Info
//     results: Result[]
//   }
  
//   export interface Info {
//     count: number
//     pages: number
//     next: string
//     prev: any
//   }
  
//   export interface Result {
//     id: number
//     name: string
//     status: string
//     species: string
//     type: string
//     gender: string
//     origin: Origin
//     location: Location
//     image: string
//     episode: string[]
//     url: string
//     created: string
//   }
  
//   export interface Origin {
//     name: string
//     url: string
//   }
  
//   export interface Location {
//     name: string
//     url: string
//   }
  

// const useFetch = (url: string, options?: RequestInit) => {
//   const data = ref<CharacterData[]>([]);
//   const error = ref(null);

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => {
//       if (json.results) {
//         data.value = json.results;
//       } else {
//         throw new Error('Results not found in the response JSON');
//       }
//     })
//     .catch((err) => (error.value = err));

//   return { data, error };
// };

// export default useFetch;
