<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const data = ref(null);
const route = useRoute(); // This gives you access to the current route
const currentPath = route.path;
const loading = ref(true)

console.log(currentPath);

const dataFunction = async () => {
  try {
    loading.value = true;
    const newPackageData = await axios.get('https://restaurant-server-xi.vercel.app/dataMenu');
  data.value = newPackageData.data;
  } catch (error) {
    console.error(error);
    toast.error('Failed to fetch recipe data. Please try again later.');
  }finally{
    loading.value = false;
  }
  
};

onMounted(() => {
  dataFunction();
});
</script>

<template>
  <div class="bg-[#fff8EE]">
    <div v-if="loading" class="loading-container max-w-7xl mx-auto pt-9 ">
          <!-- Skeleton Loader -->
      <div class="bg-[#fff8EE] rounded-lg shadow-md p-4 animate-pulse">
        <div class="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
        <div class="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div class="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div class="w-1/2 h-8 bg-gray-300 rounded"></div>
      </div>
        </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 pt-10 gap-3 max-w-7xl mx-auto">
      <RouterLink
   :to="{ path: `/menuDetails/${item._id}`}"
  v-for="item in data"
  :key="item._id"
  class="relative flex items-center card bg-[#FFF8EE] rounded-lg cursor-pointer shadow-xl w-full"
>
  <!-- Category Tag Section -->
  <div class="absolute top-2 left-2 py-1 text-xs z-10">
    <div class="absolute inset-0 text-red-200 flex">
      <svg height="100%" viewBox="0 0 50 100">
        <path
          d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
          fill="currentColor"
        />
      </svg>
      <div class="flex-grow h-full -ml-px bg-red-200 rounded-md rounded-l-none"></div>
    </div>
    <span class="relative text-red-500 uppercase font-semibold pr-px">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ item.category }}<span>&nbsp;</span>
    </span>
  </div>

  <!-- Text Section -->
  <div class="flex-1 p-4">
    <h2 class="text-xl font-bold text-gray-800 hover:text-[#c33]">{{ item.name }}</h2>
    <p class="text-gray-600">{{ item.description }}</p>
    <p class="text-lg font-semibold text-gray-800 mt-2">${{ item.price }}</p>
  </div>

  <!-- Image Section for Regular Items -->
  <div class="p-4">
    <img :src="item.image" alt="Food image" class="h-[9.3rem] w-[9.3rem] object-cover rounded-md" />
  </div>
</RouterLink>

    </div>
  </div>
</template>

<style scoped></style>
