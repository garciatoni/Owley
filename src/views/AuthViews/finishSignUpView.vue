<template>

    <h1>VERIFY YOUR EMAIL</h1>
    <router-link :to="{ name: 'AuthView' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Login
    </router-link>


</template>

<script setup>
import { useUserStore } from '../../stores/userStore';
// const userStore = useUserStore();
// userStore.verifyEmail();

</script>

<style scoped>




</style>