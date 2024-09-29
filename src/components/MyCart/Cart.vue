<script setup>
import axios from 'axios';
import { computed, inject, isRef, onMounted, ref, watch, watchEffect } from 'vue';
import { useToast } from 'vue-toastification'; // Assuming you are using this for notifications

// Use toast for notifications
const toast = useToast();

// Define reactive variables
const data = ref([]);
const user = inject('user');  // Get the current user
const emailId = inject('email');  // Get the provided email from user state
const loading = ref(true);  // Track loading state

// Form fields for payment
const payment = ref('');
const cardNumber = ref('');
const cvcData = ref('');
const couponValue = ref('');
const formData = ref();
const email = computed(() => user.value ? user.value.email : null); // Computed email based on user


// Example coupon codes
const validCoupons = ref(['DISCOUNT10', 'OFFER20', 'SAVE30']) // Three valid coupon codes

// Form validation 

const isFormValid = () =>{
  return payment.value && cardNumber.value && cvcData.value;
}


// Function to fetch cart data based on the email
const fetchCartData = async () => {
  if (!emailId.value) {
    toast.error('No email available');
    return;
  }
  loading.value = true;
  try {
    const response = await axios.get(`https://restaurant-server-xi.vercel.app/cart/${emailId.value}`);
    data.value = response.data; // Populate cart data
  } catch (error) {
    console.error(error);
    toast.error('Failed to fetch cart data.');
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
    data.value = []; // Clear the cart if no user is logged in
  }
});

// On component mount, check if user is logged in and fetch cart data
onMounted(() => {
  if (emailId && emailId.value) {
    fetchCartData();

  }
});


// Function to increase the quantity
const increaseQuantity = (index) => {
  data.value[index].quantity++;
};

// Function to decrease quantity
const decreaseQuantity = (index) => {
  if (data.value[index].quantity > 1) {
    data.value[index].quantity--;
  }
};

const totalPrice = computed(() => {
  return data.value ? data.value.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;
  
});

const finalTotal = computed(() => {
  if (couponValue.value) {
    const total = totalPrice.value;
  const discount = 28; // Example coupon value
  return total - discount;
  } else {
    return totalPrice
  }
  
});


//Apply coupon logic

const applyCoupon = () =>{
  if(validCoupons.value.includes(couponValue.value)) {
    toast.success('Valid coupon applied!');
  }else{
    toast.error('Invalid coupon code. Please try again')
  }
}





const handleDelete = async (itemId) => {
  try {
    const response = await axios.delete(`https://restaurant-server-xi.vercel.app/cartDataDelete/${itemId}`);
    toast.success('Item removed successfully');
    fetchCartData();  // Refetch cart data to update the UI after deletion
  } catch (error) {
    console.error(error);
    toast.error('Failed to delete item. Please try again later.');
  }
};



// proceedData submit form order

const proceedData = async () => {
if(!isFormValid()){
  toast.error('Please fill up the form before proceeding.');
  return
}

const orderData = {
    email: emailId.value,
    payment: payment.value,
    CardNumber: cardNumber.value,
    SecurityCode: cvcData.value,
    CouponCode: couponValue.value || '', 
    finalTotal: finalTotal.value,
    total: totalPrice.value,
    data: data.value
}

  try {
  await axios.post('https://restaurant-server-xi.vercel.app/proceed',orderData);
  toast.success('Order placed successfully!');
 } catch (error) {
  console.error(error);
    res.status(500).send('not working')
    toast.error('Failed to place the order. Please try again.');
 }
 
};




watchEffect(() => {
  console.log("Cart Data:", data.value);
});

</script>



<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- Product List Section -->
   
    <div>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-center">
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
    <tr v-for="(item, index) in data" :key="item._id" class="border-b">
      <td class="px-4 py-4 text-center"><img :src="item.image" class="w-20 h-20"></td>
      <td class="px-4 py-4 text-center">{{ item.name }}</td>
      <td class="px-4 py-4 text-center">${{ item.price }}</td>
      <td class="px-14 py-14 text-center flex items-center space-x-2 justify-center">
        <button @click="increaseQuantity(index)" class="bg-green-200 px-2">+</button>
        <span>{{ item.quantity }}</span>
        <button @click=" decreaseQuantity(index)" class="bg-red-200 px-2">-</button>
      </td>
      <td class="px-4 py-4 text-center">${{ item.price * item.quantity }}</td> <!-- Calculate total -->
      <td class="px-4 py-4 text-red-600 cursor-pointer text-center" @click="handleDelete(item._id)"><button >X</button></td>
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
     <!-- Shipping and Cart Subtotal Section -->
     <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Calculate Shipping Form -->
      <div class="bg-[#FFF8EE] p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-red-600 mb-4">CALCULATE SHIPPING</h2>
        <form @submit.prevent="applyCoupon">
          <div class="mb-4">
            <select v-model="payment" class="w-full border border-red-600 rounded p-2">
              <option disabled value="">Select Your Payment Gateway</option>
              <option>VISA</option>
              <option>Master Card</option>
              <option>sslcommerz</option>
            </select>
          </div>
          <div class="mb-4">
            <input v-model="cardNumber" type="text" placeholder="Card Number" class="w-full border border-red-600 rounded p-2" required />
          </div>
          <div class="mb-4">
            <input v-model="cvcData" type="text" placeholder="CVC/Expiry Date" class="w-full border border-red-600 rounded p-2" required />
          </div>
          <div class="mb-4">
            <input v-model="couponValue" type="text" placeholder="Coupon Code (if any)" class="w-full border border-red-600 rounded p-2" />
          </div>
          <button type="submit" class="bg-red-600 text-white py-2 w-full rounded hover:bg-red-700 transition duration-200">
            Apply Coupon
          </button>
        </form>
      </div>

      <!-- Cart Subtotal Summary -->
      <div class="bg-[#FFF8EE] p-6 rounded-lg">
        <h2 class="text-2xl font-semibold text-red-600 mb-4">CART SUBTOTAL</h2>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span>Order Subtotal</span>
            <span>${{ totalPrice }}</span>
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
            <span>${{ finalTotal }}</span>
          </div>
        </div>
        <button @click="proceedData" class="bg-red-600 text-white py-2 w-full rounded mt-6 hover:bg-red-700 transition duration-200">
          Proceed To Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
