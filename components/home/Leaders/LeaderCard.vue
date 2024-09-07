<script setup lang="ts">

// props

type LeaderCardProps = {
    image: string;
    name: string;
    description: string;
    link: string;
}

defineProps<LeaderCardProps>();

</script>

<template>
    <div class="flex flex-col w-[150px] md:w-[200px] lg:w-[240px] h-fit items-center justify-center gap-4">
        <div class="aspect-square rounded-360 w-full relative overflow-hidden flex justify-center items-center">
            <img :src="image" :alt="name" class="absolute object-cover w-full h-full" />
        </div>
        <div class="flex flex-col justify-center items-center mt-3 gap-2">
            <span class="font-semibold text-lg lg:text-xl text-black text-center">{{ name }}</span>
            <span class="text-gray-800 text-center max-lg:text-xs">{{ description }}</span>
        </div>
    </div>
</template>
