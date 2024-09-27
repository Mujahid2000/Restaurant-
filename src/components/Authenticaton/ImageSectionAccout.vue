<script setup>


</script>

<template>
  <div class="imagePart flexClass bg-center bg-cover bg-no-repeat">
   <h1 class="about">My Account</h1>
   
  </div>
</template>

<style scoped>
.imagePart {
  width: 100%; /* Full width */
  height: 17.5rem; /* Keeps the height as specified */
  flex-shrink: 0;
  background-image: url('https://i.ibb.co.com/qkfbqvG/Rectangle-58.png');
}

.about{
    font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
color: var(--3rd-color, #FFF8EE);
text-align: center;

}

.pText{
color: var(--3rd-color, #FFF8EE);
text-align: justify;
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
}

.flexClass{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
