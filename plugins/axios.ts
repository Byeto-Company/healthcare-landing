import axios from "axios";
import { useRouter } from "vue-router";

export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()
    const router = useRouter()

    const axiosInstance = axios.create({
        baseURL: config.public.API_BASE_URL,
        timeout: 20000,
        timeoutErrorMessage: 'خطای سرور',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    axiosInstance.interceptors.response.use(
        response => {

            const { data } = response

            if ('message' in data) {
                if (data.status >= 200 && data.status <= 210) {
                    toast.success(data.message)
                } else if (data.status >= 400 && data.status <= 500) {
                    toast.error(data.message)
                }
            }

            return Promise.resolve(response)
        },
        error => {

            if (error instanceof axios.Cancel) {
                return Promise.reject(error)
            }

            if ('response' in error && 'message' in error.response['data']) {
                toast.error(error.response['data'].message)
            }

            switch (error.code) {
                case 'ERR_NETWORK':
                    toast.error('خطای اتصال :(')
                    return Promise.reject({
                        response: {
                            data: {
                                error: error.message
                            }
                        },
                    })
                case 'ECONNABORTED':
                    return Promise.reject({
                        response: {
                            data: {
                                code: error.code,
                                error: error.message
                            }
                        }
                    })
            }

            const { status } = error.response

            // Show the user a 500 error
            if (status >= 500) {
                return Promise.reject({
                    response: {
                        data: {
                            code: error.code,
                            error: error.message
                        }
                    }
                })
            }

            if (status === 401) {
                toast.error('لطفا ابتدا وارد حساب کاربری خود شوید')
                setToken('')
                router.replace('/login')
            }


            return Promise.reject(error)
        }
    )

    return {
        provide: {
            axios: axiosInstance,
        },
    };
});