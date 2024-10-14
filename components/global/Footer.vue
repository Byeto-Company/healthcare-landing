<script setup lang="ts">
// imports

import useGetContent from "~/composables/api/useGetContent";

// state

const { $vScrollTo: vScrollTo } = useNuxtApp();

// queries

const { data: content } = useGetContent();

</script>

<template>
    <div class="w-full mt-24 shadow-sm z-higher bg-pattern-hex bg-gray-950">
        <div
            class="container w-full h-full gap-12 flex-col-center padding-main"
        >
            <div
                class="max-md:flex-col bg-primary w-full -mt-24 px-6 md:px-[3.5rem] py-10 md:py-[3rem] flex items-center justify-between [background-image:_url('/pattern-curve.png')] [background-size:_80%] rounded-250"
            >
                <div
                    class="flex flex-col w-full md:w-1/2 items-start gap-[1.7rem] max-md:items-center"
                >
                    <span
                        class="text-3xl font-semibold text-white md:text-4xl whitespace-nowrap max-md:text-center"
                    >
                        {{ content?.footer.title }}
                    </span>

                    <p
                        class="text-white leading-[2rem] text-justify max-md:text-center"
                    >
                        {{ content?.footer.description }}
                    </p>
                </div>

                <div
                    class="flex max-md:mt-8 md:flex-col items-end gap-[1rem] max-sm:items-center max-md:justify-center max-md:flex-wrap"
                >
                    <button
                        @click="
                            vScrollTo.scrollTo('#demo-section', {
                                offset: -120,
                            })
                        "
                        class="py-2.5 text-white px-7 bg-white/20 rounded-360 whitespace-nowrap"
                    >
                        درخواست دمو
                    </button>

                    <NuxtLink
                        :to="{ name: 'contact-us' }"
                        class="py-2.5 bg-white px-7 text-primary rounded-360 whitespace-nowrap"
                    >
                        ارتباط با ما
                    </NuxtLink>
                </div>
            </div>

            <div
                class="w-full pb-12 border-b border-gray-800 flex-center max-md:flex-col max-md:gap-16 max-md:mt-8"
            >
                <div
                    class="flex flex-col gap-[1.7rem] w-full md:w-1/2 max-md:items-center"
                >
                    <img src="/logo-row.png" class="w-[10rem]" alt="logo" />
                    <div class="flex flex-col gap-2">
                        <p class="text-sm text-gray-200 max-md:text-center">
                            شرکت فنی مهندسی خورشید رایانه طلوع
                        </p>
                        <p class="text-sm text-gray-200 max-md:text-center">
                            {{ content?.footer.address }}
                        </p>
                    </div>
                    <div class="flex items-center gap-8 max-md:justify-center">
                        <a v-for="link in content?.nav_links" :href="link.link" class="text-gray-200">
                            {{ link.name }}
                        </a>
                    </div>
                </div>

                <div
                    class="flex items-start justify-end w-full gap-8 md:w-1/2 lg:gap-16 max-md:flex-col max-md:items-center"
                >
                    <div
                        class="flex flex-col items-start gap-[1rem] max-md:items-center"
                    >
                        <span class="text-primary">ایمیل</span>
                        <span
                            class="text-gray-300"
                            v-for="email in content?.footer.emails"
                        >
                            {{ email }}
                        </span>
                    </div>

                    <div
                        class="flex flex-col items-start gap-[1rem] max-md:items-center"
                    >
                        <span class="text-primary">تلفن های تماس</span>
                        <span
                            style="direction: ltr !important"
                            class="text-gray-300"
                            v-for="phone in content?.footer.phones"
                        >
                            {{ phone }}
                        </span>
                    </div>
                </div>
            </div>

            <div
                class="flex items-center justify-between w-full pb-6 -mt-6 max-sm:flex-col max-md:gap-6"
            >
                <p class="text-gray-500">
                    @2024 شرکت فنی مهندسی خورشید رایانه طلوع
                </p>

                <div class="flex items-center gap-7">
                    <a v-for="social in content?.footer.socials" :href="social.link">
                        <i
                            class="text-2xl text-gray-500 fa-brands"
                            :class="{
                                'fa-whatsapp' : social.soical === 'واتساپ',
                                'fa-instagram' : social.soical === 'اینستاگرام',
                                'fa-telegram' : social.soical === 'تلگرام',
                                'fa-twitter' : social.soical === 'تویتر',
                            }"
                        ></i>
                    </a>

<!--                    <i class="text-2xl text-gray-500 fa-brands fa-instagram"></i>-->
<!--                    <i class="text-2xl text-gray-500 fa-brands fa-telegram"></i>-->
<!--                    <i class="text-2xl text-gray-500 fa-brands fa-twitter"></i>-->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
