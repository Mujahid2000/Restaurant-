<script setup>
import { inject } from 'vue';

const logOut = inject('logOut');
const user = inject('user');



const userLogout = () =>{
  logOut()
}
</script>
<template>
<div class="flex flex-col lg:flex-row my-5 max-w-7xl mx-auto ">
    <div class="">
        <div class="profile w-full lg:w-[21.1875rem] pt-5">
            <div class="flex justify-center">
                <img  src="https://i.ibb.co.com/d7tFP23/profile-image.jpg" alt="" class="rounded-full flex justify-center">
            </div>
            <h5 class="profileName text-center">{{ user?.displayName }}</h5>
            <p class="status text-center">Web developer</p>
            <br>
            <br>
            <br>
            <br>
        </div>
        <div class="flex flex-col my-6 gap-4">
        <button class="flex border-l-4 border-[#c55] items-center gap-4 block bg-[#FFF8EE] px-7 py-4 text-xl">Profile</button>

        <RouterLink to="/cart" class="flex border-y-2 border-[#c55] items-center gap-4 block bg-[#FFF8EE] px-7 py-4 text-xl">
          <button class="flex gap-4 justify-center items-center"><i class="fa-solid fa-cart-shopping" style="color: #c33;"></i>My Cart</button>
          
        </RouterLink>
        <RouterLink to="/myWishlist" class="flex border-y-2 border-[#c55] items-center gap-4 block bg-[#FFF8EE] px-7 py-4 text-xl">

          <button class="flex gap-4 justify-center items-center"><i class="fa-solid fa-heart" style="color: #c33;"></i>Wishlist</button>
        </RouterLink>
        <RouterLink class="flex border-y-2 border-[#c55] items-center gap-4 block bg-[#FFF8EE] px-7 py-4 text-xl">
          <button class="flex gap-4 justify-center items-center"><i class="fa-solid fa-handshake-angle" style="color: #c33;"></i>Help Desk</button>
        </RouterLink>
          <button @click="userLogout" class="active:bg-stone-300 flex border-y-2 border-[#c55] items-center gap-4 block bg-[#FFF8EE] px-7 py-4 text-xl"><i class="fa-solid fa-power-off" style="color: #c33;"></i>Logout</button>
        </div>
    </div>
    <div class="flex flex-1 flex-col lg:flex-col justify-between gap-8 rounded-lg px-8 pb-8 max-w-4xl mx-auto">
  
  <!-- Basic Information Section 1 -->
  <div class="w-full lg:max-w-full">
    <h1 class="text-2xl font-semibold title mb-4">Basic Information</h1>
    <hr class="mb-6 bg-[#c33] py-[1px]">
    <form>
      <div class="flex flex-col mb-4">
        <label for="user-name-1" class="text-gray-700 label font-medium mb-2">User Full Name*</label>
        <input id="user-name-1" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
      </div>
      <div class="flex flex-col lg:flex-row gap-5 mb-4">
        <div class="flex flex-col flex-1">
          <label for="title-1" class="text-gray-700 label font-medium mb-2">Professional Title*</label>
          <input id="title-1" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
        <div class="flex flex-col flex-1">
          <label for="age-1" class="text-gray-700 label font-medium mb-2">Age*</label>
          <input id="age-1" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
      </div>
      <div class="flex flex-col mb-4">
        <label for="about-1" class="text-gray-700 label font-medium mb-2">About</label>
        <textarea id="about-1" class="border border-[#c33] h-[8rem] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]"></textarea>
      </div>
    </form>
  </div>

  <!-- CONTACT INFORMATION Section 2 -->
  <div class="w-full lg:w-full">
    <h1 class="text-2xl font-semibold title mb-4">CONTACT INFORMATION</h1>
    <hr class="mb-6 bg-[#c33] py-[1px]">
    <form>
      <div class="flex flex-col lg:flex-row gap-5 mb-4">
        <div class="flex flex-col flex-1">
          <label for="title-2" class="text-gray-700 label font-medium mb-2">Contact Number</label>
          <input id="title-2" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
        <div class="flex flex-col flex-1">
          <label for="age-2" class="text-gray-700 label font-medium mb-2">Email Address</label>
          <input id="age-2" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-5 mb-4">
        <div class="flex flex-col flex-1">
          <label for="country" class="text-gray-700 label font-medium mb-2">Country</label>
          <input id="country" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
        <div class="flex flex-col flex-1">
          <label for="postcode" class="text-gray-700 label font-medium mb-2">Postcode</label>
          <input id="postcode" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-5 mb-4">
        <div class="flex flex-col flex-1">
          <label for="city" class="text-gray-700 label font-medium mb-2">City</label>
          <input id="city" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
        <div class="flex flex-col flex-1">
          <label for="address" class="text-gray-700 label font-medium mb-2">Full Address</label>
          <input id="address" type="text" class="border border-[#c33] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#c33]">
        </div>
      </div>
    </form>
  </div>
  
  <!-- Save Setting Button -->
  <div class="flex justify-center mt-8">
    <button class="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200">
      Save Setting
    </button>
  </div>

</div>


</div>
</template>

<style scoped>
.profile{
    
    height: 19.25rem;
    flex-shrink: 0;
    background-color: #FFF8EE;
}

.profileName{
    color: var(--second-color, #2A435D);
/* H1 Heading 25px Roboto Regular */
    font-family: Roboto;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.status{
    color: var(--primary-color, #C33);
/* H1 Heading 18px Roboto Regular */
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.title{
color: var(--primary-color, #C33);
/* H1 Heading 35px Roboto bold */
font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.label{
    color: var(--primary-color, #C33);
/* H1 Heading 18px Roboto Regular */
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>