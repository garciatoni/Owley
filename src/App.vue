<script setup>
import { onMounted } from 'vue';
import { useUserStore } from './stores/userStore';
//Reviso si hay usuarios conectados y los añado a pinia user.
  const userStore = useUserStore();
  onMounted(() => {
    userStore.onAuthStateChanged();
  });
</script>

<template>
  <router-view ></router-view>
</template>

<style>


</style>
