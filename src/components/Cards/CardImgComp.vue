<template>
    <img v-if="image.cardFace === 'normal' " :src="image.img" alt="imagen.img">
    <div v-else>
        <img  :src="image.imgF" alt="">
        <img  :src="image.imgB" alt="">
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

    const show = ref(true)
  

</script>
<style scoped>

  















  

</style>