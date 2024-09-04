import { useQuery } from "@tanstack/vue-query"
import { API_ENDPOINTS } from "~/constants"

// methods


export const useGetCustomers = () => {

    const { $queryClient: queryClient, $axios: axios } = useNuxtApp()

    const handleGetCustomers = async () => {
        const { data } = await axios.get(API_ENDPOINTS.customer.getAll)
        return data
    }

    return useQuery({
        queryKey: ['customers'],
        queryFn: () => handleGetCustomers()
    })
}




