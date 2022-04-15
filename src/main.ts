import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import IndexNavigation from "./components/pages/Index/IndexNavigation.vue";
import IndexContent from "./components/pages/Index/IndexContent.vue";
import FavoritesNavigation from "./components/pages/Favorites/FavoritesNavigation.vue";
import FavoritesContent from "./components/pages/Favorites/FavoritesContent.vue";

import "./index.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      components: { navigation: IndexNavigation, content: IndexContent },
    },
    {
      path: "/favorites",
      components: {
        navigation: FavoritesNavigation,
        content: FavoritesContent,
      },
    },
  ],
});

createApp(App).use(router).mount("#app");
