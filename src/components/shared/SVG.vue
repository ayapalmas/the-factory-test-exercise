<script setup lang="ts">
import SVGName from "../../types/SVGName";
import SearchSVG from "./svg/SearchSVG.vue";
import SearchBlack from "./svg/SearchBlack.vue";
import HeartSVG from "./svg/HeartSVG.vue";

type SVGProps = {
  name: SVGName
}

const { name } = defineProps<SVGProps>();
</script>

<template>
  <SearchSVG v-if="name === 'search'" />
  <HeartSVG v-if="name === 'heart'" />
  <SearchBlack v-if="name === 'search-black'" />
</template>