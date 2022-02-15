import { createRouter, createWebHashHistory } from "vue-router";
import HomeView  from "../views/HomeView.vue";
import AuthView from '../views/AuthView.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        children:[
            {
                path: '',
                name: 'DashBoard',
                component: () => import('../views/HomeViews/DashBoardView.vue'),
            },
            {
                path: 'Search',
                name: 'SearchGrid',
                component: () => import('../views/CardGridView.vue'),
            },      
            {
                path: 'Search/Card/:id',
                name: 'cardView',
                component: () => import('../views/CardView.vue')
            },
            {
                path: 'Sets',
                name: 'SetsView',
                component: () => import('../views/sets/SetsView.vue'),
            },
            {
                path: 'Sets/:code',
                name: 'SetView',
                component: () => import('../views/sets/SetView.vue'),
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
