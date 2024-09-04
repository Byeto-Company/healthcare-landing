<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
        <div dir="ltr">
            <VueQueryDevtools dir="ltr"/>
        </div>
    </NuxtLayout>
</template>
