// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },

    ssr: true,

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                }
            ]
        }
    },

    css: [
        'swiper/css',
        "~/assets/css/tailwind.css",
        "~/assets/css/style.css"
    ],

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000'
        }
    },

    compatibilityDate: "2024-08-24",

    plugins: [
        '~/plugins/tanstack.ts'
    ],

    modules: [
        "@nuxt/image"
    ],
});