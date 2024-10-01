<template>
  <slot></slot>
</template>

<script setup>
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut, updateProfile } from 'firebase/auth';
import { computed, onMounted, provide, ref } from 'vue';
import { auth, googleProvider } from './firebase.config';

// Reactive state variables
const user = ref(null);
const loading = ref(true);
const error = ref(null);

// computed property to get the user's email
const email = computed(() => (user.value ? user.value.email : null))


// Initialize Firebase authentication state
const initAuth = () => {
  loading.value = true;
  error.value = null;

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;  // Update reactive user ref
    loading.value = false;
    if (currentUser) {
      console.log('User logged in now');
    } else {
      console.log('No user logged in');
    }
  }, (authError) => {
    error.value = authError;
    console.error('Error during auth state change:', authError);
    loading.value = false;
  });
};


// Mount the auth initialization
onMounted(() => {
  try {
    initAuth();
  } catch (err) {
    error.value = err;
    console.error('Error initializing Firebase Auth:', err);
  }
});



// Provide login, registration, and other auth-related functions
provide('login', async (email, password) => {
  try {
    loading.value = true;
    await signInWithEmailAndPassword(auth, email, password);
  } catch (loginError) {
    error.value = loginError;
    console.error('Login error:', loginError);
  } finally {
    loading.value = false;
  }
});

provide('register', async (name, email, password) => {
  try {
    loading.value = true;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
  } catch (registerError) {
    error.value = registerError;
    console.error('Register error:', registerError);
  } finally {
    loading.value = false;
  }
});

provide('loginWithGoogle', async () => {
  try {
    loading.value = true;
    await signInWithRedirect(auth, googleProvider);
  } catch (googleError) {
    error.value = googleError;
    console.error('Google sign-in error:', googleError);
  } finally {
    loading.value = false;
  }
});

provide('logOut', async () => {
  try {
    loading.value = true;
    await signOut(auth);
  } catch (logOutError) {
    error.value = logOutError;
    console.error('Logout error:', logOutError);
  } finally {
    loading.value = false;
  }
});



// Provide reactive states for user, loading, and error
// provide('email', user.email)
provide('user', user);
provide('loading', loading);
provide('error', error);
provide('email', email); //provide email separately as a computed property
</script>
