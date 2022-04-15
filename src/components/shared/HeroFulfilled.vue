<script setup lang="ts">
import { ref } from "vue";

import axios from "axios";

const result = await axios.get(
  `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?client_id=${
    import.meta.env.VITE_UNSPLASH_API_KEY
  }`
);

const url = ref(result.urls.regular);

console.log(result);
</script>

<template>
  <div
    class="bg-slate-400 h-36 flex flex-col justify-center items-center bg-center bg-cover"
    v-bind:style="{ backgroundImage: 'url(' + url + ')' }"
  >
    <slot></slot>
  </div>
</template>
