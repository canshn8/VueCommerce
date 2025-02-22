<template>
  <div v-if="meal" class="container mx-auto p-6 md:p-12 text-center">
    <h1 class="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">{{ meal.strMeal }}</h1>

    <img :src="meal.strMealThumb" alt="Meal Image" class="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-6" />

    <p class="text-lg text-gray-700 leading-relaxed mt-4 mx-auto max-w-3xl">
      {{ meal.strInstructions }}
    </p>

    <div v-if="meal.strCategory" class="mt-8">
      <span class="text-sm font-semibold text-gray-600">Kategori:</span>
      <span class="text-lg text-gray-800">{{ meal.strCategory }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      meal: null
    };
  },
  async created() {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`);
    this.meal = res.data.meals[0] || null;
  }
};
</script>

<style scoped>
</style>
