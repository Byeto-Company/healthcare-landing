<script setup lang="ts">

// props

type WorkCardProps = {
    image: string;
    title: string;
    description: string;
    tags: string[];
    active?: boolean;
}

defineProps<WorkCardProps>();

</script>

<template>
    <div
        :class="active ? 'shadow-primary-200' : 'shadow-black/10'"
        class="rounded-200 overflow-hidden h-fit bg-white shadow-main"
    >
        <div class="h-[250px] w-full relative overflow-hidden flex justify-center items-center">
            <img :src="image" :alt="title" class="absolute object-cover w-full h-full" />
        </div>
        <div class="flex flex-col p-5 gap-2">
            <span class="font-semibold text-xl text-black">{{ title }}</span>
            <span class="text-sm text-gray-800">{{ description }}</span>
            <div class="mt-2 flex gap-2 font-semibold">
                <span
                    v-for="tag in tags"
                    class="bg-primary text-white rounded-360 px-4 py-1 text-sm"
                >
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>
