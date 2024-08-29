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
    <div :class="{'shadow-main shadow-primary' : active}">
        <img :src="image" :alt="title" class="w-[400px]" />
    </div>
</template>
