<template>
    <div v-if="background != ''" id="background" :style="{ 'background-image': `url(${background})` }" class="">
        <div class="min-h-[85vh] p-2" id="informacion">
            <div id="container" class="bg-purple-300 p-2 container flex mx-auto">

                <div class="flex justify-center p-2 grow">
                    <div class="p-2 w-[80%]">

                        <CardComp 
                            class=""
                            :img="card.image_uris?.border_crop" 
                            :imgF="card.card_faces"
                            :cardFace="card.layout"
                        />

                    </div>
                </div>

                <div class="flex min-w-[37%] max-w-[37%] p-2">
                    <div class="bg-pink-300 w-[90%] mx-auto">
                        <h1 class="text-[20px]">{{card.name}}</h1> 
                        <h2>{{card.cmc}}</h2> 
                        <h3>{{card.oracle_text}}</h3>
                    </div>
                </div>
 
                <div class="min-w-[28%] p-2 max-w-[28%]">
                    <div class="bg-pink-100 w-[90%]  mx-auto">
                        <h1 class="py-3 text-center text-xl bg-slate-500" @click="setRoutePush(card.set)">{{card.set_name}}</h1>
                        <form class="flex px-3 py-1 bg-slate-400">
                            <input v-model="filter" type="text" placeholder="Search sets" name="filter" class="w-full outline-none">
                        </form>
                        <ul class="max-h-[485px] overflow-auto">
                            <li v-for="print in setsSearched" :key="print.id">
                                <p class="text-lg cursor-pointer p-1" @click="cardRoutePush(print.id)">{{print.set}}</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CardService from '../services/useCardIdSearch';
import CardComp from '../components/Cards/CardImgComp.vue';

    const route = useRoute();
    const router = useRouter();
    const card = ref([]);
    const prints = ref([]);
    const background = ref('');

    const filter = ref('');

    const setsSearched = computed(() => (prints.value.filter(
        (set) => {

            return set.set.toLowerCase().includes((filter.value).toLowerCase());
        }
    )));

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

   const getCard = async (id) =>  { 
        CardService.get(id)
        .then( ({data}) => ( 
            card.value = data,
            card.value.layout  == 'normal' || card.value.layout == 'host' || card.value.layout == 'split' || card.value.layout == 'leveler' || card.value.layout == 'flip' ? background.value=data.image_uris.art_crop : background.value=data.card_faces[0].image_uris.art_crop,
            fetch(card.value.prints_search_uri)
                .then(resp => resp.json())
                .then(({data:print}) => {
                    let cardReprintColection = [];
                    print.map( (carta) => {
                        cardReprintColection = [...cardReprintColection, { id: carta.id, set: carta.set_name}]
                    })
                    prints.value = cardReprintColection
                })
        ))
   };

   onBeforeMount(() => {
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
        z-index: 0;
    }

    #informacion{
        backdrop-filter: blur(10px);
    }

  
</style>