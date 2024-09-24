<script setup lang="ts">

</script>

<template>
    <header class="relative container h-full padding-main flex-center max-md:flex-col-reverse w-full md:gap-10 xl:gap-16 lg:w-[90%] pt-8">

        <div class="flex flex-col items-center lg:items-start w-full md:w-1/2 gap-4 xl:gap-8">
            <div class="flex flex-col items-center lg:items-start">
                <span class="py-0.5 text-3xl xl:text-5xl !leading-[150%] font-bold">شرکت مهندسی</span>
                <span class="py-0.5 text-3xl xl:text-5xl !leading-[150%] font-bold text-gradient bg-gradient-to-r from-primary to-secondary">خورشید رایان طلوع</span>
            </div>
            <p class="xl:text-xl text-center lg:text-start !leading-[175%] text-gray-800">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
            <div class="flex items-center justify-center lg:justify-start gap-3 lg:gap-5 max-xl:mt-3">

                <NuxtLink>
                    <button class="whitespace-nowrap text-sm lg:text-[1rem] bg-gradient-to-r from-primary to-secondary px-8 xl:px-10 py-1.5 xl:py-2.5 rounded-360 text-white">
                        ارتباط با ما
                    </button>
                </NuxtLink>

                <NuxtLink>
                    <button class="whitespace-nowrap text-sm lg:text-[1rem] border-2 border-primary font-semibold px-8 xl:px-10 py-1.5 xl:py-2.5 rounded-360 text-primary">
                        درخواست همکاری
                    </button>
                </NuxtLink>

            </div>
        </div>

        <div class="flex items-center justify-center md:justify-end w-full md:w-1/2">

            <div class="relative flex-center aspect-square size-[430px]">

                <!-- top shapes -->

                <div class="w-[6rem] xl:w-[10rem] h-[10rem] xl:h-[14rem] translate-x-[100%] translate-y-[-38%] absolute overflow-hidden rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-[160px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <div class="w-[10rem] xl:w-[14rem] h-[10rem] xl:h-[14rem] translate-x-[-40%] translate-y-[-65%] absolute overflow-hidden rounded-tl-[160px] rounded-bl-[40px] rounded-br-[160px] rounded-tr-[160px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <!-- logo -->

                <div class="p-4 bg-white flex-center rounded-360 xl:mt-6">
                    <img src="/logo.png" class="size-7 xl:size-10" alt="logo">
                </div>

                <!-- bottom shapes -->

                <div class="w-[6rem] xl:w-[10rem] h-[10rem] xl:h-[14rem] translate-x-[-100%] translate-y-[50%] absolute overflow-hidden rounded-tl-[40px] rounded-bl-[160px] rounded-br-[40px] rounded-tr-[40px]">
                    <img src="/shape-1.png" class="object-fill size-full">
                </div>

                <div class="w-[10rem] xl:w-[14rem] h-[6rem] xl:h-[10rem] translate-x-[40%] translate-y-[100%] absolute overflow-hidden rounded-tl-[40px] rounded-bl-[160px] rounded-br-[40px] rounded-tr-[40px]">
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