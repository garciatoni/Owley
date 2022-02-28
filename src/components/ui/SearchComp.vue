<template>
    <form @submit.prevent="handleSubmit()" class="flex">
        <input 
            id="searchInput"
            v-model="q" 
            type="text" 
            placeholder="Search planes..."
            class="focus:outline-none"
        >
        <button 
            class="bg-white text-black flex items-center p-2" 
            type="submit"
            id="searchButton"
        >
            <i class="fa-solid text-[#160927] fa-xl fa-magnifying-glass"></i>
        </button>
    </form>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const router = useRouter();
    const q = ref('');

    const handleSubmit = () => {
        if(!q.value) return;
        router.push({
            name:'SearchGrid',
            query: {q: q.value}
        })
        q.value = "";
    }

</script>
<style scoped>

    #searchInput{
        border-radius: 30px 0 0 30px;
        color: black;
        font-weight: 700;
        padding: 0.4em;
        padding-left: 1em;
    }

    #searchButton{
        border-radius: 0 30px 30px 0;
        text-align: center;
    }

    #searchButton:focus{
        outline: none;
    }

    #searchInput:focus{
        outline: none;
    }



  

</style>