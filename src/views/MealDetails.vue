<template>
  <!-- <div>Meal Details</div> -->
  <base-spinner v-if="isLoading"></base-spinner>
  <div class="max-w-[800px] mx-auto" v-else>
    <h1 class="text-5xl font-bold sm-5 my-5">
      {{ meal.strMeal }}
    </h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-full" />
    <div
      class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong>
        {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Category:</strong>
        {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2 font-semibold mb-3">
          Ingredients
        </h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}.
              {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2 font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}.
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <Youtube-btn :href="meal.strYoutube">
          Go to Youtube
        </Youtube-btn>
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 text-indigo-600 rounded border-2 hover:bg-indigo-600 hover:text-white transition-colors">
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseSpinner from "../components/BaseSpinner.vue";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import YoutubeBtn from "../components/YoutubeBtn.vue";
import { useStore } from "vuex";
const meal = ref({});
const route = useRoute();
const store = useStore();
const isLoading = ref(false);
onMounted(async () => {
  isLoading.value = true;
  await axios
    .get(`/fullInfoById?i=${route.params.id}`)
    .then(({ data }) => {
      console.log(data);
      // meal.value = data;
      meal.value = data.meals[0] || {};
    });
  isLoading.value = false;
});
</script>

<style lang="scss" scoped></style>
