<template>
  <div class="p-8">
    <div class="p-8 pb-0">
      <input
        v-model.trim()="keyword"
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="search By Ingredient"
        @change="searchMeals" />
      <p v-if="isEmpty" class="py-3 text-red-500">
        At least input a letter please!
      </p>
    </div>
    <!-- <router-link
      :to="{
        name: 'ingredient',
        params: { ingredient: ingredient },
      }">
    </router-link> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// import axios from "axios";
const router = useRouter();
// const ingredients = ref([]);
const isEmpty = ref(false);
const keyword = ref("");
// const ingredient = ref("");
const searchMeals = function () {
  if (keyword.value.trim() != "") {
    router.push(`/ingredient/${keyword.value.trim()}`);
  } else {
    isEmpty.value = true;
  }
};

// onMounted(() => {

// });
</script>
