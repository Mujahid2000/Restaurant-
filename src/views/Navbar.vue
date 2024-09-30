<script setup>
import axios from 'axios';
import { inject, onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'vue-toastification';

// Reactive states
const openMenu = ref(false);
const profileMenu = ref(false);
const data = ref([]);

const emailId = inject('email');
const toast = useToast();
// Dummy user data for testing
const user = inject('user');
const logOut = inject('logOut')

// Menu items
const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Items', link: '/items' },
  { name: 'Blog', link: '/pages' },
  { name: 'Contact', link: '/contact' }
];

// Toggle mobile menu visibility
function toggleMenu() {
  openMenu.value = !openMenu.value;
}

// Toggle profile menu visibility
function profileMenuButton() {
  profileMenu.value = !profileMenu.value;
}

const fetchCartData =async () =>{
  if(!emailId.value){
    toastInjectionKey.error('No email available')
  }

  try {
    const response = await axios.get(`https://restaurant-server-xi.vercel.app/cart/${emailId.value}`);
    data.value = response.data; // Populate cart data
  } catch (error) {
    console.error(error);
    toast.error('Failed to fetch cart data.');
  }
}


watch(emailId, (newUser) =>{
  if(newUser){
    fetchCartData();
  }else{
    console.log('No user logged in');
    data.value = []
  }
})


onMounted(() =>{
  if(emailId && emailId.value){
    fetchCartData()
  }
})
</script>

<template>
  <!-- Top Info Bar -->
  <div class="lg:flex hidden px-20 justify-between py-2 bg-[#C33] text-white">
    <div class="flex">
      <div class="flex items-center cursor-pointer mr-6">
        <img src="https://i.ibb.co/WWhTbwh/watch-icon.png" alt="Watch Icon" class="h-5 w-5 mr-2">
        <p>7.30 AM - 9.30 PM</p>
      </div>
      <div class="flex items-center cursor-pointer">
        <img src="https://i.ibb.co/3BnqMd8/phone-icon.png" alt="Phone Icon" class="h-5 w-5 mr-2">
        <p>+880 1630 225 015</p>
      </div>
    </div>
    <div>
      <RouterLink v-show="!user" to="/login" class="hover:underline uppercase">Register</RouterLink>
      <p v-show="user" class="hover:underline uppercase cursor-pointer">Register</p>
    </div>
  </div>

  <!-- Navbar -->
  <nav class="bg-[#FFF8EE] py-4 shadow-md relative">
    <div class="max-w-[90%] mx-auto flex justify-between items-center">
      <!-- Logo -->
      <RouterLink to="/">
        <img src="https://i.ibb.co/ZYz8bpZ/logo.png" alt="Store Logo" class="h-10">
      </RouterLink>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex gap-10 items-center">
        <li v-for="item in menuItems" :key="item.name" class="text-[#2A435D] font-bold hover:text-blue-500 cursor-pointer text-xl transition-colors duration-300">
          <RouterLink :to="item.link">{{ item.name }}</RouterLink>
        </li>
      </ul>

      <!-- Right-side icons: cart, profile -->
      <div class="flex items-center space-x-5">
        <!-- Cart Icon -->
        <RouterLink v-show="user" to="/cart" class="relative">
          <img src="https://img.icons8.com/ios-filled/50/2A435D/shopping-cart.png" alt="Cart Icon" class="h-6 w-6" />
          <span class="absolute top-0 right-0 text-xs bg-blue-500 text-white rounded-full px-1">{{ data.length }}</span>
        </RouterLink>
        <p v-show="user" class="ml-2 text-[#2A435D]">Delivery Order <br /> <span>+880 1630 225 015</span></p>

        <div v-show="!user" class="relative">
          <img src="https://img.icons8.com/ios-filled/50/2A435D/shopping-cart.png" alt="Cart Icon" class="h-6 w-6" />
          <span class="absolute top-0 right-0 text-xs bg-blue-500 text-white rounded-full px-1">0</span>
        </div>
        <p v-show="!user" class="ml-2 text-[#2A435D]">Delivery Order <br /> <span>+880 1630 225 015</span></p>
        
        <!-- Profile Icon -->
        <div v-show="user"  @click="profileMenuButton" class="flex justify-center items-center cursor-pointer text-[#2A435D] text-base lg:text-xl hover:text-blue-600">
          <img
            alt="Profile"
            src="https://i.ibb.co/d7tFP23/profile-image.jpg"
            class="relative inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center"
          />
        </div>
        <RouterLink v-show="!user" to="/login" class="flex justify-center items-center cursor-pointer  duration-500 text-[#2A435D] text-base lg:text-xl hover:text-blue-600">
            <button>
              <svg class="fill-current h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"/>
              </svg>
              Login
            </button>
          </RouterLink>
      </div>


      
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="lg:hidden focus:outline-none">
        <svg v-if="openMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="openMenu" class="lg:hidden absolute top-16 left-0 w-full bg-[#FFF8EE] flex flex-col items-start px-7 py-1 z-50">
        <li v-for="item in menuItems" :key="item.name" class="py-2 text-[#2A435D] list-none hover:text-blue-500 cursor-pointer text-sm">
          <RouterLink :to="item.link">{{ item.name }}</RouterLink>
        </li>
      </div>
    </transition>

    <!-- Profile Menu Dropdown -->
    <div v-if="user" v-show="profileMenu" class="absolute top-[75.5%] right-24 p-6 z-50">
      <ul class="w-72 p-4 bg-[#FFF8EE] border border-gray-300 rounded-lg shadow-md">
        <!-- Profile Header -->
         <RouterLink to="/myAccount">
           <li class="flex items-center mb-4">
             <img
               class="h-12 w-12 rounded-full object-cover mr-4"
               alt="Profile"
               src="https://i.ibb.co/d7tFP23/profile-image.jpg"
             />
             <div>
               <p class="text-lg font-semibold text-gray-900">{{ user?.displayName }}</p>
               <p class="text-sm text-gray-500">{{ user?.email }}</p>
             </div>
           </li>
         </RouterLink>
        <!-- Profile Menu Items -->
        <RouterLink to="/myWishlist">
          <li class="flex items-center cursor-pointer hover:bg-[#f1f0ed] duration-500 py-2 border-t border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#c33" class="h-6 w-6 mr-2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p class="text-gray-700">Wishlist</p>
        </li>
        </RouterLink>
       <RouterLink to="/cart">
        <li class="flex items-center cursor-pointer hover:bg-[#f1f0ed] duration-500 py-2 border-t border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#c33" class="h-6 w-6 mr-2">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.1 15h9.45c.75 0 1.41-.41 1.75-1.04l3.58-6.49c.08-.15.12-.31.12-.48 0-.55-.45-1-1-1H5.21L4.27 2H1v2h2.27l3.6 8.24-1.35 2.44C5.19 15.31 5 15.66 5 16c0 .55.45 1 1 1h12v-2H7.42l.67-1.24z" />
          </svg>
          <p class="text-gray-700">My Cart</p>
        </li>
       </RouterLink>
       <li >
       <button @click="logOut" class="flex items-center cursor-pointer hover:bg-[#f1f0ed] duration-500 py-2 border-t border-gray-200 w-full" >

         <svg xmlns="http://www.w3.org/2000/svg" fill="#c33" class="h-6 w-6 mr-2">
           <path d="M15.75 9l-1.41 1.41L18.34 14H2v2h16.34l-3.99 3.99L15.75 21l6-6z" />
         </svg>
         <p class="text-gray-700">Logout</p>
      </button>
    </li>
      </ul>
    </div>
    <div v-else>

    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
