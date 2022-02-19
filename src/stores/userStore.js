import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase.js';
import router from '../router'

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
        setUser(user){
            this.user = user
        },

        signOut(){
            signOut(auth).then(() => {
                this.user = null
            }).catch((error) => {

            });
        },


        sigInWhitEmail(Email, Username, Password){
            const actionCodeSettings = {
                url: 'http://localhost:3000/Auth/FinishSignUp',
                handleCodeInApp: true,
                // iOS: {
                //   bundleId: 'com.example.ios'
                // },
                // android: {
                //   packageName: 'com.example.android',
                //   installApp: true,
                //   minimumVersion: '12'
                // },
                // dynamicLinkDomain: 'example.page.link'
            };
            sendSignInLinkToEmail(auth, Email, actionCodeSettings)
                .then(() => {
                    // The link was successfully sent. Inform the user.
                    // Save the email locally so you don't need to ask the user for it again if they open the link on the same device.
                    window.localStorage.setItem('emailForSignIn', Email);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ...
                });
            // createUserWithEmailAndPassword(auth, Email, Password).then((userCredential) => {
            //     const user = userCredential.user;
            //     updateProfile(auth.currentUser, {displayName: Username});
            //     // signOut(auth).then(() => {
            //     //     this.user = null
            //     // })

            // }).catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            // });
        },

        fetchUser(){
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    console.warn('Loged')
                    this.user = user
                    if(router.isReady() && router.currentRoute.value.path === '/Auth'){
                        router.push('/')
                    }
                    // else{
                    //     router.push('/')
                    // }
                }else{
                    console.warn('NO Loged');
                    this.user = null;
                }
            });
        },

        loginWhitEmail(Email, Password){
            signInWithEmailAndPassword(auth, Email, Password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    this.user = user;
                    router.push({name:'home'})
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                })
        }
            
    }
});
