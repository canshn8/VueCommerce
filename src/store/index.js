import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      favorites: []
    };
  },
  mutations: {
    toggleFavorite(state, meal) {
      const index = state.favorites.findIndex(fav => fav.idMeal === meal.idMeal);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(meal);
      }
    }
  }
});

export default store;