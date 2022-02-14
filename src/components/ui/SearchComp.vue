<template>
    <form @submit.prevent="handleSubmit()" class="flex">
        <input v-model="q" type="text" placeholder="Search planes...">
        <button 
            class="border text-white border-white" 
            type="submit"
        >
            Search
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

  

</style>