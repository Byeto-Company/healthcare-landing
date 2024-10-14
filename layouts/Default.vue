<script setup lang="ts">

import useGetContent from "~/composables/api/useGetContent";

const { suspense } = useGetContent();

onServerPrefetch(async () => {
    await suspense();
});

</script>

<template>
    <div class="relative flex flex-col justify-between w-full h-full font-iran-yekan-x" dir="rtl">
        <Header />
        <main class="w-full pb-24 overflow-x-hidden">
            <slot />
        </main>
        <Footer />
    </div>
</template>
