<template>
    <div class="flex items-center">
        <div>
            <div class="flex items-center relative">
                <input 
                    v-model="searchText" 
                    class="rounded-full border p-1 px-3 pr-24 md:pr-3 focus:border-blue-400 focus:outline-none transition-colors md:w-max" 
                    placeholder="First name..." 
                    type="text"> 
                <button 
                    @click="findUser"
                    class="rounded-full border p-1 px-3 bg-blue-400 hover:bg-blue-500 transition-colors font-semibold md:ml-4 absolute right-0 md:static "
                >
                    SEARCH
                </button>
            </div>
            <div v-show="inputError" class="text-xs text-red-500 ml-2 mt-1">
                {{ inputError }}
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed,watch } from 'vue'

// Define emits
const emit = defineEmits(['find-user'])

const searchText = ref('')

/**
 * Allow only letters in input
 */
const inputError = computed(() => {
    if(searchText.value && !(/^[A-Za-z.-]+$/.test(searchText.value))) {
        return 'Can only contain letters'
    }
})
    
// Avoid spaces
watch(searchText, (newValue) => {
    searchText.value = newValue.split(' ').join('')
});

/**
 * Emits the find-user event with the input value
 */
function findUser() {
    if(inputError.value) {
        alert('You have errors in seach bar')
        return
    }

    emit('find-user', searchText.value)
    searchText.value = ''
}

</script>

