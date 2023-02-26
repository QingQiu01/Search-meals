import { createRouter, createWebHistory } from "vue-router";
import Ingredient from "../views/Ingredient.vue";
import Home from "../views/Home.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },

      {
        path: "/by-name/:name?",
        name: "byName",
        component: SearchByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/by-ingredients",
        name: "byIngredients",
        component: SearchByIngredients,
      },
      {
        path: "/ingredient/:ingredient",
        name: "ingredient",
        component: Ingredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
