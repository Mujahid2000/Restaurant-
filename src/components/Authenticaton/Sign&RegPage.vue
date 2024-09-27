<script setup>
import Login from './Login.vue';
import Registration from './Registration.vue';






</script>

<template>
  <div class="max-w-7xl mx-auto py-12">
    <div class="flex flex-col md:flex-row justify-evenly gap-10">
      
      <!-- Login Form -->
      <Login/>

      <!-- Registration Form -->
      <Registration/>

    </div>
  </div>
</template>

<style scoped>
.login {
  color: var(--primary-color, #C33);
  font-family: Roboto, sans-serif;
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  text-align: center;
}

.userName {
  color: var(--primary-color, #C33);
  font-family: Roboto, sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
}

.input {
  width: 100%;
  height: 2.5rem;
  border-radius: 6px;
}
</style>
