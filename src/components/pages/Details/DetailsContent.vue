<script setup lang="ts">
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import { store } from "../../../store";
import Container from "../../shared/Container.vue";
import SVG from "../../shared/SVG.vue";

const route = useRoute();

const imageAttrs = ref<ImageAttrs>({ src: "", alt: "" });
const userImageAttrs = ref<ImageAttrs>({ src: "", alt: "" });
const userInfo = ref<UserInfo>({ name: "", link: "" });
const downloadLink = ref<string>("");
const isLiked = ref<boolean>(false);

type UserInfo = {
  name: string;
  link: string;
};

type ImageAttrs = {
  src: string;
  alt: string;
};

const fetchImageAtts = async () => {
  const imageResult = await axios.get(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/${route.params.id}?client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  downloadLink.value = imageResult.data.links.download;

  imageAttrs.value = {
    alt: imageResult.data.description,
    src: imageResult.data.urls.full,
  };

  const userResult = await axios.get(
    `${imageResult.data.user.links.self}?client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  userInfo.value = { name: userResult.data.name, link: userResult.data.username };

  userImageAttrs.value = {
    src: userResult.data.profile_image.small,
    alt: userInfo.value.name,
  };
};

watch(
  () => route.params.id,
  async () => {
    if (route.params.id) {
      await fetchImageAtts();

      if (store.favoriteImageIds.includes(route.params.id.toString())) {
        isLiked.value = true;
      }
    }
  },
  { immediate: true }
);

const handleLike = () => {
  if (isLiked.value) {
    store.favoriteImageIds = store.favoriteImageIds.filter(
      (e) => e !== route.params.id.toString()
    );

    console.log(store.favoriteImageIds);
    isLiked.value = false;
  } else {
    store.favoriteImageIds = [route.params.id.toString(), ...store.favoriteImageIds];
    isLiked.value = true;
  }
};
</script>

<template>
  <div class="relative">
    <div class="hidden sm:block relative">
      <div class="absolute t-0 w-full h-72 overflow-hidden">
        <div class="absolute t-0 w-full h-72 bg-gray-400 animate-pulse"></div>
        <img
          class="absolute scale-110 t-0 blur-sm w-full h-72 brightness-150 grayscale object-cover object-center"
          :src="imageAttrs.src"
          :alt="imageAttrs.alt"
        />
        <div class="absolute t-0 w-full h-72 bg-gray-500 opacity-25"></div>
      </div>
    </div>
    <div class="absolute t-0 w-full py-4 bg-transparent">
      <Container>
        <div class="flex flex-col gap-4">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center gap-2">
              <img
                class="aspect-square w-8 rounded object-cover object-center bg-gray-400"
                :src="userImageAttrs.src"
                :alt="userImageAttrs.alt"
              />
              <div class="flex flex-col justify-center">
                <span
                  class="text-lg font-semibold h-4 leading-none text-black sm:text-white text-[14px]"
                  >{{ userInfo.name }}</span
                >
                <span class="text-gray-400 h-4 leading-none text-[12px]"
                  >@{{ userInfo.link }}</span
                >
              </div>
            </div>
            <div class="flex flex-row gap-2">
              <button
                @click="handleLike"
                :class="`drop-shadow aspect-square h-6 rounded flex flex-col justify-center items-center ${
                  isLiked ? 'bg-red-600 text-white' : 'bg-white'
                } `"
              >
                <span class="aspect-square h-4">
                  <SVG name="heart" />
                </span>
              </button>
              <a
                :href="downloadLink"
                download
                class="drop-shadow h-6 rounded text-xs bg-[#fff200] flex flex-row justify-center items-center gap-2 pl-2 pr-5"
              >
                <span class="aspect-square h-4">
                  <SVG name="download" />
                </span>
                <span>Скачать</span>
              </a>
            </div>
          </div>
          <img
            class="w-full aspect-video object-cover object-center rounded shadow-2xl shadow-black"
            :src="imageAttrs.src"
            :alt="imageAttrs.alt"
          />
        </div>
      </Container>
    </div>
  </div>
</template>
