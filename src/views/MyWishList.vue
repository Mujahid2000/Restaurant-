<script setup>
import WishListImageSection from '@/components/WishList/WishListImageSection.vue';
import axios from 'axios';
import { computed, inject, onMounted, ref, watch } from 'vue';
import { useToast } from 'vue-toastification';


const toast = useToast();

// Define reactive variables
const data = ref(null);
const user = inject('user');  // Get the current user
const emailId = inject('email');  // Get the provided email from user state
const loading = ref(true);  // Track loading state
const addingToCart = ref(true);
const email = computed(() => user.value ? user.value.email : null);



// Function to fetch cart data based on the email
const fetchCartData = async () => {
  if (!emailId.value) {
    console.error('Email not available');
    return;
  }
  loading.value = true;
  try {
    const response = await axios.get(`https://restaurant-server-xi.vercel.app/wishList/${emailId.value}`);
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

const increaseQuantity = (index) => {
  data.value[index].quantity++;
};

// Function to decrease quantity
const decreaseQuantity = (index) => {
  if (data.value[index].quantity > 1) {
    data.value[index].quantity--;
  }
};

// add to cart functionality
const addToCart =async (item) =>{
  if(!user.value || !email.value){
    toast.error('Wishlist Adding Failed');
    return;
  }
const itemId = item.itemId;
const name = item.name;
const image = item.image;
const price = item.price;
const quantity = item.quantity;
const Email = item.Email;
const CustomerName = item.CustomerName;
console.log( itemId, name, image, price, quantity, Email, CustomerName);

addingToCart.value = true;

try {
  await axios.post('https://restaurant-server-xi.vercel.app/cart',{
itemId : item.itemId,
name : item.name,
image : item.image,
price : item.price,
quantity : item.quantity,
Email : item.Email,
CustomerName : item.CustomerName,
  })
  toast.success('Item added to the cart successfully!');
} catch (error) {
  console.error(error);
  toast.error('Failed to add item to the cart. Please try again later.');
}finally{
  addingToCart.value = false;
  }
}


watch(user, (newUser) => {
  if (newUser) {
    console.log('User Email:', newUser.email);
    email.value = newUser.email;
  } else {
    console.log('No user logged in');
  }
});


const handleDelete =async (itemId) =>{
  if(!user.value || !email.value){
    return toast.error('User not valid')
  }
try {
  const response = await axios.delete(`https://restaurant-server-xi.vercel.app/wishListDataDelete/${itemId}`);
  toast.success('Item deleted Successfully')
  fetchCartData();
} catch (error) {
  console.error(error);
  toast.error('Item not delete')
  }
}
</script>

<template>
  <WishListImageSection/>
  <div class="max-w-7xl mx-auto my-2">
    <div class="overflow-x-auto mb-8">
      <table class="w-full text-left">
        <thead class="bg-red-600 text-white">
          <tr>
            <th class="px-4 py-2">Product</th>
            <th class="px-4 py-2">Product Name</th>
            <th class="px-4 py-2">Unit Price</th>
            <th class="px-4 py-2">Quantity</th>
            <th class="px-4 py-2">Total</th>
            <th class="px-4 py-2">Add To Cart</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody v-if = "data && data.length > 0">
          <tr v-for="(item , index) in data" class="border-b">
            <td class="px-4 py-4 text-center"><img @load="" :src="item.image" class="w-20"></td>
            <td class="px-4 py-4 text-center">{{ item.name }}</td>
            <td class="px-4 py-4 text-center">${{ item.price }}</td>
            <td class="px-14 py-14 text-center flex items-center justify-center space-x-2">
              <button @click="increaseQuantity(index)" class="bg-green-200 px-2">+</button>
              <span>{{ item.quantity }}</span>
              <button @click=" decreaseQuantity(index)" class="bg-red-200 px-2">-</button>
            </td>
            <td class="px-4 py-4 text-center">${{ item.price }}</td>
            <td class="px-4 py-4 text-center">
              <button @click="addToCart(item)" class="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200">
                Add To Cart
              </button>
            </td>
            <td class="px-4 py-4 text-center text-red-600 cursor-pointer"><button @click="handleDelete(item._id)">X</button></td>
          </tr>
        
        </tbody>
        <tbody v-else>
    <tr>
      <td colspan="6" class="text-center py-4">Your favorite items are empty.</td>
    </tr>
  </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
td, th {
  text-align: center; /* Centers the text in the table cells */
  vertical-align: middle; /* Vertically aligns the content in the center */
}
</style>
