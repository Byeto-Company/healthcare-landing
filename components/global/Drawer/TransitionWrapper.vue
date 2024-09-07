<template>
    <Transition :name="name">
        <slot></slot>
    </Transition>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        props: {
            fade: {
                type: Boolean,
                default: false
            },
            customFade: {
                type: Boolean,
                default: false  
            },
            slideLeft: {
                type: Boolean,
                default: false
            },
            slideRight: {
                type: Boolean,
                default: false
            },
        },

        computed: {
            name() {
                if (this.fade) return "fade";
                else if (this.slideLeft) return "slide-left"
                else if (this.slideRight) return "slide-right"
                else if (this.customFade) return "custom-fade"
                return ""
            }
        }
    })
</script>

<style scoped>
    /* --- fade --- */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    /* --- slide left --- */
    .slide-left-enter-active,
    .slide-left-leave-active {
        transition: all 0.3s ease-out;
    }


    .slide-left-enter-to {
        left: 0;
    }


    .slide-left-enter-from {
        left: -100%;
    }


    .slide-left-leave-to {
        left: -100%;
    }


    .slide-left-leave-from {
        left: 0;
    }

    /* --- slide right --- */
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition: all 0.2s ease-out;
    }


    .slide-right-enter-to {
        right: 0;
    }


    .slide-right-enter-from {
        right: -100%;
    }


    .slide-right-leave-to {
        right: -100%;
    }


    .slide-right-leave-from {
        right: 0;
    }

    /* --- custom fade --- */
    .custom-fade-enter-active {
        animation: showModal;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }
    .custom-fade-leave-active {
        animation: showModal;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-direction: reverse;
    }
    @keyframes showModal {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 2;
        }
        50% {
            opacity: 4;
        }
        75% {
            opacity: 7;
        }
        100% {
            opacity: 10;
        }
    }
</style>