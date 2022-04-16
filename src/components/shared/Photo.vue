<script setup lang="ts">
import { defineProps } from "vue";

type PhotoProps = {
  src: string;
  alt: string;
};

const { src, alt } = defineProps<PhotoProps>();
</script>

<template>
  <router-link
    to=""
    class="rounded-md bg-slate-100 w-full aspect-square overflow-hidden hover:scale-110"
  >
    <img class="object-cover object-center w-full h-full" :src="src" :alt="alt" />
  </router-link>
</template>
