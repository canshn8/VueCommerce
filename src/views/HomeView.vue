<template>
  <div class="container mx-auto p-6">
    <input v-model="search" placeholder="Yemek ara..." class="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

    <div v-if="meals.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      <div v-for="meal in filteredMeals" :key="meal.idMeal" @click="goToMeal(meal.idMeal)" class="cursor-pointer transform transition duration-300 hover:scale-105 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
        <img :src="meal.strMealThumb" alt="Meal Image" class="w-full h-56 object-cover rounded-t-xl" />
        <div class="p-5">
          <h2 class="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-200">{{ meal.strMeal }}</h2>
          <p class="text-sm text-gray-600 mt-2">{{ meal.strCategory }}</p>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-600">
      <p>No meals found for your search. Please try again with a different keyword.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      meals: [],
      search: ''
    };
  },
  computed: {
    filteredMeals() {
      return this.meals.filter(meal => meal.strMeal.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  async created() {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    this.meals = res.data.meals || [];
  },
  methods: {
    goToMeal(id) {
      this.$router.push(`/meal/${id}`);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 100%;
}

@media (min-width: 640px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (min-width: 768px) {
  .container {
    padding-left: 40px;
    padding-right: 40px;
  }
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
