<template>
    <div class="mb-10 flex flex-col md:flex-row items-center justify-between">
        <user-search-bar @find-user="filterUsers"></user-search-bar>
        <simple-paginator @page-change="loadUsers" class="mt-3 md:m-0"></simple-paginator>
    </div>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-3 relative">
        <user-card v-for="user in users"
            @click="redirectToProfile(user)" 
            :key="user.id" 
            :first-name="user.firstName"
            :picture-url="user.picture"
        >
        </user-card>
        
        <div v-show="showLoader" class="absolute w-full h-full grid place-items-center bg-opacity-20 bg-gray-400">
            <loader></loader> 
        </div>
    </div>
    <div v-show="usersNotFound" class="text-center">
        {{ notFoundText }}
    </div>
</template>

<script setup>

import { ref, computed  } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import DummyApiService from '@/services/DummyApiService';
import UserSearchBar from '@/components/user/UserSearchBar.vue';
import UserCard from '@/components/user/UserCard.vue'
import Loader from '@/components/Loader.vue'
import SimplePaginator from '@/components/SimplePaginator.vue'

const store = useStore()
const router = useRouter()

const users = ref([])
const showLoader = ref(false)
const usersNotFound = ref(false)
const currPage = ref(1)

/**
 * Shows text if user not found
 */
const notFoundText = computed(() => {
    if(!users.value.length)
        return 'User not found'
    
    return ''
})

/**
 * Load users from the Dummy api 
 */
async function loadUsers(page = null) {
    if(page)
        currPage.value = page

    showLoader.value = true;

    let [error, data] = await DummyApiService.getUsers(currPage.value)
    if(error) {
        alert('Error fetching data')
        return;
    }

    users.value = data.data.data
    showLoader.value = false
}

/**
 * Filter user by firstName
 *  
 * @param {string} searchText 
 */
function filterUsers(searchText) {
    // This will make the users to reload in the input
    // is empty
    if(!searchText) {
        loadUsers() 
        return
    } else {
        // Filter users
        users.value = users.value.filter(user => {
            return user.firstName.toLowerCase().includes(searchText.toLowerCase())
        })
    }
    
    // Show user not found text if not user found
    usersNotFound.value = !users.value.length ? true : false
}

function redirectToProfile(userData) {
    store.commit('user/setUserData', userData) 
    router.push('/users/profile')
}

loadUsers()

</script>