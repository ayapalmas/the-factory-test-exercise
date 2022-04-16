<script setup lang="ts">
import SVGName from "../../types/SVGName";
import SVG from "./SVG.vue";

import { defineProps } from "vue";

type NavbarLinkProps = {
  icon: SVGName;
  text: string;
  to: string;
};
const { icon, text, to } = defineProps<NavbarLinkProps>();
</script>

<template>
  <router-link
    :to="to"
    class="h-4 inline-flex flex-row justify-center items-center gap-2 font-thin text-white bg-transparent"
  >
    <span class="h-w w-4 text-white">
      <SVG :name="icon" />
    </span>
    <span class="hidden sm:inline-block">{{ text }}</span>
  </router-link>
</template>
