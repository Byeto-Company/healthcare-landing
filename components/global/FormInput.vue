<script setup lang="ts">

// emit

    defineEmits(['update:modelValue'])

// types

    type Props = { 
        label: string,
        theme: 'light' | 'dark',
        modelValue: string,
        id: string,
        invalid?: {
            status: boolean,
            message: string
        }
    }

// props

    defineProps<Props>()

</script>

<template>
    <div class="flex flex-col gap-1.5">
        <label 
            :for="id" 
            class="pr-1.5"
            :class="{
                'text-white' : theme == 'dark',
                'text-gray-950' : theme == 'light'
            }"
        >
            {{ label }}
        </label>
        <input 
            @change="$emit('update:modelValue', $event.target.value)" 
            :id="id" 
            class="w-full h-12 border px-4 outline-none  focus:border-primary transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-100 focus:bg-[#25272A]"
            :class="{
                'ring-offset-[#19191A] text-white bg-[#19191A] border-gray-600' : theme == 'dark',
                'ring-offset-white text-black bg-white border-gray-300' : theme == 'light'
            }"    
        >
    </div>
</template>

<style scoped>

</style>