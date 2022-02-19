<template>

    <div v-if="!auth.currentUser" id="background" class="h-screen flex divide-x-1 divide-[#ffffff]">

        <div id="menus" class="w-full lg:w-1/2 flex">

            <div class="mx-auto items-center h-full md:h-[75%] w-[99%] md:w-9/12 lg:w-11/12 xl:w-8/12 self-center" >
                
                <div class="flex flex-row justify-between border-b-1 mb-2 opacity-90 ">
                    <button :class="!active ? 'bg-[#160927]' : 'bg-[#745a94]' " @click="spin(false)" >Log In</button>
                    <button :class="active ? 'bg-[#160927]' : 'bg-[#745a94]' " @click="spin(true)" >Sign In</button>
                </div>

                <div id="carta" class="h-full opacity-70">
                    <LoginFormComponent v-bind:style="{'transform': transformf}" class="front"/>
                    <RegisterFormComp v-bind:style="{'transform': transformb}" class="back"/>
                </div>

            </div>
        </div>

        <div class="hidden lg:flex lg:w-1/2">
            <router-link class="text-white text-[7em]" to="/">home </router-link>
        </div>

    </div>

</template>
<script setup>
import { auth } from '../../firebase.js';
import { ref } from 'vue';
import LoginFormComponent from '../../components/Auth/LoginFormComp.vue';
import RegisterFormComp from '../../components/Auth/RegisterFormComp.vue';

const active = ref(false);
const transformf = ref('rotateY(0deg)');
const transformb = ref('rotateY(-180deg)');

const spin = (activo) => {
    if(active.value == activo) return;
    active.value = activo
    if(active.value){
        transformf.value = 'rotateY(180deg)';
        transformb.value = 'rotateY(0deg)';
    }else{
        transformf.value = '';
        transformb.value = 'rotateY(-180deg)'
    }
}



</script>
<style scoped>

#background{
    background-image: url('https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/c/ec386bc3-137b-49b5-8380-8daff470f0bc.jpg?1599710777');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    
}

#menus{
    backdrop-filter: blur(20px);
}

button{
    padding: 3px;
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    font-size: 2em;
    font: bold;
    color: white;
}
button:hover {
        background-color: #160927;
}


.front, .back {
    backface-visibility: hidden;
    position: relative;
}
.front {
    position: absolute;
    z-index: 2;
    transition: all 0.5s linear;
}
.back {
    transition: all 0.5s linear;
    transform: rotateY(180deg);
}
#carta {
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
}

</style>