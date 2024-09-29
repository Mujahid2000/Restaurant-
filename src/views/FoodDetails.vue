<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import ItemImage from '@/components/ItemsDetails/ItemImage.vue';
import FoodDetailsSection from '@/components/ItemsDetails/FoodDetailsSection.vue';
import axios from 'axios';


const route = useRoute();
const currentItems = ref(null);
const loading = ref(false);
const singleId = route.params.id;


const singleData = async(id) =>{
  try {

    loading.value= true;
  const response = await axios.get(`https://restaurant-server-xi.vercel.app/recipe/${id}`)
  currentItems.value = response.data;
  } catch (error) {
    console.log(error);
  }finally{
    loading.value=false;
  }
}



onMounted(() => {
  singleData(singleId)
}),



watch(() => route.params.id, (newItem) => {
  singleData(newItem)
});

</script>

<template>
    <div class="bg-[#FFF8EE] px-3">
          <!-- Pass the item name to ItemImage component -->
  <ItemImage :name="currentItems?.name" />

  <!-- Pass the full item object to FoodDetailsSection component -->
  <FoodDetailsSection :item="currentItems" />
    </div>

</template>

<style scoped>
/* Add any specific styles for this component here */
</style>
