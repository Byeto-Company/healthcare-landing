<script setup lang="ts"></script>

<template>
    <div class="relative flex flex-col justify-between w-full h-full font-iran-yekan-x">
        <Header />
        <main class="w-full pt-20 pb-24 overflow-x-hidden">
            <slot />
        </main>
        <Footer />
    </div>
</template>
