<script setup lang="ts">
// emit

defineEmits(["update:modelValue"]);

// types

type Props = {
    label: string;
    theme: "light" | "dark";
    modelValue: string;
    id: string;
    max?: number;
    validator?: any;
};

// props

defineProps<Props>();
</script>

<template>
    <div class="flex flex-col gap-1.5 w-full">
        <label
            :for="id"
            class="pr-1.5"
            :class="{
                'text-white': theme == 'dark',
                'text-gray-950': theme == 'light',
            }"
        >
            {{ label }}
        </label>
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            :id="id"
            :value="modelValue"
            :max="max ?? undefined"
            class="w-full h-12 px-4 transition-all border outline-none focus:border-primary focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-100"
            :class="{
                '!border-red-700 !ring-red-700': validator?.$error,
                'ring-offset-[#19191A] text-white bg-[#19191A] border-gray-600 focus:bg-[#25272A]':
                    theme == 'dark',
                'ring-offset-white text-black bg-white border-gray-300 focus:bg-[#f6f8fa]':
                    theme == 'light',
            }"
        />
        <span v-if="validator?.$error" class="text-sm text-red-700 pr-1.5">
            {{ validator?.$errors[0].$message }}
        </span>
    </div>
</template>
