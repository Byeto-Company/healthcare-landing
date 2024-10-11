// imports

import { useMutation } from "@tanstack/vue-query";
import axios from "~/configs/axios.config";
import { API_ENDPOINTS } from "~/constants";

// types

export type SubmitDemoRequest = {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    company_name: string;
    module_name: string;
    message: string;
};

// methods

export const handleSubmitDemo = async ({
    first_name,
    company_name,
    email,
    last_name,
    message,
    module_name,
    phone_number,
}: SubmitDemoRequest) => {
    const payload = {
        full_name: `${first_name} ${last_name}`,
        email,
        phone_number,
        company_name,
        message,
        module_name,
    };

    const { data } = await axios.post(API_ENDPOINTS.demo.submit, payload);
    return data;
};

// composable

const useSubmitDemo = () => {
    return useMutation({
        mutationFn: (data: SubmitDemoRequest) => handleSubmitDemo({ ...data }),
    });
};

export default useSubmitDemo;
