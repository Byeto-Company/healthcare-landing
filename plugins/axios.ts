import axios from "axios";

export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()

    const axiosInstance = axios.create({
        baseURL: config.public.API_BASE_URL,
        timeout: 20000,
        timeoutErrorMessage: 'خطای سرور',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    axiosInstance.interceptors.response.use()

    return {
        provide: {
            axios: axiosInstance,
        },
    };
});