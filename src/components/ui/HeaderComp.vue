<template>
    <nav class="flex items-center justify-between flex-wrap bg-[#160927]">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <router-link :to="{ name: 'DashBoard' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Home
                </router-link>
                <router-link :to="{ name: 'SetsView' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Sets
                </router-link>

                <!-- <p>{{userStore.user.displayName}}</p> -->

                <router-link v-if="!userStore.user" :to="{ name: 'AuthView' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Login
                </router-link>

            </div>

            <SearchComp />
        </div>
    </nav>
</template>
  
<script setup>
import SearchComp from './SearchComp.vue';
import { useUserStore } from '../../stores/userStore';

const userStore = useUserStore();


    

  
  
</script>
  
<style scoped>

  
</style>