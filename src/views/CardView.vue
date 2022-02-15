<template>
    <div v-if="background != ''" id="background" :style="{ 'background-image': `url(${background})` }" class="min-h-[90vh]">
        <div class="min-h-[90vh]" id="informacion">
            <div id="container" class="flex w-8/12 mx-auto min-h-[494px]">
                <div class="w-[39%] flex justify-end">
                    <div class="xl:w-3/4 p-2 bg-white">
                        <CardComp 
                            class=""
                            :img="card.image_uris?.normal" 
                            :imgF="card.card_faces && card.card_faces[0].image_uris.normal"
                            :imgB="card.card_faces && card.card_faces[1].image_uris.normal"
                            :cardFace="card.layout"
                        />
                    </div>
                </div>
                <div class="w-[32%] bg-pink-100">
                    <div class="m-3 bg-pink-300">
                        <h1 class="text-[20px]">{{card.name}}</h1> 
                        <h2>{{card.cmc}}</h2> 
                        <h3>{{card.oracle_text}}</h3>
                    </div>
                </div>
                <div class="w-[29%] bg-pink-300">
                    <div class="m-5 bg-pink-100">
                        <h1 @click="setRoutePush(card.set)">{{card.set_name}}</h1>
                        <ul>
                            <li v-for="print in prints" :key="print.id">
                                <p @click="cardRoutePush(print.id)">{{print.set_name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CardService from '../services/useCardIdSearch';
import CardComp from '../components/Cards/CardImgComp.vue';

    const route = useRoute();
    const router = useRouter();
    const card = ref([]);
    const prints = ref([])
    const background = ref('')

    const setRoutePush = (code) => {
        router.push({
            name:'SetView',
            params: { code } 
        })
    }
    const cardRoutePush = (id) => {
        router.push({
            name:'cardView',
            params: { id } 
        })
    }

   const getCard = (id) =>{ 
       CardService.get(id)
        .then( ({data}) => ( 
            card.value = data,
            card.value.layout == 'normal' ? background.value=data.image_uris.art_crop : background.value=data.card_faces[0].image_uris.art_crop,
            fetch(card.value.prints_search_uri)
                .then(resp => resp.json())
                .then(({data:print}) => (prints.value = print))
        ))
   };

   onMounted(() => {
        getCard(route.params.id);
   });

    watch(route, () => {
        if(!route.params.id) return;
        getCard(route.params.id)
    });

</script>
<style scoped>


    #background{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #informacion{
        backdrop-filter: blur(10px);
    }

  
</style>