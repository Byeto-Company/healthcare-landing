<script setup lang="ts">
// types

import useBaseUrl from "~/composables/useBaseUrl";

type Props = {
    activeProduct: Product;
    products: Product[];
};

type EmitProps = {
    "update:activeProduct": [product: Product];
};

// emits

const emit = defineEmits<EmitProps>();

// props

defineProps<Props>();

// state

const { $vScrollTo: vScrollTo } = useNuxtApp();
const baseUrl = useBaseUrl();

// methods

const openProduct = (product: Product) => {
    emit("update:activeProduct", product);
    setTimeout(() => {
        vScrollTo.scrollTo(`#slider`, { offset: -320 });
    }, 10);
};
</script>

<template>
    <div class="flex items-center justify-center w-full">
        <div
            class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-4 justify-items-center max-w-[1200px] justify-center items-center"
        >
            <button
                @click="openProduct(product)"
                class="flex items-center justify-center w-full gap-8 px-6 py-3 transition-all border-2 border-transparent lg:py-4 rounded-150 active:scale-95 bg-gray-600/20"
                :class="{
                    'bg-gradient-to-r from-primary/10 to-secondary/10 !border-secondary':
                        product.id === activeProduct.id,
                }"
                v-for="(product, index) in products"
                :key="index"
            >
                <span
                    :class="{
                        'text-gradient bg-gradient-to-r from-primary to-secondary':
                            product.id === activeProduct.id,
                    }"
                    class="font-bold text-white transition-all lg:text-xl"
                >
                    {{ product.name }}
                </span>
                <div class="rounded-360 overflow-hidden size-[60px] relative">
                    <img
                        :src="baseUrl + product.product_icon_photo"
                        :alt="product.name"
                        class="absolute object-cover w-full h-full"
                    />
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped></style>
