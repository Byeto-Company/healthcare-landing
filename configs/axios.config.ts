import axiosOriginal from "axios";

const axios = axiosOriginal.create({
    baseURL: "http://38.54.84.112:8000",
    timeoutErrorMessage: "خطای سرور",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axios;
