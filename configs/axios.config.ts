import axiosOriginal from "axios";

const axios = axiosOriginal.create({
    baseURL: 'https://health.liara.run',
    timeout: 20000,
});

export default axios

