<script setup lang="ts">

// types

    type ContactInfoType = {
        name: string,
        title: string,
        email: string,
        message: string
    }

// state

    const contactUsInfo = ref<ContactInfoType>({
        name: '',
        email: '',
        title: '',
        message: ''
    })

</script>

<template>
    <section class="w-full h-full flex flex-col items-center relative gap-[6.25rem] min-h-[100svh]">

        <!-- orbs -->
        <div class="size-[200px] z-lowest bg-primary/80 blur-[150px] absolute top-1/2 -left-10 -translate-y-1/2"></div>
        <div class="size-[200px] z-lowest bg-secondary/80 blur-[150px] absolute top-1/2 -right-10 -translate-y-1/2"></div>

        <div class="flex flex-col items-center w-full pb-[4.25rem] z-high">

            <SectionTitle
                title="فرم ثبت درخواست دمو پروژه"
                description="گسترش روز به روز محصولات کار گروهی مجرب و سخت کوش است"
            />

            <form class="grid grid-cols-3 gap-10 w-[70%] mt-20">

                <FormInput 
                    label="تام و نام خانوادگی"
                    v-model="contactUsInfo.name"
                    theme="light"
                    id="name"
                />

                <FormInput 
                    label="عنوان"
                    v-model="contactUsInfo.title"
                    theme="light"
                    id="name"
                />

                <FormInput 
                    label="ایمیل"
                    v-model="contactUsInfo.email"
                    theme="light"
                    id="name"
                />

                <FormTextarea 
                    label="متن پیام"
                    v-model="contactUsInfo.message"
                    theme="light"
                    id="name"
                    class="col-span-full"
                />

                <div class="flex items-center justify-start col-span-full">
                    <div class="flex items-center mb-4">
                        <input id="rule-checkbox" type="checkbox" class="bg-red-700 border-gray-300 rounded size-4 text-primary focus:ring-primary">
                        <label for="rule-checkbox" class="text-sm font-medium text-black select-none ms-2">قوانین و مقررات را قبول دارم</label>
                    </div>
                </div>
            
                <button class="py-3 text-white col-span-full bg-primary rounded-100">
                    ارسال پیام
                </button>

            </form>



        </div>

    </section>
</template>

<style scoped>

</style>