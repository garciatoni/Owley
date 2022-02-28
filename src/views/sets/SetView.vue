<template>

    <cardSetGrid :url="url" />

</template>
<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import useSetsId from '../../services/useSetsId';
    import cardSetGrid from '../../components/Cards/cardSetComp.vue';
    
    const {params:{code}} = useRoute();
    const url = ref('');

    useSetsId.get(code)
        .then(({data}) => url.value = data.search_uri, console.log(url.value))
  
</script>
<style scoped>

  

</style>