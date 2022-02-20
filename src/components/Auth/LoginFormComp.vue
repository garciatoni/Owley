<template>
    <form @submit.prevent="LoginWithEmail(email, password)" class="h-full p-5 w-full border-2 border-[#402868]  bg-[#160927] rounded-b-lg" aria-label="Log In">
        <div class="xl:w-[65%] mx-auto flex flex-col space-y-7 h-full justify-center">
            <h1 class="text-white text-[3em]">Log In</h1>
            <div class="flex justify-center">
                <input 
                    autocomplete 
                    v-model="email"
                    type="email" 
                    class="focus:placeholder-gray-400 input" 
                    placeholder="Email" 
                    aria-label="email"
                />
            </div>
            <div class="flex justify-center">
                <input 
                    v-model="password"
                    type="password" 
                    class="focus:placeholder-gray-400 input" 
                    placeholder="Password" 
                    aria-label="Password"
                />
            </div>
            <div class="flex justify-start items-center">
                <input class="form-checkbox h-5 w-5" type="checkbox" id="remember" name="remember">
                <label for="remember" class="px-2 text-lg text-white">Remember Me</label>
            </div>
            <div class="flex justify-center">
                <button type="submit" class="hover:text-[#160927] text-white shadow-lg border w-[50%] focus:outline-none py-2 px-4 rounded-sm hover:bg-white hover:border-[#160927]">
                    <p class="font-bold">Log In</p>
                </button>
            </div>
            <div @click="logut()" class="flex justify-center">
                <p class="cursor-pointer text-white">Forgot Your Password?</p>
            </div>

            <AutoAuthButton @click="LoginWithGoogle()" img="https://img.icons8.com/color/40/000000/google-logo.png" text="Log In With Google" />

            <AutoAuthButton img="https://img.icons8.com/external-justicon-flat-justicon/40/000000/external-facebook-social-media-justicon-flat-justicon.png" text="Log In With Facebook" />

        </div>
    </form>
</template>
  
<script setup>
// import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../firebase.js';
import { ref } from "vue";
import { useUserStore } from '../../stores/userStore';
import { useRouter } from "vue-router";
import AutoAuthButton from '../buttons/AutoAuthButton.vue';

    const email = ref('');
    const password = ref('');

    const router = useRouter();
    const userStore = useUserStore();


    //TODO Pasar el login con google a pinia.
    // const LoginWithGoogle = async () =>{
        //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
        //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;
    //             const user = result.user;
    //             userStore.setUser(user);

    //             router.push({
        //                 name:'home',
    //             })

    //         }).catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             const email = error.email;
    //             const credential = GoogleAuthProvider.credentialFromError(error);
    //         });
    // }

    const LoginWithEmail = (Email, Password) => {
        
        //TODO capturar errores y mostrarlos vue toast.


        userStore.loginWhitEmail(Email, Password)

        email.value = password.value = '';


    }

    const logut = () => {
        userStore.signOut();
    }
  
  
</script>
  
<style scoped>
    .input{
        background-color: #374151;
        border-bottom-width: 1px;
        border-radius: 0.125rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 100%;
    }

    .input:focus{
        outline: none;
    }

    ::placeholder{
        color: #ffffff;
    }
</style>