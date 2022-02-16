<template>
    <button 
        class="transition ease-in-out delay-10 hover:-translate-y-1 
            hover:scale-110 duration-300 flex border-2 
            font-bold text-white hover:text-black hover:bg-white 
            rounded-sm p-1 items-center space-x-5"
    >
        <img class="pl-10" :src="img"/>
        <p class="text-[20px] pl-2">
            {{text}}
        </p>
    </button>
</template>
<script setup>
defineProps({
    img: String,
    text: String,
})
</script>
<style scoped>

  

</style>