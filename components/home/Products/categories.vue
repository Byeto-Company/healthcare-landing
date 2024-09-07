<script setup lang="ts">

// types

type Props = {
    products: Product[];
    activeCategory: string;
}

type EmitProps = {
    changeActiveCategory: [id: string]
}

// emits

const emit = defineEmits<EmitProps>();

// props

const props = defineProps<Props>();

const categories = computed(() => {
    const categoriesList: string[] = [];
    const labels = props.products.map(product => product.label);
    labels.forEach(label => {
        if (!categoriesList.includes(label)) {
            categoriesList.push(label);
        }
    });

    return categoriesList;
});

</script>

<template>
    <div class="w-full flex justify-center items-center">
        <div
            class="bg-gray-700/70 flex justify-center items-center gap-[100px] mt-16 mb-10 w-full max-w-[1200px] px-[100px] rounded-100 ">
            <button
                class="text-white text-xl relative h-full py-4"
                @click="emit('changeActiveCategory','all')"
                :class="activeCategory === 'all' ? 'font-bold text-primary' : ''"
            >
                <span :class="{'bg-gradient-to-r from-primary to-secondary text-gradient' : activeCategory === 'all'}">همه</span>
                <span v-if="activeCategory === 'all'"
                      class="absolute bottom-0 block w-full h-1 rounded-360 bg-gradient-to-r from-primary to-secondary">
                </span>
            </button>
            <button
                class="text-white text-xl relative h-full py-4"
                v-for="category in categories"
                @click="emit('changeActiveCategory',category)"
                :class="activeCategory === category ? 'font-bold text-primary' : ''"
            >
                <span
                    :class="{'bg-gradient-to-r from-primary to-secondary text-gradient' : activeCategory === category}">{{ category
                    }}</span>
                <span v-if="activeCategory === category"
                      class="absolute bottom-0 block w-full h-1 rounded-360 bg-gradient-to-r from-primary to-secondary">
                </span>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>