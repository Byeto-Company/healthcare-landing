// imports

import { useQuery } from "@tanstack/vue-query";
import axios from "~/configs/axios.config";
import { API_ENDPOINTS, QUERY_KEYS } from "~/constants";

// types

type GetContentResponse = Content

// methods

export const handleGetContent = async () => {
    const { data } = await axios.get<GetContentResponse>(API_ENDPOINTS.content.get);
    return data;
};

// composable

const useGetContent = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.content],
        queryFn: () => handleGetContent()
    });
};

export default useGetContent;
