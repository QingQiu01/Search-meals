<template>
  <nav-bar></nav-bar>
  <div class="bg-gray-100 h-full"></div>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import NavBar from "../NavBar.vue";
</script>
