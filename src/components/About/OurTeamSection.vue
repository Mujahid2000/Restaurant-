<script setup>
const data = [
    {
        id: 1,
        picture: 'https://i.ibb.co.com/sWcpc7Z/image-our-Team-1.jpg',
        name: 'Brian Adams',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. " +
        "Lorem ipsum dolor sit amet"
    },
    {
        id: 2,
        picture: 'https://i.ibb.co.com/sWPC8Ks/image-our-Team-2.jpg',
        name: 'Jhon Khan',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. " +
        "Lorem ipsum dolor sit amet"
    },
    {
        id: 3,
        picture: 'https://i.ibb.co.com/ZYYmZmq/image-our-Team-3.jpg',
        name: 'Jessica Biel',
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. " +
        "Lorem ipsum dolor sit amet"
    }
];

</script>

<template>

<div class=" py-12 max-w-7xl mx-auto">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold text-gray-800 team py-4 text-center">OUR TEAM</h2>
    <p class="text-gray-500 titleDescription">The Hardworking Team behind the restaurant</p>
  </div>

  <!-- Team Section -->
  <div class="flex justify-center space-x-8 pt-[8rem]">
    <!-- Team Member 1 -->
     <div v-for="singleData in data" :key="singleData.id">
         <div class="w-[21.4375rem] h-[21.4375rem] border-[3px] rounded-full border-[#c55]">
             <div class="flex flex-col justify-end pt-28">
                 <h1 class="text-center titleText py-3">{{ singleData.name }}</h1>
                 <p class="descriptionText">{{ singleData.about }}</p>
     
             </div>
             <img :src='singleData.picture' alt="" class="rounded-full absolute -mt-[26rem] ml-[8rem]">
         </div>
         <div class="flex justify-center mt-8 space-x-7">
        <a href="#" class="text-red-500 text-xl"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-red-500 text-xl"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="text-red-500 text-xl"><i class="fab fa-instagram"></i></a>
        <a href="#" class="text-red-500 text-xl"><i class="fab fa-linkedin-in"></i></a>
        </div>
     </div>
    </div>

 


  <!-- Social Icons Section -->
  
</div>

</template>

<style scoped>
.circleDiv{
width: 21.4375rem;
height: 21.4375rem;
}

.descriptionText{
    color: var(--primary-color, #C33);
text-align: center;
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 14.5rem;
margin-left: auto;
margin-right: auto;
}

.titleText{
    color: var(--primary-color, #C33);
text-align: center;
font-family: Roboto;
font-size: 1.5625rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.team{
    color: var(--second-color, #2A435D);
text-align: center;
/* H1 Heading 35px Roboto bold */
font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.titleDescription{
    color: var(--second-color, #2A435D);
/* H1 Heading 18px Roboto Regular */
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>