<script setup>
const props = defineProps({
  name: String  // Update the type to String
});
</script>

<template>
  <div class="imagePart flexClass bg-center bg-cover bg-no-repeat">
    <h1 class="about">{{ props.name }}</h1>  <!-- No need for optional chaining here -->
    <p class="pText"> Eat the Food Enjoy the Moments and Achieve the Experience. </p>
  </div>
</template>

<style scoped>
.imagePart {
  width: 100%; /* Full width */
  height: 17.5rem; /* Keeps the height as specified */
  flex-shrink: 0;
  background-image: url('https://i.ibb.co.com/qkfbqvG/Rectangle-58.png');
}

.about {
  font-family: Roboto;
  font-size: 2.1875rem;
  font-weight: 700;
  line-height: normal;
  color: var(--3rd-color, #FFF8EE);
  text-align: center;
}

.pText {
  color: var(--3rd-color, #FFF8EE);
  text-align: justify;
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.flexClass {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
