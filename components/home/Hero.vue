<script setup lang="ts">

</script>

<template>
    <header class="relative h-full padding-main flex-center w-[90%] pt-8">

        <div class="flex flex-col items-start w-1/2 gap-10">
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

        <div class="flex items-center justify-end w-1/2">

            <div class="relative flex-center aspect-square size-2/3">

                <!-- top shapes -->

                <div class="w-[10rem] h-[14rem] absolute overflow-hidden top-4 right-0 rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-[160px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <div class="w-[14rem] h-[14rem] absolute overflow-hidden -top-10 left-2 rounded-tl-[160px] rounded-bl-[40px] rounded-br-[160px] rounded-tr-[160px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <!-- logo -->

                <div class="p-4 bg-white flex-center rounded-360">
                    <img src="/logo.png" class="size-10" alt="logo">
                </div>

                <!-- bottom shapes -->

                <div class="w-[10rem] h-[13rem] absolute overflow-hidden bottom-0 left-2 rounded-tl-[40px] rounded-bl-[160px] rounded-br-[40px] rounded-tr-[40px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <div class="w-[14rem] h-[9rem] absolute overflow-hidden bottom-0 right-0 rounded-tl-[40px] rounded-bl-[160px] rounded-br-[40px] rounded-tr-[40px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

            </div>

        </div>

        <div class="absolute -translate-y-1/2 pointer-events-none lg:block bg-radial-gradient z-lowest opacity-20 top-1/3 size-full" style="--color: hsl(179 79% 45%)"></div>
        <div class="absolute -translate-y-1/2 pointer-events-none lg:block bg-radial-gradient z-lowest opacity-20 top-2/3 size-full" style="--color: hsl(220 70% 60%)"></div>

    </header>
</template>

<style scoped>
    .bg-radial-gradient {
        --color: hsl(0, 0%, 0%);
        background-image: radial-gradient(50% 50% at 50% 50%, var(--color) 0%, rgba(255, 255, 255, 0) 100%);
    }
</style>