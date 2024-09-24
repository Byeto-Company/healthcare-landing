<script setup lang="ts">
    
// state

    const route = useRoute()

    const currentAccordionId = ref<string | null>('test-1')
    const accordions = ref<any>([
        {
            title: 'تست',
            items: [
                {
                    title: 'تست',
                    path: '/test'
                }
            ]
        },
        {
            title: 'تست',
            items: [
                {
                    title: '2تست',
                    path: '/test2'
                }
            ]
        },
        {
            title: 'تست',
            items: [
                {
                    title: 'تست',
                    path: '/test3'
                },
                {
                    title: 'تست',
                    path: '/test2'
                },
            ]
        },
    ])

</script>

<template>
    <section class="w-full h-full flex flex-col container items-center gap-[4.25rem] min-h-[100svh]">
        
        <div class="w-full lg:-mt-10 padding-main flex-center mt-[40px]">
            <div class="w-full h-[12rem] xs:h-[16rem] lg:h-[20rem] flex flex-col justify-center gap-6 xs:gap-10 bg-black rounded-150">
                <div class="w-full gap-8 flex-center h-max">

                    <img src="/title-shape-right.png" class="scale-85 max-lg:hidden">

                    <h1 class="text-2xl xs:text-3xl font-semibold text-white">
                        محصول شماره یک
                    </h1>

                    <img src="/title-shape-left.png" class="scale-85 max-lg:hidden">

                </div>

                <div class="gap-2.5 xs:gap-5 flex-center">

                    <span class="text-xs xs:text-sm font-medium text-white">محصولات</span>

                    <i class="text-xs xs:text-sm text-white fa-solid fa-chevron-left"></i>

                    <span class="text-xs xs:text-sm font-medium text-gradient bg-gradient-to-r from-secondary to-primary">سیستم مدیریت اطلاعات بیمارستانی</span>

                </div>

            </div>
        </div>

        <div class="flex items-start w-full gap-8 padding-main">

            <!-- content -->

            <article class="flex flex-col w-full lg:w-9/12 gap-16">
                
                <section class="flex flex-col gap-4">

                    <NuxtImg 
                        src="/product-image.png" 
                        alt="product-1"
                        densities="x1 x2"
                    />

                    <p class="text-black leading-[2rem] text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                    
                </section>

                <section class="flex flex-col gap-4">
                    
                    <div class="w-full px-6 py-5 bg-white [box-shadow:_0px_0px_10px_#00000020] rounded-100">
                        <span class="font-bold text-gradient bg-gradient-to-r from-secondary to-primary">
                            ویژگی های سیستم جامع مدیریت اطلاعات تصویربرداری
                        </span>
                    </div>

                    <div class="flex flex-col gap-3.5 mt-1 pr-5">

                        <div class="flex items-start gap-2">
                            <span class="mt-3 size-2 rounded-360 bg-gradient-to-b from-secondary to-primary shrink-0"></span>
                            <p class="text-gray-500 leading-[2rem] text-sm">عدم پیچیدگی فرمها در طراحی نرم افزار و راحتی بكارگیری سیستم</p>
                        </div>

                        <div class="flex items-start gap-2">
                            <span class="mt-3 size-2 rounded-360 bg-gradient-to-b from-secondary to-primary shrink-0"></span>
                            <p class="text-gray-500 leading-[2rem] text-sm">امكان كنترل هوشمند دفترچه بیمه بیمار با مراجعات قبلی وی</p>
                        </div>

                        <div class="flex items-start gap-2">
                            <span class="mt-3 size-2 rounded-360 bg-gradient-to-b from-secondary to-primary shrink-0"></span>
                            <p class="text-gray-500 leading-[2rem] text-sm">قابلیت لینك به سیستم بیمارستانی در مراكز تصویربرداری بیمارستانی جهت دریافت الكترونیكی درخواست ، پذیرش خودكار ، جوابدهی online و استعلام زمان ترخیص و ویرایش خودكار پرونده همزمان با ویرایش بیمه در ترخیص بیمارستان</p>
                        </div>

                        <div class="flex items-start gap-2">
                            <span class="mt-3 size-2 rounded-360 bg-gradient-to-b from-secondary to-primary shrink-0"></span>
                            <p class="text-gray-500 leading-[2rem] text-sm">عدم پیچیدگی فرمها در طراحی نرم افزار و راحتی بكارگیری سیستم</p>
                        </div>
                        

                    </div>

                </section>

                <section class="flex flex-col gap-4">
                    
                    <div class="w-full px-6 py-5 bg-white [box-shadow:_0px_0px_10px_#00000020] rounded-100">
                        <span class="font-bold text-gradient bg-gradient-to-r from-secondary to-primary">
                            قابلیت های سیستم جامع
                        </span>
                    </div>

                    <div class="flex flex-col gap-8 pr-5 mt-1">

                        <span v-for="i in 4" :key="i" class="flex items-center gap-2.5">
                            <NuxtImg 
                                src="/check.svg"
                                class="shrink-0 size-7 xs:size-9"
                            />
                            <span class="text-sm font-medium text-gray-500">
                                قابلیت های سیستم جامع
                            </span>
                        </span>
                    </div>

                </section>

                <p class="text-black leading-[2rem] text-justify">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>

            </article>

            <!-- aside -->

            <aside class="flex flex-col w-3/12 px-6 py-2 border-2 border-gray-200 h-max rounded-150 max-lg:hidden">
                
                <AccordionItem
                    v-for="(item, index) in accordions"
                    :key="index"
                    :index="index + 1"
                    :title="item.title"
                    :id="`test-${index + 1}`"
                    :count="accordions.length"
                    v-model:currentAccordionId="currentAccordionId"
                    :items="item.items"
                />

            </aside>

        </div>

    </section>
</template>
