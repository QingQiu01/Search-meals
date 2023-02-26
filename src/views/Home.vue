<template>
  <div
    class="flex flex-col p-8 justify-center items-center">
    <base-spinner v-if="isLoading"></base-spinner>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
      <!-- <pre>{{ meals }}</pre> -->
      <meal-item
        v-for="meal in randomMeals"
        :key="meal.idMeal"
        :meal="meal"
        class="hover:"></meal-item>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import MealItem from "../components/MealItem.vue";
import BaseSpinner from "../components/BaseSpinner.vue";
const isLoading = computed(() => store.state.isLoading);
const randomMeals = computed(() => store.state.randomMeals);
console.log(randomMeals);
const store = useStore();
onMounted(async () => {
  store.dispatch("getRandomMeals");
});
</script>
