<template>
    <form  class="h-full p-5 w-full border-2 border-[#402868]  bg-[#160927] rounded-b-lg" aria-label="Log In">
        <div class="xl:w-[65%] mx-auto flex flex-col space-y-7 h-full justify-center">
            <h1 class="text-white text-[3em]">Log In</h1>
            <div class="flex justify-center">
                <input type="email" class="text-white placeholder-white focus:placeholder-gray-400 bg-gray-700 border-b focus:outline-none py-2 px-4 rounded-sm shadow-lg w-full" placeholder="Email" aria-label="email"/>
            </div>
            <div class="flex justify-center">
                <input type="password" class="text-white placeholder-white focus:placeholder-gray-400 bg-gray-700 border-b focus:outline-none py-2 px-4 rounded-sm shadow-lg  w-full" placeholder="Password" aria-label="Password"/>
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

            <button @click="LoginGoogle()" class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center border-2 font-bold text-white hover:text-black hover:bg-white rounded-sm p-1 items-center space-x-4">
                <img src="https://img.icons8.com/color/40/000000/google-logo.png"/>
                <p class="text-[20px] pr-5">
                    Log In With Google
                </p>
            </button>

            <button class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center border-2 font-bold text-white hover:text-black hover:bg-white rounded-sm p-1 items-center space-x-4">
               <img src="https://img.icons8.com/external-justicon-flat-justicon/40/000000/external-facebook-social-media-justicon-flat-justicon.png"/>
                <p class="text-[20px]">
                    Log In With Facebook
                </p>
            </button>
        </div>
    </form>
</template>
  
<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginGoogle = async () =>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}
  

  //LOG OUT
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

  
</script>
  
<style scoped>

  
</style>