<script setup>
import { useRoute } from 'vue-router';
import { computed, inject, onMounted, ref, watch } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const currentItems = ref(null);  // Holds current item details
const user = inject('user'); // Default to null if user is not provided
const email = computed(() => user.value ? user.value.email : null); // Computed email based on user
const loading = ref(true);
const toast = useToast();
const route = useRoute();
const allRecipeData = ref([]);
const shuffledItems = ref([]);
const addingToCart = ref(false); 
const addingToWishlist = ref(false); 

// Fetch single data based on route ID
const singleData = async (id) => {
  try {
    loading.value = true;
    const response = await axios.get(`https://restaurant-server-xi.vercel.app/recipe/${id}`);
    currentItems.value = response.data;  // Update current item data
  } catch (error) {
    console.error(error);
    toast.error('Failed to fetch recipe data. Please try again later.');
  } finally {
    loading.value = false;
  }
};

// Watch for route ID changes and fetch data accordingly
watch(() => route.params.id, (newId) => {
  if (newId) {
    singleData(newId);  // Fetch new data when route ID changes
  }
});

// Fetch all recipe data
const allData = async () => {
  try {
    const response = await axios.get('https://restaurant-server-xi.vercel.app/recipe');
    allRecipeData.value = response.data;
    shuffledItems.value = shuffleArray([...response.data]);  // Shuffle items
  } catch (error) {
    console.error(error);
    toast.error('Failed to fetch all recipe data.');
  }
};

// Shuffle the recipe array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Add to cart function
const addToCart = async (item) => {
  if (!user.value || !email.value) {  // Use user.value to access the reactive user
    toast.error('Please log in to add items to your cart.');
    return;
  }

  addingToCart.value = true;

  try {
    await axios.post('https://restaurant-server-xi.vercel.app/cart', {
      itemId: item._id,  // Correct usage of currentItems.value._id
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      Email: email.value,  // Use the reactive email value
      CustomerName: user.value.displayName  // Use the user's displayName
    });
    toast.success('Item added to the cart successfully!');
  } catch (error) {
    console.error(error);
    toast.error('Failed to add item to the cart. Please try again later.');
  } finally {
    addingToCart.value = false;
  }
};

// wishList add system here 

const wishList = async (item) => {
  if (!user.value || !email.value) {  // Use user.value to access the reactive user
    toast.error('Please log in to add items to your cart.');
    return;
  }

  addingToWishlist.value = true;

  try {
    await axios.post('https://restaurant-server-xi.vercel.app/wishList', {
      itemId: item._id,  // Correct usage of currentItems.value._id
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      Email: email.value,  // Use the reactive email value
      CustomerName: user.value.displayName  // Use the user's displayName
    });
    toast.success('Item added to the wishlist successfully!');
  } catch (error) {
    console.error(error);
    toast.error('Failed to add item to the cart. Please try again later.');
  } finally {
    addingToWishlist.value = false;
  }
};

// Ensure data is fetched on component mount
onMounted(() => {
  if (route.params.id) {
    singleData(route.params.id);  // Fetch single item data
  }
  allData();  // Fetch all items data
});

// Watch for changes in user data and update email
watch(user, (newUser) => {
  if (newUser) {
    console.log('User Email:', newUser.email);
    email.value = newUser.email;
  } else {
    console.log('No user logged in');
  }
});
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- Data show in details section -->
    <div class="flex flex-col lg:flex-row gap-6 justify-between items-start py-6">
      <!-- Image div -->
      <div class="w-full lg:w-2/3">
        <!-- Loading State -->
        <div v-if="loading" class="loading-container">
          <!-- Skeleton Loader -->
          <div class="bg-[#FFF8EE] p-4 h-80 rounded-2xl shadow-lg flex flex-col justify-center max-w-6xl mx-auto sm:flex-row gap-5 select-none">
            <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse"></div>
            <div class="flex flex-col flex-1 gap-5 sm:p-2">
              <div class="flex flex-1 flex-col gap-3">
                <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl"></div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
                <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
              </div>
              <div class="mt-auto flex gap-3">
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
                <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Displayed after Loading -->
        <div v-else>
          <div v-if="currentItems && currentItems.image" >
            <div class="py-3  ">
              <img class="w-full h-[28rem] object-cover rounded-2xl shadow-lg" :src="currentItems.image" alt="Recipe Image">
            </div>
            <div class="flex gap-3 mt-3">
              <img class="w-24 h-24 object-cover cursor-pointer rounded-lg" src="https://i.ibb.co/rFJMkTP/products-view-image-2.png" alt="Additional Image 1">
              <img class="w-24 h-24 object-cover cursor-pointer rounded-lg" src="https://i.ibb.co/d2PTstM/products-view-image-3.png" alt="Additional Image 2">
            </div>
          </div>
        </div>
      </div>

      <!-- Description and Button Section -->
      <div class="w-full lg:w-1/3 flex flex-col justify-between items-start">
        <div v-if="currentItems && currentItems.description" class="flex-1">
          <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ currentItems.name }}</h1>
          <p class="descriptionText text-justify text-gray-600 mb-6">{{ currentItems.description }}</p>
          <p class="text-2xl font-semibold flex gap-4 text-gray-800 mb-6">Price: ${{ currentItems.price }} <button @click="wishList(currentItems)"><i class="fa-solid fa-heart" style="color: #ff0000;"></i></button></p>
          <button 
            :disabled="addingToCart" 
            @click="addToCart(currentItems)" 
            class="px-6 py-3 text-lg font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 w-full"
          >
            <span v-if="!addingToCart">Order Now</span>
            <span v-else>Adding...</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Card Section -->
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto pt-9 gap-5 px-2">
      <RouterLink
        v-for="(item, index) in shuffledItems"
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
          <p v-if="item.price" class="text-lg font-semibold text-gray-800 mt-2">${{ item.price }}</p>
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
.descriptionText {
  color: var(--second-color, #2A435D);
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: 400;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  position: relative;
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.25);
}
</style>
