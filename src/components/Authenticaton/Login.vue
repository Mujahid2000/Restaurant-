<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { errorMessages } from 'vue/compiler-sfc';
const router = useRouter();
const email = ref('');
const password = ref('');
const toast = useToast();
const login = inject('login');
const loginWithGoogle = inject('loginWithGoogle');
const errorMessage = ref(''); 
const handleLogin = async() =>{
    try {
        await login(email.value, password.value);
        email.value = '';
        password.value = ''
        router.push('/')
        toast.success('Login Successfully')
    } catch (error) {
        const errorCode = error.code;
        switch(errorCode){
          case 'auth/invalid-email':
          errorMessages.value = 'Invalid email address formate';
          break;
          case 'auth/user-disable':
            errorMessages.value='This user account is disable.';
            break;
            case 'auth/user-not-found':
              errorMessages.value = 'No user found with this email';
              break;
              case 'auth/wrong-password':
                errorMessages.value = 'Incorrect password. Please try again';
                break;
                default:
                  errorMessages.value = 'Login failed. Please check your credentials';
        }
        console.log(error);
    }
}
</script>

<template>

<div class="bg-[#FFF8EE] p-8 rounded-lg shadow-md w-96">
    <h1 class="login mb-6">Login</h1>
    <form @submit.prevent="handleLogin">
      <!-- Email Input -->
      <div class="flex flex-col mb-4">
        <label for="login-username" class="userName mb-2">Username or email address *</label>
        <input v-model="email" id="login-username" type="text" class="input border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c33]" required>
      </div>
      <!-- Password Input -->
      <div class="flex flex-col mb-4">
        <label for="login-password" class="userName mb-2">Password *</label>
        <input v-model="password" id="login-password" type="password" class="input border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c33]" required>
      </div>
      <!-- Error Message -->
      <p v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</p>
      <!-- Login Button -->
      <button class="w-full py-2 mb-4 rounded bg-[#C33] text-white font-medium active:bg-[#952828] hover:bg-[#b22b2b] transition duration-200">Log in</button>
      <!-- Remember Me Checkbox -->
      <div class="flex items-center mb-4">
        <input type="checkbox" id="remember-login" class="form-checkbox h-4 w-4 text-[#c33] border-[#c33]">
        <label for="remember-login" class="userName ml-2">Remember me</label>
      </div>
      <!-- Lost Password Link -->
      <p class="text-green-500 text-sm"><a href="#" class="underline">Lost your password?</a></p>
    </form>
    <!-- Google Login Button -->
    <button type="button" @click="loginWithGoogle" class="w-full py-2 my-4 mb-4 rounded bg-[#C33] text-white font-medium active:bg-[#952828] hover:bg-[#b22b2b] transition duration-200">Log in with Google</button>
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