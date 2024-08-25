<script setup lang="ts"></script>

<template>
    <div class="relative w-full h-full font-iran-yekan-x">
        <Header />
        <main class="container flex flex-col gap-[6.25rem]">
            <slot />
        </main>
        <Footer />
    </div>
</template>
