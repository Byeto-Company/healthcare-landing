<script setup lang="ts"></script>

<template>
    <div class="relative w-full h-full font-iran-yekan-x">
        <Header />
        <main class="container w-full pt-20 pb-24 overflow-x-hidden">
            <slot />
        </main>
        <Footer />
    </div>
</template>
