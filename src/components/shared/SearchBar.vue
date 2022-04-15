<script setup lang="ts">
import SVG from "./SVG.vue";
</script>

<template>
  <div tabIndex={0} className="group flex flex-row items-center gap-2 pr-5 bg-white">
    <input class="bg-white w-full outline-none h-10 pl-5" type="text" placeholder="Поиск" />
    <span class="h-4 w-4">
      <SVG name="search-black" class="text-black fill-black" />
    </span>
  </div>
</template>