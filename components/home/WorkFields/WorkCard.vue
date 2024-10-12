<script setup lang="ts">
// types

type WorkCardProps = {
    image: string;
    alt: string;
    title: string;
    description: string;
    tags: { title: string; link: string }[];
    active?: boolean;
};

// props

const props = defineProps<WorkCardProps>();

const { image } = toRefs(props);

// state

const config = useRuntimeConfig();

// computed

const imageUrl = computed(() => {
    return `${config.public.API_BASE_URL}/${image.value}`;
});
</script>

<template>
    <div
        :class="
            active
                ? 'shadow-black/10 md:shadow-primary-200 md:-translate-y-8'
                : 'shadow-black/10'
        "
        class="overflow-hidden bg-white rounded-200 h-fit shadow-main"
    >
        <div
            class="h-[170px] lg:h-[250px] w-full relative overflow-hidden flex justify-center items-center"
        >
            <NuxtImg
                :src="imageUrl"
                :alt="title"
                class="object-cover w-full h-full"
            />
        </div>
        <div class="flex flex-col gap-2 p-5 md:p-4 lg:p-5">
            <span class="text-lg font-semibold text-black lg:text-xl">{{
                title
            }}</span>
            <span
                class="w-full overflow-hidden text-sm text-gray-800 text-ellipsis"
                v-html="description"
            />
            <div class="flex gap-2 mt-2 font-semibold">
                <NuxtLink
                    v-for="(tag, index) in tags"
                    :key="index"
                    class="px-4 py-1 text-xs text-white bg-primary rounded-360 lg:text-sm whitespace-nowrap"
                >
                    {{ tag.title }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
