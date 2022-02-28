<template>
    <div class="container mx-auto bg-blue-900">

        <nav class="menu flex">
            <ul class="flex space-x-10">

                <!-- TODO Mejorar y optimizar esto -->
                <li @click="SetSet('allSets')">All</li>
                <li @click="SetSet('setsCoreExp')">Core/Exp</li>
                <li @click="SetSet('setsMasters')">Masters</li>
                <li @click="SetSet('setsCommander')">Commander</li>
                <li @click="SetSet('setsFunny')">Funny</li>
            </ul>
            <div>
                <!-- TODO IMPLEMENTAR SEARCH BAR COMPONENT -->
                <input v-model="filter" placeholder="Buscar planos" type="text">
                <!-- <button>Search</button> -->
            </div>
        </nav>

        <setsGrid v-if="sets == 'setsCoreExp'" :sets="setsCoreExp" />
        <setsGrid v-if="sets == 'allSets'" :sets="allSets" />
        <setsGrid v-if="sets == 'setsMasters'" :sets="setsMasters" />
        <setsGrid v-if="sets == 'setsCommander'" :sets="setsCommander" />
        <setsGrid v-if="sets == 'setsFunny'" :sets="setsFunny" />



    </div>

</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue';
import useSets from '../../services/useSets';
import setsGrid from '../../components/set/setsGrid.vue'

const sets = ref('setsCoreExp');

const setsCoreExp = ref([]);
const allSets = ref([]);
const setsMasters = ref([]);
const setsCommander = ref([]);
const setsFunny = ref([]);


const SetSet = (set) => {
    sets.value = set
};

const filter = ref();


const setsSearched = computed(() => (allSets.value.filter(
    (set) => {
        return set.name.toLowerCase().includes(filter.value);
    }
)));

onBeforeMount(() => {
    useSets.get()
        .then(({data}) =>{
            data.data.map( (set) => {
                allSets.value = [ ...allSets.value, set]
                if(set.set_type == "core" || set.set_type == "expansion" ){ //|| set.set_type == "masters"
                    setsCoreExp.value = [ ...setsCoreExp.value, set]
                }else if(set.set_type == "masters"){
                    setsMasters.value = [ ...setsMasters.value, set]
                }else if(set.set_type == "commander"){
                    setsCommander.value = [ ...setsCommander.value, set]
                }else if(set.set_type == "funny"){
                    setsFunny.value = [ ...setsFunny.value, set]
                }
            })
        });
        console.log(allSets.value)
})


     
</script>
<style scoped>



</style>