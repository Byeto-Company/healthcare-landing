<script setup lang="ts">
// imports

import { useRoute } from "vue-router";
import { useWindowSize } from "@vueuse/core";

// emit

const emit = defineEmits(["update:modelValue", "goToSection"]);

// props

interface Props {
    modelValue: boolean;
    navLinks: {
        title: string;
        path: string;
    }[];
}

const props = defineProps<Props>();

// state

const { height: windowHeight } = useWindowSize();
const route = useRoute();

// methods

const close = () => {
    emit("update:modelValue", false);
};

const scrollTo = (link: { title: string; path: string }) => {
    emit("goToSection", link);
    emit("update:modelValue", false);
};
</script>

<template>
    <Overlay :show="modelValue" @click="close" class="z-highest">
        <TransitionWrapper slide-right>
            <div
                v-show="modelValue"
                class="w-[18.875rem] fixed bg-white lg:hidden p-6 z-highest"
                :style="{
                    height: `${windowHeight}px`,
                }"
            >
                <div
                    class="flex items-center justify-between w-full pb-4 border-b border-main-red"
                >
                    <button
                        @click="close"
                        class="flex items-center gap-3 pt-3 pr-2"
                    >
                        <i
                            class="fa-solid fa-xmark text-black dark:text-white text-[1.4rem]"
                        ></i>
                        <p class="font-bold text-black dark:text-white">بستن</p>
                    </button>
                </div>

                <div
                    class="w-full overflow-scroll pb-[40%]"
                    :style="{
                        height: `${windowHeight - 108}px`,
                    }"
                >
                    <div class="flex flex-col py-3 divide-y gap-y-1">
                        <template
                            v-for="(link, index) in navLinks"
                            :key="index"
                        >
                            <button
                                v-if="link.path.startsWith('#')"
                                @click="scrollTo(link)"
                                class="flex items-center w-full gap-3 py-3 text-right"
                            >
                                <i
                                    class="mr-2 font-semibold fa-solid fa-minus text-gradient bg-gradient-to-r from-secondary to-primary"
                                ></i>
                                <p
                                    class="text-sm font-semibold text-black dark:text-white"
                                >
                                    {{ link.title }}
                                </p>
                            </button>
                            <a
                                v-else
                                class="flex items-center w-full gap-3 py-3 text-right"
                                :href="link.path"
                            >
                                <i
                                    class="mr-2 font-semibold fa-solid fa-minus text-gradient bg-gradient-to-r from-secondary to-primary"
                                ></i>
                                <p
                                    class="text-sm font-semibold text-black dark:text-white"
                                >
                                    {{ link.title }}
                                </p>
                            </a>
                        </template>
                    </div>
                </div>
            </div>
        </TransitionWrapper>
    </Overlay>
</template>
