<script setup lang="ts">
import axios from "axios";
import { defineProps, ref } from "vue";

const src = ref("");
const alt = ref("");

type PhotoImgProps = {
  imageId?: string;
};

const { imageId } = defineProps<PhotoImgProps>();

if (!imageId) {
  const result = await axios.get(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  src.value = result.data.urls.regular;
  alt.value = result.data.description;
} else {
  const result = await axios.get(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/${imageId}?client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  src.value = result.data.urls.regular;
  alt.value = result.data.description;
}
</script>

<template>
  <img
    class="absolute top-0 left-0 right-0 bottom-0 block object-cover object-center"
    :src="src"
    :alt="alt"
  />
</template>
