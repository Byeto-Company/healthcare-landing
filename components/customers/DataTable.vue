<script setup lang="ts">

// imports

import useGetCustomers from "~/composables/api/customers/useGetCustomers";

// states

const { data: customers } = useGetCustomers();

const customersList = computed(() => {
    return customers.value?.pages.map(i => i.results).flat();
});

</script>

<template>
    <tbody
        class="[&>*:nth-child(odd)]:bg-[#00000005]"
    >
    <tr
        v-for="(customer, index) in customersList"
        :key="index"
    >
        <th class="w-1/4 py-0.5 ps-8">
            <div class="flex py-5 font-medium text-black/50">
                {{ customer.name }}
            </div>
        </th>
        <th class="w-1/4 py-0.5">
            <div class="flex py-5 font-medium text-black/50">
                {{ customer.corporate_date }}
            </div>
        </th>
        <th class="w-1/4 py-0.5">
            <div class="flex py-5 font-medium text-black/50">
                {{ customer.name }}
            </div>
        </th>
        <th class="w-1/4 py-0.5">
            <div class="flex justify-center py-5 font-medium text-black/50">
                {{ customer.city }}
            </div>
        </th>
    </tr>
    </tbody>
</template>

<style scoped>

</style>