<script setup lang="ts">

// types

type Props = {
    activeProduct: number;
    products: Product[];
}

type EmitProps = {
    changeActiveProduct: [id: number]
}

// emits

defineEmits<EmitProps>();

// props

defineProps<Props>();

</script>

<template>
    <div class="w-full flex justify-center items-center">
        <div class="w-full grid grid-cols-3 justify-items-center max-w-[1200px] justify-center items-center">
            <button
                @click="$emit('changeActiveProduct',product.id)"
                class="px-6 py-4 rounded-150 flex items-center gap-8 border-2 border-transparent w-full justify-center"
                :class="{'bg-gradient-to-r from-primary/10 to-secondary/10 !border-secondary' : product.id === activeProduct}"
                v-for="product in products"
                :key="product.id"
            >
            <span
                :class="{'text-gradient bg-gradient-to-r from-primary to-secondary' : product.id === activeProduct}"
                class="text-xl text-white font-bold"
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