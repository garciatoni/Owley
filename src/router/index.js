import { createRouter, createWebHashHistory } from "vue-router";
import HomeView  from "../views/HomeView.vue";
import AuthView from '../views/AuthView.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children:[
            {
                path: '',
                name: 'DashBoard',
                component: () => import('../views/HomeViews/DashBoardView.vue'),
                alias: '/',
            },
            {
                path: 'Search',
                name: 'SearchGrid',
                component: () => import('../views/HomeViews/CardGridView.vue')
            },      
            {
                path: 'Card',
                name: 'cardView',
                component: () => import('../views/CardView.vue')
            },     
        ],  
    },
    {
        path: '/AuthView',
        name: 'AuthView',
        component: AuthView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404Error',
        component: () => import('../views/404Views/404View.vue')
    },      
]



















const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
