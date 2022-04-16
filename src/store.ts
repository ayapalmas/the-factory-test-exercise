import { reactive } from "vue";

export const store = reactive<{ favoriteImageIds: string[] }>({
  favoriteImageIds: [],
});
