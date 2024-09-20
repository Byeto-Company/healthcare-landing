<script setup lang="ts">

// types

type Props = {
    activeProduct: number;
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
    <div class="w-full flex justify-center items-center">
        <div class="w-full grid grid-cols-3 gap-4 justify-items-center max-w-[1200px] justify-center items-center">
            <button
                @click="openProduct(product)"
                class="px-6 py-4 rounded-150 flex items-center gap-8 border-2 active:scale-95 bg-gray-600/20 transition-all border-transparent w-full justify-center"
                :class="{'bg-gradient-to-r from-primary/10 to-secondary/10 !border-secondary' : product.id === activeProduct.id}"
                v-for="(product, index) in products"
                :key="index"
            >
                <span
                    :class="{'text-gradient bg-gradient-to-r from-primary to-secondary' : product.id === activeProduct.id}"
                    class="text-xl text-white font-bold transition-all"
                >
                        {{ product.title }}
                </span>
                <div
                    class="rounded-360 overflow-hidden size-[60px] relative"
                >
                    <img :src="product.image" :alt="product.title" class="object-cover absolute w-full h-full" />
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>