<script setup lang="ts">

</script>

<template>
    <section class="mt-12">
        <SectionTitle
            title="حوزه کاری خورش2ید رایان طلوع"
            description="در این قسمت با حوزه های فعالیت شرکت آشنا میشوید و شناختی کامل از تمامی خدمات شرکت و تیم قدرتمند ما پیدا میکنید"
        />
        <div class="container padding-main flex max-md:flex-wrap justify-center gap-12 md:gap-8 lg:gap-16 mt-20 md:mt-28">
            <WorkCard
                title="سیستم های شبکه"
                image="/work-categories/network.jpg"
                description="ترکیب سلامتسلامت و اطلاعات در تمام زمینه ها"
                :tags="['سیستم شبکه','شبکه']"
            />
            <WorkCard
                active
                class="md:-translate-y-8"
                title="طراحی وب"
                image="/work-categories/web-design.jpg"
                description="ترکیب سلامتسلامت و اطلاعات در تمام زمینه ها"
                :tags="['طراحی','وبسایت']"
            />
            <WorkCard
                title="حوزه سلامت"
                image="/work-categories/health.jpg"
                description="ترکیب سلامتسلامت و اطلاعات در تمام زمینه ها"
                :tags="['سلامت','بهداشت شخصی']"
            />
        </div>
    </section>
</template>

<style scoped>

</style>