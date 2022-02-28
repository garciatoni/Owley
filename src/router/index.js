import { createRouter, createWebHistory } from "vue-router";
// import HomeView  from "../views/HomeView.vue";
// import AuthView from '../views/AuthViews/AuthView.vue';
// import { useUserStore } from '../stores/userStore.js';
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
            {
                path: 'Profile',
                name: 'UserProfile',
                component: () => import('../views/AuthViews/UserProfileView.vue'),
                meta:{
                    requiresAuth: true,
                }
            },
        ],  
    },
    {
        path: '/Auth',
        name: 'AuthView',
        component: () => import('../views/AuthViews/AuthView.vue'),
    },
    // {
    //     path: '/Auth/FinishSignUp',
    //     name: 'finishSignUp',
    //     component: () => import('../views/AuthViews/finishSignUpView.vue'),
    // },
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
    // const userStore = useUserStore()

    if(to.path === '/Auth' && !!auth.currentUser?.emailVerified === true ){
        next('/');
        return;
    }
    if(to.path === '/Auth/FinishSignUp' && !!auth.currentUser?.emailVerified === true){
        next('/');
        return;
    }
    if(to.matched.some(record => record.meta.requiresAuth)){
        onAuthStateChanged(auth, async (user) => {
            if(user){
                if(to.matched.some(record => record.meta.requiresAuth) && user.emailVerified === false){
                    console.log('first')
                    router.push('/Auth')
                    return;
                }
            }else if (!user){
                router.push('/Auth')
                return;
            }
        });
    }

    next();
    

})

export default router;
