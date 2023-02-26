<template>
  <div class="p-8 pb-0">
    <input
      v-model.trim()="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      :class="{ 'border-red-500': isEmpty }"
      placeholder="search for meals"
      @change="searchMeals" />
    <p v-if="isEmpty" class="py-3 text-red-500">
      At least input a letter please!
    </p>
  </div>
  <base-spinner v-if="isLoading"></base-spinner>
  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <!-- <pre>{{ meals }}</pre> -->
    <meal-item
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"></meal-item>
  </div>
  <div
    v-if="!meals"
    class="flex justify-center text-gray-500 items-center gap-4">
    There are no meals! Please change an ingredient and try
    again!
    <Youtube-btn class="" @click="backToSearch">
      <p>Back for Search Again</p>
    </Youtube-btn>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import YoutubeBtn from "../components/YoutubeBtn.vue";
import MealItem from "../components/MealItem.vue";
import { useStore } from "vuex";
import BaseSpinner from "../components/BaseSpinner.vue";
const isLoading = computed(() => store.state.isLoading);

const store = useStore();
const keyword = ref("");
const isEmpty = ref(false);
const route = useRoute();
const router = useRouter();
const searchMeals = async function () {
  if (keyword.value.trim() !== "") {
    await store.dispatch(
      "searchMeals",
      keyword.value.trim()
    );
    router.push(`/by-name/${keyword.value}`);
    isEmpty.value = false;
  } else {
    isEmpty.value = true;
    console.log(isEmpty.value);
    store.commit("setSearchedMeals", []);
  }
};
const meals = computed(() => store.state.searchedMeals);
onMounted(() => {
  console.log(route.params.name);
  keyword.value = route.params.name;
  if (keyword.value) searchMeals();
});
const backToSearch = function () {
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
