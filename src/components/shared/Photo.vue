<script setup lang="ts">
import { defineProps } from "vue";

type PhotoProps = {
  src: string;
  alt?: string;
  id: string;
};

const { src, alt, id } = defineProps<PhotoProps>();
</script>

<template>
  <router-link
    :to="`/details/${id}`"
    class="rounded-md bg-slate-100 w-full aspect-square overflow-hidden"
  >
    <img class="object-cover object-center w-full h-full" :src="src" :alt="alt" />
  </router-link>
</template>
