export default {
  setSearchedMeals(state, meals) {
    // console.log(meals);

    state.searchedMeals = [];
    state.searchedMeals = meals;
  },
  setMealsByLetter(state, meals) {
    // console.log(meals);
    state.mealsByLetter = [];
    state.mealsByLetter = meals || [];
  },
  setMealsByIngredients(state, meals) {
    state.mealsByIngredients = [];

    state.mealsByIngredients = meals || [];
  },
  changeLoading(state) {
    state.isLoading = !state.isLoading;
  },
  setRandomMeals(state, meals) {
    state.randomMeals = meals;
  },
};
