<script setup lang="ts">
// imports

import useGetContent from "~/composables/api/useGetContent";

// state

const { data: content } = useGetContent();

const products = computed(() => {
    if (content.value) {
        content.value!.products;
    } else {
        return undefined;
    }
});

const activeProduct = ref(products.value![0]);
const activeCategory = ref("all");

// computed

const filteredProductsByCategory = computed(() => {
    if (activeCategory.value === "all") {
        return products.value;
    }
    return products.value.filter(
        (f) => f.category.name === activeCategory.value
    );
});

// methods

const changeActiveCategory = (id: string) => {
    activeCategory.value = id;
    activeProduct.value = filteredProductsByCategory.value[0];
};
</script>

<template>
    <section id="products-section" class="w-full bg-pattern-hex">
        <div class="container w-full max-lg:px-5 py-[150px]">
            <SectionTitle
                theme="dark"
                title="محصولات خورشید رایان طلوع"
                description="گسترش روز به روز محصولات کار گروهی مجرب و سخت کوش است"
            />
            <Slider :activeProduct="activeProduct" :products="products" />
            <Categories
                @change-active-category="changeActiveCategory"
                :products="products"
                :active-category="activeCategory"
            />
            <ProductsGrid
                v-model:activeProduct="activeProduct"
                :products="filteredProductsByCategory"
            />
        </div>
    </section>
</template>

<style scoped></style>
