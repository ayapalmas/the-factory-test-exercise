<script setup lang="ts">
import Container from "../../shared/Container.vue";
import Photo from "../../shared/Photo.vue";
import { store } from "../../../store";
</script>

<template>
  <div class="py-4">
    <Container>
      <h1 class="text-lg text-center font-semibold">Избранное</h1>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 py-4">
        <Photo
          v-for="imageId in store.favoriteImageIds"
          :id="imageId"
          :src="`https://source.unsplash.com/${imageId}`"
        />
      </div>
      <p
        v-if="store.favoriteImageIds.length <= 0"
        class="font-semibold text-center text-base text-gray-400"
      >
        В избранном пока пусто!
      </p>
    </Container>
  </div>
</template>
