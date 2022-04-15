<script setup lang="ts">
import BaseLayout from "./components/shared/BaseLayout.vue"
</script>

<template>
  <BaseLayout>
    <template #navigation>
      <router-view name="navigation"></router-view>
    </template>
    <template #content>
      <router-view name="content"></router-view>
    </template>
  </BaseLayout>
</template>
