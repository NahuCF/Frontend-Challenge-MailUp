<template>
    <div class="grid min-h-screen h-full p-3 place-items-center bg-gray-100">
        <div>
            <the-header></the-header>
            <div class="bg-white border rounded-lg p-3 shadow-sm min-h-[10rem]">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'

export default {
    components: {
        TheHeader,
    },
};
</script>