import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

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

        // setUser(auth, Email, Username, Password){
        //     createUserWithEmailAndPassword(auth, Email, Password)
        //     .then((userCredential) => {
        //         const User = userCredential.user;
        //         this.user = User
        //         updateProfile(auth.currentUser, {displayName: Username})
        //             .then( console.log(user))
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //         });
        // },

        setUser(user){
            this.user = user
        }
            
    }
})