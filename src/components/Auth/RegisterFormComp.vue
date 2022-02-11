<template>
      <form  class="h-full p-5  bg-[#160927] rounded-b-lg" aria-label="Log In">
        <div class="xl:w-[65%] mx-auto flex flex-col space-y-6 h-full justify-center">
            <h1 class="text-white text-[3em]">Sign In</h1>
            <div class="flex justify-center">
                <input type="email" class="text-white placeholder-white focus:placeholder-gray-400 bg-gray-700 border-b focus:outline-none py-2 px-4 rounded-sm shadow-lg w-full"  placeholder="Email" aria-label="email"/>
            </div>
            <div class="flex justify-center">
                <input type="text" class="text-white placeholder-white focus:placeholder-gray-400 bg-gray-700 border-b focus:outline-none py-2 px-4 rounded-sm shadow-lg w-full" placeholder="Username" aria-label="Username"/>
            </div>
            <div class="flex justify-center">
                <input type="password" class="text-white placeholder-white focus:placeholder-gray-400 bg-gray-700 border-b focus:outline-none py-2 px-4 rounded-sm shadow-lg  w-full" placeholder="Password" aria-label="Password"/>
            </div>
            <div class="flex justify-center">
                <input type="password" class="text-white placeholder-white focus:placeholder-gray-400 bg-gray-700 border-b focus:outline-none py-2 px-4 rounded-sm shadow-lg  w-full" placeholder="Confirm Password" aria-label="Password"/>
            </div>
            <div class="flex justify-center">
                <button type="submit" class="hover:text-[#160927] text-white shadow-lg border w-[50%] focus:outline-none py-2 px-4 rounded-sm hover:bg-white hover:border-[#160927]">
                    <p class="font-bold">Sign In</p>
                </button>
            </div>
            
            <button class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center border-2 font-bold text-white hover:text-black hover:bg-white rounded-sm p-1 items-center space-x-4">
                <img src="https://img.icons8.com/color/40/000000/google-logo.png"/>
                <p class="text-[20px] pr-5">
                    Sign In With Google
                </p>
            </button>

            <button class="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center border-2 font-bold text-white hover:text-black hover:bg-white rounded-sm p-1 items-center space-x-4">
               <img src="https://img.icons8.com/external-justicon-flat-justicon/40/000000/external-facebook-social-media-justicon-flat-justicon.png"/>
                <p class="text-[20px]">
                    Sign In With Facebook
                </p>
            </button>
        </div>
    </form>
</template>
  
<script setup>
  
  
</script>
  
<style scoped>

  
</style>