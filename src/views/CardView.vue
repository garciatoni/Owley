<template>
    <div v-if="card != ''">
        <div id="background" :style="{ 'background-image': `url(${background})` }" class="min-h-[90vh]">
            <div class="flex flex-col xl:flex-row md:p-5 pt-5 w-full xl:w-8/12 lg:mx-auto">
                <div class="w-full xl:w-3/4">
                    <div class="xl:w-3/4 flex">
                        <CardComp 
                            class="xl:mt-5 p-2 md:p-0 xl:ml-3"
                            :img="card.image_uris.png" 
                            :cardFace="card.layout"
                        />
                    </div>
                </div>

                <div class="w-11/12 flex m-5 bg-white flex-col px-4  rounded-lg opacity-80" id="information">
                    <div class="bg-pink-300 w-4/6 mx-auto">
                        a
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import CardComp from '../components/Cards/CardImgComp.vue';
import CardService from '../services/useCardIdSearch';


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