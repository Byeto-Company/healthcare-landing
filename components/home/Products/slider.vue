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
    <div class="flex flex-col items-center justify-center gap-8 mt-16">
        <div class="w-[1000px] flex items-center gap-10">
            <button
                :disabled="swiperInstance?.isBeginning"
                :class="{'!grayscale' : swiperInstance?.isBeginning}"
                @click="swiperInstance?.slidePrev()"
                class="flex justify-center items-center shrink-0 size-[65px] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-right text-[24px] text-white"></i>
            </button>
            <Swiper
                grab-cursor
                :slides-per-view="1"
                :space-between="50"
                @swiper="onSwiper"
                @slide-change="onSlideChange"
                class="w-full overflow-hidden rounded-150"
            >
                <SwiperSlide v-for="slide in activeItem?.slides" :key="slide.id">
                    <div
                        class="relative flex items-center justify-center w-full overflow-hidden bg-red-500 aspect-video rounded-150">
                        <img class="absolute object-cover w-full h-full" :src="slide.image" :alt="slide.description" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <button
                :disabled="swiperInstance?.isEnd"
                :class="{'!grayscale' : swiperInstance?.isEnd}"
                @click="swiperInstance?.slideNext()"
                class="flex justify-center items-center shrink-0 size-[65px] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-left text-[24px] text-white"></i>
            </button>
        </div>
        <div class="flex items-center justify-center py-2">
            <span class="text-3xl font-bold text-white">
                {{ activeItem?.slides.find(s => s.id === activeSlide)!.description }}
            </span>
        </div>
        <div class="flex items-center justify-center gap-4">
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