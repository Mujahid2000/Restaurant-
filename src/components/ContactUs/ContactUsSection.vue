<script setup>
</script>

<template>
  <div class="imagePart px-4 md:px-0 flexClass bg-center bg-cover bg-no-repeat">
   <h1 class="about">Contact Us</h1>
   <p class="pText max-w-[31.25rem]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.</p>
  </div>
</template>

<style scoped>
.imagePart {
  width: 100%; /* Full width */
  height: 17.5rem; /* Keeps the height as specified */
  flex-shrink: 0;
  background-image: url('https://i.ibb.co.com/NL0QS1f/image-contact-bg.png');
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
