<template>
    <div class="container mx-auto">
        <div v-if="User">
            <div class="">
                <img 
                    v-if="!!User.photoURL" 
                    :src="User.photoURL" 
                    alt="Profile Photo"
                    class="w-[200px] h-[200px]
                    shadow-xl rounded-full"
                >
            </div>

            <i class="fa-solid fa-user"></i>
            <h1>{{User.displayName}}</h1>
            <h1>{{User.email}}</h1>
    
        </div>
    </div>
</template>
<script setup>
// import { useUserStore } from '../../stores/userStore';
import { auth } from "../../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from 'vue';

const User = ref(false);
onAuthStateChanged(auth, async (user) => {
    User.value = auth.currentUser;
    console.log(User.value)
});

  


</script>
<style scoped>

  



</style>