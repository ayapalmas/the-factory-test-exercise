<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

import SearchBar from "../../shared/SearchBar.vue";
import Hero from "../../shared/Hero.vue";
import Container from "../../shared/Container.vue";
import Photo from "../../shared/Photo.vue";

type ImageProp = {
  src: string;
  alt: string;
  id: string;
};

const imageProps = ref<ImageProp[]>([]);

onMounted(() => {
  getRandomPhotos();
});

const getRandomPhotos = async () => {
  const result = await axios.get(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?count=9&client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  imageProps.value = result.data.map(
    (e: { urls: { regular: string }; description: string; id: string }) => ({
      src: e.urls.regular,
      alt: e.description,
      id: e.id,
    })
  );
};
</script>

<template>
  <Hero>
    <Container>
      <form class="md:mx-36">
        <SearchBar />
      </form>
    </Container>
  </Hero>
  <Container>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 pt-4">
      <Photo
        v-for="imageProp in imageProps"
        :id="imageProp.id"
        :src="imageProp.src"
        :alt="imageProp.alt"
      />
    </div>
  </Container>
</template>
