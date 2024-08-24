// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: [
        "~/assets/css/tailwind.css",
        "~assets/css/style.css"
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    compatibilityDate: "2024-08-24",
});
