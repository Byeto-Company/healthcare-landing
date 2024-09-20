<script setup lang="ts">

// types

interface navLink {
    title: string,
    path: string
}

// state

const route = useRoute();

const isDrawerShow = ref<boolean>(false);

const navLinks = ref<navLink[]>([
    {
        title: "درباره ما",
        path: "#about-us"
    },
    {
        title: "حوزه کاری",
        path: "#fields"
    },
    {
        title: "محصولات",
        path: "#products"
    },
    {
        title: "ویژگی ها",
        path: "#features"
    },
    {
        title: "تایید نامه ها",
        path: "#degrees"
    },
    {
        title: "اعضا",
        path: "#team"
    },
    {
        title: "ارتباط با ما",
        path: "#contact-us"
    }
]);

// computed

const currentHash = computed(() => route.hash);

</script>

<template>
    <div class="sticky top-0 z-50 w-full shadow-sm">
        <div class="flex container justify-between items-center h-[4.75rem] bg-white z-higher padding-main">

            <div class="flex items-center justify-start w-11/12 gap-[3rem] max-lg:hidden">
                <NuxtLink
                    v-for="(link, index) in navLinks"
                    :to="link.path"
                    :key="index"
                    :class="{
                        'text-primary font-semibold' : currentHash == link.path
                    }"
                    class="transition-all whitespace-nowrap"
                >
                    {{ link.title }}
                </NuxtLink>
            </div>

            <div @click="isDrawerShow = true" class="lg:hidden">
                <i class="fa-solid fa-bars text-[26px]"></i>
            </div>

            <button class="w-[90px] lg:w-1/12 flex-center">
                <img src="/logo-row.png" class="object-fill" alt="logo">
            </button>

        </div>
        <ClientOnly>
            <Drawer
                v-model="isDrawerShow"
                :navLinks="navLinks"
            />
        </ClientOnly>

    </div>
</template>

<style scoped>

</style>