import axios from "axios";
export default {
  searchMeals({ commit }, keyword) {
    commit("changeLoading");
    axios
      .get(`/searchByName?s=${keyword}`)
      .then(({ data }) => {
        // debugger;

        commit("setSearchedMeals", data.meals);
        commit("changeLoading");
      });
  },
  searchMealsByLetter({ commit }, letter) {
    commit("changeLoading");
    axios
      .get(`/searchByLetter?f=${letter}`)
      .then(({ data }) => {
        // debugger;
        // debugger;

        commit("setMealsByLetter", data.meals);
        commit("changeLoading");
      });
  },
  searchMealsByIngredients({ commit }, ingredients) {
    commit("changeLoading");
    axios
      .get(`/searchByIngredients?i=${ingredients}`)
      .then(({ data }) => {
        // debugger;

        commit("setMealsByIngredients", data.meals);
        commit("changeLoading");
      });
  },
  async getRandomMeals({ commit }) {
    const meals = [];
    commit("changeLoading");
    for (let i = 0; i < 10; i++) {
      const response = await axios.get("/randomMeals");
      console.log(response.data.meals);
      meals.push(response.data.meals[0]);
    }
    commit("setRandomMeals", meals);
    commit("changeLoading");
  },
};
