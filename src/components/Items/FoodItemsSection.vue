<script setup>
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';

const data = ref([]);
const inputData = ref('');
const loading = ref(true)

const dataGetFunction = async () => {
  try {
    loading.value=true
    const menuData = await axios.get('https://restaurant-server-xi.vercel.app/recipe');
    data.value = menuData.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }finally{
    loading.value=false
  }
};

onMounted(() => {
  dataGetFunction();
});


const  filteredData = computed(() =>{
  if(!inputData.value){
    return data.value
  }
  return data.value.filter(item => item.name?.toLowerCase().includes(inputData.value.toLowerCase()))
})

const handleSearch = (event) => {
  inputData.value = event.target.value;
};
</script>

<template>
  <div class="bg-[#FFF8EE] py-[2.5rem]">
    <h1 class="heading">It’s the food and groceries you Love, delivered</h1>
    <div class="flex flex-col justify-center items-center">
      <div class="mx-auto flex w-full mt-5 flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[30%] lg:max-w-[40%] lg:px-6 xl:pl-0">
        <div class="mt-5 mb-5 flex gap-4 justify-center items-center">
          <div class="bg-[#c33] p-[1.3rem] rounded-2xl">
            <input
              @input="handleSearch"
              class="h-[4rem] w-full lg:w-[20rem] text-center rounded-lg border text-base font-medium bg-[#FFF8EE]"
              placeholder="Search your Items here..."
            />
          </div>

          <button
            class="flex h-[6.5rem] w-[6.5rem] items-center border justify-center rounded-lg p-[1.3rem] text-[1.7rem] active:bg-[#952828] font-medium bg-[#c33] text-white"
          >
            GO
          </button>
        </div>
      </div>
    </div>

    <!-- component -->
<div v-if="loading" class="flex  items-center justify-center">
    <div class="w-1/3">
        <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
        <div class="h-48 bg-gray-300"></div>
        <div class="px-6 py-4">
            <div class="h-6 bg-gray-300 mb-2"></div>
            <div class="h-4 bg-gray-300 w-2/3"></div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
            <div class="h-4 bg-gray-300 w-1/2"></div>
        </div>
        </div>
    </div>
</div>

    <div v-else class="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto pt-9 gap-5">
      <RouterLink
        v-for="(item, index) in filteredData"
        :key="item._id"
        :to="item.newId === 1 || item.newId === 2 ? `` : `/foodDetails/${item._id}`"
        :class="[item.newId === 1 ? 'row-span-3 p-0 hidden md:block' : '', item.newId === 2 ? 'col-span-2 hidden md:block row-span-2 p-0 overflow-hidden relative shadow-none' : '']"
        class="flex items-center card bg-[#FFF8EE] rounded-lg cursor-pointer shadow-xl w-full"
      >
        <!-- Image Section -->
        <div v-if="item.newId === 1 || item.newId === 2" class="w-full h-full">
          <img :src="item.image" alt="Food image" class="w-full h-full object-cover" />
        </div>

        <!-- Text Section -->
        <div v-if="item.name || item.description || item.price" class="flex-1 p-4">
          <h2 v-if="item.name" class="text-xl font-bold text-gray-800 hover:text-[#c33]">{{ item.name }}</h2>
          <p v-if="item.description" class="text-gray-600">{{ item.description.slice(0, 50) }}...</p>
          <p v-if="item.price" class="text-lg font-semibold text-gray-800 mt-2">${{ item.price }} </p>
        </div>

        <!-- Image Section for Regular Items -->
        <div v-if="item.newId !== 1 && item.newId !== 2" class="p-4">
          <img :src="item.image" alt="Food image" class="h-[9.3rem] w-[9.3rem] object-cover rounded-md" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.heading {
  color: var(--second-color, #2A435D);
  font-family: Roboto;
  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}

.card {
  position: relative;
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.25);
}

.noShadow {
  position: relative;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
}
</style>
