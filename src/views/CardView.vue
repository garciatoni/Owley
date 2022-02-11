<template>
    <div v-if="card != ''">
        <div id="background" :style="{ 'background-image': `url(${background})` }" class="flex min-h-[90vh]">
            <div class="flex flex-row p-5 pt-5 lg:w-8/12 lg:mx-auto">
                <div class="w-1/2">
                    <div class="relative w-8/12">
                        <CardComp :img="card.image_uris.png" :cardFace="card.layout"/>
                    </div>
                </div>
                <div class=" w-1/2 flex-col px-4 h-[60%] bg-white rounded-lg opacity-80" id="information">
                   asdasdada
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import CardComp from '../components/Cards/CardImgComp.vue';
import CardService from '../services/CardService';


    const card = ref('');
    const background = ref('')

    CardService.get('c8817585-0d32-4d56-9142-0d29512e86a9')
        .then( ({data}) => ( 
            card.value = data,
            console.log(card.value.layout),
            card.value.layout == 'normal' ? background.value=data.image_uris.art_crop : background.value=data.card_faces[0].image_uris.art_crop
        ))


    
</script>
  
<style scoped>


    #background{
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #informacion{
        backdrop-filter: blur(10px);
        height: 100%;
        flex: 1;
    }

  
</style>