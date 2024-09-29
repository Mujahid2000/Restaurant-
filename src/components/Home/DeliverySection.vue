<script>

</script>

<template>
    <div class=" py-10 px-4">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <!-- Left Side (Text and Delivery Information) -->
        <div class="w-full lg:w-1/2">
          <h6 class="deliveryText text-center text-md font-bold">Delivery</h6>
          <h1 class="text-3xl font-bold text-[#2A435D] leading-tight headingtitle">
            A Moments Of <br> <span class="text-[#C33] spanColor">Delivered On Right Time & Place</span>
          </h1>
          <p class="mt-4 plainText text-[#2A435D] leading-relaxed">
            Food Khan is a restaurant, bar, and coffee roastery located on a busy corner site in Farringdon's Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.
          </p>
          
          <!-- Delivery Order Section -->
          <div class="mt-8 flex flex-col lg:flex-row items-center  gap-10">
            <div class="text-sm">
              <p class="font-semibold plainText text-[#2A435D]">Delivery Order</p>
              <p class="text-[#2A435D]">+880 1630 225 015</p>
            </div>
            <button class="bg-gradient-to-r from-[#D94A3F] to-[#B83227] focus:outline-none text-white px-8 py-3 rounded-xl text-xl font-semibold shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#E36154] hover:to-[#CC3D30] transition-all duration-300 ease-in-out">
            Order Now
          </button>

          </div>
        </div>
  
        <!-- Right Side (Image) -->
        <div class="w-full lg:w-1/2">
          <img src="https://i.ibb.co/30zx0SQ/image-delivery.png" alt="Delivery Image" class="w-full h-auto border border-blue-500 rounded-md" />
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
.plainText{
  font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
color: var(--second-color, #2A435D);
}


.spanColor{
  color: var(--primary-color, #C33);
/* H1 Heading 35px Roboto bold */
font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.headingtitle{
  color: var(--second-color, #2A435D);
/* H1 Heading 35px Roboto bold */
font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.deliveryText{
  color: var(--primary-color, #C33);
/* H1 Heading 20px Roboto bold */
font-family: Roboto;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}
  </style>
  