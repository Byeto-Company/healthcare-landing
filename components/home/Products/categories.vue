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
    const categories = props.products.map(product => product.category);
    categories.forEach(category => {
        if (!categoriesList.includes(category)) {
            categoriesList.push(category);
        }
    });

    return categoriesList;
});

</script>

<template>
    <div class="flex items-center justify-center w-full">
        <div
            class="w-full mt-16 mb-10 overflow-x-auto bg-gray-700/70 flex-center rounded-100"
        >
            <div class="w-max flex-center ps-80 lg:gap-[6.25rem] gap-10 lg:px-[6.25rem]">
                <button
                    class="relative h-full py-4 w-[4rem] text-xl text-white"
                    @click="emit('changeActiveCategory','all')"
                    :class="activeCategory === 'all' ? 'font-bold text-primary' : ''"
                >
                    <span :class="{'bg-gradient-to-r from-primary to-secondary text-gradient' : activeCategory === 'all'}">همه</span>
                    <span v-if="activeCategory === 'all'"
                        class="absolute bottom-0 block w-full h-1 rounded-360 bg-gradient-to-r from-primary to-secondary">
                    </span>
                </button>
                <button
                    class="relative h-full py-4 min-w-[4rem] text-xl text-white"
                    v-for="(category, index) in categories"
                    :key="index"
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
    </div>
</template>

<style scoped>

</style>