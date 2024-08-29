const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        extend: {
            container: {
                center: true
            },
            fontFamily: {
                "iran-yekan-x": "IRANYekanXVF, sans-serif"
            },
            boxShadow : {
                "main" : "0px 0px 80px 1px"
            },
            colors: {
                primary: {
                    DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
                    100: "hsl(var(--color-primary-100) / <alpha-value>)",
                    200: "hsl(var(--color-primary-200) / <alpha-value>)",
                    300: "hsl(var(--color-primary-300) / <alpha-value>)",
                    400: "hsl(var(--color-primary-400) / <alpha-value>)",
                    500: "hsl(var(--color-primary-500) / <alpha-value>)",
                    600: "hsl(var(--color-primary-600) / <alpha-value>)",
                    700: "hsl(var(--color-primary-700) / <alpha-value>)",
                    800: "hsl(var(--color-primary-800) / <alpha-value>)",
                    900: "hsl(var(--color-primary-900) / <alpha-value>)",
                    950: "hsl(var(--color-primary-950) / <alpha-value>)"
                },
                secondary: {
                    DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
                    100: "hsl(var(--color-secondary-100) / <alpha-value>)",
                    200: "hsl(var(--color-secondary-200) / <alpha-value>)",
                    300: "hsl(var(--color-secondary-300) / <alpha-value>)",
                    400: "hsl(var(--color-secondary-400) / <alpha-value>)",
                    500: "hsl(var(--color-secondary-500) / <alpha-value>)",
                    600: "hsl(var(--color-secondary-600) / <alpha-value>)",
                    700: "hsl(var(--color-secondary-700) / <alpha-value>)",
                    800: "hsl(var(--color-secondary-800) / <alpha-value>)",
                    900: "hsl(var(--color-secondary-900) / <alpha-value>)",
                    950: "hsl(var(--color-secondary-950) / <alpha-value>)"
                }
            },
            borderRadius: {
                100: '10px',
                150: '15px',
                200: '20px',
                250: '25px',
                360: '999999999px',
            }
        }
    },
    plugins: [
        plugin(function({ addUtilities }) {
            addUtilities({
                ".text-gradient": {
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent"
                },
                ".flex-center": {
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center"
                },
                ".flex-col-center": {
                    display: "flex",
                    "flex-direction": "column",
                    "justify-content": "center",
                    "align-items": "center"
                }
            });
        })
    ]
};