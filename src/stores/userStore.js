import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase.js';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
    }), 

    getters: {

        // getUser(){
        //     return this.user
        // },

    },

    actions: {
        test(){
            console.log('first')
        },

        sigInWhitEmail(Email, Username, Password){
            createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {displayName: Username});
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        },

        onAuthStateChanged(){
            onAuthStateChanged(auth, (user) => {
                if (user.displayName) {
                    this.user = user
                } else {
                    console.warn('No login')
                }
            });
        },

        loginWhitEmail(Email, Password){
            signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                this.user = user
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        }
            
    }
});
