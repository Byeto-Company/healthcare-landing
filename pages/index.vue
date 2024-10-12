<script setup lang="ts">
import useGetContent from "~/composables/api/useGetContent";

const { suspense } = useGetContent();

onServerPrefetch(async () => {
    console.log("asdasd");

    const x = await suspense();
    console.log(x);
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
