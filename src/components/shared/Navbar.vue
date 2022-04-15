<script setup lang="ts">
import Container from './Container.vue';
</script>

<template>
  <nav class="bg-black h-14 flex flex-col justify-center text-white">
    <Container>
      <div class="w-full flex flex-row justify-between items-center">
        <slot></slot>
      </div>
    </Container>
  </nav>
</template>