<script setup lang="ts">

// types

    type Props = {
        title: string,
        isActive: boolean,
        items: [
            {
                title: string,
                path: string
            }
        ]
    }

// emit

    defineEmits(['update:isActive'])

// props
    
    defineProps<Props>()


</script>

<template>
    <div>
        <button 
            @click="$emit('update:isActive', isActive ? false : true)"
            type="button"
            :class="isActive ? '' : 'border-b border-gray-200'"
            class="flex items-center justify-between w-full gap-3 py-3 font-medium text-gray-500"
        >
            <span>{{ title }}</span>
            <i class="text-sm fa-solid fa-chevron-up"></i>
        </button>
        <div :class="isActive ? 'border-b border-gray-200' : 'hidden'" class="flex flex-col gap-4">
            <NuxtLink 
                v-for="(link, index) in items" 
                :key="index"
                :to="link.path"
            >
                {{ link.title }}
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>