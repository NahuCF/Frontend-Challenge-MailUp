<template>
    <div>
        <div class="flex justify-between gap-10 items-center">
           <div class="flex items-center">
                <img class="rounded-full w-10 mr-4" :src="userData.picture" alt="user-img">
                {{ userData.firstName }}
           </div> 
           <router-link to="/users">
                <div class="p-1 px-3 bg-slate-200 rounded-lg hover:bg-slate-300 hover:cursor-pointer flex items-center">Volver</div>
           </router-link>
        </div>
        <div class="border rounded-lg p-3 bg-white mt-5">
            <div>
                <span class="font-bold">ID:</span>
                {{ userData.id }}
            </div>
            <div>
                <span class="font-bold">First Name:</span>
                {{ userData.firstName }}
            </div>
            <div>
                <span class="font-bold">Last Name:</span>
                {{ userData.lastName }}
            </div>
            <div>
                <span class="font-bold">Title:</span>
                {{ userData.title }}
            </div>
        </div>
    </div>
</template>

<script setup>

import { useStore } from "vuex";

const store = useStore()

const userData = store.getters['user/getUserData']
</script>