<script setup>
import axios from 'axios';
import { inject, onMounted, ref, watch } from 'vue';
import { useToast } from 'vue-toastification'; // Assuming you are using this for notifications

// Use toast for notifications
const toast = useToast();

// Define reactive variables
const data = ref(null);
const user = inject('user');  // Get the current user
const emailId = inject('email');  // Get the provided email from user state
const loading = ref(true);  // Track loading state

// Function to fetch cart data based on the email
const fetchCartData = async () => {
  if (!emailId.value) {
    console.error('Email not available');
    return;
  }
  loading.value = true;
  try {
    const response = await axios.get(`http://localhost:5000/cart/${emailId.value}`);
    data.value = response.data; // Populate cart data
  } catch (error) {
    console.error(error);
    toast.error('Failed to fetch cart data. Please try again later.');
  } finally {
    loading.value = false;
  }
};

// Watch for changes in the user object
watch(emailId, (newUser) => {
  if (newUser) {
    fetchCartData(); // Fetch cart data if the user is logged in
  } else {
    console.log('No user logged in');
    data.value = null; // Clear cart data
  }
});

// On component mount, check if user is logged in and fetch cart data
onMounted(() => {
  if (emailId && emailId.value) {
    fetchCartData();
  }
});


</script>



<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Product List Section -->
   
    <div>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left">
          <thead class="bg-red-600 text-white">
            <tr>
              <th class="px-4 py-2">Product</th>
              <th class="px-4 py-2">Product Name</th>
              <th class="px-4 py-2">Unit Price</th>
              <th class="px-4 py-2">Quantity</th>
              <th class="px-4 py-2">Total</th>
              <th class="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody v-if="data && data.length > 0">
            <tr v-for="item in data" :key="item._id" class="border-b">
              <td class="px-4 py-4"><img :src="item.image" class="w-20 h-20"></td>
              <td class="px-4 py-4">{{ item.name }}</td>
              <td class="px-4 py-4">${{ item.price }}</td>
              <td class="px-4 py-4 flex items-center space-x-2">
                <button class="bg-gray-200 px-2">+</button>
                <span>{{ item.quantity }}</span> <!-- Use dynamic quantity -->
                <button class="bg-gray-200 px-2">-</button>
              </td>
              <td class="px-4 py-4">${{ item.price }}</td> <!-- Calculate total -->
              <td class="px-4 py-4 text-red-600 cursor-pointer">X</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="6" class="text-center py-4">Your cart is empty.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Calculate Shipping and Cart Subtotal Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Calculate Shipping -->
      <div class="bg-[#FFF8EE] p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-red-600 mb-4">CALCULATE SHIPPING {{ email }}</h2>
        <form>
          <div class="mb-4">
            <select class="w-full border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600">
              <option>Select Your payment gateway</option>
            </select>
          </div>
          <div class="mb-4">
            <input type="text" placeholder="Card number" class="w-full border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600">
          </div>
          <div class="mb-4">
            <input type="text" placeholder="CVC/Date" class="w-full border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600">
          </div>
          <div class="mb-4">
            <input type="text" placeholder="Coupon Code(if you have)" class="w-full border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600">
          </div>
          <button class="bg-red-600 text-white py-2 w-full rounded hover:bg-red-700 transition duration-200">
            Apply Coupon
          </button>
        </form>
      </div>

      <!-- Cart Subtotal -->
      <div class="bg-[#FFF8EE] p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-red-600 mb-4">CART SUBTOTAL</h2>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span>Order Subtotal</span>
            <span>$125.96</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span>Free Shipping</span>
          </div>
          <div class="flex justify-between">
            <span>Coupon</span>
            <span>$28.00</span>
          </div>
          <div class="flex justify-between">
            <span>Total</span>
            <span>$506.00</span>
          </div>
        </div>
        <button class="bg-red-600 text-white py-2 w-full rounded mt-6 hover:bg-red-700 transition duration-200">
          Proceed To Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
