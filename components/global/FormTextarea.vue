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
        <textarea 
            @change="$emit('update:modelValue', $event.target.value)" 
            :id="id" 
            class="w-full border resize-none p-4 outline-none h-[15rem] focus:border-primary transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-100"
            :class="{
                'ring-offset-[#19191A] text-white bg-[#19191A] border-gray-600 focus:bg-[#25272A]' : theme == 'dark',
                'ring-offset-white text-black bg-white border-gray-300 focus:bg-[#f6f8fa]' : theme == 'light'
            }"    
        />
    </div>
</template>

<style scoped>

</style>