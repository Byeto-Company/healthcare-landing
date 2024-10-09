<script setup lang="ts">

// types

type Props = {
    title: string,
    index: number,
    id: string
    count: number,
    currentAccordionId: string | null,
    items: [
        {
            title: string,
            path: string
        }
    ]
}

// emit

defineEmits(["update:currentAccordionId"]);

// props

const props = defineProps<Props>();

const { currentAccordionId, id } = toRefs(props);

// computed

const isActive = computed(() => currentAccordionId.value == id.value);

</script>

<template>
    <div>
        <button
            @click="$emit('update:currentAccordionId', isActive ? null : id)"
            type="button"
            :class="index != 1 ? 'border-t border-gray-200' : ''"
            class="flex items-center justify-between w-full gap-3 py-4 font-medium text-gray-500"
        >
            <span>{{ title }}</span>
            <i class="text-sm transition-all fa-solid fa-chevron-down" :class="isActive ? 'rotate-180' : ''"></i>
        </button>
        <div :class="isActive ? 'pb-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'"
             class="grid overflow-hidden transition-all duration-300 ease-in-out gap-4">
            <div class="overflow-hidden">
                <NuxtLink
                    v-for="(link, index) in items"
                    :key="index"
                    :to="link.path"
                >
                    {{ link.title }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>