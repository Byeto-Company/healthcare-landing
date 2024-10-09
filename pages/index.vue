<script setup lang="ts">

import useGetContent from "~/composables/api/useGetContent";

const { suspense } = useGetContent();

onServerPrefetch(async () => {
    await suspense();
});

</script>

<template>
    <div class="w-full h-full flex flex-col items-center gap-[6.25rem]">
        <Hero />
        <WorkCategories />
        <Products />
        <Leaders />
        <Confirmations />
        <StateMap />
        <Demo />
        <AboutUs />
    </div>
</template>
