<script setup lang="ts">

// types

    interface navLink {
        title: string,
        path: string
    }


// state

    const route = useRoute()

    const navLinks = ref<navLink[]>([
        {
            title: 'درباره ما',
            path: '#about-us'
        },
        {
            title: 'حوزه کاری',
            path: '#fields'
        },
        {
            title: 'محصولات',
            path: '#products'
        },
        {
            title: 'ویژگی ها',
            path: '#features'
        },
        {
            title: 'تایید نامه ها',
            path: '#degrees'
        },
        {
            title: 'اعضا',
            path: '#team'
        },
        {
            title: 'ارتباط با ما',
            path: '#contact-us'
        },
    ])

// computed

    const currentHash = computed(() => route.hash)

</script>

<template>
    <div class="sticky top-0 z-50 w-full shadow-sm">
        <div class="flex container justify-between items-center h-[4.75rem] padding-main">

            <div class="flex items-center justify-start w-11/12 gap-[3rem]">
                <NuxtLink 
                    v-for="(link, index) in navLinks" 
                    :to="link.path" 
                    :key="index"
                    :class="{
                        'text-primary font-semibold' : currentHash == link.path
                    }"
                    class="transition-all"
                >
                    {{ link.title }}
                </NuxtLink>
            </div>            

            <div class="w-1/12 flex-center">
                <img src="/logo.png" class="object-fill" alt="logo">
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>