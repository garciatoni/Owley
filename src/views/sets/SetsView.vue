<template>

    <ul class="grid grid-cols-7 gap-5 w-11/12 mx-auto">
        <div v-for="set in sets" :key="set.id">
            <img @click="setRoutePush(set.code)" :src="set.icon_svg_uri" alt="">
        </div>
    </ul>


</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useSets from '../../services/useSets';

const sets = ref([]);
const router = useRouter();

const setRoutePush = (code) => {
    router.push({
        name:'SetView',
        params: { code } 
    })
}

useSets.get()
    .then(({data}) =>(
        data.data.map( (set) => {
            if(set.set_type == "core" || set.set_type == "expansion" || set.set_type == "masters"){
                sets.value = [...sets.value, set]
            }
        }),
        console.log(sets.value)
    ))
     
</script>
<style scoped>



</style>