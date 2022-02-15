<template>
<img v-if="image.cardFace == 'normal' || image.cardFace == 'host' " :src="image.img" alt="imagen.img">
    <div v-else>
        <button class="border-2 z-10 border-black"  @click="spin()" >Log In</button>
        <img  class="front " v-bind:style="{'transform': transformf}" :src="image.imgF" alt="">
        <img class="back" v-bind:style="{'transform': transformb}" :src="image.imgB" alt="">
    </div>


</template>
<script setup>

import { ref } from 'vue';
const image = defineProps({
    img: String,
    imgF: String,
    imgB: String,
    cardFace: String,
})

const active = ref(false);
const transformf = ref('rotateY(0deg)');
const transformb = ref('rotateY(-180deg)');
const spin = () => {
    active.value = !active.value
    if(active.value){
        transformf.value = 'rotateY(180deg)';
        transformb.value = 'rotateY(0deg)';
    }else{
        transformf.value = 'rotateY(0deg)';
        transformb.value = 'rotateY(-180deg)'
    }
}
  

</script>
<style scoped>

img{
    max-width: 343px;
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
    /* position: absolute; */
    transition: all 0.5s linear;
    transform: rotateY(180deg);
}
#carta {
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
}
</style>