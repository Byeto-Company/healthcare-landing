<script setup lang="ts">

</script>

<template>
    <section>
        <SectionTitle
            title="حوزه کاری خورشید رایان طلوع"
            description="در این قسمت با حوزه های فعالیت شرکت آشنا میشوید و شناختی کامل از تمامی خدمات شرکت و تیم قدرتمند ما پیدا میکنید"
        />
        <div class="container padding-main flex justify-center gap-16 mt-28">
            <WorkCard
                title="سیستم های شبکه"
                image="/work-categories/network.jpg"
                description="ترکیب سلامتسلامت و اطلاعات در تمام زمینه ها"
                :tags="['سیستم شبکه','شبکه']"
            />
            <WorkCard
                active
                class="-translate-y-8"
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