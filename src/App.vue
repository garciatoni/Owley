<script setup>
import { onBeforeMount } from 'vue';
import { useUserStore } from './stores/userStore';
//Reviso si hay usuarios conectados y los añado a pinia user.

onBeforeMount(() => {
  const userStore = useUserStore();
  userStore.fetchUser();
})
  // onMounted(() => {
  // });
</script>

<template>
  <router-view ></router-view>
</template>

<style>


</style>
