<script setup lang="ts">

// imports

import useGetCustomers from "~/composables/api/customers/useGetCustomers";

// states

const { fetchNextPage, hasNextPage, isFetching } = useGetCustomers();

</script>

<template>
    <div v-if="hasNextPage"
         class="w-[70%] mt-20 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] relative">
        <button
            @click="() => fetchNextPage()"
            class="hover-effect absolute px-8 py-2 text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-max flex-center rounded-360 bg-primary">
            <span v-if="!isFetching">
                نمایش بیشتر +
            </span>
            <span v-else>
                <i class="fa-solid fa-spinner text-xl text-white animate-spin"></i>
            </span>
        </button>
    </div>
</template>

<style scoped>

</style>