<script setup lang="ts">

// imports

    import type { Confirmation } from '~/types/index'

// state

    const confirmations = ref<Confirmation[]>([
        {
            image: '/confirmation.png',
            text: 'نام مدرک اینجا قرار میگیرد',
            direction: 'left'
        },
        {
            image: '/confirmation.png',
            text: 'نام مدرک اینجا قرار میگیرد',
            direction: 'right'
        },
        {
            image: '/confirmation.png',
            text: 'نام مدرک اینجا قرار میگیرد',
            direction: 'left'
        },
    ])

</script>

<template>
    <section class="w-full flex flex-col items-center [background-image:_url('/pattern-hexagone.png')] [background-size:_100%] py-[6.25rem]">
        <SectionTitle
            title="تائیدنامه ها"
            description="رضایت ها ناشی از تلاش بی وقفه ماست"
            theme="dark"
        />

        <div class="relative min-h-[20rem] mt-28 w-full">
            <span class="absolute top-0 p-5 -translate-x-1/2 z-high size-14 flex-center left-1/2 rounded-360 bg-primary">
                <i class="text-2xl text-white fa-solid fa-medal"></i>
            </span>
            <span class="absolute top-0 w-[4px] rounded-full h-full -translate-x-1/2 bg-gray-800 left-1/2 z-normal"></span>

            <div class="top-0 flex flex-col gap-10 py-24 mx-auto w-[80%]">

                <ConfirmationRow 
                    v-for="(confirmation, index) in confirmations"
                    :key="index" 
                    :direction="confirmation.direction"
                    :image="confirmation.image"
                    :text="confirmation.text"    
                />
    
            </div>

        </div>

    </section>
</template>

<style scoped>

</style>