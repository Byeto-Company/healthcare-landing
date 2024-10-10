// imports

import { useQuery } from "@tanstack/vue-query";
import axios from "~/configs/axios.config";
import { API_ENDPOINTS, QUERY_KEYS } from "~/constants";

// types

export type GetProductResponse = {
    id: number;
    name: string;
    slug: string;
    description: string;
    category: {
        id: number;
        name: string;
        breadcrumb: string[];
    };
    thumbnail: string;
    features_list: string[];
    capability_list: string[];
    categories: {
        id: number;
        name: string;
        product_list: {
            id: number;
            name: string;
            product_icon_photo: string;
            slug: string;
        }[];
    }[];
};

type GetProductRequest = {
    slug: string;
};

// methods

const handleGetProduct = async ({ slug }: GetProductRequest) => {
    const { data } = await axios.get<GetProductResponse>(
        `${API_ENDPOINTS.product.get}/${slug}`
    );
    return data;
};

// composable

const useGetProduct = (prdocutSlug: ComputedRef<string>) => {
    return useQuery({
        queryKey: [QUERY_KEYS.product, prdocutSlug],
        queryFn: () => handleGetProduct({ slug: prdocutSlug.value }),
    });
};

export default useGetProduct;
