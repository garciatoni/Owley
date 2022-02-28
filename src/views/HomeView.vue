<template>
    <!-- <h1>Home pge: {{template}}</h1>
    <button @click="templateStore.incrementBy(15)">a</button> -->
    <div class="min-h-[90vh]">
        <HeaderComp class="min-h-[5vh] sticky z-10 top-0" />
        <router-view></router-view>
    </div>
    <FooterCompVue class="min-h-[10vh]" />

</template>



<script  setup>
import FooterCompVue from '../components/ui/FooterComp.vue';
import HeaderComp from '../components/ui/HeaderComp.vue';



// const userStore = useUserStore();
// userStore.onAuthStateChanged();

// const ObtenerGetUser = userStore.getUser;

// import { useTemplateStore  } from '../stores/template';
// import { storeToRefs } from 'pinia';
// const templateStore = useTemplateStore();
// const {template} = storeToRefs(templateStore);



</script>

<style scoped>
    
</style>