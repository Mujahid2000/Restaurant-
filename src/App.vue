<script setup>
import {  RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue';
import Footer from './views/Footer.vue'
import BranchSection from './components/Home/BranchSection.vue';
import AuthProvider from './Config/AuthProvider.vue';
</script>

<template>
    <AuthProvider>
        <Navbar/>
        <RouterView />
        <BranchSection/>
        <Footer/>
    </AuthProvider>


</template>

<style scoped>

</style>
