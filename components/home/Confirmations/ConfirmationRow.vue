<script setup lang="ts">

// imports

    import type { Confirmation } from '~/types/index'

// props

    withDefaults(defineProps<Confirmation>(), {
        direction: 'left'
    })
    

</script>

<template>
    <div class="flex items-center justify-between w-full" :class="direction == 'left' ? 'flex-row-reverse' : 'flex-row'">

        <div class="relative flex items-center w-1/2" :class="direction == 'left' ? 'justify-end' : 'justify-start'">
            <div class="relative w-1/5 h-max" :class="direction == 'right' ? 'hidden' : 'flex-center'">
            
                <svg viewBox="0 0 198 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M194.574 68.445L141 68.4449L88.8897 3.12846L2.99999 3.12872" stroke="#3B3D41" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg class="absolute w-full" viewBox="0 0 198 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M194.574 68.445L141 68.4449L88.8897 3.12846L2.99999 3.12872" class="stroke-primary" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span class="absolute -bottom-[40%] -right-[17%] p-2 shadow-lg size-10 z-normal bg-primary flex-center rounded-360">
                    <span class="bg-white size-full rounded-360 z-[1]"></span>
                </span>

            </div>
            <img :src="image" class="w-4/5 rounded-150 image-shadow" alt="confirmation-1">
            <div class="relative w-1/5 h-max" :class="direction == 'left' ? 'hidden' : 'flex-center'">

                <svg viewBox="0 0 198 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.42628 68.445L57 68.4449L109.11 3.12846L195 3.12872" stroke="#3B3D41" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg class="absolute w-full" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);" viewBox="0 0 198 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.42628 68.445L57 68.4449L109.11 3.12846L195 3.12872" class="stroke-primary" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span class="absolute -bottom-[40%] -left-[17%] p-2 shadow-lg size-10 z-normal bg-primary flex-center rounded-360">
                    <span class="bg-white size-full rounded-360 z-[1]"></span>
                </span>

            </div>
        </div>

        <span class="flex items-center w-1/2 text-3xl font-semibold text-white" :class="direction == 'left' ? 'justify-start' : 'justify-end'">
            {{ text }}
        </span>

    </div>
</template>

<style scoped>
    .image-shadow {
        box-shadow: 0px 0px 100px hsla(179, 79%, 45%, 0.038);
    }
</style>