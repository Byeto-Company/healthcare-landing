<script setup lang="ts">
// imports

import useGetContent from "~/composables/api/useGetContent";

// state

const config = useRuntimeConfig();

// queries

const { data: content } = useGetContent();

// computed

const imageUrl = computed(() => {
    return config.public.API_BASE_URL + content.value!.about_us.image;
});
</script>

<template>
    <section id="about-us-section" class="container w-full flex-center">
        <div
            class="w-full xl:w-[90%] flex items-center gap-12 max-lg:flex-col-reverse"
        >
            <div class="w-1/2 max-lg:hidden h-[30rem] overflow-hidden">
                <NuxtImg
                    :src="imageUrl"
                    class="object-cover size-full rounded-150"
                    alt="about-us"
                />
            </div>

            <div
                class="flex flex-col w-full max-lg:items-center max-lg:gap-3 lg:gap-6 lg:w-1/2"
            >
                <span class="font-semibold max-lg:text-center text-primary">
                    ما را بیشتر بشناسید
                </span>
                <span
                    class="text-2xl font-semibold text-black max-lg:text-center"
                >
                    {{ content!.about_us.title }}
                </span>
                <p
                    class="leading-loose text-justify text-gray-800 max-lg:text-center"
                >
                    {{ content!.about_us.description }}
                </p>

                <div
                    class="grid w-2/3 grid-cols-2 gap-10 max-lg:mt-5 persian-number"
                >
                    <div
                        v-for="(item, index) in content!.about_us.projects"
                        :key="index"
                        class="flex flex-col gap-1 max-lg:items-center"
                    >
                        <span
                            class="text-4xl font-semibold lg:text-5xl text-primary"
                        >
                            {{ item.count }}+
                        </span>
                        <span class="text-sm font-bold text-black">
                            {{ item.title }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
