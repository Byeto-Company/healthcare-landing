<script setup lang="ts">
// imports

import useGetContent from "~/composables/api/useGetContent";

// queries

const { data: content } = useGetContent();

// meta

useHead({
    title: content.value?.meta.title,
    meta: [
        { name: "description", content: content.value?.meta.description },
        { name: "keywords", content: content.value?.meta.keywords },
    ],
});
</script>

<template>
    <div class="w-full h-full flex flex-col items-center gap-[6.25rem]">
        <Hero />
        <WorkFields />
        <Products />
        <Leaders />
        <Confirmations />
        <StateMap />
        <Demo />
        <AboutUs />
    </div>
</template>
