<script setup lang="ts">
// imports

import useGetContent from "~/composables/api/useGetContent";

// state

const { data: content } = useGetContent();
</script>

<template>
    <section id="work-fields-section">
        <SectionTitle
            :title="content?.work_fields.title"
            :description="content?.work_fields.description"
        />
        <div
            class="container flex justify-center gap-12 mt-20 padding-main max-md:flex-wrap md:gap-8 lg:gap-16 md:mt-28"
        >
            <WorkCard
                v-for="(field, index) in content?.work_fields.fields"
                :key="index"
                :title="field.title"
                :image="field.image.image"
                :alt="field.image.alt"
                :description="field.description"
                :tags="field.tags"
                :active="index == 1"
            />
        </div>
    </section>
</template>

<style scoped></style>
