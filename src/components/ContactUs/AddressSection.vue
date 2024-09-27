<script setup>
import { ref } from 'vue';
import { GMap, GMapMarker } from 'vue-google-maps-ui';

// Set the center of the map to New York City
const center = ref({ lat: 40.712776, lng: -74.005974 });
</script>

<template>
  <div class="bg-cream-light px-4 md:px-0 py-20">
    <div class="container max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Address Section -->
      <div>
        <h2 class="text-3xl font-bold text-red-600 mb-4">ADDRESS</h2>
        <div class="flex items-center mb-2">
          <i class="fa fa-map-marker-alt mr-2 text-red-600"></i>
          <p>28 Seventh Avenue, New York, 10014</p>
        </div>
        <div class="flex items-center mb-2">
          <i class="fa fa-phone mr-2 text-red-600"></i>
          <p>+880 1630 225 015</p>
        </div>
        <div class="flex items-center mb-2">
          <i class="fa fa-envelope mr-2 text-red-600"></i>
          <p>resturents@gmail.com</p>
        </div>

        <!-- Working Hours -->
        <h2 class="text-3xl font-bold text-red-600 mt-6 mb-4">WORKING HOURS</h2>
        <div class="flex items-center">
          <i class="fa fa-clock mr-2 text-red-600"></i>
          <p>7:30 am to 9:30 pm on Weekdays</p>
        </div>

        <!-- Social Media -->
        <h2 class="text-3xl font-bold text-red-600 mt-6 mb-4">FOLLOW US</h2>
        <div class="flex space-x-4">
          <a href="#" class="text-red-600"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-red-600"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-red-600"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-red-600"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>

      <!-- Google Map Section -->
      <div class="w-full h-96">
 <img src="https://i.ibb.co.com/y6LMvRb/Screenshot-2024-09-20-174143.png"/>
</div>

    </div>
  </div>
</template>

<style scoped>
.bg-cream-light {
  background-color: #FFF8EE; /* Light cream background */
}

</style>
