<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
    error: Object as () => NuxtError,
});

const handleError = async () => {
    await clearError();
    navigateTo("/");
};

const errorMessage = computed(() => {
    switch (props.error?.statusCode) {
        case 404:
            return "صفحه‌ای که به دنبال آن هستید پیدا نشد. ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه مورد نظر حذف شده باشد";
        case 403:
            return "شما دسترسی لازم برای مشاهده این صفحه را ندارید. لطفاً با مدیریت سایت تماس بگیرید یا مجوزهای خود را بررسی کنید";
        case 500:
            return "خطای داخلی سمت سرور رخ داده است. لطفاً چند لحظه بعد دوباره تلاش کنید یا با پشتیبانی سایت تماس بگیرید";
        default:
            return "یک خطای ناشناخته رخ داده است. لطفاً صفحه را بازخوانی کنید یا با تیم پشتیبانی تماس بگیرید";
    }
});
</script>

<template>
    <div
        class="relative flex flex-col items-center w-full overflow-x-hidden h-svh font-iran-yekan-x"
    >
        <!-- orbs -->
        <div
            class="size-[200px] z-lowest bg-primary/80 blur-[150px] absolute top-1/2 -left-10 -translate-y-1/2"
        ></div>
        <div
            class="size-[200px] z-lowest bg-secondary/80 blur-[150px] absolute top-1/2 -right-10 -translate-y-1/2"
        ></div>

        <div class="flex items-center justify-between w-full px-4 py-4 lg:px-8">
            <div>
                <img class="size-6 lg:size-8" src="/logo.png" alt="logo" />
            </div>

            <div class="flex items-center gap-2 text-sm lg:text-xl">
                <span
                    class="py-0.5 !leading-[150%] font-semibold text-gradient bg-gradient-to-r from-primary to-secondary"
                >
                    شرکت خورشید رایانه طلوع
                </span>
                <span class="py-0.5 !leading-[150%] font-semibold">
                    شرکت مهندسی
                </span>
            </div>
        </div>

        <div
            class="flex justify-center h-[calc(100svh-100px)] flex-col items-center gap-4 px-4"
        >
            <div
                class="text-center text-[80px] xs:text-[100px] lg:text-[130px] leading-[80px] xs:leading-[100px] lg:leading-[150px] font-semibold lg:font-bold bg-gradient-to-t from-primary to-secondary text-gradient"
            >
                {{ error?.statusCode }}
            </div>
            <p
                class="text-sm xs:text-md lg:text-xl text-center !leading-[175%] text-gray-800 font-medium max-w-[380px] sm:max-w-[500px] lg:max-w-[600px]"
            >
                {{ errorMessage }}
            </p>
            <div
                class="flex items-center justify-center gap-3 mt-6 lg:mt-8 lg:justify-start lg:gap-5 max-xl:mt-3"
            >
                <a
                    href="mailto:test@gmail.com"
                    class="whitespace-nowrap text-xs xs:text-sm lg:text-[1rem] border-2 border-primary font-semibold px-8 xl:px-10 py-1.5 xl:py-2.5 rounded-360 text-primary"
                >
                    ارتباط با ما
                </a>

                <button
                    @click="handleError"
                    class="whitespace-nowrap text-xs xs:text-sm lg:text-[1rem] bg-gradient-to-r from-primary to-secondary px-8 xl:px-10 py-1.5 xl:py-2.5 rounded-360 text-white"
                >
                    بازگشت به خانه
                </button>
            </div>
        </div>
    </div>
</template>
