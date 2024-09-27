<script setup>

</script>

<template>
  <h1 class="text-center bg-[#FFF8EE] py-7 branchHeading">Our Branch</h1>
    <div class=" bg-[#C33]  text-white p-6">
        <div class="max-w-7xl mx-auto flex justify-around">
              <!-- First Card -->
      <div class="text-center">
        <h2 class="font-bold text-xl headingTitle mb-2">Robert Food</h2>
        <p class="subheadingTitle">1986 Hilltop Drive Borger, TX 79007</p>
        <div class="flex justify-center time mt-2 space-x-2">
          <span>🕒 7:30 AM - 9:30 PM</span>
          <span>📞 +880 1630-225015</span>
        </div>
        <a href="#" class="text-green-500 clickGoogle hover:underline mt-2 block">Click to View Google Map</a>
      </div>
  
      <!-- Second Card -->
      <div class="text-center">
        <h2 class="font-bold text-xl headingTitle mb-2">Mark A. Reed Food</h2>
        <p class="subheadingTitle">4877 Rose Avenue New Orleans, LA 70112</p>
        <div class="flex justify-center time mt-2 space-x-2">
          <span>🕒 7:30 AM - 9:30 PM</span>
          <span>📞 +880 1630-225015</span>
        </div>
        <a href="#" class="text-green-500 clickGoogle hover:underline mt-2 block">Click to View Google Map</a>
      </div>
  
      <!-- Third Card -->
      <div class="text-center">
        <h2 class="font-bold text-xl headingTitle mb-2">Karie K. Hill Food</h2>
        <p class="subheadingTitle">1509 Peaceful Lane Cleveland, OH 44115</p>
        <div class="flex justify-center time mt-2 space-x-2">
          <span>🕒 7:30 AM - 9:30 PM</span>
          <span>📞 +880 1630-225015</span>
        </div>
        <a href="#" class="text-green-500 clickGoogle hover:underline mt-2 block">Click to View Google Map</a>
      </div>
        </div>
    
    </div>
  </template>

<style scoped>


.headingTitle{
    font-family: Roboto;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFF8EE;

}

.subheadingTitle{
    font-family: Roboto;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
color: #FFF8EE;
}


.clickGoogle{
    font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
color: var(--link-color, #4BFF3C);
}

.time{
    color: var(--3rd-color, #FFF8EE);
font-family: Inter;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.branchHeading{
  color: var(--second-color, #2A435D);
/* H1 Heading 35px Roboto bold */
font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}
</style>