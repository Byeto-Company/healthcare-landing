import Toast, { useToast } from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        position: "top-center",
        hideProgressBar: true,
        transition: "Vue-Toastification__fade",
        maxToasts: 3,
        closeButton: false,
    });

    return {
        provide: {
            toast: useToast(),
        },
    };
});
