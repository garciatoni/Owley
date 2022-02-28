<template>
    <div class="container mx-auto pt-5">
        <ul v-if="validSearch" class="grid grid-cols-5 gap-2">
            <CardImgComp 
                v-for="card in cards.data" :key="card.id"
                @click="cardRoutePush(card.id)"
                id="zoom"
                class="rounded-[0.74rem]"
                :cardFace="card.layout"
                :img="card.image_uris?.normal"
                :imgF="card.card_faces"
            />
        </ul>   
        <p v-else>
            No hay cartas
        </p>
    </div>
        
</template>
  
<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useCardSearch from '../services/useCardSearch'

import CardImgComp from '../components/Cards/CardImgComp.vue';

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


#zoom {
    transition: transform .2s;
    transform: scale(1);
    
}
#zoom:hover {
    transform: scale(1.07);
    z-index: 5;
}
</style>