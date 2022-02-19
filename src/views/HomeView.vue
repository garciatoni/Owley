<template>
    <!-- <h1>Home pge: {{template}}</h1>
    <button @click="templateStore.incrementBy(15)">a</button> -->
    <div class="min-h-[95vh]">
        <HeaderComp class="min-h-[5vh]" />
        <router-view></router-view>
    </div>
    <FooterCompVue class="min-h-[5vh]" />

</template>

<script  setup>
import FooterCompVue from '../components/ui/FooterComp.vue';
import HeaderComp from '../components/ui/HeaderComp.vue';


// const ObtenerGetUser = userStore.getUser;

// import { useTemplateStore  } from '../stores/template';
// import { storeToRefs } from 'pinia';
// const templateStore = useTemplateStore();
// const {template} = storeToRefs(templateStore);



</script>

<style scoped>
    
</style>