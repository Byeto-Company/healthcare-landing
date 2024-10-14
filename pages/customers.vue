<script setup lang="ts">

// imports

import { QUERY_KEYS } from "~/constants";
import { handleGetCustomers, initialPageParam } from "~/composables/api/customers/useGetCustomers";

// state

const { $queryClient: queryClient } = useNuxtApp();

// queries

onServerPrefetch(async () => {
    await queryClient.prefetchInfiniteQuery({
        queryKey: [QUERY_KEYS.customers],
        queryFn: ({ pageParam }) => handleGetCustomers(pageParam),
        initialPageParam
    });
});

</script>

<template>
    <section class="pt-20 w-full h-full flex flex-col items-center justify-center relative gap-[6.25rem] min-h-[70svh]">
        <!-- orbs -->
        <div class="size-[200px] z-lowest bg-primary/80 blur-[150px] absolute top-1/2 -left-10 -translate-y-1/2"></div>
        <div
            class="size-[200px] z-lowest bg-secondary/80 blur-[150px] absolute top-1/2 -right-10 -translate-y-1/2"></div>

        <div class="flex flex-col items-center container w-full pb-[4.25rem] z-high">

            <SectionTitle
                title="مشتریان خورشید رایان طلوع"
                description="در این قسمت با حوزه های فعالیت شرکت آشنا میشوید و شناختی کامل از تمامی خدمات شرکت و تیم قدرتمند ما پیدا میکنید"
            />

            <div class="w-full overflow-auto flex md:justify-center items-center ps-2 pe-8 pb-8">
                <table class="w-[70%] mt-20 rounded-200 [box-shadow:_0px_0px_20px_#00000010] z-higher">
                    <thead>
                    <tr>
                        <th class="w-1/4 py-0.5 ps-8">
                            <div class="flex items-center gap-3 py-5">
                                <i class="text-black fa-solid fa-hospital"></i>
                                <span class="font-semibold text-black whitespace-nowrap">نام بیمارستان همکار</span>
                            </div>
                        </th>
                        <th class="w-1/4 py-0.5 px-6">
                            <div class="flex items-center gap-3 py-5">
                                <i class="text-black fa-solid fa-calendar-days"></i>
                                <span class="font-semibold text-black whitespace-nowrap">تاریخ شروع همکاری</span>
                            </div>
                        </th>
                        <th class="w-1/4 py-0.5 px-6">
                            <div class="flex items-center gap-3 py-5">
                                <i class="text-black fa-solid fa-cube"></i>
                                <span class="font-semibold text-black whitespace-nowrap">نام نرم افزار</span>
                            </div>
                        </th>
                        <th class="w-1/4 py-0.5 px-6">
                            <div class="flex items-center justify-center gap-3 py-5">
                                <i class="text-black fa-solid fa-location-dot"></i>
                                <span class="font-semibold text-black whitespace-nowrap">محل بیمارستان</span>
                            </div>
                        </th>
                    </tr>
                    </thead>

                    <DataTable />

                </table>
            </div>

            <AddMoreButton />

        </div>

    </section>
</template>

<style scoped>

</style>