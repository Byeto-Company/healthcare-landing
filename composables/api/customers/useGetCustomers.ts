import { useInfiniteQuery, useQuery } from "@tanstack/vue-query";
import axios from "~/configs/axios.config";
import { API_ENDPOINTS, QUERY_KEYS } from "~/constants";

export type GetCustomersResponse = ApiPaginated<Customer>;

export const handleGetCustomers = async ({ offset, limit }: typeof initialPageParam) => {
    const { data } = await axios.get<GetCustomersResponse>(API_ENDPOINTS.customer.getAll, {
        params: {
            offset,
            limit
        }
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
};

export const initialPageParam = {
    limit: 10,
    offset: 0
};

const useGetCustomers = () => {
    return useInfiniteQuery({
        queryKey: [QUERY_KEYS.customers],
        queryFn: ({ pageParam }) => handleGetCustomers(pageParam),
        initialPageParam,
        getNextPageParam: (lastPage, pages) => {
            const page = pages.length + 1;

            const limit = initialPageParam.limit;

            const nextPageParams = {
                offset: page * limit - limit,
                limit
            };

            return lastPage?.next ? nextPageParams : undefined;
        }
    });
};

export default useGetCustomers;
