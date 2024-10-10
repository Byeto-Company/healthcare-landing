<script setup lang="ts">
// meta

useSeoMeta({});

// imports

import useGetProduct from "~/composables/api/product/useGetProduct";

// state

const route = useRoute();
const config = useRuntimeConfig();

const currentAccordionId = ref<string | null>("accordion-1");

// queries

const slug = computed(() => route.params["slug"] as string);

const { data: product, suspense } = useGetProduct(slug);

onServerPrefetch(async () => {
    await suspense();
});

// computed

const thumbnailUrl = computed(() => {
    return `${config.public.API_BASE_URL}/${product.value?.thumbnail}`;
});
</script>

<template>
    <section
        class="w-full h-full flex flex-col container items-center gap-[4.25rem] min-h-[100svh]"
    >
        <div class="w-full lg:-mt-10 padding-main flex-center mt-[40px]">
            <div
                class="w-full h-[12rem] xs:h-[16rem] lg:h-[20rem] flex flex-col justify-center gap-6 xs:gap-10 bg-black rounded-150"
            >
                <div class="w-full gap-8 flex-center h-max">
                    <img
                        src="/title-shape-right.png"
                        loading="lazy"
                        class="scale-85 max-lg:hidden"
                    />

                    <h1 class="text-2xl font-semibold text-white xs:text-3xl">
                        {{ product?.name }}
                    </h1>

                    <img
                        src="/title-shape-left.png"
                        class="scale-85 max-lg:hidden"
                    />
                </div>

                <div class="gap-2.5 xs:gap-5 flex-center">
                    <span class="text-xs font-medium text-white xs:text-sm"
                        >محصولات</span
                    >

                    <i
                        class="text-xs text-white xs:text-sm fa-solid fa-chevron-left"
                    ></i>

                    <span
                        class="text-xs font-medium xs:text-sm text-gradient bg-gradient-to-r from-secondary to-primary"
                        >سیستم مدیریت اطلاعات بیمارستانی</span
                    >
                </div>
            </div>
        </div>

        <div class="flex items-start w-full gap-8 padding-main">
            <!-- content -->

            <article class="flex flex-col w-full gap-16 lg:w-9/12">
                <section class="flex flex-col gap-4">
                    <div class="w-full h-[16rem] rounded-150 overflow-hidden">
                        <NuxtImg
                            :src="thumbnailUrl"
                            alt="product-1"
                            densities="x1 x2"
                            class="object-fill size-full"
                        />
                    </div>

                    <p class="text-black leading-[2rem] text-justify">
                        {{ product?.description }}
                    </p>
                </section>

                <section class="flex flex-col gap-4">
                    <div
                        class="w-full px-6 py-5 bg-white [box-shadow:_0px_0px_10px_#00000020] rounded-100"
                    >
                        <span
                            class="font-bold text-gradient bg-gradient-to-r from-secondary to-primary"
                        >
                            ویژگی های محصول {{ product?.name }}
                        </span>
                    </div>

                    <div class="flex flex-col gap-3.5 mt-1 pr-5">
                        <div
                            v-for="(feature, index) in product?.features_list"
                            :key="index"
                            class="flex items-start gap-2"
                        >
                            <span
                                class="mt-3 size-2 rounded-360 bg-gradient-to-b from-secondary to-primary shrink-0"
                            ></span>
                            <p class="text-gray-500 leading-[2rem] text-sm">
                                {{ feature }}
                            </p>
                        </div>
                    </div>
                </section>

                <section class="flex flex-col gap-4">
                    <div
                        class="w-full px-6 py-5 bg-white [box-shadow:_0px_0px_10px_#00000020] rounded-100"
                    >
                        <span
                            class="font-bold text-gradient bg-gradient-to-r from-secondary to-primary"
                        >
                            قابلیت های محصول {{ product?.name }}
                        </span>
                    </div>

                    <div class="flex flex-col gap-8 pr-5 mt-1">
                        <span
                            v-for="(
                                capability, index
                            ) in product?.capability_list"
                            :key="index"
                            class="flex items-center gap-2.5"
                        >
                            <NuxtImg
                                src="/check.svg"
                                class="shrink-0 size-6 xs:size-9"
                            />
                            <span class="text-sm font-medium text-gray-500">
                                {{ capability }}
                            </span>
                        </span>
                    </div>
                </section>
            </article>

            <!-- aside -->

            <aside
                class="flex flex-col w-3/12 px-6 py-2 border-2 border-gray-200 h-max rounded-150 max-lg:hidden"
            >
                <AccordionItem
                    v-for="(item, index) in product?.categories"
                    :key="index"
                    :index="index + 1"
                    :title="item.name"
                    :id="`accordion-${index + 1}`"
                    v-model:currentAccordionId="currentAccordionId"
                    :items="item.product_list"
                />
            </aside>
        </div>
    </section>
</template>
