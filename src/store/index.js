import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
const store = createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    isLoading: false,
    randomMeals: [],
  },
  actions,
  mutations,
  getters,
});
export default store;
