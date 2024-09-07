<template>
    <TransitionWrapper fade>
        <div v-show="show" 
            @click.self="$emit('hide')"
            class="back-drop"
            :style="{ background: bg }"
            style="z-index:99999998">
            <slot></slot>
        </div>
    </TransitionWrapper>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
    props: {
        show: {
            type: Boolean,
            default: false
        },
        bg: {
            type: String,
            default: "#0000008e"
        },
    },
})
</script>

<style scoped>
    .back-drop {
        @apply fixed inset-0;
    }
</style>