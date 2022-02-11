<template>
    <ul class="grid grid-cols-4 gap-1 w-8/12 mx-auto m-10">
        <CardComp 
            v-for="card in cards.data" 
            :key="card.id" 
            :img="card.image_uris?.normal"
            :imgF="card.card_faces && card.card_faces[0].image_uris.normal"
            :imgB="card.card_faces && card.card_faces[1].image_uris.normal"
            :cardFace="card.layout"
        />
    </ul>
</template>
  
<script setup>
import CardComp from '../../components/Cards/CardImgComp.vue';

import { ref } from 'vue';
import SearchService from '../../services/SearchService'

    const cards = ref([])

    SearchService.get('jace')
        .then( ({data:card}) => ( cards.value = card, console.log(cards.value.data)))





  
</script>
  
<style scoped>


  
</style>