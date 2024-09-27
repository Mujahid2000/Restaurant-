<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuButton = ref([]);



const itemsMenu = async (item) => {
      try {
        const menu = item;
        const response = await axios.get(`http://localhost:5000/dataMenu/${menu}`); 
        menuButton.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(() => {
      itemsMenu('breakfast');
    });


</script>

<template>

  <div class="bg-[#FFF8EE] min-h-screen p-10">
    <div class="max-w-7xl mx-auto">
      <!-- Specials Section -->
      <div class="text-center mb-8">
        <h2 class="text-red-600 font-bold tracking-widest">SPECIALS</h2>
        <h1 class="text-3xl font-bold sectionTitle">Check out our menu</h1>
        <p class="sectionPara">Demoralized by the charms of pleasure of the moment so blinded except to some advantage.</p>
      </div>

      <!-- Tabs Section -->
      <div class="flex justify-center space-x-6 mb-8">
        <button @click="() => itemsMenu ('breakfast')" class="px-6 py-2 tabButtonColorActive text-white font-semibold">BREAKFAST</button>
        <button @click="() => itemsMenu ('lunch')" class="px-6 py-2 tabButtonColor text-gray-600 font-semibold">LUNCH</button>
        <button @click="() => itemsMenu ('dinner')" class="px-6 py-2 tabButtonColor text-gray-600 font-semibold">DINNER</button>
        <button @click="() => itemsMenu ('starters')" class="px-6 py-2 tabButtonColor text-gray-600 font-semibold">STARTERS</button>
        <button @click="() => itemsMenu ('beverages')" class="px-6 py-2 tabButtonColor text-gray-600 font-semibold">BEVERAGES</button>
      </div>

      <!-- Main Content Section -->
      <div class="flex">
        <!-- Left Image Section -->
        <div class="w-1/2 pr-4">
          <div class="border rounded-lg overflow-hidden">
            <img src="https://i.ibb.co.com/WpT6PTZ/Rectangle-40.png" alt="Perfect Breakfast" class="h-[38rem] w-[39rem]">
            <div class=" text-center bg-white">
              <h2 class="text-xl font-bold">Perfect Breakfast</h2>
              <p class="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class="text-green-600 text-2xl font-bold">20% Discount</p>
              <p class="text-gray-500">Open Every Day From 07AM - 11AM</p>
              <RouterLink to="/allMenu">

                <button class="mt-4 w-full px-6 py-3 bg-red-500 text-white font-semibold">VIEW ALL MENU</button>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Right Menu Section -->
        <div class="w-1/2 pl-8">
          <ul class="space-y-6">
            <li v-for="(item, index) in menuButton" :key="index" class="flex  justify-between items-center">
              <div>
                <h3 class="text-lg itemTitle font-bold ">{{ item.name }}</h3>
                <p class="text-gray-500">{{ item.description }}</p>
                <p class="dashColor">-------------------------------------------------------------------------------------</p>
              </div>
              <span class="text-xl font-bold text-red-500">${{ item.price }}</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.itemTitle{
    font-family: Roboto;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #C33;
}

.sectionTitle{
    font-family: Roboto;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #2A435D;
}

.sectionPara{
    font-family: Roboto;
font-size: 0.9375rem;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #2A435D;
}

.topTitle{
    font-family: Roboto;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
color: #C33;
}

.tabButtonColorActive{
    background-color: #C33;
    /* border-right: solid 2px #2A435D; */
}

.tabButtonColor{
    border-left: solid 2px #2A435D;
}

.dashColor{
    color: #C33;
}
</style>