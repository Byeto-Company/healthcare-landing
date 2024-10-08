<script setup lang="ts">
// imports

    import useGetHomepage from "~/composables/api/homepage/useGetHomePage";
    import { QUERY_KEYS } from "~/constants";

// state

    const { $queryClient: queryClient } = useNuxtApp();

// queries

    const { data: homepageData } = useGetHomepage()

    onServerPrefetch(async () => {
        await queryClient.prefetchQuery({
            queryKey: [QUERY_KEYS.homepage]
        })
    })

</script>

<template>
    <div class="w-full h-full flex flex-col items-center gap-[6.25rem]" v-if="homepageData">
        <Hero :heroData="homepageData.hero" :logo="homepageData.logo" />
        <WorkFields :workFieldsData="homepageData.work_fields" />
        <Products :productsData="homepageData.products" />
        <Leaders />
        <Confirmations />
        <StateMap />
        <Demo />
        <AboutUs />
    </div>
</template>
