<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <div v-else>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <meal-item
        v-for="meal in meals"
        :key="meal.idMeal"
        :meal="meal"></meal-item>
    </div>
    <div
      v-if="!meals"
      class="flex justify-center text-gray-500 items-center gap-4">
      There are no meals! Please change an ingredient and
      try again!
      <Youtube-btn class="" @click="backToSearch">
        <p>Back for Search Again</p>
      </Youtube-btn>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import BaseSpinner from "../components/BaseSpinner.vue";
import MealItem from "../components/MealItem.vue";
import YoutubeBtn from "../components/YoutubeBtn.vue";
const store = useStore();
const route = useRoute();
const router = useRouter();
const isLoading = computed(() => store.state.isLoading);
const meals = computed(
  () => store.state.mealsByIngredients
);
const findMeals = async function () {
  // console.log(isLoading.value);
  await store.dispatch(
    "searchMealsByIngredients",
    route.params.ingredient
  );

  // console.log(isLoading.value);
};

const backToSearch = function () {
  router.push("/by-ingredients");
};
onMounted(() => {
  // isLoading.value = true;
  console.log(isLoading.value);
  findMeals();
  // isLoading.value = false;
  console.log(isLoading.value);
});
</script>

<style lang="scss" scoped></style>
