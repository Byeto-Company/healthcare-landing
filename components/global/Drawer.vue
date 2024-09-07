<script setup lang="ts">

// types

type Props = {
    isDrawerShow: boolean;
    navLinks: {
        title: string,
        path: string
    }[]
}

// props

const props = defineProps<Props>();

const { isDrawerShow } = toRefs(props)

// emits

defineEmits(["update:isShow"]);

// state

const { $gsap: gsap } = useNuxtApp()
const route = useRoute();


// computed

const currentHash = computed(() => route.hash);

// watch

    watch(isDrawerShow.value, (newValue: boolean) => {
        const timeline = gsap.timeline()
        if(newValue){
            timeline
                .to('.backdrop', {opacity: 1})
                .to('.drawer', {x: 0})
        } else {
            timeline
                .to('.backdrop', {opacity: 0})
                .to('.drawer', {x: '100%'})
        }
    }, {
        immediate: true
    })

</script>

<template>
    <div style="opacity: 0" class="backdrop bg-gray-950/50 backdrop-blur-sm inset-0 w-full h-full fixed">
        <div style="transform: translateX(200%)" class="drawer bg-white w-[300px] flex flex-col items-center p-4 py-8 h-full">
            <div class="w-[150px] flex-center">
                <img src="/logo-row.png" class="object-fill" alt="logo">
            </div>
            <div class="flex flex-col items-center gap-10 mt-16">
                <NuxtLink
                    v-for="(link, index) in navLinks"
                    :to="link.path"
                    :key="index"
                    :class="{'text-primary font-semibold' : currentHash == link.path}"
                    class="transition-all whitespace-nowrap text-lg font-medium"
                >
                    {{ link.title }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>