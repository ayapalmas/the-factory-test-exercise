<script setup lang="ts">
import HeroBgImage from "./HeroBgImage.vue";
import HeroBgLoading from "./HeroBgLoading.vue";
</script>

<template>
  <div class="relative h-36">
    <Suspense>
      <HeroBgImage />
      <template #fallback>
        <HeroBgLoading />
      </template>
    </Suspense>
    <div
      class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-transparent"
    >
      <slot></slot>
    </div>
  </div>
</template>
