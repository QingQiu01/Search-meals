<template>
  <header
    class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex text-orange-300 h-full px-5 hover:bg-orange-500 hover:text-white transition-colors items-center"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 h-full text-orange-300 hover:bg-orange-500 hover:text-white inline-flex transition-colors items-center"
        >SearchMeals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full text-orange-300 hover:bg-orange-500 hover:text-white inline-flex transition-colors items-center"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'byIngredients' }"
        class="px-2 h-full text-orange-300 hover:bg-orange-500 hover:text-white inline-flex transition-colors items-center"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
