<script setup>
import { ref } from 'vue'

// Define an array of popular dishes
const popularDishes = ref([
  {
    id: 1,
    src: "https://i.ibb.co/RjywF6H/c1c7d825922d2e9bb8022cad9e454542.png",
    alt: "Dish 1"
  },
  {
    id: 2,
    src: "https://i.ibb.co/QXPS5J8/9a4179ab53f97a2f830d87f3beadf089.png",
    alt: "Dish 2"
  },
  {
    id: 3,
    src: "https://i.ibb.co/rmTQmTJ/0768b88ed1235bc96dcc4cb94c645a9a.png",
    alt: "Dish 3"
  },
  {
    id: 4,
    src: "https://i.ibb.co/vJjtt6F/850812c777cd58a38e5caa2c59c4320c.png",
    alt: "Dish 4"
  },
  {
    id: 5,
    src: "https://i.ibb.co/SRxF1bH/b3ba43ad5f262aea4ccf7d022847d521.png",
    alt: "Dish 5"
  }
])
</script>

<template>
  <div class="bg-[#FFF8EE] py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-xl text-center text-[#2A435D] font-bold">Food Item</h3>
      <h2 class="text-[2.1875rem] font-bold text-[#C33] text-center mb-3">Popular Dishes</h2>
    
      <!-- Displaying popular dishes dynamically -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div 
          v-for="dish in popularDishes" 
          :key="dish.id" 
          class="mb-4">
          <img 
            :src="dish.src" 
            :alt="dish.alt" 
            class="rounded-lg w-[229px] h-[120px] shadow-md" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
