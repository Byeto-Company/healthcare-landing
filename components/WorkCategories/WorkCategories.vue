<script setup lang="ts">

import WorkCard from "~/components/WorkCategories/WorkCard.vue";
</script>

<template>
    <SectionTitle
        title="مدیران تیم خورشید رایان طلوع"
        description="در این قسمت با حوزه های فعالیت شرکت آشنا میشوید و شناختی کامل از تمامی خدمات شرکت و تیم قدرتمند ما پیدا میکنید"
    />
    <section class="container padding-main">
        <WorkCard
            title="حوزه سلامت"
            image="~/assets/images/work-categories/health.jpg"
            description=""
            :tags="['asdas','asdasd','asdas']"
        />
        <WorkCard
            title="طراحی وب"
            image="~/assets/images/work-categories/web-design.jpg"
            description=""
            :tags="['asdas','asdasd','asdas']"
        />
        <WorkCard
            title="سیستم های شبکه"
            image="~/assets/images/work-categories/network.jpg"
            description=""
            :tags="['asdas','asdasd','asdas']"
        />
    </section>
</template>

<style scoped>

</style>