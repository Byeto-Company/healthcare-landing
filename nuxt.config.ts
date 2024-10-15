// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },

    ssr: true,

    routeRules: {
        "/": {
            swr: 3600
        },
        "/contact-us": {
            swr: 3600
        },
        "/customers": {
            swr: 3600
        },
        "/product/**": {
            swr: 3600
        }
    },

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
                },
            ],
        },
        pageTransition: {
            enterActiveClass:
                "animate__animated animate__fadeIn animate__faster",
            leaveActiveClass:
                "animate__animated animate__fadeOut animate__faster",
            mode: "out-in",
        },
    },

    pwa: {
        manifest: {
            name: "Health Care",
            short_name: "Health Care",
            description: "Health Care",
            theme_color: "#5281e0",
            icons: [
                {
                    src: "/icons/pwa-64x64.png",
                    sizes: "64x64",
                    type: "image/png",
                },
                {
                    src: "/icons/pwa-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "/icons/pwa-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
                {
                    src: "/icons/maskable-icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "maskable",
                },
                {
                    src: "/icons/apple-touch-icon-180x180.png",
                    sizes: "180x180",
                    type: "image/png",
                    purpose: "any",
                },
            ],
        },
        workbox: {
            navigateFallback: "/",
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },

    css: [
        "swiper/css",
        "~/assets/css/tailwind.css",
        "~/assets/css/style.css",
        "vue-toastification/dist/index.css",
        "animate.css/animate.min.css",
    ],

    components: [
        {
            path: "~/components",
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
            API_BASE_URL:
                process.env.API_BASE_URL ?? "https://hcareapi.liara.run",
        },
    },

    compatibilityDate: "2024-08-24",

    plugins: ["~/plugins/tanstack.ts"],

    modules: ["@nuxt/image", "@vite-pwa/nuxt"],
});
