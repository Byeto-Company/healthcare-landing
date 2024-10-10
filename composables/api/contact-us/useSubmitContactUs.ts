// imports

import { useMutation } from "@tanstack/vue-query";
import axios from "~/configs/axios.config";
import { API_ENDPOINTS } from "~/constants";

// types

export type SubmitContactUsRequest = {
    full_name: string;
    subject: string;
    email: string;
    message: string;
};

// methods

export const handleSubmitContactUs = async ({
    full_name,
    email,
    message,
    subject,
}: SubmitContactUsRequest) => {
    const payload = {
        full_name,
        email,
        message,
        subject,
    };

    const { data } = await axios.post(API_ENDPOINTS.contactUs.submit, payload);
    return data;
};

// composable

const useSubmitContactUs = () => {
    return useMutation({
        mutationFn: (data: SubmitContactUsRequest) =>
            handleSubmitContactUs({ ...data }),
    });
};

export default useSubmitContactUs;
