<template>
  <div
    class="bg-white shadow rounded-xl hover:-translate-y-4 transition-transform">
    <router-link
      :to="{
        name: 'mealDetails',
        params: { id: meal.idMeal },
      }">
      <img
        :src="meal.strMealThumb"
        :alt="strMeal"
        class="rounded-t-xl h-64 object-cover w-full" />
    </router-link>
    <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
    <div
      class="p-3 font-semibold flex gap-2 items-start justify-between flex-col">
      <p class="mb-4">
        {{
          meal.strInstructions
            .split(" ")
            .slice(0, 30)
            .join(" ")
        }}
      </p>
      <youtube-btn :href="meal.strYoutube" class="block"
        >Youtube
      </youtube-btn>
    </div>
  </div>
</template>

<script setup>
import YoutubeBtn from "./YoutubeBtn.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>
