<script setup lang="ts">

// state

const activeProduct = ref(1);
const activeCategory = ref("all");
const products: Product[] = [
    {
        id: 1,
        description: "asdadasdas",
        image: "/confirmation.png",
        label: "test1",
        title: "asdadasdasdasd",
        slides: [
            {
                id: 1,
                image: "/confirmation.png",
                description: "222222"
            },
            {
                id: 2,
                image: "/confirmation.png",
                description: "12312312"
            },
            {
                id: 3,
                image: "/confirmation.png",
                description: "33323232323"
            }
        ]
    },
    {
        id: 2,
        description: "asdadasdas",
        image: "/confirmation.png",
        label: "test2",
        title: "asdadasdasdasd",
        slides: [
            {
                id: 1,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 2,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 3,
                image: "/confirmation.png",
                description: "asdasdasd"
            }
        ]
    },
    {
        id: 3,
        description: "asdadasdas",
        image: "/confirmation.png",
        label: "test2",
        title: "asdadasdasdasd",
        slides: [
            {
                id: 1,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 2,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 3,
                image: "/confirmation.png",
                description: "asdasdasd"
            }
        ]
    },
    {
        id: 4,
        description: "asdadasdas",
        image: "/confirmation.png",
        label: "test1",
        title: "asdadasdasdasd",
        slides: [
            {
                id: 1,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 2,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 3,
                image: "/confirmation.png",
                description: "asdasdasd"
            }
        ]
    },
    {
        id: 5,
        description: "asdadasdas",
        image: "/confirmation.png",
        label: "test3",
        title: "asdadasdasdasd",
        slides: [
            {
                id: 1,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 2,
                image: "/confirmation.png",
                description: "asdasdasd"
            },
            {
                id: 3,
                image: "/confirmation.png",
                description: "asdasdasd"
            }
        ]
    }
];

// computed

const filteredProductsByCategory = computed(() => {
    if (activeCategory.value === "all") {
        return products;
    }
    return products.filter(f => f.label === activeCategory.value);
});

// methods

const changeActiveCategory = (id: string) => {
    activeCategory.value = id;
};

const changeActiveProduct = (id: number) => {
    activeProduct.value = id;
};

</script>

<template>
    <section class="bg-pattern-hex w-full py-[150px]">
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
    </section>
</template>

<style scoped>

</style>