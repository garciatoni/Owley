<template>
    <img v-if="image.cardFace == 'normal' || image.cardFace == 'host' || image.cardFace == 'split' || image.cardFace == 'leveler' || image.cardFace == 'flip'" :src="image.img" alt="imagen.img">
    <div v-else>
        <button class="border-2 z-10 border-black"  @click="spin()" >Log In</button>
        <img class="front " :style="{'transform': transformf}" :src="imgF[0].image_uris.normal" alt="">
        <img class="back" :style="{'transform': transformb}" :src="imgF[1].image_uris.normal" alt="">
    </div>

    <!-- <div v-if="image.cardFace == 'normal' || image.cardFace == 'host' || image.cardFace == 'split' || image.cardFace == 'leveler' || image.cardFace == 'flip'">

    </div>
    <div v-else>
        <img  :src="image.imgB" alt="">
        <img  :src="image.imgF" alt="">
        {{Array.isArray(image.imgF)}}
        {{image.imgF[0].image_uris.normal}}
        
        <br>
    </div> -->


</template>
<script setup>

import { ref } from 'vue';
const image = defineProps({
    img: String,
    imgF: Object,
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

/* img{
    max-width: 343px;
} */
.front, .back {
    backface-visibility: hidden;
    position: relative;
}
.front {
    position: absolute;
    z-index: 2;
    transition: all 0.5s linear;
    transform: scale(1);
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