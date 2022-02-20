import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail, signOut, updateProfile, signInWithPopup, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
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
                router.push({name: "home"})
            }).catch((error) => {

            });
        },

        // verifyEmail(){
        //     if (isSignInWithEmailLink(auth, window.location.href)) {
        //         // Additional state parameters can also be passed via URL.
        //         // This can be used to continue the user's intended action before triggering
        //         // the sign-in operation.
        //         // Get the email if available. This should be available if the user completes
        //         // the flow on the same device where they started it.
        //         let email = window.localStorage.getItem('emailForSignIn');
        //         if (!email) {
        //           // User opened the link on a different device. To prevent session fixation
        //           // attacks, ask the user to provide the associated email again. For example:
        //           email = window.prompt('Please provide your email for confirmation');
        //         }
        //         // The client SDK will parse the code from the link for you.
        //         signInWithEmailLink(auth, email, window.location.href)
        //           .then((result) => {
        //             // Clear email from storage.
        //             signOut(auth).then(() => {
        //                 this.user = null
        //             })
        //             console.log(result)
        //             window.localStorage.removeItem('emailForSignIn');
                    
        //             // You can access the new user via result.user
        //             // Additional user info profile not available via:
        //             // result.additionalUserInfo.profile == null
        //             // You can check if the user is new or existing:
        //             // result.additionalUserInfo.isNewUser
        //           })
        //           .catch((error) => {
        //             // Some error occurred, you can inspect the code: error.code
        //             // Common errors could be invalid email and invalid or expired OTPs.
        //           });
        //       }
        // },


        sigInWhitEmail(Email, Username, Password){
            // const actionCodeSettings = {
            //     url: 'http://localhost:3000/Auth/FinishSignUp',
            //     handleCodeInApp: true,
            // };
            // sendSignInLinkToEmail(auth, Email, actionCodeSettings)
            //     .then(() => {
            //         alert('Se ha enviado un un correo de activación a su correo electrónico.')
            //         // The link was successfully sent. Inform the user.
            //         // Save the email locally so you don't need to ask the user for it again if they open the link on the same device.
            //         window.localStorage.setItem('emailForSignIn', Email);
            //     })
            //     .catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //         // ...
            //     });
            
            createUserWithEmailAndPassword(auth, Email, Password).then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {displayName: Username});
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert('Se ha enviado un un correo de activación a su correo electrónico.')
                });
                // signOut(auth).then(() => {
                //     this.user = null
                // })

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        },

        fetchUser(){
            onAuthStateChanged(auth, async (user) => {
                if (user?.emailVerified) {
                    console.warn(user)
                    this.user = user
                    if(router.isReady() && router.currentRoute.value.path === '/Auth'){
                        router.push('/')
                    } else{
                      router.push('/')
                    }
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
