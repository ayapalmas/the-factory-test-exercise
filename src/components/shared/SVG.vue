<script setup lang="ts">
import SVGName from "../../types/SVGName";
import SearchSVG from "./svg/SearchSVG.vue";
import HeartSVG from "./svg/HeartSVG.vue";
import DownloadSVG from "./svg/DownloadSVG.vue";

import { ref, markRaw } from "vue";

type SVGProps = {
  name: SVGName;
};

const { name } = defineProps<SVGProps>();

function getComponentBySVGName(svgName: SVGName) {
  switch (svgName) {
    case "search":
      return SearchSVG;
    case "heart":
      return HeartSVG;
    case "download":
      return DownloadSVG;
    default:
      return HeartSVG;
  }
}

const component = ref(markRaw(getComponentBySVGName(name)));
</script>

<template>
  <component :is="component"></component>
</template>
