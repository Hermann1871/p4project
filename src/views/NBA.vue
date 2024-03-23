<script setup lang="ts">

import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
    headers: {
        'X-RapidAPI-Key': 'b08c2dd28cmshafbb97b86ffca2dp14e4dfjsnfaf8da40da48',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}

// var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
// var params = "action=query&list=allimages&ailimit=10&format=json";
/**
 * Send the request to get the images
 */
//  fetch(apiEndpoint + "?" + params + "&origin=*")
//     .then(function (response) { return response.json(); })
//     .then(function (response) {
//         var allimages = response.query.allimages; // Process the output to get the image names
//         Object.keys(allimages).forEach(function (key) {
//             console.log(allimages[key]);
//         });
//     });

const apiEndpoint = "https://en.wikipedia.org/w/api.php"
const params = "action=opensearch&search=Hampi&limit=10&namespace=0&format=json"
/**
 * Send the request to get the images
 */
fetch(apiEndpoint + "?" + params + "&origin=*")
    .then(function (response) { return response.json(); })
    .then(function (response) {
        var allimages = response; // Process the output to get the image names
        Object.keys(allimages).forEach(function (key) {
            console.log(allimages);
        });
    });


// console.log(options)

</script>

<template>
    <h1>NBA</h1>
</template>
