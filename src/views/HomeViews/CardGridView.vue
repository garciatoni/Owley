<template>



    <ul class="grid grid-cols-4 gap-1 w-8/12 mx-auto m-10">
        <CardComp 
            v-for="card in cards.data" 
            :key="card.id" 
            :img="card.image_uris?.normal"
            :imgF="card.card_faces && card.card_faces[0]?.image_uris.normal"
            :imgB="card.card_faces && card.card_faces[1]?.image_uris.normal"
            :cardFace="card.layout"
        />
    </ul>


</template>
  
<script setup>
import CardComp from '../../components/Cards/CardImgComp.vue';
import { onMounted, ref, watch } from 'vue';
import useCardSearch from '../../services/useCardSearch'
import { useRoute } from 'vue-router';

    const route = useRoute();
    const cards = ref([])
    // const validSearch = ref(false)

    onMounted(() => {
        // console.log(route.query.q)
        useCardSearch.get(route.query.q)
            .then( ({data:card}) => ( cards.value = card, console.log(cards.value)));
        
    });

    watch(route, () => {
        useCardSearch.get(route.query.q)
            .then( ({data:card}) => ( cards.value = card));
        // useCardSearch.get(route.query.q)
        //     .then( ({data:card}) => ( cards.value = card, validSearch.value = true))
        //     .catch(() => (validSearch.value = false))
    });





  
</script>
  
<style scoped>


  
</style>