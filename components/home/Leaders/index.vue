<script setup lang="ts">
import useGetContent from "~/composables/api/useGetContent";

const config = useRuntimeConfig();

const { data: content } = useGetContent();
</script>

<template>
    <section id="leaders-section">
        <SectionTitle
            :title="content!.leaders.title"
            :description="content!.leaders.description"
        />
        <div
            class="container padding-main w-[90%] flex-wrap flex justify-center gap-16 sm:gap-20 lg:gap-32 mt-20 md:mt-28"
        >
            <LeaderCard
                v-for="leader in content!.leaders.members"
                :key="leader.id"
                link="#"
                :name="leader.name"
                :image="config.public.API_BASE_URL + '/' + leader.image"
                :description="leader.description"
            />
        </div>
    </section>
</template>

<style scoped></style>
