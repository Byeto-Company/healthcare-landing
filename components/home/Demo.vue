<script setup lang="ts">

</script>

<template>
    <section class="flex flex-col items-center w-full bg-[#19191A]">

        <div class="w-full [background-image:_url('/pattern-hexagone.png')] py-[4.25rem] [background-size:_100%] [mask:_linear-gradient(180deg,_white_0%,_white_80%,_transparent_100%)]">

            <div class="w-[90%] flex items-center">
                <div class="w-1/2 flex-center">
                    <img src="/demo.png" class="object-cover size-4/5" alt="demo">
                </div>

                <div class="flex flex-col w-1/2 gap-6">
                    <span class="py-0.5 text-[2.75rem] font-extrabold text-gradient bg-gradient-to-r from-primary to-secondary">آموزش دمو پروژه</span>
                    <span class="text-2xl font-semibold text-white">برای راحتی و اعتماد شما</span>
                    <p class="text-xl text-gray-200">مراکز تحت پوشش در نقشه مشخص شده اند که با نرم افزار متین طب در بخش سلامت در حال فعالیت می باشند در بخش سلامت در حال فعالیت می باشند</p>
                </div>
            </div>

        </div>

        <div class="flex flex-col items-center w-full">

            <SectionTitle
                title="فرم ثبت درخواست دمو پروژه"
                description="گسترش روز به روز محصولات کار گروهی مجرب و سخت کوش است"
                theme="dark"
            />

            <div class="w-[90%] grid grid-cols-2">

                <div class="flex flex-col gap-1">
                    <label for="name">نام و نام خوانوگی</label>
                    <input type="text" id="name" class="w-full h-12 bg- border bg-[#19191A] outline-none focus:border-primary-100 rounded-150 focus:bg-[#25272A]">
                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>

</style>