<script setup lang="ts">
// imports

import type { SubmitDemoRequest } from "~/composables/api/homepage/useSubmitDemo";
import useSubmitDemo from "~/composables/api/homepage/useSubmitDemo";
import useGetContent from "~/composables/api/useGetContent";
import {
    helpers,
    required,
    email,
    minLength,
    maxLength,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

// state

const config = useRuntimeConfig();
const { $toast: toast }: any = useNuxtApp();

const demoInfo = ref<SubmitDemoRequest>({
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    message: "",
    module_name: "",
    phone_number: "",
});

// queries

const { data: content } = useGetContent();
const { mutateAsync: submitDemo, isPending: isSubmitDemoPending } =
    useSubmitDemo();

// computed

const demoImageUrl = computed(() => {
    return config.public.API_BASE_URL + content.value!.demo.image;
});

const formRules = computed(() => {
    return {
        first_name: {
            required: helpers.withMessage("نام الزامی می باشد", required),
            minLength: helpers.withMessage(
                "نام حداقل 3 کرکتر می باشد",
                minLength(3)
            ),
        },
        last_name: {
            required: helpers.withMessage(
                "نام خانوادگی الزامی می باشد",
                required
            ),
            minLength: helpers.withMessage(
                "نام خانوادگی حداقل 3 کرکتر می باشد",
                minLength(3)
            ),
        },
        company_name: {
            required: helpers.withMessage("نام مرکز الزامی می باشد", required),
            minLength: helpers.withMessage(
                "نام مرکز حداقل 3 کرکتر می باشد",
                minLength(3)
            ),
        },
        module_name: {
            required: helpers.withMessage("ماژول الزامی می باشد", required),
            minLength: helpers.withMessage(
                "نام مرکز حداقل 3 کرکتر می باشد",
                minLength(3)
            ),
        },
        phone_number: {
            required: helpers.withMessage(
                "شماره تلفن الزامی می باشد",
                required
            ),
            minLength: helpers.withMessage(
                "شماره تلفن حداقل 11 کرکتر می باشد",
                minLength(11)
            ),
            maxLength: helpers.withMessage(
                "شماره تلفن حداکثر 13 کرکتر می باشد",
                maxLength(13)
            ),
            valid: helpers.withMessage(
                "شماره تلفن معتبر نمی باشد",
                (value: string) =>
                    !value || new RegExp(/^(\\+98|0)?9\d{9}$/).test(value)
            ),
        },
        email: {
            required: helpers.withMessage(
                "پست الکترونیکی اجباری می باشد",
                required
            ),
            email: helpers.withMessage("پست الکترونیکی معتبر نمی باشد", email),
            minLength: helpers.withMessage(
                "پست الکترونیکی حداقل 10 کرکتر می باشد",
                minLength(10)
            ),
        },
        message: {
            required: helpers.withMessage("توضیحات اجباری می باشد", required),
            minLength: helpers.withMessage(
                "توضیحات حداقل 30 کرکتر می باشد",
                minLength(30)
            ),
        },
    };
});

const formValidator$ = useVuelidate(formRules, demoInfo);

// methods

const handleSubmit = () => {
    formValidator$.value.$validate();
    if (!formValidator$.value.$errors.length) {
        submitDemo(demoInfo.value, {
            onSuccess: () => {
                toast.success("درخواست شما با موفقیت ثبت شد");
                demoInfo.value = {
                    first_name: "",
                    last_name: "",
                    email: "",
                    company_name: "",
                    message: "",
                    module_name: "",
                    phone_number: "",
                };
                formValidator$.value.$reset();
            },
        });
    }
};
</script>

<template>
    <section id="demo-section" class="w-full bg-[#19191A]">
        <div class="container flex flex-col items-center w-full">
            <div
                class="w-full py-[4.25rem] [mask:_linear-gradient(180deg,_white_0%,_white_80%,_transparent_100%)]"
            >
                <div class="w-full lg:w-[90%] flex items-center">
                    <div class="w-1/2 flex-center h-[25rem] max-lg:hidden">
                        <NuxtImg
                            :src="demoImageUrl"
                            class="object-cover size-4/5"
                            alt="demo"
                        />
                    </div>

                    <div
                        class="flex flex-col w-full gap-6 px-5 max-lg:justify-center max-lg:items-center lg:w-1/2"
                    >
                        <span
                            class="py-0.5 text-xl lg:text-4xl lg:text-[2.75rem] font-extrabold text-gradient bg-gradient-to-r from-primary to-secondary"
                        >
                            {{ content!.demo.title }}
                        </span>
                        <span
                            class="text-[1rem] lg:text-2xl font-semibold text-white"
                        >
                            {{ content!.demo.subtitle }}
                        </span>
                        <p
                            class="text-gray-200 text-[1rem] lg:text-lg max-lg:text-center max-lg:px-4"
                        >
                            {{ content!.demo.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center w-full pb-[4.25rem]">
                <SectionTitle
                    :title="content?.demo.form.title"
                    :description="content?.demo.form.description"
                    theme="dark"
                />

                <form
                    class="lg:w-[70%] grid xs:grid-cols-2 gap-10 mt-20 w-full max-lg:px-4"
                >
                    <FormInput
                        v-model="demoInfo.first_name"
                        label="نام"
                        theme="dark"
                        id="name"
                        :validator="formValidator$.first_name"
                    />

                    <FormInput
                        v-model="demoInfo.last_name"
                        label="نام خانوادگی"
                        theme="dark"
                        id="name"
                        :validator="formValidator$.last_name"
                    />

                    <FormInput
                        v-model="demoInfo.email"
                        label="ایمیل"
                        theme="dark"
                        id="name"
                        :validator="formValidator$.email"
                    />

                    <FormInput
                        v-model="demoInfo.phone_number"
                        label="شماره تلفن"
                        theme="dark"
                        id="name"
                        :max="13"
                        :validator="formValidator$.phone_number"
                    />

                    <FormInput
                        v-model="demoInfo.company_name"
                        label="نام مرکز"
                        theme="dark"
                        id="name"
                        :validator="formValidator$.company_name"
                    />

                    <FormInput
                        v-model="demoInfo.module_name"
                        label="ماژول"
                        theme="dark"
                        id="name"
                        :validator="formValidator$.module_name"
                    />

                    <FormTextarea
                        class="col-span-full"
                        v-model="demoInfo.message"
                        label="توضیحات"
                        theme="dark"
                        id="name"
                        :validator="formValidator$.message"
                    />

                    <button
                        @click="handleSubmit"
                        type="button"
                        :disabled="isSubmitDemoPending"
                        class="py-3 text-white transition-all disabled:opacity-90 hover:brightness-125 col-span-full bg-primary rounded-360"
                    >
                        <span v-if="!isSubmitDemoPending">ثبت درخواست</span>
                        <span v-else>
                            <i
                                class="text-xl text-white fa-solid fa-spinner animate-spin"
                            ></i>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
