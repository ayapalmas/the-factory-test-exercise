<script setup lang="ts">
import BaseLayout from "./components/shared/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <template #navigation>
      <RouterView name="navigation"></RouterView>
    </template>
    <template #content>
      <RouterView name="content"></RouterView>
    </template>
  </BaseLayout>
</template>
