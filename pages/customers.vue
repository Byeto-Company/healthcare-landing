<script setup lang="ts">
import { useGetCustomers } from '~/composables/api/customers/useGetCustomers';

const { $queryClient: queryClient }: any = useNuxtApp()

// types

    type Customer = {
        name: string,
        date: string,
        appName: string,
        address: string,
    }

// state

    const { data: customers, suspense } = useGetCustomers()

    onServerPrefetch(async () => {
        await queryClient.prefetchQuery({
            queryKey: ['customers']
        })
    })

</script>

<template>
        <section class="w-full h-full flex flex-col items-center relative gap-[6.25rem] min-h-[100svh]">

            <!-- orbs -->
            <div class="size-[200px] z-lowest bg-primary/80 blur-[150px] absolute top-1/2 -left-10 -translate-y-1/2"></div>
            <div class="size-[200px] z-lowest bg-secondary/80 blur-[150px] absolute top-1/2 -right-10 -translate-y-1/2"></div>

            <div class="flex flex-col items-center w-full pb-[4.25rem] z-high">

                <SectionTitle
                    title="مشتریان خورشید رایان طلوع"
                    description="در این قسمت با حوزه های فعالیت شرکت آشنا میشوید و شناختی کامل از تمامی خدمات شرکت و تیم قدرتمند ما پیدا میکنید"
                />

                <table class="w-[70%] mt-20 rounded-200 [box-shadow:_0px_0px_20px_#00000010] z-higher">

                    <thead>
                        <tr>
                           <th class="w-1/4 py-0.5 ps-8">
                                <div class="flex items-center gap-3 py-5">
                                    <i class="text-black fa-solid fa-hospital"></i>
                                    <span class="font-semibold text-black">نام بیمارستان همکار</span>
                                </div>
                            </th>
                           <th class="w-1/4 py-0.5">
                                <div class="flex items-center gap-3 py-5">
                                    <i class="text-black fa-solid fa-calendar-days"></i>
                                    <span class="font-semibold text-black">تاریخ شروع همکاری</span>
                                </div>
                            </th>
                           <th class="w-1/4 py-0.5">
                                <div class="flex items-center gap-3 py-5">
                                    <i class="text-black fa-solid fa-cube"></i>
                                    <span class="font-semibold text-black">نام نرم افزار</span>
                                </div>
                            </th>
                           <th class="w-1/4 py-0.5">
                                <div class="flex items-center justify-center gap-3 py-5">
                                    <i class="text-black fa-solid fa-location-dot"></i>
                                    <span class="font-semibold text-black">محل بیمارستان</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody
                        class="[&>*:nth-child(odd)]:bg-[#00000005]"
                    >
                        <tr
                            v-for="(customer, index) in customers"
                            :key="index"
                        >
                            <th class="w-1/4 py-0.5 ps-8">
                                <div class="flex py-5 font-medium text-black/50">
                                    {{ customer.name }}
                                </div>
                            </th>
                           <th class="w-1/4 py-0.5">
                                <div class="flex py-5 font-medium text-black/50">
                                    {{ customer.date }}
                                </div>
                            </th>
                           <th class="w-1/4 py-0.5">
                                <div class="flex py-5 font-medium text-black/50">
                                    {{ customer.appName }}
                                </div>
                            </th>
                           <th class="w-1/4 py-0.5">
                                <div class="flex justify-center py-5 font-medium text-black/50">
                                    {{ customer.address }}     
                                </div>
                            </th>
                        </tr>
                    </tbody>

                </table>

                <div class="w-[70%] mt-20 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] relative">

                    <button class="absolute px-8 py-2 text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-max flex-center rounded-360 bg-primary">
                        نمایش بیشتر +
                    </button>

                </div>
                

            </div>

    </section>
</template>

<style scoped>

</style>