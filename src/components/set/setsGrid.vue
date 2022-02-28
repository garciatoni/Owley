<template>
    <ul class="grid grid-cols-8 gap-8 w-11/12 mx-auto">
        
        <div 
            v-for="set in sets" :key="set.id"
            class="bg-pink-300 flex"
        >
            <img @click="setRoutePush(set.code)" :src="set.icon_svg_uri" :alt="set.code.name">
        </div>
    </ul>
</template>
<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
    sets: Array,
})

const router = useRouter()
const setRoutePush = (code) => {
    router.push({
        name:'SetView',
        params: { code } 
    })
}

console.log(props.sets)
  




</script>
<style scoped>

  





</style>