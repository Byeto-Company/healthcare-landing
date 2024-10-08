// imports

import { useQuery } from "@tanstack/vue-query";
import axios from "~/configs/axios.config";
import { API_ENDPOINTS, QUERY_KEYS } from "~/constants";

// types

type GetHomepageResponse = HomePage

// methods

const handleGetHomepage = async () => {
    const { data } = await axios.get<GetHomepageResponse>(API_ENDPOINTS.homepage.get)
    return data
}

// composable

const useGetHomepage = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.homepage],
        queryFn: () => handleGetHomepage()
    })
}

export default useGetHomepage
