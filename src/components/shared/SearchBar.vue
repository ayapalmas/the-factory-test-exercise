<script setup lang="ts">
import SVG from "./SVG.vue";

type SearchProps = {
  query: string;
};

const { query } = defineProps<SearchProps>();

const emit = defineEmits(["update:query"]);

function handleChange(event: Event) {
  emit("update:query", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div tabIndex="{0}" className="group flex flex-row items-center gap-2 pr-5 bg-white">
    <input
      class="bg-white w-full outline-none h-10 pl-5 placeholder-black"
      type="text"
      placeholder="Поиск"
      v-model="query"
      @input="handleChange"
    />
    <button type="submit" class="h-4 w-4">
      <SVG name="search" class="text-black" />
    </button>
  </div>
</template>
