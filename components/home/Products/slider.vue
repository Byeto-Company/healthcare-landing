<script setup lang="ts">
// imports

import type { SwiperClass } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/vue";
import useBaseUrl from "~/composables/useBaseUrl";

// types

type Props = {
    activeProduct: Product;
    products: Product[];
}

// props

const props = defineProps<Props>();

const { products, activeProduct } = toRefs(props)


// states

const swiperInstance = ref<SwiperClass>();

const baseUrl = useBaseUrl();

// methods

const onSwiper = (swiper: SwiperClass) => {
    swiperInstance.value = swiper;
};

watch(
    () => activeProduct.value,
    () => {
        swiperInstance.value?.slideTo(0)
    } 
)

</script>

<template>
    <div id="slider" class="flex flex-col items-center justify-center gap-8 mt-16">
        <div class="flex items-center w-full gap-10 lg:w-2/3">
            <button
                :disabled="swiperInstance?.isBeginning"
                :class="{'!grayscale' : swiperInstance?.isBeginning}"
                @click="swiperInstance?.slidePrev()"
                class="lg:flex justify-center hidden items-center shrink-0 size-10 lg:size-[4rem] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-right text-[24px] text-white"></i>
            </button>
            <Swiper
                grab-cursor
                :slides-per-view="1"
                :space-between="50"
                centered-slides
                @swiper="onSwiper"
                class="w-full overflow-hidden rounded-150"
            >
                <SwiperSlide v-for="slide in activeProduct!.slides_list" :key="slide.id">
                    <div
                        class="relative flex items-center justify-center w-full overflow-hidden aspect-video rounded-100 lg:rounded-150">
                        <img class="absolute object-cover w-full h-full" :src="baseUrl + slide.image" :alt="slide.description" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <button
                :disabled="swiperInstance?.isEnd"
                :class="{'!grayscale' : swiperInstance?.isEnd}"
                @click="swiperInstance?.slideNext()"
                class="lg:flex justify-center hidden items-center shrink-0 size-10 lg:size-[4rem] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-left text-[24px] text-white"></i>
            </button>
        </div>
        <div class="flex items-center justify-center py-2">
            <span class="text-3xl font-bold text-white">
                {{ swiperInstance && activeProduct?.slides_list[swiperInstance.activeIndex].description }}
            </span>
        </div>
        <div class="flex items-center justify-center w-full gap-5 lg:hidden">
            <button
                :disabled="swiperInstance?.isBeginning"
                :class="{'!grayscale' : swiperInstance?.isBeginning}"
                @click="swiperInstance?.slidePrev()"
                class="flex justify-center items-center shrink-0 size-10 lg:size-[4rem] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-right lg:text-[2.5rem] text-white"></i>
            </button>
            <button
                :disabled="swiperInstance?.isEnd"
                :class="{'!grayscale' : swiperInstance?.isEnd}"
                @click="swiperInstance?.slideNext()"
                class="flex justify-center items-center shrink-0 size-10 lg:size-[4rem] rounded-360 bg-primary transition-all click-effect hover-effect"
            >
                <i class="fa-solid fa-chevron-left lg:text-[2.5rem] text-white"></i>
            </button>
        </div>
        <div class="flex items-center justify-center gap-4">
            <button
                v-for="(_slide, index) in swiperInstance?.slides"
                :key="index"
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