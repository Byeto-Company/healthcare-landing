<script setup lang="ts">
// imports

import type { SwiperClass } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/vue";

// types

type Props = {
    activeProduct: number;
    products: Product[];
}

// props

const props = defineProps<Props>();

// states

const swiperInstance = ref<SwiperClass>();
const activeSlide = ref(1);

// computed

const activeItem = computed(() => {
    return props.products.find(p => p.id === props.activeProduct);
});

// methods

const onSwiper = (swiper: SwiperClass) => {
    swiperInstance.value = swiper;
};

const onSlideChange = () => {
    activeSlide.value = activeItem.value ? activeItem.value.slides[swiperInstance.value?.activeIndex ?? 0].id : 0;
};

</script>

<template>
    <div class="flex flex-col justify-center items-center gap-8 mt-16">
        <div class="w-[1000px] flex items-center gap-10">
            <button
                :disabled="swiperInstance?.isBeginning"
                :class="{'!grayscale' : swiperInstance?.isBeginning}"
                @click="swiperInstance?.slidePrev()"
                class="flex justify-center items-center shrink-0 size-[65px] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-right text-[24px] text-white"></i>
            </button>
            <swiper
                grab-cursor
                :slides-per-view="1"
                :space-between="50"
                centered-slides
                @swiper="onSwiper"
                @slide-change="onSlideChange"
                class="rounded-150 overflow-hidden w-full"
            >
                <swiper-slide v-for="slide in activeItem?.slides" :key="slide.id">
                    <div
                        class="w-full aspect-video bg-red-500 rounded-150 relative overflow-hidden flex items-center justify-center">
                        <img class="w-full h-full absolute object-cover" :src="slide.image" :alt="slide.description" />
                    </div>
                </swiper-slide>
            </swiper>
            <button
                :disabled="swiperInstance?.isEnd"
                :class="{'!grayscale' : swiperInstance?.isEnd}"
                @click="swiperInstance?.slideNext()"
                class="flex justify-center items-center shrink-0 size-[65px] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-left text-[24px] text-white"></i>
            </button>
        </div>
        <div class="flex justify-center items-center py-2">
            <span class="text-white font-bold text-3xl">
                {{ activeItem?.slides.find(s => s.id === activeSlide)!.description }}
            </span>
        </div>
        <div class="flex justify-center items-center gap-4">
            <button
                v-for="(_slide, index) in swiperInstance?.slides"
                @click="swiperInstance?.slideTo(index)"
                class="bg-gray-800 size-[12px] rounded-360 transition-all"
                :class="{'!bg-primary' : swiperInstance?.activeIndex === index}"
            >
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>