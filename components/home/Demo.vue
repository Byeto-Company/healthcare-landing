<script setup lang="ts">

// imports

import useGetContent from "~/composables/api/useGetContent";

// types

type requestDataInfoType = {
    name: string
}

// state

const requestDataInfo = ref<requestDataInfoType>({
    name: ""
});

const config = useRuntimeConfig();

const { data: content } = useGetContent();

const demoImageUrl = computed(() => {
    return config.public.API_BASE_URL + content.value!.demo.image
})

</script>

<template>
    <section class="w-full bg-[#19191A]">
        <div class="flex flex-col items-center container w-full">

            <div class="w-full py-[4.25rem] [mask:_linear-gradient(180deg,_white_0%,_white_80%,_transparent_100%)]">

                <div class="w-full lg:w-[90%] flex items-center">
                    <div class="w-1/2 flex-center max-lg:hidden">
                        <img :src="demoImageUrl" class="object-cover size-4/5" alt="demo">
                    </div>

                    <div class="flex flex-col w-full max-lg:justify-center max-lg:items-center lg:w-1/2 gap-6">
                        <span class="py-0.5 text-4xl lg:text-[2.75rem] font-extrabold text-gradient bg-gradient-to-r from-primary to-secondary">
                            {{content!.demo.title}}
                        </span>
                        <span class="text-2xl font-semibold text-white">
                            {{content!.demo.subtitle}}
                        </span>
                        <p class="lg:text-lg  text-gray-200 max-lg:text-center max-lg:px-4">
                            {{content!.demo.description}}
                        </p>
                    </div>
                </div>

            </div>

            <div class="flex flex-col items-center w-full pb-[4.25rem]">

                <SectionTitle
                    :title="content!.demo.form.title"
                    :description="content!.demo.form.description"
                    theme="dark"
                />

                <form class="lg:w-[70%] grid xs:grid-cols-2 gap-10 mt-20 w-full max-lg:px-4">

                    <FormInput
                        v-model="requestDataInfo.name"
                        label="نام"
                        theme="dark"
                        id="name"
                    />

                    <FormInput
                        v-model="requestDataInfo.name"
                        label="نام خانوادگی"
                        theme="dark"
                        id="name"
                    />

                    <FormInput
                        v-model="requestDataInfo.name"
                        label="ایمیل"
                        theme="dark"
                        id="name"
                    />

                    <FormInput
                        v-model="requestDataInfo.name"
                        label="شماره تلفن"
                        theme="dark"
                        id="name"
                    />

                    <FormInput
                        v-model="requestDataInfo.name"
                        label="نام مرکز"
                        theme="dark"
                        id="name"
                    />

                    <FormInput
                        v-model="requestDataInfo.name"
                        label="ماژول"
                        theme="dark"
                        id="name"
                    />

                    <FormTextarea
                        class="col-span-full"
                        v-model="requestDataInfo.name"
                        label="ماژول"
                        theme="dark"
                        id="name"
                    />

                    <button
                        class="py-3 text-white transition-all hover:brightness-125 col-span-full bg-primary rounded-360">
                        ثبت درخواست
                    </button>

                </form>

            </div>

        </div>
    </section>
</template>

<style scoped>

</style>