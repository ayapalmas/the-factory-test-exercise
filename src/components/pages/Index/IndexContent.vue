<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

import SearchBar from "../../shared/SearchBar.vue";
import Hero from "../../shared/Hero.vue";
import Container from "../../shared/Container.vue";
import Photo from "../../shared/Photo.vue";

const searchQuery = ref("");

type ImageProp = {
  src: string;
  alt: string;
  id: string;
};

const imageProps = ref<ImageProp[]>([]);

onMounted(() => {
  getRandomPhotos();
});

const setSearchQuery = (value: string) => {
  searchQuery.value = value;
};

const setImageProps = (
  imageData: Array<{ urls: { regular: string }; description: string; id: string }>
) => {
  imageProps.value = imageData.map(
    (e: { urls: { regular: string }; description: string; id: string }) => ({
      src: e.urls.regular,
      alt: e.description,
      id: e.id,
    })
  );
};

const search = async () => {
  const result = await axios.get(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/search/photos?query=${
      searchQuery.value
    }&per_page=9&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`
  );

  setImageProps(result.data.results);
};

const getRandomPhotos = async () => {
  const result = await axios.get(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?count=9&client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  setImageProps(result.data);
};
</script>

<template>
  <Hero>
    <Container>
      <form
        class="md:mx-36"
        @submit="
          (event) => {
            event.preventDefault();
            search();
          }
        "
      >
        <SearchBar :query="searchQuery" v-on:update:query="setSearchQuery" />
      </form>
    </Container>
  </Hero>
  <Container>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 py-4">
      <Photo
        v-for="imageProp in imageProps"
        :id="imageProp.id"
        :src="imageProp.src"
        :alt="imageProp.alt"
      />
    </div>
    <p
      v-if="imageProps.length <= 0"
      class="font-semibold text-center text-base text-gray-400"
    >
      Ничего не нашлось!
    </p>
  </Container>
</template>
