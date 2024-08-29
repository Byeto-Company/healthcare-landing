<script setup lang="ts">

// props

type SectionTitleProps = {
    title: string;
    description?: string;
}

defineProps<SectionTitleProps>();

</script>

<template>
    <div class="flex flex-col items-center justify-center gap-4">
        <h2 class="text-3xl font-semibold text-center text-black">
            {{ title }}
        </h2>
        <p class="text-lg text-gray-800 mt-2 text-center max-w-[700px]">
            {{ description }}
        </p>
    </div>
</template>

<style scoped>

</style>