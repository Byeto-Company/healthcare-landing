<script setup lang="ts">
// imports

import useSubmitContactUs from "~/composables/api/contact-us/useSubmitContactUs";
import {
    helpers,
    required,
    email,
    minLength,
    sameAs,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

// types

type ContactInfoType = {
    full_name: string;
    subject: string;
    email: string;
    message: string;
    accept_rules: boolean;
};

// state

const { $toast: toast }: any = useNuxtApp();

const contactUsInfo = ref<ContactInfoType>({
    full_name: "",
    subject: "",
    email: "",
    message: "",
    accept_rules: false,
});

// queries

const { mutateAsync: submitContactUs, isPending: isSubmitContactUsPending } =
    useSubmitContactUs();

// computed

const formRules = computed(() => {
    return {
        full_name: {
            required: helpers.withMessage(
                "نام و نام خانوادگی الزامی می باشد",
                required
            ),
            minLength: helpers.withMessage(
                "نام و نام خانوادگی حداقل 5 کرکتر می باشد",
                minLength(5)
            ),
        },
        subject: {
            required: helpers.withMessage("عنوان اجباری می باشد", required),
            minLength: helpers.withMessage(
                "عنوان حداقل 5 کرکتر می باشد",
                minLength(5)
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
            required: helpers.withMessage("متن پیام اجباری می باشد", required),
            minLength: helpers.withMessage(
                "متن پیام حداقل 30 کرکتر می باشد",
                minLength(30)
            ),
        },
        accept_rules: {
            sameAs: helpers.withMessage(
                "تایید قوانین و مقررات اجباری می باشد",
                sameAs(true)
            ),
        },
    };
});

const formValidator$ = useVuelidate(formRules, contactUsInfo);

// methods

const handleSubmit = () => {
    formValidator$.value.$validate();
    if (!formValidator$.value.$errors.length) {
        submitContactUs(contactUsInfo.value, {
            onSuccess: () => {
                toast.success("درخواست شما با موفقیت ثبت شد");
                contactUsInfo.value = {
                    full_name: "",
                    subject: "",
                    email: "",
                    message: "",
                    accept_rules: false,
                };
                formValidator$.value.$reset();
            },
        });
    }
};
</script>

<template>
    <section
        class="w-full h-full flex flex-col items-center justify-center relative gap-[6.25rem] min-h-[100svh] pt-[10vh] lg:pt-[15vh]"
    >
        <!-- orbs -->
        <div
            class="size-[200px] z-lowest bg-primary/80 blur-[150px] absolute top-1/2 -left-10 -translate-y-1/2"
        ></div>
        <div
            class="size-[200px] z-lowest bg-secondary/80 blur-[150px] absolute top-1/2 -right-10 -translate-y-1/2"
        ></div>

        <div
            class="flex flex-col items-center container w-full pb-[4.25rem] z-high"
        >
            <SectionTitle
                title="فرم ثبت درخواست دمو پروژه"
                description="گسترش روز به روز محصولات کار گروهی مجرب و سخت کوش است"
            />

            <form
                class="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full px-5 lg:w-[70%] mt-10 lg:mt-20"
            >
                <FormInput
                    label="نام و نام خانوادگی"
                    v-model="contactUsInfo.full_name"
                    theme="light"
                    id="name"
                    :validator="formValidator$.full_name"
                />

                <FormInput
                    label="عنوان"
                    v-model="contactUsInfo.subject"
                    theme="light"
                    id="name"
                    :validator="formValidator$.subject"
                />

                <FormInput
                    label="ایمیل"
                    v-model="contactUsInfo.email"
                    theme="light"
                    id="name"
                    :validator="formValidator$.email"
                />

                <FormTextarea
                    label="متن پیام"
                    v-model="contactUsInfo.message"
                    theme="light"
                    id="name"
                    class="col-span-full"
                    :validator="formValidator$.message"
                />

                <div class="flex items-center justify-start col-span-full">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center">
                            <input
                                id="rule-checkbox"
                                type="checkbox"
                                v-model="contactUsInfo.accept_rules"
                                class="bg-white rounded size-4"
                                :class="
                                    formValidator$.accept_rules.$error
                                        ? 'ring-red-700 !border-red-700'
                                        : 'text-primary focus:ring-primary border-gray-300'
                                "
                            />
                            <label
                                for="rule-checkbox"
                                class="text-sm font-medium text-black select-none ms-2"
                                >قوانین و مقررات را قبول دارم</label
                            >
                        </div>
                        <span
                            v-if="formValidator$.accept_rules.$error"
                            class="pr-[1.1rem] text-sm font-medium text-red-700 select-none ms-2"
                            >{{
                                formValidator$.accept_rules.$errors[0].$message
                            }}
                        </span>
                    </div>
                </div>

                <button
                    @click="handleSubmit"
                    type="button"
                    :disabled="isSubmitContactUsPending"
                    class="py-3 text-white transition-all disabled:opacity-90 col-span-full bg-primary hover:bg-primary-600 rounded-100"
                >
                    <span v-if="!isSubmitContactUsPending">ارسال پیام</span>
                    <span v-else>
                        <i
                            class="text-xl text-white fa-solid fa-spinner animate-spin"
                        ></i>
                    </span>
                </button>
            </form>
        </div>
    </section>
</template>

<style scoped></style>
