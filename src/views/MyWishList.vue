<script setup>
import WishListImageSection from '@/components/WishList/WishListImageSection.vue';


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
        <tbody>
          <tr class="border-b">
            <td class="px-4 py-4"><img src="https://i.ibb.co/CB82X9H/image-items-List-15.png" class="w-20"></td>
            <td class="px-4 py-4">Belgium waffles with strawberries</td>
            <td class="px-4 py-4">$150</td>
            <td class="px-4 py-4 flex items-center space-x-2">
              <button class="bg-gray-200 px-2">+</button>
              <span>1</span>
              <button class="bg-gray-200 px-2">-</button>
            </td>
            <td class="px-4 py-4">$150</td>
            <td class="px-4 py-4 text-red-600 cursor-pointer">
                <button class="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200">
                Add To Cart
                </button>
            </td>
            <td class="px-4 py-4 text-red-600 cursor-pointer">X</td>
          </tr>
          <tr class="border-b">
            <td class="px-4 py-4"><img src="https://i.ibb.co/th506rb/image-items-List-11.png" class="w-20"></td>
            <td class="px-4 py-4">Chicken skewers</td>
            <td class="px-4 py-4">$150</td>
            <td class="px-4 py-4 flex items-center space-x-2">
              <button class="bg-gray-200 px-2">+</button>
              <span>2</span>
              <button class="bg-gray-200 px-2">-</button>
            </td>
            <td class="px-4 py-4">$300</td>
            <td class="px-4 py-4 text-red-600 cursor-pointer">
                <button class="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200">
                Add To Cart
                </button>
            </td>
            <td class="px-4 py-4 text-red-600 cursor-pointer">X</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>

</template>

<style scope>

</style>
