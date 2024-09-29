<script setup>
// Import Vue's reactive methods
import { ref } from 'vue';

// Define branch data in a reactive array
const branches = ref([
  {
    id: 1,
    name: "Robert Food",
    address: "1986 Hilltop Drive Borger, TX 79007",
    time: "7:30 AM - 9:30 PM",
    phone: "+880 1630-225015",
    mapLink: "#",
  },
  {
    id: 2,
    name: "Mark A. Reed Food",
    address: "4877 Rose Avenue New Orleans, LA 70112",
    time: "7:30 AM - 9:30 PM",
    phone: "+880 1630-225015",
    mapLink: "#",
  },
  {
    id: 3,
    name: "Karie K. Hill Food",
    address: "1509 Peaceful Lane Cleveland, OH 44115",
    time: "7:30 AM - 9:30 PM",
    phone: "+880 1630-225015",
    mapLink: "#",
  },
]);
</script>

<template>
  <h1 class="text-center bg-[#FFF8EE] py-7 branchHeading">Our Branch</h1>
  <div class=" bg-[#C33] text-white p-6">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-around">
      
      <!-- Dynamically render branch cards using v-for -->
      <div v-for="branch in branches" :key="branch.id" class="text-center">
        <h2 class="font-bold text-xl headingTitle mb-2">{{ branch.name }}</h2>
        <p class="subheadingTitle">{{ branch.address }}</p>
        <div class="flex justify-center time mt-2 space-x-2">
          <span>🕒 {{ branch.time }}</span>
          <span>📞 {{ branch.phone }}</span>
        </div>
        <a :href="branch.mapLink" class="text-green-500 clickGoogle hover:underline mt-2 block">Click to View Google Map</a>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* Custom styles */
.headingTitle {
  font-family: Roboto;
  font-size: 2.1875rem;
  font-weight: 700;
  color: #FFF8EE;
}

.subheadingTitle {
  font-family: Roboto;
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFF8EE;
}

.clickGoogle {
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--link-color, #4BFF3C);
}

.time {
  color: var(--3rd-color, #FFF8EE);
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 400;
}

.branchHeading {
  color: var(--second-color, #2A435D);
  font-family: Roboto;
  font-size: 2.1875rem;
  font-weight: 700;
}
</style>
