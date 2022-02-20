<template>
      <form @submit.prevent="SignInEmail(email, username, password, passwordConfirm)" class="h-full p-5  bg-[#160927] rounded-b-lg" aria-label="Log In">
        <div class="xl:w-[65%] mx-auto flex flex-col space-y-6 h-full justify-center">
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
            
            <AutoAuthButton img="https://img.icons8.com/color/40/000000/google-logo.png" text="Sign In With Google" />

            <AutoAuthButton img="https://img.icons8.com/external-justicon-flat-justicon/40/000000/external-facebook-social-media-justicon-flat-justicon.png" text="Sign In With Facebook" />

        </div>
    </form>
</template>
  
<script setup>
// import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
// import { auth } from '../../firebase';
import { useUserStore } from '../../stores/userStore';
import { ref } from "vue";

//Components
import AutoAuthButton from '../buttons/AutoAuthButton.vue';

    const userStore = useUserStore();
    const email = ref('');
    const username = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    

    const SignInEmail = async (Email, Username, Password, PasswordConfirm) => {
        if(Password!=PasswordConfirm || Password.length < 7) throw new Error('Las dos contraseñas deben coincidir');

        //TODO capturar errores y mostrarlos vue toast.

        userStore.sigInWhitEmail(Email, Username, Password);

        email.value = username.value = password.value = passwordConfirm.value = '';
    }

    



    
</script>
  
<style scoped>

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