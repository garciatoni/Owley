<template>



    <ul v-if="validSearch" class="grid grid-cols-4 gap-1 w-8/12 mx-auto m-10">
        <CardImgComp 
            v-for="card in cards.data" 
            @click="cardRoutePush(card.id)"
            :key="card.id" 
            :img="card.image_uris?.normal"
            :imgF="card.card_faces && card.card_faces[0]?.image_uris.normal"
            :imgB="card.card_faces && card.card_faces[1]?.image_uris.normal"
            :cardFace="card.layout"
        />
    </ul>

    <p v-else>
        No hay cartas
    </p>


</template>
  
<script setup>
import CardImgComp from '../components/Cards/CardImgComp.vue';
import { onMounted, ref, watch } from 'vue';
import useCardSearch from '../services/useCardSearch'
import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const cards = ref([])
    const validSearch = ref(false)
    const router = useRouter();

    const cardRoutePush = (id) => {
        router.push({
            name:'cardView',
            params: { id } 
        })
    }
 


    onMounted(() => {
        if(route.query.q){
            validSearch.value = true;
            useCardSearch.get(route.query.q)
                .then( ({data:card}) => ( cards.value = card, validSearch.value = true, console.log(cards.value.data)))
                .catch(() => (validSearch.value = false))
        }
        
    });

    watch(route, () => {
        if(route.query.q){
            validSearch.value = true;
            useCardSearch.get(route.query.q)
                .then( ({data:card}) => ( cards.value = card, validSearch.value = true))
                .catch(() => (validSearch.value = false))
        }else{
            validSearch.value = false;
        }
    });





  
</script>
  
<style scoped>


  
</style>