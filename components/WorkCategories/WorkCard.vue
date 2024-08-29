<script setup lang="ts">

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
        <img src="~/assets/images/work-categories/health.jpg" :alt="title" class="w-[400px]" />
    </div>
</template>

<style scoped>

</style>
*{
padding: 0;
margin: 0;
direction: rtl !important;
}