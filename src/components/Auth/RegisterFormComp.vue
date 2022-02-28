<template>
      <form @submit.prevent="SignInEmail(email, username, password, passwordConfirm)" class="h-full p-5 w-full border-2 border-[#402868] bg-[#160927] rounded-b-lg" aria-label="Log In">
        <div class="xl:w-[75%] mx-auto flex flex-col space-y-6 h-full justify-center">
            <h1 class="text-white text-[3em]">Sign In</h1>
            <div class="flex justify-center">
                <input 
                    class="focus:placeholder-gray-400"
                    v-model="email"
                    type="email"   
                    placeholder="Email" 
                    aria-label="email"/>
            </div>
            <div class="flex justify-center">
                <input 
                    class="focus:placeholder-gray-400"
                    v-model="username"
                    type="text" 
                    placeholder="Username" 
                    aria-label="Username"
                />
            </div>
            <div class="flex justify-center">
                <input 
                    class="focus:placeholder-gray-400"
                    v-model="password"
                    type="password" 
                    placeholder="Password" 
                    aria-label="Password"
                />
            </div>
            <div class="flex justify-center">
                <input 
                    class="focus:placeholder-gray-400"
                    v-model="passwordConfirm"
                    type="password" 
                    placeholder="Confirm Password" 
                    aria-label="passwordConfirm" 
                >
            </div>
            <div class="flex justify-center">
                <button type="submit" class="hover:text-[#160927] text-white shadow-lg border w-[50%] focus:outline-none py-2 px-4 rounded-sm hover:bg-white hover:border-[#160927]">
                    <p class="font-bold">Sign In</p>
                </button>
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
import { useUserStore } from '../../stores/userStore';
import { ref } from "vue";

//Components
import AutoButton from '../buttons/AutoButton.vue';

    const userStore = useUserStore();
    const email = ref('');
    const username = ref('');
    const password = ref('');
    const passwordConfirm = ref('');

    const LoginWithGoogle = async () =>{
        userStore.signInWithGoogle();
    }
    

    const SignInEmail = async (Email, Username, Password, PasswordConfirm) => {
        if(Password!=PasswordConfirm || Password.length < 7) throw new Error('Las dos contraseñas deben coincidir');

        //TODO capturar errores y mostrarlos vue toast.

        userStore.sigInWhitEmail(Email, Username, Password);

        email.value = username.value = password.value = passwordConfirm.value = '';
    }

    



    
</script>
  
<style scoped>
    form{
        border-radius: 0 0 20px 20px;
    }

    input{
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

    input:focus{
        outline: none;
    }

    ::placeholder{
        color: #ffffff;
    }
  
</style>