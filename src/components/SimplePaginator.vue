<template>
    <div class="flex items-center gap-2">
        <div :class="{ 'hover:cursor-not-allowed hover:bg-slate-200': currPage <= 1  }" @click="emitPageChange(currPage - 1)" class="p-1 px-3 bg-slate-200 rounded-lg hover:bg-slate-300 hover:cursor-pointer">
            <i class="fa-solid fa-chevron-left text-xl"></i>
        </div>
       {{ currPage }}
       <div @click="emitPageChange(currPage + 1)" class="p-1 px-3 bg-slate-200 rounded-lg hover:bg-slate-300 hover:cursor-pointer">
            <i class="fa-solid fa-chevron-right text-xl"></i> 
       </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const emit = defineEmits(['page-change'])

const currPage = ref(1)

function emitPageChange(page) {
    if(page < 1)
        return;
        
    currPage.value = page
    emit('page-change', page)
}

</script>