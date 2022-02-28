<template>
    <form @submit.prevent="LoginWithEmail(email, password)" class="h-full p-5 w-full border-2 border-[#402868]  bg-[#160927] rounded-b-lg" aria-label="Log In">
        <div class="xl:w-[75%] mx-auto flex flex-col space-y-7 h-full justify-center">
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
            <div class="flex justify-center">
                <p class="cursor-pointer text-white">Forgot Your Password?</p>
            </div>

            <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0 text-white">Or</p>
            </div>

            <div class="flex flex-row items-center justify-center space-x-10">
                <!-- <p class="text-lg mb-0 mr-4 text-white">Log in with</p> -->

                <AutoButton img="facebook" />

                <AutoButton @click="LoginWithGoogle()" img="google" />

                <AutoButton img="github" />
            </div>

        </div>
    </form>
</template>
  
<script setup>
import { ref } from "vue";
import { useUserStore } from '../../stores/userStore';

//Components
import AutoButton from '../buttons/AutoButton.vue';

    const email = ref('');
    const password = ref('');

    const userStore = useUserStore();


    const LoginWithGoogle = async () =>{
        userStore.signInWithGoogle();
    }

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
    form{
        border-radius: 0 0 20px 20px;
    }
    .input{
        background-color: #374151;
        border-bottom-width: 1px;
        border-radius: 0.125rem;
        border-color: rgb(255, 255, 255);
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