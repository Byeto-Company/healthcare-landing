import axiosOriginal from "axios";

const axios = axiosOriginal.create({
    baseURL: "https://hcareapi.liara.run",
    timeout: 20000,
    timeoutErrorMessage: "خطای سرور",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axios;
