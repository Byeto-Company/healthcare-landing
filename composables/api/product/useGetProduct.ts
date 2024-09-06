// imports

import { useQuery } from "@tanstack/vue-query";
import axios from "~/configs/axios.config";
import { API_ENDPOINTS, QUERY_KEYS } from "~/constants";

// types

type GetProductsResponse = Product

type GetProductRequest = {
    slug: string
}

// methods

const handleGetProduct = async ({ slug }: GetProductRequest) => {
    const { data } = await axios.get<GetProductsResponse>(API_ENDPOINTS.product.getOne, {
        params: {
            slug
        }
    })
    return data
}

// composable

const useGetProduct = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.product],
        queryFn: ({ pageParam }) => handleGetProduct(pageParam)
    })
}

export default useGetProduct
