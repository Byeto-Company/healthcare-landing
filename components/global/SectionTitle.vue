<script setup lang="ts">

// props

type SectionTitleProps = {
    title: string;
    description?: string;
    theme?: 'light' | 'dark';
}

withDefaults(defineProps<SectionTitleProps>(), {
    theme: 'light'
})

</script>

<template>
    <div class="flex flex-col items-center justify-center gap-4">
        <h2 class="text-2xl lg:text-3xl font-semibold text-center" :class="theme == 'light' ? 'text-black' : 'text-white'">
            {{ title }}
        </h2>
        <p class="lg:text-lg mt-2 text-center max-w-[700px] px-4" :class="theme == 'light' ? 'text-gray-800' : 'text-gray-200'">
            {{ description }}
        </p>
    </div>
</template>

<style scoped>

</style>