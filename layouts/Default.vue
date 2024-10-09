<script setup lang="ts"></script>

<template>
    <div class="relative flex flex-col justify-between w-full h-full font-iran-yekan-x" dir="rtl">
        <Header />
        <main class="w-full lg:pt-20 pb-24 overflow-x-hidden">
            <slot />
        </main>
        <Footer />
    </div>
</template>
