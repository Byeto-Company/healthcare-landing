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
    <div class="flex flex-col gap-1">
        <label :for="id">{{ label }}</label>
        <input @change="$emit('update:modelValue', $event.target.value)" :id="id" class="w-full h-12 border bg-[#19191A] outline-none focus:border-primary-100 rounded-100 focus:bg-[#25272A]">
    </div>
</template>

<style scoped>

</style>