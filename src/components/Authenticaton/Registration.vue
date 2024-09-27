<script setup>
import { ref, inject, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const register = inject('register');

// Watch for changes and log the values to the console
watchEffect(() => {
  console.log('Name:', name.value);
  console.log('Email:', email.value);
  console.log('Password:', password.value);
});

const handleRegister = async () => {
  try {
    await register(name.value, email.value, password.value);
    router.push('/')
    // Clear the input fields after registration
    name.value = '';
    email.value = '';
    password.value = '';
    
    // Navigate to the homepage or another route after registration
    // router.push('/')
  } catch (error) {
    console.error('Registration failed:', error);
    alert('Registration failed: ' + error.message);
  }
};
</script>

<template>
    <div class="bg-[#FFF8EE] p-8 rounded-lg shadow-md w-96">
      <h1 class="login mb-6">Register{{ name }}</h1>
      <form @submit.prevent="handleRegister">
        <div class="flex flex-col mb-4">
          <label for="register-name" class="userName mb-2">Name *</label>
          <input v-model="name" id="register-name" type="text" class="input border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c33]" required>
        </div>
        <div class="flex flex-col mb-4">
          <label for="register-email" class="userName mb-2">Email address *</label>
          <input v-model="email" id="register-email" type="email" class="input border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c33]" required>
        </div>
        <div class="flex flex-col mb-4">
          <label for="register-password" class="userName mb-2">Password *</label>
          <input v-model="password" id="register-password" type="password" class="input border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c33]" required>
        </div>
        <button type="submit" class="w-full py-2 mb-4 rounded bg-[#C33] text-white font-medium active:bg-[#952828] hover:bg-[#b22b2b] transition duration-200">Register</button>
      </form>
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