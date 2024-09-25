<script setup lang="ts">

// types

type Props = {
    activeProduct: Product;
    products: Product[];
}

type EmitProps = {
    'update:activeProduct': [product: Product]
}

// emits

const emit = defineEmits<EmitProps>();

// props

defineProps<Props>();

// state

    const { $vScrollTo: vScrollTo } = useNuxtApp()

// methods

    const openProduct = (product: Product) => {
        emit('update:activeProduct', product)
        setTimeout(() => {
            vScrollTo.scrollTo(`#slider`, {offset: -320})
        }, 10);
    }

</script>

<template>
    <div class="flex items-center justify-center w-full">
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-4 justify-items-center max-w-[1200px] justify-center items-center">
            <button
                @click="openProduct(product)"
                class="flex items-center justify-center w-full gap-8 px-6 py-4 transition-all border-2 border-transparent rounded-150 active:scale-95 bg-gray-600/20"
                :class="{'bg-gradient-to-r from-primary/10 to-secondary/10 !border-secondary' : product.id === activeProduct.id}"
                v-for="(product, index) in products"
                :key="index"
            >
                <span
                    :class="{'text-gradient bg-gradient-to-r from-primary to-secondary' : product.id === activeProduct.id}"
                    class="text-xl font-bold text-white transition-all"
                >
                        {{ product.title }}
                </span>
                <div
                    class="rounded-360 overflow-hidden size-[60px] relative"
                >
                    <img :src="product.image" :alt="product.title" class="absolute object-cover w-full h-full" />
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>