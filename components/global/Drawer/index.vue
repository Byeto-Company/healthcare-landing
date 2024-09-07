<script setup lang="ts">

// imports

    import { useRoute } from 'vue-router';
    import { useWindowSize } from '@vueuse/core'

// emit

    const emit = defineEmits(['update:modelValue', 'goToSection'])

// props

    interface Props {
        modelValue: boolean;
        navLinks: {
            title: string,
            path: string
        }[]
    }

    const props = defineProps<Props>()

// state

    const { height: windowHeight } = useWindowSize()
    const route = useRoute()

// methods

    const close = () => {
        emit('update:modelValue', false)
    }

    const scrollTo = (id: string) => {
        emit('goToSection', id)
        emit('update:modelValue', false)
    }

</script>

<template>
    <Overlay 
        :show="modelValue"
         @click="close"
         class="z-highest"
    >
        <TransitionWrapper slide-right>
            <div v-show="modelValue" 
                class="w-[18.875rem] fixed inset-y-0 bg-white lg:hidden p-6"
            >

                <div class="flex items-center justify-between w-full pb-4 border-b border-main-red">
                    <button @click="close" class="flex items-center gap-3 pt-3 pr-2">
                        <i class="fa-solid fa-xmark text-black dark:text-white text-[1.4rem]"></i>
                        <p class="font-bold text-black dark:text-white">بستن</p>
                    </button>
                </div>

                <div class="w-full overflow-scroll pb-[40%]"
                    :style="{
                        height: `${windowHeight - 108}px`
                    }"
                >
                    <div class="flex flex-col py-3 divide-y gap-y-1">
                        <button @click="scrollTo('#about-us')" class="flex items-center w-full gap-3 py-3 text-right">
                            <i class="fa-solid fa-minus text-black dark:text-white text-[1rem] mr-2"></i>
                            <p class="font-[IRANsans-light] text-black dark:text-white text-[.9rem]">درباره ما</p>
                        </button>
                        <button @click="scrollTo('#products')" class="flex items-center w-full gap-3 py-3 text-right">
                            <i class="fa-solid fa-minus text-black dark:text-white text-[1rem] mr-2"></i>
                            <p class="font-[IRANsans-light] text-black dark:text-white text-[.9rem]">محصولات</p>
                        </button>
                        <button @click="scrollTo('#prefactore')" class="flex items-center w-full gap-3 py-3 text-right">
                            <i class="fa-solid fa-minus text-black dark:text-white text-[1rem] mr-2"></i>
                            <p class="font-[IRANsans-light] text-black dark:text-white text-[.9rem]">پیش فاکتور</p>
                        </button>
                        <button @click="scrollTo('#contact-us')" class="flex items-center w-full gap-3 py-3 text-right">
                            <i class="fa-solid fa-minus text-black dark:text-white text-[1rem] mr-2"></i>
                            <p class="font-[IRANsans-light] text-black dark:text-white text-[.9rem]">ارتباط با ما</p>
                        </button>
                    </div>
                </div>            
            </div>
        </TransitionWrapper>
    </Overlay>

</template>