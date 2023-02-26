<template>
  <div
    class="flex flex-col items-center p-8 justify-center">
    <div class="flex gap-2 mt-2">
      <router-link
        v-for="letter of letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        class="text-black hover:text-orange-500 hover:-translate-y-1 transition-all"
        >{{ letter }}</router-link
      >
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <base-spinner v-if="isLoading"></base-spinner>
    <!-- <pre>{{ meals }}</pre> -->
    <meal-item
      v-else
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"></meal-item>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import MealItem from "../components/MealItem.vue";
import BaseSpinner from "../components/BaseSpinner.vue";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const store = useStore();
const meals = computed(() => store.state.mealsByLetter);
const route = useRoute();
const isLoading = computed(() => {
  store.state.isLoading;
});
onMounted(async () => {
  await store.dispatch(
    "searchMealsByLetter",
    route.params.letter
  );
});
watch(route, async () => {
  await store.dispatch(
    "searchMealsByLetter",
    route.params.letter
  );
});
</script>
