<script setup>
// Define card data in a reactive variable
import { ref } from 'vue';

const cardData = ref([
  {
    id: 1,
    title: "Passionate Chefs",
    description: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    imageUrl: "https://i.ibb.co/R3rx31f/cooking-1-1.png",
    buttonText: "Read More",
  },
  {
    id: 2,
    title: "100% Fresh Foods",
    description: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    imageUrl: "https://i.ibb.co/K9fK4jt/diet-122222.png",
    buttonText: "Read More",
  },
  {
    id: 3,
    title: "Memorable Ambience",
    description: "Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.",
    imageUrl: "https://i.ibb.co/yX1s1CG/candle-111111.png",
    buttonText: "Read More",
  },
]);
</script>

<template>
  <div class="max-w-7xl mx-auto py-10">
    <h2 class="text-center text-red-600 text-lg font-semibold  mb-8">Why We are the best</h2>
    <div class="flex flex-col lg:flex-row justify-center px-3 lg:px-0 space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
      <!-- Use v-for to dynamically render cards -->
      <div
        v-for="card in cardData"
        :key="card.id"
        class="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-red-600 hover:text-white transition duration-300"
      >
        <div class="text-6xl bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          {{ card.id }}
        </div>
        <img :src="card.imageUrl" alt="Card image" class="h-16 w-16 mx-auto mb-4" />
        <h3 class="text-lg font-semibold">{{ card.title }}</h3>
        <p class="mt-2">{{ card.description }}</p>
        <button class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          {{ card.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles */
</style>
