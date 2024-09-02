<script setup lang="ts">

// imports

    import type { Confirmation } from '~/types/index'

// props

    type Props = {
        index : number;
    } & Confirmation;

    const props = withDefaults(defineProps<Props>(), {
        direction: 'left'
    })

    const { direction, index } = toRefs(props)

// state

    const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

// life-cycle

    onMounted(() => {

        let tl = gsap.timeline()
            .to(`.path-${index.value}`, {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})
            .to(`.dot-${index.value}`, {'background-color': '#5281e0'})
            
        ScrollTrigger.create({
            trigger: `#row-${index.value}`,
            animation: tl,
            start: 'top center',
            end: '50% center',
            markers: true,
            scrub: true
        });

    })
    

</script>

<template>
    <div :id="`row-${index}`" class="flex items-center justify-between w-full z-higher" :class="direction == 'left' ? 'flex-row-reverse' : 'flex-row'">

        <div class="relative flex items-center w-1/2">
            
            <!-- left -->
            
            <div class="relative w-1/5 h-max" :class="direction == 'right' ? 'hidden' : 'flex-center'">
            
                <svg viewBox="0 0 198 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M194.574 68.445L141 68.4449L88.8897 3.12846L2.99999 3.12872" stroke="#3B3D41" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg class="absolute" viewBox="0 0 198 71" fill="none" xmlns="http://www.w3.org/2000/svg" :class="`path-${index}`" style="clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);">
                    <path d="M194.574 68.445L141 68.4449L88.8897 3.12846L2.99999 3.12872" class="stroke-primary" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span :class="`dot-${index}`" class="absolute -bottom-[40%] -right-[15%] p-2 shadow-lg size-10 z-normal flex-center rounded-360" style="background-color: #3B3D41">
                    <span class="bg-white size-full rounded-360 z-[1]"></span>
                </span>

            </div>

            <img :src="image" class="w-4/5 rounded-150 image-shadow" alt="confirmation-1">

            <!-- right -->

            <div class="relative w-1/5 h-max" :class="direction == 'left' ? 'hidden' : 'flex-center'">

                <svg viewBox="0 0 198 71" class="rotate-180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.42628 68.445L57 68.4449L109.11 3.12846L195 3.12872" stroke="#3B3D41" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg class="absolute rotate-180" viewBox="0 0 198 71" fill="none" xmlns="http://www.w3.org/2000/svg" :class="`path-${index}`" style="clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);">
                    <path d="M3.42628 68.445L57 68.4449L109.11 3.12846L195 3.12872" stroke-width="7" class="stroke-primary" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span :class="`dot-${index}`" class="absolute -bottom-[40%] -left-[15%] p-2 shadow-lg size-10 z-normal flex-center rounded-360" style="background-color: #3B3D41">
                    <span class="bg-white size-full rounded-360 z-[1]"></span>
                </span>

            </div>
            
        </div>

        <span class="flex items-center w-1/2 text-3xl font-semibold text-white" :class="direction == 'left' ? 'justify-start' : 'justify-end'">
            {{ text }}
        </span>

    </div>
</template>

<style scoped>
    .image-shadow {
        box-shadow: 0px 0px 100px hsla(179, 79%, 45%, 0.038);
    }
</style>