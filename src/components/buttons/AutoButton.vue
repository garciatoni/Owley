<template>
    <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="h-[45px] w-[45px] inline-block bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
            <i :class="`fa-brands fa-2xl text-[#ffffff] fa-${img}`"></i>
    </button>
</template>
<script setup>
defineProps({
    img: String,
})
</script>
<style scoped>

  

</style>