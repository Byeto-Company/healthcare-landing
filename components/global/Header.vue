<script setup lang="ts">
import useGetContent from "~/composables/api/useGetContent";

// types

interface navLink {
    title: string;
    path: string;
}

// state

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const { $vScrollTo: vScrollTo } = useNuxtApp();

const isDrawerShow = ref<boolean>(false);

const navLinks = ref<navLink[]>([
    {
        title: "حوزه های کاری",
        path: "#work-fields-section",
    },
    {
        title: "محصولات",
        path: "#products-section",
    },
    {
        title: "مدیران",
        path: "#leaders-section",
    },
    {
        title: "تایید نامه ها",
        path: "#confirmations-section",
    },
    {
        title: "دمو",
        path: "#demo-section",
    },
    {
        title: "درباره ما",
        path: "#about-us-section",
    },
]);

// queries

const { data: content } = useGetContent();

const logo = computed(() => {
    return {
        link: `${config.public.API_BASE_URL}/${content.value?.logo.link}`,
        alt: content.value?.body_logo.link,
    };
});

// methods

const goToSection = (link: { title: string; path: string }) => {
    isDrawerShow.value = false;
    router.push({ hash: link.path });
    if (route.path !== "/") {
        navigateTo("/");
        setTimeout(() => {
            vScrollTo.scrollTo(`${link.path}`, { offset: -120 });
        }, 250);
    } else {
        vScrollTo.scrollTo(`${link.path}`, { offset: -120 });
    }
};

// life-cycle

onMounted(() => {
    if (!!route.hash) {
        vScrollTo.scrollTo(`${route.hash}`, { offset: -120 });
    }
});
</script>

<template>
    <div class="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div
            class="flex container justify-between items-center h-[4.75rem] z-higher padding-main"
        >
            <div
                class="flex items-center justify-start w-11/12 gap-[3rem] max-lg:hidden"
            >
                <NuxtLink
                    v-for="(link, index) in navLinks"
                    :key="index"
                    :class="{
                        'text-primary font-semibold': route.hash == link.path,
                    }"
                    class="transition-all cursor-pointer whitespace-nowrap"
                    @click="goToSection(link)"
                >
                    {{ link.title }}
                </NuxtLink>
            </div>

            <div @click="isDrawerShow = true" class="lg:hidden">
                <i class="fa-solid fa-bars text-[26px]"></i>
            </div>

            <NuxtLink to="/" class="w-[90px] lg:w-1/12 flex-center">
                <img :src="logo.link" :alt="logo.alt" class="object-fill" />
            </NuxtLink>
        </div>
        <ClientOnly>
            <Drawer
                v-model="isDrawerShow"
                @goToSection="goToSection"
                :navLinks="navLinks"
            />
        </ClientOnly>
    </div>
</template>

<style scoped></style>
