<template>
    <div class="flex items-center border p-3 px-4 rounded-lg hover:cursor-pointer hover:bg-zinc-300 transition-all shadow-inner">
       <img class="rounded-full w-10" :src="pictureUrl" alt="user-picture">
       <div class="mx-4 mr-12">
            {{ firstName }}
       </div>
       <i class="fa-solid fa-play ml-auto"></i>
    </div>
</template>

<script setup>

defineProps([
    'firstName',
    'pictureUrl'
])

</script>