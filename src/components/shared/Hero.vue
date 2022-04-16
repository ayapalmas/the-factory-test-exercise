<script setup lang="ts">
import { ref, onMounted } from "vue";

import axios from "axios";

// import HeroBgImage from "./HeroBgImage.vue";
// import HeroBgLoading from "./HeroBgLoading.vue";

type ImageAttrs = {
  src: string;
  alt: string;
};

const imageAttrs = ref<ImageAttrs>({ src: "", alt: "" });

onMounted(() => {
  fetchImage();
});

const fetchImage = async () => {
  const result = await axios.get(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  imageAttrs.value = { src: result.data.urls.regular, alt: result.data.description };
};
</script>

<template>
  <div class="h-36">
    <div class="relative h-36 overflow-hidden">
      <div class="absolute t-0 w-full h-36 bg-gray-400 animate-pulse"></div>
      <img
        class="absolute scale-110 t-0 w-full h-36 brightness-75 object-cover object-center"
        :src="imageAttrs.src"
        :alt="imageAttrs.alt"
      />
      <div
        class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-transparent"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
