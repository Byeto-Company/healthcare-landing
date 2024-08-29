<script setup lang="ts">

</script>

<template>
    <div class="w-full h-full padding-main flex-center">

        <div class="flex flex-col items-start w-1/2 gap-10 pe-32">
            <div class="flex flex-col">
                <span class="py-0.5 text-[2.75rem] font-extrabold">شرکت مهندسی</span>
                <span class="py-0.5 text-[2.75rem] font-extrabold text-gradient bg-gradient-to-r from-primary to-secondary">خورشید رایان طلوع</span>
            </div>
            <p class="text-xl leading-loose text-gray-800">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
            <div class="flex items-center justify-start gap-5">

                <NuxtLink>
                    <button class="bg-gradient-to-r from-primary to-secondary px-10 py-2.5 rounded-360 text-white">
                        ارتباط با ما
                    </button>
                </NuxtLink>

                <NuxtLink>
                    <button class="border-2 border-primary font-semibold px-10 py-2.5 rounded-360 text-primary">
                        درخواست همکاری
                    </button>
                </NuxtLink>

            </div>
        </div>

        <div class="w-1/2 flex-center">

            <div class="relative flex-center aspect-square size-1/2">

                <!-- top shapes -->

                <div class="w-[8rem] h-[12rem] absolute overflow-hidden top-0 right-0 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-[160px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <div class="w-[12rem] h-[12rem] absolute overflow-hidden -top-12 left-0 rounded-tl-[160px] rounded-bl-[40px] rounded-br-[160px] rounded-tr-[160px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <!-- logo -->

                <div class="p-5 bg-white flex-center">
                    <img src="/logo.png" class="size-10" alt="logo">
                </div>

                <!-- bottom shapes -->

                <div class="w-[8rem] h-[10rem] absolute overflow-hidden bottom-0 left-0 rounded-tl-[40px] rounded-bl-[160px] rounded-br-[40px] rounded-tr-[40px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <div class="w-[12rem] h-[8rem] absolute overflow-hidden -bottom-2 right-0 rounded-tl-[40px] rounded-bl-[160px] rounded-br-[40px] rounded-tr-[40px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>

</style>