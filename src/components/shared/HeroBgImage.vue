<script setup lang="ts">
import axios from "axios";

const result = await axios.get(
  `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?client_id=${
    import.meta.env.VITE_UNSPLASH_API_KEY
  }`
);

const url = result.data.urls.regular;
</script>

<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 bg-center bg-cover"
    v-bind:style="{ backgroundImage: 'url(' + url + ')' }"
  ></div>
</template>
