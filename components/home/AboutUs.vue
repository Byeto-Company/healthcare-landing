<script setup lang="ts">


import useGetContent from "~/composables/api/useGetContent";

const config = useRuntimeConfig();

const { data: content } = useGetContent();

const imageUrl = computed(() => {
    return config.public.API_BASE_URL + content.value!.about_us.image
})

</script>

<template>
    <section class="w-full container flex-center">

        <div class="w-full xl:w-[90%] flex items-center gap-12 max-lg:flex-col-reverse">

            <div class="max-lg:hidden w-1/2">

                <img :src="imageUrl" class="rounded-150 w-full" alt="about-us">

            </div>

            <div class="flex flex-col w-full lg:w-1/2 gap-6">

                <span class="font-semibold text-primary">
                    ما را بیشتر بشناسید
                </span>
                <span class="text-2xl font-semibold text-black">
                    {{content!.about_us.title}}
                </span>
                <p class="leading-loose text-gray-800 text-justify">
                    {{content!.about_us.description}}
                </p>

                <div class="grid w-2/3 grid-cols-2 gap-10 persian-number">

                    <div v-for="item in content!.about_us.projects" class="flex flex-col gap-1">
                        <span class="text-4xl lg:text-5xl font-semibold text-primary">
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

<style scoped>

</style>