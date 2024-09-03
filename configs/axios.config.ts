import axios, { AxiosError, type AxiosResponse } from "axios";
import { useRouter } from "vue-router";

const config = useRuntimeConfig()
const router = useRouter()

const axiosInstance = axios.create({
    baseURL: 'https://health.liara.run',
    timeout: 20000,
    timeoutErrorMessage: 'خطای سرور',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const handleResponseError = async (cb: Promise<AxiosResponse>) => {
    try {
        return cb;
    } catch (error) {
        const err = error as AxiosError;
        return err.response?.data;
    }
}

export default axiosInstance

