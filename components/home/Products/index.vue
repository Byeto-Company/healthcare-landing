<script setup lang="ts">

// imports

    import products from '~/assets/products.json'

// state

const activeProduct = ref(1);
const activeCategory = ref("all");

// computed

const filteredProductsByCategory = computed(() => {
    if (activeCategory.value === "all") {
        return products;
    }
    return products.filter(f => f.category === activeCategory.value);
});

// methods

const changeActiveCategory = (id: string) => {
    activeCategory.value = id;
    changeActiveProduct(filteredProductsByCategory.value[0].id)
};

const changeActiveProduct = (id: number) => {
    activeProduct.value = id;
};

</script>

<template>
    <section class="w-full bg-pattern-hex">
        <div class="container w-full py-[150px]">
            <SectionTitle
                theme="dark"
                title="محصولات خورشید رایان طلوع"
                description="گسترش روز به روز محصولات کار گروهی مجرب و سخت کوش است"
            />
            <Slider
                :active-product="activeProduct"
                :products="products"
            />
            <Categories
                @change-active-category="changeActiveCategory"
                :products="products"
                :active-category="activeCategory"
            />
            <ProductsGrid
                @change-active-product="changeActiveProduct"
                :active-product="activeProduct"
                :products="filteredProductsByCategory"
            />
        </div>
    </section>
</template>

<style scoped>

</style>