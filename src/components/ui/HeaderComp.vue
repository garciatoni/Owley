<template>
<nav class=" relative w-full flex flex-wrap items-center justify-between py-1 bg-[#160927] text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
    <div class="container mx-auto w-full flex flex-wrap items-center justify-between px-6">
        <button
        class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
        </svg>
        </button>

        <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
            <router-link :to="{ name: 'home' }" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                <img 
                    class="w-[45px] h   -[45px]"
                    src="../../assets/images/logo/owley_white_small.png" 
                    alt="Owley logo"
                >
            </router-link>

            <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                <li class="nav-item p-2">
                    <router-link 
                        :to="{ name: 'SetsView' }" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                    >
                        Sets
                    </router-link>
                </li>

                <li v-if="!userStore.user" class="nav-item p-2">
                    <router-link 
                        :to="{ name: 'AuthView' }" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                    >
                        Login
                    </router-link>
                </li>
                <li v-if="userStore.user" class="nav-item p-2">
                    <router-link 
                        :to="{ name: 'UserProfile' }" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                    >
                        Profile
                    </router-link>
                </li>
                <li v-if="userStore.user" @click="userStore.signOut()" class="nav-item p-2">
                    Logut
                </li>
            </ul>
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