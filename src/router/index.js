import { createRouter, createWebHistory } from "vue-router";
import HomeView  from "../views/HomeView.vue";
import AuthView from '../views/AuthViews/AuthView.vue';
import { useUserStore } from '../stores/userStore.js';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

const routes = [
    {
        path: '/',
        name: 'DashBoard',
        component: () => import('../views/HomeView.vue'),
        children:[
            {
                path: '',
                name: 'home',
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
                meta:{
                    requiresAuth: true,
                }
            },
            {
                path: 'Sets/:code',
                name: 'SetView',
                component: () => import('../views/sets/SetView.vue'),
            },
        ],  
    },
    {
        path: '/Auth',
        name: 'AuthView',
        component: () => import('../views/AuthViews/AuthView.vue'),
        children:[
            {
                path: '/FinishSignUp',
                name: 'finishSignUp',
                component: () => import('../views/AuthViews/finishSignUpView.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404Error',
        component: () => import('../views/404Views/404View.vue')
    },      
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
});

router.beforeEach((to, from, next) => {

    if(to.path === '/Auth' && auth.currentUser){
        next('/');
        return;
    }
    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser ){
        next('/Auth');
        return;
    }

    next();
})

export default router;
