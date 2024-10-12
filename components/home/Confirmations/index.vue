<script setup lang="ts">
// imports

import type { Confirmation } from "~/types/index";
import useGetContent from "~/composables/api/useGetContent";

// state

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { data: content } = useGetContent();

const confirmations = ref<Confirmation[]>([
    {
        image: "/confirmation.png",
        text: "نام مدرک اینجا قرار میگیرد",
        direction: "left",
    },
    {
        image: "/confirmation.png",
        text: "نام مدرک اینجا قرار میگیرد",
        direction: "right",
    },
    {
        image: "/confirmation.png",
        text: "نام مدرک اینجا قرار میگیرد",
        direction: "left",
    },
    {
        image: "/confirmation.png",
        text: "نام مدرک اینجا قرار میگیرد",
        direction: "right",
    },
]);

// life-cycle

onMounted(() => {
    setTimeout(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".middle-line",
            { height: "0%" },
            {
                height: "100%",
                scrollTrigger: {
                    trigger: "#confirmations",
                    start: "40% bottom",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );
    }, 100);
});
</script>

<template>
    <section id="confirmations-section" class="w-full bg-pattern-hex">
        <div
            id="confirmations"
            class="w-full flex flex-col items-center container py-[6.25rem]"
        >
            <SectionTitle
                :title="content!.certificates.title"
                :description="content!.certificates.description"
                theme="dark"
            />

            <div class="relative min-h-[20rem] mt-28 w-full">
                <span
                    class="absolute top-0 p-5 -translate-x-1/2 z-higher size-14 flex-center left-1/2 rounded-360 bg-primary"
                >
                    <i class="text-2xl text-white fa-solid fa-medal"></i>
                </span>

                <span
                    class="absolute top-0 w-[3px] rounded-full h-full -translate-x-1/2 bg-gray-800 left-1/2 z-high"
                ></span>
                <span
                    class="middle-line absolute top-0 w-[4px] rounded-full h-full -translate-x-1/2 bg-primary left-1/2 z-high"
                ></span>

                <div
                    class="top-0 flex flex-col gap-10 py-24 mx-auto w-[90%] z-higher"
                >
                    <ConfirmationRow
                        v-for="(confirmation, index) in content!.certificates.items"
                        :key="index"
                        :direction="index % 2 === 0 ? 'left' : 'right'"
                        :image="confirmation.image"
                        :text="confirmation.description"
                        :index="index + 1"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
