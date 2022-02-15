<template>
    <ul class="flex space-x-2">
        <li @click="filter = 'W'">White</li>
        <li @click="filter = 'U'">Blue</li>
        <li @click="filter = 'B'">Black</li>
        <li @click="filter = 'R'">Red</li>
        <li @click="filter = 'G'">Green</li>
        <li @click="filter = null">Colorless</li>
    </ul>
    <ul class="grid grid-cols-4 gap-2">
        <CardImgComp 
            v-for="card in cardsFilter" :key="card.id"
            @click="cardRoutePush(card.id)"
            :img="card.image_uris?.normal"
            :imgF="card.card_faces && card.card_faces[0]?.image_uris.normal"
            :imgB="card.card_faces && card.card_faces[1]?.image_uris.normal"
            :cardFace="card.layout"
        />
    </ul>
</template>
<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import CardImgComp from './CardImgComp.vue';
const url  = defineProps({
    url: String
});

const router = useRouter();
const filter = ref('')
const cardsList = ref([]);

const cardsFilter = computed(() => ((cardsList.value).filter(
    (card) =>{
        if(filter.value != ''){
            return (card.color_identity[0] == filter.value)
        }else{
            return card;
        }
    }
)));

console.log(cardsList.value)



const cardRoutePush = (id) => {
    router.push({
        name:'cardView',
        params: { id } 
    })
}


watch(url, () => (
    fetch(url.url)
        .then(resp => resp.json())
        .then((data) => (cardsList.value = data.data))
))

</script>
<style scoped>



</style>