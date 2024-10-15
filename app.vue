<script setup>
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
    <NuxtLayout>
        <NuxtPwaManifest />
        <NuxtPage />
        <VueQueryDevtools />
    </NuxtLayout>
</template>
