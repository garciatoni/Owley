import { defineStore } from "pinia";


export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
    }), 

    getters: {

        // getUser(){
        //     return this.user
        // },
        
        getUser: state => state.user,



    },

    actions: {
        incrementBy(value ){
            this.user = value;
        }
    }
})